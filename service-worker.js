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
    "revision": "95786e427c41ff183670ae97f5b05dc6"
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
    "url": "assets/js/10.013d61b4.js",
    "revision": "1d444fdea6865c3fb8ea57ee6fe4d04e"
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
    "url": "assets/js/19.3e5acb98.js",
    "revision": "c155223227b7b04c4764b0b848e173e3"
  },
  {
    "url": "assets/js/2.bfffb433.js",
    "revision": "76c714dddf817f43d60508bd47832c3d"
  },
  {
    "url": "assets/js/20.79d8ee51.js",
    "revision": "e1e510e5ac2aae21640d2260e1847929"
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
    "url": "assets/js/23.ed704bee.js",
    "revision": "800d8d750f4388bf77893c5baf36e810"
  },
  {
    "url": "assets/js/24.88ca44cd.js",
    "revision": "2a477a041f4b8871ceaf9caca22a8966"
  },
  {
    "url": "assets/js/25.903ec2c1.js",
    "revision": "2b652b61a7ad5a36826af440a917640c"
  },
  {
    "url": "assets/js/26.e340ad42.js",
    "revision": "2c1e3b82995a9856eafe17ca58e9a9bc"
  },
  {
    "url": "assets/js/27.af59e0b8.js",
    "revision": "9676ce9b2262294309532f07a6d0229c"
  },
  {
    "url": "assets/js/28.52a1a2e5.js",
    "revision": "afddaa14072d529e7ab458519955a8ad"
  },
  {
    "url": "assets/js/29.f0f07237.js",
    "revision": "ad5df9cf7ab8b743b65aac59beae8094"
  },
  {
    "url": "assets/js/3.b6cc9c6e.js",
    "revision": "d07d1cc9e431153c2a195cc3eaf268ed"
  },
  {
    "url": "assets/js/30.f0208ea9.js",
    "revision": "02eb46bdf7cc76ded8c17df6089bf671"
  },
  {
    "url": "assets/js/31.3615b24d.js",
    "revision": "c66caaa833344e46a55e64947fc1827a"
  },
  {
    "url": "assets/js/32.9a7a572f.js",
    "revision": "b0946498e1ec49096747e6d66980dc5f"
  },
  {
    "url": "assets/js/33.0b6b9d27.js",
    "revision": "ad7365a09b226a6c5b1106c8a5fad171"
  },
  {
    "url": "assets/js/34.8799d23c.js",
    "revision": "96deb66d8ccd357b03e4b70bffbccdcd"
  },
  {
    "url": "assets/js/35.af131b5a.js",
    "revision": "badc56a1a5347302fc03ac94ea73d425"
  },
  {
    "url": "assets/js/36.99cc8269.js",
    "revision": "a133caea267baedbd5638fa56f75e4a4"
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
    "url": "assets/js/app.e905138e.js",
    "revision": "19acdfc2c83025278d6940c6cc7c9659"
  },
  {
    "url": "blog.html",
    "revision": "fd428d55b547b5ab7e93145edbf3d135"
  },
  {
    "url": "index.html",
    "revision": "fbf14048ed776e51fbdf78f79678d80e"
  },
  {
    "url": "js-playground.html",
    "revision": "58b571211aab5defc2c16e71fc020c57"
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
    "revision": "25380b5e21ae774109587919c85bd80b"
  },
  {
    "url": "oojs.html",
    "revision": "1e7cd5c19a29e10e22506e971d1306dd"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "bf87e056848098824c87f945e30042ac"
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
    "revision": "3ec20cd704a87fcd4f58d844805a9de4"
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
    "revision": "960fc59dd2108c9f26f302b3a1beb741"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "4a9ead0a1bbdea07c09acac5e7b3551f"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "f401fe61b9cd34f3f294c731442c75de"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "cca293da5da2edd910a6df739d16a4a7"
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
    "revision": "77470230b1f00104614efbdc85a10182"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "670b3056d55c6f65772a06caf2f3cf57"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "a83a8f244fda42c2bc4287ba9e3a0369"
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
    "revision": "714b3a76f4c3954e886eaffaec69f077"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "74b62675ec414c8b6760dc59f996b955"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "10a2830d56608847742be095529fbf01"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "4a08c129066749e5c0c6c97469f5fd1e"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "d51a0b717409c32c83f33e820699cbce"
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
