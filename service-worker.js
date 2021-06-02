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
    "revision": "2b8958c02af908816bffba40cf5112c7"
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
    "url": "assets/js/2.f52006e6.js",
    "revision": "9f6328df9cb3f0bbe0764fe7fd439b8f"
  },
  {
    "url": "assets/js/20.8e99286b.js",
    "revision": "0975335e8993eeb8f71cc73ae32ad0a7"
  },
  {
    "url": "assets/js/21.db7f4e95.js",
    "revision": "62c697ccb9056f6655eaca06b949fd3f"
  },
  {
    "url": "assets/js/22.d4ed47dd.js",
    "revision": "0555108908f48b92c4b87850f7671588"
  },
  {
    "url": "assets/js/23.c66066f5.js",
    "revision": "cda3cadca625fb51c216e4dbe021eab3"
  },
  {
    "url": "assets/js/24.067f4ffb.js",
    "revision": "7fbc8afaec3311aff2fcf5a3fcf076af"
  },
  {
    "url": "assets/js/25.78b49282.js",
    "revision": "75655fd1cd1f71f31aaebca217eb4559"
  },
  {
    "url": "assets/js/26.8042a975.js",
    "revision": "8050f950e6b95bea6cd1159f59d554ea"
  },
  {
    "url": "assets/js/27.ad348fbc.js",
    "revision": "15ce60b5bdb937d382ceca2e5b284e6f"
  },
  {
    "url": "assets/js/28.61610f62.js",
    "revision": "98e72bb1635a7c78a0063fe479446f5a"
  },
  {
    "url": "assets/js/29.6c226f7f.js",
    "revision": "e62d91cfc9b240d14be0b954c97c9fb0"
  },
  {
    "url": "assets/js/3.33d3c687.js",
    "revision": "eccf420be06e93a4dca6cb3ecceb2296"
  },
  {
    "url": "assets/js/30.9d29582e.js",
    "revision": "a93ef17e57c6b8777f5ebbfa3bcc4d7b"
  },
  {
    "url": "assets/js/31.2329b03e.js",
    "revision": "050928797de1232bb7a0f03ace06662a"
  },
  {
    "url": "assets/js/32.5f723d4f.js",
    "revision": "8a930cf58b59933250f825616f991acf"
  },
  {
    "url": "assets/js/33.92c3d4e1.js",
    "revision": "5183fc7000e0d1fa184cea2d522e2b74"
  },
  {
    "url": "assets/js/34.006d8751.js",
    "revision": "34f152fa17600716caef6125015a4d63"
  },
  {
    "url": "assets/js/35.24f9d0ad.js",
    "revision": "97eb0eaf3bb03b19a431d5eefc41d31e"
  },
  {
    "url": "assets/js/36.6502cdc6.js",
    "revision": "4508b3ef20200c3929c7dbc160025c7d"
  },
  {
    "url": "assets/js/37.0dc06986.js",
    "revision": "4fcc70b815ab7b107d0e355d07de4dd4"
  },
  {
    "url": "assets/js/4.4aa5265b.js",
    "revision": "ebd22ca6a6edd2d1ece8e599e9f8a408"
  },
  {
    "url": "assets/js/5.240388ca.js",
    "revision": "7c2a8e7b79b4f7cb4a7b6ecf91f0edce"
  },
  {
    "url": "assets/js/6.3897937c.js",
    "revision": "785ed415bc7cca3d69fbf773566cc4b8"
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
    "url": "assets/js/9.2dbfd0d7.js",
    "revision": "606713fc3d092135f636f8b62a88b7e1"
  },
  {
    "url": "assets/js/app.e3749326.js",
    "revision": "bb1116bd703426649905c7c3c6780e7e"
  },
  {
    "url": "blog.html",
    "revision": "2f611256a7f2538e50eee032f9a663f3"
  },
  {
    "url": "index.html",
    "revision": "51a1766230ebffc96312f159565a84dd"
  },
  {
    "url": "js-playground.html",
    "revision": "bf36ddb2cbfea46353ecb2b9b10f114c"
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
    "revision": "5c07d5bfb6ec88ff7602e52635b09f39"
  },
  {
    "url": "oojs.html",
    "revision": "ef62284a0d85f53f2ed688cc560c8d1a"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "047f2bd60781ad0cb25256f4a47e38a5"
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
    "revision": "6185e46fc5b0e6d9ec4e8dea5ee6c0e1"
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
    "revision": "7b3f5dc0b75373ee879f48232dff203d"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "98e836c60c22597f1b94a19a2bc78964"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "c4ea4f3bfc142e3383c8c18fe5758d8c"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "ccb6e9c064d49b6fcb64db3104715e4e"
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
    "revision": "87c4c6531403ce036cdfcb993e019ddd"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "99414531f1561b0adbc719be5f536693"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "675d4e0b32a70c6ffba164458b42e958"
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
    "revision": "9b59c84616f9c559587c492172d6f034"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "975f4e6973b01f88a241d3573b771452"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "f97406210095d22adc757565d5c24d27"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "2e1c7c96a09619fcdaa82037a9f25843"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "17cbc7595a9be60c5c4c360be7bde145"
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
