/* IT认证练习 service worker: offline cache. Assets are cached per full URL (incl. ?v=),
   so a new v= is fetched fresh; older versions of the same file are pruned.
   New SW versions skipWaiting+claim, then drop old itcert-cache-* so the first
   navigation after an update hits the network (not a stale HTML shell). sw.js
   itself is never cache-first, so later updates are not pinned to an old script. */
const CACHE = "itcert-cache-202611112155";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  await Promise.all((await caches.keys()).filter((key) => key.startsWith("itcert-cache-") && key !== CACHE).map((key) => caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  // 管理页离线不可回退为练习首页；识别引擎依赖固定路径，更新必须刷新。

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (/\/(?:functions|storage|auth|rest)\/v1\//.test(url.pathname)) return;
  if (url.pathname.endsWith("/sw.js") || url.pathname.endsWith("sw.js") || url.pathname.endsWith("admin.html") || /\/js\/pdf-import-|\/js\/vendor\/pdf-import\//.test(url.pathname)) {
    e.respondWith(fetch(req)); return;
  }
  if (req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html")) {
    // stale-while-revalidate: repeat visits paint from cache, then refresh in the background
    e.respondWith((async () => {
      const cached = await caches.match("./") || await caches.match(req);
      const net = fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./", copy));
        }
        return res;
      }).catch(() => cached);
      return cached || net;
    })());
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
