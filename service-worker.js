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
    "revision": "0c0e94c676520b675503b3b54995d903"
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
    "url": "assets/js/18.f5c0ddd5.js",
    "revision": "290e63e003cd37087189b65b82e51158"
  },
  {
    "url": "assets/js/19.9dd0271d.js",
    "revision": "fc02ae8687b13fce932ead8f78c2237b"
  },
  {
    "url": "assets/js/2.f52006e6.js",
    "revision": "9f6328df9cb3f0bbe0764fe7fd439b8f"
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
    "url": "assets/js/22.0f31b540.js",
    "revision": "fd962d8b402e5d7332ef8d38c746f21a"
  },
  {
    "url": "assets/js/23.3c8d40a8.js",
    "revision": "6779860432cc3bd7197232369def1722"
  },
  {
    "url": "assets/js/24.067f4ffb.js",
    "revision": "7fbc8afaec3311aff2fcf5a3fcf076af"
  },
  {
    "url": "assets/js/25.21805f97.js",
    "revision": "b2f07479b29bb5347d6f12128892fcba"
  },
  {
    "url": "assets/js/26.8042a975.js",
    "revision": "8050f950e6b95bea6cd1159f59d554ea"
  },
  {
    "url": "assets/js/27.9399a436.js",
    "revision": "e2442c64a09ba13bf846efc9ddd32180"
  },
  {
    "url": "assets/js/28.768546ab.js",
    "revision": "f1de1237588760a05ff74fff72051c27"
  },
  {
    "url": "assets/js/29.ccd03df6.js",
    "revision": "43e3823c1dc794ecfb056a89a7f0bf9c"
  },
  {
    "url": "assets/js/3.33d3c687.js",
    "revision": "eccf420be06e93a4dca6cb3ecceb2296"
  },
  {
    "url": "assets/js/30.240d9fc5.js",
    "revision": "f09f7a5e2c3bdccd959384bd1fc41d9d"
  },
  {
    "url": "assets/js/31.914f7813.js",
    "revision": "5a601666895e6154861fb2932c171350"
  },
  {
    "url": "assets/js/32.eb10bb50.js",
    "revision": "d9ac5086b01626bbb2534bfdcfa262ec"
  },
  {
    "url": "assets/js/33.1aba199e.js",
    "revision": "1d10d0362e5c6f7af09dc67aabf55a68"
  },
  {
    "url": "assets/js/34.95867e0c.js",
    "revision": "ded8a07f4528088424cfc8263f616581"
  },
  {
    "url": "assets/js/35.46cc2ff0.js",
    "revision": "e18589c81c176922c039ced72b71d18b"
  },
  {
    "url": "assets/js/36.a2059858.js",
    "revision": "94e2f5ec4df3299af63065d3c81b812f"
  },
  {
    "url": "assets/js/37.951e1ebd.js",
    "revision": "07614b05a01d20f5cd58775f4c0884e7"
  },
  {
    "url": "assets/js/38.1778ba82.js",
    "revision": "9fe2b670c64d8b5d7756c8a154cae402"
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
    "url": "assets/js/6.52569a9e.js",
    "revision": "185cc0b56424bb390331b387cc54d712"
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
    "url": "assets/js/9.f2262e66.js",
    "revision": "800c7cbabd1103ca9d78bf8d85e9214b"
  },
  {
    "url": "assets/js/app.c3afddcb.js",
    "revision": "abe7a06f8b8145c0bcec58f789ea4cda"
  },
  {
    "url": "blog.html",
    "revision": "b1eba926be7c2f695849f2c16ef14d90"
  },
  {
    "url": "index.html",
    "revision": "dc55b5888bfc0579cfdb81655ab9b8c8"
  },
  {
    "url": "js-playground.html",
    "revision": "ee15f605961d4ddc17de734ded86d795"
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
    "revision": "51218f72928fcba2d1eb6f12ed2b8ff2"
  },
  {
    "url": "oojs.html",
    "revision": "e49455878a14cea109ea337e0c434ad6"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "e752fd1bcf4636e315085eb00ad2e23b"
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
    "revision": "104bad1b96199a0285c7bcca574e1e7a"
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
    "revision": "8bf23866586131c873fb5858cf3a0939"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "05138d01a8cd0df9315276e9f31aeb0e"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "75692b24c052201cf957b52a2cf044fd"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "9a759d06e68010630acf13e9dfa61b4f"
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
    "revision": "8610b629876b93ebc1b5a2fc10d968f4"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "ad88635234274bbfd619ed679504ef0e"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "523168e63dba47419690cd48b2d1db5b"
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
    "url": "oojs/9-konsep-oop.html",
    "revision": "8676b242b19eb424d8d4ea8841810063"
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
    "revision": "0a9ce64feb64adcb3dd9c3a035b7c73a"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "30f6390fe40f99c77352e0a9397b2515"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "27b12ebda13122245f58d974d82d3e29"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "fdfc219ae92d0ec9e408de494c018339"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "3d4dd59410e1fc9c5442e5c565d19d3b"
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
