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
    "revision": "ab736ed9dab34e9d38b09bba1960c32f"
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
    "url": "assets/js/18.33f8cd52.js",
    "revision": "f8281a54358ee1e6396fe9a01d0cb6c8"
  },
  {
    "url": "assets/js/19.897fad4f.js",
    "revision": "1ff28cf46aadac48ed0d5f36493b413e"
  },
  {
    "url": "assets/js/2.f52006e6.js",
    "revision": "9f6328df9cb3f0bbe0764fe7fd439b8f"
  },
  {
    "url": "assets/js/20.288d1cb6.js",
    "revision": "060baf060932f3843b03f6dabc8376fc"
  },
  {
    "url": "assets/js/21.cd7adbb1.js",
    "revision": "91085727d4a02a15b71dc286018ea7e8"
  },
  {
    "url": "assets/js/22.d4ed47dd.js",
    "revision": "0555108908f48b92c4b87850f7671588"
  },
  {
    "url": "assets/js/23.c66066f5.js",
    "revision": "cda3cadca625fb51c216e4dbe021eab3"
  },
  {
    "url": "assets/js/24.067f4ffb.js",
    "revision": "7fbc8afaec3311aff2fcf5a3fcf076af"
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
    "url": "assets/js/3.33d3c687.js",
    "revision": "eccf420be06e93a4dca6cb3ecceb2296"
  },
  {
    "url": "assets/js/30.9d29582e.js",
    "revision": "a93ef17e57c6b8777f5ebbfa3bcc4d7b"
  },
  {
    "url": "assets/js/31.2329b03e.js",
    "revision": "050928797de1232bb7a0f03ace06662a"
  },
  {
    "url": "assets/js/32.5f723d4f.js",
    "revision": "8a930cf58b59933250f825616f991acf"
  },
  {
    "url": "assets/js/33.92c3d4e1.js",
    "revision": "5183fc7000e0d1fa184cea2d522e2b74"
  },
  {
    "url": "assets/js/34.665bf9dc.js",
    "revision": "7d559ae08bcafdc8660f65874b7879a9"
  },
  {
    "url": "assets/js/35.a25c638d.js",
    "revision": "b23aba2007fb8981e44dee8c66ed3ccf"
  },
  {
    "url": "assets/js/36.fd7a795d.js",
    "revision": "6cde34e2c0c3c3d9055fa20cfc2d8dbc"
  },
  {
    "url": "assets/js/37.0dc06986.js",
    "revision": "4fcc70b815ab7b107d0e355d07de4dd4"
  },
  {
    "url": "assets/js/4.4aa5265b.js",
    "revision": "ebd22ca6a6edd2d1ece8e599e9f8a408"
  },
  {
    "url": "assets/js/5.240388ca.js",
    "revision": "7c2a8e7b79b4f7cb4a7b6ecf91f0edce"
  },
  {
    "url": "assets/js/6.3897937c.js",
    "revision": "785ed415bc7cca3d69fbf773566cc4b8"
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
    "url": "assets/js/9.2dbfd0d7.js",
    "revision": "606713fc3d092135f636f8b62a88b7e1"
  },
  {
    "url": "assets/js/app.0c6ecf16.js",
    "revision": "e112d9208e31dddeb2dc12746a3562d0"
  },
  {
    "url": "blog.html",
    "revision": "277e679a7c3b0e361619b1b213f0b5e5"
  },
  {
    "url": "index.html",
    "revision": "2d2bfb281a9a02b430b55e28ff84dd59"
  },
  {
    "url": "js-playground.html",
    "revision": "49cb61ce6af58f1629e1fb6bc9087f32"
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
    "revision": "084b9b4456d49145d9da7cd8d288dbc1"
  },
  {
    "url": "oojs.html",
    "revision": "4da6532d48b29adf3c0a749b7f435c8f"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "5eb384a205c59de0de2613a26d4e68cb"
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
    "revision": "8bf26ebbeb2f2982513c0ae6b4af1509"
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
    "revision": "20c2e288720868a891393ea18cfe7d3e"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "c24e6a967774097f2e689a40600bbc22"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "a4e424db6e040dad249e64c75007867e"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "dc996df2860b9eaf3139c37b16e6fff2"
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
    "revision": "46e6012fad820cc3f846d1bc635b1590"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "5548adb4a276590b05c271ba7fb3a5a8"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "969243dd42b95b44e0a348d23630a71b"
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
    "revision": "6f21d065a7391f2b900f615aaa8e1137"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "cae306131b4742183b39f04893655457"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "8515dbb2e3f0aea90942abd27bab0ceb"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "22599ce6803a04906aaf59e1134ca0f5"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "ca667b072ac0c002ec7fb634a3932c61"
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
