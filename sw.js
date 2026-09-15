// The build replaces this version with a hash of the deployed app assets.
const CACHE = 'local-cinema-__BUILD_VERSION__';
const ASSETS = ['/', '/index.html', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  // Let existing players finish using their version; never reload a playing video.
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith('local-cinema-') && key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const {request} = event;
  const url = new URL(request.url);
  // Local video blobs, analytics, and unrelated requests are never cached.
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  const appNavigation = request.mode === 'navigate' && ['/', '/index.html'].includes(url.pathname);
  if (!appNavigation && !ASSETS.includes(url.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    return (await cache.match(appNavigation ? '/' : url.pathname)) || fetch(request);
  })());
});
