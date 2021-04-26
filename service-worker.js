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
    "revision": "068ac79abb7c599a60a23bebc821aecc"
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
    "url": "assets/js/19.186a83e1.js",
    "revision": "04826ceac2d87a8498d461be6f480504"
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
    "url": "assets/js/21.cd7adbb1.js",
    "revision": "91085727d4a02a15b71dc286018ea7e8"
  },
  {
    "url": "assets/js/22.b1178bf7.js",
    "revision": "afaccd26a18a1e61d074a7d3bf76851a"
  },
  {
    "url": "assets/js/23.a4a350c1.js",
    "revision": "915031cbd5af6c3ca92a3029bdae6f4a"
  },
  {
    "url": "assets/js/24.7a406e4d.js",
    "revision": "0b4217d558164ef85679f3982a7597f2"
  },
  {
    "url": "assets/js/25.570ed590.js",
    "revision": "aea55babd3c01a13bb6f1340eb2d4b87"
  },
  {
    "url": "assets/js/26.8042a975.js",
    "revision": "8050f950e6b95bea6cd1159f59d554ea"
  },
  {
    "url": "assets/js/27.1d5dba42.js",
    "revision": "5a794af2ce533f9189c19f7b229db048"
  },
  {
    "url": "assets/js/28.3a3c6dad.js",
    "revision": "84b212f05f79113de782b33f78421642"
  },
  {
    "url": "assets/js/29.28c9d56b.js",
    "revision": "7b7b9018c94b8179ec4435bca76903c0"
  },
  {
    "url": "assets/js/3.22fe934e.js",
    "revision": "f5d5236b4552365b409287738ae415ba"
  },
  {
    "url": "assets/js/30.fc9238b9.js",
    "revision": "fb8c904aaacf17af79c7a38dec575ac1"
  },
  {
    "url": "assets/js/31.647f97bb.js",
    "revision": "8b98e5e5438448315430c852384f2668"
  },
  {
    "url": "assets/js/32.41118e32.js",
    "revision": "b58406543daef23a7127fc02fb6d52ff"
  },
  {
    "url": "assets/js/33.906f4812.js",
    "revision": "4077bdc7d8316a0ec07e0b1ce8c1e4b9"
  },
  {
    "url": "assets/js/34.16decbc0.js",
    "revision": "9a80215d20e26bf40c0f374ca9126283"
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
    "url": "assets/js/6.cfe4bbe9.js",
    "revision": "0e4c94d7ffc9859d86b4cfa5e4298ed1"
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
    "url": "assets/js/9.068cf5fe.js",
    "revision": "3069a5d4045f41fbfc505adaa5a30e60"
  },
  {
    "url": "assets/js/app.8f1b71b2.js",
    "revision": "c6849e78f8152b09748720259615c98d"
  },
  {
    "url": "blog.html",
    "revision": "ece6098a9789fdf2221d33eb8aa9b1b7"
  },
  {
    "url": "index.html",
    "revision": "6a8f6e03ba4e06ed4563230b65c41a83"
  },
  {
    "url": "js-playground.html",
    "revision": "9be8cc628622e6ca68f6dea810bced80"
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
    "revision": "890a190aa0b535a89478d4bb74ecebc3"
  },
  {
    "url": "oojs.html",
    "revision": "e0b6dccfa39894274041e8ff1250f724"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "d6a63383610770888d9d555ea56143b0"
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
    "revision": "49742710f92e7379d4aff82228a1f0e7"
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
    "revision": "0a24c65ebd36bd033349fdb65766d30d"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "bd4bd711cf24a0f9c7d27b4be7fa34c4"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "a1cdb160becbe2b7ca700e9d046674b5"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "0ed63e2ce44422c2068f3a856c5f4a35"
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
    "revision": "c7f5c3088a9852339714ae387d57321b"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "7847357a7cd2173dcf5d39447067c76e"
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
    "revision": "4b853f8e2fa55a60973e265a29cdd5d2"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "fc604497260380cec206c99e2430c809"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "46d8b94ba04ffe812ea9882dd8ec167a"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "1f5e79854549c399497e3768dc373b64"
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
