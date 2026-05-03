System.register([], (function(exports, module) {
  "use strict";
  return {
    execute: (function() {
      exports("SharedBadge", SharedBadge);
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
      function SharedBadge({ label }) {
        return jsxRuntimeExports.jsx("span", { style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px 11px",
          borderRadius: "999px",
          marginTop: "12px",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          background: "rgba(255, 255, 255, 0.08)",
          color: "rgba(255, 255, 255, 0.78)",
          backdropFilter: "blur(8px)"
        }, children: label });
      }
    })
  };
}));
