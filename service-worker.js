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
    "revision": "94d3107ebca0bf079a39be74369bc6b5"
  },
  {
    "url": "artikel.html",
    "revision": "82e17b151c1cfad0bb3664ddbb97bc91"
  },
  {
    "url": "artikel/2.html",
    "revision": "e60d9e0506f3f8f340efb1289475999b"
  },
  {
    "url": "artikel/3.html",
    "revision": "5fb4c5c9bb18816d21783d06c3afc150"
  },
  {
    "url": "artikel/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "28d9e2a4dc73917f9ce1909610d27570"
  },
  {
    "url": "assets/css/0.styles.6eec9dc6.css",
    "revision": "d63196b7fab519e50fcf1f9b3825804d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3694608a.js",
    "revision": "d570cffebfb773037e1bfa0b7ded7df4"
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
    "url": "assets/js/4.f6d799c1.js",
    "revision": "830fdc591c45fc58c0be5eb0c7770504"
  },
  {
    "url": "assets/js/5.32f49f3f.js",
    "revision": "f49adf61eedb0ed6bd718c7093df2173"
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
    "url": "assets/js/app.b63fdc83.js",
    "revision": "67797b02bb5c6c23fc3adae7d6c3899e"
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
    "revision": "0f5d62d6d4113ee34e1e68847a56ff83"
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
    "revision": "17574bd0894530dc3a47d1e8cd5006bd"
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
