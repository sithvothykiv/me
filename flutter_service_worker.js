'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "db8990b8a733cdd52065ba1549ba9aa5",
"index.html": "8d9162f857a5bd96522c38abdeb460bb",
"/": "8d9162f857a5bd96522c38abdeb460bb",
"main.dart.js": "863d7f1ede6895a9db4a775e9af34424",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"style.css": "ffba23ff301032bec9a3922e763ddcca",
"manifest.json": "280eaea94c35c8957ca99c7926cd2701",
"assets/AssetManifest.json": "5d3446a7d652b4c23a4fb99de0391951",
"assets/NOTICES": "6ba60c2ba77acb9da0c65f40c9d4b009",
"assets/FontManifest.json": "f0f4be009d67b49f6afb66286f706923",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/experience/coding-ninjas.png": "5b94a7d8ef90a9b60a3967745e044778",
"assets/assets/experience/infinity-03.png": "de0a459f601279e3a120660a2ec6909c",
"assets/assets/experience/rupp-logo.png": "c36cb3fefee29df33bf29284344c9c2e",
"assets/assets/experience/agriBee.logo.png": "b29f7b16dbc93485da3241a93e3d870b",
"assets/assets/experience/constant/experience.png": "8f6a768aa1f3a803088eff838313f7b0",
"assets/assets/experience/cloudnet-logo.png": "6a3fd93b9bb2034dd1030c6a4ec2f186",
"assets/assets/experience/credanic.png": "27b5605cf2f3291e4cfe71f4f97daaf2",
"assets/assets/experience/github-logo.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/portfolio.json": "01ca7b8dcb89d79625547ec0635d1fc6",
"assets/assets/home/constant/email.png": "b4ac60cde3dabbe4bc1b8b7c88dc4585",
"assets/assets/home/constant/telegram.png": "ffebadadbbf5640e7e55de58c81aa764",
"assets/assets/home/constant/link.png": "6bd16f15b5c2d30c08557a84b776f3a6",
"assets/assets/home/constant/instagram.png": "6a5e75ccceace8a900c3ca017bb5933b",
"assets/assets/home/constant/github.png": "9b1ceae0aa31486938531880614681a3",
"assets/assets/home/constant/medium.png": "5a77eaa1f4fc98e76a2129c5ebaa119a",
"assets/assets/home/constant/twitter.png": "babebb599190a8bd5bb5417e4f7fdcad",
"assets/assets/home/constant/linkedin.png": "f23f5409fa61de28d92d02527411c140",
"assets/assets/home/constant/stackoverflow.png": "c9fe76704b498db68c7d263216b9e680",
"assets/assets/home/constant/facebook.png": "9c8bf990645fc6189df6caedab34628c",
"assets/assets/achievements/constant/achievement.png": "2f9c659526a7ad5d903018f2fa7092e9",
"assets/assets/projects/constant/forks.png": "84f1baf0bcf3b4cf3ea5edb36548e069",
"assets/assets/projects/constant/stars.png": "449614124a2ef5910c35e1e9d62aec5e",
"assets/assets/education/rupp-logo.png": "c36cb3fefee29df33bf29284344c9c2e",
"assets/assets/education/MoEYS_(Cambodia).png": "82d9d1c972888e20efaf357affd23940",
"assets/assets/education/ITPC.png": "8a614b7dc932ac5adbb6e8806fe1fe3b",
"assets/assets/education/puthisastra-logo.png": "1f6cad024bb5a45936ae394c2660eec0",
"assets/assets/education/atn-training-center.png": "273a106abbf71e4d5c661eca9a5afdd8",
"assets/assets/education/gitaram.png": "e0c528ff1e67d954a6039ce204c38c8f",
"assets/assets/education/rcciit.png": "e549f157d5783656caeb1f605259b897",
"assets/assets/education/Amazon_Web_Services_Logo.png": "c7401f520e568a2994f0269e6c537f1d",
"assets/assets/education/constant/education.png": "1ebc9c3cdde631ddd2f356001c79eceb",
"assets/assets/education/stxaviers.png": "54936ceae932c0337c5c4096d2bf6037",
"assets/assets/education/Udemy_logo.png": "4fe8665ad4ac5cf6aeab2cdcdf24bba5",
"assets/assets/what_i_do/git.png": "47d6e88f9e2e43be7c44d931b6df1bb1",
"assets/assets/what_i_do/python.png": "162ee83dbba7afc24d8f2009c7a22dc5",
"assets/assets/what_i_do/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/what_i_do/cpp.png": "c1c5353e8ce476277f0350ff2771b423",
"assets/assets/what_i_do/Swift_logo.png": "28baf0f4ecb7ab1b811aaad529718bfc",
"assets/assets/what_i_do/bash.png": "c28de02f2c280a49a31df0430d908ea6",
"assets/assets/what_i_do/java.png": "6505cdab6723f46e154569052ba36ac0",
"assets/assets/what_i_do/Postgresql_elephant.png": "b30452e7306485b0c3d6819b46fa6b58",
"assets/assets/what_i_do/linux.png": "95e08e2d98526849bbf0606536a04acf",
"assets/assets/what_i_do/Amazon_Web_Services_Logo.png": "c7401f520e568a2994f0269e6c537f1d",
"assets/assets/what_i_do/constant/checklist-light.png": "c6a80a3ff27e7db249fb88159383f74d",
"assets/assets/what_i_do/constant/checklist.png": "bce0e7781492fe752297f8369c666494",
"assets/assets/what_i_do/JavaScript-logo.png": "0cded3a3276425911d55a2552bf361bf",
"assets/assets/what_i_do/c.png": "4ffb8d1f8296467ba6dad05136c699d1",
"assets/assets/what_i_do/figma-logo.png": "e24035d141a2cd480c646b42a6ea1b79",
"assets/assets/fonts/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/FjallaOne-Regular.ttf": "4fa3683005fa20dd058f47b9cfd411df",
"assets/assets/contact_me/me.png": "245a92140c9281a94667b3a2fd3954d5",
"assets/assets/contact_me/constant/location-dark.png": "08a65e7c79b85fbcb40e8fce00953e47",
"assets/assets/contact_me/constant/location.png": "dbc10b089546daaee5c45d9bb754f989",
"assets/assets/contact_me/constant/picture.png": "1a817a95a42d8c43031378d122a05ffe",
"assets/assets/contact_me/picture.png": "13a4b677d9fa726efd9e771189222bf5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
