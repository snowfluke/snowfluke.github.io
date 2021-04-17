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
    "revision": "6d9cbea04276c9fc994df77a3065a41c"
  },
  {
    "url": "assets/css/0.styles.efbe6bc5.css",
    "revision": "030e0598300e6375883d38fc34dbdca9"
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
    "url": "assets/js/13.be0e3eae.js",
    "revision": "d92fc16c2ebbc94f800e50e77e6f371d"
  },
  {
    "url": "assets/js/14.81fb090d.js",
    "revision": "97fd7e8d28c59339d90896796422b1fa"
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
    "url": "assets/js/19.e2e4316f.js",
    "revision": "4fbbc58022ac52e6495d8ad184264700"
  },
  {
    "url": "assets/js/2.ec744198.js",
    "revision": "79294f6e7b4d9ae3bd9d9f4b71845357"
  },
  {
    "url": "assets/js/20.202a1f6d.js",
    "revision": "413f0caf33561eb21097cbfe8fb67dcc"
  },
  {
    "url": "assets/js/21.0b7f8356.js",
    "revision": "8668e9fa235ebf0d0642744d26aa64a9"
  },
  {
    "url": "assets/js/22.4381945d.js",
    "revision": "cd43611438d0c40e72c3838a37e2230c"
  },
  {
    "url": "assets/js/23.282bcb73.js",
    "revision": "91645c5ed11f45d90c826620b6150461"
  },
  {
    "url": "assets/js/24.87ee5b3a.js",
    "revision": "12618328c92a17d88fb4fd781d15dd94"
  },
  {
    "url": "assets/js/25.a8bc8931.js",
    "revision": "fbfbd21db6293b6814915c2f418f81dc"
  },
  {
    "url": "assets/js/26.987cf09e.js",
    "revision": "4a024c4a51fe65798d512543e69af042"
  },
  {
    "url": "assets/js/27.23947c86.js",
    "revision": "58355819e81718f3ded43835a1d36096"
  },
  {
    "url": "assets/js/28.86352ed5.js",
    "revision": "8d06c2d86b7e76e90935e0e201ce29a4"
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
    "url": "assets/js/5.807712b2.js",
    "revision": "8d4ff9404577288c81f7620e86f8dbb6"
  },
  {
    "url": "assets/js/6.0d6a9741.js",
    "revision": "7ead14c8d9709ff274720e748d6afe30"
  },
  {
    "url": "assets/js/7.e9de2391.js",
    "revision": "5c632fe85bc1788c1dd4f0a76213d169"
  },
  {
    "url": "assets/js/8.ed11c999.js",
    "revision": "a61d353b323adfce1dc459a109617246"
  },
  {
    "url": "assets/js/9.525d4cd5.js",
    "revision": "fa7a7a5a71ac4833eb8f6773deff7da7"
  },
  {
    "url": "assets/js/app.0bf9b13e.js",
    "revision": "605b395c9cb6648a466bee1612085a3d"
  },
  {
    "url": "blog.html",
    "revision": "8496c6f9eb5eabde07c6f240feec8409"
  },
  {
    "url": "index.html",
    "revision": "de0df8a2db5d1870b07d23e2e19d34a9"
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
    "revision": "44c3a7a3c285630576ae428da27726d3"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "6bcae90ba2d103ffeeb9d823d6e93e4a"
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
    "revision": "2da7748b62d34c0b46db298ae6e47d70"
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
    "revision": "3912ffec2b123e539f22cdb52887315e"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "6984fdcb997648ab7a00c3ac9a5e1606"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "1a030391769a4dbb20a22d723fce4e67"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "portfolio.html",
    "revision": "d68423ab40884e9b1e844abdc086b121"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "e2c22a2eb4f0364d17e9688ef7407bf0"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "789118689dee721001ec5973ef4d6395"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "ed2d1eae8114e477fb3963d6c52aef53"
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
