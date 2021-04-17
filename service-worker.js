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
    "revision": "b3858e800f24b15613c4b2b92e2a0746"
  },
  {
    "url": "assets/css/0.styles.3b53e500.css",
    "revision": "e0c060141e8d38869501da739e099743"
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
    "url": "assets/js/18.86056de6.js",
    "revision": "cc8126b4af1c1dc9158dced2427b4831"
  },
  {
    "url": "assets/js/19.9c487006.js",
    "revision": "dd04ac9db56f59f2c4a177aaa05a6654"
  },
  {
    "url": "assets/js/2.ba3fe6ac.js",
    "revision": "59aba9011a3891f3af264bad47355cde"
  },
  {
    "url": "assets/js/20.346428f4.js",
    "revision": "89740ca5d9de91a0205d39dbcbe78232"
  },
  {
    "url": "assets/js/21.299b2ca6.js",
    "revision": "4aa4c5ad0f61bae3e6d09c4e884cc5d8"
  },
  {
    "url": "assets/js/22.4ac4e7b2.js",
    "revision": "29d30ab76086b8624f5f291f0988caf1"
  },
  {
    "url": "assets/js/23.e358fa4f.js",
    "revision": "4f94c453501eb83ddf6716da4c81e870"
  },
  {
    "url": "assets/js/24.9ea0d7b3.js",
    "revision": "30a91cf71c0478a80050c7c9dc9b0849"
  },
  {
    "url": "assets/js/25.c9518464.js",
    "revision": "7c0443c6bb9ce623a9880a8cb615c733"
  },
  {
    "url": "assets/js/26.01ba71dd.js",
    "revision": "10159fe6f0616f0f60cb3ac5940a1dce"
  },
  {
    "url": "assets/js/27.7bd13239.js",
    "revision": "a3dbe9ed6e8587398aa7c92cedbc90c3"
  },
  {
    "url": "assets/js/28.f22d22cd.js",
    "revision": "b197b07b5e11645b79fadd179ef1f53c"
  },
  {
    "url": "assets/js/29.a232c130.js",
    "revision": "76df2c84a7d1968c2fef03ed98f8b684"
  },
  {
    "url": "assets/js/3.239d5006.js",
    "revision": "6033f48a4d05006489e30f4a4b44306a"
  },
  {
    "url": "assets/js/30.e99550ec.js",
    "revision": "198569f9a41d11a999880ceb98afb073"
  },
  {
    "url": "assets/js/31.06d8611c.js",
    "revision": "97037e99a164f779305a269b47e5fbc3"
  },
  {
    "url": "assets/js/32.026928c1.js",
    "revision": "2878974bbafd6e2e63ad94e878a68c4a"
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
    "url": "assets/js/6.8661dcfb.js",
    "revision": "58406880a9a42baaf68a5379fcf3fac3"
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
    "url": "assets/js/9.9d0bbf07.js",
    "revision": "afd505729e4e35fff069d622c729701b"
  },
  {
    "url": "assets/js/app.bddcf2a3.js",
    "revision": "99a1a1c6c9f2062d1c1bd9e813d7cf60"
  },
  {
    "url": "blog.html",
    "revision": "afaca350c2d8d484b8fa2d3e7146ce61"
  },
  {
    "url": "index.html",
    "revision": "65034be4055280cefe3fed3bbc21d023"
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
    "revision": "50e4f8d07473bf49b744b92e64cba148"
  },
  {
    "url": "oojs.html",
    "revision": "8725ecd25521e3792278b026a9d32a82"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "1104553c1adf38243d6652e8043f743a"
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
    "revision": "5a6acf1c1d9b5c621220e62909dcdd39"
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
    "revision": "0b09a3fe3cab4b5fac8a9d6eeb834bb8"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "795dd54576811bf417b78645a5997d48"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "8680c4724976557744d3e0c054e1ebef"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-repl.html",
    "revision": "8908755b944b85dc395c5ee919a822f3"
  },
  {
    "url": "oojs/5/ferenc-almasi-EJSaEnVvZcg-unsplash.jpg",
    "revision": "909ea773718cbac3d183a780de43460c"
  },
  {
    "url": "portfolio.html",
    "revision": "c19c584b3a22fb9f775ac433b9add234"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "88b316b8d4b185bf42086b6b8dcae503"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "d6e4b7ac363fb9df87ebb2040a526e7b"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "4c8e099101225b89c4b9416682b76d77"
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
