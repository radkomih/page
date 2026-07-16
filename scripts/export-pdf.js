const { createServer } = require('http');
const { spawn } = require('child_process');
const {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
  createReadStream,
} = require('fs');
const { tmpdir } = require('os');
const { extname, join, resolve } = require('path');

const root = resolve(__dirname, '..');
const publicDir = join(root, 'public');
const outputPath = join(publicDir, 'cv.pdf');
const chromeCandidates = [
  process.env.CHROME_BIN,
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const mimeTypes = {
  '.css': 'text/css',
  '.gif': 'image/gif',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function findChrome() {
  return chromeCandidates.find(candidate => existsSync(candidate));
}

function serveFile(req, res) {
  const requestPath = decodeURIComponent(req.url.split('?')[0]);
  const normalizedPath = requestPath === '/' ? '/index.html' : requestPath;
  const filePath = join(publicDir, normalizedPath);

  if (!filePath.startsWith(publicDir) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  res.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath)] || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(res);
}

function listen(server) {
  return new Promise((resolveListen, rejectListen) => {
    server.once('error', rejectListen);
    server.listen(0, '127.0.0.1', () => {
      server.off('error', rejectListen);
      resolveListen(server.address());
    });
  });
}

function delay(ms) {
  return new Promise(resolveDelay => {
    setTimeout(resolveDelay, ms);
  });
}

function waitForExit(child) {
  if (child.exitCode !== null || child.signalCode !== null) {
    return Promise.resolve();
  }

  return new Promise(resolveExit => {
    child.once('exit', resolveExit);
  });
}

async function waitForDevToolsPort(userDataDir) {
  const portFile = join(userDataDir, 'DevToolsActivePort');

  for (let attempts = 0; attempts < 100; attempts += 1) {
    if (existsSync(portFile)) {
      const [port] = readFileSync(portFile, 'utf8').trim().split('\n');
      return port;
    }

    await delay(50);
  }

  throw new Error('Timed out waiting for Chrome DevTools port.');
}

async function getPageWebSocketUrl(port) {
  for (let attempts = 0; attempts < 100; attempts += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await response.json();
      const page = targets.find(target => target.type === 'page');

      if (page?.webSocketDebuggerUrl) {
        return page.webSocketDebuggerUrl;
      }
    } catch {
      // Chrome can take a moment to start accepting DevTools HTTP requests.
    }

    await delay(50);
  }

  throw new Error('Timed out waiting for Chrome page target.');
}

function createCdpClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  let nextId = 1;
  const callbacks = new Map();
  const eventListeners = new Map();

  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);

    if (message.id && callbacks.has(message.id)) {
      const { resolveMessage, rejectMessage } = callbacks.get(message.id);
      callbacks.delete(message.id);

      if (message.error) {
        rejectMessage(new Error(message.error.message));
        return;
      }

      resolveMessage(message.result);
      return;
    }

    const listeners = eventListeners.get(message.method);
    if (listeners) {
      listeners.forEach(listener => listener(message.params));
    }
  });

  return {
    open: new Promise((resolveOpen, rejectOpen) => {
      socket.addEventListener('open', resolveOpen, { once: true });
      socket.addEventListener('error', rejectOpen, { once: true });
    }),
    close() {
      socket.close();
    },
    once(method) {
      return new Promise(resolveEvent => {
        const listeners = eventListeners.get(method) || new Set();
        const listener = params => {
          listeners.delete(listener);
          resolveEvent(params);
        };

        listeners.add(listener);
        eventListeners.set(method, listeners);
      });
    },
    send(method, params = {}) {
      const id = nextId;
      nextId += 1;

      return new Promise((resolveMessage, rejectMessage) => {
        callbacks.set(id, { resolveMessage, rejectMessage });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
  };
}

async function main() {
  if (!existsSync(join(publicDir, 'index.html'))) {
    throw new Error('Missing public/index.html. Run `npm run build` before exporting the PDF.');
  }

  const chrome = findChrome();
  if (!chrome) {
    throw new Error('Chrome or Chromium was not found. Set CHROME_BIN to a browser executable.');
  }

  const server = createServer(serveFile);
  const { port } = await listen(server);
  const url = `http://127.0.0.1:${port}/`;
  const userDataDir = mkdtempSync(join(tmpdir(), 'cv-pdf-chrome-'));
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--run-all-compositor-stages-before-draw',
    '--window-size=1440,2200',
    '--remote-debugging-port=0',
    `--user-data-dir=${userDataDir}`,
    'about:blank',
  ];

  console.log(`Exporting ${url} to ${outputPath}`);

  const child = spawn(chrome, args, { stdio: ['ignore', 'ignore', 'inherit'] });

  try {
    const devToolsPort = await waitForDevToolsPort(userDataDir);
    const webSocketUrl = await getPageWebSocketUrl(devToolsPort);
    const cdp = createCdpClient(webSocketUrl);
    await cdp.open;

    await cdp.send('Page.enable');
    await cdp.send('Emulation.setEmulatedMedia', { media: 'print' });

    const loaded = cdp.once('Page.loadEventFired');
    await cdp.send('Page.navigate', { url });
    await loaded;

    await cdp.send('Runtime.evaluate', {
      expression: 'document.fonts ? document.fonts.ready : Promise.resolve()',
      awaitPromise: true,
    });

    const pdf = await cdp.send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.27,
      paperHeight: 11.69,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      scale: 1,
      preferCSSPageSize: true,
    });

    writeFileSync(outputPath, Buffer.from(pdf.data, 'base64'));
    cdp.close();
  } finally {
    child.kill();
    server.close();
    await waitForExit(child);
    rmSync(userDataDir, { force: true, recursive: true });
  }

  console.log(`PDF written to ${outputPath}`);
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
