import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import vm from 'node:vm';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
for (const [, attributes, script] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
  if (!attributes.includes('application/ld+json')) new vm.Script(script);
}
const manifest = JSON.parse(await readFile(new URL('../dist/manifest.webmanifest', import.meta.url)));
for (const icon of manifest.icons) await access(new URL(`../dist${icon.src}`, import.meta.url));
const worker = await readFile(new URL('../dist/sw.js', import.meta.url), 'utf8');
assert(!worker.includes('__BUILD_VERSION__'));
const handlers = {};
const stored = new Map();
const deleted = [];
let claimed = false;
let fetched = 0;
let cacheName;
const cache = {
  async addAll(paths) { for (const path of paths) stored.set(path, `cached:${path}`); },
  async match(path) { return stored.get(path); },
};
vm.runInNewContext(worker, {
  URL,
  self: {
    location: { origin: 'https://local-cinema.online' },
    clients: { async claim() { claimed = true; } },
    addEventListener(name, fn) { handlers[name] = fn; },
  },
  caches: {
    async open(name) { cacheName = name; return cache; },
    async keys() { return ['local-cinema-old', cacheName, 'unrelated-cache']; },
    async delete(key) { deleted.push(key); },
  },
  async fetch() { fetched++; throw new Error('Offline'); },
});
let completion;
handlers.install({waitUntil(promise) { completion = promise; }});
await completion;
for (const path of stored.keys()) await access(new URL(`../dist/${path === '/' ? 'index.html' : path.slice(1)}`, import.meta.url));
handlers.activate({waitUntil(promise) { completion = promise; }});
await completion;
assert.deepEqual(deleted, ['local-cinema-old']);
assert(claimed);
async function request(url, mode = 'navigate', method = 'GET') {
  let response;
  handlers.fetch({request: {url, mode, method}, respondWith(promise) { response = promise; }});
  return response;
}
assert.equal(await request('https://local-cinema.online/?launch=1'), 'cached:/');
assert.equal(await request('https://local-cinema.online/index.html'), 'cached:/');
assert.equal(await request('https://local-cinema.online/icons/icon-192.png', 'no-cors'), 'cached:/icons/icon-192.png');
assert.equal(await request('https://local-cinema.online/missing'), undefined);
assert.equal(await request('https://www.googletagmanager.com/gtag/js', 'no-cors'), undefined);
assert.equal(await request('blob:https://local-cinema.online/movie', 'no-cors'), undefined);
assert.equal(await request('https://local-cinema.online/', 'navigate', 'POST'), undefined);
assert.equal(fetched, 0);
console.log('PWA checks passed: script syntax, built assets, offline routes, cache cleanup, and excluded requests.');
