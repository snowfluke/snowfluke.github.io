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
    "revision": "71fc8131d5eb7792436f8f905f1279aa"
  },
  {
    "url": "assets/css/0.styles.79aceb7a.css",
    "revision": "87403300ce1ef05ca5cb816d0750943a"
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
    "url": "assets/js/18.86056de6.js",
    "revision": "cc8126b4af1c1dc9158dced2427b4831"
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
    "url": "assets/js/20.2124410a.js",
    "revision": "db7ee3185de43e5a81ddac487063a161"
  },
  {
    "url": "assets/js/21.db7f4e95.js",
    "revision": "62c697ccb9056f6655eaca06b949fd3f"
  },
  {
    "url": "assets/js/22.d4ed47dd.js",
    "revision": "0555108908f48b92c4b87850f7671588"
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
    "url": "assets/js/25.78b49282.js",
    "revision": "75655fd1cd1f71f31aaebca217eb4559"
  },
  {
    "url": "assets/js/26.8042a975.js",
    "revision": "8050f950e6b95bea6cd1159f59d554ea"
  },
  {
    "url": "assets/js/27.ad348fbc.js",
    "revision": "15ce60b5bdb937d382ceca2e5b284e6f"
  },
  {
    "url": "assets/js/28.61610f62.js",
    "revision": "98e72bb1635a7c78a0063fe479446f5a"
  },
  {
    "url": "assets/js/29.6c226f7f.js",
    "revision": "e62d91cfc9b240d14be0b954c97c9fb0"
  },
  {
    "url": "assets/js/3.22fe934e.js",
    "revision": "f5d5236b4552365b409287738ae415ba"
  },
  {
    "url": "assets/js/30.da2c7140.js",
    "revision": "5dcb78d90598cc4bd6be896236906356"
  },
  {
    "url": "assets/js/31.48d35b2b.js",
    "revision": "9686efdef2f6ba895959d569a67d3e99"
  },
  {
    "url": "assets/js/32.c68cdbb0.js",
    "revision": "6ebd0f56c6f9d22ed528e4f2d58cc823"
  },
  {
    "url": "assets/js/33.da582c86.js",
    "revision": "21eb3c6c7c85bf4f86f2c0b20dda428e"
  },
  {
    "url": "assets/js/34.1cc3d440.js",
    "revision": "dde16ed0397279a675d63a99f2907e71"
  },
  {
    "url": "assets/js/35.16ddf38c.js",
    "revision": "9c49e675521def4b67693390c138ce5d"
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
    "url": "assets/js/6.3e658f5f.js",
    "revision": "2df3f00263574bbf6c7f2ed0b2bfd2ef"
  },
  {
    "url": "assets/js/7.34aa9467.js",
    "revision": "7d7d80dfa52f7930aa36cfd2297fb20f"
  },
  {
    "url": "assets/js/8.bf89fb84.js",
    "revision": "5c6cf8041a9afb09e5ddbee381817b22"
  },
  {
    "url": "assets/js/9.068cf5fe.js",
    "revision": "3069a5d4045f41fbfc505adaa5a30e60"
  },
  {
    "url": "assets/js/app.d582a8b1.js",
    "revision": "9e8904a1d3c4c2f4305b1ee25bd7e460"
  },
  {
    "url": "blog.html",
    "revision": "3214a1f707f61fa812d1b58c819978be"
  },
  {
    "url": "index.html",
    "revision": "2a53e74d1668712e028d2f6e669eecc2"
  },
  {
    "url": "js-playground.html",
    "revision": "2930b312b4d79b14491e3043f7188a0b"
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
    "revision": "2aea7e9c3443618fc0e461b9dfe08832"
  },
  {
    "url": "oojs.html",
    "revision": "e2e48a486b73b858dbe7279bf37be9cf"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "61b234be55bfd12a9c86a420c4b5168e"
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
    "revision": "edc9934fd245680877c5289fbe3c2c66"
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
    "revision": "fbcc460574200ab50001c498692abb1a"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "3b569cb2292b00e7184edcf02a2d70f7"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "6ccd34a12219a0d639ce6bd7898a12db"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "84b23f0742c3914d425e5c6b8b3f1a8a"
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
    "revision": "0c78185ee35c06b522a5e9d633a38007"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "6c0f39e7896999cebbb3477b10115b84"
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
    "revision": "769356108eb52d1eeef1dc12e1e9da7b"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "941b395885eda6625f4d52c9d82e1833"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "ad253142b97134be9f446a38af8dd85d"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "410008a010b780147edf8d9d9c5ef2b3"
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
