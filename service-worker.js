// Service worker: caches the app files so the app can be installed on a phone
// and still opens when there is no internet connection.
var cacheName = "afterschool-v1";
var cacheFiles = [
    "./",
    "./index.html",
    "./style.css",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

// install: save the app files in the cache
self.addEventListener("install", function (e) {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log("[Service Worker] Caching files");
            return cache.addAll(cacheFiles);
        })
    );
});

// activate: delete old caches when the version number changes
self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (key) {
                if (key !== cacheName) return caches.delete(key);
            }));
        })
    );
});

// fetch: use the cached file if we have it, otherwise go to the network.
// Requests to the Express API (a different site) are not cached, so lessons are always fresh.
self.addEventListener("fetch", function (e) {
    if (new URL(e.request.url).origin !== self.location.origin) return;
    e.respondWith(
        caches.match(e.request).then(function (r) {
            console.log("[Service Worker] Fetching resource: " + e.request.url);
            return r || fetch(e.request);
        })
    );
});
