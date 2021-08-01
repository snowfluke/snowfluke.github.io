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
    "revision": "eac7acd348bbfb575d27bde3371c96b3"
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
    "url": "assets/js/18.2ca5e991.js",
    "revision": "a0d6944eaa25460ceb0c379979ac7d8d"
  },
  {
    "url": "assets/js/19.897fad4f.js",
    "revision": "1ff28cf46aadac48ed0d5f36493b413e"
  },
  {
    "url": "assets/js/2.f52006e6.js",
    "revision": "9f6328df9cb3f0bbe0764fe7fd439b8f"
  },
  {
    "url": "assets/js/20.f81fbdc8.js",
    "revision": "09740e444393f683d3e10361f41e5632"
  },
  {
    "url": "assets/js/21.cd7adbb1.js",
    "revision": "91085727d4a02a15b71dc286018ea7e8"
  },
  {
    "url": "assets/js/22.4b4c0ae8.js",
    "revision": "02e18c3317db48fef958d08614ff7ee4"
  },
  {
    "url": "assets/js/23.3eba787f.js",
    "revision": "554bc17f6557575e0c137d5a9b120498"
  },
  {
    "url": "assets/js/24.7a406e4d.js",
    "revision": "0b4217d558164ef85679f3982a7597f2"
  },
  {
    "url": "assets/js/25.570ed590.js",
    "revision": "aea55babd3c01a13bb6f1340eb2d4b87"
  },
  {
    "url": "assets/js/26.8042a975.js",
    "revision": "8050f950e6b95bea6cd1159f59d554ea"
  },
  {
    "url": "assets/js/27.9399a436.js",
    "revision": "e2442c64a09ba13bf846efc9ddd32180"
  },
  {
    "url": "assets/js/28.768546ab.js",
    "revision": "f1de1237588760a05ff74fff72051c27"
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
    "url": "assets/js/32.060e474a.js",
    "revision": "9f30d71207f2cfee54ed6d28f83f0815"
  },
  {
    "url": "assets/js/33.c97e5ce0.js",
    "revision": "12bf38c36f1a7169755bbbe7c9bac167"
  },
  {
    "url": "assets/js/34.fde7515d.js",
    "revision": "603099665efc362988adee15adb66984"
  },
  {
    "url": "assets/js/35.46cc2ff0.js",
    "revision": "e18589c81c176922c039ced72b71d18b"
  },
  {
    "url": "assets/js/36.3c7fda39.js",
    "revision": "fce7fe0dbd4de4e36514e820e02ea5cf"
  },
  {
    "url": "assets/js/37.a7d54cc0.js",
    "revision": "5c574487929e6efe359046c6dc6c407b"
  },
  {
    "url": "assets/js/38.1778ba82.js",
    "revision": "9fe2b670c64d8b5d7756c8a154cae402"
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
    "url": "assets/js/6.52569a9e.js",
    "revision": "185cc0b56424bb390331b387cc54d712"
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
    "url": "assets/js/9.f2262e66.js",
    "revision": "800c7cbabd1103ca9d78bf8d85e9214b"
  },
  {
    "url": "assets/js/app.298af12f.js",
    "revision": "ddfc552d48ce74a06c409df280b81005"
  },
  {
    "url": "blog.html",
    "revision": "a40b5750b2525478dbe6f606b8cb7cd3"
  },
  {
    "url": "index.html",
    "revision": "b46d9b90de9c39fdb3e6ca0307ad8478"
  },
  {
    "url": "js-playground.html",
    "revision": "a59e9cee001382ecc5546947f83d8075"
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
    "revision": "6441d5e4a612a2602e39ae80550cfea2"
  },
  {
    "url": "oojs.html",
    "revision": "ed5be06fffa14958ab7294c6c5f3cc7f"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "ecbb9fe452f41c1388605193df59c796"
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
    "revision": "3035ec147dddca36ce5e41d16d878f08"
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
    "revision": "175372643b4193413f0c0191da87f104"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "46c7390d493605b45a3e906f4b909775"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "ed493f6af9ed7350e111a931d84919d2"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "0d820ed5ee6dc2c32d20619b86176f7e"
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
    "revision": "baa9226c975bda70ab3cbaec8f5e4fdd"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "5b5c74644f028017ff91a1aafd8cc462"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "a84f0ab9a6c4b29ef939d3d6747c5e77"
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
    "revision": "7bd7cdcfb452ab198bd749e8cff513ce"
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
    "revision": "d1564b005e98da214929933289926a68"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "0ed9a6a03301df835c0292eafce53acc"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "b0a703de095169101bd0c9540483005d"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "a3bf839bdb5aa7fb738054d8ca057b42"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "85cf703249c1bb16343f0c1b0107a033"
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
