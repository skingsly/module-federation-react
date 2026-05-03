System.register(["./preload-helper-ODuFZS3r.js", "../remoteEntry.js"], (function(exports, module) {
  "use strict";
  var __vitePreload;
  return {
    setters: [(module2) => {
      __vitePreload = module2._;
    }, null],
    execute: (function() {
      const importMap = {
        "@mf-vite-example/shared-ui": async () => {
          let pkg = await __vitePreload(() => module.import("./index-C6d8smWp.js"), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react": async () => {
          let pkg = await __vitePreload(() => module.import("./index-BsKuMNk2.js").then((n) => n.i), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        },
        "react-dom": async () => {
          let pkg = await __vitePreload(() => module.import("./index-pT-FVPYK.js").then((n) => n.i), false ? __VITE_PRELOAD__ : void 0);
          return pkg;
        }
      };
      const usedShared = exports("usedShared", {
        "@mf-vite-example/shared-ui": {
          name: "@mf-vite-example/shared-ui",
          version: "1.0.0",
          scope: ["default"],
          loaded: false,
          from: "user",
          async get() {
            usedShared["@mf-vite-example/shared-ui"].loaded = true;
            const { "@mf-vite-example/shared-ui": pkgDynamicImport } = importMap;
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
            requiredVersion: "^1.0.0"
          }
        },
        "react": {
          name: "react",
          version: "19.2.4",
          scope: ["default"],
          loaded: false,
          from: "user",
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
          from: "user",
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
        }
      });
      const usedRemotes = exports("usedRemotes", []);
    })
  };
}));
