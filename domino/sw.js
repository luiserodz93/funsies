/* Offline support: serve the game's own files (and its fonts) from cache, refresh in the background. */
const CACHE = "la-mesa-v6";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-512.png"];
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => (k.startsWith("la-mesa-") || k.startsWith("pips-plaza-")) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  if (url.origin !== self.location.origin && !FONT_HOSTS.includes(url.hostname)) return;
  /* The game page itself: network first, so an update shows on the next launch; cache when offline. */
  if (req.mode === "navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/domino/")) {
    e.respondWith(caches.open(CACHE).then(c => fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; })
      .catch(() => c.match(req, { ignoreSearch: true }).then(h => h || c.match("./index.html")))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
