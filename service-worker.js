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
    "revision": "32c7a8ea79672e2831eaa4e74ddf9bd5"
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
    "url": "assets/js/16.e8a8349c.js",
    "revision": "e2bc7646ea0c302025f5779b37b00743"
  },
  {
    "url": "assets/js/17.49d0cb92.js",
    "revision": "ad261d492d4ee925499c03be812d7d17"
  },
  {
    "url": "assets/js/18.f0fcf882.js",
    "revision": "a369e68cdbb9e4bc09e178c556aa6196"
  },
  {
    "url": "assets/js/19.ae412d68.js",
    "revision": "c46a209bcf1b66106082937702aae2a2"
  },
  {
    "url": "assets/js/2.ec744198.js",
    "revision": "79294f6e7b4d9ae3bd9d9f4b71845357"
  },
  {
    "url": "assets/js/20.5f80b4a6.js",
    "revision": "613ef773e8148afe5b12003148420600"
  },
  {
    "url": "assets/js/21.b05a01a4.js",
    "revision": "f67ff94139378c4d7f26da5bb3ece116"
  },
  {
    "url": "assets/js/22.607b8fe1.js",
    "revision": "8c52ef256eba9044265694abca6b9bd6"
  },
  {
    "url": "assets/js/23.282bcb73.js",
    "revision": "91645c5ed11f45d90c826620b6150461"
  },
  {
    "url": "assets/js/24.02e8d8d8.js",
    "revision": "a7c60cebe9b8c505ef4cdd046a47545a"
  },
  {
    "url": "assets/js/25.0eca2544.js",
    "revision": "af4bcca65a3177b810126c1d316505d4"
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
    "url": "assets/js/app.c265e12d.js",
    "revision": "6fe2a7296f0ffd2ff583ba6ac5122558"
  },
  {
    "url": "blog.html",
    "revision": "69b1525d23dbeda0342fcbf89fa56b3d"
  },
  {
    "url": "index.html",
    "revision": "b1a882e72d62801c3ea58fd9fc2dd1c2"
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
    "revision": "80589ff043ce03c5b8f4e84a0dd9e91d"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "c1821c0e1164f103316160309ffbbac0"
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
    "revision": "5ecd12318f7e5b4d7081f2436ea94ee2"
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
    "revision": "b112a251f482bd16089ab51cf93f7932"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "5ab798dcf8fbf8caa0cb24e25dd0d831"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "9301b5643e4251614cb4a3536d684bad"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-repl.html",
    "revision": "c10208b6ce44b8c6c72d6d9dd4394456"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "portfolio.html",
    "revision": "953fb83aa52643f3a55d7f4ee0565816"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "4b6be46fa5465c6ca09617c072be2b00"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "c25071faf78cabb19be6058b637909c7"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "a6255e97a3650915ceb00252ad1bb868"
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
