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
    "revision": "755fcf07e2a9f2c0bfb75ab26896bca5"
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
    "url": "assets/js/10.f4352280.js",
    "revision": "d675eb32e0f05370bb600c230521fde5"
  },
  {
    "url": "assets/js/11.247e1937.js",
    "revision": "3279987b6c3823945b0c2ce51d5c2129"
  },
  {
    "url": "assets/js/12.9c2df17e.js",
    "revision": "528261ac1a7eae4eb0d10d051e8bf385"
  },
  {
    "url": "assets/js/13.8452b4eb.js",
    "revision": "3e409ecb20cb0e19317d655b93c8696f"
  },
  {
    "url": "assets/js/14.3d811030.js",
    "revision": "c3160ff6ff8d2d491ce43acd54bd7346"
  },
  {
    "url": "assets/js/15.009e2154.js",
    "revision": "5716d4432df693750645462ed3d9db9e"
  },
  {
    "url": "assets/js/16.0d1ef692.js",
    "revision": "5722eab92c214415bc52b4951c161996"
  },
  {
    "url": "assets/js/17.1f4ed36e.js",
    "revision": "3b6c5ab4040e66ef024a199a4d436661"
  },
  {
    "url": "assets/js/18.7da16526.js",
    "revision": "42ff4a3ec750ca01a2b30233fb3ebc82"
  },
  {
    "url": "assets/js/19.74c7597c.js",
    "revision": "c7b2b4471e95a1bbfccf88fa64e259b9"
  },
  {
    "url": "assets/js/2.8a1d3fc1.js",
    "revision": "225f470f0d299b9c6d837ba97ae86a19"
  },
  {
    "url": "assets/js/20.916b8a11.js",
    "revision": "98c873e948237bc33a596f1d832d2b0a"
  },
  {
    "url": "assets/js/21.d613084d.js",
    "revision": "33ecb07de7a513025b88bc11c63b3045"
  },
  {
    "url": "assets/js/22.763739de.js",
    "revision": "a4badc7243812ac3bc95b21967522eb6"
  },
  {
    "url": "assets/js/23.3ad1c99d.js",
    "revision": "0ad1d809d3f3bf36c1ab3579b164c369"
  },
  {
    "url": "assets/js/24.7d1b1594.js",
    "revision": "88938b1f9e5ec30406c3fe55d9b6437f"
  },
  {
    "url": "assets/js/25.138249e8.js",
    "revision": "44d875ee169517d425052d3b927232c9"
  },
  {
    "url": "assets/js/26.169207fc.js",
    "revision": "2654231d321231c743c1b64ec3840a58"
  },
  {
    "url": "assets/js/27.af59e0b8.js",
    "revision": "9676ce9b2262294309532f07a6d0229c"
  },
  {
    "url": "assets/js/28.32e83213.js",
    "revision": "55f92be3a74b290a74b99057fc9f9801"
  },
  {
    "url": "assets/js/29.53c1ab6d.js",
    "revision": "76617b8635df3ea1bcd1684cbd1f9201"
  },
  {
    "url": "assets/js/3.54d591e7.js",
    "revision": "b278365d29ccc3119319ab4ed5b05deb"
  },
  {
    "url": "assets/js/30.87bf553d.js",
    "revision": "67a1b2b725f3dcc74ab2edd413489418"
  },
  {
    "url": "assets/js/31.040ac811.js",
    "revision": "db09d86de325ddecb345d97dbab92c93"
  },
  {
    "url": "assets/js/32.d4c50f59.js",
    "revision": "20da4a3ca4be4ee19df5770ff8376984"
  },
  {
    "url": "assets/js/33.1e97c241.js",
    "revision": "abaeca60bec3a9a66e88e484fc579553"
  },
  {
    "url": "assets/js/34.26e3231c.js",
    "revision": "1f95ea1f9fadd0ac3cbe69c2ba7f3f89"
  },
  {
    "url": "assets/js/35.25edefa6.js",
    "revision": "ee49a264d15f02c564930ce50d9451cd"
  },
  {
    "url": "assets/js/36.f8ba5a02.js",
    "revision": "b088ac60e0b337d9540919279250fcf8"
  },
  {
    "url": "assets/js/37.1f8b2947.js",
    "revision": "83b6fd86942b2136a2118c0029a6e393"
  },
  {
    "url": "assets/js/4.d15a4acd.js",
    "revision": "f812799a17eeb253a043e933960f8c02"
  },
  {
    "url": "assets/js/5.40362a46.js",
    "revision": "23b65320e313bd5628b312e62d993379"
  },
  {
    "url": "assets/js/6.a18469db.js",
    "revision": "a143df650cac653b3ddca20b2ca644b1"
  },
  {
    "url": "assets/js/7.a6f8768e.js",
    "revision": "1c9d1b259d9ed79e3be21fa6bbf86868"
  },
  {
    "url": "assets/js/8.65b4437e.js",
    "revision": "f6867fa10af9f511ea46b24273208630"
  },
  {
    "url": "assets/js/9.873fabc5.js",
    "revision": "c4ab1f250c762e931e8f7f5c7f59a7ca"
  },
  {
    "url": "assets/js/app.8af2fbd5.js",
    "revision": "1523d2a571554792ab58d52945ff4302"
  },
  {
    "url": "blog.html",
    "revision": "8eb661eaa6c9f85b3c2884839bfb561c"
  },
  {
    "url": "index.html",
    "revision": "53b8eab5bc163cf80ebadd1e95bf19f2"
  },
  {
    "url": "js-playground.html",
    "revision": "d713a83d2deed62d6f949636bb83b922"
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
    "url": "logo/SSS.png",
    "revision": "ceccf4868769b66686fbdee573a4a8d2"
  },
  {
    "url": "logo/Stail-01.png",
    "revision": "ebcd9203da1a057573a27b55717496c9"
  },
  {
    "url": "mini-project.html",
    "revision": "b606ad921bafd1eaab19ec894a072af4"
  },
  {
    "url": "oojs.html",
    "revision": "89d3d829e2261e24ae0dd64e107e8af9"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "7cce7662db52dab8361d52e83fcad032"
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
    "revision": "6cfd2247c36faf62754161eb0cfdcb3b"
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
    "revision": "a97f32c7eb18e61a321abdce12100c37"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "d1a3644cb0dc19d6163dba22db7fe116"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "8c3d712d64658f44b8d406abd2d89e08"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "c21ca28b0d19ebe65370e341192d252f"
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
    "revision": "9fccd003e332fb4141e9bc2d352634ec"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "872d18e9a2b8b093ccecada53d999359"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "51dce92c8762140d304893f867174148"
  },
  {
    "url": "oojs/8/chris-ried-ieic5Tq8YMk-unsplash.jpg",
    "revision": "93bb7bf89089bb255fa67456854e0db3"
  },
  {
    "url": "oojs/8/mafiduce.jpg",
    "revision": "51d4610ad29ceffa5c2e51672daac0fa"
  },
  {
    "url": "playground.css",
    "revision": "6e9d33209025b836b6166624af0e9ddc"
  },
  {
    "url": "playground.js",
    "revision": "c50811fb7bb7d22c826fbf47d012a9a0"
  },
  {
    "url": "portfolio.html",
    "revision": "4a4abc92ce07fec5e132303e80780831"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "feaa4dbc31fbb746f25f53945e66c491"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "5ac3e007b41be8ce627d38881bc8ad10"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "11b49e0deb10fe79c654fbe02e34c325"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "b8481c6effbb460da595f47fdc94d7c8"
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
