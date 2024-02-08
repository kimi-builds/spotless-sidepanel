chrome.sidePanel
    .setPanelBehavior({openPanelOnActionClick: true})
    .catch((error) => console.error(error));
!function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 23)
}([function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function (e, t, r) {
    var n = r(8), o = r(30), i = r(31), a = "[object Null]", u = "[object Undefined]", c = n ? n.toStringTag : void 0;
    e.exports = function (e) {
        return null == e ? void 0 === e ? u : a : c && c in Object(e) ? o(e) : i(e)
    }
}, function (e, t, r) {
    var n = r(9), o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
    e.exports = i
}, function (e, t) {
    e.exports = function (e) {
        return null != e && "object" == typeof e
    }
}, function (e, t, r) {
    "use strict";
    (function (e, n) {
        var o, i = r(22);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
        var a = Object(i.a)(o);
        t.a = a
    }).call(this, r(10), r(65)(e))
}, function (e, t, r) {
    var n = r(6);
    e.exports = function (e, t, r) {
        "__proto__" == t && n ? n(e, t, {configurable: !0, enumerable: !0, value: r, writable: !0}) : e[t] = r
    }
}, function (e, t, r) {
    var n = r(28), o = function () {
        try {
            var e = n(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {
        }
    }();
    e.exports = o
}, function (e, t, r) {
    var n = r(1), o = r(0), i = "[object AsyncFunction]", a = "[object Function]", u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    e.exports = function (e) {
        if (!o(e)) return !1;
        var t = n(e);
        return t == a || t == u || t == i || t == c
    }
}, function (e, t, r) {
    var n = r(2).Symbol;
    e.exports = n
}, function (e, t, r) {
    (function (t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r
    }).call(this, r(10))
}, function (e, t) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function (e, t) {
    e.exports = function (e, t) {
        return e === t || e != e && t != t
    }
}, function (e, t) {
    e.exports = function (e) {
        return e
    }
}, function (e, t, r) {
    var n = r(7), o = r(14);
    e.exports = function (e) {
        return null != e && o(e.length) && !n(e)
    }
}, function (e, t) {
    var r = 9007199254740991;
    e.exports = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
    }
}, function (e, t) {
    var r = 9007199254740991, n = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
        var o = typeof e;
        return !!(t = null == t ? r : t) && ("number" == o || "symbol" != o && n.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.DISPATCH_TYPE = "chromex.dispatch", t.STATE_TYPE = "chromex.state", t.PATCH_STATE_TYPE = "chromex.patch_state"
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, o = t.noop = function (e) {
        return e
    }, i = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        return n({}, e, e.payload ? {payload: t(e.payload)} : {})
    };
    t.withDeserializer = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        return function (t) {
            return function (r, n) {
                return t(function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o, r = arguments[2];
                    return r ? function (n) {
                        for (var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) a[u - 1] = arguments[u];
                        return r.apply(void 0, [n].concat(a)) ? e.apply(void 0, [i(n, t)].concat(a)) : e.apply(void 0, [n].concat(a))
                    } : function (r) {
                        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                        return e.apply(void 0, [i(r, t)].concat(o))
                    }
                }(r, e, n))
            }
        }
    }, t.withSerializer = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
        return function (t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function () {
                for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                if (o.length <= r) throw new Error("Message in request could not be serialized. Expected message in position " + r + " but only received " + o.length + " args.");
                return o[r] = i(o[r], e), t.apply(void 0, o)
            }
        }
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.DIFF_STATUS_UPDATED = "updated", t.DIFF_STATUS_REMOVED = "removed", t.DIFF_STATUS_KEYS_UPDATED = "updated_keys"
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.alias = t.wrapStore = t.applyMiddleware = t.Store = void 0;
    var n = u(r(24)), o = u(r(61)), i = u(r(62)), a = u(r(64));

    function u(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.Store = n.default, t.applyMiddleware = o.default, t.wrapStore = i.default, t.alias = a.default
}, function (e, t, r) {
    e.exports = r(66)
}, function (e, t, r) {
    "use strict";

    function n(e) {
        var t, r = e.Symbol;
        return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
    }

    r.d(t, "a", function () {
        return n
    })
}, function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(20), o = r(21), i = r.n(o)()();
    Object(n.wrapStore)(i, {portName: "spotless"})
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(), o = c(r(25)), i = r(17), a = r(18), u = c(r(60));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var s = function () {
        function e(t) {
            var r = this, n = t.portName, o = t.state, c = void 0 === o ? {} : o, s = t.extensionId,
                f = void 0 === s ? null : s, l = t.serializer, p = void 0 === l ? a.noop : l, d = t.deserializer,
                y = void 0 === d ? a.noop : d, v = t.patchStrategy, b = void 0 === v ? u.default : v;
            if (function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), !n) throw new Error("portName is required in options");
            if ("function" != typeof p) throw new Error("serializer must be a function");
            if ("function" != typeof y) throw new Error("deserializer must be a function");
            if ("function" != typeof b) throw new Error("patchStrategy must be one of the included patching strategies or a custom patching function");
            this.portName = n, this.readyResolved = !1, this.readyPromise = new Promise(function (e) {
                return r.readyResolve = e
            }), this.extensionId = f, this.port = chrome.runtime.connect(this.extensionId, {name: n}), this.serializedPortListener = (0, a.withDeserializer)(y)(function () {
                var e;
                return (e = r.port.onMessage).addListener.apply(e, arguments)
            }), this.serializedMessageSender = (0, a.withSerializer)(p)(function () {
                var e;
                return (e = chrome.runtime).sendMessage.apply(e, arguments)
            }, 1), this.listeners = [], this.state = c, this.patchStrategy = b, this.serializedPortListener(function (e) {
                switch (e.type) {
                    case i.STATE_TYPE:
                        r.replaceState(e.payload), r.readyResolved || (r.readyResolved = !0, r.readyResolve());
                        break;
                    case i.PATCH_STATE_TYPE:
                        r.patchState(e.payload)
                }
            }), this.dispatch = this.dispatch.bind(this)
        }

        return n(e, [{
            key: "ready", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return null !== e ? this.readyPromise.then(e) : this.readyPromise
            }
        }, {
            key: "subscribe", value: function (e) {
                var t = this;
                return this.listeners.push(e), function () {
                    t.listeners = t.listeners.filter(function (t) {
                        return t !== e
                    })
                }
            }
        }, {
            key: "patchState", value: function (e) {
                this.state = this.patchStrategy(this.state, e), this.listeners.forEach(function (e) {
                    return e()
                })
            }
        }, {
            key: "replaceState", value: function (e) {
                this.state = e, this.listeners.forEach(function (e) {
                    return e()
                })
            }
        }, {
            key: "getState", value: function () {
                return this.state
            }
        }, {
            key: "replaceReducer", value: function () {
            }
        }, {
            key: "dispatch", value: function (e) {
                var t = this;
                return new Promise(function (r, n) {
                    t.serializedMessageSender(t.extensionId, {
                        type: i.DISPATCH_TYPE,
                        portName: t.portName,
                        payload: e
                    }, null, function (e) {
                        var t = e.error, i = e.value;
                        if (t) {
                            var a = new Error("\nLooks like there is an error in the background page. You might want to inspect your background page for more details.\n" + t);
                            n((0, o.default)(a, t))
                        } else r(i && i.payload)
                    })
                })
            }
        }]), e
    }();
    t.default = s
}, function (e, t, r) {
    var n = r(26), o = r(36), i = r(45), a = o(function (e, t) {
        n(t, i(t), e)
    });
    e.exports = a
}, function (e, t, r) {
    var n = r(27), o = r(5);
    e.exports = function (e, t, r, i) {
        var a = !r;
        r || (r = {});
        for (var u = -1, c = t.length; ++u < c;) {
            var s = t[u], f = i ? i(r[s], e[s], s, r, e) : void 0;
            void 0 === f && (f = e[s]), a ? o(r, s, f) : n(r, s, f)
        }
        return r
    }
}, function (e, t, r) {
    var n = r(5), o = r(11), i = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, r) {
        var a = e[t];
        i.call(e, t) && o(a, r) && (void 0 !== r || t in e) || n(e, t, r)
    }
}, function (e, t, r) {
    var n = r(29), o = r(35);
    e.exports = function (e, t) {
        var r = o(e, t);
        return n(r) ? r : void 0
    }
}, function (e, t, r) {
    var n = r(7), o = r(32), i = r(0), a = r(34), u = /^\[object .+?Constructor\]$/, c = Function.prototype,
        s = Object.prototype, f = c.toString, l = s.hasOwnProperty,
        p = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function (e) {
        return !(!i(e) || o(e)) && (n(e) ? p : u).test(a(e))
    }
}, function (e, t, r) {
    var n = r(8), o = Object.prototype, i = o.hasOwnProperty, a = o.toString, u = n ? n.toStringTag : void 0;
    e.exports = function (e) {
        var t = i.call(e, u), r = e[u];
        try {
            e[u] = void 0;
            var n = !0
        } catch (e) {
        }
        var o = a.call(e);
        return n && (t ? e[u] = r : delete e[u]), o
    }
}, function (e, t) {
    var r = Object.prototype.toString;
    e.exports = function (e) {
        return r.call(e)
    }
}, function (e, t, r) {
    var n = r(33), o = function () {
        var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();
    e.exports = function (e) {
        return !!o && o in e
    }
}, function (e, t, r) {
    var n = r(2)["__core-js_shared__"];
    e.exports = n
}, function (e, t) {
    var r = Function.prototype.toString;
    e.exports = function (e) {
        if (null != e) {
            try {
                return r.call(e)
            } catch (e) {
            }
            try {
                return e + ""
            } catch (e) {
            }
        }
        return ""
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return null == e ? void 0 : e[t]
    }
}, function (e, t, r) {
    var n = r(37), o = r(44);
    e.exports = function (e) {
        return n(function (t, r) {
            var n = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, u = i > 2 ? r[2] : void 0;
            for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(r[0], r[1], u) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i;) {
                var c = r[n];
                c && e(t, c, n, a)
            }
            return t
        })
    }
}, function (e, t, r) {
    var n = r(12), o = r(38), i = r(40);
    e.exports = function (e, t) {
        return i(o(e, t, n), e + "")
    }
}, function (e, t, r) {
    var n = r(39), o = Math.max;
    e.exports = function (e, t, r) {
        return t = o(void 0 === t ? e.length - 1 : t, 0), function () {
            for (var i = arguments, a = -1, u = o(i.length - t, 0), c = Array(u); ++a < u;) c[a] = i[t + a];
            a = -1;
            for (var s = Array(t + 1); ++a < t;) s[a] = i[a];
            return s[t] = r(c), n(e, this, s)
        }
    }
}, function (e, t) {
    e.exports = function (e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
}, function (e, t, r) {
    var n = r(41), o = r(43)(n);
    e.exports = o
}, function (e, t, r) {
    var n = r(42), o = r(6), i = r(12), a = o ? function (e, t) {
        return o(e, "toString", {configurable: !0, enumerable: !1, value: n(t), writable: !0})
    } : i;
    e.exports = a
}, function (e, t) {
    e.exports = function (e) {
        return function () {
            return e
        }
    }
}, function (e, t) {
    var r = 800, n = 16, o = Date.now;
    e.exports = function (e) {
        var t = 0, i = 0;
        return function () {
            var a = o(), u = n - (a - i);
            if (i = a, u > 0) {
                if (++t >= r) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, function (e, t, r) {
    var n = r(11), o = r(13), i = r(15), a = r(0);
    e.exports = function (e, t, r) {
        if (!a(r)) return !1;
        var u = typeof t;
        return !!("number" == u ? o(r) && i(t, r.length) : "string" == u && t in r) && n(r[t], e)
    }
}, function (e, t, r) {
    var n = r(46), o = r(57), i = r(13);
    e.exports = function (e) {
        return i(e) ? n(e, !0) : o(e)
    }
}, function (e, t, r) {
    var n = r(47), o = r(48), i = r(50), a = r(51), u = r(15), c = r(53), s = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
        var r = i(e), f = !r && o(e), l = !r && !f && a(e), p = !r && !f && !l && c(e), d = r || f || l || p,
            y = d ? n(e.length, String) : [], v = y.length;
        for (var b in e) !t && !s.call(e, b) || d && ("length" == b || l && ("offset" == b || "parent" == b) || p && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || u(b, v)) || y.push(b);
        return y
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
}, function (e, t, r) {
    var n = r(49), o = r(3), i = Object.prototype, a = i.hasOwnProperty, u = i.propertyIsEnumerable, c = n(function () {
        return arguments
    }()) ? n : function (e) {
        return o(e) && a.call(e, "callee") && !u.call(e, "callee")
    };
    e.exports = c
}, function (e, t, r) {
    var n = r(1), o = r(3), i = "[object Arguments]";
    e.exports = function (e) {
        return o(e) && n(e) == i
    }
}, function (e, t) {
    var r = Array.isArray;
    e.exports = r
}, function (e, t, r) {
    (function (e) {
        var n = r(2), o = r(52), i = "object" == typeof t && t && !t.nodeType && t,
            a = i && "object" == typeof e && e && !e.nodeType && e, u = a && a.exports === i ? n.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || o;
        e.exports = c
    }).call(this, r(16)(e))
}, function (e, t) {
    e.exports = function () {
        return !1
    }
}, function (e, t, r) {
    var n = r(54), o = r(55), i = r(56), a = i && i.isTypedArray, u = a ? o(a) : n;
    e.exports = u
}, function (e, t, r) {
    var n = r(1), o = r(14), i = r(3), a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
        return i(e) && o(e.length) && !!a[n(e)]
    }
}, function (e, t) {
    e.exports = function (e) {
        return function (t) {
            return e(t)
        }
    }
}, function (e, t, r) {
    (function (e) {
        var n = r(9), o = "object" == typeof t && t && !t.nodeType && t,
            i = o && "object" == typeof e && e && !e.nodeType && e, a = i && i.exports === o && n.process,
            u = function () {
                try {
                    var e = i && i.require && i.require("util").types;
                    return e || a && a.binding && a.binding("util")
                } catch (e) {
                }
            }();
        e.exports = u
    }).call(this, r(16)(e))
}, function (e, t, r) {
    var n = r(0), o = r(58), i = r(59), a = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        if (!n(e)) return i(e);
        var t = o(e), r = [];
        for (var u in e) ("constructor" != u || !t && a.call(e, u)) && r.push(u);
        return r
    }
}, function (e, t) {
    var r = Object.prototype;
    e.exports = function (e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || r)
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
        var r = Object.assign({}, e);
        return t.forEach(function (e) {
            var t = e.change, o = e.key, i = e.value;
            switch (t) {
                case n.DIFF_STATUS_UPDATED:
                    r[o] = i;
                    break;
                case n.DIFF_STATUS_REMOVED:
                    Reflect.deleteProperty(r, o)
            }
        }), r
    };
    var n = r(19)
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        var o = function () {
            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
        }, i = {
            getState: e.getState.bind(e), dispatch: function () {
                return o.apply(void 0, arguments)
            }
        };
        return r = (r || []).map(function (e) {
            return e(i)
        }), o = function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return 0 === t.length ? function (e) {
                return e
            } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
                return function () {
                    return e(t.apply(void 0, arguments))
                }
            })
        }.apply(void 0, function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }(r))(e.dispatch), e.dispatch = o, e
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = r(17), o = r(18), i = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(r(63));
    var a = function (e, t) {
        Promise.resolve(e).then(function (e) {
            t({error: null, value: e})
        }).catch(function (e) {
            console.error("error dispatching result:", e), t({error: e.message, value: null})
        })
    };
    t.default = function (e, t) {
        var r = t.portName, u = t.dispatchResponder, c = t.serializer, s = void 0 === c ? o.noop : c,
            f = t.deserializer, l = void 0 === f ? o.noop : f, p = t.diffStrategy, d = void 0 === p ? i.default : p;
        if (!r) throw new Error("portName is required in options");
        if ("function" != typeof s) throw new Error("serializer must be a function");
        if ("function" != typeof l) throw new Error("deserializer must be a function");
        if ("function" != typeof d) throw new Error("diffStrategy must be one of the included diffing strategies or a custom diff function");
        u || (u = a);
        var y = function (t, o, i) {
            if (t.type === n.DISPATCH_TYPE && t.portName === r) {
                var a = Object.assign({}, t.payload, {_sender: o}), c = null;
                try {
                    c = e.dispatch(a)
                } catch (e) {
                    c = Promise.reject(e.message), console.error(e)
                }
                return u(c, i), !0
            }
        }, v = function (t) {
            if (t.name === r) {
                var i = (0, o.withSerializer)(s)(function () {
                    return t.postMessage.apply(t, arguments)
                }), a = e.getState(), u = e.subscribe(function () {
                    var t = e.getState(), r = d(a, t);
                    r.length && (a = t, i({type: n.PATCH_STATE_TYPE, payload: r}))
                });
                t.onDisconnect.addListener(u), i({type: n.STATE_TYPE, payload: a})
            }
        }, b = (0, o.withDeserializer)(l), h = function (e) {
            return e.type === n.DISPATCH_TYPE && e.portName === r
        };
        b(function () {
            var e;
            return (e = chrome.runtime.onMessage).addListener.apply(e, arguments)
        })(y, h), chrome.runtime.onMessageExternal ? b(function () {
            var e;
            return (e = chrome.runtime.onMessageExternal).addListener.apply(e, arguments)
        })(y, h) : console.warn("runtime.onMessageExternal is not supported"), chrome.runtime.onConnect.addListener(v), chrome.runtime.onConnectExternal ? chrome.runtime.onConnectExternal.addListener(v) : console.warn("runtime.onConnectExternal is not supported")
    }
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
        var r = [];
        return Object.keys(t).forEach(function (o) {
            e[o] !== t[o] && r.push({key: o, value: t[o], change: n.DIFF_STATUS_UPDATED})
        }), Object.keys(e).forEach(function (e) {
            t.hasOwnProperty(e) || r.push({key: e, change: n.DIFF_STATUS_REMOVED})
        }), r
    };
    var n = r(19)
}, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return function () {
            return function (t) {
                return function (r) {
                    var n = e[r.type];
                    return t(n ? n(r) : r)
                }
            }
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0, get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0, get: function () {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {enumerable: !0}), t.webpackPolyfill = 1
        }
        return t
    }
}, function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(4), o = function () {
        return Math.random().toString(36).substring(7).split("").join(".")
    }, i = {
        INIT: "@@redux/INIT" + o(), REPLACE: "@@redux/REPLACE" + o(), PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + o()
        }
    };

    function a(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }

    function u(e, t, r) {
        var o;
        if ("function" == typeof t && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");
        if ("function" == typeof t && void 0 === r && (r = t, t = void 0), void 0 !== r) {
            if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
            return r(u)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var c = e, s = t, f = [], l = f, p = !1;

        function d() {
            l === f && (l = f.slice())
        }

        function y() {
            if (p) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return s
        }

        function v(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (p) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var t = !0;
            return d(), l.push(e), function () {
                if (t) {
                    if (p) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    t = !1, d();
                    var r = l.indexOf(e);
                    l.splice(r, 1)
                }
            }
        }

        function b(e) {
            if (!a(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (p) throw new Error("Reducers may not dispatch actions.");
            try {
                p = !0, s = c(s, e)
            } finally {
                p = !1
            }
            for (var t = f = l, r = 0; r < t.length; r++) {
                (0, t[r])()
            }
            return e
        }

        return b({type: i.INIT}), (o = {
            dispatch: b, subscribe: v, getState: y, replaceReducer: function (e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                c = e, b({type: i.REPLACE})
            }
        })[n.a] = function () {
            var e, t = v;
            return (e = {
                subscribe: function (e) {
                    if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                    function r() {
                        e.next && e.next(y())
                    }

                    return r(), {unsubscribe: t(r)}
                }
            })[n.a] = function () {
                return this
            }, e
        }, o
    }

    function c(e, t) {
        var r = t && t.type;
        return "Given " + (r && 'action "' + String(r) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function s(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function f() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return function (e) {
            return function () {
                var r = e.apply(void 0, arguments), n = function () {
                    throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                }, o = {
                    getState: r.getState, dispatch: function () {
                        return n.apply(void 0, arguments)
                    }
                }, i = t.map(function (e) {
                    return e(o)
                });
                return function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {}, n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function (t) {
                            s(e, t, r[t])
                        })
                    }
                    return e
                }({}, r, {
                    dispatch: n = function () {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return 0 === t.length ? function (e) {
                            return e
                        } : 1 === t.length ? t[0] : t.reduce(function (e, t) {
                            return function () {
                                return e(t.apply(void 0, arguments))
                            }
                        })
                    }.apply(void 0, i)(r.dispatch)
                })
            }
        }
    }

    function l(e) {
        return function (t) {
            var r = t.dispatch, n = t.getState;
            return function (t) {
                return function (o) {
                    return "function" == typeof o ? o(r, n, e) : t(o)
                }
            }
        }
    }

    var p = l();
    p.withExtraArgument = l;
    var d = p, y = "SWITCH_MENU", v = "SWITCH_SEARCH_MENU", b = "SEARCH_REQUEST", h = "SEARCH_SUCCESS",
        g = "SEARCH_LOAD_MORE_SUCCESS", O = "FETCH_PLAYBACK_DATA_SUCCESS", w = "FETCH_AVAILABLE_DEVICES_SUCCESS",
        m = "TRANSFER_PLAYBACK_SUCCESS", j = "START_PLAYBACK_SUCCESS", S = "PAUSE_PLAYBACK_SUCCESS",
        E = "TOGGLE_SHUFFLE_SUCCESS", _ = "SET_REPEAT_MODE_SUCCESS", P = "SET_VOLUME_REQUEST",
        A = "PLAYER_LOAD_LOADING", x = "PLAYER_LOAD_DONE", T = "TRACK_INFO_LOADING", k = "TRACK_INFO_LOAD_DONE",
        D = "CHECK_TRACK_IS_FAVORITED_SUCCESS", C = "TOGGLE_FAVORITE_SUCCESS", I = "GET_TOKEN_SUCCESS",
        R = "LOG_IN_SUCCESS", M = "LOG_OUT";

    function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function N(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var F = {selectedMenubarItem: "player"};

    function L(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? L(r, !0).forEach(function (t) {
                z(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(r).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function z(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var H = {playback: null, availableDevices: null, activeDevice: null, loading: !0, track_info_loading: !1};

    function B(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function G(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? K(r, !0).forEach(function (t) {
                V(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(r).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function V(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var $ = {selectedSeachMenuBarItem: "tracks", lastSearch: null, lastResult: null, searching: !1};

    function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function q(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? W(r, !0).forEach(function (t) {
                Q(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(r).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function Q(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var J = function (e) {
        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
            var o = t[n];
            "function" == typeof e[o] && (r[o] = e[o])
        }
        var a, u = Object.keys(r);
        try {
            !function (e) {
                Object.keys(e).forEach(function (t) {
                    var r = e[t];
                    if (void 0 === r(void 0, {type: i.INIT})) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                    if (void 0 === r(void 0, {type: i.PROBE_UNKNOWN_ACTION()})) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                })
            }(r)
        } catch (e) {
            a = e
        }
        return function (e, t) {
            if (void 0 === e && (e = {}), a) throw a;
            for (var n = !1, o = {}, i = 0; i < u.length; i++) {
                var s = u[i], f = r[s], l = e[s], p = f(l, t);
                if (void 0 === p) {
                    var d = c(s, t);
                    throw new Error(d)
                }
                o[s] = p, n = n || p !== l
            }
            return n ? o : e
        }
    }({
        menubar: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === y ? function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(r, !0).forEach(function (t) {
                        N(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(r).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }({}, e, {selectedMenubarItem: t.item}) : e
        }, player: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case O:
                    return Y({}, e, {
                        playback: t.response,
                        availableDevices: [t.response.device],
                        activeDevice: t.response.device
                    });
                case w:
                    var r = t.response.find(function (e) {
                        return e.is_active
                    });
                    return Y({}, e, {availableDevices: t.response, activeDevice: r || null});
                case m:
                    return Y({}, e, {activeDevice: t.device});
                case j:
                    return Y({}, e, {playback: Y({}, e.playback, {is_playing: !0})});
                case S:
                    return Y({}, e, {playback: Y({}, e.playback, {is_playing: !1})});
                case E:
                    return Y({}, e, {playback: Y({}, e.playback, {shuffle_state: t.shuffleState})});
                case _:
                    return Y({}, e, {playback: Y({}, e.playback, {repeat_state: t.repeatState})});
                case D:
                    return Y({}, e, {playback: Y({}, e.playback, {item: Y({}, e.playback.item, {is_favorite: t.response[0]})})});
                case C:
                    return Y({}, e, {playback: Y({}, e.playback, {item: Y({}, e.playback.item, {is_favorite: !e.playback.item.is_favorite})})});
                case P:
                    var n = 0 === t.to,
                        o = Y({}, e.playback, {device: Y({}, e.playback.device, {volume_percent: t.to})});
                    return n && (o.device.previous_volume_percent = t.from), Y({}, e, {playback: o});
                case A:
                    return Y({}, e, {loading: !0});
                case x:
                    return Y({}, e, {loading: !1});
                case T:
                    return Y({}, e, {track_info_loading: !0});
                case k:
                    return Y({}, e, {track_info_loading: !1});
                default:
                    return e
            }
        }, search: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
                t = arguments.length > 1 ? arguments[1] : void 0;
            if (t.type === v) return G({}, e, {selectedSeachMenuBarItem: t.item});
            if (t.type === b) return G({}, e, {searching: !0, lastSearch: t.keyword});
            if (t.type === h) return G({}, e, {searching: !1, lastResult: t.response});
            if (t.type === g) {
                var r = Object.keys(t.response.result)[0],
                    n = G({}, t.response.result[r], {items: Array.from(new Set([].concat(B(e.lastResult.result[r].items), B(t.response.result[r].items))))}),
                    o = G({}, e.lastResult.entities[r], {}, t.response.entities[r]);
                return G({}, e, {
                    lastResult: G({}, e.lastResult, {
                        result: G({}, e.lastResult.result, V({}, r, n)),
                        entities: G({}, e.lastResult.entities, V({}, r, o))
                    })
                })
            }
            return e
        }, auth: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {token: null, login: !0},
                t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === I ? q({}, e, {token: t.token}) : t.type === R ? q({}, e, {login: !0}) : t.type === M ? q({}, e, {
                login: !1,
                token: ""
            }) : e
        }
    });
    t.default = function (e) {
        return u(J, e, f(d))
    }
}]);