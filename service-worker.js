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
    "revision": "3061d67e453eed95fd7e6141ada5047a"
  },
  {
    "url": "assets/css/0.styles.7f39ee0f.css",
    "revision": "6f0ccdd71bdc16150b4fe096c78e3737"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b3c575b2.js",
    "revision": "da524abf8980c4b77e823bea5b817ef1"
  },
  {
    "url": "assets/js/11.32562f7a.js",
    "revision": "5cf1188a68849b93bd1d8cefd4788234"
  },
  {
    "url": "assets/js/12.fa888d6c.js",
    "revision": "a450dd42065f79cd3654580adbf0aedd"
  },
  {
    "url": "assets/js/13.274caa57.js",
    "revision": "82ae4d20aa39dacaecfb32a164044a53"
  },
  {
    "url": "assets/js/14.633ee558.js",
    "revision": "f6fbc466b06fbc1d9c063adba2fa511e"
  },
  {
    "url": "assets/js/15.725afb7e.js",
    "revision": "0d26c810df86a3951ac68d8bf30bf1c0"
  },
  {
    "url": "assets/js/16.44589993.js",
    "revision": "f57efd7045cb4d0bc3b5a36347ba1a20"
  },
  {
    "url": "assets/js/17.2a8b84e9.js",
    "revision": "a5ec420df064d63f4f1b6e27e84819f5"
  },
  {
    "url": "assets/js/18.b5a24bdb.js",
    "revision": "fc1a145ba2ed7eb32e787d32f639af8a"
  },
  {
    "url": "assets/js/19.babf4da3.js",
    "revision": "7d5ce065bf944a6f27ec0697079a7a86"
  },
  {
    "url": "assets/js/2.ec744198.js",
    "revision": "79294f6e7b4d9ae3bd9d9f4b71845357"
  },
  {
    "url": "assets/js/20.b4e0121d.js",
    "revision": "d342b523907c5c94616aa5f7441c35f2"
  },
  {
    "url": "assets/js/21.d44adfb1.js",
    "revision": "ef16e90b7f29e705f1fdeb2106409f75"
  },
  {
    "url": "assets/js/22.ee71ba3e.js",
    "revision": "ca4a2af5059d3f6f57dc8dfc527ac08b"
  },
  {
    "url": "assets/js/23.d98db5e7.js",
    "revision": "22675b40c3920d8c380a2fa25cf2a379"
  },
  {
    "url": "assets/js/24.87ee5b3a.js",
    "revision": "12618328c92a17d88fb4fd781d15dd94"
  },
  {
    "url": "assets/js/25.a8bc8931.js",
    "revision": "fbfbd21db6293b6814915c2f418f81dc"
  },
  {
    "url": "assets/js/26.1c1d1537.js",
    "revision": "021a5482d4d2142a24267ed4c1b03f3b"
  },
  {
    "url": "assets/js/27.d45805ab.js",
    "revision": "0b87b4f8c919ca9e024297c72bf0cd88"
  },
  {
    "url": "assets/js/3.e9372a84.js",
    "revision": "b7bb12f7ddae91f1c2b2c427f354a3f4"
  },
  {
    "url": "assets/js/4.267c522d.js",
    "revision": "a5fd5f4280f8a91cf08084deba86b875"
  },
  {
    "url": "assets/js/5.d2e273b8.js",
    "revision": "c3609f0a1be0927923f0f5306233eb6a"
  },
  {
    "url": "assets/js/6.d7badf11.js",
    "revision": "c8abcd389731c96cd41724663479547d"
  },
  {
    "url": "assets/js/7.66ef9e5d.js",
    "revision": "0253f67a1e02eef2c397c717a5408779"
  },
  {
    "url": "assets/js/8.62f9c261.js",
    "revision": "46c435af5016fcf9a04e5023844ec2a6"
  },
  {
    "url": "assets/js/9.fb6f836c.js",
    "revision": "d34ac6fc38468814121e4d69c6d08fa5"
  },
  {
    "url": "assets/js/app.014e4f93.js",
    "revision": "70208e54ffb15bb950353cb9a7a7af8d"
  },
  {
    "url": "blog.html",
    "revision": "0898e4e893b8312ce5695d40d4cf09e2"
  },
  {
    "url": "index.html",
    "revision": "7a1b436d827616edb667565440cafad9"
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
    "url": "oojs.html",
    "revision": "14d3d77160aeee28612a076c7672c1ee"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "d73495e055bd4ee9e3f4e72a4d039cea"
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
    "url": "oojs/0/node.png",
    "revision": "74fa7768d8200bfce4d088603047ed12"
  },
  {
    "url": "oojs/0/safar-safarov-LKsHwgzyk7c-unsplash.jpg",
    "revision": "e9c26c462c68467bd703d4cc7bf6bee2"
  },
  {
    "url": "oojs/1-variable-pada-javascript.html",
    "revision": "a942fb81924f01400c4cf3f1101e3491"
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
    "revision": "eff0974335850f1b30f022c0be956188"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "63fb8cb207af9f6c39a957f38cacd910"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "e4c3007630cefd5ddd10dc193eeb3f66"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "portfolio.html",
    "revision": "79aab1441bc46caefcda2343c9da42e6"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "a47a7d0da8d78fa5ff74d3ad843e793b"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "85ca55c3a24d03dd6ea20e8f7ca14089"
  },
  {
    "url": "post/devto1.png",
    "revision": "990da5922c354e8159be02cecf3d47f4"
  },
  {
    "url": "post/devto2.png",
    "revision": "92dfabd3371e5bbf09d86a6359e0de51"
  },
  {
    "url": "post/devto3.png",
    "revision": "751e439262cec9f736abcce37244338e"
  },
  {
    "url": "post/devto4.png",
    "revision": "189af18c7f1361f1eaf1c48d70635736"
  },
  {
    "url": "post/devto5.png",
    "revision": "92ba59999c4bec1ea22b9d0befbda970"
  },
  {
    "url": "post/devto6.png",
    "revision": "b290bd1c800d7c457b8fcd6c6e9e48ff"
  },
  {
    "url": "post/devto7.png",
    "revision": "9a150911cc7dc8e44221559b7bee1035"
  },
  {
    "url": "post/devto8.png",
    "revision": "5e56cb4bf2d23e69f67ff8036b6b6247"
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
