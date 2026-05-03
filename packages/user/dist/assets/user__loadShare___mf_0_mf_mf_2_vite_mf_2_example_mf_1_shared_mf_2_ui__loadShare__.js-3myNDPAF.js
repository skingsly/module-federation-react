System.register([], (function(exports, module) {
  "use strict";
  return {
    execute: (async function() {
      const __mfPromiseGlobalKey = "__mf_init____mf__virtual/user__mf_v__runtimeInit__mf_v__.js__";
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
      const res = initPromise.then((runtime) => runtime.loadShare("@mf-vite-example/shared-ui", {
        customShareInfo: { shareConfig: {
          singleton: true,
          strictVersion: false,
          requiredVersion: "^1.0.0"
        } }
      }));
      const exportModule = await res.then((factory) => typeof factory === "function" ? factory() : factory);
      exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
      const { SharedBadge: __mf_0 } = exportModule;
      exports("_", __mf_0);
    })
  };
}));
