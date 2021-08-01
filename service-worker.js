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
    "revision": "05d86fbb863bab79964613c5d8e90a6f"
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
    "url": "assets/js/10.f4352280.js",
    "revision": "d675eb32e0f05370bb600c230521fde5"
  },
  {
    "url": "assets/js/11.413904da.js",
    "revision": "1a226a95a99aa9d8edbf2cf996b45207"
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
    "url": "assets/js/15.9dad45a2.js",
    "revision": "6bfca705331b979a2d99a36406872d5f"
  },
  {
    "url": "assets/js/16.0d1ef692.js",
    "revision": "5722eab92c214415bc52b4951c161996"
  },
  {
    "url": "assets/js/17.f674906b.js",
    "revision": "e8d1c7cce5b7e2b595ddcb635c2270a9"
  },
  {
    "url": "assets/js/18.8c24f30f.js",
    "revision": "e7e2873b4a56f85242e547d37fbd3d09"
  },
  {
    "url": "assets/js/19.0bc208f7.js",
    "revision": "6e817430c5ab8c8aaf2589c3eb91dd30"
  },
  {
    "url": "assets/js/2.8a1d3fc1.js",
    "revision": "225f470f0d299b9c6d837ba97ae86a19"
  },
  {
    "url": "assets/js/20.916b8a11.js",
    "revision": "98c873e948237bc33a596f1d832d2b0a"
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
    "url": "assets/js/23.17bfb9ce.js",
    "revision": "3119e53faa09cacb20584a6e399665ba"
  },
  {
    "url": "assets/js/24.b0933449.js",
    "revision": "aee51a83448755215a05ea4817036e1e"
  },
  {
    "url": "assets/js/25.00d08cb9.js",
    "revision": "95d4aaea245cd4a99d60300c390772f4"
  },
  {
    "url": "assets/js/26.854f814e.js",
    "revision": "4af6fb2b1babc6dd324764cefdf9d608"
  },
  {
    "url": "assets/js/27.b49189be.js",
    "revision": "768a4d3f7fa4e8ddde46f19939e282dc"
  },
  {
    "url": "assets/js/28.a3384a50.js",
    "revision": "b93c4600dbd706407374724be07cdab8"
  },
  {
    "url": "assets/js/29.7bca090e.js",
    "revision": "ac1183f7efe2e405d6480c496329bed2"
  },
  {
    "url": "assets/js/3.54d591e7.js",
    "revision": "b278365d29ccc3119319ab4ed5b05deb"
  },
  {
    "url": "assets/js/30.87bf553d.js",
    "revision": "67a1b2b725f3dcc74ab2edd413489418"
  },
  {
    "url": "assets/js/31.6b69c5da.js",
    "revision": "76c4c19a8350def91edfa318b6577037"
  },
  {
    "url": "assets/js/32.a89caec4.js",
    "revision": "29431088c531bbf242da9edb37908cf0"
  },
  {
    "url": "assets/js/33.9b640d86.js",
    "revision": "5715878c0a4681a085d391e877bbbc75"
  },
  {
    "url": "assets/js/34.4610aa3a.js",
    "revision": "34101fe268153632df075bda997e9813"
  },
  {
    "url": "assets/js/35.00db8724.js",
    "revision": "948fb9f538d0c19c7117c2c3a427ac92"
  },
  {
    "url": "assets/js/36.be05e0db.js",
    "revision": "a3f550a7cb50aa10be165b35e8ffad35"
  },
  {
    "url": "assets/js/37.da5684c1.js",
    "revision": "6a9fb74e74003ec664b5ac12a3d55fd7"
  },
  {
    "url": "assets/js/38.80defdb6.js",
    "revision": "aed1de8d12cecb6aa49620a06f6b7c0d"
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
    "url": "assets/js/6.e231aa29.js",
    "revision": "afd27f09e37a652b0a947dc505a1e2ae"
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
    "url": "assets/js/9.fb083ae8.js",
    "revision": "8dfe8d38a17fb4714003bf724bc29f99"
  },
  {
    "url": "assets/js/app.e6882d5d.js",
    "revision": "c9afd2f94b42c790103a274b81891cdb"
  },
  {
    "url": "blog.html",
    "revision": "80aa2aa6efd46ddb1c38d40091f8a6e9"
  },
  {
    "url": "index.html",
    "revision": "cce42d81e578f3edc0f3b83b806c0ac3"
  },
  {
    "url": "js-playground.html",
    "revision": "70808c966fcc5f10e0a8d0f2db163f4f"
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
    "revision": "3dccee996b85dc15f5b1a07541eb0b1d"
  },
  {
    "url": "oojs.html",
    "revision": "f8573dd544eb2eadaf8392c934fdc67a"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "6cd13e9215d061800fd5d791465cf5eb"
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
    "revision": "1b3b101aee34c75b352d92ea0d54da58"
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
    "revision": "e8d55456262fec683b650dc3c5f268f9"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "0c82507823fb7a6649257e13d7ea2138"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "02c748e552eca80d28b151590e9af144"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "a0b23f4916dc81fab94e56093482164d"
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
    "revision": "39bc70c959cd8b91884cce48eed96ea3"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "e5765c2d884147b7afadb00b2377bacb"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "249eec06fa6c8ec891e466b5e9649a3e"
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
    "url": "oojs/9-konsep-oop.html",
    "revision": "d3702392405c4e6740ac7c1bb639ebd6"
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
    "revision": "baba916dbb212d3c43d2fb2cd0556238"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "5cace26b7b7ecb6e0e2c8a8997b87d5b"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "b81022f2ebfd80c636e9d53acd8000ef"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "0838ce41be75962be0d41f2d479b7410"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "0bf46f4be638aeec68bfb3e0e3b90823"
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
