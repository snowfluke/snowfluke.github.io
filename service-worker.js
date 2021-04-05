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
    "revision": "1717d10f0f77ca5aae9caca80d2e4a40"
  },
  {
    "url": "assets/css/0.styles.32938114.css",
    "revision": "840d475f6b6e15b3004d0421892f03f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.98e443d9.js",
    "revision": "50191c3e6187059c39c05ff2591fe8e8"
  },
  {
    "url": "assets/js/11.2fb4086f.js",
    "revision": "3cdfca37f779c6201feff427a4512972"
  },
  {
    "url": "assets/js/12.479bd4a9.js",
    "revision": "72e497f632d98cad4f0438ddef8cfc83"
  },
  {
    "url": "assets/js/13.651ae092.js",
    "revision": "dd7dbfe2df905e4e35a65d6434334fbb"
  },
  {
    "url": "assets/js/14.f9a8c8c9.js",
    "revision": "bfe68064b6e76d3ac8024d566f4704be"
  },
  {
    "url": "assets/js/15.f01f4d0d.js",
    "revision": "66fe2729f09229e7b8f722545c85f688"
  },
  {
    "url": "assets/js/16.3ebc4709.js",
    "revision": "3db8acc107ba669dcb2de98cb4709ec5"
  },
  {
    "url": "assets/js/17.9289ca09.js",
    "revision": "833854a40d756d23c090bc99cb5c6ebd"
  },
  {
    "url": "assets/js/18.efa0fbba.js",
    "revision": "af360d199fdc793fe829b281cf476abc"
  },
  {
    "url": "assets/js/2.7a624d03.js",
    "revision": "472451809894246413079ea0a2985d63"
  },
  {
    "url": "assets/js/3.ea7e19e0.js",
    "revision": "80c0ffdedb2b160df916521f1999f76d"
  },
  {
    "url": "assets/js/4.84c3f972.js",
    "revision": "a39abdb16e5f1930e4e9c2df4dacd3a1"
  },
  {
    "url": "assets/js/5.cd3d4f99.js",
    "revision": "385f6b7f7395dc679cb8687543632a7f"
  },
  {
    "url": "assets/js/6.193133bc.js",
    "revision": "5f885a3882e5468cadb22868aa24a951"
  },
  {
    "url": "assets/js/7.a4ea3186.js",
    "revision": "2a7d0e361032df9311fe000487a144bf"
  },
  {
    "url": "assets/js/8.d7f79c28.js",
    "revision": "25c0e715737bb8aa23e2edd17fb941c5"
  },
  {
    "url": "assets/js/9.88e029d1.js",
    "revision": "d148e00ab3e554b412c25546d1c1b921"
  },
  {
    "url": "assets/js/app.d82f1cfe.js",
    "revision": "df2f56275f3a0bebaad5cd39ff2fb6ee"
  },
  {
    "url": "blog.html",
    "revision": "6200d90218efb17ac987d8e1074da4d9"
  },
  {
    "url": "index.html",
    "revision": "953e0ca2dd57842b8fa6a37160552723"
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
    "revision": "26840080656ba0696275cfc7589bc5d8"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "100e3788c5b9f5bddc39604f7f34ee95"
  },
  {
    "url": "post/2021-04-04-lorem-ipsum.html",
    "revision": "043444242261a9d9248d76e0dde7541e"
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
