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
    "revision": "809b29bad94f3e440c69b73883eb6c09"
  },
  {
    "url": "assets/css/0.styles.2c20c2b5.css",
    "revision": "6c28a465c0b7a34bf38019fbb360947b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c5e9cac0.js",
    "revision": "933ab801cba6f4bca76efdc3d20ff104"
  },
  {
    "url": "assets/js/11.68f33f5b.js",
    "revision": "10848c2fe7f9abc222a7eb2ecd89dc4c"
  },
  {
    "url": "assets/js/12.d4e82a3e.js",
    "revision": "076d201e691bab1e468b037c9d431345"
  },
  {
    "url": "assets/js/2.df86eea9.js",
    "revision": "dac3ed59c316107b46ec07caf99e700f"
  },
  {
    "url": "assets/js/3.85b58764.js",
    "revision": "27b1a23439585b076945d69b831c2b39"
  },
  {
    "url": "assets/js/4.50b26f25.js",
    "revision": "214108fdcbf00e3c5a0b3045357e8a4a"
  },
  {
    "url": "assets/js/5.ddcccd92.js",
    "revision": "257f11cb9b24a9e0a9764b68b7c011c3"
  },
  {
    "url": "assets/js/6.c26a46d1.js",
    "revision": "10a219b110ac18350a3baa2dc38f3cf7"
  },
  {
    "url": "assets/js/7.77ac737a.js",
    "revision": "e5a7c256a6145ef3211850610eafab95"
  },
  {
    "url": "assets/js/8.4491eb9c.js",
    "revision": "f142929dd6f9ac0ac788138518b4cbf3"
  },
  {
    "url": "assets/js/9.4a9636df.js",
    "revision": "9787f29cc8c89d1bb1ec11d78bf1df84"
  },
  {
    "url": "assets/js/app.28bf962f.js",
    "revision": "51f2f740698a9a970a1a92d1c9cbb42c"
  },
  {
    "url": "index.html",
    "revision": "1223f5252dee45a42d9c573485c86807"
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
    "revision": "7fb415f86b337c5cca86b2a85f078783"
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
