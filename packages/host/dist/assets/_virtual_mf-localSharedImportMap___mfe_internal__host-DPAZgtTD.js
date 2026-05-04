System.register(["./preload-helper-ODuFZS3r.js", "../remoteEntry.js"], (function(exports, module) {
  "use strict";
  var __vitePreload;
  return {
    setters: [(module2) => {
      __vitePreload = module2._;
    }, null],
    execute: (function() {
      const importMap = {
        "react": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__host__loadShare__react__loadShare__.mjs-DWNl36sX.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react-dom": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__host__loadShare__react_mf_2_dom__loadShare__.mjs-XlP-8PWz.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react-dom/client": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__host__loadShare__react_mf_2_dom_mf_1_client__loadShare__.mjs-DQui-hXo.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react-router": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__host__loadShare__react_mf_2_router__loadShare__.mjs-_3jvmld7.js").then((n) => n.a), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react/jsx-runtime": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__host__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.mjs-BqgcUiWt.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        }
      };
      const usedShared = exports("usedShared", {
        "react": {
          name: "react",
          version: "19.2.4",
          scope: ["default"],
          loaded: false,
          from: "__mfe_internal__host",
          async get() {
            usedShared["react"].loaded = true;
            const { "react": pkgDynamicImport } = importMap;
            const res = await pkgDynamicImport();
            const exportModule = { ...res };
            Object.defineProperty(exportModule, "__esModule", {
              value: true,
              enumerable: false
            });
            return function() {
              return exportModule;
            };
          },
          shareConfig: {
            singleton: true,
            requiredVersion: "^19.2.4"
          }
        },
        "react-dom": {
          name: "react-dom",
          version: "19.2.4",
          scope: ["default"],
          loaded: false,
          from: "__mfe_internal__host",
          async get() {
            usedShared["react-dom"].loaded = true;
            const { "react-dom": pkgDynamicImport } = importMap;
            const res = await pkgDynamicImport();
            const exportModule = { ...res };
            Object.defineProperty(exportModule, "__esModule", {
              value: true,
              enumerable: false
            });
            return function() {
              return exportModule;
            };
          },
          shareConfig: {
            singleton: true,
            requiredVersion: "^19.2.4"
          }
        },
        "react-dom/client": {
          name: "react-dom/client",
          version: "19.2.4",
          scope: ["default"],
          loaded: false,
          from: "__mfe_internal__host",
          async get() {
            usedShared["react-dom/client"].loaded = true;
            const { "react-dom/client": pkgDynamicImport } = importMap;
            const res = await pkgDynamicImport();
            const exportModule = { ...res };
            Object.defineProperty(exportModule, "__esModule", {
              value: true,
              enumerable: false
            });
            return function() {
              return exportModule;
            };
          },
          shareConfig: {
            singleton: true,
            requiredVersion: "^19.2.4"
          }
        },
        "react-router": {
          name: "react-router",
          version: "7.14.2",
          scope: ["default"],
          loaded: false,
          from: "__mfe_internal__host",
          async get() {
            usedShared["react-router"].loaded = true;
            const { "react-router": pkgDynamicImport } = importMap;
            const res = await pkgDynamicImport();
            const exportModule = { ...res };
            Object.defineProperty(exportModule, "__esModule", {
              value: true,
              enumerable: false
            });
            return function() {
              return exportModule;
            };
          },
          shareConfig: {
            singleton: true,
            requiredVersion: "^7.14.2"
          }
        },
        "react/jsx-runtime": {
          name: "react/jsx-runtime",
          version: "19.2.4",
          scope: ["default"],
          loaded: false,
          from: "__mfe_internal__host",
          async get() {
            usedShared["react/jsx-runtime"].loaded = true;
            const { "react/jsx-runtime": pkgDynamicImport } = importMap;
            const res = await pkgDynamicImport();
            const exportModule = { ...res };
            Object.defineProperty(exportModule, "__esModule", {
              value: true,
              enumerable: false
            });
            return function() {
              return exportModule;
            };
          },
          shareConfig: {
            singleton: true,
            requiredVersion: "^19.2.4"
          }
        }
      });
      const usedRemotes = exports("usedRemotes", [
        {
          entryGlobalName: "remote",
          name: "remote",
          type: "module",
          entry: "http://localhost:4174/remoteEntry.js",
          shareScope: "default"
        }
      ]);
    })
  };
}));
