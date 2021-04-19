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
    "revision": "882e8406d95deac62b691732131e37bc"
  },
  {
    "url": "assets/css/0.styles.c9a867a4.css",
    "revision": "7b58f13a8cd2862786284c1f38234af4"
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
    "url": "assets/js/11.68ccd3dd.js",
    "revision": "4806818fa5ed2df7ae2f963e96c21979"
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
    "url": "assets/js/20.cc510286.js",
    "revision": "b3e981d50425001237e1eb36359fcab1"
  },
  {
    "url": "assets/js/21.83b236c9.js",
    "revision": "d82530feb389c02d5c355b41bf3d27a7"
  },
  {
    "url": "assets/js/22.73335ad5.js",
    "revision": "019c8a16965ce3d0c1fe873eb95e0c55"
  },
  {
    "url": "assets/js/23.5d9e8186.js",
    "revision": "038d8be531b264208533e33ea1099058"
  },
  {
    "url": "assets/js/24.73f69335.js",
    "revision": "89fe5ec89b69d158a3ddb491866e80a1"
  },
  {
    "url": "assets/js/25.d7143a1b.js",
    "revision": "1d5977068ab7d60a0f08654ade0daddb"
  },
  {
    "url": "assets/js/26.813dfac9.js",
    "revision": "c7f324d24369b130c91e88f087241d04"
  },
  {
    "url": "assets/js/27.28e6651a.js",
    "revision": "eb04e8532f45a53187a76a47e3f98f83"
  },
  {
    "url": "assets/js/28.ef009ffa.js",
    "revision": "24457aebd700d9f6da58a8accfbf8614"
  },
  {
    "url": "assets/js/29.f4a7ab6e.js",
    "revision": "df94e05491e20aeadd71ca5b108cf037"
  },
  {
    "url": "assets/js/3.c5a4816e.js",
    "revision": "712c11bd4b11d3f53fd08cd9a0b9ade1"
  },
  {
    "url": "assets/js/30.42424759.js",
    "revision": "6cc47ef6399f6a319ab1526772097511"
  },
  {
    "url": "assets/js/31.8d318044.js",
    "revision": "fd53213c490c49d1b2be19315dcb4aa2"
  },
  {
    "url": "assets/js/32.52fc7c8e.js",
    "revision": "4b9bc8e6cbb69d5c6f9122cc3ab774f5"
  },
  {
    "url": "assets/js/33.b7c98fd8.js",
    "revision": "4a8e1cab20f9121b577f181600b288ff"
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
    "url": "assets/js/app.ecbedb9c.js",
    "revision": "8cdc64d89a3cecca0ad975cfa3203d53"
  },
  {
    "url": "blog.html",
    "revision": "5f115654f24efa6207fa33b15bb7dec1"
  },
  {
    "url": "index.html",
    "revision": "669fd001e86e603bc9b4b8affe2911b3"
  },
  {
    "url": "js-playground.html",
    "revision": "dd89cf78d35fb86af34cc59e87ee5cea"
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
    "revision": "20042765204a045459ec637f25f5198b"
  },
  {
    "url": "oojs.html",
    "revision": "74728e73e025cf548252e8eceaff5f10"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "5e159dbf81d26852f0c4091895cde89d"
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
    "revision": "20e44972e5ef95b39c44970042826548"
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
    "revision": "99f37da2a286e052a81477dd4bcef462"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "b0e620e327c552fc7d6a5aa8a0ae154e"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "5d7aeb9ecfa39b901b7612c4098180c4"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-repl.html",
    "revision": "579a42b746ba241b9eb0f731af24cb1a"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "playground.css",
    "revision": "ddb48bdc46b970897d1c6b6ee1213e31"
  },
  {
    "url": "playground.js",
    "revision": "a12882c03119d14fd12ed701c2762dcf"
  },
  {
    "url": "portfolio.html",
    "revision": "aae483a0d5b3cefc84c00255cc663d2e"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "bbd9d22eae8fcbe0e5ac0f6b67941e27"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "65b73a8b3c88c851798837a7df1b63b2"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "3b4c7ebadf73e6d127705e22e224a500"
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
