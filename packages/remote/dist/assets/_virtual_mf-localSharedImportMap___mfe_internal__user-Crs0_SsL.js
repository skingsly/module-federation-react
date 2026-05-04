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
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__user__loadShare__react__loadShare__.mjs-wYHGoMjd.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react-dom": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__user__loadShare__react_mf_2_dom__loadShare__.mjs-BSpOJ0tS.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react-dom/client": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__user__loadShare__react_mf_2_dom_mf_1_client__loadShare__.mjs-BEXBIpGi.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react/jsx-runtime": async () => {
          let pkg = await __vitePreload(() => module.import("./__mfe_internal__user__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.mjs-DOR7TGPR.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        }
      };
      const usedShared = exports("usedShared", {
        "react": {
          name: "react",
          version: "19.2.4",
          scope: ["default"],
          loaded: false,
          from: "__mfe_internal__user",
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
          from: "__mfe_internal__user",
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
          from: "__mfe_internal__user",
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
        "react/jsx-runtime": {
          name: "react/jsx-runtime",
          version: "19.2.4",
          scope: ["default"],
          loaded: false,
          from: "__mfe_internal__user",
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
      const usedRemotes = exports("usedRemotes", []);
    })
  };
}));
