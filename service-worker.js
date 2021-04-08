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
    "revision": "4b0697a3e7de88de39e56c02ea0e4abf"
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
    "url": "assets/js/13.3043b294.js",
    "revision": "9913d19035d63792d5c5a201f86b18cf"
  },
  {
    "url": "assets/js/14.ae9ae450.js",
    "revision": "165c27b07a55e79833424f01617144e2"
  },
  {
    "url": "assets/js/15.8a551736.js",
    "revision": "b9a5694e4522aa141bd7fc4efbba37ef"
  },
  {
    "url": "assets/js/16.eddbccb5.js",
    "revision": "e6c67c0428f109cb39aa3aa08748852f"
  },
  {
    "url": "assets/js/17.a33a5ac6.js",
    "revision": "aa30e4f7f426c3aa0a7a4c2d256f4c53"
  },
  {
    "url": "assets/js/18.1eb6eada.js",
    "revision": "dca85af684c7cfe4f1bc21caf5a5105a"
  },
  {
    "url": "assets/js/19.2c36d475.js",
    "revision": "79bd91805461a5bf99e8be9d42629f78"
  },
  {
    "url": "assets/js/2.4c94d82d.js",
    "revision": "bb42977c4c213006bf3b73dd703bd5c3"
  },
  {
    "url": "assets/js/20.b64fa8c3.js",
    "revision": "62b38189738945b0039e6956348ef3ba"
  },
  {
    "url": "assets/js/21.1ff5c822.js",
    "revision": "eb4f30716bc20fd6272501c3c19f6fb6"
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
    "url": "assets/js/app.5dc80a4f.js",
    "revision": "a1865f159024ad9424009084a784b8be"
  },
  {
    "url": "blog.html",
    "revision": "fa71da1cf3f828609e471abff757753a"
  },
  {
    "url": "index.html",
    "revision": "5eb07bcaa0ec7b8e9283d65b95370fe8"
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
    "revision": "fa8c55a721836ead4771472a4c7afc0d"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "4c657fa36091d31d395dbade364a0103"
  },
  {
    "url": "oojs/1-variable-pada-javascript.html",
    "revision": "d63ac213206b6f6d2274f882725a47cb"
  },
  {
    "url": "oojs/2-tipe-data-javascript.html",
    "revision": "0b878bbfcad820b9addd50674e5dcf7c"
  },
  {
    "url": "portfolio.html",
    "revision": "48891256765a98a487fb9bb6ce722c28"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "7d4310092b206b0c55606a3dbb1681d0"
  },
  {
    "url": "post/2021-04-07-seni-tidak-mengharapkan-apapun.html",
    "revision": "410c37999afa551e8cf88463988e1010"
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
