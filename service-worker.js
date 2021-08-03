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
    "revision": "7ad737226bb2b8dc8a916ed5b92ee19d"
  },
  {
    "url": "assets/css/0.styles.f7f0d31a.css",
    "revision": "b5c17597d5e229eef4c4ae541ef549d3"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.bdf3f4de.js",
    "revision": "4a5bd5ba059429a1f018e2dace7a5170"
  },
  {
    "url": "assets/js/11.a4247383.js",
    "revision": "7bb33bf381b34018c53e948441337875"
  },
  {
    "url": "assets/js/12.abbda4a9.js",
    "revision": "1fde71402b16351914721239853e8584"
  },
  {
    "url": "assets/js/13.51f9183f.js",
    "revision": "a4cd479593cfe5b90e1d9768cb95a621"
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
    "url": "assets/js/17.955ecdd2.js",
    "revision": "a915a4bbd30f01414755d715e91b8350"
  },
  {
    "url": "assets/js/18.185a48c1.js",
    "revision": "85939c22b73c0fb774afa66831d5448b"
  },
  {
    "url": "assets/js/19.ce97bc80.js",
    "revision": "1fa8bdc3fd57c2093efd4dc6c720a807"
  },
  {
    "url": "assets/js/2.bd6ce25b.js",
    "revision": "76991b174adf41452eee83883c17f1d6"
  },
  {
    "url": "assets/js/20.9e56a9a4.js",
    "revision": "f393e164976b558e3ea82c5dc033267a"
  },
  {
    "url": "assets/js/21.e6a7130c.js",
    "revision": "1224a7e75a6f796856498a6e78b05396"
  },
  {
    "url": "assets/js/22.4386370d.js",
    "revision": "c430e956473e83a6c3fbed2d03dc2164"
  },
  {
    "url": "assets/js/23.e8eaeac3.js",
    "revision": "bd1003edc3069f846412b89b40dc075e"
  },
  {
    "url": "assets/js/24.349f9597.js",
    "revision": "ad3e528bbf3b3c1e3226a43d1d30f964"
  },
  {
    "url": "assets/js/25.0ca16ffb.js",
    "revision": "77bca2510da2d49b00dd7dd9c6b6944f"
  },
  {
    "url": "assets/js/26.884ea1f0.js",
    "revision": "319353eb2cf72fbc94d6e987705ef7e2"
  },
  {
    "url": "assets/js/27.9d5c6b94.js",
    "revision": "c050844377407c3feae7020c67072a2a"
  },
  {
    "url": "assets/js/28.e8488f96.js",
    "revision": "b4826b6cac51f00da617b20416501d64"
  },
  {
    "url": "assets/js/29.c9432e84.js",
    "revision": "57b0a98b0a274ad60276e52c1fd3c46e"
  },
  {
    "url": "assets/js/3.87d3ddd4.js",
    "revision": "b489d7861cc4d3319ea5d2d274e15a1c"
  },
  {
    "url": "assets/js/30.097af92a.js",
    "revision": "36eefa02dbfa26683f6bf9a0f0ecad05"
  },
  {
    "url": "assets/js/31.9e37fb1a.js",
    "revision": "1f6a6679003468903c09c59c7a2591e6"
  },
  {
    "url": "assets/js/32.51fbe6e6.js",
    "revision": "595b756f420de0692708eb0cb65da874"
  },
  {
    "url": "assets/js/33.86a074f8.js",
    "revision": "b1db475921ab7523e69b75d8a142485d"
  },
  {
    "url": "assets/js/34.fa23a78e.js",
    "revision": "f2876da807bed1eb29f7e2d19d3c4c4b"
  },
  {
    "url": "assets/js/35.7cb98e89.js",
    "revision": "6a87a14f3e64365d52705cf20d3acc6c"
  },
  {
    "url": "assets/js/36.ddd4bd0b.js",
    "revision": "438f87cdb75d92515edcf1bfc03848a2"
  },
  {
    "url": "assets/js/37.a3da7260.js",
    "revision": "a00facd6a9504cc98c73a8053fdf6acb"
  },
  {
    "url": "assets/js/4.aa0e1a40.js",
    "revision": "cd6955aa647f0af16c80938c42865109"
  },
  {
    "url": "assets/js/5.f1dc1806.js",
    "revision": "d6d59f625e358a3ef46d4ba84f961735"
  },
  {
    "url": "assets/js/6.dbfb1bde.js",
    "revision": "56a2551ec702837dc19922c4282a2b41"
  },
  {
    "url": "assets/js/7.a297b0f2.js",
    "revision": "1caecf2d864fa9c394bdeb2fe6822b65"
  },
  {
    "url": "assets/js/8.12582e85.js",
    "revision": "9d87d16d96392294b0a124355474b8e6"
  },
  {
    "url": "assets/js/9.c557f52c.js",
    "revision": "99f05d24ac2d22621467e68880215c1a"
  },
  {
    "url": "assets/js/app.a932a087.js",
    "revision": "da4b2dd22c730b924998a4ee86e188e0"
  },
  {
    "url": "blog.html",
    "revision": "0c6693e4767765a288d72a5302460cbb"
  },
  {
    "url": "index.html",
    "revision": "4de773e5e66c6ac4cd05c7c7556f9c52"
  },
  {
    "url": "js-playground.html",
    "revision": "7e83bd77f910bcaa3d4e9cde455033d7"
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
    "revision": "93d464c163609fafc31c34a215bf41a8"
  },
  {
    "url": "oojs.html",
    "revision": "11be7e274d5a640d801ece912d2fe9bb"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "b864d63fce4cf541f89f8d0e437c4f68"
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
    "revision": "aa21a36f68d2451fe07cfc0e711120b8"
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
    "revision": "d6c72bf3d63962a71f2ad6687fc998fb"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "5bb70c4d79388526690720f79c51c901"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "8c2f87f94987c94db7d08382c2d4d41b"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "075ed3837257f2a5df651caa9e8e8ee0"
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
    "revision": "e9d24721d5b958ea239a8ecd8ebf80d6"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "fd39088257bf9102d61c77512a015e24"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "383abdca24e756cd1f562247ebf0e32a"
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
    "revision": "78da05311edb695e8dd998abc907f314"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "3d8f7b1cf33dcc9ef9b3500cb6a45424"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "a4ae72eb1c61d1bf1ad792e9dca77cf5"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "0762d0efb3b62b62f3b735339da5de2a"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "f6fb62bed4adbf486a0c1b4131731155"
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
