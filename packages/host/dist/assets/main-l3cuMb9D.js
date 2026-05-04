System.register(["./preload-helper-ODuFZS3r.js", "./virtualExposes-DC1KbaAQ.js"], (function(exports, module) {
  "use strict";
  var __vitePreload;
  return {
    setters: [(module2) => {
      __vitePreload = module2._;
    }, null],
    execute: (function() {
      const __mfCacheGlobalKey = "__mf_module_cache__";
      globalThis[__mfCacheGlobalKey] ||= { share: {}, remote: {} };
      globalThis[__mfCacheGlobalKey].share ||= {};
      globalThis[__mfCacheGlobalKey].remote ||= {};
      (async () => {
        const { initHost } = await __vitePreload(async () => {
          const { initHost: initHost2 } = await module.import("./hostInit-R7Hs9Cxa.js");
          return { initHost: initHost2 };
        }, false ? __VITE_PRELOAD__ : void 0);
        await initHost();
        const __mfRemotePreloads = [];
        await Promise.all(__mfRemotePreloads);
      })().then(() => __vitePreload(() => module.import("./main-7AR1PDDQ.js"), false ? __VITE_PRELOAD__ : void 0));
    })
  };
}));
