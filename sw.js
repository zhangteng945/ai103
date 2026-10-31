/* IT认证练习 service worker: offline cache. Assets are cached per full URL (incl. ?v=),
   so a new v= is fetched fresh; older versions of the same file are pruned. */
const CACHE = "itcert-cache-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html")) {
    // network-first for the page so new versions arrive
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put("./", copy));
        return res;
      }).catch(() => caches.match("./").then((r) => r || caches.match(req)))
    );
    return;
  }
  e.respondWith(
    caches.open(CACHE).then((c) =>
      c.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok) {
          c.put(req, res.clone());
          c.keys().then((ks) => ks.forEach((k) => {
            const u = new URL(k.url);
            if (u.pathname === url.pathname && u.search !== url.search) c.delete(k);
          }));
        }
        return res;
      }))
    )
  );
});
