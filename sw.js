// 监听service worker的install事件
this.addEventListener("install", (event) => {
  // 如果监听到了service worker已经安装成功的话
  // 就会调用event.waitUtil回调函数
  event.waitUntil(
    // 安装成功后调用CacheStorage缓存，使用之前先通过caches.open()
    // 打开对应的缓存空间
    caches.open("my-test-cache-v1").then((cache) => {
      // 通过cache缓存对象的addAll方法添加
      return cache.addAll([
        "/",
        "/index.html",
        "//cdn.jsdelivr.net/npm/docsify@4.11.4",
        "//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js",
      ]);
    })
  );
});
