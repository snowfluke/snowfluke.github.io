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
    "revision": "ea4154d5ac371a385c58f4282c6878ed"
  },
  {
    "url": "assets/css/0.styles.5de9df9b.css",
    "revision": "878c0ade25c015ab4cbb2ca9b4cc0352"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.6a61a3a0.js",
    "revision": "2e4c555c6fde4eeea43d62750581a645"
  },
  {
    "url": "assets/js/11.e1d5a23c.js",
    "revision": "0ca2342ccddf720e1f72885c719b9b00"
  },
  {
    "url": "assets/js/12.942ebd63.js",
    "revision": "394ff5b3c77df7b6c5abd32b3a708880"
  },
  {
    "url": "assets/js/13.4f944d59.js",
    "revision": "8824237498b99e7f077a77fa9d7a9e64"
  },
  {
    "url": "assets/js/14.e88e0ca9.js",
    "revision": "4d8c09695f145e1de9987eb3888d2f82"
  },
  {
    "url": "assets/js/15.e71af5c4.js",
    "revision": "9b3e1e591dd51f56ec9c6a06def38c30"
  },
  {
    "url": "assets/js/16.696dbd8a.js",
    "revision": "d47e54a08288390517e0c17590e22ba5"
  },
  {
    "url": "assets/js/17.0bd5b822.js",
    "revision": "6569af49e93c80ab49d3ac0eb7442f96"
  },
  {
    "url": "assets/js/18.57d7d7d2.js",
    "revision": "bd841f9179f9ca01438ca55b76fc2697"
  },
  {
    "url": "assets/js/19.63c02d6d.js",
    "revision": "56763dfe36441b6bc9ce565ef06067e9"
  },
  {
    "url": "assets/js/2.bd6ce25b.js",
    "revision": "76991b174adf41452eee83883c17f1d6"
  },
  {
    "url": "assets/js/20.8d35ee6b.js",
    "revision": "4f1c5a0c814d870291c390d594a0eca8"
  },
  {
    "url": "assets/js/21.709c8c54.js",
    "revision": "13f4279e099cea843d74d74da6aa66ac"
  },
  {
    "url": "assets/js/22.e0d3c4b5.js",
    "revision": "23e6a8864f0e0a9f6e11b665c5e09f6a"
  },
  {
    "url": "assets/js/23.c502dc4e.js",
    "revision": "119fb921843ce86707093f02c1fae933"
  },
  {
    "url": "assets/js/24.db7d0138.js",
    "revision": "31c13bd3650d6902c12f8c799c77c3c9"
  },
  {
    "url": "assets/js/25.c0d3c50f.js",
    "revision": "b56f66826f9a28dd39d62961395e9cd8"
  },
  {
    "url": "assets/js/26.b28e3d70.js",
    "revision": "524a3f35deff145e1b6babbb478e8d71"
  },
  {
    "url": "assets/js/27.d26adcdc.js",
    "revision": "d27cd1ed1ed194eb00010b0ed617797e"
  },
  {
    "url": "assets/js/28.da08df14.js",
    "revision": "9574051a095034c9f7cd8b8eb9cbc736"
  },
  {
    "url": "assets/js/29.4ea5982e.js",
    "revision": "2e7a7fa5864ecc51b405775c98e4ddd0"
  },
  {
    "url": "assets/js/3.c1bd22a0.js",
    "revision": "b9ba0de872b5956a7c6cbc7f930aeea7"
  },
  {
    "url": "assets/js/30.35a66d83.js",
    "revision": "9fd36127b2615ac2241befcd52d545e8"
  },
  {
    "url": "assets/js/31.56488630.js",
    "revision": "2e8251c8908572a2b8fdec2f8064f401"
  },
  {
    "url": "assets/js/32.6859a38e.js",
    "revision": "271349211f755c41ac0b223f117117c0"
  },
  {
    "url": "assets/js/33.d95f46e4.js",
    "revision": "8da2faa47d6602ec2cdae09b54d9d5dd"
  },
  {
    "url": "assets/js/34.7b011cc0.js",
    "revision": "ba461ae501de7f6db0c5b4a34137c8e2"
  },
  {
    "url": "assets/js/35.4bd7242f.js",
    "revision": "34d698bfc8c5d4229f0a8cc44cf057ff"
  },
  {
    "url": "assets/js/36.608cb41b.js",
    "revision": "c9879dafb083185d41abde3d8cffcd12"
  },
  {
    "url": "assets/js/37.fdebb30a.js",
    "revision": "6496ca08858a8e1926ffaadfc89656a8"
  },
  {
    "url": "assets/js/38.7d84e1f2.js",
    "revision": "02a3bb993bafc3239f8d5ea96fc0d537"
  },
  {
    "url": "assets/js/39.e55735dd.js",
    "revision": "49eaf2a0d352de85e58a31ba2d07af75"
  },
  {
    "url": "assets/js/4.aa0e1a40.js",
    "revision": "cd6955aa647f0af16c80938c42865109"
  },
  {
    "url": "assets/js/5.c5a285e3.js",
    "revision": "6973da765d16f6cf5b2f9a0d4e43d6ce"
  },
  {
    "url": "assets/js/6.dbfb1bde.js",
    "revision": "56a2551ec702837dc19922c4282a2b41"
  },
  {
    "url": "assets/js/7.ad0a9703.js",
    "revision": "623a6da7b2c29c5d8965dbdfd9629ee1"
  },
  {
    "url": "assets/js/8.8280889e.js",
    "revision": "c2d342caade972dced4eb8a198bd1170"
  },
  {
    "url": "assets/js/9.d4349e81.js",
    "revision": "09fb64f8917797bc204736a24d86f13e"
  },
  {
    "url": "assets/js/app.1e3dba0c.js",
    "revision": "00b23665d92895a24c5052758064a4a1"
  },
  {
    "url": "blog.html",
    "revision": "bac48b8b5206c4027413437cd91b7cb3"
  },
  {
    "url": "index.html",
    "revision": "01230a6723815e4a64edd4fbfd74409e"
  },
  {
    "url": "js-playground.html",
    "revision": "c004e694e891fb31790a260180178685"
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
    "revision": "bda35e65705ac74f404c08edd7e64e82"
  },
  {
    "url": "oojs.html",
    "revision": "c6878ec3d8bc540e0b481a884770f679"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "24a874870deb4b2e2b7fd3cc583d4a31"
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
    "revision": "b9a2e0e53e4a8e332c64a8de6357fd69"
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
    "revision": "916bd655741f6d24d4cd1ee8e5821734"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "472cc186de086fe0e7d50a7c783b903a"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "3c948592d1bd659daaae5559910e3c19"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "dcd0e7b9af76a8a1cc5101b3c69b79fb"
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
    "revision": "1606a4020b9b86ff18171abeab650b4a"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "adb3148ba42de69f06ab8cf155e0637e"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "54d34e0b107e2c26fe5c327eadcf5c61"
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
    "revision": "13e21ecf86b470e7eb9bf13c35ce6ecb"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "80fde5a98d374fc9b8ff7195f6e26f5d"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "d4d6688571fcd81a34630bfc07f3cdb9"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "480c4cfa1a2994e0d7757ec43bd831b0"
  },
  {
    "url": "post/pertanyaan-interview-populer-frontend-react-developer.html",
    "revision": "760e20827fd0cc95a50b2f2d32fc1273"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "ead3333fbebdfca4da0431ef35d479fc"
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
