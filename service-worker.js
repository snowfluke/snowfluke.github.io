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
    "revision": "c83e71b5241a931151527c828bec3316"
  },
  {
    "url": "assets/css/0.styles.5d135466.css",
    "revision": "74cd889d8d0bad7b8757cdd6c4231b27"
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
    "url": "assets/js/13.be0e3eae.js",
    "revision": "d92fc16c2ebbc94f800e50e77e6f371d"
  },
  {
    "url": "assets/js/14.81fb090d.js",
    "revision": "97fd7e8d28c59339d90896796422b1fa"
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
    "url": "assets/js/17.8e9b0628.js",
    "revision": "c72e1c1defa576933efb3f6d4f89f27c"
  },
  {
    "url": "assets/js/18.ac595209.js",
    "revision": "21ce14c92171832f2c72ef31b6e46332"
  },
  {
    "url": "assets/js/19.5df372e0.js",
    "revision": "58a4ab920509f20d1c531bb9e86c01c7"
  },
  {
    "url": "assets/js/2.ec744198.js",
    "revision": "79294f6e7b4d9ae3bd9d9f4b71845357"
  },
  {
    "url": "assets/js/20.4d5c6a6b.js",
    "revision": "581581707fd069613f46b9fe59de6d57"
  },
  {
    "url": "assets/js/21.ac2a5a64.js",
    "revision": "df3cb9e238ad2e3c8cac254891d374c9"
  },
  {
    "url": "assets/js/22.b4923843.js",
    "revision": "504bda89eb75ff32e2c3bfc44481ed1d"
  },
  {
    "url": "assets/js/23.b15e5a05.js",
    "revision": "aee58c8998c2baa102cce59459ba2133"
  },
  {
    "url": "assets/js/24.cab1a2a2.js",
    "revision": "51ac943a6cd3331d34926a17d99859fc"
  },
  {
    "url": "assets/js/25.89479265.js",
    "revision": "7984efa69e15e296feb088a641e49215"
  },
  {
    "url": "assets/js/26.813c5334.js",
    "revision": "92990ad3ca709ba8ed0d778774306cb0"
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
    "url": "assets/js/5.e6878a53.js",
    "revision": "3deb2e9455d8f5ec91a7345266cb91f1"
  },
  {
    "url": "assets/js/6.5c8c1b0b.js",
    "revision": "4725f48f39df5b44051580df72566c83"
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
    "url": "assets/js/9.525d4cd5.js",
    "revision": "fa7a7a5a71ac4833eb8f6773deff7da7"
  },
  {
    "url": "assets/js/app.ab1bade5.js",
    "revision": "f33141412213eb028436786fbb629276"
  },
  {
    "url": "blog.html",
    "revision": "c5153fbcdc76d944dcf1c898fa0cc9f2"
  },
  {
    "url": "index.html",
    "revision": "e083f843ce2e36ed5ba123efc279156d"
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
    "revision": "3fb82dbcb6c1825c58f3814622290072"
  },
  {
    "url": "oojs/0-persiapan-lingkungan.html",
    "revision": "1e8ff6d04868cf5d75a7223adf6c7167"
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
    "revision": "87965bf9b00c946813f35aef9e8f6b2f"
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
    "revision": "ec9861d1a91a404a13cdb54518567329"
  },
  {
    "url": "oojs/2/markus-spiske-jG8nlwLRZTM-unsplash.jpg",
    "revision": "c65fcb3af582926a5744262e6bdd682c"
  },
  {
    "url": "oojs/3-operator-javascript.html",
    "revision": "182b00484e669fe18e318e529aec4e58"
  },
  {
    "url": "oojs/3/christopher-robin-ebbinghaus-pgSkeh0yl8o-unsplash.jpg",
    "revision": "835959110ebfe648fa5b5d2bb1b6334e"
  },
  {
    "url": "oojs/4-operator-javascript-lanjutan.html",
    "revision": "7cf0767adde83bd417cd633b55181090"
  },
  {
    "url": "oojs/4/irvan-smith-5eBW5GomfhY-unsplash.jpg",
    "revision": "f39426343bab04a30c6cacc956ebabcb"
  },
  {
    "url": "portfolio.html",
    "revision": "beebb748420ad94cc7602e0a3a3fb34f"
  },
  {
    "url": "post/2021-04-03-belajar-dengan-teknik-seperti-nelayan.html",
    "revision": "a4ce6acba5b6afca0c6c78260f523e6f"
  },
  {
    "url": "post/2021-04-13-cara-mengurangi-ukuran-apk-expo-react-native.html",
    "revision": "66bde592b5c8b5232f2adb4f98fca867"
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
