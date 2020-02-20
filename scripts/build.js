const { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } = require('fs');
const { join, resolve } = require('path');

const root = resolve(__dirname, '..');
const publicDir = join(root, 'public');

rmSync(publicDir, { force: true, recursive: true });
mkdirSync(join(publicDir, 'src', 'assets'), { recursive: true });

copyFileSync(join(root, 'index.html'), join(publicDir, 'index.html'));
copyFileSync(join(root, 'index.html'), join(publicDir, '404.html'));
copyFileSync(join(root, 'src', 'styles.css'), join(publicDir, 'src', 'styles.css'));

const imagesDir = join(root, 'src', 'assets', 'images');
if (existsSync(imagesDir)) {
  cpSync(imagesDir, join(publicDir, 'src', 'assets', 'images'), { recursive: true });
}

console.log(`Built static site in ${publicDir}`);
