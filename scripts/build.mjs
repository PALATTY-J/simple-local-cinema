import { access, copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const files = ['index.html', '404.html', 'manifest.webmanifest', '_headers', 'icons/app.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

// Site-specific search metadata is optional for copies of the player.
for (const file of ['robots.txt', 'sitemap.xml']) {
  try {
    await access(new URL(file, root));
    files.push(file);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

// Check all sources before replacing the generated deployment folder.
await Promise.all(files.map(file => access(new URL(file, root))));
await access(new URL('sw.js', root));
await rm(output, { recursive: true, force: true });
await mkdir(new URL('icons/', output), { recursive: true });
await Promise.all(files.map(file => copyFile(new URL(file, root), new URL(file, output))));

// Keep analytics out of the editable source file and inject it only in deploy output.
const deployedIndex = new URL('index.html', output);
let html = await readFile(deployedIndex, 'utf8');
if (html.includes('googletagmanager.com/gtag')) {
  throw new Error('Remove the Google Analytics tag from index.html; it belongs in the deployment build only.');
}
// Optional local analytics snippet is intentionally excluded from Git.
let analyticsTag = '';
try {
  analyticsTag = await readFile(new URL('analytics.local.html', root), 'utf8');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
if (!html.includes('</head>')) throw new Error('Cannot inject deployment analytics: index.html has no closing head tag.');
html = html.replace('</head>', `${analyticsTag}</head>`);
await writeFile(deployedIndex, html);

// Each deployed asset change creates a new, complete offline cache.
const hash = createHash('sha256');
for (const file of files) hash.update(await readFile(new URL(file, output)));
const worker = await readFile(new URL('sw.js', root), 'utf8');
hash.update(worker);
await writeFile(new URL('sw.js', output), worker.replace('__BUILD_VERSION__', hash.digest('hex').slice(0, 16)));

console.log(`Prepared ${fileURLToPath(output)}`);
console.log(`Public files: ${(await readdir(output)).join(', ')}`);
