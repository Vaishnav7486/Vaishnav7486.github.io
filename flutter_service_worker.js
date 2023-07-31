'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5e571f9c78fd079512944f3918f47cff",
"assets/AssetManifest.json": "efb09e90124a7f54a6731a49e6d4f6f0",
"assets/assets/fonts/Gilroy-Medium.ttf": "c83281ae1ca703d0741a770ee7e7c091",
"assets/assets/icons/apple_icon.png": "03a5f9217076a8e61d8975cbb20de8e7",
"assets/assets/icons/main_web_header_main_button.png": "f96984290cdd22d69c1e4897f7b93883",
"assets/assets/icons/playstore_icon.png": "80ac73fa73a454b5cbeba1de591456ea",
"assets/assets/icons/social_facebook.png": "6d2d1f4b2d18f88c603a6a3340680e34",
"assets/assets/icons/social_instagram.png": "cf631dabe2b332476a982502dc032faa",
"assets/assets/icons/social_linkedin.png": "c1b188e3d5fdae9876c52b0b59b88c2c",
"assets/assets/icons/social_twitter.png": "c5494808b07dfb7ff9762a91e518025b",
"assets/assets/icons/social_youtube.png": "ed91edff0e056d6531897c2b5e7f9e96",
"assets/assets/images/desktop_main_image.png": "d40c5f10b411cc09ca57019c2830e58b",
"assets/assets/images/desktop_main_img.png": "963266253cd60e14366ae6c56a3d1983",
"assets/assets/images/leaf_image.png": "6dd875b92e1c9e52d6e9df1abf10d376",
"assets/assets/images/left_aligned_images.png": "4a849afc3f3823c2edaa1af2674c2335",
"assets/assets/images/main_person_1.png": "97493acd275083a3427570ce46727d7b",
"assets/assets/images/main_web/footer_text.png": "18f19a4d0ccde7047913d552414c29bb",
"assets/assets/images/main_web/main_web_hero_image.png": "b79602caa61957927f643c90148eddba",
"assets/assets/images/main_web/phone_hero_img.png": "e396682b2a0533707b7eff60f132ee0b",
"assets/assets/images/main_web/travel_p_1.png": "7c427303c4013da4b861aa250d227841",
"assets/assets/images/main_web/travel_p_2.png": "70f69b1ecf0b6f03e75a6b7941811286",
"assets/assets/images/main_web/travel_p_3.png": "59f1715712f4f9782137ceaa59740988",
"assets/assets/images/main_web/travel_p_4.png": "d05eae3f5d4da310bd1de73731b23b60",
"assets/assets/images/main_web/travel_p_5.png": "ddc999e33500277600fbb77b99adb620",
"assets/assets/images/main_web/vybes_logo.png": "e4630c608a41c4bd1347771fa3679c0c",
"assets/assets/images/main_web_feature_image_1.png": "61a836819eefa82f8dce69c729ea4c97",
"assets/assets/images/main_web_feature_image_2.png": "b511ff8e4fdfefaa3b3082d49221f745",
"assets/assets/images/main_web_feature_image_3.png": "42e19fb6adb3549146640b241075d14f",
"assets/assets/images/main_web_feature_image_4.png": "714eed73b8aa30bbbf85c5a967e50ea1",
"assets/assets/images/main_web_hero_image.png": "1fbf54e5528dfee51e1d2ef46697094a",
"assets/assets/images/person_1.png": "f0426d18ae35cd3e4e4781bba0e2651e",
"assets/assets/images/person_2.png": "ca253cb341bb27d59ca2eccca1145d58",
"assets/assets/images/person_3.png": "cbedf7cb454eda2f1b6aff9af9e8f8b6",
"assets/assets/images/person_4.png": "a974eb8f938e408f06be0774d96401bc",
"assets/assets/images/person_5.png": "01ce0234044e9cb309e68c96386395fc",
"assets/assets/images/recycled_paper_image.png": "0a15312127e06aa85551b0612d746d7c",
"assets/assets/images/right_aligned_images.png": "f2311d448a071d7267c485ef60e8fed0",
"assets/assets/images/vybes_logo.png": "bc4f17c5890b5fe80a58aa5b5c6bac3b",
"assets/FontManifest.json": "ae0a3a0ab7f14182d8c48d6e1690dd3b",
"assets/fonts/MaterialIcons-Regular.otf": "c1868afb72602009893bdf2ac56b0207",
"assets/NOTICES": "3b1afd391df75bdf27fa14e82c6b6336",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.ico": "98f00a52b2becd09dfad2b0cb0237e39",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "7f043b7bb3b839446c7ea241e5117b2d",
"icons/Icon-512.png": "0aca3fb16df892aff78e2e1079910a62",
"icons/Icon-maskable-192.png": "7f043b7bb3b839446c7ea241e5117b2d",
"icons/Icon-maskable-512.png": "0aca3fb16df892aff78e2e1079910a62",
"index.html": "62c19bb5236c4360a1dbadf2c638f930",
"/": "62c19bb5236c4360a1dbadf2c638f930",
"main.dart.js": "6f247b737d269acf2fb1152ce58357f0",
"manifest.json": "802a732c508f9d294f7abf888b5b540e",
"version.json": "bdc3162c567b52a68d7c1e30dc15d632",
"vybes_21.zip": "48991994ee5f89fe89d889d536a2d8c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
