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
    "revision": "5250d3cd29fd046eb0edac592fa0ed57"
  },
  {
    "url": "assets/css/0.styles.5de9df9b.css",
    "revision": "878c0ade25c015ab4cbb2ca9b4cc0352"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.347c6beb.js",
    "revision": "552e3b2eef9537d3bcc1113202ec7c7a"
  },
  {
    "url": "assets/js/11.f9b02ec0.js",
    "revision": "f5fd7bb539ac1f8924857be809ff6ab5"
  },
  {
    "url": "assets/js/12.be257645.js",
    "revision": "f481cc8bbf5cb5fc7afccaf895daf989"
  },
  {
    "url": "assets/js/13.dbca09a0.js",
    "revision": "4d8126ed70ece6cbbd48c54a8e3385ea"
  },
  {
    "url": "assets/js/14.e88e0ca9.js",
    "revision": "4d8c09695f145e1de9987eb3888d2f82"
  },
  {
    "url": "assets/js/15.0a7fa805.js",
    "revision": "df8ce0a7a29afd2f25a147e887a2d34b"
  },
  {
    "url": "assets/js/16.c003f6b9.js",
    "revision": "9a936291e63c9e2d484a1a50419080b2"
  },
  {
    "url": "assets/js/17.65d0b855.js",
    "revision": "77d6b354d5fde7a13edc19e7acbafe45"
  },
  {
    "url": "assets/js/18.d37b8769.js",
    "revision": "259389aa56bef9d49086e01007507f41"
  },
  {
    "url": "assets/js/19.38c4dd75.js",
    "revision": "5dfde75f171ee6e75d325d5838d26300"
  },
  {
    "url": "assets/js/2.bd6ce25b.js",
    "revision": "76991b174adf41452eee83883c17f1d6"
  },
  {
    "url": "assets/js/20.58e880db.js",
    "revision": "ac26aa938fa322e4be77b6c1ee95b241"
  },
  {
    "url": "assets/js/21.85e14122.js",
    "revision": "72dfc3f64cea3e919b00f4110269f01d"
  },
  {
    "url": "assets/js/22.71312aa6.js",
    "revision": "1fd094390e4fd1587575369b9cf22afc"
  },
  {
    "url": "assets/js/23.7253e9ae.js",
    "revision": "33245335995c0654a3dba8699bbd4590"
  },
  {
    "url": "assets/js/24.6bf19018.js",
    "revision": "0c70d9d4dfe73e1ffcb4bdee45dcc0f5"
  },
  {
    "url": "assets/js/25.600680c0.js",
    "revision": "ee0d2c9ae8346ed0a4985774594298ab"
  },
  {
    "url": "assets/js/26.f40f4e05.js",
    "revision": "b28abf7e91385df76d9115cfeb2dac6c"
  },
  {
    "url": "assets/js/27.6406d333.js",
    "revision": "99ff5e15041de6a412c15f51fe4b104a"
  },
  {
    "url": "assets/js/28.25d36dff.js",
    "revision": "431b1a06d0ef684b4854446b0fa10d6f"
  },
  {
    "url": "assets/js/29.7768cd33.js",
    "revision": "1f53320a62e723b86838f045a9d9ff36"
  },
  {
    "url": "assets/js/3.efc98fda.js",
    "revision": "6ee59fa9da9f3ed53933f2aa71749516"
  },
  {
    "url": "assets/js/30.c3eed845.js",
    "revision": "c1b6e4e2ab54a37a5f632f1e7b6a16e9"
  },
  {
    "url": "assets/js/31.c39e0c2e.js",
    "revision": "ecfdd3aff5d1a907ac13a338548a9ce4"
  },
  {
    "url": "assets/js/32.8bd50f56.js",
    "revision": "6dcb82542b4e068e5eb7837ba0a699b5"
  },
  {
    "url": "assets/js/33.85d4df90.js",
    "revision": "de25d4127e95bcdf8f8da76a52ad7205"
  },
  {
    "url": "assets/js/34.5f9eb5a0.js",
    "revision": "d2656325254571cde149e30c7de7d44e"
  },
  {
    "url": "assets/js/35.58405d10.js",
    "revision": "d2216d5e3e9b5120366bf54043c5fe65"
  },
  {
    "url": "assets/js/36.cc3e8729.js",
    "revision": "d87297fda35f783e8e2da20100f6aa47"
  },
  {
    "url": "assets/js/37.a6fef424.js",
    "revision": "1c10e6858b7e16ddc981228dee58308e"
  },
  {
    "url": "assets/js/38.12072306.js",
    "revision": "4d2000caf0201328aaf3ffc89e363f29"
  },
  {
    "url": "assets/js/39.9f345225.js",
    "revision": "068db20a5de0cf109be4b1f678ce53d5"
  },
  {
    "url": "assets/js/4.aa0e1a40.js",
    "revision": "cd6955aa647f0af16c80938c42865109"
  },
  {
    "url": "assets/js/40.035127cc.js",
    "revision": "5c7e6b882f11ff6926586d0fa900c44a"
  },
  {
    "url": "assets/js/41.fa8c3a51.js",
    "revision": "61ffd4728e85819720eb953d7c14cd62"
  },
  {
    "url": "assets/js/5.c5a285e3.js",
    "revision": "6973da765d16f6cf5b2f9a0d4e43d6ce"
  },
  {
    "url": "assets/js/6.dbfb1bde.js",
    "revision": "56a2551ec702837dc19922c4282a2b41"
  },
  {
    "url": "assets/js/7.6fb70ac3.js",
    "revision": "0135e359e2f8697011d5f34f4858a770"
  },
  {
    "url": "assets/js/8.7aea5c6a.js",
    "revision": "aa14bc366d8ee286137bdd96063f3b8c"
  },
  {
    "url": "assets/js/9.5f109cfd.js",
    "revision": "04a6cc3c04ad270c9dc958c70eca3562"
  },
  {
    "url": "assets/js/app.6ca0345d.js",
    "revision": "112dbe4a8225dc54883eb544cbb46aef"
  },
  {
    "url": "blog.html",
    "revision": "9b7d4364176157ba027ef0a8d7455979"
  },
  {
    "url": "index.html",
    "revision": "1903cdfcee133c8a490dad012d3d6993"
  },
  {
    "url": "js-playground.html",
    "revision": "f8ec52a9a251e85dab6a2a5a78f53abd"
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
    "revision": "fdc69f57e40c2754fb0981c7a19e78b9"
  },
  {
    "url": "oojs.html",
    "revision": "7de3c8bf90969a5d3ef47b94b4bfd7e5"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "389a94298eca16d602de2931d007fcec"
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
    "revision": "b9e2a699a9f1b80a2c23d0a069fef8c4"
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
    "revision": "a689e3db441877960111e25d4fa8263f"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "d81007510bf7ab2c002dcc0586a6594f"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "3a53da00d33ba946bbf12fcb081126b8"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "576e9845a88a39e0dc12b42ce5da85fb"
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
    "revision": "46ce32acfc9522c81a59af6da81350ce"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "52d8842b7539847469ee21573f079ef9"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "f779d95eb8b6bbfb8d8d2e875548bfc4"
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
    "revision": "7d8d57ff2535e5ce5986949a7385592d"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "ad0151f56592fbe23319e4674c0d289f"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "c1785aca597614bf79169d47390f4dcb"
  },
  {
    "url": "post/cara-menghilangkan-iklan-disqus-dengan-3-baris-javascript.html",
    "revision": "0be6183be6dda58285cf1ca94fc2230b"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "c35719527f7f0454c0dec8b8ba64cdf3"
  },
  {
    "url": "post/pertanyaan-interview-populer-frontend-react-developer.html",
    "revision": "fe4358308266d66619558383efbe8aef"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "3a5a4f78912dafe1a8bdeba28d044832"
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
