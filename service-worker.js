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
    "revision": "7a057730651458ce1f8890471dc5f640"
  },
  {
    "url": "assets/css/0.styles.6a4b0e61.css",
    "revision": "de23260b49613a9b58dd10adc624e323"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4b195d46.js",
    "revision": "1578a2f5aa2369d92e733d00a092d5ab"
  },
  {
    "url": "assets/js/11.720b9080.js",
    "revision": "79e41a19b9f83dc4131b17d63aff1848"
  },
  {
    "url": "assets/js/2.9d2150e9.js",
    "revision": "fdf7f34386db58ed4cf4242089cf85d5"
  },
  {
    "url": "assets/js/3.2de0d475.js",
    "revision": "56c21ec9b2735ee550a61a513ee7b098"
  },
  {
    "url": "assets/js/4.af2f8b77.js",
    "revision": "ca43db42346b2c2062732440e43033e2"
  },
  {
    "url": "assets/js/5.f3d9d90b.js",
    "revision": "13ca8270c941622d111c1d708d402f5f"
  },
  {
    "url": "assets/js/6.ad67ac40.js",
    "revision": "dd3c1ff3f8c5994302f5211e891d2008"
  },
  {
    "url": "assets/js/7.cacc9c76.js",
    "revision": "8f5b15ca2883b44e4b9cd156556b9337"
  },
  {
    "url": "assets/js/8.19160243.js",
    "revision": "697b91a6505ad7b1b55412a2fbba4c8d"
  },
  {
    "url": "assets/js/9.94ffd073.js",
    "revision": "b5de6d41eef119ff3cb66c5a84422c3c"
  },
  {
    "url": "assets/js/app.b0ac85c7.js",
    "revision": "b000345780093e55b9db1a3bf3ff79de"
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
    "revision": "89fbff66c079881c367c65a18d3f81fc"
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
    "revision": "799b112f9349fa3e679440b782331db0"
  },
  {
    "url": "snowfluke.svg",
    "revision": "d1a367bae69d1f46daa1a803d6be05c9"
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
