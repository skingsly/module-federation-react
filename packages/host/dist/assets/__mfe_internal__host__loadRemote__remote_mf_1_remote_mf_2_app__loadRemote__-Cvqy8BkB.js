System.register(["./hostInit-R7Hs9Cxa.js"], (function(exports, module) {
  "use strict";
  var hostInitPromise;
  return {
    setters: [(module2) => {
      hostInitPromise = module2.hostInitPromise;
    }],
    execute: (async function() {
      function _mergeNamespaces(n, m) {
        for (var i = 0; i < m.length; i++) {
          const e = m[i];
          if (typeof e !== "string" && !Array.isArray(e)) {
            for (const k in e) {
              if (k !== "default" && !(k in n)) {
                const d = Object.getOwnPropertyDescriptor(e, k);
                if (d) {
                  Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: () => e[k]
                  });
                }
              }
            }
          }
        }
        return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
      }
      const __mfCacheGlobalKey = "__mf_module_cache__";
      globalThis[__mfCacheGlobalKey] ||= { share: {}, remote: {} };
      globalThis[__mfCacheGlobalKey].share ||= {};
      globalThis[__mfCacheGlobalKey].remote ||= {};
      const __mfModuleCache = globalThis[__mfCacheGlobalKey];
      let __mfRemotePending;
      let exportModule = __mfModuleCache.remote["remote/remote-app"];
      if (exportModule === void 0) {
        const pendingKey = "__mf_pending__remote/remote-app";
        if (!__mfModuleCache.remote[pendingKey]) {
          __mfModuleCache.remote[pendingKey] = hostInitPromise.then((runtime) => runtime.loadRemote("remote/remote-app")).then((mod) => {
            __mfModuleCache.remote["remote/remote-app"] = mod;
            delete __mfModuleCache.remote[pendingKey];
            return mod;
          }).catch((error) => {
            delete __mfModuleCache.remote[pendingKey];
            throw error;
          });
        }
        __mfRemotePending = __mfModuleCache.remote[pendingKey];
        exportModule = {};
      }
      if (__mfRemotePending) {
        const mod = await __mfRemotePending;
        if (mod !== void 0) exportModule = mod;
      }
      const __moduleExports = exportModule;
      const __mf_remote_pending = Promise.resolve(exportModule);
      const __mfe_internal__host__loadRemote__remote_mf_1_remote_mf_2_app__loadRemote__ = (exportModule == null ? void 0 : exportModule.__esModule) ? exportModule.default : exportModule.default ?? exportModule;
      const __mfe_internal__host__loadRemote__remote_mf_1_remote_mf_2_app__loadRemote__$1 = /* @__PURE__ */ _mergeNamespaces({
        __proto__: null,
        __mf_remote_pending,
        default: __mfe_internal__host__loadRemote__remote_mf_1_remote_mf_2_app__loadRemote__
      }, [__moduleExports]);
      exports("_", __mfe_internal__host__loadRemote__remote_mf_1_remote_mf_2_app__loadRemote__$1);
    })
  };
}));
