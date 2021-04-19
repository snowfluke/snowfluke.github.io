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
    "revision": "8614f918f6f3c87efef913478eb720d9"
  },
  {
    "url": "assets/css/0.styles.dcc2931e.css",
    "revision": "a508ca76537d21990e4517ba03e83287"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17c84a6f.js",
    "revision": "a98a46d13bfb3779971ffa26d2442841"
  },
  {
    "url": "assets/js/11.9eae28a2.js",
    "revision": "cfaf710e6a549d115b8daed0c672bd45"
  },
  {
    "url": "assets/js/12.d93d4de5.js",
    "revision": "27df866466e0065a8a984f8c575a8eb3"
  },
  {
    "url": "assets/js/13.f7b0d44b.js",
    "revision": "ae7f8d358f4d46024c210c5bef6ccc88"
  },
  {
    "url": "assets/js/14.44f06548.js",
    "revision": "1c57847c16f6d3a331ecedde2b0ed0e1"
  },
  {
    "url": "assets/js/15.c02c535f.js",
    "revision": "d99ee76e8067b494306b0d485dafd397"
  },
  {
    "url": "assets/js/16.37c800d5.js",
    "revision": "8757787247d1a2047c5c757a99f45d82"
  },
  {
    "url": "assets/js/17.3f7e97e9.js",
    "revision": "2bba2bbfb65cb49e320e535c1589db18"
  },
  {
    "url": "assets/js/18.2961418e.js",
    "revision": "e227f60a2a8855afadb02ae6e8044aad"
  },
  {
    "url": "assets/js/19.8568e88e.js",
    "revision": "da37d2c7074cdf32f8554a1789223769"
  },
  {
    "url": "assets/js/2.4b5ec8b8.js",
    "revision": "7a78f9172acb2fefa5b49647222fea9a"
  },
  {
    "url": "assets/js/20.caa08b07.js",
    "revision": "ba65651eb9bf246f8f6705b3a3db1246"
  },
  {
    "url": "assets/js/21.42176e46.js",
    "revision": "2e9bbc8fac3a1c7c5d0cfde09c5ddecd"
  },
  {
    "url": "assets/js/22.bcf0e40e.js",
    "revision": "f134b728786a4743d0e5898315bbecdb"
  },
  {
    "url": "assets/js/23.740cb42d.js",
    "revision": "ace8f96626e6fee9167b91f250c01b32"
  },
  {
    "url": "assets/js/24.867f8691.js",
    "revision": "986c112b1bd1b7a0cabfb45f1e03af53"
  },
  {
    "url": "assets/js/25.ad49f826.js",
    "revision": "00dc34ae5f0fa1954145620fa9b602c7"
  },
  {
    "url": "assets/js/26.1dbd192a.js",
    "revision": "6320d0d896b07b00d1549991ee8233f4"
  },
  {
    "url": "assets/js/27.b29d1fdf.js",
    "revision": "7986e3403110e8e522f019563205e5b1"
  },
  {
    "url": "assets/js/28.d43e7911.js",
    "revision": "eac5109c9f6b8c4902fd7806338aac10"
  },
  {
    "url": "assets/js/29.f4a7ab6e.js",
    "revision": "df94e05491e20aeadd71ca5b108cf037"
  },
  {
    "url": "assets/js/3.4f1cb116.js",
    "revision": "23276b509f60f1187d527f249394c736"
  },
  {
    "url": "assets/js/30.6eb56ba6.js",
    "revision": "37caff5671a9f9eaae4277806d2bb305"
  },
  {
    "url": "assets/js/31.2da03f5f.js",
    "revision": "ed008e3d446a205ce6790d6c39fa1669"
  },
  {
    "url": "assets/js/32.015350d3.js",
    "revision": "6340e20af9ab8fdfb5d8d9a3844f54a4"
  },
  {
    "url": "assets/js/33.053643bf.js",
    "revision": "23bd64e9ee74b829789f52b319c1deea"
  },
  {
    "url": "assets/js/34.4045740d.js",
    "revision": "1205c5b349171083d08fdb3cbdc60cde"
  },
  {
    "url": "assets/js/4.9b03028d.js",
    "revision": "9c3fbd601a864587fbe01b3bc3c8b688"
  },
  {
    "url": "assets/js/5.94e80789.js",
    "revision": "449058e21bb1c9dce4559bfe8d6b32db"
  },
  {
    "url": "assets/js/6.0c5fe24f.js",
    "revision": "57d8f6fbe1d8c8714b87f450ab2e9b74"
  },
  {
    "url": "assets/js/7.62ecf330.js",
    "revision": "898fd758d846056767a27ece41ff92fd"
  },
  {
    "url": "assets/js/8.e2713f03.js",
    "revision": "ab413f119d0ffb96ac70d3c5a6c472db"
  },
  {
    "url": "assets/js/9.6acac3ff.js",
    "revision": "849ef8427b12dbdc38d84f8dc30437b6"
  },
  {
    "url": "assets/js/app.1ac4512d.js",
    "revision": "3cda227482375944d48a6cc7911492b1"
  },
  {
    "url": "blog.html",
    "revision": "79d63d0fa5404e7ac29781e19f932768"
  },
  {
    "url": "index.html",
    "revision": "b1ba57f64d92740d2d9a751aa5c2773f"
  },
  {
    "url": "js-playground.html",
    "revision": "ba32e986763f0bdad6c59a6f4a698fc2"
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
    "revision": "80d873c671e56b5ca17ad1b7aace2818"
  },
  {
    "url": "oojs.html",
    "revision": "3dc825337082366bbc61ccc0876ba6a7"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "90bad7fb8ce1486ff9a03792662fd5e9"
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
    "revision": "870f4068bca86f82f2ef0b292bbce91c"
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
    "revision": "6fd59c5e8762e3c1238d330ce6ead4d1"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "5e55438ccc59d941640e912b387863c7"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "46e4f73ef57b11dca82c998b585458f8"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-repl.html",
    "revision": "db2b59359746463cca3be950ff540a4f"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "playground.css",
    "revision": "34ac89fc14a40d8270b53e0bda678f57"
  },
  {
    "url": "playground.js",
    "revision": "4c163ced587d21e4d921cd2fe921145c"
  },
  {
    "url": "portfolio.html",
    "revision": "cf3b91d6efeb1f2604646cb172c63a47"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "38c7c50b08cf792483831d8a2503aa70"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "259d007eafbc6217662d0298ec85a666"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "3980cebfddac2c5c1b67335ae83ecbf6"
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
