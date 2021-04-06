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
    "revision": "d217954c4a4ce418f6f42871b1913265"
  },
  {
    "url": "assets/css/0.styles.10de41e5.css",
    "revision": "71265491266f44baa31d7e7b2f50f08c"
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
    "url": "assets/js/12.d3043d8e.js",
    "revision": "e9d40196791dd83825dc9483e7561f0a"
  },
  {
    "url": "assets/js/13.e3825392.js",
    "revision": "1deae81fef6e6d80232b15af834ff6a8"
  },
  {
    "url": "assets/js/14.f7d6b441.js",
    "revision": "2e4bfaa037c1fd470eaa9fb8b072facf"
  },
  {
    "url": "assets/js/15.76eeb462.js",
    "revision": "aacb3844d00e39f3153f7130def7e6f4"
  },
  {
    "url": "assets/js/16.4f19e3b6.js",
    "revision": "72050cfd1334696b749f9aed49408c44"
  },
  {
    "url": "assets/js/17.d7ba1481.js",
    "revision": "4f1ff770a40239e397939c38833f246c"
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
    "url": "assets/js/5.5cdfc8ab.js",
    "revision": "d5ab28dc7921f3ff04a6d4bf55a17fab"
  },
  {
    "url": "assets/js/6.4352aacc.js",
    "revision": "7fc06c8c1331199b68433c571ec962bb"
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
    "url": "assets/js/app.5c94734c.js",
    "revision": "09ad43f1be8ad1615661a0e2cfa83c83"
  },
  {
    "url": "blog.html",
    "revision": "14c9c2cf4b5bdf7261db3718b0744d98"
  },
  {
    "url": "index.html",
    "revision": "31378a0cc043a21b9c682fca6312612e"
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
    "revision": "d57a78799929e492d388d56477d4d5b1"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "03bb19a5f57d7797ee6971a4ce49bca3"
  },
  {
    "url": "post/2021-04-07-seni-tidak-mengharapkan-apapun.html",
    "revision": "846a6b39ce112cd32e1fc8cbfb5e5ad5"
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
