System.register([], (function(exports, module) {
  "use strict";
  return {
    execute: (function() {
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
      exports({
        a: getAugmentedNamespace,
        g: getDefaultExportFromCjs
      });
      function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
      }
      function getAugmentedNamespace(n) {
        if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
        var f = n.default;
        if (typeof f == "function") {
          var a = function a2() {
            var isInstance = false;
            try {
              isInstance = this instanceof a2;
            } catch {
            }
            if (isInstance) {
              return Reflect.construct(f, arguments, this.constructor);
            }
            return f.apply(this, arguments);
          };
          a.prototype = f.prototype;
        } else a = {};
        Object.defineProperty(a, "__esModule", { value: true });
        Object.keys(n).forEach(function(k) {
          var d = Object.getOwnPropertyDescriptor(n, k);
          Object.defineProperty(a, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return n[k];
            }
          });
        });
        return a;
      }
      var jsxRuntime = { exports: {} };
      var reactJsxRuntime_production = {};
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
      function jsxProd(type, config, maybeKey) {
        var key = null;
        void 0 !== maybeKey && (key = "" + maybeKey);
        void 0 !== config.key && (key = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        config = maybeKey.ref;
        return {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref: void 0 !== config ? config : null,
          props: maybeKey
        };
      }
      reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_production.jsx = jsxProd;
      reactJsxRuntime_production.jsxs = jsxProd;
      {
        jsxRuntime.exports = reactJsxRuntime_production;
      }
      var jsxRuntimeExports = jsxRuntime.exports;
      const jsxRuntime_default = /* @__PURE__ */ getDefaultExportFromCjs(jsxRuntimeExports);
      const __mfLocalShare = /* @__PURE__ */ _mergeNamespaces({
        __proto__: null,
        default: jsxRuntime_default
      }, [jsxRuntimeExports]);
      exports("_", __mfLocalShare);
      const __mfCacheGlobalKey = "__mf_module_cache__";
      globalThis[__mfCacheGlobalKey] ||= { share: {}, remote: {} };
      globalThis[__mfCacheGlobalKey].share ||= {};
      globalThis[__mfCacheGlobalKey].remote ||= {};
      const __mfModuleCache = globalThis[__mfCacheGlobalKey];
      let exportModule = __mfModuleCache.share["react/jsx-runtime"];
      if (exportModule === void 0) {
        exportModule = __mfLocalShare;
        __mfModuleCache.share["react/jsx-runtime"] = exportModule;
      }
      exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
      const { Fragment: __mf_0, jsx: __mf_1, jsxs: __mf_2 } = exportModule;
      exports({ b: __mf_1, c: __mf_2 });
    })
  };
}));
