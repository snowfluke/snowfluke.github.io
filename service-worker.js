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
    "revision": "ab8fa9d065d82d3cd4ccd07aa418ff2f"
  },
  {
    "url": "artikel.html",
    "revision": "89413313e8534f39a1249dd9788bb747"
  },
  {
    "url": "artikel/2.html",
    "revision": "2f91bfaf77782c9eeeef6ba67c4d5b0b"
  },
  {
    "url": "artikel/3.html",
    "revision": "8ee03af4d1618a9c4291c271f8859dfb"
  },
  {
    "url": "artikel/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "f0a69f260482933b12a4024b389207aa"
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
    "url": "assets/js/10.3bde99f6.js",
    "revision": "98ecd9ea37d5824f1c48c15586957b6c"
  },
  {
    "url": "assets/js/11.0710ecb0.js",
    "revision": "c1c57619c4fa243fd380b0adcd83f75d"
  },
  {
    "url": "assets/js/12.93b76a64.js",
    "revision": "a7d30d42381c7ec0ebe69d8b9e54956a"
  },
  {
    "url": "assets/js/13.4c12bb75.js",
    "revision": "b79a4dfdb2f043147eab67f73a1b7b21"
  },
  {
    "url": "assets/js/14.1351e1be.js",
    "revision": "3f92cda8a973559871f6d811ced07e87"
  },
  {
    "url": "assets/js/15.470ae69c.js",
    "revision": "b9341d66b9ec9884780e83839a4ac5ea"
  },
  {
    "url": "assets/js/2.d732bae5.js",
    "revision": "41e74d6bbe088c569cfcc5476b159352"
  },
  {
    "url": "assets/js/3.4057f28c.js",
    "revision": "ada82acf0a8453845a6ac058bc7a56c6"
  },
  {
    "url": "assets/js/4.c32d14d8.js",
    "revision": "d0b2a913ce5611f74dc536664d652f5a"
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
    "url": "assets/js/9.748a5d5f.js",
    "revision": "69ba7ae2f130b924f16bfd61d1c2d0d5"
  },
  {
    "url": "assets/js/app.fa7d3f5e.js",
    "revision": "76776dae511d63946d9e17889fcc0a44"
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
    "revision": "4839365d08c74b4ecc9321bfd529ca3a"
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
    "revision": "3a680fc571c76fcbb9557f6c60ae5217"
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
