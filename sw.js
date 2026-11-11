/* IT认证练习 service worker: offline cache. Assets are cached per full URL (incl. ?v=),
   so a new v= is fetched fresh; older versions of the same file are pruned. */
const CACHE = "itcert-cache-202611111920";
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
  if (url.pathname.endsWith("admin.html") || /\/js\/pdf-import-|\/js\/vendor\/pdf-import\//.test(url.pathname)) {
    e.respondWith(fetch(req)); return;
  }
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
