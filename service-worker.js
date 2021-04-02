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
    "revision": "43723f6d146060332aa9594b04c7dcc5"
  },
  {
    "url": "artikel.html",
    "revision": "ca328fae33670d7b7e1dd1184810a92a"
  },
  {
    "url": "artikel/1.html",
    "revision": "195df94b89c2b256abec3a7e4c0dbb2a"
  },
  {
    "url": "artikel/2.html",
    "revision": "3cabad94de6d906650854b365065d411"
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
    "url": "assets/js/10.8c416432.js",
    "revision": "98ecd9ea37d5824f1c48c15586957b6c"
  },
  {
    "url": "assets/js/11.af06c16a.js",
    "revision": "d6913fb7237bdeff8f70da5a1f2036fb"
  },
  {
    "url": "assets/js/12.8df12f01.js",
    "revision": "f6cc6cd5a23eac0cf839937bd250ece3"
  },
  {
    "url": "assets/js/13.6b3586b2.js",
    "revision": "fe13a7bf1adb72915281fe22342260f2"
  },
  {
    "url": "assets/js/14.46606704.js",
    "revision": "5524f52312aaf9f6e65563ef783eea53"
  },
  {
    "url": "assets/js/2.d732bae5.js",
    "revision": "41e74d6bbe088c569cfcc5476b159352"
  },
  {
    "url": "assets/js/3.32c07843.js",
    "revision": "3507c918d9092f6870a976114ded3526"
  },
  {
    "url": "assets/js/4.b919cae9.js",
    "revision": "379217c5e1c3fc40277a3d4b75814b81"
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
    "url": "assets/js/9.a253d7f9.js",
    "revision": "26ba86862fb4385fe6287fbe0a58330c"
  },
  {
    "url": "assets/js/app.1808ce88.js",
    "revision": "3acebd0869a1cfbbece370821215f6e7"
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
    "revision": "81eed1d33ce0f5a0f2b075ea29c1d987"
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
    "revision": "c4300b26468347f4c3dce2e4041c78c2"
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
