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
    "revision": "1ada8ae77d2eb1978531717b64f0d218"
  },
  {
    "url": "assets/css/0.styles.5d135466.css",
    "revision": "74cd889d8d0bad7b8757cdd6c4231b27"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b3c575b2.js",
    "revision": "da524abf8980c4b77e823bea5b817ef1"
  },
  {
    "url": "assets/js/11.32562f7a.js",
    "revision": "5cf1188a68849b93bd1d8cefd4788234"
  },
  {
    "url": "assets/js/12.fa888d6c.js",
    "revision": "a450dd42065f79cd3654580adbf0aedd"
  },
  {
    "url": "assets/js/13.175d8e74.js",
    "revision": "c0a725634e22cd9840a5d53a52f3683a"
  },
  {
    "url": "assets/js/14.633ee558.js",
    "revision": "f6fbc466b06fbc1d9c063adba2fa511e"
  },
  {
    "url": "assets/js/15.725afb7e.js",
    "revision": "0d26c810df86a3951ac68d8bf30bf1c0"
  },
  {
    "url": "assets/js/16.44589993.js",
    "revision": "f57efd7045cb4d0bc3b5a36347ba1a20"
  },
  {
    "url": "assets/js/17.8e9b0628.js",
    "revision": "c72e1c1defa576933efb3f6d4f89f27c"
  },
  {
    "url": "assets/js/18.ac595209.js",
    "revision": "21ce14c92171832f2c72ef31b6e46332"
  },
  {
    "url": "assets/js/19.5df372e0.js",
    "revision": "58a4ab920509f20d1c531bb9e86c01c7"
  },
  {
    "url": "assets/js/2.7b4290ef.js",
    "revision": "171d403925c7d50d92c6a9b1ac6bd493"
  },
  {
    "url": "assets/js/20.e9ad0280.js",
    "revision": "589440605903b252d52bd950ee7de472"
  },
  {
    "url": "assets/js/21.5d474164.js",
    "revision": "d70f0fc8c39147fba74655ac895258c8"
  },
  {
    "url": "assets/js/22.6f571d69.js",
    "revision": "3627a2dbc9421c8012cd2c41a47f1e1f"
  },
  {
    "url": "assets/js/23.c97f7db6.js",
    "revision": "f70b7c1fbf90a531b93beb324e348adb"
  },
  {
    "url": "assets/js/24.5a7ec6d9.js",
    "revision": "9aa65d40f3a4fd131d0687c6781f9f61"
  },
  {
    "url": "assets/js/3.e9372a84.js",
    "revision": "b7bb12f7ddae91f1c2b2c427f354a3f4"
  },
  {
    "url": "assets/js/4.267c522d.js",
    "revision": "a5fd5f4280f8a91cf08084deba86b875"
  },
  {
    "url": "assets/js/5.6e24bf51.js",
    "revision": "e3c39cd7314e5b971286bdfc0db49624"
  },
  {
    "url": "assets/js/6.5c8c1b0b.js",
    "revision": "4725f48f39df5b44051580df72566c83"
  },
  {
    "url": "assets/js/7.66ef9e5d.js",
    "revision": "0253f67a1e02eef2c397c717a5408779"
  },
  {
    "url": "assets/js/8.2d8aad3f.js",
    "revision": "0e978963da42f5743a7aee878910cfbd"
  },
  {
    "url": "assets/js/9.ec7ec919.js",
    "revision": "8ea10e4d5dbfb1f765c2caab5c073f59"
  },
  {
    "url": "assets/js/app.5aa4dad0.js",
    "revision": "655b71aedac1e77e590c6a111825f4d3"
  },
  {
    "url": "blog.html",
    "revision": "9c1cf17b5bb3196267887760a93d6662"
  },
  {
    "url": "index.html",
    "revision": "d219bb706b858553693cc668d3c48a26"
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
    "revision": "c23d866a6a4db2031f18c3105da152e5"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "d49cfb7ea748c17a11a463fbd913e979"
  },
  {
    "url": "oojs/0/devdocs.png",
    "revision": "f193fbe3551136e34782dfbd6858e1a7"
  },
  {
    "url": "oojs/0/github.png",
    "revision": "991db5128e5df3be0d823e5b4d8a06f6"
  },
  {
    "url": "oojs/0/node.png",
    "revision": "74fa7768d8200bfce4d088603047ed12"
  },
  {
    "url": "oojs/0/safar-safarov-LKsHwgzyk7c-unsplash.jpg",
    "revision": "e9c26c462c68467bd703d4cc7bf6bee2"
  },
  {
    "url": "oojs/1-variable-pada-javascript.html",
    "revision": "83e07f7168f7e0fbc7a2b1949f6cc6fe"
  },
  {
    "url": "oojs/1/nodeindex.png",
    "revision": "31d18e997f5df12720d6b20281a548e3"
  },
  {
    "url": "oojs/1/pankaj-patel-4oAFasAPftg-unsplash.jpg",
    "revision": "a2a2a3fedb2aaba1c7705222beeeceaf"
  },
  {
    "url": "oojs/2-tipe-data-javascript.html",
    "revision": "654305238e2a31711fc6894ac64e1017"
  },
  {
    "url": "portfolio.html",
    "revision": "eda643733c27632cae1a6935712202be"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "d65c0ddf411ff1f6b66247eb4c596c93"
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
