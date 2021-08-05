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
    "revision": "b877dd2c1202f1d3dc0990529468ad89"
  },
  {
    "url": "assets/css/0.styles.4b8e6cbd.css",
    "revision": "46d6c889fe05a9588cd0535089715b10"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.7fad6e0e.js",
    "revision": "1760cc316e569d9addeb40909395c3d7"
  },
  {
    "url": "assets/js/11.b024cb72.js",
    "revision": "c97fc0ffa60378a28a91083d3269e454"
  },
  {
    "url": "assets/js/12.1453b495.js",
    "revision": "7b1f97e245975e5167aee3cd5bc1e5f1"
  },
  {
    "url": "assets/js/13.8d1c523f.js",
    "revision": "f8ba219d3a982634d417189b89082f07"
  },
  {
    "url": "assets/js/14.78aaa595.js",
    "revision": "823b2bb21baf4490efeb969c32770376"
  },
  {
    "url": "assets/js/15.4b9825ed.js",
    "revision": "025524d475649780d7069dc14bb76204"
  },
  {
    "url": "assets/js/16.f683d850.js",
    "revision": "3284a1f410d8fc0e3642adee852ce880"
  },
  {
    "url": "assets/js/17.d20c247e.js",
    "revision": "925cf21fe6bb4cd0ac8d34d3d28b7fda"
  },
  {
    "url": "assets/js/18.0004d1df.js",
    "revision": "466f6e15de05617f286c40757459839a"
  },
  {
    "url": "assets/js/19.727932b7.js",
    "revision": "cf9e1afb037cd92e8f7ce7ad6c07de0c"
  },
  {
    "url": "assets/js/2.465a5b6a.js",
    "revision": "19962d33cdf5e3af9fe971c5cfcaf27e"
  },
  {
    "url": "assets/js/20.94216951.js",
    "revision": "18e04c7ba52652db3567005ddb0e52e0"
  },
  {
    "url": "assets/js/21.382fec30.js",
    "revision": "aa6ebf663ac76e140f7682c7cac0f84c"
  },
  {
    "url": "assets/js/22.cd88c74c.js",
    "revision": "ff1567766ba392647fd2994824da852e"
  },
  {
    "url": "assets/js/23.9e5fc636.js",
    "revision": "3af4186a6196ccd523c6f0995b07a231"
  },
  {
    "url": "assets/js/24.8b966859.js",
    "revision": "5757da176d9fb485cfe9b7fe5366f0e6"
  },
  {
    "url": "assets/js/25.ce788528.js",
    "revision": "df580e7a08e6649b605012654b574c01"
  },
  {
    "url": "assets/js/26.d35143bf.js",
    "revision": "9967f59259f5e6482d35eb35b89bfe02"
  },
  {
    "url": "assets/js/27.4f627032.js",
    "revision": "51a502cf59e355b80336a1ec0e91e98f"
  },
  {
    "url": "assets/js/28.cea085ca.js",
    "revision": "af93065c51fed1486eb2d5d0be9d998f"
  },
  {
    "url": "assets/js/29.ebec9a72.js",
    "revision": "e31178bd94d2d643bc6261eab20e50e5"
  },
  {
    "url": "assets/js/3.e3293ef4.js",
    "revision": "b00ac18b2db3fcccac13956292cbd281"
  },
  {
    "url": "assets/js/30.22e4adf4.js",
    "revision": "d6e12dbb3f4992d7ee1d2f8a4a3e0e8b"
  },
  {
    "url": "assets/js/31.b1898c9e.js",
    "revision": "f1bb9492266c94f5a8123fa971f4a460"
  },
  {
    "url": "assets/js/32.accf6304.js",
    "revision": "a64abf3f58a067cbe3b8d4186645e70f"
  },
  {
    "url": "assets/js/33.10a79436.js",
    "revision": "7fa7a36e782991d186ffc351eb1f8372"
  },
  {
    "url": "assets/js/34.260fb435.js",
    "revision": "240db94b991b00b54416d4ae4da78673"
  },
  {
    "url": "assets/js/35.e082193a.js",
    "revision": "444487259044d4a66e96c77987a7e20f"
  },
  {
    "url": "assets/js/36.d6e186d5.js",
    "revision": "bd3e5407afd439a1115fc914b194909f"
  },
  {
    "url": "assets/js/37.3248e8f8.js",
    "revision": "bd8223d8c577e1633df236bc7a32266d"
  },
  {
    "url": "assets/js/38.7737ca9f.js",
    "revision": "1d84e725a682dc935eec551a508456a1"
  },
  {
    "url": "assets/js/39.8d4a472e.js",
    "revision": "de9fe90ec5a8705a44969e3ca36a9ddb"
  },
  {
    "url": "assets/js/4.4b90d8b2.js",
    "revision": "0ee51b2e4c1335327b2960207c3411e8"
  },
  {
    "url": "assets/js/40.15aa4763.js",
    "revision": "0effbc6723e3d727be7acc04c0a27e4c"
  },
  {
    "url": "assets/js/41.01aaa9a9.js",
    "revision": "7085365fa485b9bb7d04aa10dab416ef"
  },
  {
    "url": "assets/js/42.339c7e55.js",
    "revision": "6c2c4b12ecc49c66bc7d1fd1f6642de8"
  },
  {
    "url": "assets/js/43.cc304f9a.js",
    "revision": "3671c916b3c3a5ec5f3538c9559fc65d"
  },
  {
    "url": "assets/js/5.2c9f3526.js",
    "revision": "92d435300ec9ecfcdc914e2ff14a9a8f"
  },
  {
    "url": "assets/js/6.354920f0.js",
    "revision": "ff11e9c16eae110d741a4e3aee3f30c1"
  },
  {
    "url": "assets/js/7.309ca159.js",
    "revision": "039233d20c65f874eecf16f910dbf5d8"
  },
  {
    "url": "assets/js/8.d07f2ac7.js",
    "revision": "f93b4d9d81181cceeaa70555affdfad7"
  },
  {
    "url": "assets/js/9.b0ca329b.js",
    "revision": "716f83bd3da03673c35e0b3e0c834228"
  },
  {
    "url": "assets/js/app.a554377f.js",
    "revision": "c3a1df8a90234adcbddbff37f7b52f25"
  },
  {
    "url": "blog.html",
    "revision": "d36d9ba548496e3c3f0e5a4f9ff1de06"
  },
  {
    "url": "index.html",
    "revision": "6d2bd6e1643e4e99403af684aecaa8b0"
  },
  {
    "url": "js-playground.html",
    "revision": "a4e3925a23f4279060ad9ebabd7f4e7b"
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
    "revision": "ac41968bdc3af20c40ef3ba5a6b87e84"
  },
  {
    "url": "oojs.html",
    "revision": "cdbb309d2044a58fa3a871cd6d661355"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "fb0454775edc1826a45273ab90a49564"
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
    "revision": "f9f140397d9c640f42e16b4e7c4cc957"
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
    "revision": "65f0f1c69847c1ea8e1c11465b3560af"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "cc6c1876ff48ee220ba1981c8bdd66d4"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "7c34b9273195787af4f08942fe1bd68b"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "98b04d939e93802b5cdae4da586e9108"
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
    "revision": "3029aa4d1b4c909d7c34aca24c7aa811"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "6fb7bfd8d75303fc8875358ff2f98e83"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "78485e5e6ddc7d85d9076218ee269941"
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
    "revision": "81dfbaaf60ea51a8244b6a9dca25023b"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "c1ba39823bcd4b70320d716cc0bd79b3"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "83c00508a5c138929ff7aa2ae05edfd3"
  },
  {
    "url": "post/cara-menghilangkan-iklan-disqus-dengan-3-baris-javascript.html",
    "revision": "86a93fb3213d5e0f0ecdba67f90746eb"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "fb45e15aff9699038fb6cd5ac3de577a"
  },
  {
    "url": "post/mengenal-newpipe-youtube-pasif-lebih-ringan-dari-vanced.html",
    "revision": "2d4dcdac62383860edf442ff45a670e4"
  },
  {
    "url": "post/pertanyaan-interview-populer-frontend-react-developer.html",
    "revision": "d4969583a086198728bd368b8329f32b"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "6468c5ff734bcf1cfc4d7b2ce2f186d2"
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
