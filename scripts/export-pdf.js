const { createServer } = require('http');
const { spawn } = require('child_process');
const { existsSync, statSync, createReadStream } = require('fs');
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
  const args = [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=5000',
    '--window-size=1440,2200',
    '--print-to-pdf-no-header',
    '--print-to-pdf-with-background',
    `--print-to-pdf=${outputPath}`,
    url,
  ];

  console.log(`Exporting ${url} to ${outputPath}`);

  const result = await new Promise(resolveProcess => {
    const child = spawn(chrome, args, { stdio: 'inherit' });
    child.on('close', code => resolveProcess(code));
  });

  server.close();

  if (result !== 0) {
    throw new Error(`Chrome exited with code ${result}`);
  }

  console.log(`PDF written to ${outputPath}`);
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
