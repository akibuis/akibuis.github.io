'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a3f087b4088e9a5c1ee6f0f46b421399",
"index.html": "0ea6779a201e2dcbbdec469633aa9a67",
"/": "0ea6779a201e2dcbbdec469633aa9a67",
"main.dart.js": "5d001a1c0e1f4a057ee304cc908abab4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1b3bc6db1552094c2f3d0cbed3c393da",
"assets/AssetManifest.json": "862a3bab162651c62be7b78abed8bedc",
"assets/NOTICES": "d6840a300a3a5cddfb8ebb02337e7b01",
"assets/FontManifest.json": "aebb74b4e052706768cb6884da8f133e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Group_7531@3x.png": "e05b38742b2f0eef49296d23f661f798",
"assets/assets/images/login.png": "c05264bc8f7bef1053535ff67082d580",
"assets/assets/images/Group_7527@3x.png": "28b601025ce433a52253d0cb708af1b6",
"assets/assets/images/app_launcher_icon.png": "29409cf76299e5b4f3dc5abe78650484",
"assets/assets/images/avatar.png": "5491efdf256f7b0d2bb0921db2a0e4be",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Group_7555@3x.png": "c1ffe91c0e0914ed50d79e920898a322",
"assets/assets/images/Mask_Group_2@2x.png": "04305f70463de9beae0cebca4e128fb8",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/LibreFranklin-Light.ttf": "75d545c402fe2a73a053437baf3c06e7",
"assets/assets/fonts/LibreFranklin-Regular.ttf": "88f8f3ec14cacfac8a7266977e569ec5",
"assets/assets/fonts/LibreFranklin-ExtraBoldItalic.ttf": "02c5a1bbfeae692d17fac5e1519e9d64",
"assets/assets/fonts/LibreFranklin-ExtraBold.ttf": "36fb58c48197fda62900a23dbac8db68",
"assets/assets/fonts/LibreFranklin-Bold.ttf": "f5ae33e0fc0c3d498f3ad1c620a7800c",
"assets/assets/fonts/LibreFranklin-SemiBold.ttf": "b3a9182b2c794f45c06314cf30e1a468",
"assets/assets/fonts/LibreFranklin-ExtraLight.ttf": "9cd823dcd3ce70e0dbfd34363671ab29",
"assets/assets/fonts/LibreFranklin-Italic.ttf": "9924dbe0cb725cb20f653d19c37aa5f1",
"assets/assets/fonts/LibreFranklin-ThinItalic.ttf": "69301bc82dfe197e86eed75d443be7e4",
"assets/assets/fonts/LibreFranklin-BoldItalic.ttf": "266d36cc1a0aeece00be49806c30cfb2",
"assets/assets/fonts/LibreFranklin-ExtraLightItalic.ttf": "2ff86b688cb143be5a3f2dadeac5b53c",
"assets/assets/fonts/LibreFranklin-Thin.ttf": "1b990494da834b9589bf3a1f3796c294",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/LibreFranklin-LightItalic.ttf": "6a10b53cbf1addc6be56415e4a280432",
"assets/assets/fonts/LibreFranklin-Medium.ttf": "8283ab8aa96d84fb2ce0933b4cdddc9e",
"assets/assets/fonts/LibreFranklin-BlackItalic.ttf": "cc1219d6fc649d04d2ee0d54a1a482e1",
"assets/assets/fonts/LibreFranklin-SemiBoldItalic.ttf": "a6b7ab9910f7fb39eafdd7027bc2fa3e",
"assets/assets/fonts/LibreFranklin-MediumItalic.ttf": "87c05f79f6ad52a05fb6dcdabe386333",
"assets/assets/fonts/LibreFranklin-Black.ttf": "60c2427046cc0bc1501c4ab6f15e1681",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
