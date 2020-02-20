const { createServer } = require('http');
const { createReadStream, existsSync, statSync } = require('fs');
const { extname, join, resolve } = require('path');

const root = resolve(process.cwd(), process.argv[2] || '.');
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function sendFile(res, filePath) {
  res.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath)] || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {
  const requestPath = decodeURIComponent(req.url.split('?')[0]);
  const normalizedPath = requestPath === '/' ? '/index.html' : requestPath;
  let filePath = join(root, normalizedPath);

  if (!filePath.startsWith(root) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(root, '404.html');
  }

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    sendFile(res, filePath);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
}).listen(port, '127.0.0.1', () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}/`);
});
