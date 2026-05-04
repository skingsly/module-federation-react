System.register(["./preload-helper-ODuFZS3r.js"], (function(exports, module) {
  "use strict";
  var __vitePreload;
  return {
    setters: [(module2) => {
      __vitePreload = module2._;
    }],
    execute: (function() {
      exports("initHost", initHost);
      const __mfCacheGlobalKey = "__mf_module_cache__";
      globalThis[__mfCacheGlobalKey] ||= { share: {}, remote: {} };
      globalThis[__mfCacheGlobalKey].share ||= {};
      globalThis[__mfCacheGlobalKey].remote ||= {};
      const __mfModuleCache = globalThis[__mfCacheGlobalKey];
      let hostInitPromise;
      exports("hostInitPromise", hostInitPromise);
      async function initHost() {
        if (!hostInitPromise) {
          exports("hostInitPromise", hostInitPromise = (async () => {
            const remoteEntry = await __vitePreload(() => module.import("../remoteEntry.js"), false ? __VITE_PRELOAD__ : void 0);
            const runtime = await remoteEntry.init();
            const usedShared = {
              "react": {
                shareConfig: {
                  singleton: true,
                  requiredVersion: "^19.2.4"
                }
              },
              "react-dom": {
                shareConfig: {
                  singleton: true,
                  requiredVersion: "^19.2.4"
                }
              },
              "react-router": {
                shareConfig: {
                  singleton: true,
                  requiredVersion: "^7.14.2"
                }
              }
            };
            for (const [pkg, share] of Object.entries(usedShared)) {
              if (__mfModuleCache.share[pkg] !== void 0) {
                continue;
              }
              await runtime.loadShare(pkg, {
                customShareInfo: { shareConfig: share.shareConfig }
              }).then((factory) => {
                const mod = typeof factory === "function" ? factory() : factory;
                return Promise.resolve(mod).then((resolved) => {
                  __mfModuleCache.share[pkg] = resolved;
                });
              });
            }
            const __mfRemotePreloads = [];
            await Promise.all(__mfRemotePreloads);
            return runtime;
          })());
        }
        return hostInitPromise;
      }
      exports("hostInitPromise", hostInitPromise = initHost());
    })
  };
}));
