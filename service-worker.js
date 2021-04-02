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
    "revision": "6a258d89f53f8114d822affd15f920d0"
  },
  {
    "url": "artikel.html",
    "revision": "7417281b315d78ddbbfa7aed83293105"
  },
  {
    "url": "assets/css/0.styles.bc609e6e.css",
    "revision": "e8df766da45dd81e6542d3bb268b1fe6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.109b11ec.js",
    "revision": "92103a5c7af957c428e7361d9f00b487"
  },
  {
    "url": "assets/js/2.46905bb2.js",
    "revision": "bdce736e793627192242bf474d58fcb3"
  },
  {
    "url": "assets/js/3.3fa906df.js",
    "revision": "bfbafe46dd17ceaf130205f4ad1d37db"
  },
  {
    "url": "assets/js/4.7fe12137.js",
    "revision": "9b6d4f69ab1e1d2e732fa4f18ff52938"
  },
  {
    "url": "assets/js/5.753e5c04.js",
    "revision": "cc1500a500edfe925e9125a29e0952b5"
  },
  {
    "url": "assets/js/6.8878878c.js",
    "revision": "5cde71c9c5b5879c940a757ad05ee59e"
  },
  {
    "url": "assets/js/7.e3f2f305.js",
    "revision": "5b9dd7743a7017069c7b47745c1794b2"
  },
  {
    "url": "assets/js/8.b71c03bf.js",
    "revision": "4bf81b8c085c5286804eb9a756da5274"
  },
  {
    "url": "assets/js/9.ceed4495.js",
    "revision": "616f6f11c5c670c8770ba92246c1be45"
  },
  {
    "url": "assets/js/app.ef7b7897.js",
    "revision": "d3d03a0ebe66207fb75fb8089128d241"
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
    "revision": "10e84aaafe69197e39326d8d1993f98d"
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
    "revision": "2ac5a56a020879f7f574c226299d28a4"
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
