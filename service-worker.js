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
    "revision": "9ea8d04ace35aede428dfeeb67b75072"
  },
  {
    "url": "assets/css/0.styles.584ceba4.css",
    "revision": "53e200c234491b50bd81b08ba4c55029"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4c2d8bff.js",
    "revision": "216f3f5df8f7cf6c27c8486f1677122f"
  },
  {
    "url": "assets/js/11.247e1937.js",
    "revision": "3279987b6c3823945b0c2ce51d5c2129"
  },
  {
    "url": "assets/js/12.9c2df17e.js",
    "revision": "528261ac1a7eae4eb0d10d051e8bf385"
  },
  {
    "url": "assets/js/13.8452b4eb.js",
    "revision": "3e409ecb20cb0e19317d655b93c8696f"
  },
  {
    "url": "assets/js/14.3d811030.js",
    "revision": "c3160ff6ff8d2d491ce43acd54bd7346"
  },
  {
    "url": "assets/js/15.009e2154.js",
    "revision": "5716d4432df693750645462ed3d9db9e"
  },
  {
    "url": "assets/js/16.0d1ef692.js",
    "revision": "5722eab92c214415bc52b4951c161996"
  },
  {
    "url": "assets/js/17.1f4ed36e.js",
    "revision": "3b6c5ab4040e66ef024a199a4d436661"
  },
  {
    "url": "assets/js/18.8c24f30f.js",
    "revision": "e7e2873b4a56f85242e547d37fbd3d09"
  },
  {
    "url": "assets/js/19.4a4c0726.js",
    "revision": "e47bae31274f4ee84670631ae2032de3"
  },
  {
    "url": "assets/js/2.bfffb433.js",
    "revision": "76c714dddf817f43d60508bd47832c3d"
  },
  {
    "url": "assets/js/20.c452f55b.js",
    "revision": "a1e3ad2ae860960779ea45fff33a093c"
  },
  {
    "url": "assets/js/21.79dedd2f.js",
    "revision": "71f38e70ee200c0a579b9967ae03d03c"
  },
  {
    "url": "assets/js/22.5eadbc87.js",
    "revision": "94adea1385fe6792f10e45a7351943b3"
  },
  {
    "url": "assets/js/23.9e52f732.js",
    "revision": "591ea5d6ab24c0264d32501677c7b077"
  },
  {
    "url": "assets/js/24.8f39dfb0.js",
    "revision": "47391d68c8f7338c6c1c658b8b98d1c8"
  },
  {
    "url": "assets/js/25.fcad6025.js",
    "revision": "0f9f9ee81742ff9fe16a2fb16b76c818"
  },
  {
    "url": "assets/js/26.7d4900a0.js",
    "revision": "ef33d6c79e98fbad5bd8a42f46a5c80b"
  },
  {
    "url": "assets/js/27.d1bf1f99.js",
    "revision": "af51f576e16b96d87be07f33f40f5fa6"
  },
  {
    "url": "assets/js/28.bc1e560b.js",
    "revision": "3de69b382c52d5be3ee6d6e5de21ad62"
  },
  {
    "url": "assets/js/29.b56dd807.js",
    "revision": "15ff2c044c133c3b86eafac517917745"
  },
  {
    "url": "assets/js/3.b6cc9c6e.js",
    "revision": "d07d1cc9e431153c2a195cc3eaf268ed"
  },
  {
    "url": "assets/js/30.bf43e088.js",
    "revision": "4d92cc2e828641484abf6e96b876cc60"
  },
  {
    "url": "assets/js/31.f27ad90e.js",
    "revision": "6a2c930c16c109a3e680224f6722118d"
  },
  {
    "url": "assets/js/32.5cb386cb.js",
    "revision": "29e5e63f3ff3d494e94ab4158ad09507"
  },
  {
    "url": "assets/js/33.c3fa15d6.js",
    "revision": "6f6ad10f582253f48627dfc778c39a9c"
  },
  {
    "url": "assets/js/34.117bc2a2.js",
    "revision": "00c1d350447bde456b068640caf69229"
  },
  {
    "url": "assets/js/35.eae79275.js",
    "revision": "b2d63ba6d37dcd5a0caa1fdacf23830f"
  },
  {
    "url": "assets/js/36.9086b33d.js",
    "revision": "e7e6f919d66482401162c5e6276d6e77"
  },
  {
    "url": "assets/js/37.1f8b2947.js",
    "revision": "83b6fd86942b2136a2118c0029a6e393"
  },
  {
    "url": "assets/js/4.d15a4acd.js",
    "revision": "f812799a17eeb253a043e933960f8c02"
  },
  {
    "url": "assets/js/5.40362a46.js",
    "revision": "23b65320e313bd5628b312e62d993379"
  },
  {
    "url": "assets/js/6.a18469db.js",
    "revision": "a143df650cac653b3ddca20b2ca644b1"
  },
  {
    "url": "assets/js/7.a6f8768e.js",
    "revision": "1c9d1b259d9ed79e3be21fa6bbf86868"
  },
  {
    "url": "assets/js/8.65b4437e.js",
    "revision": "f6867fa10af9f511ea46b24273208630"
  },
  {
    "url": "assets/js/9.873fabc5.js",
    "revision": "c4ab1f250c762e931e8f7f5c7f59a7ca"
  },
  {
    "url": "assets/js/app.97046cfc.js",
    "revision": "539cb4618fc3a3eb66b538e551705e9b"
  },
  {
    "url": "blog.html",
    "revision": "93aee8da9bf47dccc4ade8a78b5e25c5"
  },
  {
    "url": "index.html",
    "revision": "e3edde840f8fed819ffb29bc3c2eff4a"
  },
  {
    "url": "js-playground.html",
    "revision": "1898e88002c115c1af1ea365d45dcee7"
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
    "revision": "ea4e5b02d75cef2c0d596633701ac604"
  },
  {
    "url": "oojs.html",
    "revision": "2d6e273ae853c68b37976cd5527b5b96"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "7ca67f455639b515397809192875853e"
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
    "revision": "98e858d972a0e04275a2c7393e6b7956"
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
    "revision": "7403aacdf4ce4336394d508f79ec9e28"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "9711add094c4ca596331832413087f99"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "331804f5839676f2f6a1e64221a8abac"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "cd4cba49079586f60a0df8b39c89fa01"
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
    "revision": "1de528a9f4b26c0679d4ded7662a10f0"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "99b4cc3e3304ddfefa4c1f74e75fc7b2"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "3d8835603199984abf46a56282088057"
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
    "revision": "8684f4b1dbfd3b56acc5dc119dde6a22"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "eb3d39fdb4c3c30e93b9d1bf76dc238f"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "13967d95503f733df1552115251b5af2"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "7e1bbcb65e618bf836c0a1aeda3a5550"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "31d1a4da5a2377f1411aae8a06f62d1f"
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
