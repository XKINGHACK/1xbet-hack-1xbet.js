"use strict";
(self.webpackChunkgames = self.webpackChunkgames || []).push([[56351367, 44723156], {
    56351367: (t,e,r)=>{
        r.r(e),
        r.d(e, {
            AbortError: ()=>d,
            DefaultHttpClient: ()=>Ut,
            HttpClient: ()=>A,
            HttpError: ()=>v,
            HttpResponse: ()=>I,
            HttpTransportType: ()=>Se,
            HubConnection: ()=>le,
            HubConnectionBuilder: ()=>Gr,
            HubConnectionState: ()=>fe,
            JsonHubProtocol: ()=>Rr,
            LogLevel: ()=>C,
            MessageType: ()=>Yt,
            NullLogger: ()=>D,
            Subject: ()=>te,
            TimeoutError: ()=>y,
            TransferFormat: ()=>Ee,
            VERSION: ()=>K
        });
        r(24457475),
        r(66329431),
        r(77372211),
        r(55880580),
        r(9571864),
        r(86909186),
        r(2346364),
        r(9592240),
        r(1270386),
        r(9447684),
        r(82619521),
        r(26927244),
        r(6959499),
        r(87111411),
        r(43101177),
        r(69834160),
        r(43091709),
        r(45990612),
        r(91703721);
        function n(t) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
        }
        function o(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, a(n.key), n)
            }
        }
        function i(t, e, r) {
            return e && o(t.prototype, e),
            r && o(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function a(t) {
            var e = function(t, e) {
                if ("object" != n(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(t, e || "default");
                    if ("object" != n(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == n(e) ? e : String(e)
        }
        function c(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function u(t, e, r) {
            return e = p(e),
            function(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }(t, l() ? Reflect.construct(e, r || [], p(t).constructor) : e.apply(t, r))
        }
        function s(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && h(t, e)
        }
        function f(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return f = function(t) {
                if (null === t || !function(t) {
                    try {
                        return -1 !== Function.toString.call(t).indexOf("[native code]")
                    } catch (e) {
                        return "function" == typeof t
                    }
                }(t))
                    return t;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, r)
                }
                function r() {
                    return function(t, e, r) {
                        if (l())
                            return Reflect.construct.apply(null, arguments);
                        var n = [null];
                        n.push.apply(n, e);
                        var o = new (t.bind.apply(t, n));
                        return r && h(o, r.prototype),
                        o
                    }(t, arguments, p(this).constructor)
                }
                return r.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                h(r, t)
            }
            ,
            f(t)
        }
        function l() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (l = function() {
                return !!t
            }
            )()
        }
        function h(t, e) {
            return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            h(t, e)
        }
        function p(t) {
            return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            p(t)
        }
        var v = function(t) {
            function e(t, r) {
                var n;
                c(this, e);
                var o = (this instanceof e ? this.constructor : void 0).prototype;
                return (n = u(this, e, ["".concat(t, ": Status code '").concat(r, "'")])).statusCode = r,
                n.__proto__ = o,
                n
            }
            return s(e, t),
            i(e)
        }(f(Error))
          , y = function(t) {
            function e() {
                var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "A timeout occurred.";
                c(this, e);
                var n = (this instanceof e ? this.constructor : void 0).prototype;
                return (t = u(this, e, [r])).__proto__ = n,
                t
            }
            return s(e, t),
            i(e)
        }(f(Error))
          , d = function(t) {
            function e() {
                var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "An abort occurred.";
                c(this, e);
                var n = (this instanceof e ? this.constructor : void 0).prototype;
                return (t = u(this, e, [r])).__proto__ = n,
                t
            }
            return s(e, t),
            i(e)
        }(f(Error))
          , g = function(t) {
            function e(t, r) {
                var n;
                c(this, e);
                var o = (this instanceof e ? this.constructor : void 0).prototype;
                return (n = u(this, e, [t])).transport = r,
                n.errorType = "UnsupportedTransportError",
                n.__proto__ = o,
                n
            }
            return s(e, t),
            i(e)
        }(f(Error))
          , b = function(t) {
            function e(t, r) {
                var n;
                c(this, e);
                var o = (this instanceof e ? this.constructor : void 0).prototype;
                return (n = u(this, e, [t])).transport = r,
                n.errorType = "DisabledTransportError",
                n.__proto__ = o,
                n
            }
            return s(e, t),
            i(e)
        }(f(Error))
          , m = function(t) {
            function e(t, r) {
                var n;
                c(this, e);
                var o = (this instanceof e ? this.constructor : void 0).prototype;
                return (n = u(this, e, [t])).transport = r,
                n.errorType = "FailedToStartTransportError",
                n.__proto__ = o,
                n
            }
            return s(e, t),
            i(e)
        }(f(Error))
          , w = function(t) {
            function e(t) {
                var r;
                c(this, e);
                var n = (this instanceof e ? this.constructor : void 0).prototype;
                return (r = u(this, e, [t])).errorType = "FailedToNegotiateWithServerError",
                r.__proto__ = n,
                r
            }
            return s(e, t),
            i(e)
        }(f(Error))
          , _ = function(t) {
            function e(t, r) {
                var n;
                c(this, e);
                var o = (this instanceof e ? this.constructor : void 0).prototype;
                return (n = u(this, e, [t])).innerErrors = r,
                n.__proto__ = o,
                n
            }
            return s(e, t),
            i(e)
        }(f(Error));
        r(45845592),
        r(12145131),
        r(99948350),
        r(8722696),
        r(57817996);
        function x(t) {
            return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            x(t)
        }
        function S(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function E(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(r), !0).forEach((function(e) {
                    O(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function O(t, e, r) {
            return (e = T(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function k(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, T(n.key), n)
            }
        }
        function j(t, e, r) {
            return e && k(t.prototype, e),
            r && k(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function T(t) {
            var e = function(t, e) {
                if ("object" != x(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != x(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == x(e) ? e : String(e)
        }
        function P(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var C, I = j((function t(e, r, n) {
            P(this, t),
            this.statusCode = e,
            this.statusText = r,
            this.content = n
        }
        )), A = function() {
            function t() {
                P(this, t)
            }
            return j(t, [{
                key: "get",
                value: function(t, e) {
                    return this.send(E(E({}, e), {}, {
                        method: "GET",
                        url: t
                    }))
                }
            }, {
                key: "post",
                value: function(t, e) {
                    return this.send(E(E({}, e), {}, {
                        method: "POST",
                        url: t
                    }))
                }
            }, {
                key: "delete",
                value: function(t, e) {
                    return this.send(E(E({}, e), {}, {
                        method: "DELETE",
                        url: t
                    }))
                }
            }, {
                key: "getCookieString",
                value: function(t) {
                    return ""
                }
            }]),
            t
        }();
        r(41848162),
        r(7273580),
        r(96956717),
        r(28610650),
        r(6112414),
        r(78692987),
        r(70109567);
        !function(t) {
            t[t.Trace = 0] = "Trace",
            t[t.Debug = 1] = "Debug",
            t[t.Information = 2] = "Information",
            t[t.Warning = 3] = "Warning",
            t[t.Error = 4] = "Error",
            t[t.Critical = 5] = "Critical",
            t[t.None = 6] = "None"
        }(C || (C = {}));
        r(72159770),
        r(48365850),
        r(80280535),
        r(56194433),
        r(32463177),
        r(12329223),
        r(48270298),
        r(5297841),
        r(5133745),
        r(66851628),
        r(52741438),
        r(10426730),
        r(44669220),
        r(42717027),
        r(82081102),
        r(83534051),
        r(64770511),
        r(60975070),
        r(80673014),
        r(23346768),
        r(4277211),
        r(53057623),
        r(96959145),
        r(17537372),
        r(3294979),
        r(53947511),
        r(56757608),
        r(99730059),
        r(36968941),
        r(40957391),
        r(2384469),
        r(23010453),
        r(59709597),
        r(99415963),
        r(95218748),
        r(13264212),
        r(35464601),
        r(86659147);
        function L(t) {
            return L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            L(t)
        }
        function R(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, N(n.key), n)
            }
        }
        function N(t) {
            var e = function(t, e) {
                if ("object" != L(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != L(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == L(e) ? e : String(e)
        }
        var D = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "log",
                value: function(t, e) {}
            }]) && R(e.prototype, r),
            n && R(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function M() {
            M = function() {
                return e
            }
            ;
            var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: k(t, r, c)
                }),
                a
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , d = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , x = _ && _(_(I([])));
            x && x !== r && n.call(x, a) && (w = x);
            var S = m.prototype = g.prototype = Object.create(w);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(t, e) {
                function r(o, i, a, c) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , f = s.value;
                        return f && "object" == q(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            r("next", t, a, c)
                        }
                        ), (function(t) {
                            r("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            s.value = t,
                            a(s)
                        }
                        ), (function(t) {
                            return r("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e, r, n) {
                var o = h;
                return function(i, a) {
                    if (o === v)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === d)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === h)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = v;
                        var s = l(e, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : p,
                            s.arg === d)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(e, r) {
                var n = r.method
                  , o = e.iterator[n];
                if (o === t)
                    return r.delegate = null,
                    "throw" === n && e.iterator.return && (r.method = "return",
                    r.arg = t,
                    j(e, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    d;
                var i = l(o, e.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    d;
                var a = i.arg;
                return a ? a.done ? (r[e.resultName] = a.value,
                r.next = e.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = t),
                r.delegate = null,
                d) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                d)
            }
            function T(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(T, this),
                this.reset(!0)
            }
            function I(e) {
                if (e || "" === e) {
                    var r = e[a];
                    if (r)
                        return r.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return r.value = e[o],
                                    r.done = !1,
                                    r;
                            return r.value = t,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(q(e) + " is not iterable")
            }
            return b.prototype = m,
            o(S, "constructor", {
                value: m,
                configurable: !0
            }),
            o(m, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = s(m, u, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, u, "GeneratorFunction")),
                t.prototype = Object.create(S),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(O.prototype),
            s(O.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(S),
            s(S, u, "Generator"),
            s(S, a, (function() {
                return this
            }
            )),
            s(S, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = I,
            C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(P),
                    !e)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = e,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = t),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function F(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function U(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? F(Object(r), !0).forEach((function(e) {
                    G(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function H(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            u = !1
                        } else
                            for (; !(u = (n = i.call(r)).done) && (c.push(n.value),
                            c.length !== e); u = !0)
                                ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            if (!u && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return c
                }
            }(t, e) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return W(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return W(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function W(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function G(t, e, r) {
            return (e = $(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function B(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (s) {
                return void r(s)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function q(t) {
            return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            q(t)
        }
        function V(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function z(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, $(n.key), n)
            }
        }
        function Y(t, e, r) {
            return e && z(t.prototype, e),
            r && z(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function $(t) {
            var e = function(t, e) {
                if ("object" != q(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != q(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == q(e) ? e : String(e)
        }
        D.instance = new D;
        var K = "6.0.4"
          , J = function() {
            function t() {
                V(this, t)
            }
            return Y(t, null, [{
                key: "isRequired",
                value: function(t, e) {
                    if (null == t)
                        throw new Error("The '".concat(e, "' argument is required."))
                }
            }, {
                key: "isNotEmpty",
                value: function(t, e) {
                    if (!t || t.match(/^\s*$/))
                        throw new Error("The '".concat(e, "' argument should not be empty."))
                }
            }, {
                key: "isIn",
                value: function(t, e, r) {
                    if (!(t in e))
                        throw new Error("Unknown ".concat(r, " value: ").concat(t, "."))
                }
            }]),
            t
        }()
          , X = function() {
            function t() {
                V(this, t)
            }
            return Y(t, null, [{
                key: "isBrowser",
                get: function() {
                    return "object" === ("undefined" == typeof window ? "undefined" : q(window)) && "object" === q(window.document)
                }
            }, {
                key: "isWebWorker",
                get: function() {
                    return "object" === ("undefined" == typeof self ? "undefined" : q(self)) && "importScripts"in self
                }
            }, {
                key: "isReactNative",
                get: function() {
                    return "object" === ("undefined" == typeof window ? "undefined" : q(window)) && void 0 === window.document
                }
            }, {
                key: "isNode",
                get: function() {
                    return !this.isBrowser && !this.isWebWorker && !this.isReactNative
                }
            }]),
            t
        }();
        function Q(t, e) {
            var r = "";
            return Z(t) ? (r = "Binary data of length ".concat(t.byteLength),
            e && (r += ". Content: '".concat(function(t) {
                var e = new Uint8Array(t)
                  , r = "";
                return e.forEach((function(t) {
                    r += "0x".concat(t < 16 ? "0" : "").concat(t.toString(16), " ")
                }
                )),
                r.substr(0, r.length - 1)
            }(t), "'"))) : "string" == typeof t && (r = "String data of length ".concat(t.length),
            e && (r += ". Content: '".concat(t, "'"))),
            r
        }
        function Z(t) {
            return t && "undefined" != typeof ArrayBuffer && (t instanceof ArrayBuffer || t.constructor && "ArrayBuffer" === t.constructor.name)
        }
        function tt(t, e, r, n, o, i, a) {
            return et.apply(this, arguments)
        }
        function et() {
            var t;
            return t = M().mark((function t(e, r, n, o, i, a, c) {
                var u, s, f, l, h, p, v, y;
                return M().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (u = {},
                            !i) {
                                t.next = 6;
                                break
                            }
                            return t.next = 4,
                            i();
                        case 4:
                            (s = t.sent) && (u = G({}, "Authorization", "Bearer ".concat(s)));
                        case 6:
                            return f = ot(),
                            l = H(f, 2),
                            h = l[0],
                            p = l[1],
                            u[h] = p,
                            e.log(C.Trace, "(".concat(r, " transport) sending data. ").concat(Q(a, c.logMessageContent), ".")),
                            v = Z(a) ? "arraybuffer" : "text",
                            t.next = 12,
                            n.post(o, {
                                content: a,
                                headers: U(U({}, u), c.headers),
                                responseType: v,
                                timeout: c.timeout,
                                withCredentials: c.withCredentials
                            });
                        case 12:
                            y = t.sent,
                            e.log(C.Trace, "(".concat(r, " transport) request complete. Response status: ").concat(y.statusCode, "."));
                        case 14:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )),
            et = function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        B(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        B(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
            ,
            et.apply(this, arguments)
        }
        var rt = function() {
            function t(e, r) {
                V(this, t),
                this._subject = e,
                this._observer = r
            }
            return Y(t, [{
                key: "dispose",
                value: function() {
                    var t = this._subject.observers.indexOf(this._observer);
                    t > -1 && this._subject.observers.splice(t, 1),
                    0 === this._subject.observers.length && this._subject.cancelCallback && this._subject.cancelCallback().catch((function(t) {}
                    ))
                }
            }]),
            t
        }()
          , nt = function() {
            function t(e) {
                V(this, t),
                this._minLevel = e,
                this.out = console
            }
            return Y(t, [{
                key: "log",
                value: function(t, e) {
                    if (t >= this._minLevel) {
                        var r = "[".concat((new Date).toISOString(), "] ").concat(C[t], ": ").concat(e);
                        switch (t) {
                        case C.Critical:
                        case C.Error:
                            this.out.error(r);
                            break;
                        case C.Warning:
                            this.out.warn(r);
                            break;
                        case C.Information:
                            this.out.info(r);
                            break;
                        default:
                            this.out.log(r)
                        }
                    }
                }
            }]),
            t
        }();
        function ot() {
            var t = "X-SignalR-User-Agent";
            return X.isNode && (t = "User-Agent"),
            [t, it(K, at(), ut(), ct())]
        }
        function it(t, e, r, n) {
            var o = "Microsoft SignalR/"
              , i = t.split(".");
            return o += "".concat(i[0], ".").concat(i[1]),
            o += " (".concat(t, "; "),
            o += e && "" !== e ? "".concat(e, "; ") : "Unknown OS; ",
            o += "".concat(r),
            o += n ? "; ".concat(n) : "; Unknown Runtime Version",
            o += ")"
        }
        function at() {
            if (!X.isNode)
                return "";
            switch (process.platform) {
            case "win32":
                return "Windows NT";
            case "darwin":
                return "macOS";
            case "linux":
                return "Linux";
            default:
                return process.platform
            }
        }
        function ct() {
            if (X.isNode)
                return process.versions.node
        }
        function ut() {
            return X.isNode ? "NodeJS" : "Browser"
        }
        function st(t) {
            return t.stack ? t.stack : t.message ? t.message : "".concat(t)
        }
        function ft(t) {
            return ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ft(t)
        }
        function lt() {
            lt = function() {
                return e
            }
            ;
            var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: k(t, r, c)
                }),
                a
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , d = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , x = _ && _(_(I([])));
            x && x !== r && n.call(x, a) && (w = x);
            var S = m.prototype = g.prototype = Object.create(w);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(t, e) {
                function r(o, i, a, c) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , f = s.value;
                        return f && "object" == ft(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            r("next", t, a, c)
                        }
                        ), (function(t) {
                            r("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            s.value = t,
                            a(s)
                        }
                        ), (function(t) {
                            return r("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e, r, n) {
                var o = h;
                return function(i, a) {
                    if (o === v)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === d)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === h)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = v;
                        var s = l(e, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : p,
                            s.arg === d)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(e, r) {
                var n = r.method
                  , o = e.iterator[n];
                if (o === t)
                    return r.delegate = null,
                    "throw" === n && e.iterator.return && (r.method = "return",
                    r.arg = t,
                    j(e, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    d;
                var i = l(o, e.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    d;
                var a = i.arg;
                return a ? a.done ? (r[e.resultName] = a.value,
                r.next = e.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = t),
                r.delegate = null,
                d) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                d)
            }
            function T(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(T, this),
                this.reset(!0)
            }
            function I(e) {
                if (e || "" === e) {
                    var r = e[a];
                    if (r)
                        return r.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return r.value = e[o],
                                    r.done = !1,
                                    r;
                            return r.value = t,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(ft(e) + " is not iterable")
            }
            return b.prototype = m,
            o(S, "constructor", {
                value: m,
                configurable: !0
            }),
            o(m, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = s(m, u, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, u, "GeneratorFunction")),
                t.prototype = Object.create(S),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(O.prototype),
            s(O.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(S),
            s(S, u, "Generator"),
            s(S, a, (function() {
                return this
            }
            )),
            s(S, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = I,
            C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(P),
                    !e)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = e,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = t),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function ht(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function pt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ht(Object(r), !0).forEach((function(e) {
                    vt(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ht(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function vt(t, e, r) {
            return (e = gt(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function yt(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (s) {
                return void r(s)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function dt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, gt(n.key), n)
            }
        }
        function gt(t) {
            var e = function(t, e) {
                if ("object" != ft(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != ft(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == ft(e) ? e : String(e)
        }
        function bt(t, e, r) {
            return e = wt(e),
            function(t, e) {
                if (e && ("object" === ft(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }(t, mt() ? Reflect.construct(e, r || [], wt(t).constructor) : e.apply(t, r))
        }
        function mt() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (mt = function() {
                return !!t
            }
            )()
        }
        function wt(t) {
            return wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            wt(t)
        }
        function _t(t, e) {
            return _t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            _t(t, e)
        }
        var xt = function(t) {
            function e(t) {
                var n;
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                (n = bt(this, e))._logger = t,
                "undefined" == typeof fetch) {
                    var o = require;
                    n._jar = new (o("tough-cookie").CookieJar),
                    n._fetchType = o("node-fetch"),
                    n._fetchType = o("fetch-cookie")(n._fetchType, n._jar)
                } else
                    n._fetchType = fetch.bind(function() {
                        if ("undefined" != typeof globalThis)
                            return globalThis;
                        if ("undefined" != typeof self)
                            return self;
                        if ("undefined" != typeof window)
                            return window;
                        if (void 0 !== r.g)
                            return r.g;
                        throw new Error("could not find global")
                    }());
                if ("undefined" == typeof AbortController) {
                    var i = require;
                    n._abortControllerType = i("abort-controller")
                } else
                    n._abortControllerType = AbortController;
                return n
            }
            var n, o, i, a, c;
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && _t(t, e)
            }(e, t),
            n = e,
            o = [{
                key: "send",
                value: (a = lt().mark((function t(e) {
                    var r, n, o, i, a, c, u, s, f = this;
                    return lt().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!e.abortSignal || !e.abortSignal.aborted) {
                                    t.next = 2;
                                    break
                                }
                                throw new d;
                            case 2:
                                if (e.method) {
                                    t.next = 4;
                                    break
                                }
                                throw new Error("No method defined.");
                            case 4:
                                if (e.url) {
                                    t.next = 6;
                                    break
                                }
                                throw new Error("No url defined.");
                            case 6:
                                return r = new this._abortControllerType,
                                e.abortSignal && (e.abortSignal.onabort = function() {
                                    r.abort(),
                                    n = new d
                                }
                                ),
                                o = null,
                                e.timeout && (i = e.timeout,
                                o = setTimeout((function() {
                                    r.abort(),
                                    f._logger.log(C.Warning, "Timeout from HTTP request."),
                                    n = new y
                                }
                                ), i)),
                                t.prev = 10,
                                t.next = 13,
                                this._fetchType(e.url, {
                                    body: e.content,
                                    cache: "no-cache",
                                    credentials: !0 === e.withCredentials ? "include" : "same-origin",
                                    headers: pt({
                                        "Content-Type": "text/plain;charset=UTF-8",
                                        "X-Requested-With": "XMLHttpRequest"
                                    }, e.headers),
                                    method: e.method,
                                    mode: "cors",
                                    redirect: "follow",
                                    signal: r.signal
                                });
                            case 13:
                                a = t.sent,
                                t.next = 22;
                                break;
                            case 16:
                                if (t.prev = 16,
                                t.t0 = t.catch(10),
                                !n) {
                                    t.next = 20;
                                    break
                                }
                                throw n;
                            case 20:
                                throw this._logger.log(C.Warning, "Error from HTTP request. ".concat(t.t0, ".")),
                                t.t0;
                            case 22:
                                return t.prev = 22,
                                o && clearTimeout(o),
                                e.abortSignal && (e.abortSignal.onabort = null),
                                t.finish(22);
                            case 26:
                                if (a.ok) {
                                    t.next = 31;
                                    break
                                }
                                return t.next = 29,
                                St(a, "text");
                            case 29:
                                throw c = t.sent,
                                new v(c || a.statusText,a.status);
                            case 31:
                                return u = St(a, e.responseType),
                                t.next = 34,
                                u;
                            case 34:
                                return s = t.sent,
                                t.abrupt("return", new I(a.status,a.statusText,s));
                            case 36:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[10, 16, 22, 26]])
                }
                )),
                c = function() {
                    var t = this
                      , e = arguments;
                    return new Promise((function(r, n) {
                        var o = a.apply(t, e);
                        function i(t) {
                            yt(o, r, n, i, c, "next", t)
                        }
                        function c(t) {
                            yt(o, r, n, i, c, "throw", t)
                        }
                        i(void 0)
                    }
                    ))
                }
                ,
                function(t) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "getCookieString",
                value: function(t) {
                    var e = "";
                    return X.isNode && this._jar && this._jar.getCookies(t, (function(t, r) {
                        return e = r.join("; ")
                    }
                    )),
                    e
                }
            }],
            o && dt(n.prototype, o),
            i && dt(n, i),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            e
        }(A);
        function St(t, e) {
            var r;
            switch (e) {
            case "arraybuffer":
                r = t.arrayBuffer();
                break;
            case "text":
            default:
                r = t.text();
                break;
            case "blob":
            case "document":
            case "json":
                throw new Error("".concat(e, " is not supported."))
            }
            return r
        }
        function Et(t) {
            return Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Et(t)
        }
        function Ot(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, kt(n.key), n)
            }
        }
        function kt(t) {
            var e = function(t, e) {
                if ("object" != Et(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != Et(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == Et(e) ? e : String(e)
        }
        function jt(t, e, r) {
            return e = Pt(e),
            function(t, e) {
                if (e && ("object" === Et(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }(t, Tt() ? Reflect.construct(e, r || [], Pt(t).constructor) : e.apply(t, r))
        }
        function Tt() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Tt = function() {
                return !!t
            }
            )()
        }
        function Pt(t) {
            return Pt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Pt(t)
        }
        function Ct(t, e) {
            return Ct = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Ct(t, e)
        }
        var It = function(t) {
            function e(t) {
                var r;
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                (r = jt(this, e))._logger = t,
                r
            }
            var r, n, o;
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Ct(t, e)
            }(e, t),
            r = e,
            (n = [{
                key: "send",
                value: function(t) {
                    var e = this;
                    return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new d) : t.method ? t.url ? new Promise((function(r, n) {
                        var o = new XMLHttpRequest;
                        o.open(t.method, t.url, !0),
                        o.withCredentials = void 0 === t.withCredentials || t.withCredentials,
                        o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                        var i = t.headers;
                        i && Object.keys(i).forEach((function(t) {
                            o.setRequestHeader(t, i[t])
                        }
                        )),
                        t.responseType && (o.responseType = t.responseType),
                        t.abortSignal && (t.abortSignal.onabort = function() {
                            o.abort(),
                            n(new d)
                        }
                        ),
                        t.timeout && (o.timeout = t.timeout),
                        o.onload = function() {
                            t.abortSignal && (t.abortSignal.onabort = null),
                            o.status >= 200 && o.status < 300 ? r(new I(o.status,o.statusText,o.response || o.responseText)) : n(new v(o.response || o.responseText || o.statusText,o.status))
                        }
                        ,
                        o.onerror = function() {
                            e._logger.log(C.Warning, "Error from HTTP request. ".concat(o.status, ": ").concat(o.statusText, ".")),
                            n(new v(o.statusText,o.status))
                        }
                        ,
                        o.ontimeout = function() {
                            e._logger.log(C.Warning, "Timeout from HTTP request."),
                            n(new y)
                        }
                        ,
                        o.send(t.content || "")
                    }
                    )) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
                }
            }]) && Ot(r.prototype, n),
            o && Ot(r, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            e
        }(A);
        function At(t) {
            return At = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            At(t)
        }
        function Lt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Rt(n.key), n)
            }
        }
        function Rt(t) {
            var e = function(t, e) {
                if ("object" != At(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != At(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == At(e) ? e : String(e)
        }
        function Nt(t, e, r) {
            return e = Mt(e),
            function(t, e) {
                if (e && ("object" === At(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }(t, Dt() ? Reflect.construct(e, r || [], Mt(t).constructor) : e.apply(t, r))
        }
        function Dt() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                )))
            } catch (t) {}
            return (Dt = function() {
                return !!t
            }
            )()
        }
        function Mt(t) {
            return Mt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Mt(t)
        }
        function Ft(t, e) {
            return Ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Ft(t, e)
        }
        var Ut = function(t) {
            function e(t) {
                var r;
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                r = Nt(this, e),
                "undefined" != typeof fetch || X.isNode)
                    r._httpClient = new xt(t);
                else {
                    if ("undefined" == typeof XMLHttpRequest)
                        throw new Error("No usable HttpClient found.");
                    r._httpClient = new It(t)
                }
                return r
            }
            var r, n, o;
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Ft(t, e)
            }(e, t),
            r = e,
            (n = [{
                key: "send",
                value: function(t) {
                    return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new d) : t.method ? t.url ? this._httpClient.send(t) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
                }
            }, {
                key: "getCookieString",
                value: function(t) {
                    return this._httpClient.getCookieString(t)
                }
            }]) && Lt(r.prototype, n),
            o && Lt(r, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            e
        }(A);
        r(23917302),
        r(69821240);
        function Ht(t) {
            return Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ht(t)
        }
        function Wt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Gt(n.key), n)
            }
        }
        function Gt(t) {
            var e = function(t, e) {
                if ("object" != Ht(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != Ht(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == Ht(e) ? e : String(e)
        }
        var Bt = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, r, n;
            return e = t,
            n = [{
                key: "write",
                value: function(e) {
                    return "".concat(e).concat(t.RecordSeparator)
                }
            }, {
                key: "parse",
                value: function(e) {
                    if (e[e.length - 1] !== t.RecordSeparator)
                        throw new Error("Message is incomplete.");
                    var r = e.split(t.RecordSeparator);
                    return r.pop(),
                    r
                }
            }],
            (r = null) && Wt(e.prototype, r),
            n && Wt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function qt(t) {
            return qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            qt(t)
        }
        function Vt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, zt(n.key), n)
            }
        }
        function zt(t) {
            var e = function(t, e) {
                if ("object" != qt(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != qt(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == qt(e) ? e : String(e)
        }
        Bt.RecordSeparatorCode = 30,
        Bt.RecordSeparator = String.fromCharCode(Bt.RecordSeparatorCode);
        var Yt, $t = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "writeHandshakeRequest",
                value: function(t) {
                    return Bt.write(JSON.stringify(t))
                }
            }, {
                key: "parseHandshakeResponse",
                value: function(t) {
                    var e, r;
                    if (Z(t)) {
                        var n = new Uint8Array(t)
                          , o = n.indexOf(Bt.RecordSeparatorCode);
                        if (-1 === o)
                            throw new Error("Message is incomplete.");
                        var i = o + 1;
                        e = String.fromCharCode.apply(null, Array.prototype.slice.call(n.slice(0, i))),
                        r = n.byteLength > i ? n.slice(i).buffer : null
                    } else {
                        var a = t
                          , c = a.indexOf(Bt.RecordSeparator);
                        if (-1 === c)
                            throw new Error("Message is incomplete.");
                        var u = c + 1;
                        e = a.substring(0, u),
                        r = a.length > u ? a.substring(u) : null
                    }
                    var s = Bt.parse(e)
                      , f = JSON.parse(s[0]);
                    if (f.type)
                        throw new Error("Expected a handshake response from the server.");
                    return [r, f]
                }
            }]) && Vt(e.prototype, r),
            n && Vt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Kt(t) {
            return Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Kt(t)
        }
        function Jt(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Xt(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return Xt(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var n = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return a = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    i = t
                },
                f: function() {
                    try {
                        a || null == r.return || r.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function Xt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function Qt(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Zt(n.key), n)
            }
        }
        function Zt(t) {
            var e = function(t, e) {
                if ("object" != Kt(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != Kt(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == Kt(e) ? e : String(e)
        }
        !function(t) {
            t[t.Invocation = 1] = "Invocation",
            t[t.StreamItem = 2] = "StreamItem",
            t[t.Completion = 3] = "Completion",
            t[t.StreamInvocation = 4] = "StreamInvocation",
            t[t.CancelInvocation = 5] = "CancelInvocation",
            t[t.Ping = 6] = "Ping",
            t[t.Close = 7] = "Close"
        }(Yt || (Yt = {}));
        var te = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.observers = []
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "next",
                value: function(t) {
                    var e, r = Jt(this.observers);
                    try {
                        for (r.s(); !(e = r.n()).done; )
                            e.value.next(t)
                    } catch (n) {
                        r.e(n)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "error",
                value: function(t) {
                    var e, r = Jt(this.observers);
                    try {
                        for (r.s(); !(e = r.n()).done; ) {
                            var n = e.value;
                            n.error && n.error(t)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "complete",
                value: function() {
                    var t, e = Jt(this.observers);
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            var r = t.value;
                            r.complete && r.complete()
                        }
                    } catch (n) {
                        e.e(n)
                    } finally {
                        e.f()
                    }
                }
            }, {
                key: "subscribe",
                value: function(t) {
                    return this.observers.push(t),
                    new rt(this,t)
                }
            }]) && Qt(e.prototype, r),
            n && Qt(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function ee(t) {
            return ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ee(t)
        }
        function re(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            u = !1
                        } else
                            for (; !(u = (n = i.call(r)).done) && (c.push(n.value),
                            c.length !== e); u = !0)
                                ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            if (!u && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return c
                }
            }(t, e) || ne(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ne(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return oe(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? oe(t, e) : void 0
            }
        }
        function oe(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function ie() {
            ie = function() {
                return e
            }
            ;
            var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: k(t, r, c)
                }),
                a
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , d = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , x = _ && _(_(I([])));
            x && x !== r && n.call(x, a) && (w = x);
            var S = m.prototype = g.prototype = Object.create(w);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(t, e) {
                function r(o, i, a, c) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , f = s.value;
                        return f && "object" == ee(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            r("next", t, a, c)
                        }
                        ), (function(t) {
                            r("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            s.value = t,
                            a(s)
                        }
                        ), (function(t) {
                            return r("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e, r, n) {
                var o = h;
                return function(i, a) {
                    if (o === v)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === d)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === h)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = v;
                        var s = l(e, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : p,
                            s.arg === d)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(e, r) {
                var n = r.method
                  , o = e.iterator[n];
                if (o === t)
                    return r.delegate = null,
                    "throw" === n && e.iterator.return && (r.method = "return",
                    r.arg = t,
                    j(e, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    d;
                var i = l(o, e.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    d;
                var a = i.arg;
                return a ? a.done ? (r[e.resultName] = a.value,
                r.next = e.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = t),
                r.delegate = null,
                d) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                d)
            }
            function T(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(T, this),
                this.reset(!0)
            }
            function I(e) {
                if (e || "" === e) {
                    var r = e[a];
                    if (r)
                        return r.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return r.value = e[o],
                                    r.done = !1,
                                    r;
                            return r.value = t,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(ee(e) + " is not iterable")
            }
            return b.prototype = m,
            o(S, "constructor", {
                value: m,
                configurable: !0
            }),
            o(m, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = s(m, u, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, u, "GeneratorFunction")),
                t.prototype = Object.create(S),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(O.prototype),
            s(O.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(S),
            s(S, u, "Generator"),
            s(S, a, (function() {
                return this
            }
            )),
            s(S, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = I,
            C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(P),
                    !e)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = e,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = t),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function ae(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (s) {
                return void r(s)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function ce(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        ae(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        ae(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function ue(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, se(n.key), n)
            }
        }
        function se(t) {
            var e = function(t, e) {
                if ("object" != ee(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != ee(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == ee(e) ? e : String(e)
        }
        var fe;
        !function(t) {
            t.Disconnected = "Disconnected",
            t.Connecting = "Connecting",
            t.Connected = "Connected",
            t.Disconnecting = "Disconnecting",
            t.Reconnecting = "Reconnecting"
        }(fe || (fe = {}));
        var le = function() {
            function t(e, r, n, o) {
                var i = this;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this._nextKeepAlive = 0,
                this._freezeEventListener = function() {
                    i._logger.log(C.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")
                }
                ,
                J.isRequired(e, "connection"),
                J.isRequired(r, "logger"),
                J.isRequired(n, "protocol"),
                this.serverTimeoutInMilliseconds = 3e4,
                this.keepAliveIntervalInMilliseconds = 15e3,
                this._logger = r,
                this._protocol = n,
                this.connection = e,
                this._reconnectPolicy = o,
                this._handshakeProtocol = new $t,
                this.connection.onreceive = function(t) {
                    return i._processIncomingData(t)
                }
                ,
                this.connection.onclose = function(t) {
                    return i._connectionClosed(t)
                }
                ,
                this._callbacks = {},
                this._methods = {},
                this._closedCallbacks = [],
                this._reconnectingCallbacks = [],
                this._reconnectedCallbacks = [],
                this._invocationId = 0,
                this._receivedHandshakeResponse = !1,
                this._connectionState = fe.Disconnected,
                this._connectionStarted = !1,
                this._cachedPingMessage = this._protocol.writeMessage({
                    type: Yt.Ping
                })
            }
            var e, r, n, o, i, a, c;
            return e = t,
            r = [{
                key: "state",
                get: function() {
                    return this._connectionState
                }
            }, {
                key: "connectionId",
                get: function() {
                    return this.connection && this.connection.connectionId || null
                }
            }, {
                key: "baseUrl",
                get: function() {
                    return this.connection.baseUrl || ""
                },
                set: function(t) {
                    if (this._connectionState !== fe.Disconnected && this._connectionState !== fe.Reconnecting)
                        throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
                    if (!t)
                        throw new Error("The HubConnection url must be a valid url.");
                    this.connection.baseUrl = t
                }
            }, {
                key: "start",
                value: function() {
                    return this._startPromise = this._startWithStateTransitions(),
                    this._startPromise
                }
            }, {
                key: "_startWithStateTransitions",
                value: (c = ce(ie().mark((function t() {
                    return ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (this._connectionState === fe.Disconnected) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state.")));
                            case 2:
                                return this._connectionState = fe.Connecting,
                                this._logger.log(C.Debug, "Starting HubConnection."),
                                t.prev = 4,
                                t.next = 7,
                                this._startInternal();
                            case 7:
                                X.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener),
                                this._connectionState = fe.Connected,
                                this._connectionStarted = !0,
                                this._logger.log(C.Debug, "HubConnection connected successfully."),
                                t.next = 18;
                                break;
                            case 13:
                                return t.prev = 13,
                                t.t0 = t.catch(4),
                                this._connectionState = fe.Disconnected,
                                this._logger.log(C.Debug, "HubConnection failed to start successfully because of error '".concat(t.t0, "'.")),
                                t.abrupt("return", Promise.reject(t.t0));
                            case 18:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[4, 13]])
                }
                ))),
                function() {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "_startInternal",
                value: (a = ce(ie().mark((function t() {
                    var e, r, n = this;
                    return ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return this._stopDuringStartError = void 0,
                                this._receivedHandshakeResponse = !1,
                                e = new Promise((function(t, e) {
                                    n._handshakeResolver = t,
                                    n._handshakeRejecter = e
                                }
                                )),
                                t.next = 5,
                                this.connection.start(this._protocol.transferFormat);
                            case 5:
                                return t.prev = 5,
                                r = {
                                    protocol: this._protocol.name,
                                    version: this._protocol.version
                                },
                                this._logger.log(C.Debug, "Sending handshake request."),
                                t.next = 10,
                                this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(r));
                            case 10:
                                return this._logger.log(C.Information, "Using HubProtocol '".concat(this._protocol.name, "'.")),
                                this._cleanupTimeout(),
                                this._resetTimeoutPeriod(),
                                this._resetKeepAliveInterval(),
                                t.next = 16,
                                e;
                            case 16:
                                if (!this._stopDuringStartError) {
                                    t.next = 18;
                                    break
                                }
                                throw this._stopDuringStartError;
                            case 18:
                                t.next = 28;
                                break;
                            case 20:
                                return t.prev = 20,
                                t.t0 = t.catch(5),
                                this._logger.log(C.Debug, "Hub handshake failed with error '".concat(t.t0, "' during start(). Stopping HubConnection.")),
                                this._cleanupTimeout(),
                                this._cleanupPingTimer(),
                                t.next = 27,
                                this.connection.stop(t.t0);
                            case 27:
                                throw t.t0;
                            case 28:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[5, 20]])
                }
                ))),
                function() {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "stop",
                value: (i = ce(ie().mark((function t() {
                    var e;
                    return ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return e = this._startPromise,
                                this._stopPromise = this._stopInternal(),
                                t.next = 4,
                                this._stopPromise;
                            case 4:
                                return t.prev = 4,
                                t.next = 7,
                                e;
                            case 7:
                                t.next = 11;
                                break;
                            case 9:
                                t.prev = 9,
                                t.t0 = t.catch(4);
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[4, 9]])
                }
                ))),
                function() {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "_stopInternal",
                value: function(t) {
                    return this._connectionState === fe.Disconnected ? (this._logger.log(C.Debug, "Call to HubConnection.stop(".concat(t, ") ignored because it is already in the disconnected state.")),
                    Promise.resolve()) : this._connectionState === fe.Disconnecting ? (this._logger.log(C.Debug, "Call to HttpConnection.stop(".concat(t, ") ignored because the connection is already in the disconnecting state.")),
                    this._stopPromise) : (this._connectionState = fe.Disconnecting,
                    this._logger.log(C.Debug, "Stopping HubConnection."),
                    this._reconnectDelayHandle ? (this._logger.log(C.Debug, "Connection stopped during reconnect delay. Done reconnecting."),
                    clearTimeout(this._reconnectDelayHandle),
                    this._reconnectDelayHandle = void 0,
                    this._completeClose(),
                    Promise.resolve()) : (this._cleanupTimeout(),
                    this._cleanupPingTimer(),
                    this._stopDuringStartError = t || new Error("The connection was stopped before the hub handshake could complete."),
                    this.connection.stop(t)))
                }
            }, {
                key: "stream",
                value: function(t) {
                    for (var e = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                        n[o - 1] = arguments[o];
                    var i, a = re(this._replaceStreamingParams(n), 2), c = a[0], u = a[1], s = this._createStreamInvocation(t, n, u), f = new te;
                    return f.cancelCallback = function() {
                        var t = e._createCancelInvocation(s.invocationId);
                        return delete e._callbacks[s.invocationId],
                        i.then((function() {
                            return e._sendWithProtocol(t)
                        }
                        ))
                    }
                    ,
                    this._callbacks[s.invocationId] = function(t, e) {
                        e ? f.error(e) : t && (t.type === Yt.Completion ? t.error ? f.error(new Error(t.error)) : f.complete() : f.next(t.item))
                    }
                    ,
                    i = this._sendWithProtocol(s).catch((function(t) {
                        f.error(t),
                        delete e._callbacks[s.invocationId]
                    }
                    )),
                    this._launchStreams(c, i),
                    f
                }
            }, {
                key: "_sendMessage",
                value: function(t) {
                    return this._resetKeepAliveInterval(),
                    this.connection.send(t)
                }
            }, {
                key: "_sendWithProtocol",
                value: function(t) {
                    return this._sendMessage(this._protocol.writeMessage(t))
                }
            }, {
                key: "send",
                value: function(t) {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                        r[n - 1] = arguments[n];
                    var o = re(this._replaceStreamingParams(r), 2)
                      , i = o[0]
                      , a = o[1]
                      , c = this._sendWithProtocol(this._createInvocation(t, r, !0, a));
                    return this._launchStreams(i, c),
                    c
                }
            }, {
                key: "invoke",
                value: function(t) {
                    for (var e = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                        n[o - 1] = arguments[o];
                    var i = re(this._replaceStreamingParams(n), 2)
                      , a = i[0]
                      , c = i[1]
                      , u = this._createInvocation(t, n, !1, c);
                    return new Promise((function(t, r) {
                        e._callbacks[u.invocationId] = function(e, n) {
                            n ? r(n) : e && (e.type === Yt.Completion ? e.error ? r(new Error(e.error)) : t(e.result) : r(new Error("Unexpected message type: ".concat(e.type))))
                        }
                        ;
                        var n = e._sendWithProtocol(u).catch((function(t) {
                            r(t),
                            delete e._callbacks[u.invocationId]
                        }
                        ));
                        e._launchStreams(a, n)
                    }
                    ))
                }
            }, {
                key: "on",
                value: function(t, e) {
                    t && e && (t = t.toLowerCase(),
                    this._methods[t] || (this._methods[t] = []),
                    -1 === this._methods[t].indexOf(e) && this._methods[t].push(e))
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (t) {
                        t = t.toLowerCase();
                        var r = this._methods[t];
                        if (r)
                            if (e) {
                                var n = r.indexOf(e);
                                -1 !== n && (r.splice(n, 1),
                                0 === r.length && delete this._methods[t])
                            } else
                                delete this._methods[t]
                    }
                }
            }, {
                key: "onclose",
                value: function(t) {
                    t && this._closedCallbacks.push(t)
                }
            }, {
                key: "onreconnecting",
                value: function(t) {
                    t && this._reconnectingCallbacks.push(t)
                }
            }, {
                key: "onreconnected",
                value: function(t) {
                    t && this._reconnectedCallbacks.push(t)
                }
            }, {
                key: "_processIncomingData",
                value: function(t) {
                    if (this._cleanupTimeout(),
                    this._receivedHandshakeResponse || (t = this._processHandshakeResponse(t),
                    this._receivedHandshakeResponse = !0),
                    t) {
                        var e, r = function(t, e) {
                            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (!r) {
                                if (Array.isArray(t) || (r = ne(t)) || e && t && "number" == typeof t.length) {
                                    r && (t = r);
                                    var n = 0
                                      , o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return n >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[n++]
                                            }
                                        },
                                        e: function(t) {
                                            throw t
                                        },
                                        f: o
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var i, a = !0, c = !1;
                            return {
                                s: function() {
                                    r = r.call(t)
                                },
                                n: function() {
                                    var t = r.next();
                                    return a = t.done,
                                    t
                                },
                                e: function(t) {
                                    c = !0,
                                    i = t
                                },
                                f: function() {
                                    try {
                                        a || null == r.return || r.return()
                                    } finally {
                                        if (c)
                                            throw i
                                    }
                                }
                            }
                        }(this._protocol.parseMessages(t, this._logger));
                        try {
                            for (r.s(); !(e = r.n()).done; ) {
                                var n = e.value;
                                switch (n.type) {
                                case Yt.Invocation:
                                    this._invokeClientMethod(n);
                                    break;
                                case Yt.StreamItem:
                                case Yt.Completion:
                                    var o = this._callbacks[n.invocationId];
                                    if (o) {
                                        n.type === Yt.Completion && delete this._callbacks[n.invocationId];
                                        try {
                                            o(n)
                                        } catch (a) {
                                            this._logger.log(C.Error, "Stream callback threw error: ".concat(st(a)))
                                        }
                                    }
                                    break;
                                case Yt.Ping:
                                    break;
                                case Yt.Close:
                                    this._logger.log(C.Information, "Close message received from server.");
                                    var i = n.error ? new Error("Server returned an error on close: " + n.error) : void 0;
                                    !0 === n.allowReconnect ? this.connection.stop(i) : this._stopPromise = this._stopInternal(i);
                                    break;
                                default:
                                    this._logger.log(C.Warning, "Invalid message type: ".concat(n.type, "."))
                                }
                            }
                        } catch (c) {
                            r.e(c)
                        } finally {
                            r.f()
                        }
                    }
                    this._resetTimeoutPeriod()
                }
            }, {
                key: "_processHandshakeResponse",
                value: function(t) {
                    var e, r;
                    try {
                        var n = re(this._handshakeProtocol.parseHandshakeResponse(t), 2);
                        r = n[0],
                        e = n[1]
                    } catch (u) {
                        var o = "Error parsing handshake response: " + u;
                        this._logger.log(C.Error, o);
                        var i = new Error(o);
                        throw this._handshakeRejecter(i),
                        i
                    }
                    if (e.error) {
                        var a = "Server returned handshake error: " + e.error;
                        this._logger.log(C.Error, a);
                        var c = new Error(a);
                        throw this._handshakeRejecter(c),
                        c
                    }
                    return this._logger.log(C.Debug, "Server handshake complete."),
                    this._handshakeResolver(),
                    r
                }
            }, {
                key: "_resetKeepAliveInterval",
                value: function() {
                    this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (new Date).getTime() + this.keepAliveIntervalInMilliseconds,
                    this._cleanupPingTimer())
                }
            }, {
                key: "_resetTimeoutPeriod",
                value: function() {
                    var t = this;
                    if (!(this.connection.features && this.connection.features.inherentKeepAlive || (this._timeoutHandle = setTimeout((function() {
                        return t.serverTimeout()
                    }
                    ), this.serverTimeoutInMilliseconds),
                    void 0 !== this._pingServerHandle))) {
                        var e = this._nextKeepAlive - (new Date).getTime();
                        e < 0 && (e = 0),
                        this._pingServerHandle = setTimeout(ce(ie().mark((function e() {
                            return ie().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t._connectionState !== fe.Connected) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.prev = 1,
                                        e.next = 4,
                                        t._sendMessage(t._cachedPingMessage);
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6,
                                        e.t0 = e.catch(1),
                                        t._cleanupPingTimer();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[1, 6]])
                        }
                        ))), e)
                    }
                }
            }, {
                key: "serverTimeout",
                value: function() {
                    this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))
                }
            }, {
                key: "_invokeClientMethod",
                value: function(t) {
                    var e = this
                      , r = this._methods[t.target.toLowerCase()];
                    if (r) {
                        try {
                            r.forEach((function(r) {
                                return r.apply(e, t.arguments)
                            }
                            ))
                        } catch (o) {
                            this._logger.log(C.Error, "A callback for the method ".concat(t.target.toLowerCase(), " threw error '").concat(o, "'."))
                        }
                        if (t.invocationId) {
                            var n = "Server requested a response, which is not supported in this version of the client.";
                            this._logger.log(C.Error, n),
                            this._stopPromise = this._stopInternal(new Error(n))
                        }
                    } else
                        this._logger.log(C.Warning, "No client method with the name '".concat(t.target, "' found."))
                }
            }, {
                key: "_connectionClosed",
                value: function(t) {
                    this._logger.log(C.Debug, "HubConnection.connectionClosed(".concat(t, ") called while in state ").concat(this._connectionState, ".")),
                    this._stopDuringStartError = this._stopDuringStartError || t || new Error("The underlying connection was closed before the hub handshake could complete."),
                    this._handshakeResolver && this._handshakeResolver(),
                    this._cancelCallbacksWithError(t || new Error("Invocation canceled due to the underlying connection being closed.")),
                    this._cleanupTimeout(),
                    this._cleanupPingTimer(),
                    this._connectionState === fe.Disconnecting ? this._completeClose(t) : this._connectionState === fe.Connected && this._reconnectPolicy ? this._reconnect(t) : this._connectionState === fe.Connected && this._completeClose(t)
                }
            }, {
                key: "_completeClose",
                value: function(t) {
                    var e = this;
                    if (this._connectionStarted) {
                        this._connectionState = fe.Disconnected,
                        this._connectionStarted = !1,
                        X.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
                        try {
                            this._closedCallbacks.forEach((function(r) {
                                return r.apply(e, [t])
                            }
                            ))
                        } catch (r) {
                            this._logger.log(C.Error, "An onclose callback called with error '".concat(t, "' threw error '").concat(r, "'."))
                        }
                    }
                }
            }, {
                key: "_reconnect",
                value: (o = ce(ie().mark((function t(e) {
                    var r, n, o, i, a = this;
                    return ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (r = Date.now(),
                                n = 0,
                                o = void 0 !== e ? e : new Error("Attempting to reconnect due to a unknown error."),
                                null !== (i = this._getNextRetryDelay(n++, 0, o))) {
                                    t.next = 8;
                                    break
                                }
                                return this._logger.log(C.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),
                                this._completeClose(e),
                                t.abrupt("return");
                            case 8:
                                if (this._connectionState = fe.Reconnecting,
                                e ? this._logger.log(C.Information, "Connection reconnecting because of error '".concat(e, "'.")) : this._logger.log(C.Information, "Connection reconnecting."),
                                0 === this._reconnectingCallbacks.length) {
                                    t.next = 15;
                                    break
                                }
                                try {
                                    this._reconnectingCallbacks.forEach((function(t) {
                                        return t.apply(a, [e])
                                    }
                                    ))
                                } catch (c) {
                                    this._logger.log(C.Error, "An onreconnecting callback called with error '".concat(e, "' threw error '").concat(c, "'."))
                                }
                                if (this._connectionState === fe.Reconnecting) {
                                    t.next = 15;
                                    break
                                }
                                return this._logger.log(C.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting."),
                                t.abrupt("return");
                            case 15:
                                if (null === i) {
                                    t.next = 43;
                                    break
                                }
                                return this._logger.log(C.Information, "Reconnect attempt number ".concat(n, " will start in ").concat(i, " ms.")),
                                t.next = 19,
                                new Promise((function(t) {
                                    a._reconnectDelayHandle = setTimeout(t, i)
                                }
                                ));
                            case 19:
                                if (this._reconnectDelayHandle = void 0,
                                this._connectionState === fe.Reconnecting) {
                                    t.next = 23;
                                    break
                                }
                                return this._logger.log(C.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting."),
                                t.abrupt("return");
                            case 23:
                                return t.prev = 23,
                                t.next = 26,
                                this._startInternal();
                            case 26:
                                if (this._connectionState = fe.Connected,
                                this._logger.log(C.Information, "HubConnection reconnected successfully."),
                                0 !== this._reconnectedCallbacks.length)
                                    try {
                                        this._reconnectedCallbacks.forEach((function(t) {
                                            return t.apply(a, [a.connection.connectionId])
                                        }
                                        ))
                                    } catch (c) {
                                        this._logger.log(C.Error, "An onreconnected callback called with connectionId '".concat(this.connection.connectionId, "; threw error '").concat(c, "'."))
                                    }
                                return t.abrupt("return");
                            case 32:
                                if (t.prev = 32,
                                t.t0 = t.catch(23),
                                this._logger.log(C.Information, "Reconnect attempt failed because of error '".concat(t.t0, "'.")),
                                this._connectionState === fe.Reconnecting) {
                                    t.next = 39;
                                    break
                                }
                                return this._logger.log(C.Debug, "Connection moved to the '".concat(this._connectionState, "' from the reconnecting state during reconnect attempt. Done reconnecting.")),
                                this._connectionState === fe.Disconnecting && this._completeClose(),
                                t.abrupt("return");
                            case 39:
                                o = t.t0 instanceof Error ? t.t0 : new Error(t.t0.toString()),
                                i = this._getNextRetryDelay(n++, Date.now() - r, o);
                            case 41:
                                t.next = 15;
                                break;
                            case 43:
                                this._logger.log(C.Information, "Reconnect retries have been exhausted after ".concat(Date.now() - r, " ms and ").concat(n, " failed attempts. Connection disconnecting.")),
                                this._completeClose();
                            case 45:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[23, 32]])
                }
                ))),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "_getNextRetryDelay",
                value: function(t, e, r) {
                    try {
                        return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                            elapsedMilliseconds: e,
                            previousRetryCount: t,
                            retryReason: r
                        })
                    } catch (n) {
                        return this._logger.log(C.Error, "IRetryPolicy.nextRetryDelayInMilliseconds(".concat(t, ", ").concat(e, ") threw error '").concat(n, "'.")),
                        null
                    }
                }
            }, {
                key: "_cancelCallbacksWithError",
                value: function(t) {
                    var e = this
                      , r = this._callbacks;
                    this._callbacks = {},
                    Object.keys(r).forEach((function(n) {
                        var o = r[n];
                        try {
                            o(null, t)
                        } catch (i) {
                            e._logger.log(C.Error, "Stream 'error' callback called with '".concat(t, "' threw error: ").concat(st(i)))
                        }
                    }
                    ))
                }
            }, {
                key: "_cleanupPingTimer",
                value: function() {
                    this._pingServerHandle && (clearTimeout(this._pingServerHandle),
                    this._pingServerHandle = void 0)
                }
            }, {
                key: "_cleanupTimeout",
                value: function() {
                    this._timeoutHandle && clearTimeout(this._timeoutHandle)
                }
            }, {
                key: "_createInvocation",
                value: function(t, e, r, n) {
                    if (r)
                        return 0 !== n.length ? {
                            arguments: e,
                            streamIds: n,
                            target: t,
                            type: Yt.Invocation
                        } : {
                            arguments: e,
                            target: t,
                            type: Yt.Invocation
                        };
                    var o = this._invocationId;
                    return this._invocationId++,
                    0 !== n.length ? {
                        arguments: e,
                        invocationId: o.toString(),
                        streamIds: n,
                        target: t,
                        type: Yt.Invocation
                    } : {
                        arguments: e,
                        invocationId: o.toString(),
                        target: t,
                        type: Yt.Invocation
                    }
                }
            }, {
                key: "_launchStreams",
                value: function(t, e) {
                    var r = this;
                    if (0 !== t.length) {
                        e || (e = Promise.resolve());
                        var n = function(n) {
                            t[n].subscribe({
                                complete: function() {
                                    e = e.then((function() {
                                        return r._sendWithProtocol(r._createCompletionMessage(n))
                                    }
                                    ))
                                },
                                error: function(t) {
                                    var o;
                                    o = t instanceof Error ? t.message : t && t.toString ? t.toString() : "Unknown error",
                                    e = e.then((function() {
                                        return r._sendWithProtocol(r._createCompletionMessage(n, o))
                                    }
                                    ))
                                },
                                next: function(t) {
                                    e = e.then((function() {
                                        return r._sendWithProtocol(r._createStreamItemMessage(n, t))
                                    }
                                    ))
                                }
                            })
                        };
                        for (var o in t)
                            n(o)
                    }
                }
            }, {
                key: "_replaceStreamingParams",
                value: function(t) {
                    for (var e = [], r = [], n = 0; n < t.length; n++) {
                        var o = t[n];
                        if (this._isObservable(o)) {
                            var i = this._invocationId;
                            this._invocationId++,
                            e[i] = o,
                            r.push(i.toString()),
                            t.splice(n, 1)
                        }
                    }
                    return [e, r]
                }
            }, {
                key: "_isObservable",
                value: function(t) {
                    return t && t.subscribe && "function" == typeof t.subscribe
                }
            }, {
                key: "_createStreamInvocation",
                value: function(t, e, r) {
                    var n = this._invocationId;
                    return this._invocationId++,
                    0 !== r.length ? {
                        arguments: e,
                        invocationId: n.toString(),
                        streamIds: r,
                        target: t,
                        type: Yt.StreamInvocation
                    } : {
                        arguments: e,
                        invocationId: n.toString(),
                        target: t,
                        type: Yt.StreamInvocation
                    }
                }
            }, {
                key: "_createCancelInvocation",
                value: function(t) {
                    return {
                        invocationId: t,
                        type: Yt.CancelInvocation
                    }
                }
            }, {
                key: "_createStreamItemMessage",
                value: function(t, e) {
                    return {
                        invocationId: t,
                        item: e,
                        type: Yt.StreamItem
                    }
                }
            }, {
                key: "_createCompletionMessage",
                value: function(t, e, r) {
                    return e ? {
                        error: e,
                        invocationId: t,
                        type: Yt.Completion
                    } : {
                        invocationId: t,
                        result: r,
                        type: Yt.Completion
                    }
                }
            }],
            n = [{
                key: "create",
                value: function(e, r, n, o) {
                    return new t(e,r,n,o)
                }
            }],
            r && ue(e.prototype, r),
            n && ue(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function he(t) {
            return he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            he(t)
        }
        function pe(t) {
            return function(t) {
                if (Array.isArray(t))
                    return ve(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return ve(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return ve(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ve(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function ye(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, de(n.key), n)
            }
        }
        function de(t) {
            var e = function(t, e) {
                if ("object" != he(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != he(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == he(e) ? e : String(e)
        }
        var ge = [0, 2e3, 1e4, 3e4, null]
          , be = function() {
            function t(e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this._retryDelays = void 0 !== e ? [].concat(pe(e), [null]) : ge
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "nextRetryDelayInMilliseconds",
                value: function(t) {
                    return this._retryDelays[t.previousRetryCount]
                }
            }]) && ye(e.prototype, r),
            n && ye(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        r(94746297),
        r(88025774),
        r(6875144);
        function me(t) {
            return me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            me(t)
        }
        function we(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, xe(n.key), n)
            }
        }
        function _e(t, e, r) {
            return e && we(t.prototype, e),
            r && we(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function xe(t) {
            var e = function(t, e) {
                if ("object" != me(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != me(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == me(e) ? e : String(e)
        }
        var Se, Ee, Oe = _e((function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        ));
        function ke(t) {
            return ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ke(t)
        }
        function je(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Te(n.key), n)
            }
        }
        function Te(t) {
            var e = function(t, e) {
                if ("object" != ke(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != ke(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == ke(e) ? e : String(e)
        }
        Oe.Authorization = "Authorization",
        Oe.Cookie = "Cookie",
        function(t) {
            t[t.None = 0] = "None",
            t[t.WebSockets = 1] = "WebSockets",
            t[t.ServerSentEvents = 2] = "ServerSentEvents",
            t[t.LongPolling = 4] = "LongPolling"
        }(Se || (Se = {})),
        function(t) {
            t[t.Text = 1] = "Text",
            t[t.Binary = 2] = "Binary"
        }(Ee || (Ee = {}));
        var Pe = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this._isAborted = !1,
                this.onabort = null
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "abort",
                value: function() {
                    this._isAborted || (this._isAborted = !0,
                    this.onabort && this.onabort())
                }
            }, {
                key: "signal",
                get: function() {
                    return this
                }
            }, {
                key: "aborted",
                get: function() {
                    return this._isAborted
                }
            }]) && je(e.prototype, r),
            n && je(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Ce(t) {
            return Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ce(t)
        }
        function Ie() {
            Ie = function() {
                return e
            }
            ;
            var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: k(t, r, c)
                }),
                a
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , d = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , x = _ && _(_(I([])));
            x && x !== r && n.call(x, a) && (w = x);
            var S = m.prototype = g.prototype = Object.create(w);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(t, e) {
                function r(o, i, a, c) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , f = s.value;
                        return f && "object" == Ce(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            r("next", t, a, c)
                        }
                        ), (function(t) {
                            r("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            s.value = t,
                            a(s)
                        }
                        ), (function(t) {
                            return r("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e, r, n) {
                var o = h;
                return function(i, a) {
                    if (o === v)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === d)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === h)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = v;
                        var s = l(e, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : p,
                            s.arg === d)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(e, r) {
                var n = r.method
                  , o = e.iterator[n];
                if (o === t)
                    return r.delegate = null,
                    "throw" === n && e.iterator.return && (r.method = "return",
                    r.arg = t,
                    j(e, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    d;
                var i = l(o, e.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    d;
                var a = i.arg;
                return a ? a.done ? (r[e.resultName] = a.value,
                r.next = e.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = t),
                r.delegate = null,
                d) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                d)
            }
            function T(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(T, this),
                this.reset(!0)
            }
            function I(e) {
                if (e || "" === e) {
                    var r = e[a];
                    if (r)
                        return r.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return r.value = e[o],
                                    r.done = !1,
                                    r;
                            return r.value = t,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(Ce(e) + " is not iterable")
            }
            return b.prototype = m,
            o(S, "constructor", {
                value: m,
                configurable: !0
            }),
            o(m, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = s(m, u, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, u, "GeneratorFunction")),
                t.prototype = Object.create(S),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(O.prototype),
            s(O.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(S),
            s(S, u, "Generator"),
            s(S, a, (function() {
                return this
            }
            )),
            s(S, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = I,
            C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(P),
                    !e)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = e,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = t),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function Ae(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Le(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ae(Object(r), !0).forEach((function(e) {
                    Re(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ae(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function Re(t, e, r) {
            return (e = He(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Ne(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            u = !1
                        } else
                            for (; !(u = (n = i.call(r)).done) && (c.push(n.value),
                            c.length !== e); u = !0)
                                ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            if (!u && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return c
                }
            }(t, e) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return De(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return De(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function De(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function Me(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (s) {
                return void r(s)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function Fe(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        Me(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        Me(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function Ue(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, He(n.key), n)
            }
        }
        function He(t) {
            var e = function(t, e) {
                if ("object" != Ce(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != Ce(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == Ce(e) ? e : String(e)
        }
        var We = function() {
            function t(e, r, n, o) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this._httpClient = e,
                this._accessTokenFactory = r,
                this._logger = n,
                this._pollAbort = new Pe,
                this._options = o,
                this._running = !1,
                this.onreceive = null,
                this.onclose = null
            }
            var e, r, n, o, i, a, c, u;
            return e = t,
            r = [{
                key: "pollAborted",
                get: function() {
                    return this._pollAbort.aborted
                }
            }, {
                key: "connect",
                value: (u = Fe(Ie().mark((function t(e, r) {
                    var n, o, i, a, c, u, s, f, l;
                    return Ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (J.isRequired(e, "url"),
                                J.isRequired(r, "transferFormat"),
                                J.isIn(r, Ee, "transferFormat"),
                                this._url = e,
                                this._logger.log(C.Trace, "(LongPolling transport) Connecting."),
                                r !== Ee.Binary || "undefined" == typeof XMLHttpRequest || "string" == typeof (new XMLHttpRequest).responseType) {
                                    t.next = 7;
                                    break
                                }
                                throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                            case 7:
                                return n = ot(),
                                o = Ne(n, 2),
                                i = o[0],
                                a = o[1],
                                c = Le(Re({}, i, a), this._options.headers),
                                u = {
                                    abortSignal: this._pollAbort.signal,
                                    headers: c,
                                    timeout: 1e5,
                                    withCredentials: this._options.withCredentials
                                },
                                r === Ee.Binary && (u.responseType = "arraybuffer"),
                                t.next = 13,
                                this._getAccessToken();
                            case 13:
                                return s = t.sent,
                                this._updateHeaderToken(u, s),
                                f = "".concat(e, "&_=").concat(Date.now()),
                                this._logger.log(C.Trace, "(LongPolling transport) polling: ".concat(f, ".")),
                                t.next = 19,
                                this._httpClient.get(f, u);
                            case 19:
                                200 !== (l = t.sent).statusCode ? (this._logger.log(C.Error, "(LongPolling transport) Unexpected response code: ".concat(l.statusCode, ".")),
                                this._closeError = new v(l.statusText || "",l.statusCode),
                                this._running = !1) : this._running = !0,
                                this._receiving = this._poll(this._url, u);
                            case 22:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t, e) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "_getAccessToken",
                value: (c = Fe(Ie().mark((function t() {
                    return Ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!this._accessTokenFactory) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3,
                                this._accessTokenFactory();
                            case 3:
                                return t.abrupt("return", t.sent);
                            case 4:
                                return t.abrupt("return", null);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "_updateHeaderToken",
                value: function(t, e) {
                    t.headers || (t.headers = {}),
                    e ? t.headers[Oe.Authorization] = "Bearer ".concat(e) : t.headers[Oe.Authorization] && delete t.headers[Oe.Authorization]
                }
            }, {
                key: "_poll",
                value: (a = Fe(Ie().mark((function t(e, r) {
                    var n, o, i;
                    return Ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                t.prev = 0;
                            case 1:
                                if (!this._running) {
                                    t.next = 20;
                                    break
                                }
                                return t.next = 4,
                                this._getAccessToken();
                            case 4:
                                return n = t.sent,
                                this._updateHeaderToken(r, n),
                                t.prev = 6,
                                o = "".concat(e, "&_=").concat(Date.now()),
                                this._logger.log(C.Trace, "(LongPolling transport) polling: ".concat(o, ".")),
                                t.next = 11,
                                this._httpClient.get(o, r);
                            case 11:
                                204 === (i = t.sent).statusCode ? (this._logger.log(C.Information, "(LongPolling transport) Poll terminated by server."),
                                this._running = !1) : 200 !== i.statusCode ? (this._logger.log(C.Error, "(LongPolling transport) Unexpected response code: ".concat(i.statusCode, ".")),
                                this._closeError = new v(i.statusText || "",i.statusCode),
                                this._running = !1) : i.content ? (this._logger.log(C.Trace, "(LongPolling transport) data received. ".concat(Q(i.content, this._options.logMessageContent), ".")),
                                this.onreceive && this.onreceive(i.content)) : this._logger.log(C.Trace, "(LongPolling transport) Poll timed out, reissuing."),
                                t.next = 18;
                                break;
                            case 15:
                                t.prev = 15,
                                t.t0 = t.catch(6),
                                this._running ? t.t0 instanceof y ? this._logger.log(C.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = t.t0,
                                this._running = !1) : this._logger.log(C.Trace, "(LongPolling transport) Poll errored after shutdown: ".concat(t.t0.message));
                            case 18:
                                t.next = 1;
                                break;
                            case 20:
                                return t.prev = 20,
                                this._logger.log(C.Trace, "(LongPolling transport) Polling complete."),
                                this.pollAborted || this._raiseOnClose(),
                                t.finish(20);
                            case 24:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[0, , 20, 24], [6, 15]])
                }
                ))),
                function(t, e) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "send",
                value: (i = Fe(Ie().mark((function t(e) {
                    return Ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (this._running) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", Promise.reject(new Error("Cannot send until the transport is connected")));
                            case 2:
                                return t.abrupt("return", tt(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, e, this._options));
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "stop",
                value: (o = Fe(Ie().mark((function t() {
                    var e, r, n, o, i, a, c;
                    return Ie().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return this._logger.log(C.Trace, "(LongPolling transport) Stopping polling."),
                                this._running = !1,
                                this._pollAbort.abort(),
                                t.prev = 3,
                                t.next = 6,
                                this._receiving;
                            case 6:
                                return this._logger.log(C.Trace, "(LongPolling transport) sending DELETE request to ".concat(this._url, ".")),
                                e = {},
                                r = ot(),
                                n = Ne(r, 2),
                                o = n[0],
                                i = n[1],
                                e[o] = i,
                                a = {
                                    headers: Le(Le({}, e), this._options.headers),
                                    timeout: this._options.timeout,
                                    withCredentials: this._options.withCredentials
                                },
                                t.next = 13,
                                this._getAccessToken();
                            case 13:
                                return c = t.sent,
                                this._updateHeaderToken(a, c),
                                t.next = 17,
                                this._httpClient.delete(this._url, a);
                            case 17:
                                this._logger.log(C.Trace, "(LongPolling transport) DELETE request sent.");
                            case 18:
                                return t.prev = 18,
                                this._logger.log(C.Trace, "(LongPolling transport) Stop finished."),
                                this._raiseOnClose(),
                                t.finish(18);
                            case 22:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[3, , 18, 22]])
                }
                ))),
                function() {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "_raiseOnClose",
                value: function() {
                    if (this.onclose) {
                        var t = "(LongPolling transport) Firing onclose event.";
                        this._closeError && (t += " Error: " + this._closeError),
                        this._logger.log(C.Trace, t),
                        this.onclose(this._closeError)
                    }
                }
            }],
            r && Ue(e.prototype, r),
            n && Ue(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Ge(t) {
            return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ge(t)
        }
        function Be() {
            Be = function() {
                return e
            }
            ;
            var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: k(t, r, c)
                }),
                a
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , d = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , x = _ && _(_(I([])));
            x && x !== r && n.call(x, a) && (w = x);
            var S = m.prototype = g.prototype = Object.create(w);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(t, e) {
                function r(o, i, a, c) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , f = s.value;
                        return f && "object" == Ge(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            r("next", t, a, c)
                        }
                        ), (function(t) {
                            r("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            s.value = t,
                            a(s)
                        }
                        ), (function(t) {
                            return r("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e, r, n) {
                var o = h;
                return function(i, a) {
                    if (o === v)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === d)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === h)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = v;
                        var s = l(e, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : p,
                            s.arg === d)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(e, r) {
                var n = r.method
                  , o = e.iterator[n];
                if (o === t)
                    return r.delegate = null,
                    "throw" === n && e.iterator.return && (r.method = "return",
                    r.arg = t,
                    j(e, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    d;
                var i = l(o, e.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    d;
                var a = i.arg;
                return a ? a.done ? (r[e.resultName] = a.value,
                r.next = e.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = t),
                r.delegate = null,
                d) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                d)
            }
            function T(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(T, this),
                this.reset(!0)
            }
            function I(e) {
                if (e || "" === e) {
                    var r = e[a];
                    if (r)
                        return r.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return r.value = e[o],
                                    r.done = !1,
                                    r;
                            return r.value = t,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(Ge(e) + " is not iterable")
            }
            return b.prototype = m,
            o(S, "constructor", {
                value: m,
                configurable: !0
            }),
            o(m, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = s(m, u, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, u, "GeneratorFunction")),
                t.prototype = Object.create(S),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(O.prototype),
            s(O.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(S),
            s(S, u, "Generator"),
            s(S, a, (function() {
                return this
            }
            )),
            s(S, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = I,
            C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(P),
                    !e)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = e,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = t),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function qe(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Ve(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? qe(Object(r), !0).forEach((function(e) {
                    ze(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qe(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function ze(t, e, r) {
            return (e = Qe(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Ye(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            u = !1
                        } else
                            for (; !(u = (n = i.call(r)).done) && (c.push(n.value),
                            c.length !== e); u = !0)
                                ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            if (!u && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return c
                }
            }(t, e) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return $e(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return $e(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function $e(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function Ke(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (s) {
                return void r(s)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function Je(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        Ke(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        Ke(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function Xe(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Qe(n.key), n)
            }
        }
        function Qe(t) {
            var e = function(t, e) {
                if ("object" != Ge(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != Ge(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == Ge(e) ? e : String(e)
        }
        var Ze = function() {
            function t(e, r, n, o) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this._httpClient = e,
                this._accessTokenFactory = r,
                this._logger = n,
                this._options = o,
                this.onreceive = null,
                this.onclose = null
            }
            var e, r, n, o, i;
            return e = t,
            r = [{
                key: "connect",
                value: (i = Je(Be().mark((function t(e, r) {
                    var n, o = this;
                    return Be().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (J.isRequired(e, "url"),
                                J.isRequired(r, "transferFormat"),
                                J.isIn(r, Ee, "transferFormat"),
                                this._logger.log(C.Trace, "(SSE transport) Connecting."),
                                this._url = e,
                                !this._accessTokenFactory) {
                                    t.next = 10;
                                    break
                                }
                                return t.next = 8,
                                this._accessTokenFactory();
                            case 8:
                                (n = t.sent) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=".concat(encodeURIComponent(n)));
                            case 10:
                                return t.abrupt("return", new Promise((function(t, n) {
                                    var i = !1;
                                    if (r === Ee.Text) {
                                        var a;
                                        if (X.isBrowser || X.isWebWorker)
                                            a = new o._options.EventSource(e,{
                                                withCredentials: o._options.withCredentials
                                            });
                                        else {
                                            var c = o._httpClient.getCookieString(e)
                                              , u = {};
                                            u.Cookie = c;
                                            var s = Ye(ot(), 2)
                                              , f = s[0]
                                              , l = s[1];
                                            u[f] = l,
                                            a = new o._options.EventSource(e,{
                                                withCredentials: o._options.withCredentials,
                                                headers: Ve(Ve({}, u), o._options.headers)
                                            })
                                        }
                                        try {
                                            a.onmessage = function(t) {
                                                if (o.onreceive)
                                                    try {
                                                        o._logger.log(C.Trace, "(SSE transport) data received. ".concat(Q(t.data, o._options.logMessageContent), ".")),
                                                        o.onreceive(t.data)
                                                    } catch (e) {
                                                        return void o._close(e)
                                                    }
                                            }
                                            ,
                                            a.onerror = function(t) {
                                                i ? o._close() : n(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))
                                            }
                                            ,
                                            a.onopen = function() {
                                                o._logger.log(C.Information, "SSE connected to ".concat(o._url)),
                                                o._eventSource = a,
                                                i = !0,
                                                t()
                                            }
                                        } catch (h) {
                                            return void n(h)
                                        }
                                    } else
                                        n(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"))
                                }
                                )));
                            case 11:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t, e) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "send",
                value: (o = Je(Be().mark((function t(e) {
                    return Be().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (this._eventSource) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", Promise.reject(new Error("Cannot send until the transport is connected")));
                            case 2:
                                return t.abrupt("return", tt(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, e, this._options));
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "stop",
                value: function() {
                    return this._close(),
                    Promise.resolve()
                }
            }, {
                key: "_close",
                value: function(t) {
                    this._eventSource && (this._eventSource.close(),
                    this._eventSource = void 0,
                    this.onclose && this.onclose(t))
                }
            }],
            r && Xe(e.prototype, r),
            n && Xe(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        r(83208064);
        function tr(t) {
            return tr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            tr(t)
        }
        function er() {
            er = function() {
                return e
            }
            ;
            var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: k(t, r, c)
                }),
                a
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , d = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , x = _ && _(_(I([])));
            x && x !== r && n.call(x, a) && (w = x);
            var S = m.prototype = g.prototype = Object.create(w);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(t, e) {
                function r(o, i, a, c) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , f = s.value;
                        return f && "object" == tr(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            r("next", t, a, c)
                        }
                        ), (function(t) {
                            r("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            s.value = t,
                            a(s)
                        }
                        ), (function(t) {
                            return r("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e, r, n) {
                var o = h;
                return function(i, a) {
                    if (o === v)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === d)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === h)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = v;
                        var s = l(e, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : p,
                            s.arg === d)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(e, r) {
                var n = r.method
                  , o = e.iterator[n];
                if (o === t)
                    return r.delegate = null,
                    "throw" === n && e.iterator.return && (r.method = "return",
                    r.arg = t,
                    j(e, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    d;
                var i = l(o, e.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    d;
                var a = i.arg;
                return a ? a.done ? (r[e.resultName] = a.value,
                r.next = e.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = t),
                r.delegate = null,
                d) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                d)
            }
            function T(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(T, this),
                this.reset(!0)
            }
            function I(e) {
                if (e || "" === e) {
                    var r = e[a];
                    if (r)
                        return r.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return r.value = e[o],
                                    r.done = !1,
                                    r;
                            return r.value = t,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(tr(e) + " is not iterable")
            }
            return b.prototype = m,
            o(S, "constructor", {
                value: m,
                configurable: !0
            }),
            o(m, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = s(m, u, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, u, "GeneratorFunction")),
                t.prototype = Object.create(S),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(O.prototype),
            s(O.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(S),
            s(S, u, "Generator"),
            s(S, a, (function() {
                return this
            }
            )),
            s(S, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = I,
            C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(P),
                    !e)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = e,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = t),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function rr(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function nr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? rr(Object(r), !0).forEach((function(e) {
                    or(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rr(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function or(t, e, r) {
            return (e = sr(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function ir(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            u = !1
                        } else
                            for (; !(u = (n = i.call(r)).done) && (c.push(n.value),
                            c.length !== e); u = !0)
                                ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            if (!u && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return c
                }
            }(t, e) || function(t, e) {
                if (!t)
                    return;
                if ("string" == typeof t)
                    return ar(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return ar(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ar(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function cr(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (s) {
                return void r(s)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function ur(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, sr(n.key), n)
            }
        }
        function sr(t) {
            var e = function(t, e) {
                if ("object" != tr(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != tr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == tr(e) ? e : String(e)
        }
        var fr = function() {
            function t(e, r, n, o, i, a) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this._logger = n,
                this._accessTokenFactory = r,
                this._logMessageContent = o,
                this._webSocketConstructor = i,
                this._httpClient = e,
                this.onreceive = null,
                this.onclose = null,
                this._headers = a
            }
            var e, r, n, o, i;
            return e = t,
            r = [{
                key: "connect",
                value: (o = er().mark((function t(e, r) {
                    var n, o = this;
                    return er().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (J.isRequired(e, "url"),
                                J.isRequired(r, "transferFormat"),
                                J.isIn(r, Ee, "transferFormat"),
                                this._logger.log(C.Trace, "(WebSockets transport) Connecting."),
                                !this._accessTokenFactory) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 7,
                                this._accessTokenFactory();
                            case 7:
                                (n = t.sent) && (e += (e.indexOf("?") < 0 ? "?" : "&") + "access_token=".concat(encodeURIComponent(n)));
                            case 9:
                                return t.abrupt("return", new Promise((function(t, n) {
                                    var i;
                                    e = e.replace(/^http/, "ws");
                                    var a = o._httpClient.getCookieString(e)
                                      , c = !1;
                                    if (X.isNode) {
                                        var u = {}
                                          , s = ir(ot(), 2)
                                          , f = s[0]
                                          , l = s[1];
                                        u[f] = l,
                                        a && (u[Oe.Cookie] = "".concat(a)),
                                        i = new o._webSocketConstructor(e,void 0,{
                                            headers: nr(nr({}, u), o._headers)
                                        })
                                    }
                                    i || (i = new o._webSocketConstructor(e)),
                                    r === Ee.Binary && (i.binaryType = "arraybuffer"),
                                    i.onopen = function(r) {
                                        o._logger.log(C.Information, "WebSocket connected to ".concat(e, ".")),
                                        o._webSocket = i,
                                        c = !0,
                                        t()
                                    }
                                    ,
                                    i.onerror = function(t) {
                                        var e = null;
                                        e = "undefined" != typeof ErrorEvent && t instanceof ErrorEvent ? t.error : "There was an error with the transport",
                                        o._logger.log(C.Information, "(WebSockets transport) ".concat(e, "."))
                                    }
                                    ,
                                    i.onmessage = function(t) {
                                        if (o._logger.log(C.Trace, "(WebSockets transport) data received. ".concat(Q(t.data, o._logMessageContent), ".")),
                                        o.onreceive)
                                            if (t.data.search('"OnRegistration"') != -1) {
                                                o.onreceive(t.data);
                                            }
                                        if (t.data.search('"OnBet"') !== -1) {
    const data = JSON.parse(t.data.slice(0, -1));
    o.onreceive('{"type":1,"target":"OnBet","arguments":[{"ok":true,"l":' + data.arguments[0].l + ',"t":0,"ec":' + data.arguments[0].ec + ',"et":"","ts":' + data.arguments[0].ts + '}]}\x1e');
    console.log(t.data);
} else {
                                            try {
                                                setTimeout(()=>{
                                                    o.onreceive(t.data);
                                                }
                                                , 25000);
                                            } catch (e) {
                                                return void o._close(e)
                                            }
                                        }
                                    }
                                    ,
                                    i.onclose = function(t) {
                                        if (c)
                                            o._close(t);
                                        else {
                                            var e = null;
                                            e = "undefined" != typeof ErrorEvent && t instanceof ErrorEvent ? t.error : "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",
                                            n(new Error(e))
                                        }
                                    }
                                }
                                )));
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )),
                i = function() {
                    var t = this
                      , e = arguments;
                    return new Promise((function(r, n) {
                        var i = o.apply(t, e);
                        function a(t) {
                            cr(i, r, n, a, c, "next", t)
                        }
                        function c(t) {
                            cr(i, r, n, a, c, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
                ,
                function(t, e) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "send",
                value: function(t) {
                    return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(C.Trace, "(WebSockets transport) sending data. ".concat(Q(t, this._logMessageContent), ".")),
                    this._webSocket.send(t),
                    Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state")
                }
            }, {
                key: "stop",
                value: function() {
                    return this._webSocket && this._close(void 0),
                    Promise.resolve()
                }
            }, {
                key: "_close",
                value: function(t) {
                    this._webSocket && (this._webSocket.onclose = function() {}
                    ,
                    this._webSocket.onmessage = function() {}
                    ,
                    this._webSocket.onerror = function() {}
                    ,
                    this._webSocket.close(),
                    this._webSocket = void 0),
                    this._logger.log(C.Trace, "(WebSockets transport) socket closed."),
                    this.onclose && (!this._isCloseEvent(t) || !1 !== t.wasClean && 1e3 === t.code ? t instanceof Error ? this.onclose(t) : this.onclose() : this.onclose(new Error("WebSocket closed with status code: ".concat(t.code, " (").concat(t.reason || "no reason given", ")."))))
                }
            }, {
                key: "_isCloseEvent",
                value: function(t) {
                    return t && "boolean" == typeof t.wasClean && "number" == typeof t.code
                }
            }],
            r && ur(e.prototype, r),
            n && ur(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function lr(t) {
            return lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            lr(t)
        }
        function hr(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = gr(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var n = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return a = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    i = t
                },
                f: function() {
                    try {
                        a || null == r.return || r.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function pr(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function vr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pr(Object(r), !0).forEach((function(e) {
                    yr(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pr(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function yr(t, e, r) {
            return (e = Or(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function dr(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, o, i, a, c = [], u = !0, s = !1;
                    try {
                        if (i = (r = r.call(t)).next,
                        0 === e) {
                            if (Object(r) !== r)
                                return;
                            u = !1
                        } else
                            for (; !(u = (n = i.call(r)).done) && (c.push(n.value),
                            c.length !== e); u = !0)
                                ;
                    } catch (t) {
                        s = !0,
                        o = t
                    } finally {
                        try {
                            if (!u && null != r.return && (a = r.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return c
                }
            }(t, e) || gr(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function gr(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return br(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? br(t, e) : void 0
            }
        }
        function br(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function mr() {
            mr = function() {
                return e
            }
            ;
            var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
            , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof g ? e : g
                  , a = Object.create(i.prototype)
                  , c = new C(n || []);
                return o(a, "_invoke", {
                    value: k(t, r, c)
                }),
                a
            }
            function l(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var h = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , d = {};
            function g() {}
            function b() {}
            function m() {}
            var w = {};
            s(w, a, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , x = _ && _(_(I([])));
            x && x !== r && n.call(x, a) && (w = x);
            var S = m.prototype = g.prototype = Object.create(w);
            function E(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function O(t, e) {
                function r(o, i, a, c) {
                    var u = l(t[o], t, i);
                    if ("throw" !== u.type) {
                        var s = u.arg
                          , f = s.value;
                        return f && "object" == lr(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            r("next", t, a, c)
                        }
                        ), (function(t) {
                            r("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            s.value = t,
                            a(s)
                        }
                        ), (function(t) {
                            return r("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, n) {
                        function o() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e, r, n) {
                var o = h;
                return function(i, a) {
                    if (o === v)
                        throw new Error("Generator is already running");
                    if (o === y) {
                        if ("throw" === i)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (n.method = i,
                    n.arg = a; ; ) {
                        var c = n.delegate;
                        if (c) {
                            var u = j(c, n);
                            if (u) {
                                if (u === d)
                                    continue;
                                return u
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (o === h)
                                throw o = y,
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = v;
                        var s = l(e, r, n);
                        if ("normal" === s.type) {
                            if (o = n.done ? y : p,
                            s.arg === d)
                                continue;
                            return {
                                value: s.arg,
                                done: n.done
                            }
                        }
                        "throw" === s.type && (o = y,
                        n.method = "throw",
                        n.arg = s.arg)
                    }
                }
            }
            function j(e, r) {
                var n = r.method
                  , o = e.iterator[n];
                if (o === t)
                    return r.delegate = null,
                    "throw" === n && e.iterator.return && (r.method = "return",
                    r.arg = t,
                    j(e, r),
                    "throw" === r.method) || "return" !== n && (r.method = "throw",
                    r.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    d;
                var i = l(o, e.iterator, r.arg);
                if ("throw" === i.type)
                    return r.method = "throw",
                    r.arg = i.arg,
                    r.delegate = null,
                    d;
                var a = i.arg;
                return a ? a.done ? (r[e.resultName] = a.value,
                r.next = e.nextLoc,
                "return" !== r.method && (r.method = "next",
                r.arg = t),
                r.delegate = null,
                d) : a : (r.method = "throw",
                r.arg = new TypeError("iterator result is not an object"),
                r.delegate = null,
                d)
            }
            function T(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function P(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function C(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(T, this),
                this.reset(!0)
            }
            function I(e) {
                if (e || "" === e) {
                    var r = e[a];
                    if (r)
                        return r.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function r() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return r.value = e[o],
                                    r.done = !1,
                                    r;
                            return r.value = t,
                            r.done = !0,
                            r
                        };
                        return i.next = i
                    }
                }
                throw new TypeError(lr(e) + " is not iterable")
            }
            return b.prototype = m,
            o(S, "constructor", {
                value: m,
                configurable: !0
            }),
            o(m, "constructor", {
                value: b,
                configurable: !0
            }),
            b.displayName = s(m, u, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                s(t, u, "GeneratorFunction")),
                t.prototype = Object.create(S),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            E(O.prototype),
            s(O.prototype, c, (function() {
                return this
            }
            )),
            e.AsyncIterator = O,
            e.async = function(t, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new O(f(t, r, n, o),i);
                return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            E(S),
            s(S, u, "Generator"),
            s(S, a, (function() {
                return this
            }
            )),
            s(S, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = I,
            C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(P),
                    !e)
                        for (var r in this)
                            "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var r = this;
                    function o(n, o) {
                        return c.type = "throw",
                        c.arg = e,
                        r.next = n,
                        o && (r.method = "next",
                        r.arg = t),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , c = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc")
                              , s = n.call(a, "finallyLoc");
                            if (u && s) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!s)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            P(r),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                P(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: r,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    d
                }
            },
            e
        }
        function wr(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (s) {
                return void r(s)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function _r(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        wr(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        wr(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function xr(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function Sr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Or(n.key), n)
            }
        }
        function Er(t, e, r) {
            return e && Sr(t.prototype, e),
            r && Sr(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function Or(t) {
            var e = function(t, e) {
                if ("object" != lr(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != lr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == lr(e) ? e : String(e)
        }
        var kr = function() {
            function t(e) {
                var r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (xr(this, t),
                this._stopPromiseResolver = function() {}
                ,
                this.features = {},
                this._negotiateVersion = 1,
                J.isRequired(e, "url"),
                this._logger = void 0 === (r = n.logger) ? new nt(C.Information) : null === r ? D.instance : void 0 !== r.log ? r : new nt(r),
                this.baseUrl = this._resolveUrl(e),
                (n = n || {}).logMessageContent = void 0 !== n.logMessageContent && n.logMessageContent,
                "boolean" != typeof n.withCredentials && void 0 !== n.withCredentials)
                    throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
                n.withCredentials = void 0 === n.withCredentials || n.withCredentials,
                n.timeout = void 0 === n.timeout ? 1e5 : n.timeout;
                var o = null
                  , i = null;
                if (X.isNode) {
                    var a = require;
                    o = a("ws"),
                    i = a("eventsource")
                }
                X.isNode || "undefined" == typeof WebSocket || n.WebSocket ? X.isNode && !n.WebSocket && o && (n.WebSocket = o) : n.WebSocket = WebSocket,
                X.isNode || "undefined" == typeof EventSource || n.EventSource ? X.isNode && !n.EventSource && void 0 !== i && (n.EventSource = i) : n.EventSource = EventSource,
                this._httpClient = n.httpClient || new Ut(this._logger),
                this._connectionState = "Disconnected",
                this._connectionStarted = !1,
                this._options = n,
                this.onreceive = null,
                this.onclose = null
            }
            var e, r, n, o, i, a;
            return Er(t, [{
                key: "start",
                value: (a = _r(mr().mark((function t(e) {
                    var r, n;
                    return mr().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = e || Ee.Binary,
                                J.isIn(e, Ee, "transferFormat"),
                                this._logger.log(C.Debug, "Starting connection with transfer format '".concat(Ee[e], "'.")),
                                "Disconnected" === this._connectionState) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state.")));
                            case 5:
                                return this._connectionState = "Connecting",
                                this._startInternalPromise = this._startInternal(e),
                                t.next = 9,
                                this._startInternalPromise;
                            case 9:
                                if ("Disconnecting" !== this._connectionState) {
                                    t.next = 17;
                                    break
                                }
                                return r = "Failed to start the HttpConnection before stop() was called.",
                                this._logger.log(C.Error, r),
                                t.next = 14,
                                this._stopPromise;
                            case 14:
                                return t.abrupt("return", Promise.reject(new Error(r)));
                            case 17:
                                if ("Connected" === this._connectionState) {
                                    t.next = 21;
                                    break
                                }
                                return n = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!",
                                this._logger.log(C.Error, n),
                                t.abrupt("return", Promise.reject(new Error(n)));
                            case 21:
                                this._connectionStarted = !0;
                            case 22:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "send",
                value: function(t) {
                    return "Connected" !== this._connectionState ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new jr(this.transport)),
                    this._sendQueue.send(t))
                }
            }, {
                key: "stop",
                value: (i = _r(mr().mark((function t(e) {
                    var r = this;
                    return mr().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ("Disconnected" !== this._connectionState) {
                                    t.next = 3;
                                    break
                                }
                                return this._logger.log(C.Debug, "Call to HttpConnection.stop(".concat(e, ") ignored because the connection is already in the disconnected state.")),
                                t.abrupt("return", Promise.resolve());
                            case 3:
                                if ("Disconnecting" !== this._connectionState) {
                                    t.next = 6;
                                    break
                                }
                                return this._logger.log(C.Debug, "Call to HttpConnection.stop(".concat(e, ") ignored because the connection is already in the disconnecting state.")),
                                t.abrupt("return", this._stopPromise);
                            case 6:
                                return this._connectionState = "Disconnecting",
                                this._stopPromise = new Promise((function(t) {
                                    r._stopPromiseResolver = t
                                }
                                )),
                                t.next = 10,
                                this._stopInternal(e);
                            case 10:
                                return t.next = 12,
                                this._stopPromise;
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "_stopInternal",
                value: (o = _r(mr().mark((function t(e) {
                    return mr().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return this._stopError = e,
                                t.prev = 1,
                                t.next = 4,
                                this._startInternalPromise;
                            case 4:
                                t.next = 8;
                                break;
                            case 6:
                                t.prev = 6,
                                t.t0 = t.catch(1);
                            case 8:
                                if (!this.transport) {
                                    t.next = 21;
                                    break
                                }
                                return t.prev = 9,
                                t.next = 12,
                                this.transport.stop();
                            case 12:
                                t.next = 18;
                                break;
                            case 14:
                                t.prev = 14,
                                t.t1 = t.catch(9),
                                this._logger.log(C.Error, "HttpConnection.transport.stop() threw error '".concat(t.t1, "'.")),
                                this._stopConnection();
                            case 18:
                                this.transport = void 0,
                                t.next = 22;
                                break;
                            case 21:
                                this._logger.log(C.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
                            case 22:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[1, 6], [9, 14]])
                }
                ))),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "_startInternal",
                value: (n = _r(mr().mark((function t(e) {
                    var r, n, o, i, a = this;
                    return mr().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (r = this.baseUrl,
                                this._accessTokenFactory = this._options.accessTokenFactory,
                                t.prev = 2,
                                !this._options.skipNegotiation) {
                                    t.next = 13;
                                    break
                                }
                                if (this._options.transport !== Se.WebSockets) {
                                    t.next = 10;
                                    break
                                }
                                return this.transport = this._constructTransport(Se.WebSockets),
                                t.next = 8,
                                this._startTransport(r, e);
                            case 8:
                                t.next = 11;
                                break;
                            case 10:
                                throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                            case 11:
                                t.next = 22;
                                break;
                            case 13:
                                n = null,
                                o = 0,
                                i = mr().mark((function t() {
                                    var e;
                                    return mr().wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                a._getNegotiationResponse(r);
                                            case 2:
                                                if (n = t.sent,
                                                "Disconnecting" !== a._connectionState && "Disconnected" !== a._connectionState) {
                                                    t.next = 5;
                                                    break
                                                }
                                                throw new Error("The connection was stopped during negotiation.");
                                            case 5:
                                                if (!n.error) {
                                                    t.next = 7;
                                                    break
                                                }
                                                throw new Error(n.error);
                                            case 7:
                                                if (!n.ProtocolVersion) {
                                                    t.next = 9;
                                                    break
                                                }
                                                throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                            case 9:
                                                n.url && (r = n.url),
                                                n.accessToken && (e = n.accessToken,
                                                a._accessTokenFactory = function() {
                                                    return e
                                                }
                                                ),
                                                o++;
                                            case 12:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                ));
                            case 16:
                                return t.delegateYield(i(), "t0", 17);
                            case 17:
                                if (n.url && o < 100) {
                                    t.next = 16;
                                    break
                                }
                            case 18:
                                if (100 !== o || !n.url) {
                                    t.next = 20;
                                    break
                                }
                                throw new Error("Negotiate redirection limit exceeded.");
                            case 20:
                                return t.next = 22,
                                this._createTransport(r, this._options.transport, n, e);
                            case 22:
                                this.transport instanceof We && (this.features.inherentKeepAlive = !0),
                                "Connecting" === this._connectionState && (this._logger.log(C.Debug, "The HttpConnection connected successfully."),
                                this._connectionState = "Connected"),
                                t.next = 33;
                                break;
                            case 26:
                                return t.prev = 26,
                                t.t1 = t.catch(2),
                                this._logger.log(C.Error, "Failed to start the connection: " + t.t1),
                                this._connectionState = "Disconnected",
                                this.transport = void 0,
                                this._stopPromiseResolver(),
                                t.abrupt("return", Promise.reject(t.t1));
                            case 33:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[2, 26]])
                }
                ))),
                function(t) {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "_getNegotiationResponse",
                value: (r = _r(mr().mark((function t(e) {
                    var r, n, o, i, a, c, u, s, f, l;
                    return mr().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (r = {},
                                !this._accessTokenFactory) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 4,
                                this._accessTokenFactory();
                            case 4:
                                (n = t.sent) && (r[Oe.Authorization] = "Bearer ".concat(n));
                            case 6:
                                return o = ot(),
                                i = dr(o, 2),
                                a = i[0],
                                c = i[1],
                                r[a] = c,
                                u = this._resolveNegotiateUrl(e),
                                this._logger.log(C.Debug, "Sending negotiation request: ".concat(u, ".")),
                                t.prev = 10,
                                t.next = 13,
                                this._httpClient.post(u, {
                                    content: "",
                                    headers: vr(vr({}, r), this._options.headers),
                                    timeout: this._options.timeout,
                                    withCredentials: this._options.withCredentials
                                });
                            case 13:
                                if (200 === (s = t.sent).statusCode) {
                                    t.next = 16;
                                    break
                                }
                                return t.abrupt("return", Promise.reject(new Error("Unexpected status code returned from negotiate '".concat(s.statusCode, "'"))));
                            case 16:
                                return (!(f = JSON.parse(s.content)).negotiateVersion || f.negotiateVersion < 1) && (f.connectionToken = f.connectionId),
                                t.abrupt("return", f);
                            case 21:
                                return t.prev = 21,
                                t.t0 = t.catch(10),
                                l = "Failed to complete negotiation with the server: " + t.t0,
                                t.t0 instanceof v && 404 === t.t0.statusCode && (l += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
                                this._logger.log(C.Error, l),
                                t.abrupt("return", Promise.reject(new w(l)));
                            case 27:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[10, 21]])
                }
                ))),
                function(t) {
                    return r.apply(this, arguments)
                }
                )
            }, {
                key: "_createConnectUrl",
                value: function(t, e) {
                    return e ? t + (-1 === t.indexOf("?") ? "?" : "&") + "id=".concat(e) : t
                }
            }, {
                key: "_createTransport",
                value: (e = _r(mr().mark((function t(e, r, n, o) {
                    var i, a, c, u, s, f, l, h, p;
                    return mr().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (i = this._createConnectUrl(e, n.connectionToken),
                                !this._isITransport(r)) {
                                    t.next = 8;
                                    break
                                }
                                return this._logger.log(C.Debug, "Connection was provided an instance of ITransport, using that directly."),
                                this.transport = r,
                                t.next = 6,
                                this._startTransport(i, o);
                            case 6:
                                return this.connectionId = n.connectionId,
                                t.abrupt("return");
                            case 8:
                                a = [],
                                c = n.availableTransports || [],
                                u = n,
                                s = hr(c),
                                t.prev = 12,
                                s.s();
                            case 14:
                                if ((f = s.n()).done) {
                                    t.next = 53;
                                    break
                                }
                                if (l = f.value,
                                !((h = this._resolveTransportOrError(l, r, o))instanceof Error)) {
                                    t.next = 22;
                                    break
                                }
                                a.push("".concat(l.transport, " failed:")),
                                a.push(h),
                                t.next = 51;
                                break;
                            case 22:
                                if (!this._isITransport(h)) {
                                    t.next = 51;
                                    break
                                }
                                if (this.transport = h,
                                u) {
                                    t.next = 35;
                                    break
                                }
                                return t.prev = 25,
                                t.next = 28,
                                this._getNegotiationResponse(e);
                            case 28:
                                u = t.sent,
                                t.next = 34;
                                break;
                            case 31:
                                return t.prev = 31,
                                t.t0 = t.catch(25),
                                t.abrupt("return", Promise.reject(t.t0));
                            case 34:
                                i = this._createConnectUrl(e, u.connectionToken);
                            case 35:
                                return t.prev = 35,
                                t.next = 38,
                                this._startTransport(i, o);
                            case 38:
                                return this.connectionId = u.connectionId,
                                t.abrupt("return");
                            case 42:
                                if (t.prev = 42,
                                t.t1 = t.catch(35),
                                this._logger.log(C.Error, "Failed to start the transport '".concat(l.transport, "': ").concat(t.t1)),
                                u = void 0,
                                a.push(new m("".concat(l.transport, " failed: ").concat(t.t1),Se[l.transport])),
                                "Connecting" === this._connectionState) {
                                    t.next = 51;
                                    break
                                }
                                return p = "Failed to select transport before stop() was called.",
                                this._logger.log(C.Debug, p),
                                t.abrupt("return", Promise.reject(new Error(p)));
                            case 51:
                                t.next = 14;
                                break;
                            case 53:
                                t.next = 58;
                                break;
                            case 55:
                                t.prev = 55,
                                t.t2 = t.catch(12),
                                s.e(t.t2);
                            case 58:
                                return t.prev = 58,
                                s.f(),
                                t.finish(58);
                            case 61:
                                if (!(a.length > 0)) {
                                    t.next = 63;
                                    break
                                }
                                return t.abrupt("return", Promise.reject(new _("Unable to connect to the server with any of the available transports. ".concat(a.join(" ")),a)));
                            case 63:
                                return t.abrupt("return", Promise.reject(new Error("None of the transports supported by the client are supported by the server.")));
                            case 64:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[12, 55, 58, 61], [25, 31], [35, 42]])
                }
                ))),
                function(t, r, n, o) {
                    return e.apply(this, arguments)
                }
                )
            }, {
                key: "_constructTransport",
                value: function(t) {
                    switch (t) {
                    case Se.WebSockets:
                        if (!this._options.WebSocket)
                            throw new Error("'WebSocket' is not supported in your environment.");
                        return new fr(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers || {});
                    case Se.ServerSentEvents:
                        if (!this._options.EventSource)
                            throw new Error("'EventSource' is not supported in your environment.");
                        return new Ze(this._httpClient,this._accessTokenFactory,this._logger,this._options);
                    case Se.LongPolling:
                        return new We(this._httpClient,this._accessTokenFactory,this._logger,this._options);
                    default:
                        throw new Error("Unknown transport: ".concat(t, "."))
                    }
                }
            }, {
                key: "_startTransport",
                value: function(t, e) {
                    var r = this;
                    return this.transport.onreceive = this.onreceive,
                    this.transport.onclose = function(t) {
                        return r._stopConnection(t)
                    }
                    ,
                    this.transport.connect(t, e)
                }
            }, {
                key: "_resolveTransportOrError",
                value: function(t, e, r) {
                    var n = Se[t.transport];
                    if (null == n)
                        return this._logger.log(C.Debug, "Skipping transport '".concat(t.transport, "' because it is not supported by this client.")),
                        new Error("Skipping transport '".concat(t.transport, "' because it is not supported by this client."));
                    if (!function(t, e) {
                        return !t || 0 != (e & t)
                    }(e, n))
                        return this._logger.log(C.Debug, "Skipping transport '".concat(Se[n], "' because it was disabled by the client.")),
                        new b("'".concat(Se[n], "' is disabled by the client."),n);
                    if (!(t.transferFormats.map((function(t) {
                        return Ee[t]
                    }
                    )).indexOf(r) >= 0))
                        return this._logger.log(C.Debug, "Skipping transport '".concat(Se[n], "' because it does not support the requested transfer format '").concat(Ee[r], "'.")),
                        new Error("'".concat(Se[n], "' does not support ").concat(Ee[r], "."));
                    if (n === Se.WebSockets && !this._options.WebSocket || n === Se.ServerSentEvents && !this._options.EventSource)
                        return this._logger.log(C.Debug, "Skipping transport '".concat(Se[n], "' because it is not supported in your environment.'")),
                        new g("'".concat(Se[n], "' is not supported in your environment."),n);
                    this._logger.log(C.Debug, "Selecting transport '".concat(Se[n], "'."));
                    try {
                        return this._constructTransport(n)
                    } catch (o) {
                        return o
                    }
                }
            }, {
                key: "_isITransport",
                value: function(t) {
                    return t && "object" === lr(t) && "connect"in t
                }
            }, {
                key: "_stopConnection",
                value: function(t) {
                    var e = this;
                    if (this._logger.log(C.Debug, "HttpConnection.stopConnection(".concat(t, ") called while in state ").concat(this._connectionState, ".")),
                    this.transport = void 0,
                    t = this._stopError || t,
                    this._stopError = void 0,
                    "Disconnected" !== this._connectionState) {
                        if ("Connecting" === this._connectionState)
                            throw this._logger.log(C.Warning, "Call to HttpConnection.stopConnection(".concat(t, ") was ignored because the connection is still in the connecting state.")),
                            new Error("HttpConnection.stopConnection(".concat(t, ") was called while the connection is still in the connecting state."));
                        if ("Disconnecting" === this._connectionState && this._stopPromiseResolver(),
                        t ? this._logger.log(C.Error, "Connection disconnected with error '".concat(t, "'.")) : this._logger.log(C.Information, "Connection disconnected."),
                        this._sendQueue && (this._sendQueue.stop().catch((function(t) {
                            e._logger.log(C.Error, "TransportSendQueue.stop() threw error '".concat(t, "'."))
                        }
                        )),
                        this._sendQueue = void 0),
                        this.connectionId = void 0,
                        this._connectionState = "Disconnected",
                        this._connectionStarted) {
                            this._connectionStarted = !1;
                            try {
                                this.onclose && this.onclose(t)
                            } catch (r) {
                                this._logger.log(C.Error, "HttpConnection.onclose(".concat(t, ") threw error '").concat(r, "'."))
                            }
                        }
                    } else
                        this._logger.log(C.Debug, "Call to HttpConnection.stopConnection(".concat(t, ") was ignored because the connection is already in the disconnected state."))
                }
            }, {
                key: "_resolveUrl",
                value: function(t) {
                    if (0 === t.lastIndexOf("https://", 0) || 0 === t.lastIndexOf("http://", 0))
                        return t;
                    if (!X.isBrowser)
                        throw new Error("Cannot resolve '".concat(t, "'."));
                    var e = window.document.createElement("a");
                    return e.href = t,
                    this._logger.log(C.Information, "Normalizing '".concat(t, "' to '").concat(e.href, "'.")),
                    e.href
                }
            }, {
                key: "_resolveNegotiateUrl",
                value: function(t) {
                    var e = t.indexOf("?")
                      , r = t.substring(0, -1 === e ? t.length : e);
                    return "/" !== r[r.length - 1] && (r += "/"),
                    r += "negotiate",
                    -1 === (r += -1 === e ? "" : t.substring(e)).indexOf("negotiateVersion") && (r += -1 === e ? "?" : "&",
                    r += "negotiateVersion=" + this._negotiateVersion),
                    r
                }
            }]),
            t
        }();
        var jr = function() {
            function t(e) {
                xr(this, t),
                this._transport = e,
                this._buffer = [],
                this._executing = !0,
                this._sendBufferedData = new Tr,
                this._transportResult = new Tr,
                this._sendLoopPromise = this._sendLoop()
            }
            var e;
            return Er(t, [{
                key: "send",
                value: function(t) {
                    return this._bufferData(t),
                    this._transportResult || (this._transportResult = new Tr),
                    this._transportResult.promise
                }
            }, {
                key: "stop",
                value: function() {
                    return this._executing = !1,
                    this._sendBufferedData.resolve(),
                    this._sendLoopPromise
                }
            }, {
                key: "_bufferData",
                value: function(t) {
                    if (this._buffer.length && lr(this._buffer[0]) !== lr(t))
                        throw new Error("Expected data to be of type ".concat(lr(this._buffer), " but was of type ").concat(lr(t)));
                    this._buffer.push(t),
                    this._sendBufferedData.resolve()
                }
            }, {
                key: "_sendLoop",
                value: (e = _r(mr().mark((function e() {
                    var r, n;
                    return mr().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 3,
                                this._sendBufferedData.promise;
                            case 3:
                                if (this._executing) {
                                    e.next = 6;
                                    break
                                }
                                return this._transportResult && this._transportResult.reject("Connection stopped."),
                                e.abrupt("break", 22);
                            case 6:
                                return this._sendBufferedData = new Tr,
                                r = this._transportResult,
                                this._transportResult = void 0,
                                n = "string" == typeof this._buffer[0] ? this._buffer.join("") : t._concatBuffers(this._buffer),
                                this._buffer.length = 0,
                                e.prev = 11,
                                e.next = 14,
                                this._transport.send(n);
                            case 14:
                                r.resolve(),
                                e.next = 20;
                                break;
                            case 17:
                                e.prev = 17,
                                e.t0 = e.catch(11),
                                r.reject(e.t0);
                            case 20:
                                e.next = 0;
                                break;
                            case 22:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[11, 17]])
                }
                ))),
                function() {
                    return e.apply(this, arguments)
                }
                )
            }], [{
                key: "_concatBuffers",
                value: function(t) {
                    var e, r = t.map((function(t) {
                        return t.byteLength
                    }
                    )).reduce((function(t, e) {
                        return t + e
                    }
                    )), n = new Uint8Array(r), o = 0, i = hr(t);
                    try {
                        for (i.s(); !(e = i.n()).done; ) {
                            var a = e.value;
                            n.set(new Uint8Array(a), o),
                            o += a.byteLength
                        }
                    } catch (c) {
                        i.e(c)
                    } finally {
                        i.f()
                    }
                    return n.buffer
                }
            }]),
            t
        }()
          , Tr = function() {
            function t() {
                var e = this;
                xr(this, t),
                this.promise = new Promise((function(t, r) {
                    var n;
                    return n = [t, r],
                    e._resolver = n[0],
                    e._rejecter = n[1],
                    n
                }
                ))
            }
            return Er(t, [{
                key: "resolve",
                value: function() {
                    this._resolver()
                }
            }, {
                key: "reject",
                value: function(t) {
                    this._rejecter(t)
                }
            }]),
            t
        }();
        function Pr(t) {
            return Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Pr(t)
        }
        function Cr(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!r) {
                if (Array.isArray(t) || (r = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Ir(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return Ir(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    r && (t = r);
                    var n = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, c = !1;
            return {
                s: function() {
                    r = r.call(t)
                },
                n: function() {
                    var t = r.next();
                    return a = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    i = t
                },
                f: function() {
                    try {
                        a || null == r.return || r.return()
                    } finally {
                        if (c)
                            throw i
                    }
                }
            }
        }
        function Ir(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function Ar(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Lr(n.key), n)
            }
        }
        function Lr(t) {
            var e = function(t, e) {
                if ("object" != Pr(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != Pr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == Pr(e) ? e : String(e)
        }
        var Rr = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.name = "json",
                this.version = 1,
                this.transferFormat = Ee.Text
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "parseMessages",
                value: function(t, e) {
                    if ("string" != typeof t)
                        throw new Error("Invalid input for JSON hub protocol. Expected a string.");
                    if (!t)
                        return [];
                    null === e && (e = D.instance);
                    var r, n = [], o = Cr(Bt.parse(t));
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var i = r.value
                              , a = JSON.parse(i);
                            if ("number" != typeof a.type)
                                throw new Error("Invalid payload.");
                            switch (a.type) {
                            case Yt.Invocation:
                                this._isInvocationMessage(a);
                                break;
                            case Yt.StreamItem:
                                this._isStreamItemMessage(a);
                                break;
                            case Yt.Completion:
                                this._isCompletionMessage(a);
                                break;
                            case Yt.Ping:
                            case Yt.Close:
                                break;
                            default:
                                e.log(C.Information, "Unknown message type '" + a.type + "' ignored.");
                                continue
                            }
                            n.push(a)
                        }
                    } catch (c) {
                        o.e(c)
                    } finally {
                        o.f()
                    }
                    return n
                }
            }, {
                key: "writeMessage",
                value: function(t) {
                    return Bt.write(JSON.stringify(t))
                }
            }, {
                key: "_isInvocationMessage",
                value: function(t) {
                    this._assertNotEmptyString(t.target, "Invalid payload for Invocation message."),
                    void 0 !== t.invocationId && this._assertNotEmptyString(t.invocationId, "Invalid payload for Invocation message.")
                }
            }, {
                key: "_isStreamItemMessage",
                value: function(t) {
                    if (this._assertNotEmptyString(t.invocationId, "Invalid payload for StreamItem message."),
                    void 0 === t.item)
                        throw new Error("Invalid payload for StreamItem message.")
                }
            }, {
                key: "_isCompletionMessage",
                value: function(t) {
                    if (t.result && t.error)
                        throw new Error("Invalid payload for Completion message.");
                    !t.result && t.error && this._assertNotEmptyString(t.error, "Invalid payload for Completion message."),
                    this._assertNotEmptyString(t.invocationId, "Invalid payload for Completion message.")
                }
            }, {
                key: "_assertNotEmptyString",
                value: function(t, e) {
                    if ("string" != typeof t || "" === t)
                        throw new Error(e)
                }
            }]) && Ar(e.prototype, r),
            n && Ar(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }();
        function Nr(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Dr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nr(Object(r), !0).forEach((function(e) {
                    Mr(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Nr(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function Mr(t, e, r) {
            return (e = Hr(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Fr(t) {
            return Fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Fr(t)
        }
        function Ur(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Hr(n.key), n)
            }
        }
        function Hr(t) {
            var e = function(t, e) {
                if ("object" != Fr(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" != Fr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == Fr(e) ? e : String(e)
        }
        var Wr = {
            trace: C.Trace,
            debug: C.Debug,
            info: C.Information,
            information: C.Information,
            warn: C.Warning,
            warning: C.Warning,
            error: C.Error,
            critical: C.Critical,
            none: C.None
        };
        var Gr = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, r, n;
            return e = t,
            (r = [{
                key: "configureLogging",
                value: function(t) {
                    if (J.isRequired(t, "logging"),
                    void 0 !== t.log)
                        this.logger = t;
                    else if ("string" == typeof t) {
                        var e = function(t) {
                            var e = Wr[t.toLowerCase()];
                            if (void 0 !== e)
                                return e;
                            throw new Error("Unknown log level: ".concat(t))
                        }(t);
                        this.logger = new nt(e)
                    } else
                        this.logger = new nt(t);
                    return this
                }
            }, {
                key: "withUrl",
                value: function(t, e) {
                    return J.isRequired(t, "url"),
                    J.isNotEmpty(t, "url"),
                    this.url = t,
                    "object" === Fr(e) ? this.httpConnectionOptions = Dr(Dr({}, this.httpConnectionOptions), e) : this.httpConnectionOptions = Dr(Dr({}, this.httpConnectionOptions), {}, {
                        transport: e
                    }),
                    this
                }
            }, {
                key: "withHubProtocol",
                value: function(t) {
                    return J.isRequired(t, "protocol"),
                    this.protocol = t,
                    this
                }
            }, {
                key: "withAutomaticReconnect",
                value: function(t) {
                    if (this.reconnectPolicy)
                        throw new Error("A reconnectPolicy has already been set.");
                    return t ? Array.isArray(t) ? this.reconnectPolicy = new be(t) : this.reconnectPolicy = t : this.reconnectPolicy = new be,
                    this
                }
            }, {
                key: "build",
                value: function() {
                    var t = this.httpConnectionOptions || {};
                    if (void 0 === t.logger && (t.logger = this.logger),
                    !this.url)
                        throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
                    var e = new kr(this.url,t);
                    return le.create(e, this.logger || D.instance, this.protocol || new Rr, this.reconnectPolicy)
                }
            }]) && Ur(e.prototype, r),
            n && Ur(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t
        }()
    }
    ,
    84898570: (t,e,r)=>{
        var n = r(10364949)
          , o = r(63043927)
          , i = TypeError;
        t.exports = function(t) {
            if (n(t))
                return t;
            throw new i(o(t) + " is not a function")
        }
    }
    ,
    12028924: (t,e,r)=>{
        var n = r(24167053)
          , o = r(63043927)
          , i = TypeError;
        t.exports = function(t) {
            if (n(t))
                return t;
            throw new i(o(t) + " is not a constructor")
        }
    }
    ,
    73473986: (t,e,r)=>{
        var n = r(62559013)
          , o = String
          , i = TypeError;
        t.exports = function(t) {
            if (n(t))
                return t;
            throw new i("Can't set " + o(t) + " as a prototype")
        }
    }
    ,
    17723589: (t,e,r)=>{
        var n = r(47453651)
          , o = r(95731544)
          , i = r(80104465).f
          , a = n("unscopables")
          , c = Array.prototype;
        void 0 === c[a] && i(c, a, {
            configurable: !0,
            value: o(null)
        }),
        t.exports = function(t) {
            c[a][t] = !0
        }
    }
    ,
    19064517: (t,e,r)=>{
        var n = r(48165495).charAt;
        t.exports = function(t, e, r) {
            return e + (r ? n(t, e).length : 1)
        }
    }
    ,
    64214583: (t,e,r)=>{
        var n = r(49182329)
          , o = TypeError;
        t.exports = function(t, e) {
            if (n(e, t))
                return t;
            throw new o("Incorrect invocation")
        }
    }
    ,
    68356135: (t,e,r)=>{
        var n = r(2464994)
          , o = String
          , i = TypeError;
        t.exports = function(t) {
            if (n(t))
                return t;
            throw new i(o(t) + " is not an object")
        }
    }
    ,
    67647827: t=>{
        t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    }
    ,
    41122916: (t,e,r)=>{
        var n = r(74706079);
        t.exports = n((function() {
            if ("function" == typeof ArrayBuffer) {
                var t = new ArrayBuffer(8);
                Object.isExtensible(t) && Object.defineProperty(t, "a", {
                    value: 8
                })
            }
        }
        ))
    }
    ,
    27989908: (t,e,r)=>{
        var n, o, i, a = r(67647827), c = r(1950796), u = r(67602619), s = r(10364949), f = r(2464994), l = r(30715713), h = r(20162267), p = r(63043927), v = r(86364651), y = r(74110088), d = r(20525626), g = r(49182329), b = r(63735811), m = r(76977799), w = r(47453651), _ = r(71894192), x = r(8493549), S = x.enforce, E = x.get, O = u.Int8Array, k = O && O.prototype, j = u.Uint8ClampedArray, T = j && j.prototype, P = O && b(O), C = k && b(k), I = Object.prototype, A = u.TypeError, L = w("toStringTag"), R = _("TYPED_ARRAY_TAG"), N = "TypedArrayConstructor", D = a && !!m && "Opera" !== h(u.opera), M = !1, F = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, U = {
            BigInt64Array: 8,
            BigUint64Array: 8
        }, H = function(t) {
            var e = b(t);
            if (f(e)) {
                var r = E(e);
                return r && l(r, N) ? r[N] : H(e)
            }
        }, W = function(t) {
            if (!f(t))
                return !1;
            var e = h(t);
            return l(F, e) || l(U, e)
        };
        for (n in F)
            (i = (o = u[n]) && o.prototype) ? S(i)[N] = o : D = !1;
        for (n in U)
            (i = (o = u[n]) && o.prototype) && (S(i)[N] = o);
        if ((!D || !s(P) || P === Function.prototype) && (P = function() {
            throw new A("Incorrect invocation")
        }
        ,
        D))
            for (n in F)
                u[n] && m(u[n], P);
        if ((!D || !C || C === I) && (C = P.prototype,
        D))
            for (n in F)
                u[n] && m(u[n].prototype, C);
        if (D && b(T) !== C && m(T, C),
        c && !l(C, L))
            for (n in M = !0,
            d(C, L, {
                configurable: !0,
                get: function() {
                    return f(this) ? this[R] : void 0
                }
            }),
            F)
                u[n] && v(u[n], R, n);
        t.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: D,
            TYPED_ARRAY_TAG: M && R,
            aTypedArray: function(t) {
                if (W(t))
                    return t;
                throw new A("Target is not a typed array")
            },
            aTypedArrayConstructor: function(t) {
                if (s(t) && (!m || g(P, t)))
                    return t;
                throw new A(p(t) + " is not a typed array constructor")
            },
            exportTypedArrayMethod: function(t, e, r, n) {
                if (c) {
                    if (r)
                        for (var o in F) {
                            var i = u[o];
                            if (i && l(i.prototype, t))
                                try {
                                    delete i.prototype[t]
                                } catch (a) {
                                    try {
                                        i.prototype[t] = e
                                    } catch (s) {}
                                }
                        }
                    C[t] && !r || y(C, t, r ? e : D && k[t] || e, n)
                }
            },
            exportTypedArrayStaticMethod: function(t, e, r) {
                var n, o;
                if (c) {
                    if (m) {
                        if (r)
                            for (n in F)
                                if ((o = u[n]) && l(o, t))
                                    try {
                                        delete o[t]
                                    } catch (i) {}
                        if (P[t] && !r)
                            return;
                        try {
                            return y(P, t, r ? e : D && P[t] || e)
                        } catch (i) {}
                    }
                    for (n in F)
                        !(o = u[n]) || o[t] && !r || y(o, t, e)
                }
            },
            getTypedArrayConstructor: H,
            isView: function(t) {
                if (!f(t))
                    return !1;
                var e = h(t);
                return "DataView" === e || l(F, e) || l(U, e)
            },
            isTypedArray: W,
            TypedArray: P,
            TypedArrayPrototype: C
        }
    }
    ,
    98983370: (t,e,r)=>{
        var n = r(67602619)
          , o = r(96740816)
          , i = r(1950796)
          , a = r(67647827)
          , c = r(54584174)
          , u = r(86364651)
          , s = r(20525626)
          , f = r(47927319)
          , l = r(74706079)
          , h = r(64214583)
          , p = r(88727515)
          , v = r(19240510)
          , y = r(12011040)
          , d = r(90326241)
          , g = r(80876682)
          , b = r(63735811)
          , m = r(76977799)
          , w = r(74081077)
          , _ = r(32724544)
          , x = r(37037119)
          , S = r(19257356)
          , E = r(58833279)
          , O = r(8493549)
          , k = c.PROPER
          , j = c.CONFIGURABLE
          , T = "ArrayBuffer"
          , P = "DataView"
          , C = "prototype"
          , I = "Wrong index"
          , A = O.getterFor(T)
          , L = O.getterFor(P)
          , R = O.set
          , N = n[T]
          , D = N
          , M = D && D[C]
          , F = n[P]
          , U = F && F[C]
          , H = Object.prototype
          , W = n.Array
          , G = n.RangeError
          , B = o(w)
          , q = o([].reverse)
          , V = g.pack
          , z = g.unpack
          , Y = function(t) {
            return [255 & t]
        }
          , $ = function(t) {
            return [255 & t, t >> 8 & 255]
        }
          , K = function(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }
          , J = function(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }
          , X = function(t) {
            return V(d(t), 23, 4)
        }
          , Q = function(t) {
            return V(t, 52, 8)
        }
          , Z = function(t, e, r) {
            s(t[C], e, {
                configurable: !0,
                get: function() {
                    return r(this)[e]
                }
            })
        }
          , tt = function(t, e, r, n) {
            var o = L(t)
              , i = y(r)
              , a = !!n;
            if (i + e > o.byteLength)
                throw new G(I);
            var c = o.bytes
              , u = i + o.byteOffset
              , s = _(c, u, u + e);
            return a ? s : q(s)
        }
          , et = function(t, e, r, n, o, i) {
            var a = L(t)
              , c = y(r)
              , u = n(+o)
              , s = !!i;
            if (c + e > a.byteLength)
                throw new G(I);
            for (var f = a.bytes, l = c + a.byteOffset, h = 0; h < e; h++)
                f[l + h] = u[s ? h : e - h - 1]
        };
        if (a) {
            var rt = k && N.name !== T;
            l((function() {
                N(1)
            }
            )) && l((function() {
                new N(-1)
            }
            )) && !l((function() {
                return new N,
                new N(1.5),
                new N(NaN),
                1 !== N.length || rt && !j
            }
            )) ? rt && j && u(N, "name", T) : ((D = function(t) {
                return h(this, M),
                x(new N(y(t)), this, D)
            }
            )[C] = M,
            M.constructor = D,
            S(D, N)),
            m && b(U) !== H && m(U, H);
            var nt = new F(new D(2))
              , ot = o(U.setInt8);
            nt.setInt8(0, 2147483648),
            nt.setInt8(1, 2147483649),
            !nt.getInt8(0) && nt.getInt8(1) || f(U, {
                setInt8: function(t, e) {
                    ot(this, t, e << 24 >> 24)
                },
                setUint8: function(t, e) {
                    ot(this, t, e << 24 >> 24)
                }
            }, {
                unsafe: !0
            })
        } else
            M = (D = function(t) {
                h(this, M);
                var e = y(t);
                R(this, {
                    type: T,
                    bytes: B(W(e), 0),
                    byteLength: e
                }),
                i || (this.byteLength = e,
                this.detached = !1)
            }
            )[C],
            U = (F = function(t, e, r) {
                h(this, U),
                h(t, M);
                var n = A(t)
                  , o = n.byteLength
                  , a = p(e);
                if (a < 0 || a > o)
                    throw new G("Wrong offset");
                if (a + (r = void 0 === r ? o - a : v(r)) > o)
                    throw new G("Wrong length");
                R(this, {
                    type: P,
                    buffer: t,
                    byteLength: r,
                    byteOffset: a,
                    bytes: n.bytes
                }),
                i || (this.buffer = t,
                this.byteLength = r,
                this.byteOffset = a)
            }
            )[C],
            i && (Z(D, "byteLength", A),
            Z(F, "buffer", L),
            Z(F, "byteLength", L),
            Z(F, "byteOffset", L)),
            f(U, {
                getInt8: function(t) {
                    return tt(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function(t) {
                    return tt(this, 1, t)[0]
                },
                getInt16: function(t) {
                    var e = tt(this, 2, t, arguments.length > 1 && arguments[1]);
                    return (e[1] << 8 | e[0]) << 16 >> 16
                },
                getUint16: function(t) {
                    var e = tt(this, 2, t, arguments.length > 1 && arguments[1]);
                    return e[1] << 8 | e[0]
                },
                getInt32: function(t) {
                    return J(tt(this, 4, t, arguments.length > 1 && arguments[1]))
                },
                getUint32: function(t) {
                    return J(tt(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0
                },
                getFloat32: function(t) {
                    return z(tt(this, 4, t, arguments.length > 1 && arguments[1]), 23)
                },
                getFloat64: function(t) {
                    return z(tt(this, 8, t, arguments.length > 1 && arguments[1]), 52)
                },
                setInt8: function(t, e) {
                    et(this, 1, t, Y, e)
                },
                setUint8: function(t, e) {
                    et(this, 1, t, Y, e)
                },
                setInt16: function(t, e) {
                    et(this, 2, t, $, e, arguments.length > 2 && arguments[2])
                },
                setUint16: function(t, e) {
                    et(this, 2, t, $, e, arguments.length > 2 && arguments[2])
                },
                setInt32: function(t, e) {
                    et(this, 4, t, K, e, arguments.length > 2 && arguments[2])
                },
                setUint32: function(t, e) {
                    et(this, 4, t, K, e, arguments.length > 2 && arguments[2])
                },
                setFloat32: function(t, e) {
                    et(this, 4, t, X, e, arguments.length > 2 && arguments[2])
                },
                setFloat64: function(t, e) {
                    et(this, 8, t, Q, e, arguments.length > 2 && arguments[2])
                }
            });
        E(D, T),
        E(F, P),
        t.exports = {
            ArrayBuffer: D,
            DataView: F
        }
    }
    ,
    56343525: (t,e,r)=>{
        var n = r(75212341)
          , o = r(20103162)
          , i = r(28004886)
          , a = r(97861854)
          , c = Math.min;
        t.exports = [].copyWithin || function(t, e) {
            var r = n(this)
              , u = i(r)
              , s = o(t, u)
              , f = o(e, u)
              , l = arguments.length > 2 ? arguments[2] : void 0
              , h = c((void 0 === l ? u : o(l, u)) - f, u - s)
              , p = 1;
            for (f < s && s < f + h && (p = -1,
            f += h - 1,
            s += h - 1); h-- > 0; )
                f in r ? r[s] = r[f] : a(r, s),
                s += p,
                f += p;
            return r
        }
    }
    ,
    74081077: (t,e,r)=>{
        var n = r(75212341)
          , o = r(20103162)
          , i = r(28004886);
        t.exports = function(t) {
            for (var e = n(this), r = i(e), a = arguments.length, c = o(a > 1 ? arguments[1] : void 0, r), u = a > 2 ? arguments[2] : void 0, s = void 0 === u ? r : o(u, r); s > c; )
                e[c++] = t;
            return e
        }
    }
    ,
    25855579: (t,e,r)=>{
        var n = r(95677645).forEach
          , o = r(11626694)("forEach");
        t.exports = o ? [].forEach : function(t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }
    ,
    6790986: (t,e,r)=>{
        var n = r(28004886);
        t.exports = function(t, e, r) {
            for (var o = 0, i = arguments.length > 2 ? r : n(e), a = new t(i); i > o; )
                a[o] = e[o++];
            return a
        }
    }
    ,
    76340892: (t,e,r)=>{
        var n = r(26656592)
          , o = r(82922429)
          , i = r(75212341)
          , a = r(14490847)
          , c = r(45668945)
          , u = r(24167053)
          , s = r(28004886)
          , f = r(21533840)
          , l = r(68331361)
          , h = r(52437571)
          , p = Array;
        t.exports = function(t) {
            var e = i(t)
              , r = u(this)
              , v = arguments.length
              , y = v > 1 ? arguments[1] : void 0
              , d = void 0 !== y;
            d && (y = n(y, v > 2 ? arguments[2] : void 0));
            var g, b, m, w, _, x, S = h(e), E = 0;
            if (!S || this === p && c(S))
                for (g = s(e),
                b = r ? new this(g) : p(g); g > E; E++)
                    x = d ? y(e[E], E) : e[E],
                    f(b, E, x);
            else
                for (_ = (w = l(e, S)).next,
                b = r ? new this : []; !(m = o(_, w)).done; E++)
                    x = d ? a(w, y, [m.value, E], !0) : m.value,
                    f(b, E, x);
            return b.length = E,
            b
        }
    }
    ,
    39918977: (t,e,r)=>{
        var n = r(71227733)
          , o = r(20103162)
          , i = r(28004886)
          , a = function(t) {
            return function(e, r, a) {
                var c, u = n(e), s = i(u), f = o(a, s);
                if (t && r != r) {
                    for (; s > f; )
                        if ((c = u[f++]) != c)
                            return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in u) && u[f] === r)
                            return t || f || 0;
                return !t && -1
            }
        };
        t.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    }
    ,
    63246335: (t,e,r)=>{
        var n = r(26656592)
          , o = r(22366351)
          , i = r(75212341)
          , a = r(28004886)
          , c = function(t) {
            var e = 1 === t;
            return function(r, c, u) {
                for (var s, f = i(r), l = o(f), h = a(l), p = n(c, u); h-- > 0; )
                    if (p(s = l[h], h, f))
                        switch (t) {
                        case 0:
                            return s;
                        case 1:
                            return h
                        }
                return e ? -1 : void 0
            }
        };
        t.exports = {
            findLast: c(0),
            findLastIndex: c(1)
        }
    }
    ,
    95677645: (t,e,r)=>{
        var n = r(26656592)
          , o = r(96740816)
          , i = r(22366351)
          , a = r(75212341)
          , c = r(28004886)
          , u = r(6493661)
          , s = o([].push)
          , f = function(t) {
            var e = 1 === t
              , r = 2 === t
              , o = 3 === t
              , f = 4 === t
              , l = 6 === t
              , h = 7 === t
              , p = 5 === t || l;
            return function(v, y, d, g) {
                for (var b, m, w = a(v), _ = i(w), x = c(_), S = n(y, d), E = 0, O = g || u, k = e ? O(v, x) : r || h ? O(v, 0) : void 0; x > E; E++)
                    if ((p || E in _) && (m = S(b = _[E], E, w),
                    t))
                        if (e)
                            k[E] = m;
                        else if (m)
                            switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return b;
                            case 6:
                                return E;
                            case 2:
                                s(k, b)
                            }
                        else
                            switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                s(k, b)
                            }
                return l ? -1 : o || f ? f : k
            }
        };
        t.exports = {
            forEach: f(0),
            map: f(1),
            filter: f(2),
            some: f(3),
            every: f(4),
            find: f(5),
            findIndex: f(6),
            filterReject: f(7)
        }
    }
    ,
    41473339: (t,e,r)=>{
        var n = r(48700121)
          , o = r(71227733)
          , i = r(88727515)
          , a = r(28004886)
          , c = r(11626694)
          , u = Math.min
          , s = [].lastIndexOf
          , f = !!s && 1 / [1].lastIndexOf(1, -0) < 0
          , l = c("lastIndexOf")
          , h = f || !l;
        t.exports = h ? function(t) {
            if (f)
                return n(s, this, arguments) || 0;
            var e = o(this)
              , r = a(e)
              , c = r - 1;
            for (arguments.length > 1 && (c = u(c, i(arguments[1]))),
            c < 0 && (c = r + c); c >= 0; c--)
                if (c in e && e[c] === t)
                    return c || 0;
            return -1
        }
        : s
    }
    ,
    38952805: (t,e,r)=>{
        var n = r(74706079)
          , o = r(47453651)
          , i = r(60852652)
          , a = o("species");
        t.exports = function(t) {
            return i >= 51 || !n((function() {
                var e = [];
                return (e.constructor = {})[a] = function() {
                    return {
                        foo: 1
                    }
                }
                ,
                1 !== e[t](Boolean).foo
            }
            ))
        }
    }
    ,
    11626694: (t,e,r)=>{
        var n = r(74706079);
        t.exports = function(t, e) {
            var r = [][t];
            return !!r && n((function() {
                r.call(null, e || function() {
                    return 1
                }
                , 1)
            }
            ))
        }
    }
    ,
    12858046: (t,e,r)=>{
        var n = r(84898570)
          , o = r(75212341)
          , i = r(22366351)
          , a = r(28004886)
          , c = TypeError
          , u = function(t) {
            return function(e, r, u, s) {
                var f = o(e)
                  , l = i(f)
                  , h = a(f);
                n(r);
                var p = t ? h - 1 : 0
                  , v = t ? -1 : 1;
                if (u < 2)
                    for (; ; ) {
                        if (p in l) {
                            s = l[p],
                            p += v;
                            break
                        }
                        if (p += v,
                        t ? p < 0 : h <= p)
                            throw new c("Reduce of empty array with no initial value")
                    }
                for (; t ? p >= 0 : h > p; p += v)
                    p in l && (s = r(s, l[p], p, f));
                return s
            }
        };
        t.exports = {
            left: u(!1),
            right: u(!0)
        }
    }
    ,
    37929887: (t,e,r)=>{
        var n = r(1950796)
          , o = r(22527784)
          , i = TypeError
          , a = Object.getOwnPropertyDescriptor
          , c = n && !function() {
            if (void 0 !== this)
                return !0;
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).length = 1
            } catch (t) {
                return t instanceof TypeError
            }
        }();
        t.exports = c ? function(t, e) {
            if (o(t) && !a(t, "length").writable)
                throw new i("Cannot set read only .length");
            return t.length = e
        }
        : function(t, e) {
            return t.length = e
        }
    }
    ,
    32724544: (t,e,r)=>{
        var n = r(96740816);
        t.exports = n([].slice)
    }
    ,
    28637144: (t,e,r)=>{
        var n = r(32724544)
          , o = Math.floor
          , i = function(t, e) {
            var r = t.length;
            if (r < 8)
                for (var a, c, u = 1; u < r; ) {
                    for (c = u,
                    a = t[u]; c && e(t[c - 1], a) > 0; )
                        t[c] = t[--c];
                    c !== u++ && (t[c] = a)
                }
            else
                for (var s = o(r / 2), f = i(n(t, 0, s), e), l = i(n(t, s), e), h = f.length, p = l.length, v = 0, y = 0; v < h || y < p; )
                    t[v + y] = v < h && y < p ? e(f[v], l[y]) <= 0 ? f[v++] : l[y++] : v < h ? f[v++] : l[y++];
            return t
        };
        t.exports = i
    }
    ,
    48234889: (t,e,r)=>{
        var n = r(22527784)
          , o = r(24167053)
          , i = r(2464994)
          , a = r(47453651)("species")
          , c = Array;
        t.exports = function(t) {
            var e;
            return n(t) && (e = t.constructor,
            (o(e) && (e === c || n(e.prototype)) || i(e) && null === (e = e[a])) && (e = void 0)),
            void 0 === e ? c : e
        }
    }
    ,
    6493661: (t,e,r)=>{
        var n = r(48234889);
        t.exports = function(t, e) {
            return new (n(t))(0 === e ? 0 : e)
        }
    }
    ,
    36085948: (t,e,r)=>{
        var n = r(28004886);
        t.exports = function(t, e) {
            for (var r = n(t), o = new e(r), i = 0; i < r; i++)
                o[i] = t[r - i - 1];
            return o
        }
    }
    ,
    901432: (t,e,r)=>{
        var n = r(28004886)
          , o = r(88727515)
          , i = RangeError;
        t.exports = function(t, e, r, a) {
            var c = n(t)
              , u = o(r)
              , s = u < 0 ? c + u : u;
            if (s >= c || s < 0)
                throw new i("Incorrect index");
            for (var f = new e(c), l = 0; l < c; l++)
                f[l] = l === s ? a : t[l];
            return f
        }
    }
    ,
    14490847: (t,e,r)=>{
        var n = r(68356135)
          , o = r(40219075);
        t.exports = function(t, e, r, i) {
            try {
                return i ? e(n(r)[0], r[1]) : e(r)
            } catch (a) {
                o(t, "throw", a)
            }
        }
    }
    ,
    52821356: (t,e,r)=>{
        var n = r(47453651)("iterator")
          , o = !1;
        try {
            var i = 0
              , a = {
                next: function() {
                    return {
                        done: !!i++
                    }
                },
                return: function() {
                    o = !0
                }
            };
            a[n] = function() {
                return this
            }
            ,
            Array.from(a, (function() {
                throw 2
            }
            ))
        } catch (c) {}
        t.exports = function(t, e) {
            try {
                if (!e && !o)
                    return !1
            } catch (c) {
                return !1
            }
            var r = !1;
            try {
                var i = {};
                i[n] = function() {
                    return {
                        next: function() {
                            return {
                                done: r = !0
                            }
                        }
                    }
                }
                ,
                t(i)
            } catch (c) {}
            return r
        }
    }
    ,
    95276096: (t,e,r)=>{
        var n = r(96740816)
          , o = n({}.toString)
          , i = n("".slice);
        t.exports = function(t) {
            return i(o(t), 8, -1)
        }
    }
    ,
    20162267: (t,e,r)=>{
        var n = r(14572076)
          , o = r(10364949)
          , i = r(95276096)
          , a = r(47453651)("toStringTag")
          , c = Object
          , u = "Arguments" === i(function() {
            return arguments
        }());
        t.exports = n ? i : function(t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function(t, e) {
                try {
                    return t[e]
                } catch (r) {}
            }(e = c(t), a)) ? r : u ? i(e) : "Object" === (n = i(e)) && o(e.callee) ? "Arguments" : n
        }
    }
    ,
    10735290: (t,e,r)=>{
        var n = r(95731544)
          , o = r(20525626)
          , i = r(47927319)
          , a = r(26656592)
          , c = r(64214583)
          , u = r(92902421)
          , s = r(61923724)
          , f = r(87837840)
          , l = r(9953601)
          , h = r(25242001)
          , p = r(1950796)
          , v = r(91491227).fastKey
          , y = r(8493549)
          , d = y.set
          , g = y.getterFor;
        t.exports = {
            getConstructor: function(t, e, r, f) {
                var l = t((function(t, o) {
                    c(t, h),
                    d(t, {
                        type: e,
                        index: n(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    p || (t.size = 0),
                    u(o) || s(o, t[f], {
                        that: t,
                        AS_ENTRIES: r
                    })
                }
                ))
                  , h = l.prototype
                  , y = g(e)
                  , b = function(t, e, r) {
                    var n, o, i = y(t), a = m(t, e);
                    return a ? a.value = r : (i.last = a = {
                        index: o = v(e, !0),
                        key: e,
                        value: r,
                        previous: n = i.last,
                        next: void 0,
                        removed: !1
                    },
                    i.first || (i.first = a),
                    n && (n.next = a),
                    p ? i.size++ : t.size++,
                    "F" !== o && (i.index[o] = a)),
                    t
                }
                  , m = function(t, e) {
                    var r, n = y(t), o = v(e);
                    if ("F" !== o)
                        return n.index[o];
                    for (r = n.first; r; r = r.next)
                        if (r.key === e)
                            return r
                };
                return i(h, {
                    clear: function() {
                        for (var t = y(this), e = t.first; e; )
                            e.removed = !0,
                            e.previous && (e.previous = e.previous.next = void 0),
                            e = e.next;
                        t.first = t.last = void 0,
                        t.index = n(null),
                        p ? t.size = 0 : this.size = 0
                    },
                    delete: function(t) {
                        var e = this
                          , r = y(e)
                          , n = m(e, t);
                        if (n) {
                            var o = n.next
                              , i = n.previous;
                            delete r.index[n.index],
                            n.removed = !0,
                            i && (i.next = o),
                            o && (o.previous = i),
                            r.first === n && (r.first = o),
                            r.last === n && (r.last = i),
                            p ? r.size-- : e.size--
                        }
                        return !!n
                    },
                    forEach: function(t) {
                        for (var e, r = y(this), n = a(t, arguments.length > 1 ? arguments[1] : void 0); e = e ? e.next : r.first; )
                            for (n(e.value, e.key, this); e && e.removed; )
                                e = e.previous
                    },
                    has: function(t) {
                        return !!m(this, t)
                    }
                }),
                i(h, r ? {
                    get: function(t) {
                        var e = m(this, t);
                        return e && e.value
                    },
                    set: function(t, e) {
                        return b(this, 0 === t ? 0 : t, e)
                    }
                } : {
                    add: function(t) {
                        return b(this, t = 0 === t ? 0 : t, t)
                    }
                }),
                p && o(h, "size", {
                    configurable: !0,
                    get: function() {
                        return y(this).size
                    }
                }),
                l
            },
            setStrong: function(t, e, r) {
                var n = e + " Iterator"
                  , o = g(e)
                  , i = g(n);
                f(t, e, (function(t, e) {
                    d(this, {
                        type: n,
                        target: t,
                        state: o(t),
                        kind: e,
                        last: void 0
                    })
                }
                ), (function() {
                    for (var t = i(this), e = t.kind, r = t.last; r && r.removed; )
                        r = r.previous;
                    return t.target && (t.last = r = r ? r.next : t.state.first) ? l("keys" === e ? r.key : "values" === e ? r.value : [r.key, r.value], !1) : (t.target = void 0,
                    l(void 0, !0))
                }
                ), r ? "entries" : "values", !r, !0),
                h(e)
            }
        }
    }
    ,
    86816500: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619)
          , i = r(96740816)
          , a = r(85732412)
          , c = r(74110088)
          , u = r(91491227)
          , s = r(61923724)
          , f = r(64214583)
          , l = r(10364949)
          , h = r(92902421)
          , p = r(2464994)
          , v = r(74706079)
          , y = r(52821356)
          , d = r(58833279)
          , g = r(37037119);
        t.exports = function(t, e, r) {
            var b = -1 !== t.indexOf("Map")
              , m = -1 !== t.indexOf("Weak")
              , w = b ? "set" : "add"
              , _ = o[t]
              , x = _ && _.prototype
              , S = _
              , E = {}
              , O = function(t) {
                var e = i(x[t]);
                c(x, t, "add" === t ? function(t) {
                    return e(this, 0 === t ? 0 : t),
                    this
                }
                : "delete" === t ? function(t) {
                    return !(m && !p(t)) && e(this, 0 === t ? 0 : t)
                }
                : "get" === t ? function(t) {
                    return m && !p(t) ? void 0 : e(this, 0 === t ? 0 : t)
                }
                : "has" === t ? function(t) {
                    return !(m && !p(t)) && e(this, 0 === t ? 0 : t)
                }
                : function(t, r) {
                    return e(this, 0 === t ? 0 : t, r),
                    this
                }
                )
            };
            if (a(t, !l(_) || !(m || x.forEach && !v((function() {
                (new _).entries().next()
            }
            )))))
                S = r.getConstructor(e, t, b, w),
                u.enable();
            else if (a(t, !0)) {
                var k = new S
                  , j = k[w](m ? {} : -0, 1) !== k
                  , T = v((function() {
                    k.has(1)
                }
                ))
                  , P = y((function(t) {
                    new _(t)
                }
                ))
                  , C = !m && v((function() {
                    for (var t = new _, e = 5; e--; )
                        t[w](e, e);
                    return !t.has(-0)
                }
                ));
                P || ((S = e((function(t, e) {
                    f(t, x);
                    var r = g(new _, t, S);
                    return h(e) || s(e, r[w], {
                        that: r,
                        AS_ENTRIES: b
                    }),
                    r
                }
                ))).prototype = x,
                x.constructor = S),
                (T || C) && (O("delete"),
                O("has"),
                b && O("get")),
                (C || j) && O(w),
                m && x.clear && delete x.clear
            }
            return E[t] = S,
            n({
                global: !0,
                constructor: !0,
                forced: S !== _
            }, E),
            d(S, t),
            m || r.setStrong(S, t, b),
            S
        }
    }
    ,
    19257356: (t,e,r)=>{
        var n = r(30715713)
          , o = r(82597271)
          , i = r(10047171)
          , a = r(80104465);
        t.exports = function(t, e, r) {
            for (var c = o(e), u = a.f, s = i.f, f = 0; f < c.length; f++) {
                var l = c[f];
                n(t, l) || r && n(r, l) || u(t, l, s(e, l))
            }
        }
    }
    ,
    29954867: (t,e,r)=>{
        var n = r(74706079);
        t.exports = !n((function() {
            function t() {}
            return t.prototype.constructor = null,
            Object.getPrototypeOf(new t) !== t.prototype
        }
        ))
    }
    ,
    9953601: t=>{
        t.exports = function(t, e) {
            return {
                value: t,
                done: e
            }
        }
    }
    ,
    86364651: (t,e,r)=>{
        var n = r(1950796)
          , o = r(80104465)
          , i = r(80006884);
        t.exports = n ? function(t, e, r) {
            return o.f(t, e, i(1, r))
        }
        : function(t, e, r) {
            return t[e] = r,
            t
        }
    }
    ,
    80006884: t=>{
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }
    ,
    21533840: (t,e,r)=>{
        var n = r(44912489)
          , o = r(80104465)
          , i = r(80006884);
        t.exports = function(t, e, r) {
            var a = n(e);
            a in t ? o.f(t, a, i(0, r)) : t[a] = r
        }
    }
    ,
    16470632: (t,e,r)=>{
        var n = r(68356135)
          , o = r(44002542)
          , i = TypeError;
        t.exports = function(t) {
            if (n(this),
            "string" === t || "default" === t)
                t = "string";
            else if ("number" !== t)
                throw new i("Incorrect hint");
            return o(this, t)
        }
    }
    ,
    20525626: (t,e,r)=>{
        var n = r(66955883)
          , o = r(80104465);
        t.exports = function(t, e, r) {
            return r.get && n(r.get, e, {
                getter: !0
            }),
            r.set && n(r.set, e, {
                setter: !0
            }),
            o.f(t, e, r)
        }
    }
    ,
    74110088: (t,e,r)=>{
        var n = r(10364949)
          , o = r(80104465)
          , i = r(66955883)
          , a = r(64166345);
        t.exports = function(t, e, r, c) {
            c || (c = {});
            var u = c.enumerable
              , s = void 0 !== c.name ? c.name : e;
            if (n(r) && i(r, s, c),
            c.global)
                u ? t[e] = r : a(e, r);
            else {
                try {
                    c.unsafe ? t[e] && (u = !0) : delete t[e]
                } catch (f) {}
                u ? t[e] = r : o.f(t, e, {
                    value: r,
                    enumerable: !1,
                    configurable: !c.nonConfigurable,
                    writable: !c.nonWritable
                })
            }
            return t
        }
    }
    ,
    47927319: (t,e,r)=>{
        var n = r(74110088);
        t.exports = function(t, e, r) {
            for (var o in e)
                n(t, o, e[o], r);
            return t
        }
    }
    ,
    64166345: (t,e,r)=>{
        var n = r(67602619)
          , o = Object.defineProperty;
        t.exports = function(t, e) {
            try {
                o(n, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch (r) {
                n[t] = e
            }
            return e
        }
    }
    ,
    97861854: (t,e,r)=>{
        var n = r(63043927)
          , o = TypeError;
        t.exports = function(t, e) {
            if (!delete t[e])
                throw new o("Cannot delete property " + n(e) + " of " + n(t))
        }
    }
    ,
    1950796: (t,e,r)=>{
        var n = r(74706079);
        t.exports = !n((function() {
            return 7 !== Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    ,
    16235095: (t,e,r)=>{
        var n = r(67602619)
          , o = r(2464994)
          , i = n.document
          , a = o(i) && o(i.createElement);
        t.exports = function(t) {
            return a ? i.createElement(t) : {}
        }
    }
    ,
    31631173: t=>{
        var e = TypeError;
        t.exports = function(t) {
            if (t > 9007199254740991)
                throw e("Maximum allowed index exceeded");
            return t
        }
    }
    ,
    85377256: t=>{
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }
    ,
    81278240: (t,e,r)=>{
        var n = r(16235095)("span").classList
          , o = n && n.constructor && n.constructor.prototype;
        t.exports = o === Object.prototype ? void 0 : o
    }
    ,
    62465378: (t,e,r)=>{
        var n = r(16653408).match(/firefox\/(\d+)/i);
        t.exports = !!n && +n[1]
    }
    ,
    30185530: (t,e,r)=>{
        var n = r(25425140)
          , o = r(83967216);
        t.exports = !n && !o && "object" == typeof window && "object" == typeof document
    }
    ,
    25425140: t=>{
        t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
    }
    ,
    89728258: (t,e,r)=>{
        var n = r(16653408);
        t.exports = /MSIE|Trident/.test(n)
    }
    ,
    7185244: (t,e,r)=>{
        var n = r(16653408);
        t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble
    }
    ,
    90377399: (t,e,r)=>{
        var n = r(16653408);
        t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
    }
    ,
    83967216: (t,e,r)=>{
        var n = r(67602619)
          , o = r(95276096);
        t.exports = "process" === o(n.process)
    }
    ,
    12567805: (t,e,r)=>{
        var n = r(16653408);
        t.exports = /web0s(?!.*chrome)/i.test(n)
    }
    ,
    16653408: t=>{
        t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    }
    ,
    60852652: (t,e,r)=>{
        var n, o, i = r(67602619), a = r(16653408), c = i.process, u = i.Deno, s = c && c.versions || u && u.version, f = s && s.v8;
        f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
        !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]),
        t.exports = o
    }
    ,
    64467752: (t,e,r)=>{
        var n = r(16653408).match(/AppleWebKit\/(\d+)\./);
        t.exports = !!n && +n[1]
    }
    ,
    97306391: t=>{
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    ,
    74049633: (t,e,r)=>{
        var n = r(96740816)
          , o = Error
          , i = n("".replace)
          , a = String(new o("zxcasd").stack)
          , c = /\n\s*at [^:]*:[^\n]*/
          , u = c.test(a);
        t.exports = function(t, e) {
            if (u && "string" == typeof t && !o.prepareStackTrace)
                for (; e--; )
                    t = i(t, c, "");
            return t
        }
    }
    ,
    95292139: (t,e,r)=>{
        var n = r(86364651)
          , o = r(74049633)
          , i = r(22795507)
          , a = Error.captureStackTrace;
        t.exports = function(t, e, r, c) {
            i && (a ? a(t, e) : n(t, "stack", o(r, c)))
        }
    }
    ,
    22795507: (t,e,r)=>{
        var n = r(74706079)
          , o = r(80006884);
        t.exports = !n((function() {
            var t = new Error("a");
            return !("stack"in t) || (Object.defineProperty(t, "stack", o(1, 7)),
            7 !== t.stack)
        }
        ))
    }
    ,
    21748886: (t,e,r)=>{
        var n = r(67602619)
          , o = r(10047171).f
          , i = r(86364651)
          , a = r(74110088)
          , c = r(64166345)
          , u = r(19257356)
          , s = r(85732412);
        t.exports = function(t, e) {
            var r, f, l, h, p, v = t.target, y = t.global, d = t.stat;
            if (r = y ? n : d ? n[v] || c(v, {}) : n[v] && n[v].prototype)
                for (f in e) {
                    if (h = e[f],
                    l = t.dontCallGetSet ? (p = o(r, f)) && p.value : r[f],
                    !s(y ? f : v + (d ? "." : "#") + f, t.forced) && void 0 !== l) {
                        if (typeof h == typeof l)
                            continue;
                        u(h, l)
                    }
                    (t.sham || l && l.sham) && i(h, "sham", !0),
                    a(r, f, h, t)
                }
        }
    }
    ,
    74706079: t=>{
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    }
    ,
    68961036: (t,e,r)=>{
        r(12329223);
        var n = r(82922429)
          , o = r(74110088)
          , i = r(39830955)
          , a = r(74706079)
          , c = r(47453651)
          , u = r(86364651)
          , s = c("species")
          , f = RegExp.prototype;
        t.exports = function(t, e, r, l) {
            var h = c(t)
              , p = !a((function() {
                var e = {};
                return e[h] = function() {
                    return 7
                }
                ,
                7 !== ""[t](e)
            }
            ))
              , v = p && !a((function() {
                var e = !1
                  , r = /a/;
                return "split" === t && ((r = {}).constructor = {},
                r.constructor[s] = function() {
                    return r
                }
                ,
                r.flags = "",
                r[h] = /./[h]),
                r.exec = function() {
                    return e = !0,
                    null
                }
                ,
                r[h](""),
                !e
            }
            ));
            if (!p || !v || r) {
                var y = /./[h]
                  , d = e(h, ""[t], (function(t, e, r, o, a) {
                    var c = e.exec;
                    return c === i || c === f.exec ? p && !a ? {
                        done: !0,
                        value: n(y, e, r, o)
                    } : {
                        done: !0,
                        value: n(t, r, e, o)
                    } : {
                        done: !1
                    }
                }
                ));
                o(String.prototype, t, d[0]),
                o(f, h, d[1])
            }
            l && u(f[h], "sham", !0)
        }
    }
    ,
    28873256: (t,e,r)=>{
        var n = r(74706079);
        t.exports = !n((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }
        ))
    }
    ,
    48700121: (t,e,r)=>{
        var n = r(31199016)
          , o = Function.prototype
          , i = o.apply
          , a = o.call;
        t.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function() {
            return a.apply(i, arguments)
        }
        )
    }
    ,
    26656592: (t,e,r)=>{
        var n = r(18014516)
          , o = r(84898570)
          , i = r(31199016)
          , a = n(n.bind);
        t.exports = function(t, e) {
            return o(t),
            void 0 === e ? t : i ? a(t, e) : function() {
                return t.apply(e, arguments)
            }
        }
    }
    ,
    31199016: (t,e,r)=>{
        var n = r(74706079);
        t.exports = !n((function() {
            var t = function() {}
            .bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        }
        ))
    }
    ,
    40209318: (t,e,r)=>{
        var n = r(96740816)
          , o = r(84898570)
          , i = r(2464994)
          , a = r(30715713)
          , c = r(32724544)
          , u = r(31199016)
          , s = Function
          , f = n([].concat)
          , l = n([].join)
          , h = {};
        t.exports = u ? s.bind : function(t) {
            var e = o(this)
              , r = e.prototype
              , n = c(arguments, 1)
              , u = function() {
                var r = f(n, c(arguments));
                return this instanceof u ? function(t, e, r) {
                    if (!a(h, e)) {
                        for (var n = [], o = 0; o < e; o++)
                            n[o] = "a[" + o + "]";
                        h[e] = s("C,a", "return new C(" + l(n, ",") + ")")
                    }
                    return h[e](t, r)
                }(e, r.length, r) : e.apply(t, r)
            };
            return i(r) && (u.prototype = r),
            u
        }
    }
    ,
    82922429: (t,e,r)=>{
        var n = r(31199016)
          , o = Function.prototype.call;
        t.exports = n ? o.bind(o) : function() {
            return o.apply(o, arguments)
        }
    }
    ,
    54584174: (t,e,r)=>{
        var n = r(1950796)
          , o = r(30715713)
          , i = Function.prototype
          , a = n && Object.getOwnPropertyDescriptor
          , c = o(i, "name")
          , u = c && "something" === function() {}
        .name
          , s = c && (!n || n && a(i, "name").configurable);
        t.exports = {
            EXISTS: c,
            PROPER: u,
            CONFIGURABLE: s
        }
    }
    ,
    75171794: (t,e,r)=>{
        var n = r(96740816)
          , o = r(84898570);
        t.exports = function(t, e, r) {
            try {
                return n(o(Object.getOwnPropertyDescriptor(t, e)[r]))
            } catch (i) {}
        }
    }
    ,
    18014516: (t,e,r)=>{
        var n = r(95276096)
          , o = r(96740816);
        t.exports = function(t) {
            if ("Function" === n(t))
                return o(t)
        }
    }
    ,
    96740816: (t,e,r)=>{
        var n = r(31199016)
          , o = Function.prototype
          , i = o.call
          , a = n && o.bind.bind(i, i);
        t.exports = n ? a : function(t) {
            return function() {
                return i.apply(t, arguments)
            }
        }
    }
    ,
    15672695: (t,e,r)=>{
        var n = r(67602619)
          , o = r(10364949);
        t.exports = function(t, e) {
            return arguments.length < 2 ? (r = n[t],
            o(r) ? r : void 0) : n[t] && n[t][e];
            var r
        }
    }
    ,
    52437571: (t,e,r)=>{
        var n = r(20162267)
          , o = r(11109982)
          , i = r(92902421)
          , a = r(20677917)
          , c = r(47453651)("iterator");
        t.exports = function(t) {
            if (!i(t))
                return o(t, c) || o(t, "@@iterator") || a[n(t)]
        }
    }
    ,
    68331361: (t,e,r)=>{
        var n = r(82922429)
          , o = r(84898570)
          , i = r(68356135)
          , a = r(63043927)
          , c = r(52437571)
          , u = TypeError;
        t.exports = function(t, e) {
            var r = arguments.length < 2 ? c(t) : e;
            if (o(r))
                return i(n(r, t));
            throw new u(a(t) + " is not iterable")
        }
    }
    ,
    82901429: (t,e,r)=>{
        var n = r(96740816)
          , o = r(22527784)
          , i = r(10364949)
          , a = r(95276096)
          , c = r(67844943)
          , u = n([].push);
        t.exports = function(t) {
            if (i(t))
                return t;
            if (o(t)) {
                for (var e = t.length, r = [], n = 0; n < e; n++) {
                    var s = t[n];
                    "string" == typeof s ? u(r, s) : "number" != typeof s && "Number" !== a(s) && "String" !== a(s) || u(r, c(s))
                }
                var f = r.length
                  , l = !0;
                return function(t, e) {
                    if (l)
                        return l = !1,
                        e;
                    if (o(this))
                        return e;
                    for (var n = 0; n < f; n++)
                        if (r[n] === t)
                            return e
                }
            }
        }
    }
    ,
    11109982: (t,e,r)=>{
        var n = r(84898570)
          , o = r(92902421);
        t.exports = function(t, e) {
            var r = t[e];
            return o(r) ? void 0 : n(r)
        }
    }
    ,
    32030190: (t,e,r)=>{
        var n = r(96740816)
          , o = r(75212341)
          , i = Math.floor
          , a = n("".charAt)
          , c = n("".replace)
          , u = n("".slice)
          , s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
          , f = /\$([$&'`]|\d{1,2})/g;
        t.exports = function(t, e, r, n, l, h) {
            var p = r + t.length
              , v = n.length
              , y = f;
            return void 0 !== l && (l = o(l),
            y = s),
            c(h, y, (function(o, c) {
                var s;
                switch (a(c, 0)) {
                case "$":
                    return "$";
                case "&":
                    return t;
                case "`":
                    return u(e, 0, r);
                case "'":
                    return u(e, p);
                case "<":
                    s = l[u(c, 1, -1)];
                    break;
                default:
                    var f = +c;
                    if (0 === f)
                        return o;
                    if (f > v) {
                        var h = i(f / 10);
                        return 0 === h ? o : h <= v ? void 0 === n[h - 1] ? a(c, 1) : n[h - 1] + a(c, 1) : o
                    }
                    s = n[f - 1]
                }
                return void 0 === s ? "" : s
            }
            ))
        }
    }
    ,
    67602619: function(t, e, r) {
        var n = function(t) {
            return t && t.Math === Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || n("object" == typeof this && this) || function() {
            return this
        }() || Function("return this")()
    },
    30715713: (t,e,r)=>{
        var n = r(96740816)
          , o = r(75212341)
          , i = n({}.hasOwnProperty);
        t.exports = Object.hasOwn || function(t, e) {
            return i(o(t), e)
        }
    }
    ,
    17171509: t=>{
        t.exports = {}
    }
    ,
    31112677: t=>{
        t.exports = function(t, e) {}
    }
    ,
    52287117: (t,e,r)=>{
        var n = r(15672695);
        t.exports = n("document", "documentElement")
    }
    ,
    15982061: (t,e,r)=>{
        var n = r(1950796)
          , o = r(74706079)
          , i = r(16235095);
        t.exports = !n && !o((function() {
            return 7 !== Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    ,
    80876682: t=>{
        var e = Array
          , r = Math.abs
          , n = Math.pow
          , o = Math.floor
          , i = Math.log
          , a = Math.LN2;
        t.exports = {
            pack: function(t, c, u) {
                var s, f, l, h = e(u), p = 8 * u - c - 1, v = (1 << p) - 1, y = v >> 1, d = 23 === c ? n(2, -24) - n(2, -77) : 0, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0, b = 0;
                for ((t = r(t)) != t || t === 1 / 0 ? (f = t != t ? 1 : 0,
                s = v) : (s = o(i(t) / a),
                t * (l = n(2, -s)) < 1 && (s--,
                l *= 2),
                (t += s + y >= 1 ? d / l : d * n(2, 1 - y)) * l >= 2 && (s++,
                l /= 2),
                s + y >= v ? (f = 0,
                s = v) : s + y >= 1 ? (f = (t * l - 1) * n(2, c),
                s += y) : (f = t * n(2, y - 1) * n(2, c),
                s = 0)); c >= 8; )
                    h[b++] = 255 & f,
                    f /= 256,
                    c -= 8;
                for (s = s << c | f,
                p += c; p > 0; )
                    h[b++] = 255 & s,
                    s /= 256,
                    p -= 8;
                return h[--b] |= 128 * g,
                h
            },
            unpack: function(t, e) {
                var r, o = t.length, i = 8 * o - e - 1, a = (1 << i) - 1, c = a >> 1, u = i - 7, s = o - 1, f = t[s--], l = 127 & f;
                for (f >>= 7; u > 0; )
                    l = 256 * l + t[s--],
                    u -= 8;
                for (r = l & (1 << -u) - 1,
                l >>= -u,
                u += e; u > 0; )
                    r = 256 * r + t[s--],
                    u -= 8;
                if (0 === l)
                    l = 1 - c;
                else {
                    if (l === a)
                        return r ? NaN : f ? -1 / 0 : 1 / 0;
                    r += n(2, e),
                    l -= c
                }
                return (f ? -1 : 1) * r * n(2, l - e)
            }
        }
    }
    ,
    22366351: (t,e,r)=>{
        var n = r(96740816)
          , o = r(74706079)
          , i = r(95276096)
          , a = Object
          , c = n("".split);
        t.exports = o((function() {
            return !a("z").propertyIsEnumerable(0)
        }
        )) ? function(t) {
            return "String" === i(t) ? c(t, "") : a(t)
        }
        : a
    }
    ,
    37037119: (t,e,r)=>{
        var n = r(10364949)
          , o = r(2464994)
          , i = r(76977799);
        t.exports = function(t, e, r) {
            var a, c;
            return i && n(a = e.constructor) && a !== r && o(c = a.prototype) && c !== r.prototype && i(t, c),
            t
        }
    }
    ,
    22301418: (t,e,r)=>{
        var n = r(96740816)
          , o = r(10364949)
          , i = r(63505021)
          , a = n(Function.toString);
        o(i.inspectSource) || (i.inspectSource = function(t) {
            return a(t)
        }
        ),
        t.exports = i.inspectSource
    }
    ,
    1691216: (t,e,r)=>{
        var n = r(2464994)
          , o = r(86364651);
        t.exports = function(t, e) {
            n(e) && "cause"in e && o(t, "cause", e.cause)
        }
    }
    ,
    91491227: (t,e,r)=>{
        var n = r(21748886)
          , o = r(96740816)
          , i = r(17171509)
          , a = r(2464994)
          , c = r(30715713)
          , u = r(80104465).f
          , s = r(65715312)
          , f = r(64185914)
          , l = r(91672588)
          , h = r(71894192)
          , p = r(28873256)
          , v = !1
          , y = h("meta")
          , d = 0
          , g = function(t) {
            u(t, y, {
                value: {
                    objectID: "O" + d++,
                    weakData: {}
                }
            })
        }
          , b = t.exports = {
            enable: function() {
                b.enable = function() {}
                ,
                v = !0;
                var t = s.f
                  , e = o([].splice)
                  , r = {};
                r[y] = 1,
                t(r).length && (s.f = function(r) {
                    for (var n = t(r), o = 0, i = n.length; o < i; o++)
                        if (n[o] === y) {
                            e(n, o, 1);
                            break
                        }
                    return n
                }
                ,
                n({
                    target: "Object",
                    stat: !0,
                    forced: !0
                }, {
                    getOwnPropertyNames: f.f
                }))
            },
            fastKey: function(t, e) {
                if (!a(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!c(t, y)) {
                    if (!l(t))
                        return "F";
                    if (!e)
                        return "E";
                    g(t)
                }
                return t[y].objectID
            },
            getWeakData: function(t, e) {
                if (!c(t, y)) {
                    if (!l(t))
                        return !0;
                    if (!e)
                        return !1;
                    g(t)
                }
                return t[y].weakData
            },
            onFreeze: function(t) {
                return p && v && l(t) && !c(t, y) && g(t),
                t
            }
        };
        i[y] = !0
    }
    ,
    8493549: (t,e,r)=>{
        var n, o, i, a = r(71815358), c = r(67602619), u = r(2464994), s = r(86364651), f = r(30715713), l = r(63505021), h = r(4378119), p = r(17171509), v = "Object already initialized", y = c.TypeError, d = c.WeakMap;
        if (a || l.state) {
            var g = l.state || (l.state = new d);
            g.get = g.get,
            g.has = g.has,
            g.set = g.set,
            n = function(t, e) {
                if (g.has(t))
                    throw new y(v);
                return e.facade = t,
                g.set(t, e),
                e
            }
            ,
            o = function(t) {
                return g.get(t) || {}
            }
            ,
            i = function(t) {
                return g.has(t)
            }
        } else {
            var b = h("state");
            p[b] = !0,
            n = function(t, e) {
                if (f(t, b))
                    throw new y(v);
                return e.facade = t,
                s(t, b, e),
                e
            }
            ,
            o = function(t) {
                return f(t, b) ? t[b] : {}
            }
            ,
            i = function(t) {
                return f(t, b)
            }
        }
        t.exports = {
            set: n,
            get: o,
            has: i,
            enforce: function(t) {
                return i(t) ? o(t) : n(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!u(e) || (r = o(e)).type !== t)
                        throw new y("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        }
    }
    ,
    45668945: (t,e,r)=>{
        var n = r(47453651)
          , o = r(20677917)
          , i = n("iterator")
          , a = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (o.Array === t || a[i] === t)
        }
    }
    ,
    22527784: (t,e,r)=>{
        var n = r(95276096);
        t.exports = Array.isArray || function(t) {
            return "Array" === n(t)
        }
    }
    ,
    40139047: (t,e,r)=>{
        var n = r(20162267);
        t.exports = function(t) {
            var e = n(t);
            return "BigInt64Array" === e || "BigUint64Array" === e
        }
    }
    ,
    10364949: t=>{
        var e = "object" == typeof document && document.all;
        t.exports = void 0 === e && void 0 !== e ? function(t) {
            return "function" == typeof t || t === e
        }
        : function(t) {
            return "function" == typeof t
        }
    }
    ,
    24167053: (t,e,r)=>{
        var n = r(96740816)
          , o = r(74706079)
          , i = r(10364949)
          , a = r(20162267)
          , c = r(15672695)
          , u = r(22301418)
          , s = function() {}
          , f = c("Reflect", "construct")
          , l = /^\s*(?:class|function)\b/
          , h = n(l.exec)
          , p = !l.test(s)
          , v = function(t) {
            if (!i(t))
                return !1;
            try {
                return f(s, [], t),
                !0
            } catch (e) {
                return !1
            }
        }
          , y = function(t) {
            if (!i(t))
                return !1;
            switch (a(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
            }
            try {
                return p || !!h(l, u(t))
            } catch (e) {
                return !0
            }
        };
        y.sham = !0,
        t.exports = !f || o((function() {
            var t;
            return v(v.call) || !v(Object) || !v((function() {
                t = !0
            }
            )) || t
        }
        )) ? y : v
    }
    ,
    85732412: (t,e,r)=>{
        var n = r(74706079)
          , o = r(10364949)
          , i = /#|\.prototype\./
          , a = function(t, e) {
            var r = u[c(t)];
            return r === f || r !== s && (o(e) ? n(e) : !!e)
        }
          , c = a.normalize = function(t) {
            return String(t).replace(i, ".").toLowerCase()
        }
          , u = a.data = {}
          , s = a.NATIVE = "N"
          , f = a.POLYFILL = "P";
        t.exports = a
    }
    ,
    20372679: (t,e,r)=>{
        var n = r(2464994)
          , o = Math.floor;
        t.exports = Number.isInteger || function(t) {
            return !n(t) && isFinite(t) && o(t) === t
        }
    }
    ,
    92902421: t=>{
        t.exports = function(t) {
            return null == t
        }
    }
    ,
    2464994: (t,e,r)=>{
        var n = r(10364949);
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : n(t)
        }
    }
    ,
    62559013: (t,e,r)=>{
        var n = r(2464994);
        t.exports = function(t) {
            return n(t) || null === t
        }
    }
    ,
    8853163: t=>{
        t.exports = !1
    }
    ,
    20603493: (t,e,r)=>{
        var n = r(15672695)
          , o = r(10364949)
          , i = r(49182329)
          , a = r(45277440)
          , c = Object;
        t.exports = a ? function(t) {
            return "symbol" == typeof t
        }
        : function(t) {
            var e = n("Symbol");
            return o(e) && i(e.prototype, c(t))
        }
    }
    ,
    61923724: (t,e,r)=>{
        var n = r(26656592)
          , o = r(82922429)
          , i = r(68356135)
          , a = r(63043927)
          , c = r(45668945)
          , u = r(28004886)
          , s = r(49182329)
          , f = r(68331361)
          , l = r(52437571)
          , h = r(40219075)
          , p = TypeError
          , v = function(t, e) {
            this.stopped = t,
            this.result = e
        }
          , y = v.prototype;
        t.exports = function(t, e, r) {
            var d, g, b, m, w, _, x, S = r && r.that, E = !(!r || !r.AS_ENTRIES), O = !(!r || !r.IS_RECORD), k = !(!r || !r.IS_ITERATOR), j = !(!r || !r.INTERRUPTED), T = n(e, S), P = function(t) {
                return d && h(d, "normal", t),
                new v(!0,t)
            }, C = function(t) {
                return E ? (i(t),
                j ? T(t[0], t[1], P) : T(t[0], t[1])) : j ? T(t, P) : T(t)
            };
            if (O)
                d = t.iterator;
            else if (k)
                d = t;
            else {
                if (!(g = l(t)))
                    throw new p(a(t) + " is not iterable");
                if (c(g)) {
                    for (b = 0,
                    m = u(t); m > b; b++)
                        if ((w = C(t[b])) && s(y, w))
                            return w;
                    return new v(!1)
                }
                d = f(t, g)
            }
            for (_ = O ? t.next : d.next; !(x = o(_, d)).done; ) {
                try {
                    w = C(x.value)
                } catch (I) {
                    h(d, "throw", I)
                }
                if ("object" == typeof w && w && s(y, w))
                    return w
            }
            return new v(!1)
        }
    }
    ,
    40219075: (t,e,r)=>{
        var n = r(82922429)
          , o = r(68356135)
          , i = r(11109982);
        t.exports = function(t, e, r) {
            var a, c;
            o(t);
            try {
                if (!(a = i(t, "return"))) {
                    if ("throw" === e)
                        throw r;
                    return r
                }
                a = n(a, t)
            } catch (u) {
                c = !0,
                a = u
            }
            if ("throw" === e)
                throw r;
            if (c)
                throw a;
            return o(a),
            r
        }
    }
    ,
    42561258: (t,e,r)=>{
        var n = r(57516857).IteratorPrototype
          , o = r(95731544)
          , i = r(80006884)
          , a = r(58833279)
          , c = r(20677917)
          , u = function() {
            return this
        };
        t.exports = function(t, e, r, s) {
            var f = e + " Iterator";
            return t.prototype = o(n, {
                next: i(+!s, r)
            }),
            a(t, f, !1, !0),
            c[f] = u,
            t
        }
    }
    ,
    87837840: (t,e,r)=>{
        var n = r(21748886)
          , o = r(82922429)
          , i = r(8853163)
          , a = r(54584174)
          , c = r(10364949)
          , u = r(42561258)
          , s = r(63735811)
          , f = r(76977799)
          , l = r(58833279)
          , h = r(86364651)
          , p = r(74110088)
          , v = r(47453651)
          , y = r(20677917)
          , d = r(57516857)
          , g = a.PROPER
          , b = a.CONFIGURABLE
          , m = d.IteratorPrototype
          , w = d.BUGGY_SAFARI_ITERATORS
          , _ = v("iterator")
          , x = "keys"
          , S = "values"
          , E = "entries"
          , O = function() {
            return this
        };
        t.exports = function(t, e, r, a, v, d, k) {
            u(r, e, a);
            var j, T, P, C = function(t) {
                if (t === v && N)
                    return N;
                if (!w && t && t in L)
                    return L[t];
                switch (t) {
                case x:
                case S:
                case E:
                    return function() {
                        return new r(this,t)
                    }
                }
                return function() {
                    return new r(this)
                }
            }, I = e + " Iterator", A = !1, L = t.prototype, R = L[_] || L["@@iterator"] || v && L[v], N = !w && R || C(v), D = "Array" === e && L.entries || R;
            if (D && (j = s(D.call(new t))) !== Object.prototype && j.next && (i || s(j) === m || (f ? f(j, m) : c(j[_]) || p(j, _, O)),
            l(j, I, !0, !0),
            i && (y[I] = O)),
            g && v === S && R && R.name !== S && (!i && b ? h(L, "name", S) : (A = !0,
            N = function() {
                return o(R, this)
            }
            )),
            v)
                if (T = {
                    values: C(S),
                    keys: d ? N : C(x),
                    entries: C(E)
                },
                k)
                    for (P in T)
                        (w || A || !(P in L)) && p(L, P, T[P]);
                else
                    n({
                        target: e,
                        proto: !0,
                        forced: w || A
                    }, T);
            return i && !k || L[_] === N || p(L, _, N, {
                name: v
            }),
            y[e] = N,
            T
        }
    }
    ,
    57516857: (t,e,r)=>{
        var n, o, i, a = r(74706079), c = r(10364949), u = r(2464994), s = r(95731544), f = r(63735811), l = r(74110088), h = r(47453651), p = r(8853163), v = h("iterator"), y = !1;
        [].keys && ("next"in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : y = !0),
        !u(n) || a((function() {
            var t = {};
            return n[v].call(t) !== t
        }
        )) ? n = {} : p && (n = s(n)),
        c(n[v]) || l(n, v, (function() {
            return this
        }
        )),
        t.exports = {
            IteratorPrototype: n,
            BUGGY_SAFARI_ITERATORS: y
        }
    }
    ,
    20677917: t=>{
        t.exports = {}
    }
    ,
    28004886: (t,e,r)=>{
        var n = r(19240510);
        t.exports = function(t) {
            return n(t.length)
        }
    }
    ,
    66955883: (t,e,r)=>{
        var n = r(96740816)
          , o = r(74706079)
          , i = r(10364949)
          , a = r(30715713)
          , c = r(1950796)
          , u = r(54584174).CONFIGURABLE
          , s = r(22301418)
          , f = r(8493549)
          , l = f.enforce
          , h = f.get
          , p = String
          , v = Object.defineProperty
          , y = n("".slice)
          , d = n("".replace)
          , g = n([].join)
          , b = c && !o((function() {
            return 8 !== v((function() {}
            ), "length", {
                value: 8
            }).length
        }
        ))
          , m = String(String).split("String")
          , w = t.exports = function(t, e, r) {
            "Symbol(" === y(p(e), 0, 7) && (e = "[" + d(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            r && r.getter && (e = "get " + e),
            r && r.setter && (e = "set " + e),
            (!a(t, "name") || u && t.name !== e) && (c ? v(t, "name", {
                value: e,
                configurable: !0
            }) : t.name = e),
            b && r && a(r, "arity") && t.length !== r.arity && v(t, "length", {
                value: r.arity
            });
            try {
                r && a(r, "constructor") && r.constructor ? c && v(t, "prototype", {
                    writable: !1
                }) : t.prototype && (t.prototype = void 0)
            } catch (o) {}
            var n = l(t);
            return a(n, "source") || (n.source = g(m, "string" == typeof e ? e : "")),
            t
        }
        ;
        Function.prototype.toString = w((function() {
            return i(this) && h(this).source || s(this)
        }
        ), "toString")
    }
    ,
    15094540: (t,e,r)=>{
        var n = r(25299670)
          , o = Math.abs
          , i = 2220446049250313e-31
          , a = 1 / i;
        t.exports = function(t, e, r, c) {
            var u = +t
              , s = o(u)
              , f = n(u);
            if (s < c)
                return f * function(t) {
                    return t + a - a
                }(s / c / e) * c * e;
            var l = (1 + e / i) * s
              , h = l - (l - s);
            return h > r || h != h ? f * (1 / 0) : f * h
        }
    }
    ,
    90326241: (t,e,r)=>{
        var n = r(15094540);
        t.exports = Math.fround || function(t) {
            return n(t, 1.1920928955078125e-7, 34028234663852886e22, 11754943508222875e-54)
        }
    }
    ,
    25299670: t=>{
        t.exports = Math.sign || function(t) {
            var e = +t;
            return 0 === e || e != e ? e : e < 0 ? -1 : 1
        }
    }
    ,
    77240293: t=>{
        var e = Math.ceil
          , r = Math.floor;
        t.exports = Math.trunc || function(t) {
            var n = +t;
            return (n > 0 ? r : e)(n)
        }
    }
    ,
    23990675: (t,e,r)=>{
        var n, o, i, a, c, u = r(67602619), s = r(2694509), f = r(26656592), l = r(56050393).set, h = r(59756121), p = r(90377399), v = r(7185244), y = r(12567805), d = r(83967216), g = u.MutationObserver || u.WebKitMutationObserver, b = u.document, m = u.process, w = u.Promise, _ = s("queueMicrotask");
        if (!_) {
            var x = new h
              , S = function() {
                var t, e;
                for (d && (t = m.domain) && t.exit(); e = x.get(); )
                    try {
                        e()
                    } catch (r) {
                        throw x.head && n(),
                        r
                    }
                t && t.enter()
            };
            p || d || y || !g || !b ? !v && w && w.resolve ? ((a = w.resolve(void 0)).constructor = w,
            c = f(a.then, a),
            n = function() {
                c(S)
            }
            ) : d ? n = function() {
                m.nextTick(S)
            }
            : (l = f(l, u),
            n = function() {
                l(S)
            }
            ) : (o = !0,
            i = b.createTextNode(""),
            new g(S).observe(i, {
                characterData: !0
            }),
            n = function() {
                i.data = o = !o
            }
            ),
            _ = function(t) {
                x.head || n(),
                x.add(t)
            }
        }
        t.exports = _
    }
    ,
    92820651: (t,e,r)=>{
        var n = r(84898570)
          , o = TypeError
          , i = function(t) {
            var e, r;
            this.promise = new t((function(t, n) {
                if (void 0 !== e || void 0 !== r)
                    throw new o("Bad Promise constructor");
                e = t,
                r = n
            }
            )),
            this.resolve = n(e),
            this.reject = n(r)
        };
        t.exports.f = function(t) {
            return new i(t)
        }
    }
    ,
    91478363: (t,e,r)=>{
        var n = r(67844943);
        t.exports = function(t, e) {
            return void 0 === t ? arguments.length < 2 ? "" : e : n(t)
        }
    }
    ,
    95731544: (t,e,r)=>{
        var n, o = r(68356135), i = r(36303361), a = r(97306391), c = r(17171509), u = r(52287117), s = r(16235095), f = r(4378119), l = "prototype", h = "script", p = f("IE_PROTO"), v = function() {}, y = function(t) {
            return "<" + h + ">" + t + "</" + h + ">"
        }, d = function(t) {
            t.write(y("")),
            t.close();
            var e = t.parentWindow.Object;
            return t = null,
            e
        }, g = function() {
            try {
                n = new ActiveXObject("htmlfile")
            } catch (i) {}
            var t, e, r;
            g = "undefined" != typeof document ? document.domain && n ? d(n) : (e = s("iframe"),
            r = "java" + h + ":",
            e.style.display = "none",
            u.appendChild(e),
            e.src = String(r),
            (t = e.contentWindow.document).open(),
            t.write(y("document.F=Object")),
            t.close(),
            t.F) : d(n);
            for (var o = a.length; o--; )
                delete g[l][a[o]];
            return g()
        };
        c[p] = !0,
        t.exports = Object.create || function(t, e) {
            var r;
            return null !== t ? (v[l] = o(t),
            r = new v,
            v[l] = null,
            r[p] = t) : r = g(),
            void 0 === e ? r : i.f(r, e)
        }
    }
    ,
    36303361: (t,e,r)=>{
        var n = r(1950796)
          , o = r(3579246)
          , i = r(80104465)
          , a = r(68356135)
          , c = r(71227733)
          , u = r(49926880);
        e.f = n && !o ? Object.defineProperties : function(t, e) {
            a(t);
            for (var r, n = c(e), o = u(e), s = o.length, f = 0; s > f; )
                i.f(t, r = o[f++], n[r]);
            return t
        }
    }
    ,
    80104465: (t,e,r)=>{
        var n = r(1950796)
          , o = r(15982061)
          , i = r(3579246)
          , a = r(68356135)
          , c = r(44912489)
          , u = TypeError
          , s = Object.defineProperty
          , f = Object.getOwnPropertyDescriptor
          , l = "enumerable"
          , h = "configurable"
          , p = "writable";
        e.f = n ? i ? function(t, e, r) {
            if (a(t),
            e = c(e),
            a(r),
            "function" == typeof t && "prototype" === e && "value"in r && p in r && !r[p]) {
                var n = f(t, e);
                n && n[p] && (t[e] = r.value,
                r = {
                    configurable: h in r ? r[h] : n[h],
                    enumerable: l in r ? r[l] : n[l],
                    writable: !1
                })
            }
            return s(t, e, r)
        }
        : s : function(t, e, r) {
            if (a(t),
            e = c(e),
            a(r),
            o)
                try {
                    return s(t, e, r)
                } catch (n) {}
            if ("get"in r || "set"in r)
                throw new u("Accessors not supported");
            return "value"in r && (t[e] = r.value),
            t
        }
    }
    ,
    10047171: (t,e,r)=>{
        var n = r(1950796)
          , o = r(82922429)
          , i = r(11562501)
          , a = r(80006884)
          , c = r(71227733)
          , u = r(44912489)
          , s = r(30715713)
          , f = r(15982061)
          , l = Object.getOwnPropertyDescriptor;
        e.f = n ? l : function(t, e) {
            if (t = c(t),
            e = u(e),
            f)
                try {
                    return l(t, e)
                } catch (r) {}
            if (s(t, e))
                return a(!o(i.f, t, e), t[e])
        }
    }
    ,
    64185914: (t,e,r)=>{
        var n = r(95276096)
          , o = r(71227733)
          , i = r(65715312).f
          , a = r(32724544)
          , c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return c && "Window" === n(t) ? function(t) {
                try {
                    return i(t)
                } catch (e) {
                    return a(c)
                }
            }(t) : i(o(t))
        }
    }
    ,
    65715312: (t,e,r)=>{
        var n = r(46848228)
          , o = r(97306391).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return n(t, o)
        }
    }
    ,
    41901525: (t,e)=>{
        e.f = Object.getOwnPropertySymbols
    }
    ,
    63735811: (t,e,r)=>{
        var n = r(30715713)
          , o = r(10364949)
          , i = r(75212341)
          , a = r(4378119)
          , c = r(29954867)
          , u = a("IE_PROTO")
          , s = Object
          , f = s.prototype;
        t.exports = c ? s.getPrototypeOf : function(t) {
            var e = i(t);
            if (n(e, u))
                return e[u];
            var r = e.constructor;
            return o(r) && e instanceof r ? r.prototype : e instanceof s ? f : null
        }
    }
    ,
    91672588: (t,e,r)=>{
        var n = r(74706079)
          , o = r(2464994)
          , i = r(95276096)
          , a = r(41122916)
          , c = Object.isExtensible
          , u = n((function() {
            c(1)
        }
        ));
        t.exports = u || a ? function(t) {
            return !!o(t) && ((!a || "ArrayBuffer" !== i(t)) && (!c || c(t)))
        }
        : c
    }
    ,
    49182329: (t,e,r)=>{
        var n = r(96740816);
        t.exports = n({}.isPrototypeOf)
    }
    ,
    46848228: (t,e,r)=>{
        var n = r(96740816)
          , o = r(30715713)
          , i = r(71227733)
          , a = r(39918977).indexOf
          , c = r(17171509)
          , u = n([].push);
        t.exports = function(t, e) {
            var r, n = i(t), s = 0, f = [];
            for (r in n)
                !o(c, r) && o(n, r) && u(f, r);
            for (; e.length > s; )
                o(n, r = e[s++]) && (~a(f, r) || u(f, r));
            return f
        }
    }
    ,
    49926880: (t,e,r)=>{
        var n = r(46848228)
          , o = r(97306391);
        t.exports = Object.keys || function(t) {
            return n(t, o)
        }
    }
    ,
    11562501: (t,e)=>{
        var r = {}.propertyIsEnumerable
          , n = Object.getOwnPropertyDescriptor
          , o = n && !r.call({
            1: 2
        }, 1);
        e.f = o ? function(t) {
            var e = n(this, t);
            return !!e && e.enumerable
        }
        : r
    }
    ,
    76977799: (t,e,r)=>{
        var n = r(75171794)
          , o = r(68356135)
          , i = r(73473986);
        t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var t, e = !1, r = {};
            try {
                (t = n(Object.prototype, "__proto__", "set"))(r, []),
                e = r instanceof Array
            } catch (a) {}
            return function(r, n) {
                return o(r),
                i(n),
                e ? t(r, n) : r.__proto__ = n,
                r
            }
        }() : void 0)
    }
    ,
    59330619: (t,e,r)=>{
        var n = r(14572076)
          , o = r(20162267);
        t.exports = n ? {}.toString : function() {
            return "[object " + o(this) + "]"
        }
    }
    ,
    44002542: (t,e,r)=>{
        var n = r(82922429)
          , o = r(10364949)
          , i = r(2464994)
          , a = TypeError;
        t.exports = function(t, e) {
            var r, c;
            if ("string" === e && o(r = t.toString) && !i(c = n(r, t)))
                return c;
            if (o(r = t.valueOf) && !i(c = n(r, t)))
                return c;
            if ("string" !== e && o(r = t.toString) && !i(c = n(r, t)))
                return c;
            throw new a("Can't convert object to primitive value")
        }
    }
    ,
    82597271: (t,e,r)=>{
        var n = r(15672695)
          , o = r(96740816)
          , i = r(65715312)
          , a = r(41901525)
          , c = r(68356135)
          , u = o([].concat);
        t.exports = n("Reflect", "ownKeys") || function(t) {
            var e = i.f(c(t))
              , r = a.f;
            return r ? u(e, r(t)) : e
        }
    }
    ,
    74366271: (t,e,r)=>{
        var n = r(67602619);
        t.exports = n
    }
    ,
    54000463: t=>{
        t.exports = function(t) {
            try {
                return {
                    error: !1,
                    value: t()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        }
    }
    ,
    99091780: (t,e,r)=>{
        var n = r(67602619)
          , o = r(42463494)
          , i = r(10364949)
          , a = r(85732412)
          , c = r(22301418)
          , u = r(47453651)
          , s = r(30185530)
          , f = r(25425140)
          , l = r(8853163)
          , h = r(60852652)
          , p = o && o.prototype
          , v = u("species")
          , y = !1
          , d = i(n.PromiseRejectionEvent)
          , g = a("Promise", (function() {
            var t = c(o)
              , e = t !== String(o);
            if (!e && 66 === h)
                return !0;
            if (l && (!p.catch || !p.finally))
                return !0;
            if (!h || h < 51 || !/native code/.test(t)) {
                var r = new o((function(t) {
                    t(1)
                }
                ))
                  , n = function(t) {
                    t((function() {}
                    ), (function() {}
                    ))
                };
                if ((r.constructor = {})[v] = n,
                !(y = r.then((function() {}
                ))instanceof n))
                    return !0
            }
            return !e && (s || f) && !d
        }
        ));
        t.exports = {
            CONSTRUCTOR: g,
            REJECTION_EVENT: d,
            SUBCLASSING: y
        }
    }
    ,
    42463494: (t,e,r)=>{
        var n = r(67602619);
        t.exports = n.Promise
    }
    ,
    16919678: (t,e,r)=>{
        var n = r(68356135)
          , o = r(2464994)
          , i = r(92820651);
        t.exports = function(t, e) {
            if (n(t),
            o(e) && e.constructor === t)
                return e;
            var r = i.f(t);
            return (0,
            r.resolve)(e),
            r.promise
        }
    }
    ,
    33916361: (t,e,r)=>{
        var n = r(42463494)
          , o = r(52821356)
          , i = r(99091780).CONSTRUCTOR;
        t.exports = i || !o((function(t) {
            n.all(t).then(void 0, (function() {}
            ))
        }
        ))
    }
    ,
    85360496: (t,e,r)=>{
        var n = r(80104465).f;
        t.exports = function(t, e, r) {
            r in t || n(t, r, {
                configurable: !0,
                get: function() {
                    return e[r]
                },
                set: function(t) {
                    e[r] = t
                }
            })
        }
    }
    ,
    59756121: t=>{
        var e = function() {
            this.head = null,
            this.tail = null
        };
        e.prototype = {
            add: function(t) {
                var e = {
                    item: t,
                    next: null
                }
                  , r = this.tail;
                r ? r.next = e : this.head = e,
                this.tail = e
            },
            get: function() {
                var t = this.head;
                if (t)
                    return null === (this.head = t.next) && (this.tail = null),
                    t.item
            }
        },
        t.exports = e
    }
    ,
    63470250: (t,e,r)=>{
        var n = r(82922429)
          , o = r(68356135)
          , i = r(10364949)
          , a = r(95276096)
          , c = r(39830955)
          , u = TypeError;
        t.exports = function(t, e) {
            var r = t.exec;
            if (i(r)) {
                var s = n(r, t, e);
                return null !== s && o(s),
                s
            }
            if ("RegExp" === a(t))
                return n(c, t, e);
            throw new u("RegExp#exec called on incompatible receiver")
        }
    }
    ,
    39830955: (t,e,r)=>{
        var n, o, i = r(82922429), a = r(96740816), c = r(67844943), u = r(35966827), s = r(59401309), f = r(85030289), l = r(95731544), h = r(8493549).get, p = r(25318963), v = r(84728574), y = f("native-string-replace", String.prototype.replace), d = RegExp.prototype.exec, g = d, b = a("".charAt), m = a("".indexOf), w = a("".replace), _ = a("".slice), x = (o = /b*/g,
        i(d, n = /a/, "a"),
        i(d, o, "a"),
        0 !== n.lastIndex || 0 !== o.lastIndex), S = s.BROKEN_CARET, E = void 0 !== /()??/.exec("")[1];
        (x || E || S || p || v) && (g = function(t) {
            var e, r, n, o, a, s, f, p = this, v = h(p), O = c(t), k = v.raw;
            if (k)
                return k.lastIndex = p.lastIndex,
                e = i(g, k, O),
                p.lastIndex = k.lastIndex,
                e;
            var j = v.groups
              , T = S && p.sticky
              , P = i(u, p)
              , C = p.source
              , I = 0
              , A = O;
            if (T && (P = w(P, "y", ""),
            -1 === m(P, "g") && (P += "g"),
            A = _(O, p.lastIndex),
            p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== b(O, p.lastIndex - 1)) && (C = "(?: " + C + ")",
            A = " " + A,
            I++),
            r = new RegExp("^(?:" + C + ")",P)),
            E && (r = new RegExp("^" + C + "$(?!\\s)",P)),
            x && (n = p.lastIndex),
            o = i(d, T ? r : p, A),
            T ? o ? (o.input = _(o.input, I),
            o[0] = _(o[0], I),
            o.index = p.lastIndex,
            p.lastIndex += o[0].length) : p.lastIndex = 0 : x && o && (p.lastIndex = p.global ? o.index + o[0].length : n),
            E && o && o.length > 1 && i(y, o[0], r, (function() {
                for (a = 1; a < arguments.length - 2; a++)
                    void 0 === arguments[a] && (o[a] = void 0)
            }
            )),
            o && j)
                for (o.groups = s = l(null),
                a = 0; a < j.length; a++)
                    s[(f = j[a])[0]] = o[f[1]];
            return o
        }
        ),
        t.exports = g
    }
    ,
    35966827: (t,e,r)=>{
        var n = r(68356135);
        t.exports = function() {
            var t = n(this)
              , e = "";
            return t.hasIndices && (e += "d"),
            t.global && (e += "g"),
            t.ignoreCase && (e += "i"),
            t.multiline && (e += "m"),
            t.dotAll && (e += "s"),
            t.unicode && (e += "u"),
            t.unicodeSets && (e += "v"),
            t.sticky && (e += "y"),
            e
        }
    }
    ,
    48238698: (t,e,r)=>{
        var n = r(82922429)
          , o = r(30715713)
          , i = r(49182329)
          , a = r(35966827)
          , c = RegExp.prototype;
        t.exports = function(t) {
            var e = t.flags;
            return void 0 !== e || "flags"in c || o(t, "flags") || !i(c, t) ? e : n(a, t)
        }
    }
    ,
    59401309: (t,e,r)=>{
        var n = r(74706079)
          , o = r(67602619).RegExp
          , i = n((function() {
            var t = o("a", "y");
            return t.lastIndex = 2,
            null !== t.exec("abcd")
        }
        ))
          , a = i || n((function() {
            return !o("a", "y").sticky
        }
        ))
          , c = i || n((function() {
            var t = o("^r", "gy");
            return t.lastIndex = 2,
            null !== t.exec("str")
        }
        ));
        t.exports = {
            BROKEN_CARET: c,
            MISSED_STICKY: a,
            UNSUPPORTED_Y: i
        }
    }
    ,
    25318963: (t,e,r)=>{
        var n = r(74706079)
          , o = r(67602619).RegExp;
        t.exports = n((function() {
            var t = o(".", "s");
            return !(t.dotAll && t.test("\n") && "s" === t.flags)
        }
        ))
    }
    ,
    84728574: (t,e,r)=>{
        var n = r(74706079)
          , o = r(67602619).RegExp;
        t.exports = n((function() {
            var t = o("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        }
        ))
    }
    ,
    52354086: (t,e,r)=>{
        var n = r(92902421)
          , o = TypeError;
        t.exports = function(t) {
            if (n(t))
                throw new o("Can't call method on " + t);
            return t
        }
    }
    ,
    2694509: (t,e,r)=>{
        var n = r(67602619)
          , o = r(1950796)
          , i = Object.getOwnPropertyDescriptor;
        t.exports = function(t) {
            if (!o)
                return n[t];
            var e = i(n, t);
            return e && e.value
        }
    }
    ,
    25242001: (t,e,r)=>{
        var n = r(15672695)
          , o = r(20525626)
          , i = r(47453651)
          , a = r(1950796)
          , c = i("species");
        t.exports = function(t) {
            var e = n(t);
            a && e && !e[c] && o(e, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    ,
    58833279: (t,e,r)=>{
        var n = r(80104465).f
          , o = r(30715713)
          , i = r(47453651)("toStringTag");
        t.exports = function(t, e, r) {
            t && !r && (t = t.prototype),
            t && !o(t, i) && n(t, i, {
                configurable: !0,
                value: e
            })
        }
    }
    ,
    4378119: (t,e,r)=>{
        var n = r(85030289)
          , o = r(71894192)
          , i = n("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    }
    ,
    63505021: (t,e,r)=>{
        var n = r(67602619)
          , o = r(64166345)
          , i = "__core-js_shared__"
          , a = n[i] || o(i, {});
        t.exports = a
    }
    ,
    85030289: (t,e,r)=>{
        var n = r(8853163)
          , o = r(63505021);
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: "3.35.1",
            mode: n ? "pure" : "global",
            copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }
    ,
    7376757: (t,e,r)=>{
        var n = r(68356135)
          , o = r(12028924)
          , i = r(92902421)
          , a = r(47453651)("species");
        t.exports = function(t, e) {
            var r, c = n(t).constructor;
            return void 0 === c || i(r = n(c)[a]) ? e : o(r)
        }
    }
    ,
    48165495: (t,e,r)=>{
        var n = r(96740816)
          , o = r(88727515)
          , i = r(67844943)
          , a = r(52354086)
          , c = n("".charAt)
          , u = n("".charCodeAt)
          , s = n("".slice)
          , f = function(t) {
            return function(e, r) {
                var n, f, l = i(a(e)), h = o(r), p = l.length;
                return h < 0 || h >= p ? t ? "" : void 0 : (n = u(l, h)) < 55296 || n > 56319 || h + 1 === p || (f = u(l, h + 1)) < 56320 || f > 57343 ? t ? c(l, h) : n : t ? s(l, h, h + 2) : f - 56320 + (n - 55296 << 10) + 65536
            }
        };
        t.exports = {
            codeAt: f(!1),
            charAt: f(!0)
        }
    }
    ,
    17748090: (t,e,r)=>{
        var n = r(96740816)
          , o = r(52354086)
          , i = r(67844943)
          , a = r(44832476)
          , c = n("".replace)
          , u = RegExp("^[" + a + "]+")
          , s = RegExp("(^|[^" + a + "])[" + a + "]+$")
          , f = function(t) {
            return function(e) {
                var r = i(o(e));
                return 1 & t && (r = c(r, u, "")),
                2 & t && (r = c(r, s, "$1")),
                r
            }
        };
        t.exports = {
            start: f(1),
            end: f(2),
            trim: f(3)
        }
    }
    ,
    61971151: (t,e,r)=>{
        var n = r(60852652)
          , o = r(74706079)
          , i = r(67602619).String;
        t.exports = !!Object.getOwnPropertySymbols && !o((function() {
            var t = Symbol("symbol detection");
            return !i(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && n && n < 41
        }
        ))
    }
    ,
    8387170: (t,e,r)=>{
        var n = r(82922429)
          , o = r(15672695)
          , i = r(47453651)
          , a = r(74110088);
        t.exports = function() {
            var t = o("Symbol")
              , e = t && t.prototype
              , r = e && e.valueOf
              , c = i("toPrimitive");
            e && !e[c] && a(e, c, (function(t) {
                return n(r, this)
            }
            ), {
                arity: 1
            })
        }
    }
    ,
    95355264: (t,e,r)=>{
        var n = r(61971151);
        t.exports = n && !!Symbol.for && !!Symbol.keyFor
    }
    ,
    56050393: (t,e,r)=>{
        var n, o, i, a, c = r(67602619), u = r(48700121), s = r(26656592), f = r(10364949), l = r(30715713), h = r(74706079), p = r(52287117), v = r(32724544), y = r(16235095), d = r(16980764), g = r(90377399), b = r(83967216), m = c.setImmediate, w = c.clearImmediate, _ = c.process, x = c.Dispatch, S = c.Function, E = c.MessageChannel, O = c.String, k = 0, j = {}, T = "onreadystatechange";
        h((function() {
            n = c.location
        }
        ));
        var P = function(t) {
            if (l(j, t)) {
                var e = j[t];
                delete j[t],
                e()
            }
        }
          , C = function(t) {
            return function() {
                P(t)
            }
        }
          , I = function(t) {
            P(t.data)
        }
          , A = function(t) {
            c.postMessage(O(t), n.protocol + "//" + n.host)
        };
        m && w || (m = function(t) {
            d(arguments.length, 1);
            var e = f(t) ? t : S(t)
              , r = v(arguments, 1);
            return j[++k] = function() {
                u(e, void 0, r)
            }
            ,
            o(k),
            k
        }
        ,
        w = function(t) {
            delete j[t]
        }
        ,
        b ? o = function(t) {
            _.nextTick(C(t))
        }
        : x && x.now ? o = function(t) {
            x.now(C(t))
        }
        : E && !g ? (a = (i = new E).port2,
        i.port1.onmessage = I,
        o = s(a.postMessage, a)) : c.addEventListener && f(c.postMessage) && !c.importScripts && n && "file:" !== n.protocol && !h(A) ? (o = A,
        c.addEventListener("message", I, !1)) : o = T in y("script") ? function(t) {
            p.appendChild(y("script"))[T] = function() {
                p.removeChild(this),
                P(t)
            }
        }
        : function(t) {
            setTimeout(C(t), 0)
        }
        ),
        t.exports = {
            set: m,
            clear: w
        }
    }
    ,
    53554312: (t,e,r)=>{
        var n = r(96740816);
        t.exports = n(1..valueOf)
    }
    ,
    20103162: (t,e,r)=>{
        var n = r(88727515)
          , o = Math.max
          , i = Math.min;
        t.exports = function(t, e) {
            var r = n(t);
            return r < 0 ? o(r + e, 0) : i(r, e)
        }
    }
    ,
    663150: (t,e,r)=>{
        var n = r(9040841)
          , o = TypeError;
        t.exports = function(t) {
            var e = n(t, "number");
            if ("number" == typeof e)
                throw new o("Can't convert number to bigint");
            return BigInt(e)
        }
    }
    ,
    12011040: (t,e,r)=>{
        var n = r(88727515)
          , o = r(19240510)
          , i = RangeError;
        t.exports = function(t) {
            if (void 0 === t)
                return 0;
            var e = n(t)
              , r = o(e);
            if (e !== r)
                throw new i("Wrong length or index");
            return r
        }
    }
    ,
    71227733: (t,e,r)=>{
        var n = r(22366351)
          , o = r(52354086);
        t.exports = function(t) {
            return n(o(t))
        }
    }
    ,
    88727515: (t,e,r)=>{
        var n = r(77240293);
        t.exports = function(t) {
            var e = +t;
            return e != e || 0 === e ? 0 : n(e)
        }
    }
    ,
    19240510: (t,e,r)=>{
        var n = r(88727515)
          , o = Math.min;
        t.exports = function(t) {
            var e = n(t);
            return e > 0 ? o(e, 9007199254740991) : 0
        }
    }
    ,
    75212341: (t,e,r)=>{
        var n = r(52354086)
          , o = Object;
        t.exports = function(t) {
            return o(n(t))
        }
    }
    ,
    17405013: (t,e,r)=>{
        var n = r(25616678)
          , o = RangeError;
        t.exports = function(t, e) {
            var r = n(t);
            if (r % e)
                throw new o("Wrong offset");
            return r
        }
    }
    ,
    25616678: (t,e,r)=>{
        var n = r(88727515)
          , o = RangeError;
        t.exports = function(t) {
            var e = n(t);
            if (e < 0)
                throw new o("The argument can't be less than 0");
            return e
        }
    }
    ,
    9040841: (t,e,r)=>{
        var n = r(82922429)
          , o = r(2464994)
          , i = r(20603493)
          , a = r(11109982)
          , c = r(44002542)
          , u = r(47453651)
          , s = TypeError
          , f = u("toPrimitive");
        t.exports = function(t, e) {
            if (!o(t) || i(t))
                return t;
            var r, u = a(t, f);
            if (u) {
                if (void 0 === e && (e = "default"),
                r = n(u, t, e),
                !o(r) || i(r))
                    return r;
                throw new s("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"),
            c(t, e)
        }
    }
    ,
    44912489: (t,e,r)=>{
        var n = r(9040841)
          , o = r(20603493);
        t.exports = function(t) {
            var e = n(t, "string");
            return o(e) ? e : e + ""
        }
    }
    ,
    14572076: (t,e,r)=>{
        var n = {};
        n[r(47453651)("toStringTag")] = "z",
        t.exports = "[object z]" === String(n)
    }
    ,
    67844943: (t,e,r)=>{
        var n = r(20162267)
          , o = String;
        t.exports = function(t) {
            if ("Symbol" === n(t))
                throw new TypeError("Cannot convert a Symbol value to a string");
            return o(t)
        }
    }
    ,
    28778799: t=>{
        var e = Math.round;
        t.exports = function(t) {
            var r = e(t);
            return r < 0 ? 0 : r > 255 ? 255 : 255 & r
        }
    }
    ,
    63043927: t=>{
        var e = String;
        t.exports = function(t) {
            try {
                return e(t)
            } catch (r) {
                return "Object"
            }
        }
    }
    ,
    33244335: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619)
          , i = r(82922429)
          , a = r(1950796)
          , c = r(24563653)
          , u = r(27989908)
          , s = r(98983370)
          , f = r(64214583)
          , l = r(80006884)
          , h = r(86364651)
          , p = r(20372679)
          , v = r(19240510)
          , y = r(12011040)
          , d = r(17405013)
          , g = r(28778799)
          , b = r(44912489)
          , m = r(30715713)
          , w = r(20162267)
          , _ = r(2464994)
          , x = r(20603493)
          , S = r(95731544)
          , E = r(49182329)
          , O = r(76977799)
          , k = r(65715312).f
          , j = r(71779859)
          , T = r(95677645).forEach
          , P = r(25242001)
          , C = r(20525626)
          , I = r(80104465)
          , A = r(10047171)
          , L = r(6790986)
          , R = r(8493549)
          , N = r(37037119)
          , D = R.get
          , M = R.set
          , F = R.enforce
          , U = I.f
          , H = A.f
          , W = o.RangeError
          , G = s.ArrayBuffer
          , B = G.prototype
          , q = s.DataView
          , V = u.NATIVE_ARRAY_BUFFER_VIEWS
          , z = u.TYPED_ARRAY_TAG
          , Y = u.TypedArray
          , $ = u.TypedArrayPrototype
          , K = u.isTypedArray
          , J = "BYTES_PER_ELEMENT"
          , X = "Wrong length"
          , Q = function(t, e) {
            C(t, e, {
                configurable: !0,
                get: function() {
                    return D(this)[e]
                }
            })
        }
          , Z = function(t) {
            var e;
            return E(B, t) || "ArrayBuffer" === (e = w(t)) || "SharedArrayBuffer" === e
        }
          , tt = function(t, e) {
            return K(t) && !x(e) && e in t && p(+e) && e >= 0
        }
          , et = function(t, e) {
            return e = b(e),
            tt(t, e) ? l(2, t[e]) : H(t, e)
        }
          , rt = function(t, e, r) {
            return e = b(e),
            !(tt(t, e) && _(r) && m(r, "value")) || m(r, "get") || m(r, "set") || r.configurable || m(r, "writable") && !r.writable || m(r, "enumerable") && !r.enumerable ? U(t, e, r) : (t[e] = r.value,
            t)
        };
        a ? (V || (A.f = et,
        I.f = rt,
        Q($, "buffer"),
        Q($, "byteOffset"),
        Q($, "byteLength"),
        Q($, "length")),
        n({
            target: "Object",
            stat: !0,
            forced: !V
        }, {
            getOwnPropertyDescriptor: et,
            defineProperty: rt
        }),
        t.exports = function(t, e, r) {
            var a = t.match(/\d+/)[0] / 8
              , u = t + (r ? "Clamped" : "") + "Array"
              , s = "get" + t
              , l = "set" + t
              , p = o[u]
              , b = p
              , m = b && b.prototype
              , w = {}
              , x = function(t, e) {
                U(t, e, {
                    get: function() {
                        return function(t, e) {
                            var r = D(t);
                            return r.view[s](e * a + r.byteOffset, !0)
                        }(this, e)
                    },
                    set: function(t) {
                        return function(t, e, n) {
                            var o = D(t);
                            o.view[l](e * a + o.byteOffset, r ? g(n) : n, !0)
                        }(this, e, t)
                    },
                    enumerable: !0
                })
            };
            V ? c && (b = e((function(t, e, r, n) {
                return f(t, m),
                N(_(e) ? Z(e) ? void 0 !== n ? new p(e,d(r, a),n) : void 0 !== r ? new p(e,d(r, a)) : new p(e) : K(e) ? L(b, e) : i(j, b, e) : new p(y(e)), t, b)
            }
            )),
            O && O(b, Y),
            T(k(p), (function(t) {
                t in b || h(b, t, p[t])
            }
            )),
            b.prototype = m) : (b = e((function(t, e, r, n) {
                f(t, m);
                var o, c, u, s = 0, l = 0;
                if (_(e)) {
                    if (!Z(e))
                        return K(e) ? L(b, e) : i(j, b, e);
                    o = e,
                    l = d(r, a);
                    var h = e.byteLength;
                    if (void 0 === n) {
                        if (h % a)
                            throw new W(X);
                        if ((c = h - l) < 0)
                            throw new W(X)
                    } else if ((c = v(n) * a) + l > h)
                        throw new W(X);
                    u = c / a
                } else
                    u = y(e),
                    o = new G(c = u * a);
                for (M(t, {
                    buffer: o,
                    byteOffset: l,
                    byteLength: c,
                    length: u,
                    view: new q(o)
                }); s < u; )
                    x(t, s++)
            }
            )),
            O && O(b, Y),
            m = b.prototype = S($)),
            m.constructor !== b && h(m, "constructor", b),
            F(m).TypedArrayConstructor = b,
            z && h(m, z, u);
            var E = b !== p;
            w[u] = b,
            n({
                global: !0,
                constructor: !0,
                forced: E,
                sham: !V
            }, w),
            J in b || h(b, J, a),
            J in m || h(m, J, a),
            P(u)
        }
        ) : t.exports = function() {}
    }
    ,
    24563653: (t,e,r)=>{
        var n = r(67602619)
          , o = r(74706079)
          , i = r(52821356)
          , a = r(27989908).NATIVE_ARRAY_BUFFER_VIEWS
          , c = n.ArrayBuffer
          , u = n.Int8Array;
        t.exports = !a || !o((function() {
            u(1)
        }
        )) || !o((function() {
            new u(-1)
        }
        )) || !i((function(t) {
            new u,
            new u(null),
            new u(1.5),
            new u(t)
        }
        ), !0) || o((function() {
            return 1 !== new u(new c(2),1,void 0).length
        }
        ))
    }
    ,
    21643637: (t,e,r)=>{
        var n = r(6790986)
          , o = r(1119524);
        t.exports = function(t, e) {
            return n(o(t), e)
        }
    }
    ,
    71779859: (t,e,r)=>{
        var n = r(26656592)
          , o = r(82922429)
          , i = r(12028924)
          , a = r(75212341)
          , c = r(28004886)
          , u = r(68331361)
          , s = r(52437571)
          , f = r(45668945)
          , l = r(40139047)
          , h = r(27989908).aTypedArrayConstructor
          , p = r(663150);
        t.exports = function(t) {
            var e, r, v, y, d, g, b, m, w = i(this), _ = a(t), x = arguments.length, S = x > 1 ? arguments[1] : void 0, E = void 0 !== S, O = s(_);
            if (O && !f(O))
                for (m = (b = u(_, O)).next,
                _ = []; !(g = o(m, b)).done; )
                    _.push(g.value);
            for (E && x > 2 && (S = n(S, arguments[2])),
            r = c(_),
            v = new (h(w))(r),
            y = l(v),
            e = 0; r > e; e++)
                d = E ? S(_[e], e) : _[e],
                v[e] = y ? p(d) : +d;
            return v
        }
    }
    ,
    1119524: (t,e,r)=>{
        var n = r(27989908)
          , o = r(7376757)
          , i = n.aTypedArrayConstructor
          , a = n.getTypedArrayConstructor;
        t.exports = function(t) {
            return i(o(t, a(t)))
        }
    }
    ,
    71894192: (t,e,r)=>{
        var n = r(96740816)
          , o = 0
          , i = Math.random()
          , a = n(1..toString);
        t.exports = function(t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36)
        }
    }
    ,
    45277440: (t,e,r)=>{
        var n = r(61971151);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    ,
    3579246: (t,e,r)=>{
        var n = r(1950796)
          , o = r(74706079);
        t.exports = n && o((function() {
            return 42 !== Object.defineProperty((function() {}
            ), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }
        ))
    }
    ,
    16980764: t=>{
        var e = TypeError;
        t.exports = function(t, r) {
            if (t < r)
                throw new e("Not enough arguments");
            return t
        }
    }
    ,
    71815358: (t,e,r)=>{
        var n = r(67602619)
          , o = r(10364949)
          , i = n.WeakMap;
        t.exports = o(i) && /native code/.test(String(i))
    }
    ,
    13287279: (t,e,r)=>{
        var n = r(74366271)
          , o = r(30715713)
          , i = r(39361439)
          , a = r(80104465).f;
        t.exports = function(t) {
            var e = n.Symbol || (n.Symbol = {});
            o(e, t) || a(e, t, {
                value: i.f(t)
            })
        }
    }
    ,
    39361439: (t,e,r)=>{
        var n = r(47453651);
        e.f = n
    }
    ,
    47453651: (t,e,r)=>{
        var n = r(67602619)
          , o = r(85030289)
          , i = r(30715713)
          , a = r(71894192)
          , c = r(61971151)
          , u = r(45277440)
          , s = n.Symbol
          , f = o("wks")
          , l = u ? s.for || s : s && s.withoutSetter || a;
        t.exports = function(t) {
            return i(f, t) || (f[t] = c && i(s, t) ? s[t] : l("Symbol." + t)),
            f[t]
        }
    }
    ,
    44832476: t=>{
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    }
    ,
    89322601: (t,e,r)=>{
        var n = r(15672695)
          , o = r(30715713)
          , i = r(86364651)
          , a = r(49182329)
          , c = r(76977799)
          , u = r(19257356)
          , s = r(85360496)
          , f = r(37037119)
          , l = r(91478363)
          , h = r(1691216)
          , p = r(95292139)
          , v = r(1950796)
          , y = r(8853163);
        t.exports = function(t, e, r, d) {
            var g = "stackTraceLimit"
              , b = d ? 2 : 1
              , m = t.split(".")
              , w = m[m.length - 1]
              , _ = n.apply(null, m);
            if (_) {
                var x = _.prototype;
                if (!y && o(x, "cause") && delete x.cause,
                !r)
                    return _;
                var S = n("Error")
                  , E = e((function(t, e) {
                    var r = l(d ? e : t, void 0)
                      , n = d ? new _(t) : new _;
                    return void 0 !== r && i(n, "message", r),
                    p(n, E, n.stack, 2),
                    this && a(x, this) && f(n, this, E),
                    arguments.length > b && h(n, arguments[b]),
                    n
                }
                ));
                if (E.prototype = x,
                "Error" !== w ? c ? c(E, S) : u(E, S, {
                    name: !0
                }) : v && g in _ && (s(E, _, g),
                s(E, _, "prepareStackTrace")),
                u(E, _),
                !y)
                    try {
                        x.name !== w && i(x, "name", w),
                        x.constructor = E
                    } catch (O) {}
                return E
            }
        }
    }
    ,
    80280535: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619)
          , i = r(98983370)
          , a = r(25242001)
          , c = "ArrayBuffer"
          , u = i[c];
        n({
            global: !0,
            constructor: !0,
            forced: o[c] !== u
        }, {
            ArrayBuffer: u
        }),
        a(c)
    }
    ,
    56194433: (t,e,r)=>{
        var n = r(21748886)
          , o = r(18014516)
          , i = r(74706079)
          , a = r(98983370)
          , c = r(68356135)
          , u = r(20103162)
          , s = r(19240510)
          , f = r(7376757)
          , l = a.ArrayBuffer
          , h = a.DataView
          , p = h.prototype
          , v = o(l.prototype.slice)
          , y = o(p.getUint8)
          , d = o(p.setUint8);
        n({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: i((function() {
                return !new l(2).slice(1, void 0).byteLength
            }
            ))
        }, {
            slice: function(t, e) {
                if (v && void 0 === e)
                    return v(c(this), t);
                for (var r = c(this).byteLength, n = u(t, r), o = u(void 0 === e ? r : e, r), i = new (f(this, l))(s(o - n)), a = new h(this), p = new h(i), g = 0; n < o; )
                    d(p, g++, y(a, n++));
                return i
            }
        })
    }
    ,
    86909186: (t,e,r)=>{
        var n = r(21748886)
          , o = r(74706079)
          , i = r(22527784)
          , a = r(2464994)
          , c = r(75212341)
          , u = r(28004886)
          , s = r(31631173)
          , f = r(21533840)
          , l = r(6493661)
          , h = r(38952805)
          , p = r(47453651)
          , v = r(60852652)
          , y = p("isConcatSpreadable")
          , d = v >= 51 || !o((function() {
            var t = [];
            return t[y] = !1,
            t.concat()[0] !== t
        }
        ))
          , g = function(t) {
            if (!a(t))
                return !1;
            var e = t[y];
            return void 0 !== e ? !!e : i(t)
        };
        n({
            target: "Array",
            proto: !0,
            arity: 1,
            forced: !d || !h("concat")
        }, {
            concat: function(t) {
                var e, r, n, o, i, a = c(this), h = l(a, 0), p = 0;
                for (e = -1,
                n = arguments.length; e < n; e++)
                    if (g(i = -1 === e ? a : arguments[e]))
                        for (o = u(i),
                        s(p + o),
                        r = 0; r < o; r++,
                        p++)
                            r in i && f(h, p, i[r]);
                    else
                        s(p + 1),
                        f(h, p++, i);
                return h.length = p,
                h
            }
        })
    }
    ,
    45845592: (t,e,r)=>{
        var n = r(21748886)
          , o = r(95677645).filter;
        n({
            target: "Array",
            proto: !0,
            forced: !r(38952805)("filter")
        }, {
            filter: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    ,
    72159770: (t,e,r)=>{
        var n = r(21748886)
          , o = r(76340892);
        n({
            target: "Array",
            stat: !0,
            forced: !r(52821356)((function(t) {
                Array.from(t)
            }
            ))
        }, {
            from: o
        })
    }
    ,
    2346364: (t,e,r)=>{
        var n = r(21748886)
          , o = r(18014516)
          , i = r(39918977).indexOf
          , a = r(11626694)
          , c = o([].indexOf)
          , u = !!c && 1 / c([1], 1, -0) < 0;
        n({
            target: "Array",
            proto: !0,
            forced: u || !a("indexOf")
        }, {
            indexOf: function(t) {
                var e = arguments.length > 1 ? arguments[1] : void 0;
                return u ? c(this, t, e) || 0 : i(this, t, e)
            }
        })
    }
    ,
    9592240: (t,e,r)=>{
        var n = r(71227733)
          , o = r(17723589)
          , i = r(20677917)
          , a = r(8493549)
          , c = r(80104465).f
          , u = r(87837840)
          , s = r(9953601)
          , f = r(8853163)
          , l = r(1950796)
          , h = "Array Iterator"
          , p = a.set
          , v = a.getterFor(h);
        t.exports = u(Array, "Array", (function(t, e) {
            p(this, {
                type: h,
                target: n(t),
                index: 0,
                kind: e
            })
        }
        ), (function() {
            var t = v(this)
              , e = t.target
              , r = t.index++;
            if (!e || r >= e.length)
                return t.target = void 0,
                s(void 0, !0);
            switch (t.kind) {
            case "keys":
                return s(r, !1);
            case "values":
                return s(e[r], !1)
            }
            return s([r, e[r]], !1)
        }
        ), "values");
        var y = i.Arguments = i.Array;
        if (o("keys"),
        o("values"),
        o("entries"),
        !f && l && "values" !== y.name)
            try {
                c(y, "name", {
                    value: "values"
                })
            } catch (d) {}
    }
    ,
    94746297: (t,e,r)=>{
        var n = r(21748886)
          , o = r(41473339);
        n({
            target: "Array",
            proto: !0,
            forced: o !== [].lastIndexOf
        }, {
            lastIndexOf: o
        })
    }
    ,
    88025774: (t,e,r)=>{
        var n = r(21748886)
          , o = r(95677645).map;
        n({
            target: "Array",
            proto: !0,
            forced: !r(38952805)("map")
        }, {
            map: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    ,
    1270386: (t,e,r)=>{
        var n = r(21748886)
          , o = r(75212341)
          , i = r(28004886)
          , a = r(37929887)
          , c = r(31631173);
        n({
            target: "Array",
            proto: !0,
            arity: 1,
            forced: r(74706079)((function() {
                return 4294967297 !== [].push.call({
                    length: 4294967296
                }, 1)
            }
            )) || !function() {
                try {
                    Object.defineProperty([], "length", {
                        writable: !1
                    }).push()
                } catch (t) {
                    return t instanceof TypeError
                }
            }()
        }, {
            push: function(t) {
                var e = o(this)
                  , r = i(e)
                  , n = arguments.length;
                c(r + n);
                for (var u = 0; u < n; u++)
                    e[r] = arguments[u],
                    r++;
                return a(e, r),
                r
            }
        })
    }
    ,
    6875144: (t,e,r)=>{
        var n = r(21748886)
          , o = r(12858046).left
          , i = r(11626694)
          , a = r(60852652);
        n({
            target: "Array",
            proto: !0,
            forced: !r(83967216) && a > 79 && a < 83 || !i("reduce")
        }, {
            reduce: function(t) {
                var e = arguments.length;
                return o(this, t, e, e > 1 ? arguments[1] : void 0)
            }
        })
    }
    ,
    28610650: (t,e,r)=>{
        var n = r(21748886)
          , o = r(96740816)
          , i = r(22527784)
          , a = o([].reverse)
          , c = [1, 2];
        n({
            target: "Array",
            proto: !0,
            forced: String(c) === String(c.reverse())
        }, {
            reverse: function() {
                return i(this) && (this.length = this.length),
                a(this)
            }
        })
    }
    ,
    6112414: (t,e,r)=>{
        var n = r(21748886)
          , o = r(22527784)
          , i = r(24167053)
          , a = r(2464994)
          , c = r(20103162)
          , u = r(28004886)
          , s = r(71227733)
          , f = r(21533840)
          , l = r(47453651)
          , h = r(38952805)
          , p = r(32724544)
          , v = h("slice")
          , y = l("species")
          , d = Array
          , g = Math.max;
        n({
            target: "Array",
            proto: !0,
            forced: !v
        }, {
            slice: function(t, e) {
                var r, n, l, h = s(this), v = u(h), b = c(t, v), m = c(void 0 === e ? v : e, v);
                if (o(h) && (r = h.constructor,
                (i(r) && (r === d || o(r.prototype)) || a(r) && null === (r = r[y])) && (r = void 0),
                r === d || void 0 === r))
                    return p(h, b, m);
                for (n = new (void 0 === r ? d : r)(g(m - b, 0)),
                l = 0; b < m; b++,
                l++)
                    b in h && f(n, l, h[b]);
                return n.length = l,
                n
            }
        })
    }
    ,
    48365850: (t,e,r)=>{
        var n = r(21748886)
          , o = r(75212341)
          , i = r(20103162)
          , a = r(88727515)
          , c = r(28004886)
          , u = r(37929887)
          , s = r(31631173)
          , f = r(6493661)
          , l = r(21533840)
          , h = r(97861854)
          , p = r(38952805)("splice")
          , v = Math.max
          , y = Math.min;
        n({
            target: "Array",
            proto: !0,
            forced: !p
        }, {
            splice: function(t, e) {
                var r, n, p, d, g, b, m = o(this), w = c(m), _ = i(t, w), x = arguments.length;
                for (0 === x ? r = n = 0 : 1 === x ? (r = 0,
                n = w - _) : (r = x - 2,
                n = y(v(a(e), 0), w - _)),
                s(w + r - n),
                p = f(m, n),
                d = 0; d < n; d++)
                    (g = _ + d)in m && l(p, d, m[g]);
                if (p.length = n,
                r < n) {
                    for (d = _; d < w - n; d++)
                        b = d + r,
                        (g = d + n)in m ? m[b] = m[g] : h(m, b);
                    for (d = w; d > w - n + r; d--)
                        h(m, d - 1)
                } else if (r > n)
                    for (d = w - n; d > _; d--)
                        b = d + r - 1,
                        (g = d + n - 1)in m ? m[b] = m[g] : h(m, b);
                for (d = 0; d < r; d++)
                    m[d + _] = arguments[d + 2];
                return u(m, w - n + r),
                p
            }
        })
    }
    ,
    9447684: (t,e,r)=>{
        var n = r(30715713)
          , o = r(74110088)
          , i = r(16470632)
          , a = r(47453651)("toPrimitive")
          , c = Date.prototype;
        n(c, a) || o(c, a, i)
    }
    ,
    9571864: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619)
          , i = r(48700121)
          , a = r(89322601)
          , c = "WebAssembly"
          , u = o[c]
          , s = 7 !== new Error("e",{
            cause: 7
        }).cause
          , f = function(t, e) {
            var r = {};
            r[t] = a(t, e, s),
            n({
                global: !0,
                constructor: !0,
                arity: 1,
                forced: s
            }, r)
        }
          , l = function(t, e) {
            if (u && u[t]) {
                var r = {};
                r[t] = a(c + "." + t, e, s),
                n({
                    target: c,
                    stat: !0,
                    constructor: !0,
                    arity: 1,
                    forced: s
                }, r)
            }
        };
        f("Error", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        f("EvalError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        f("RangeError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        f("ReferenceError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        f("SyntaxError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        f("TypeError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        f("URIError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        l("CompileError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        l("LinkError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        )),
        l("RuntimeError", (function(t) {
            return function(e) {
                return i(t, this, arguments)
            }
        }
        ))
    }
    ,
    32463177: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619);
        n({
            global: !0,
            forced: o.globalThis !== o
        }, {
            globalThis: o
        })
    }
    ,
    23917302: (t,e,r)=>{
        var n = r(21748886)
          , o = r(15672695)
          , i = r(48700121)
          , a = r(82922429)
          , c = r(96740816)
          , u = r(74706079)
          , s = r(10364949)
          , f = r(20603493)
          , l = r(32724544)
          , h = r(82901429)
          , p = r(61971151)
          , v = String
          , y = o("JSON", "stringify")
          , d = c(/./.exec)
          , g = c("".charAt)
          , b = c("".charCodeAt)
          , m = c("".replace)
          , w = c(1..toString)
          , _ = /[\uD800-\uDFFF]/g
          , x = /^[\uD800-\uDBFF]$/
          , S = /^[\uDC00-\uDFFF]$/
          , E = !p || u((function() {
            var t = o("Symbol")("stringify detection");
            return "[null]" !== y([t]) || "{}" !== y({
                a: t
            }) || "{}" !== y(Object(t))
        }
        ))
          , O = u((function() {
            return '"\\udf06\\ud834"' !== y("\udf06\ud834") || '"\\udead"' !== y("\udead")
        }
        ))
          , k = function(t, e) {
            var r = l(arguments)
              , n = h(e);
            if (s(n) || void 0 !== t && !f(t))
                return r[1] = function(t, e) {
                    if (s(n) && (e = a(n, this, v(t), e)),
                    !f(e))
                        return e
                }
                ,
                i(y, null, r)
        }
          , j = function(t, e, r) {
            var n = g(r, e - 1)
              , o = g(r, e + 1);
            return d(x, t) && !d(S, o) || d(S, t) && !d(x, n) ? "\\u" + w(b(t, 0), 16) : t
        };
        y && n({
            target: "JSON",
            stat: !0,
            arity: 3,
            forced: E || O
        }, {
            stringify: function(t, e, r) {
                var n = l(arguments)
                  , o = i(E ? k : y, null, n);
                return O && "string" == typeof o ? m(o, _, j) : o
            }
        })
    }
    ,
    78692987: (t,e,r)=>{
        var n = r(67602619);
        r(58833279)(n.JSON, "JSON", !0)
    }
    ,
    9470571: (t,e,r)=>{
        r(86816500)("Map", (function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), r(10735290))
    }
    ,
    82619521: (t,e,r)=>{
        r(9470571)
    }
    ,
    70109567: (t,e,r)=>{
        r(58833279)(Math, "Math", !0)
    }
    ,
    26927244: (t,e,r)=>{
        var n = r(21748886)
          , o = r(8853163)
          , i = r(1950796)
          , a = r(67602619)
          , c = r(74366271)
          , u = r(96740816)
          , s = r(85732412)
          , f = r(30715713)
          , l = r(37037119)
          , h = r(49182329)
          , p = r(20603493)
          , v = r(9040841)
          , y = r(74706079)
          , d = r(65715312).f
          , g = r(10047171).f
          , b = r(80104465).f
          , m = r(53554312)
          , w = r(17748090).trim
          , _ = "Number"
          , x = a[_]
          , S = c[_]
          , E = x.prototype
          , O = a.TypeError
          , k = u("".slice)
          , j = u("".charCodeAt)
          , T = function(t) {
            var e, r, n, o, i, a, c, u, s = v(t, "number");
            if (p(s))
                throw new O("Cannot convert a Symbol value to a number");
            if ("string" == typeof s && s.length > 2)
                if (s = w(s),
                43 === (e = j(s, 0)) || 45 === e) {
                    if (88 === (r = j(s, 2)) || 120 === r)
                        return NaN
                } else if (48 === e) {
                    switch (j(s, 1)) {
                    case 66:
                    case 98:
                        n = 2,
                        o = 49;
                        break;
                    case 79:
                    case 111:
                        n = 8,
                        o = 55;
                        break;
                    default:
                        return +s
                    }
                    for (a = (i = k(s, 2)).length,
                    c = 0; c < a; c++)
                        if ((u = j(i, c)) < 48 || u > o)
                            return NaN;
                    return parseInt(i, n)
                }
            return +s
        }
          , P = s(_, !x(" 0o1") || !x("0b1") || x("+0x1"))
          , C = function(t) {
            var e, r = arguments.length < 1 ? 0 : x(function(t) {
                var e = v(t, "number");
                return "bigint" == typeof e ? e : T(e)
            }(t));
            return h(E, e = this) && y((function() {
                m(e)
            }
            )) ? l(Object(r), this, C) : r
        };
        C.prototype = E,
        P && !o && (E.constructor = C),
        n({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: P
        }, {
            Number: C
        });
        var I = function(t, e) {
            for (var r, n = i ? d(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++)
                f(e, r = n[o]) && !f(t, r) && b(t, r, g(e, r))
        };
        o && S && I(c[_], S),
        (P || o) && I(c[_], x)
    }
    ,
    12145131: (t,e,r)=>{
        var n = r(21748886)
          , o = r(74706079)
          , i = r(71227733)
          , a = r(10047171).f
          , c = r(1950796);
        n({
            target: "Object",
            stat: !0,
            forced: !c || o((function() {
                a(1)
            }
            )),
            sham: !c
        }, {
            getOwnPropertyDescriptor: function(t, e) {
                return a(i(t), e)
            }
        })
    }
    ,
    99948350: (t,e,r)=>{
        var n = r(21748886)
          , o = r(1950796)
          , i = r(82597271)
          , a = r(71227733)
          , c = r(10047171)
          , u = r(21533840);
        n({
            target: "Object",
            stat: !0,
            sham: !o
        }, {
            getOwnPropertyDescriptors: function(t) {
                for (var e, r, n = a(t), o = c.f, s = i(n), f = {}, l = 0; s.length > l; )
                    void 0 !== (r = o(n, e = s[l++])) && u(f, e, r);
                return f
            }
        })
    }
    ,
    20715693: (t,e,r)=>{
        var n = r(21748886)
          , o = r(61971151)
          , i = r(74706079)
          , a = r(41901525)
          , c = r(75212341);
        n({
            target: "Object",
            stat: !0,
            forced: !o || i((function() {
                a.f(1)
            }
            ))
        }, {
            getOwnPropertySymbols: function(t) {
                var e = a.f;
                return e ? e(c(t)) : []
            }
        })
    }
    ,
    6959499: (t,e,r)=>{
        var n = r(21748886)
          , o = r(74706079)
          , i = r(75212341)
          , a = r(63735811)
          , c = r(29954867);
        n({
            target: "Object",
            stat: !0,
            forced: o((function() {
                a(1)
            }
            )),
            sham: !c
        }, {
            getPrototypeOf: function(t) {
                return a(i(t))
            }
        })
    }
    ,
    8722696: (t,e,r)=>{
        var n = r(21748886)
          , o = r(75212341)
          , i = r(49926880);
        n({
            target: "Object",
            stat: !0,
            forced: r(74706079)((function() {
                i(1)
            }
            ))
        }, {
            keys: function(t) {
                return i(o(t))
            }
        })
    }
    ,
    87111411: (t,e,r)=>{
        var n = r(14572076)
          , o = r(74110088)
          , i = r(59330619);
        n || o(Object.prototype, "toString", i, {
            unsafe: !0
        })
    }
    ,
    29450835: (t,e,r)=>{
        var n = r(21748886)
          , o = r(82922429)
          , i = r(84898570)
          , a = r(92820651)
          , c = r(54000463)
          , u = r(61923724);
        n({
            target: "Promise",
            stat: !0,
            forced: r(33916361)
        }, {
            all: function(t) {
                var e = this
                  , r = a.f(e)
                  , n = r.resolve
                  , s = r.reject
                  , f = c((function() {
                    var r = i(e.resolve)
                      , a = []
                      , c = 0
                      , f = 1;
                    u(t, (function(t) {
                        var i = c++
                          , u = !1;
                        f++,
                        o(r, e, t).then((function(t) {
                            u || (u = !0,
                            a[i] = t,
                            --f || n(a))
                        }
                        ), s)
                    }
                    )),
                    --f || n(a)
                }
                ));
                return f.error && s(f.value),
                r.promise
            }
        })
    }
    ,
    3513043: (t,e,r)=>{
        var n = r(21748886)
          , o = r(8853163)
          , i = r(99091780).CONSTRUCTOR
          , a = r(42463494)
          , c = r(15672695)
          , u = r(10364949)
          , s = r(74110088)
          , f = a && a.prototype;
        if (n({
            target: "Promise",
            proto: !0,
            forced: i,
            real: !0
        }, {
            catch: function(t) {
                return this.then(void 0, t)
            }
        }),
        !o && u(a)) {
            var l = c("Promise").prototype.catch;
            f.catch !== l && s(f, "catch", l, {
                unsafe: !0
            })
        }
    }
    ,
    43699044: (t,e,r)=>{
        var n, o, i, a = r(21748886), c = r(8853163), u = r(83967216), s = r(67602619), f = r(82922429), l = r(74110088), h = r(76977799), p = r(58833279), v = r(25242001), y = r(84898570), d = r(10364949), g = r(2464994), b = r(64214583), m = r(7376757), w = r(56050393).set, _ = r(23990675), x = r(31112677), S = r(54000463), E = r(59756121), O = r(8493549), k = r(42463494), j = r(99091780), T = r(92820651), P = "Promise", C = j.CONSTRUCTOR, I = j.REJECTION_EVENT, A = j.SUBCLASSING, L = O.getterFor(P), R = O.set, N = k && k.prototype, D = k, M = N, F = s.TypeError, U = s.document, H = s.process, W = T.f, G = W, B = !!(U && U.createEvent && s.dispatchEvent), q = "unhandledrejection", V = function(t) {
            var e;
            return !(!g(t) || !d(e = t.then)) && e
        }, z = function(t, e) {
            var r, n, o, i = e.value, a = 1 === e.state, c = a ? t.ok : t.fail, u = t.resolve, s = t.reject, l = t.domain;
            try {
                c ? (a || (2 === e.rejection && X(e),
                e.rejection = 1),
                !0 === c ? r = i : (l && l.enter(),
                r = c(i),
                l && (l.exit(),
                o = !0)),
                r === t.promise ? s(new F("Promise-chain cycle")) : (n = V(r)) ? f(n, r, u, s) : u(r)) : s(i)
            } catch (h) {
                l && !o && l.exit(),
                s(h)
            }
        }, Y = function(t, e) {
            t.notified || (t.notified = !0,
            _((function() {
                for (var r, n = t.reactions; r = n.get(); )
                    z(r, t);
                t.notified = !1,
                e && !t.rejection && K(t)
            }
            )))
        }, $ = function(t, e, r) {
            var n, o;
            B ? ((n = U.createEvent("Event")).promise = e,
            n.reason = r,
            n.initEvent(t, !1, !0),
            s.dispatchEvent(n)) : n = {
                promise: e,
                reason: r
            },
            !I && (o = s["on" + t]) ? o(n) : t === q && x("Unhandled promise rejection", r)
        }, K = function(t) {
            f(w, s, (function() {
                var e, r = t.facade, n = t.value;
                if (J(t) && (e = S((function() {
                    u ? H.emit("unhandledRejection", n, r) : $(q, r, n)
                }
                )),
                t.rejection = u || J(t) ? 2 : 1,
                e.error))
                    throw e.value
            }
            ))
        }, J = function(t) {
            return 1 !== t.rejection && !t.parent
        }, X = function(t) {
            f(w, s, (function() {
                var e = t.facade;
                u ? H.emit("rejectionHandled", e) : $("rejectionhandled", e, t.value)
            }
            ))
        }, Q = function(t, e, r) {
            return function(n) {
                t(e, n, r)
            }
        }, Z = function(t, e, r) {
            t.done || (t.done = !0,
            r && (t = r),
            t.value = e,
            t.state = 2,
            Y(t, !0))
        }, tt = function(t, e, r) {
            if (!t.done) {
                t.done = !0,
                r && (t = r);
                try {
                    if (t.facade === e)
                        throw new F("Promise can't be resolved itself");
                    var n = V(e);
                    n ? _((function() {
                        var r = {
                            done: !1
                        };
                        try {
                            f(n, e, Q(tt, r, t), Q(Z, r, t))
                        } catch (o) {
                            Z(r, o, t)
                        }
                    }
                    )) : (t.value = e,
                    t.state = 1,
                    Y(t, !1))
                } catch (o) {
                    Z({
                        done: !1
                    }, o, t)
                }
            }
        };
        if (C && (M = (D = function(t) {
            b(this, M),
            y(t),
            f(n, this);
            var e = L(this);
            try {
                t(Q(tt, e), Q(Z, e))
            } catch (r) {
                Z(e, r)
            }
        }
        ).prototype,
        (n = function(t) {
            R(this, {
                type: P,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new E,
                rejection: !1,
                state: 0,
                value: void 0
            })
        }
        ).prototype = l(M, "then", (function(t, e) {
            var r = L(this)
              , n = W(m(this, D));
            return r.parent = !0,
            n.ok = !d(t) || t,
            n.fail = d(e) && e,
            n.domain = u ? H.domain : void 0,
            0 === r.state ? r.reactions.add(n) : _((function() {
                z(n, r)
            }
            )),
            n.promise
        }
        )),
        o = function() {
            var t = new n
              , e = L(t);
            this.promise = t,
            this.resolve = Q(tt, e),
            this.reject = Q(Z, e)
        }
        ,
        T.f = W = function(t) {
            return t === D || undefined === t ? new o(t) : G(t)
        }
        ,
        !c && d(k) && N !== Object.prototype)) {
            i = N.then,
            A || l(N, "then", (function(t, e) {
                var r = this;
                return new D((function(t, e) {
                    f(i, r, t, e)
                }
                )).then(t, e)
            }
            ), {
                unsafe: !0
            });
            try {
                delete N.constructor
            } catch (et) {}
            h && h(N, M)
        }
        a({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: C
        }, {
            Promise: D
        }),
        p(D, P, !1, !0),
        v(P)
    }
    ,
    41848162: (t,e,r)=>{
        r(43699044),
        r(29450835),
        r(3513043),
        r(51841407),
        r(12792345),
        r(95995704)
    }
    ,
    51841407: (t,e,r)=>{
        var n = r(21748886)
          , o = r(82922429)
          , i = r(84898570)
          , a = r(92820651)
          , c = r(54000463)
          , u = r(61923724);
        n({
            target: "Promise",
            stat: !0,
            forced: r(33916361)
        }, {
            race: function(t) {
                var e = this
                  , r = a.f(e)
                  , n = r.reject
                  , s = c((function() {
                    var a = i(e.resolve);
                    u(t, (function(t) {
                        o(a, e, t).then(r.resolve, n)
                    }
                    ))
                }
                ));
                return s.error && n(s.value),
                r.promise
            }
        })
    }
    ,
    12792345: (t,e,r)=>{
        var n = r(21748886)
          , o = r(92820651);
        n({
            target: "Promise",
            stat: !0,
            forced: r(99091780).CONSTRUCTOR
        }, {
            reject: function(t) {
                var e = o.f(this);
                return (0,
                e.reject)(t),
                e.promise
            }
        })
    }
    ,
    95995704: (t,e,r)=>{
        var n = r(21748886)
          , o = r(15672695)
          , i = r(8853163)
          , a = r(42463494)
          , c = r(99091780).CONSTRUCTOR
          , u = r(16919678)
          , s = o("Promise")
          , f = i && !c;
        n({
            target: "Promise",
            stat: !0,
            forced: i || c
        }, {
            resolve: function(t) {
                return u(f && this === s ? a : this, t)
            }
        })
    }
    ,
    43101177: (t,e,r)=>{
        var n = r(21748886)
          , o = r(15672695)
          , i = r(48700121)
          , a = r(40209318)
          , c = r(12028924)
          , u = r(68356135)
          , s = r(2464994)
          , f = r(95731544)
          , l = r(74706079)
          , h = o("Reflect", "construct")
          , p = Object.prototype
          , v = [].push
          , y = l((function() {
            function t() {}
            return !(h((function() {}
            ), [], t)instanceof t)
        }
        ))
          , d = !l((function() {
            h((function() {}
            ))
        }
        ))
          , g = y || d;
        n({
            target: "Reflect",
            stat: !0,
            forced: g,
            sham: g
        }, {
            construct: function(t, e) {
                c(t),
                u(e);
                var r = arguments.length < 3 ? t : c(arguments[2]);
                if (d && !y)
                    return h(t, e, r);
                if (t === r) {
                    switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0],e[1]);
                    case 3:
                        return new t(e[0],e[1],e[2]);
                    case 4:
                        return new t(e[0],e[1],e[2],e[3])
                    }
                    var n = [null];
                    return i(v, n, e),
                    new (i(a, t, n))
                }
                var o = r.prototype
                  , l = f(s(o) ? o : p)
                  , g = i(t, l, e);
                return s(g) ? g : l
            }
        })
    }
    ,
    69834160: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619)
          , i = r(58833279);
        n({
            global: !0
        }, {
            Reflect: {}
        }),
        i(o.Reflect, "Reflect", !0)
    }
    ,
    12329223: (t,e,r)=>{
        var n = r(21748886)
          , o = r(39830955);
        n({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== o
        }, {
            exec: o
        })
    }
    ,
    48270298: (t,e,r)=>{
        r(12329223);
        var n, o, i = r(21748886), a = r(82922429), c = r(10364949), u = r(68356135), s = r(67844943), f = (n = !1,
        (o = /[ac]/).exec = function() {
            return n = !0,
            /./.exec.apply(this, arguments)
        }
        ,
        !0 === o.test("abc") && n), l = /./.test;
        i({
            target: "RegExp",
            proto: !0,
            forced: !f
        }, {
            test: function(t) {
                var e = u(this)
                  , r = s(t)
                  , n = e.exec;
                if (!c(n))
                    return a(l, e, r);
                var o = a(n, e, r);
                return null !== o && (u(o),
                !0)
            }
        })
    }
    ,
    43091709: (t,e,r)=>{
        var n = r(54584174).PROPER
          , o = r(74110088)
          , i = r(68356135)
          , a = r(67844943)
          , c = r(74706079)
          , u = r(48238698)
          , s = "toString"
          , f = RegExp.prototype
          , l = f[s]
          , h = c((function() {
            return "/a/b" !== l.call({
                source: "a",
                flags: "b"
            })
        }
        ))
          , p = n && l.name !== s;
        (h || p) && o(f, s, (function() {
            var t = i(this);
            return "/" + a(t.source) + "/" + a(u(t))
        }
        ), {
            unsafe: !0
        })
    }
    ,
    45990612: (t,e,r)=>{
        var n = r(48165495).charAt
          , o = r(67844943)
          , i = r(8493549)
          , a = r(87837840)
          , c = r(9953601)
          , u = "String Iterator"
          , s = i.set
          , f = i.getterFor(u);
        a(String, "String", (function(t) {
            s(this, {
                type: u,
                string: o(t),
                index: 0
            })
        }
        ), (function() {
            var t, e = f(this), r = e.string, o = e.index;
            return o >= r.length ? c(void 0, !0) : (t = n(r, o),
            e.index += t.length,
            c(t, !1))
        }
        ))
    }
    ,
    5297841: (t,e,r)=>{
        var n = r(82922429)
          , o = r(68961036)
          , i = r(68356135)
          , a = r(92902421)
          , c = r(19240510)
          , u = r(67844943)
          , s = r(52354086)
          , f = r(11109982)
          , l = r(19064517)
          , h = r(63470250);
        o("match", (function(t, e, r) {
            return [function(e) {
                var r = s(this)
                  , o = a(e) ? void 0 : f(e, t);
                return o ? n(o, e, r) : new RegExp(e)[t](u(r))
            }
            , function(t) {
                var n = i(this)
                  , o = u(t)
                  , a = r(e, n, o);
                if (a.done)
                    return a.value;
                if (!n.global)
                    return h(n, o);
                var s = n.unicode;
                n.lastIndex = 0;
                for (var f, p = [], v = 0; null !== (f = h(n, o)); ) {
                    var y = u(f[0]);
                    p[v] = y,
                    "" === y && (n.lastIndex = l(o, c(n.lastIndex), s)),
                    v++
                }
                return 0 === v ? null : p
            }
            ]
        }
        ))
    }
    ,
    83208064: (t,e,r)=>{
        var n = r(48700121)
          , o = r(82922429)
          , i = r(96740816)
          , a = r(68961036)
          , c = r(74706079)
          , u = r(68356135)
          , s = r(10364949)
          , f = r(92902421)
          , l = r(88727515)
          , h = r(19240510)
          , p = r(67844943)
          , v = r(52354086)
          , y = r(19064517)
          , d = r(11109982)
          , g = r(32030190)
          , b = r(63470250)
          , m = r(47453651)("replace")
          , w = Math.max
          , _ = Math.min
          , x = i([].concat)
          , S = i([].push)
          , E = i("".indexOf)
          , O = i("".slice)
          , k = "$0" === "a".replace(/./, "$0")
          , j = !!/./[m] && "" === /./[m]("a", "$0");
        a("replace", (function(t, e, r) {
            var i = j ? "$" : "$0";
            return [function(t, r) {
                var n = v(this)
                  , i = f(t) ? void 0 : d(t, m);
                return i ? o(i, t, n, r) : o(e, p(n), t, r)
            }
            , function(t, o) {
                var a = u(this)
                  , c = p(t);
                if ("string" == typeof o && -1 === E(o, i) && -1 === E(o, "$<")) {
                    var f = r(e, a, c, o);
                    if (f.done)
                        return f.value
                }
                var v = s(o);
                v || (o = p(o));
                var d, m = a.global;
                m && (d = a.unicode,
                a.lastIndex = 0);
                for (var k, j = []; null !== (k = b(a, c)) && (S(j, k),
                m); ) {
                    "" === p(k[0]) && (a.lastIndex = y(c, h(a.lastIndex), d))
                }
                for (var T, P = "", C = 0, I = 0; I < j.length; I++) {
                    for (var A, L = p((k = j[I])[0]), R = w(_(l(k.index), c.length), 0), N = [], D = 1; D < k.length; D++)
                        S(N, void 0 === (T = k[D]) ? T : String(T));
                    var M = k.groups;
                    if (v) {
                        var F = x([L], N, R, c);
                        void 0 !== M && S(F, M),
                        A = p(n(o, void 0, F))
                    } else
                        A = g(L, c, R, N, M, o);
                    R >= C && (P += O(c, C, R) + A,
                    C = R + L.length)
                }
                return P + O(c, C)
            }
            ]
        }
        ), !!c((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                },
                t
            }
            ,
            "7" !== "".replace(t, "$<a>")
        }
        )) || !k || j)
    }
    ,
    69821240: (t,e,r)=>{
        var n = r(82922429)
          , o = r(96740816)
          , i = r(68961036)
          , a = r(68356135)
          , c = r(92902421)
          , u = r(52354086)
          , s = r(7376757)
          , f = r(19064517)
          , l = r(19240510)
          , h = r(67844943)
          , p = r(11109982)
          , v = r(63470250)
          , y = r(59401309)
          , d = r(74706079)
          , g = y.UNSUPPORTED_Y
          , b = Math.min
          , m = o([].push)
          , w = o("".slice)
          , _ = !d((function() {
            var t = /(?:)/
              , e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            }
            ;
            var r = "ab".split(t);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        }
        ))
          , x = "c" === "abbc".split(/(b)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length;
        i("split", (function(t, e, r) {
            var o = "0".split(void 0, 0).length ? function(t, r) {
                return void 0 === t && 0 === r ? [] : n(e, this, t, r)
            }
            : e;
            return [function(e, r) {
                var i = u(this)
                  , a = c(e) ? void 0 : p(e, t);
                return a ? n(a, e, i, r) : n(o, h(i), e, r)
            }
            , function(t, n) {
                var i = a(this)
                  , c = h(t);
                if (!x) {
                    var u = r(o, i, c, n, o !== e);
                    if (u.done)
                        return u.value
                }
                var p = s(i, RegExp)
                  , y = i.unicode
                  , d = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (g ? "g" : "y")
                  , _ = new p(g ? "^(?:" + i.source + ")" : i,d)
                  , S = void 0 === n ? 4294967295 : n >>> 0;
                if (0 === S)
                    return [];
                if (0 === c.length)
                    return null === v(_, c) ? [c] : [];
                for (var E = 0, O = 0, k = []; O < c.length; ) {
                    _.lastIndex = g ? 0 : O;
                    var j, T = v(_, g ? w(c, O) : c);
                    if (null === T || (j = b(l(_.lastIndex + (g ? O : 0)), c.length)) === E)
                        O = f(c, O, y);
                    else {
                        if (m(k, w(c, E, O)),
                        k.length === S)
                            return k;
                        for (var P = 1; P <= T.length - 1; P++)
                            if (m(k, T[P]),
                            k.length === S)
                                return k;
                        O = E = j
                    }
                }
                return m(k, w(c, E)),
                k
            }
            ]
        }
        ), x || !_, g)
    }
    ,
    7273580: (t,e,r)=>{
        r(13287279)("asyncIterator")
    }
    ,
    79395689: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619)
          , i = r(82922429)
          , a = r(96740816)
          , c = r(8853163)
          , u = r(1950796)
          , s = r(61971151)
          , f = r(74706079)
          , l = r(30715713)
          , h = r(49182329)
          , p = r(68356135)
          , v = r(71227733)
          , y = r(44912489)
          , d = r(67844943)
          , g = r(80006884)
          , b = r(95731544)
          , m = r(49926880)
          , w = r(65715312)
          , _ = r(64185914)
          , x = r(41901525)
          , S = r(10047171)
          , E = r(80104465)
          , O = r(36303361)
          , k = r(11562501)
          , j = r(74110088)
          , T = r(20525626)
          , P = r(85030289)
          , C = r(4378119)
          , I = r(17171509)
          , A = r(71894192)
          , L = r(47453651)
          , R = r(39361439)
          , N = r(13287279)
          , D = r(8387170)
          , M = r(58833279)
          , F = r(8493549)
          , U = r(95677645).forEach
          , H = C("hidden")
          , W = "Symbol"
          , G = "prototype"
          , B = F.set
          , q = F.getterFor(W)
          , V = Object[G]
          , z = o.Symbol
          , Y = z && z[G]
          , $ = o.RangeError
          , K = o.TypeError
          , J = o.QObject
          , X = S.f
          , Q = E.f
          , Z = _.f
          , tt = k.f
          , et = a([].push)
          , rt = P("symbols")
          , nt = P("op-symbols")
          , ot = P("wks")
          , it = !J || !J[G] || !J[G].findChild
          , at = function(t, e, r) {
            var n = X(V, e);
            n && delete V[e],
            Q(t, e, r),
            n && t !== V && Q(V, e, n)
        }
          , ct = u && f((function() {
            return 7 !== b(Q({}, "a", {
                get: function() {
                    return Q(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }
        )) ? at : Q
          , ut = function(t, e) {
            var r = rt[t] = b(Y);
            return B(r, {
                type: W,
                tag: t,
                description: e
            }),
            u || (r.description = e),
            r
        }
          , st = function(t, e, r) {
            t === V && st(nt, e, r),
            p(t);
            var n = y(e);
            return p(r),
            l(rt, n) ? (r.enumerable ? (l(t, H) && t[H][n] && (t[H][n] = !1),
            r = b(r, {
                enumerable: g(0, !1)
            })) : (l(t, H) || Q(t, H, g(1, b(null))),
            t[H][n] = !0),
            ct(t, n, r)) : Q(t, n, r)
        }
          , ft = function(t, e) {
            p(t);
            var r = v(e)
              , n = m(r).concat(vt(r));
            return U(n, (function(e) {
                u && !i(lt, r, e) || st(t, e, r[e])
            }
            )),
            t
        }
          , lt = function(t) {
            var e = y(t)
              , r = i(tt, this, e);
            return !(this === V && l(rt, e) && !l(nt, e)) && (!(r || !l(this, e) || !l(rt, e) || l(this, H) && this[H][e]) || r)
        }
          , ht = function(t, e) {
            var r = v(t)
              , n = y(e);
            if (r !== V || !l(rt, n) || l(nt, n)) {
                var o = X(r, n);
                return !o || !l(rt, n) || l(r, H) && r[H][n] || (o.enumerable = !0),
                o
            }
        }
          , pt = function(t) {
            var e = Z(v(t))
              , r = [];
            return U(e, (function(t) {
                l(rt, t) || l(I, t) || et(r, t)
            }
            )),
            r
        }
          , vt = function(t) {
            var e = t === V
              , r = Z(e ? nt : v(t))
              , n = [];
            return U(r, (function(t) {
                !l(rt, t) || e && !l(V, t) || et(n, rt[t])
            }
            )),
            n
        };
        s || (j(Y = (z = function() {
            if (h(Y, this))
                throw new K("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? d(arguments[0]) : void 0
              , e = A(t)
              , r = function(t) {
                var n = void 0 === this ? o : this;
                n === V && i(r, nt, t),
                l(n, H) && l(n[H], e) && (n[H][e] = !1);
                var a = g(1, t);
                try {
                    ct(n, e, a)
                } catch (c) {
                    if (!(c instanceof $))
                        throw c;
                    at(n, e, a)
                }
            };
            return u && it && ct(V, e, {
                configurable: !0,
                set: r
            }),
            ut(e, t)
        }
        )[G], "toString", (function() {
            return q(this).tag
        }
        )),
        j(z, "withoutSetter", (function(t) {
            return ut(A(t), t)
        }
        )),
        k.f = lt,
        E.f = st,
        O.f = ft,
        S.f = ht,
        w.f = _.f = pt,
        x.f = vt,
        R.f = function(t) {
            return ut(L(t), t)
        }
        ,
        u && (T(Y, "description", {
            configurable: !0,
            get: function() {
                return q(this).description
            }
        }),
        c || j(V, "propertyIsEnumerable", lt, {
            unsafe: !0
        }))),
        n({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !s,
            sham: !s
        }, {
            Symbol: z
        }),
        U(m(ot), (function(t) {
            N(t)
        }
        )),
        n({
            target: W,
            stat: !0,
            forced: !s
        }, {
            useSetter: function() {
                it = !0
            },
            useSimple: function() {
                it = !1
            }
        }),
        n({
            target: "Object",
            stat: !0,
            forced: !s,
            sham: !u
        }, {
            create: function(t, e) {
                return void 0 === e ? b(t) : ft(b(t), e)
            },
            defineProperty: st,
            defineProperties: ft,
            getOwnPropertyDescriptor: ht
        }),
        n({
            target: "Object",
            stat: !0,
            forced: !s
        }, {
            getOwnPropertyNames: pt
        }),
        D(),
        M(z, W),
        I[H] = !0
    }
    ,
    66329431: (t,e,r)=>{
        var n = r(21748886)
          , o = r(1950796)
          , i = r(67602619)
          , a = r(96740816)
          , c = r(30715713)
          , u = r(10364949)
          , s = r(49182329)
          , f = r(67844943)
          , l = r(20525626)
          , h = r(19257356)
          , p = i.Symbol
          , v = p && p.prototype;
        if (o && u(p) && (!("description"in v) || void 0 !== p().description)) {
            var y = {}
              , d = function() {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : f(arguments[0])
                  , e = s(v, this) ? new p(t) : void 0 === t ? p() : p(t);
                return "" === t && (y[e] = !0),
                e
            };
            h(d, p),
            d.prototype = v,
            v.constructor = d;
            var g = "Symbol(description detection)" === String(p("description detection"))
              , b = a(v.valueOf)
              , m = a(v.toString)
              , w = /^Symbol\((.*)\)[^)]+$/
              , _ = a("".replace)
              , x = a("".slice);
            l(v, "description", {
                configurable: !0,
                get: function() {
                    var t = b(this);
                    if (c(y, t))
                        return "";
                    var e = m(t)
                      , r = g ? x(e, 7, -1) : _(e, w, "$1");
                    return "" === r ? void 0 : r
                }
            }),
            n({
                global: !0,
                constructor: !0,
                forced: !0
            }, {
                Symbol: d
            })
        }
    }
    ,
    4164902: (t,e,r)=>{
        var n = r(21748886)
          , o = r(15672695)
          , i = r(30715713)
          , a = r(67844943)
          , c = r(85030289)
          , u = r(95355264)
          , s = c("string-to-symbol-registry")
          , f = c("symbol-to-string-registry");
        n({
            target: "Symbol",
            stat: !0,
            forced: !u
        }, {
            for: function(t) {
                var e = a(t);
                if (i(s, e))
                    return s[e];
                var r = o("Symbol")(e);
                return s[e] = r,
                f[r] = e,
                r
            }
        })
    }
    ,
    77372211: (t,e,r)=>{
        r(13287279)("iterator")
    }
    ,
    24457475: (t,e,r)=>{
        r(79395689),
        r(4164902),
        r(73331860),
        r(23917302),
        r(20715693)
    }
    ,
    73331860: (t,e,r)=>{
        var n = r(21748886)
          , o = r(30715713)
          , i = r(20603493)
          , a = r(63043927)
          , c = r(85030289)
          , u = r(95355264)
          , s = c("symbol-to-string-registry");
        n({
            target: "Symbol",
            stat: !0,
            forced: !u
        }, {
            keyFor: function(t) {
                if (!i(t))
                    throw new TypeError(a(t) + " is not a symbol");
                if (o(s, t))
                    return s[t]
            }
        })
    }
    ,
    55880580: (t,e,r)=>{
        var n = r(13287279)
          , o = r(8387170);
        n("toPrimitive"),
        o()
    }
    ,
    96956717: (t,e,r)=>{
        var n = r(15672695)
          , o = r(13287279)
          , i = r(58833279);
        o("toStringTag"),
        i(n("Symbol"), "Symbol")
    }
    ,
    66851628: (t,e,r)=>{
        var n = r(27989908)
          , o = r(28004886)
          , i = r(88727515)
          , a = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("at", (function(t) {
            var e = a(this)
              , r = o(e)
              , n = i(t)
              , c = n >= 0 ? n : r + n;
            return c < 0 || c >= r ? void 0 : e[c]
        }
        ))
    }
    ,
    52741438: (t,e,r)=>{
        var n = r(96740816)
          , o = r(27989908)
          , i = n(r(56343525))
          , a = o.aTypedArray;
        (0,
        o.exportTypedArrayMethod)("copyWithin", (function(t, e) {
            return i(a(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
        }
        ))
    }
    ,
    10426730: (t,e,r)=>{
        var n = r(27989908)
          , o = r(95677645).every
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("every", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    44669220: (t,e,r)=>{
        var n = r(27989908)
          , o = r(74081077)
          , i = r(663150)
          , a = r(20162267)
          , c = r(82922429)
          , u = r(96740816)
          , s = r(74706079)
          , f = n.aTypedArray
          , l = n.exportTypedArrayMethod
          , h = u("".slice);
        l("fill", (function(t) {
            var e = arguments.length;
            f(this);
            var r = "Big" === h(a(this), 0, 3) ? i(t) : +t;
            return c(o, this, r, e > 1 ? arguments[1] : void 0, e > 2 ? arguments[2] : void 0)
        }
        ), s((function() {
            var t = 0;
            return new Int8Array(2).fill({
                valueOf: function() {
                    return t++
                }
            }),
            1 !== t
        }
        )))
    }
    ,
    42717027: (t,e,r)=>{
        var n = r(27989908)
          , o = r(95677645).filter
          , i = r(21643637)
          , a = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("filter", (function(t) {
            var e = o(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
            return i(this, e)
        }
        ))
    }
    ,
    83534051: (t,e,r)=>{
        var n = r(27989908)
          , o = r(95677645).findIndex
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("findIndex", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    60975070: (t,e,r)=>{
        var n = r(27989908)
          , o = r(63246335).findLastIndex
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("findLastIndex", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    64770511: (t,e,r)=>{
        var n = r(27989908)
          , o = r(63246335).findLast
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("findLast", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    82081102: (t,e,r)=>{
        var n = r(27989908)
          , o = r(95677645).find
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("find", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    80673014: (t,e,r)=>{
        var n = r(27989908)
          , o = r(95677645).forEach
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("forEach", (function(t) {
            o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    23346768: (t,e,r)=>{
        var n = r(27989908)
          , o = r(39918977).includes
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("includes", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    4277211: (t,e,r)=>{
        var n = r(27989908)
          , o = r(39918977).indexOf
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("indexOf", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    53057623: (t,e,r)=>{
        var n = r(67602619)
          , o = r(74706079)
          , i = r(96740816)
          , a = r(27989908)
          , c = r(9592240)
          , u = r(47453651)("iterator")
          , s = n.Uint8Array
          , f = i(c.values)
          , l = i(c.keys)
          , h = i(c.entries)
          , p = a.aTypedArray
          , v = a.exportTypedArrayMethod
          , y = s && s.prototype
          , d = !o((function() {
            y[u].call([1])
        }
        ))
          , g = !!y && y.values && y[u] === y.values && "values" === y.values.name
          , b = function() {
            return f(p(this))
        };
        v("entries", (function() {
            return h(p(this))
        }
        ), d),
        v("keys", (function() {
            return l(p(this))
        }
        ), d),
        v("values", b, d || !g, {
            name: "values"
        }),
        v(u, b, d || !g, {
            name: "values"
        })
    }
    ,
    96959145: (t,e,r)=>{
        var n = r(27989908)
          , o = r(96740816)
          , i = n.aTypedArray
          , a = n.exportTypedArrayMethod
          , c = o([].join);
        a("join", (function(t) {
            return c(i(this), t)
        }
        ))
    }
    ,
    17537372: (t,e,r)=>{
        var n = r(27989908)
          , o = r(48700121)
          , i = r(41473339)
          , a = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("lastIndexOf", (function(t) {
            var e = arguments.length;
            return o(i, a(this), e > 1 ? [t, arguments[1]] : [t])
        }
        ))
    }
    ,
    3294979: (t,e,r)=>{
        var n = r(27989908)
          , o = r(95677645).map
          , i = r(1119524)
          , a = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("map", (function(t) {
            return o(a(this), t, arguments.length > 1 ? arguments[1] : void 0, (function(t, e) {
                return new (i(t))(e)
            }
            ))
        }
        ))
    }
    ,
    56757608: (t,e,r)=>{
        var n = r(27989908)
          , o = r(12858046).right
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("reduceRight", (function(t) {
            var e = arguments.length;
            return o(i(this), t, e, e > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    53947511: (t,e,r)=>{
        var n = r(27989908)
          , o = r(12858046).left
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("reduce", (function(t) {
            var e = arguments.length;
            return o(i(this), t, e, e > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    99730059: (t,e,r)=>{
        var n = r(27989908)
          , o = n.aTypedArray
          , i = n.exportTypedArrayMethod
          , a = Math.floor;
        i("reverse", (function() {
            for (var t, e = this, r = o(e).length, n = a(r / 2), i = 0; i < n; )
                t = e[i],
                e[i++] = e[--r],
                e[r] = t;
            return e
        }
        ))
    }
    ,
    36968941: (t,e,r)=>{
        var n = r(67602619)
          , o = r(82922429)
          , i = r(27989908)
          , a = r(28004886)
          , c = r(17405013)
          , u = r(75212341)
          , s = r(74706079)
          , f = n.RangeError
          , l = n.Int8Array
          , h = l && l.prototype
          , p = h && h.set
          , v = i.aTypedArray
          , y = i.exportTypedArrayMethod
          , d = !s((function() {
            var t = new Uint8ClampedArray(2);
            return o(p, t, {
                length: 1,
                0: 3
            }, 1),
            3 !== t[1]
        }
        ))
          , g = d && i.NATIVE_ARRAY_BUFFER_VIEWS && s((function() {
            var t = new l(2);
            return t.set(1),
            t.set("2", 1),
            0 !== t[0] || 2 !== t[1]
        }
        ));
        y("set", (function(t) {
            v(this);
            var e = c(arguments.length > 1 ? arguments[1] : void 0, 1)
              , r = u(t);
            if (d)
                return o(p, this, r, e);
            var n = this.length
              , i = a(r)
              , s = 0;
            if (i + e > n)
                throw new f("Wrong length");
            for (; s < i; )
                this[e + s] = r[s++]
        }
        ), !d || g)
    }
    ,
    40957391: (t,e,r)=>{
        var n = r(27989908)
          , o = r(1119524)
          , i = r(74706079)
          , a = r(32724544)
          , c = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("slice", (function(t, e) {
            for (var r = a(c(this), t, e), n = o(this), i = 0, u = r.length, s = new n(u); u > i; )
                s[i] = r[i++];
            return s
        }
        ), i((function() {
            new Int8Array(1).slice()
        }
        )))
    }
    ,
    2384469: (t,e,r)=>{
        var n = r(27989908)
          , o = r(95677645).some
          , i = n.aTypedArray;
        (0,
        n.exportTypedArrayMethod)("some", (function(t) {
            return o(i(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    }
    ,
    23010453: (t,e,r)=>{
        var n = r(67602619)
          , o = r(18014516)
          , i = r(74706079)
          , a = r(84898570)
          , c = r(28637144)
          , u = r(27989908)
          , s = r(62465378)
          , f = r(89728258)
          , l = r(60852652)
          , h = r(64467752)
          , p = u.aTypedArray
          , v = u.exportTypedArrayMethod
          , y = n.Uint16Array
          , d = y && o(y.prototype.sort)
          , g = !(!d || i((function() {
            d(new y(2), null)
        }
        )) && i((function() {
            d(new y(2), {})
        }
        )))
          , b = !!d && !i((function() {
            if (l)
                return l < 74;
            if (s)
                return s < 67;
            if (f)
                return !0;
            if (h)
                return h < 602;
            var t, e, r = new y(516), n = Array(516);
            for (t = 0; t < 516; t++)
                e = t % 4,
                r[t] = 515 - t,
                n[t] = t - 2 * e + 3;
            for (d(r, (function(t, e) {
                return (t / 4 | 0) - (e / 4 | 0)
            }
            )),
            t = 0; t < 516; t++)
                if (r[t] !== n[t])
                    return !0
        }
        ));
        v("sort", (function(t) {
            return void 0 !== t && a(t),
            b ? d(this, t) : c(p(this), function(t) {
                return function(e, r) {
                    return void 0 !== t ? +t(e, r) || 0 : r != r ? -1 : e != e ? 1 : 0 === e && 0 === r ? 1 / e > 0 && 1 / r < 0 ? 1 : -1 : e > r
                }
            }(t))
        }
        ), !b || g)
    }
    ,
    59709597: (t,e,r)=>{
        var n = r(67602619)
          , o = r(48700121)
          , i = r(27989908)
          , a = r(74706079)
          , c = r(32724544)
          , u = n.Int8Array
          , s = i.aTypedArray
          , f = i.exportTypedArrayMethod
          , l = [].toLocaleString
          , h = !!u && a((function() {
            l.call(new u(1))
        }
        ));
        f("toLocaleString", (function() {
            return o(l, h ? c(s(this)) : s(this), c(arguments))
        }
        ), a((function() {
            return [1, 2].toLocaleString() !== new u([1, 2]).toLocaleString()
        }
        )) || !a((function() {
            u.prototype.toLocaleString.call([1, 2])
        }
        )))
    }
    ,
    99415963: (t,e,r)=>{
        var n = r(36085948)
          , o = r(27989908)
          , i = o.aTypedArray
          , a = o.exportTypedArrayMethod
          , c = o.getTypedArrayConstructor;
        a("toReversed", (function() {
            return n(i(this), c(this))
        }
        ))
    }
    ,
    95218748: (t,e,r)=>{
        var n = r(27989908)
          , o = r(96740816)
          , i = r(84898570)
          , a = r(6790986)
          , c = n.aTypedArray
          , u = n.getTypedArrayConstructor
          , s = n.exportTypedArrayMethod
          , f = o(n.TypedArrayPrototype.sort);
        s("toSorted", (function(t) {
            void 0 !== t && i(t);
            var e = c(this)
              , r = a(u(e), e);
            return f(r, t)
        }
        ))
    }
    ,
    13264212: (t,e,r)=>{
        var n = r(27989908).exportTypedArrayMethod
          , o = r(74706079)
          , i = r(67602619)
          , a = r(96740816)
          , c = i.Uint8Array
          , u = c && c.prototype || {}
          , s = [].toString
          , f = a([].join);
        o((function() {
            s.call({})
        }
        )) && (s = function() {
            return f(this)
        }
        );
        var l = u.toString !== s;
        n("toString", s, l)
    }
    ,
    5133745: (t,e,r)=>{
        r(33244335)("Uint8", (function(t) {
            return function(e, r, n) {
                return t(this, e, r, n)
            }
        }
        ))
    }
    ,
    35464601: (t,e,r)=>{
        var n = r(901432)
          , o = r(27989908)
          , i = r(40139047)
          , a = r(88727515)
          , c = r(663150)
          , u = o.aTypedArray
          , s = o.getTypedArrayConstructor
          , f = o.exportTypedArrayMethod
          , l = !!function() {
            try {
                new Int8Array(1).with(2, {
                    valueOf: function() {
                        throw 8
                    }
                })
            } catch (t) {
                return 8 === t
            }
        }();
        f("with", {
            with: function(t, e) {
                var r = u(this)
                  , o = a(t)
                  , f = i(r) ? c(e) : +e;
                return n(r, s(r), o, f)
            }
        }.with, !l)
    }
    ,
    57817996: (t,e,r)=>{
        var n = r(67602619)
          , o = r(85377256)
          , i = r(81278240)
          , a = r(25855579)
          , c = r(86364651)
          , u = function(t) {
            if (t && t.forEach !== a)
                try {
                    c(t, "forEach", a)
                } catch (e) {
                    t.forEach = a
                }
        };
        for (var s in o)
            o[s] && u(n[s] && n[s].prototype);
        u(i)
    }
    ,
    91703721: (t,e,r)=>{
        var n = r(67602619)
          , o = r(85377256)
          , i = r(81278240)
          , a = r(9592240)
          , c = r(86364651)
          , u = r(58833279)
          , s = r(47453651)("iterator")
          , f = a.values
          , l = function(t, e) {
            if (t) {
                if (t[s] !== f)
                    try {
                        c(t, s, f)
                    } catch (n) {
                        t[s] = f
                    }
                if (u(t, e, !0),
                o[e])
                    for (var r in a)
                        if (t[r] !== a[r])
                            try {
                                c(t, r, a[r])
                            } catch (n) {
                                t[r] = a[r]
                            }
            }
        };
        for (var h in o)
            l(n[h] && n[h].prototype, h);
        l(i, "DOMTokenList")
    }
    ,
    86659147: (t,e,r)=>{
        var n = r(21748886)
          , o = r(67602619)
          , i = r(20525626)
          , a = r(1950796)
          , c = TypeError
          , u = Object.defineProperty
          , s = o.self !== o;
        try {
            if (a) {
                var f = Object.getOwnPropertyDescriptor(o, "self");
                !s && f && f.get && f.enumerable || i(o, "self", {
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        if (this !== o)
                            throw new c("Illegal invocation");
                        u(o, "self", {
                            value: t,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        })
                    },
                    configurable: !0,
                    enumerable: !0
                })
            } else
                n({
                    global: !0,
                    simple: !0,
                    forced: s
                }, {
                    self: o
                })
        } catch (l) {}
    }
}]);
