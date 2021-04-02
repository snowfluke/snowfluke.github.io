/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ec8ac89a600a753b60d1d84b96a7a9fd"
  },
  {
    "url": "artikel.html",
    "revision": "a6e68deb9adfcc5c11f9cd4547b6d120"
  },
  {
    "url": "artikel/1.html",
    "revision": "c105903d7093624f8244c72a7e57a7a8"
  },
  {
    "url": "artikel/2.html",
    "revision": "65f9c718eef84d13abc06e5e29fa3b7d"
  },
  {
    "url": "assets/css/0.styles.d1afac7c.css",
    "revision": "50e25d388ba8ce4402a700ad6b56d217"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.505f84d7.js",
    "revision": "c5761c88166888cd97845eec30f86828"
  },
  {
    "url": "assets/js/11.4978eb61.js",
    "revision": "6b721aa71773b353f73d50c936d6b9ab"
  },
  {
    "url": "assets/js/12.d18906d8.js",
    "revision": "a67b28db0797259c2d3f9d4ec05dbb47"
  },
  {
    "url": "assets/js/13.77a1f50d.js",
    "revision": "5dd94e8aed25c199df3aa8c803ebe18d"
  },
  {
    "url": "assets/js/2.d1d0c64b.js",
    "revision": "63ffec71984f93e7f5ad420ebe23dc52"
  },
  {
    "url": "assets/js/3.a4eb7406.js",
    "revision": "720f35d00d8e60f51dbaee708d259ef6"
  },
  {
    "url": "assets/js/4.533e5a42.js",
    "revision": "1c334534c766838531422e4c29529b5a"
  },
  {
    "url": "assets/js/5.6b530dcc.js",
    "revision": "0d2b24cf2d849f9d9e8528d8bce2ddeb"
  },
  {
    "url": "assets/js/6.938660c2.js",
    "revision": "976f5084962de9f6cf06eab270ddaae6"
  },
  {
    "url": "assets/js/7.96955003.js",
    "revision": "d31c97b59d5ec9f08cc6830e2e318a1e"
  },
  {
    "url": "assets/js/8.0a5803c7.js",
    "revision": "385d90ad8f69921523cb41127b52cb7e"
  },
  {
    "url": "assets/js/9.06d1e618.js",
    "revision": "00a5296df73c77b9bee1c235e663dd37"
  },
  {
    "url": "assets/js/app.c104d637.js",
    "revision": "b2d320014e93251122a1ead954d79c7d"
  },
  {
    "url": "awal.png",
    "revision": "4146b247e212f791559c597c5039a11b"
  },
  {
    "url": "awalLogo.png",
    "revision": "9c5b0d2c33bff6bfcefb9d25b798811a"
  },
  {
    "url": "index.html",
    "revision": "36df28300f9ca1a4951e1af64d3d3abe"
  },
  {
    "url": "logo/antron-01.png",
    "revision": "df9cb0520df6a8d8b750f0e647c3f1f2"
  },
  {
    "url": "logo/breaktain-01.png",
    "revision": "e3447201f771a164829745f40966c34a"
  },
  {
    "url": "logo/catowlyinyang-01.jpg",
    "revision": "70a41a51578ec186c2c63b366cb7bf68"
  },
  {
    "url": "logo/Hxme-01.png",
    "revision": "cd23dde1dda6946202fe924405998ec0"
  },
  {
    "url": "logo/inspectus-01.png",
    "revision": "1855632b2395c34ea35651afe496a31c"
  },
  {
    "url": "logo/knifecode-01.png",
    "revision": "56a12b54936d74c67075ad2163888efe"
  },
  {
    "url": "logo/monday-01.png",
    "revision": "054cb8984fa6a8b00fe8cda8e6291f99"
  },
  {
    "url": "logo/oncom-01.png",
    "revision": "551c659807914f1e67582785c6f375c9"
  },
  {
    "url": "logo/Opek-01.png",
    "revision": "a50ba3e168c5c4ce10a9d920d849013b"
  },
  {
    "url": "logo/revisix-01.png",
    "revision": "0d8615ef59ac26fc5c3ed769e8d79473"
  },
  {
    "url": "logo/shi-awaru-01.png",
    "revision": "4c533f19faf335b9974364925daeb5ac"
  },
  {
    "url": "logo/Stail-01.png",
    "revision": "ebcd9203da1a057573a27b55717496c9"
  },
  {
    "url": "portfolio.html",
    "revision": "e0d68b213055f451aeb24f2c201c1ba6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
