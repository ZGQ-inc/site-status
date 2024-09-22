if (!self.define) {
  let e, i = {};
  const s = (s, n) => (s = new URL(s + ".js", n).href, i[s] || new Promise((i => {
    if ("document" in self) {
      const e = document.createElement("script");
      e.src = s, e.onload = i, document.head.appendChild(e)
    } else e = s, importScripts(s), i()
  })).then((() => {
    let e = i[s];
    if (!e) throw new Error(`Module ${s} didn’t register its module`);
    return e
  })));
  self.define = (n, t) => {
    const r = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (i[r]) return;
    let c = {};
    const f = e => s(e, r),
      o = {
        module: {
          uri: r
        },
        exports: c,
        require: f
      };
    i[r] = Promise.all(n.map((e => o[e] || f(e)))).then((e => (t(...e), c)))
  }
}
define(["./workbox"], (function(e) {
  "use strict";
  self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
    url: "assets/index.css",
    revision: null
  }, {
    url: "assets/index.js",
    revision: null
  }, {
    url: "index.html",
    revision: "941b15cbb9c5e691edb8469703a97a78"
  }, {
    url: "registerSW.js",
    revision: "1872c500de691dce40960bb85481de07"
  }, {
    url: "images/favicon.png",
    revision: "6275052b6cf906f322b5d224dfd0a2f0"
  }, {
    url: "manifest.webmanifest",
    revision: "2f02d97e8e74650b2fa82c2a9dfc52b1"
  }], {}), e.cleanupOutdatedCaches(), e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))), e.registerRoute(/(.*?)\.(woff2|woff|ttf)/, new e.CacheFirst({
    cacheName: "file-cache",
    plugins: []
  }), "GET"), e.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, new e.CacheFirst({
    cacheName: "image-cache",
    plugins: []
  }), "GET")
}));
