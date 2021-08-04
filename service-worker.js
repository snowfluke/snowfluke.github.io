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
    "revision": "f4667cba911c086b9d24e6e9ab4e1143"
  },
  {
    "url": "assets/css/0.styles.d81ae491.css",
    "revision": "fd96a53e69900e704afd300de5372106"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.3675abfb.js",
    "revision": "7660799797da87b8cc6a993cae9423f7"
  },
  {
    "url": "assets/js/11.d22396fd.js",
    "revision": "7f3ceb499ba6ef9db6cae6227f65230d"
  },
  {
    "url": "assets/js/12.b2cd14fc.js",
    "revision": "c1e101b1e3723225f74ecfc6721635ab"
  },
  {
    "url": "assets/js/13.4d1c0d1b.js",
    "revision": "a882e18594d4c6dafa1674ef85897d62"
  },
  {
    "url": "assets/js/14.291fcb2f.js",
    "revision": "6ac0ac89824bda1ee08f81345d129eab"
  },
  {
    "url": "assets/js/15.9427ab6c.js",
    "revision": "58c7a71ba0a6c5a1f4fcf504d96a9cfb"
  },
  {
    "url": "assets/js/16.d943f6f1.js",
    "revision": "c0b535e5ae949e4d1ece56d6081ab893"
  },
  {
    "url": "assets/js/17.808c85ef.js",
    "revision": "19c66b8033e293337e67ad54c1a586df"
  },
  {
    "url": "assets/js/18.79a6737d.js",
    "revision": "b17d5fb498545061968798571571f5b7"
  },
  {
    "url": "assets/js/19.176a5471.js",
    "revision": "7679b88b43111f087de34b7f83c5ebd8"
  },
  {
    "url": "assets/js/2.0aeb3f90.js",
    "revision": "a64dbf6f263243ec3e68a80639a2d4d7"
  },
  {
    "url": "assets/js/20.79526790.js",
    "revision": "9f1b8c222180fcf2ecb4a78e3cf21f25"
  },
  {
    "url": "assets/js/21.44b5b624.js",
    "revision": "c1b59a0bc03f93b3f23c48f4ea1851b0"
  },
  {
    "url": "assets/js/22.71312aa6.js",
    "revision": "1fd094390e4fd1587575369b9cf22afc"
  },
  {
    "url": "assets/js/23.783ede2a.js",
    "revision": "66b38ae54967a105ea6408bb29caa264"
  },
  {
    "url": "assets/js/24.20002e6c.js",
    "revision": "54b2493f3a0543a380f6e6e8df39a017"
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
    "url": "assets/js/28.90fa0bc3.js",
    "revision": "f564de99daf9cf77d0056c7b122c18c5"
  },
  {
    "url": "assets/js/29.d9364d71.js",
    "revision": "94e20467f17ba33ab7b15d237dadaa07"
  },
  {
    "url": "assets/js/3.60c319d1.js",
    "revision": "e5350f22eafe123848093b6eb5bf37e4"
  },
  {
    "url": "assets/js/30.876f0f44.js",
    "revision": "5d0a7cb28cc92f9b5035b0da334ec114"
  },
  {
    "url": "assets/js/31.c55705ef.js",
    "revision": "a9ae22010982eb7d1e2d16176bd30650"
  },
  {
    "url": "assets/js/32.c750f5e9.js",
    "revision": "bd498655391e5dcf3c330c272524a218"
  },
  {
    "url": "assets/js/33.2239fb77.js",
    "revision": "e49985e04d9bcf527a147273af682546"
  },
  {
    "url": "assets/js/34.c475eef5.js",
    "revision": "3a2195b46bdbb15209a4546dde61f087"
  },
  {
    "url": "assets/js/35.d26de92e.js",
    "revision": "c1fd72e7f4c9c07980c9f1b645075efb"
  },
  {
    "url": "assets/js/36.fccb125b.js",
    "revision": "ec6f52fbd9ce96c49d4b7462580c4999"
  },
  {
    "url": "assets/js/37.47442bd5.js",
    "revision": "46337f9787362304bfe4934fac06c854"
  },
  {
    "url": "assets/js/38.16246858.js",
    "revision": "699417d7cdc5a414f0fa6b9797ff2a70"
  },
  {
    "url": "assets/js/39.ae750dee.js",
    "revision": "7a467fe4ac2620c300925c463b58d13d"
  },
  {
    "url": "assets/js/4.c75f2924.js",
    "revision": "83fec3314719972201cf425d87baef1f"
  },
  {
    "url": "assets/js/40.a3b44da1.js",
    "revision": "512e79b5879fca9c42ad79e6365419f0"
  },
  {
    "url": "assets/js/41.05870ad9.js",
    "revision": "1d9ab7b4fab02a0cb16175f203653fb4"
  },
  {
    "url": "assets/js/5.a1658131.js",
    "revision": "7c57f170a619520340d81d812e9ad2c9"
  },
  {
    "url": "assets/js/6.baa14b56.js",
    "revision": "f75fae3eaa3f2b1f16cc40661217bbe6"
  },
  {
    "url": "assets/js/7.16bd63ce.js",
    "revision": "4fdf8c6ff4318654df1171d3572480f4"
  },
  {
    "url": "assets/js/8.7b66d987.js",
    "revision": "d938ae75d59a20dcbee058bcc0cadd22"
  },
  {
    "url": "assets/js/9.6ee8fd0f.js",
    "revision": "406d07e6ddc0fa865cd4531ec5d8d441"
  },
  {
    "url": "assets/js/app.dcff6755.js",
    "revision": "d076cf50b04bad8bef1a95d2603ee550"
  },
  {
    "url": "blog.html",
    "revision": "f703c8d9e30c5613df1313fa4b513087"
  },
  {
    "url": "index.html",
    "revision": "e3d9c488cafb569278f6801483956290"
  },
  {
    "url": "js-playground.html",
    "revision": "5778e4c5a39dc95362bb8083c58045d6"
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
    "revision": "79fa630ada26174de6b69e3ffd85ed92"
  },
  {
    "url": "oojs.html",
    "revision": "def9adde8908c01dd03ded6ce62edbc4"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "354eae45c6cd5e835f243ba6c48e0de6"
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
    "revision": "c6ff905a8b8e01d1b1c8e6423dd9585a"
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
    "revision": "028b02d8b8aa3117cc7f51759af6817e"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "89ac119064bb8c9dc2cb8a2b17dbb6a6"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "257481f8ae2c039b867d8d0777404a05"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "96c26e3af930d2aa989b993c130c9cf0"
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
    "revision": "e7d227c9923028b6d455e0d968e7976e"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "44ba48d7789543147b65a77a2cc54063"
  },
  {
    "url": "oojs/8-array-prototype.html",
    "revision": "fcf493c9051146f44c52298603873136"
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
    "revision": "c4042048535e300beb3cf8b53b57f29d"
  },
  {
    "url": "post/belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "d1bd9e15482ef36bf6a6950f7e234dc1"
  },
  {
    "url": "post/cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "da1a0907c17f4e6a2de63b28911f401f"
  },
  {
    "url": "post/cara-menghilangkan-iklan-disqus-dengan-3-baris-javascript.html",
    "revision": "e147164df6e47ce9f6d2bbf3215c1fa5"
  },
  {
    "url": "post/cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "a2208a8ff5d1d93e891bcb82f64d9890"
  },
  {
    "url": "post/pertanyaan-interview-populer-frontend-react-developer.html",
    "revision": "e47ed7a2aa7d601960c48531a3ee247b"
  },
  {
    "url": "snowfluke-software-solution.html",
    "revision": "741456789abf29a32d5b0d5e1a430bd0"
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
