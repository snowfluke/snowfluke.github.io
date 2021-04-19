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
    "revision": "76669b301e06e58e2cabf576e6467408"
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
    "url": "assets/js/2.ba3fe6ac.js",
    "revision": "59aba9011a3891f3af264bad47355cde"
  },
  {
    "url": "assets/js/20.569f7f0c.js",
    "revision": "d1b4db19ceb99fd39e48669dd87264f8"
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
    "url": "assets/js/28.c24baaf6.js",
    "revision": "98e72bb1635a7c78a0063fe479446f5a"
  },
  {
    "url": "assets/js/29.dcdbae2a.js",
    "revision": "e829002db83eb4d1f2f2f9ab88f20b1f"
  },
  {
    "url": "assets/js/3.22fe934e.js",
    "revision": "f5d5236b4552365b409287738ae415ba"
  },
  {
    "url": "assets/js/30.ba45e574.js",
    "revision": "cba3dee7af1319ec5f49a43854e4b3f9"
  },
  {
    "url": "assets/js/31.59971452.js",
    "revision": "81e35fe9488c09dd55d41010401b6a7a"
  },
  {
    "url": "assets/js/32.015350d3.js",
    "revision": "6340e20af9ab8fdfb5d8d9a3844f54a4"
  },
  {
    "url": "assets/js/33.053643bf.js",
    "revision": "23bd64e9ee74b829789f52b319c1deea"
  },
  {
    "url": "assets/js/34.d0fae4f1.js",
    "revision": "3b158531aaad91f6b084803598d799b7"
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
    "url": "assets/js/6.be93d1a5.js",
    "revision": "89f0c9c0c75019e3b4038834bfeea36c"
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
    "url": "assets/js/9.574017dd.js",
    "revision": "26764d491d2a15d493b7aba71dac8ee4"
  },
  {
    "url": "assets/js/app.c4a0989f.js",
    "revision": "6479953161b5badf6d37ef945120b3a7"
  },
  {
    "url": "blog.html",
    "revision": "7b63f1d0373a84cebe889b4e7182f983"
  },
  {
    "url": "index.html",
    "revision": "4d233db6891668e5b0feb4bd18b130a0"
  },
  {
    "url": "js-playground.html",
    "revision": "aecb3547975cd7fa50a985d268d1e350"
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
    "revision": "8807c4629222b0e1f50fd93c2b2380aa"
  },
  {
    "url": "oojs.html",
    "revision": "ee6807433cb852c05dd3b682315c2bbb"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "4b5bbca1a534dd68fd3fc317cfb91368"
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
    "revision": "6e1813f6261e31588a30c29ca684618b"
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
    "revision": "1176905ecb8d5a305665928aeead2332"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "f00a50830d1ab3ec4263a1d70f34c3de"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "f2d372a441c135b67e4a5553f04af480"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-repl.html",
    "revision": "ab383e1f2dca19c35644a08bdba6bf27"
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
    "revision": "00f395a9870b1cb1fcc0bd3897f46dd2"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "playground.css",
    "revision": "6e9d33209025b836b6166624af0e9ddc"
  },
  {
    "url": "playground.js",
    "revision": "668570c81f22c59f408dbba673fd453c"
  },
  {
    "url": "portfolio.html",
    "revision": "73f785aa2219c54a033e13f5d9b08ca8"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "3e48786f44cdea7f938e0dfec592e05b"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "bcee4e9f4e74d4fdf04c96fcea2ffea3"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "f7bb7ee75b0b847bde687717dd011665"
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
