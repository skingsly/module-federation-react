System.register(["./host__loadShare__react__loadShare__.js-2sScsQri.js"], (function(exports, module) {
  "use strict";
  var React4;
  return {
    setters: [(module2) => {
      React4 = module2.R;
    }],
    execute: (function() {
      exports({
        a: getDefaultExportFromCjs,
        g: getAugmentedNamespace
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
      const require$$0 = exports("r", /* @__PURE__ */ getAugmentedNamespace(React4));
    })
  };
}));
