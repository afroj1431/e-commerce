const CACHE_NAME = 'minishop-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  'https://via.placeholder.com/200'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching assets');
      return cache.addAll(assets);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});