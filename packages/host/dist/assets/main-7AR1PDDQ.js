System.register(["./__mfe_internal__host__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.mjs-BqgcUiWt.js", "./__mfe_internal__host__loadShare__react__loadShare__.mjs-DWNl36sX.js", "./__mfe_internal__host__loadShare__react_mf_2_dom_mf_1_client__loadShare__.mjs-DQui-hXo.js", "./preload-helper-ODuFZS3r.js", "./__mfe_internal__host__loadShare__react__loadShare__.mjs_commonjs-proxy-BTYw_MQL.js", "./__mfe_internal__host__loadShare__react_mf_2_dom__loadShare__.mjs_commonjs-proxy-BPSWIDhF.js", "./__mfe_internal__host__loadShare__react_mf_2_dom__loadShare__.mjs-XlP-8PWz.js"], (function(exports, module) {
  "use strict";
  var __mf_2, __mf_0, __mf_1, __mf_38, __mf_18, __mf_28, __mf_7, React, ReactDOM, __vitePreload;
  return {
    setters: [(module2) => {
      __mf_2 = module2.a;
      __mf_0 = module2.b;
      __mf_1 = module2.c;
    }, (module2) => {
      __mf_38 = module2.f;
      __mf_18 = module2.w;
      __mf_28 = module2.m;
      __mf_7 = module2.u;
      React = module2.v;
    }, (module2) => {
      ReactDOM = module2.R;
    }, (module2) => {
      __vitePreload = module2._;
    }, null, null, null],
    execute: (function() {
      var __vite_style__ = document.createElement("style");
      __vite_style__.textContent = ".host .card {\n  background: #3178c6;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  margin: 20px 20px 20px 20px;\n  width: 250px;\n  padding: 20px;\n  text-align: center;\n  color: white;\n  float: left;\n}\n\n.host .title {\n  margin-top: 10px;\n  font-size: 25px;\n}\n\n.host svg {\n  width: 100px;\n  height: 100px;\n}\n\n.host path {\n  fill: #f6b352;\n}\n/*$vite$:1*/";
      document.head.appendChild(__vite_style__);
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }
      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }
      function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
        return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      }
      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      }
      function __spreadArray(to, from2, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
          if (ar || !(i in from2)) {
            if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
            ar[i] = from2[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from2));
      }
      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }
      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function awaitReturn(f) {
          return function(v) {
            return Promise.resolve(v).then(f, reject);
          };
        }
        function verb(n, f) {
          if (g[n]) {
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
            if (f) i[n] = f(i[n]);
          }
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }
      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      }
      typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
      };
      function isFunction(value) {
        return typeof value === "function";
      }
      function createErrorClass(createImpl) {
        var _super = function(instance) {
          Error.call(instance);
          instance.stack = new Error().stack;
        };
        var ctorFunc = createImpl(_super);
        ctorFunc.prototype = Object.create(Error.prototype);
        ctorFunc.prototype.constructor = ctorFunc;
        return ctorFunc;
      }
      var UnsubscriptionError = createErrorClass(function(_super) {
        return function UnsubscriptionErrorImpl(errors) {
          _super(this);
          this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
          }).join("\n  ") : "";
          this.name = "UnsubscriptionError";
          this.errors = errors;
        };
      });
      function arrRemove(arr, item) {
        if (arr) {
          var index = arr.indexOf(item);
          0 <= index && arr.splice(index, 1);
        }
      }
      var Subscription = (function() {
        function Subscription2(initialTeardown) {
          this.initialTeardown = initialTeardown;
          this.closed = false;
          this._parentage = null;
          this._finalizers = null;
        }
        Subscription2.prototype.unsubscribe = function() {
          var e_1, _a, e_2, _b;
          var errors;
          if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
              this._parentage = null;
              if (Array.isArray(_parentage)) {
                try {
                  for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                    var parent_1 = _parentage_1_1.value;
                    parent_1.remove(this);
                  }
                } catch (e_1_1) {
                  e_1 = { error: e_1_1 };
                } finally {
                  try {
                    if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }
              } else {
                _parentage.remove(this);
              }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
              try {
                initialFinalizer();
              } catch (e) {
                errors = e instanceof UnsubscriptionError ? e.errors : [e];
              }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
              this._finalizers = null;
              try {
                for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                  var finalizer = _finalizers_1_1.value;
                  try {
                    execFinalizer(finalizer);
                  } catch (err) {
                    errors = errors !== null && errors !== void 0 ? errors : [];
                    if (err instanceof UnsubscriptionError) {
                      errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                    } else {
                      errors.push(err);
                    }
                  }
                }
              } catch (e_2_1) {
                e_2 = { error: e_2_1 };
              } finally {
                try {
                  if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                } finally {
                  if (e_2) throw e_2.error;
                }
              }
            }
            if (errors) {
              throw new UnsubscriptionError(errors);
            }
          }
        };
        Subscription2.prototype.add = function(teardown) {
          var _a;
          if (teardown && teardown !== this) {
            if (this.closed) {
              execFinalizer(teardown);
            } else {
              if (teardown instanceof Subscription2) {
                if (teardown.closed || teardown._hasParent(this)) {
                  return;
                }
                teardown._addParent(this);
              }
              (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
          }
        };
        Subscription2.prototype._hasParent = function(parent) {
          var _parentage = this._parentage;
          return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
        };
        Subscription2.prototype._addParent = function(parent) {
          var _parentage = this._parentage;
          this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
        };
        Subscription2.prototype._removeParent = function(parent) {
          var _parentage = this._parentage;
          if (_parentage === parent) {
            this._parentage = null;
          } else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
          }
        };
        Subscription2.prototype.remove = function(teardown) {
          var _finalizers = this._finalizers;
          _finalizers && arrRemove(_finalizers, teardown);
          if (teardown instanceof Subscription2) {
            teardown._removeParent(this);
          }
        };
        Subscription2.EMPTY = (function() {
          var empty = new Subscription2();
          empty.closed = true;
          return empty;
        })();
        return Subscription2;
      })();
      Subscription.EMPTY;
      function isSubscription(value) {
        return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
      }
      function execFinalizer(finalizer) {
        if (isFunction(finalizer)) {
          finalizer();
        } else {
          finalizer.unsubscribe();
        }
      }
      var config = {
        Promise: void 0
      };
      var timeoutProvider = {
        setTimeout: function(handler, timeout) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
        },
        clearTimeout: function(handle) {
          return clearTimeout(handle);
        },
        delegate: void 0
      };
      function reportUnhandledError(err) {
        timeoutProvider.setTimeout(function() {
          {
            throw err;
          }
        });
      }
      function noop() {
      }
      function errorContext(cb) {
        {
          cb();
        }
      }
      var Subscriber = (function(_super) {
        __extends(Subscriber2, _super);
        function Subscriber2(destination) {
          var _this = _super.call(this) || this;
          _this.isStopped = false;
          if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
              destination.add(_this);
            }
          } else {
            _this.destination = EMPTY_OBSERVER;
          }
          return _this;
        }
        Subscriber2.create = function(next, error, complete) {
          return new SafeSubscriber(next, error, complete);
        };
        Subscriber2.prototype.next = function(value) {
          if (this.isStopped) ;
          else {
            this._next(value);
          }
        };
        Subscriber2.prototype.error = function(err) {
          if (this.isStopped) ;
          else {
            this.isStopped = true;
            this._error(err);
          }
        };
        Subscriber2.prototype.complete = function() {
          if (this.isStopped) ;
          else {
            this.isStopped = true;
            this._complete();
          }
        };
        Subscriber2.prototype.unsubscribe = function() {
          if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
          }
        };
        Subscriber2.prototype._next = function(value) {
          this.destination.next(value);
        };
        Subscriber2.prototype._error = function(err) {
          try {
            this.destination.error(err);
          } finally {
            this.unsubscribe();
          }
        };
        Subscriber2.prototype._complete = function() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        };
        return Subscriber2;
      })(Subscription);
      var ConsumerObserver = (function() {
        function ConsumerObserver2(partialObserver) {
          this.partialObserver = partialObserver;
        }
        ConsumerObserver2.prototype.next = function(value) {
          var partialObserver = this.partialObserver;
          if (partialObserver.next) {
            try {
              partialObserver.next(value);
            } catch (error) {
              handleUnhandledError(error);
            }
          }
        };
        ConsumerObserver2.prototype.error = function(err) {
          var partialObserver = this.partialObserver;
          if (partialObserver.error) {
            try {
              partialObserver.error(err);
            } catch (error) {
              handleUnhandledError(error);
            }
          } else {
            handleUnhandledError(err);
          }
        };
        ConsumerObserver2.prototype.complete = function() {
          var partialObserver = this.partialObserver;
          if (partialObserver.complete) {
            try {
              partialObserver.complete();
            } catch (error) {
              handleUnhandledError(error);
            }
          }
        };
        return ConsumerObserver2;
      })();
      var SafeSubscriber = (function(_super) {
        __extends(SafeSubscriber2, _super);
        function SafeSubscriber2(observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          var partialObserver;
          if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
              next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
              error: error !== null && error !== void 0 ? error : void 0,
              complete: complete !== null && complete !== void 0 ? complete : void 0
            };
          } else {
            {
              partialObserver = observerOrNext;
            }
          }
          _this.destination = new ConsumerObserver(partialObserver);
          return _this;
        }
        return SafeSubscriber2;
      })(Subscriber);
      function handleUnhandledError(error) {
        {
          reportUnhandledError(error);
        }
      }
      function defaultErrorHandler(err) {
        throw err;
      }
      var EMPTY_OBSERVER = {
        closed: true,
        next: noop,
        error: defaultErrorHandler,
        complete: noop
      };
      var observable = (function() {
        return typeof Symbol === "function" && Symbol.observable || "@@observable";
      })();
      function identity(x) {
        return x;
      }
      function pipeFromArray(fns) {
        if (fns.length === 0) {
          return identity;
        }
        if (fns.length === 1) {
          return fns[0];
        }
        return function piped(input) {
          return fns.reduce(function(prev, fn) {
            return fn(prev);
          }, input);
        };
      }
      var Observable = (function() {
        function Observable2(subscribe) {
          if (subscribe) {
            this._subscribe = subscribe;
          }
        }
        Observable2.prototype.lift = function(operator) {
          var observable2 = new Observable2();
          observable2.source = this;
          observable2.operator = operator;
          return observable2;
        };
        Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
          var _this = this;
          var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
          errorContext(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
          });
          return subscriber;
        };
        Observable2.prototype._trySubscribe = function(sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            sink.error(err);
          }
        };
        Observable2.prototype.forEach = function(next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function(resolve, reject) {
            var subscriber = new SafeSubscriber({
              next: function(value) {
                try {
                  next(value);
                } catch (err) {
                  reject(err);
                  subscriber.unsubscribe();
                }
              },
              error: reject,
              complete: resolve
            });
            _this.subscribe(subscriber);
          });
        };
        Observable2.prototype._subscribe = function(subscriber) {
          var _a;
          return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
        };
        Observable2.prototype[observable] = function() {
          return this;
        };
        Observable2.prototype.pipe = function() {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
          }
          return pipeFromArray(operations)(this);
        };
        Observable2.prototype.toPromise = function(promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
              return value = x;
            }, function(err) {
              return reject(err);
            }, function() {
              return resolve(value);
            });
          });
        };
        Observable2.create = function(subscribe) {
          return new Observable2(subscribe);
        };
        return Observable2;
      })();
      function getPromiseCtor(promiseCtor) {
        var _a;
        return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
      }
      function isObserver(value) {
        return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
      }
      function isSubscriber(value) {
        return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
      }
      function hasLift(source) {
        return isFunction(source === null || source === void 0 ? void 0 : source.lift);
      }
      function operate(init) {
        return function(source) {
          if (hasLift(source)) {
            return source.lift(function(liftedSource) {
              try {
                return init(liftedSource, this);
              } catch (err) {
                this.error(err);
              }
            });
          }
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
      }
      var OperatorSubscriber = (function(_super) {
        __extends(OperatorSubscriber2, _super);
        function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
          var _this = _super.call(this, destination) || this;
          _this.onFinalize = onFinalize;
          _this.shouldUnsubscribe = shouldUnsubscribe;
          _this._next = onNext ? function(value) {
            try {
              onNext(value);
            } catch (err) {
              destination.error(err);
            }
          } : _super.prototype._next;
          _this._error = onError ? function(err) {
            try {
              onError(err);
            } catch (err2) {
              destination.error(err2);
            } finally {
              this.unsubscribe();
            }
          } : _super.prototype._error;
          _this._complete = onComplete ? function() {
            try {
              onComplete();
            } catch (err) {
              destination.error(err);
            } finally {
              this.unsubscribe();
            }
          } : _super.prototype._complete;
          return _this;
        }
        OperatorSubscriber2.prototype.unsubscribe = function() {
          var _a;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
          }
        };
        return OperatorSubscriber2;
      })(Subscriber);
      function isScheduler(value) {
        return value && isFunction(value.schedule);
      }
      function last(arr) {
        return arr[arr.length - 1];
      }
      function popScheduler(args) {
        return isScheduler(last(args)) ? args.pop() : void 0;
      }
      var isArrayLike = (function(x) {
        return x && typeof x.length === "number" && typeof x !== "function";
      });
      function isPromise(value) {
        return isFunction(value === null || value === void 0 ? void 0 : value.then);
      }
      function isInteropObservable(input) {
        return isFunction(input[observable]);
      }
      function isAsyncIterable(obj) {
        return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
      }
      function createInvalidObservableTypeError(input) {
        return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
      }
      function getSymbolIterator() {
        if (typeof Symbol !== "function" || !Symbol.iterator) {
          return "@@iterator";
        }
        return Symbol.iterator;
      }
      var iterator = getSymbolIterator();
      function isIterable(input) {
        return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
      }
      function readableStreamLikeToAsyncGenerator(readableStream) {
        return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
          var reader, _a, value, done;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                reader = readableStream.getReader();
                _b.label = 1;
              case 1:
                _b.trys.push([1, , 9, 10]);
                _b.label = 2;
              case 2:
                return [4, __await(reader.read())];
              case 3:
                _a = _b.sent(), value = _a.value, done = _a.done;
                if (!done) return [3, 5];
                return [4, __await(void 0)];
              case 4:
                return [2, _b.sent()];
              case 5:
                return [4, __await(value)];
              case 6:
                return [4, _b.sent()];
              case 7:
                _b.sent();
                return [3, 2];
              case 8:
                return [3, 10];
              case 9:
                reader.releaseLock();
                return [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function isReadableStreamLike(obj) {
        return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
      }
      function innerFrom(input) {
        if (input instanceof Observable) {
          return input;
        }
        if (input != null) {
          if (isInteropObservable(input)) {
            return fromInteropObservable(input);
          }
          if (isArrayLike(input)) {
            return fromArrayLike(input);
          }
          if (isPromise(input)) {
            return fromPromise(input);
          }
          if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
          }
          if (isIterable(input)) {
            return fromIterable(input);
          }
          if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
          }
        }
        throw createInvalidObservableTypeError(input);
      }
      function fromInteropObservable(obj) {
        return new Observable(function(subscriber) {
          var obs = obj[observable]();
          if (isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
          }
          throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
      }
      function fromArrayLike(array) {
        return new Observable(function(subscriber) {
          for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
          }
          subscriber.complete();
        });
      }
      function fromPromise(promise) {
        return new Observable(function(subscriber) {
          promise.then(function(value) {
            if (!subscriber.closed) {
              subscriber.next(value);
              subscriber.complete();
            }
          }, function(err) {
            return subscriber.error(err);
          }).then(null, reportUnhandledError);
        });
      }
      function fromIterable(iterable) {
        return new Observable(function(subscriber) {
          var e_1, _a;
          try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
              var value = iterable_1_1.value;
              subscriber.next(value);
              if (subscriber.closed) {
                return;
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          subscriber.complete();
        });
      }
      function fromAsyncIterable(asyncIterable) {
        return new Observable(function(subscriber) {
          process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
          });
        });
      }
      function fromReadableStreamLike(readableStream) {
        return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
      }
      function process(asyncIterable, subscriber) {
        var asyncIterable_1, asyncIterable_1_1;
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function() {
          var value, e_2_1;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                _b.trys.push([0, 5, 6, 11]);
                asyncIterable_1 = __asyncValues(asyncIterable);
                _b.label = 1;
              case 1:
                return [4, asyncIterable_1.next()];
              case 2:
                if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                value = asyncIterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                  return [2];
                }
                _b.label = 3;
              case 3:
                return [3, 1];
              case 4:
                return [3, 11];
              case 5:
                e_2_1 = _b.sent();
                e_2 = { error: e_2_1 };
                return [3, 11];
              case 6:
                _b.trys.push([6, , 9, 10]);
                if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                return [4, _a.call(asyncIterable_1)];
              case 7:
                _b.sent();
                _b.label = 8;
              case 8:
                return [3, 10];
              case 9:
                if (e_2) throw e_2.error;
                return [7];
              case 10:
                return [7];
              case 11:
                subscriber.complete();
                return [2];
            }
          });
        });
      }
      function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
        if (delay === void 0) {
          delay = 0;
        }
        if (repeat === void 0) {
          repeat = false;
        }
        var scheduleSubscription = scheduler.schedule(function() {
          work();
          if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
          } else {
            this.unsubscribe();
          }
        }, delay);
        parentSubscription.add(scheduleSubscription);
        if (!repeat) {
          return scheduleSubscription;
        }
      }
      function observeOn(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return operate(function(source, subscriber) {
          source.subscribe(createOperatorSubscriber(subscriber, function(value) {
            return executeSchedule(subscriber, scheduler, function() {
              return subscriber.next(value);
            }, delay);
          }, function() {
            return executeSchedule(subscriber, scheduler, function() {
              return subscriber.complete();
            }, delay);
          }, function(err) {
            return executeSchedule(subscriber, scheduler, function() {
              return subscriber.error(err);
            }, delay);
          }));
        });
      }
      function subscribeOn(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return operate(function(source, subscriber) {
          subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
          }, delay));
        });
      }
      function scheduleObservable(input, scheduler) {
        return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
      }
      function schedulePromise(input, scheduler) {
        return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
      }
      function scheduleArray(input, scheduler) {
        return new Observable(function(subscriber) {
          var i = 0;
          return scheduler.schedule(function() {
            if (i === input.length) {
              subscriber.complete();
            } else {
              subscriber.next(input[i++]);
              if (!subscriber.closed) {
                this.schedule();
              }
            }
          });
        });
      }
      function scheduleIterable(input, scheduler) {
        return new Observable(function(subscriber) {
          var iterator$1;
          executeSchedule(subscriber, scheduler, function() {
            iterator$1 = input[iterator]();
            executeSchedule(subscriber, scheduler, function() {
              var _a;
              var value;
              var done;
              try {
                _a = iterator$1.next(), value = _a.value, done = _a.done;
              } catch (err) {
                subscriber.error(err);
                return;
              }
              if (done) {
                subscriber.complete();
              } else {
                subscriber.next(value);
              }
            }, 0, true);
          });
          return function() {
            return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
          };
        });
      }
      function scheduleAsyncIterable(input, scheduler) {
        if (!input) {
          throw new Error("Iterable cannot be null");
        }
        return new Observable(function(subscriber) {
          executeSchedule(subscriber, scheduler, function() {
            var iterator2 = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, function() {
              iterator2.next().then(function(result) {
                if (result.done) {
                  subscriber.complete();
                } else {
                  subscriber.next(result.value);
                }
              });
            }, 0, true);
          });
        });
      }
      function scheduleReadableStreamLike(input, scheduler) {
        return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
      }
      function scheduled(input, scheduler) {
        if (input != null) {
          if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
          }
          if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
          }
          if (isPromise(input)) {
            return schedulePromise(input, scheduler);
          }
          if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
          }
          if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
          }
          if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
          }
        }
        throw createInvalidObservableTypeError(input);
      }
      function from(input, scheduler) {
        return scheduler ? scheduled(input, scheduler) : innerFrom(input);
      }
      function of() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var scheduler = popScheduler(args);
        return from(args, scheduler);
      }
      function tap(observerOrNext, error, complete) {
        var tapObserver = isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
        return tapObserver ? operate(function(source, subscriber) {
          var _a;
          (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
          var isUnsub = true;
          source.subscribe(createOperatorSubscriber(subscriber, function(value) {
            var _a2;
            (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
            subscriber.next(value);
          }, function() {
            var _a2;
            isUnsub = false;
            (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
            subscriber.complete();
          }, function(err) {
            var _a2;
            isUnsub = false;
            (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
            subscriber.error(err);
          }, function() {
            var _a2, _b;
            if (isUnsub) {
              (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
            }
            (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
          }));
        }) : identity;
      }
      const Counter = () => {
        const [count, setCount] = __mf_38(0);
        return /* @__PURE__ */ __mf_2(
          "button",
          {
            style: {
              border: "0 solid #e2e8f0",
              marginTop: "10px",
              backgroundColor: "rgb(246, 179, 82)",
              borderRadius: ".25rem",
              fontWeight: "700",
              padding: ".5rem 1rem .5rem 1rem",
              color: "rgb(24, 24, 24)"
            },
            onClick: () => setCount(count + 1),
            children: [
              "Host counter: ",
              count
            ]
          }
        );
      };
      const Remote = __mf_18(
        // @ts-ignore
        async () => __vitePreload(() => module.import("./__mfe_internal__host__loadRemote__remote_mf_1_remote_mf_2_app__loadRemote__-Cvqy8BkB.js").then((n) => n._), false ? __VITE_PRELOAD__ : void 0).then(function(__mf_m__) {
          var __mf_ready__ = __mf_m__ && __mf_m__.__mf_remote_pending ? __mf_m__.__mf_remote_pending.then(function(__mf_resolved__) {
            return __mf_resolved__ || __mf_m__;
          }) : __mf_m__;
          return Promise.resolve(__mf_ready__).then(function(__mf_m__2) {
            if (!__mf_m__2 || !__mf_m__2.__moduleExports) {
              if (__mf_m__2 && __mf_m__2.default && typeof __mf_m__2.default === "object" && __mf_m__2.default.__esModule) {
                var __mf_nested_e__ = __mf_m__2.default;
                var __mf_nested_ns__ = /* @__PURE__ */ Object.create(null);
                Object.defineProperty(__mf_nested_ns__, Symbol.toStringTag, { value: "Module" });
                Object.keys(__mf_nested_e__).forEach(function(k) {
                  if (k !== "__esModule") __mf_nested_ns__[k] = __mf_nested_e__[k];
                });
                if ("default" in __mf_nested_e__) __mf_nested_ns__.default = __mf_nested_e__.default;
                return __mf_nested_ns__;
              }
              return __mf_m__2;
            }
            var __mf_ns__ = /* @__PURE__ */ Object.create(null);
            Object.defineProperty(__mf_ns__, Symbol.toStringTag, { value: "Module" });
            var __mf_e__ = __mf_m__2.__moduleExports;
            if (__mf_e__ && __mf_e__.default && typeof __mf_e__.default === "object" && __mf_e__.default.__esModule) __mf_e__ = __mf_e__.default;
            Object.keys(__mf_e__).forEach(function(k) {
              if (k !== "__esModule") __mf_ns__[k] = __mf_e__[k];
            });
            if ("default" in __mf_e__) __mf_ns__.default = __mf_e__.default;
            else if ("default" in __mf_m__2) __mf_ns__.default = __mf_m__2.default;
            return __mf_ns__;
          });
        })
      );
      const App = () => {
        __mf_28(() => {
          of("emit").pipe(tap(() => console.log("I'm RxJs from host"))).subscribe();
        }, []);
        return /* @__PURE__ */ __mf_2(__mf_0, { children: [
          /* @__PURE__ */ __mf_1("div", { className: "host", children: /* @__PURE__ */ __mf_2("div", { className: "card", children: [
            /* @__PURE__ */ __mf_1("div", { className: "icon", children: /* @__PURE__ */ __mf_1(
              "svg",
              {
                enableBackground: "new 0 0 512 512",
                height: "512px",
                id: "Layer_1",
                version: "1.1",
                viewBox: "0 0 512 512",
                width: "512px",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ __mf_1(
                  "path",
                  {
                    d: "M316.01,199.02L256.134,14.817L196.239,199.02H1.134l158.102,113.324L98.53,496.487l157.604-114.232  l157.585,114.232l-60.687-184.143L511.134,199.02H316.01z M335.084,318.257l42.407,128.63L267.22,366.963l-11.086-8.033  l-11.086,8.033l-110.291,79.923l42.408-128.63l4.353-13.18l-11.289-8.08L59.903,217.909h136.336h13.724l4.242-13.051l41.929-128.957  l41.91,128.957l4.242,13.051h13.724h136.336l-110.327,79.088l-11.27,8.08L335.084,318.257z",
                    fill: "#37404D"
                  }
                )
              }
            ) }),
            /* @__PURE__ */ __mf_1("div", { className: "title", children: "I'm the host app" }),
            /* @__PURE__ */ __mf_1(Counter, {})
          ] }) }),
          /* @__PURE__ */ __mf_1(__mf_7, { fallback: "loading...", children: /* @__PURE__ */ __mf_1(Remote, {}) })
        ] });
      };
      ReactDOM.createRoot(document.getElementById("root")).render(
        /* @__PURE__ */ __mf_1(React.StrictMode, { children: /* @__PURE__ */ __mf_1(App, {}) })
      );
    })
  };
}));
