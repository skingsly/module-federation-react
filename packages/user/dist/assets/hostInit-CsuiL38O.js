System.register(["./preload-helper-ODuFZS3r.js"], (function(exports, module) {
  "use strict";
  var __vitePreload;
  return {
    setters: [(module2) => {
      __vitePreload = module2._;
    }],
    execute: (async function() {
      const remoteEntry = await __vitePreload(() => module.import("../remoteEntry.js"), false ? __VITE_PRELOAD__ : void 0);
      await remoteEntry.init();
    })
  };
}));
