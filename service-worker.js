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
    "revision": "33fd60fcd85910b3cd3b2c7c2f1fcb00"
  },
  {
    "url": "assets/css/0.styles.59f3543c.css",
    "revision": "62be816f95e818df0ab4f0303762ccc6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2273950e.js",
    "revision": "3e43af3fbf3cb8124d48adf15188470c"
  },
  {
    "url": "assets/js/11.b67f3ae0.js",
    "revision": "7ec6797a5e527c1322cdbd08041244e5"
  },
  {
    "url": "assets/js/12.03bdccbf.js",
    "revision": "73c636080221cc06d20ec043410e2270"
  },
  {
    "url": "assets/js/13.651ae092.js",
    "revision": "dd7dbfe2df905e4e35a65d6434334fbb"
  },
  {
    "url": "assets/js/14.bd27bd3d.js",
    "revision": "ea485aa94467bcd76564b075e72cb8d1"
  },
  {
    "url": "assets/js/15.c412de8e.js",
    "revision": "ac9cebd4062ce76b525e0bd9c226a3e9"
  },
  {
    "url": "assets/js/16.a8f045d3.js",
    "revision": "3a5afd4412103346f0a1b882e0decdda"
  },
  {
    "url": "assets/js/17.d854fb89.js",
    "revision": "85672a0ba4b6c99422fc0e8087ebbbf6"
  },
  {
    "url": "assets/js/18.cd5aad15.js",
    "revision": "bc7a0a32064214f2d63f06c15bd4edc7"
  },
  {
    "url": "assets/js/19.c3b202ec.js",
    "revision": "932359666bfb6fcaa8fe2e64694b210e"
  },
  {
    "url": "assets/js/2.4c94d82d.js",
    "revision": "bb42977c4c213006bf3b73dd703bd5c3"
  },
  {
    "url": "assets/js/20.120db56a.js",
    "revision": "b21b0803a855dca9ae1f2d21e9be2928"
  },
  {
    "url": "assets/js/21.c7bd0df9.js",
    "revision": "d0003303cea2131b6c29a2b1235a29b8"
  },
  {
    "url": "assets/js/22.785da099.js",
    "revision": "6444226935cfff0a4f1373ba792082a1"
  },
  {
    "url": "assets/js/3.590123e1.js",
    "revision": "a1e8031d02571e97a05c73ebd002328b"
  },
  {
    "url": "assets/js/4.c3a04275.js",
    "revision": "e6915e65f9c98da5c2770cf76ddb0d6e"
  },
  {
    "url": "assets/js/5.eeea7638.js",
    "revision": "46bbfb6ed924b8d90e352003cf065f8b"
  },
  {
    "url": "assets/js/6.79bd3222.js",
    "revision": "660c8e9b7bcaf88852dda3eec371607d"
  },
  {
    "url": "assets/js/7.50ca5f2c.js",
    "revision": "df9c0804d854904667e04feaf7b51b8b"
  },
  {
    "url": "assets/js/8.666712b1.js",
    "revision": "906981c2c394a7e454d01377ff0dff0a"
  },
  {
    "url": "assets/js/9.629ef0c4.js",
    "revision": "7c077ac472c7fe776faed1859ee184ec"
  },
  {
    "url": "assets/js/app.9e6c614f.js",
    "revision": "82ada50e7c785355d1a6b058760d0228"
  },
  {
    "url": "blog.html",
    "revision": "441e6a9ee50a087e1d9efe35bf6c11a0"
  },
  {
    "url": "index.html",
    "revision": "1ae7af2533bb407a392d48d8822a3cb9"
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
    "url": "oojs.html",
    "revision": "46acf708a961d95a3d4ec91d873567e6"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "0a32a91e9098bba9299501c233fd4110"
  },
  {
    "url": "oojs/1-variable-pada-javascript.html",
    "revision": "9683833bf0e908b6e05474b4bcff4e67"
  },
  {
    "url": "oojs/2-tipe-data-javascript.html",
    "revision": "474091b1b00dcbb33a1e2f3cb46ac207"
  },
  {
    "url": "portfolio.html",
    "revision": "1831ec194860273b3b8aa3eed3fc553a"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "9f1ef8865050600a25b116d1c40999ab"
  },
  {
    "url": "post/2021-04-07-seni-tidak-mengharapkan-apapun.html",
    "revision": "7bcff086c18a57a23f6b0f3ec233f523"
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
