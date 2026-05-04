System.register(["./preload-helper-ODuFZS3r.js"], (function(exports, module) {
  "use strict";
  var __vitePreload;
  return {
    setters: [(module2) => {
      __vitePreload = module2._;
    }],
    execute: (function() {
      const cssAssetMap = {};
      const injectedCssHrefs = /* @__PURE__ */ new Set();
      let exposeLoadQueue = Promise.resolve();
      async function importExposedModule(loader) {
        const currentLoad = exposeLoadQueue.then(loader, loader);
        exposeLoadQueue = currentLoad.then(
          () => void 0,
          () => void 0
        );
        return currentLoad;
      }
      async function injectCssAssets(exposeKey) {
        if (typeof document === "undefined") {
          return;
        }
        const cssAssets = cssAssetMap[exposeKey] || [];
        await Promise.all(
          cssAssets.map((cssAsset) => {
            const href = new URL(cssAsset, module.meta.url).href;
            if (injectedCssHrefs.has(href)) {
              return Promise.resolve();
            }
            injectedCssHrefs.add(href);
            const existingLink = document.querySelector(
              `link[rel="stylesheet"][data-mf-href="${href}"]`
            );
            if (existingLink) {
              return Promise.resolve();
            }
            return new Promise((resolve, reject) => {
              const link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = href;
              link.setAttribute("data-mf-href", href);
              link.onload = () => resolve();
              link.onerror = () => reject(new Error(`[Module Federation] Failed to load CSS asset: ${href}`));
              document.head.appendChild(link);
            });
          })
        );
      }
      const virtual_mfExposes___mfe_internal__user__remoteEntry_js = exports("default", {
        "./remote-app": async () => {
          await injectCssAssets("./remote-app");
          const importModule = await importExposedModule(
            () => __vitePreload(() => module.import("./App-BwPF6aPQ.js"), false ? __VITE_PRELOAD__ : void 0)
          );
          const exportModule = {};
          Object.assign(exportModule, importModule);
          Object.defineProperty(exportModule, "__esModule", {
            value: true,
            enumerable: false
          });
          return exportModule;
        }
      });
    })
  };
}));
