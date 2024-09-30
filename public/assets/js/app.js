/*! For license information please see app.js.LICENSE.txt */
(() => {
    var e = {
            773: (e, t, n) => {
                "use strict";
                n.d(t, { Z: () => a });
                var i = n(15),
                    r = n.n(i),
                    o = n(645),
                    s = n.n(o)()(r());
                s.push([
                    e.id,
                    '.slick-slider{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;box-sizing:border-box;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-select:none}.slick-list,.slick-slider{display:block;position:relative}.slick-list{margin:0;overflow:hidden;padding:0}.slick-list:focus{outline:none}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{transform:translateZ(0)}.slick-track{display:block;left:0;margin-left:auto;margin-right:auto;position:relative;top:0}.slick-track:after,.slick-track:before{content:"";display:table}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{border:1px solid transparent;display:block;height:auto}.slick-arrow.slick-hidden{display:none}',
                    "",
                    {
                        version: 3,
                        sources: ["webpack://./node_modules/slick-carousel/slick/slick.css"],
                        names: [],
                        mappings:
                            "AACA,cAYI,0BAA2B,CAI3B,uCAAwC,CAXxC,qBAAsB,CAUlB,kBAAmB,CARvB,wBAAyB,CACtB,qBAAsB,CACrB,oBAAqB,CACjB,gBAAiB,CAGzB,uBAIJ,CAEA,0BAfI,aAAc,CAFd,iBA0BJ,CATA,YAOI,QAAS,CAFT,eAAgB,CAGhB,SACJ,CACA,kBAEI,YACJ,CACA,qBAEI,cAAe,CACf,WACJ,CAEA,qDAOY,uBACZ,CAEA,aAMI,aAAc,CAFd,MAAO,CAGP,gBAAiB,CACjB,iBAAkB,CANlB,iBAAkB,CAClB,KAMJ,CACA,uCAKI,UAAW,CAFX,aAGJ,CACA,mBAEI,UACJ,CACA,4BAEI,iBACJ,CAEA,aAEI,YAAa,CACb,UAAW,CAEX,WAAY,CACZ,cACJ,CACA,uBAEI,WACJ,CACA,iBAEI,aACJ,CACA,+BAEI,YACJ,CACA,0BAEI,mBACJ,CACA,gCAEI,aACJ,CACA,4BAEI,iBACJ,CACA,6BAMI,4BAA6B,CAJ7B,aAAc,CAEd,WAGJ,CACA,0BACI,YACJ",
                        sourcesContent: [
                            "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n",
                        ],
                        sourceRoot: "",
                    },
                ]);
                const a = s;
            },
            645: (e) => {
                "use strict";
                e.exports = function (e) {
                    var t = [];
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = e(t);
                                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                            }).join("");
                        }),
                        (t.i = function (e, n, i) {
                            "string" == typeof e && (e = [[null, e, ""]]);
                            var r = {};
                            if (i)
                                for (var o = 0; o < this.length; o++) {
                                    var s = this[o][0];
                                    null != s && (r[s] = !0);
                                }
                            for (var a = 0; a < e.length; a++) {
                                var l = [].concat(e[a]);
                                (i && r[l[0]]) || (n && (l[2] ? (l[2] = "".concat(n, " and ").concat(l[2])) : (l[2] = n)), t.push(l));
                            }
                        }),
                        t
                    );
                };
            },
            15: (e) => {
                "use strict";
                function t(e, t) {
                    return (
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })(e) ||
                        (function (e, t) {
                            var n = e && (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
                            if (null == n) return;
                            var i,
                                r,
                                o = [],
                                s = !0,
                                a = !1;
                            try {
                                for (n = n.call(e); !(s = (i = n.next()).done) && (o.push(i.value), !t || o.length !== t); s = !0);
                            } catch (e) {
                                (a = !0), (r = e);
                            } finally {
                                try {
                                    s || null == n.return || n.return();
                                } finally {
                                    if (a) throw r;
                                }
                            }
                            return o;
                        })(e, t) ||
                        (function (e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return n(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === i && e.constructor && (i = e.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(e);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                        })(e, t) ||
                        (function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i;
                }
                e.exports = function (e) {
                    var n = t(e, 4),
                        i = n[1],
                        r = n[3];
                    if (!r) return i;
                    if ("function" == typeof btoa) {
                        var o = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                            s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),
                            a = "/*# ".concat(s, " */"),
                            l = r.sources.map(function (e) {
                                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                            });
                        return [i].concat(l).concat([a]).join("\n");
                    }
                    return [i].join("\n");
                };
            },
            755: function (e, t) {
                var n;
                !(function (t, n) {
                    "use strict";
                    "object" == typeof e.exports
                        ? (e.exports = t.document
                              ? n(t, !0)
                              : function (e) {
                                    if (!e.document) throw new Error("jQuery requires a window with a document");
                                    return n(e);
                                })
                        : n(t);
                })("undefined" != typeof window ? window : this, function (i, r) {
                    "use strict";
                    var o = [],
                        s = Object.getPrototypeOf,
                        a = o.slice,
                        l = o.flat
                            ? function (e) {
                                  return o.flat.call(e);
                              }
                            : function (e) {
                                  return o.concat.apply([], e);
                              },
                        c = o.push,
                        u = o.indexOf,
                        d = {},
                        p = d.toString,
                        f = d.hasOwnProperty,
                        h = f.toString,
                        g = h.call(Object),
                        m = {},
                        v = function (e) {
                            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                        },
                        y = function (e) {
                            return null != e && e === e.window;
                        },
                        b = i.document,
                        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
                    function x(e, t, n) {
                        var i,
                            r,
                            o = (n = n || b).createElement("script");
                        if (((o.text = e), t)) for (i in w) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, r);
                        n.head.appendChild(o).parentNode.removeChild(o);
                    }
                    function _(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e;
                    }
                    var T = "3.6.0",
                        k = function (e, t) {
                            return new k.fn.init(e, t);
                        };
                    function C(e) {
                        var t = !!e && "length" in e && e.length,
                            n = _(e);
                        return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                    }
                    (k.fn = k.prototype = {
                        jquery: T,
                        constructor: k,
                        length: 0,
                        toArray: function () {
                            return a.call(this);
                        },
                        get: function (e) {
                            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
                        },
                        pushStack: function (e) {
                            var t = k.merge(this.constructor(), e);
                            return (t.prevObject = this), t;
                        },
                        each: function (e) {
                            return k.each(this, e);
                        },
                        map: function (e) {
                            return this.pushStack(
                                k.map(this, function (t, n) {
                                    return e.call(t, n, t);
                                })
                            );
                        },
                        slice: function () {
                            return this.pushStack(a.apply(this, arguments));
                        },
                        first: function () {
                            return this.eq(0);
                        },
                        last: function () {
                            return this.eq(-1);
                        },
                        even: function () {
                            return this.pushStack(
                                k.grep(this, function (e, t) {
                                    return (t + 1) % 2;
                                })
                            );
                        },
                        odd: function () {
                            return this.pushStack(
                                k.grep(this, function (e, t) {
                                    return t % 2;
                                })
                            );
                        },
                        eq: function (e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                        },
                        end: function () {
                            return this.prevObject || this.constructor();
                        },
                        push: c,
                        sort: o.sort,
                        splice: o.splice,
                    }),
                        (k.extend = k.fn.extend = function () {
                            var e,
                                t,
                                n,
                                i,
                                r,
                                o,
                                s = arguments[0] || {},
                                a = 1,
                                l = arguments.length,
                                c = !1;
                            for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || v(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                                if (null != (e = arguments[a]))
                                    for (t in e)
                                        (i = e[t]),
                                            "__proto__" !== t &&
                                                s !== i &&
                                                (c && i && (k.isPlainObject(i) || (r = Array.isArray(i)))
                                                    ? ((n = s[t]), (o = r && !Array.isArray(n) ? [] : r || k.isPlainObject(n) ? n : {}), (r = !1), (s[t] = k.extend(c, o, i)))
                                                    : void 0 !== i && (s[t] = i));
                            return s;
                        }),
                        k.extend({
                            expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (e) {
                                throw new Error(e);
                            },
                            noop: function () {},
                            isPlainObject: function (e) {
                                var t, n;
                                return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === g));
                            },
                            isEmptyObject: function (e) {
                                var t;
                                for (t in e) return !1;
                                return !0;
                            },
                            globalEval: function (e, t, n) {
                                x(e, { nonce: t && t.nonce }, n);
                            },
                            each: function (e, t) {
                                var n,
                                    i = 0;
                                if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                                return e;
                            },
                            makeArray: function (e, t) {
                                var n = t || [];
                                return null != e && (C(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
                            },
                            inArray: function (e, t, n) {
                                return null == t ? -1 : u.call(t, e, n);
                            },
                            merge: function (e, t) {
                                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                                return (e.length = r), e;
                            },
                            grep: function (e, t, n) {
                                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                                return i;
                            },
                            map: function (e, t, n) {
                                var i,
                                    r,
                                    o = 0,
                                    s = [];
                                if (C(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                                return l(s);
                            },
                            guid: 1,
                            support: m,
                        }),
                        "function" == typeof Symbol && (k.fn[Symbol.iterator] = o[Symbol.iterator]),
                        k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                            d["[object " + t + "]"] = t.toLowerCase();
                        });
                    var A = (function (e) {
                        var t,
                            n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m,
                            v,
                            y,
                            b,
                            w = "sizzle" + 1 * new Date(),
                            x = e.document,
                            _ = 0,
                            T = 0,
                            k = le(),
                            C = le(),
                            A = le(),
                            S = le(),
                            $ = function (e, t) {
                                return e === t && (d = !0), 0;
                            },
                            E = {}.hasOwnProperty,
                            O = [],
                            D = O.pop,
                            P = O.push,
                            M = O.push,
                            L = O.slice,
                            N = function (e, t) {
                                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            j = "[\\x20\\t\\r\\n\\f]",
                            I = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            q = "\\[[\\x20\\t\\r\\n\\f]*(" + I + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
                            R = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                            H = new RegExp(j + "+", "g"),
                            B = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            F = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            U = new RegExp(j + "|>"),
                            Y = new RegExp(R),
                            X = new RegExp("^" + I + "$"),
                            G = {
                                ID: new RegExp("^#(" + I + ")"),
                                CLASS: new RegExp("^\\.(" + I + ")"),
                                TAG: new RegExp("^(" + I + "|[*])"),
                                ATTR: new RegExp("^" + q),
                                PSEUDO: new RegExp("^" + R),
                                CHILD: new RegExp(
                                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                                    "i"
                                ),
                                bool: new RegExp("^(?:" + z + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
                            },
                            V = /HTML$/i,
                            K = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            Z = /^[^{]+\{\s*\[native \w/,
                            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function (e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                            },
                            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            re = function (e, t) {
                                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                            },
                            oe = function () {
                                p();
                            },
                            se = we(
                                function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            M.apply((O = L.call(x.childNodes)), x.childNodes), O[x.childNodes.length].nodeType;
                        } catch (e) {
                            M = {
                                apply: O.length
                                    ? function (e, t) {
                                          P.apply(e, L.call(t));
                                      }
                                    : function (e, t) {
                                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                          e.length = n - 1;
                                      },
                            };
                        }
                        function ae(e, t, i, r) {
                            var o,
                                a,
                                c,
                                u,
                                d,
                                h,
                                v,
                                y = t && t.ownerDocument,
                                x = t ? t.nodeType : 9;
                            if (((i = i || []), "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))) return i;
                            if (!r && (p(t), (t = t || f), g)) {
                                if (11 !== x && (d = Q.exec(e)))
                                    if ((o = d[1])) {
                                        if (9 === x) {
                                            if (!(c = t.getElementById(o))) return i;
                                            if (c.id === o) return i.push(c), i;
                                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i;
                                    } else {
                                        if (d[2]) return M.apply(i, t.getElementsByTagName(e)), i;
                                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return M.apply(i, t.getElementsByClassName(o)), i;
                                    }
                                if (n.qsa && !S[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                                    if (((v = e), (y = t), 1 === x && (U.test(e) || W.test(e)))) {
                                        for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, re)) : t.setAttribute("id", (u = w))), a = (h = s(e)).length; a--; )
                                            h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                                        v = h.join(",");
                                    }
                                    try {
                                        return M.apply(i, y.querySelectorAll(v)), i;
                                    } catch (t) {
                                        S(e, !0);
                                    } finally {
                                        u === w && t.removeAttribute("id");
                                    }
                                }
                            }
                            return l(e.replace(B, "$1"), t, i, r);
                        }
                        function le() {
                            var e = [];
                            return function t(n, r) {
                                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
                            };
                        }
                        function ce(e) {
                            return (e[w] = !0), e;
                        }
                        function ue(e) {
                            var t = f.createElement("fieldset");
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), (t = null);
                            }
                        }
                        function de(e, t) {
                            for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
                        }
                        function pe(e, t) {
                            var n = t && e,
                                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (i) return i;
                            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function fe(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e;
                            };
                        }
                        function he(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e;
                            };
                        }
                        function ge(e) {
                            return function (t) {
                                return "form" in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? "label" in t
                                            ? "label" in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                                        : t.disabled === e
                                    : "label" in t && t.disabled === e;
                            };
                        }
                        function me(e) {
                            return ce(function (t) {
                                return (
                                    (t = +t),
                                    ce(function (n, i) {
                                        for (var r, o = e([], n.length, t), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                                    })
                                );
                            });
                        }
                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (t in ((n = ae.support = {}),
                        (o = ae.isXML = function (e) {
                            var t = e && e.namespaceURI,
                                n = e && (e.ownerDocument || e).documentElement;
                            return !V.test(t || (n && n.nodeName) || "HTML");
                        }),
                        (p = ae.setDocument = function (e) {
                            var t,
                                r,
                                s = e ? e.ownerDocument || e : x;
                            return s != f && 9 === s.nodeType && s.documentElement
                                ? ((h = (f = s).documentElement),
                                  (g = !o(f)),
                                  x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
                                  (n.scope = ue(function (e) {
                                      return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                                  })),
                                  (n.attributes = ue(function (e) {
                                      return (e.className = "i"), !e.getAttribute("className");
                                  })),
                                  (n.getElementsByTagName = ue(function (e) {
                                      return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                                  })),
                                  (n.getElementsByClassName = Z.test(f.getElementsByClassName)),
                                  (n.getById = ue(function (e) {
                                      return (h.appendChild(e).id = w), !f.getElementsByName || !f.getElementsByName(w).length;
                                  })),
                                  n.getById
                                      ? ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n,
                                                    i,
                                                    r,
                                                    o = t.getElementById(e);
                                                if (o) {
                                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                    for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                }
                                                return [];
                                            }
                                        })),
                                  (i.find.TAG = n.getElementsByTagName
                                      ? function (e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                        }
                                      : function (e, t) {
                                            var n,
                                                i = [],
                                                r = 0,
                                                o = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                                return i;
                                            }
                                            return o;
                                        }),
                                  (i.find.CLASS =
                                      n.getElementsByClassName &&
                                      function (e, t) {
                                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                      }),
                                  (v = []),
                                  (m = []),
                                  (n.qsa = Z.test(f.querySelectorAll)) &&
                                      (ue(function (e) {
                                          var t;
                                          (h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + z + ")"),
                                              e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                                              (t = f.createElement("input")).setAttribute("name", ""),
                                              e.appendChild(t),
                                              e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              e.querySelectorAll(":checked").length || m.push(":checked"),
                                              e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"),
                                              e.querySelectorAll("\\\f"),
                                              m.push("[\\r\\n\\f]");
                                      }),
                                      ue(function (e) {
                                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = f.createElement("input");
                                          t.setAttribute("type", "hidden"),
                                              e.appendChild(t).setAttribute("name", "D"),
                                              e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                              2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                              (h.appendChild(e).disabled = !0),
                                              2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                              e.querySelectorAll("*,:x"),
                                              m.push(",.*:");
                                      })),
                                  (n.matchesSelector = Z.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                                      ue(function (e) {
                                          (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", R);
                                      }),
                                  (m = m.length && new RegExp(m.join("|"))),
                                  (v = v.length && new RegExp(v.join("|"))),
                                  (t = Z.test(h.compareDocumentPosition)),
                                  (b =
                                      t || Z.test(h.contains)
                                          ? function (e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    i = t && t.parentNode;
                                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                            }
                                          : function (e, t) {
                                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                return !1;
                                            }),
                                  ($ = t
                                      ? function (e, t) {
                                            if (e === t) return (d = !0), 0;
                                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                i ||
                                                (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                                    ? e == f || (e.ownerDocument == x && b(x, e))
                                                        ? -1
                                                        : t == f || (t.ownerDocument == x && b(x, t))
                                                        ? 1
                                                        : u
                                                        ? N(u, e) - N(u, t)
                                                        : 0
                                                    : 4 & i
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (e, t) {
                                            if (e === t) return (d = !0), 0;
                                            var n,
                                                i = 0,
                                                r = e.parentNode,
                                                o = t.parentNode,
                                                s = [e],
                                                a = [t];
                                            if (!r || !o) return e == f ? -1 : t == f ? 1 : r ? -1 : o ? 1 : u ? N(u, e) - N(u, t) : 0;
                                            if (r === o) return pe(e, t);
                                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                                            for (; s[i] === a[i]; ) i++;
                                            return i ? pe(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0;
                                        }),
                                  f)
                                : f;
                        }),
                        (ae.matches = function (e, t) {
                            return ae(e, null, null, t);
                        }),
                        (ae.matchesSelector = function (e, t) {
                            if ((p(e), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                                try {
                                    var i = y.call(e, t);
                                    if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                                } catch (e) {
                                    S(t, !0);
                                }
                            return ae(t, f, null, [e]).length > 0;
                        }),
                        (ae.contains = function (e, t) {
                            return (e.ownerDocument || e) != f && p(e), b(e, t);
                        }),
                        (ae.attr = function (e, t) {
                            (e.ownerDocument || e) != f && p(e);
                            var r = i.attrHandle[t.toLowerCase()],
                                o = r && E.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                        }),
                        (ae.escape = function (e) {
                            return (e + "").replace(ie, re);
                        }),
                        (ae.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (ae.uniqueSort = function (e) {
                            var t,
                                i = [],
                                r = 0,
                                o = 0;
                            if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort($), d)) {
                                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                                for (; r--; ) e.splice(i[r], 1);
                            }
                            return (u = null), e;
                        }),
                        (r = ae.getText = function (e) {
                            var t,
                                n = "",
                                i = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                                } else if (3 === o || 4 === o) return e.nodeValue;
                            } else for (; (t = e[i++]); ) n += r(t);
                            return n;
                        }),
                        (i = ae.selectors = {
                            cacheLength: 50,
                            createPseudo: ce,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && ae.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return G.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && Y.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === t;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = k[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + j + "|$)")) &&
                                            k(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (i) {
                                        var r = ae.attr(i, e);
                                        return null == r
                                            ? "!=" === t
                                            : !t ||
                                                  ((r += ""),
                                                  "=" === t
                                                      ? r === n
                                                      : "!=" === t
                                                      ? r !== n
                                                      : "^=" === t
                                                      ? n && 0 === r.indexOf(n)
                                                      : "*=" === t
                                                      ? n && r.indexOf(n) > -1
                                                      : "$=" === t
                                                      ? n && r.slice(-n.length) === n
                                                      : "~=" === t
                                                      ? (" " + r.replace(H, " ") + " ").indexOf(n) > -1
                                                      : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3),
                                        s = "last" !== e.slice(-4),
                                        a = "of-type" === t;
                                    return 1 === i && 0 === r
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, l) {
                                              var c,
                                                  u,
                                                  d,
                                                  p,
                                                  f,
                                                  h,
                                                  g = o !== s ? "nextSibling" : "previousSibling",
                                                  m = t.parentNode,
                                                  v = a && t.nodeName.toLowerCase(),
                                                  y = !l && !a,
                                                  b = !1;
                                              if (m) {
                                                  if (o) {
                                                      for (; g; ) {
                                                          for (p = t; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                          h = g = "only" === e && !h && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((h = [s ? m.firstChild : m.lastChild]), s && y)) {
                                                      for (
                                                          b = (f = (c = (u = (d = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], p = f && m.childNodes[f];
                                                          (p = (++f && p && p[g]) || (b = f = 0) || h.pop());

                                                      )
                                                          if (1 === p.nodeType && ++b && p === t) {
                                                              u[e] = [_, f, b];
                                                              break;
                                                          }
                                                  } else if ((y && (b = f = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b))
                                                      for (
                                                          ;
                                                          (p = (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                                                          ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [_, b]), p !== t));

                                                      );
                                                  return (b -= r) === i || (b % i == 0 && b / i >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                    return r[w]
                                        ? r(t)
                                        : r.length > 1
                                        ? ((n = [e, e, "", t]),
                                          i.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? ce(function (e, n) {
                                                    for (var i, o = r(e, t), s = o.length; s--; ) e[(i = N(e, o[s]))] = !(n[i] = o[s]);
                                                })
                                              : function (e) {
                                                    return r(e, 0, n);
                                                })
                                        : r;
                                },
                            },
                            pseudos: {
                                not: ce(function (e) {
                                    var t = [],
                                        n = [],
                                        i = a(e.replace(B, "$1"));
                                    return i[w]
                                        ? ce(function (e, t, n, r) {
                                              for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                                          })
                                        : function (e, r, o) {
                                              return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: ce(function (e) {
                                    return function (t) {
                                        return ae(e, t).length > 0;
                                    };
                                }),
                                contains: ce(function (e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function (t) {
                                            return (t.textContent || r(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: ce(function (e) {
                                    return (
                                        X.test(e || "") || ae.error("unsupported lang: " + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === h;
                                },
                                focus: function (e) {
                                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !i.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return J.test(e.nodeName);
                                },
                                input: function (e) {
                                    return K.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                },
                                first: me(function () {
                                    return [0];
                                }),
                                last: me(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: me(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: me(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: me(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: me(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                                    return e;
                                }),
                                gt: me(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                                    return e;
                                }),
                            },
                        }),
                        (i.pseudos.nth = i.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            i.pseudos[t] = fe(t);
                        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
                        function ye() {}
                        function be(e) {
                            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                            return i;
                        }
                        function we(e, t, n) {
                            var i = t.dir,
                                r = t.next,
                                o = r || i,
                                s = n && "parentNode" === o,
                                a = T++;
                            return t.first
                                ? function (t, n, r) {
                                      for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
                                      return !1;
                                  }
                                : function (t, n, l) {
                                      var c,
                                          u,
                                          d,
                                          p = [_, a];
                                      if (l) {
                                          for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                                      } else
                                          for (; (t = t[i]); )
                                              if (1 === t.nodeType || s)
                                                  if (((u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                                  else {
                                                      if ((c = u[o]) && c[0] === _ && c[1] === a) return (p[2] = c[2]);
                                                      if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function xe(e) {
                            return e.length > 1
                                ? function (t, n, i) {
                                      for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function _e(e, t, n, i, r) {
                            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
                            return s;
                        }
                        function Te(e, t, n, i, r, o) {
                            return (
                                i && !i[w] && (i = Te(i)),
                                r && !r[w] && (r = Te(r, o)),
                                ce(function (o, s, a, l) {
                                    var c,
                                        u,
                                        d,
                                        p = [],
                                        f = [],
                                        h = s.length,
                                        g =
                                            o ||
                                            (function (e, t, n) {
                                                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                                return n;
                                            })(t || "*", a.nodeType ? [a] : a, []),
                                        m = !e || (!o && t) ? g : _e(g, p, e, a, l),
                                        v = n ? (r || (o ? e : h || i) ? [] : s) : m;
                                    if ((n && n(m, v, a, l), i)) for (c = _e(v, f), i(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                                    if (o) {
                                        if (r || e) {
                                            if (r) {
                                                for (c = [], u = v.length; u--; ) (d = v[u]) && c.push((m[u] = d));
                                                r(null, (v = []), c, l);
                                            }
                                            for (u = v.length; u--; ) (d = v[u]) && (c = r ? N(o, d) : p[u]) > -1 && (o[c] = !(s[c] = d));
                                        }
                                    } else (v = _e(v === s ? v.splice(h, v.length) : v)), r ? r(null, s, v, l) : M.apply(s, v);
                                })
                            );
                        }
                        function ke(e) {
                            for (
                                var t,
                                    n,
                                    r,
                                    o = e.length,
                                    s = i.relative[e[0].type],
                                    a = s || i.relative[" "],
                                    l = s ? 1 : 0,
                                    u = we(
                                        function (e) {
                                            return e === t;
                                        },
                                        a,
                                        !0
                                    ),
                                    d = we(
                                        function (e) {
                                            return N(t, e) > -1;
                                        },
                                        a,
                                        !0
                                    ),
                                    p = [
                                        function (e, n, i) {
                                            var r = (!s && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                                            return (t = null), r;
                                        },
                                    ];
                                l < o;
                                l++
                            )
                                if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
                                else {
                                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                        return Te(
                                            l > 1 && xe(p),
                                            l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"),
                                            n,
                                            l < r && ke(e.slice(l, r)),
                                            r < o && ke((e = e.slice(r))),
                                            r < o && be(e)
                                        );
                                    }
                                    p.push(n);
                                }
                            return xe(p);
                        }
                        return (
                            (ye.prototype = i.filters = i.pseudos),
                            (i.setFilters = new ye()),
                            (s = ae.tokenize = function (e, t) {
                                var n,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    c,
                                    u = C[e + " "];
                                if (u) return t ? 0 : u.slice(0);
                                for (a = e, l = [], c = i.preFilter; a; ) {
                                    for (s in ((n && !(r = F.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                                    (n = !1),
                                    (r = W.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(B, " ") }), (a = a.slice(n.length))),
                                    i.filter))
                                        !(r = G[s].exec(a)) || (c[s] && !(r = c[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                            }),
                            (a = ae.compile = function (e, t) {
                                var n,
                                    r = [],
                                    o = [],
                                    a = A[e + " "];
                                if (!a) {
                                    for (t || (t = s(e)), n = t.length; n--; ) (a = ke(t[n]))[w] ? r.push(a) : o.push(a);
                                    (a = A(
                                        e,
                                        (function (e, t) {
                                            var n = t.length > 0,
                                                r = e.length > 0,
                                                o = function (o, s, a, l, u) {
                                                    var d,
                                                        h,
                                                        m,
                                                        v = 0,
                                                        y = "0",
                                                        b = o && [],
                                                        w = [],
                                                        x = c,
                                                        T = o || (r && i.find.TAG("*", u)),
                                                        k = (_ += null == x ? 1 : Math.random() || 0.1),
                                                        C = T.length;
                                                    for (u && (c = s == f || s || u); y !== C && null != (d = T[y]); y++) {
                                                        if (r && d) {
                                                            for (h = 0, s || d.ownerDocument == f || (p(d), (a = !g)); (m = e[h++]); )
                                                                if (m(d, s || f, a)) {
                                                                    l.push(d);
                                                                    break;
                                                                }
                                                            u && (_ = k);
                                                        }
                                                        n && ((d = !m && d) && v--, o && b.push(d));
                                                    }
                                                    if (((v += y), n && y !== v)) {
                                                        for (h = 0; (m = t[h++]); ) m(b, w, s, a);
                                                        if (o) {
                                                            if (v > 0) for (; y--; ) b[y] || w[y] || (w[y] = D.call(l));
                                                            w = _e(w);
                                                        }
                                                        M.apply(l, w), u && !o && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                                                    }
                                                    return u && ((_ = k), (c = x)), b;
                                                };
                                            return n ? ce(o) : o;
                                        })(o, r)
                                    )),
                                        (a.selector = e);
                                }
                                return a;
                            }),
                            (l = ae.select = function (e, t, n, r) {
                                var o,
                                    l,
                                    c,
                                    u,
                                    d,
                                    p = "function" == typeof e && e,
                                    f = !r && s((e = p.selector || e));
                                if (((n = n || []), 1 === f.length)) {
                                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                        p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                                    }
                                    for (o = G.needsContext.test(e) ? 0 : l.length; o-- && ((c = l[o]), !i.relative[(u = c.type)]); )
                                        if ((d = i.find[u]) && (r = d(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                                            if ((l.splice(o, 1), !(e = r.length && be(l)))) return M.apply(n, r), n;
                                            break;
                                        }
                                }
                                return (p || a(e, f))(r, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                            }),
                            (n.sortStable = w.split("").sort($).join("") === w),
                            (n.detectDuplicates = !!d),
                            p(),
                            (n.sortDetached = ue(function (e) {
                                return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
                            })),
                            ue(function (e) {
                                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                            }) ||
                                de("type|href|height|width", function (e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                ue(function (e) {
                                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                })) ||
                                de("value", function (e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            ue(function (e) {
                                return null == e.getAttribute("disabled");
                            }) ||
                                de(z, function (e, t, n) {
                                    var i;
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                                }),
                            ae
                        );
                    })(i);
                    (k.find = A), (k.expr = A.selectors), (k.expr[":"] = k.expr.pseudos), (k.uniqueSort = k.unique = A.uniqueSort), (k.text = A.getText), (k.isXMLDoc = A.isXML), (k.contains = A.contains), (k.escapeSelector = A.escape);
                    var S = function (e, t, n) {
                            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                                if (1 === e.nodeType) {
                                    if (r && k(e).is(n)) break;
                                    i.push(e);
                                }
                            return i;
                        },
                        $ = function (e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n;
                        },
                        E = k.expr.match.needsContext;
                    function O(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                    }
                    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function P(e, t, n) {
                        return v(t)
                            ? k.grep(e, function (e, i) {
                                  return !!t.call(e, i, e) !== n;
                              })
                            : t.nodeType
                            ? k.grep(e, function (e) {
                                  return (e === t) !== n;
                              })
                            : "string" != typeof t
                            ? k.grep(e, function (e) {
                                  return u.call(t, e) > -1 !== n;
                              })
                            : k.filter(t, e, n);
                    }
                    (k.filter = function (e, t, n) {
                        var i = t[0];
                        return (
                            n && (e = ":not(" + e + ")"),
                            1 === t.length && 1 === i.nodeType
                                ? k.find.matchesSelector(i, e)
                                    ? [i]
                                    : []
                                : k.find.matches(
                                      e,
                                      k.grep(t, function (e) {
                                          return 1 === e.nodeType;
                                      })
                                  )
                        );
                    }),
                        k.fn.extend({
                            find: function (e) {
                                var t,
                                    n,
                                    i = this.length,
                                    r = this;
                                if ("string" != typeof e)
                                    return this.pushStack(
                                        k(e).filter(function () {
                                            for (t = 0; t < i; t++) if (k.contains(r[t], this)) return !0;
                                        })
                                    );
                                for (n = this.pushStack([]), t = 0; t < i; t++) k.find(e, r[t], n);
                                return i > 1 ? k.uniqueSort(n) : n;
                            },
                            filter: function (e) {
                                return this.pushStack(P(this, e || [], !1));
                            },
                            not: function (e) {
                                return this.pushStack(P(this, e || [], !0));
                            },
                            is: function (e) {
                                return !!P(this, "string" == typeof e && E.test(e) ? k(e) : e || [], !1).length;
                            },
                        });
                    var M,
                        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    ((k.fn.init = function (e, t, n) {
                        var i, r;
                        if (!e) return this;
                        if (((n = n || M), "string" == typeof e)) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (((t = t instanceof k ? t[0] : t), k.merge(this, k.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), D.test(i[1]) && k.isPlainObject(t)))
                                    for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this;
                            }
                            return (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
                        }
                        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(k)) : k.makeArray(e, this);
                    }).prototype = k.fn),
                        (M = k(b));
                    var N = /^(?:parents|prev(?:Until|All))/,
                        z = { children: !0, contents: !0, next: !0, prev: !0 };
                    function j(e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType; );
                        return e;
                    }
                    k.fn.extend({
                        has: function (e) {
                            var t = k(e, this),
                                n = t.length;
                            return this.filter(function () {
                                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
                            });
                        },
                        closest: function (e, t) {
                            var n,
                                i = 0,
                                r = this.length,
                                o = [],
                                s = "string" != typeof e && k(e);
                            if (!E.test(e))
                                for (; i < r; i++)
                                    for (n = this[i]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break;
                                        }
                            return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
                        },
                        index: function (e) {
                            return e ? ("string" == typeof e ? u.call(k(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        },
                        add: function (e, t) {
                            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                        },
                    }),
                        k.each(
                            {
                                parent: function (e) {
                                    var t = e.parentNode;
                                    return t && 11 !== t.nodeType ? t : null;
                                },
                                parents: function (e) {
                                    return S(e, "parentNode");
                                },
                                parentsUntil: function (e, t, n) {
                                    return S(e, "parentNode", n);
                                },
                                next: function (e) {
                                    return j(e, "nextSibling");
                                },
                                prev: function (e) {
                                    return j(e, "previousSibling");
                                },
                                nextAll: function (e) {
                                    return S(e, "nextSibling");
                                },
                                prevAll: function (e) {
                                    return S(e, "previousSibling");
                                },
                                nextUntil: function (e, t, n) {
                                    return S(e, "nextSibling", n);
                                },
                                prevUntil: function (e, t, n) {
                                    return S(e, "previousSibling", n);
                                },
                                siblings: function (e) {
                                    return $((e.parentNode || {}).firstChild, e);
                                },
                                children: function (e) {
                                    return $(e.firstChild);
                                },
                                contents: function (e) {
                                    return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
                                },
                            },
                            function (e, t) {
                                k.fn[e] = function (n, i) {
                                    var r = k.map(this, t, n);
                                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = k.filter(i, r)), this.length > 1 && (z[e] || k.uniqueSort(r), N.test(e) && r.reverse()), this.pushStack(r);
                                };
                            }
                        );
                    var I = /[^\x20\t\r\n\f]+/g;
                    function q(e) {
                        return e;
                    }
                    function R(e) {
                        throw e;
                    }
                    function H(e, t, n, i) {
                        var r;
                        try {
                            e && v((r = e.promise)) ? r.call(e).done(t).fail(n) : e && v((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
                        } catch (e) {
                            n.apply(void 0, [e]);
                        }
                    }
                    (k.Callbacks = function (e) {
                        e =
                            "string" == typeof e
                                ? (function (e) {
                                      var t = {};
                                      return (
                                          k.each(e.match(I) || [], function (e, n) {
                                              t[n] = !0;
                                          }),
                                          t
                                      );
                                  })(e)
                                : k.extend({}, e);
                        var t,
                            n,
                            i,
                            r,
                            o = [],
                            s = [],
                            a = -1,
                            l = function () {
                                for (r = r || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
                                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
                            },
                            c = {
                                add: function () {
                                    return (
                                        o &&
                                            (n && !t && ((a = o.length - 1), s.push(n)),
                                            (function t(n) {
                                                k.each(n, function (n, i) {
                                                    v(i) ? (e.unique && c.has(i)) || o.push(i) : i && i.length && "string" !== _(i) && t(i);
                                                });
                                            })(arguments),
                                            n && !t && l()),
                                        this
                                    );
                                },
                                remove: function () {
                                    return (
                                        k.each(arguments, function (e, t) {
                                            for (var n; (n = k.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                                        }),
                                        this
                                    );
                                },
                                has: function (e) {
                                    return e ? k.inArray(e, o) > -1 : o.length > 0;
                                },
                                empty: function () {
                                    return o && (o = []), this;
                                },
                                disable: function () {
                                    return (r = s = []), (o = n = ""), this;
                                },
                                disabled: function () {
                                    return !o;
                                },
                                lock: function () {
                                    return (r = s = []), n || t || (o = n = ""), this;
                                },
                                locked: function () {
                                    return !!r;
                                },
                                fireWith: function (e, n) {
                                    return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
                                },
                                fire: function () {
                                    return c.fireWith(this, arguments), this;
                                },
                                fired: function () {
                                    return !!i;
                                },
                            };
                        return c;
                    }),
                        k.extend({
                            Deferred: function (e) {
                                var t = [
                                        ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                                        ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                                        ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"],
                                    ],
                                    n = "pending",
                                    r = {
                                        state: function () {
                                            return n;
                                        },
                                        always: function () {
                                            return o.done(arguments).fail(arguments), this;
                                        },
                                        catch: function (e) {
                                            return r.then(null, e);
                                        },
                                        pipe: function () {
                                            var e = arguments;
                                            return k
                                                .Deferred(function (n) {
                                                    k.each(t, function (t, i) {
                                                        var r = v(e[i[4]]) && e[i[4]];
                                                        o[i[1]](function () {
                                                            var e = r && r.apply(this, arguments);
                                                            e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                                                        });
                                                    }),
                                                        (e = null);
                                                })
                                                .promise();
                                        },
                                        then: function (e, n, r) {
                                            var o = 0;
                                            function s(e, t, n, r) {
                                                return function () {
                                                    var a = this,
                                                        l = arguments,
                                                        c = function () {
                                                            var i, c;
                                                            if (!(e < o)) {
                                                                if ((i = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                                (c = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                                                    v(c)
                                                                        ? r
                                                                            ? c.call(i, s(o, t, q, r), s(o, t, R, r))
                                                                            : (o++, c.call(i, s(o, t, q, r), s(o, t, R, r), s(o, t, q, t.notifyWith)))
                                                                        : (n !== q && ((a = void 0), (l = [i])), (r || t.resolveWith)(a, l));
                                                            }
                                                        },
                                                        u = r
                                                            ? c
                                                            : function () {
                                                                  try {
                                                                      c();
                                                                  } catch (i) {
                                                                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(i, u.stackTrace), e + 1 >= o && (n !== R && ((a = void 0), (l = [i])), t.rejectWith(a, l));
                                                                  }
                                                              };
                                                    e ? u() : (k.Deferred.getStackHook && (u.stackTrace = k.Deferred.getStackHook()), i.setTimeout(u));
                                                };
                                            }
                                            return k
                                                .Deferred(function (i) {
                                                    t[0][3].add(s(0, i, v(r) ? r : q, i.notifyWith)), t[1][3].add(s(0, i, v(e) ? e : q)), t[2][3].add(s(0, i, v(n) ? n : R));
                                                })
                                                .promise();
                                        },
                                        promise: function (e) {
                                            return null != e ? k.extend(e, r) : r;
                                        },
                                    },
                                    o = {};
                                return (
                                    k.each(t, function (e, i) {
                                        var s = i[2],
                                            a = i[5];
                                        (r[i[1]] = s.add),
                                            a &&
                                                s.add(
                                                    function () {
                                                        n = a;
                                                    },
                                                    t[3 - e][2].disable,
                                                    t[3 - e][3].disable,
                                                    t[0][2].lock,
                                                    t[0][3].lock
                                                ),
                                            s.add(i[3].fire),
                                            (o[i[0]] = function () {
                                                return o[i[0] + "With"](this === o ? void 0 : this, arguments), this;
                                            }),
                                            (o[i[0] + "With"] = s.fireWith);
                                    }),
                                    r.promise(o),
                                    e && e.call(o, o),
                                    o
                                );
                            },
                            when: function (e) {
                                var t = arguments.length,
                                    n = t,
                                    i = Array(n),
                                    r = a.call(arguments),
                                    o = k.Deferred(),
                                    s = function (e) {
                                        return function (n) {
                                            (i[e] = this), (r[e] = arguments.length > 1 ? a.call(arguments) : n), --t || o.resolveWith(i, r);
                                        };
                                    };
                                if (t <= 1 && (H(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                                for (; n--; ) H(r[n], s(n), o.reject);
                                return o.promise();
                            },
                        });
                    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    (k.Deferred.exceptionHook = function (e, t) {
                        i.console && i.console.warn && e && B.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                    }),
                        (k.readyException = function (e) {
                            i.setTimeout(function () {
                                throw e;
                            });
                        });
                    var F = k.Deferred();
                    function W() {
                        b.removeEventListener("DOMContentLoaded", W), i.removeEventListener("load", W), k.ready();
                    }
                    (k.fn.ready = function (e) {
                        return (
                            F.then(e).catch(function (e) {
                                k.readyException(e);
                            }),
                            this
                        );
                    }),
                        k.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function (e) {
                                (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0), (!0 !== e && --k.readyWait > 0) || F.resolveWith(b, [k]));
                            },
                        }),
                        (k.ready.then = F.then),
                        "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? i.setTimeout(k.ready) : (b.addEventListener("DOMContentLoaded", W), i.addEventListener("load", W));
                    var U = function (e, t, n, i, r, o, s) {
                            var a = 0,
                                l = e.length,
                                c = null == n;
                            if ("object" === _(n)) for (a in ((r = !0), n)) U(e, t, a, n[a], !0, o, s);
                            else if (
                                void 0 !== i &&
                                ((r = !0),
                                v(i) || (s = !0),
                                c &&
                                    (s
                                        ? (t.call(e, i), (t = null))
                                        : ((c = t),
                                          (t = function (e, t, n) {
                                              return c.call(k(e), n);
                                          }))),
                                t)
                            )
                                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
                        },
                        Y = /^-ms-/,
                        X = /-([a-z])/g;
                    function G(e, t) {
                        return t.toUpperCase();
                    }
                    function V(e) {
                        return e.replace(Y, "ms-").replace(X, G);
                    }
                    var K = function (e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                    };
                    function J() {
                        this.expando = k.expando + J.uid++;
                    }
                    (J.uid = 1),
                        (J.prototype = {
                            cache: function (e) {
                                var t = e[this.expando];
                                return t || ((t = {}), K(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                            },
                            set: function (e, t, n) {
                                var i,
                                    r = this.cache(e);
                                if ("string" == typeof t) r[V(t)] = n;
                                else for (i in t) r[V(i)] = t[i];
                                return r;
                            },
                            get: function (e, t) {
                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
                            },
                            access: function (e, t, n) {
                                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                            },
                            remove: function (e, t) {
                                var n,
                                    i = e[this.expando];
                                if (void 0 !== i) {
                                    if (void 0 !== t) {
                                        n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(I) || []).length;
                                        for (; n--; ) delete i[t[n]];
                                    }
                                    (void 0 === t || k.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                                }
                            },
                            hasData: function (e) {
                                var t = e[this.expando];
                                return void 0 !== t && !k.isEmptyObject(t);
                            },
                        });
                    var Z = new J(),
                        Q = new J(),
                        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        te = /[A-Z]/g;
                    function ne(e, t, n) {
                        var i;
                        if (void 0 === n && 1 === e.nodeType)
                            if (((i = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                                try {
                                    n = (function (e) {
                                        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e));
                                    })(n);
                                } catch (e) {}
                                Q.set(e, t, n);
                            } else n = void 0;
                        return n;
                    }
                    k.extend({
                        hasData: function (e) {
                            return Q.hasData(e) || Z.hasData(e);
                        },
                        data: function (e, t, n) {
                            return Q.access(e, t, n);
                        },
                        removeData: function (e, t) {
                            Q.remove(e, t);
                        },
                        _data: function (e, t, n) {
                            return Z.access(e, t, n);
                        },
                        _removeData: function (e, t) {
                            Z.remove(e, t);
                        },
                    }),
                        k.fn.extend({
                            data: function (e, t) {
                                var n,
                                    i,
                                    r,
                                    o = this[0],
                                    s = o && o.attributes;
                                if (void 0 === e) {
                                    if (this.length && ((r = Q.get(o)), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                                        for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = V(i.slice(5))), ne(o, i, r[i]));
                                        Z.set(o, "hasDataAttrs", !0);
                                    }
                                    return r;
                                }
                                return "object" == typeof e
                                    ? this.each(function () {
                                          Q.set(this, e);
                                      })
                                    : U(
                                          this,
                                          function (t) {
                                              var n;
                                              if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                                              this.each(function () {
                                                  Q.set(this, e, t);
                                              });
                                          },
                                          null,
                                          t,
                                          arguments.length > 1,
                                          null,
                                          !0
                                      );
                            },
                            removeData: function (e) {
                                return this.each(function () {
                                    Q.remove(this, e);
                                });
                            },
                        }),
                        k.extend({
                            queue: function (e, t, n) {
                                var i;
                                if (e) return (t = (t || "fx") + "queue"), (i = Z.get(e, t)), n && (!i || Array.isArray(n) ? (i = Z.access(e, t, k.makeArray(n))) : i.push(n)), i || [];
                            },
                            dequeue: function (e, t) {
                                t = t || "fx";
                                var n = k.queue(e, t),
                                    i = n.length,
                                    r = n.shift(),
                                    o = k._queueHooks(e, t);
                                "inprogress" === r && ((r = n.shift()), i--),
                                    r &&
                                        ("fx" === t && n.unshift("inprogress"),
                                        delete o.stop,
                                        r.call(
                                            e,
                                            function () {
                                                k.dequeue(e, t);
                                            },
                                            o
                                        )),
                                    !i && o && o.empty.fire();
                            },
                            _queueHooks: function (e, t) {
                                var n = t + "queueHooks";
                                return (
                                    Z.get(e, n) ||
                                    Z.access(e, n, {
                                        empty: k.Callbacks("once memory").add(function () {
                                            Z.remove(e, [t + "queue", n]);
                                        }),
                                    })
                                );
                            },
                        }),
                        k.fn.extend({
                            queue: function (e, t) {
                                var n = 2;
                                return (
                                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                                    arguments.length < n
                                        ? k.queue(this[0], e)
                                        : void 0 === t
                                        ? this
                                        : this.each(function () {
                                              var n = k.queue(this, e, t);
                                              k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                                          })
                                );
                            },
                            dequeue: function (e) {
                                return this.each(function () {
                                    k.dequeue(this, e);
                                });
                            },
                            clearQueue: function (e) {
                                return this.queue(e || "fx", []);
                            },
                            promise: function (e, t) {
                                var n,
                                    i = 1,
                                    r = k.Deferred(),
                                    o = this,
                                    s = this.length,
                                    a = function () {
                                        --i || r.resolveWith(o, [o]);
                                    };
                                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = Z.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                                return a(), r.promise(t);
                            },
                        });
                    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                        oe = ["Top", "Right", "Bottom", "Left"],
                        se = b.documentElement,
                        ae = function (e) {
                            return k.contains(e.ownerDocument, e);
                        },
                        le = { composed: !0 };
                    se.getRootNode &&
                        (ae = function (e) {
                            return k.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
                        });
                    var ce = function (e, t) {
                        return "none" === (e = t || e).style.display || ("" === e.style.display && ae(e) && "none" === k.css(e, "display"));
                    };
                    function ue(e, t, n, i) {
                        var r,
                            o,
                            s = 20,
                            a = i
                                ? function () {
                                      return i.cur();
                                  }
                                : function () {
                                      return k.css(e, t, "");
                                  },
                            l = a(),
                            c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
                            u = e.nodeType && (k.cssNumber[t] || ("px" !== c && +l)) && re.exec(k.css(e, t));
                        if (u && u[3] !== c) {
                            for (l /= 2, c = c || u[3], u = +l || 1; s--; ) k.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (u /= o);
                            (u *= 2), k.style(e, t, u + c), (n = n || []);
                        }
                        return n && ((u = +u || +l || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = r))), r;
                    }
                    var de = {};
                    function pe(e) {
                        var t,
                            n = e.ownerDocument,
                            i = e.nodeName,
                            r = de[i];
                        return r || ((t = n.body.appendChild(n.createElement(i))), (r = k.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (de[i] = r), r);
                    }
                    function fe(e, t) {
                        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
                            (i = e[o]).style &&
                                ((n = i.style.display),
                                t ? ("none" === n && ((r[o] = Z.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && ce(i) && (r[o] = pe(i))) : "none" !== n && ((r[o] = "none"), Z.set(i, "display", n)));
                        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
                        return e;
                    }
                    k.fn.extend({
                        show: function () {
                            return fe(this, !0);
                        },
                        hide: function () {
                            return fe(this);
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e
                                ? e
                                    ? this.show()
                                    : this.hide()
                                : this.each(function () {
                                      ce(this) ? k(this).show() : k(this).hide();
                                  });
                        },
                    });
                    var he,
                        ge,
                        me = /^(?:checkbox|radio)$/i,
                        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        ye = /^$|^module$|\/(?:java|ecma)script/i;
                    (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
                        (ge = b.createElement("input")).setAttribute("type", "radio"),
                        ge.setAttribute("checked", "checked"),
                        ge.setAttribute("name", "t"),
                        he.appendChild(ge),
                        (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        (he.innerHTML = "<textarea>x</textarea>"),
                        (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
                        (he.innerHTML = "<option></option>"),
                        (m.option = !!he.lastChild);
                    var be = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""],
                    };
                    function we(e, t) {
                        var n;
                        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && O(e, t)) ? k.merge([e], n) : n;
                    }
                    function xe(e, t) {
                        for (var n = 0, i = e.length; n < i; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
                    }
                    (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead), (be.th = be.td), m.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var _e = /<|&#?\w+;/;
                    function Te(e, t, n, i, r) {
                        for (var o, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                            if ((o = e[f]) || 0 === o)
                                if ("object" === _(o)) k.merge(p, o.nodeType ? [o] : o);
                                else if (_e.test(o)) {
                                    for (s = s || d.appendChild(t.createElement("div")), a = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = be[a] || be._default, s.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], u = l[0]; u--; )
                                        s = s.lastChild;
                                    k.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
                                } else p.push(t.createTextNode(o));
                        for (d.textContent = "", f = 0; (o = p[f++]); )
                            if (i && k.inArray(o, i) > -1) r && r.push(o);
                            else if (((c = ae(o)), (s = we(d.appendChild(o), "script")), c && xe(s), n)) for (u = 0; (o = s[u++]); ) ye.test(o.type || "") && n.push(o);
                        return d;
                    }
                    var ke = /^([^.]*)(?:\.(.+)|)/;
                    function Ce() {
                        return !0;
                    }
                    function Ae() {
                        return !1;
                    }
                    function Se(e, t) {
                        return (
                            (e ===
                                (function () {
                                    try {
                                        return b.activeElement;
                                    } catch (e) {}
                                })()) ==
                            ("focus" === t)
                        );
                    }
                    function $e(e, t, n, i, r, o) {
                        var s, a;
                        if ("object" == typeof t) {
                            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) $e(e, a, n, i, t[a], o);
                            return e;
                        }
                        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Ae;
                        else if (!r) return e;
                        return (
                            1 === o &&
                                ((s = r),
                                (r = function (e) {
                                    return k().off(e), s.apply(this, arguments);
                                }),
                                (r.guid = s.guid || (s.guid = k.guid++))),
                            e.each(function () {
                                k.event.add(this, t, r, i, n);
                            })
                        );
                    }
                    function Ee(e, t, n) {
                        n
                            ? (Z.set(e, t, !1),
                              k.event.add(e, t, {
                                  namespace: !1,
                                  handler: function (e) {
                                      var i,
                                          r,
                                          o = Z.get(this, t);
                                      if (1 & e.isTrigger && this[t]) {
                                          if (o.length) (k.event.special[t] || {}).delegateType && e.stopPropagation();
                                          else if (((o = a.call(arguments)), Z.set(this, t, o), (i = n(this, t)), this[t](), o !== (r = Z.get(this, t)) || i ? Z.set(this, t, !1) : (r = {}), o !== r))
                                              return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                                      } else o.length && (Z.set(this, t, { value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                                  },
                              }))
                            : void 0 === Z.get(e, t) && k.event.add(e, t, Ce);
                    }
                    (k.event = {
                        global: {},
                        add: function (e, t, n, i, r) {
                            var o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                d,
                                p,
                                f,
                                h,
                                g,
                                m = Z.get(e);
                            if (K(e))
                                for (
                                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                                        r && k.find.matchesSelector(se, r),
                                        n.guid || (n.guid = k.guid++),
                                        (l = m.events) || (l = m.events = Object.create(null)),
                                        (s = m.handle) ||
                                            (s = m.handle = function (t) {
                                                return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0;
                                            }),
                                        c = (t = (t || "").match(I) || [""]).length;
                                    c--;

                                )
                                    (f = g = (a = ke.exec(t[c]) || [])[1]),
                                        (h = (a[2] || "").split(".").sort()),
                                        f &&
                                            ((d = k.event.special[f] || {}),
                                            (f = (r ? d.delegateType : d.bindType) || f),
                                            (d = k.event.special[f] || {}),
                                            (u = k.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && k.expr.match.needsContext.test(r), namespace: h.join(".") }, o)),
                                            (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(f, s))),
                                            d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                                            r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                                            (k.event.global[f] = !0));
                        },
                        remove: function (e, t, n, i, r) {
                            var o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                d,
                                p,
                                f,
                                h,
                                g,
                                m = Z.hasData(e) && Z.get(e);
                            if (m && (l = m.events)) {
                                for (c = (t = (t || "").match(I) || [""]).length; c--; )
                                    if (((f = g = (a = ke.exec(t[c]) || [])[1]), (h = (a[2] || "").split(".").sort()), f)) {
                                        for (d = k.event.special[f] || {}, p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; )
                                            (u = p[o]),
                                                (!r && g !== u.origType) ||
                                                    (n && n.guid !== u.guid) ||
                                                    (a && !a.test(u.namespace)) ||
                                                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                                    (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                                        s && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || k.removeEvent(e, f, m.handle), delete l[f]);
                                    } else for (f in l) k.event.remove(e, f + t[c], n, i, !0);
                                k.isEmptyObject(l) && Z.remove(e, "handle events");
                            }
                        },
                        dispatch: function (e) {
                            var t,
                                n,
                                i,
                                r,
                                o,
                                s,
                                a = new Array(arguments.length),
                                l = k.event.fix(e),
                                c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
                                u = k.event.special[l.type] || {};
                            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                            if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                                for (s = k.event.handlers.call(this, l, c), t = 0; (r = s[t++]) && !l.isPropagationStopped(); )
                                    for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                        (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                                            ((l.handleObj = o),
                                            (l.data = o.data),
                                            void 0 !== (i = ((k.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                                return u.postDispatch && u.postDispatch.call(this, l), l.result;
                            }
                        },
                        handlers: function (e, t) {
                            var n,
                                i,
                                r,
                                o,
                                s,
                                a = [],
                                l = t.delegateCount,
                                c = e.target;
                            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                                for (; c !== this; c = c.parentNode || this)
                                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = t[n]).selector + " ")] && (s[r] = i.needsContext ? k(r, this).index(c) > -1 : k.find(r, this, null, [c]).length), s[r] && o.push(i);
                                        o.length && a.push({ elem: c, handlers: o });
                                    }
                            return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(k.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: v(t)
                                    ? function () {
                                          if (this.originalEvent) return t(this.originalEvent);
                                      }
                                    : function () {
                                          if (this.originalEvent) return this.originalEvent[e];
                                      },
                                set: function (t) {
                                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                                },
                            });
                        },
                        fix: function (e) {
                            return e[k.expando] ? e : new k.Event(e);
                        },
                        special: {
                            load: { noBubble: !0 },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && O(t, "input") && Ee(t, "click", Ce), !1;
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && O(t, "input") && Ee(t, "click"), !0;
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return (me.test(t.type) && t.click && O(t, "input") && Z.get(t, "click")) || O(t, "a");
                                },
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                },
                            },
                        },
                    }),
                        (k.removeEvent = function (e, t, n) {
                            e.removeEventListener && e.removeEventListener(t, n);
                        }),
                        (k.Event = function (e, t) {
                            if (!(this instanceof k.Event)) return new k.Event(e, t);
                            e && e.type
                                ? ((this.originalEvent = e),
                                  (this.type = e.type),
                                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Ae),
                                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                  (this.currentTarget = e.currentTarget),
                                  (this.relatedTarget = e.relatedTarget))
                                : (this.type = e),
                                t && k.extend(this, t),
                                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                                (this[k.expando] = !0);
                        }),
                        (k.Event.prototype = {
                            constructor: k.Event,
                            isDefaultPrevented: Ae,
                            isPropagationStopped: Ae,
                            isImmediatePropagationStopped: Ae,
                            isSimulated: !1,
                            preventDefault: function () {
                                var e = this.originalEvent;
                                (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
                            },
                            stopPropagation: function () {
                                var e = this.originalEvent;
                                (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
                            },
                            stopImmediatePropagation: function () {
                                var e = this.originalEvent;
                                (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                            },
                        }),
                        k.each(
                            {
                                altKey: !0,
                                bubbles: !0,
                                cancelable: !0,
                                changedTouches: !0,
                                ctrlKey: !0,
                                detail: !0,
                                eventPhase: !0,
                                metaKey: !0,
                                pageX: !0,
                                pageY: !0,
                                shiftKey: !0,
                                view: !0,
                                char: !0,
                                code: !0,
                                charCode: !0,
                                key: !0,
                                keyCode: !0,
                                button: !0,
                                buttons: !0,
                                clientX: !0,
                                clientY: !0,
                                offsetX: !0,
                                offsetY: !0,
                                pointerId: !0,
                                pointerType: !0,
                                screenX: !0,
                                screenY: !0,
                                targetTouches: !0,
                                toElement: !0,
                                touches: !0,
                                which: !0,
                            },
                            k.event.addProp
                        ),
                        k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                            k.event.special[e] = {
                                setup: function () {
                                    return Ee(this, e, Se), !1;
                                },
                                trigger: function () {
                                    return Ee(this, e), !0;
                                },
                                _default: function () {
                                    return !0;
                                },
                                delegateType: t,
                            };
                        }),
                        k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                            k.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function (e) {
                                    var n,
                                        i = this,
                                        r = e.relatedTarget,
                                        o = e.handleObj;
                                    return (r && (r === i || k.contains(i, r))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                                },
                            };
                        }),
                        k.fn.extend({
                            on: function (e, t, n, i) {
                                return $e(this, e, t, n, i);
                            },
                            one: function (e, t, n, i) {
                                return $e(this, e, t, n, i, 1);
                            },
                            off: function (e, t, n) {
                                var i, r;
                                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), k(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                                if ("object" == typeof e) {
                                    for (r in e) this.off(r, t, e[r]);
                                    return this;
                                }
                                return (
                                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                    !1 === n && (n = Ae),
                                    this.each(function () {
                                        k.event.remove(this, e, n, t);
                                    })
                                );
                            },
                        });
                    var Oe = /<script|<style|<link/i,
                        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                    function Me(e, t) {
                        return (O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0]) || e;
                    }
                    function Le(e) {
                        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                    }
                    function Ne(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                    }
                    function ze(e, t) {
                        var n, i, r, o, s, a;
                        if (1 === t.nodeType) {
                            if (Z.hasData(e) && (a = Z.get(e).events)) for (r in (Z.remove(t, "handle events"), a)) for (n = 0, i = a[r].length; n < i; n++) k.event.add(t, r, a[r][n]);
                            Q.hasData(e) && ((o = Q.access(e)), (s = k.extend({}, o)), Q.set(t, s));
                        }
                    }
                    function je(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && me.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
                    }
                    function Ie(e, t, n, i) {
                        t = l(t);
                        var r,
                            o,
                            s,
                            a,
                            c,
                            u,
                            d = 0,
                            p = e.length,
                            f = p - 1,
                            h = t[0],
                            g = v(h);
                        if (g || (p > 1 && "string" == typeof h && !m.checkClone && De.test(h)))
                            return e.each(function (r) {
                                var o = e.eq(r);
                                g && (t[0] = h.call(this, r, o.html())), Ie(o, t, n, i);
                            });
                        if (p && ((o = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
                            for (a = (s = k.map(we(r, "script"), Le)).length; d < p; d++) (c = r), d !== f && ((c = k.clone(c, !0, !0)), a && k.merge(s, we(c, "script"))), n.call(e[d], c, d);
                            if (a)
                                for (u = s[s.length - 1].ownerDocument, k.map(s, Ne), d = 0; d < a; d++)
                                    (c = s[d]),
                                        ye.test(c.type || "") &&
                                            !Z.access(c, "globalEval") &&
                                            k.contains(u, c) &&
                                            (c.src && "module" !== (c.type || "").toLowerCase() ? k._evalUrl && !c.noModule && k._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : x(c.textContent.replace(Pe, ""), c, u));
                        }
                        return e;
                    }
                    function qe(e, t, n) {
                        for (var i, r = t ? k.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || k.cleanData(we(i)), i.parentNode && (n && ae(i) && xe(we(i, "script")), i.parentNode.removeChild(i));
                        return e;
                    }
                    k.extend({
                        htmlPrefilter: function (e) {
                            return e;
                        },
                        clone: function (e, t, n) {
                            var i,
                                r,
                                o,
                                s,
                                a = e.cloneNode(!0),
                                l = ae(e);
                            if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || k.isXMLDoc(e))) for (s = we(a), i = 0, r = (o = we(e)).length; i < r; i++) je(o[i], s[i]);
                            if (t)
                                if (n) for (o = o || we(e), s = s || we(a), i = 0, r = o.length; i < r; i++) ze(o[i], s[i]);
                                else ze(e, a);
                            return (s = we(a, "script")).length > 0 && xe(s, !l && we(e, "script")), a;
                        },
                        cleanData: function (e) {
                            for (var t, n, i, r = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (K(n)) {
                                    if ((t = n[Z.expando])) {
                                        if (t.events) for (i in t.events) r[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
                                        n[Z.expando] = void 0;
                                    }
                                    n[Q.expando] && (n[Q.expando] = void 0);
                                }
                        },
                    }),
                        k.fn.extend({
                            detach: function (e) {
                                return qe(this, e, !0);
                            },
                            remove: function (e) {
                                return qe(this, e);
                            },
                            text: function (e) {
                                return U(
                                    this,
                                    function (e) {
                                        return void 0 === e
                                            ? k.text(this)
                                            : this.empty().each(function () {
                                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                              });
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            append: function () {
                                return Ie(this, arguments, function (e) {
                                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Me(this, e).appendChild(e);
                                });
                            },
                            prepend: function () {
                                return Ie(this, arguments, function (e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = Me(this, e);
                                        t.insertBefore(e, t.firstChild);
                                    }
                                });
                            },
                            before: function () {
                                return Ie(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this);
                                });
                            },
                            after: function () {
                                return Ie(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                                });
                            },
                            empty: function () {
                                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(we(e, !1)), (e.textContent = ""));
                                return this;
                            },
                            clone: function (e, t) {
                                return (
                                    (e = null != e && e),
                                    (t = null == t ? e : t),
                                    this.map(function () {
                                        return k.clone(this, e, t);
                                    })
                                );
                            },
                            html: function (e) {
                                return U(
                                    this,
                                    function (e) {
                                        var t = this[0] || {},
                                            n = 0,
                                            i = this.length;
                                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                        if ("string" == typeof e && !Oe.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                            e = k.htmlPrefilter(e);
                                            try {
                                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(we(t, !1)), (t.innerHTML = e));
                                                t = 0;
                                            } catch (e) {}
                                        }
                                        t && this.empty().append(e);
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            replaceWith: function () {
                                var e = [];
                                return Ie(
                                    this,
                                    arguments,
                                    function (t) {
                                        var n = this.parentNode;
                                        k.inArray(this, e) < 0 && (k.cleanData(we(this)), n && n.replaceChild(t, this));
                                    },
                                    e
                                );
                            },
                        }),
                        k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                            k.fn[e] = function (e) {
                                for (var n, i = [], r = k(e), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), k(r[s])[t](n), c.apply(i, n.get());
                                return this.pushStack(i);
                            };
                        });
                    var Re = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                        He = function (e) {
                            var t = e.ownerDocument.defaultView;
                            return (t && t.opener) || (t = i), t.getComputedStyle(e);
                        },
                        Be = function (e, t, n) {
                            var i,
                                r,
                                o = {};
                            for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
                            for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
                            return i;
                        },
                        Fe = new RegExp(oe.join("|"), "i");
                    function We(e, t, n) {
                        var i,
                            r,
                            o,
                            s,
                            a = e.style;
                        return (
                            (n = n || He(e)) &&
                                ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = k.style(e, t)),
                                !m.pixelBoxStyles() &&
                                    Re.test(s) &&
                                    Fe.test(t) &&
                                    ((i = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = r), (a.maxWidth = o))),
                            void 0 !== s ? s + "" : s
                        );
                    }
                    function Ue(e, t) {
                        return {
                            get: function () {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get;
                            },
                        };
                    }
                    !(function () {
                        function e() {
                            if (u) {
                                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                    (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                    se.appendChild(c).appendChild(u);
                                var e = i.getComputedStyle(u);
                                (n = "1%" !== e.top),
                                    (l = 12 === t(e.marginLeft)),
                                    (u.style.right = "60%"),
                                    (s = 36 === t(e.right)),
                                    (r = 36 === t(e.width)),
                                    (u.style.position = "absolute"),
                                    (o = 12 === t(u.offsetWidth / 3)),
                                    se.removeChild(c),
                                    (u = null);
                            }
                        }
                        function t(e) {
                            return Math.round(parseFloat(e));
                        }
                        var n,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c = b.createElement("div"),
                            u = b.createElement("div");
                        u.style &&
                            ((u.style.backgroundClip = "content-box"),
                            (u.cloneNode(!0).style.backgroundClip = ""),
                            (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
                            k.extend(m, {
                                boxSizingReliable: function () {
                                    return e(), r;
                                },
                                pixelBoxStyles: function () {
                                    return e(), s;
                                },
                                pixelPosition: function () {
                                    return e(), n;
                                },
                                reliableMarginLeft: function () {
                                    return e(), l;
                                },
                                scrollboxSize: function () {
                                    return e(), o;
                                },
                                reliableTrDimensions: function () {
                                    var e, t, n, r;
                                    return (
                                        null == a &&
                                            ((e = b.createElement("table")),
                                            (t = b.createElement("tr")),
                                            (n = b.createElement("div")),
                                            (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                            (t.style.cssText = "border:1px solid"),
                                            (t.style.height = "1px"),
                                            (n.style.height = "9px"),
                                            (n.style.display = "block"),
                                            se.appendChild(e).appendChild(t).appendChild(n),
                                            (r = i.getComputedStyle(t)),
                                            (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                                            se.removeChild(e)),
                                        a
                                    );
                                },
                            }));
                    })();
                    var Ye = ["Webkit", "Moz", "ms"],
                        Xe = b.createElement("div").style,
                        Ge = {};
                    function Ve(e) {
                        var t = k.cssProps[e] || Ge[e];
                        return (
                            t ||
                            (e in Xe
                                ? e
                                : (Ge[e] =
                                      (function (e) {
                                          for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; ) if ((e = Ye[n] + t) in Xe) return e;
                                      })(e) || e))
                        );
                    }
                    var Ke = /^(none|table(?!-c[ea]).+)/,
                        Je = /^--/,
                        Ze = { position: "absolute", visibility: "hidden", display: "block" },
                        Qe = { letterSpacing: "0", fontWeight: "400" };
                    function et(e, t, n) {
                        var i = re.exec(t);
                        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
                    }
                    function tt(e, t, n, i, r, o) {
                        var s = "width" === t ? 1 : 0,
                            a = 0,
                            l = 0;
                        if (n === (i ? "border" : "content")) return 0;
                        for (; s < 4; s += 2)
                            "margin" === n && (l += k.css(e, n + oe[s], !0, r)),
                                i
                                    ? ("content" === n && (l -= k.css(e, "padding" + oe[s], !0, r)), "margin" !== n && (l -= k.css(e, "border" + oe[s] + "Width", !0, r)))
                                    : ((l += k.css(e, "padding" + oe[s], !0, r)), "padding" !== n ? (l += k.css(e, "border" + oe[s] + "Width", !0, r)) : (a += k.css(e, "border" + oe[s] + "Width", !0, r)));
                        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0), l;
                    }
                    function nt(e, t, n) {
                        var i = He(e),
                            r = (!m.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                            o = r,
                            s = We(e, t, i),
                            a = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Re.test(s)) {
                            if (!n) return s;
                            s = "auto";
                        }
                        return (
                            ((!m.boxSizingReliable() && r) || (!m.reliableTrDimensions() && O(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === k.css(e, "display", !1, i))) &&
                                e.getClientRects().length &&
                                ((r = "border-box" === k.css(e, "boxSizing", !1, i)), (o = a in e) && (s = e[a])),
                            (s = parseFloat(s) || 0) + tt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
                        );
                    }
                    function it(e, t, n, i, r) {
                        return new it.prototype.init(e, t, n, i, r);
                    }
                    k.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var n = We(e, "opacity");
                                        return "" === n ? "1" : n;
                                    }
                                },
                            },
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                        },
                        cssProps: {},
                        style: function (e, t, n, i) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var r,
                                    o,
                                    s,
                                    a = V(t),
                                    l = Je.test(t),
                                    c = e.style;
                                if ((l || (t = Ve(a)), (s = k.cssHooks[t] || k.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                                "string" === (o = typeof n) && (r = re.exec(n)) && r[1] && ((n = ue(e, t, r)), (o = "number")),
                                    null != n &&
                                        n == n &&
                                        ("number" !== o || l || (n += (r && r[3]) || (k.cssNumber[a] ? "" : "px")),
                                        m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                        (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                            }
                        },
                        css: function (e, t, n, i) {
                            var r,
                                o,
                                s,
                                a = V(t);
                            return (
                                Je.test(t) || (t = Ve(a)),
                                (s = k.cssHooks[t] || k.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)),
                                void 0 === r && (r = We(e, t, i)),
                                "normal" === r && t in Qe && (r = Qe[t]),
                                "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
                            );
                        },
                    }),
                        k.each(["height", "width"], function (e, t) {
                            k.cssHooks[t] = {
                                get: function (e, n, i) {
                                    if (n)
                                        return !Ke.test(k.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                            ? nt(e, t, i)
                                            : Be(e, Ze, function () {
                                                  return nt(e, t, i);
                                              });
                                },
                                set: function (e, n, i) {
                                    var r,
                                        o = He(e),
                                        s = !m.scrollboxSize() && "absolute" === o.position,
                                        a = (s || i) && "border-box" === k.css(e, "boxSizing", !1, o),
                                        l = i ? tt(e, t, i, a, o) : 0;
                                    return (
                                        a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - 0.5)),
                                        l && (r = re.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = k.css(e, t))),
                                        et(0, n, l)
                                    );
                                },
                            };
                        }),
                        (k.cssHooks.marginLeft = Ue(m.reliableMarginLeft, function (e, t) {
                            if (t)
                                return (
                                    (parseFloat(We(e, "marginLeft")) ||
                                        e.getBoundingClientRect().left -
                                            Be(e, { marginLeft: 0 }, function () {
                                                return e.getBoundingClientRect().left;
                                            })) + "px"
                                );
                        })),
                        k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                            (k.cssHooks[e + t] = {
                                expand: function (n) {
                                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                                    return r;
                                },
                            }),
                                "margin" !== e && (k.cssHooks[e + t].set = et);
                        }),
                        k.fn.extend({
                            css: function (e, t) {
                                return U(
                                    this,
                                    function (e, t, n) {
                                        var i,
                                            r,
                                            o = {},
                                            s = 0;
                                        if (Array.isArray(t)) {
                                            for (i = He(e), r = t.length; s < r; s++) o[t[s]] = k.css(e, t[s], !1, i);
                                            return o;
                                        }
                                        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                                    },
                                    e,
                                    t,
                                    arguments.length > 1
                                );
                            },
                        }),
                        (k.Tween = it),
                        (it.prototype = {
                            constructor: it,
                            init: function (e, t, n, i, r, o) {
                                (this.elem = e), (this.prop = n), (this.easing = r || k.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (k.cssNumber[n] ? "" : "px"));
                            },
                            cur: function () {
                                var e = it.propHooks[this.prop];
                                return e && e.get ? e.get(this) : it.propHooks._default.get(this);
                            },
                            run: function (e) {
                                var t,
                                    n = it.propHooks[this.prop];
                                return (
                                    this.options.duration ? (this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                    (this.now = (this.end - this.start) * t + this.start),
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                    n && n.set ? n.set(this) : it.propHooks._default.set(this),
                                    this
                                );
                            },
                        }),
                        (it.prototype.init.prototype = it.prototype),
                        (it.propHooks = {
                            _default: {
                                get: function (e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                                },
                                set: function (e) {
                                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!k.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)]) ? (e.elem[e.prop] = e.now) : k.style(e.elem, e.prop, e.now + e.unit);
                                },
                            },
                        }),
                        (it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                            set: function (e) {
                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                            },
                        }),
                        (k.easing = {
                            linear: function (e) {
                                return e;
                            },
                            swing: function (e) {
                                return 0.5 - Math.cos(e * Math.PI) / 2;
                            },
                            _default: "swing",
                        }),
                        (k.fx = it.prototype.init),
                        (k.fx.step = {});
                    var rt,
                        ot,
                        st = /^(?:toggle|show|hide)$/,
                        at = /queueHooks$/;
                    function lt() {
                        ot && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(lt) : i.setTimeout(lt, k.fx.interval), k.fx.tick());
                    }
                    function ct() {
                        return (
                            i.setTimeout(function () {
                                rt = void 0;
                            }),
                            (rt = Date.now())
                        );
                    }
                    function ut(e, t) {
                        var n,
                            i = 0,
                            r = { height: e };
                        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
                        return t && (r.opacity = r.width = e), r;
                    }
                    function dt(e, t, n) {
                        for (var i, r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, s = r.length; o < s; o++) if ((i = r[o].call(n, t, e))) return i;
                    }
                    function pt(e, t, n) {
                        var i,
                            r,
                            o = 0,
                            s = pt.prefilters.length,
                            a = k.Deferred().always(function () {
                                delete l.elem;
                            }),
                            l = function () {
                                if (r) return !1;
                                for (var t = rt || ct(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
                            },
                            c = a.promise({
                                elem: e,
                                props: k.extend({}, t),
                                opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: rt || ct(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function (t, n) {
                                    var i = k.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                                    return c.tweens.push(i), i;
                                },
                                stop: function (t) {
                                    var n = 0,
                                        i = t ? c.tweens.length : 0;
                                    if (r) return this;
                                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                                },
                            }),
                            u = c.props;
                        for (
                            !(function (e, t) {
                                var n, i, r, o, s;
                                for (n in e)
                                    if (((r = t[(i = V(n))]), (o = e[n]), Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (s = k.cssHooks[i]) && ("expand" in s)))
                                        for (n in ((o = s.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
                                    else t[i] = r;
                            })(u, c.opts.specialEasing);
                            o < s;
                            o++
                        )
                            if ((i = pt.prefilters[o].call(c, e, u, c.opts))) return v(i.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                        return (
                            k.map(u, dt, c),
                            v(c.opts.start) && c.opts.start.call(e, c),
                            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                            k.fx.timer(k.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                            c
                        );
                    }
                    (k.Animation = k.extend(pt, {
                        tweeners: {
                            "*": [
                                function (e, t) {
                                    var n = this.createTween(e, t);
                                    return ue(n.elem, e, re.exec(t), n), n;
                                },
                            ],
                        },
                        tweener: function (e, t) {
                            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
                            for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
                        },
                        prefilters: [
                            function (e, t, n) {
                                var i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    c,
                                    u,
                                    d = "width" in t || "height" in t,
                                    p = this,
                                    f = {},
                                    h = e.style,
                                    g = e.nodeType && ce(e),
                                    m = Z.get(e, "fxshow");
                                for (i in (n.queue ||
                                    (null == (s = k._queueHooks(e, "fx")).unqueued &&
                                        ((s.unqueued = 0),
                                        (a = s.empty.fire),
                                        (s.empty.fire = function () {
                                            s.unqueued || a();
                                        })),
                                    s.unqueued++,
                                    p.always(function () {
                                        p.always(function () {
                                            s.unqueued--, k.queue(e, "fx").length || s.empty.fire();
                                        });
                                    })),
                                t))
                                    if (((r = t[i]), st.test(r))) {
                                        if ((delete t[i], (o = o || "toggle" === r), r === (g ? "hide" : "show"))) {
                                            if ("show" !== r || !m || void 0 === m[i]) continue;
                                            g = !0;
                                        }
                                        f[i] = (m && m[i]) || k.style(e, i);
                                    }
                                if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(f))
                                    for (i in (d &&
                                        1 === e.nodeType &&
                                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                        null == (c = m && m.display) && (c = Z.get(e, "display")),
                                        "none" === (u = k.css(e, "display")) && (c ? (u = c) : (fe([e], !0), (c = e.style.display || c), (u = k.css(e, "display")), fe([e]))),
                                        ("inline" === u || ("inline-block" === u && null != c)) &&
                                            "none" === k.css(e, "float") &&
                                            (l ||
                                                (p.done(function () {
                                                    h.display = c;
                                                }),
                                                null == c && ((u = h.display), (c = "none" === u ? "" : u))),
                                            (h.display = "inline-block"))),
                                    n.overflow &&
                                        ((h.overflow = "hidden"),
                                        p.always(function () {
                                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                        })),
                                    (l = !1),
                                    f))
                                        l ||
                                            (m ? "hidden" in m && (g = m.hidden) : (m = Z.access(e, "fxshow", { display: c })),
                                            o && (m.hidden = !g),
                                            g && fe([e], !0),
                                            p.done(function () {
                                                for (i in (g || fe([e]), Z.remove(e, "fxshow"), f)) k.style(e, i, f[i]);
                                            })),
                                            (l = dt(g ? m[i] : 0, i, p)),
                                            i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
                            },
                        ],
                        prefilter: function (e, t) {
                            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
                        },
                    })),
                        (k.speed = function (e, t, n) {
                            var i = e && "object" == typeof e ? k.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
                            return (
                                k.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in k.fx.speeds ? (i.duration = k.fx.speeds[i.duration]) : (i.duration = k.fx.speeds._default)),
                                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                                (i.old = i.complete),
                                (i.complete = function () {
                                    v(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue);
                                }),
                                i
                            );
                        }),
                        k.fn.extend({
                            fadeTo: function (e, t, n, i) {
                                return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                            },
                            animate: function (e, t, n, i) {
                                var r = k.isEmptyObject(e),
                                    o = k.speed(t, n, i),
                                    s = function () {
                                        var t = pt(this, k.extend({}, e), o);
                                        (r || Z.get(this, "finish")) && t.stop(!0);
                                    };
                                return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
                            },
                            stop: function (e, t, n) {
                                var i = function (e) {
                                    var t = e.stop;
                                    delete e.stop, t(n);
                                };
                                return (
                                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                    t && this.queue(e || "fx", []),
                                    this.each(function () {
                                        var t = !0,
                                            r = null != e && e + "queueHooks",
                                            o = k.timers,
                                            s = Z.get(this);
                                        if (r) s[r] && s[r].stop && i(s[r]);
                                        else for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                                        for (r = o.length; r--; ) o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                                        (!t && n) || k.dequeue(this, e);
                                    })
                                );
                            },
                            finish: function (e) {
                                return (
                                    !1 !== e && (e = e || "fx"),
                                    this.each(function () {
                                        var t,
                                            n = Z.get(this),
                                            i = n[e + "queue"],
                                            r = n[e + "queueHooks"],
                                            o = k.timers,
                                            s = i ? i.length : 0;
                                        for (n.finish = !0, k.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                        delete n.finish;
                                    })
                                );
                            },
                        }),
                        k.each(["toggle", "show", "hide"], function (e, t) {
                            var n = k.fn[t];
                            k.fn[t] = function (e, i, r) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, r);
                            };
                        }),
                        k.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                            k.fn[e] = function (e, n, i) {
                                return this.animate(t, e, n, i);
                            };
                        }),
                        (k.timers = []),
                        (k.fx.tick = function () {
                            var e,
                                t = 0,
                                n = k.timers;
                            for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || k.fx.stop(), (rt = void 0);
                        }),
                        (k.fx.timer = function (e) {
                            k.timers.push(e), k.fx.start();
                        }),
                        (k.fx.interval = 13),
                        (k.fx.start = function () {
                            ot || ((ot = !0), lt());
                        }),
                        (k.fx.stop = function () {
                            ot = null;
                        }),
                        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                        (k.fn.delay = function (e, t) {
                            return (
                                (e = (k.fx && k.fx.speeds[e]) || e),
                                (t = t || "fx"),
                                this.queue(t, function (t, n) {
                                    var r = i.setTimeout(t, e);
                                    n.stop = function () {
                                        i.clearTimeout(r);
                                    };
                                })
                            );
                        }),
                        (function () {
                            var e = b.createElement("input"),
                                t = b.createElement("select").appendChild(b.createElement("option"));
                            (e.type = "checkbox"), (m.checkOn = "" !== e.value), (m.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (m.radioValue = "t" === e.value);
                        })();
                    var ft,
                        ht = k.expr.attrHandle;
                    k.fn.extend({
                        attr: function (e, t) {
                            return U(this, k.attr, e, t, arguments.length > 1);
                        },
                        removeAttr: function (e) {
                            return this.each(function () {
                                k.removeAttr(this, e);
                            });
                        },
                    }),
                        k.extend({
                            attr: function (e, t, n) {
                                var i,
                                    r,
                                    o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return void 0 === e.getAttribute
                                        ? k.prop(e, t, n)
                                        : ((1 === o && k.isXMLDoc(e)) || (r = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ft : void 0)),
                                          void 0 !== n
                                              ? null === n
                                                  ? void k.removeAttr(e, t)
                                                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                                  ? i
                                                  : (e.setAttribute(t, n + ""), n)
                                              : r && "get" in r && null !== (i = r.get(e, t))
                                              ? i
                                              : null == (i = k.find.attr(e, t))
                                              ? void 0
                                              : i);
                            },
                            attrHooks: {
                                type: {
                                    set: function (e, t) {
                                        if (!m.radioValue && "radio" === t && O(e, "input")) {
                                            var n = e.value;
                                            return e.setAttribute("type", t), n && (e.value = n), t;
                                        }
                                    },
                                },
                            },
                            removeAttr: function (e, t) {
                                var n,
                                    i = 0,
                                    r = t && t.match(I);
                                if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                            },
                        }),
                        (ft = {
                            set: function (e, t, n) {
                                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
                            },
                        }),
                        k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
                            var n = ht[t] || k.find.attr;
                            ht[t] = function (e, t, i) {
                                var r,
                                    o,
                                    s = t.toLowerCase();
                                return i || ((o = ht[s]), (ht[s] = r), (r = null != n(e, t, i) ? s : null), (ht[s] = o)), r;
                            };
                        });
                    var gt = /^(?:input|select|textarea|button)$/i,
                        mt = /^(?:a|area)$/i;
                    function vt(e) {
                        return (e.match(I) || []).join(" ");
                    }
                    function yt(e) {
                        return (e.getAttribute && e.getAttribute("class")) || "";
                    }
                    function bt(e) {
                        return Array.isArray(e) ? e : ("string" == typeof e && e.match(I)) || [];
                    }
                    k.fn.extend({
                        prop: function (e, t) {
                            return U(this, k.prop, e, t, arguments.length > 1);
                        },
                        removeProp: function (e) {
                            return this.each(function () {
                                delete this[k.propFix[e] || e];
                            });
                        },
                    }),
                        k.extend({
                            prop: function (e, t, n) {
                                var i,
                                    r,
                                    o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return (
                                        (1 === o && k.isXMLDoc(e)) || ((t = k.propFix[t] || t), (r = k.propHooks[t])),
                                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                                    );
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (e) {
                                        var t = k.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
                                    },
                                },
                            },
                            propFix: { for: "htmlFor", class: "className" },
                        }),
                        m.optSelected ||
                            (k.propHooks.selected = {
                                get: function (e) {
                                    var t = e.parentNode;
                                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                                },
                                set: function (e) {
                                    var t = e.parentNode;
                                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                                },
                            }),
                        k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                            k.propFix[this.toLowerCase()] = this;
                        }),
                        k.fn.extend({
                            addClass: function (e) {
                                var t,
                                    n,
                                    i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l = 0;
                                if (v(e))
                                    return this.each(function (t) {
                                        k(this).addClass(e.call(this, t, yt(this)));
                                    });
                                if ((t = bt(e)).length)
                                    for (; (n = this[l++]); )
                                        if (((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))) {
                                            for (s = 0; (o = t[s++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                            r !== (a = vt(i)) && n.setAttribute("class", a);
                                        }
                                return this;
                            },
                            removeClass: function (e) {
                                var t,
                                    n,
                                    i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l = 0;
                                if (v(e))
                                    return this.each(function (t) {
                                        k(this).removeClass(e.call(this, t, yt(this)));
                                    });
                                if (!arguments.length) return this.attr("class", "");
                                if ((t = bt(e)).length)
                                    for (; (n = this[l++]); )
                                        if (((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))) {
                                            for (s = 0; (o = t[s++]); ) for (; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                                            r !== (a = vt(i)) && n.setAttribute("class", a);
                                        }
                                return this;
                            },
                            toggleClass: function (e, t) {
                                var n = typeof e,
                                    i = "string" === n || Array.isArray(e);
                                return "boolean" == typeof t && i
                                    ? t
                                        ? this.addClass(e)
                                        : this.removeClass(e)
                                    : v(e)
                                    ? this.each(function (n) {
                                          k(this).toggleClass(e.call(this, n, yt(this), t), t);
                                      })
                                    : this.each(function () {
                                          var t, r, o, s;
                                          if (i) for (r = 0, o = k(this), s = bt(e); (t = s[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                          else
                                              (void 0 !== e && "boolean" !== n) ||
                                                  ((t = yt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""));
                                      });
                            },
                            hasClass: function (e) {
                                var t,
                                    n,
                                    i = 0;
                                for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
                                return !1;
                            },
                        });
                    var wt = /\r/g;
                    k.fn.extend({
                        val: function (e) {
                            var t,
                                n,
                                i,
                                r = this[0];
                            return arguments.length
                                ? ((i = v(e)),
                                  this.each(function (n) {
                                      var r;
                                      1 === this.nodeType &&
                                          (null == (r = i ? e.call(this, n, k(this).val()) : e)
                                              ? (r = "")
                                              : "number" == typeof r
                                              ? (r += "")
                                              : Array.isArray(r) &&
                                                (r = k.map(r, function (e) {
                                                    return null == e ? "" : e + "";
                                                })),
                                          ((t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                                  }))
                                : r
                                ? (t = k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                                    ? n
                                    : "string" == typeof (n = r.value)
                                    ? n.replace(wt, "")
                                    : null == n
                                    ? ""
                                    : n
                                : void 0;
                        },
                    }),
                        k.extend({
                            valHooks: {
                                option: {
                                    get: function (e) {
                                        var t = k.find.attr(e, "value");
                                        return null != t ? t : vt(k.text(e));
                                    },
                                },
                                select: {
                                    get: function (e) {
                                        var t,
                                            n,
                                            i,
                                            r = e.options,
                                            o = e.selectedIndex,
                                            s = "select-one" === e.type,
                                            a = s ? null : [],
                                            l = s ? o + 1 : r.length;
                                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                                                if (((t = k(n).val()), s)) return t;
                                                a.push(t);
                                            }
                                        return a;
                                    },
                                    set: function (e, t) {
                                        for (var n, i, r = e.options, o = k.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = k.inArray(k.valHooks.option.get(i), o) > -1) && (n = !0);
                                        return n || (e.selectedIndex = -1), o;
                                    },
                                },
                            },
                        }),
                        k.each(["radio", "checkbox"], function () {
                            (k.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t)) return (e.checked = k.inArray(k(e).val(), t) > -1);
                                },
                            }),
                                m.checkOn ||
                                    (k.valHooks[this].get = function (e) {
                                        return null === e.getAttribute("value") ? "on" : e.value;
                                    });
                        }),
                        (m.focusin = "onfocusin" in i);
                    var xt = /^(?:focusinfocus|focusoutblur)$/,
                        _t = function (e) {
                            e.stopPropagation();
                        };
                    k.extend(k.event, {
                        trigger: function (e, t, n, r) {
                            var o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                d,
                                p,
                                h = [n || b],
                                g = f.call(e, "type") ? e.type : e,
                                m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (
                                ((s = p = a = n = n || b),
                                3 !== n.nodeType &&
                                    8 !== n.nodeType &&
                                    !xt.test(g + k.event.triggered) &&
                                    (g.indexOf(".") > -1 && ((m = g.split(".")), (g = m.shift()), m.sort()),
                                    (c = g.indexOf(":") < 0 && "on" + g),
                                    ((e = e[k.expando] ? e : new k.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                                    (e.namespace = m.join(".")),
                                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (e.result = void 0),
                                    e.target || (e.target = n),
                                    (t = null == t ? [e] : k.makeArray(t, [e])),
                                    (d = k.event.special[g] || {}),
                                    r || !d.trigger || !1 !== d.trigger.apply(n, t)))
                            ) {
                                if (!r && !d.noBubble && !y(n)) {
                                    for (l = d.delegateType || g, xt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (a = s);
                                    a === (n.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || i);
                                }
                                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                                    (p = s),
                                        (e.type = o > 1 ? l : d.bindType || g),
                                        (u = (Z.get(s, "events") || Object.create(null))[e.type] && Z.get(s, "handle")) && u.apply(s, t),
                                        (u = c && s[c]) && u.apply && K(s) && ((e.result = u.apply(s, t)), !1 === e.result && e.preventDefault());
                                return (
                                    (e.type = g),
                                    r ||
                                        e.isDefaultPrevented() ||
                                        (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                                        !K(n) ||
                                        (c &&
                                            v(n[g]) &&
                                            !y(n) &&
                                            ((a = n[c]) && (n[c] = null),
                                            (k.event.triggered = g),
                                            e.isPropagationStopped() && p.addEventListener(g, _t),
                                            n[g](),
                                            e.isPropagationStopped() && p.removeEventListener(g, _t),
                                            (k.event.triggered = void 0),
                                            a && (n[c] = a))),
                                    e.result
                                );
                            }
                        },
                        simulate: function (e, t, n) {
                            var i = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
                            k.event.trigger(i, null, t);
                        },
                    }),
                        k.fn.extend({
                            trigger: function (e, t) {
                                return this.each(function () {
                                    k.event.trigger(e, t, this);
                                });
                            },
                            triggerHandler: function (e, t) {
                                var n = this[0];
                                if (n) return k.event.trigger(e, t, n, !0);
                            },
                        }),
                        m.focusin ||
                            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                var n = function (e) {
                                    k.event.simulate(t, e.target, k.event.fix(e));
                                };
                                k.event.special[t] = {
                                    setup: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            r = Z.access(i, t);
                                        r || i.addEventListener(e, n, !0), Z.access(i, t, (r || 0) + 1);
                                    },
                                    teardown: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            r = Z.access(i, t) - 1;
                                        r ? Z.access(i, t, r) : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                                    },
                                };
                            });
                    var Tt = i.location,
                        kt = { guid: Date.now() },
                        Ct = /\?/;
                    k.parseXML = function (e) {
                        var t, n;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = new i.DOMParser().parseFromString(e, "text/xml");
                        } catch (e) {}
                        return (
                            (n = t && t.getElementsByTagName("parsererror")[0]),
                            (t && !n) ||
                                k.error(
                                    "Invalid XML: " +
                                        (n
                                            ? k
                                                  .map(n.childNodes, function (e) {
                                                      return e.textContent;
                                                  })
                                                  .join("\n")
                                            : e)
                                ),
                            t
                        );
                    };
                    var At = /\[\]$/,
                        St = /\r?\n/g,
                        $t = /^(?:submit|button|image|reset|file)$/i,
                        Et = /^(?:input|select|textarea|keygen)/i;
                    function Ot(e, t, n, i) {
                        var r;
                        if (Array.isArray(t))
                            k.each(t, function (t, r) {
                                n || At.test(e) ? i(e, r) : Ot(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
                            });
                        else if (n || "object" !== _(t)) i(e, t);
                        else for (r in t) Ot(e + "[" + r + "]", t[r], n, i);
                    }
                    (k.param = function (e, t) {
                        var n,
                            i = [],
                            r = function (e, t) {
                                var n = v(t) ? t() : t;
                                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
                            k.each(e, function () {
                                r(this.name, this.value);
                            });
                        else for (n in e) Ot(n, e[n], t, r);
                        return i.join("&");
                    }),
                        k.fn.extend({
                            serialize: function () {
                                return k.param(this.serializeArray());
                            },
                            serializeArray: function () {
                                return this.map(function () {
                                    var e = k.prop(this, "elements");
                                    return e ? k.makeArray(e) : this;
                                })
                                    .filter(function () {
                                        var e = this.type;
                                        return this.name && !k(this).is(":disabled") && Et.test(this.nodeName) && !$t.test(e) && (this.checked || !me.test(e));
                                    })
                                    .map(function (e, t) {
                                        var n = k(this).val();
                                        return null == n
                                            ? null
                                            : Array.isArray(n)
                                            ? k.map(n, function (e) {
                                                  return { name: t.name, value: e.replace(St, "\r\n") };
                                              })
                                            : { name: t.name, value: n.replace(St, "\r\n") };
                                    })
                                    .get();
                            },
                        });
                    var Dt = /%20/g,
                        Pt = /#.*$/,
                        Mt = /([?&])_=[^&]*/,
                        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Nt = /^(?:GET|HEAD)$/,
                        zt = /^\/\//,
                        jt = {},
                        It = {},
                        qt = "*/".concat("*"),
                        Rt = b.createElement("a");
                    function Ht(e) {
                        return function (t, n) {
                            "string" != typeof t && ((n = t), (t = "*"));
                            var i,
                                r = 0,
                                o = t.toLowerCase().match(I) || [];
                            if (v(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                        };
                    }
                    function Bt(e, t, n, i) {
                        var r = {},
                            o = e === It;
                        function s(a) {
                            var l;
                            return (
                                (r[a] = !0),
                                k.each(e[a] || [], function (e, a) {
                                    var c = a(t, n, i);
                                    return "string" != typeof c || o || r[c] ? (o ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
                                }),
                                l
                            );
                        }
                        return s(t.dataTypes[0]) || (!r["*"] && s("*"));
                    }
                    function Ft(e, t) {
                        var n,
                            i,
                            r = k.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                        return i && k.extend(!0, e, i), e;
                    }
                    (Rt.href = Tt.href),
                        k.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: Tt.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: { "*": qt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML },
                                flatOptions: { url: !0, context: !0 },
                            },
                            ajaxSetup: function (e, t) {
                                return t ? Ft(Ft(e, k.ajaxSettings), t) : Ft(k.ajaxSettings, e);
                            },
                            ajaxPrefilter: Ht(jt),
                            ajaxTransport: Ht(It),
                            ajax: function (e, t) {
                                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                                var n,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    c,
                                    u,
                                    d,
                                    p,
                                    f = k.ajaxSetup({}, t),
                                    h = f.context || f,
                                    g = f.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                                    m = k.Deferred(),
                                    v = k.Callbacks("once memory"),
                                    y = f.statusCode || {},
                                    w = {},
                                    x = {},
                                    _ = "canceled",
                                    T = {
                                        readyState: 0,
                                        getResponseHeader: function (e) {
                                            var t;
                                            if (c) {
                                                if (!s) for (s = {}; (t = Lt.exec(o)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                t = s[e.toLowerCase() + " "];
                                            }
                                            return null == t ? null : t.join(", ");
                                        },
                                        getAllResponseHeaders: function () {
                                            return c ? o : null;
                                        },
                                        setRequestHeader: function (e, t) {
                                            return null == c && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                                        },
                                        overrideMimeType: function (e) {
                                            return null == c && (f.mimeType = e), this;
                                        },
                                        statusCode: function (e) {
                                            var t;
                                            if (e)
                                                if (c) T.always(e[T.status]);
                                                else for (t in e) y[t] = [y[t], e[t]];
                                            return this;
                                        },
                                        abort: function (e) {
                                            var t = e || _;
                                            return n && n.abort(t), C(0, t), this;
                                        },
                                    };
                                if (
                                    (m.promise(T),
                                    (f.url = ((e || f.url || Tt.href) + "").replace(zt, Tt.protocol + "//")),
                                    (f.type = t.method || t.type || f.method || f.type),
                                    (f.dataTypes = (f.dataType || "*").toLowerCase().match(I) || [""]),
                                    null == f.crossDomain)
                                ) {
                                    l = b.createElement("a");
                                    try {
                                        (l.href = f.url), (l.href = l.href), (f.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
                                    } catch (e) {
                                        f.crossDomain = !0;
                                    }
                                }
                                if ((f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), Bt(jt, f, t, T), c)) return T;
                                for (d in ((u = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                                (f.type = f.type.toUpperCase()),
                                (f.hasContent = !Nt.test(f.type)),
                                (r = f.url.replace(Pt, "")),
                                f.hasContent
                                    ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Dt, "+"))
                                    : ((p = f.url.slice(r.length)),
                                      f.data && (f.processData || "string" == typeof f.data) && ((r += (Ct.test(r) ? "&" : "?") + f.data), delete f.data),
                                      !1 === f.cache && ((r = r.replace(Mt, "$1")), (p = (Ct.test(r) ? "&" : "?") + "_=" + kt.guid++ + p)),
                                      (f.url = r + p)),
                                f.ifModified && (k.lastModified[r] && T.setRequestHeader("If-Modified-Since", k.lastModified[r]), k.etag[r] && T.setRequestHeader("If-None-Match", k.etag[r])),
                                ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : f.accepts["*"]),
                                f.headers))
                                    T.setRequestHeader(d, f.headers[d]);
                                if (f.beforeSend && (!1 === f.beforeSend.call(h, T, f) || c)) return T.abort();
                                if (((_ = "abort"), v.add(f.complete), T.done(f.success), T.fail(f.error), (n = Bt(It, f, t, T)))) {
                                    if (((T.readyState = 1), u && g.trigger("ajaxSend", [T, f]), c)) return T;
                                    f.async &&
                                        f.timeout > 0 &&
                                        (a = i.setTimeout(function () {
                                            T.abort("timeout");
                                        }, f.timeout));
                                    try {
                                        (c = !1), n.send(w, C);
                                    } catch (e) {
                                        if (c) throw e;
                                        C(-1, e);
                                    }
                                } else C(-1, "No Transport");
                                function C(e, t, s, l) {
                                    var d,
                                        p,
                                        b,
                                        w,
                                        x,
                                        _ = t;
                                    c ||
                                        ((c = !0),
                                        a && i.clearTimeout(a),
                                        (n = void 0),
                                        (o = l || ""),
                                        (T.readyState = e > 0 ? 4 : 0),
                                        (d = (e >= 200 && e < 300) || 304 === e),
                                        s &&
                                            (w = (function (e, t, n) {
                                                for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                                if (i)
                                                    for (r in a)
                                                        if (a[r] && a[r].test(i)) {
                                                            l.unshift(r);
                                                            break;
                                                        }
                                                if (l[0] in n) o = l[0];
                                                else {
                                                    for (r in n) {
                                                        if (!l[0] || e.converters[r + " " + l[0]]) {
                                                            o = r;
                                                            break;
                                                        }
                                                        s || (s = r);
                                                    }
                                                    o = o || s;
                                                }
                                                if (o) return o !== l[0] && l.unshift(o), n[o];
                                            })(f, T, s)),
                                        !d && k.inArray("script", f.dataTypes) > -1 && k.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}),
                                        (w = (function (e, t, n, i) {
                                            var r,
                                                o,
                                                s,
                                                a,
                                                l,
                                                c = {},
                                                u = e.dataTypes.slice();
                                            if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                            for (o = u.shift(); o; )
                                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = u.shift())))
                                                    if ("*" === o) o = l;
                                                    else if ("*" !== l && l !== o) {
                                                        if (!(s = c[l + " " + o] || c["* " + o]))
                                                            for (r in c)
                                                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                                    !0 === s ? (s = c[r]) : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                                                                    break;
                                                                }
                                                        if (!0 !== s)
                                                            if (s && e.throws) t = s(t);
                                                            else
                                                                try {
                                                                    t = s(t);
                                                                } catch (e) {
                                                                    return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                                                                }
                                                    }
                                            return { state: "success", data: t };
                                        })(f, w, T, d)),
                                        d
                                            ? (f.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (k.lastModified[r] = x), (x = T.getResponseHeader("etag")) && (k.etag[r] = x)),
                                              204 === e || "HEAD" === f.type ? (_ = "nocontent") : 304 === e ? (_ = "notmodified") : ((_ = w.state), (p = w.data), (d = !(b = w.error))))
                                            : ((b = _), (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                                        (T.status = e),
                                        (T.statusText = (t || _) + ""),
                                        d ? m.resolveWith(h, [p, _, T]) : m.rejectWith(h, [T, _, b]),
                                        T.statusCode(y),
                                        (y = void 0),
                                        u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? p : b]),
                                        v.fireWith(h, [T, _]),
                                        u && (g.trigger("ajaxComplete", [T, f]), --k.active || k.event.trigger("ajaxStop")));
                                }
                                return T;
                            },
                            getJSON: function (e, t, n) {
                                return k.get(e, t, n, "json");
                            },
                            getScript: function (e, t) {
                                return k.get(e, void 0, t, "script");
                            },
                        }),
                        k.each(["get", "post"], function (e, t) {
                            k[t] = function (e, n, i, r) {
                                return v(n) && ((r = r || i), (i = n), (n = void 0)), k.ajax(k.extend({ url: e, type: t, dataType: r, data: n, success: i }, k.isPlainObject(e) && e));
                            };
                        }),
                        k.ajaxPrefilter(function (e) {
                            var t;
                            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                        }),
                        (k._evalUrl = function (e, t, n) {
                            return k.ajax({
                                url: e,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: { "text script": function () {} },
                                dataFilter: function (e) {
                                    k.globalEval(e, t, n);
                                },
                            });
                        }),
                        k.fn.extend({
                            wrapAll: function (e) {
                                var t;
                                return (
                                    this[0] &&
                                        (v(e) && (e = e.call(this[0])),
                                        (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                                        this[0].parentNode && t.insertBefore(this[0]),
                                        t
                                            .map(function () {
                                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                return e;
                                            })
                                            .append(this)),
                                    this
                                );
                            },
                            wrapInner: function (e) {
                                return v(e)
                                    ? this.each(function (t) {
                                          k(this).wrapInner(e.call(this, t));
                                      })
                                    : this.each(function () {
                                          var t = k(this),
                                              n = t.contents();
                                          n.length ? n.wrapAll(e) : t.append(e);
                                      });
                            },
                            wrap: function (e) {
                                var t = v(e);
                                return this.each(function (n) {
                                    k(this).wrapAll(t ? e.call(this, n) : e);
                                });
                            },
                            unwrap: function (e) {
                                return (
                                    this.parent(e)
                                        .not("body")
                                        .each(function () {
                                            k(this).replaceWith(this.childNodes);
                                        }),
                                    this
                                );
                            },
                        }),
                        (k.expr.pseudos.hidden = function (e) {
                            return !k.expr.pseudos.visible(e);
                        }),
                        (k.expr.pseudos.visible = function (e) {
                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                        }),
                        (k.ajaxSettings.xhr = function () {
                            try {
                                return new i.XMLHttpRequest();
                            } catch (e) {}
                        });
                    var Wt = { 0: 200, 1223: 204 },
                        Ut = k.ajaxSettings.xhr();
                    (m.cors = !!Ut && "withCredentials" in Ut),
                        (m.ajax = Ut = !!Ut),
                        k.ajaxTransport(function (e) {
                            var t, n;
                            if (m.cors || (Ut && !e.crossDomain))
                                return {
                                    send: function (r, o) {
                                        var s,
                                            a = e.xhr();
                                        if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                        for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) a.setRequestHeader(s, r[s]);
                                        (t = function (e) {
                                            return function () {
                                                t &&
                                                    ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                                    "abort" === e
                                                        ? a.abort()
                                                        : "error" === e
                                                        ? "number" != typeof a.status
                                                            ? o(0, "error")
                                                            : o(a.status, a.statusText)
                                                        : o(
                                                              Wt[a.status] || a.status,
                                                              a.statusText,
                                                              "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                              a.getAllResponseHeaders()
                                                          ));
                                            };
                                        }),
                                            (a.onload = t()),
                                            (n = a.onerror = a.ontimeout = t("error")),
                                            void 0 !== a.onabort
                                                ? (a.onabort = n)
                                                : (a.onreadystatechange = function () {
                                                      4 === a.readyState &&
                                                          i.setTimeout(function () {
                                                              t && n();
                                                          });
                                                  }),
                                            (t = t("abort"));
                                        try {
                                            a.send((e.hasContent && e.data) || null);
                                        } catch (e) {
                                            if (t) throw e;
                                        }
                                    },
                                    abort: function () {
                                        t && t();
                                    },
                                };
                        }),
                        k.ajaxPrefilter(function (e) {
                            e.crossDomain && (e.contents.script = !1);
                        }),
                        k.ajaxSetup({
                            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                            contents: { script: /\b(?:java|ecma)script\b/ },
                            converters: {
                                "text script": function (e) {
                                    return k.globalEval(e), e;
                                },
                            },
                        }),
                        k.ajaxPrefilter("script", function (e) {
                            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                        }),
                        k.ajaxTransport("script", function (e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function (i, r) {
                                        (t = k("<script>")
                                            .attr(e.scriptAttrs || {})
                                            .prop({ charset: e.scriptCharset, src: e.url })
                                            .on(
                                                "load error",
                                                (n = function (e) {
                                                    t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                                })
                                            )),
                                            b.head.appendChild(t[0]);
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        });
                    var Yt,
                        Xt = [],
                        Gt = /(=)\?(?=&|$)|\?\?/;
                    k.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = Xt.pop() || k.expando + "_" + kt.guid++;
                            return (this[e] = !0), e;
                        },
                    }),
                        k.ajaxPrefilter("json jsonp", function (e, t, n) {
                            var r,
                                o,
                                s,
                                a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                            if (a || "jsonp" === e.dataTypes[0])
                                return (
                                    (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                                    a ? (e[a] = e[a].replace(Gt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                                    (e.converters["script json"] = function () {
                                        return s || k.error(r + " was not called"), s[0];
                                    }),
                                    (e.dataTypes[0] = "json"),
                                    (o = i[r]),
                                    (i[r] = function () {
                                        s = arguments;
                                    }),
                                    n.always(function () {
                                        void 0 === o ? k(i).removeProp(r) : (i[r] = o), e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)), s && v(o) && o(s[0]), (s = o = void 0);
                                    }),
                                    "script"
                                );
                        }),
                        (m.createHTMLDocument = (((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Yt.childNodes.length)),
                        (k.parseHTML = function (e, t, n) {
                            return "string" != typeof e
                                ? []
                                : ("boolean" == typeof t && ((n = t), (t = !1)),
                                  t || (m.createHTMLDocument ? (((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(i)) : (t = b)),
                                  (o = !n && []),
                                  (r = D.exec(e)) ? [t.createElement(r[1])] : ((r = Te([e], t, o)), o && o.length && k(o).remove(), k.merge([], r.childNodes)));
                            var i, r, o;
                        }),
                        (k.fn.load = function (e, t, n) {
                            var i,
                                r,
                                o,
                                s = this,
                                a = e.indexOf(" ");
                            return (
                                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                                v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                                s.length > 0 &&
                                    k
                                        .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                                        .done(function (e) {
                                            (o = arguments), s.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e);
                                        })
                                        .always(
                                            n &&
                                                function (e, t) {
                                                    s.each(function () {
                                                        n.apply(this, o || [e.responseText, t, e]);
                                                    });
                                                }
                                        ),
                                this
                            );
                        }),
                        (k.expr.pseudos.animated = function (e) {
                            return k.grep(k.timers, function (t) {
                                return e === t.elem;
                            }).length;
                        }),
                        (k.offset = {
                            setOffset: function (e, t, n) {
                                var i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    c = k.css(e, "position"),
                                    u = k(e),
                                    d = {};
                                "static" === c && (e.style.position = "relative"),
                                    (a = u.offset()),
                                    (o = k.css(e, "top")),
                                    (l = k.css(e, "left")),
                                    ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? ((s = (i = u.position()).top), (r = i.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                                    v(t) && (t = t.call(e, n, k.extend({}, a))),
                                    null != t.top && (d.top = t.top - a.top + s),
                                    null != t.left && (d.left = t.left - a.left + r),
                                    "using" in t ? t.using.call(e, d) : u.css(d);
                            },
                        }),
                        k.fn.extend({
                            offset: function (e) {
                                if (arguments.length)
                                    return void 0 === e
                                        ? this
                                        : this.each(function (t) {
                                              k.offset.setOffset(this, e, t);
                                          });
                                var t,
                                    n,
                                    i = this[0];
                                return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                            },
                            position: function () {
                                if (this[0]) {
                                    var e,
                                        t,
                                        n,
                                        i = this[0],
                                        r = { top: 0, left: 0 };
                                    if ("fixed" === k.css(i, "position")) t = i.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"); ) e = e.parentNode;
                                        e && e !== i && 1 === e.nodeType && (((r = k(e).offset()).top += k.css(e, "borderTopWidth", !0)), (r.left += k.css(e, "borderLeftWidth", !0)));
                                    }
                                    return { top: t.top - r.top - k.css(i, "marginTop", !0), left: t.left - r.left - k.css(i, "marginLeft", !0) };
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var e = this.offsetParent; e && "static" === k.css(e, "position"); ) e = e.offsetParent;
                                    return e || se;
                                });
                            },
                        }),
                        k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                            var n = "pageYOffset" === t;
                            k.fn[e] = function (i) {
                                return U(
                                    this,
                                    function (e, i, r) {
                                        var o;
                                        if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                                    },
                                    e,
                                    i,
                                    arguments.length
                                );
                            };
                        }),
                        k.each(["top", "left"], function (e, t) {
                            k.cssHooks[t] = Ue(m.pixelPosition, function (e, n) {
                                if (n) return (n = We(e, t)), Re.test(n) ? k(e).position()[t] + "px" : n;
                            });
                        }),
                        k.each({ Height: "height", Width: "width" }, function (e, t) {
                            k.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                                k.fn[i] = function (r, o) {
                                    var s = arguments.length && (n || "boolean" != typeof r),
                                        a = n || (!0 === r || !0 === o ? "margin" : "border");
                                    return U(
                                        this,
                                        function (t, n, r) {
                                            var o;
                                            return y(t)
                                                ? 0 === i.indexOf("outer")
                                                    ? t["inner" + e]
                                                    : t.document.documentElement["client" + e]
                                                : 9 === t.nodeType
                                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                                : void 0 === r
                                                ? k.css(t, n, a)
                                                : k.style(t, n, r, a);
                                        },
                                        t,
                                        s ? r : void 0,
                                        s
                                    );
                                };
                            });
                        }),
                        k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                            k.fn[t] = function (e) {
                                return this.on(t, e);
                            };
                        }),
                        k.fn.extend({
                            bind: function (e, t, n) {
                                return this.on(e, null, t, n);
                            },
                            unbind: function (e, t) {
                                return this.off(e, null, t);
                            },
                            delegate: function (e, t, n, i) {
                                return this.on(t, e, n, i);
                            },
                            undelegate: function (e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                            },
                            hover: function (e, t) {
                                return this.mouseenter(e).mouseleave(t || e);
                            },
                        }),
                        k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                            e,
                            t
                        ) {
                            k.fn[t] = function (e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                            };
                        });
                    var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    (k.proxy = function (e, t) {
                        var n, i, r;
                        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
                            return (
                                (i = a.call(arguments, 2)),
                                (r = function () {
                                    return e.apply(t || this, i.concat(a.call(arguments)));
                                }),
                                (r.guid = e.guid = e.guid || k.guid++),
                                r
                            );
                    }),
                        (k.holdReady = function (e) {
                            e ? k.readyWait++ : k.ready(!0);
                        }),
                        (k.isArray = Array.isArray),
                        (k.parseJSON = JSON.parse),
                        (k.nodeName = O),
                        (k.isFunction = v),
                        (k.isWindow = y),
                        (k.camelCase = V),
                        (k.type = _),
                        (k.now = Date.now),
                        (k.isNumeric = function (e) {
                            var t = k.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                        }),
                        (k.trim = function (e) {
                            return null == e ? "" : (e + "").replace(Vt, "");
                        }),
                        void 0 ===
                            (n = function () {
                                return k;
                            }.apply(t, [])) || (e.exports = n);
                    var Kt = i.jQuery,
                        Jt = i.$;
                    return (
                        (k.noConflict = function (e) {
                            return i.$ === k && (i.$ = Jt), e && i.jQuery === k && (i.jQuery = Kt), k;
                        }),
                        void 0 === r && (i.jQuery = i.$ = k),
                        k
                    );
                });
            },
            90: (e) => {
                !(function (t, n) {
                    var i = (function (e, t, n) {
                        "use strict";
                        var i, r;
                        if (
                            ((function () {
                                var t,
                                    n = {
                                        lazyClass: "lazyload",
                                        loadedClass: "lazyloaded",
                                        loadingClass: "lazyloading",
                                        preloadClass: "lazypreload",
                                        errorClass: "lazyerror",
                                        autosizesClass: "lazyautosizes",
                                        fastLoadedClass: "ls-is-cached",
                                        iframeLoadMode: 0,
                                        srcAttr: "data-src",
                                        srcsetAttr: "data-srcset",
                                        sizesAttr: "data-sizes",
                                        minSize: 40,
                                        customMedia: {},
                                        init: !0,
                                        expFactor: 1.5,
                                        hFac: 0.8,
                                        loadMode: 2,
                                        loadHidden: !0,
                                        ricTimeout: 0,
                                        throttleDelay: 125,
                                    };
                                for (t in ((r = e.lazySizesConfig || e.lazysizesConfig || {}), n)) t in r || (r[t] = n[t]);
                            })(),
                            !t || !t.getElementsByClassName)
                        )
                            return { init: function () {}, cfg: r, noSupport: !0 };
                        var o = t.documentElement,
                            s = e.HTMLPictureElement,
                            a = "addEventListener",
                            l = "getAttribute",
                            c = e[a].bind(e),
                            u = e.setTimeout,
                            d = e.requestAnimationFrame || u,
                            p = e.requestIdleCallback,
                            f = /^picture$/i,
                            h = ["load", "error", "lazyincluded", "_lazyloaded"],
                            g = {},
                            m = Array.prototype.forEach,
                            v = function (e, t) {
                                return g[t] || (g[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), g[t].test(e[l]("class") || "") && g[t];
                            },
                            y = function (e, t) {
                                v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t);
                            },
                            b = function (e, t) {
                                var n;
                                (n = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "));
                            },
                            w = function (e, t, n) {
                                var i = n ? a : "removeEventListener";
                                n && w(e, t),
                                    h.forEach(function (n) {
                                        e[i](n, t);
                                    });
                            },
                            x = function (e, n, r, o, s) {
                                var a = t.createEvent("Event");
                                return r || (r = {}), (r.instance = i), a.initEvent(n, !o, !s), (a.detail = r), e.dispatchEvent(a), a;
                            },
                            _ = function (t, n) {
                                var i;
                                !s && (i = e.picturefill || r.pf) ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src), i({ reevaluate: !0, elements: [t] })) : n && n.src && (t.src = n.src);
                            },
                            T = function (e, t) {
                                return (getComputedStyle(e, null) || {})[t];
                            },
                            k = function (e, t, n) {
                                for (n = n || e.offsetWidth; n < r.minSize && t && !e._lazysizesWidth; ) (n = t.offsetWidth), (t = t.parentNode);
                                return n;
                            },
                            C =
                                ((ye = []),
                                (be = []),
                                (we = ye),
                                (xe = function () {
                                    var e = we;
                                    for (we = ye.length ? be : ye, me = !0, ve = !1; e.length; ) e.shift()();
                                    me = !1;
                                }),
                                (_e = function (e, n) {
                                    me && !n ? e.apply(this, arguments) : (we.push(e), ve || ((ve = !0), (t.hidden ? u : d)(xe)));
                                }),
                                (_e._lsFlush = xe),
                                _e),
                            A = function (e, t) {
                                return t
                                    ? function () {
                                          C(e);
                                      }
                                    : function () {
                                          var t = this,
                                              n = arguments;
                                          C(function () {
                                              e.apply(t, n);
                                          });
                                      };
                            },
                            S = function (e) {
                                var t,
                                    i = 0,
                                    o = r.throttleDelay,
                                    s = r.ricTimeout,
                                    a = function () {
                                        (t = !1), (i = n.now()), e();
                                    },
                                    l =
                                        p && s > 49
                                            ? function () {
                                                  p(a, { timeout: s }), s !== r.ricTimeout && (s = r.ricTimeout);
                                              }
                                            : A(function () {
                                                  u(a);
                                              }, !0);
                                return function (e) {
                                    var r;
                                    (e = !0 === e) && (s = 33), t || ((t = !0), (r = o - (n.now() - i)) < 0 && (r = 0), e || r < 9 ? l() : u(l, r));
                                };
                            },
                            $ = function (e) {
                                var t,
                                    i,
                                    r = 99,
                                    o = function () {
                                        (t = null), e();
                                    },
                                    s = function () {
                                        var e = n.now() - i;
                                        e < r ? u(s, r - e) : (p || o)(o);
                                    };
                                return function () {
                                    (i = n.now()), t || (t = u(s, r));
                                };
                            },
                            E =
                                ((G = /^img$/i),
                                (V = /^iframe$/i),
                                (K = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent)),
                                (J = 0),
                                (Z = 0),
                                (Q = 0),
                                (ee = -1),
                                (te = function (e) {
                                    Q--, (!e || Q < 0 || !e.target) && (Q = 0);
                                }),
                                (ne = function (e) {
                                    return null == X && (X = "hidden" == T(t.body, "visibility")), X || !("hidden" == T(e.parentNode, "visibility") && "hidden" == T(e, "visibility"));
                                }),
                                (ie = function (e, n) {
                                    var i,
                                        r = e,
                                        s = ne(e);
                                    for (F -= n, Y += n, W -= n, U += n; s && (r = r.offsetParent) && r != t.body && r != o; )
                                        (s = (T(r, "opacity") || 1) > 0) && "visible" != T(r, "overflow") && ((i = r.getBoundingClientRect()), (s = U > i.left && W < i.right && Y > i.top - 1 && F < i.bottom + 1));
                                    return s;
                                }),
                                (re = function () {
                                    var e,
                                        n,
                                        s,
                                        a,
                                        c,
                                        u,
                                        d,
                                        p,
                                        f,
                                        h,
                                        g,
                                        m,
                                        v = i.elements;
                                    if ((q = r.loadMode) && Q < 8 && (e = v.length)) {
                                        for (n = 0, ee++; n < e; n++)
                                            if (v[n] && !v[n]._lazyRace)
                                                if (!K || (i.prematureUnveil && i.prematureUnveil(v[n]))) pe(v[n]);
                                                else if (
                                                    (((p = v[n][l]("data-expand")) && (u = 1 * p)) || (u = Z),
                                                    h ||
                                                        ((h = !r.expand || r.expand < 1 ? (o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370) : r.expand),
                                                        (i._defEx = h),
                                                        (g = h * r.expFactor),
                                                        (m = r.hFac),
                                                        (X = null),
                                                        Z < g && Q < 1 && ee > 2 && q > 2 && !t.hidden ? ((Z = g), (ee = 0)) : (Z = q > 1 && ee > 1 && Q < 6 ? h : J)),
                                                    f !== u && ((H = innerWidth + u * m), (B = innerHeight + u), (d = -1 * u), (f = u)),
                                                    (s = v[n].getBoundingClientRect()),
                                                    (Y = s.bottom) >= d &&
                                                        (F = s.top) <= B &&
                                                        (U = s.right) >= d * m &&
                                                        (W = s.left) <= H &&
                                                        (Y || U || W || F) &&
                                                        (r.loadHidden || ne(v[n])) &&
                                                        ((j && Q < 3 && !p && (q < 3 || ee < 4)) || ie(v[n], u)))
                                                ) {
                                                    if ((pe(v[n]), (c = !0), Q > 9)) break;
                                                } else !c && j && !a && Q < 4 && ee < 4 && q > 2 && (z[0] || r.preloadAfterLoad) && (z[0] || (!p && (Y || U || W || F || "auto" != v[n][l](r.sizesAttr)))) && (a = z[0] || v[n]);
                                        a && !c && pe(a);
                                    }
                                }),
                                (oe = S(re)),
                                (se = function (e) {
                                    var t = e.target;
                                    t._lazyCache ? delete t._lazyCache : (te(e), y(t, r.loadedClass), b(t, r.loadingClass), w(t, le), x(t, "lazyloaded"));
                                }),
                                (ae = A(se)),
                                (le = function (e) {
                                    ae({ target: e.target });
                                }),
                                (ce = function (e, t) {
                                    var n = e.getAttribute("data-load-mode") || r.iframeLoadMode;
                                    0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t);
                                }),
                                (ue = function (e) {
                                    var t,
                                        n = e[l](r.srcsetAttr);
                                    (t = r.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n);
                                }),
                                (de = A(function (e, t, n, i, o) {
                                    var s, a, c, d, p, h;
                                    (p = x(e, "lazybeforeunveil", t)).defaultPrevented ||
                                        (i && (n ? y(e, r.autosizesClass) : e.setAttribute("sizes", i)),
                                        (a = e[l](r.srcsetAttr)),
                                        (s = e[l](r.srcAttr)),
                                        o && (d = (c = e.parentNode) && f.test(c.nodeName || "")),
                                        (h = t.firesLoad || ("src" in e && (a || s || d))),
                                        (p = { target: e }),
                                        y(e, r.loadingClass),
                                        h && (clearTimeout(I), (I = u(te, 2500)), w(e, le, !0)),
                                        d && m.call(c.getElementsByTagName("source"), ue),
                                        a ? e.setAttribute("srcset", a) : s && !d && (V.test(e.nodeName) ? ce(e, s) : (e.src = s)),
                                        o && (a || d) && _(e, { src: s })),
                                        e._lazyRace && delete e._lazyRace,
                                        b(e, r.lazyClass),
                                        C(function () {
                                            var t = e.complete && e.naturalWidth > 1;
                                            (h && !t) ||
                                                (t && y(e, r.fastLoadedClass),
                                                se(p),
                                                (e._lazyCache = !0),
                                                u(function () {
                                                    "_lazyCache" in e && delete e._lazyCache;
                                                }, 9)),
                                                "lazy" == e.loading && Q--;
                                        }, !0);
                                })),
                                (pe = function (e) {
                                    if (!e._lazyRace) {
                                        var t,
                                            n = G.test(e.nodeName),
                                            i = n && (e[l](r.sizesAttr) || e[l]("sizes")),
                                            o = "auto" == i;
                                        ((!o && j) || !n || (!e[l]("src") && !e.srcset) || e.complete || v(e, r.errorClass) || !v(e, r.lazyClass)) &&
                                            ((t = x(e, "lazyunveilread").detail), o && O.updateElem(e, !0, e.offsetWidth), (e._lazyRace = !0), Q++, de(e, t, o, i, n));
                                    }
                                }),
                                (fe = $(function () {
                                    (r.loadMode = 3), oe();
                                })),
                                (he = function () {
                                    3 == r.loadMode && (r.loadMode = 2), fe();
                                }),
                                (ge = function () {
                                    j || (n.now() - R < 999 ? u(ge, 999) : ((j = !0), (r.loadMode = 3), oe(), c("scroll", he, !0)));
                                }),
                                {
                                    _: function () {
                                        (R = n.now()),
                                            (i.elements = t.getElementsByClassName(r.lazyClass)),
                                            (z = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass)),
                                            c("scroll", oe, !0),
                                            c("resize", oe, !0),
                                            c("pageshow", function (e) {
                                                if (e.persisted) {
                                                    var n = t.querySelectorAll("." + r.loadingClass);
                                                    n.length &&
                                                        n.forEach &&
                                                        d(function () {
                                                            n.forEach(function (e) {
                                                                e.complete && pe(e);
                                                            });
                                                        });
                                                }
                                            }),
                                            e.MutationObserver ? new MutationObserver(oe).observe(o, { childList: !0, subtree: !0, attributes: !0 }) : (o[a]("DOMNodeInserted", oe, !0), o[a]("DOMAttrModified", oe, !0), setInterval(oe, 999)),
                                            c("hashchange", oe, !0),
                                            ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
                                                t[a](e, oe, !0);
                                            }),
                                            /d$|^c/.test(t.readyState) ? ge() : (c("load", ge), t[a]("DOMContentLoaded", oe), u(ge, 2e4)),
                                            i.elements.length ? (re(), C._lsFlush()) : oe();
                                    },
                                    checkElems: oe,
                                    unveil: pe,
                                    _aLSL: he,
                                }),
                            O =
                                ((M = A(function (e, t, n, i) {
                                    var r, o, s;
                                    if (((e._lazysizesWidth = i), (i += "px"), e.setAttribute("sizes", i), f.test(t.nodeName || ""))) for (o = 0, s = (r = t.getElementsByTagName("source")).length; o < s; o++) r[o].setAttribute("sizes", i);
                                    n.detail.dataAttr || _(e, n.detail);
                                })),
                                (L = function (e, t, n) {
                                    var i,
                                        r = e.parentNode;
                                    r && ((n = k(e, r, n)), (i = x(e, "lazybeforesizes", { width: n, dataAttr: !!t })).defaultPrevented || ((n = i.detail.width) && n !== e._lazysizesWidth && M(e, r, i, n)));
                                }),
                                (N = $(function () {
                                    var e,
                                        t = P.length;
                                    if (t) for (e = 0; e < t; e++) L(P[e]);
                                })),
                                {
                                    _: function () {
                                        (P = t.getElementsByClassName(r.autosizesClass)), c("resize", N);
                                    },
                                    checkElems: N,
                                    updateElem: L,
                                }),
                            D = function () {
                                !D.i && t.getElementsByClassName && ((D.i = !0), O._(), E._());
                            };
                        var P, M, L, N;
                        var z, j, I, q, R, H, B, F, W, U, Y, X, G, V, K, J, Z, Q, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, de, pe, fe, he, ge;
                        var me, ve, ye, be, we, xe, _e;
                        return (
                            u(function () {
                                r.init && D();
                            }),
                            (i = { cfg: r, autoSizer: O, loader: E, init: D, uP: _, aC: y, rC: b, hC: v, fire: x, gW: k, rAF: C })
                        );
                    })(t, t.document, Date);
                    (t.lazySizes = i), e.exports && (e.exports = i);
                })("undefined" != typeof window ? window : {});
            },
            770: (e, t, n) => {
                var i, r, o;
                !(function (s, a) {
                    if (s) {
                        (a = a.bind(null, s, s.document)), e.exports ? a(n(90)) : ((r = [n(90)]), void 0 === (o = "function" == typeof (i = a) ? i.apply(t, r) : i) || (e.exports = o));
                    }
                })("undefined" != typeof window ? window : 0, function (e, t, n) {
                    "use strict";
                    if (e.addEventListener) {
                        var i = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                            r = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
                            o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
                            s = /^picture$/i,
                            a = n.cfg,
                            l = {
                                getParent: function (t, n) {
                                    var i = t,
                                        r = t.parentNode;
                                    return (
                                        (n && "prev" != n) || !r || !s.test(r.nodeName || "") || (r = r.parentNode),
                                        "self" != n && (i = "prev" == n ? t.previousElementSibling : (n && (r.closest || e.jQuery) && (r.closest ? r.closest(n) : jQuery(r).closest(n)[0])) || r),
                                        i
                                    );
                                },
                                getFit: function (e) {
                                    var t,
                                        n,
                                        i = getComputedStyle(e, null) || {},
                                        s = i.content || i.fontFamily,
                                        a = { fit: e._lazysizesParentFit || e.getAttribute("data-parent-fit") };
                                    return (
                                        !a.fit && s && (t = s.match(r)) && (a.fit = t[1]),
                                        a.fit ? (!(n = e._lazysizesParentContainer || e.getAttribute("data-parent-container")) && s && (t = s.match(o)) && (n = t[1]), (a.parent = l.getParent(e, n))) : (a.fit = i.objectFit),
                                        a
                                    );
                                },
                                getImageRatio: function (t) {
                                    var n,
                                        r,
                                        o,
                                        l,
                                        c,
                                        u,
                                        d,
                                        p = t.parentNode,
                                        f = p && s.test(p.nodeName || "") ? p.querySelectorAll("source, img") : [t];
                                    for (n = 0; n < f.length; n++)
                                        if (
                                            ((r = (t = f[n]).getAttribute(a.srcsetAttr) || t.getAttribute("srcset") || t.getAttribute("data-pfsrcset") || t.getAttribute("data-risrcset") || ""),
                                            (o = t._lsMedia || t.getAttribute("media")),
                                            (o = a.customMedia[t.getAttribute("data-media") || o] || o),
                                            r && (!o || ((e.matchMedia && matchMedia(o)) || {}).matches))
                                        ) {
                                            (l = parseFloat(t.getAttribute("data-aspectratio"))) ||
                                                ((c = r.match(i)) ? ("w" == c[2] ? ((u = c[1]), (d = c[3])) : ((u = c[3]), (d = c[1]))) : ((u = t.getAttribute("width")), (d = t.getAttribute("height"))), (l = u / d));
                                            break;
                                        }
                                    return l;
                                },
                                calculateSize: function (e, t) {
                                    var n,
                                        i,
                                        r,
                                        o = this.getFit(e),
                                        s = o.fit,
                                        a = o.parent;
                                    return "width" == s || (("contain" == s || "cover" == s) && (i = this.getImageRatio(e)))
                                        ? (a ? (t = a.clientWidth) : (a = e), (r = t), "width" == s ? (r = t) : (n = t / a.clientHeight) && (("cover" == s && n < i) || ("contain" == s && n > i)) && (r = t * (i / n)), r)
                                        : t;
                                },
                            };
                        (n.parentFit = l),
                            t.addEventListener("lazybeforesizes", function (e) {
                                if (!e.defaultPrevented && e.detail.instance == n) {
                                    var t = e.target;
                                    e.detail.width = l.calculateSize(t, e.detail.width);
                                }
                            });
                    }
                });
            },
            686: (e, t, n) => {
                var i, r, o;
                (r = [n(755)]),
                    (i = function (e) {
                        var t = (function () {
                                if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
                                var n, i, r;
                                return (
                                    (t && t.requirejs) ||
                                        (t ? (i = t) : (t = {}),
                                        (function (e) {
                                            var t,
                                                o,
                                                s,
                                                a,
                                                l = {},
                                                c = {},
                                                u = {},
                                                d = {},
                                                p = Object.prototype.hasOwnProperty,
                                                f = [].slice,
                                                h = /\.js$/;
                                            function g(e, t) {
                                                return p.call(e, t);
                                            }
                                            function m(e, t) {
                                                var n,
                                                    i,
                                                    r,
                                                    o,
                                                    s,
                                                    a,
                                                    l,
                                                    c,
                                                    d,
                                                    p,
                                                    f,
                                                    g = t && t.split("/"),
                                                    m = u.map,
                                                    v = (m && m["*"]) || {};
                                                if (e) {
                                                    for (
                                                        s = (e = e.split("/")).length - 1, u.nodeIdCompat && h.test(e[s]) && (e[s] = e[s].replace(h, "")), "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)), d = 0;
                                                        d < e.length;
                                                        d++
                                                    )
                                                        if ("." === (f = e[d])) e.splice(d, 1), (d -= 1);
                                                        else if (".." === f) {
                                                            if (0 === d || (1 === d && ".." === e[2]) || ".." === e[d - 1]) continue;
                                                            d > 0 && (e.splice(d - 1, 2), (d -= 2));
                                                        }
                                                    e = e.join("/");
                                                }
                                                if ((g || v) && m) {
                                                    for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                                                        if (((i = n.slice(0, d).join("/")), g))
                                                            for (p = g.length; p > 0; p -= 1)
                                                                if ((r = m[g.slice(0, p).join("/")]) && (r = r[i])) {
                                                                    (o = r), (a = d);
                                                                    break;
                                                                }
                                                        if (o) break;
                                                        !l && v && v[i] && ((l = v[i]), (c = d));
                                                    }
                                                    !o && l && ((o = l), (a = c)), o && (n.splice(0, a, o), (e = n.join("/")));
                                                }
                                                return e;
                                            }
                                            function v(t, n) {
                                                return function () {
                                                    var i = f.call(arguments, 0);
                                                    return "string" != typeof i[0] && 1 === i.length && i.push(null), o.apply(e, i.concat([t, n]));
                                                };
                                            }
                                            function y(e) {
                                                return function (t) {
                                                    return m(t, e);
                                                };
                                            }
                                            function b(e) {
                                                return function (t) {
                                                    l[e] = t;
                                                };
                                            }
                                            function w(n) {
                                                if (g(c, n)) {
                                                    var i = c[n];
                                                    delete c[n], (d[n] = !0), t.apply(e, i);
                                                }
                                                if (!g(l, n) && !g(d, n)) throw new Error("No " + n);
                                                return l[n];
                                            }
                                            function x(e) {
                                                var t,
                                                    n = e ? e.indexOf("!") : -1;
                                                return n > -1 && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
                                            }
                                            function _(e) {
                                                return e ? x(e) : [];
                                            }
                                            function T(e) {
                                                return function () {
                                                    return (u && u.config && u.config[e]) || {};
                                                };
                                            }
                                            (s = function (e, t) {
                                                var n,
                                                    i = x(e),
                                                    r = i[0],
                                                    o = t[1];
                                                return (
                                                    (e = i[1]),
                                                    r && (n = w((r = m(r, o)))),
                                                    r ? (e = n && n.normalize ? n.normalize(e, y(o)) : m(e, o)) : ((r = (i = x((e = m(e, o))))[0]), (e = i[1]), r && (n = w(r))),
                                                    { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
                                                );
                                            }),
                                                (a = {
                                                    require: function (e) {
                                                        return v(e);
                                                    },
                                                    exports: function (e) {
                                                        var t = l[e];
                                                        return void 0 !== t ? t : (l[e] = {});
                                                    },
                                                    module: function (e) {
                                                        return { id: e, uri: "", exports: l[e], config: T(e) };
                                                    },
                                                }),
                                                (t = function (t, n, i, r) {
                                                    var o,
                                                        u,
                                                        p,
                                                        f,
                                                        h,
                                                        m,
                                                        y,
                                                        x = [],
                                                        T = typeof i;
                                                    if (((m = _((r = r || t))), "undefined" === T || "function" === T)) {
                                                        for (n = !n.length && i.length ? ["require", "exports", "module"] : n, h = 0; h < n.length; h += 1)
                                                            if ("require" === (u = (f = s(n[h], m)).f)) x[h] = a.require(t);
                                                            else if ("exports" === u) (x[h] = a.exports(t)), (y = !0);
                                                            else if ("module" === u) o = x[h] = a.module(t);
                                                            else if (g(l, u) || g(c, u) || g(d, u)) x[h] = w(u);
                                                            else {
                                                                if (!f.p) throw new Error(t + " missing " + u);
                                                                f.p.load(f.n, v(r, !0), b(u), {}), (x[h] = l[u]);
                                                            }
                                                        (p = i ? i.apply(l[t], x) : void 0), t && (o && o.exports !== e && o.exports !== l[t] ? (l[t] = o.exports) : (p === e && y) || (l[t] = p));
                                                    } else t && (l[t] = i);
                                                }),
                                                (n = i = o = function (n, i, r, l, c) {
                                                    if ("string" == typeof n) return a[n] ? a[n](i) : w(s(n, _(i)).f);
                                                    if (!n.splice) {
                                                        if (((u = n).deps && o(u.deps, u.callback), !i)) return;
                                                        i.splice ? ((n = i), (i = r), (r = null)) : (n = e);
                                                    }
                                                    return (
                                                        (i = i || function () {}),
                                                        "function" == typeof r && ((r = l), (l = c)),
                                                        l
                                                            ? t(e, n, i, r)
                                                            : setTimeout(function () {
                                                                  t(e, n, i, r);
                                                              }, 4),
                                                        o
                                                    );
                                                }),
                                                (o.config = function (e) {
                                                    return o(e);
                                                }),
                                                (n._defined = l),
                                                ((r = function (e, t, n) {
                                                    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                                    t.splice || ((n = t), (t = [])), g(l, e) || g(c, e) || (c[e] = [e, t, n]);
                                                }).amd = { jQuery: !0 });
                                        })(),
                                        (t.requirejs = n),
                                        (t.require = i),
                                        (t.define = r)),
                                    t.define("almond", function () {}),
                                    t.define("jquery", [], function () {
                                        var t = e || $;
                                        return (
                                            null == t &&
                                                console &&
                                                console.error &&
                                                console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
                                            t
                                        );
                                    }),
                                    t.define("select2/utils", ["jquery"], function (e) {
                                        var t = {};
                                        function n(e) {
                                            var t = e.prototype,
                                                n = [];
                                            for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
                                            return n;
                                        }
                                        (t.Extend = function (e, t) {
                                            var n = {}.hasOwnProperty;
                                            function i() {
                                                this.constructor = e;
                                            }
                                            for (var r in t) n.call(t, r) && (e[r] = t[r]);
                                            return (i.prototype = t.prototype), (e.prototype = new i()), (e.__super__ = t.prototype), e;
                                        }),
                                            (t.Decorate = function (e, t) {
                                                var i = n(t),
                                                    r = n(e);
                                                function o() {
                                                    var n = Array.prototype.unshift,
                                                        i = t.prototype.constructor.length,
                                                        r = e.prototype.constructor;
                                                    i > 0 && (n.call(arguments, e.prototype.constructor), (r = t.prototype.constructor)), r.apply(this, arguments);
                                                }
                                                function s() {
                                                    this.constructor = o;
                                                }
                                                (t.displayName = e.displayName), (o.prototype = new s());
                                                for (var a = 0; a < r.length; a++) {
                                                    var l = r[a];
                                                    o.prototype[l] = e.prototype[l];
                                                }
                                                for (
                                                    var c = function (e) {
                                                            var n = function () {};
                                                            (e in o.prototype) && (n = o.prototype[e]);
                                                            var i = t.prototype[e];
                                                            return function () {
                                                                return Array.prototype.unshift.call(arguments, n), i.apply(this, arguments);
                                                            };
                                                        },
                                                        u = 0;
                                                    u < i.length;
                                                    u++
                                                ) {
                                                    var d = i[u];
                                                    o.prototype[d] = c(d);
                                                }
                                                return o;
                                            });
                                        var i = function () {
                                            this.listeners = {};
                                        };
                                        (i.prototype.on = function (e, t) {
                                            (this.listeners = this.listeners || {}), e in this.listeners ? this.listeners[e].push(t) : (this.listeners[e] = [t]);
                                        }),
                                            (i.prototype.trigger = function (e) {
                                                var t = Array.prototype.slice,
                                                    n = t.call(arguments, 1);
                                                (this.listeners = this.listeners || {}),
                                                    null == n && (n = []),
                                                    0 === n.length && n.push({}),
                                                    (n[0]._type = e),
                                                    e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                                                    "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
                                            }),
                                            (i.prototype.invoke = function (e, t) {
                                                for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
                                            }),
                                            (t.Observable = i),
                                            (t.generateChars = function (e) {
                                                for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
                                                return t;
                                            }),
                                            (t.bind = function (e, t) {
                                                return function () {
                                                    e.apply(t, arguments);
                                                };
                                            }),
                                            (t._convertData = function (e) {
                                                for (var t in e) {
                                                    var n = t.split("-"),
                                                        i = e;
                                                    if (1 !== n.length) {
                                                        for (var r = 0; r < n.length; r++) {
                                                            var o = n[r];
                                                            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), (i = i[o]);
                                                        }
                                                        delete e[t];
                                                    }
                                                }
                                                return e;
                                            }),
                                            (t.hasScroll = function (t, n) {
                                                var i = e(n),
                                                    r = n.style.overflowX,
                                                    o = n.style.overflowY;
                                                return (r !== o || ("hidden" !== o && "visible" !== o)) && ("scroll" === r || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth);
                                            }),
                                            (t.escapeMarkup = function (e) {
                                                var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };
                                                return "string" != typeof e
                                                    ? e
                                                    : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                                                          return t[e];
                                                      });
                                            }),
                                            (t.appendMany = function (t, n) {
                                                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                                                    var i = e();
                                                    e.map(n, function (e) {
                                                        i = i.add(e);
                                                    }),
                                                        (n = i);
                                                }
                                                t.append(n);
                                            }),
                                            (t.__cache = {});
                                        var r = 0;
                                        return (
                                            (t.GetUniqueElementId = function (e) {
                                                var t = e.getAttribute("data-select2-id");
                                                return null == t && (e.id ? ((t = e.id), e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r), (t = r.toString()))), t;
                                            }),
                                            (t.StoreData = function (e, n, i) {
                                                var r = t.GetUniqueElementId(e);
                                                t.__cache[r] || (t.__cache[r] = {}), (t.__cache[r][n] = i);
                                            }),
                                            (t.GetData = function (n, i) {
                                                var r = t.GetUniqueElementId(n);
                                                return i ? (t.__cache[r] && null != t.__cache[r][i] ? t.__cache[r][i] : e(n).data(i)) : t.__cache[r];
                                            }),
                                            (t.RemoveData = function (e) {
                                                var n = t.GetUniqueElementId(e);
                                                null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id");
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/results", ["jquery", "./utils"], function (e, t) {
                                        function n(e, t, i) {
                                            (this.$element = e), (this.data = i), (this.options = t), n.__super__.constructor.call(this);
                                        }
                                        return (
                                            t.Extend(n, t.Observable),
                                            (n.prototype.render = function () {
                                                var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                                                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), (this.$results = t), t;
                                            }),
                                            (n.prototype.clear = function () {
                                                this.$results.empty();
                                            }),
                                            (n.prototype.displayMessage = function (t) {
                                                var n = this.options.get("escapeMarkup");
                                                this.clear(), this.hideLoading();
                                                var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                                                    r = this.options.get("translations").get(t.message);
                                                i.append(n(r(t.args))), (i[0].className += " select2-results__message"), this.$results.append(i);
                                            }),
                                            (n.prototype.hideMessages = function () {
                                                this.$results.find(".select2-results__message").remove();
                                            }),
                                            (n.prototype.append = function (e) {
                                                this.hideLoading();
                                                var t = [];
                                                if (null != e.results && 0 !== e.results.length) {
                                                    e.results = this.sort(e.results);
                                                    for (var n = 0; n < e.results.length; n++) {
                                                        var i = e.results[n],
                                                            r = this.option(i);
                                                        t.push(r);
                                                    }
                                                    this.$results.append(t);
                                                } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" });
                                            }),
                                            (n.prototype.position = function (e, t) {
                                                t.find(".select2-results").append(e);
                                            }),
                                            (n.prototype.sort = function (e) {
                                                return this.options.get("sorter")(e);
                                            }),
                                            (n.prototype.highlightFirstItem = function () {
                                                var e = this.$results.find(".select2-results__option[aria-selected]"),
                                                    t = e.filter("[aria-selected=true]");
                                                t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
                                            }),
                                            (n.prototype.setClasses = function () {
                                                var n = this;
                                                this.data.current(function (i) {
                                                    var r = e.map(i, function (e) {
                                                        return e.id.toString();
                                                    });
                                                    n.$results.find(".select2-results__option[aria-selected]").each(function () {
                                                        var n = e(this),
                                                            i = t.GetData(this, "data"),
                                                            o = "" + i.id;
                                                        (null != i.element && i.element.selected) || (null == i.element && e.inArray(o, r) > -1) ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false");
                                                    });
                                                });
                                            }),
                                            (n.prototype.showLoading = function (e) {
                                                this.hideLoading();
                                                var t = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e) },
                                                    n = this.option(t);
                                                (n.className += " loading-results"), this.$results.prepend(n);
                                            }),
                                            (n.prototype.hideLoading = function () {
                                                this.$results.find(".loading-results").remove();
                                            }),
                                            (n.prototype.option = function (n) {
                                                var i = document.createElement("li");
                                                i.className = "select2-results__option";
                                                var r = { role: "option", "aria-selected": "false" },
                                                    o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                                                for (var s in (((null != n.element && o.call(n.element, ":disabled")) || (null == n.element && n.disabled)) && (delete r["aria-selected"], (r["aria-disabled"] = "true")),
                                                null == n.id && delete r["aria-selected"],
                                                null != n._resultId && (i.id = n._resultId),
                                                n.title && (i.title = n.title),
                                                n.children && ((r.role = "group"), (r["aria-label"] = n.text), delete r["aria-selected"]),
                                                r)) {
                                                    var a = r[s];
                                                    i.setAttribute(s, a);
                                                }
                                                if (n.children) {
                                                    var l = e(i),
                                                        c = document.createElement("strong");
                                                    (c.className = "select2-results__group"), e(c), this.template(n, c);
                                                    for (var u = [], d = 0; d < n.children.length; d++) {
                                                        var p = n.children[d],
                                                            f = this.option(p);
                                                        u.push(f);
                                                    }
                                                    var h = e("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                                                    h.append(u), l.append(c), l.append(h);
                                                } else this.template(n, i);
                                                return t.StoreData(i, "data", n), i;
                                            }),
                                            (n.prototype.bind = function (n, i) {
                                                var r = this,
                                                    o = n.id + "-results";
                                                this.$results.attr("id", o),
                                                    n.on("results:all", function (e) {
                                                        r.clear(), r.append(e.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem());
                                                    }),
                                                    n.on("results:append", function (e) {
                                                        r.append(e.data), n.isOpen() && r.setClasses();
                                                    }),
                                                    n.on("query", function (e) {
                                                        r.hideMessages(), r.showLoading(e);
                                                    }),
                                                    n.on("select", function () {
                                                        n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem());
                                                    }),
                                                    n.on("unselect", function () {
                                                        n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem());
                                                    }),
                                                    n.on("open", function () {
                                                        r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible();
                                                    }),
                                                    n.on("close", function () {
                                                        r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant");
                                                    }),
                                                    n.on("results:toggle", function () {
                                                        var e = r.getHighlightedResults();
                                                        0 !== e.length && e.trigger("mouseup");
                                                    }),
                                                    n.on("results:select", function () {
                                                        var e = r.getHighlightedResults();
                                                        if (0 !== e.length) {
                                                            var n = t.GetData(e[0], "data");
                                                            "true" == e.attr("aria-selected") ? r.trigger("close", {}) : r.trigger("select", { data: n });
                                                        }
                                                    }),
                                                    n.on("results:previous", function () {
                                                        var e = r.getHighlightedResults(),
                                                            t = r.$results.find("[aria-selected]"),
                                                            n = t.index(e);
                                                        if (!(n <= 0)) {
                                                            var i = n - 1;
                                                            0 === e.length && (i = 0);
                                                            var o = t.eq(i);
                                                            o.trigger("mouseenter");
                                                            var s = r.$results.offset().top,
                                                                a = o.offset().top,
                                                                l = r.$results.scrollTop() + (a - s);
                                                            0 === i ? r.$results.scrollTop(0) : a - s < 0 && r.$results.scrollTop(l);
                                                        }
                                                    }),
                                                    n.on("results:next", function () {
                                                        var e = r.getHighlightedResults(),
                                                            t = r.$results.find("[aria-selected]"),
                                                            n = t.index(e) + 1;
                                                        if (!(n >= t.length)) {
                                                            var i = t.eq(n);
                                                            i.trigger("mouseenter");
                                                            var o = r.$results.offset().top + r.$results.outerHeight(!1),
                                                                s = i.offset().top + i.outerHeight(!1),
                                                                a = r.$results.scrollTop() + s - o;
                                                            0 === n ? r.$results.scrollTop(0) : s > o && r.$results.scrollTop(a);
                                                        }
                                                    }),
                                                    n.on("results:focus", function (e) {
                                                        e.element.addClass("select2-results__option--highlighted");
                                                    }),
                                                    n.on("results:message", function (e) {
                                                        r.displayMessage(e);
                                                    }),
                                                    e.fn.mousewheel &&
                                                        this.$results.on("mousewheel", function (e) {
                                                            var t = r.$results.scrollTop(),
                                                                n = r.$results.get(0).scrollHeight - t + e.deltaY,
                                                                i = e.deltaY > 0 && t - e.deltaY <= 0,
                                                                o = e.deltaY < 0 && n <= r.$results.height();
                                                            i
                                                                ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation())
                                                                : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation());
                                                        }),
                                                    this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (n) {
                                                        var i = e(this),
                                                            o = t.GetData(this, "data");
                                                        "true" !== i.attr("aria-selected")
                                                            ? r.trigger("select", { originalEvent: n, data: o })
                                                            : r.options.get("multiple")
                                                            ? r.trigger("unselect", { originalEvent: n, data: o })
                                                            : r.trigger("close", {});
                                                    }),
                                                    this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (n) {
                                                        var i = t.GetData(this, "data");
                                                        r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", { data: i, element: e(this) });
                                                    });
                                            }),
                                            (n.prototype.getHighlightedResults = function () {
                                                return this.$results.find(".select2-results__option--highlighted");
                                            }),
                                            (n.prototype.destroy = function () {
                                                this.$results.remove();
                                            }),
                                            (n.prototype.ensureHighlightVisible = function () {
                                                var e = this.getHighlightedResults();
                                                if (0 !== e.length) {
                                                    var t = this.$results.find("[aria-selected]").index(e),
                                                        n = this.$results.offset().top,
                                                        i = e.offset().top,
                                                        r = this.$results.scrollTop() + (i - n),
                                                        o = i - n;
                                                    (r -= 2 * e.outerHeight(!1)), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r);
                                                }
                                            }),
                                            (n.prototype.template = function (t, n) {
                                                var i = this.options.get("templateResult"),
                                                    r = this.options.get("escapeMarkup"),
                                                    o = i(t, n);
                                                null == o ? (n.style.display = "none") : "string" == typeof o ? (n.innerHTML = r(o)) : e(n).append(o);
                                            }),
                                            n
                                        );
                                    }),
                                    t.define("select2/keys", [], function () {
                                        return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
                                    }),
                                    t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
                                        function i(e, t) {
                                            (this.$element = e), (this.options = t), i.__super__.constructor.call(this);
                                        }
                                        return (
                                            t.Extend(i, t.Observable),
                                            (i.prototype.render = function () {
                                                var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                                                return (
                                                    (this._tabindex = 0),
                                                    null != t.GetData(this.$element[0], "old-tabindex")
                                                        ? (this._tabindex = t.GetData(this.$element[0], "old-tabindex"))
                                                        : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                                                    n.attr("title", this.$element.attr("title")),
                                                    n.attr("tabindex", this._tabindex),
                                                    n.attr("aria-disabled", "false"),
                                                    (this.$selection = n),
                                                    n
                                                );
                                            }),
                                            (i.prototype.bind = function (e, t) {
                                                var i = this,
                                                    r = e.id + "-results";
                                                (this.container = e),
                                                    this.$selection.on("focus", function (e) {
                                                        i.trigger("focus", e);
                                                    }),
                                                    this.$selection.on("blur", function (e) {
                                                        i._handleBlur(e);
                                                    }),
                                                    this.$selection.on("keydown", function (e) {
                                                        i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault();
                                                    }),
                                                    e.on("results:focus", function (e) {
                                                        i.$selection.attr("aria-activedescendant", e.data._resultId);
                                                    }),
                                                    e.on("selection:update", function (e) {
                                                        i.update(e.data);
                                                    }),
                                                    e.on("open", function () {
                                                        i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e);
                                                    }),
                                                    e.on("close", function () {
                                                        i.$selection.attr("aria-expanded", "false"),
                                                            i.$selection.removeAttr("aria-activedescendant"),
                                                            i.$selection.removeAttr("aria-owns"),
                                                            i.$selection.trigger("focus"),
                                                            i._detachCloseHandler(e);
                                                    }),
                                                    e.on("enable", function () {
                                                        i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false");
                                                    }),
                                                    e.on("disable", function () {
                                                        i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true");
                                                    });
                                            }),
                                            (i.prototype._handleBlur = function (t) {
                                                var n = this;
                                                window.setTimeout(function () {
                                                    document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t);
                                                }, 1);
                                            }),
                                            (i.prototype._attachCloseHandler = function (n) {
                                                e(document.body).on("mousedown.select2." + n.id, function (n) {
                                                    var i = e(n.target).closest(".select2");
                                                    e(".select2.select2-container--open").each(function () {
                                                        this != i[0] && t.GetData(this, "element").select2("close");
                                                    });
                                                });
                                            }),
                                            (i.prototype._detachCloseHandler = function (t) {
                                                e(document.body).off("mousedown.select2." + t.id);
                                            }),
                                            (i.prototype.position = function (e, t) {
                                                t.find(".selection").append(e);
                                            }),
                                            (i.prototype.destroy = function () {
                                                this._detachCloseHandler(this.container);
                                            }),
                                            (i.prototype.update = function (e) {
                                                throw new Error("The `update` method must be defined in child classes.");
                                            }),
                                            (i.prototype.isEnabled = function () {
                                                return !this.isDisabled();
                                            }),
                                            (i.prototype.isDisabled = function () {
                                                return this.options.get("disabled");
                                            }),
                                            i
                                        );
                                    }),
                                    t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
                                        function r() {
                                            r.__super__.constructor.apply(this, arguments);
                                        }
                                        return (
                                            n.Extend(r, t),
                                            (r.prototype.render = function () {
                                                var e = r.__super__.render.call(this);
                                                return (
                                                    e.addClass("select2-selection--single"),
                                                    e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                                                    e
                                                );
                                            }),
                                            (r.prototype.bind = function (e, t) {
                                                var n = this;
                                                r.__super__.bind.apply(this, arguments);
                                                var i = e.id + "-container";
                                                this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"),
                                                    this.$selection.attr("aria-labelledby", i),
                                                    this.$selection.on("mousedown", function (e) {
                                                        1 === e.which && n.trigger("toggle", { originalEvent: e });
                                                    }),
                                                    this.$selection.on("focus", function (e) {}),
                                                    this.$selection.on("blur", function (e) {}),
                                                    e.on("focus", function (t) {
                                                        e.isOpen() || n.$selection.trigger("focus");
                                                    });
                                            }),
                                            (r.prototype.clear = function () {
                                                var e = this.$selection.find(".select2-selection__rendered");
                                                e.empty(), e.removeAttr("title");
                                            }),
                                            (r.prototype.display = function (e, t) {
                                                var n = this.options.get("templateSelection");
                                                return this.options.get("escapeMarkup")(n(e, t));
                                            }),
                                            (r.prototype.selectionContainer = function () {
                                                return e("<span></span>");
                                            }),
                                            (r.prototype.update = function (e) {
                                                if (0 !== e.length) {
                                                    var t = e[0],
                                                        n = this.$selection.find(".select2-selection__rendered"),
                                                        i = this.display(t, n);
                                                    n.empty().append(i);
                                                    var r = t.title || t.text;
                                                    r ? n.attr("title", r) : n.removeAttr("title");
                                                } else this.clear();
                                            }),
                                            r
                                        );
                                    }),
                                    t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
                                        function i(e, t) {
                                            i.__super__.constructor.apply(this, arguments);
                                        }
                                        return (
                                            n.Extend(i, t),
                                            (i.prototype.render = function () {
                                                var e = i.__super__.render.call(this);
                                                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
                                            }),
                                            (i.prototype.bind = function (t, r) {
                                                var o = this;
                                                i.__super__.bind.apply(this, arguments),
                                                    this.$selection.on("click", function (e) {
                                                        o.trigger("toggle", { originalEvent: e });
                                                    }),
                                                    this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                                                        if (!o.isDisabled()) {
                                                            var i = e(this).parent(),
                                                                r = n.GetData(i[0], "data");
                                                            o.trigger("unselect", { originalEvent: t, data: r });
                                                        }
                                                    });
                                            }),
                                            (i.prototype.clear = function () {
                                                var e = this.$selection.find(".select2-selection__rendered");
                                                e.empty(), e.removeAttr("title");
                                            }),
                                            (i.prototype.display = function (e, t) {
                                                var n = this.options.get("templateSelection");
                                                return this.options.get("escapeMarkup")(n(e, t));
                                            }),
                                            (i.prototype.selectionContainer = function () {
                                                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                                            }),
                                            (i.prototype.update = function (e) {
                                                if ((this.clear(), 0 !== e.length)) {
                                                    for (var t = [], i = 0; i < e.length; i++) {
                                                        var r = e[i],
                                                            o = this.selectionContainer(),
                                                            s = this.display(r, o);
                                                        o.append(s);
                                                        var a = r.title || r.text;
                                                        a && o.attr("title", a), n.StoreData(o[0], "data", r), t.push(o);
                                                    }
                                                    var l = this.$selection.find(".select2-selection__rendered");
                                                    n.appendMany(l, t);
                                                }
                                            }),
                                            i
                                        );
                                    }),
                                    t.define("select2/selection/placeholder", ["../utils"], function (e) {
                                        function t(e, t, n) {
                                            (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))), e.call(this, t, n);
                                        }
                                        return (
                                            (t.prototype.normalizePlaceholder = function (e, t) {
                                                return "string" == typeof t && (t = { id: "", text: t }), t;
                                            }),
                                            (t.prototype.createPlaceholder = function (e, t) {
                                                var n = this.selectionContainer();
                                                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n;
                                            }),
                                            (t.prototype.update = function (e, t) {
                                                var n = 1 == t.length && t[0].id != this.placeholder.id;
                                                if (t.length > 1 || n) return e.call(this, t);
                                                this.clear();
                                                var i = this.createPlaceholder(this.placeholder);
                                                this.$selection.find(".select2-selection__rendered").append(i);
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, n) {
                                        function i() {}
                                        return (
                                            (i.prototype.bind = function (e, t, n) {
                                                var i = this;
                                                e.call(this, t, n),
                                                    null == this.placeholder &&
                                                        this.options.get("debug") &&
                                                        window.console &&
                                                        console.error &&
                                                        console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                                                    this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                                                        i._handleClear(e);
                                                    }),
                                                    t.on("keypress", function (e) {
                                                        i._handleKeyboardClear(e, t);
                                                    });
                                            }),
                                            (i.prototype._handleClear = function (e, t) {
                                                if (!this.isDisabled()) {
                                                    var i = this.$selection.find(".select2-selection__clear");
                                                    if (0 !== i.length) {
                                                        t.stopPropagation();
                                                        var r = n.GetData(i[0], "data"),
                                                            o = this.$element.val();
                                                        this.$element.val(this.placeholder.id);
                                                        var s = { data: r };
                                                        if ((this.trigger("clear", s), s.prevented)) this.$element.val(o);
                                                        else {
                                                            for (var a = 0; a < r.length; a++) if (((s = { data: r[a] }), this.trigger("unselect", s), s.prevented)) return void this.$element.val(o);
                                                            this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
                                                        }
                                                    }
                                                }
                                            }),
                                            (i.prototype._handleKeyboardClear = function (e, n, i) {
                                                i.isOpen() || (n.which != t.DELETE && n.which != t.BACKSPACE) || this._handleClear(n);
                                            }),
                                            (i.prototype.update = function (t, i) {
                                                if ((t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length))) {
                                                    var r = this.options.get("translations").get("removeAllItems"),
                                                        o = e('<span class="select2-selection__clear" title="' + r() + '">&times;</span>');
                                                    n.StoreData(o[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(o);
                                                }
                                            }),
                                            i
                                        );
                                    }),
                                    t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
                                        function i(e, t, n) {
                                            e.call(this, t, n);
                                        }
                                        return (
                                            (i.prototype.render = function (t) {
                                                var n = e(
                                                    '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>'
                                                );
                                                (this.$searchContainer = n), (this.$search = n.find("input"));
                                                var i = t.call(this);
                                                return this._transferTabIndex(), i;
                                            }),
                                            (i.prototype.bind = function (e, i, r) {
                                                var o = this,
                                                    s = i.id + "-results";
                                                e.call(this, i, r),
                                                    i.on("open", function () {
                                                        o.$search.attr("aria-controls", s), o.$search.trigger("focus");
                                                    }),
                                                    i.on("close", function () {
                                                        o.$search.val(""), o.$search.removeAttr("aria-controls"), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus");
                                                    }),
                                                    i.on("enable", function () {
                                                        o.$search.prop("disabled", !1), o._transferTabIndex();
                                                    }),
                                                    i.on("disable", function () {
                                                        o.$search.prop("disabled", !0);
                                                    }),
                                                    i.on("focus", function (e) {
                                                        o.$search.trigger("focus");
                                                    }),
                                                    i.on("results:focus", function (e) {
                                                        e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant");
                                                    }),
                                                    this.$selection.on("focusin", ".select2-search--inline", function (e) {
                                                        o.trigger("focus", e);
                                                    }),
                                                    this.$selection.on("focusout", ".select2-search--inline", function (e) {
                                                        o._handleBlur(e);
                                                    }),
                                                    this.$selection.on("keydown", ".select2-search--inline", function (e) {
                                                        if ((e.stopPropagation(), o.trigger("keypress", e), (o._keyUpPrevented = e.isDefaultPrevented()), e.which === n.BACKSPACE && "" === o.$search.val())) {
                                                            var i = o.$searchContainer.prev(".select2-selection__choice");
                                                            if (i.length > 0) {
                                                                var r = t.GetData(i[0], "data");
                                                                o.searchRemoveChoice(r), e.preventDefault();
                                                            }
                                                        }
                                                    }),
                                                    this.$selection.on("click", ".select2-search--inline", function (e) {
                                                        o.$search.val() && e.stopPropagation();
                                                    });
                                                var a = document.documentMode,
                                                    l = a && a <= 11;
                                                this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                                                    l ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search");
                                                }),
                                                    this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                                                        if (l && "input" === e.type) o.$selection.off("input.search input.searchcheck");
                                                        else {
                                                            var t = e.which;
                                                            t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e);
                                                        }
                                                    });
                                            }),
                                            (i.prototype._transferTabIndex = function (e) {
                                                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
                                            }),
                                            (i.prototype.createPlaceholder = function (e, t) {
                                                this.$search.attr("placeholder", t.text);
                                            }),
                                            (i.prototype.update = function (e, t) {
                                                var n = this.$search[0] == document.activeElement;
                                                this.$search.attr("placeholder", ""),
                                                    e.call(this, t),
                                                    this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                                                    this.resizeSearch(),
                                                    n && this.$search.trigger("focus");
                                            }),
                                            (i.prototype.handleSearch = function () {
                                                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                                                    var e = this.$search.val();
                                                    this.trigger("query", { term: e });
                                                }
                                                this._keyUpPrevented = !1;
                                            }),
                                            (i.prototype.searchRemoveChoice = function (e, t) {
                                                this.trigger("unselect", { data: t }), this.$search.val(t.text), this.handleSearch();
                                            }),
                                            (i.prototype.resizeSearch = function () {
                                                this.$search.css("width", "25px");
                                                var e = "";
                                                (e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : 0.75 * (this.$search.val().length + 1) + "em"), this.$search.css("width", e);
                                            }),
                                            i
                                        );
                                    }),
                                    t.define("select2/selection/eventRelay", ["jquery"], function (e) {
                                        function t() {}
                                        return (
                                            (t.prototype.bind = function (t, n, i) {
                                                var r = this,
                                                    o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                                    s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                                                t.call(this, n, i),
                                                    n.on("*", function (t, n) {
                                                        if (-1 !== e.inArray(t, o)) {
                                                            n = n || {};
                                                            var i = e.Event("select2:" + t, { params: n });
                                                            r.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented());
                                                        }
                                                    });
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/translation", ["jquery", "require"], function (e, t) {
                                        function n(e) {
                                            this.dict = e || {};
                                        }
                                        return (
                                            (n.prototype.all = function () {
                                                return this.dict;
                                            }),
                                            (n.prototype.get = function (e) {
                                                return this.dict[e];
                                            }),
                                            (n.prototype.extend = function (t) {
                                                this.dict = e.extend({}, t.all(), this.dict);
                                            }),
                                            (n._cache = {}),
                                            (n.loadPath = function (e) {
                                                if (!(e in n._cache)) {
                                                    var i = t(e);
                                                    n._cache[e] = i;
                                                }
                                                return new n(n._cache[e]);
                                            }),
                                            n
                                        );
                                    }),
                                    t.define("select2/diacritics", [], function () {
                                        return {
                                            "Ⓐ": "A",
                                            Ａ: "A",
                                            À: "A",
                                            Á: "A",
                                            Â: "A",
                                            Ầ: "A",
                                            Ấ: "A",
                                            Ẫ: "A",
                                            Ẩ: "A",
                                            Ã: "A",
                                            Ā: "A",
                                            Ă: "A",
                                            Ằ: "A",
                                            Ắ: "A",
                                            Ẵ: "A",
                                            Ẳ: "A",
                                            Ȧ: "A",
                                            Ǡ: "A",
                                            Ä: "A",
                                            Ǟ: "A",
                                            Ả: "A",
                                            Å: "A",
                                            Ǻ: "A",
                                            Ǎ: "A",
                                            Ȁ: "A",
                                            Ȃ: "A",
                                            Ạ: "A",
                                            Ậ: "A",
                                            Ặ: "A",
                                            Ḁ: "A",
                                            Ą: "A",
                                            Ⱥ: "A",
                                            Ɐ: "A",
                                            Ꜳ: "AA",
                                            Æ: "AE",
                                            Ǽ: "AE",
                                            Ǣ: "AE",
                                            Ꜵ: "AO",
                                            Ꜷ: "AU",
                                            Ꜹ: "AV",
                                            Ꜻ: "AV",
                                            Ꜽ: "AY",
                                            "Ⓑ": "B",
                                            Ｂ: "B",
                                            Ḃ: "B",
                                            Ḅ: "B",
                                            Ḇ: "B",
                                            Ƀ: "B",
                                            Ƃ: "B",
                                            Ɓ: "B",
                                            "Ⓒ": "C",
                                            Ｃ: "C",
                                            Ć: "C",
                                            Ĉ: "C",
                                            Ċ: "C",
                                            Č: "C",
                                            Ç: "C",
                                            Ḉ: "C",
                                            Ƈ: "C",
                                            Ȼ: "C",
                                            Ꜿ: "C",
                                            "Ⓓ": "D",
                                            Ｄ: "D",
                                            Ḋ: "D",
                                            Ď: "D",
                                            Ḍ: "D",
                                            Ḑ: "D",
                                            Ḓ: "D",
                                            Ḏ: "D",
                                            Đ: "D",
                                            Ƌ: "D",
                                            Ɗ: "D",
                                            Ɖ: "D",
                                            Ꝺ: "D",
                                            Ǳ: "DZ",
                                            Ǆ: "DZ",
                                            ǲ: "Dz",
                                            ǅ: "Dz",
                                            "Ⓔ": "E",
                                            Ｅ: "E",
                                            È: "E",
                                            É: "E",
                                            Ê: "E",
                                            Ề: "E",
                                            Ế: "E",
                                            Ễ: "E",
                                            Ể: "E",
                                            Ẽ: "E",
                                            Ē: "E",
                                            Ḕ: "E",
                                            Ḗ: "E",
                                            Ĕ: "E",
                                            Ė: "E",
                                            Ë: "E",
                                            Ẻ: "E",
                                            Ě: "E",
                                            Ȅ: "E",
                                            Ȇ: "E",
                                            Ẹ: "E",
                                            Ệ: "E",
                                            Ȩ: "E",
                                            Ḝ: "E",
                                            Ę: "E",
                                            Ḙ: "E",
                                            Ḛ: "E",
                                            Ɛ: "E",
                                            Ǝ: "E",
                                            "Ⓕ": "F",
                                            Ｆ: "F",
                                            Ḟ: "F",
                                            Ƒ: "F",
                                            Ꝼ: "F",
                                            "Ⓖ": "G",
                                            Ｇ: "G",
                                            Ǵ: "G",
                                            Ĝ: "G",
                                            Ḡ: "G",
                                            Ğ: "G",
                                            Ġ: "G",
                                            Ǧ: "G",
                                            Ģ: "G",
                                            Ǥ: "G",
                                            Ɠ: "G",
                                            Ꞡ: "G",
                                            Ᵹ: "G",
                                            Ꝿ: "G",
                                            "Ⓗ": "H",
                                            Ｈ: "H",
                                            Ĥ: "H",
                                            Ḣ: "H",
                                            Ḧ: "H",
                                            Ȟ: "H",
                                            Ḥ: "H",
                                            Ḩ: "H",
                                            Ḫ: "H",
                                            Ħ: "H",
                                            Ⱨ: "H",
                                            Ⱶ: "H",
                                            Ɥ: "H",
                                            "Ⓘ": "I",
                                            Ｉ: "I",
                                            Ì: "I",
                                            Í: "I",
                                            Î: "I",
                                            Ĩ: "I",
                                            Ī: "I",
                                            Ĭ: "I",
                                            İ: "I",
                                            Ï: "I",
                                            Ḯ: "I",
                                            Ỉ: "I",
                                            Ǐ: "I",
                                            Ȉ: "I",
                                            Ȋ: "I",
                                            Ị: "I",
                                            Į: "I",
                                            Ḭ: "I",
                                            Ɨ: "I",
                                            "Ⓙ": "J",
                                            Ｊ: "J",
                                            Ĵ: "J",
                                            Ɉ: "J",
                                            "Ⓚ": "K",
                                            Ｋ: "K",
                                            Ḱ: "K",
                                            Ǩ: "K",
                                            Ḳ: "K",
                                            Ķ: "K",
                                            Ḵ: "K",
                                            Ƙ: "K",
                                            Ⱪ: "K",
                                            Ꝁ: "K",
                                            Ꝃ: "K",
                                            Ꝅ: "K",
                                            Ꞣ: "K",
                                            "Ⓛ": "L",
                                            Ｌ: "L",
                                            Ŀ: "L",
                                            Ĺ: "L",
                                            Ľ: "L",
                                            Ḷ: "L",
                                            Ḹ: "L",
                                            Ļ: "L",
                                            Ḽ: "L",
                                            Ḻ: "L",
                                            Ł: "L",
                                            Ƚ: "L",
                                            Ɫ: "L",
                                            Ⱡ: "L",
                                            Ꝉ: "L",
                                            Ꝇ: "L",
                                            Ꞁ: "L",
                                            Ǉ: "LJ",
                                            ǈ: "Lj",
                                            "Ⓜ": "M",
                                            Ｍ: "M",
                                            Ḿ: "M",
                                            Ṁ: "M",
                                            Ṃ: "M",
                                            Ɱ: "M",
                                            Ɯ: "M",
                                            "Ⓝ": "N",
                                            Ｎ: "N",
                                            Ǹ: "N",
                                            Ń: "N",
                                            Ñ: "N",
                                            Ṅ: "N",
                                            Ň: "N",
                                            Ṇ: "N",
                                            Ņ: "N",
                                            Ṋ: "N",
                                            Ṉ: "N",
                                            Ƞ: "N",
                                            Ɲ: "N",
                                            Ꞑ: "N",
                                            Ꞥ: "N",
                                            Ǌ: "NJ",
                                            ǋ: "Nj",
                                            "Ⓞ": "O",
                                            Ｏ: "O",
                                            Ò: "O",
                                            Ó: "O",
                                            Ô: "O",
                                            Ồ: "O",
                                            Ố: "O",
                                            Ỗ: "O",
                                            Ổ: "O",
                                            Õ: "O",
                                            Ṍ: "O",
                                            Ȭ: "O",
                                            Ṏ: "O",
                                            Ō: "O",
                                            Ṑ: "O",
                                            Ṓ: "O",
                                            Ŏ: "O",
                                            Ȯ: "O",
                                            Ȱ: "O",
                                            Ö: "O",
                                            Ȫ: "O",
                                            Ỏ: "O",
                                            Ő: "O",
                                            Ǒ: "O",
                                            Ȍ: "O",
                                            Ȏ: "O",
                                            Ơ: "O",
                                            Ờ: "O",
                                            Ớ: "O",
                                            Ỡ: "O",
                                            Ở: "O",
                                            Ợ: "O",
                                            Ọ: "O",
                                            Ộ: "O",
                                            Ǫ: "O",
                                            Ǭ: "O",
                                            Ø: "O",
                                            Ǿ: "O",
                                            Ɔ: "O",
                                            Ɵ: "O",
                                            Ꝋ: "O",
                                            Ꝍ: "O",
                                            Œ: "OE",
                                            Ƣ: "OI",
                                            Ꝏ: "OO",
                                            Ȣ: "OU",
                                            "Ⓟ": "P",
                                            Ｐ: "P",
                                            Ṕ: "P",
                                            Ṗ: "P",
                                            Ƥ: "P",
                                            Ᵽ: "P",
                                            Ꝑ: "P",
                                            Ꝓ: "P",
                                            Ꝕ: "P",
                                            "Ⓠ": "Q",
                                            Ｑ: "Q",
                                            Ꝗ: "Q",
                                            Ꝙ: "Q",
                                            Ɋ: "Q",
                                            "Ⓡ": "R",
                                            Ｒ: "R",
                                            Ŕ: "R",
                                            Ṙ: "R",
                                            Ř: "R",
                                            Ȑ: "R",
                                            Ȓ: "R",
                                            Ṛ: "R",
                                            Ṝ: "R",
                                            Ŗ: "R",
                                            Ṟ: "R",
                                            Ɍ: "R",
                                            Ɽ: "R",
                                            Ꝛ: "R",
                                            Ꞧ: "R",
                                            Ꞃ: "R",
                                            "Ⓢ": "S",
                                            Ｓ: "S",
                                            ẞ: "S",
                                            Ś: "S",
                                            Ṥ: "S",
                                            Ŝ: "S",
                                            Ṡ: "S",
                                            Š: "S",
                                            Ṧ: "S",
                                            Ṣ: "S",
                                            Ṩ: "S",
                                            Ș: "S",
                                            Ş: "S",
                                            Ȿ: "S",
                                            Ꞩ: "S",
                                            Ꞅ: "S",
                                            "Ⓣ": "T",
                                            Ｔ: "T",
                                            Ṫ: "T",
                                            Ť: "T",
                                            Ṭ: "T",
                                            Ț: "T",
                                            Ţ: "T",
                                            Ṱ: "T",
                                            Ṯ: "T",
                                            Ŧ: "T",
                                            Ƭ: "T",
                                            Ʈ: "T",
                                            Ⱦ: "T",
                                            Ꞇ: "T",
                                            Ꜩ: "TZ",
                                            "Ⓤ": "U",
                                            Ｕ: "U",
                                            Ù: "U",
                                            Ú: "U",
                                            Û: "U",
                                            Ũ: "U",
                                            Ṹ: "U",
                                            Ū: "U",
                                            Ṻ: "U",
                                            Ŭ: "U",
                                            Ü: "U",
                                            Ǜ: "U",
                                            Ǘ: "U",
                                            Ǖ: "U",
                                            Ǚ: "U",
                                            Ủ: "U",
                                            Ů: "U",
                                            Ű: "U",
                                            Ǔ: "U",
                                            Ȕ: "U",
                                            Ȗ: "U",
                                            Ư: "U",
                                            Ừ: "U",
                                            Ứ: "U",
                                            Ữ: "U",
                                            Ử: "U",
                                            Ự: "U",
                                            Ụ: "U",
                                            Ṳ: "U",
                                            Ų: "U",
                                            Ṷ: "U",
                                            Ṵ: "U",
                                            Ʉ: "U",
                                            "Ⓥ": "V",
                                            Ｖ: "V",
                                            Ṽ: "V",
                                            Ṿ: "V",
                                            Ʋ: "V",
                                            Ꝟ: "V",
                                            Ʌ: "V",
                                            Ꝡ: "VY",
                                            "Ⓦ": "W",
                                            Ｗ: "W",
                                            Ẁ: "W",
                                            Ẃ: "W",
                                            Ŵ: "W",
                                            Ẇ: "W",
                                            Ẅ: "W",
                                            Ẉ: "W",
                                            Ⱳ: "W",
                                            "Ⓧ": "X",
                                            Ｘ: "X",
                                            Ẋ: "X",
                                            Ẍ: "X",
                                            "Ⓨ": "Y",
                                            Ｙ: "Y",
                                            Ỳ: "Y",
                                            Ý: "Y",
                                            Ŷ: "Y",
                                            Ỹ: "Y",
                                            Ȳ: "Y",
                                            Ẏ: "Y",
                                            Ÿ: "Y",
                                            Ỷ: "Y",
                                            Ỵ: "Y",
                                            Ƴ: "Y",
                                            Ɏ: "Y",
                                            Ỿ: "Y",
                                            "Ⓩ": "Z",
                                            Ｚ: "Z",
                                            Ź: "Z",
                                            Ẑ: "Z",
                                            Ż: "Z",
                                            Ž: "Z",
                                            Ẓ: "Z",
                                            Ẕ: "Z",
                                            Ƶ: "Z",
                                            Ȥ: "Z",
                                            Ɀ: "Z",
                                            Ⱬ: "Z",
                                            Ꝣ: "Z",
                                            "ⓐ": "a",
                                            ａ: "a",
                                            ẚ: "a",
                                            à: "a",
                                            á: "a",
                                            â: "a",
                                            ầ: "a",
                                            ấ: "a",
                                            ẫ: "a",
                                            ẩ: "a",
                                            ã: "a",
                                            ā: "a",
                                            ă: "a",
                                            ằ: "a",
                                            ắ: "a",
                                            ẵ: "a",
                                            ẳ: "a",
                                            ȧ: "a",
                                            ǡ: "a",
                                            ä: "a",
                                            ǟ: "a",
                                            ả: "a",
                                            å: "a",
                                            ǻ: "a",
                                            ǎ: "a",
                                            ȁ: "a",
                                            ȃ: "a",
                                            ạ: "a",
                                            ậ: "a",
                                            ặ: "a",
                                            ḁ: "a",
                                            ą: "a",
                                            ⱥ: "a",
                                            ɐ: "a",
                                            ꜳ: "aa",
                                            æ: "ae",
                                            ǽ: "ae",
                                            ǣ: "ae",
                                            ꜵ: "ao",
                                            ꜷ: "au",
                                            ꜹ: "av",
                                            ꜻ: "av",
                                            ꜽ: "ay",
                                            "ⓑ": "b",
                                            ｂ: "b",
                                            ḃ: "b",
                                            ḅ: "b",
                                            ḇ: "b",
                                            ƀ: "b",
                                            ƃ: "b",
                                            ɓ: "b",
                                            "ⓒ": "c",
                                            ｃ: "c",
                                            ć: "c",
                                            ĉ: "c",
                                            ċ: "c",
                                            č: "c",
                                            ç: "c",
                                            ḉ: "c",
                                            ƈ: "c",
                                            ȼ: "c",
                                            ꜿ: "c",
                                            ↄ: "c",
                                            "ⓓ": "d",
                                            ｄ: "d",
                                            ḋ: "d",
                                            ď: "d",
                                            ḍ: "d",
                                            ḑ: "d",
                                            ḓ: "d",
                                            ḏ: "d",
                                            đ: "d",
                                            ƌ: "d",
                                            ɖ: "d",
                                            ɗ: "d",
                                            ꝺ: "d",
                                            ǳ: "dz",
                                            ǆ: "dz",
                                            "ⓔ": "e",
                                            ｅ: "e",
                                            è: "e",
                                            é: "e",
                                            ê: "e",
                                            ề: "e",
                                            ế: "e",
                                            ễ: "e",
                                            ể: "e",
                                            ẽ: "e",
                                            ē: "e",
                                            ḕ: "e",
                                            ḗ: "e",
                                            ĕ: "e",
                                            ė: "e",
                                            ë: "e",
                                            ẻ: "e",
                                            ě: "e",
                                            ȅ: "e",
                                            ȇ: "e",
                                            ẹ: "e",
                                            ệ: "e",
                                            ȩ: "e",
                                            ḝ: "e",
                                            ę: "e",
                                            ḙ: "e",
                                            ḛ: "e",
                                            ɇ: "e",
                                            ɛ: "e",
                                            ǝ: "e",
                                            "ⓕ": "f",
                                            ｆ: "f",
                                            ḟ: "f",
                                            ƒ: "f",
                                            ꝼ: "f",
                                            "ⓖ": "g",
                                            ｇ: "g",
                                            ǵ: "g",
                                            ĝ: "g",
                                            ḡ: "g",
                                            ğ: "g",
                                            ġ: "g",
                                            ǧ: "g",
                                            ģ: "g",
                                            ǥ: "g",
                                            ɠ: "g",
                                            ꞡ: "g",
                                            ᵹ: "g",
                                            ꝿ: "g",
                                            "ⓗ": "h",
                                            ｈ: "h",
                                            ĥ: "h",
                                            ḣ: "h",
                                            ḧ: "h",
                                            ȟ: "h",
                                            ḥ: "h",
                                            ḩ: "h",
                                            ḫ: "h",
                                            ẖ: "h",
                                            ħ: "h",
                                            ⱨ: "h",
                                            ⱶ: "h",
                                            ɥ: "h",
                                            ƕ: "hv",
                                            "ⓘ": "i",
                                            ｉ: "i",
                                            ì: "i",
                                            í: "i",
                                            î: "i",
                                            ĩ: "i",
                                            ī: "i",
                                            ĭ: "i",
                                            ï: "i",
                                            ḯ: "i",
                                            ỉ: "i",
                                            ǐ: "i",
                                            ȉ: "i",
                                            ȋ: "i",
                                            ị: "i",
                                            į: "i",
                                            ḭ: "i",
                                            ɨ: "i",
                                            ı: "i",
                                            "ⓙ": "j",
                                            ｊ: "j",
                                            ĵ: "j",
                                            ǰ: "j",
                                            ɉ: "j",
                                            "ⓚ": "k",
                                            ｋ: "k",
                                            ḱ: "k",
                                            ǩ: "k",
                                            ḳ: "k",
                                            ķ: "k",
                                            ḵ: "k",
                                            ƙ: "k",
                                            ⱪ: "k",
                                            ꝁ: "k",
                                            ꝃ: "k",
                                            ꝅ: "k",
                                            ꞣ: "k",
                                            "ⓛ": "l",
                                            ｌ: "l",
                                            ŀ: "l",
                                            ĺ: "l",
                                            ľ: "l",
                                            ḷ: "l",
                                            ḹ: "l",
                                            ļ: "l",
                                            ḽ: "l",
                                            ḻ: "l",
                                            ſ: "l",
                                            ł: "l",
                                            ƚ: "l",
                                            ɫ: "l",
                                            ⱡ: "l",
                                            ꝉ: "l",
                                            ꞁ: "l",
                                            ꝇ: "l",
                                            ǉ: "lj",
                                            "ⓜ": "m",
                                            ｍ: "m",
                                            ḿ: "m",
                                            ṁ: "m",
                                            ṃ: "m",
                                            ɱ: "m",
                                            ɯ: "m",
                                            "ⓝ": "n",
                                            ｎ: "n",
                                            ǹ: "n",
                                            ń: "n",
                                            ñ: "n",
                                            ṅ: "n",
                                            ň: "n",
                                            ṇ: "n",
                                            ņ: "n",
                                            ṋ: "n",
                                            ṉ: "n",
                                            ƞ: "n",
                                            ɲ: "n",
                                            ŉ: "n",
                                            ꞑ: "n",
                                            ꞥ: "n",
                                            ǌ: "nj",
                                            "ⓞ": "o",
                                            ｏ: "o",
                                            ò: "o",
                                            ó: "o",
                                            ô: "o",
                                            ồ: "o",
                                            ố: "o",
                                            ỗ: "o",
                                            ổ: "o",
                                            õ: "o",
                                            ṍ: "o",
                                            ȭ: "o",
                                            ṏ: "o",
                                            ō: "o",
                                            ṑ: "o",
                                            ṓ: "o",
                                            ŏ: "o",
                                            ȯ: "o",
                                            ȱ: "o",
                                            ö: "o",
                                            ȫ: "o",
                                            ỏ: "o",
                                            ő: "o",
                                            ǒ: "o",
                                            ȍ: "o",
                                            ȏ: "o",
                                            ơ: "o",
                                            ờ: "o",
                                            ớ: "o",
                                            ỡ: "o",
                                            ở: "o",
                                            ợ: "o",
                                            ọ: "o",
                                            ộ: "o",
                                            ǫ: "o",
                                            ǭ: "o",
                                            ø: "o",
                                            ǿ: "o",
                                            ɔ: "o",
                                            ꝋ: "o",
                                            ꝍ: "o",
                                            ɵ: "o",
                                            œ: "oe",
                                            ƣ: "oi",
                                            ȣ: "ou",
                                            ꝏ: "oo",
                                            "ⓟ": "p",
                                            ｐ: "p",
                                            ṕ: "p",
                                            ṗ: "p",
                                            ƥ: "p",
                                            ᵽ: "p",
                                            ꝑ: "p",
                                            ꝓ: "p",
                                            ꝕ: "p",
                                            "ⓠ": "q",
                                            ｑ: "q",
                                            ɋ: "q",
                                            ꝗ: "q",
                                            ꝙ: "q",
                                            "ⓡ": "r",
                                            ｒ: "r",
                                            ŕ: "r",
                                            ṙ: "r",
                                            ř: "r",
                                            ȑ: "r",
                                            ȓ: "r",
                                            ṛ: "r",
                                            ṝ: "r",
                                            ŗ: "r",
                                            ṟ: "r",
                                            ɍ: "r",
                                            ɽ: "r",
                                            ꝛ: "r",
                                            ꞧ: "r",
                                            ꞃ: "r",
                                            "ⓢ": "s",
                                            ｓ: "s",
                                            ß: "s",
                                            ś: "s",
                                            ṥ: "s",
                                            ŝ: "s",
                                            ṡ: "s",
                                            š: "s",
                                            ṧ: "s",
                                            ṣ: "s",
                                            ṩ: "s",
                                            ș: "s",
                                            ş: "s",
                                            ȿ: "s",
                                            ꞩ: "s",
                                            ꞅ: "s",
                                            ẛ: "s",
                                            "ⓣ": "t",
                                            ｔ: "t",
                                            ṫ: "t",
                                            ẗ: "t",
                                            ť: "t",
                                            ṭ: "t",
                                            ț: "t",
                                            ţ: "t",
                                            ṱ: "t",
                                            ṯ: "t",
                                            ŧ: "t",
                                            ƭ: "t",
                                            ʈ: "t",
                                            ⱦ: "t",
                                            ꞇ: "t",
                                            ꜩ: "tz",
                                            "ⓤ": "u",
                                            ｕ: "u",
                                            ù: "u",
                                            ú: "u",
                                            û: "u",
                                            ũ: "u",
                                            ṹ: "u",
                                            ū: "u",
                                            ṻ: "u",
                                            ŭ: "u",
                                            ü: "u",
                                            ǜ: "u",
                                            ǘ: "u",
                                            ǖ: "u",
                                            ǚ: "u",
                                            ủ: "u",
                                            ů: "u",
                                            ű: "u",
                                            ǔ: "u",
                                            ȕ: "u",
                                            ȗ: "u",
                                            ư: "u",
                                            ừ: "u",
                                            ứ: "u",
                                            ữ: "u",
                                            ử: "u",
                                            ự: "u",
                                            ụ: "u",
                                            ṳ: "u",
                                            ų: "u",
                                            ṷ: "u",
                                            ṵ: "u",
                                            ʉ: "u",
                                            "ⓥ": "v",
                                            ｖ: "v",
                                            ṽ: "v",
                                            ṿ: "v",
                                            ʋ: "v",
                                            ꝟ: "v",
                                            ʌ: "v",
                                            ꝡ: "vy",
                                            "ⓦ": "w",
                                            ｗ: "w",
                                            ẁ: "w",
                                            ẃ: "w",
                                            ŵ: "w",
                                            ẇ: "w",
                                            ẅ: "w",
                                            ẘ: "w",
                                            ẉ: "w",
                                            ⱳ: "w",
                                            "ⓧ": "x",
                                            ｘ: "x",
                                            ẋ: "x",
                                            ẍ: "x",
                                            "ⓨ": "y",
                                            ｙ: "y",
                                            ỳ: "y",
                                            ý: "y",
                                            ŷ: "y",
                                            ỹ: "y",
                                            ȳ: "y",
                                            ẏ: "y",
                                            ÿ: "y",
                                            ỷ: "y",
                                            ẙ: "y",
                                            ỵ: "y",
                                            ƴ: "y",
                                            ɏ: "y",
                                            ỿ: "y",
                                            "ⓩ": "z",
                                            ｚ: "z",
                                            ź: "z",
                                            ẑ: "z",
                                            ż: "z",
                                            ž: "z",
                                            ẓ: "z",
                                            ẕ: "z",
                                            ƶ: "z",
                                            ȥ: "z",
                                            ɀ: "z",
                                            ⱬ: "z",
                                            ꝣ: "z",
                                            Ά: "Α",
                                            Έ: "Ε",
                                            Ή: "Η",
                                            Ί: "Ι",
                                            Ϊ: "Ι",
                                            Ό: "Ο",
                                            Ύ: "Υ",
                                            Ϋ: "Υ",
                                            Ώ: "Ω",
                                            ά: "α",
                                            έ: "ε",
                                            ή: "η",
                                            ί: "ι",
                                            ϊ: "ι",
                                            ΐ: "ι",
                                            ό: "ο",
                                            ύ: "υ",
                                            ϋ: "υ",
                                            ΰ: "υ",
                                            ώ: "ω",
                                            ς: "σ",
                                            "’": "'",
                                        };
                                    }),
                                    t.define("select2/data/base", ["../utils"], function (e) {
                                        function t(e, n) {
                                            t.__super__.constructor.call(this);
                                        }
                                        return (
                                            e.Extend(t, e.Observable),
                                            (t.prototype.current = function (e) {
                                                throw new Error("The `current` method must be defined in child classes.");
                                            }),
                                            (t.prototype.query = function (e, t) {
                                                throw new Error("The `query` method must be defined in child classes.");
                                            }),
                                            (t.prototype.bind = function (e, t) {}),
                                            (t.prototype.destroy = function () {}),
                                            (t.prototype.generateResultId = function (t, n) {
                                                var i = t.id + "-result-";
                                                return (i += e.generateChars(4)), null != n.id ? (i += "-" + n.id.toString()) : (i += "-" + e.generateChars(4)), i;
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
                                        function i(e, t) {
                                            (this.$element = e), (this.options = t), i.__super__.constructor.call(this);
                                        }
                                        return (
                                            t.Extend(i, e),
                                            (i.prototype.current = function (e) {
                                                var t = [],
                                                    i = this;
                                                this.$element.find(":selected").each(function () {
                                                    var e = n(this),
                                                        r = i.item(e);
                                                    t.push(r);
                                                }),
                                                    e(t);
                                            }),
                                            (i.prototype.select = function (e) {
                                                var t = this;
                                                if (((e.selected = !0), n(e.element).is("option"))) return (e.element.selected = !0), void this.$element.trigger("input").trigger("change");
                                                if (this.$element.prop("multiple"))
                                                    this.current(function (i) {
                                                        var r = [];
                                                        (e = [e]).push.apply(e, i);
                                                        for (var o = 0; o < e.length; o++) {
                                                            var s = e[o].id;
                                                            -1 === n.inArray(s, r) && r.push(s);
                                                        }
                                                        t.$element.val(r), t.$element.trigger("input").trigger("change");
                                                    });
                                                else {
                                                    var i = e.id;
                                                    this.$element.val(i), this.$element.trigger("input").trigger("change");
                                                }
                                            }),
                                            (i.prototype.unselect = function (e) {
                                                var t = this;
                                                if (this.$element.prop("multiple")) {
                                                    if (((e.selected = !1), n(e.element).is("option"))) return (e.element.selected = !1), void this.$element.trigger("input").trigger("change");
                                                    this.current(function (i) {
                                                        for (var r = [], o = 0; o < i.length; o++) {
                                                            var s = i[o].id;
                                                            s !== e.id && -1 === n.inArray(s, r) && r.push(s);
                                                        }
                                                        t.$element.val(r), t.$element.trigger("input").trigger("change");
                                                    });
                                                }
                                            }),
                                            (i.prototype.bind = function (e, t) {
                                                var n = this;
                                                (this.container = e),
                                                    e.on("select", function (e) {
                                                        n.select(e.data);
                                                    }),
                                                    e.on("unselect", function (e) {
                                                        n.unselect(e.data);
                                                    });
                                            }),
                                            (i.prototype.destroy = function () {
                                                this.$element.find("*").each(function () {
                                                    t.RemoveData(this);
                                                });
                                            }),
                                            (i.prototype.query = function (e, t) {
                                                var i = [],
                                                    r = this;
                                                this.$element.children().each(function () {
                                                    var t = n(this);
                                                    if (t.is("option") || t.is("optgroup")) {
                                                        var o = r.item(t),
                                                            s = r.matches(e, o);
                                                        null !== s && i.push(s);
                                                    }
                                                }),
                                                    t({ results: i });
                                            }),
                                            (i.prototype.addOptions = function (e) {
                                                t.appendMany(this.$element, e);
                                            }),
                                            (i.prototype.option = function (e) {
                                                var i;
                                                e.children ? ((i = document.createElement("optgroup")).label = e.text) : void 0 !== (i = document.createElement("option")).textContent ? (i.textContent = e.text) : (i.innerText = e.text),
                                                    void 0 !== e.id && (i.value = e.id),
                                                    e.disabled && (i.disabled = !0),
                                                    e.selected && (i.selected = !0),
                                                    e.title && (i.title = e.title);
                                                var r = n(i),
                                                    o = this._normalizeItem(e);
                                                return (o.element = i), t.StoreData(i, "data", o), r;
                                            }),
                                            (i.prototype.item = function (e) {
                                                var i = {};
                                                if (null != (i = t.GetData(e[0], "data"))) return i;
                                                if (e.is("option")) i = { id: e.val(), text: e.text(), disabled: e.prop("disabled"), selected: e.prop("selected"), title: e.prop("title") };
                                                else if (e.is("optgroup")) {
                                                    i = { text: e.prop("label"), children: [], title: e.prop("title") };
                                                    for (var r = e.children("option"), o = [], s = 0; s < r.length; s++) {
                                                        var a = n(r[s]),
                                                            l = this.item(a);
                                                        o.push(l);
                                                    }
                                                    i.children = o;
                                                }
                                                return ((i = this._normalizeItem(i)).element = e[0]), t.StoreData(e[0], "data", i), i;
                                            }),
                                            (i.prototype._normalizeItem = function (e) {
                                                e !== Object(e) && (e = { id: e, text: e });
                                                var t = { selected: !1, disabled: !1 };
                                                return (
                                                    null != (e = n.extend({}, { text: "" }, e)).id && (e.id = e.id.toString()),
                                                    null != e.text && (e.text = e.text.toString()),
                                                    null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                                                    n.extend({}, t, e)
                                                );
                                            }),
                                            (i.prototype.matches = function (e, t) {
                                                return this.options.get("matcher")(e, t);
                                            }),
                                            i
                                        );
                                    }),
                                    t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
                                        function i(e, t) {
                                            (this._dataToConvert = t.get("data") || []), i.__super__.constructor.call(this, e, t);
                                        }
                                        return (
                                            t.Extend(i, e),
                                            (i.prototype.bind = function (e, t) {
                                                i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
                                            }),
                                            (i.prototype.select = function (e) {
                                                var t = this.$element.find("option").filter(function (t, n) {
                                                    return n.value == e.id.toString();
                                                });
                                                0 === t.length && ((t = this.option(e)), this.addOptions(t)), i.__super__.select.call(this, e);
                                            }),
                                            (i.prototype.convertToOptions = function (e) {
                                                var i = this,
                                                    r = this.$element.find("option"),
                                                    o = r
                                                        .map(function () {
                                                            return i.item(n(this)).id;
                                                        })
                                                        .get(),
                                                    s = [];
                                                function a(e) {
                                                    return function () {
                                                        return n(this).val() == e.id;
                                                    };
                                                }
                                                for (var l = 0; l < e.length; l++) {
                                                    var c = this._normalizeItem(e[l]);
                                                    if (n.inArray(c.id, o) >= 0) {
                                                        var u = r.filter(a(c)),
                                                            d = this.item(u),
                                                            p = n.extend(!0, {}, c, d),
                                                            f = this.option(p);
                                                        u.replaceWith(f);
                                                    } else {
                                                        var h = this.option(c);
                                                        if (c.children) {
                                                            var g = this.convertToOptions(c.children);
                                                            t.appendMany(h, g);
                                                        }
                                                        s.push(h);
                                                    }
                                                }
                                                return s;
                                            }),
                                            i
                                        );
                                    }),
                                    t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
                                        function i(e, t) {
                                            (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                                                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                                                i.__super__.constructor.call(this, e, t);
                                        }
                                        return (
                                            t.Extend(i, e),
                                            (i.prototype._applyDefaults = function (e) {
                                                var t = {
                                                    data: function (e) {
                                                        return n.extend({}, e, { q: e.term });
                                                    },
                                                    transport: function (e, t, i) {
                                                        var r = n.ajax(e);
                                                        return r.then(t), r.fail(i), r;
                                                    },
                                                };
                                                return n.extend({}, t, e, !0);
                                            }),
                                            (i.prototype.processResults = function (e) {
                                                return e;
                                            }),
                                            (i.prototype.query = function (e, t) {
                                                var i = this;
                                                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), (this._request = null));
                                                var r = n.extend({ type: "GET" }, this.ajaxOptions);
                                                function o() {
                                                    var o = r.transport(
                                                        r,
                                                        function (r) {
                                                            var o = i.processResults(r, e);
                                                            i.options.get("debug") &&
                                                                window.console &&
                                                                console.error &&
                                                                ((o && o.results && n.isArray(o.results)) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                                                                t(o);
                                                        },
                                                        function () {
                                                            (!("status" in o) || (0 !== o.status && "0" !== o.status)) && i.trigger("results:message", { message: "errorLoading" });
                                                        }
                                                    );
                                                    i._request = o;
                                                }
                                                "function" == typeof r.url && (r.url = r.url.call(this.$element, e)),
                                                    "function" == typeof r.data && (r.data = r.data.call(this.$element, e)),
                                                    this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), (this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay))) : o();
                                            }),
                                            i
                                        );
                                    }),
                                    t.define("select2/data/tags", ["jquery"], function (e) {
                                        function t(t, n, i) {
                                            var r = i.get("tags"),
                                                o = i.get("createTag");
                                            void 0 !== o && (this.createTag = o);
                                            var s = i.get("insertTag");
                                            if ((void 0 !== s && (this.insertTag = s), t.call(this, n, i), e.isArray(r)))
                                                for (var a = 0; a < r.length; a++) {
                                                    var l = r[a],
                                                        c = this._normalizeItem(l),
                                                        u = this.option(c);
                                                    this.$element.append(u);
                                                }
                                        }
                                        return (
                                            (t.prototype.query = function (e, t, n) {
                                                var i = this;
                                                function r(e, o) {
                                                    for (var s = e.results, a = 0; a < s.length; a++) {
                                                        var l = s[a],
                                                            c = null != l.children && !r({ results: l.children }, !0);
                                                        if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !o && ((e.data = s), void n(e));
                                                    }
                                                    if (o) return !0;
                                                    var u = i.createTag(t);
                                                    if (null != u) {
                                                        var d = i.option(u);
                                                        d.attr("data-select2-tag", !0), i.addOptions([d]), i.insertTag(s, u);
                                                    }
                                                    (e.results = s), n(e);
                                                }
                                                this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, r) : e.call(this, t, n);
                                            }),
                                            (t.prototype.createTag = function (t, n) {
                                                var i = e.trim(n.term);
                                                return "" === i ? null : { id: i, text: i };
                                            }),
                                            (t.prototype.insertTag = function (e, t, n) {
                                                t.unshift(n);
                                            }),
                                            (t.prototype._removeOldTags = function (t) {
                                                this.$element.find("option[data-select2-tag]").each(function () {
                                                    this.selected || e(this).remove();
                                                });
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/data/tokenizer", ["jquery"], function (e) {
                                        function t(e, t, n) {
                                            var i = n.get("tokenizer");
                                            void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
                                        }
                                        return (
                                            (t.prototype.bind = function (e, t, n) {
                                                e.call(this, t, n), (this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field"));
                                            }),
                                            (t.prototype.query = function (t, n, i) {
                                                var r = this;
                                                function o(t) {
                                                    var n = r._normalizeItem(t);
                                                    if (
                                                        !r.$element.find("option").filter(function () {
                                                            return e(this).val() === n.id;
                                                        }).length
                                                    ) {
                                                        var i = r.option(n);
                                                        i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i]);
                                                    }
                                                    s(n);
                                                }
                                                function s(e) {
                                                    r.trigger("select", { data: e });
                                                }
                                                n.term = n.term || "";
                                                var a = this.tokenizer(n, this.options, o);
                                                a.term !== n.term && (this.$search.length && (this.$search.val(a.term), this.$search.trigger("focus")), (n.term = a.term)), t.call(this, n, i);
                                            }),
                                            (t.prototype.tokenizer = function (t, n, i, r) {
                                                for (
                                                    var o = i.get("tokenSeparators") || [],
                                                        s = n.term,
                                                        a = 0,
                                                        l =
                                                            this.createTag ||
                                                            function (e) {
                                                                return { id: e.term, text: e.term };
                                                            };
                                                    a < s.length;

                                                ) {
                                                    var c = s[a];
                                                    if (-1 !== e.inArray(c, o)) {
                                                        var u = s.substr(0, a),
                                                            d = l(e.extend({}, n, { term: u }));
                                                        null != d ? (r(d), (s = s.substr(a + 1) || ""), (a = 0)) : a++;
                                                    } else a++;
                                                }
                                                return { term: s };
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/data/minimumInputLength", [], function () {
                                        function e(e, t, n) {
                                            (this.minimumInputLength = n.get("minimumInputLength")), e.call(this, t, n);
                                        }
                                        return (
                                            (e.prototype.query = function (e, t, n) {
                                                (t.term = t.term || ""),
                                                    t.term.length < this.minimumInputLength
                                                        ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } })
                                                        : e.call(this, t, n);
                                            }),
                                            e
                                        );
                                    }),
                                    t.define("select2/data/maximumInputLength", [], function () {
                                        function e(e, t, n) {
                                            (this.maximumInputLength = n.get("maximumInputLength")), e.call(this, t, n);
                                        }
                                        return (
                                            (e.prototype.query = function (e, t, n) {
                                                (t.term = t.term || ""),
                                                    this.maximumInputLength > 0 && t.term.length > this.maximumInputLength
                                                        ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } })
                                                        : e.call(this, t, n);
                                            }),
                                            e
                                        );
                                    }),
                                    t.define("select2/data/maximumSelectionLength", [], function () {
                                        function e(e, t, n) {
                                            (this.maximumSelectionLength = n.get("maximumSelectionLength")), e.call(this, t, n);
                                        }
                                        return (
                                            (e.prototype.bind = function (e, t, n) {
                                                var i = this;
                                                e.call(this, t, n),
                                                    t.on("select", function () {
                                                        i._checkIfMaximumSelected();
                                                    });
                                            }),
                                            (e.prototype.query = function (e, t, n) {
                                                var i = this;
                                                this._checkIfMaximumSelected(function () {
                                                    e.call(i, t, n);
                                                });
                                            }),
                                            (e.prototype._checkIfMaximumSelected = function (e, t) {
                                                var n = this;
                                                this.current(function (e) {
                                                    var i = null != e ? e.length : 0;
                                                    n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", { message: "maximumSelected", args: { maximum: n.maximumSelectionLength } }) : t && t();
                                                });
                                            }),
                                            e
                                        );
                                    }),
                                    t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
                                        function n(e, t) {
                                            (this.$element = e), (this.options = t), n.__super__.constructor.call(this);
                                        }
                                        return (
                                            t.Extend(n, t.Observable),
                                            (n.prototype.render = function () {
                                                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                                                return t.attr("dir", this.options.get("dir")), (this.$dropdown = t), t;
                                            }),
                                            (n.prototype.bind = function () {}),
                                            (n.prototype.position = function (e, t) {}),
                                            (n.prototype.destroy = function () {
                                                this.$dropdown.remove();
                                            }),
                                            n
                                        );
                                    }),
                                    t.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
                                        function n() {}
                                        return (
                                            (n.prototype.render = function (t) {
                                                var n = t.call(this),
                                                    i = e(
                                                        '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                                                    );
                                                return (this.$searchContainer = i), (this.$search = i.find("input")), n.prepend(i), n;
                                            }),
                                            (n.prototype.bind = function (t, n, i) {
                                                var r = this,
                                                    o = n.id + "-results";
                                                t.call(this, n, i),
                                                    this.$search.on("keydown", function (e) {
                                                        r.trigger("keypress", e), (r._keyUpPrevented = e.isDefaultPrevented());
                                                    }),
                                                    this.$search.on("input", function (t) {
                                                        e(this).off("keyup");
                                                    }),
                                                    this.$search.on("keyup input", function (e) {
                                                        r.handleSearch(e);
                                                    }),
                                                    n.on("open", function () {
                                                        r.$search.attr("tabindex", 0),
                                                            r.$search.attr("aria-controls", o),
                                                            r.$search.trigger("focus"),
                                                            window.setTimeout(function () {
                                                                r.$search.trigger("focus");
                                                            }, 0);
                                                    }),
                                                    n.on("close", function () {
                                                        r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur");
                                                    }),
                                                    n.on("focus", function () {
                                                        n.isOpen() || r.$search.trigger("focus");
                                                    }),
                                                    n.on("results:all", function (e) {
                                                        (null != e.query.term && "" !== e.query.term) || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"));
                                                    }),
                                                    n.on("results:focus", function (e) {
                                                        e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant");
                                                    });
                                            }),
                                            (n.prototype.handleSearch = function (e) {
                                                if (!this._keyUpPrevented) {
                                                    var t = this.$search.val();
                                                    this.trigger("query", { term: t });
                                                }
                                                this._keyUpPrevented = !1;
                                            }),
                                            (n.prototype.showSearch = function (e, t) {
                                                return !0;
                                            }),
                                            n
                                        );
                                    }),
                                    t.define("select2/dropdown/hidePlaceholder", [], function () {
                                        function e(e, t, n, i) {
                                            (this.placeholder = this.normalizePlaceholder(n.get("placeholder"))), e.call(this, t, n, i);
                                        }
                                        return (
                                            (e.prototype.append = function (e, t) {
                                                (t.results = this.removePlaceholder(t.results)), e.call(this, t);
                                            }),
                                            (e.prototype.normalizePlaceholder = function (e, t) {
                                                return "string" == typeof t && (t = { id: "", text: t }), t;
                                            }),
                                            (e.prototype.removePlaceholder = function (e, t) {
                                                for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                                                    var r = t[i];
                                                    this.placeholder.id === r.id && n.splice(i, 1);
                                                }
                                                return n;
                                            }),
                                            e
                                        );
                                    }),
                                    t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
                                        function t(e, t, n, i) {
                                            (this.lastParams = {}), e.call(this, t, n, i), (this.$loadingMore = this.createLoadingMore()), (this.loading = !1);
                                        }
                                        return (
                                            (t.prototype.append = function (e, t) {
                                                this.$loadingMore.remove(), (this.loading = !1), e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
                                            }),
                                            (t.prototype.bind = function (e, t, n) {
                                                var i = this;
                                                e.call(this, t, n),
                                                    t.on("query", function (e) {
                                                        (i.lastParams = e), (i.loading = !0);
                                                    }),
                                                    t.on("query:append", function (e) {
                                                        (i.lastParams = e), (i.loading = !0);
                                                    }),
                                                    this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
                                            }),
                                            (t.prototype.loadMoreIfNeeded = function () {
                                                var t = e.contains(document.documentElement, this.$loadingMore[0]);
                                                !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore();
                                            }),
                                            (t.prototype.loadMore = function () {
                                                this.loading = !0;
                                                var t = e.extend({}, { page: 1 }, this.lastParams);
                                                t.page++, this.trigger("query:append", t);
                                            }),
                                            (t.prototype.showLoadingMore = function (e, t) {
                                                return t.pagination && t.pagination.more;
                                            }),
                                            (t.prototype.createLoadingMore = function () {
                                                var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                                                    n = this.options.get("translations").get("loadingMore");
                                                return t.html(n(this.lastParams)), t;
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
                                        function n(t, n, i) {
                                            (this.$dropdownParent = e(i.get("dropdownParent") || document.body)), t.call(this, n, i);
                                        }
                                        return (
                                            (n.prototype.bind = function (e, t, n) {
                                                var i = this;
                                                e.call(this, t, n),
                                                    t.on("open", function () {
                                                        i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t);
                                                    }),
                                                    t.on("close", function () {
                                                        i._hideDropdown(), i._detachPositioningHandler(t);
                                                    }),
                                                    this.$dropdownContainer.on("mousedown", function (e) {
                                                        e.stopPropagation();
                                                    });
                                            }),
                                            (n.prototype.destroy = function (e) {
                                                e.call(this), this.$dropdownContainer.remove();
                                            }),
                                            (n.prototype.position = function (e, t, n) {
                                                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({ position: "absolute", top: -999999 }), (this.$container = n);
                                            }),
                                            (n.prototype.render = function (t) {
                                                var n = e("<span></span>"),
                                                    i = t.call(this);
                                                return n.append(i), (this.$dropdownContainer = n), n;
                                            }),
                                            (n.prototype._hideDropdown = function (e) {
                                                this.$dropdownContainer.detach();
                                            }),
                                            (n.prototype._bindContainerResultHandlers = function (e, t) {
                                                if (!this._containerResultsHandlersBound) {
                                                    var n = this;
                                                    t.on("results:all", function () {
                                                        n._positionDropdown(), n._resizeDropdown();
                                                    }),
                                                        t.on("results:append", function () {
                                                            n._positionDropdown(), n._resizeDropdown();
                                                        }),
                                                        t.on("results:message", function () {
                                                            n._positionDropdown(), n._resizeDropdown();
                                                        }),
                                                        t.on("select", function () {
                                                            n._positionDropdown(), n._resizeDropdown();
                                                        }),
                                                        t.on("unselect", function () {
                                                            n._positionDropdown(), n._resizeDropdown();
                                                        }),
                                                        (this._containerResultsHandlersBound = !0);
                                                }
                                            }),
                                            (n.prototype._attachPositioningHandler = function (n, i) {
                                                var r = this,
                                                    o = "scroll.select2." + i.id,
                                                    s = "resize.select2." + i.id,
                                                    a = "orientationchange.select2." + i.id,
                                                    l = this.$container.parents().filter(t.hasScroll);
                                                l.each(function () {
                                                    t.StoreData(this, "select2-scroll-position", { x: e(this).scrollLeft(), y: e(this).scrollTop() });
                                                }),
                                                    l.on(o, function (n) {
                                                        var i = t.GetData(this, "select2-scroll-position");
                                                        e(this).scrollTop(i.y);
                                                    }),
                                                    e(window).on(o + " " + s + " " + a, function (e) {
                                                        r._positionDropdown(), r._resizeDropdown();
                                                    });
                                            }),
                                            (n.prototype._detachPositioningHandler = function (n, i) {
                                                var r = "scroll.select2." + i.id,
                                                    o = "resize.select2." + i.id,
                                                    s = "orientationchange.select2." + i.id;
                                                this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + o + " " + s);
                                            }),
                                            (n.prototype._positionDropdown = function () {
                                                var t = e(window),
                                                    n = this.$dropdown.hasClass("select2-dropdown--above"),
                                                    i = this.$dropdown.hasClass("select2-dropdown--below"),
                                                    r = null,
                                                    o = this.$container.offset();
                                                o.bottom = o.top + this.$container.outerHeight(!1);
                                                var s = { height: this.$container.outerHeight(!1) };
                                                (s.top = o.top), (s.bottom = o.top + s.height);
                                                var a = { height: this.$dropdown.outerHeight(!1) },
                                                    l = { top: t.scrollTop(), bottom: t.scrollTop() + t.height() },
                                                    c = l.top < o.top - a.height,
                                                    u = l.bottom > o.bottom + a.height,
                                                    d = { left: o.left, top: s.bottom },
                                                    p = this.$dropdownParent;
                                                "static" === p.css("position") && (p = p.offsetParent());
                                                var f = { top: 0, left: 0 };
                                                (e.contains(document.body, p[0]) || p[0].isConnected) && (f = p.offset()),
                                                    (d.top -= f.top),
                                                    (d.left -= f.left),
                                                    n || i || (r = "below"),
                                                    u || !c || n ? !c && u && n && (r = "below") : (r = "above"),
                                                    ("above" == r || (n && "below" !== r)) && (d.top = s.top - f.top - a.height),
                                                    null != r &&
                                                        (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r),
                                                        this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)),
                                                    this.$dropdownContainer.css(d);
                                            }),
                                            (n.prototype._resizeDropdown = function () {
                                                var e = { width: this.$container.outerWidth(!1) + "px" };
                                                this.options.get("dropdownAutoWidth") && ((e.minWidth = e.width), (e.position = "relative"), (e.width = "auto")), this.$dropdown.css(e);
                                            }),
                                            (n.prototype._showDropdown = function (e) {
                                                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
                                            }),
                                            n
                                        );
                                    }),
                                    t.define("select2/dropdown/minimumResultsForSearch", [], function () {
                                        function e(t) {
                                            for (var n = 0, i = 0; i < t.length; i++) {
                                                var r = t[i];
                                                r.children ? (n += e(r.children)) : n++;
                                            }
                                            return n;
                                        }
                                        function t(e, t, n, i) {
                                            (this.minimumResultsForSearch = n.get("minimumResultsForSearch")), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i);
                                        }
                                        return (
                                            (t.prototype.showSearch = function (t, n) {
                                                return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n);
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
                                        function t() {}
                                        return (
                                            (t.prototype.bind = function (e, t, n) {
                                                var i = this;
                                                e.call(this, t, n),
                                                    t.on("close", function (e) {
                                                        i._handleSelectOnClose(e);
                                                    });
                                            }),
                                            (t.prototype._handleSelectOnClose = function (t, n) {
                                                if (n && null != n.originalSelect2Event) {
                                                    var i = n.originalSelect2Event;
                                                    if ("select" === i._type || "unselect" === i._type) return;
                                                }
                                                var r = this.getHighlightedResults();
                                                if (!(r.length < 1)) {
                                                    var o = e.GetData(r[0], "data");
                                                    (null != o.element && o.element.selected) || (null == o.element && o.selected) || this.trigger("select", { data: o });
                                                }
                                            }),
                                            t
                                        );
                                    }),
                                    t.define("select2/dropdown/closeOnSelect", [], function () {
                                        function e() {}
                                        return (
                                            (e.prototype.bind = function (e, t, n) {
                                                var i = this;
                                                e.call(this, t, n),
                                                    t.on("select", function (e) {
                                                        i._selectTriggered(e);
                                                    }),
                                                    t.on("unselect", function (e) {
                                                        i._selectTriggered(e);
                                                    });
                                            }),
                                            (e.prototype._selectTriggered = function (e, t) {
                                                var n = t.originalEvent;
                                                (n && (n.ctrlKey || n.metaKey)) || this.trigger("close", { originalEvent: n, originalSelect2Event: t });
                                            }),
                                            e
                                        );
                                    }),
                                    t.define("select2/i18n/en", [], function () {
                                        return {
                                            errorLoading: function () {
                                                return "The results could not be loaded.";
                                            },
                                            inputTooLong: function (e) {
                                                var t = e.input.length - e.maximum,
                                                    n = "Please delete " + t + " character";
                                                return 1 != t && (n += "s"), n;
                                            },
                                            inputTooShort: function (e) {
                                                return "Please enter " + (e.minimum - e.input.length) + " or more characters";
                                            },
                                            loadingMore: function () {
                                                return "Loading more results…";
                                            },
                                            maximumSelected: function (e) {
                                                var t = "You can only select " + e.maximum + " item";
                                                return 1 != e.maximum && (t += "s"), t;
                                            },
                                            noResults: function () {
                                                return "No results found";
                                            },
                                            searching: function () {
                                                return "Searching…";
                                            },
                                            removeAllItems: function () {
                                                return "Remove all items";
                                            },
                                        };
                                    }),
                                    t.define(
                                        "select2/defaults",
                                        [
                                            "jquery",
                                            "require",
                                            "./results",
                                            "./selection/single",
                                            "./selection/multiple",
                                            "./selection/placeholder",
                                            "./selection/allowClear",
                                            "./selection/search",
                                            "./selection/eventRelay",
                                            "./utils",
                                            "./translation",
                                            "./diacritics",
                                            "./data/select",
                                            "./data/array",
                                            "./data/ajax",
                                            "./data/tags",
                                            "./data/tokenizer",
                                            "./data/minimumInputLength",
                                            "./data/maximumInputLength",
                                            "./data/maximumSelectionLength",
                                            "./dropdown",
                                            "./dropdown/search",
                                            "./dropdown/hidePlaceholder",
                                            "./dropdown/infiniteScroll",
                                            "./dropdown/attachBody",
                                            "./dropdown/minimumResultsForSearch",
                                            "./dropdown/selectOnClose",
                                            "./dropdown/closeOnSelect",
                                            "./i18n/en",
                                        ],
                                        function (e, t, n, i, r, o, s, a, l, c, u, d, p, f, h, g, m, v, y, b, w, x, _, T, k, C, A, S, $) {
                                            function E() {
                                                this.reset();
                                            }
                                            return (
                                                (E.prototype.apply = function (u) {
                                                    if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter) {
                                                        if (
                                                            (null != u.ajax ? (u.dataAdapter = h) : null != u.data ? (u.dataAdapter = f) : (u.dataAdapter = p),
                                                            u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)),
                                                            u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)),
                                                            u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)),
                                                            u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)),
                                                            (null == u.tokenSeparators && null == u.tokenizer) || (u.dataAdapter = c.Decorate(u.dataAdapter, m)),
                                                            null != u.query)
                                                        ) {
                                                            var d = t(u.amdBase + "compat/query");
                                                            u.dataAdapter = c.Decorate(u.dataAdapter, d);
                                                        }
                                                        if (null != u.initSelection) {
                                                            var $ = t(u.amdBase + "compat/initSelection");
                                                            u.dataAdapter = c.Decorate(u.dataAdapter, $);
                                                        }
                                                    }
                                                    if (
                                                        (null == u.resultsAdapter &&
                                                            ((u.resultsAdapter = n),
                                                            null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T)),
                                                            null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, _)),
                                                            u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, A))),
                                                        null == u.dropdownAdapter)
                                                    ) {
                                                        if (u.multiple) u.dropdownAdapter = w;
                                                        else {
                                                            var E = c.Decorate(w, x);
                                                            u.dropdownAdapter = E;
                                                        }
                                                        if (
                                                            (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C)),
                                                            u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)),
                                                            null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass)
                                                        ) {
                                                            var O = t(u.amdBase + "compat/dropdownCss");
                                                            u.dropdownAdapter = c.Decorate(u.dropdownAdapter, O);
                                                        }
                                                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, k);
                                                    }
                                                    if (null == u.selectionAdapter) {
                                                        if (
                                                            (u.multiple ? (u.selectionAdapter = r) : (u.selectionAdapter = i),
                                                            null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)),
                                                            u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)),
                                                            u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)),
                                                            null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass)
                                                        ) {
                                                            var D = t(u.amdBase + "compat/containerCss");
                                                            u.selectionAdapter = c.Decorate(u.selectionAdapter, D);
                                                        }
                                                        u.selectionAdapter = c.Decorate(u.selectionAdapter, l);
                                                    }
                                                    (u.language = this._resolveLanguage(u.language)), u.language.push("en");
                                                    for (var P = [], M = 0; M < u.language.length; M++) {
                                                        var L = u.language[M];
                                                        -1 === P.indexOf(L) && P.push(L);
                                                    }
                                                    return (u.language = P), (u.translations = this._processTranslations(u.language, u.debug)), u;
                                                }),
                                                (E.prototype.reset = function () {
                                                    function t(e) {
                                                        function t(e) {
                                                            return d[e] || e;
                                                        }
                                                        return e.replace(/[^\u0000-\u007E]/g, t);
                                                    }
                                                    function n(i, r) {
                                                        if ("" === e.trim(i.term)) return r;
                                                        if (r.children && r.children.length > 0) {
                                                            for (var o = e.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) null == n(i, r.children[s]) && o.children.splice(s, 1);
                                                            return o.children.length > 0 ? o : n(i, o);
                                                        }
                                                        var a = t(r.text).toUpperCase(),
                                                            l = t(i.term).toUpperCase();
                                                        return a.indexOf(l) > -1 ? r : null;
                                                    }
                                                    this.defaults = {
                                                        amdBase: "./",
                                                        amdLanguageBase: "./i18n/",
                                                        closeOnSelect: !0,
                                                        debug: !1,
                                                        dropdownAutoWidth: !1,
                                                        escapeMarkup: c.escapeMarkup,
                                                        language: {},
                                                        matcher: n,
                                                        minimumInputLength: 0,
                                                        maximumInputLength: 0,
                                                        maximumSelectionLength: 0,
                                                        minimumResultsForSearch: 0,
                                                        selectOnClose: !1,
                                                        scrollAfterSelect: !1,
                                                        sorter: function (e) {
                                                            return e;
                                                        },
                                                        templateResult: function (e) {
                                                            return e.text;
                                                        },
                                                        templateSelection: function (e) {
                                                            return e.text;
                                                        },
                                                        theme: "default",
                                                        width: "resolve",
                                                    };
                                                }),
                                                (E.prototype.applyFromElement = function (e, t) {
                                                    var n = e.language,
                                                        i = this.defaults.language,
                                                        r = t.prop("lang"),
                                                        o = t.closest("[lang]").prop("lang"),
                                                        s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
                                                    return (e.language = s), e;
                                                }),
                                                (E.prototype._resolveLanguage = function (t) {
                                                    if (!t) return [];
                                                    if (e.isEmptyObject(t)) return [];
                                                    if (e.isPlainObject(t)) return [t];
                                                    var n;
                                                    n = e.isArray(t) ? t : [t];
                                                    for (var i = [], r = 0; r < n.length; r++)
                                                        if ((i.push(n[r]), "string" == typeof n[r] && n[r].indexOf("-") > 0)) {
                                                            var o = n[r].split("-")[0];
                                                            i.push(o);
                                                        }
                                                    return i;
                                                }),
                                                (E.prototype._processTranslations = function (t, n) {
                                                    for (var i = new u(), r = 0; r < t.length; r++) {
                                                        var o = new u(),
                                                            s = t[r];
                                                        if ("string" == typeof s)
                                                            try {
                                                                o = u.loadPath(s);
                                                            } catch (e) {
                                                                try {
                                                                    (s = this.defaults.amdLanguageBase + s), (o = u.loadPath(s));
                                                                } catch (e) {
                                                                    n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.');
                                                                }
                                                            }
                                                        else o = e.isPlainObject(s) ? new u(s) : s;
                                                        i.extend(o);
                                                    }
                                                    return i;
                                                }),
                                                (E.prototype.set = function (t, n) {
                                                    var i = {};
                                                    i[e.camelCase(t)] = n;
                                                    var r = c._convertData(i);
                                                    e.extend(!0, this.defaults, r);
                                                }),
                                                new E()
                                            );
                                        }
                                    ),
                                    t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
                                        function r(t, r) {
                                            if (((this.options = t), null != r && this.fromElement(r), null != r && (this.options = n.applyFromElement(this.options, r)), (this.options = n.apply(this.options)), r && r.is("input"))) {
                                                var o = e(this.get("amdBase") + "compat/inputData");
                                                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o);
                                            }
                                        }
                                        return (
                                            (r.prototype.fromElement = function (e) {
                                                var n = ["select2"];
                                                null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                                                    null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                                                    null == this.options.dir &&
                                                        (e.prop("dir") ? (this.options.dir = e.prop("dir")) : e.closest("[dir]").prop("dir") ? (this.options.dir = e.closest("[dir]").prop("dir")) : (this.options.dir = "ltr")),
                                                    e.prop("disabled", this.options.disabled),
                                                    e.prop("multiple", this.options.multiple),
                                                    i.GetData(e[0], "select2Tags") &&
                                                        (this.options.debug &&
                                                            window.console &&
                                                            console.warn &&
                                                            console.warn(
                                                                'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                                                            ),
                                                        i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")),
                                                        i.StoreData(e[0], "tags", !0)),
                                                    i.GetData(e[0], "ajaxUrl") &&
                                                        (this.options.debug &&
                                                            window.console &&
                                                            console.warn &&
                                                            console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                                                        e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")),
                                                        i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                                                var r = {};
                                                function o(e, t) {
                                                    return t.toUpperCase();
                                                }
                                                for (var s = 0; s < e[0].attributes.length; s++) {
                                                    var a = e[0].attributes[s].name,
                                                        l = "data-";
                                                    if (a.substr(0, l.length) == l) {
                                                        var c = a.substring(l.length),
                                                            u = i.GetData(e[0], c);
                                                        r[c.replace(/-([a-z])/g, o)] = u;
                                                    }
                                                }
                                                t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (r = t.extend(!0, {}, e[0].dataset, r));
                                                var d = t.extend(!0, {}, i.GetData(e[0]), r);
                                                for (var p in (d = i._convertData(d))) t.inArray(p, n) > -1 || (t.isPlainObject(this.options[p]) ? t.extend(this.options[p], d[p]) : (this.options[p] = d[p]));
                                                return this;
                                            }),
                                            (r.prototype.get = function (e) {
                                                return this.options[e];
                                            }),
                                            (r.prototype.set = function (e, t) {
                                                this.options[e] = t;
                                            }),
                                            r
                                        );
                                    }),
                                    t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
                                        var r = function (e, i) {
                                            null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(),
                                                (this.$element = e),
                                                (this.id = this._generateId(e)),
                                                (i = i || {}),
                                                (this.options = new t(i, e)),
                                                r.__super__.constructor.call(this);
                                            var o = e.attr("tabindex") || 0;
                                            n.StoreData(e[0], "old-tabindex", o), e.attr("tabindex", "-1");
                                            var s = this.options.get("dataAdapter");
                                            this.dataAdapter = new s(e, this.options);
                                            var a = this.render();
                                            this._placeContainer(a);
                                            var l = this.options.get("selectionAdapter");
                                            (this.selection = new l(e, this.options)), (this.$selection = this.selection.render()), this.selection.position(this.$selection, a);
                                            var c = this.options.get("dropdownAdapter");
                                            (this.dropdown = new c(e, this.options)), (this.$dropdown = this.dropdown.render()), this.dropdown.position(this.$dropdown, a);
                                            var u = this.options.get("resultsAdapter");
                                            (this.results = new u(e, this.options, this.dataAdapter)), (this.$results = this.results.render()), this.results.position(this.$results, this.$dropdown);
                                            var d = this;
                                            this._bindAdapters(),
                                                this._registerDomEvents(),
                                                this._registerDataEvents(),
                                                this._registerSelectionEvents(),
                                                this._registerDropdownEvents(),
                                                this._registerResultsEvents(),
                                                this._registerEvents(),
                                                this.dataAdapter.current(function (e) {
                                                    d.trigger("selection:update", { data: e });
                                                }),
                                                e.addClass("select2-hidden-accessible"),
                                                e.attr("aria-hidden", "true"),
                                                this._syncAttributes(),
                                                n.StoreData(e[0], "select2", this),
                                                e.data("select2", this);
                                        };
                                        return (
                                            n.Extend(r, n.Observable),
                                            (r.prototype._generateId = function (e) {
                                                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
                                            }),
                                            (r.prototype._placeContainer = function (e) {
                                                e.insertAfter(this.$element);
                                                var t = this._resolveWidth(this.$element, this.options.get("width"));
                                                null != t && e.css("width", t);
                                            }),
                                            (r.prototype._resolveWidth = function (e, t) {
                                                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                                                if ("resolve" == t) {
                                                    var i = this._resolveWidth(e, "style");
                                                    return null != i ? i : this._resolveWidth(e, "element");
                                                }
                                                if ("element" == t) {
                                                    var r = e.outerWidth(!1);
                                                    return r <= 0 ? "auto" : r + "px";
                                                }
                                                if ("style" == t) {
                                                    var o = e.attr("style");
                                                    if ("string" != typeof o) return null;
                                                    for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                                                        var c = s[a].replace(/\s/g, "").match(n);
                                                        if (null !== c && c.length >= 1) return c[1];
                                                    }
                                                    return null;
                                                }
                                                return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t;
                                            }),
                                            (r.prototype._bindAdapters = function () {
                                                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
                                            }),
                                            (r.prototype._registerDomEvents = function () {
                                                var e = this;
                                                this.$element.on("change.select2", function () {
                                                    e.dataAdapter.current(function (t) {
                                                        e.trigger("selection:update", { data: t });
                                                    });
                                                }),
                                                    this.$element.on("focus.select2", function (t) {
                                                        e.trigger("focus", t);
                                                    }),
                                                    (this._syncA = n.bind(this._syncAttributes, this)),
                                                    (this._syncS = n.bind(this._syncSubtree, this)),
                                                    this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                                                var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                                                null != t
                                                    ? ((this._observer = new t(function (t) {
                                                          e._syncA(), e._syncS(null, t);
                                                      })),
                                                      this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 }))
                                                    : this.$element[0].addEventListener &&
                                                      (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1),
                                                      this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1),
                                                      this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1));
                                            }),
                                            (r.prototype._registerDataEvents = function () {
                                                var e = this;
                                                this.dataAdapter.on("*", function (t, n) {
                                                    e.trigger(t, n);
                                                });
                                            }),
                                            (r.prototype._registerSelectionEvents = function () {
                                                var t = this,
                                                    n = ["toggle", "focus"];
                                                this.selection.on("toggle", function () {
                                                    t.toggleDropdown();
                                                }),
                                                    this.selection.on("focus", function (e) {
                                                        t.focus(e);
                                                    }),
                                                    this.selection.on("*", function (i, r) {
                                                        -1 === e.inArray(i, n) && t.trigger(i, r);
                                                    });
                                            }),
                                            (r.prototype._registerDropdownEvents = function () {
                                                var e = this;
                                                this.dropdown.on("*", function (t, n) {
                                                    e.trigger(t, n);
                                                });
                                            }),
                                            (r.prototype._registerResultsEvents = function () {
                                                var e = this;
                                                this.results.on("*", function (t, n) {
                                                    e.trigger(t, n);
                                                });
                                            }),
                                            (r.prototype._registerEvents = function () {
                                                var e = this;
                                                this.on("open", function () {
                                                    e.$container.addClass("select2-container--open");
                                                }),
                                                    this.on("close", function () {
                                                        e.$container.removeClass("select2-container--open");
                                                    }),
                                                    this.on("enable", function () {
                                                        e.$container.removeClass("select2-container--disabled");
                                                    }),
                                                    this.on("disable", function () {
                                                        e.$container.addClass("select2-container--disabled");
                                                    }),
                                                    this.on("blur", function () {
                                                        e.$container.removeClass("select2-container--focus");
                                                    }),
                                                    this.on("query", function (t) {
                                                        e.isOpen() || e.trigger("open", {}),
                                                            this.dataAdapter.query(t, function (n) {
                                                                e.trigger("results:all", { data: n, query: t });
                                                            });
                                                    }),
                                                    this.on("query:append", function (t) {
                                                        this.dataAdapter.query(t, function (n) {
                                                            e.trigger("results:append", { data: n, query: t });
                                                        });
                                                    }),
                                                    this.on("keypress", function (t) {
                                                        var n = t.which;
                                                        e.isOpen()
                                                            ? n === i.ESC || n === i.TAB || (n === i.UP && t.altKey)
                                                                ? (e.close(t), t.preventDefault())
                                                                : n === i.ENTER
                                                                ? (e.trigger("results:select", {}), t.preventDefault())
                                                                : n === i.SPACE && t.ctrlKey
                                                                ? (e.trigger("results:toggle", {}), t.preventDefault())
                                                                : n === i.UP
                                                                ? (e.trigger("results:previous", {}), t.preventDefault())
                                                                : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault())
                                                            : (n === i.ENTER || n === i.SPACE || (n === i.DOWN && t.altKey)) && (e.open(), t.preventDefault());
                                                    });
                                            }),
                                            (r.prototype._syncAttributes = function () {
                                                this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
                                            }),
                                            (r.prototype._isChangeMutation = function (t, n) {
                                                var i = !1,
                                                    r = this;
                                                if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                                                    if (n)
                                                        if (n.addedNodes && n.addedNodes.length > 0) for (var o = 0; o < n.addedNodes.length; o++) n.addedNodes[o].selected && (i = !0);
                                                        else
                                                            n.removedNodes && n.removedNodes.length > 0
                                                                ? (i = !0)
                                                                : e.isArray(n) &&
                                                                  e.each(n, function (e, t) {
                                                                      if (r._isChangeMutation(e, t)) return (i = !0), !1;
                                                                  });
                                                    else i = !0;
                                                    return i;
                                                }
                                            }),
                                            (r.prototype._syncSubtree = function (e, t) {
                                                var n = this._isChangeMutation(e, t),
                                                    i = this;
                                                n &&
                                                    this.dataAdapter.current(function (e) {
                                                        i.trigger("selection:update", { data: e });
                                                    });
                                            }),
                                            (r.prototype.trigger = function (e, t) {
                                                var n = r.__super__.trigger,
                                                    i = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" };
                                                if ((void 0 === t && (t = {}), e in i)) {
                                                    var o = i[e],
                                                        s = { prevented: !1, name: e, args: t };
                                                    if ((n.call(this, o, s), s.prevented)) return void (t.prevented = !0);
                                                }
                                                n.call(this, e, t);
                                            }),
                                            (r.prototype.toggleDropdown = function () {
                                                this.isDisabled() || (this.isOpen() ? this.close() : this.open());
                                            }),
                                            (r.prototype.open = function () {
                                                this.isOpen() || this.isDisabled() || this.trigger("query", {});
                                            }),
                                            (r.prototype.close = function (e) {
                                                this.isOpen() && this.trigger("close", { originalEvent: e });
                                            }),
                                            (r.prototype.isEnabled = function () {
                                                return !this.isDisabled();
                                            }),
                                            (r.prototype.isDisabled = function () {
                                                return this.options.get("disabled");
                                            }),
                                            (r.prototype.isOpen = function () {
                                                return this.$container.hasClass("select2-container--open");
                                            }),
                                            (r.prototype.hasFocus = function () {
                                                return this.$container.hasClass("select2-container--focus");
                                            }),
                                            (r.prototype.focus = function (e) {
                                                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
                                            }),
                                            (r.prototype.enable = function (e) {
                                                this.options.get("debug") &&
                                                    window.console &&
                                                    console.warn &&
                                                    console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                                                    (null != e && 0 !== e.length) || (e = [!0]);
                                                var t = !e[0];
                                                this.$element.prop("disabled", t);
                                            }),
                                            (r.prototype.data = function () {
                                                this.options.get("debug") &&
                                                    arguments.length > 0 &&
                                                    window.console &&
                                                    console.warn &&
                                                    console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                                                var e = [];
                                                return (
                                                    this.dataAdapter.current(function (t) {
                                                        e = t;
                                                    }),
                                                    e
                                                );
                                            }),
                                            (r.prototype.val = function (t) {
                                                if (
                                                    (this.options.get("debug") &&
                                                        window.console &&
                                                        console.warn &&
                                                        console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                                                    null == t || 0 === t.length)
                                                )
                                                    return this.$element.val();
                                                var n = t[0];
                                                e.isArray(n) &&
                                                    (n = e.map(n, function (e) {
                                                        return e.toString();
                                                    })),
                                                    this.$element.val(n).trigger("input").trigger("change");
                                            }),
                                            (r.prototype.destroy = function () {
                                                this.$container.remove(),
                                                    this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                                                    null != this._observer
                                                        ? (this._observer.disconnect(), (this._observer = null))
                                                        : this.$element[0].removeEventListener &&
                                                          (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                                                          this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                                                          this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                                                    (this._syncA = null),
                                                    (this._syncS = null),
                                                    this.$element.off(".select2"),
                                                    this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                                                    this.$element.removeClass("select2-hidden-accessible"),
                                                    this.$element.attr("aria-hidden", "false"),
                                                    n.RemoveData(this.$element[0]),
                                                    this.$element.removeData("select2"),
                                                    this.dataAdapter.destroy(),
                                                    this.selection.destroy(),
                                                    this.dropdown.destroy(),
                                                    this.results.destroy(),
                                                    (this.dataAdapter = null),
                                                    (this.selection = null),
                                                    (this.dropdown = null),
                                                    (this.results = null);
                                            }),
                                            (r.prototype.render = function () {
                                                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                                                return (
                                                    t.attr("dir", this.options.get("dir")), (this.$container = t), this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
                                                );
                                            }),
                                            r
                                        );
                                    }),
                                    t.define("jquery-mousewheel", ["jquery"], function (e) {
                                        return e;
                                    }),
                                    t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, n, i, r) {
                                        if (null == e.fn.select2) {
                                            var o = ["open", "close", "destroy"];
                                            e.fn.select2 = function (t) {
                                                if ("object" == typeof (t = t || {}))
                                                    return (
                                                        this.each(function () {
                                                            var i = e.extend(!0, {}, t);
                                                            new n(e(this), i);
                                                        }),
                                                        this
                                                    );
                                                if ("string" == typeof t) {
                                                    var i,
                                                        s = Array.prototype.slice.call(arguments, 1);
                                                    return (
                                                        this.each(function () {
                                                            var e = r.GetData(this, "select2");
                                                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), (i = e[t].apply(e, s));
                                                        }),
                                                        e.inArray(t, o) > -1 ? this : i
                                                    );
                                                }
                                                throw new Error("Invalid arguments for Select2: " + t);
                                            };
                                        }
                                        return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n;
                                    }),
                                    { define: t.define, require: t.require }
                                );
                            })(),
                            n = t.require("jquery.select2");
                        return (e.fn.select2.amd = t), n;
                    }),
                    void 0 === (o = "function" == typeof i ? i.apply(t, r) : i) || (e.exports = o);
            },
            154: (e, t, n) => {
                var i, r, o;
                !(function (s) {
                    "use strict";
                    (r = [n(755)]),
                        (i = function (e) {
                            var t = window.Slick || {};
                            ((t = (function () {
                                var t = 0;
                                function n(n, i) {
                                    var r,
                                        o = this;
                                    (o.defaults = {
                                        accessibility: !0,
                                        adaptiveHeight: !1,
                                        appendArrows: e(n),
                                        appendDots: e(n),
                                        arrows: !0,
                                        asNavFor: null,
                                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                        autoplay: !1,
                                        autoplaySpeed: 3e3,
                                        centerMode: !1,
                                        centerPadding: "50px",
                                        cssEase: "ease",
                                        customPaging: function (t, n) {
                                            return e('<button type="button" />').text(n + 1);
                                        },
                                        dots: !1,
                                        dotsClass: "slick-dots",
                                        draggable: !0,
                                        easing: "linear",
                                        edgeFriction: 0.35,
                                        fade: !1,
                                        focusOnSelect: !1,
                                        focusOnChange: !1,
                                        infinite: !0,
                                        initialSlide: 0,
                                        lazyLoad: "ondemand",
                                        mobileFirst: !1,
                                        pauseOnHover: !0,
                                        pauseOnFocus: !0,
                                        pauseOnDotsHover: !1,
                                        respondTo: "window",
                                        responsive: null,
                                        rows: 1,
                                        rtl: !1,
                                        slide: "",
                                        slidesPerRow: 1,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        speed: 500,
                                        swipe: !0,
                                        swipeToSlide: !1,
                                        touchMove: !0,
                                        touchThreshold: 5,
                                        useCSS: !0,
                                        useTransform: !0,
                                        variableWidth: !1,
                                        vertical: !1,
                                        verticalSwiping: !1,
                                        waitForAnimate: !0,
                                        zIndex: 1e3,
                                    }),
                                        (o.initials = {
                                            animating: !1,
                                            dragging: !1,
                                            autoPlayTimer: null,
                                            currentDirection: 0,
                                            currentLeft: null,
                                            currentSlide: 0,
                                            direction: 1,
                                            $dots: null,
                                            listWidth: null,
                                            listHeight: null,
                                            loadIndex: 0,
                                            $nextArrow: null,
                                            $prevArrow: null,
                                            scrolling: !1,
                                            slideCount: null,
                                            slideWidth: null,
                                            $slideTrack: null,
                                            $slides: null,
                                            sliding: !1,
                                            slideOffset: 0,
                                            swipeLeft: null,
                                            swiping: !1,
                                            $list: null,
                                            touchObject: {},
                                            transformsEnabled: !1,
                                            unslicked: !1,
                                        }),
                                        e.extend(o, o.initials),
                                        (o.activeBreakpoint = null),
                                        (o.animType = null),
                                        (o.animProp = null),
                                        (o.breakpoints = []),
                                        (o.breakpointSettings = []),
                                        (o.cssTransitions = !1),
                                        (o.focussed = !1),
                                        (o.interrupted = !1),
                                        (o.hidden = "hidden"),
                                        (o.paused = !0),
                                        (o.positionProp = null),
                                        (o.respondTo = null),
                                        (o.rowCount = 1),
                                        (o.shouldClick = !0),
                                        (o.$slider = e(n)),
                                        (o.$slidesCache = null),
                                        (o.transformType = null),
                                        (o.transitionType = null),
                                        (o.visibilityChange = "visibilitychange"),
                                        (o.windowWidth = 0),
                                        (o.windowTimer = null),
                                        (r = e(n).data("slick") || {}),
                                        (o.options = e.extend({}, o.defaults, i, r)),
                                        (o.currentSlide = o.options.initialSlide),
                                        (o.originalSettings = o.options),
                                        void 0 !== document.mozHidden
                                            ? ((o.hidden = "mozHidden"), (o.visibilityChange = "mozvisibilitychange"))
                                            : void 0 !== document.webkitHidden && ((o.hidden = "webkitHidden"), (o.visibilityChange = "webkitvisibilitychange")),
                                        (o.autoPlay = e.proxy(o.autoPlay, o)),
                                        (o.autoPlayClear = e.proxy(o.autoPlayClear, o)),
                                        (o.autoPlayIterator = e.proxy(o.autoPlayIterator, o)),
                                        (o.changeSlide = e.proxy(o.changeSlide, o)),
                                        (o.clickHandler = e.proxy(o.clickHandler, o)),
                                        (o.selectHandler = e.proxy(o.selectHandler, o)),
                                        (o.setPosition = e.proxy(o.setPosition, o)),
                                        (o.swipeHandler = e.proxy(o.swipeHandler, o)),
                                        (o.dragHandler = e.proxy(o.dragHandler, o)),
                                        (o.keyHandler = e.proxy(o.keyHandler, o)),
                                        (o.instanceUid = t++),
                                        (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                                        o.registerBreakpoints(),
                                        o.init(!0);
                                }
                                return n;
                            })()).prototype.activateADA = function () {
                                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
                            }),
                                (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
                                    var r = this;
                                    if ("boolean" == typeof n) (i = n), (n = null);
                                    else if (n < 0 || n >= r.slideCount) return !1;
                                    r.unload(),
                                        "number" == typeof n
                                            ? 0 === n && 0 === r.$slides.length
                                                ? e(t).appendTo(r.$slideTrack)
                                                : i
                                                ? e(t).insertBefore(r.$slides.eq(n))
                                                : e(t).insertAfter(r.$slides.eq(n))
                                            : !0 === i
                                            ? e(t).prependTo(r.$slideTrack)
                                            : e(t).appendTo(r.$slideTrack),
                                        (r.$slides = r.$slideTrack.children(this.options.slide)),
                                        r.$slideTrack.children(this.options.slide).detach(),
                                        r.$slideTrack.append(r.$slides),
                                        r.$slides.each(function (t, n) {
                                            e(n).attr("data-slick-index", t);
                                        }),
                                        (r.$slidesCache = r.$slides),
                                        r.reinit();
                                }),
                                (t.prototype.animateHeight = function () {
                                    var e = this;
                                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                        e.$list.animate({ height: t }, e.options.speed);
                                    }
                                }),
                                (t.prototype.animateSlide = function (t, n) {
                                    var i = {},
                                        r = this;
                                    r.animateHeight(),
                                        !0 === r.options.rtl && !1 === r.options.vertical && (t = -t),
                                        !1 === r.transformsEnabled
                                            ? !1 === r.options.vertical
                                                ? r.$slideTrack.animate({ left: t }, r.options.speed, r.options.easing, n)
                                                : r.$slideTrack.animate({ top: t }, r.options.speed, r.options.easing, n)
                                            : !1 === r.cssTransitions
                                            ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
                                              e({ animStart: r.currentLeft }).animate(
                                                  { animStart: t },
                                                  {
                                                      duration: r.options.speed,
                                                      easing: r.options.easing,
                                                      step: function (e) {
                                                          (e = Math.ceil(e)),
                                                              !1 === r.options.vertical ? ((i[r.animType] = "translate(" + e + "px, 0px)"), r.$slideTrack.css(i)) : ((i[r.animType] = "translate(0px," + e + "px)"), r.$slideTrack.css(i));
                                                      },
                                                      complete: function () {
                                                          n && n.call();
                                                      },
                                                  }
                                              ))
                                            : (r.applyTransition(),
                                              (t = Math.ceil(t)),
                                              !1 === r.options.vertical ? (i[r.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[r.animType] = "translate3d(0px," + t + "px, 0px)"),
                                              r.$slideTrack.css(i),
                                              n &&
                                                  setTimeout(function () {
                                                      r.disableTransition(), n.call();
                                                  }, r.options.speed));
                                }),
                                (t.prototype.getNavTarget = function () {
                                    var t = this,
                                        n = t.options.asNavFor;
                                    return n && null !== n && (n = e(n).not(t.$slider)), n;
                                }),
                                (t.prototype.asNavFor = function (t) {
                                    var n = this.getNavTarget();
                                    null !== n &&
                                        "object" == typeof n &&
                                        n.each(function () {
                                            var n = e(this).slick("getSlick");
                                            n.unslicked || n.slideHandler(t, !0);
                                        });
                                }),
                                (t.prototype.applyTransition = function (e) {
                                    var t = this,
                                        n = {};
                                    !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
                                        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                                }),
                                (t.prototype.autoPlay = function () {
                                    var e = this;
                                    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
                                }),
                                (t.prototype.autoPlayClear = function () {
                                    var e = this;
                                    e.autoPlayTimer && clearInterval(e.autoPlayTimer);
                                }),
                                (t.prototype.autoPlayIterator = function () {
                                    var e = this,
                                        t = e.currentSlide + e.options.slidesToScroll;
                                    e.paused ||
                                        e.interrupted ||
                                        e.focussed ||
                                        (!1 === e.options.infinite &&
                                            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                                                ? (e.direction = 0)
                                                : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
                                        e.slideHandler(t));
                                }),
                                (t.prototype.buildArrows = function () {
                                    var t = this;
                                    !0 === t.options.arrows &&
                                        ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
                                        (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
                                        t.slideCount > t.options.slidesToShow
                                            ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                              t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                              t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                                              t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                                              !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                                            : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
                                }),
                                (t.prototype.buildDots = function () {
                                    var t,
                                        n,
                                        i = this;
                                    if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                                        for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                                        (i.$dots = n.appendTo(i.options.appendDots)), i.$dots.find("li").first().addClass("slick-active");
                                    }
                                }),
                                (t.prototype.buildOut = function () {
                                    var t = this;
                                    (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                                        (t.slideCount = t.$slides.length),
                                        t.$slides.each(function (t, n) {
                                            e(n)
                                                .attr("data-slick-index", t)
                                                .data("originalStyling", e(n).attr("style") || "");
                                        }),
                                        t.$slider.addClass("slick-slider"),
                                        (t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                                        (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                                        t.$slideTrack.css("opacity", 0),
                                        (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
                                        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                                        t.setupInfinite(),
                                        t.buildArrows(),
                                        t.buildDots(),
                                        t.updateDots(),
                                        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                                        !0 === t.options.draggable && t.$list.addClass("draggable");
                                }),
                                (t.prototype.buildRows = function () {
                                    var e,
                                        t,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s,
                                        a = this;
                                    if (((i = document.createDocumentFragment()), (o = a.$slider.children()), a.options.rows > 0)) {
                                        for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), e = 0; e < r; e++) {
                                            var l = document.createElement("div");
                                            for (t = 0; t < a.options.rows; t++) {
                                                var c = document.createElement("div");
                                                for (n = 0; n < a.options.slidesPerRow; n++) {
                                                    var u = e * s + (t * a.options.slidesPerRow + n);
                                                    o.get(u) && c.appendChild(o.get(u));
                                                }
                                                l.appendChild(c);
                                            }
                                            i.appendChild(l);
                                        }
                                        a.$slider.empty().append(i),
                                            a.$slider
                                                .children()
                                                .children()
                                                .children()
                                                .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                                    }
                                }),
                                (t.prototype.checkResponsive = function (t, n) {
                                    var i,
                                        r,
                                        o,
                                        s = this,
                                        a = !1,
                                        l = s.$slider.width(),
                                        c = window.innerWidth || e(window).width();
                                    if (
                                        ("window" === s.respondTo ? (o = c) : "slider" === s.respondTo ? (o = l) : "min" === s.respondTo && (o = Math.min(c, l)),
                                        s.options.responsive && s.options.responsive.length && null !== s.options.responsive)
                                    ) {
                                        for (i in ((r = null), s.breakpoints))
                                            s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
                                        null !== r
                                            ? null !== s.activeBreakpoint
                                                ? (r !== s.activeBreakpoint || n) &&
                                                  ((s.activeBreakpoint = r),
                                                  "unslick" === s.breakpointSettings[r]
                                                      ? s.unslick(r)
                                                      : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                                                  (a = r))
                                                : ((s.activeBreakpoint = r),
                                                  "unslick" === s.breakpointSettings[r]
                                                      ? s.unslick(r)
                                                      : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[r])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)),
                                                  (a = r))
                                            : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), (a = r)),
                                            t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                                    }
                                }),
                                (t.prototype.changeSlide = function (t, n) {
                                    var i,
                                        r,
                                        o = this,
                                        s = e(t.currentTarget);
                                    switch (
                                        (s.is("a") && t.preventDefault(),
                                        s.is("li") || (s = s.closest("li")),
                                        (i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
                                        t.data.message)
                                    ) {
                                        case "previous":
                                            (r = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, n);
                                            break;
                                        case "next":
                                            (r = 0 === i ? o.options.slidesToScroll : i), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, n);
                                            break;
                                        case "index":
                                            var a = 0 === t.data.index ? 0 : t.data.index || s.index() * o.options.slidesToScroll;
                                            o.slideHandler(o.checkNavigable(a), !1, n), s.children().trigger("focus");
                                            break;
                                        default:
                                            return;
                                    }
                                }),
                                (t.prototype.checkNavigable = function (e) {
                                    var t, n;
                                    if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
                                    else
                                        for (var i in t) {
                                            if (e < t[i]) {
                                                e = n;
                                                break;
                                            }
                                            n = t[i];
                                        }
                                    return e;
                                }),
                                (t.prototype.cleanUpEvents = function () {
                                    var t = this;
                                    t.options.dots &&
                                        null !== t.$dots &&
                                        (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                                        !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                                        t.$slider.off("focus.slick blur.slick"),
                                        !0 === t.options.arrows &&
                                            t.slideCount > t.options.slidesToShow &&
                                            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                                            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                                            !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                                        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                                        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                                        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                                        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                                        t.$list.off("click.slick", t.clickHandler),
                                        e(document).off(t.visibilityChange, t.visibility),
                                        t.cleanUpSlideEvents(),
                                        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                                        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                                        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                                        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                                        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                                        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
                                }),
                                (t.prototype.cleanUpSlideEvents = function () {
                                    var t = this;
                                    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                                }),
                                (t.prototype.cleanUpRows = function () {
                                    var e,
                                        t = this;
                                    t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e));
                                }),
                                (t.prototype.clickHandler = function (e) {
                                    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
                                }),
                                (t.prototype.destroy = function (t) {
                                    var n = this;
                                    n.autoPlayClear(),
                                        (n.touchObject = {}),
                                        n.cleanUpEvents(),
                                        e(".slick-cloned", n.$slider).detach(),
                                        n.$dots && n.$dots.remove(),
                                        n.$prevArrow &&
                                            n.$prevArrow.length &&
                                            (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                                            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
                                        n.$nextArrow &&
                                            n.$nextArrow.length &&
                                            (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                                            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
                                        n.$slides &&
                                            (n.$slides
                                                .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                                                .removeAttr("aria-hidden")
                                                .removeAttr("data-slick-index")
                                                .each(function () {
                                                    e(this).attr("style", e(this).data("originalStyling"));
                                                }),
                                            n.$slideTrack.children(this.options.slide).detach(),
                                            n.$slideTrack.detach(),
                                            n.$list.detach(),
                                            n.$slider.append(n.$slides)),
                                        n.cleanUpRows(),
                                        n.$slider.removeClass("slick-slider"),
                                        n.$slider.removeClass("slick-initialized"),
                                        n.$slider.removeClass("slick-dotted"),
                                        (n.unslicked = !0),
                                        t || n.$slider.trigger("destroy", [n]);
                                }),
                                (t.prototype.disableTransition = function (e) {
                                    var t = this,
                                        n = {};
                                    (n[t.transitionType] = ""), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
                                }),
                                (t.prototype.fadeSlide = function (e, t) {
                                    var n = this;
                                    !1 === n.cssTransitions
                                        ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
                                        : (n.applyTransition(e),
                                          n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                                          t &&
                                              setTimeout(function () {
                                                  n.disableTransition(e), t.call();
                                              }, n.options.speed));
                                }),
                                (t.prototype.fadeSlideOut = function (e) {
                                    var t = this;
                                    !1 === t.cssTransitions
                                        ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing)
                                        : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                                }),
                                (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
                                    var t = this;
                                    null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
                                }),
                                (t.prototype.focusHandler = function () {
                                    var t = this;
                                    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                                        n.stopImmediatePropagation();
                                        var i = e(this);
                                        setTimeout(function () {
                                            t.options.pauseOnFocus && ((t.focussed = i.is(":focus")), t.autoPlay());
                                        }, 0);
                                    });
                                }),
                                (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                                    return this.currentSlide;
                                }),
                                (t.prototype.getDotCount = function () {
                                    var e = this,
                                        t = 0,
                                        n = 0,
                                        i = 0;
                                    if (!0 === e.options.infinite)
                                        if (e.slideCount <= e.options.slidesToShow) ++i;
                                        else for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                                    else if (!0 === e.options.centerMode) i = e.slideCount;
                                    else if (e.options.asNavFor)
                                        for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                                    else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                                    return i - 1;
                                }),
                                (t.prototype.getLeft = function (e) {
                                    var t,
                                        n,
                                        i,
                                        r,
                                        o = this,
                                        s = 0;
                                    return (
                                        (o.slideOffset = 0),
                                        (n = o.$slides.first().outerHeight(!0)),
                                        !0 === o.options.infinite
                                            ? (o.slideCount > o.options.slidesToShow &&
                                                  ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                                                  (r = -1),
                                                  !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? (r = -1.5) : 1 === o.options.slidesToShow && (r = -2)),
                                                  (s = n * o.options.slidesToShow * r)),
                                              o.slideCount % o.options.slidesToScroll != 0 &&
                                                  e + o.options.slidesToScroll > o.slideCount &&
                                                  o.slideCount > o.options.slidesToShow &&
                                                  (e > o.slideCount
                                                      ? ((o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1), (s = (o.options.slidesToShow - (e - o.slideCount)) * n * -1))
                                                      : ((o.slideOffset = (o.slideCount % o.options.slidesToScroll) * o.slideWidth * -1), (s = (o.slideCount % o.options.slidesToScroll) * n * -1))))
                                            : e + o.options.slidesToShow > o.slideCount && ((o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth), (s = (e + o.options.slidesToShow - o.slideCount) * n)),
                                        o.slideCount <= o.options.slidesToShow && ((o.slideOffset = 0), (s = 0)),
                                        !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
                                            ? (o.slideOffset = (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 - (o.slideWidth * o.slideCount) / 2)
                                            : !0 === o.options.centerMode && !0 === o.options.infinite
                                            ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
                                            : !0 === o.options.centerMode && ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
                                        (t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + s),
                                        !0 === o.options.variableWidth &&
                                            ((i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow)),
                                            (t = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                                            !0 === o.options.centerMode &&
                                                ((i =
                                                    o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite
                                                        ? o.$slideTrack.children(".slick-slide").eq(e)
                                                        : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1)),
                                                (t = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                                                (t += (o.$list.width() - i.outerWidth()) / 2))),
                                        t
                                    );
                                }),
                                (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
                                    return this.options[e];
                                }),
                                (t.prototype.getNavigableIndexes = function () {
                                    var e,
                                        t = this,
                                        n = 0,
                                        i = 0,
                                        r = [];
                                    for (!1 === t.options.infinite ? (e = t.slideCount) : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount)); n < e; )
                                        r.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                                    return r;
                                }),
                                (t.prototype.getSlick = function () {
                                    return this;
                                }),
                                (t.prototype.getSlideCount = function () {
                                    var t,
                                        n,
                                        i = this;
                                    return (
                                        (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
                                        !0 === i.options.swipeToSlide
                                            ? (i.$slideTrack.find(".slick-slide").each(function (r, o) {
                                                  if (o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * i.swipeLeft) return (t = o), !1;
                                              }),
                                              Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
                                            : i.options.slidesToScroll
                                    );
                                }),
                                (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                                    this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
                                }),
                                (t.prototype.init = function (t) {
                                    var n = this;
                                    e(n.$slider).hasClass("slick-initialized") ||
                                        (e(n.$slider).addClass("slick-initialized"),
                                        n.buildRows(),
                                        n.buildOut(),
                                        n.setProps(),
                                        n.startLoad(),
                                        n.loadSlider(),
                                        n.initializeEvents(),
                                        n.updateArrows(),
                                        n.updateDots(),
                                        n.checkResponsive(!0),
                                        n.focusHandler()),
                                        t && n.$slider.trigger("init", [n]),
                                        !0 === n.options.accessibility && n.initADA(),
                                        n.options.autoplay && ((n.paused = !1), n.autoPlay());
                                }),
                                (t.prototype.initADA = function () {
                                    var t = this,
                                        n = Math.ceil(t.slideCount / t.options.slidesToShow),
                                        i = t.getNavigableIndexes().filter(function (e) {
                                            return e >= 0 && e < t.slideCount;
                                        });
                                    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                                        null !== t.$dots &&
                                            (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                                                var r = i.indexOf(n);
                                                if ((e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== r)) {
                                                    var o = "slick-slide-control" + t.instanceUid + r;
                                                    e("#" + o).length && e(this).attr({ "aria-describedby": o });
                                                }
                                            }),
                                            t.$dots
                                                .attr("role", "tablist")
                                                .find("li")
                                                .each(function (r) {
                                                    var o = i[r];
                                                    e(this).attr({ role: "presentation" }),
                                                        e(this)
                                                            .find("button")
                                                            .first()
                                                            .attr({
                                                                role: "tab",
                                                                id: "slick-slide-control" + t.instanceUid + r,
                                                                "aria-controls": "slick-slide" + t.instanceUid + o,
                                                                "aria-label": r + 1 + " of " + n,
                                                                "aria-selected": null,
                                                                tabindex: "-1",
                                                            });
                                                })
                                                .eq(t.currentSlide)
                                                .find("button")
                                                .attr({ "aria-selected": "true", tabindex: "0" })
                                                .end());
                                    for (var r = t.currentSlide, o = r + t.options.slidesToShow; r < o; r++) t.options.focusOnChange ? t.$slides.eq(r).attr({ tabindex: "0" }) : t.$slides.eq(r).removeAttr("tabindex");
                                    t.activateADA();
                                }),
                                (t.prototype.initArrowEvents = function () {
                                    var e = this;
                                    !0 === e.options.arrows &&
                                        e.slideCount > e.options.slidesToShow &&
                                        (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
                                        e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
                                        !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
                                }),
                                (t.prototype.initDotEvents = function () {
                                    var t = this;
                                    !0 === t.options.dots &&
                                        t.slideCount > t.options.slidesToShow &&
                                        (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                                        !0 === t.options.dots &&
                                            !0 === t.options.pauseOnDotsHover &&
                                            t.slideCount > t.options.slidesToShow &&
                                            e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                                }),
                                (t.prototype.initSlideEvents = function () {
                                    var t = this;
                                    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
                                }),
                                (t.prototype.initializeEvents = function () {
                                    var t = this;
                                    t.initArrowEvents(),
                                        t.initDotEvents(),
                                        t.initSlideEvents(),
                                        t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                                        t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                                        t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                                        t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                                        t.$list.on("click.slick", t.clickHandler),
                                        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                                        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                                        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                                        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                                        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                                        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                                        e(t.setPosition);
                                }),
                                (t.prototype.initUI = function () {
                                    var e = this;
                                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
                                }),
                                (t.prototype.keyHandler = function (e) {
                                    var t = this;
                                    e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                                        (37 === e.keyCode && !0 === t.options.accessibility
                                            ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                                            : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
                                }),
                                (t.prototype.lazyLoad = function () {
                                    var t,
                                        n,
                                        i,
                                        r = this;
                                    function o(t) {
                                        e("img[data-lazy]", t).each(function () {
                                            var t = e(this),
                                                n = e(this).attr("data-lazy"),
                                                i = e(this).attr("data-srcset"),
                                                o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                                                s = document.createElement("img");
                                            (s.onload = function () {
                                                t.animate({ opacity: 0 }, 100, function () {
                                                    i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                                                        t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                                                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                                        }),
                                                        r.$slider.trigger("lazyLoaded", [r, t, n]);
                                                });
                                            }),
                                                (s.onerror = function () {
                                                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n]);
                                                }),
                                                (s.src = n);
                                        });
                                    }
                                    if (
                                        (!0 === r.options.centerMode
                                            ? !0 === r.options.infinite
                                                ? (i = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2)
                                                : ((n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))), (i = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
                                            : ((n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide),
                                              (i = Math.ceil(n + r.options.slidesToShow)),
                                              !0 === r.options.fade && (n > 0 && n--, i <= r.slideCount && i++)),
                                        (t = r.$slider.find(".slick-slide").slice(n, i)),
                                        "anticipated" === r.options.lazyLoad)
                                    )
                                        for (var s = n - 1, a = i, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), (t = (t = t.add(l.eq(s))).add(l.eq(a))), s--, a++;
                                    o(t),
                                        r.slideCount <= r.options.slidesToShow
                                            ? o(r.$slider.find(".slick-slide"))
                                            : r.currentSlide >= r.slideCount - r.options.slidesToShow
                                            ? o(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow))
                                            : 0 === r.currentSlide && o(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
                                }),
                                (t.prototype.loadSlider = function () {
                                    var e = this;
                                    e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
                                }),
                                (t.prototype.next = t.prototype.slickNext = function () {
                                    this.changeSlide({ data: { message: "next" } });
                                }),
                                (t.prototype.orientationChange = function () {
                                    var e = this;
                                    e.checkResponsive(), e.setPosition();
                                }),
                                (t.prototype.pause = t.prototype.slickPause = function () {
                                    var e = this;
                                    e.autoPlayClear(), (e.paused = !0);
                                }),
                                (t.prototype.play = t.prototype.slickPlay = function () {
                                    var e = this;
                                    e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
                                }),
                                (t.prototype.postSlide = function (t) {
                                    var n = this;
                                    n.unslicked ||
                                        (n.$slider.trigger("afterChange", [n, t]),
                                        (n.animating = !1),
                                        n.slideCount > n.options.slidesToShow && n.setPosition(),
                                        (n.swipeLeft = null),
                                        n.options.autoplay && n.autoPlay(),
                                        !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
                                }),
                                (t.prototype.prev = t.prototype.slickPrev = function () {
                                    this.changeSlide({ data: { message: "previous" } });
                                }),
                                (t.prototype.preventDefault = function (e) {
                                    e.preventDefault();
                                }),
                                (t.prototype.progressiveLazyLoad = function (t) {
                                    t = t || 1;
                                    var n,
                                        i,
                                        r,
                                        o,
                                        s,
                                        a = this,
                                        l = e("img[data-lazy]", a.$slider);
                                    l.length
                                        ? ((n = l.first()),
                                          (i = n.attr("data-lazy")),
                                          (r = n.attr("data-srcset")),
                                          (o = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                                          ((s = document.createElement("img")).onload = function () {
                                              r && (n.attr("srcset", r), o && n.attr("sizes", o)),
                                                  n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                                                  !0 === a.options.adaptiveHeight && a.setPosition(),
                                                  a.$slider.trigger("lazyLoaded", [a, n, i]),
                                                  a.progressiveLazyLoad();
                                          }),
                                          (s.onerror = function () {
                                              t < 3
                                                  ? setTimeout(function () {
                                                        a.progressiveLazyLoad(t + 1);
                                                    }, 500)
                                                  : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
                                          }),
                                          (s.src = i))
                                        : a.$slider.trigger("allImagesLoaded", [a]);
                                }),
                                (t.prototype.refresh = function (t) {
                                    var n,
                                        i,
                                        r = this;
                                    (i = r.slideCount - r.options.slidesToShow),
                                        !r.options.infinite && r.currentSlide > i && (r.currentSlide = i),
                                        r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
                                        (n = r.currentSlide),
                                        r.destroy(!0),
                                        e.extend(r, r.initials, { currentSlide: n }),
                                        r.init(),
                                        t || r.changeSlide({ data: { message: "index", index: n } }, !1);
                                }),
                                (t.prototype.registerBreakpoints = function () {
                                    var t,
                                        n,
                                        i,
                                        r = this,
                                        o = r.options.responsive || null;
                                    if ("array" === e.type(o) && o.length) {
                                        for (t in ((r.respondTo = r.options.respondTo || "window"), o))
                                            if (((i = r.breakpoints.length - 1), o.hasOwnProperty(t))) {
                                                for (n = o[t].breakpoint; i >= 0; ) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
                                                r.breakpoints.push(n), (r.breakpointSettings[n] = o[t].settings);
                                            }
                                        r.breakpoints.sort(function (e, t) {
                                            return r.options.mobileFirst ? e - t : t - e;
                                        });
                                    }
                                }),
                                (t.prototype.reinit = function () {
                                    var t = this;
                                    (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                                        (t.slideCount = t.$slides.length),
                                        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                                        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                                        t.registerBreakpoints(),
                                        t.setProps(),
                                        t.setupInfinite(),
                                        t.buildArrows(),
                                        t.updateArrows(),
                                        t.initArrowEvents(),
                                        t.buildDots(),
                                        t.updateDots(),
                                        t.initDotEvents(),
                                        t.cleanUpSlideEvents(),
                                        t.initSlideEvents(),
                                        t.checkResponsive(!1, !0),
                                        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                                        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                                        t.setPosition(),
                                        t.focusHandler(),
                                        (t.paused = !t.options.autoplay),
                                        t.autoPlay(),
                                        t.$slider.trigger("reInit", [t]);
                                }),
                                (t.prototype.resize = function () {
                                    var t = this;
                                    e(window).width() !== t.windowWidth &&
                                        (clearTimeout(t.windowDelay),
                                        (t.windowDelay = window.setTimeout(function () {
                                            (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                                        }, 50)));
                                }),
                                (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
                                    var i = this;
                                    if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e), i.slideCount < 1 || e < 0 || e > i.slideCount - 1)) return !1;
                                    i.unload(),
                                        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
                                        (i.$slides = i.$slideTrack.children(this.options.slide)),
                                        i.$slideTrack.children(this.options.slide).detach(),
                                        i.$slideTrack.append(i.$slides),
                                        (i.$slidesCache = i.$slides),
                                        i.reinit();
                                }),
                                (t.prototype.setCSS = function (e) {
                                    var t,
                                        n,
                                        i = this,
                                        r = {};
                                    !0 === i.options.rtl && (e = -e),
                                        (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                                        (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                                        (r[i.positionProp] = e),
                                        !1 === i.transformsEnabled
                                            ? i.$slideTrack.css(r)
                                            : ((r = {}),
                                              !1 === i.cssTransitions ? ((r[i.animType] = "translate(" + t + ", " + n + ")"), i.$slideTrack.css(r)) : ((r[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(r)));
                                }),
                                (t.prototype.setDimensions = function () {
                                    var e = this;
                                    !1 === e.options.vertical
                                        ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
                                        : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                                        (e.listWidth = e.$list.width()),
                                        (e.listHeight = e.$list.height()),
                                        !1 === e.options.vertical && !1 === e.options.variableWidth
                                            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                                            : !0 === e.options.variableWidth
                                            ? e.$slideTrack.width(5e3 * e.slideCount)
                                            : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                                    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                                    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
                                }),
                                (t.prototype.setFade = function () {
                                    var t,
                                        n = this;
                                    n.$slides.each(function (i, r) {
                                        (t = n.slideWidth * i * -1),
                                            !0 === n.options.rtl
                                                ? e(r).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 })
                                                : e(r).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
                                    }),
                                        n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                                }),
                                (t.prototype.setHeight = function () {
                                    var e = this;
                                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                        e.$list.css("height", t);
                                    }
                                }),
                                (t.prototype.setOption = t.prototype.slickSetOption = function () {
                                    var t,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s = this,
                                        a = !1;
                                    if (
                                        ("object" === e.type(arguments[0])
                                            ? ((i = arguments[0]), (a = arguments[1]), (o = "multiple"))
                                            : "string" === e.type(arguments[0]) &&
                                              ((i = arguments[0]), (r = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? (o = "responsive") : void 0 !== arguments[1] && (o = "single")),
                                        "single" === o)
                                    )
                                        s.options[i] = r;
                                    else if ("multiple" === o)
                                        e.each(i, function (e, t) {
                                            s.options[e] = t;
                                        });
                                    else if ("responsive" === o)
                                        for (n in r)
                                            if ("array" !== e.type(s.options.responsive)) s.options.responsive = [r[n]];
                                            else {
                                                for (t = s.options.responsive.length - 1; t >= 0; ) s.options.responsive[t].breakpoint === r[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                                                s.options.responsive.push(r[n]);
                                            }
                                    a && (s.unload(), s.reinit());
                                }),
                                (t.prototype.setPosition = function () {
                                    var e = this;
                                    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
                                }),
                                (t.prototype.setProps = function () {
                                    var e = this,
                                        t = document.body.style;
                                    (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                                        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                                        (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                                        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
                                        void 0 !== t.OTransform &&
                                            ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                                        void 0 !== t.MozTransform &&
                                            ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                                        void 0 !== t.webkitTransform &&
                                            ((e.animType = "webkitTransform"),
                                            (e.transformType = "-webkit-transform"),
                                            (e.transitionType = "webkitTransition"),
                                            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                                        void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
                                        void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
                                        (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
                                }),
                                (t.prototype.setSlideClasses = function (e) {
                                    var t,
                                        n,
                                        i,
                                        r,
                                        o = this;
                                    if (((n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode)) {
                                        var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                                        (t = Math.floor(o.options.slidesToShow / 2)),
                                            !0 === o.options.infinite &&
                                                (e >= t && e <= o.slideCount - 1 - t
                                                    ? o.$slides
                                                          .slice(e - t + s, e + t + 1)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")
                                                    : ((i = o.options.slidesToShow + e),
                                                      n
                                                          .slice(i - t + 1 + s, i + t + 2)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")),
                                                0 === e ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")),
                                            o.$slides.eq(e).addClass("slick-center");
                                    } else
                                        e >= 0 && e <= o.slideCount - o.options.slidesToShow
                                            ? o.$slides
                                                  .slice(e, e + o.options.slidesToShow)
                                                  .addClass("slick-active")
                                                  .attr("aria-hidden", "false")
                                            : n.length <= o.options.slidesToShow
                                            ? n.addClass("slick-active").attr("aria-hidden", "false")
                                            : ((r = o.slideCount % o.options.slidesToShow),
                                              (i = !0 === o.options.infinite ? o.options.slidesToShow + e : e),
                                              o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow
                                                  ? n
                                                        .slice(i - (o.options.slidesToShow - r), i + r)
                                                        .addClass("slick-active")
                                                        .attr("aria-hidden", "false")
                                                  : n
                                                        .slice(i, i + o.options.slidesToShow)
                                                        .addClass("slick-active")
                                                        .attr("aria-hidden", "false"));
                                    ("ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad) || o.lazyLoad();
                                }),
                                (t.prototype.setupInfinite = function () {
                                    var t,
                                        n,
                                        i,
                                        r = this;
                                    if ((!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && ((n = null), r.slideCount > r.options.slidesToShow))) {
                                        for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - i; t -= 1)
                                            (n = t - 1),
                                                e(r.$slides[n])
                                                    .clone(!0)
                                                    .attr("id", "")
                                                    .attr("data-slick-index", n - r.slideCount)
                                                    .prependTo(r.$slideTrack)
                                                    .addClass("slick-cloned");
                                        for (t = 0; t < i + r.slideCount; t += 1)
                                            (n = t),
                                                e(r.$slides[n])
                                                    .clone(!0)
                                                    .attr("id", "")
                                                    .attr("data-slick-index", n + r.slideCount)
                                                    .appendTo(r.$slideTrack)
                                                    .addClass("slick-cloned");
                                        r.$slideTrack
                                            .find(".slick-cloned")
                                            .find("[id]")
                                            .each(function () {
                                                e(this).attr("id", "");
                                            });
                                    }
                                }),
                                (t.prototype.interrupt = function (e) {
                                    var t = this;
                                    e || t.autoPlay(), (t.interrupted = e);
                                }),
                                (t.prototype.selectHandler = function (t) {
                                    var n = this,
                                        i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                                        r = parseInt(i.attr("data-slick-index"));
                                    r || (r = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(r, !1, !0) : n.slideHandler(r);
                                }),
                                (t.prototype.slideHandler = function (e, t, n) {
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a,
                                        l = null,
                                        c = this;
                                    if (((t = t || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e))))
                                        if (
                                            (!1 === t && c.asNavFor(e),
                                            (i = e),
                                            (l = c.getLeft(i)),
                                            (s = c.getLeft(c.currentSlide)),
                                            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                                            !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                                        )
                                            !1 === c.options.fade &&
                                                ((i = c.currentSlide),
                                                !0 !== n && c.slideCount > c.options.slidesToShow
                                                    ? c.animateSlide(s, function () {
                                                          c.postSlide(i);
                                                      })
                                                    : c.postSlide(i));
                                        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                                            !1 === c.options.fade &&
                                                ((i = c.currentSlide),
                                                !0 !== n && c.slideCount > c.options.slidesToShow
                                                    ? c.animateSlide(s, function () {
                                                          c.postSlide(i);
                                                      })
                                                    : c.postSlide(i));
                                        else {
                                            if (
                                                (c.options.autoplay && clearInterval(c.autoPlayTimer),
                                                (r =
                                                    i < 0
                                                        ? c.slideCount % c.options.slidesToScroll != 0
                                                            ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                                            : c.slideCount + i
                                                        : i >= c.slideCount
                                                        ? c.slideCount % c.options.slidesToScroll != 0
                                                            ? 0
                                                            : i - c.slideCount
                                                        : i),
                                                (c.animating = !0),
                                                c.$slider.trigger("beforeChange", [c, c.currentSlide, r]),
                                                (o = c.currentSlide),
                                                (c.currentSlide = r),
                                                c.setSlideClasses(c.currentSlide),
                                                c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                                                c.updateDots(),
                                                c.updateArrows(),
                                                !0 === c.options.fade)
                                            )
                                                return (
                                                    !0 !== n
                                                        ? (c.fadeSlideOut(o),
                                                          c.fadeSlide(r, function () {
                                                              c.postSlide(r);
                                                          }))
                                                        : c.postSlide(r),
                                                    void c.animateHeight()
                                                );
                                            !0 !== n && c.slideCount > c.options.slidesToShow
                                                ? c.animateSlide(l, function () {
                                                      c.postSlide(r);
                                                  })
                                                : c.postSlide(r);
                                        }
                                }),
                                (t.prototype.startLoad = function () {
                                    var e = this;
                                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                                        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                                        e.$slider.addClass("slick-loading");
                                }),
                                (t.prototype.swipeDirection = function () {
                                    var e,
                                        t,
                                        n,
                                        i,
                                        r = this;
                                    return (
                                        (e = r.touchObject.startX - r.touchObject.curX),
                                        (t = r.touchObject.startY - r.touchObject.curY),
                                        (n = Math.atan2(t, e)),
                                        (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
                                        (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
                                            ? !1 === r.options.rtl
                                                ? "left"
                                                : "right"
                                            : i >= 135 && i <= 225
                                            ? !1 === r.options.rtl
                                                ? "right"
                                                : "left"
                                            : !0 === r.options.verticalSwiping
                                            ? i >= 35 && i <= 135
                                                ? "down"
                                                : "up"
                                            : "vertical"
                                    );
                                }),
                                (t.prototype.swipeEnd = function (e) {
                                    var t,
                                        n,
                                        i = this;
                                    if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1), !1;
                                    if (((i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX)) return !1;
                                    if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
                                        switch ((n = i.swipeDirection())) {
                                            case "left":
                                            case "down":
                                                (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
                                                break;
                                            case "right":
                                            case "up":
                                                (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
                                        }
                                        "vertical" != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
                                    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                                }),
                                (t.prototype.swipeHandler = function (e) {
                                    var t = this;
                                    if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
                                        switch (
                                            ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                                            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                                            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                                            e.data.action)
                                        ) {
                                            case "start":
                                                t.swipeStart(e);
                                                break;
                                            case "move":
                                                t.swipeMove(e);
                                                break;
                                            case "end":
                                                t.swipeEnd(e);
                                        }
                                }),
                                (t.prototype.swipeMove = function (e) {
                                    var t,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s,
                                        a = this;
                                    return (
                                        (o = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                                        !(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
                                            ((t = a.getLeft(a.currentSlide)),
                                            (a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
                                            (a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
                                            (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                                            (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                                            !a.options.verticalSwiping && !a.swiping && s > 4
                                                ? ((a.scrolling = !0), !1)
                                                : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                                                  (n = a.swipeDirection()),
                                                  void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), e.preventDefault()),
                                                  (r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                                                  !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                                                  (i = a.touchObject.swipeLength),
                                                  (a.touchObject.edgeHit = !1),
                                                  !1 === a.options.infinite &&
                                                      ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                                                      ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                                                  !1 === a.options.vertical ? (a.swipeLeft = t + i * r) : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * r),
                                                  !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * r),
                                                  !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                                    );
                                }),
                                (t.prototype.swipeStart = function (e) {
                                    var t,
                                        n = this;
                                    if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return (n.touchObject = {}), !1;
                                    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                                        (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
                                        (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
                                        (n.dragging = !0);
                                }),
                                (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                                    var e = this;
                                    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
                                }),
                                (t.prototype.unload = function () {
                                    var t = this;
                                    e(".slick-cloned", t.$slider).remove(),
                                        t.$dots && t.$dots.remove(),
                                        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                                        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                                        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                                }),
                                (t.prototype.unslick = function (e) {
                                    var t = this;
                                    t.$slider.trigger("unslick", [t, e]), t.destroy();
                                }),
                                (t.prototype.updateArrows = function () {
                                    var e = this;
                                    Math.floor(e.options.slidesToShow / 2),
                                        !0 === e.options.arrows &&
                                            e.slideCount > e.options.slidesToShow &&
                                            !e.options.infinite &&
                                            (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                            e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                            0 === e.currentSlide
                                                ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                                : ((e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode) || (e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode)) &&
                                                  (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
                                }),
                                (t.prototype.updateDots = function () {
                                    var e = this;
                                    null !== e.$dots &&
                                        (e.$dots.find("li").removeClass("slick-active").end(),
                                        e.$dots
                                            .find("li")
                                            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                                            .addClass("slick-active"));
                                }),
                                (t.prototype.visibility = function () {
                                    var e = this;
                                    e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
                                }),
                                (e.fn.slick = function () {
                                    var e,
                                        n,
                                        i = this,
                                        r = arguments[0],
                                        o = Array.prototype.slice.call(arguments, 1),
                                        s = i.length;
                                    for (e = 0; e < s; e++) if (("object" == typeof r || void 0 === r ? (i[e].slick = new t(i[e], r)) : (n = i[e].slick[r].apply(i[e].slick, o)), void 0 !== n)) return n;
                                    return i;
                                });
                        }),
                        void 0 === (o = "function" == typeof i ? i.apply(t, r) : i) || (e.exports = o);
                })();
            },
            379: (e, t, n) => {
                "use strict";
                var i,
                    r = function () {
                        return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i;
                    },
                    o = (function () {
                        var e = {};
                        return function (t) {
                            if (void 0 === e[t]) {
                                var n = document.querySelector(t);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                    try {
                                        n = n.contentDocument.head;
                                    } catch (e) {
                                        n = null;
                                    }
                                e[t] = n;
                            }
                            return e[t];
                        };
                    })(),
                    s = [];
                function a(e) {
                    for (var t = -1, n = 0; n < s.length; n++)
                        if (s[n].identifier === e) {
                            t = n;
                            break;
                        }
                    return t;
                }
                function l(e, t) {
                    for (var n = {}, i = [], r = 0; r < e.length; r++) {
                        var o = e[r],
                            l = t.base ? o[0] + t.base : o[0],
                            c = n[l] || 0,
                            u = "".concat(l, " ").concat(c);
                        n[l] = c + 1;
                        var d = a(u),
                            p = { css: o[1], media: o[2], sourceMap: o[3] };
                        -1 !== d ? (s[d].references++, s[d].updater(p)) : s.push({ identifier: u, updater: m(p, t), references: 1 }), i.push(u);
                    }
                    return i;
                }
                function c(e) {
                    var t = document.createElement("style"),
                        i = e.attributes || {};
                    if (void 0 === i.nonce) {
                        var r = n.nc;
                        r && (i.nonce = r);
                    }
                    if (
                        (Object.keys(i).forEach(function (e) {
                            t.setAttribute(e, i[e]);
                        }),
                        "function" == typeof e.insert)
                    )
                        e.insert(t);
                    else {
                        var s = o(e.insert || "head");
                        if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        s.appendChild(t);
                    }
                    return t;
                }
                var u,
                    d =
                        ((u = []),
                        function (e, t) {
                            return (u[e] = t), u.filter(Boolean).join("\n");
                        });
                function p(e, t, n, i) {
                    var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                    if (e.styleSheet) e.styleSheet.cssText = d(t, r);
                    else {
                        var o = document.createTextNode(r),
                            s = e.childNodes;
                        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
                    }
                }
                function f(e, t, n) {
                    var i = n.css,
                        r = n.media,
                        o = n.sourceMap;
                    if (
                        (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
                        o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                        e.styleSheet)
                    )
                        e.styleSheet.cssText = i;
                    else {
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(i));
                    }
                }
                var h = null,
                    g = 0;
                function m(e, t) {
                    var n, i, r;
                    if (t.singleton) {
                        var o = g++;
                        (n = h || (h = c(t))), (i = p.bind(null, n, o, !1)), (r = p.bind(null, n, o, !0));
                    } else
                        (n = c(t)),
                            (i = f.bind(null, n, t)),
                            (r = function () {
                                !(function (e) {
                                    if (null === e.parentNode) return !1;
                                    e.parentNode.removeChild(e);
                                })(n);
                            });
                    return (
                        i(e),
                        function (t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                i((e = t));
                            } else r();
                        }
                    );
                }
                e.exports = function (e, t) {
                    (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
                    var n = l((e = e || []), t);
                    return function (e) {
                        if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                            for (var i = 0; i < n.length; i++) {
                                var r = a(n[i]);
                                s[r].references--;
                            }
                            for (var o = l(e, t), c = 0; c < n.length; c++) {
                                var u = a(n[c]);
                                0 === s[u].references && (s[u].updater(), s.splice(u, 1));
                            }
                            n = o;
                        }
                    };
                };
            },
        },
        t = {};
    function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = (t[i] = { id: i, exports: {} });
        return e[i].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, { a: t }), t;
    }),
        (n.d = (e, t) => {
            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            "use strict";
            var e = n(755),
                t = (n(686), n(154), n(379)),
                i = n.n(t),
                r = n(773),
                o = { insert: "head", singleton: !1 };
            i()(r.Z, o);
            r.Z.locals;
            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function a(e, t) {
                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
            }
            var l,
                c,
                u,
                d,
                p,
                f,
                h,
                g,
                m,
                v,
                y,
                b,
                w,
                x = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
                _ = { duration: 0.5, overwrite: !1, delay: 0 },
                T = 1e8,
                k = 1e-8,
                C = 2 * Math.PI,
                A = C / 4,
                S = 0,
                $ = Math.sqrt,
                E = Math.cos,
                O = Math.sin,
                D = function (e) {
                    return "string" == typeof e;
                },
                P = function (e) {
                    return "function" == typeof e;
                },
                M = function (e) {
                    return "number" == typeof e;
                },
                L = function (e) {
                    return void 0 === e;
                },
                N = function (e) {
                    return "object" == typeof e;
                },
                z = function (e) {
                    return !1 !== e;
                },
                j = function () {
                    return "undefined" != typeof window;
                },
                I = function (e) {
                    return P(e) || D(e);
                },
                q = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
                R = Array.isArray,
                H = /(?:-?\.?\d|\.)+/gi,
                B = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                F = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                W = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                U = /[+-]=-?[.\d]+/,
                Y = /[^,'"\[\]\s]+/gi,
                X = /[\d.+\-=]+(?:e[-+]\d*)*/i,
                G = {},
                V = {},
                K = function (e) {
                    return (V = _e(e, G)) && un;
                },
                J = function (e, t) {
                    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
                },
                Z = function (e, t) {
                    return !t && console.warn(e);
                },
                Q = function (e, t) {
                    return (e && (G[e] = t) && V && (V[e] = t)) || G;
                },
                ee = function () {
                    return 0;
                },
                te = {},
                ne = [],
                ie = {},
                re = {},
                oe = {},
                se = 30,
                ae = [],
                le = "",
                ce = function (e) {
                    var t,
                        n,
                        i = e[0];
                    if ((N(i) || P(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
                        for (n = ae.length; n-- && !ae[n].targetTest(i); );
                        t = ae[n];
                    }
                    for (n = e.length; n--; ) (e[n] && (e[n]._gsap || (e[n]._gsap = new Lt(e[n], t)))) || e.splice(n, 1);
                    return e;
                },
                ue = function (e) {
                    return e._gsap || ce(Qe(e))[0]._gsap;
                },
                de = function (e, t, n) {
                    return (n = e[t]) && P(n) ? e[t]() : (L(n) && e.getAttribute && e.getAttribute(t)) || n;
                },
                pe = function (e, t) {
                    return (e = e.split(",")).forEach(t) || e;
                },
                fe = function (e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                },
                he = function (e) {
                    return Math.round(1e7 * e) / 1e7 || 0;
                },
                ge = function (e, t) {
                    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
                    return i < n;
                },
                me = function () {
                    var e,
                        t,
                        n = ne.length,
                        i = ne.slice(0);
                    for (ie = {}, ne.length = 0, e = 0; e < n; e++) (t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
                },
                ve = function (e, t, n, i) {
                    ne.length && me(), e.render(t, n, i), ne.length && me();
                },
                ye = function (e) {
                    var t = parseFloat(e);
                    return (t || 0 === t) && (e + "").match(Y).length < 2 ? t : D(e) ? e.trim() : e;
                },
                be = function (e) {
                    return e;
                },
                we = function (e, t) {
                    for (var n in t) n in e || (e[n] = t[n]);
                    return e;
                },
                xe = function (e, t) {
                    for (var n in t) n in e || "duration" === n || "ease" === n || (e[n] = t[n]);
                },
                _e = function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                },
                Te = function e(t, n) {
                    for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = N(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
                    return t;
                },
                ke = function (e, t) {
                    var n,
                        i = {};
                    for (n in e) n in t || (i[n] = e[n]);
                    return i;
                },
                Ce = function (e) {
                    var t = e.parent || c,
                        n = e.keyframes ? xe : we;
                    if (z(e.inherit)) for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
                    return e;
                },
                Ae = function (e, t, n, i) {
                    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                    var r = t._prev,
                        o = t._next;
                    r ? (r._next = o) : e[n] === t && (e[n] = o), o ? (o._prev = r) : e[i] === t && (e[i] = r), (t._next = t._prev = t.parent = null);
                },
                Se = function (e, t) {
                    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0);
                },
                $e = function (e, t) {
                    if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
                    return e;
                },
                Ee = function (e) {
                    for (var t = e.parent; t && t.parent; ) (t._dirty = 1), t.totalDuration(), (t = t.parent);
                    return e;
                },
                Oe = function e(t) {
                    return !t || (t._ts && e(t.parent));
                },
                De = function (e) {
                    return e._repeat ? Pe(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
                },
                Pe = function (e, t) {
                    var n = Math.floor((e /= t));
                    return e && n === e ? n - 1 : n;
                },
                Me = function (e, t) {
                    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
                },
                Le = function (e) {
                    return (e._end = he(e._start + (e._tDur / Math.abs(e._ts || e._rts || k) || 0)));
                },
                Ne = function (e, t) {
                    var n = e._dp;
                    return n && n.smoothChildTiming && e._ts && ((e._start = he(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts))), Le(e), n._dirty || $e(n, e)), e;
                },
                ze = function (e, t) {
                    var n;
                    if (((t._time || (t._initted && !t._dur)) && ((n = Me(e.rawTime(), t)), (!t._dur || Ge(0, t.totalDuration(), n) - t._tTime > k) && t.render(n, !0)), $e(e, t)._dp && e._initted && e._time >= e._dur && e._ts)) {
                        if (e._dur < e.duration()) for (n = e; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
                        e._zTime = -1e-8;
                    }
                },
                je = function (e, t, n, i) {
                    return (
                        t.parent && Se(t),
                        (t._start = he((M(n) ? n : n || e !== c ? Ue(e, n, t) : e._time) + t._delay)),
                        (t._end = he(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
                        (function (e, t, n, i, r) {
                            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                            var o,
                                s = e[i];
                            if (r) for (o = t[r]; s && s[r] > o; ) s = s._prev;
                            s ? ((t._next = s._next), (s._next = t)) : ((t._next = e[n]), (e[n] = t)), t._next ? (t._next._prev = t) : (e[i] = t), (t._prev = s), (t.parent = t._dp = e);
                        })(e, t, "_first", "_last", e._sort ? "_start" : 0),
                        He(t) || (e._recent = t),
                        i || ze(e, t),
                        e
                    );
                },
                Ie = function (e, t) {
                    return (G.ScrollTrigger || J("scrollTrigger", t)) && G.ScrollTrigger.create(t, e);
                },
                qe = function (e, t, n, i) {
                    return Ht(e, t), e._initted ? (!n && e._pt && ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) && h !== xt.frame ? (ne.push(e), (e._lazy = [t, i]), 1) : void 0) : 1;
                },
                Re = function e(t) {
                    var n = t.parent;
                    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
                },
                He = function (e) {
                    var t = e.data;
                    return "isFromStart" === t || "isStart" === t;
                },
                Be = function (e, t, n, i) {
                    var r = e._repeat,
                        o = he(t) || 0,
                        s = e._tTime / e._tDur;
                    return s && !i && (e._time *= o / e._dur), (e._dur = o), (e._tDur = r ? (r < 0 ? 1e10 : he(o * (r + 1) + e._rDelay * r)) : o), s && !i ? Ne(e, (e._tTime = e._tDur * s)) : e.parent && Le(e), n || $e(e.parent, e), e;
                },
                Fe = function (e) {
                    return e instanceof zt ? $e(e) : Be(e, e._dur);
                },
                We = { _start: 0, endTime: ee, totalDuration: ee },
                Ue = function e(t, n, i) {
                    var r,
                        o,
                        s,
                        a = t.labels,
                        l = t._recent || We,
                        c = t.duration() >= T ? l.endTime(!1) : t._dur;
                    return D(n) && (isNaN(n) || n in a)
                        ? ((o = n.charAt(0)),
                          (s = "%" === n.substr(-1)),
                          (r = n.indexOf("=")),
                          "<" === o || ">" === o
                              ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (r < 0 ? l : i).totalDuration() / 100 : 1))
                              : r < 0
                              ? (n in a || (a[n] = c), a[n])
                              : ((o = parseFloat(n.charAt(r - 1) + n.substr(r + 1))), s && i && (o = (o / 100) * (R(i) ? i[0] : i).totalDuration()), r > 1 ? e(t, n.substr(0, r - 1), i) + o : c + o))
                        : null == n
                        ? c
                        : +n;
                },
                Ye = function (e, t, n) {
                    var i,
                        r,
                        o = M(t[1]),
                        s = (o ? 2 : 1) + (e < 2 ? 0 : 1),
                        a = t[s];
                    if ((o && (a.duration = t[1]), (a.parent = n), e)) {
                        for (i = a, r = n; r && !("immediateRender" in i); ) (i = r.vars.defaults || {}), (r = z(r.vars.inherit) && r.parent);
                        (a.immediateRender = z(i.immediateRender)), e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
                    }
                    return new Ut(t[0], a, t[s + 1]);
                },
                Xe = function (e, t) {
                    return e || 0 === e ? t(e) : t;
                },
                Ge = function (e, t, n) {
                    return n < e ? e : n > t ? t : n;
                },
                Ve = function (e) {
                    if ("string" != typeof e) return "";
                    var t = X.exec(e);
                    return t ? e.substr(t.index + t[0].length) : "";
                },
                Ke = [].slice,
                Je = function (e, t) {
                    return e && N(e) && "length" in e && ((!t && !e.length) || (e.length - 1 in e && N(e[0]))) && !e.nodeType && e !== u;
                },
                Ze = function (e, t, n) {
                    return (
                        void 0 === n && (n = []),
                        e.forEach(function (e) {
                            var i;
                            return (D(e) && !t) || Je(e, 1) ? (i = n).push.apply(i, Qe(e)) : n.push(e);
                        }) || n
                    );
                },
                Qe = function (e, t, n) {
                    return !D(e) || n || (!d && _t()) ? (R(e) ? Ze(e, n) : Je(e) ? Ke.call(e, 0) : e ? [e] : []) : Ke.call((t || p).querySelectorAll(e), 0);
                },
                et = function (e) {
                    return e.sort(function () {
                        return 0.5 - Math.random();
                    });
                },
                tt = function (e) {
                    if (P(e)) return e;
                    var t = N(e) ? e : { each: e },
                        n = Et(t.ease),
                        i = t.from || 0,
                        r = parseFloat(t.base) || 0,
                        o = {},
                        s = i > 0 && i < 1,
                        a = isNaN(i) || s,
                        l = t.axis,
                        c = i,
                        u = i;
                    return (
                        D(i) ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0) : !s && a && ((c = i[0]), (u = i[1])),
                        function (e, s, d) {
                            var p,
                                f,
                                h,
                                g,
                                m,
                                v,
                                y,
                                b,
                                w,
                                x = (d || t).length,
                                _ = o[x];
                            if (!_) {
                                if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, T])[1])) {
                                    for (y = -T; y < (y = d[w++].getBoundingClientRect().left) && w < x; );
                                    w--;
                                }
                                for (_ = o[x] = [], p = a ? Math.min(w, x) * c - 0.5 : i % w, f = a ? (x * u) / w - 0.5 : (i / w) | 0, y = 0, b = T, v = 0; v < x; v++)
                                    (h = (v % w) - p), (g = f - ((v / w) | 0)), (_[v] = m = l ? Math.abs("y" === l ? g : h) : $(h * h + g * g)), m > y && (y = m), m < b && (b = m);
                                "random" === i && et(_),
                                    (_.max = y - b),
                                    (_.min = b),
                                    (_.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (w > x ? x - 1 : l ? ("y" === l ? x / w : w) : Math.max(w, x / w)) || 0) * ("edges" === i ? -1 : 1)),
                                    (_.b = x < 0 ? r - x : r),
                                    (_.u = Ve(t.amount || t.each) || 0),
                                    (n = n && x < 0 ? St(n) : n);
                            }
                            return (x = (_[e] - _.min) / _.max || 0), he(_.b + (n ? n(x) : x) * _.v) + _.u;
                        }
                    );
                },
                nt = function (e) {
                    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
                    return function (n) {
                        var i = Math.round(parseFloat(n) / e) * e * t;
                        return (i - (i % 1)) / t + (M(n) ? 0 : Ve(n));
                    };
                },
                it = function (e, t) {
                    var n,
                        i,
                        r = R(e);
                    return (
                        !r && N(e) && ((n = r = e.radius || T), e.values ? ((e = Qe(e.values)), (i = !M(e[0])) && (n *= n)) : (e = nt(e.increment))),
                        Xe(
                            t,
                            r
                                ? P(e)
                                    ? function (t) {
                                          return (i = e(t)), Math.abs(i - t) <= n ? i : t;
                                      }
                                    : function (t) {
                                          for (var r, o, s = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), l = T, c = 0, u = e.length; u--; )
                                              (r = i ? (r = e[u].x - s) * r + (o = e[u].y - a) * o : Math.abs(e[u] - s)) < l && ((l = r), (c = u));
                                          return (c = !n || l <= n ? e[c] : t), i || c === t || M(t) ? c : c + Ve(t);
                                      }
                                : nt(e)
                        )
                    );
                },
                rt = function (e, t, n, i) {
                    return Xe(R(e) ? !t : !0 === n ? !!(n = 0) : !i, function () {
                        return R(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n) * n * i) / i;
                    });
                },
                ot = function (e, t, n) {
                    return Xe(n, function (n) {
                        return e[~~t(n)];
                    });
                },
                st = function (e) {
                    for (var t, n, i, r, o = 0, s = ""; ~(t = e.indexOf("random(", o)); )
                        (i = e.indexOf(")", t)), (r = "[" === e.charAt(t + 7)), (n = e.substr(t + 7, i - t - 7).match(r ? Y : H)), (s += e.substr(o, t - o) + rt(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)), (o = i + 1);
                    return s + e.substr(o, e.length - o);
                },
                at = function (e, t, n, i, r) {
                    var o = t - e,
                        s = i - n;
                    return Xe(r, function (t) {
                        return n + (((t - e) / o) * s || 0);
                    });
                },
                lt = function (e, t, n) {
                    var i,
                        r,
                        o,
                        s = e.labels,
                        a = T;
                    for (i in s) (r = s[i] - t) < 0 == !!n && r && a > (r = Math.abs(r)) && ((o = i), (a = r));
                    return o;
                },
                ct = function (e, t, n) {
                    var i,
                        r,
                        o = e.vars,
                        s = o[t];
                    if (s) return (i = o[t + "Params"]), (r = o.callbackScope || e), n && ne.length && me(), i ? s.apply(r, i) : s.call(r);
                },
                ut = function (e) {
                    return Se(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && ct(e, "onInterrupt"), e;
                },
                dt = function (e) {
                    var t = (e = (!e.name && e.default) || e).name,
                        n = P(e),
                        i =
                            t && !n && e.init
                                ? function () {
                                      this._props = [];
                                  }
                                : e,
                        r = { init: ee, render: en, add: qt, kill: nn, modifier: tn, rawVars: 0 },
                        o = { targetTest: 0, get: 0, getSetter: Kt, aliases: {}, register: 0 };
                    if ((_t(), e !== i)) {
                        if (re[t]) return;
                        we(i, we(ke(e, r), o)), _e(i.prototype, _e(r, ke(e, o))), (re[(i.prop = t)] = i), e.targetTest && (ae.push(i), (te[t] = 1)), (t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
                    }
                    Q(t, i), e.register && e.register(un, i, sn);
                },
                pt = 255,
                ft = {
                    aqua: [0, pt, pt],
                    lime: [0, pt, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, pt],
                    navy: [0, 0, 128],
                    white: [pt, pt, pt],
                    olive: [128, 128, 0],
                    yellow: [pt, pt, 0],
                    orange: [pt, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [pt, 0, 0],
                    pink: [pt, 192, 203],
                    cyan: [0, pt, pt],
                    transparent: [pt, pt, pt, 0],
                },
                ht = function (e, t, n) {
                    return ((6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * pt + 0.5) | 0;
                },
                gt = function (e, t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f = e ? (M(e) ? [e >> 16, (e >> 8) & pt, e & pt] : 0) : ft.black;
                    if (!f) {
                        if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ft[e])) f = ft[e];
                        else if ("#" === e.charAt(0)) {
                            if ((e.length < 6 && ((i = e.charAt(1)), (r = e.charAt(2)), (o = e.charAt(3)), (e = "#" + i + i + r + r + o + o + (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))), 9 === e.length))
                                return [(f = parseInt(e.substr(1, 6), 16)) >> 16, (f >> 8) & pt, f & pt, parseInt(e.substr(7), 16) / 255];
                            f = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & pt, e & pt];
                        } else if ("hsl" === e.substr(0, 3))
                            if (((f = p = e.match(H)), t)) {
                                if (~e.indexOf("=")) return (f = e.match(B)), n && f.length < 4 && (f[3] = 1), f;
                            } else
                                (s = (+f[0] % 360) / 360),
                                    (a = +f[1] / 100),
                                    (i = 2 * (l = +f[2] / 100) - (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                                    f.length > 3 && (f[3] *= 1),
                                    (f[0] = ht(s + 1 / 3, i, r)),
                                    (f[1] = ht(s, i, r)),
                                    (f[2] = ht(s - 1 / 3, i, r));
                        else f = e.match(H) || ft.transparent;
                        f = f.map(Number);
                    }
                    return (
                        t &&
                            !p &&
                            ((i = f[0] / pt),
                            (r = f[1] / pt),
                            (o = f[2] / pt),
                            (l = ((c = Math.max(i, r, o)) + (u = Math.min(i, r, o))) / 2),
                            c === u ? (s = a = 0) : ((d = c - u), (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)), (s = c === i ? (r - o) / d + (r < o ? 6 : 0) : c === r ? (o - i) / d + 2 : (i - r) / d + 4), (s *= 60)),
                            (f[0] = ~~(s + 0.5)),
                            (f[1] = ~~(100 * a + 0.5)),
                            (f[2] = ~~(100 * l + 0.5))),
                        n && f.length < 4 && (f[3] = 1),
                        f
                    );
                },
                mt = function (e) {
                    var t = [],
                        n = [],
                        i = -1;
                    return (
                        e.split(yt).forEach(function (e) {
                            var r = e.match(F) || [];
                            t.push.apply(t, r), n.push((i += r.length + 1));
                        }),
                        (t.c = n),
                        t
                    );
                },
                vt = function (e, t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a = "",
                        l = (e + a).match(yt),
                        c = t ? "hsla(" : "rgba(",
                        u = 0;
                    if (!l) return e;
                    if (
                        ((l = l.map(function (e) {
                            return (e = gt(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
                        })),
                        n && ((o = mt(e)), (i = n.c).join(a) !== o.c.join(a)))
                    )
                        for (s = (r = e.replace(yt, "1").split(F)).length - 1; u < s; u++) a += r[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
                    if (!r) for (s = (r = e.split(yt)).length - 1; u < s; u++) a += r[u] + l[u];
                    return a + r[s];
                },
                yt = (function () {
                    var e,
                        t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (e in ft) t += "|" + e + "\\b";
                    return new RegExp(t + ")", "gi");
                })(),
                bt = /hsl[a]?\(/,
                wt = function (e) {
                    var t,
                        n = e.join(" ");
                    if (((yt.lastIndex = 0), yt.test(n))) return (t = bt.test(n)), (e[1] = vt(e[1], t)), (e[0] = vt(e[0], t, mt(e[1]))), !0;
                },
                xt = (function () {
                    var e,
                        t,
                        n,
                        i,
                        r,
                        o,
                        s = Date.now,
                        a = 500,
                        l = 33,
                        c = s(),
                        h = c,
                        g = 1e3 / 240,
                        v = g,
                        y = [],
                        b = function n(u) {
                            var d,
                                p,
                                f,
                                m,
                                b = s() - h,
                                w = !0 === u;
                            if ((b > a && (c += b - l), ((d = (f = (h += b) - c) - v) > 0 || w) && ((m = ++i.frame), (r = f - 1e3 * i.time), (i.time = f /= 1e3), (v += d + (d >= g ? 4 : g - d)), (p = 1)), w || (e = t(n)), p))
                                for (o = 0; o < y.length; o++) y[o](f, r, m, u);
                        };
                    return (i = {
                        time: 0,
                        frame: 0,
                        tick: function () {
                            b(!0);
                        },
                        deltaRatio: function (e) {
                            return r / (1e3 / (e || 60));
                        },
                        wake: function () {
                            f &&
                                (!d &&
                                    j() &&
                                    ((u = d = window), (p = u.document || {}), (G.gsap = un), (u.gsapVersions || (u.gsapVersions = [])).push(un.version), K(V || u.GreenSockGlobals || (!u.gsap && u) || {}), (n = u.requestAnimationFrame)),
                                e && i.sleep(),
                                (t =
                                    n ||
                                    function (e) {
                                        return setTimeout(e, (v - 1e3 * i.time + 1) | 0);
                                    }),
                                (m = 1),
                                b(2));
                        },
                        sleep: function () {
                            (n ? u.cancelAnimationFrame : clearTimeout)(e), (m = 0), (t = ee);
                        },
                        lagSmoothing: function (e, t) {
                            (a = e || 1e8), (l = Math.min(t, a, 0));
                        },
                        fps: function (e) {
                            (g = 1e3 / (e || 240)), (v = 1e3 * i.time + g);
                        },
                        add: function (e) {
                            y.indexOf(e) < 0 && y.push(e), _t();
                        },
                        remove: function (e) {
                            var t;
                            ~(t = y.indexOf(e)) && y.splice(t, 1) && o >= t && o--;
                        },
                        _listeners: y,
                    });
                })(),
                _t = function () {
                    return !m && xt.wake();
                },
                Tt = {},
                kt = /^[\d.\-M][\d.\-,\s]/,
                Ct = /["']/g,
                At = function (e) {
                    for (var t, n, i, r = {}, o = e.substr(1, e.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++)
                        (n = o[a]), (t = a !== l - 1 ? n.lastIndexOf(",") : n.length), (i = n.substr(0, t)), (r[s] = isNaN(i) ? i.replace(Ct, "").trim() : +i), (s = n.substr(t + 1).trim());
                    return r;
                },
                St = function (e) {
                    return function (t) {
                        return 1 - e(1 - t);
                    };
                },
                $t = function e(t, n) {
                    for (var i, r = t._first; r; )
                        r instanceof zt ? e(r, n) : !r.vars.yoyoEase || (r._yoyo && r._repeat) || r._yoyo === n || (r.timeline ? e(r.timeline, n) : ((i = r._ease), (r._ease = r._yEase), (r._yEase = i), (r._yoyo = n))), (r = r._next);
                },
                Et = function (e, t) {
                    return (
                        (e &&
                            (P(e)
                                ? e
                                : Tt[e] ||
                                  (function (e) {
                                      var t,
                                          n,
                                          i,
                                          r,
                                          o = (e + "").split("("),
                                          s = Tt[o[0]];
                                      return s && o.length > 1 && s.config
                                          ? s.config.apply(
                                                null,
                                                ~e.indexOf("{") ? [At(o[1])] : ((t = e), (n = t.indexOf("(") + 1), (i = t.indexOf(")")), (r = t.indexOf("(", n)), t.substring(n, ~r && r < i ? t.indexOf(")", i + 1) : i)).split(",").map(ye)
                                            )
                                          : Tt._CE && kt.test(e)
                                          ? Tt._CE("", e)
                                          : s;
                                  })(e))) ||
                        t
                    );
                },
                Ot = function (e, t, n, i) {
                    void 0 === n &&
                        (n = function (e) {
                            return 1 - t(1 - e);
                        }),
                        void 0 === i &&
                            (i = function (e) {
                                return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
                            });
                    var r,
                        o = { easeIn: t, easeOut: n, easeInOut: i };
                    return (
                        pe(e, function (e) {
                            for (var t in ((Tt[e] = G[e] = o), (Tt[(r = e.toLowerCase())] = n), o)) Tt[r + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Tt[e + "." + t] = o[t];
                        }),
                        o
                    );
                },
                Dt = function (e) {
                    return function (t) {
                        return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
                    };
                },
                Pt = function e(t, n, i) {
                    var r = n >= 1 ? n : 1,
                        o = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
                        s = (o / C) * (Math.asin(1 / r) || 0),
                        a = function (e) {
                            return 1 === e ? 1 : r * Math.pow(2, -10 * e) * O((e - s) * o) + 1;
                        },
                        l =
                            "out" === t
                                ? a
                                : "in" === t
                                ? function (e) {
                                      return 1 - a(1 - e);
                                  }
                                : Dt(a);
                    return (
                        (o = C / o),
                        (l.config = function (n, i) {
                            return e(t, n, i);
                        }),
                        l
                    );
                },
                Mt = function e(t, n) {
                    void 0 === n && (n = 1.70158);
                    var i = function (e) {
                            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
                        },
                        r =
                            "out" === t
                                ? i
                                : "in" === t
                                ? function (e) {
                                      return 1 - i(1 - e);
                                  }
                                : Dt(i);
                    return (
                        (r.config = function (n) {
                            return e(t, n);
                        }),
                        r
                    );
                };
            pe("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
                var n = t < 5 ? t + 1 : t;
                Ot(
                    e + ",Power" + (n - 1),
                    t
                        ? function (e) {
                              return Math.pow(e, n);
                          }
                        : function (e) {
                              return e;
                          },
                    function (e) {
                        return 1 - Math.pow(1 - e, n);
                    },
                    function (e) {
                        return e < 0.5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2;
                    }
                );
            }),
                (Tt.Linear.easeNone = Tt.none = Tt.Linear.easeIn),
                Ot("Elastic", Pt("in"), Pt("out"), Pt()),
                (v = 7.5625),
                (b = 1 / (y = 2.75)),
                Ot(
                    "Bounce",
                    function (e) {
                        return 1 - w(1 - e);
                    },
                    (w = function (e) {
                        return e < b ? v * e * e : e < 0.7272727272727273 ? v * Math.pow(e - 1.5 / y, 2) + 0.75 : e < 0.9090909090909092 ? v * (e -= 2.25 / y) * e + 0.9375 : v * Math.pow(e - 2.625 / y, 2) + 0.984375;
                    })
                ),
                Ot("Expo", function (e) {
                    return e ? Math.pow(2, 10 * (e - 1)) : 0;
                }),
                Ot("Circ", function (e) {
                    return -($(1 - e * e) - 1);
                }),
                Ot("Sine", function (e) {
                    return 1 === e ? 1 : 1 - E(e * A);
                }),
                Ot("Back", Mt("in"), Mt("out"), Mt()),
                (Tt.SteppedEase = Tt.steps = G.SteppedEase = {
                    config: function (e, t) {
                        void 0 === e && (e = 1);
                        var n = 1 / e,
                            i = e + (t ? 0 : 1),
                            r = t ? 1 : 0;
                        return function (e) {
                            return (((i * Ge(0, 0.99999999, e)) | 0) + r) * n;
                        };
                    },
                }),
                (_.ease = Tt["quad.out"]),
                pe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
                    return (le += e + "," + e + "Params,");
                });
            var Lt = function (e, t) {
                    (this.id = S++), (e._gsap = this), (this.target = e), (this.harness = t), (this.get = t ? t.get : de), (this.set = t ? t.getSetter : Kt);
                },
                Nt = (function () {
                    function e(e) {
                        (this.vars = e),
                            (this._delay = +e.delay || 0),
                            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
                            (this._ts = 1),
                            Be(this, +e.duration, 1, 1),
                            (this.data = e.data),
                            m || xt.wake();
                    }
                    var t = e.prototype;
                    return (
                        (t.delay = function (e) {
                            return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), (this._delay = e), this) : this._delay;
                        }),
                        (t.duration = function (e) {
                            return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
                        }),
                        (t.totalDuration = function (e) {
                            return arguments.length ? ((this._dirty = 0), Be(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                        }),
                        (t.totalTime = function (e, t) {
                            if ((_t(), !arguments.length)) return this._tTime;
                            var n = this._dp;
                            if (n && n.smoothChildTiming && this._ts) {
                                for (Ne(this, e), !n._dp || n.parent || ze(n, this); n && n.parent; )
                                    n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                                !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && e < this._tDur) || (this._ts < 0 && e > 0) || (!this._tDur && !e)) && je(this._dp, this, this._start - this._delay);
                            }
                            return (
                                (this._tTime !== e || (!this._dur && !t) || (this._initted && Math.abs(this._zTime) === k) || (!e && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = e), ve(this, e, t)), this
                            );
                        }),
                        (t.time = function (e, t) {
                            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + De(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
                        }),
                        (t.totalProgress = function (e, t) {
                            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                        }),
                        (t.progress = function (e, t) {
                            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + De(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                        }),
                        (t.iteration = function (e, t) {
                            var n = this.duration() + this._rDelay;
                            return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Pe(this._tTime, n) + 1 : 1;
                        }),
                        (t.timeScale = function (e) {
                            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                            if (this._rts === e) return this;
                            var t = this.parent && this._ts ? Me(this.parent._time, this) : this._tTime;
                            return (this._rts = +e || 0), (this._ts = this._ps || -1e-8 === e ? 0 : this._rts), Ee(this.totalTime(Ge(-this._delay, this._tDur, t), !0)), Le(this), this;
                        }),
                        (t.paused = function (e) {
                            return arguments.length
                                ? (this._ps !== e &&
                                      ((this._ps = e),
                                      e
                                          ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                          : (_t(),
                                            (this._ts = this._rts),
                                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)))),
                                  this)
                                : this._ps;
                        }),
                        (t.startTime = function (e) {
                            if (arguments.length) {
                                this._start = e;
                                var t = this.parent || this._dp;
                                return t && (t._sort || !this.parent) && je(t, this, e - this._delay), this;
                            }
                            return this._start;
                        }),
                        (t.endTime = function (e) {
                            return this._start + (z(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                        }),
                        (t.rawTime = function (e) {
                            var t = this.parent || this._dp;
                            return t ? (e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Me(t.rawTime(e), this) : this._tTime) : this._tTime;
                        }),
                        (t.globalTime = function (e) {
                            for (var t = this, n = arguments.length ? e : t.rawTime(); t; ) (n = t._start + n / (t._ts || 1)), (t = t._dp);
                            return n;
                        }),
                        (t.repeat = function (e) {
                            return arguments.length ? ((this._repeat = e === 1 / 0 ? -2 : e), Fe(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                        }),
                        (t.repeatDelay = function (e) {
                            if (arguments.length) {
                                var t = this._time;
                                return (this._rDelay = e), Fe(this), t ? this.time(t) : this;
                            }
                            return this._rDelay;
                        }),
                        (t.yoyo = function (e) {
                            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
                        }),
                        (t.seek = function (e, t) {
                            return this.totalTime(Ue(this, e), z(t));
                        }),
                        (t.restart = function (e, t) {
                            return this.play().totalTime(e ? -this._delay : 0, z(t));
                        }),
                        (t.play = function (e, t) {
                            return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
                        }),
                        (t.reverse = function (e, t) {
                            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
                        }),
                        (t.pause = function (e, t) {
                            return null != e && this.seek(e, t), this.paused(!0);
                        }),
                        (t.resume = function () {
                            return this.paused(!1);
                        }),
                        (t.reversed = function (e) {
                            return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0;
                        }),
                        (t.invalidate = function () {
                            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                        }),
                        (t.isActive = function () {
                            var e,
                                t = this.parent || this._dp,
                                n = this._start;
                            return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - k));
                        }),
                        (t.eventCallback = function (e, t, n) {
                            var i = this.vars;
                            return arguments.length > 1 ? (t ? ((i[e] = t), n && (i[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete i[e], this) : i[e];
                        }),
                        (t.then = function (e) {
                            var t = this;
                            return new Promise(function (n) {
                                var i = P(e) ? e : be,
                                    r = function () {
                                        var e = t.then;
                                        (t.then = null), P(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), n(i), (t.then = e);
                                    };
                                (t._initted && 1 === t.totalProgress() && t._ts >= 0) || (!t._tTime && t._ts < 0) ? r() : (t._prom = r);
                            });
                        }),
                        (t.kill = function () {
                            ut(this);
                        }),
                        e
                    );
                })();
            we(Nt.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
            var zt = (function (e) {
                function t(t, n) {
                    var i;
                    return (
                        void 0 === t && (t = {}),
                        ((i = e.call(this, t) || this).labels = {}),
                        (i.smoothChildTiming = !!t.smoothChildTiming),
                        (i.autoRemoveChildren = !!t.autoRemoveChildren),
                        (i._sort = z(t.sortChildren)),
                        c && je(t.parent || c, s(i), n),
                        t.reversed && i.reverse(),
                        t.paused && i.paused(!0),
                        t.scrollTrigger && Ie(s(i), t.scrollTrigger),
                        i
                    );
                }
                a(t, e);
                var n = t.prototype;
                return (
                    (n.to = function (e, t, n) {
                        return Ye(0, arguments, this), this;
                    }),
                    (n.from = function (e, t, n) {
                        return Ye(1, arguments, this), this;
                    }),
                    (n.fromTo = function (e, t, n, i) {
                        return Ye(2, arguments, this), this;
                    }),
                    (n.set = function (e, t, n) {
                        return (t.duration = 0), (t.parent = this), Ce(t).repeatDelay || (t.repeat = 0), (t.immediateRender = !!t.immediateRender), new Ut(e, t, Ue(this, n), 1), this;
                    }),
                    (n.call = function (e, t, n) {
                        return je(this, Ut.delayedCall(0, e, t), n);
                    }),
                    (n.staggerTo = function (e, t, n, i, r, o, s) {
                        return (n.duration = t), (n.stagger = n.stagger || i), (n.onComplete = o), (n.onCompleteParams = s), (n.parent = this), new Ut(e, n, Ue(this, r)), this;
                    }),
                    (n.staggerFrom = function (e, t, n, i, r, o, s) {
                        return (n.runBackwards = 1), (Ce(n).immediateRender = z(n.immediateRender)), this.staggerTo(e, t, n, i, r, o, s);
                    }),
                    (n.staggerFromTo = function (e, t, n, i, r, o, s, a) {
                        return (i.startAt = n), (Ce(i).immediateRender = z(i.immediateRender)), this.staggerTo(e, t, i, r, o, s, a);
                    }),
                    (n.render = function (e, t, n) {
                        var i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            u,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m = this._time,
                            v = this._dirty ? this.totalDuration() : this._tDur,
                            y = this._dur,
                            b = e <= 0 ? 0 : he(e),
                            w = this._zTime < 0 != e < 0 && (this._initted || !y);
                        if ((this !== c && b > v && e >= 0 && (b = v), b !== this._tTime || n || w)) {
                            if ((m !== this._time && y && ((b += this._time - m), (e += this._time - m)), (i = b), (p = this._start), (l = !(d = this._ts)), w && (y || (m = this._zTime), (e || !t) && (this._zTime = e)), this._repeat)) {
                                if (((h = this._yoyo), (a = y + this._rDelay), this._repeat < -1 && e < 0)) return this.totalTime(100 * a + e, t, n);
                                if (
                                    ((i = he(b % a)),
                                    b === v ? ((s = this._repeat), (i = y)) : ((s = ~~(b / a)) && s === b / a && ((i = y), s--), i > y && (i = y)),
                                    (f = Pe(this._tTime, a)),
                                    !m && this._tTime && f !== s && (f = s),
                                    h && 1 & s && ((i = y - i), (g = 1)),
                                    s !== f && !this._lock)
                                ) {
                                    var x = h && 1 & f,
                                        _ = x === (h && 1 & s);
                                    if (
                                        (s < f && (x = !x),
                                        (m = x ? 0 : y),
                                        (this._lock = 1),
                                        (this.render(m || (g ? 0 : he(s * a)), t, !y)._lock = 0),
                                        (this._tTime = b),
                                        !t && this.parent && ct(this, "onRepeat"),
                                        this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                                        (m && m !== this._time) || l !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                                    )
                                        return this;
                                    if (((y = this._dur), (v = this._tDur), _ && ((this._lock = 2), (m = x ? y : -1e-4), this.render(m, !0), this.vars.repeatRefresh && !g && this.invalidate()), (this._lock = 0), !this._ts && !l))
                                        return this;
                                    $t(this, g);
                                }
                            }
                            if (
                                (this._hasPause &&
                                    !this._forcing &&
                                    this._lock < 2 &&
                                    ((u = (function (e, t, n) {
                                        var i;
                                        if (n > t)
                                            for (i = e._first; i && i._start <= n; ) {
                                                if (!i._dur && "isPause" === i.data && i._start > t) return i;
                                                i = i._next;
                                            }
                                        else
                                            for (i = e._last; i && i._start >= n; ) {
                                                if (!i._dur && "isPause" === i.data && i._start < t) return i;
                                                i = i._prev;
                                            }
                                    })(this, he(m), he(i))),
                                    u && (b -= i - (i = u._start))),
                                (this._tTime = b),
                                (this._time = i),
                                (this._act = !d),
                                this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = e), (m = 0)),
                                !m && i && !t && (ct(this, "onStart"), this._tTime !== b))
                            )
                                return this;
                            if (i >= m && e >= 0)
                                for (r = this._first; r; ) {
                                    if (((o = r._next), (r._act || i >= r._start) && r._ts && u !== r)) {
                                        if (r.parent !== this) return this.render(e, t, n);
                                        if ((r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, t, n), i !== this._time || (!this._ts && !l))) {
                                            (u = 0), o && (b += this._zTime = -1e-8);
                                            break;
                                        }
                                    }
                                    r = o;
                                }
                            else {
                                r = this._last;
                                for (var T = e < 0 ? e : i; r; ) {
                                    if (((o = r._prev), (r._act || T <= r._end) && r._ts && u !== r)) {
                                        if (r.parent !== this) return this.render(e, t, n);
                                        if ((r.render(r._ts > 0 ? (T - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (T - r._start) * r._ts, t, n), i !== this._time || (!this._ts && !l))) {
                                            (u = 0), o && (b += this._zTime = T ? -1e-8 : k);
                                            break;
                                        }
                                    }
                                    r = o;
                                }
                            }
                            if (u && !t && (this.pause(), (u.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1), this._ts)) return (this._start = p), Le(this), this.render(e, t, n);
                            this._onUpdate && !t && ct(this, "onUpdate", !0),
                                ((b === v && v >= this.totalDuration()) || (!b && m)) &&
                                    ((p !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                                        this._lock ||
                                        ((e || !y) && ((b === v && this._ts > 0) || (!b && this._ts < 0)) && Se(this, 1),
                                        t || (e < 0 && !m) || (!b && !m && v) || (ct(this, b === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < v && this.timeScale() > 0) && this._prom())));
                        }
                        return this;
                    }),
                    (n.add = function (e, t) {
                        var n = this;
                        if ((M(t) || (t = Ue(this, t, e)), !(e instanceof Nt))) {
                            if (R(e))
                                return (
                                    e.forEach(function (e) {
                                        return n.add(e, t);
                                    }),
                                    this
                                );
                            if (D(e)) return this.addLabel(e, t);
                            if (!P(e)) return this;
                            e = Ut.delayedCall(0, e);
                        }
                        return this !== e ? je(this, e, t) : this;
                    }),
                    (n.getChildren = function (e, t, n, i) {
                        void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === i && (i = -T);
                        for (var r = [], o = this._first; o; ) o._start >= i && (o instanceof Ut ? t && r.push(o) : (n && r.push(o), e && r.push.apply(r, o.getChildren(!0, t, n)))), (o = o._next);
                        return r;
                    }),
                    (n.getById = function (e) {
                        for (var t = this.getChildren(1, 1, 1), n = t.length; n--; ) if (t[n].vars.id === e) return t[n];
                    }),
                    (n.remove = function (e) {
                        return D(e) ? this.removeLabel(e) : P(e) ? this.killTweensOf(e) : (Ae(this, e), e === this._recent && (this._recent = this._last), $e(this));
                    }),
                    (n.totalTime = function (t, n) {
                        return arguments.length
                            ? ((this._forcing = 1),
                              !this._dp && this._ts && (this._start = he(xt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
                              e.prototype.totalTime.call(this, t, n),
                              (this._forcing = 0),
                              this)
                            : this._tTime;
                    }),
                    (n.addLabel = function (e, t) {
                        return (this.labels[e] = Ue(this, t)), this;
                    }),
                    (n.removeLabel = function (e) {
                        return delete this.labels[e], this;
                    }),
                    (n.addPause = function (e, t, n) {
                        var i = Ut.delayedCall(0, t || ee, n);
                        return (i.data = "isPause"), (this._hasPause = 1), je(this, i, Ue(this, e));
                    }),
                    (n.removePause = function (e) {
                        var t = this._first;
                        for (e = Ue(this, e); t; ) t._start === e && "isPause" === t.data && Se(t), (t = t._next);
                    }),
                    (n.killTweensOf = function (e, t, n) {
                        for (var i = this.getTweensOf(e, n), r = i.length; r--; ) jt !== i[r] && i[r].kill(e, t);
                        return this;
                    }),
                    (n.getTweensOf = function (e, t) {
                        for (var n, i = [], r = Qe(e), o = this._first, s = M(t); o; )
                            o instanceof Ut
                                ? ge(o._targets, r) && (s ? (!jt || (o._initted && o._ts)) && o.globalTime(0) <= t && o.globalTime(o.totalDuration()) > t : !t || o.isActive()) && i.push(o)
                                : (n = o.getTweensOf(r, t)).length && i.push.apply(i, n),
                                (o = o._next);
                        return i;
                    }),
                    (n.tweenTo = function (e, t) {
                        t = t || {};
                        var n,
                            i = this,
                            r = Ue(i, e),
                            o = t,
                            s = o.startAt,
                            a = o.onStart,
                            l = o.onStartParams,
                            c = o.immediateRender,
                            u = Ut.to(
                                i,
                                we(
                                    {
                                        ease: t.ease || "none",
                                        lazy: !1,
                                        immediateRender: !1,
                                        time: r,
                                        overwrite: "auto",
                                        duration: t.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || k,
                                        onStart: function () {
                                            if ((i.pause(), !n)) {
                                                var e = t.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale());
                                                u._dur !== e && Be(u, e, 0, 1).render(u._time, !0, !0), (n = 1);
                                            }
                                            a && a.apply(u, l || []);
                                        },
                                    },
                                    t
                                )
                            );
                        return c ? u.render(0) : u;
                    }),
                    (n.tweenFromTo = function (e, t, n) {
                        return this.tweenTo(t, we({ startAt: { time: Ue(this, e) } }, n));
                    }),
                    (n.recent = function () {
                        return this._recent;
                    }),
                    (n.nextLabel = function (e) {
                        return void 0 === e && (e = this._time), lt(this, Ue(this, e));
                    }),
                    (n.previousLabel = function (e) {
                        return void 0 === e && (e = this._time), lt(this, Ue(this, e), 1);
                    }),
                    (n.currentLabel = function (e) {
                        return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + k);
                    }),
                    (n.shiftChildren = function (e, t, n) {
                        void 0 === n && (n = 0);
                        for (var i, r = this._first, o = this.labels; r; ) r._start >= n && ((r._start += e), (r._end += e)), (r = r._next);
                        if (t) for (i in o) o[i] >= n && (o[i] += e);
                        return $e(this);
                    }),
                    (n.invalidate = function () {
                        var t = this._first;
                        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
                        return e.prototype.invalidate.call(this);
                    }),
                    (n.clear = function (e) {
                        void 0 === e && (e = !0);
                        for (var t, n = this._first; n; ) (t = n._next), this.remove(n), (n = t);
                        return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), $e(this);
                    }),
                    (n.totalDuration = function (e) {
                        var t,
                            n,
                            i,
                            r = 0,
                            o = this,
                            s = o._last,
                            a = T;
                        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -e : e));
                        if (o._dirty) {
                            for (i = o.parent; s; )
                                (t = s._prev),
                                    s._dirty && s.totalDuration(),
                                    (n = s._start) > a && o._sort && s._ts && !o._lock ? ((o._lock = 1), (je(o, s, n - s._delay, 1)._lock = 0)) : (a = n),
                                    n < 0 && s._ts && ((r -= n), ((!i && !o._dp) || (i && i.smoothChildTiming)) && ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)), o.shiftChildren(-n, !1, -Infinity), (a = 0)),
                                    s._end > r && s._ts && (r = s._end),
                                    (s = t);
                            Be(o, o === c && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
                        }
                        return o._tDur;
                    }),
                    (t.updateRoot = function (e) {
                        if ((c._ts && (ve(c, Me(e, c)), (h = xt.frame)), xt.frame >= se)) {
                            se += x.autoSleep || 120;
                            var t = c._first;
                            if ((!t || !t._ts) && x.autoSleep && xt._listeners.length < 2) {
                                for (; t && !t._ts; ) t = t._next;
                                t || xt.sleep();
                            }
                        }
                    }),
                    t
                );
            })(Nt);
            we(zt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
            var jt,
                It = function (e, t, n, i, r, o, s) {
                    var a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        g = new sn(this._pt, e, t, 0, 1, Qt, null, r),
                        m = 0,
                        v = 0;
                    for (g.b = n, g.e = i, n += "", (f = ~(i += "").indexOf("random(")) && (i = st(i)), o && (o((h = [n, i]), e, t), (n = h[0]), (i = h[1])), l = n.match(W) || []; (a = W.exec(i)); )
                        (u = a[0]),
                            (d = i.substring(m, a.index)),
                            c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
                            u !== l[v++] &&
                                ((p = parseFloat(l[v - 1]) || 0),
                                (g._pt = { _next: g._pt, p: d || 1 === v ? d : ",", s: p, c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - p, m: c && c < 4 ? Math.round : 0 }),
                                (m = W.lastIndex));
                    return (g.c = m < i.length ? i.substring(m, i.length) : ""), (g.fp = s), (U.test(i) || f) && (g.e = 0), (this._pt = g), g;
                },
                qt = function (e, t, n, i, r, o, s, a, l) {
                    P(i) && (i = i(r || 0, e, o));
                    var c,
                        u = e[t],
                        d = "get" !== n ? n : P(u) ? (l ? e[t.indexOf("set") || !P(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]()) : u,
                        p = P(u) ? (l ? Gt : Xt) : Yt;
                    if ((D(i) && (~i.indexOf("random(") && (i = st(i)), "=" === i.charAt(1) && ((c = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ve(d) || 0)) || 0 === c) && (i = c)), d !== i))
                        return isNaN(d * i) || "" === i
                            ? (!u && !(t in e) && J(t, i), It.call(this, e, t, d, i, p, a || x.stringFilter, l))
                            : ((c = new sn(this._pt, e, t, +d || 0, i - (d || 0), "boolean" == typeof u ? Zt : Jt, 0, p)), l && (c.fp = l), s && c.modifier(s, this, e), (this._pt = c));
                },
                Rt = function (e, t, n, i, r, o) {
                    var s, a, l, c;
                    if (
                        re[e] &&
                        !1 !==
                            (s = new re[e]()).init(
                                r,
                                s.rawVars
                                    ? t[e]
                                    : (function (e, t, n, i, r) {
                                          if ((P(e) && (e = Bt(e, r, t, n, i)), !N(e) || (e.style && e.nodeType) || R(e) || q(e))) return D(e) ? Bt(e, r, t, n, i) : e;
                                          var o,
                                              s = {};
                                          for (o in e) s[o] = Bt(e[o], r, t, n, i);
                                          return s;
                                      })(t[e], i, r, o, n),
                                n,
                                i,
                                o
                            ) &&
                        ((n._pt = a = new sn(n._pt, r, e, 0, 1, s.render, s, 0, s.priority)), n !== g)
                    )
                        for (l = n._ptLookup[n._targets.indexOf(r)], c = s._props.length; c--; ) l[s._props[c]] = a;
                    return s;
                },
                Ht = function e(t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        u,
                        d,
                        p,
                        f,
                        h,
                        g,
                        m,
                        v,
                        y = t.vars,
                        b = y.ease,
                        w = y.startAt,
                        x = y.immediateRender,
                        T = y.lazy,
                        C = y.onUpdate,
                        A = y.onUpdateParams,
                        S = y.callbackScope,
                        $ = y.runBackwards,
                        E = y.yoyoEase,
                        O = y.keyframes,
                        D = y.autoRevert,
                        P = t._dur,
                        M = t._startAt,
                        L = t._targets,
                        N = t.parent,
                        j = N && "nested" === N.data ? N.parent._targets : L,
                        I = "auto" === t._overwrite && !l,
                        q = t.timeline;
                    if (
                        (q && (!O || !b) && (b = "none"),
                        (t._ease = Et(b, _.ease)),
                        (t._yEase = E ? St(Et(!0 === E ? b : E, _.ease)) : 0),
                        E && t._yoyo && !t._repeat && ((E = t._yEase), (t._yEase = t._ease), (t._ease = E)),
                        (t._from = !q && !!y.runBackwards),
                        !q)
                    ) {
                        if (((m = (p = L[0] ? ue(L[0]).harness : 0) && y[p.prop]), (i = ke(y, te)), M && M.render(-1, !0).kill(), w))
                            if (
                                (Se((t._startAt = Ut.set(L, we({ data: "isStart", overwrite: !1, parent: N, immediateRender: !0, lazy: z(T), startAt: null, delay: 0, onUpdate: C, onUpdateParams: A, callbackScope: S, stagger: 0 }, w)))),
                                n < 0 && !x && !D && t._startAt.render(-1, !0),
                                x)
                            ) {
                                if ((n > 0 && !D && (t._startAt = 0), P && n <= 0)) return void (n && (t._zTime = n));
                            } else !1 === D && (t._startAt = 0);
                        else if ($ && P)
                            if (M) !D && (t._startAt = 0);
                            else if (
                                (n && (x = !1),
                                (o = we({ overwrite: !1, data: "isFromStart", lazy: x && z(T), immediateRender: x, stagger: 0, parent: N }, i)),
                                m && (o[p.prop] = m),
                                Se((t._startAt = Ut.set(L, o))),
                                n < 0 && t._startAt.render(-1, !0),
                                x)
                            ) {
                                if (!n) return;
                            } else e(t._startAt, k);
                        for (t._pt = 0, T = (P && z(T)) || (T && !P), r = 0; r < L.length; r++) {
                            if (
                                ((d = (a = L[r])._gsap || ce(L)[r]._gsap),
                                (t._ptLookup[r] = h = {}),
                                ie[d.id] && ne.length && me(),
                                (g = j === L ? r : j.indexOf(a)),
                                p &&
                                    !1 !== (f = new p()).init(a, m || i, t, g, j) &&
                                    ((t._pt = s = new sn(t._pt, a, f.name, 0, 1, f.render, f, 0, f.priority)),
                                    f._props.forEach(function (e) {
                                        h[e] = s;
                                    }),
                                    f.priority && (u = 1)),
                                !p || m)
                            )
                                for (o in i) re[o] && (f = Rt(o, i, t, g, a, j)) ? f.priority && (u = 1) : (h[o] = s = qt.call(t, a, o, "get", i[o], g, j, 0, y.stringFilter));
                            t._op && t._op[r] && t.kill(a, t._op[r]), I && t._pt && ((jt = t), c.killTweensOf(a, h, t.globalTime(n)), (v = !t.parent), (jt = 0)), t._pt && T && (ie[d.id] = 1);
                        }
                        u && on(t), t._onInit && t._onInit(t);
                    }
                    (t._onUpdate = C), (t._initted = (!t._op || t._pt) && !v);
                },
                Bt = function (e, t, n, i, r) {
                    return P(e) ? e.call(t, n, i, r) : D(e) && ~e.indexOf("random(") ? st(e) : e;
                },
                Ft = le + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
                Wt = (Ft + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
                Ut = (function (e) {
                    function t(t, n, i, r) {
                        var o;
                        "number" == typeof n && ((i.duration = n), (n = i), (i = null));
                        var a,
                            u,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m,
                            v = (o = e.call(this, r ? n : Ce(n)) || this).vars,
                            y = v.duration,
                            b = v.delay,
                            w = v.immediateRender,
                            _ = v.stagger,
                            T = v.overwrite,
                            k = v.keyframes,
                            C = v.defaults,
                            A = v.scrollTrigger,
                            S = v.yoyoEase,
                            $ = n.parent || c,
                            E = (R(t) || q(t) ? M(t[0]) : "length" in n) ? [t] : Qe(t);
                        if (((o._targets = E.length ? ce(E) : Z("GSAP target " + t + " not found. https://greensock.com", !x.nullTargetWarn) || []), (o._ptLookup = []), (o._overwrite = T), k || _ || I(y) || I(b))) {
                            if (((n = o.vars), (a = o.timeline = new zt({ data: "nested", defaults: C || {} })).kill(), (a.parent = a._dp = s(o)), (a._start = 0), k))
                                Ce(we(a.vars.defaults, { ease: "none" })),
                                    _
                                        ? E.forEach(function (e, t) {
                                              return k.forEach(function (n, i) {
                                                  return a.to(e, n, i ? ">" : t * _);
                                              });
                                          })
                                        : k.forEach(function (e) {
                                              return a.to(E, e, ">");
                                          });
                            else {
                                if (((p = E.length), (g = _ ? tt(_) : ee), N(_))) for (f in _) ~Ft.indexOf(f) && (m || (m = {}), (m[f] = _[f]));
                                for (u = 0; u < p; u++) {
                                    for (f in ((d = {}), n)) Wt.indexOf(f) < 0 && (d[f] = n[f]);
                                    (d.stagger = 0),
                                        S && (d.yoyoEase = S),
                                        m && _e(d, m),
                                        (h = E[u]),
                                        (d.duration = +Bt(y, s(o), u, h, E)),
                                        (d.delay = (+Bt(b, s(o), u, h, E) || 0) - o._delay),
                                        !_ && 1 === p && d.delay && ((o._delay = b = d.delay), (o._start += b), (d.delay = 0)),
                                        a.to(h, d, g(u, h, E));
                                }
                                a.duration() ? (y = b = 0) : (o.timeline = 0);
                            }
                            y || o.duration((y = a.duration()));
                        } else o.timeline = 0;
                        return (
                            !0 !== T || l || ((jt = s(o)), c.killTweensOf(E), (jt = 0)),
                            je($, s(o), i),
                            n.reversed && o.reverse(),
                            n.paused && o.paused(!0),
                            (w || (!y && !k && o._start === he($._time) && z(w) && Oe(s(o)) && "nested" !== $.data)) && ((o._tTime = -1e-8), o.render(Math.max(0, -b))),
                            A && Ie(s(o), A),
                            o
                        );
                    }
                    a(t, e);
                    var n = t.prototype;
                    return (
                        (n.render = function (e, t, n) {
                            var i,
                                r,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                d,
                                p = this._time,
                                f = this._tDur,
                                h = this._dur,
                                g = e > f - k && e >= 0 ? f : e < k ? 0 : e;
                            if (h) {
                                if (g !== this._tTime || !e || n || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != e < 0)) {
                                    if (((i = g), (u = this.timeline), this._repeat)) {
                                        if (((s = h + this._rDelay), this._repeat < -1 && e < 0)) return this.totalTime(100 * s + e, t, n);
                                        if (
                                            ((i = he(g % s)),
                                            g === f ? ((o = this._repeat), (i = h)) : ((o = ~~(g / s)) && o === g / s && ((i = h), o--), i > h && (i = h)),
                                            (l = this._yoyo && 1 & o) && ((d = this._yEase), (i = h - i)),
                                            (a = Pe(this._tTime, s)),
                                            i === p && !n && this._initted)
                                        )
                                            return this;
                                        o !== a && (u && this._yEase && $t(u, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = n = 1), (this.render(he(s * o), !0).invalidate()._lock = 0)));
                                    }
                                    if (!this._initted) {
                                        if (qe(this, e < 0 ? e : i, n, t)) return (this._tTime = 0), this;
                                        if (h !== this._dur) return this.render(e, t, n);
                                    }
                                    if (
                                        ((this._tTime = g),
                                        (this._time = i),
                                        !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                        (this.ratio = c = (d || this._ease)(i / h)),
                                        this._from && (this.ratio = c = 1 - c),
                                        i && !p && !t && (ct(this, "onStart"), this._tTime !== g))
                                    )
                                        return this;
                                    for (r = this._pt; r; ) r.r(c, r.d), (r = r._next);
                                    (u && u.render(e < 0 ? e : !i && l ? -1e-8 : u._dur * c, t, n)) || (this._startAt && (this._zTime = e)),
                                        this._onUpdate && !t && (e < 0 && this._startAt && this._startAt.render(e, !0, n), ct(this, "onUpdate")),
                                        this._repeat && o !== a && this.vars.onRepeat && !t && this.parent && ct(this, "onRepeat"),
                                        (g !== this._tDur && g) ||
                                            this._tTime !== g ||
                                            (e < 0 && this._startAt && !this._onUpdate && this._startAt.render(e, !0, !0),
                                            (e || !h) && ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) && Se(this, 1),
                                            t || (e < 0 && !p) || (!g && !p) || (ct(this, g === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < f && this.timeScale() > 0) && this._prom()));
                                }
                            } else
                                !(function (e, t, n, i) {
                                    var r,
                                        o,
                                        s,
                                        a = e.ratio,
                                        l = t < 0 || (!t && ((!e._start && Re(e) && (e._initted || !He(e))) || ((e._ts < 0 || e._dp._ts < 0) && !He(e)))) ? 0 : 1,
                                        c = e._rDelay,
                                        u = 0;
                                    if (
                                        (c && e._repeat && ((u = Ge(0, e._tDur, t)), (o = Pe(u, c)), (s = Pe(e._tTime, c)), e._yoyo && 1 & o && (l = 1 - l), o !== s && ((a = 1 - l), e.vars.repeatRefresh && e._initted && e.invalidate())),
                                        l !== a || i || e._zTime === k || (!t && e._zTime))
                                    ) {
                                        if (!e._initted && qe(e, t, i, n)) return;
                                        for (s = e._zTime, e._zTime = t || (n ? k : 0), n || (n = t && !s), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = u, r = e._pt; r; ) r.r(l, r.d), (r = r._next);
                                        e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                                            e._onUpdate && !n && ct(e, "onUpdate"),
                                            u && e._repeat && !n && e.parent && ct(e, "onRepeat"),
                                            (t >= e._tDur || t < 0) && e.ratio === l && (l && Se(e, 1), n || (ct(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
                                    } else e._zTime || (e._zTime = t);
                                })(this, e, t, n);
                            return this;
                        }),
                        (n.targets = function () {
                            return this._targets;
                        }),
                        (n.invalidate = function () {
                            return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), e.prototype.invalidate.call(this);
                        }),
                        (n.kill = function (e, t) {
                            if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t)))) return (this._lazy = this._pt = 0), this.parent ? ut(this) : this;
                            if (this.timeline) {
                                var n = this.timeline.totalDuration();
                                return this.timeline.killTweensOf(e, t, jt && !0 !== jt.vars.overwrite)._first || ut(this), this.parent && n !== this.timeline.totalDuration() && Be(this, (this._dur * this.timeline._tDur) / n, 0, 1), this;
                            }
                            var i,
                                r,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u = this._targets,
                                d = e ? Qe(e) : u,
                                p = this._ptLookup,
                                f = this._pt;
                            if (
                                (!t || "all" === t) &&
                                (function (e, t) {
                                    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; );
                                    return n < 0;
                                })(u, d)
                            )
                                return "all" === t && (this._pt = 0), ut(this);
                            for (
                                i = this._op = this._op || [],
                                    "all" !== t &&
                                        (D(t) &&
                                            ((a = {}),
                                            pe(t, function (e) {
                                                return (a[e] = 1);
                                            }),
                                            (t = a)),
                                        (t = (function (e, t) {
                                            var n,
                                                i,
                                                r,
                                                o,
                                                s = e[0] ? ue(e[0]).harness : 0,
                                                a = s && s.aliases;
                                            if (!a) return t;
                                            for (i in ((n = _e({}, t)), a)) if ((i in n)) for (r = (o = a[i].split(",")).length; r--; ) n[o[r]] = n[i];
                                            return n;
                                        })(u, t))),
                                    c = u.length;
                                c--;

                            )
                                if (~d.indexOf(u[c]))
                                    for (a in ((r = p[c]), "all" === t ? ((i[c] = t), (s = r), (o = {})) : ((o = i[c] = i[c] || {}), (s = t)), s))
                                        (l = r && r[a]) && (("kill" in l.d && !0 !== l.d.kill(a)) || Ae(this, l, "_pt"), delete r[a]), "all" !== o && (o[a] = 1);
                            return this._initted && !this._pt && f && ut(this), this;
                        }),
                        (t.to = function (e, n) {
                            return new t(e, n, arguments[2]);
                        }),
                        (t.from = function (e, t) {
                            return Ye(1, arguments);
                        }),
                        (t.delayedCall = function (e, n, i, r) {
                            return new t(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: e, onComplete: n, onReverseComplete: n, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: r });
                        }),
                        (t.fromTo = function (e, t, n) {
                            return Ye(2, arguments);
                        }),
                        (t.set = function (e, n) {
                            return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n);
                        }),
                        (t.killTweensOf = function (e, t, n) {
                            return c.killTweensOf(e, t, n);
                        }),
                        t
                    );
                })(Nt);
            we(Ut.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
                pe("staggerTo,staggerFrom,staggerFromTo", function (e) {
                    Ut[e] = function () {
                        var t = new zt(),
                            n = Ke.call(arguments, 0);
                        return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n);
                    };
                });
            var Yt = function (e, t, n) {
                    return (e[t] = n);
                },
                Xt = function (e, t, n) {
                    return e[t](n);
                },
                Gt = function (e, t, n, i) {
                    return e[t](i.fp, n);
                },
                Vt = function (e, t, n) {
                    return e.setAttribute(t, n);
                },
                Kt = function (e, t) {
                    return P(e[t]) ? Xt : L(e[t]) && e.setAttribute ? Vt : Yt;
                },
                Jt = function (e, t) {
                    return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
                },
                Zt = function (e, t) {
                    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
                },
                Qt = function (e, t) {
                    var n = t._pt,
                        i = "";
                    if (!e && t.b) i = t.b;
                    else if (1 === e && t.e) i = t.e;
                    else {
                        for (; n; ) (i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + i), (n = n._next);
                        i += t.c;
                    }
                    t.set(t.t, t.p, i, t);
                },
                en = function (e, t) {
                    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
                },
                tn = function (e, t, n, i) {
                    for (var r, o = this._pt; o; ) (r = o._next), o.p === i && o.modifier(e, t, n), (o = r);
                },
                nn = function (e) {
                    for (var t, n, i = this._pt; i; ) (n = i._next), (i.p === e && !i.op) || i.op === e ? Ae(this, i, "_pt") : i.dep || (t = 1), (i = n);
                    return !t;
                },
                rn = function (e, t, n, i) {
                    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
                },
                on = function (e) {
                    for (var t, n, i, r, o = e._pt; o; ) {
                        for (t = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
                        (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o), (o._next = n) ? (n._prev = o) : (r = o), (o = t);
                    }
                    e._pt = i;
                },
                sn = (function () {
                    function e(e, t, n, i, r, o, s, a, l) {
                        (this.t = t), (this.s = i), (this.c = r), (this.p = n), (this.r = o || Jt), (this.d = s || this), (this.set = a || Yt), (this.pr = l || 0), (this._next = e), e && (e._prev = this);
                    }
                    return (
                        (e.prototype.modifier = function (e, t, n) {
                            (this.mSet = this.mSet || this.set), (this.set = rn), (this.m = e), (this.mt = n), (this.tween = t);
                        }),
                        e
                    );
                })();
            pe(
                le +
                    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
                function (e) {
                    return (te[e] = 1);
                }
            ),
                (G.TweenMax = G.TweenLite = Ut),
                (G.TimelineLite = G.TimelineMax = zt),
                (c = new zt({ sortChildren: !1, defaults: _, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
                (x.stringFilter = wt);
            var an = {
                registerPlugin: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    t.forEach(function (e) {
                        return dt(e);
                    });
                },
                timeline: function (e) {
                    return new zt(e);
                },
                getTweensOf: function (e, t) {
                    return c.getTweensOf(e, t);
                },
                getProperty: function (e, t, n, i) {
                    D(e) && (e = Qe(e)[0]);
                    var r = ue(e || {}).get,
                        o = n ? be : ye;
                    return (
                        "native" === n && (n = ""),
                        e
                            ? t
                                ? o(((re[t] && re[t].get) || r)(e, t, n, i))
                                : function (t, n, i) {
                                      return o(((re[t] && re[t].get) || r)(e, t, n, i));
                                  }
                            : e
                    );
                },
                quickSetter: function (e, t, n) {
                    if ((e = Qe(e)).length > 1) {
                        var i = e.map(function (e) {
                                return un.quickSetter(e, t, n);
                            }),
                            r = i.length;
                        return function (e) {
                            for (var t = r; t--; ) i[t](e);
                        };
                    }
                    e = e[0] || {};
                    var o = re[t],
                        s = ue(e),
                        a = (s.harness && (s.harness.aliases || {})[t]) || t,
                        l = o
                            ? function (t) {
                                  var i = new o();
                                  (g._pt = 0), i.init(e, n ? t + n : t, g, 0, [e]), i.render(1, i), g._pt && en(1, g);
                              }
                            : s.set(e, a);
                    return o
                        ? l
                        : function (t) {
                              return l(e, a, n ? t + n : t, s, 1);
                          };
                },
                isTweening: function (e) {
                    return c.getTweensOf(e, !0).length > 0;
                },
                defaults: function (e) {
                    return e && e.ease && (e.ease = Et(e.ease, _.ease)), Te(_, e || {});
                },
                config: function (e) {
                    return Te(x, e || {});
                },
                registerEffect: function (e) {
                    var t = e.name,
                        n = e.effect,
                        i = e.plugins,
                        r = e.defaults,
                        o = e.extendTimeline;
                    (i || "").split(",").forEach(function (e) {
                        return e && !re[e] && !G[e] && Z(t + " effect requires " + e + " plugin.");
                    }),
                        (oe[t] = function (e, t, i) {
                            return n(Qe(e), we(t || {}, r), i);
                        }),
                        o &&
                            (zt.prototype[t] = function (e, n, i) {
                                return this.add(oe[t](e, N(n) ? n : (i = n) && {}, this), i);
                            });
                },
                registerEase: function (e, t) {
                    Tt[e] = Et(t);
                },
                parseEase: function (e, t) {
                    return arguments.length ? Et(e, t) : Tt;
                },
                getById: function (e) {
                    return c.getById(e);
                },
                exportRoot: function (e, t) {
                    void 0 === e && (e = {});
                    var n,
                        i,
                        r = new zt(e);
                    for (r.smoothChildTiming = z(e.smoothChildTiming), c.remove(r), r._dp = 0, r._time = r._tTime = c._time, n = c._first; n; )
                        (i = n._next), (!t && !n._dur && n instanceof Ut && n.vars.onComplete === n._targets[0]) || je(r, n, n._start - n._delay), (n = i);
                    return je(c, r, 0), r;
                },
                utils: {
                    wrap: function e(t, n, i) {
                        var r = n - t;
                        return R(t)
                            ? ot(t, e(0, t.length), n)
                            : Xe(i, function (e) {
                                  return ((r + ((e - t) % r)) % r) + t;
                              });
                    },
                    wrapYoyo: function e(t, n, i) {
                        var r = n - t,
                            o = 2 * r;
                        return R(t)
                            ? ot(t, e(0, t.length - 1), n)
                            : Xe(i, function (e) {
                                  return t + ((e = (o + ((e - t) % o)) % o || 0) > r ? o - e : e);
                              });
                    },
                    distribute: tt,
                    random: rt,
                    snap: it,
                    normalize: function (e, t, n) {
                        return at(e, t, 0, 1, n);
                    },
                    getUnit: Ve,
                    clamp: function (e, t, n) {
                        return Xe(n, function (n) {
                            return Ge(e, t, n);
                        });
                    },
                    splitColor: gt,
                    toArray: Qe,
                    selector: function (e) {
                        return (
                            (e = Qe(e)[0] || Z("Invalid scope") || {}),
                            function (t) {
                                var n = e.current || e.nativeElement || e;
                                return Qe(t, n.querySelectorAll ? n : n === e ? Z("Invalid scope") || p.createElement("div") : e);
                            }
                        );
                    },
                    mapRange: at,
                    pipe: function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function (e) {
                            return t.reduce(function (e, t) {
                                return t(e);
                            }, e);
                        };
                    },
                    unitize: function (e, t) {
                        return function (n) {
                            return e(parseFloat(n)) + (t || Ve(n));
                        };
                    },
                    interpolate: function e(t, n, i, r) {
                        var o = isNaN(t + n)
                            ? 0
                            : function (e) {
                                  return (1 - e) * t + e * n;
                              };
                        if (!o) {
                            var s,
                                a,
                                l,
                                c,
                                u,
                                d = D(t),
                                p = {};
                            if ((!0 === i && (r = 1) && (i = null), d)) (t = { p: t }), (n = { p: n });
                            else if (R(t) && !R(n)) {
                                for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++) l.push(e(t[a - 1], t[a]));
                                c--,
                                    (o = function (e) {
                                        e *= c;
                                        var t = Math.min(u, ~~e);
                                        return l[t](e - t);
                                    }),
                                    (i = n);
                            } else r || (t = _e(R(t) ? [] : {}, t));
                            if (!l) {
                                for (s in n) qt.call(p, t, s, "get", n[s]);
                                o = function (e) {
                                    return en(e, p) || (d ? t.p : t);
                                };
                            }
                        }
                        return Xe(i, o);
                    },
                    shuffle: et,
                },
                install: K,
                effects: oe,
                ticker: xt,
                updateRoot: zt.updateRoot,
                plugins: re,
                globalTimeline: c,
                core: {
                    PropTween: sn,
                    globals: Q,
                    Tween: Ut,
                    Timeline: zt,
                    Animation: Nt,
                    getCache: ue,
                    _removeLinkedListItem: Ae,
                    suppressOverwrites: function (e) {
                        return (l = e);
                    },
                },
            };
            pe("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
                return (an[e] = Ut[e]);
            }),
                xt.add(zt.updateRoot),
                (g = an.to({}, { duration: 0 }));
            var ln = function (e, t) {
                    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; ) n = n._next;
                    return n;
                },
                cn = function (e, t) {
                    return {
                        name: e,
                        rawVars: 1,
                        init: function (e, n, i) {
                            i._onInit = function (e) {
                                var i, r;
                                if (
                                    (D(n) &&
                                        ((i = {}),
                                        pe(n, function (e) {
                                            return (i[e] = 1);
                                        }),
                                        (n = i)),
                                    t)
                                ) {
                                    for (r in ((i = {}), n)) i[r] = t(n[r]);
                                    n = i;
                                }
                                !(function (e, t) {
                                    var n,
                                        i,
                                        r,
                                        o = e._targets;
                                    for (n in t) for (i = o.length; i--; ) (r = e._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = ln(r, n)), r && r.modifier && r.modifier(t[n], e, o[i], n));
                                })(e, n);
                            };
                        },
                    };
                },
                un =
                    an.registerPlugin(
                        {
                            name: "attr",
                            init: function (e, t, n, i, r) {
                                var o, s;
                                for (o in t) (s = this.add(e, "setAttribute", (e.getAttribute(o) || 0) + "", t[o], i, r, 0, 0, o)) && (s.op = o), this._props.push(o);
                            },
                        },
                        {
                            name: "endArray",
                            init: function (e, t) {
                                for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
                            },
                        },
                        cn("roundProps", nt),
                        cn("modifiers"),
                        cn("snap", it)
                    ) || an;
            (Ut.version = zt.version = un.version = "3.8.0"), (f = 1), j() && _t();
            Tt.Power0, Tt.Power1, Tt.Power2, Tt.Power3, Tt.Power4, Tt.Linear, Tt.Quad, Tt.Cubic, Tt.Quart, Tt.Quint, Tt.Strong, Tt.Elastic, Tt.Back, Tt.SteppedEase, Tt.Bounce, Tt.Sine, Tt.Expo, Tt.Circ;
            var dn,
                pn,
                fn,
                hn,
                gn,
                mn,
                vn,
                yn = {},
                bn = 180 / Math.PI,
                wn = Math.PI / 180,
                xn = Math.atan2,
                _n = /([A-Z])/g,
                Tn = /(?:left|right|width|margin|padding|x)/i,
                kn = /[\s,\(]\S/,
                Cn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
                An = function (e, t) {
                    return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
                },
                Sn = function (e, t) {
                    return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
                },
                $n = function (e, t) {
                    return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t);
                },
                En = function (e, t) {
                    var n = t.s + t.c * e;
                    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
                },
                On = function (e, t) {
                    return t.set(t.t, t.p, e ? t.e : t.b, t);
                },
                Dn = function (e, t) {
                    return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
                },
                Pn = function (e, t, n) {
                    return (e.style[t] = n);
                },
                Mn = function (e, t, n) {
                    return e.style.setProperty(t, n);
                },
                Ln = function (e, t, n) {
                    return (e._gsap[t] = n);
                },
                Nn = function (e, t, n) {
                    return (e._gsap.scaleX = e._gsap.scaleY = n);
                },
                zn = function (e, t, n, i, r) {
                    var o = e._gsap;
                    (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
                },
                jn = function (e, t, n, i, r) {
                    var o = e._gsap;
                    (o[t] = n), o.renderTransform(r, o);
                },
                In = "transform",
                qn = In + "Origin",
                Rn = function (e, t) {
                    var n = pn.createElementNS ? pn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : pn.createElement(e);
                    return n.style ? n : pn.createElement(e);
                },
                Hn = function e(t, n, i) {
                    var r = getComputedStyle(t);
                    return r[n] || r.getPropertyValue(n.replace(_n, "-$1").toLowerCase()) || r.getPropertyValue(n) || (!i && e(t, Fn(n) || n, 1)) || "";
                },
                Bn = "O,Moz,ms,Ms,Webkit".split(","),
                Fn = function (e, t, n) {
                    var i = (t || gn).style,
                        r = 5;
                    if (e in i && !n) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(Bn[r] + e in i); );
                    return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Bn[r] : "") + e;
                },
                Wn = function () {
                    "undefined" != typeof window &&
                        window.document &&
                        ((dn = window),
                        (pn = dn.document),
                        (fn = pn.documentElement),
                        (gn = Rn("div") || { style: {} }),
                        Rn("div"),
                        (In = Fn(In)),
                        (qn = In + "Origin"),
                        (gn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                        (vn = !!Fn("perspective")),
                        (hn = 1));
                },
                Un = function e(t) {
                    var n,
                        i = Rn("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        o = this.nextSibling,
                        s = this.style.cssText;
                    if ((fn.appendChild(i), i.appendChild(this), (this.style.display = "block"), t))
                        try {
                            (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = e);
                        } catch (e) {}
                    else this._gsapBBox && (n = this._gsapBBox());
                    return r && (o ? r.insertBefore(this, o) : r.appendChild(this)), fn.removeChild(i), (this.style.cssText = s), n;
                },
                Yn = function (e, t) {
                    for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
                },
                Xn = function (e) {
                    var t;
                    try {
                        t = e.getBBox();
                    } catch (n) {
                        t = Un.call(e, !0);
                    }
                    return (t && (t.width || t.height)) || e.getBBox === Un || (t = Un.call(e, !0)), !t || t.width || t.x || t.y ? t : { x: +Yn(e, ["x", "cx", "x1"]) || 0, y: +Yn(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
                },
                Gn = function (e) {
                    return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !Xn(e));
                },
                Vn = function (e, t) {
                    if (t) {
                        var n = e.style;
                        t in yn && t !== qn && (t = In), n.removeProperty ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) || (t = "-" + t), n.removeProperty(t.replace(_n, "-$1").toLowerCase())) : n.removeAttribute(t);
                    }
                },
                Kn = function (e, t, n, i, r, o) {
                    var s = new sn(e._pt, t, n, 0, 1, o ? Dn : On);
                    return (e._pt = s), (s.b = i), (s.e = r), e._props.push(n), s;
                },
                Jn = { deg: 1, rad: 1, turn: 1 },
                Zn = function e(t, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        c = parseFloat(i) || 0,
                        u = (i + "").trim().substr((c + "").length) || "px",
                        d = gn.style,
                        p = Tn.test(n),
                        f = "svg" === t.tagName.toLowerCase(),
                        h = (f ? "client" : "offset") + (p ? "Width" : "Height"),
                        g = 100,
                        m = "px" === r,
                        v = "%" === r;
                    return r === u || !c || Jn[r] || Jn[u]
                        ? c
                        : ("px" !== u && !m && (c = e(t, n, i, "px")),
                          (l = t.getCTM && Gn(t)),
                          (!v && "%" !== u) || (!yn[n] && !~n.indexOf("adius"))
                              ? ((d[p ? "width" : "height"] = g + (m ? u : r)),
                                (s = ~n.indexOf("adius") || ("em" === r && t.appendChild && !f) ? t : t.parentNode),
                                l && (s = (t.ownerSVGElement || {}).parentNode),
                                (s && s !== pn && s.appendChild) || (s = pn.body),
                                (a = s._gsap) && v && a.width && p && a.time === xt.time
                                    ? fe((c / a.width) * g)
                                    : ((v || "%" === u) && (d.position = Hn(t, "position")),
                                      s === t && (d.position = "static"),
                                      s.appendChild(gn),
                                      (o = gn[h]),
                                      s.removeChild(gn),
                                      (d.position = "absolute"),
                                      p && v && (((a = ue(s)).time = xt.time), (a.width = s[h])),
                                      fe(m ? (o * c) / g : o && c ? (g / o) * c : 0)))
                              : ((o = l ? t.getBBox()[p ? "width" : "height"] : t[h]), fe(v ? (c / o) * g : (c / 100) * o)));
                },
                Qn = function (e, t, n, i) {
                    var r;
                    return (
                        hn || Wn(),
                        t in Cn && "transform" !== t && ~(t = Cn[t]).indexOf(",") && (t = t.split(",")[0]),
                        yn[t] && "transform" !== t
                            ? ((r = ui(e, i)), (r = "transformOrigin" !== t ? r[t] : r.svg ? r.origin : di(Hn(e, qn)) + " " + r.zOrigin + "px"))
                            : (!(r = e.style[t]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = (ii[t] && ii[t](e, t, n)) || Hn(e, t) || de(e, t) || ("opacity" === t ? 1 : 0)),
                        n && !~(r + "").trim().indexOf(" ") ? Zn(e, t, r, n) + n : r
                    );
                },
                ei = function (e, t, n, i) {
                    if (!n || "none" === n) {
                        var r = Fn(t, e, 1),
                            o = r && Hn(e, r, 1);
                        o && o !== n ? ((t = r), (n = o)) : "borderColor" === t && (n = Hn(e, "borderTopColor"));
                    }
                    var s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        g,
                        m,
                        v,
                        y = new sn(this._pt, e.style, t, 0, 1, Qt),
                        b = 0,
                        w = 0;
                    if (((y.b = n), (y.e = i), (n += ""), "auto" === (i += "") && ((e.style[t] = i), (i = Hn(e, t) || i), (e.style[t] = n)), wt((s = [n, i])), (i = s[1]), (l = (n = s[0]).match(F) || []), (i.match(F) || []).length)) {
                        for (; (a = F.exec(i)); )
                            (p = a[0]),
                                (h = i.substring(b, a.index)),
                                u ? (u = (u + 1) % 5) : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) || (u = 1),
                                p !== (d = l[w++] || "") &&
                                    ((c = parseFloat(d) || 0),
                                    (m = d.substr((c + "").length)),
                                    (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                                    (f = parseFloat(p)),
                                    (g = p.substr((f + "").length)),
                                    (b = F.lastIndex - g.length),
                                    g || ((g = g || x.units[t] || m), b === i.length && ((i += g), (y.e += g))),
                                    m !== g && (c = Zn(e, t, d, g) || 0),
                                    (y._pt = { _next: y._pt, p: h || 1 === w ? h : ",", s: c, c: v ? v * f : f - c, m: (u && u < 4) || "zIndex" === t ? Math.round : 0 }));
                        y.c = b < i.length ? i.substring(b, i.length) : "";
                    } else y.r = "display" === t && "none" === i ? Dn : On;
                    return U.test(i) && (y.e = 0), (this._pt = y), y;
                },
                ti = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
                ni = function (e, t) {
                    if (t.tween && t.tween._time === t.tween._dur) {
                        var n,
                            i,
                            r,
                            o = t.t,
                            s = o.style,
                            a = t.u,
                            l = o._gsap;
                        if ("all" === a || !0 === a) (s.cssText = ""), (i = 1);
                        else for (r = (a = a.split(",")).length; --r > -1; ) (n = a[r]), yn[n] && ((i = 1), (n = "transformOrigin" === n ? qn : In)), Vn(o, n);
                        i && (Vn(o, In), l && (l.svg && o.removeAttribute("transform"), ui(o, 1), (l.uncache = 1)));
                    }
                },
                ii = {
                    clearProps: function (e, t, n, i, r) {
                        if ("isFromStart" !== r.data) {
                            var o = (e._pt = new sn(e._pt, t, n, 0, 0, ni));
                            return (o.u = i), (o.pr = -10), (o.tween = r), e._props.push(n), 1;
                        }
                    },
                },
                ri = [1, 0, 0, 1, 0, 0],
                oi = {},
                si = function (e) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
                },
                ai = function (e) {
                    var t = Hn(e, In);
                    return si(t) ? ri : t.substr(7).match(B).map(fe);
                },
                li = function (e, t) {
                    var n,
                        i,
                        r,
                        o,
                        s = e._gsap || ue(e),
                        a = e.style,
                        l = ai(e);
                    return s.svg && e.getAttribute("transform")
                        ? "1,0,0,1,0,0" === (l = [(r = e.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",")
                            ? ri
                            : l
                        : (l !== ri ||
                              e.offsetParent ||
                              e === fn ||
                              s.svg ||
                              ((r = a.display),
                              (a.display = "block"),
                              ((n = e.parentNode) && e.offsetParent) || ((o = 1), (i = e.nextSibling), fn.appendChild(e)),
                              (l = ai(e)),
                              r ? (a.display = r) : Vn(e, "display"),
                              o && (i ? n.insertBefore(e, i) : n ? n.appendChild(e) : fn.removeChild(e))),
                          t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
                },
                ci = function (e, t, n, i, r, o) {
                    var s,
                        a,
                        l,
                        c = e._gsap,
                        u = r || li(e, !0),
                        d = c.xOrigin || 0,
                        p = c.yOrigin || 0,
                        f = c.xOffset || 0,
                        h = c.yOffset || 0,
                        g = u[0],
                        m = u[1],
                        v = u[2],
                        y = u[3],
                        b = u[4],
                        w = u[5],
                        x = t.split(" "),
                        _ = parseFloat(x[0]) || 0,
                        T = parseFloat(x[1]) || 0;
                    n
                        ? u !== ri && (a = g * y - m * v) && ((l = _ * (-m / a) + T * (g / a) - (g * w - m * b) / a), (_ = _ * (y / a) + T * (-v / a) + (v * w - y * b) / a), (T = l))
                        : ((_ = (s = Xn(e)).x + (~x[0].indexOf("%") ? (_ / 100) * s.width : _)), (T = s.y + (~(x[1] || x[0]).indexOf("%") ? (T / 100) * s.height : T))),
                        i || (!1 !== i && c.smooth) ? ((b = _ - d), (w = T - p), (c.xOffset = f + (b * g + w * v) - b), (c.yOffset = h + (b * m + w * y) - w)) : (c.xOffset = c.yOffset = 0),
                        (c.xOrigin = _),
                        (c.yOrigin = T),
                        (c.smooth = !!i),
                        (c.origin = t),
                        (c.originIsAbsolute = !!n),
                        (e.style[qn] = "0px 0px"),
                        o && (Kn(o, c, "xOrigin", d, _), Kn(o, c, "yOrigin", p, T), Kn(o, c, "xOffset", f, c.xOffset), Kn(o, c, "yOffset", h, c.yOffset)),
                        e.setAttribute("data-svg-origin", _ + " " + T);
                },
                ui = function (e, t) {
                    var n = e._gsap || new Lt(e);
                    if ("x" in n && !t && !n.uncache) return n;
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        g,
                        m,
                        v,
                        y,
                        b,
                        w,
                        _,
                        T,
                        k,
                        C,
                        A,
                        S,
                        $,
                        E,
                        O,
                        D,
                        P,
                        M,
                        L,
                        N,
                        z = e.style,
                        j = n.scaleX < 0,
                        I = "px",
                        q = "deg",
                        R = Hn(e, qn) || "0";
                    return (
                        (i = r = o = l = c = u = d = p = f = 0),
                        (s = a = 1),
                        (n.svg = !(!e.getCTM || !Gn(e))),
                        (m = li(e, n.svg)),
                        n.svg && ((S = (!n.uncache || "0px 0px" === R) && !t && e.getAttribute("data-svg-origin")), ci(e, S || R, !!S || n.originIsAbsolute, !1 !== n.smooth, m)),
                        (h = n.xOrigin || 0),
                        (g = n.yOrigin || 0),
                        m !== ri &&
                            ((w = m[0]),
                            (_ = m[1]),
                            (T = m[2]),
                            (k = m[3]),
                            (i = C = m[4]),
                            (r = A = m[5]),
                            6 === m.length
                                ? ((s = Math.sqrt(w * w + _ * _)),
                                  (a = Math.sqrt(k * k + T * T)),
                                  (l = w || _ ? xn(_, w) * bn : 0),
                                  (d = T || k ? xn(T, k) * bn + l : 0) && (a *= Math.abs(Math.cos(d * wn))),
                                  n.svg && ((i -= h - (h * w + g * T)), (r -= g - (h * _ + g * k))))
                                : ((N = m[6]),
                                  (M = m[7]),
                                  (O = m[8]),
                                  (D = m[9]),
                                  (P = m[10]),
                                  (L = m[11]),
                                  (i = m[12]),
                                  (r = m[13]),
                                  (o = m[14]),
                                  (c = (v = xn(N, P)) * bn),
                                  v &&
                                      ((S = C * (y = Math.cos(-v)) + O * (b = Math.sin(-v))),
                                      ($ = A * y + D * b),
                                      (E = N * y + P * b),
                                      (O = C * -b + O * y),
                                      (D = A * -b + D * y),
                                      (P = N * -b + P * y),
                                      (L = M * -b + L * y),
                                      (C = S),
                                      (A = $),
                                      (N = E)),
                                  (u = (v = xn(-T, P)) * bn),
                                  v && ((y = Math.cos(-v)), (L = k * (b = Math.sin(-v)) + L * y), (w = S = w * y - O * b), (_ = $ = _ * y - D * b), (T = E = T * y - P * b)),
                                  (l = (v = xn(_, w)) * bn),
                                  v && ((S = w * (y = Math.cos(v)) + _ * (b = Math.sin(v))), ($ = C * y + A * b), (_ = _ * y - w * b), (A = A * y - C * b), (w = S), (C = $)),
                                  c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (u = 180 - u)),
                                  (s = fe(Math.sqrt(w * w + _ * _ + T * T))),
                                  (a = fe(Math.sqrt(A * A + N * N))),
                                  (v = xn(C, A)),
                                  (d = Math.abs(v) > 2e-4 ? v * bn : 0),
                                  (f = L ? 1 / (L < 0 ? -L : L) : 0)),
                            n.svg && ((S = e.getAttribute("transform")), (n.forceCSS = e.setAttribute("transform", "") || !si(Hn(e, In))), S && e.setAttribute("transform", S))),
                        Math.abs(d) > 90 && Math.abs(d) < 270 && (j ? ((s *= -1), (d += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (d += d <= 0 ? 180 : -180))),
                        (n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? (e.offsetWidth * n.xPercent) / 100 : 0) + I),
                        (n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? (e.offsetHeight * n.yPercent) / 100 : 0) + I),
                        (n.z = o + I),
                        (n.scaleX = fe(s)),
                        (n.scaleY = fe(a)),
                        (n.rotation = fe(l) + q),
                        (n.rotationX = fe(c) + q),
                        (n.rotationY = fe(u) + q),
                        (n.skewX = d + q),
                        (n.skewY = p + q),
                        (n.transformPerspective = f + I),
                        (n.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (z[qn] = di(R)),
                        (n.xOffset = n.yOffset = 0),
                        (n.force3D = x.force3D),
                        (n.renderTransform = n.svg ? yi : vn ? vi : fi),
                        (n.uncache = 0),
                        n
                    );
                },
                di = function (e) {
                    return (e = e.split(" "))[0] + " " + e[1];
                },
                pi = function (e, t, n) {
                    var i = Ve(t);
                    return fe(parseFloat(t) + parseFloat(Zn(e, "x", n + "px", i))) + i;
                },
                fi = function (e, t) {
                    (t.z = "0px"), (t.rotationY = t.rotationX = "0deg"), (t.force3D = 0), vi(e, t);
                },
                hi = "0deg",
                gi = "0px",
                mi = ") ",
                vi = function (e, t) {
                    var n = t || this,
                        i = n.xPercent,
                        r = n.yPercent,
                        o = n.x,
                        s = n.y,
                        a = n.z,
                        l = n.rotation,
                        c = n.rotationY,
                        u = n.rotationX,
                        d = n.skewX,
                        p = n.skewY,
                        f = n.scaleX,
                        h = n.scaleY,
                        g = n.transformPerspective,
                        m = n.force3D,
                        v = n.target,
                        y = n.zOrigin,
                        b = "",
                        w = ("auto" === m && e && 1 !== e) || !0 === m;
                    if (y && (u !== hi || c !== hi)) {
                        var x,
                            _ = parseFloat(c) * wn,
                            T = Math.sin(_),
                            k = Math.cos(_);
                        (_ = parseFloat(u) * wn), (x = Math.cos(_)), (o = pi(v, o, T * x * -y)), (s = pi(v, s, -Math.sin(_) * -y)), (a = pi(v, a, k * x * -y + y));
                    }
                    g !== gi && (b += "perspective(" + g + mi),
                        (i || r) && (b += "translate(" + i + "%, " + r + "%) "),
                        (w || o !== gi || s !== gi || a !== gi) && (b += a !== gi || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + mi),
                        l !== hi && (b += "rotate(" + l + mi),
                        c !== hi && (b += "rotateY(" + c + mi),
                        u !== hi && (b += "rotateX(" + u + mi),
                        (d === hi && p === hi) || (b += "skew(" + d + ", " + p + mi),
                        (1 === f && 1 === h) || (b += "scale(" + f + ", " + h + mi),
                        (v.style[In] = b || "translate(0, 0)");
                },
                yi = function (e, t) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a = t || this,
                        l = a.xPercent,
                        c = a.yPercent,
                        u = a.x,
                        d = a.y,
                        p = a.rotation,
                        f = a.skewX,
                        h = a.skewY,
                        g = a.scaleX,
                        m = a.scaleY,
                        v = a.target,
                        y = a.xOrigin,
                        b = a.yOrigin,
                        w = a.xOffset,
                        x = a.yOffset,
                        _ = a.forceCSS,
                        T = parseFloat(u),
                        k = parseFloat(d);
                    (p = parseFloat(p)),
                        (f = parseFloat(f)),
                        (h = parseFloat(h)) && ((f += h = parseFloat(h)), (p += h)),
                        p || f
                            ? ((p *= wn),
                              (f *= wn),
                              (n = Math.cos(p) * g),
                              (i = Math.sin(p) * g),
                              (r = Math.sin(p - f) * -m),
                              (o = Math.cos(p - f) * m),
                              f && ((h *= wn), (s = Math.tan(f - h)), (r *= s = Math.sqrt(1 + s * s)), (o *= s), h && ((s = Math.tan(h)), (n *= s = Math.sqrt(1 + s * s)), (i *= s))),
                              (n = fe(n)),
                              (i = fe(i)),
                              (r = fe(r)),
                              (o = fe(o)))
                            : ((n = g), (o = m), (i = r = 0)),
                        ((T && !~(u + "").indexOf("px")) || (k && !~(d + "").indexOf("px"))) && ((T = Zn(v, "x", u, "px")), (k = Zn(v, "y", d, "px"))),
                        (y || b || w || x) && ((T = fe(T + y - (y * n + b * r) + w)), (k = fe(k + b - (y * i + b * o) + x))),
                        (l || c) && ((s = v.getBBox()), (T = fe(T + (l / 100) * s.width)), (k = fe(k + (c / 100) * s.height))),
                        (s = "matrix(" + n + "," + i + "," + r + "," + o + "," + T + "," + k + ")"),
                        v.setAttribute("transform", s),
                        _ && (v.style[In] = s);
                },
                bi = function (e, t, n, i, r, o) {
                    var s,
                        a,
                        l = 360,
                        c = D(r),
                        u = parseFloat(r) * (c && ~r.indexOf("rad") ? bn : 1),
                        d = o ? u * o : u - i,
                        p = i + d + "deg";
                    return (
                        c &&
                            ("short" === (s = r.split("_")[1]) && (d %= l) !== d % 180 && (d += d < 0 ? l : -360),
                            "cw" === s && d < 0 ? (d = ((d + 36e9) % l) - ~~(d / l) * l) : "ccw" === s && d > 0 && (d = ((d - 36e9) % l) - ~~(d / l) * l)),
                        (e._pt = a = new sn(e._pt, t, n, i, d, Sn)),
                        (a.e = p),
                        (a.u = "deg"),
                        e._props.push(n),
                        a
                    );
                },
                wi = function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                },
                xi = function (e, t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u = wi({}, n._gsap),
                        d = n.style;
                    for (r in (u.svg
                        ? ((o = n.getAttribute("transform")), n.setAttribute("transform", ""), (d[In] = t), (i = ui(n, 1)), Vn(n, In), n.setAttribute("transform", o))
                        : ((o = getComputedStyle(n)[In]), (d[In] = t), (i = ui(n, 1)), (d[In] = o)),
                    yn))
                        (o = u[r]) !== (s = i[r]) &&
                            "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
                            ((a = Ve(o) !== (c = Ve(s)) ? Zn(n, r, o, c) : parseFloat(o)), (l = parseFloat(s)), (e._pt = new sn(e._pt, i, r, a, l - a, An)), (e._pt.u = c || 0), e._props.push(r));
                    wi(i, u);
                };
            pe("padding,margin,Width,Radius", function (e, t) {
                var n = "Top",
                    i = "Right",
                    r = "Bottom",
                    o = "Left",
                    s = (t < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function (n) {
                        return t < 2 ? e + n : "border" + n + e;
                    });
                ii[t > 1 ? "border" + e : e] = function (e, t, n, i, r) {
                    var o, a;
                    if (arguments.length < 4)
                        return (
                            (o = s.map(function (t) {
                                return Qn(e, t, n);
                            })),
                            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
                        );
                    (o = (i + "").split(" ")),
                        (a = {}),
                        s.forEach(function (e, t) {
                            return (a[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
                        }),
                        e.init(t, a, r);
                };
            });
            var _i,
                Ti,
                ki,
                Ci = {
                    name: "css",
                    register: Wn,
                    targetTest: function (e) {
                        return e.style && e.nodeType;
                    },
                    init: function (e, t, n, i, r) {
                        var o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m,
                            v,
                            y,
                            b,
                            w,
                            _,
                            T,
                            k,
                            C = this._props,
                            A = e.style,
                            S = n.vars.startAt;
                        for (d in (hn || Wn(), t))
                            if ("autoRound" !== d && ((s = t[d]), !re[d] || !Rt(d, t, n, i, e, r)))
                                if (((c = typeof s), (u = ii[d]), "function" === c && (c = typeof (s = s.call(n, i, e, r))), "string" === c && ~s.indexOf("random(") && (s = st(s)), u)) u(this, e, d, s, n) && (b = 1);
                                else if ("--" === d.substr(0, 2))
                                    (o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                                        (s += ""),
                                        (yt.lastIndex = 0),
                                        yt.test(o) || ((p = Ve(o)), (f = Ve(s))),
                                        f ? p !== f && (o = Zn(e, d, o, f) + f) : p && (s += p),
                                        this.add(A, "setProperty", o, s, i, r, 0, 0, d),
                                        C.push(d);
                                else if ("undefined" !== c) {
                                    if (
                                        (S && d in S
                                            ? ((o = "function" == typeof S[d] ? S[d].call(n, i, e, r) : S[d]),
                                              d in x.units && !Ve(o) && (o += x.units[d]),
                                              D(o) && ~o.indexOf("random(") && (o = st(o)),
                                              "=" === (o + "").charAt(1) && (o = Qn(e, d)))
                                            : (o = Qn(e, d)),
                                        (l = parseFloat(o)),
                                        (h = "string" === c && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                                        (a = parseFloat(s)),
                                        d in Cn &&
                                            ("autoAlpha" === d && (1 === l && "hidden" === Qn(e, "visibility") && a && (l = 0), Kn(this, A, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                                            "scale" !== d && "transform" !== d && ~(d = Cn[d]).indexOf(",") && (d = d.split(",")[0])),
                                        (g = d in yn))
                                    )
                                        if (
                                            (m ||
                                                (((v = e._gsap).renderTransform && !t.parseTransform) || ui(e, t.parseTransform),
                                                (y = !1 !== t.smoothOrigin && v.smooth),
                                                ((m = this._pt = new sn(this._pt, A, In, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                                            "scale" === d)
                                        )
                                            (this._pt = new sn(this._pt, v, "scaleY", v.scaleY, (h ? h * a : a - v.scaleY) || 0)), C.push("scaleY", d), (d += "X");
                                        else {
                                            if ("transformOrigin" === d) {
                                                (_ = void 0),
                                                    (T = void 0),
                                                    (k = void 0),
                                                    (_ = (w = s).split(" ")),
                                                    (T = _[0]),
                                                    (k = _[1] || "50%"),
                                                    ("top" !== T && "bottom" !== T && "left" !== k && "right" !== k) || ((w = T), (T = k), (k = w)),
                                                    (_[0] = ti[T] || T),
                                                    (_[1] = ti[k] || k),
                                                    (s = _.join(" ")),
                                                    v.svg ? ci(e, s, 0, y, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && Kn(this, v, "zOrigin", v.zOrigin, f), Kn(this, A, d, di(o), di(s)));
                                                continue;
                                            }
                                            if ("svgOrigin" === d) {
                                                ci(e, s, 1, y, 0, this);
                                                continue;
                                            }
                                            if (d in oi) {
                                                bi(this, v, d, l, s, h);
                                                continue;
                                            }
                                            if ("smoothOrigin" === d) {
                                                Kn(this, v, "smooth", v.smooth, s);
                                                continue;
                                            }
                                            if ("force3D" === d) {
                                                v[d] = s;
                                                continue;
                                            }
                                            if ("transform" === d) {
                                                xi(this, s, e);
                                                continue;
                                            }
                                        }
                                    else d in A || (d = Fn(d) || d);
                                    if (g || ((a || 0 === a) && (l || 0 === l) && !kn.test(s) && d in A))
                                        a || (a = 0),
                                            (p = (o + "").substr((l + "").length)) !== (f = Ve(s) || (d in x.units ? x.units[d] : p)) && (l = Zn(e, d, o, f)),
                                            (this._pt = new sn(this._pt, g ? v : A, d, l, h ? h * a : a - l, g || ("px" !== f && "zIndex" !== d) || !1 === t.autoRound ? An : En)),
                                            (this._pt.u = f || 0),
                                            p !== f && "%" !== f && ((this._pt.b = o), (this._pt.r = $n));
                                    else if (d in A) ei.call(this, e, d, o, s);
                                    else {
                                        if (!(d in e)) {
                                            J(d, s);
                                            continue;
                                        }
                                        this.add(e, d, o || e[d], s, i, r);
                                    }
                                    C.push(d);
                                }
                        b && on(this);
                    },
                    get: Qn,
                    aliases: Cn,
                    getSetter: function (e, t, n) {
                        var i = Cn[t];
                        return (
                            i && i.indexOf(",") < 0 && (t = i),
                            t in yn && t !== qn && (e._gsap.x || Qn(e, "x")) ? (n && mn === n ? ("scale" === t ? Nn : Ln) : (mn = n || {}) && ("scale" === t ? zn : jn)) : e.style && !L(e.style[t]) ? Pn : ~t.indexOf("-") ? Mn : Kt(e, t)
                        );
                    },
                    core: { _removeProperty: Vn, _getMatrix: li },
                };
            (un.utils.checkPrefix = Fn),
                (ki = pe((_i = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Ti = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (e) {
                    yn[e] = 1;
                })),
                pe(Ti, function (e) {
                    (x.units[e] = "deg"), (oi[e] = 1);
                }),
                (Cn[ki[13]] = _i + "," + Ti),
                pe("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (e) {
                    var t = e.split(":");
                    Cn[t[1]] = ki[t[0]];
                }),
                pe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (e) {
                    x.units[e] = "px";
                }),
                un.registerPlugin(Ci);
            var Ai = un.registerPlugin(Ci) || un,
                Si = Ai.core.Tween,
                $i = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                Ei = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                Oi = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                Di = /(^[#\.][a-z]|[a-y][a-z])/i,
                Pi = Math.PI / 180,
                Mi = 180 / Math.PI,
                Li = Math.sin,
                Ni = Math.cos,
                zi = Math.abs,
                ji = Math.sqrt,
                Ii = Math.atan2,
                qi = 1e8,
                Ri = function (e) {
                    return "string" == typeof e;
                },
                Hi = function (e) {
                    return "number" == typeof e;
                },
                Bi = {},
                Fi = {},
                Wi = 1e5,
                Ui = function (e) {
                    return Math.round(((e + qi) % 1) * Wi) / Wi || (e < 0 ? 0 : 1);
                },
                Yi = function (e) {
                    return Math.round(e * Wi) / Wi || 0;
                },
                Xi = function (e) {
                    return Math.round(1e10 * e) / 1e10 || 0;
                },
                Gi = function (e, t, n, i) {
                    var r = e[t],
                        o = 1 === i ? 6 : sr(r, n, i);
                    if (o && o + n + 2 < r.length) return e.splice(t, 0, r.slice(0, n + o + 2)), r.splice(0, n + o), 1;
                },
                Vi = function (e, t, n) {
                    var i = e.length,
                        r = ~~(n * i);
                    if (e[r] > t) for (; --r && e[r] > t; );
                    else for (; e[++r] < t && r < i; );
                    return r < i ? r : i - 1;
                },
                Ki = function (e, t) {
                    return (
                        (t.totalLength = e.totalLength),
                        e.samples ? ((t.samples = e.samples.slice(0)), (t.lookup = e.lookup.slice(0)), (t.minLength = e.minLength), (t.resolution = e.resolution)) : e.totalPoints && (t.totalPoints = e.totalPoints),
                        t
                    );
                },
                Ji = function (e, t) {
                    var n = e.length,
                        i = e[n - 1] || [],
                        r = i.length;
                    n && t[0] === i[r - 2] && t[1] === i[r - 1] && ((t = i.concat(t.slice(2))), n--), (e[n] = t);
                };
            function Zi(e) {
                var t,
                    n = (e = (Ri(e) && Di.test(e) && document.querySelector(e)) || e).getAttribute ? e : 0;
                return n && (e = e.getAttribute("d"))
                    ? (n._gsPath || (n._gsPath = {}), (t = n._gsPath[e]) && !t._dirty ? t : (n._gsPath[e] = dr(e)))
                    : e
                    ? Ri(e)
                        ? dr(e)
                        : Hi(e[0])
                        ? [e]
                        : e
                    : console.warn("Expecting a <path> element or an SVG path data string");
            }
            function Qi(e) {
                var t,
                    n = 0;
                for (e.reverse(); n < e.length; n += 2) (t = e[n]), (e[n] = e[n + 1]), (e[n + 1] = t);
                e.reversed = !e.reversed;
            }
            var er = { rect: "rx,ry,x,y,width,height", circle: "r,cx,cy", ellipse: "rx,ry,cx,cy", line: "x1,x2,y1,y2" };
            function tr(e, t) {
                var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f,
                    h,
                    g,
                    m,
                    v,
                    y,
                    b,
                    w,
                    x,
                    _,
                    T,
                    k = e.tagName.toLowerCase(),
                    C = 0.552284749831;
                return "path" !== k && e.getBBox
                    ? ((a = (function (e, t) {
                          var n,
                              i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                              r = [].slice.call(e.attributes),
                              o = r.length;
                          for (t = "," + t + ","; --o > -1; ) (n = r[o].nodeName.toLowerCase()), t.indexOf("," + n + ",") < 0 && i.setAttributeNS(null, n, r[o].nodeValue);
                          return i;
                      })(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
                      (T = (function (e, t) {
                          for (var n = t ? t.split(",") : [], i = {}, r = n.length; --r > -1; ) i[n[r]] = +e.getAttribute(n[r]) || 0;
                          return i;
                      })(e, er[k])),
                      "rect" === k
                          ? ((o = T.rx),
                            (s = T.ry || o),
                            (i = T.x),
                            (r = T.y),
                            (d = T.width - 2 * o),
                            (p = T.height - 2 * s),
                            (n =
                                o || s
                                    ? "M" +
                                      (v = (g = (h = i + o) + d) + o) +
                                      "," +
                                      (b = r + s) +
                                      " V" +
                                      (w = b + p) +
                                      " C" +
                                      [
                                          v,
                                          (x = w + s * C),
                                          (m = g + o * C),
                                          (_ = w + s),
                                          g,
                                          _,
                                          g - (g - h) / 3,
                                          _,
                                          h + (g - h) / 3,
                                          _,
                                          h,
                                          _,
                                          (f = i + o * (1 - C)),
                                          _,
                                          i,
                                          x,
                                          i,
                                          w,
                                          i,
                                          w - (w - b) / 3,
                                          i,
                                          b + (w - b) / 3,
                                          i,
                                          b,
                                          i,
                                          (y = r + s * (1 - C)),
                                          f,
                                          r,
                                          h,
                                          r,
                                          h + (g - h) / 3,
                                          r,
                                          g - (g - h) / 3,
                                          r,
                                          g,
                                          r,
                                          m,
                                          r,
                                          v,
                                          y,
                                          v,
                                          b,
                                      ].join(",") +
                                      "z"
                                    : "M" + (i + d) + "," + r + " v" + p + " h" + -d + " v" + -p + " h" + d + "z"))
                          : "circle" === k || "ellipse" === k
                          ? ("circle" === k ? (c = (o = s = T.r) * C) : ((o = T.rx), (c = (s = T.ry) * C)),
                            (n =
                                "M" +
                                ((i = T.cx) + o) +
                                "," +
                                (r = T.cy) +
                                " C" +
                                [i + o, r + c, i + (l = o * C), r + s, i, r + s, i - l, r + s, i - o, r + c, i - o, r, i - o, r - c, i - l, r - s, i, r - s, i + l, r - s, i + o, r - c, i + o, r].join(",") +
                                "z"))
                          : "line" === k
                          ? (n = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2)
                          : ("polyline" !== k && "polygon" !== k) ||
                            ((n = "M" + (i = (u = (e.getAttribute("points") + "").match(Ei) || []).shift()) + "," + (r = u.shift()) + " L" + u.join(",")), "polygon" === k && (n += "," + i + "," + r + "z")),
                      a.setAttribute("d", hr((a._gsRawPath = dr(n)))),
                      t && e.parentNode && (e.parentNode.insertBefore(a, e), e.parentNode.removeChild(e)),
                      a)
                    : e;
            }
            function nr(e, t, n) {
                var i,
                    r = e[t],
                    o = e[t + 2],
                    s = e[t + 4];
                return (
                    (r += (o - r) * n),
                    (r += ((o += (s - o) * n) - r) * n),
                    (i = o + (s + (e[t + 6] - s) * n - o) * n - r),
                    (r = e[t + 1]),
                    (r += ((o = e[t + 3]) - r) * n),
                    (r += ((o += ((s = e[t + 5]) - o) * n) - r) * n),
                    Yi(Ii(o + (s + (e[t + 7] - s) * n - o) * n - r, i) * Mi)
                );
            }
            function ir(e, t, n) {
                (n = void 0 === n ? 1 : Xi(n) || 0), (t = Xi(t) || 0);
                var i = Math.max(0, ~~(zi(n - t) - 1e-8)),
                    r = (function (e) {
                        for (var t = [], n = 0; n < e.length; n++) t[n] = Ki(e[n], e[n].slice(0));
                        return Ki(e, t);
                    })(e);
                if (
                    (t > n &&
                        ((t = 1 - t),
                        (n = 1 - n),
                        (function (e, t) {
                            var n = e.length;
                            for (t || e.reverse(); n--; ) e[n].reversed || Qi(e[n]);
                        })(r),
                        (r.totalLength = 0)),
                    t < 0 || n < 0)
                ) {
                    var o = Math.abs(~~Math.min(t, n)) + 1;
                    (t += o), (n += o);
                }
                r.totalLength || or(r);
                var s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f,
                    h = n > 1,
                    g = ar(r, t, Bi, !0),
                    m = ar(r, n, Fi),
                    v = m.segment,
                    y = g.segment,
                    b = m.segIndex,
                    w = g.segIndex,
                    x = m.i,
                    _ = g.i,
                    T = w === b,
                    k = x === _ && T;
                if (h || i) {
                    for (
                        s = b < w || (T && x < _) || (k && m.t < g.t),
                            Gi(r, w, _, g.t) && (w++, s || (b++, k ? ((m.t = (m.t - g.t) / (1 - g.t)), (x = 0)) : T && (x -= _))),
                            1 - (n - t) < 1e-5 ? (b = w - 1) : !m.t && b ? b-- : Gi(r, b, x, m.t) && s && w++,
                            1 === g.t && (w = (w + 1) % r.length),
                            u = [],
                            p = 1 + (d = r.length) * i,
                            f = w,
                            p += (d - w + b) % d,
                            c = 0;
                        c < p;
                        c++
                    )
                        Ji(u, r[f++ % d]);
                    r = u;
                } else if (((l = 1 === m.t ? 6 : sr(v, x, m.t)), t !== n)) for (a = sr(y, _, k ? g.t / m.t : g.t), T && (l += a), v.splice(x + l + 2), (a || _) && y.splice(0, _ + a), c = r.length; c--; ) (c < w || c > b) && r.splice(c, 1);
                else (v.angle = nr(v, x + l, 0)), (g = v[(x += l)]), (m = v[x + 1]), (v.length = v.totalLength = 0), (v.totalPoints = r.totalPoints = 8), v.push(g, m, g, m, g, m, g, m);
                return (r.totalLength = 0), r;
            }
            function rr(e, t, n) {
                (t = t || 0), e.samples || ((e.samples = []), (e.lookup = []));
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f,
                    h,
                    g,
                    m,
                    v,
                    y,
                    b,
                    w = ~~e.resolution || 12,
                    x = 1 / w,
                    _ = n ? t + 6 * n + 1 : e.length,
                    T = e[t],
                    k = e[t + 1],
                    C = t ? (t / 6) * w : 0,
                    A = e.samples,
                    S = e.lookup,
                    $ = (t ? e.minLength : qi) || qi,
                    E = A[C + n * w - 1],
                    O = t ? A[C - 1] : 0;
                for (A.length = S.length = 0, r = t + 2; r < _; r += 6) {
                    if (((o = e[r + 4] - T), (s = e[r + 2] - T), (a = e[r] - T), (u = e[r + 5] - k), (d = e[r + 3] - k), (p = e[r + 1] - k), (l = c = f = h = 0), zi(o) < 0.01 && zi(u) < 0.01 && zi(a) + zi(p) < 0.01))
                        e.length > 8 && (e.splice(r, 6), (r -= 6), (_ -= 6));
                    else
                        for (i = 1; i <= w; i++)
                            (l = c - (c = ((m = x * i) * m * o + 3 * (g = 1 - m) * (m * s + g * a)) * m)), (f = h - (h = (m * m * u + 3 * g * (m * d + g * p)) * m)), (y = ji(f * f + l * l)) < $ && ($ = y), (O += y), (A[C++] = O);
                    (T += o), (k += u);
                }
                if (E) for (E -= O; C < A.length; C++) A[C] += E;
                if (A.length && $) {
                    if (((e.totalLength = b = A[A.length - 1] || 0), (e.minLength = $), b / $ < 9999)) for (y = v = 0, i = 0; i < b; i += $) S[y++] = A[v] < i ? ++v : v;
                } else e.totalLength = A[0] = 0;
                return t ? O - A[t / 2 - 1] : O;
            }
            function or(e, t) {
                var n, i, r;
                for (r = n = i = 0; r < e.length; r++) (e[r].resolution = ~~t || 12), (i += e[r].length), (n += rr(e[r]));
                return (e.totalPoints = i), (e.totalLength = n), e;
            }
            function sr(e, t, n) {
                if (n <= 0 || n >= 1) return 0;
                var i = e[t],
                    r = e[t + 1],
                    o = e[t + 2],
                    s = e[t + 3],
                    a = e[t + 4],
                    l = e[t + 5],
                    c = i + (o - i) * n,
                    u = o + (a - o) * n,
                    d = r + (s - r) * n,
                    p = s + (l - s) * n,
                    f = c + (u - c) * n,
                    h = d + (p - d) * n,
                    g = a + (e[t + 6] - a) * n,
                    m = l + (e[t + 7] - l) * n;
                return (
                    (u += (g - u) * n),
                    (p += (m - p) * n),
                    e.splice(t + 2, 4, Yi(c), Yi(d), Yi(f), Yi(h), Yi(f + (u - f) * n), Yi(h + (p - h) * n), Yi(u), Yi(p), Yi(g), Yi(m)),
                    e.samples && e.samples.splice(((t / 6) * e.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
                    6
                );
            }
            function ar(e, t, n, i) {
                (n = n || {}), e.totalLength || or(e), (t < 0 || t > 1) && (t = Ui(t));
                var r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d = 0,
                    p = e[0];
                if (t)
                    if (1 === t) (u = 1), (c = (p = e[(d = e.length - 1)]).length - 8);
                    else {
                        if (e.length > 1) {
                            for (s = e.totalLength * t, l = c = 0; (l += e[c++].totalLength) < s; ) d = c;
                            t = (s - (a = l - (p = e[d]).totalLength)) / (l - a) || 0;
                        }
                        (r = p.samples),
                            (o = p.resolution),
                            (s = p.totalLength * t),
                            (a = (c = p.lookup.length ? p.lookup[~~(s / p.minLength)] || 0 : Vi(r, s, t)) ? r[c - 1] : 0),
                            (l = r[c]) < s && ((a = l), (l = r[++c])),
                            (u = (1 / o) * ((s - a) / (l - a) + (c % o))),
                            (c = 6 * ~~(c / o)),
                            i && 1 === u && (c + 6 < p.length ? ((c += 6), (u = 0)) : d + 1 < e.length && ((c = u = 0), (p = e[++d])));
                    }
                else (u = c = d = 0), (p = e[0]);
                return (n.t = u), (n.i = c), (n.path = e), (n.segment = p), (n.segIndex = d), n;
            }
            function lr(e, t, n, i) {
                var r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f = e[0],
                    h = i || {};
                if (((t < 0 || t > 1) && (t = Ui(t)), e.length > 1)) {
                    for (s = e.totalLength * t, l = c = 0; (l += e[c++].totalLength) < s; ) f = e[c];
                    t = (s - (a = l - f.totalLength)) / (l - a) || 0;
                }
                return (
                    (r = f.samples),
                    (o = f.resolution),
                    (s = f.totalLength * t),
                    (a = (c = f.lookup.length ? f.lookup[t < 1 ? ~~(s / f.minLength) : f.lookup.length - 1] || 0 : Vi(r, s, t)) ? r[c - 1] : 0),
                    (l = r[c]) < s && ((a = l), (l = r[++c])),
                    (p = 1 - (u = (1 / o) * ((s - a) / (l - a) + (c % o)) || 0)),
                    (d = f[(c = 6 * ~~(c / o))]),
                    (h.x = Yi((u * u * (f[c + 6] - d) + 3 * p * (u * (f[c + 4] - d) + p * (f[c + 2] - d))) * u + d)),
                    (h.y = Yi((u * u * (f[c + 7] - (d = f[c + 1])) + 3 * p * (u * (f[c + 5] - d) + p * (f[c + 3] - d))) * u + d)),
                    n && (h.angle = f.totalLength ? nr(f, c, u >= 1 ? 1 - 1e-9 : u || 1e-9) : f.angle || 0),
                    h
                );
            }
            function cr(e, t, n, i, r, o, s) {
                for (var a, l, c, u, d, p = e.length; --p > -1; ) for (l = (a = e[p]).length, c = 0; c < l; c += 2) (u = a[c]), (d = a[c + 1]), (a[c] = u * t + d * i + o), (a[c + 1] = u * n + d * r + s);
                return (e._dirty = 1), e;
            }
            function ur(e, t, n, i, r, o, s, a, l) {
                if (e !== a || t !== l) {
                    (n = zi(n)), (i = zi(i));
                    var c = (r % 360) * Pi,
                        u = Ni(c),
                        d = Li(c),
                        p = Math.PI,
                        f = 2 * p,
                        h = (e - a) / 2,
                        g = (t - l) / 2,
                        m = u * h + d * g,
                        v = -d * h + u * g,
                        y = m * m,
                        b = v * v,
                        w = y / (n * n) + b / (i * i);
                    w > 1 && ((n = ji(w) * n), (i = ji(w) * i));
                    var x = n * n,
                        _ = i * i,
                        T = (x * _ - x * b - _ * y) / (x * b + _ * y);
                    T < 0 && (T = 0);
                    var k = (o === s ? -1 : 1) * ji(T),
                        C = k * ((n * v) / i),
                        A = k * ((-i * m) / n),
                        S = (e + a) / 2 + (u * C - d * A),
                        $ = (t + l) / 2 + (d * C + u * A),
                        E = (m - C) / n,
                        O = (v - A) / i,
                        D = (-m - C) / n,
                        P = (-v - A) / i,
                        M = E * E + O * O,
                        L = (O < 0 ? -1 : 1) * Math.acos(E / ji(M)),
                        N = (E * P - O * D < 0 ? -1 : 1) * Math.acos((E * D + O * P) / ji(M * (D * D + P * P)));
                    isNaN(N) && (N = p), !s && N > 0 ? (N -= f) : s && N < 0 && (N += f), (L %= f), (N %= f);
                    var z,
                        j = Math.ceil(zi(N) / (f / 4)),
                        I = [],
                        q = N / j,
                        R = ((4 / 3) * Li(q / 2)) / (1 + Ni(q / 2)),
                        H = u * n,
                        B = d * n,
                        F = d * -i,
                        W = u * i;
                    for (z = 0; z < j; z++) (m = Ni((r = L + z * q))), (v = Li(r)), (E = Ni((r += q))), (O = Li(r)), I.push(m - R * v, v + R * m, E + R * O, O - R * E, E, O);
                    for (z = 0; z < I.length; z += 2) (m = I[z]), (v = I[z + 1]), (I[z] = m * H + v * F + S), (I[z + 1] = m * B + v * W + $);
                    return (I[z - 2] = a), (I[z - 1] = l), I;
                }
            }
            function dr(e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f,
                    h,
                    g,
                    m =
                        (e + "")
                            .replace(Oi, function (e) {
                                var t = +e;
                                return t < 1e-4 && t > -1e-4 ? 0 : t;
                            })
                            .match($i) || [],
                    v = [],
                    y = 0,
                    b = 0,
                    w = 2 / 3,
                    x = m.length,
                    _ = 0,
                    T = "ERROR: malformed path: " + e,
                    k = function (e, t, n, i) {
                        (u = (n - e) / 3), (d = (i - t) / 3), a.push(e + u, t + d, n - u, i - d, n, i);
                    };
                if (!e || !isNaN(m[0]) || isNaN(m[1])) return console.log(T), v;
                for (t = 0; t < x; t++)
                    if (((f = o), isNaN(m[t]) ? (s = (o = m[t].toUpperCase()) !== m[t]) : t--, (i = +m[t + 1]), (r = +m[t + 2]), s && ((i += y), (r += b)), t || ((l = i), (c = r)), "M" === o))
                        a && (a.length < 8 ? (v.length -= 1) : (_ += a.length)), (y = l = i), (b = c = r), (a = [i, r]), v.push(a), (t += 2), (o = "L");
                    else if ("C" === o) a || (a = [0, 0]), s || (y = b = 0), a.push(i, r, y + 1 * m[t + 3], b + 1 * m[t + 4], (y += 1 * m[t + 5]), (b += 1 * m[t + 6])), (t += 6);
                    else if ("S" === o) (u = y), (d = b), ("C" !== f && "S" !== f) || ((u += y - a[a.length - 4]), (d += b - a[a.length - 3])), s || (y = b = 0), a.push(u, d, i, r, (y += 1 * m[t + 3]), (b += 1 * m[t + 4])), (t += 4);
                    else if ("Q" === o) (u = y + (i - y) * w), (d = b + (r - b) * w), s || (y = b = 0), (y += 1 * m[t + 3]), (b += 1 * m[t + 4]), a.push(u, d, y + (i - y) * w, b + (r - b) * w, y, b), (t += 4);
                    else if ("T" === o) (u = y - a[a.length - 4]), (d = b - a[a.length - 3]), a.push(y + u, b + d, i + (y + 1.5 * u - i) * w, r + (b + 1.5 * d - r) * w, (y = i), (b = r)), (t += 2);
                    else if ("H" === o) k(y, b, (y = i), b), (t += 1);
                    else if ("V" === o) k(y, b, y, (b = i + (s ? b - y : 0))), (t += 1);
                    else if ("L" === o || "Z" === o) "Z" === o && ((i = l), (r = c), (a.closed = !0)), ("L" === o || zi(y - i) > 0.5 || zi(b - r) > 0.5) && (k(y, b, i, r), "L" === o && (t += 2)), (y = i), (b = r);
                    else if ("A" === o) {
                        if (
                            ((h = m[t + 4]),
                            (g = m[t + 5]),
                            (u = m[t + 6]),
                            (d = m[t + 7]),
                            (n = 7),
                            h.length > 1 && (h.length < 3 ? ((d = u), (u = g), n--) : ((d = g), (u = h.substr(2)), (n -= 2)), (g = h.charAt(1)), (h = h.charAt(0))),
                            (p = ur(y, b, +m[t + 1], +m[t + 2], +m[t + 3], +h, +g, (s ? y : 0) + 1 * u, (s ? b : 0) + 1 * d)),
                            (t += n),
                            p)
                        )
                            for (n = 0; n < p.length; n++) a.push(p[n]);
                        (y = a[a.length - 2]), (b = a[a.length - 1]);
                    } else console.log(T);
                return (t = a.length) < 6 ? (v.pop(), (t = 0)) : a[0] === a[t - 2] && a[1] === a[t - 1] && (a.closed = !0), (v.totalPoints = _ + t), v;
            }
            function pr(e, t) {
                void 0 === t && (t = 1);
                for (var n = e[0], i = 0, r = [n, i], o = 2; o < e.length; o += 2) r.push(n, i, e[o], (i = ((e[o] - n) * t) / 2), (n = e[o]), -i);
                return r;
            }
            function fr(e, t, n) {
                zi(e[0] - e[2]) < 1e-4 && zi(e[1] - e[3]) < 1e-4 && (e = e.slice(2));
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f,
                    h,
                    g,
                    m,
                    v = e.length - 2,
                    y = +e[0],
                    b = +e[1],
                    w = +e[2],
                    x = +e[3],
                    _ = [y, b, y, b],
                    T = w - y,
                    k = x - b,
                    C = Math.abs(e[v] - y) < 0.001 && Math.abs(e[v + 1] - b) < 0.001;
                for (isNaN(n) && (n = Math.PI / 10), C && (e.push(w, x), (w = y), (x = b), (y = e[v - 2]), (b = e[v - 1]), e.unshift(y, b), (v += 4)), t = t || 0 === t ? +t : 1, a = 2; a < v; a += 2)
                    (i = y),
                        (r = b),
                        (y = w),
                        (b = x),
                        (w = +e[a + 2]),
                        (x = +e[a + 3]),
                        (y === w && b === x) ||
                            ((h = (l = T) * l + (u = k) * u),
                            (g = (T = w - y) * T + (k = x - b) * k),
                            (m = (c = w - i) * c + (d = x - r) * d),
                            (f = ((o = Math.acos((h + g - m) / ji(4 * h * g))) / Math.PI) * t),
                            (p = ji(h) * f),
                            (f *= ji(g)),
                            (y === i && b === r) ||
                                (o > n
                                    ? ((s = Ii(d, c)), _.push(Yi(y - Ni(s) * p), Yi(b - Li(s) * p), Yi(y), Yi(b), Yi(y + Ni(s) * f), Yi(b + Li(s) * f)))
                                    : ((s = Ii(u, l)), _.push(Yi(y - Ni(s) * p), Yi(b - Li(s) * p)), (s = Ii(k, T)), _.push(Yi(y), Yi(b), Yi(y + Ni(s) * f), Yi(b + Li(s) * f)))));
                return y !== w || b !== x || _.length < 4 ? _.push(Yi(w), Yi(x), Yi(w), Yi(x)) : (_.length -= 2), C && (_.splice(0, 6), (_.length = _.length - 6)), _;
            }
            function hr(e) {
                Hi(e[0]) && (e = [e]);
                var t,
                    n,
                    i,
                    r,
                    o = "",
                    s = e.length;
                for (n = 0; n < s; n++) {
                    for (r = e[n], o += "M" + Yi(r[0]) + "," + Yi(r[1]) + " C", t = r.length, i = 2; i < t; i++) o += Yi(r[i++]) + "," + Yi(r[i++]) + " " + Yi(r[i++]) + "," + Yi(r[i++]) + " " + Yi(r[i++]) + "," + Yi(r[i]) + " ";
                    r.closed && (o += "z");
                }
                return o;
            }
            var gr,
                mr,
                vr,
                yr,
                br,
                wr,
                xr,
                _r,
                Tr,
                kr = "transform",
                Cr = kr + "Origin",
                Ar = function (e) {
                    var t = e.ownerDocument || e;
                    !(kr in e.style) && "msTransform" in e.style && (Cr = (kr = "msTransform") + "Origin");
                    for (; t.parentNode && (t = t.parentNode); );
                    if (((mr = window), (xr = new Lr()), t)) {
                        (gr = t), (vr = t.documentElement), (yr = t.body), ((_r = gr.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none");
                        var n = t.createElement("div"),
                            i = t.createElement("div");
                        yr.appendChild(n), n.appendChild(i), (n.style.position = "static"), (n.style[kr] = "translate3d(0,0,1px)"), (Tr = i.offsetParent !== n), yr.removeChild(n);
                    }
                    return t;
                },
                Sr = [],
                $r = [],
                Er = function (e) {
                    return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null);
                },
                Or = function e(t) {
                    return "fixed" === mr.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0);
                },
                Dr = function e(t, n) {
                    if (t.parentNode && (gr || Ar(t))) {
                        var i = Er(t),
                            r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                            o = i ? (n ? "rect" : "g") : "div",
                            s = 2 !== n ? 0 : 100,
                            a = 3 === n ? 100 : 0,
                            l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                            c = gr.createElementNS ? gr.createElementNS(r.replace(/^https/, "http"), o) : gr.createElement(o);
                        return (
                            n &&
                                (i
                                    ? (wr || (wr = e(t)), c.setAttribute("width", 0.01), c.setAttribute("height", 0.01), c.setAttribute("transform", "translate(" + s + "," + a + ")"), wr.appendChild(c))
                                    : (br || ((br = e(t)).style.cssText = l), (c.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px"), br.appendChild(c))),
                            c
                        );
                    }
                    throw "Need document and parent.";
                },
                Pr = function (e, t) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l = Er(e),
                        c = e === l,
                        u = l ? Sr : $r,
                        d = e.parentNode;
                    if (e === mr) return e;
                    if ((u.length || u.push(Dr(e, 1), Dr(e, 2), Dr(e, 3)), (n = l ? wr : br), l))
                        c
                            ? ((r = (function (e) {
                                  var t,
                                      n = e.getCTM();
                                  return (
                                      n || ((t = e.style[kr]), (e.style[kr] = "none"), e.appendChild(_r), (n = _r.getCTM()), e.removeChild(_r), t ? (e.style[kr] = t) : e.style.removeProperty(kr.replace(/([A-Z])/g, "-$1").toLowerCase())),
                                      n || xr.clone()
                                  );
                              })(e)),
                              (o = -r.e / r.a),
                              (s = -r.f / r.d),
                              (i = xr))
                            : ((r = e.getBBox()),
                              (i = (i = e.transform ? e.transform.baseVal : {}).numberOfItems
                                  ? i.numberOfItems > 1
                                      ? (function (e) {
                                            for (var t = new Lr(), n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
                                            return t;
                                        })(i)
                                      : i.getItem(0).matrix
                                  : xr),
                              (o = i.a * r.x + i.c * r.y),
                              (s = i.b * r.x + i.d * r.y)),
                            t && "g" === e.tagName.toLowerCase() && (o = s = 0),
                            (c ? l : d).appendChild(n),
                            n.setAttribute("transform", "matrix(" + i.a + "," + i.b + "," + i.c + "," + i.d + "," + (i.e + o) + "," + (i.f + s) + ")");
                    else {
                        if (((o = s = 0), Tr)) for (i = e.offsetParent, r = e; r && (r = r.parentNode) && r !== i && r.parentNode; ) (mr.getComputedStyle(r)[kr] + "").length > 4 && ((o = r.offsetLeft), (s = r.offsetTop), (r = 0));
                        if ("absolute" !== (a = mr.getComputedStyle(e)).position && "fixed" !== a.position) for (i = e.offsetParent; d && d !== i; ) (o += d.scrollLeft || 0), (s += d.scrollTop || 0), (d = d.parentNode);
                        ((r = n.style).top = e.offsetTop - s + "px"), (r.left = e.offsetLeft - o + "px"), (r[kr] = a[kr]), (r[Cr] = a[Cr]), (r.position = "fixed" === a.position ? "fixed" : "absolute"), e.parentNode.appendChild(n);
                    }
                    return n;
                },
                Mr = function (e, t, n, i, r, o, s) {
                    return (e.a = t), (e.b = n), (e.c = i), (e.d = r), (e.e = o), (e.f = s), e;
                },
                Lr = (function () {
                    function e(e, t, n, i, r, o) {
                        void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === o && (o = 0), Mr(this, e, t, n, i, r, o);
                    }
                    var t = e.prototype;
                    return (
                        (t.inverse = function () {
                            var e = this.a,
                                t = this.b,
                                n = this.c,
                                i = this.d,
                                r = this.e,
                                o = this.f,
                                s = e * i - t * n || 1e-10;
                            return Mr(this, i / s, -t / s, -n / s, e / s, (n * o - i * r) / s, -(e * o - t * r) / s);
                        }),
                        (t.multiply = function (e) {
                            var t = this.a,
                                n = this.b,
                                i = this.c,
                                r = this.d,
                                o = this.e,
                                s = this.f,
                                a = e.a,
                                l = e.c,
                                c = e.b,
                                u = e.d,
                                d = e.e,
                                p = e.f;
                            return Mr(this, a * t + c * i, a * n + c * r, l * t + u * i, l * n + u * r, o + d * t + p * i, s + d * n + p * r);
                        }),
                        (t.clone = function () {
                            return new e(this.a, this.b, this.c, this.d, this.e, this.f);
                        }),
                        (t.equals = function (e) {
                            var t = this.a,
                                n = this.b,
                                i = this.c,
                                r = this.d,
                                o = this.e,
                                s = this.f;
                            return t === e.a && n === e.b && i === e.c && r === e.d && o === e.e && s === e.f;
                        }),
                        (t.apply = function (e, t) {
                            void 0 === t && (t = {});
                            var n = e.x,
                                i = e.y,
                                r = this.a,
                                o = this.b,
                                s = this.c,
                                a = this.d,
                                l = this.e,
                                c = this.f;
                            return (t.x = n * r + i * s + l || 0), (t.y = n * o + i * a + c || 0), t;
                        }),
                        e
                    );
                })();
            function Nr(e, t, n, i) {
                if (!e || !e.parentNode || (gr || Ar(e)).documentElement === e) return new Lr();
                var r = (function (e) {
                        for (var t, n; e && e !== yr; )
                            (n = e._gsap) && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && ((n.scaleX = n.scaleY = 1e-4), n.renderTransform(1, n), t ? t.push(n) : (t = [n])), (e = e.parentNode);
                        return t;
                    })(e),
                    o = Er(e) ? Sr : $r,
                    s = Pr(e, n),
                    a = o[0].getBoundingClientRect(),
                    l = o[1].getBoundingClientRect(),
                    c = o[2].getBoundingClientRect(),
                    u = s.parentNode,
                    d = !i && Or(e),
                    p = new Lr(
                        (l.left - a.left) / 100,
                        (l.top - a.top) / 100,
                        (c.left - a.left) / 100,
                        (c.top - a.top) / 100,
                        a.left + (d ? 0 : mr.pageXOffset || gr.scrollLeft || vr.scrollLeft || yr.scrollLeft || 0),
                        a.top + (d ? 0 : mr.pageYOffset || gr.scrollTop || vr.scrollTop || yr.scrollTop || 0)
                    );
                if ((u.removeChild(s), r)) for (a = r.length; a--; ) ((l = r[a]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
                return t ? p.inverse() : p;
            }
            var zr,
                jr,
                Ir,
                qr,
                Rr = "x,translateX,left,marginLeft,xPercent".split(","),
                Hr = "y,translateY,top,marginTop,yPercent".split(","),
                Br = Math.PI / 180,
                Fr = function (e, t, n, i) {
                    for (var r = t.length, o = 2 === i ? 0 : i, s = 0; s < r; s++) (e[o] = parseFloat(t[s][n])), 2 === i && (e[o + 1] = 0), (o += 2);
                    return e;
                },
                Wr = function (e, t, n) {
                    return parseFloat(e._gsap.get(e, t, n || "px")) || 0;
                },
                Ur = function (e) {
                    var t,
                        n = e[0],
                        i = e[1];
                    for (t = 2; t < e.length; t += 2) (n = e[t] += n), (i = e[t + 1] += i);
                },
                Yr = function (e, t, n, i, r, o, s, a, l) {
                    "cubic" === s.type ? (t = [t]) : (!1 !== s.fromCurrent && t.unshift(Wr(n, i, a), r ? Wr(n, r, l) : 0), s.relative && Ur(t), (t = [(r ? fr : pr)(t, s.curviness)]));
                    return (t = o(Jr(t, n, s))), Zr(e, n, i, t, "x", a), r && Zr(e, n, r, t, "y", l), or(t, s.resolution || (0 === s.curviness ? 20 : 12));
                },
                Xr = function (e) {
                    return e;
                },
                Gr = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
                Vr = function (e, t, n) {
                    var i,
                        r = Nr(e),
                        o = 0,
                        s = 0;
                    return (
                        "svg" === (e.tagName + "").toLowerCase() ? (i = e.viewBox.baseVal).width || (i = { width: +e.getAttribute("width"), height: +e.getAttribute("height") }) : (i = t && e.getBBox && e.getBBox()),
                        t && "auto" !== t && ((o = t.push ? t[0] * (i ? i.width : e.offsetWidth || 0) : t.x), (s = t.push ? t[1] * (i ? i.height : e.offsetHeight || 0) : t.y)),
                        n.apply(o || s ? r.apply({ x: o, y: s }) : { x: r.e, y: r.f })
                    );
                },
                Kr = function (e, t, n, i) {
                    var r,
                        o = Nr(e.parentNode, !0, !0),
                        s = o.clone().multiply(Nr(t)),
                        a = Vr(e, n, o),
                        l = Vr(t, i, o),
                        c = l.x,
                        u = l.y;
                    return (
                        (s.e = s.f = 0),
                        "auto" === i && t.getTotalLength && "path" === t.tagName.toLowerCase() && ((r = t.getAttribute("d").match(Gr) || []), (c += (r = s.apply({ x: +r[0], y: +r[1] })).x), (u += r.y)),
                        (r || (t.getBBox && e.getBBox && t.ownerSVGElement === e.ownerSVGElement)) && ((c -= (r = s.apply(t.getBBox())).x), (u -= r.y)),
                        (s.e = c - a.x),
                        (s.f = u - a.y),
                        s
                    );
                },
                Jr = function (e, t, n) {
                    var i,
                        r,
                        o,
                        s = n.align,
                        a = n.matrix,
                        l = n.offsetX,
                        c = n.offsetY,
                        u = n.alignOrigin,
                        d = e[0][0],
                        p = e[0][1],
                        f = Wr(t, "x"),
                        h = Wr(t, "y");
                    return e && e.length
                        ? (s &&
                              ("self" === s || (i = qr(s)[0] || t) === t
                                  ? cr(e, 1, 0, 0, 1, f - d, h - p)
                                  : (u && !1 !== u[2] ? zr.set(t, { transformOrigin: 100 * u[0] + "% " + 100 * u[1] + "%" }) : (u = [Wr(t, "xPercent") / -100, Wr(t, "yPercent") / -100]),
                                    (o = (r = Kr(t, i, u, "auto")).apply({ x: d, y: p })),
                                    cr(e, r.a, r.b, r.c, r.d, f + r.e - (o.x - r.e), h + r.f - (o.y - r.f)))),
                          a ? cr(e, a.a, a.b, a.c, a.d, a.e, a.f) : (l || c) && cr(e, 1, 0, 0, 1, l || 0, c || 0),
                          e)
                        : Zi("M0,0L0,0");
                },
                Zr = function (e, t, n, i, r, o) {
                    var s = t._gsap,
                        a = s.harness,
                        l = a && a.aliases && a.aliases[n],
                        c = l && l.indexOf(",") < 0 ? l : n,
                        u = (e._pt = new jr(e._pt, t, c, 0, 0, Xr, 0, s.set(t, c, e)));
                    (u.u = Ir(s.get(t, c, o)) || 0), (u.path = i), (u.pp = r), e._props.push(c);
                },
                Qr = {
                    version: "3.8.0",
                    name: "motionPath",
                    register: function (e, t, n) {
                        (Ir = (zr = e).utils.getUnit), (qr = zr.utils.toArray), (jr = n);
                    },
                    init: function (e, t) {
                        if (!zr) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                        ("object" == typeof t && !t.style && t.path) || (t = { path: t });
                        var n,
                            i,
                            r,
                            o,
                            s = [],
                            a = t,
                            l = a.path,
                            c = a.autoRotate,
                            u = a.unitX,
                            d = a.unitY,
                            p = a.x,
                            f = a.y,
                            h = l[0],
                            g =
                                ((r = t.start),
                                (o = "end" in t ? t.end : 1),
                                function (e) {
                                    return r || 1 !== o ? ir(e, r, o) : e;
                                });
                        if (
                            ((this.rawPaths = s),
                            (this.target = e),
                            (this.rotate = c || 0 === c) &&
                                ((this.rOffset = parseFloat(c) || 0),
                                (this.radians = !!t.useRadians),
                                (this.rProp = t.rotation || "rotation"),
                                (this.rSet = e._gsap.set(e, this.rProp, this)),
                                (this.ru = Ir(e._gsap.get(e, this.rProp)) || 0)),
                            Array.isArray(l) && !("closed" in l) && "number" != typeof h)
                        ) {
                            for (i in h) !p && ~Rr.indexOf(i) ? (p = i) : !f && ~Hr.indexOf(i) && (f = i);
                            for (i in (p && f ? s.push(Yr(this, Fr(Fr([], l, p, 0), l, f, 1), e, p, f, g, t, u || Ir(l[0][p]), d || Ir(l[0][f]))) : (p = f = 0), h))
                                i !== p && i !== f && s.push(Yr(this, Fr([], l, i, 2), e, i, 0, g, t, Ir(l[0][i])));
                        } else or((n = g(Jr(Zi(t.path), e, t))), t.resolution), s.push(n), Zr(this, e, t.x || "x", n, "x", t.unitX || "px"), Zr(this, e, t.y || "y", n, "y", t.unitY || "px");
                    },
                    render: function (e, t) {
                        var n = t.rawPaths,
                            i = n.length,
                            r = t._pt;
                        for (e > 1 ? (e = 1) : e < 0 && (e = 0); i--; ) lr(n[i], e, !i && t.rotate, n[i]);
                        for (; r; ) r.set(r.t, r.p, r.path[r.pp] + r.u, r.d, e), (r = r._next);
                        t.rotate && t.rSet(t.target, t.rProp, n[0].angle * (t.radians ? Br : 1) + t.rOffset + t.ru, t, e);
                    },
                    getLength: function (e) {
                        return or(Zi(e)).totalLength;
                    },
                    sliceRawPath: ir,
                    getRawPath: Zi,
                    pointsToSegment: fr,
                    stringToRawPath: dr,
                    rawPathToString: hr,
                    transformRawPath: cr,
                    getGlobalMatrix: Nr,
                    getPositionOnPath: lr,
                    cacheRawPathMeasurements: or,
                    convertToPath: function (e, t) {
                        return qr(e).map(function (e) {
                            return tr(e, !1 !== t);
                        });
                    },
                    convertCoordinates: function (e, t, n) {
                        var i = Nr(t, !0, !0).multiply(Nr(e));
                        return n ? i.apply(n) : i;
                    },
                    getAlignMatrix: Kr,
                    getRelativePosition: function (e, t, n, i) {
                        var r = Kr(e, t, n, i);
                        return { x: r.e, y: r.f };
                    },
                    arrayToRawPath: function (e, t) {
                        var n = Fr(Fr([], e, (t = t || {}).x || "x", 0), e, t.y || "y", 1);
                        return t.relative && Ur(n), ["cubic" === t.type ? n : fr(n, t.curviness)];
                    },
                };
            (zr || ("undefined" != typeof window && (zr = window.gsap) && zr.registerPlugin && zr)) && zr.registerPlugin(Qr);
            var eo,
                to,
                no,
                io,
                ro,
                oo,
                so,
                ao = function () {
                    return "undefined" != typeof window;
                },
                lo = function () {
                    return eo || (ao() && (eo = window.gsap) && eo.registerPlugin && eo);
                },
                co = function (e) {
                    return "string" == typeof e;
                },
                uo = function (e) {
                    return "function" == typeof e;
                },
                po = function (e, t) {
                    var n = "x" === t ? "Width" : "Height",
                        i = "scroll" + n,
                        r = "client" + n;
                    return e === no || e === io || e === ro ? Math.max(io[i], ro[i]) - (no["inner" + n] || io[r] || ro[r]) : e[i] - e["offset" + n];
                },
                fo = function (e, t) {
                    var n = "scroll" + ("x" === t ? "Left" : "Top");
                    return (
                        e === no && (null != e.pageXOffset ? (n = "page" + t.toUpperCase() + "Offset") : (e = null != io[n] ? io : ro)),
                        function () {
                            return e[n];
                        }
                    );
                },
                ho = function (e, t) {
                    if (!(e = oo(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 };
                    var n = e.getBoundingClientRect(),
                        i = !t || t === no || t === ro,
                        r = i ? { top: io.clientTop - (no.pageYOffset || io.scrollTop || ro.scrollTop || 0), left: io.clientLeft - (no.pageXOffset || io.scrollLeft || ro.scrollLeft || 0) } : t.getBoundingClientRect(),
                        o = { x: n.left - r.left, y: n.top - r.top };
                    return !i && t && ((o.x += fo(t, "x")()), (o.y += fo(t, "y")())), o;
                },
                go = function (e, t, n, i, r) {
                    return isNaN(e) || "object" == typeof e
                        ? co(e) && "=" === e.charAt(1)
                            ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + i - r
                            : "max" === e
                            ? po(t, n) - r
                            : Math.min(po(t, n), ho(e, t)[n] - r)
                        : parseFloat(e) - r;
                },
                mo = function () {
                    (eo = lo()), ao() && eo && document.body && ((no = window), (ro = document.body), (io = document.documentElement), (oo = eo.utils.toArray), eo.config({ autoKillThreshold: 7 }), (so = eo.config()), (to = 1));
                },
                vo = {
                    version: "3.8.0",
                    name: "scrollTo",
                    rawVars: 1,
                    register: function (e) {
                        (eo = e), mo();
                    },
                    init: function (e, t, n, i, r) {
                        to || mo();
                        var o = this,
                            s = eo.getProperty(e, "scrollSnapType");
                        (o.isWin = e === no),
                            (o.target = e),
                            (o.tween = n),
                            (t = (function (e, t, n, i) {
                                if ((uo(e) && (e = e(t, n, i)), "object" != typeof e)) return co(e) && "max" !== e && "=" !== e.charAt(1) ? { x: e, y: e } : { y: e };
                                if (e.nodeType) return { y: e, x: e };
                                var r,
                                    o = {};
                                for (r in e) o[r] = "onAutoKill" !== r && uo(e[r]) ? e[r](t, n, i) : e[r];
                                return o;
                            })(t, i, e, r)),
                            (o.vars = t),
                            (o.autoKill = !!t.autoKill),
                            (o.getX = fo(e, "x")),
                            (o.getY = fo(e, "y")),
                            (o.x = o.xPrev = o.getX()),
                            (o.y = o.yPrev = o.getY()),
                            s && "none" !== s && ((o.snap = 1), (o.snapInline = e.style.scrollSnapType), (e.style.scrollSnapType = "none")),
                            null != t.x ? (o.add(o, "x", o.x, go(t.x, e, "x", o.x, t.offsetX || 0), i, r), o._props.push("scrollTo_x")) : (o.skipX = 1),
                            null != t.y ? (o.add(o, "y", o.y, go(t.y, e, "y", o.y, t.offsetY || 0), i, r), o._props.push("scrollTo_y")) : (o.skipY = 1);
                    },
                    render: function (e, t) {
                        for (var n, i, r, o, s, a = t._pt, l = t.target, c = t.tween, u = t.autoKill, d = t.xPrev, p = t.yPrev, f = t.isWin, h = t.snap, g = t.snapInline; a; ) a.r(e, a.d), (a = a._next);
                        (n = f || !t.skipX ? t.getX() : d),
                            (r = (i = f || !t.skipY ? t.getY() : p) - p),
                            (o = n - d),
                            (s = so.autoKillThreshold),
                            t.x < 0 && (t.x = 0),
                            t.y < 0 && (t.y = 0),
                            u &&
                                (!t.skipX && (o > s || o < -s) && n < po(l, "x") && (t.skipX = 1),
                                !t.skipY && (r > s || r < -s) && i < po(l, "y") && (t.skipY = 1),
                                t.skipX && t.skipY && (c.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))),
                            f ? no.scrollTo(t.skipX ? n : t.x, t.skipY ? i : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)),
                            !h ||
                                (1 !== e && 0 !== e) ||
                                ((i = l.scrollTop), (n = l.scrollLeft), g ? (l.style.scrollSnapType = g) : l.style.removeProperty("scroll-snap-type"), (l.scrollTop = i + 1), (l.scrollLeft = n + 1), (l.scrollTop = i), (l.scrollLeft = n)),
                            (t.xPrev = t.x),
                            (t.yPrev = t.y);
                    },
                    kill: function (e) {
                        var t = "scrollTo" === e;
                        (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1);
                    },
                };
            (vo.max = po), (vo.getOffset = ho), (vo.buildGetter = fo), lo() && eo.registerPlugin(vo);
            var yo,
                bo,
                wo,
                xo,
                _o,
                To,
                ko,
                Co,
                Ao,
                So,
                $o,
                Eo,
                Oo,
                Do,
                Po,
                Mo,
                Lo,
                No,
                zo,
                jo,
                Io,
                qo,
                Ro,
                Ho,
                Bo,
                Fo,
                Wo,
                Uo,
                Yo = 1,
                Xo = [],
                Go = [],
                Vo = Date.now,
                Ko = Vo(),
                Jo = 0,
                Zo = 1,
                Qo = function (e) {
                    return e;
                },
                es = function (e) {
                    return $o(e)[0] || (us(e) ? console.warn("Element not found:", e) : null);
                },
                ts = function (e) {
                    return Math.round(1e5 * e) / 1e5 || 0;
                },
                ns = function () {
                    return "undefined" != typeof window;
                },
                is = function () {
                    return yo || (ns() && (yo = window.gsap) && yo.registerPlugin && yo);
                },
                rs = function (e) {
                    return !!~ko.indexOf(e);
                },
                os = function (e, t) {
                    return ~Xo.indexOf(e) && Xo[Xo.indexOf(e) + 1][t];
                },
                ss = function (e, t) {
                    var n = t.s,
                        i = t.sc,
                        r = Go.indexOf(e),
                        o = i === js.sc ? 1 : 2;
                    return (
                        !~r && (r = Go.push(e) - 1),
                        Go[r + o] ||
                            (Go[r + o] =
                                os(e, n) ||
                                (rs(e)
                                    ? i
                                    : function (t) {
                                          return arguments.length ? (e[n] = t) : e[n];
                                      }))
                    );
                },
                as = function (e) {
                    return (
                        os(e, "getBoundingClientRect") ||
                        (rs(e)
                            ? function () {
                                  return (ka.width = wo.innerWidth), (ka.height = wo.innerHeight), ka;
                              }
                            : function () {
                                  return Rs(e);
                              })
                    );
                },
                ls = function (e, t) {
                    var n = t.s,
                        i = t.d2,
                        r = t.d,
                        o = t.a;
                    return (n = "scroll" + i) && (o = os(e, n)) ? o() - as(e)()[r] : rs(e) ? (To[n] || _o[n]) - (wo["inner" + i] || _o["client" + i] || To["client" + i]) : e[n] - e["offset" + i];
                },
                cs = function (e, t) {
                    for (var n = 0; n < Io.length; n += 3) (!t || ~t.indexOf(Io[n + 1])) && e(Io[n], Io[n + 1], Io[n + 2]);
                },
                us = function (e) {
                    return "string" == typeof e;
                },
                ds = function (e) {
                    return "function" == typeof e;
                },
                ps = function (e) {
                    return "number" == typeof e;
                },
                fs = function (e) {
                    return "object" == typeof e;
                },
                hs = function (e) {
                    return ds(e) && e();
                },
                gs = function (e, t) {
                    return function () {
                        var n = hs(e),
                            i = hs(t);
                        return function () {
                            hs(n), hs(i);
                        };
                    };
                },
                ms = function (e, t, n) {
                    return e && e.progress(t ? 0 : 1) && n && e.pause();
                },
                vs = function (e, t) {
                    var n = t(e);
                    n && n.totalTime && (e.callbackAnimation = n);
                },
                ys = Math.abs,
                bs = "scrollLeft",
                ws = "scrollTop",
                xs = "left",
                _s = "top",
                Ts = "right",
                ks = "bottom",
                Cs = "width",
                As = "height",
                Ss = "Right",
                $s = "Left",
                Es = "Top",
                Os = "Bottom",
                Ds = "padding",
                Ps = "margin",
                Ms = "Width",
                Ls = "Height",
                Ns = "px",
                zs = {
                    s: bs,
                    p: xs,
                    p2: $s,
                    os: Ts,
                    os2: Ss,
                    d: Cs,
                    d2: Ms,
                    a: "x",
                    sc: function (e) {
                        return arguments.length ? wo.scrollTo(e, js.sc()) : wo.pageXOffset || xo.scrollLeft || _o.scrollLeft || To.scrollLeft || 0;
                    },
                },
                js = {
                    s: ws,
                    p: _s,
                    p2: Es,
                    os: ks,
                    os2: Os,
                    d: As,
                    d2: Ls,
                    a: "y",
                    op: zs,
                    sc: function (e) {
                        return arguments.length ? wo.scrollTo(zs.sc(), e) : wo.pageYOffset || xo.scrollTop || _o.scrollTop || To.scrollTop || 0;
                    },
                },
                Is = function (e) {
                    return wo.getComputedStyle(e);
                },
                qs = function (e, t) {
                    for (var n in t) n in e || (e[n] = t[n]);
                    return e;
                },
                Rs = function (e, t) {
                    var n = t && "matrix(1, 0, 0, 1, 0, 0)" !== Is(e)[Lo] && yo.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                        i = e.getBoundingClientRect();
                    return n && n.progress(0).kill(), i;
                },
                Hs = function (e, t) {
                    var n = t.d2;
                    return e["offset" + n] || e["client" + n] || 0;
                },
                Bs = function (e) {
                    var t,
                        n = [],
                        i = e.labels,
                        r = e.duration();
                    for (t in i) n.push(i[t] / r);
                    return n;
                },
                Fs = function (e) {
                    var t = yo.utils.snap(e),
                        n =
                            Array.isArray(e) &&
                            e.slice(0).sort(function (e, t) {
                                return e - t;
                            });
                    return n
                        ? function (e, i) {
                              var r;
                              if (!i) return t(e);
                              if (i > 0) {
                                  for (e -= 1e-4, r = 0; r < n.length; r++) if (n[r] >= e) return n[r];
                                  return n[r - 1];
                              }
                              for (r = n.length, e += 1e-4; r--; ) if (n[r] <= e) return n[r];
                              return n[0];
                          }
                        : function (n, i) {
                              var r = t(n);
                              return !i || Math.abs(r - n) < 0.001 || r - n < 0 == i < 0 ? r : t(i < 0 ? n - e : n + e);
                          };
                },
                Ws = function (e, t, n, i) {
                    return n.split(",").forEach(function (n) {
                        return e(t, n, i);
                    });
                },
                Us = function (e, t, n) {
                    return e.addEventListener(t, n, { passive: !0 });
                },
                Ys = function (e, t, n) {
                    return e.removeEventListener(t, n);
                },
                Xs = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
                Gs = { toggleActions: "play", anticipatePin: 0 },
                Vs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
                Ks = function (e, t) {
                    if (us(e)) {
                        var n = e.indexOf("="),
                            i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
                        ~n && (e.indexOf("%") > n && (i *= t / 100), (e = e.substr(0, n - 1))), (e = i + (e in Vs ? Vs[e] * t : ~e.indexOf("%") ? (parseFloat(e) * t) / 100 : parseFloat(e) || 0));
                    }
                    return e;
                },
                Js = function (e, t, n, i, r, o, s, a) {
                    var l = r.startColor,
                        c = r.endColor,
                        u = r.fontSize,
                        d = r.indent,
                        p = r.fontWeight,
                        f = xo.createElement("div"),
                        h = rs(n) || "fixed" === os(n, "pinType"),
                        g = -1 !== e.indexOf("scroller"),
                        m = h ? To : n,
                        v = -1 !== e.indexOf("start"),
                        y = v ? l : c,
                        b =
                            "border-color:" +
                            y +
                            ";font-size:" +
                            u +
                            ";color:" +
                            y +
                            ";font-weight:" +
                            p +
                            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return (
                        (b += "position:" + ((g || a) && h ? "fixed;" : "absolute;")),
                        (g || a || !h) && (b += (i === js ? Ts : ks) + ":" + (o + parseFloat(d)) + "px;"),
                        s && (b += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
                        (f._isStart = v),
                        f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
                        (f.style.cssText = b),
                        (f.innerText = t || 0 === t ? e + "-" + t : e),
                        m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f),
                        (f._offset = f["offset" + i.op.d2]),
                        Zs(f, 0, i, v),
                        f
                    );
                },
                Zs = function (e, t, n, i) {
                    var r = { display: "block" },
                        o = n[i ? "os2" : "p2"],
                        s = n[i ? "p2" : "os2"];
                    (e._isFlipped = i), (r[n.a + "Percent"] = i ? -100 : 0), (r[n.a] = i ? "1px" : 0), (r["border" + o + Ms] = 1), (r["border" + s + Ms] = 0), (r[n.p] = t + "px"), yo.set(e, r);
                },
                Qs = [],
                ea = {},
                ta = function () {
                    return Vo() - Jo > 20 && va();
                },
                na = function () {
                    var e = Vo();
                    Jo !== e ? (va(), Jo || ca("scrollStart"), (Jo = e)) : So || (So = Ao(va));
                },
                ia = function () {
                    return !Po && !Ho && !xo.fullscreenElement && Co.restart(!0);
                },
                ra = {},
                oa = [],
                sa = [],
                aa = function (e) {
                    var t,
                        n = yo.ticker.frame,
                        i = [],
                        r = 0;
                    if (Wo !== n || Yo) {
                        for (pa(); r < sa.length; r += 4) (t = wo.matchMedia(sa[r]).matches) !== sa[r + 3] && ((sa[r + 3] = t), t ? i.push(r) : pa(1, sa[r]) || (ds(sa[r + 2]) && sa[r + 2]()));
                        for (da(), r = 0; r < i.length; r++) (t = i[r]), (Fo = sa[t]), (sa[t + 2] = sa[t + 1](e));
                        (Fo = 0), bo && ha(0, 1), (Wo = n), ca("matchMedia");
                    }
                },
                la = function e() {
                    return Ys(Ea, "scrollEnd", e) || ha(!0);
                },
                ca = function (e) {
                    return (
                        (ra[e] &&
                            ra[e].map(function (e) {
                                return e();
                            })) ||
                        oa
                    );
                },
                ua = [],
                da = function (e) {
                    for (var t = 0; t < ua.length; t += 5) (e && ua[t + 4] !== e) || ((ua[t].style.cssText = ua[t + 1]), ua[t].getBBox && ua[t].setAttribute("transform", ua[t + 2] || ""), (ua[t + 3].uncache = 1));
                },
                pa = function (e, t) {
                    var n;
                    for (No = 0; No < Qs.length; No++) (n = Qs[No]), (t && n.media !== t) || (e ? n.kill(1) : n.revert());
                    t && da(t), t || ca("revert");
                },
                fa = function () {
                    return Go.forEach(function (e) {
                        return "function" == typeof e && (e.rec = 0);
                    });
                },
                ha = function (e, t) {
                    if (!Jo || e) {
                        Uo = !0;
                        var n = ca("refreshInit");
                        qo && Ea.sort(),
                            t || pa(),
                            Qs.forEach(function (e) {
                                return e.refresh();
                            }),
                            n.forEach(function (e) {
                                return e && e.render && e.render(-1);
                            }),
                            fa(),
                            Co.pause(),
                            (Uo = !1),
                            ca("refresh");
                    } else Us(Ea, "scrollEnd", la);
                },
                ga = 0,
                ma = 1,
                va = function () {
                    if (!Uo) {
                        var e = Qs.length,
                            t = Vo(),
                            n = t - Ko >= 50,
                            i = e && Qs[0].scroll();
                        if (((ma = ga > i ? -1 : 1), (ga = i), n && (Jo && !Mo && t - Jo > 200 && ((Jo = 0), ca("scrollEnd")), (Oo = Ko), (Ko = t)), ma < 0)) {
                            for (No = e; No-- > 0; ) Qs[No] && Qs[No].update(0, n);
                            ma = 1;
                        } else for (No = 0; No < e; No++) Qs[No] && Qs[No].update(0, n);
                        So = 0;
                    }
                },
                ya = [
                    xs,
                    _s,
                    ks,
                    Ts,
                    "marginBottom",
                    "marginRight",
                    "marginTop",
                    "marginLeft",
                    "display",
                    "flexShrink",
                    "float",
                    "zIndex",
                    "grid-column-start",
                    "grid-column-end",
                    "grid-row-start",
                    "grid-row-end",
                    "grid-area",
                    "justify-self",
                    "align-self",
                    "place-self",
                ],
                ba = ya.concat([Cs, As, "boxSizing", "maxWidth", "maxHeight", "position", Ps, Ds, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
                wa = function (e, t, n, i) {
                    if (e.parentNode !== t) {
                        for (var r, o = ya.length, s = t.style, a = e.style; o--; ) s[(r = ya[o])] = n[r];
                        (s.position = "absolute" === n.position ? "absolute" : "relative"),
                            "inline" === n.display && (s.display = "inline-block"),
                            (a.bottom = a.right = "auto"),
                            (s.overflow = "visible"),
                            (s.boxSizing = "border-box"),
                            (s.width = Hs(e, zs) + Ns),
                            (s.height = Hs(e, js) + Ns),
                            (s.padding = a.margin = a.top = a.left = "0"),
                            _a(i),
                            (a.width = a.maxWidth = n.width),
                            (a.height = a.maxHeight = n.height),
                            (a.padding = n.padding),
                            e.parentNode.insertBefore(t, e),
                            t.appendChild(e);
                    }
                },
                xa = /([A-Z])/g,
                _a = function (e) {
                    if (e) {
                        var t,
                            n,
                            i = e.t.style,
                            r = e.length,
                            o = 0;
                        for ((e.t._gsap || yo.core.getCache(e.t)).uncache = 1; o < r; o += 2) (n = e[o + 1]), (t = e[o]), n ? (i[t] = n) : i[t] && i.removeProperty(t.replace(xa, "-$1").toLowerCase());
                    }
                },
                Ta = function (e) {
                    for (var t = ba.length, n = e.style, i = [], r = 0; r < t; r++) i.push(ba[r], n[ba[r]]);
                    return (i.t = e), i;
                },
                ka = { left: 0, top: 0 },
                Ca = function (e, t, n, i, r, o, s, a, l, c, u, d, p) {
                    ds(e) && (e = e(a)), us(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Ks("0" + e.substr(3), n) : 0));
                    var f,
                        h,
                        g,
                        m = p ? p.time() : 0;
                    if ((p && p.seek(0), ps(e))) s && Zs(s, n, i, !0);
                    else {
                        ds(t) && (t = t(a));
                        var v,
                            y,
                            b,
                            w,
                            x = e.split(" ");
                        (g = es(t) || To),
                            ((v = Rs(g) || {}) && (v.left || v.top)) || "none" !== Is(g).display || ((w = g.style.display), (g.style.display = "block"), (v = Rs(g)), w ? (g.style.display = w) : g.style.removeProperty("display")),
                            (y = Ks(x[0], v[i.d])),
                            (b = Ks(x[1] || "0", n)),
                            (e = v[i.p] - l[i.p] - c + y + r - b),
                            s && Zs(s, b, i, n - b < 20 || (s._isStart && b > 20)),
                            (n -= n - b);
                    }
                    if (o) {
                        var _ = e + n,
                            T = o._isStart;
                        (f = "scroll" + i.d2), Zs(o, _, i, (T && _ > 20) || (!T && (u ? Math.max(To[f], _o[f]) : o.parentNode[f]) <= _ + 1)), u && ((l = Rs(s)), u && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Ns));
                    }
                    return p && g && ((f = Rs(g)), p.seek(d), (h = Rs(g)), (p._caScrollDist = f[i.p] - h[i.p]), (e = (e / p._caScrollDist) * d)), p && p.seek(m), p ? e : Math.round(e);
                },
                Aa = /(?:webkit|moz|length|cssText|inset)/i,
                Sa = function (e, t, n, i) {
                    if (e.parentNode !== t) {
                        var r,
                            o,
                            s = e.style;
                        if (t === To) {
                            for (r in ((e._stOrig = s.cssText), (o = Is(e)))) +r || Aa.test(r) || !o[r] || "string" != typeof s[r] || "0" === r || (s[r] = o[r]);
                            (s.top = n), (s.left = i);
                        } else s.cssText = e._stOrig;
                        (yo.core.getCache(e).uncache = 1), t.appendChild(e);
                    }
                },
                $a = function (e, t) {
                    var n,
                        i,
                        r = ss(e, t),
                        o = "_scroll" + t.p2,
                        s = function t(s, a, l, c, u) {
                            var d = t.tween,
                                p = a.onComplete,
                                f = {};
                            return (
                                d && d.kill(),
                                (n = Math.round(l)),
                                (a[o] = s),
                                (a.modifiers = f),
                                (f[o] = function (e) {
                                    return (e = ts(r())) !== n && e !== i && Math.abs(e - n) > 2 ? (d.kill(), (t.tween = 0)) : (e = l + c * d.ratio + u * d.ratio * d.ratio), (i = n), (n = ts(e));
                                }),
                                (a.onComplete = function () {
                                    (t.tween = 0), p && p.call(d);
                                }),
                                (d = t.tween = yo.to(e, a))
                            );
                        };
                    return (
                        (e[o] = r),
                        e.addEventListener(
                            "wheel",
                            function () {
                                return s.tween && s.tween.kill() && (s.tween = 0);
                            },
                            { passive: !0 }
                        ),
                        s
                    );
                };
            zs.op = js;
            var Ea = (function () {
                function e(t, n) {
                    bo || e.register(yo) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, n);
                }
                return (
                    (e.prototype.init = function (t, n) {
                        if (((this.progress = this.start = 0), this.vars && this.kill(1), Zo)) {
                            var i,
                                r,
                                o,
                                s,
                                a,
                                l,
                                c,
                                u,
                                d,
                                p,
                                f,
                                h,
                                g,
                                m,
                                v,
                                y,
                                b,
                                w,
                                x,
                                _,
                                T,
                                k,
                                C,
                                A,
                                S,
                                $,
                                E,
                                O,
                                D,
                                P,
                                M,
                                L,
                                N,
                                z,
                                j,
                                I,
                                q,
                                R,
                                H,
                                B,
                                F = (t = qs(us(t) || ps(t) || t.nodeType ? { trigger: t } : t, Gs)),
                                W = F.onUpdate,
                                U = F.toggleClass,
                                Y = F.id,
                                X = F.onToggle,
                                G = F.onRefresh,
                                V = F.scrub,
                                K = F.trigger,
                                J = F.pin,
                                Z = F.pinSpacing,
                                Q = F.invalidateOnRefresh,
                                ee = F.anticipatePin,
                                te = F.onScrubComplete,
                                ne = F.onSnapComplete,
                                ie = F.once,
                                re = F.snap,
                                oe = F.pinReparent,
                                se = F.pinSpacer,
                                ae = F.containerAnimation,
                                le = F.fastScrollEnd,
                                ce = F.preventOverlaps,
                                ue = t.horizontal || (t.containerAnimation && !1 !== t.horizontal) ? zs : js,
                                de = !V && 0 !== V,
                                pe = es(t.scroller || wo),
                                fe = yo.core.getCache(pe),
                                he = rs(pe),
                                ge = "fixed" === ("pinType" in t ? t.pinType : os(pe, "pinType") || (he && "fixed")),
                                me = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                                ve = de && t.toggleActions.split(" "),
                                ye = "markers" in t ? t.markers : Gs.markers,
                                be = he ? 0 : parseFloat(Is(pe)["border" + ue.p2 + Ms]) || 0,
                                we = this,
                                xe =
                                    t.onRefreshInit &&
                                    function () {
                                        return t.onRefreshInit(we);
                                    },
                                _e = (function (e, t, n) {
                                    var i = n.d,
                                        r = n.d2,
                                        o = n.a;
                                    return (o = os(e, "getBoundingClientRect"))
                                        ? function () {
                                              return o()[i];
                                          }
                                        : function () {
                                              return (t ? wo["inner" + r] : e["client" + r]) || 0;
                                          };
                                })(pe, he, ue),
                                Te = (function (e, t) {
                                    return !t || ~Xo.indexOf(e)
                                        ? as(e)
                                        : function () {
                                              return ka;
                                          };
                                })(pe, he),
                                ke = 0,
                                Ce = ss(pe, ue);
                            if (
                                ((we.media = Fo),
                                (ee *= 45),
                                (we.scroller = pe),
                                (we.scroll = ae ? ae.time.bind(ae) : Ce),
                                (s = Ce()),
                                (we.vars = t),
                                (n = n || t.animation),
                                "refreshPriority" in t && (qo = 1),
                                (fe.tweenScroll = fe.tweenScroll || { top: $a(pe, js), left: $a(pe, zs) }),
                                (we.tweenTo = i = fe.tweenScroll[ue.p]),
                                n &&
                                    ((n.vars.lazy = !1),
                                    n._initted || (!1 !== n.vars.immediateRender && !1 !== t.immediateRender && n.render(0, !0, !0)),
                                    (we.animation = n.pause()),
                                    (n.scrollTrigger = we),
                                    (M = ps(V) && V) &&
                                        (P = yo.to(n, {
                                            ease: "power3",
                                            duration: M,
                                            onComplete: function () {
                                                return te && te(we);
                                            },
                                        })),
                                    (O = 0),
                                    Y || (Y = n.vars.id)),
                                Qs.push(we),
                                re &&
                                    ((fs(re) && !re.push) || (re = { snapTo: re }),
                                    "scrollBehavior" in To.style && yo.set(he ? [To, _o] : pe, { scrollBehavior: "auto" }),
                                    (o = ds(re.snapTo)
                                        ? re.snapTo
                                        : "labels" === re.snapTo
                                        ? (function (e) {
                                              return function (t) {
                                                  return yo.utils.snap(Bs(e), t);
                                              };
                                          })(n)
                                        : "labelsDirectional" === re.snapTo
                                        ? ((R = n),
                                          function (e, t) {
                                              return Fs(Bs(R))(e, t.direction);
                                          })
                                        : !1 !== re.directional
                                        ? function (e, t) {
                                              return Fs(re.snapTo)(e, t.direction);
                                          }
                                        : yo.utils.snap(re.snapTo)),
                                    (L = re.duration || { min: 0.1, max: 2 }),
                                    (L = fs(L) ? Eo(L.min, L.max) : Eo(L, L)),
                                    (N = yo
                                        .delayedCall(re.delay || M / 2 || 0.1, function () {
                                            if (Math.abs(we.getVelocity()) < 10 && !Mo && ke !== Ce()) {
                                                var e = n && !de ? n.totalProgress() : we.progress,
                                                    t = ((e - D) / (Vo() - Oo)) * 1e3 || 0,
                                                    r = yo.utils.clamp(-we.progress, 1 - we.progress, (ys(t / 2) * t) / 0.185),
                                                    s = we.progress + (!1 === re.inertia ? 0 : r),
                                                    a = Eo(0, 1, o(s, we)),
                                                    u = Ce(),
                                                    d = Math.round(l + a * g),
                                                    p = re,
                                                    f = p.onStart,
                                                    h = p.onInterrupt,
                                                    m = p.onComplete,
                                                    v = i.tween;
                                                if (u <= c && u >= l && d !== u) {
                                                    if (v && !v._initted && v.data <= ys(d - u)) return;
                                                    !1 === re.inertia && (r = a - we.progress),
                                                        i(
                                                            d,
                                                            {
                                                                duration: L(ys((0.185 * Math.max(ys(s - e), ys(a - e))) / t / 0.05 || 0)),
                                                                ease: re.ease || "power3",
                                                                data: ys(d - u),
                                                                onInterrupt: function () {
                                                                    return N.restart(!0) && h && h(we);
                                                                },
                                                                onComplete: function () {
                                                                    (ke = Ce()), (O = D = n && !de ? n.totalProgress() : we.progress), ne && ne(we), m && m(we);
                                                                },
                                                            },
                                                            u,
                                                            r * g,
                                                            d - u - r * g
                                                        ),
                                                        f && f(we, i.tween);
                                                }
                                            } else we.isActive && N.restart(!0);
                                        })
                                        .pause())),
                                Y && (ea[Y] = we),
                                (K = we.trigger = es(K || J)),
                                (J = !0 === J ? K : es(J)),
                                us(U) && (U = { targets: K, className: U }),
                                J &&
                                    (!1 === Z || Z === Ps || (Z = !(!Z && "flex" === Is(J.parentNode).display) && Ds),
                                    (we.pin = J),
                                    !1 !== t.force3D && yo.set(J, { force3D: !0 }),
                                    (r = yo.core.getCache(J)).spacer
                                        ? (m = r.pinState)
                                        : (se && ((se = es(se)) && !se.nodeType && (se = se.current || se.nativeElement), (r.spacerIsNative = !!se), se && (r.spacerState = Ta(se))),
                                          (r.spacer = b = se || xo.createElement("div")),
                                          b.classList.add("pin-spacer"),
                                          Y && b.classList.add("pin-spacer-" + Y),
                                          (r.pinState = m = Ta(J))),
                                    (we.spacer = b = r.spacer),
                                    (E = Is(J)),
                                    (C = E[Z + ue.os2]),
                                    (x = yo.getProperty(J)),
                                    (_ = yo.quickSetter(J, ue.a, Ns)),
                                    wa(J, b, E),
                                    (y = Ta(J))),
                                ye &&
                                    ((h = fs(ye) ? qs(ye, Xs) : Xs),
                                    (p = Js("scroller-start", Y, pe, ue, h, 0)),
                                    (f = Js("scroller-end", Y, pe, ue, h, 0, p)),
                                    (w = p["offset" + ue.op.d2]),
                                    (u = Js("start", Y, pe, ue, h, w, 0, ae)),
                                    (d = Js("end", Y, pe, ue, h, w, 0, ae)),
                                    ae && (q = yo.quickSetter([u, d], ue.a, Ns)),
                                    ge ||
                                        (Xo.length && !0 === os(pe, "fixedMarkers")) ||
                                        ((B = Is((H = he ? To : pe)).position),
                                        (H.style.position = "absolute" === B || "fixed" === B ? B : "relative"),
                                        yo.set([p, f], { force3D: !0 }),
                                        (S = yo.quickSetter(p, ue.a, Ns)),
                                        ($ = yo.quickSetter(f, ue.a, Ns)))),
                                ae)
                            ) {
                                var Ae = ae.vars.onUpdate,
                                    Se = ae.vars.onUpdateParams;
                                ae.eventCallback("onUpdate", function () {
                                    we.update(0, 0, 1), Ae && Ae.apply(Se || []);
                                });
                            }
                            (we.previous = function () {
                                return Qs[Qs.indexOf(we) - 1];
                            }),
                                (we.next = function () {
                                    return Qs[Qs.indexOf(we) + 1];
                                }),
                                (we.revert = function (e) {
                                    var t = !1 !== e || !we.enabled,
                                        i = Po;
                                    t !== we.isReverted &&
                                        (t && (we.scroll.rec || (we.scroll.rec = Ce()), (j = Math.max(Ce(), we.scroll.rec || 0)), (z = we.progress), (I = n && n.progress())),
                                        u &&
                                            [u, d, p, f].forEach(function (e) {
                                                return (e.style.display = t ? "none" : "block");
                                            }),
                                        t && (Po = 1),
                                        we.update(t),
                                        (Po = i),
                                        J &&
                                            (t
                                                ? (function (e, t, n) {
                                                      _a(n);
                                                      var i = e._gsap;
                                                      if (i.spacerIsNative) _a(i.spacerState);
                                                      else if (e.parentNode === t) {
                                                          var r = t.parentNode;
                                                          r && (r.insertBefore(e, t), r.removeChild(t));
                                                      }
                                                  })(J, b, m)
                                                : (!oe || !we.isActive) && wa(J, b, Is(J), A)),
                                        (we.isReverted = t));
                                }),
                                (we.refresh = function (i, r) {
                                    if ((!Po && we.enabled) || r)
                                        if (J && i && Jo) Us(e, "scrollEnd", la);
                                        else {
                                            (Po = 1), P && P.pause(), Q && n && n.progress(0).invalidate(), we.isReverted || we.revert();
                                            for (
                                                var o,
                                                    h,
                                                    w,
                                                    _,
                                                    C,
                                                    S,
                                                    $,
                                                    E,
                                                    O,
                                                    D,
                                                    M = _e(),
                                                    L = Te(),
                                                    N = ae ? ae.duration() : ls(pe, ue),
                                                    q = 0,
                                                    R = 0,
                                                    H = t.end,
                                                    B = t.endTrigger || K,
                                                    F = t.start || (0 !== t.start && K ? (J ? "0 0" : "0 100%") : 0),
                                                    W = t.pinnedContainer && es(t.pinnedContainer),
                                                    U = (K && Math.max(0, Qs.indexOf(we))) || 0,
                                                    Y = U;
                                                Y--;

                                            )
                                                (S = Qs[Y]).end || S.refresh(0, 1) || (Po = 1), !($ = S.pin) || ($ !== K && $ !== J) || S.isReverted || (D || (D = []), D.unshift(S), S.revert());
                                            for (
                                                ds(F) && (F = F(we)),
                                                    l = Ca(F, K, M, ue, Ce(), u, p, we, L, be, ge, N, ae) || (J ? -0.001 : 0),
                                                    ds(H) && (H = H(we)),
                                                    us(H) && !H.indexOf("+=") && (~H.indexOf(" ") ? (H = (us(F) ? F.split(" ")[0] : "") + H) : ((q = Ks(H.substr(2), M)), (H = us(F) ? F : l + q), (B = K))),
                                                    c = Math.max(l, Ca(H || (B ? "100% 0" : N), B, M, ue, Ce() + q, d, f, we, L, be, ge, N, ae)) || -0.001,
                                                    g = c - l || ((l -= 0.01) && 0.001),
                                                    q = 0,
                                                    Y = U;
                                                Y--;

                                            )
                                                ($ = (S = Qs[Y]).pin) && S.start - S._pinPush < l && !ae && ((o = S.end - S.start), ($ === K || $ === W) && !ps(F) && (q += o), $ === J && (R += o));
                                            if (((l += q), (c += q), (we._pinPush = R), u && q && (((o = {})[ue.a] = "+=" + q), W && (o[ue.p] = "-=" + Ce()), yo.set([u, d], o)), J))
                                                (o = Is(J)),
                                                    (_ = ue === js),
                                                    (w = Ce()),
                                                    (T = parseFloat(x(ue.a)) + R),
                                                    !N && c > 1 && ((he ? To : pe).style["overflow-" + ue.a] = "scroll"),
                                                    wa(J, b, o),
                                                    (y = Ta(J)),
                                                    (h = Rs(J, !0)),
                                                    (E = ge && ss(pe, _ ? zs : js)()),
                                                    Z && (((A = [Z + ue.os2, g + R + Ns]).t = b), (Y = Z === Ds ? Hs(J, ue) + g + R : 0) && A.push(ue.d, Y + Ns), _a(A), ge && Ce(j)),
                                                    ge &&
                                                        (((C = { top: h.top + (_ ? w - l : E) + Ns, left: h.left + (_ ? E : w - l) + Ns, boxSizing: "border-box", position: "fixed" }).width = C.maxWidth = Math.ceil(h.width) + Ns),
                                                        (C.height = C.maxHeight = Math.ceil(h.height) + Ns),
                                                        (C.margin = C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = "0"),
                                                        (C.padding = o.padding),
                                                        (C.paddingTop = o.paddingTop),
                                                        (C.paddingRight = o.paddingRight),
                                                        (C.paddingBottom = o.paddingBottom),
                                                        (C.paddingLeft = o.paddingLeft),
                                                        (v = (function (e, t, n) {
                                                            for (var i, r = [], o = e.length, s = n ? 8 : 0; s < o; s += 2) (i = e[s]), r.push(i, i in t ? t[i] : e[s + 1]);
                                                            return (r.t = e.t), r;
                                                        })(m, C, oe))),
                                                    n ? ((O = n._initted), Ro(1), n.render(n.duration(), !0, !0), (k = x(ue.a) - T + g + R), g !== k && v.splice(v.length - 2, 2), n.render(0, !0, !0), O || n.invalidate(), Ro(0)) : (k = g);
                                            else if (K && Ce() && !ae) for (h = K.parentNode; h && h !== To; ) h._pinOffset && ((l -= h._pinOffset), (c -= h._pinOffset)), (h = h.parentNode);
                                            D &&
                                                D.forEach(function (e) {
                                                    return e.revert(!1);
                                                }),
                                                (we.start = l),
                                                (we.end = c),
                                                (s = a = Ce()),
                                                ae || (s < j && Ce(j), (we.scroll.rec = 0)),
                                                we.revert(!1),
                                                (Po = 0),
                                                n && de && n._initted && n.progress() !== I && n.progress(I, !0).render(n.time(), !0, !0),
                                                z !== we.progress && (n && !de && n.totalProgress(z, !0), (we.progress = z), we.update(0, 0, 1)),
                                                J && Z && (b._pinOffset = Math.round(we.progress * k)),
                                                G && G(we);
                                        }
                                }),
                                (we.getVelocity = function () {
                                    return ((Ce() - a) / (Vo() - Oo)) * 1e3 || 0;
                                }),
                                (we.endAnimation = function () {
                                    ms(we.callbackAnimation), n && (P ? P.progress(1) : n.paused() ? de || ms(n, we.direction < 0, 1) : ms(n, n.reversed()));
                                }),
                                (we.getTrailing = function (e) {
                                    var t = Qs.indexOf(we),
                                        n = we.direction > 0 ? Qs.slice(0, t).reverse() : Qs.slice(t + 1);
                                    return us(e)
                                        ? n.filter(function (t) {
                                              return t.vars.preventOverlaps === e;
                                          })
                                        : n;
                                }),
                                (we.update = function (e, t, r) {
                                    if (!ae || r || e) {
                                        var o,
                                            u,
                                            d,
                                            f,
                                            h,
                                            m,
                                            w,
                                            x = we.scroll(),
                                            A = e ? 0 : (x - l) / g,
                                            E = A < 0 ? 0 : A > 1 ? 1 : A || 0,
                                            M = we.progress;
                                        if (
                                            (t && ((a = s), (s = ae ? Ce() : x), re && ((D = O), (O = n && !de ? n.totalProgress() : E))),
                                            ee && !E && J && !Po && !Yo && Jo && l < x + ((x - a) / (Vo() - Oo)) * ee && (E = 1e-4),
                                            E !== M && we.enabled)
                                        ) {
                                            if (
                                                ((f = (h = (o = we.isActive = !!E && E < 1) !== (!!M && M < 1)) || !!E != !!M),
                                                (we.direction = E > M ? 1 : -1),
                                                (we.progress = E),
                                                f && !Po && ((u = E && !M ? 0 : 1 === E ? 1 : 1 === M ? 2 : 3), de && ((d = (!h && "none" !== ve[u + 1] && ve[u + 1]) || ve[u]), (w = n && ("complete" === d || "reset" === d || d in n)))),
                                                ce &&
                                                    h &&
                                                    (w || V || !n) &&
                                                    (ds(ce)
                                                        ? ce(we)
                                                        : we.getTrailing(ce).forEach(function (e) {
                                                              return e.endAnimation();
                                                          })),
                                                de || (!P || Po || Yo ? n && n.totalProgress(E, !!Po) : ((P.vars.totalProgress = E), P.invalidate().restart())),
                                                J)
                                            )
                                                if ((e && Z && (b.style[Z + ue.os2] = C), ge)) {
                                                    if (f) {
                                                        if (((m = !e && E > M && c + 1 > x && x + 1 >= ls(pe, ue)), oe))
                                                            if (e || (!o && !m)) Sa(J, b);
                                                            else {
                                                                var L = Rs(J, !0),
                                                                    z = x - l;
                                                                Sa(J, To, L.top + (ue === js ? z : 0) + Ns, L.left + (ue === js ? 0 : z) + Ns);
                                                            }
                                                        _a(o || m ? v : y), (k !== g && E < 1 && o) || _(T + (1 !== E || m ? 0 : k));
                                                    }
                                                } else _(T + k * E);
                                            re && !i.tween && !Po && !Yo && N.restart(!0),
                                                U &&
                                                    (h || (ie && E && (E < 1 || !Bo))) &&
                                                    $o(U.targets).forEach(function (e) {
                                                        return e.classList[o || ie ? "add" : "remove"](U.className);
                                                    }),
                                                W && !de && !e && W(we),
                                                f && !Po
                                                    ? (de && (w && ("complete" === d ? n.pause().totalProgress(1) : "reset" === d ? n.restart(!0).pause() : "restart" === d ? n.restart(!0) : n[d]()), W && W(we)),
                                                      (!h && Bo) || (X && h && vs(we, X), me[u] && vs(we, me[u]), ie && (1 === E ? we.kill(!1, 1) : (me[u] = 0)), h || (me[(u = 1 === E ? 1 : 3)] && vs(we, me[u]))),
                                                      le && !o && Math.abs(we.getVelocity()) > (ps(le) ? le : 2500) && (ms(we.callbackAnimation), P ? P.progress(1) : ms(n, !E, 1)))
                                                    : de && W && !Po && W(we);
                                        }
                                        if ($) {
                                            var j = ae ? (x / ae.duration()) * (ae._caScrollDist || 0) : x;
                                            S(j + (p._isFlipped ? 1 : 0)), $(j);
                                        }
                                        q && q((-x / ae.duration()) * (ae._caScrollDist || 0));
                                    }
                                }),
                                (we.enable = function (t, n) {
                                    we.enabled || ((we.enabled = !0), Us(pe, "resize", ia), Us(pe, "scroll", na), xe && Us(e, "refreshInit", xe), !1 !== t && ((we.progress = z = 0), (s = a = ke = Ce())), !1 !== n && we.refresh());
                                }),
                                (we.getTween = function (e) {
                                    return e && i ? i.tween : P;
                                }),
                                (we.disable = function (t, n) {
                                    if (
                                        we.enabled &&
                                        (!1 !== t && we.revert(),
                                        (we.enabled = we.isActive = !1),
                                        n || (P && P.pause()),
                                        (j = 0),
                                        r && (r.uncache = 1),
                                        xe && Ys(e, "refreshInit", xe),
                                        N && (N.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                                        !he)
                                    ) {
                                        for (var o = Qs.length; o--; ) if (Qs[o].scroller === pe && Qs[o] !== we) return;
                                        Ys(pe, "resize", ia), Ys(pe, "scroll", na);
                                    }
                                }),
                                (we.kill = function (e, t) {
                                    we.disable(e, t), P && P.kill(), Y && delete ea[Y];
                                    var i = Qs.indexOf(we);
                                    Qs.splice(i, 1),
                                        i === No && ma > 0 && No--,
                                        (i = 0),
                                        Qs.forEach(function (e) {
                                            return e.scroller === we.scroller && (i = 1);
                                        }),
                                        i || (we.scroll.rec = 0),
                                        n && ((n.scrollTrigger = null), e && n.render(-1), t || n.kill()),
                                        u &&
                                            [u, d, p, f].forEach(function (e) {
                                                return e.parentNode && e.parentNode.removeChild(e);
                                            }),
                                        J &&
                                            (r && (r.uncache = 1),
                                            (i = 0),
                                            Qs.forEach(function (e) {
                                                return e.pin === J && i++;
                                            }),
                                            i || (r.spacer = 0));
                                }),
                                we.enable(!1, !1),
                                n && n.add && !g
                                    ? yo.delayedCall(0.01, function () {
                                          return l || c || we.refresh();
                                      }) &&
                                      (g = 0.01) &&
                                      (l = c = 0)
                                    : we.refresh();
                        } else this.update = this.refresh = this.kill = Qo;
                    }),
                    (e.register = function (t) {
                        if (
                            !bo &&
                            ((yo = t || is()),
                            ns() && window.document && ((wo = window), (xo = document), (_o = xo.documentElement), (To = xo.body)),
                            yo && (($o = yo.utils.toArray), (Eo = yo.utils.clamp), (Ro = yo.core.suppressOverwrites || Qo), yo.core.globals("ScrollTrigger", e), To))
                        ) {
                            (Ao =
                                wo.requestAnimationFrame ||
                                function (e) {
                                    return setTimeout(e, 16);
                                }),
                                Us(wo, "wheel", na),
                                (ko = [wo, xo, _o, To]),
                                Us(xo, "scroll", na);
                            var n,
                                i = To.style,
                                r = i.borderTopStyle;
                            (i.borderTopStyle = "solid"),
                                (n = Rs(To)),
                                (js.m = Math.round(n.top + js.sc()) || 0),
                                (zs.m = Math.round(n.left + zs.sc()) || 0),
                                r ? (i.borderTopStyle = r) : i.removeProperty("border-top-style"),
                                (Do = setInterval(ta, 200)),
                                yo.delayedCall(0.5, function () {
                                    return (Yo = 0);
                                }),
                                Us(xo, "touchcancel", Qo),
                                Us(To, "touchstart", Qo),
                                Ws(Us, xo, "pointerdown,touchstart,mousedown", function () {
                                    return (Mo = 1);
                                }),
                                Ws(Us, xo, "pointerup,touchend,mouseup", function () {
                                    return (Mo = 0);
                                }),
                                (Lo = yo.utils.checkPrefix("transform")),
                                ba.push(Lo),
                                (bo = Vo()),
                                (Co = yo.delayedCall(0.2, ha).pause()),
                                (Io = [
                                    xo,
                                    "visibilitychange",
                                    function () {
                                        var e = wo.innerWidth,
                                            t = wo.innerHeight;
                                        xo.hidden ? ((zo = e), (jo = t)) : (zo === e && jo === t) || ia();
                                    },
                                    xo,
                                    "DOMContentLoaded",
                                    ha,
                                    wo,
                                    "load",
                                    function () {
                                        return Jo || ha();
                                    },
                                    wo,
                                    "resize",
                                    ia,
                                ]),
                                cs(Us);
                        }
                        return bo;
                    }),
                    (e.defaults = function (e) {
                        for (var t in e) Gs[t] = e[t];
                    }),
                    (e.kill = function () {
                        (Zo = 0),
                            Qs.slice(0).forEach(function (e) {
                                return e.kill(1);
                            });
                    }),
                    (e.config = function (e) {
                        "limitCallbacks" in e && (Bo = !!e.limitCallbacks);
                        var t = e.syncInterval;
                        (t && clearInterval(Do)) || ((Do = t) && setInterval(ta, t)), "autoRefreshEvents" in e && (cs(Ys) || cs(Us, e.autoRefreshEvents || "none"), (Ho = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
                    }),
                    (e.scrollerProxy = function (e, t) {
                        var n = es(e),
                            i = Go.indexOf(n),
                            r = rs(n);
                        ~i && Go.splice(i, r ? 6 : 2), r ? Xo.unshift(wo, t, To, t, _o, t) : Xo.unshift(n, t);
                    }),
                    (e.matchMedia = function (e) {
                        var t, n, i, r, o;
                        for (n in e)
                            (i = sa.indexOf(n)),
                                (r = e[n]),
                                (Fo = n),
                                "all" === n
                                    ? r()
                                    : (t = wo.matchMedia(n)) &&
                                      (t.matches && (o = r()),
                                      ~i ? ((sa[i + 1] = gs(sa[i + 1], r)), (sa[i + 2] = gs(sa[i + 2], o))) : ((i = sa.length), sa.push(n, r, o), t.addListener ? t.addListener(aa) : t.addEventListener("change", aa)),
                                      (sa[i + 3] = t.matches)),
                                (Fo = 0);
                        return sa;
                    }),
                    (e.clearMatchMedia = function (e) {
                        e || (sa.length = 0), (e = sa.indexOf(e)) >= 0 && sa.splice(e, 4);
                    }),
                    (e.isInViewport = function (e, t, n) {
                        var i = (us(e) ? es(e) : e).getBoundingClientRect(),
                            r = i[n ? Cs : As] * t || 0;
                        return n ? i.right - r > 0 && i.left + r < wo.innerWidth : i.bottom - r > 0 && i.top + r < wo.innerHeight;
                    }),
                    (e.positionInViewport = function (e, t, n) {
                        us(e) && (e = es(e));
                        var i = e.getBoundingClientRect(),
                            r = i[n ? Cs : As],
                            o = null == t ? r / 2 : t in Vs ? Vs[t] * r : ~t.indexOf("%") ? (parseFloat(t) * r) / 100 : parseFloat(t) || 0;
                        return n ? (i.left + o) / wo.innerWidth : (i.top + o) / wo.innerHeight;
                    }),
                    e
                );
            })();
            (Ea.version = "3.8.0"),
                (Ea.saveStyles = function (e) {
                    return e
                        ? $o(e).forEach(function (e) {
                              if (e && e.style) {
                                  var t = ua.indexOf(e);
                                  t >= 0 && ua.splice(t, 5), ua.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), yo.core.getCache(e), Fo);
                              }
                          })
                        : ua;
                }),
                (Ea.revert = function (e, t) {
                    return pa(!e, t);
                }),
                (Ea.create = function (e, t) {
                    return new Ea(e, t);
                }),
                (Ea.refresh = function (e) {
                    return e ? ia() : (bo || Ea.register()) && ha(!0);
                }),
                (Ea.update = va),
                (Ea.clearScrollMemory = fa),
                (Ea.maxScroll = function (e, t) {
                    return ls(e, t ? zs : js);
                }),
                (Ea.getScrollFunc = function (e, t) {
                    return ss(es(e), t ? zs : js);
                }),
                (Ea.getById = function (e) {
                    return ea[e];
                }),
                (Ea.getAll = function () {
                    return Qs.slice(0);
                }),
                (Ea.isScrolling = function () {
                    return !!Jo;
                }),
                (Ea.snapDirectional = Fs),
                (Ea.addEventListener = function (e, t) {
                    var n = ra[e] || (ra[e] = []);
                    ~n.indexOf(t) || n.push(t);
                }),
                (Ea.removeEventListener = function (e, t) {
                    var n = ra[e],
                        i = n && n.indexOf(t);
                    i >= 0 && n.splice(i, 1);
                }),
                (Ea.batch = function (e, t) {
                    var n,
                        i = [],
                        r = {},
                        o = t.interval || 0.016,
                        s = t.batchMax || 1e9,
                        a = function (e, t) {
                            var n = [],
                                i = [],
                                r = yo
                                    .delayedCall(o, function () {
                                        t(n, i), (n = []), (i = []);
                                    })
                                    .pause();
                            return function (e) {
                                n.length || r.restart(!0), n.push(e.trigger), i.push(e), s <= n.length && r.progress(1);
                            };
                        };
                    for (n in t) r[n] = "on" === n.substr(0, 2) && ds(t[n]) && "onRefreshInit" !== n ? a(0, t[n]) : t[n];
                    return (
                        ds(s) &&
                            ((s = s()),
                            Us(Ea, "refresh", function () {
                                return (s = t.batchMax());
                            })),
                        $o(e).forEach(function (e) {
                            var t = {};
                            for (n in r) t[n] = r[n];
                            (t.trigger = e), i.push(Ea.create(t));
                        }),
                        i
                    );
                }),
                (Ea.sort = function (e) {
                    return Qs.sort(
                        e ||
                            function (e, t) {
                                return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
                            }
                    );
                }),
                is() && yo.registerPlugin(Ea),
                Ai.registerPlugin(Ut, Si, Qr, vo, Ea);
            Ai.registerPlugin(Ut, Si);
            const Oa = function (e) {
                return {
                    openPopup: function (t) {
                        var n = e(".popup" + t);
                        e("body").addClass("lock"), window.innerWidth, Ut.set(n, { display: "flex", opacity: 0 }), Ut.to(n, 0.3, { opacity: 1, ease: "power2.out" });
                    },
                    closePopup: function (t) {
                        var n = e(t);
                        n.find(".content-popup");
                        (Ut.to(n, 0.3, { display: "none", opacity: 0, ease: "power2.out" }), n.find(".video").length) && e(this).parents(".popup").find(".video iframe").attr("src", "");
                        e("body").removeClass("lock");
                    },
                    closeBtnPopup: function () {
                        e(".popup .close-popup, .popup .close").on("click", function (t) {
                            (Ut.to(e(this).parents(".popup"), 0.3, { display: "none", opacity: 0, ease: "power2.out" }), e("body").removeClass("lock"), e(this).parents(".popup").find(".video").length) &&
                                e(this).parents(".popup").find(".video iframe").attr("src", "");
                            e(this).parents(".popup").find(".media").length && e(this).parents(".popup").find(".media iframe").attr("src", "");
                            return !1;
                        });
                    },
                    outsidePopup: function () {
                        e(".popup").on("click", function (t) {
                            if (!e(t.target).closest(".popup .inner-popup").length) {
                                if ((Ut.to(e(this), 0.3, { display: "none", opacity: 0, ease: "power2.out" }), e("body").removeClass("lock"), e(this).find(".video").length)) e(".content-popup").find(".video iframe").attr("src", "");
                                if (e(this).find(".media").length) e(".content-popup").find(".media").html("");
                                return !1;
                            }
                        });
                    },
                    init: function () {
                        this.outsidePopup(), this.closePopup();
                    },
                };
            };
            n(90), n(770);
            (window.$ = e),
                e(document).ready(function () {
                    (function (e) {
                        return {
                            floatingMenu: function () {
                                var t = e("header"),
                                    n = {};
                                e(window).width(),
                                    (n.runfnc = function () {
                                        e(window).scrollTop() > 0 ? t.hasClass("sticky") || t.addClass("sticky") : t.hasClass("sticky") && t.removeClass("sticky");
                                    }),
                                    e(window).scroll(function () {
                                        n.runfnc();
                                    }),
                                    n.runfnc();
                            },
                            headerMenu: function () {
                                e(document).on("click", function (t) {
                                    e(t.target).parents().hasClass("search") || e(".search .search__box").fadeOut();
                                }),
                                    e(window).width() >= 1280 &&
                                        e("ul.menu >li.have-child").hover(
                                            function () {
                                                e("ul.menu").hasClass("not-submenu") ||
                                                    (e(this).parent().hasClass("drop")
                                                        ? (e(this).removeClass("drop"), e(this).children(".child").hide())
                                                        : (e(this).parent().children("li").removeClass("drop"), e(this).parent().find(".child").hide(), e(this).addClass("drop"), e(this).children(".child").show()));
                                            },
                                            function () {
                                                e("header ul.menu .child").hide(), e("ul.menu").children("li").removeClass("drop");
                                            }
                                        ),
                                    e(".have-tab a").each(function () {
                                        var t = e(this).attr("href");
                                        e(this).parent().hasClass("active-tab") &&
                                            e(this)
                                                .parents(".half")
                                                .find(".listing" + t)
                                                .css("display", "flex");
                                    }),
                                    e(".have-tab >a").on("click", function (t) {
                                        if ((t.preventDefault(), !e(this).parent().hasClass("active-tab"))) {
                                            var n = e(this).attr("href");
                                            e(this).parents(".col").find("li").removeClass("active-tab"),
                                                e(this).parents(".half").find(".listing").hide(),
                                                e(this).parent().addClass("active-tab"),
                                                e(this)
                                                    .parents(".half")
                                                    .find(".listing" + n)
                                                    .css("display", "flex");
                                        }
                                    }),
                                    e(".menu .search >img").on("click", function () {
                                        e(this).next(".search__box").fadeToggle();
                                    });
                            },
                            burgerMenu: function () {
                                e("header nav .menu-bar").on("click", function () {
                                    e(this).hasClass("act")
                                        ? (e(".right-header").removeClass("fixed"),
                                          e(".overlay-menu").fadeOut(50),
                                          e(this).removeClass("act"),
                                          e(".right-header .have-child").removeClass("show"),
                                          e(".right-header .have-child .child").hide(),
                                          e("body").css("overflow", "auto"))
                                        : (e(".right-header").addClass("fixed"), e(".overlay-menu").fadeIn(50), e(this).addClass("act"), e("body").css("overflow", "hidden"));
                                }),
                                    e(".overlay-menu").on("click", function () {
                                        e(".right-header").removeClass("fixed"),
                                            e(".overlay-menu").fadeOut(50),
                                            e("header nav .menu-bar").removeClass("act"),
                                            e(".right-header .have-child").removeClass("show"),
                                            e(".right-header .have-child .child").hide(),
                                            e("body").css("overflow", "auto");
                                    }),
                                    e("header").on("click", ".right-header.fixed .have-child > a", function (t) {
                                        e(this).parent().hasClass("show")
                                            ? (e(this).parent().removeClass("show"), e(this).parent().children(".child").slideUp(200))
                                            : (t.preventDefault(),
                                              e(this).parent().addClass("show"),
                                              e(this).parent().siblings().removeClass("show"),
                                              e(this).parent().siblings().children(".child").slideUp(200),
                                              e(this).parent().children(".child").slideDown(200));
                                    });
                            },
                            init: function () {
                                this.headerMenu(), this.floatingMenu(), this.burgerMenu();
                            },
                        };
                    })(e).init(),
                        (function (e) {
                            return {
                                sliderGallery: function () {
                                    e(".event-gallery .listing").slick({
                                        arrows: !0,
                                        dots: !1,
                                        autoplay: !0,
                                        slidesToShow: 2,
                                        variableWidth: !0,
                                        prevArrow: '<button type="button" class="button-nav prev"></button>',
                                        nextArrow: '<button type="button" class="button-nav next"></button>',
                                        responsive: [
                                            { breakpoint: 1280, settings: { slidesToShow: 2, variableWidth: !1 } },
                                            { breakpoint: 767, settings: { slidesToShow: 1, variableWidth: !1 } },
                                        ],
                                    });
                                },
                                popupGallery: function () {
                                    var e = document.querySelectorAll(".event-gallery .item"),
                                        t = document.querySelector(".popup-media-nav.prev"),
                                        n = document.querySelector(".popup-media-nav.next"),
                                        i = 0,
                                        r = this;
                                    e.forEach(function (e, t) {
                                        e.addEventListener("click", function () {
                                            openPopup("#popup-media"), (i = t), r.insertMedia(this);
                                        });
                                    }),
                                        t &&
                                            n &&
                                            (t.addEventListener("click", function () {
                                                0 === i ? (i = e.length - 1) : (i -= 1);
                                                var t = e[i];
                                                r.insertMedia(t);
                                            }),
                                            n.addEventListener("click", function () {
                                                i === e.length - 1 ? (i = 0) : (i += 1);
                                                var t = e[i];
                                                r.insertMedia(t);
                                            }));
                                },
                                insertMedia: function (e) {
                                    var t = document.querySelector("#popup-media");
                                    t.querySelector(".media").innerHTML = "";
                                    var n = e.querySelector(".data-popup");
                                    e.classList.contains("video")
                                        ? (t.querySelector(".media").innerHTML =
                                              '<iframe src="https://www.youtube.com/embed/' +
                                              n.dataset.iframe +
                                              '?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
                                        : (t.querySelector(".media").innerHTML = n.innerHTML);
                                },
                                init: function () {
                                    this.popupGallery(), this.sliderGallery();
                                },
                            };
                        })(e).init(),
                        Oa(e).closeBtnPopup(),
                        Oa(e).outsidePopup(),
                        e(".wrap-banner .button.popup-video").on("click", function (t) {
                            t.preventDefault();
                            var n = e(this).data("src");
                            e("#video-banner .video-popup .video iframe").attr("src", n), Oa(e).openPopup("#video-banner");
                        }),
                        e(".video-menu .ico-play").on("click", function () {
                            Oa(e).openPopup("#video-menu");
                            var t =
                                '<iframe src="https://www.youtube.com/embed/' +
                                e(this).data("iframe") +
                                '?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                            e(".popup#video-menu .inner-popup .video").html(t);
                        }),
                        (function (e) {
                            return {
                                supportsWebp: function () {
                                    var e = document.createElement("canvas");
                                    return !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp");
                                },
                                init: function (t, n) {
                                    var i = this.supportsWebp() ? "-webp" : "",
                                        r = this,
                                        o = n.type;
                                    void 0 === o && (o = "background");
                                    var s,
                                        a = e(window).width();
                                    t.each(function () {
                                        var t = !1,
                                            n = "";
                                        a >= 940 && "large" != e(this).attr("data-has-load")
                                            ? ((null != (n = e(this).attr("data-img-large" + i)) && "" != n) || (n = e(this).attr("data-img-large")), e(this).attr("data-has-load", "large"), (t = !0))
                                            : a < 940 && a >= 600 && "medium" != e(this).attr("data-has-load")
                                            ? ((null != (n = e(this).attr("data-img-medium" + i)) && "" != n) || (n = e(this).attr("data-img-medium")), e(this).attr("data-has-load", "medium"), (t = !0))
                                            : a < 600 &&
                                              a >= 0 &&
                                              "small" != e(this).attr("data-has-load") &&
                                              ((null != (n = e(this).attr("data-img-small" + i)) && "" != n) || (n = e(this).attr("data-img-small")), e(this).attr("data-has-load", "small"), (t = !0)),
                                            null == n && ((n = e(this).attr("data-img-large")), e(this).attr("data-has-load", "large")),
                                            t && ("background" == o ? e(this).css("background-image", "url(" + n + ")") : e(this).attr("src", n));
                                    }),
                                        e(window).resize(function () {
                                            clearTimeout(s),
                                                (s = setTimeout(function () {
                                                    r.init(t, n);
                                                }, 500));
                                        });
                                },
                            };
                        })(e).init(e(".banner-page > figure > img, .banner__slider figure img, .our-project .slider-project__item figure>img"), { type: "image" }),
                        e(".onlynumber").keypress(function (e) {
                            if (8 != e.which && 0 != e.which && (e.which < 48 || e.which > 57)) return !1;
                        }),
                        e(".onlytext").keypress(function (e) {
                            var t = e.keyCode || e.which;
                            return /^[A-Za-z]+$/.test(String.fromCharCode(t));
                        });
                }),
                (window.openPopup = function (t) {
                    Oa(e).openPopup(t);
                }),
                (window.closePopup = function (t) {
                    Oa(e).closePopup(t);
                }),
                (window.onload = function () {
                    e("input[type=file]").fileInput({ class_name: "input-file" });
                }),
                (e.fn.fileInput = function (t) {
                    var n = this;
                    n.wrap('<div class="' + t.class_name + ' line"></div>'),
                        n.css({ position: "absolute", top: 0, left: 0, opacity: 0 }),
                        n.parent("." + t.class_name).css({ position: "relative", width: "100%", display: "inline-block" }),
                        n.parent("." + t.class_name).append("<span class='input-file__text'>" + n.attr("placeholder") + "</span>"),
                        n.on("change", function () {
                            var t = e(this).val();
                            "" != t ? ((t = t.substring(12, t.length)), e(this).next("span").html(t)) : e(this).next("span").html(n.attr("placeholder"));
                        });
                });
        })();
})();
//# sourceMappingURL=app.js.map
