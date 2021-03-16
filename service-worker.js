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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d7fea742a43642c1421bd4a49e29a28"
  },
  {
    "url": "about/index.html",
    "revision": "506d78251fe23f958c93c101889b3a7d"
  },
  {
    "url": "assets/css/0.styles.edd67a01.css",
    "revision": "857c6571b1614b3865b66065f3dd689d"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.6a93ff19.js",
    "revision": "8473b0ac49fde697c0fc7886e620a5a2"
  },
  {
    "url": "assets/js/11.c47f1757.js",
    "revision": "d8dffb85bfb8b984a7d91eed5107a9c2"
  },
  {
    "url": "assets/js/12.73863227.js",
    "revision": "ab7322cc06a36314d92aaa8174ade80b"
  },
  {
    "url": "assets/js/13.80522e4d.js",
    "revision": "a6ef42aac9ada2a3e5723d1dd593a438"
  },
  {
    "url": "assets/js/14.68a4f5c6.js",
    "revision": "f3aad491a6f536adf170910f78853c61"
  },
  {
    "url": "assets/js/15.ec00eb3a.js",
    "revision": "e96efd596e34712b2a7101d36a1ee222"
  },
  {
    "url": "assets/js/16.f582d6c1.js",
    "revision": "f839590aa56159d7d9b2f2e1a23d039b"
  },
  {
    "url": "assets/js/17.7b213757.js",
    "revision": "5efdc94eee3d0cf262b823afcc826ded"
  },
  {
    "url": "assets/js/18.b03270d5.js",
    "revision": "a6a195c98f2c31f6ffafe53fae5372cd"
  },
  {
    "url": "assets/js/19.e05d7c48.js",
    "revision": "1bf656b0b886d4f539a444b65cb4c17b"
  },
  {
    "url": "assets/js/2.14622190.js",
    "revision": "e943bdc1111aafac4df3bbfd11f3c4d5"
  },
  {
    "url": "assets/js/20.1bb272e3.js",
    "revision": "dbd2a8a386d546be9f489f6713eef7c4"
  },
  {
    "url": "assets/js/21.5777fedf.js",
    "revision": "be42850978f573b7c6d95760247819b3"
  },
  {
    "url": "assets/js/22.89979eda.js",
    "revision": "ae6e88e52144b5d6ff85d20ee088407d"
  },
  {
    "url": "assets/js/23.4b30007b.js",
    "revision": "e29f53935d55f0bf48d52740576b8d78"
  },
  {
    "url": "assets/js/24.08c605af.js",
    "revision": "a856ccc120c9ca054059bdcc11e8f7b7"
  },
  {
    "url": "assets/js/25.3d0a8a58.js",
    "revision": "084cbe31d99797fbda27db58fb3ae00f"
  },
  {
    "url": "assets/js/26.07c0104b.js",
    "revision": "f50409e8708ccefdcb432fe8b4144720"
  },
  {
    "url": "assets/js/27.24dfab8b.js",
    "revision": "1b205dde3c4143187ae5ea76d1477711"
  },
  {
    "url": "assets/js/28.46f1bcdc.js",
    "revision": "638244b1c1e7094b9889f3f2b468320d"
  },
  {
    "url": "assets/js/29.6dc6d7de.js",
    "revision": "0369d9b7efddde206005252024e2b5c6"
  },
  {
    "url": "assets/js/3.6c3dee68.js",
    "revision": "393b6b0ea00fd76991b63a74ae63a6d2"
  },
  {
    "url": "assets/js/30.dcce14df.js",
    "revision": "cfe2b8d025ca8cde0d3f17387bdc5739"
  },
  {
    "url": "assets/js/4.8f84f249.js",
    "revision": "4b54bcdd5075c8fb1efbf2077f661da1"
  },
  {
    "url": "assets/js/5.236c83d5.js",
    "revision": "0799aed83657ea6335c59a377a8658b8"
  },
  {
    "url": "assets/js/6.ce0a3d40.js",
    "revision": "3581448e74f5300dbb97d47e95330f9c"
  },
  {
    "url": "assets/js/7.44a5767d.js",
    "revision": "ffab248f8eda84bda2c171dd73d0f245"
  },
  {
    "url": "assets/js/8.e33d5460.js",
    "revision": "1e7d646a2379eeeb0356f88670b7b683"
  },
  {
    "url": "assets/js/9.102fdc46.js",
    "revision": "55d5164b0e0db3a508ef7afd0f34c6a4"
  },
  {
    "url": "assets/js/app.2159d4b3.js",
    "revision": "37bd49913d47a5a57f0a738adf5b0e8e"
  },
  {
    "url": "essay/2018-01-01.html",
    "revision": "05f0323a4507925a42ad3ef9abc068f2"
  },
  {
    "url": "essay/2019-05-26.html",
    "revision": "c27cd81425744b58e0831e8fb8eeed87"
  },
  {
    "url": "essay/index.html",
    "revision": "8fefd56e76283104b688c72ecdf64214"
  },
  {
    "url": "essay/sense-of-ritual.html",
    "revision": "a167717ce263d10f0db63272284ca2a8"
  },
  {
    "url": "img/icon.png",
    "revision": "40804bbc4d8a24f88b02588c73f1d8b4"
  },
  {
    "url": "img/javascript.gif",
    "revision": "ca0c405bd2b0389ba323ede60395ea2a"
  },
  {
    "url": "img/logo.png",
    "revision": "ee375679cd531c8c0344de8f17739ed8"
  },
  {
    "url": "index.html",
    "revision": "c78b9394c030a91bf5e30356ad1e27b5"
  },
  {
    "url": "others/hexo-getting-start.html",
    "revision": "9761894bb3d1dfe7df9f6a98fdf399ef"
  },
  {
    "url": "others/hexo-themes-update-bluelake.html",
    "revision": "7e11322decb456ffc92421a301ae8c9b"
  },
  {
    "url": "others/hexo-themes-update-yilia.html",
    "revision": "b06be64e2f2c7c5915c2b1f65af72acc"
  },
  {
    "url": "others/index.html",
    "revision": "4e96d34162507f9f8c839c14940ae913"
  },
  {
    "url": "others/vscode-sync-setting.html",
    "revision": "1754a240b5323f78b31566625113382f"
  },
  {
    "url": "others/vscode-tips.html",
    "revision": "143547640d6fd5944da5d54ccdf936e5"
  },
  {
    "url": "ponder/index.html",
    "revision": "23f87488f1db7b4861c305be237a1f31"
  },
  {
    "url": "tags/index.html",
    "revision": "04d5d958d67db1daea130245e95e1de6"
  },
  {
    "url": "technology/30-seconds-of-code.html",
    "revision": "92c31b79bd1dc28d61bad756b0f6eaa8"
  },
  {
    "url": "technology/常用前端面试参考总结.html",
    "revision": "132dd16da0c4ec9fb5e751cf3bfdc0f0"
  },
  {
    "url": "technology/前端面试题积累.html",
    "revision": "8138de79987fd148b5504bd145d9d5ff"
  },
  {
    "url": "technology/asynchronous-solution-in-es6.html",
    "revision": "f2636b0f11a4cb2342db80de1d3bc6fb"
  },
  {
    "url": "technology/index.html",
    "revision": "ca1ff1787835f5efc11107d74e9f2fa5"
  },
  {
    "url": "technology/Koa2入门小基础.html",
    "revision": "ab5a9c5dedbccf2edd34ac6ca13b035c"
  },
  {
    "url": "technology/MongoDB基础入门.html",
    "revision": "7ccd880a67af56fad62472ee874ad7f6"
  },
  {
    "url": "technology/road-to-the-growth-of-a-programmer.html",
    "revision": "3c96e6612d6f3f58824675189cfa28f5"
  },
  {
    "url": "timeLine/index.html",
    "revision": "a81830095996968c4c8f8e13041e817c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
