System.register([], (function(exports, module) {
  "use strict";
  return {
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
      const __mfPromiseGlobalKey = "__mf_init____mf__virtual/host__mf_v__runtimeInit__mf_v__.js__";
      let __mfPromiseState = globalThis[__mfPromiseGlobalKey];
      if (!__mfPromiseState) {
        let initResolve, initReject;
        const initPromise2 = new Promise((re, rj) => {
          initResolve = re;
          initReject = rj;
        });
        __mfPromiseState = globalThis[__mfPromiseGlobalKey] = {
          initPromise: initPromise2,
          initResolve,
          initReject
        };
        if (typeof window === "undefined") {
          initResolve({
            loadRemote: function() {
              return Promise.resolve(void 0);
            },
            loadShare: function() {
              return Promise.resolve(void 0);
            }
          });
        }
      }
      const initPromise = __mfPromiseState.initPromise;
      const res = initPromise.then((runtime) => runtime.loadRemote("user/remote-app"));
      const exportModule = await initPromise.then((_) => res);
      const __moduleExports = exportModule;
      const host__loadRemote__user_mf_1_remote_mf_2_app__loadRemote__ = exportModule.__esModule ? exportModule.default : exportModule;
      const host__loadRemote__user_mf_1_remote_mf_2_app__loadRemote__$1 = /* @__PURE__ */ _mergeNamespaces({
        __proto__: null,
        default: host__loadRemote__user_mf_1_remote_mf_2_app__loadRemote__
      }, [__moduleExports]);
      exports("h", host__loadRemote__user_mf_1_remote_mf_2_app__loadRemote__$1);
    })
  };
}));
