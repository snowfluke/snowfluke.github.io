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
    "revision": "a38d4bcaf05d76a0302e5cdadc5e1e55"
  },
  {
    "url": "assets/css/0.styles.78b597e8.css",
    "revision": "2df3abdfb622a2e475c6786609a50a71"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eadc5e59.js",
    "revision": "826b853eb3c52978df61fc1b5517ffc0"
  },
  {
    "url": "assets/js/11.6e5ef857.js",
    "revision": "7a880107867b16b15ab3a4f105baffd5"
  },
  {
    "url": "assets/js/12.ef5f6f54.js",
    "revision": "1e2d89f7f65d319d172e540e294ea7f0"
  },
  {
    "url": "assets/js/13.43cf7937.js",
    "revision": "59f09bc58ae4b57470811b8984144599"
  },
  {
    "url": "assets/js/14.6fd858c4.js",
    "revision": "2f3996a73bb5846cf1157ccd9d509172"
  },
  {
    "url": "assets/js/15.1752e977.js",
    "revision": "e25bcbae18991b6273136f4f00e0607c"
  },
  {
    "url": "assets/js/16.6e4afb05.js",
    "revision": "13aebd55f0f5ec4377032d5e31362e30"
  },
  {
    "url": "assets/js/17.ec9d32a6.js",
    "revision": "46e233d3e6f9a13fb6eaaa8aa0287f39"
  },
  {
    "url": "assets/js/18.2ca5e991.js",
    "revision": "a0d6944eaa25460ceb0c379979ac7d8d"
  },
  {
    "url": "assets/js/19.ff1c81fc.js",
    "revision": "6ecf6a07f698eee3f02bfb0c10e0e3c6"
  },
  {
    "url": "assets/js/2.ba3fe6ac.js",
    "revision": "59aba9011a3891f3af264bad47355cde"
  },
  {
    "url": "assets/js/20.24292467.js",
    "revision": "9e1087f040b27800e45f5b5bbc951b3a"
  },
  {
    "url": "assets/js/21.65580465.js",
    "revision": "ddcde2d94083588f8cb614503f5e67a3"
  },
  {
    "url": "assets/js/22.e8085f1c.js",
    "revision": "6d737148d7de210dcd917b28ccf28d63"
  },
  {
    "url": "assets/js/23.6fcc384e.js",
    "revision": "99edda1fb1adce35b37274da72a3b249"
  },
  {
    "url": "assets/js/24.871dc7b3.js",
    "revision": "6f40f57e94693e0e09c4ec117629eb0c"
  },
  {
    "url": "assets/js/25.4b4fd234.js",
    "revision": "4cf646afbc68f12a9103b2a2ea578388"
  },
  {
    "url": "assets/js/26.7bff225c.js",
    "revision": "1935cc10795e06fe51550945fe9c8d07"
  },
  {
    "url": "assets/js/27.c3c4caea.js",
    "revision": "fc7bc66194a79495c0061b566c6843f9"
  },
  {
    "url": "assets/js/28.3a3c6dad.js",
    "revision": "84b212f05f79113de782b33f78421642"
  },
  {
    "url": "assets/js/29.68144d2a.js",
    "revision": "48aa12fb4c3c3e0c68ec84118f8dee44"
  },
  {
    "url": "assets/js/3.22fe934e.js",
    "revision": "f5d5236b4552365b409287738ae415ba"
  },
  {
    "url": "assets/js/30.6b6ca291.js",
    "revision": "ed87cc9463d4e77ab0f6e0727d0887eb"
  },
  {
    "url": "assets/js/31.b7c4b730.js",
    "revision": "f6dc67a9a55142cb27d164bf36d564fd"
  },
  {
    "url": "assets/js/32.015350d3.js",
    "revision": "6340e20af9ab8fdfb5d8d9a3844f54a4"
  },
  {
    "url": "assets/js/33.d8403c26.js",
    "revision": "d7bcd13b36ad2c164a75e5ce38bd197f"
  },
  {
    "url": "assets/js/34.d0fae4f1.js",
    "revision": "3b158531aaad91f6b084803598d799b7"
  },
  {
    "url": "assets/js/4.ed7de761.js",
    "revision": "6216df5b84473b55c2bce33c8711cedb"
  },
  {
    "url": "assets/js/5.8f6dec40.js",
    "revision": "6878f4b3f042278374f88c04ef7e36be"
  },
  {
    "url": "assets/js/6.be93d1a5.js",
    "revision": "89f0c9c0c75019e3b4038834bfeea36c"
  },
  {
    "url": "assets/js/7.bbc30be2.js",
    "revision": "e70174232a220f9c625e0c8f64f7caeb"
  },
  {
    "url": "assets/js/8.bf89fb84.js",
    "revision": "5c6cf8041a9afb09e5ddbee381817b22"
  },
  {
    "url": "assets/js/9.574017dd.js",
    "revision": "26764d491d2a15d493b7aba71dac8ee4"
  },
  {
    "url": "assets/js/app.a5a1e54c.js",
    "revision": "391d0c767db2261d970f996c5986d3a0"
  },
  {
    "url": "blog.html",
    "revision": "87a769617e89d1e2f6272880e8765519"
  },
  {
    "url": "index.html",
    "revision": "01c7451d1f17522a9640e516c6069efe"
  },
  {
    "url": "js-playground.html",
    "revision": "1d3d9ff6eef555043db0dc4d1a4f3598"
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
    "url": "mini-project.html",
    "revision": "3246b72181235a2c2397f9c0fe25e7a2"
  },
  {
    "url": "oojs.html",
    "revision": "05f27c857ef81bce550feb38c0eb0bc9"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "d180ededd7797c64242ee02e1ac20456"
  },
  {
    "url": "oojs/0/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
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
    "url": "oojs/0/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/0/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
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
    "revision": "a82651315d32d6733197a1f13f774580"
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
    "revision": "09a75bf4c1c81a709d5a52da114dfbd7"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "b1ddd1a2f2734f4ea48fc896911b8102"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "af20c436b28cfc73ee2262c56a772666"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "9f813b52a5c16cf68816171c43fe51ee"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "oojs/5/paramarg.png",
    "revision": "6d149e8b12bddc6d038e7f9bed609ef4"
  },
  {
    "url": "oojs/6-struktur-kontrol-dasar-javascript.html",
    "revision": "93c4c7b296bb52fe1fbe4f289e5e9144"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "playground.css",
    "revision": "6e9d33209025b836b6166624af0e9ddc"
  },
  {
    "url": "playground.js",
    "revision": "980d6ad573b666529952f08ff1981f60"
  },
  {
    "url": "portfolio.html",
    "revision": "05749fe838e99e6e0bfbd03ec46ee457"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "30d4a2ae4d260c28c84d13273740a5f1"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "1b7f002adf4513f31e73594f62d1706b"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "a293142deb8487d7e9eb132d8e5adc59"
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
