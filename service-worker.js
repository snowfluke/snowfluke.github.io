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
    "revision": "cd3793086be3aeb234b6059dc29134c4"
  },
  {
    "url": "assets/css/0.styles.7f39ee0f.css",
    "revision": "6f0ccdd71bdc16150b4fe096c78e3737"
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
    "url": "assets/js/19.5df372e0.js",
    "revision": "58a4ab920509f20d1c531bb9e86c01c7"
  },
  {
    "url": "assets/js/2.ec744198.js",
    "revision": "79294f6e7b4d9ae3bd9d9f4b71845357"
  },
  {
    "url": "assets/js/20.94ce9951.js",
    "revision": "c453a6b94e7e898559ce1114bdb206c9"
  },
  {
    "url": "assets/js/21.ac2a5a64.js",
    "revision": "df3cb9e238ad2e3c8cac254891d374c9"
  },
  {
    "url": "assets/js/22.88ebe57d.js",
    "revision": "dc3cfeee890c308d1e08065dcd2e86bd"
  },
  {
    "url": "assets/js/23.544d36f7.js",
    "revision": "efbc72f09fc7a3f2bdb4b8263d06b7d1"
  },
  {
    "url": "assets/js/24.283aff25.js",
    "revision": "587aecf9913ee4a5f35d22f00c5b4db1"
  },
  {
    "url": "assets/js/25.5691d94f.js",
    "revision": "0f7c82a709c98f7a3c7616e5e79e7127"
  },
  {
    "url": "assets/js/26.672ef8d6.js",
    "revision": "b862a0227dcffa6409fa9bbccf62fbaa"
  },
  {
    "url": "assets/js/27.8402adb3.js",
    "revision": "0460cc51a75de28e890524af20e1b2a4"
  },
  {
    "url": "assets/js/28.2bfb1691.js",
    "revision": "b774a26e4cf37b3aefde7845578e058b"
  },
  {
    "url": "assets/js/29.e7071296.js",
    "revision": "7f0973dbff091aa725268e61a4593fe2"
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
    "url": "assets/js/5.9fd0af53.js",
    "revision": "88975b516947e2c0a168c7e79d5c841a"
  },
  {
    "url": "assets/js/6.d7badf11.js",
    "revision": "c8abcd389731c96cd41724663479547d"
  },
  {
    "url": "assets/js/7.66ef9e5d.js",
    "revision": "0253f67a1e02eef2c397c717a5408779"
  },
  {
    "url": "assets/js/8.40683f71.js",
    "revision": "941fc974bccecde9541def8118a997ad"
  },
  {
    "url": "assets/js/9.525d4cd5.js",
    "revision": "fa7a7a5a71ac4833eb8f6773deff7da7"
  },
  {
    "url": "assets/js/app.6a682177.js",
    "revision": "11254383e57a3ab37704c417a950ca69"
  },
  {
    "url": "blog.html",
    "revision": "699ae2c562a051cea0aba56ff79a9aa1"
  },
  {
    "url": "index.html",
    "revision": "3bacac21b74f7f1f2c01aa31d4aead02"
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
    "revision": "bd7eeeb203683186ea3e1d14f63b52f6"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "746554b5f596c8ae14a3166c352d251a"
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
    "revision": "df825924a0ca3ebc0b09ee6c29b140ff"
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
    "revision": "6590f89d51b6d2e7c56dfe359e5d211a"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "6a72f99da771fcbc9257bbded572e11a"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "816260fef6412d5876896ec68fdd6794"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-repl.html",
    "revision": "fd576bd9dd835db42d77b9440a34f4a8"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "portfolio.html",
    "revision": "71f58d593ae843630177d660bccd20aa"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "74322bfcd111147d36dc6d83edaef85b"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "d2a0594b7519a570b9c7a9da90223f39"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "29ae70f40c8aaa468fff07ebac5e4679"
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
