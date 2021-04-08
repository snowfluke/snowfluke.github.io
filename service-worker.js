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
    "revision": "ce47c398e7f329a99623098ccd840516"
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
    "url": "assets/js/10.c68176f7.js",
    "revision": "d48566ce31045a3006bfb5f8c8bda17b"
  },
  {
    "url": "assets/js/11.b67f3ae0.js",
    "revision": "7ec6797a5e527c1322cdbd08041244e5"
  },
  {
    "url": "assets/js/12.79df0bbe.js",
    "revision": "dd19a344e33f7f59472a4e56f5deb857"
  },
  {
    "url": "assets/js/13.f2098581.js",
    "revision": "36361d9485cb6e131998d089a8eb2618"
  },
  {
    "url": "assets/js/14.454730b1.js",
    "revision": "812d33a09ed089f13933bf4158316c07"
  },
  {
    "url": "assets/js/15.440b9efd.js",
    "revision": "7e1cdbd3dc5c059cf4a6ead315811ec9"
  },
  {
    "url": "assets/js/16.9de3c9f2.js",
    "revision": "5013c47e3b5e30ebb717604168736603"
  },
  {
    "url": "assets/js/17.fbf6e1b6.js",
    "revision": "cf099b8f1af9ed64d0d3b30d9a67760f"
  },
  {
    "url": "assets/js/18.74885f57.js",
    "revision": "47dee4c1481d4d40c77224bbede85450"
  },
  {
    "url": "assets/js/19.b9217afa.js",
    "revision": "9f32c19c74ff99d8acc8e16ff12af1e3"
  },
  {
    "url": "assets/js/2.a06c9abf.js",
    "revision": "c5d3271df4b8fd38011f17873bcf57e3"
  },
  {
    "url": "assets/js/20.c471bdf8.js",
    "revision": "de582a8c5c3dad0155dbd43b3b7139fd"
  },
  {
    "url": "assets/js/21.7a201929.js",
    "revision": "cbd327599b967336bd45b16c0996367a"
  },
  {
    "url": "assets/js/22.785da099.js",
    "revision": "6444226935cfff0a4f1373ba792082a1"
  },
  {
    "url": "assets/js/3.edec442c.js",
    "revision": "8b794eab797e9c8edda70924389d562b"
  },
  {
    "url": "assets/js/4.65b3c109.js",
    "revision": "d73184c0b78f85843cbf366b11615538"
  },
  {
    "url": "assets/js/5.6fd866c8.js",
    "revision": "54b8cea60bfe30f4f903a1024eb03565"
  },
  {
    "url": "assets/js/6.79bd3222.js",
    "revision": "660c8e9b7bcaf88852dda3eec371607d"
  },
  {
    "url": "assets/js/7.081dfead.js",
    "revision": "2c8e4580ee52497cefce86e74f986406"
  },
  {
    "url": "assets/js/8.ec27fc35.js",
    "revision": "681d66f04fc6f753f8776ca5b83b8903"
  },
  {
    "url": "assets/js/9.629ef0c4.js",
    "revision": "7c077ac472c7fe776faed1859ee184ec"
  },
  {
    "url": "assets/js/app.2ab77341.js",
    "revision": "504dfd7fa12c8de2fcffa4779526325f"
  },
  {
    "url": "blog.html",
    "revision": "4b36c4ccc2963ee4e5cdcd194edb9c9b"
  },
  {
    "url": "index.html",
    "revision": "98ca7274f16c515dc752641f738d24bf"
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
    "revision": "c2ea2ba08c040e3ee40580efb55f5b69"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "b95508dcf99244da92daaf3c89cd3425"
  },
  {
    "url": "oojs/1-variable-pada-javascript.html",
    "revision": "6d205916eebe3af3fb214f98efc583e6"
  },
  {
    "url": "oojs/2-tipe-data-javascript.html",
    "revision": "1869e619d5eebc92633cb115b93640a8"
  },
  {
    "url": "portfolio.html",
    "revision": "78a8d98fc2bddc7434f67d5b6bdce327"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "74af6f74c1d69e819c3d81b60802fcae"
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
