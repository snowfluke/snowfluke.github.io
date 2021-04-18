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
    "revision": "e1023e1827baa9efbb9c3675260a041d"
  },
  {
    "url": "assets/css/0.styles.3b53e500.css",
    "revision": "e0c060141e8d38869501da739e099743"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1b67b20c.js",
    "revision": "c4a5aa9c63ff50453624db27d71e0dfe"
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
    "url": "assets/js/15.8a1981fa.js",
    "revision": "9807c4c77a0ecbb957b7002359e5a3ff"
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
    "url": "assets/js/20.5c432a92.js",
    "revision": "3b2e324e8130a43611f6f8b4db7ea5ab"
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
    "url": "assets/js/23.5087d1f9.js",
    "revision": "f8c2631331db292f0af4f70ad566bf40"
  },
  {
    "url": "assets/js/24.ac91fdf5.js",
    "revision": "58d1bd666011997d8dfaba565b946917"
  },
  {
    "url": "assets/js/25.169e148a.js",
    "revision": "12e37c5b3a9fad2b73490d39481d5eec"
  },
  {
    "url": "assets/js/26.19b6980b.js",
    "revision": "eaaffbc97d407bdd0414e575cac680d8"
  },
  {
    "url": "assets/js/27.d717fded.js",
    "revision": "f56caf4fd0ad94c8ad6d46985b8048e1"
  },
  {
    "url": "assets/js/28.77706d30.js",
    "revision": "825ece2f2d1d742002fdda648f9b4454"
  },
  {
    "url": "assets/js/29.d308dd29.js",
    "revision": "f042c14ff0783f72d02714a566a65edd"
  },
  {
    "url": "assets/js/3.239d5006.js",
    "revision": "6033f48a4d05006489e30f4a4b44306a"
  },
  {
    "url": "assets/js/30.20c0c930.js",
    "revision": "bac007afa640ffad6eea8d1097db0317"
  },
  {
    "url": "assets/js/31.123ccdef.js",
    "revision": "3c444bad822f5b5e12d429ad2b2fc342"
  },
  {
    "url": "assets/js/32.631ef4f0.js",
    "revision": "dac72bb66e89e7ed2820126daed18503"
  },
  {
    "url": "assets/js/33.ed1d735e.js",
    "revision": "a56fe74eed7c50d41d81c0622f46ae96"
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
    "url": "assets/js/6.20edca42.js",
    "revision": "05020a6d8c40e3572428ecb18bb9418e"
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
    "url": "assets/js/9.e5c1a6d4.js",
    "revision": "b1450ad8f55334d18ce5525e9657a68b"
  },
  {
    "url": "assets/js/app.4ed7be8c.js",
    "revision": "14830614db50c0c139efee2f03035cb3"
  },
  {
    "url": "blog.html",
    "revision": "865eb4517cdee6c2d6e8c7943efff7a3"
  },
  {
    "url": "index.html",
    "revision": "90b3dfd27d4fe1436ccd01e7ac132e27"
  },
  {
    "url": "js-playground.html",
    "revision": "6aab3ffeec5baa71e15a07f6ed26f45e"
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
    "revision": "e3ca57ae7d95cb6e1dfac3809e9de780"
  },
  {
    "url": "oojs.html",
    "revision": "5d9dfc80b8001c00707cca1925c62ac9"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "e3f07fb202f4553acfcf6f251e74eea3"
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
    "url": "oojs/0/node.png",
    "revision": "74fa7768d8200bfce4d088603047ed12"
  },
  {
    "url": "oojs/0/safar-safarov-LKsHwgzyk7c-unsplash.jpg",
    "revision": "e9c26c462c68467bd703d4cc7bf6bee2"
  },
  {
    "url": "oojs/1-variable-pada-javascript.html",
    "revision": "832898364755754f1416be67c2267d83"
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
    "revision": "a0181a68868310be7b5d79d4d1d5f514"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "e892e5615850be4e5c80be6c90af7374"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "d5cfb2e5579a20f0ce28cd72111685f4"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-repl.html",
    "revision": "634de11537cb02a688d20da04ba7280b"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "playground.css",
    "revision": "724348a20b68ddb699d8d232a55cc767"
  },
  {
    "url": "playground.js",
    "revision": "cbf8b291fa831953bcde66cb3e1c770c"
  },
  {
    "url": "portfolio.html",
    "revision": "bc0450cee2eaef050403de6eeb65b9c5"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "9a61e964bb5b115337bbf0bb9e26d758"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "b616507964600b94bdaaa235ed7fe9f1"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "3d80ef567ad260e70f4a8c05da452c45"
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
