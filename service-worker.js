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
    "revision": "e228539b58c6902abed326bbc424009f"
  },
  {
    "url": "assets/css/0.styles.4f717eee.css",
    "revision": "0e3476631065374c9e50fb2d391f1df0"
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
    "url": "assets/js/15.7bae15ef.js",
    "revision": "f79a2c2adf98c97470ac20a93ac709d4"
  },
  {
    "url": "assets/js/16.12a41c81.js",
    "revision": "d71310b6d132ebc4abf13bec9c5632ca"
  },
  {
    "url": "assets/js/17.ec9d32a6.js",
    "revision": "46e233d3e6f9a13fb6eaaa8aa0287f39"
  },
  {
    "url": "assets/js/18.33f8cd52.js",
    "revision": "f8281a54358ee1e6396fe9a01d0cb6c8"
  },
  {
    "url": "assets/js/19.186a83e1.js",
    "revision": "04826ceac2d87a8498d461be6f480504"
  },
  {
    "url": "assets/js/2.ba3fe6ac.js",
    "revision": "59aba9011a3891f3af264bad47355cde"
  },
  {
    "url": "assets/js/20.24292467.js",
    "revision": "9e1087f040b27800e45f5b5bbc951b3a"
  },
  {
    "url": "assets/js/21.cd7adbb1.js",
    "revision": "91085727d4a02a15b71dc286018ea7e8"
  },
  {
    "url": "assets/js/22.b1178bf7.js",
    "revision": "afaccd26a18a1e61d074a7d3bf76851a"
  },
  {
    "url": "assets/js/23.a4a350c1.js",
    "revision": "915031cbd5af6c3ca92a3029bdae6f4a"
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
    "url": "assets/js/26.dfae8a32.js",
    "revision": "d366be4e3333970624b914adb18adae0"
  },
  {
    "url": "assets/js/27.3fb5647b.js",
    "revision": "654443edbf5a333ae5dbae6c71d53015"
  },
  {
    "url": "assets/js/28.3a3c6dad.js",
    "revision": "84b212f05f79113de782b33f78421642"
  },
  {
    "url": "assets/js/29.35c969ea.js",
    "revision": "c00bf01bdfa2e7db7482a7e39cddc37a"
  },
  {
    "url": "assets/js/3.a3fed9d2.js",
    "revision": "9e80cd9150c1e4884f829a798012a1d3"
  },
  {
    "url": "assets/js/30.a89ea4f3.js",
    "revision": "67653cfb276bb41ceaa2cef0d3bf41bf"
  },
  {
    "url": "assets/js/31.79de5075.js",
    "revision": "3197d3ae04dd5652d1ba7837ee97c090"
  },
  {
    "url": "assets/js/32.3ea5f811.js",
    "revision": "f4b79be96c347a96624e8fa3b688a9be"
  },
  {
    "url": "assets/js/33.58d7351c.js",
    "revision": "722922b01d40e21dd6e4587ff7b42240"
  },
  {
    "url": "assets/js/34.16decbc0.js",
    "revision": "9a80215d20e26bf40c0f374ca9126283"
  },
  {
    "url": "assets/js/35.16ddf38c.js",
    "revision": "9c49e675521def4b67693390c138ce5d"
  },
  {
    "url": "assets/js/4.40924877.js",
    "revision": "2afeed8766abd34196fb613ff2e10d3a"
  },
  {
    "url": "assets/js/5.2079254c.js",
    "revision": "9e3d4e65a1d303f75ae024759593f79f"
  },
  {
    "url": "assets/js/6.cfe4bbe9.js",
    "revision": "0e4c94d7ffc9859d86b4cfa5e4298ed1"
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
    "url": "assets/js/9.068cf5fe.js",
    "revision": "3069a5d4045f41fbfc505adaa5a30e60"
  },
  {
    "url": "assets/js/app.ed7a8b4a.js",
    "revision": "dd2bc6f922759519ca3077934248afac"
  },
  {
    "url": "blog.html",
    "revision": "333cf1b282867e2254fa1bfdf1c08de6"
  },
  {
    "url": "index.html",
    "revision": "66e6415e35dd4423427aee30c777d6b9"
  },
  {
    "url": "js-playground.html",
    "revision": "bbb79d0ee40fd3555879edf0eb5e6c48"
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
    "revision": "c1ea62a1bc2640ead470e383ed74f8bc"
  },
  {
    "url": "oojs.html",
    "revision": "ddb3b2b4d87a7c4f27518beafe5f6d20"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "f8e5a5df47390fa61633f9a7fa6de55f"
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
    "revision": "5402390251fb131266ac32f9bc56bd03"
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
    "revision": "af2f2aacc56a3adb0d1cb6a69b85872f"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "77f363d70608e3fa8506ecc78fb5477b"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "e680d0cda991cbbb7a53c99ddb151ee4"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "oojs/5-mengenal-function-dan-input-interrupt.html",
    "revision": "5f7d63da1403f0756db325e5b6826e68"
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
    "revision": "c03b3c5cd64c4f1c7b07c5a90ce2c23e"
  },
  {
    "url": "oojs/6/irvan-smith-cwqG1N1AtI0-unsplash.jpg",
    "revision": "7765c4c25cbdd88e6db588109564c4cb"
  },
  {
    "url": "oojs/7-soal-uts-pbo.html",
    "revision": "db84af60e0d30b50f248d7382aa6c617"
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
    "revision": "78eedc4748aeb8e74d2005dcd7c09513"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "8af96016fbabce1539943b237acc9526"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "3fbd257dfc15740986c97fa18fde992c"
  },
  {
    "url": "post/2021-04-14-cara-membuat-screenshot-kode-keren-di-VSCode.html",
    "revision": "b99d60dcace532b14b5e404d24d0b81a"
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
