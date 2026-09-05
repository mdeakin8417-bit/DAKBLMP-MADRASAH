// ============================================================
// Service Worker — caches the static app shell (CSS/JS/HTML)
// so the app can install like a native app and load instantly
// even on a flaky connection. Supabase API calls are NOT cached
// here — those always go straight to the network so data stays live.
// ============================================================

const CACHE_NAME = 'dakblmp-madrasah-v1';
const APP_SHELL = [
  './',
  './index.html',
  './css/style.css',
  './js/supabase-client.js',
  './js/i18n.js',
  './js/ui.js',
  './js/auth.js',
  './js/shell.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Never cache Supabase API/auth/storage calls — always live data
  if (url.origin.includes('supabase.co')) return;

  // Only handle same-origin GET requests for the static shell
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
