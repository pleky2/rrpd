/*! For license information please see home.js.LICENSE.txt */
(() => {
    var t = {
            773: (t, e, n) => {
                "use strict";
                n.d(e, { Z: () => a });
                var i = n(15),
                    r = n.n(i),
                    o = n(645),
                    s = n.n(o)()(r());
                s.push([
                    t.id,
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
            645: (t) => {
                "use strict";
                t.exports = function (t) {
                    var e = [];
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var n = t(e);
                                return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
                            }).join("");
                        }),
                        (e.i = function (t, n, i) {
                            "string" == typeof t && (t = [[null, t, ""]]);
                            var r = {};
                            if (i)
                                for (var o = 0; o < this.length; o++) {
                                    var s = this[o][0];
                                    null != s && (r[s] = !0);
                                }
                            for (var a = 0; a < t.length; a++) {
                                var l = [].concat(t[a]);
                                (i && r[l[0]]) || (n && (l[2] ? (l[2] = "".concat(n, " and ").concat(l[2])) : (l[2] = n)), e.push(l));
                            }
                        }),
                        e
                    );
                };
            },
            15: (t) => {
                "use strict";
                function e(t, e) {
                    return (
                        (function (t) {
                            if (Array.isArray(t)) return t;
                        })(t) ||
                        (function (t, e) {
                            var n = t && (("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]);
                            if (null == n) return;
                            var i,
                                r,
                                o = [],
                                s = !0,
                                a = !1;
                            try {
                                for (n = n.call(t); !(s = (i = n.next()).done) && (o.push(i.value), !e || o.length !== e); s = !0);
                            } catch (t) {
                                (a = !0), (r = t);
                            } finally {
                                try {
                                    s || null == n.return || n.return();
                                } finally {
                                    if (a) throw r;
                                }
                            }
                            return o;
                        })(t, e) ||
                        (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return n(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === i && t.constructor && (i = t.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(t);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(t, e);
                        })(t, e) ||
                        (function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                function n(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                    return i;
                }
                t.exports = function (t) {
                    var n = e(t, 4),
                        i = n[1],
                        r = n[3];
                    if (!r) return i;
                    if ("function" == typeof btoa) {
                        var o = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                            s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),
                            a = "/*# ".concat(s, " */"),
                            l = r.sources.map(function (t) {
                                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                            });
                        return [i].concat(l).concat([a]).join("\n");
                    }
                    return [i].join("\n");
                };
            },
            70: function (t, e, n) {
                var i, r;
                !(function (o, s) {
                    "use strict";
                    (i = [n(755)]),
                        void 0 ===
                            (r = function (t) {
                                return (function (t, e, n, i) {
                                    var r,
                                        o,
                                        s,
                                        a,
                                        l,
                                        u,
                                        c = [],
                                        d = [],
                                        p = [],
                                        f = [],
                                        h = 0,
                                        g = 0,
                                        v = 1,
                                        m = !1,
                                        y = t(e),
                                        w = y.scrollTop(),
                                        x = !1,
                                        b = !1,
                                        T = !1,
                                        _ = !1,
                                        k = [],
                                        C = new Date().getTime(),
                                        S = !0,
                                        A = !1,
                                        E = 0,
                                        O = "onwheel" in n ? "wheel" : n.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll",
                                        M = { passive: !1 },
                                        P = {
                                            section: ".section",
                                            sectionName: "section-name",
                                            interstitialSection: "",
                                            easing: "easeOutExpo",
                                            scrollSpeed: 1100,
                                            offset: 0,
                                            scrollbars: !0,
                                            target: "html,body",
                                            standardScrollElements: !1,
                                            setHeights: !0,
                                            overflowScroll: !0,
                                            updateHash: !0,
                                            touchScroll: !0,
                                            before: function () {},
                                            after: function () {},
                                            afterResize: function () {},
                                            afterRender: function () {},
                                        };
                                    function $() {
                                        return e.innerHeight + P.offset;
                                    }
                                    function L(n, i, r, o) {
                                        if ((g === n && (r = !1), !0 === _)) return !0;
                                        if (d[n]) {
                                            if (((x = !1), !0 === S && ((S = !1), P.afterRender()), r && "function" == typeof P.before && !1 === P.before(n, p))) return !0;
                                            if (
                                                ((v = 1),
                                                (E = n ? c[n] : 0),
                                                !1 === S && g > n && !1 === o && f[n] && ((s = $()), (v = parseInt(p[n].outerHeight() / s)), (E = parseInt(c[n]) + (p[n].outerHeight() - s))),
                                                P.updateHash && P.sectionName && (!0 !== S || 0 !== n))
                                            )
                                                if (history.pushState)
                                                    try {
                                                        history.replaceState(null, null, d[n]);
                                                    } catch (t) {
                                                        e.console && console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.");
                                                    }
                                                else e.location.hash = d[n];
                                            if (((g = n), i)) t(P.target).stop().scrollTop(E), r && P.after(n, p);
                                            else {
                                                if (
                                                    ((b = !0),
                                                    t().velocity
                                                        ? t(P.target).stop().velocity("scroll", { duration: P.scrollSpeed, easing: P.easing, offset: E, mobileHA: !1 })
                                                        : t(P.target).stop().animate({ scrollTop: E }, P.scrollSpeed, P.easing),
                                                    e.location.hash.length && P.sectionName && e.console)
                                                )
                                                    try {
                                                        t(e.location.hash).length && console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.");
                                                    } catch (t) {}
                                                t(P.target)
                                                    .promise()
                                                    .done(function () {
                                                        (b = !1), (S = !1), r && P.after(n, p);
                                                    });
                                            }
                                        }
                                    }
                                    function D(t) {
                                        function e(e) {
                                            for (var n = 0, i = t.slice(Math.max(t.length - e, 1)), r = 0; r < i.length; r++) n += i[r];
                                            return Math.ceil(n / e);
                                        }
                                        return e(10) >= e(70);
                                    }
                                    var N = function (i) {
                                        function g(e) {
                                            t().velocity
                                                ? t(P.target).stop().velocity("scroll", { duration: P.scrollSpeed, easing: P.easing, offset: e, mobileHA: !1 })
                                                : t(P.target).stop().animate({ scrollTop: e }, P.scrollSpeed, P.easing);
                                        }
                                        function S(e) {
                                            e && (w = y.scrollTop());
                                            var n = P.section;
                                            (f = []),
                                                P.interstitialSection.length && (n += "," + P.interstitialSection),
                                                !1 === P.scrollbars && (P.overflowScroll = !1),
                                                (s = $()),
                                                t(n).each(function (e) {
                                                    var n = t(this);
                                                    P.setHeights
                                                        ? n.is(P.interstitialSection)
                                                            ? (f[e] = !1)
                                                            : n.css("height", "auto").outerHeight() < s || "hidden" === n.css("overflow")
                                                            ? (n.css({ height: s }), (f[e] = !1))
                                                            : (n.css({ height: n.outerHeight() }), P.overflowScroll ? (f[e] = !0) : (f[e] = !1))
                                                        : n.outerHeight() < s || !1 === P.overflowScroll
                                                        ? (f[e] = !1)
                                                        : (f[e] = !0);
                                                }),
                                                e && y.scrollTop(w);
                                        }
                                        function E(n, i) {
                                            var r = P.section;
                                            P.interstitialSection.length && (r += "," + P.interstitialSection),
                                                (c = []),
                                                (d = []),
                                                (p = []),
                                                t(r).each(function (n) {
                                                    var i = t(this);
                                                    (c[n] = n > 0 ? parseInt(i.offset().top) + P.offset : parseInt(i.offset().top)),
                                                        P.sectionName && i.data(P.sectionName)
                                                            ? (d[n] = "#" + i.data(P.sectionName).toString().replace(/ /g, "-"))
                                                            : !1 === i.is(P.interstitialSection)
                                                            ? (d[n] = "#" + (n + 1))
                                                            : ((d[n] = "#"), n === t(r).length - 1 && n > 1 && (c[n] = c[n - 1] + (parseInt(t(t(r)[n - 1]).outerHeight()) - parseInt(t(e).height())) + parseInt(i.outerHeight()))),
                                                        (p[n] = i);
                                                    try {
                                                        t(d[n]).length && e.console && console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.");
                                                    } catch (t) {}
                                                    e.location.hash === d[n] && ((h = n), (m = !0));
                                                }),
                                                !0 === n && L(h, !1, !1, !1);
                                        }
                                        function N() {
                                            return !f[h] || !((w = y.scrollTop()) > parseInt(c[h]));
                                        }
                                        function j() {
                                            return !f[h] || ((w = y.scrollTop()), (s = $()), !(w < parseInt(c[h]) + (p[h].outerHeight() - s) - 28));
                                        }
                                        (A = !0),
                                            (t.easing.easeOutExpo = function (t, e, n, i, r) {
                                                return e == r ? n + i : i * (1 - Math.pow(2, (-10 * e) / r)) + n;
                                            }),
                                            (a = {
                                                handleMousedown: function () {
                                                    if (!0 === _) return !0;
                                                    (x = !1), (T = !1);
                                                },
                                                handleMouseup: function () {
                                                    if (!0 === _) return !0;
                                                    (x = !0), T && a.calculateNearest(!1, !0);
                                                },
                                                handleScroll: function () {
                                                    if (!0 === _) return !0;
                                                    r && clearTimeout(r),
                                                        (r = setTimeout(function () {
                                                            if (((T = !0), !1 === x)) return !1;
                                                            (x = !1), a.calculateNearest(!1, !0);
                                                        }, 200));
                                                },
                                                calculateNearest: function (t, e) {
                                                    w = y.scrollTop();
                                                    for (var n, i = 1, r = c.length, o = 0, s = Math.abs(c[0] - w); i < r; i++) (n = Math.abs(c[i] - w)) < s && ((s = n), (o = i));
                                                    ((j() && o > h) || N()) && ((h = o), L(o, t, e, !1));
                                                },
                                                wheelHandler: function (n) {
                                                    if (!0 === _) return !0;
                                                    if (P.standardScrollElements && (t(n.target).is(P.standardScrollElements) || t(n.target).closest(P.standardScrollElements).length)) return !0;
                                                    f[h] || n.preventDefault();
                                                    var i,
                                                        r = new Date().getTime();
                                                    i = (n = n || e.event).originalEvent ? n.originalEvent.wheelDelta || -n.originalEvent.deltaY || -n.originalEvent.detail : n.wheelDelta || -n.deltaY || -n.detail;
                                                    var o = Math.max(-1, Math.min(1, i));
                                                    if ((k.length > 149 && k.shift(), k.push(Math.abs(i)), r - C > 200 && (k = []), (C = r), b)) return !1;
                                                    if (o < 0) {
                                                        if (h < c.length - 1 && j()) {
                                                            if (!D(k)) return !1;
                                                            n.preventDefault(), h++, (b = !0), L(h, !1, !0, !1);
                                                        }
                                                    } else if (o > 0 && h > 0 && N()) {
                                                        if (!D(k)) return !1;
                                                        n.preventDefault(), h--, (b = !0), L(h, !1, !0, !1);
                                                    }
                                                },
                                                keyHandler: function (e) {
                                                    return (
                                                        !0 === _ ||
                                                        !1 === n.activeElement.readOnly ||
                                                        !(!P.standardScrollElements || (!t(e.target).is(P.standardScrollElements) && !t(e.target).closest(P.standardScrollElements).length)) ||
                                                        (!0 !== b &&
                                                            void (38 == e.keyCode || 33 == e.keyCode
                                                                ? h > 0 && N() && (e.preventDefault(), L(--h, !1, !0, !1))
                                                                : (40 != e.keyCode && 34 != e.keyCode) || (h < c.length - 1 && j() && (e.preventDefault(), L(++h, !1, !0, !1)))))
                                                    );
                                                },
                                                init: function () {
                                                    P.scrollbars ? (y.on("mousedown", a.handleMousedown), y.on("mouseup", a.handleMouseup), y.on("scroll", a.handleScroll)) : t("body").css({ overflow: "hidden" }),
                                                        e.addEventListener(O, a.wheelHandler, { passive: !1 }),
                                                        y.on("keydown", a.keyHandler);
                                                },
                                            }),
                                            (l = {
                                                touches: { touchstart: { y: -1, x: -1 }, touchmove: { y: -1, x: -1 }, touchend: !1, direction: "undetermined" },
                                                options: { distance: 30, timeGap: 800, timeStamp: new Date().getTime() },
                                                touchHandler: function (e) {
                                                    if (!0 === _) return !0;
                                                    if (P.standardScrollElements && (t(e.target).is(P.standardScrollElements) || t(e.target).closest(P.standardScrollElements).length)) return !0;
                                                    var n;
                                                    if (void 0 !== e && void 0 !== e.touches)
                                                        switch (((n = e.touches[0]), e.type)) {
                                                            case "touchstart":
                                                                (l.touches.touchstart.y = n.pageY),
                                                                    (l.touches.touchmove.y = -1),
                                                                    (l.touches.touchstart.x = n.pageX),
                                                                    (l.touches.touchmove.x = -1),
                                                                    (l.options.timeStamp = new Date().getTime()),
                                                                    (l.touches.touchend = !1);
                                                            case "touchmove":
                                                                (l.touches.touchmove.y = n.pageY),
                                                                    (l.touches.touchmove.x = n.pageX),
                                                                    l.touches.touchstart.y !== l.touches.touchmove.y &&
                                                                        Math.abs(l.touches.touchstart.y - l.touches.touchmove.y) > Math.abs(l.touches.touchstart.x - l.touches.touchmove.x) &&
                                                                        (e.preventDefault(),
                                                                        (l.touches.direction = "y"),
                                                                        l.options.timeStamp + l.options.timeGap < new Date().getTime() &&
                                                                            0 == l.touches.touchend &&
                                                                            ((l.touches.touchend = !0),
                                                                            l.touches.touchstart.y > -1 &&
                                                                                Math.abs(l.touches.touchmove.y - l.touches.touchstart.y) > l.options.distance &&
                                                                                (l.touches.touchstart.y < l.touches.touchmove.y ? l.up() : l.down())));
                                                                break;
                                                            case "touchend":
                                                                !1 === l.touches[e.type] &&
                                                                    ((l.touches[e.type] = !0),
                                                                    l.touches.touchstart.y > -1 &&
                                                                        l.touches.touchmove.y > -1 &&
                                                                        "y" === l.touches.direction &&
                                                                        (Math.abs(l.touches.touchmove.y - l.touches.touchstart.y) > l.options.distance && (l.touches.touchstart.y < l.touches.touchmove.y ? l.up() : l.down()),
                                                                        (l.touches.touchstart.y = -1),
                                                                        (l.touches.touchstart.x = -1),
                                                                        (l.touches.direction = "undetermined")));
                                                        }
                                                },
                                                down: function () {
                                                    h < c.length &&
                                                        (j() && h < c.length - 1 ? L(++h, !1, !0, !1) : ((s = $()), Math.floor(p[h].height() / s) > v ? (g(parseInt(c[h]) + s * v), (v += 1)) : g(parseInt(c[h]) + (p[h].outerHeight() - s))));
                                                },
                                                up: function () {
                                                    h >= 0 && (N() && h > 0 ? L(--h, !1, !0, !1) : v > 2 ? ((s = $()), (v -= 1), g(parseInt(c[h]) + s * v)) : ((v = 1), g(parseInt(c[h]))));
                                                },
                                                init: function () {
                                                    n.addEventListener &&
                                                        P.touchScroll &&
                                                        (n.addEventListener("touchstart", l.touchHandler, M), n.addEventListener("touchmove", l.touchHandler, M), n.addEventListener("touchend", l.touchHandler, M));
                                                },
                                            }),
                                            (u = {
                                                refresh: function (t, e) {
                                                    clearTimeout(o),
                                                        (o = setTimeout(function () {
                                                            S(!0), E(e, !1), t && P.afterResize();
                                                        }, 400));
                                                },
                                                handleUpdate: function () {
                                                    u.refresh(!1, !1);
                                                },
                                                handleResize: function () {
                                                    u.refresh(!0, !1);
                                                },
                                                handleOrientation: function () {
                                                    u.refresh(!0, !0);
                                                },
                                            }),
                                            (P = t.extend(P, i)),
                                            S(!1),
                                            E(!1, !0),
                                            !0 === m
                                                ? L(h, !1, !0, !0)
                                                : setTimeout(function () {
                                                      a.calculateNearest(!0, !1);
                                                  }, 200),
                                            c.length && (a.init(), l.init(), y.on("resize", u.handleResize), n.addEventListener && e.addEventListener("orientationchange", u.handleOrientation, !1));
                                    };
                                    function j(t, e) {
                                        for (var n = d.length; n >= 0; n--) "string" == typeof t ? d[n] === t && ((h = n), L(n, e, !0, !0)) : n === t && ((h = n), L(n, e, !0, !0));
                                    }
                                    return (
                                        (N.move = function (e) {
                                            if (e === i) return !1;
                                            "number" != typeof e && e.originalEvent && (e = t(this).attr("href")), j(e, !1);
                                        }),
                                        (N.instantMove = function (t) {
                                            if (t === i) return !1;
                                            j(t, !0);
                                        }),
                                        (N.next = function () {
                                            h < d.length && L((h += 1), !1, !0, !0);
                                        }),
                                        (N.previous = function () {
                                            h > 0 && L((h -= 1), !1, !0, !0);
                                        }),
                                        (N.instantNext = function () {
                                            h < d.length && L((h += 1), !0, !0, !0);
                                        }),
                                        (N.instantPrevious = function () {
                                            h > 0 && L((h -= 1), !0, !0, !0);
                                        }),
                                        (N.destroy = function () {
                                            if (!A) return !1;
                                            P.setHeights &&
                                                t(P.section).each(function () {
                                                    t(this).css("height", "auto");
                                                }),
                                                y.off("resize", u.handleResize),
                                                P.scrollbars && (y.off("mousedown", a.handleMousedown), y.off("mouseup", a.handleMouseup), y.off("scroll", a.handleScroll)),
                                                e.removeEventListener(O, a.wheelHandler),
                                                y.off("keydown", a.keyHandler),
                                                n.addEventListener &&
                                                    P.touchScroll &&
                                                    (n.removeEventListener("touchstart", l.touchHandler, M), n.removeEventListener("touchmove", l.touchHandler, M), n.removeEventListener("touchend", l.touchHandler, M)),
                                                (c = []),
                                                (d = []),
                                                (p = []),
                                                (f = []),
                                                (S = !0),
                                                (A = !1);
                                        }),
                                        (N.update = function () {
                                            if (!A) return !1;
                                            u.handleUpdate();
                                        }),
                                        (N.current = function () {
                                            return p[h];
                                        }),
                                        (N.currentIndex = function () {
                                            return h;
                                        }),
                                        (N.disable = function () {
                                            _ = !0;
                                        }),
                                        (N.enable = function () {
                                            (_ = !1), A && a.calculateNearest(!1, !1);
                                        }),
                                        (N.isDisabled = function () {
                                            return _;
                                        }),
                                        (N.setOptions = function (n) {
                                            if (!A) return !1;
                                            "object" == typeof n ? ((P = t.extend(P, n)), u.handleUpdate()) : e.console && console.warn("Scrollify warning: setOptions expects an object.");
                                        }),
                                        (t.scrollify = N),
                                        N
                                    );
                                })(t, o, o.document);
                            }.apply(e, i)) || (t.exports = r);
                })("undefined" != typeof window ? window : this);
            },
            755: function (t, e) {
                var n;
                !(function (e, n) {
                    "use strict";
                    "object" == typeof t.exports
                        ? (t.exports = e.document
                              ? n(e, !0)
                              : function (t) {
                                    if (!t.document) throw new Error("jQuery requires a window with a document");
                                    return n(t);
                                })
                        : n(e);
                })("undefined" != typeof window ? window : this, function (i, r) {
                    "use strict";
                    var o = [],
                        s = Object.getPrototypeOf,
                        a = o.slice,
                        l = o.flat
                            ? function (t) {
                                  return o.flat.call(t);
                              }
                            : function (t) {
                                  return o.concat.apply([], t);
                              },
                        u = o.push,
                        c = o.indexOf,
                        d = {},
                        p = d.toString,
                        f = d.hasOwnProperty,
                        h = f.toString,
                        g = h.call(Object),
                        v = {},
                        m = function (t) {
                            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item;
                        },
                        y = function (t) {
                            return null != t && t === t.window;
                        },
                        w = i.document,
                        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
                    function b(t, e, n) {
                        var i,
                            r,
                            o = (n = n || w).createElement("script");
                        if (((o.text = t), e)) for (i in x) (r = e[i] || (e.getAttribute && e.getAttribute(i))) && o.setAttribute(i, r);
                        n.head.appendChild(o).parentNode.removeChild(o);
                    }
                    function T(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[p.call(t)] || "object" : typeof t;
                    }
                    var _ = "3.6.0",
                        k = function (t, e) {
                            return new k.fn.init(t, e);
                        };
                    function C(t) {
                        var e = !!t && "length" in t && t.length,
                            n = T(t);
                        return !m(t) && !y(t) && ("array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
                    }
                    (k.fn = k.prototype = {
                        jquery: _,
                        constructor: k,
                        length: 0,
                        toArray: function () {
                            return a.call(this);
                        },
                        get: function (t) {
                            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
                        },
                        pushStack: function (t) {
                            var e = k.merge(this.constructor(), t);
                            return (e.prevObject = this), e;
                        },
                        each: function (t) {
                            return k.each(this, t);
                        },
                        map: function (t) {
                            return this.pushStack(
                                k.map(this, function (e, n) {
                                    return t.call(e, n, e);
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
                                k.grep(this, function (t, e) {
                                    return (e + 1) % 2;
                                })
                            );
                        },
                        odd: function () {
                            return this.pushStack(
                                k.grep(this, function (t, e) {
                                    return e % 2;
                                })
                            );
                        },
                        eq: function (t) {
                            var e = this.length,
                                n = +t + (t < 0 ? e : 0);
                            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
                        },
                        end: function () {
                            return this.prevObject || this.constructor();
                        },
                        push: u,
                        sort: o.sort,
                        splice: o.splice,
                    }),
                        (k.extend = k.fn.extend = function () {
                            var t,
                                e,
                                n,
                                i,
                                r,
                                o,
                                s = arguments[0] || {},
                                a = 1,
                                l = arguments.length,
                                u = !1;
                            for ("boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++), "object" == typeof s || m(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                                if (null != (t = arguments[a]))
                                    for (e in t)
                                        (i = t[e]),
                                            "__proto__" !== e &&
                                                s !== i &&
                                                (u && i && (k.isPlainObject(i) || (r = Array.isArray(i)))
                                                    ? ((n = s[e]), (o = r && !Array.isArray(n) ? [] : r || k.isPlainObject(n) ? n : {}), (r = !1), (s[e] = k.extend(u, o, i)))
                                                    : void 0 !== i && (s[e] = i));
                            return s;
                        }),
                        k.extend({
                            expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (t) {
                                throw new Error(t);
                            },
                            noop: function () {},
                            isPlainObject: function (t) {
                                var e, n;
                                return !(!t || "[object Object]" !== p.call(t)) && (!(e = s(t)) || ("function" == typeof (n = f.call(e, "constructor") && e.constructor) && h.call(n) === g));
                            },
                            isEmptyObject: function (t) {
                                var e;
                                for (e in t) return !1;
                                return !0;
                            },
                            globalEval: function (t, e, n) {
                                b(t, { nonce: e && e.nonce }, n);
                            },
                            each: function (t, e) {
                                var n,
                                    i = 0;
                                if (C(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                                else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                                return t;
                            },
                            makeArray: function (t, e) {
                                var n = e || [];
                                return null != t && (C(Object(t)) ? k.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n;
                            },
                            inArray: function (t, e, n) {
                                return null == e ? -1 : c.call(e, t, n);
                            },
                            merge: function (t, e) {
                                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                                return (t.length = r), t;
                            },
                            grep: function (t, e, n) {
                                for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
                                return i;
                            },
                            map: function (t, e, n) {
                                var i,
                                    r,
                                    o = 0,
                                    s = [];
                                if (C(t)) for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                                else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
                                return l(s);
                            },
                            guid: 1,
                            support: v,
                        }),
                        "function" == typeof Symbol && (k.fn[Symbol.iterator] = o[Symbol.iterator]),
                        k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                            d["[object " + e + "]"] = e.toLowerCase();
                        });
                    var S = (function (t) {
                        var e,
                            n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            u,
                            c,
                            d,
                            p,
                            f,
                            h,
                            g,
                            v,
                            m,
                            y,
                            w,
                            x = "sizzle" + 1 * new Date(),
                            b = t.document,
                            T = 0,
                            _ = 0,
                            k = lt(),
                            C = lt(),
                            S = lt(),
                            A = lt(),
                            E = function (t, e) {
                                return t === e && (d = !0), 0;
                            },
                            O = {}.hasOwnProperty,
                            M = [],
                            P = M.pop,
                            $ = M.push,
                            L = M.push,
                            D = M.slice,
                            N = function (t, e) {
                                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                                return -1;
                            },
                            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            H = "[\\x20\\t\\r\\n\\f]",
                            I = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            R = "\\[[\\x20\\t\\r\\n\\f]*(" + I + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + H + "*\\]",
                            B = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                            z = new RegExp(H + "+", "g"),
                            q = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            F = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            X = new RegExp(H + "|>"),
                            U = new RegExp(B),
                            Y = new RegExp("^" + I + "$"),
                            V = {
                                ID: new RegExp("^#(" + I + ")"),
                                CLASS: new RegExp("^\\.(" + I + ")"),
                                TAG: new RegExp("^(" + I + "|[*])"),
                                ATTR: new RegExp("^" + R),
                                PSEUDO: new RegExp("^" + B),
                                CHILD: new RegExp(
                                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                                    "i"
                                ),
                                bool: new RegExp("^(?:" + j + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
                            },
                            G = /HTML$/i,
                            Q = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            tt = /[+~]/,
                            et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            nt = function (t, e) {
                                var n = "0x" + t.slice(1) - 65536;
                                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                            },
                            it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            rt = function (t, e) {
                                return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                            },
                            ot = function () {
                                p();
                            },
                            st = xt(
                                function (t) {
                                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            L.apply((M = D.call(b.childNodes)), b.childNodes), M[b.childNodes.length].nodeType;
                        } catch (t) {
                            L = {
                                apply: M.length
                                    ? function (t, e) {
                                          $.apply(t, D.call(e));
                                      }
                                    : function (t, e) {
                                          for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                                          t.length = n - 1;
                                      },
                            };
                        }
                        function at(t, e, i, r) {
                            var o,
                                a,
                                u,
                                c,
                                d,
                                h,
                                m,
                                y = e && e.ownerDocument,
                                b = e ? e.nodeType : 9;
                            if (((i = i || []), "string" != typeof t || !t || (1 !== b && 9 !== b && 11 !== b))) return i;
                            if (!r && (p(e), (e = e || f), g)) {
                                if (11 !== b && (d = Z.exec(t)))
                                    if ((o = d[1])) {
                                        if (9 === b) {
                                            if (!(u = e.getElementById(o))) return i;
                                            if (u.id === o) return i.push(u), i;
                                        } else if (y && (u = y.getElementById(o)) && w(e, u) && u.id === o) return i.push(u), i;
                                    } else {
                                        if (d[2]) return L.apply(i, e.getElementsByTagName(t)), i;
                                        if ((o = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(o)), i;
                                    }
                                if (n.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== b || "object" !== e.nodeName.toLowerCase())) {
                                    if (((m = t), (y = e), 1 === b && (X.test(t) || W.test(t)))) {
                                        for (((y = (tt.test(t) && mt(e.parentNode)) || e) === e && n.scope) || ((c = e.getAttribute("id")) ? (c = c.replace(it, rt)) : e.setAttribute("id", (c = x))), a = (h = s(t)).length; a--; )
                                            h[a] = (c ? "#" + c : ":scope") + " " + wt(h[a]);
                                        m = h.join(",");
                                    }
                                    try {
                                        return L.apply(i, y.querySelectorAll(m)), i;
                                    } catch (e) {
                                        A(t, !0);
                                    } finally {
                                        c === x && e.removeAttribute("id");
                                    }
                                }
                            }
                            return l(t.replace(q, "$1"), e, i, r);
                        }
                        function lt() {
                            var t = [];
                            return function e(n, r) {
                                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], (e[n + " "] = r);
                            };
                        }
                        function ut(t) {
                            return (t[x] = !0), t;
                        }
                        function ct(t) {
                            var e = f.createElement("fieldset");
                            try {
                                return !!t(e);
                            } catch (t) {
                                return !1;
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e), (e = null);
                            }
                        }
                        function dt(t, e) {
                            for (var n = t.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = e;
                        }
                        function pt(t, e) {
                            var n = e && t,
                                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                            if (i) return i;
                            if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                            return t ? 1 : -1;
                        }
                        function ft(t) {
                            return function (e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t;
                            };
                        }
                        function ht(t) {
                            return function (e) {
                                var n = e.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && e.type === t;
                            };
                        }
                        function gt(t) {
                            return function (e) {
                                return "form" in e
                                    ? e.parentNode && !1 === e.disabled
                                        ? "label" in e
                                            ? "label" in e.parentNode
                                                ? e.parentNode.disabled === t
                                                : e.disabled === t
                                            : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)
                                        : e.disabled === t
                                    : "label" in e && e.disabled === t;
                            };
                        }
                        function vt(t) {
                            return ut(function (e) {
                                return (
                                    (e = +e),
                                    ut(function (n, i) {
                                        for (var r, o = t([], n.length, e), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                                    })
                                );
                            });
                        }
                        function mt(t) {
                            return t && void 0 !== t.getElementsByTagName && t;
                        }
                        for (e in ((n = at.support = {}),
                        (o = at.isXML = function (t) {
                            var e = t && t.namespaceURI,
                                n = t && (t.ownerDocument || t).documentElement;
                            return !G.test(e || (n && n.nodeName) || "HTML");
                        }),
                        (p = at.setDocument = function (t) {
                            var e,
                                r,
                                s = t ? t.ownerDocument || t : b;
                            return s != f && 9 === s.nodeType && s.documentElement
                                ? ((h = (f = s).documentElement),
                                  (g = !o(f)),
                                  b != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)),
                                  (n.scope = ct(function (t) {
                                      return h.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
                                  })),
                                  (n.attributes = ct(function (t) {
                                      return (t.className = "i"), !t.getAttribute("className");
                                  })),
                                  (n.getElementsByTagName = ct(function (t) {
                                      return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
                                  })),
                                  (n.getElementsByClassName = K.test(f.getElementsByClassName)),
                                  (n.getById = ct(function (t) {
                                      return (h.appendChild(t).id = x), !f.getElementsByName || !f.getElementsByName(x).length;
                                  })),
                                  n.getById
                                      ? ((i.filter.ID = function (t) {
                                            var e = t.replace(et, nt);
                                            return function (t) {
                                                return t.getAttribute("id") === e;
                                            };
                                        }),
                                        (i.find.ID = function (t, e) {
                                            if (void 0 !== e.getElementById && g) {
                                                var n = e.getElementById(t);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((i.filter.ID = function (t) {
                                            var e = t.replace(et, nt);
                                            return function (t) {
                                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                                return n && n.value === e;
                                            };
                                        }),
                                        (i.find.ID = function (t, e) {
                                            if (void 0 !== e.getElementById && g) {
                                                var n,
                                                    i,
                                                    r,
                                                    o = e.getElementById(t);
                                                if (o) {
                                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                                    for (r = e.getElementsByName(t), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                                }
                                                return [];
                                            }
                                        })),
                                  (i.find.TAG = n.getElementsByTagName
                                      ? function (t, e) {
                                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                                        }
                                      : function (t, e) {
                                            var n,
                                                i = [],
                                                r = 0,
                                                o = e.getElementsByTagName(t);
                                            if ("*" === t) {
                                                for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                                return i;
                                            }
                                            return o;
                                        }),
                                  (i.find.CLASS =
                                      n.getElementsByClassName &&
                                      function (t, e) {
                                          if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
                                      }),
                                  (m = []),
                                  (v = []),
                                  (n.qsa = K.test(f.querySelectorAll)) &&
                                      (ct(function (t) {
                                          var e;
                                          (h.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              t.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + j + ")"),
                                              t.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                                              (e = f.createElement("input")).setAttribute("name", ""),
                                              t.appendChild(e),
                                              t.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                              t.querySelectorAll(":checked").length || v.push(":checked"),
                                              t.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"),
                                              t.querySelectorAll("\\\f"),
                                              v.push("[\\r\\n\\f]");
                                      }),
                                      ct(function (t) {
                                          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var e = f.createElement("input");
                                          e.setAttribute("type", "hidden"),
                                              t.appendChild(e).setAttribute("name", "D"),
                                              t.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                              2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                              (h.appendChild(t).disabled = !0),
                                              2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                              t.querySelectorAll("*,:x"),
                                              v.push(",.*:");
                                      })),
                                  (n.matchesSelector = K.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                                      ct(function (t) {
                                          (n.disconnectedMatch = y.call(t, "*")), y.call(t, "[s!='']:x"), m.push("!=", B);
                                      }),
                                  (v = v.length && new RegExp(v.join("|"))),
                                  (m = m.length && new RegExp(m.join("|"))),
                                  (e = K.test(h.compareDocumentPosition)),
                                  (w =
                                      e || K.test(h.contains)
                                          ? function (t, e) {
                                                var n = 9 === t.nodeType ? t.documentElement : t,
                                                    i = e && e.parentNode;
                                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                                            }
                                          : function (t, e) {
                                                if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                                return !1;
                                            }),
                                  (E = e
                                      ? function (t, e) {
                                            if (t === e) return (d = !0), 0;
                                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                            return (
                                                i ||
                                                (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                                                    ? t == f || (t.ownerDocument == b && w(b, t))
                                                        ? -1
                                                        : e == f || (e.ownerDocument == b && w(b, e))
                                                        ? 1
                                                        : c
                                                        ? N(c, t) - N(c, e)
                                                        : 0
                                                    : 4 & i
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (t, e) {
                                            if (t === e) return (d = !0), 0;
                                            var n,
                                                i = 0,
                                                r = t.parentNode,
                                                o = e.parentNode,
                                                s = [t],
                                                a = [e];
                                            if (!r || !o) return t == f ? -1 : e == f ? 1 : r ? -1 : o ? 1 : c ? N(c, t) - N(c, e) : 0;
                                            if (r === o) return pt(t, e);
                                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                                            for (; s[i] === a[i]; ) i++;
                                            return i ? pt(s[i], a[i]) : s[i] == b ? -1 : a[i] == b ? 1 : 0;
                                        }),
                                  f)
                                : f;
                        }),
                        (at.matches = function (t, e) {
                            return at(t, null, null, e);
                        }),
                        (at.matchesSelector = function (t, e) {
                            if ((p(t), n.matchesSelector && g && !A[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))))
                                try {
                                    var i = y.call(t, e);
                                    if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                                } catch (t) {
                                    A(e, !0);
                                }
                            return at(e, f, null, [t]).length > 0;
                        }),
                        (at.contains = function (t, e) {
                            return (t.ownerDocument || t) != f && p(t), w(t, e);
                        }),
                        (at.attr = function (t, e) {
                            (t.ownerDocument || t) != f && p(t);
                            var r = i.attrHandle[e.toLowerCase()],
                                o = r && O.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
                        }),
                        (at.escape = function (t) {
                            return (t + "").replace(it, rt);
                        }),
                        (at.error = function (t) {
                            throw new Error("Syntax error, unrecognized expression: " + t);
                        }),
                        (at.uniqueSort = function (t) {
                            var e,
                                i = [],
                                r = 0,
                                o = 0;
                            if (((d = !n.detectDuplicates), (c = !n.sortStable && t.slice(0)), t.sort(E), d)) {
                                for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
                                for (; r--; ) t.splice(i[r], 1);
                            }
                            return (c = null), t;
                        }),
                        (r = at.getText = function (t) {
                            var e,
                                n = "",
                                i = 0,
                                o = t.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof t.textContent) return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
                                } else if (3 === o || 4 === o) return t.nodeValue;
                            } else for (; (e = t[i++]); ) n += r(e);
                            return n;
                        }),
                        (i = at.selectors = {
                            cacheLength: 50,
                            createPseudo: ut,
                            match: V,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (t) {
                                    return (t[1] = t[1].replace(et, nt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                                },
                                CHILD: function (t) {
                                    return (
                                        (t[1] = t[1].toLowerCase()),
                                        "nth" === t[1].slice(0, 3)
                                            ? (t[3] || at.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                                            : t[3] && at.error(t[0]),
                                        t
                                    );
                                },
                                PSEUDO: function (t) {
                                    var e,
                                        n = !t[6] && t[2];
                                    return V.CHILD.test(t[0])
                                        ? null
                                        : (t[3] ? (t[2] = t[4] || t[5] || "") : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (t) {
                                    var e = t.replace(et, nt).toLowerCase();
                                    return "*" === t
                                        ? function () {
                                              return !0;
                                          }
                                        : function (t) {
                                              return t.nodeName && t.nodeName.toLowerCase() === e;
                                          };
                                },
                                CLASS: function (t) {
                                    var e = k[t + " "];
                                    return (
                                        e ||
                                        ((e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + H + "|$)")) &&
                                            k(t, function (t) {
                                                return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (t, e, n) {
                                    return function (i) {
                                        var r = at.attr(i, t);
                                        return null == r
                                            ? "!=" === e
                                            : !e ||
                                                  ((r += ""),
                                                  "=" === e
                                                      ? r === n
                                                      : "!=" === e
                                                      ? r !== n
                                                      : "^=" === e
                                                      ? n && 0 === r.indexOf(n)
                                                      : "*=" === e
                                                      ? n && r.indexOf(n) > -1
                                                      : "$=" === e
                                                      ? n && r.slice(-n.length) === n
                                                      : "~=" === e
                                                      ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1
                                                      : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (t, e, n, i, r) {
                                    var o = "nth" !== t.slice(0, 3),
                                        s = "last" !== t.slice(-4),
                                        a = "of-type" === e;
                                    return 1 === i && 0 === r
                                        ? function (t) {
                                              return !!t.parentNode;
                                          }
                                        : function (e, n, l) {
                                              var u,
                                                  c,
                                                  d,
                                                  p,
                                                  f,
                                                  h,
                                                  g = o !== s ? "nextSibling" : "previousSibling",
                                                  v = e.parentNode,
                                                  m = a && e.nodeName.toLowerCase(),
                                                  y = !l && !a,
                                                  w = !1;
                                              if (v) {
                                                  if (o) {
                                                      for (; g; ) {
                                                          for (p = e; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                          h = g = "only" === t && !h && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                                                      for (
                                                          w = (f = (u = (c = (d = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && u[1]) && u[2], p = f && v.childNodes[f];
                                                          (p = (++f && p && p[g]) || (w = f = 0) || h.pop());

                                                      )
                                                          if (1 === p.nodeType && ++w && p === e) {
                                                              c[t] = [T, f, w];
                                                              break;
                                                          }
                                                  } else if ((y && (w = f = (u = (c = (d = (p = e)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && u[1]), !1 === w))
                                                      for (
                                                          ;
                                                          (p = (++f && p && p[g]) || (w = f = 0) || h.pop()) &&
                                                          ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++w || (y && ((c = (d = p[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [T, w]), p !== e));

                                                      );
                                                  return (w -= r) === i || (w % i == 0 && w / i >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (t, e) {
                                    var n,
                                        r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                    return r[x]
                                        ? r(e)
                                        : r.length > 1
                                        ? ((n = [t, t, "", e]),
                                          i.setFilters.hasOwnProperty(t.toLowerCase())
                                              ? ut(function (t, n) {
                                                    for (var i, o = r(t, e), s = o.length; s--; ) t[(i = N(t, o[s]))] = !(n[i] = o[s]);
                                                })
                                              : function (t) {
                                                    return r(t, 0, n);
                                                })
                                        : r;
                                },
                            },
                            pseudos: {
                                not: ut(function (t) {
                                    var e = [],
                                        n = [],
                                        i = a(t.replace(q, "$1"));
                                    return i[x]
                                        ? ut(function (t, e, n, r) {
                                              for (var o, s = i(t, null, r, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                                          })
                                        : function (t, r, o) {
                                              return (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop();
                                          };
                                }),
                                has: ut(function (t) {
                                    return function (e) {
                                        return at(t, e).length > 0;
                                    };
                                }),
                                contains: ut(function (t) {
                                    return (
                                        (t = t.replace(et, nt)),
                                        function (e) {
                                            return (e.textContent || r(e)).indexOf(t) > -1;
                                        }
                                    );
                                }),
                                lang: ut(function (t) {
                                    return (
                                        Y.test(t || "") || at.error("unsupported lang: " + t),
                                        (t = t.replace(et, nt).toLowerCase()),
                                        function (e) {
                                            var n;
                                            do {
                                                if ((n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                            } while ((e = e.parentNode) && 1 === e.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (e) {
                                    var n = t.location && t.location.hash;
                                    return n && n.slice(1) === e.id;
                                },
                                root: function (t) {
                                    return t === h;
                                },
                                focus: function (t) {
                                    return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                                },
                                enabled: gt(!1),
                                disabled: gt(!0),
                                checked: function (t) {
                                    var e = t.nodeName.toLowerCase();
                                    return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                                },
                                selected: function (t) {
                                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                                },
                                empty: function (t) {
                                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (t) {
                                    return !i.pseudos.empty(t);
                                },
                                header: function (t) {
                                    return J.test(t.nodeName);
                                },
                                input: function (t) {
                                    return Q.test(t.nodeName);
                                },
                                button: function (t) {
                                    var e = t.nodeName.toLowerCase();
                                    return ("input" === e && "button" === t.type) || "button" === e;
                                },
                                text: function (t) {
                                    var e;
                                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                                },
                                first: vt(function () {
                                    return [0];
                                }),
                                last: vt(function (t, e) {
                                    return [e - 1];
                                }),
                                eq: vt(function (t, e, n) {
                                    return [n < 0 ? n + e : n];
                                }),
                                even: vt(function (t, e) {
                                    for (var n = 0; n < e; n += 2) t.push(n);
                                    return t;
                                }),
                                odd: vt(function (t, e) {
                                    for (var n = 1; n < e; n += 2) t.push(n);
                                    return t;
                                }),
                                lt: vt(function (t, e, n) {
                                    for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i);
                                    return t;
                                }),
                                gt: vt(function (t, e, n) {
                                    for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                                    return t;
                                }),
                            },
                        }),
                        (i.pseudos.nth = i.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            i.pseudos[e] = ft(e);
                        for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ht(e);
                        function yt() {}
                        function wt(t) {
                            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                            return i;
                        }
                        function xt(t, e, n) {
                            var i = e.dir,
                                r = e.next,
                                o = r || i,
                                s = n && "parentNode" === o,
                                a = _++;
                            return e.first
                                ? function (e, n, r) {
                                      for (; (e = e[i]); ) if (1 === e.nodeType || s) return t(e, n, r);
                                      return !1;
                                  }
                                : function (e, n, l) {
                                      var u,
                                          c,
                                          d,
                                          p = [T, a];
                                      if (l) {
                                          for (; (e = e[i]); ) if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                                      } else
                                          for (; (e = e[i]); )
                                              if (1 === e.nodeType || s)
                                                  if (((c = (d = e[x] || (e[x] = {}))[e.uniqueID] || (d[e.uniqueID] = {})), r && r === e.nodeName.toLowerCase())) e = e[i] || e;
                                                  else {
                                                      if ((u = c[o]) && u[0] === T && u[1] === a) return (p[2] = u[2]);
                                                      if (((c[o] = p), (p[2] = t(e, n, l)))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function bt(t) {
                            return t.length > 1
                                ? function (e, n, i) {
                                      for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                                      return !0;
                                  }
                                : t[0];
                        }
                        function Tt(t, e, n, i, r) {
                            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++) (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), u && e.push(a)));
                            return s;
                        }
                        function _t(t, e, n, i, r, o) {
                            return (
                                i && !i[x] && (i = _t(i)),
                                r && !r[x] && (r = _t(r, o)),
                                ut(function (o, s, a, l) {
                                    var u,
                                        c,
                                        d,
                                        p = [],
                                        f = [],
                                        h = s.length,
                                        g =
                                            o ||
                                            (function (t, e, n) {
                                                for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                                                return n;
                                            })(e || "*", a.nodeType ? [a] : a, []),
                                        v = !t || (!o && e) ? g : Tt(g, p, t, a, l),
                                        m = n ? (r || (o ? t : h || i) ? [] : s) : v;
                                    if ((n && n(v, m, a, l), i)) for (u = Tt(m, f), i(u, [], a, l), c = u.length; c--; ) (d = u[c]) && (m[f[c]] = !(v[f[c]] = d));
                                    if (o) {
                                        if (r || t) {
                                            if (r) {
                                                for (u = [], c = m.length; c--; ) (d = m[c]) && u.push((v[c] = d));
                                                r(null, (m = []), u, l);
                                            }
                                            for (c = m.length; c--; ) (d = m[c]) && (u = r ? N(o, d) : p[c]) > -1 && (o[u] = !(s[u] = d));
                                        }
                                    } else (m = Tt(m === s ? m.splice(h, m.length) : m)), r ? r(null, s, m, l) : L.apply(s, m);
                                })
                            );
                        }
                        function kt(t) {
                            for (
                                var e,
                                    n,
                                    r,
                                    o = t.length,
                                    s = i.relative[t[0].type],
                                    a = s || i.relative[" "],
                                    l = s ? 1 : 0,
                                    c = xt(
                                        function (t) {
                                            return t === e;
                                        },
                                        a,
                                        !0
                                    ),
                                    d = xt(
                                        function (t) {
                                            return N(e, t) > -1;
                                        },
                                        a,
                                        !0
                                    ),
                                    p = [
                                        function (t, n, i) {
                                            var r = (!s && (i || n !== u)) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
                                            return (e = null), r;
                                        },
                                    ];
                                l < o;
                                l++
                            )
                                if ((n = i.relative[t[l].type])) p = [xt(bt(p), n)];
                                else {
                                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                                        for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                                        return _t(
                                            l > 1 && bt(p),
                                            l > 1 && wt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(q, "$1"),
                                            n,
                                            l < r && kt(t.slice(l, r)),
                                            r < o && kt((t = t.slice(r))),
                                            r < o && wt(t)
                                        );
                                    }
                                    p.push(n);
                                }
                            return bt(p);
                        }
                        return (
                            (yt.prototype = i.filters = i.pseudos),
                            (i.setFilters = new yt()),
                            (s = at.tokenize = function (t, e) {
                                var n,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    u,
                                    c = C[t + " "];
                                if (c) return e ? 0 : c.slice(0);
                                for (a = t, l = [], u = i.preFilter; a; ) {
                                    for (s in ((n && !(r = F.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                                    (n = !1),
                                    (r = W.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(q, " ") }), (a = a.slice(n.length))),
                                    i.filter))
                                        !(r = V[s].exec(a)) || (u[s] && !(r = u[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                                    if (!n) break;
                                }
                                return e ? a.length : a ? at.error(t) : C(t, l).slice(0);
                            }),
                            (a = at.compile = function (t, e) {
                                var n,
                                    r = [],
                                    o = [],
                                    a = S[t + " "];
                                if (!a) {
                                    for (e || (e = s(t)), n = e.length; n--; ) (a = kt(e[n]))[x] ? r.push(a) : o.push(a);
                                    (a = S(
                                        t,
                                        (function (t, e) {
                                            var n = e.length > 0,
                                                r = t.length > 0,
                                                o = function (o, s, a, l, c) {
                                                    var d,
                                                        h,
                                                        v,
                                                        m = 0,
                                                        y = "0",
                                                        w = o && [],
                                                        x = [],
                                                        b = u,
                                                        _ = o || (r && i.find.TAG("*", c)),
                                                        k = (T += null == b ? 1 : Math.random() || 0.1),
                                                        C = _.length;
                                                    for (c && (u = s == f || s || c); y !== C && null != (d = _[y]); y++) {
                                                        if (r && d) {
                                                            for (h = 0, s || d.ownerDocument == f || (p(d), (a = !g)); (v = t[h++]); )
                                                                if (v(d, s || f, a)) {
                                                                    l.push(d);
                                                                    break;
                                                                }
                                                            c && (T = k);
                                                        }
                                                        n && ((d = !v && d) && m--, o && w.push(d));
                                                    }
                                                    if (((m += y), n && y !== m)) {
                                                        for (h = 0; (v = e[h++]); ) v(w, x, s, a);
                                                        if (o) {
                                                            if (m > 0) for (; y--; ) w[y] || x[y] || (x[y] = P.call(l));
                                                            x = Tt(x);
                                                        }
                                                        L.apply(l, x), c && !o && x.length > 0 && m + e.length > 1 && at.uniqueSort(l);
                                                    }
                                                    return c && ((T = k), (u = b)), w;
                                                };
                                            return n ? ut(o) : o;
                                        })(o, r)
                                    )),
                                        (a.selector = t);
                                }
                                return a;
                            }),
                            (l = at.select = function (t, e, n, r) {
                                var o,
                                    l,
                                    u,
                                    c,
                                    d,
                                    p = "function" == typeof t && t,
                                    f = !r && s((t = p.selector || t));
                                if (((n = n || []), 1 === f.length)) {
                                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                                        if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                                        p && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                                    }
                                    for (o = V.needsContext.test(t) ? 0 : l.length; o-- && ((u = l[o]), !i.relative[(c = u.type)]); )
                                        if ((d = i.find[c]) && (r = d(u.matches[0].replace(et, nt), (tt.test(l[0].type) && mt(e.parentNode)) || e))) {
                                            if ((l.splice(o, 1), !(t = r.length && wt(l)))) return L.apply(n, r), n;
                                            break;
                                        }
                                }
                                return (p || a(t, f))(r, e, !g, n, !e || (tt.test(t) && mt(e.parentNode)) || e), n;
                            }),
                            (n.sortStable = x.split("").sort(E).join("") === x),
                            (n.detectDuplicates = !!d),
                            p(),
                            (n.sortDetached = ct(function (t) {
                                return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
                            })),
                            ct(function (t) {
                                return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                            }) ||
                                dt("type|href|height|width", function (t, e, n) {
                                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                ct(function (t) {
                                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                                })) ||
                                dt("value", function (t, e, n) {
                                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                                }),
                            ct(function (t) {
                                return null == t.getAttribute("disabled");
                            }) ||
                                dt(j, function (t, e, n) {
                                    var i;
                                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
                                }),
                            at
                        );
                    })(i);
                    (k.find = S), (k.expr = S.selectors), (k.expr[":"] = k.expr.pseudos), (k.uniqueSort = k.unique = S.uniqueSort), (k.text = S.getText), (k.isXMLDoc = S.isXML), (k.contains = S.contains), (k.escapeSelector = S.escape);
                    var A = function (t, e, n) {
                            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                                if (1 === t.nodeType) {
                                    if (r && k(t).is(n)) break;
                                    i.push(t);
                                }
                            return i;
                        },
                        E = function (t, e) {
                            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                            return n;
                        },
                        O = k.expr.match.needsContext;
                    function M(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
                    }
                    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function $(t, e, n) {
                        return m(e)
                            ? k.grep(t, function (t, i) {
                                  return !!e.call(t, i, t) !== n;
                              })
                            : e.nodeType
                            ? k.grep(t, function (t) {
                                  return (t === e) !== n;
                              })
                            : "string" != typeof e
                            ? k.grep(t, function (t) {
                                  return c.call(e, t) > -1 !== n;
                              })
                            : k.filter(e, t, n);
                    }
                    (k.filter = function (t, e, n) {
                        var i = e[0];
                        return (
                            n && (t = ":not(" + t + ")"),
                            1 === e.length && 1 === i.nodeType
                                ? k.find.matchesSelector(i, t)
                                    ? [i]
                                    : []
                                : k.find.matches(
                                      t,
                                      k.grep(e, function (t) {
                                          return 1 === t.nodeType;
                                      })
                                  )
                        );
                    }),
                        k.fn.extend({
                            find: function (t) {
                                var e,
                                    n,
                                    i = this.length,
                                    r = this;
                                if ("string" != typeof t)
                                    return this.pushStack(
                                        k(t).filter(function () {
                                            for (e = 0; e < i; e++) if (k.contains(r[e], this)) return !0;
                                        })
                                    );
                                for (n = this.pushStack([]), e = 0; e < i; e++) k.find(t, r[e], n);
                                return i > 1 ? k.uniqueSort(n) : n;
                            },
                            filter: function (t) {
                                return this.pushStack($(this, t || [], !1));
                            },
                            not: function (t) {
                                return this.pushStack($(this, t || [], !0));
                            },
                            is: function (t) {
                                return !!$(this, "string" == typeof t && O.test(t) ? k(t) : t || [], !1).length;
                            },
                        });
                    var L,
                        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    ((k.fn.init = function (t, e, n) {
                        var i, r;
                        if (!t) return this;
                        if (((n = n || L), "string" == typeof t)) {
                            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || (!i[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                            if (i[1]) {
                                if (((e = e instanceof k ? e[0] : e), k.merge(this, k.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : w, !0)), P.test(i[1]) && k.isPlainObject(e)))
                                    for (i in e) m(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                                return this;
                            }
                            return (r = w.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
                        }
                        return t.nodeType ? ((this[0] = t), (this.length = 1), this) : m(t) ? (void 0 !== n.ready ? n.ready(t) : t(k)) : k.makeArray(t, this);
                    }).prototype = k.fn),
                        (L = k(w));
                    var N = /^(?:parents|prev(?:Until|All))/,
                        j = { children: !0, contents: !0, next: !0, prev: !0 };
                    function H(t, e) {
                        for (; (t = t[e]) && 1 !== t.nodeType; );
                        return t;
                    }
                    k.fn.extend({
                        has: function (t) {
                            var e = k(t, this),
                                n = e.length;
                            return this.filter(function () {
                                for (var t = 0; t < n; t++) if (k.contains(this, e[t])) return !0;
                            });
                        },
                        closest: function (t, e) {
                            var n,
                                i = 0,
                                r = this.length,
                                o = [],
                                s = "string" != typeof t && k(t);
                            if (!O.test(t))
                                for (; i < r; i++)
                                    for (n = this[i]; n && n !== e; n = n.parentNode)
                                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, t))) {
                                            o.push(n);
                                            break;
                                        }
                            return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
                        },
                        index: function (t) {
                            return t ? ("string" == typeof t ? c.call(k(t), this[0]) : c.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        },
                        add: function (t, e) {
                            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))));
                        },
                        addBack: function (t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                        },
                    }),
                        k.each(
                            {
                                parent: function (t) {
                                    var e = t.parentNode;
                                    return e && 11 !== e.nodeType ? e : null;
                                },
                                parents: function (t) {
                                    return A(t, "parentNode");
                                },
                                parentsUntil: function (t, e, n) {
                                    return A(t, "parentNode", n);
                                },
                                next: function (t) {
                                    return H(t, "nextSibling");
                                },
                                prev: function (t) {
                                    return H(t, "previousSibling");
                                },
                                nextAll: function (t) {
                                    return A(t, "nextSibling");
                                },
                                prevAll: function (t) {
                                    return A(t, "previousSibling");
                                },
                                nextUntil: function (t, e, n) {
                                    return A(t, "nextSibling", n);
                                },
                                prevUntil: function (t, e, n) {
                                    return A(t, "previousSibling", n);
                                },
                                siblings: function (t) {
                                    return E((t.parentNode || {}).firstChild, t);
                                },
                                children: function (t) {
                                    return E(t.firstChild);
                                },
                                contents: function (t) {
                                    return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (M(t, "template") && (t = t.content || t), k.merge([], t.childNodes));
                                },
                            },
                            function (t, e) {
                                k.fn[t] = function (n, i) {
                                    var r = k.map(this, e, n);
                                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = k.filter(i, r)), this.length > 1 && (j[t] || k.uniqueSort(r), N.test(t) && r.reverse()), this.pushStack(r);
                                };
                            }
                        );
                    var I = /[^\x20\t\r\n\f]+/g;
                    function R(t) {
                        return t;
                    }
                    function B(t) {
                        throw t;
                    }
                    function z(t, e, n, i) {
                        var r;
                        try {
                            t && m((r = t.promise)) ? r.call(t).done(e).fail(n) : t && m((r = t.then)) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i));
                        } catch (t) {
                            n.apply(void 0, [t]);
                        }
                    }
                    (k.Callbacks = function (t) {
                        t =
                            "string" == typeof t
                                ? (function (t) {
                                      var e = {};
                                      return (
                                          k.each(t.match(I) || [], function (t, n) {
                                              e[n] = !0;
                                          }),
                                          e
                                      );
                                  })(t)
                                : k.extend({}, t);
                        var e,
                            n,
                            i,
                            r,
                            o = [],
                            s = [],
                            a = -1,
                            l = function () {
                                for (r = r || t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && ((a = o.length), (n = !1));
                                t.memory || (n = !1), (e = !1), r && (o = n ? [] : "");
                            },
                            u = {
                                add: function () {
                                    return (
                                        o &&
                                            (n && !e && ((a = o.length - 1), s.push(n)),
                                            (function e(n) {
                                                k.each(n, function (n, i) {
                                                    m(i) ? (t.unique && u.has(i)) || o.push(i) : i && i.length && "string" !== T(i) && e(i);
                                                });
                                            })(arguments),
                                            n && !e && l()),
                                        this
                                    );
                                },
                                remove: function () {
                                    return (
                                        k.each(arguments, function (t, e) {
                                            for (var n; (n = k.inArray(e, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                                        }),
                                        this
                                    );
                                },
                                has: function (t) {
                                    return t ? k.inArray(t, o) > -1 : o.length > 0;
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
                                    return (r = s = []), n || e || (o = n = ""), this;
                                },
                                locked: function () {
                                    return !!r;
                                },
                                fireWith: function (t, n) {
                                    return r || ((n = [t, (n = n || []).slice ? n.slice() : n]), s.push(n), e || l()), this;
                                },
                                fire: function () {
                                    return u.fireWith(this, arguments), this;
                                },
                                fired: function () {
                                    return !!i;
                                },
                            };
                        return u;
                    }),
                        k.extend({
                            Deferred: function (t) {
                                var e = [
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
                                        catch: function (t) {
                                            return r.then(null, t);
                                        },
                                        pipe: function () {
                                            var t = arguments;
                                            return k
                                                .Deferred(function (n) {
                                                    k.each(e, function (e, i) {
                                                        var r = m(t[i[4]]) && t[i[4]];
                                                        o[i[1]](function () {
                                                            var t = r && r.apply(this, arguments);
                                                            t && m(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments);
                                                        });
                                                    }),
                                                        (t = null);
                                                })
                                                .promise();
                                        },
                                        then: function (t, n, r) {
                                            var o = 0;
                                            function s(t, e, n, r) {
                                                return function () {
                                                    var a = this,
                                                        l = arguments,
                                                        u = function () {
                                                            var i, u;
                                                            if (!(t < o)) {
                                                                if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                                (u = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                                                    m(u)
                                                                        ? r
                                                                            ? u.call(i, s(o, e, R, r), s(o, e, B, r))
                                                                            : (o++, u.call(i, s(o, e, R, r), s(o, e, B, r), s(o, e, R, e.notifyWith)))
                                                                        : (n !== R && ((a = void 0), (l = [i])), (r || e.resolveWith)(a, l));
                                                            }
                                                        },
                                                        c = r
                                                            ? u
                                                            : function () {
                                                                  try {
                                                                      u();
                                                                  } catch (i) {
                                                                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(i, c.stackTrace), t + 1 >= o && (n !== B && ((a = void 0), (l = [i])), e.rejectWith(a, l));
                                                                  }
                                                              };
                                                    t ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), i.setTimeout(c));
                                                };
                                            }
                                            return k
                                                .Deferred(function (i) {
                                                    e[0][3].add(s(0, i, m(r) ? r : R, i.notifyWith)), e[1][3].add(s(0, i, m(t) ? t : R)), e[2][3].add(s(0, i, m(n) ? n : B));
                                                })
                                                .promise();
                                        },
                                        promise: function (t) {
                                            return null != t ? k.extend(t, r) : r;
                                        },
                                    },
                                    o = {};
                                return (
                                    k.each(e, function (t, i) {
                                        var s = i[2],
                                            a = i[5];
                                        (r[i[1]] = s.add),
                                            a &&
                                                s.add(
                                                    function () {
                                                        n = a;
                                                    },
                                                    e[3 - t][2].disable,
                                                    e[3 - t][3].disable,
                                                    e[0][2].lock,
                                                    e[0][3].lock
                                                ),
                                            s.add(i[3].fire),
                                            (o[i[0]] = function () {
                                                return o[i[0] + "With"](this === o ? void 0 : this, arguments), this;
                                            }),
                                            (o[i[0] + "With"] = s.fireWith);
                                    }),
                                    r.promise(o),
                                    t && t.call(o, o),
                                    o
                                );
                            },
                            when: function (t) {
                                var e = arguments.length,
                                    n = e,
                                    i = Array(n),
                                    r = a.call(arguments),
                                    o = k.Deferred(),
                                    s = function (t) {
                                        return function (n) {
                                            (i[t] = this), (r[t] = arguments.length > 1 ? a.call(arguments) : n), --e || o.resolveWith(i, r);
                                        };
                                    };
                                if (e <= 1 && (z(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || m(r[n] && r[n].then))) return o.then();
                                for (; n--; ) z(r[n], s(n), o.reject);
                                return o.promise();
                            },
                        });
                    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    (k.Deferred.exceptionHook = function (t, e) {
                        i.console && i.console.warn && t && q.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
                    }),
                        (k.readyException = function (t) {
                            i.setTimeout(function () {
                                throw t;
                            });
                        });
                    var F = k.Deferred();
                    function W() {
                        w.removeEventListener("DOMContentLoaded", W), i.removeEventListener("load", W), k.ready();
                    }
                    (k.fn.ready = function (t) {
                        return (
                            F.then(t).catch(function (t) {
                                k.readyException(t);
                            }),
                            this
                        );
                    }),
                        k.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function (t) {
                                (!0 === t ? --k.readyWait : k.isReady) || ((k.isReady = !0), (!0 !== t && --k.readyWait > 0) || F.resolveWith(w, [k]));
                            },
                        }),
                        (k.ready.then = F.then),
                        "complete" === w.readyState || ("loading" !== w.readyState && !w.documentElement.doScroll) ? i.setTimeout(k.ready) : (w.addEventListener("DOMContentLoaded", W), i.addEventListener("load", W));
                    var X = function (t, e, n, i, r, o, s) {
                            var a = 0,
                                l = t.length,
                                u = null == n;
                            if ("object" === T(n)) for (a in ((r = !0), n)) X(t, e, a, n[a], !0, o, s);
                            else if (
                                void 0 !== i &&
                                ((r = !0),
                                m(i) || (s = !0),
                                u &&
                                    (s
                                        ? (e.call(t, i), (e = null))
                                        : ((u = e),
                                          (e = function (t, e, n) {
                                              return u.call(k(t), n);
                                          }))),
                                e)
                            )
                                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
                        },
                        U = /^-ms-/,
                        Y = /-([a-z])/g;
                    function V(t, e) {
                        return e.toUpperCase();
                    }
                    function G(t) {
                        return t.replace(U, "ms-").replace(Y, V);
                    }
                    var Q = function (t) {
                        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
                    };
                    function J() {
                        this.expando = k.expando + J.uid++;
                    }
                    (J.uid = 1),
                        (J.prototype = {
                            cache: function (t) {
                                var e = t[this.expando];
                                return e || ((e = {}), Q(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
                            },
                            set: function (t, e, n) {
                                var i,
                                    r = this.cache(t);
                                if ("string" == typeof e) r[G(e)] = n;
                                else for (i in e) r[G(i)] = e[i];
                                return r;
                            },
                            get: function (t, e) {
                                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)];
                            },
                            access: function (t, e, n) {
                                return void 0 === e || (e && "string" == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
                            },
                            remove: function (t, e) {
                                var n,
                                    i = t[this.expando];
                                if (void 0 !== i) {
                                    if (void 0 !== e) {
                                        n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in i ? [e] : e.match(I) || []).length;
                                        for (; n--; ) delete i[e[n]];
                                    }
                                    (void 0 === e || k.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                                }
                            },
                            hasData: function (t) {
                                var e = t[this.expando];
                                return void 0 !== e && !k.isEmptyObject(e);
                            },
                        });
                    var K = new J(),
                        Z = new J(),
                        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        et = /[A-Z]/g;
                    function nt(t, e, n) {
                        var i;
                        if (void 0 === n && 1 === t.nodeType)
                            if (((i = "data-" + e.replace(et, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
                                try {
                                    n = (function (t) {
                                        return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t));
                                    })(n);
                                } catch (t) {}
                                Z.set(t, e, n);
                            } else n = void 0;
                        return n;
                    }
                    k.extend({
                        hasData: function (t) {
                            return Z.hasData(t) || K.hasData(t);
                        },
                        data: function (t, e, n) {
                            return Z.access(t, e, n);
                        },
                        removeData: function (t, e) {
                            Z.remove(t, e);
                        },
                        _data: function (t, e, n) {
                            return K.access(t, e, n);
                        },
                        _removeData: function (t, e) {
                            K.remove(t, e);
                        },
                    }),
                        k.fn.extend({
                            data: function (t, e) {
                                var n,
                                    i,
                                    r,
                                    o = this[0],
                                    s = o && o.attributes;
                                if (void 0 === t) {
                                    if (this.length && ((r = Z.get(o)), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                                        for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = G(i.slice(5))), nt(o, i, r[i]));
                                        K.set(o, "hasDataAttrs", !0);
                                    }
                                    return r;
                                }
                                return "object" == typeof t
                                    ? this.each(function () {
                                          Z.set(this, t);
                                      })
                                    : X(
                                          this,
                                          function (e) {
                                              var n;
                                              if (o && void 0 === e) return void 0 !== (n = Z.get(o, t)) || void 0 !== (n = nt(o, t)) ? n : void 0;
                                              this.each(function () {
                                                  Z.set(this, t, e);
                                              });
                                          },
                                          null,
                                          e,
                                          arguments.length > 1,
                                          null,
                                          !0
                                      );
                            },
                            removeData: function (t) {
                                return this.each(function () {
                                    Z.remove(this, t);
                                });
                            },
                        }),
                        k.extend({
                            queue: function (t, e, n) {
                                var i;
                                if (t) return (e = (e || "fx") + "queue"), (i = K.get(t, e)), n && (!i || Array.isArray(n) ? (i = K.access(t, e, k.makeArray(n))) : i.push(n)), i || [];
                            },
                            dequeue: function (t, e) {
                                e = e || "fx";
                                var n = k.queue(t, e),
                                    i = n.length,
                                    r = n.shift(),
                                    o = k._queueHooks(t, e);
                                "inprogress" === r && ((r = n.shift()), i--),
                                    r &&
                                        ("fx" === e && n.unshift("inprogress"),
                                        delete o.stop,
                                        r.call(
                                            t,
                                            function () {
                                                k.dequeue(t, e);
                                            },
                                            o
                                        )),
                                    !i && o && o.empty.fire();
                            },
                            _queueHooks: function (t, e) {
                                var n = e + "queueHooks";
                                return (
                                    K.get(t, n) ||
                                    K.access(t, n, {
                                        empty: k.Callbacks("once memory").add(function () {
                                            K.remove(t, [e + "queue", n]);
                                        }),
                                    })
                                );
                            },
                        }),
                        k.fn.extend({
                            queue: function (t, e) {
                                var n = 2;
                                return (
                                    "string" != typeof t && ((e = t), (t = "fx"), n--),
                                    arguments.length < n
                                        ? k.queue(this[0], t)
                                        : void 0 === e
                                        ? this
                                        : this.each(function () {
                                              var n = k.queue(this, t, e);
                                              k._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && k.dequeue(this, t);
                                          })
                                );
                            },
                            dequeue: function (t) {
                                return this.each(function () {
                                    k.dequeue(this, t);
                                });
                            },
                            clearQueue: function (t) {
                                return this.queue(t || "fx", []);
                            },
                            promise: function (t, e) {
                                var n,
                                    i = 1,
                                    r = k.Deferred(),
                                    o = this,
                                    s = this.length,
                                    a = function () {
                                        --i || r.resolveWith(o, [o]);
                                    };
                                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (n = K.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                                return a(), r.promise(e);
                            },
                        });
                    var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
                        ot = ["Top", "Right", "Bottom", "Left"],
                        st = w.documentElement,
                        at = function (t) {
                            return k.contains(t.ownerDocument, t);
                        },
                        lt = { composed: !0 };
                    st.getRootNode &&
                        (at = function (t) {
                            return k.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument;
                        });
                    var ut = function (t, e) {
                        return "none" === (t = e || t).style.display || ("" === t.style.display && at(t) && "none" === k.css(t, "display"));
                    };
                    function ct(t, e, n, i) {
                        var r,
                            o,
                            s = 20,
                            a = i
                                ? function () {
                                      return i.cur();
                                  }
                                : function () {
                                      return k.css(t, e, "");
                                  },
                            l = a(),
                            u = (n && n[3]) || (k.cssNumber[e] ? "" : "px"),
                            c = t.nodeType && (k.cssNumber[e] || ("px" !== u && +l)) && rt.exec(k.css(t, e));
                        if (c && c[3] !== u) {
                            for (l /= 2, u = u || c[3], c = +l || 1; s--; ) k.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (c /= o);
                            (c *= 2), k.style(t, e, c + u), (n = n || []);
                        }
                        return n && ((c = +c || +l || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r;
                    }
                    var dt = {};
                    function pt(t) {
                        var e,
                            n = t.ownerDocument,
                            i = t.nodeName,
                            r = dt[i];
                        return r || ((e = n.body.appendChild(n.createElement(i))), (r = k.css(e, "display")), e.parentNode.removeChild(e), "none" === r && (r = "block"), (dt[i] = r), r);
                    }
                    function ft(t, e) {
                        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
                            (i = t[o]).style &&
                                ((n = i.style.display),
                                e ? ("none" === n && ((r[o] = K.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && ut(i) && (r[o] = pt(i))) : "none" !== n && ((r[o] = "none"), K.set(i, "display", n)));
                        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
                        return t;
                    }
                    k.fn.extend({
                        show: function () {
                            return ft(this, !0);
                        },
                        hide: function () {
                            return ft(this);
                        },
                        toggle: function (t) {
                            return "boolean" == typeof t
                                ? t
                                    ? this.show()
                                    : this.hide()
                                : this.each(function () {
                                      ut(this) ? k(this).show() : k(this).hide();
                                  });
                        },
                    });
                    var ht,
                        gt,
                        vt = /^(?:checkbox|radio)$/i,
                        mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        yt = /^$|^module$|\/(?:java|ecma)script/i;
                    (ht = w.createDocumentFragment().appendChild(w.createElement("div"))),
                        (gt = w.createElement("input")).setAttribute("type", "radio"),
                        gt.setAttribute("checked", "checked"),
                        gt.setAttribute("name", "t"),
                        ht.appendChild(gt),
                        (v.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        (ht.innerHTML = "<textarea>x</textarea>"),
                        (v.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue),
                        (ht.innerHTML = "<option></option>"),
                        (v.option = !!ht.lastChild);
                    var wt = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""],
                    };
                    function xt(t, e) {
                        var n;
                        return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && M(t, e)) ? k.merge([t], n) : n;
                    }
                    function bt(t, e) {
                        for (var n = 0, i = t.length; n < i; n++) K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"));
                    }
                    (wt.tbody = wt.tfoot = wt.colgroup = wt.caption = wt.thead), (wt.th = wt.td), v.option || (wt.optgroup = wt.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var Tt = /<|&#?\w+;/;
                    function _t(t, e, n, i, r) {
                        for (var o, s, a, l, u, c, d = e.createDocumentFragment(), p = [], f = 0, h = t.length; f < h; f++)
                            if ((o = t[f]) || 0 === o)
                                if ("object" === T(o)) k.merge(p, o.nodeType ? [o] : o);
                                else if (Tt.test(o)) {
                                    for (s = s || d.appendChild(e.createElement("div")), a = (mt.exec(o) || ["", ""])[1].toLowerCase(), l = wt[a] || wt._default, s.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], c = l[0]; c--; )
                                        s = s.lastChild;
                                    k.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
                                } else p.push(e.createTextNode(o));
                        for (d.textContent = "", f = 0; (o = p[f++]); )
                            if (i && k.inArray(o, i) > -1) r && r.push(o);
                            else if (((u = at(o)), (s = xt(d.appendChild(o), "script")), u && bt(s), n)) for (c = 0; (o = s[c++]); ) yt.test(o.type || "") && n.push(o);
                        return d;
                    }
                    var kt = /^([^.]*)(?:\.(.+)|)/;
                    function Ct() {
                        return !0;
                    }
                    function St() {
                        return !1;
                    }
                    function At(t, e) {
                        return (
                            (t ===
                                (function () {
                                    try {
                                        return w.activeElement;
                                    } catch (t) {}
                                })()) ==
                            ("focus" === e)
                        );
                    }
                    function Et(t, e, n, i, r, o) {
                        var s, a;
                        if ("object" == typeof e) {
                            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) Et(t, a, n, i, e[a], o);
                            return t;
                        }
                        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = St;
                        else if (!r) return t;
                        return (
                            1 === o &&
                                ((s = r),
                                (r = function (t) {
                                    return k().off(t), s.apply(this, arguments);
                                }),
                                (r.guid = s.guid || (s.guid = k.guid++))),
                            t.each(function () {
                                k.event.add(this, e, r, i, n);
                            })
                        );
                    }
                    function Ot(t, e, n) {
                        n
                            ? (K.set(t, e, !1),
                              k.event.add(t, e, {
                                  namespace: !1,
                                  handler: function (t) {
                                      var i,
                                          r,
                                          o = K.get(this, e);
                                      if (1 & t.isTrigger && this[e]) {
                                          if (o.length) (k.event.special[e] || {}).delegateType && t.stopPropagation();
                                          else if (((o = a.call(arguments)), K.set(this, e, o), (i = n(this, e)), this[e](), o !== (r = K.get(this, e)) || i ? K.set(this, e, !1) : (r = {}), o !== r))
                                              return t.stopImmediatePropagation(), t.preventDefault(), r && r.value;
                                      } else o.length && (K.set(this, e, { value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this) }), t.stopImmediatePropagation());
                                  },
                              }))
                            : void 0 === K.get(t, e) && k.event.add(t, e, Ct);
                    }
                    (k.event = {
                        global: {},
                        add: function (t, e, n, i, r) {
                            var o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                d,
                                p,
                                f,
                                h,
                                g,
                                v = K.get(t);
                            if (Q(t))
                                for (
                                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                                        r && k.find.matchesSelector(st, r),
                                        n.guid || (n.guid = k.guid++),
                                        (l = v.events) || (l = v.events = Object.create(null)),
                                        (s = v.handle) ||
                                            (s = v.handle = function (e) {
                                                return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
                                            }),
                                        u = (e = (e || "").match(I) || [""]).length;
                                    u--;

                                )
                                    (f = g = (a = kt.exec(e[u]) || [])[1]),
                                        (h = (a[2] || "").split(".").sort()),
                                        f &&
                                            ((d = k.event.special[f] || {}),
                                            (f = (r ? d.delegateType : d.bindType) || f),
                                            (d = k.event.special[f] || {}),
                                            (c = k.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && k.expr.match.needsContext.test(r), namespace: h.join(".") }, o)),
                                            (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(t, i, h, s)) || (t.addEventListener && t.addEventListener(f, s))),
                                            d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                                            r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                            (k.event.global[f] = !0));
                        },
                        remove: function (t, e, n, i, r) {
                            var o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                d,
                                p,
                                f,
                                h,
                                g,
                                v = K.hasData(t) && K.get(t);
                            if (v && (l = v.events)) {
                                for (u = (e = (e || "").match(I) || [""]).length; u--; )
                                    if (((f = g = (a = kt.exec(e[u]) || [])[1]), (h = (a[2] || "").split(".").sort()), f)) {
                                        for (d = k.event.special[f] || {}, p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; )
                                            (c = p[o]),
                                                (!r && g !== c.origType) ||
                                                    (n && n.guid !== c.guid) ||
                                                    (a && !a.test(c.namespace)) ||
                                                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                                                    (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(t, c));
                                        s && !p.length && ((d.teardown && !1 !== d.teardown.call(t, h, v.handle)) || k.removeEvent(t, f, v.handle), delete l[f]);
                                    } else for (f in l) k.event.remove(t, f + e[u], n, i, !0);
                                k.isEmptyObject(l) && K.remove(t, "handle events");
                            }
                        },
                        dispatch: function (t) {
                            var e,
                                n,
                                i,
                                r,
                                o,
                                s,
                                a = new Array(arguments.length),
                                l = k.event.fix(t),
                                u = (K.get(this, "events") || Object.create(null))[l.type] || [],
                                c = k.event.special[l.type] || {};
                            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                            if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
                                for (s = k.event.handlers.call(this, l, u), e = 0; (r = s[e++]) && !l.isPropagationStopped(); )
                                    for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                        (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                                            ((l.handleObj = o),
                                            (l.data = o.data),
                                            void 0 !== (i = ((k.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, l), l.result;
                            }
                        },
                        handlers: function (t, e) {
                            var n,
                                i,
                                r,
                                o,
                                s,
                                a = [],
                                l = e.delegateCount,
                                u = t.target;
                            if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                                for (; u !== this; u = u.parentNode || this)
                                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = e[n]).selector + " ")] && (s[r] = i.needsContext ? k(r, this).index(u) > -1 : k.find(r, this, null, [u]).length), s[r] && o.push(i);
                                        o.length && a.push({ elem: u, handlers: o });
                                    }
                            return (u = this), l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a;
                        },
                        addProp: function (t, e) {
                            Object.defineProperty(k.Event.prototype, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: m(e)
                                    ? function () {
                                          if (this.originalEvent) return e(this.originalEvent);
                                      }
                                    : function () {
                                          if (this.originalEvent) return this.originalEvent[t];
                                      },
                                set: function (e) {
                                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                                },
                            });
                        },
                        fix: function (t) {
                            return t[k.expando] ? t : new k.Event(t);
                        },
                        special: {
                            load: { noBubble: !0 },
                            click: {
                                setup: function (t) {
                                    var e = this || t;
                                    return vt.test(e.type) && e.click && M(e, "input") && Ot(e, "click", Ct), !1;
                                },
                                trigger: function (t) {
                                    var e = this || t;
                                    return vt.test(e.type) && e.click && M(e, "input") && Ot(e, "click"), !0;
                                },
                                _default: function (t) {
                                    var e = t.target;
                                    return (vt.test(e.type) && e.click && M(e, "input") && K.get(e, "click")) || M(e, "a");
                                },
                            },
                            beforeunload: {
                                postDispatch: function (t) {
                                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                                },
                            },
                        },
                    }),
                        (k.removeEvent = function (t, e, n) {
                            t.removeEventListener && t.removeEventListener(e, n);
                        }),
                        (k.Event = function (t, e) {
                            if (!(this instanceof k.Event)) return new k.Event(t, e);
                            t && t.type
                                ? ((this.originalEvent = t),
                                  (this.type = t.type),
                                  (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? Ct : St),
                                  (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                                  (this.currentTarget = t.currentTarget),
                                  (this.relatedTarget = t.relatedTarget))
                                : (this.type = t),
                                e && k.extend(this, e),
                                (this.timeStamp = (t && t.timeStamp) || Date.now()),
                                (this[k.expando] = !0);
                        }),
                        (k.Event.prototype = {
                            constructor: k.Event,
                            isDefaultPrevented: St,
                            isPropagationStopped: St,
                            isImmediatePropagationStopped: St,
                            isSimulated: !1,
                            preventDefault: function () {
                                var t = this.originalEvent;
                                (this.isDefaultPrevented = Ct), t && !this.isSimulated && t.preventDefault();
                            },
                            stopPropagation: function () {
                                var t = this.originalEvent;
                                (this.isPropagationStopped = Ct), t && !this.isSimulated && t.stopPropagation();
                            },
                            stopImmediatePropagation: function () {
                                var t = this.originalEvent;
                                (this.isImmediatePropagationStopped = Ct), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
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
                        k.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                            k.event.special[t] = {
                                setup: function () {
                                    return Ot(this, t, At), !1;
                                },
                                trigger: function () {
                                    return Ot(this, t), !0;
                                },
                                _default: function () {
                                    return !0;
                                },
                                delegateType: e,
                            };
                        }),
                        k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
                            k.event.special[t] = {
                                delegateType: e,
                                bindType: e,
                                handle: function (t) {
                                    var n,
                                        i = this,
                                        r = t.relatedTarget,
                                        o = t.handleObj;
                                    return (r && (r === i || k.contains(i, r))) || ((t.type = o.origType), (n = o.handler.apply(this, arguments)), (t.type = e)), n;
                                },
                            };
                        }),
                        k.fn.extend({
                            on: function (t, e, n, i) {
                                return Et(this, t, e, n, i);
                            },
                            one: function (t, e, n, i) {
                                return Et(this, t, e, n, i, 1);
                            },
                            off: function (t, e, n) {
                                var i, r;
                                if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), k(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                                if ("object" == typeof t) {
                                    for (r in t) this.off(r, e, t[r]);
                                    return this;
                                }
                                return (
                                    (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                                    !1 === n && (n = St),
                                    this.each(function () {
                                        k.event.remove(this, t, n, e);
                                    })
                                );
                            },
                        });
                    var Mt = /<script|<style|<link/i,
                        Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                    function Lt(t, e) {
                        return (M(t, "table") && M(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0]) || t;
                    }
                    function Dt(t) {
                        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
                    }
                    function Nt(t) {
                        return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
                    }
                    function jt(t, e) {
                        var n, i, r, o, s, a;
                        if (1 === e.nodeType) {
                            if (K.hasData(t) && (a = K.get(t).events)) for (r in (K.remove(e, "handle events"), a)) for (n = 0, i = a[r].length; n < i; n++) k.event.add(e, r, a[r][n]);
                            Z.hasData(t) && ((o = Z.access(t)), (s = k.extend({}, o)), Z.set(e, s));
                        }
                    }
                    function Ht(t, e) {
                        var n = e.nodeName.toLowerCase();
                        "input" === n && vt.test(t.type) ? (e.checked = t.checked) : ("input" !== n && "textarea" !== n) || (e.defaultValue = t.defaultValue);
                    }
                    function It(t, e, n, i) {
                        e = l(e);
                        var r,
                            o,
                            s,
                            a,
                            u,
                            c,
                            d = 0,
                            p = t.length,
                            f = p - 1,
                            h = e[0],
                            g = m(h);
                        if (g || (p > 1 && "string" == typeof h && !v.checkClone && Pt.test(h)))
                            return t.each(function (r) {
                                var o = t.eq(r);
                                g && (e[0] = h.call(this, r, o.html())), It(o, e, n, i);
                            });
                        if (p && ((o = (r = _t(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
                            for (a = (s = k.map(xt(r, "script"), Dt)).length; d < p; d++) (u = r), d !== f && ((u = k.clone(u, !0, !0)), a && k.merge(s, xt(u, "script"))), n.call(t[d], u, d);
                            if (a)
                                for (c = s[s.length - 1].ownerDocument, k.map(s, Nt), d = 0; d < a; d++)
                                    (u = s[d]),
                                        yt.test(u.type || "") &&
                                            !K.access(u, "globalEval") &&
                                            k.contains(c, u) &&
                                            (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : b(u.textContent.replace($t, ""), u, c));
                        }
                        return t;
                    }
                    function Rt(t, e, n) {
                        for (var i, r = e ? k.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || k.cleanData(xt(i)), i.parentNode && (n && at(i) && bt(xt(i, "script")), i.parentNode.removeChild(i));
                        return t;
                    }
                    k.extend({
                        htmlPrefilter: function (t) {
                            return t;
                        },
                        clone: function (t, e, n) {
                            var i,
                                r,
                                o,
                                s,
                                a = t.cloneNode(!0),
                                l = at(t);
                            if (!(v.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || k.isXMLDoc(t))) for (s = xt(a), i = 0, r = (o = xt(t)).length; i < r; i++) Ht(o[i], s[i]);
                            if (e)
                                if (n) for (o = o || xt(t), s = s || xt(a), i = 0, r = o.length; i < r; i++) jt(o[i], s[i]);
                                else jt(t, a);
                            return (s = xt(a, "script")).length > 0 && bt(s, !l && xt(t, "script")), a;
                        },
                        cleanData: function (t) {
                            for (var e, n, i, r = k.event.special, o = 0; void 0 !== (n = t[o]); o++)
                                if (Q(n)) {
                                    if ((e = n[K.expando])) {
                                        if (e.events) for (i in e.events) r[i] ? k.event.remove(n, i) : k.removeEvent(n, i, e.handle);
                                        n[K.expando] = void 0;
                                    }
                                    n[Z.expando] && (n[Z.expando] = void 0);
                                }
                        },
                    }),
                        k.fn.extend({
                            detach: function (t) {
                                return Rt(this, t, !0);
                            },
                            remove: function (t) {
                                return Rt(this, t);
                            },
                            text: function (t) {
                                return X(
                                    this,
                                    function (t) {
                                        return void 0 === t
                                            ? k.text(this)
                                            : this.empty().each(function () {
                                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                                              });
                                    },
                                    null,
                                    t,
                                    arguments.length
                                );
                            },
                            append: function () {
                                return It(this, arguments, function (t) {
                                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Lt(this, t).appendChild(t);
                                });
                            },
                            prepend: function () {
                                return It(this, arguments, function (t) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var e = Lt(this, t);
                                        e.insertBefore(t, e.firstChild);
                                    }
                                });
                            },
                            before: function () {
                                return It(this, arguments, function (t) {
                                    this.parentNode && this.parentNode.insertBefore(t, this);
                                });
                            },
                            after: function () {
                                return It(this, arguments, function (t) {
                                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                                });
                            },
                            empty: function () {
                                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(xt(t, !1)), (t.textContent = ""));
                                return this;
                            },
                            clone: function (t, e) {
                                return (
                                    (t = null != t && t),
                                    (e = null == e ? t : e),
                                    this.map(function () {
                                        return k.clone(this, t, e);
                                    })
                                );
                            },
                            html: function (t) {
                                return X(
                                    this,
                                    function (t) {
                                        var e = this[0] || {},
                                            n = 0,
                                            i = this.length;
                                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                        if ("string" == typeof t && !Mt.test(t) && !wt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                            t = k.htmlPrefilter(t);
                                            try {
                                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (k.cleanData(xt(e, !1)), (e.innerHTML = t));
                                                e = 0;
                                            } catch (t) {}
                                        }
                                        e && this.empty().append(t);
                                    },
                                    null,
                                    t,
                                    arguments.length
                                );
                            },
                            replaceWith: function () {
                                var t = [];
                                return It(
                                    this,
                                    arguments,
                                    function (e) {
                                        var n = this.parentNode;
                                        k.inArray(this, t) < 0 && (k.cleanData(xt(this)), n && n.replaceChild(e, this));
                                    },
                                    t
                                );
                            },
                        }),
                        k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
                            k.fn[t] = function (t) {
                                for (var n, i = [], r = k(t), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), k(r[s])[e](n), u.apply(i, n.get());
                                return this.pushStack(i);
                            };
                        });
                    var Bt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
                        zt = function (t) {
                            var e = t.ownerDocument.defaultView;
                            return (e && e.opener) || (e = i), e.getComputedStyle(t);
                        },
                        qt = function (t, e, n) {
                            var i,
                                r,
                                o = {};
                            for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r]);
                            for (r in ((i = n.call(t)), e)) t.style[r] = o[r];
                            return i;
                        },
                        Ft = new RegExp(ot.join("|"), "i");
                    function Wt(t, e, n) {
                        var i,
                            r,
                            o,
                            s,
                            a = t.style;
                        return (
                            (n = n || zt(t)) &&
                                ("" !== (s = n.getPropertyValue(e) || n[e]) || at(t) || (s = k.style(t, e)),
                                !v.pixelBoxStyles() &&
                                    Bt.test(s) &&
                                    Ft.test(e) &&
                                    ((i = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = r), (a.maxWidth = o))),
                            void 0 !== s ? s + "" : s
                        );
                    }
                    function Xt(t, e) {
                        return {
                            get: function () {
                                if (!t()) return (this.get = e).apply(this, arguments);
                                delete this.get;
                            },
                        };
                    }
                    !(function () {
                        function t() {
                            if (c) {
                                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                    st.appendChild(u).appendChild(c);
                                var t = i.getComputedStyle(c);
                                (n = "1%" !== t.top),
                                    (l = 12 === e(t.marginLeft)),
                                    (c.style.right = "60%"),
                                    (s = 36 === e(t.right)),
                                    (r = 36 === e(t.width)),
                                    (c.style.position = "absolute"),
                                    (o = 12 === e(c.offsetWidth / 3)),
                                    st.removeChild(u),
                                    (c = null);
                            }
                        }
                        function e(t) {
                            return Math.round(parseFloat(t));
                        }
                        var n,
                            r,
                            o,
                            s,
                            a,
                            l,
                            u = w.createElement("div"),
                            c = w.createElement("div");
                        c.style &&
                            ((c.style.backgroundClip = "content-box"),
                            (c.cloneNode(!0).style.backgroundClip = ""),
                            (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
                            k.extend(v, {
                                boxSizingReliable: function () {
                                    return t(), r;
                                },
                                pixelBoxStyles: function () {
                                    return t(), s;
                                },
                                pixelPosition: function () {
                                    return t(), n;
                                },
                                reliableMarginLeft: function () {
                                    return t(), l;
                                },
                                scrollboxSize: function () {
                                    return t(), o;
                                },
                                reliableTrDimensions: function () {
                                    var t, e, n, r;
                                    return (
                                        null == a &&
                                            ((t = w.createElement("table")),
                                            (e = w.createElement("tr")),
                                            (n = w.createElement("div")),
                                            (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                            (e.style.cssText = "border:1px solid"),
                                            (e.style.height = "1px"),
                                            (n.style.height = "9px"),
                                            (n.style.display = "block"),
                                            st.appendChild(t).appendChild(e).appendChild(n),
                                            (r = i.getComputedStyle(e)),
                                            (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === e.offsetHeight),
                                            st.removeChild(t)),
                                        a
                                    );
                                },
                            }));
                    })();
                    var Ut = ["Webkit", "Moz", "ms"],
                        Yt = w.createElement("div").style,
                        Vt = {};
                    function Gt(t) {
                        var e = k.cssProps[t] || Vt[t];
                        return (
                            e ||
                            (t in Yt
                                ? t
                                : (Vt[t] =
                                      (function (t) {
                                          for (var e = t[0].toUpperCase() + t.slice(1), n = Ut.length; n--; ) if ((t = Ut[n] + e) in Yt) return t;
                                      })(t) || t))
                        );
                    }
                    var Qt = /^(none|table(?!-c[ea]).+)/,
                        Jt = /^--/,
                        Kt = { position: "absolute", visibility: "hidden", display: "block" },
                        Zt = { letterSpacing: "0", fontWeight: "400" };
                    function te(t, e, n) {
                        var i = rt.exec(e);
                        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
                    }
                    function ee(t, e, n, i, r, o) {
                        var s = "width" === e ? 1 : 0,
                            a = 0,
                            l = 0;
                        if (n === (i ? "border" : "content")) return 0;
                        for (; s < 4; s += 2)
                            "margin" === n && (l += k.css(t, n + ot[s], !0, r)),
                                i
                                    ? ("content" === n && (l -= k.css(t, "padding" + ot[s], !0, r)), "margin" !== n && (l -= k.css(t, "border" + ot[s] + "Width", !0, r)))
                                    : ((l += k.css(t, "padding" + ot[s], !0, r)), "padding" !== n ? (l += k.css(t, "border" + ot[s] + "Width", !0, r)) : (a += k.css(t, "border" + ot[s] + "Width", !0, r)));
                        return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5)) || 0), l;
                    }
                    function ne(t, e, n) {
                        var i = zt(t),
                            r = (!v.boxSizingReliable() || n) && "border-box" === k.css(t, "boxSizing", !1, i),
                            o = r,
                            s = Wt(t, e, i),
                            a = "offset" + e[0].toUpperCase() + e.slice(1);
                        if (Bt.test(s)) {
                            if (!n) return s;
                            s = "auto";
                        }
                        return (
                            ((!v.boxSizingReliable() && r) || (!v.reliableTrDimensions() && M(t, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === k.css(t, "display", !1, i))) &&
                                t.getClientRects().length &&
                                ((r = "border-box" === k.css(t, "boxSizing", !1, i)), (o = a in t) && (s = t[a])),
                            (s = parseFloat(s) || 0) + ee(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
                        );
                    }
                    function ie(t, e, n, i, r) {
                        return new ie.prototype.init(t, e, n, i, r);
                    }
                    k.extend({
                        cssHooks: {
                            opacity: {
                                get: function (t, e) {
                                    if (e) {
                                        var n = Wt(t, "opacity");
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
                        style: function (t, e, n, i) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var r,
                                    o,
                                    s,
                                    a = G(e),
                                    l = Jt.test(e),
                                    u = t.style;
                                if ((l || (e = Gt(a)), (s = k.cssHooks[e] || k.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                                "string" === (o = typeof n) && (r = rt.exec(n)) && r[1] && ((n = ct(t, e, r)), (o = "number")),
                                    null != n &&
                                        n == n &&
                                        ("number" !== o || l || (n += (r && r[3]) || (k.cssNumber[a] ? "" : "px")),
                                        v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                                        (s && "set" in s && void 0 === (n = s.set(t, n, i))) || (l ? u.setProperty(e, n) : (u[e] = n)));
                            }
                        },
                        css: function (t, e, n, i) {
                            var r,
                                o,
                                s,
                                a = G(e);
                            return (
                                Jt.test(e) || (e = Gt(a)),
                                (s = k.cssHooks[e] || k.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)),
                                void 0 === r && (r = Wt(t, e, i)),
                                "normal" === r && e in Zt && (r = Zt[e]),
                                "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
                            );
                        },
                    }),
                        k.each(["height", "width"], function (t, e) {
                            k.cssHooks[e] = {
                                get: function (t, n, i) {
                                    if (n)
                                        return !Qt.test(k.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                                            ? ne(t, e, i)
                                            : qt(t, Kt, function () {
                                                  return ne(t, e, i);
                                              });
                                },
                                set: function (t, n, i) {
                                    var r,
                                        o = zt(t),
                                        s = !v.scrollboxSize() && "absolute" === o.position,
                                        a = (s || i) && "border-box" === k.css(t, "boxSizing", !1, o),
                                        l = i ? ee(t, e, i, a, o) : 0;
                                    return (
                                        a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ee(t, e, "border", !1, o) - 0.5)),
                                        l && (r = rt.exec(n)) && "px" !== (r[3] || "px") && ((t.style[e] = n), (n = k.css(t, e))),
                                        te(0, n, l)
                                    );
                                },
                            };
                        }),
                        (k.cssHooks.marginLeft = Xt(v.reliableMarginLeft, function (t, e) {
                            if (e)
                                return (
                                    (parseFloat(Wt(t, "marginLeft")) ||
                                        t.getBoundingClientRect().left -
                                            qt(t, { marginLeft: 0 }, function () {
                                                return t.getBoundingClientRect().left;
                                            })) + "px"
                                );
                        })),
                        k.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                            (k.cssHooks[t + e] = {
                                expand: function (n) {
                                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + ot[i] + e] = o[i] || o[i - 2] || o[0];
                                    return r;
                                },
                            }),
                                "margin" !== t && (k.cssHooks[t + e].set = te);
                        }),
                        k.fn.extend({
                            css: function (t, e) {
                                return X(
                                    this,
                                    function (t, e, n) {
                                        var i,
                                            r,
                                            o = {},
                                            s = 0;
                                        if (Array.isArray(e)) {
                                            for (i = zt(t), r = e.length; s < r; s++) o[e[s]] = k.css(t, e[s], !1, i);
                                            return o;
                                        }
                                        return void 0 !== n ? k.style(t, e, n) : k.css(t, e);
                                    },
                                    t,
                                    e,
                                    arguments.length > 1
                                );
                            },
                        }),
                        (k.Tween = ie),
                        (ie.prototype = {
                            constructor: ie,
                            init: function (t, e, n, i, r, o) {
                                (this.elem = t), (this.prop = n), (this.easing = r || k.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (k.cssNumber[n] ? "" : "px"));
                            },
                            cur: function () {
                                var t = ie.propHooks[this.prop];
                                return t && t.get ? t.get(this) : ie.propHooks._default.get(this);
                            },
                            run: function (t) {
                                var e,
                                    n = ie.propHooks[this.prop];
                                return (
                                    this.options.duration ? (this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                                    (this.now = (this.end - this.start) * e + this.start),
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                    n && n.set ? n.set(this) : ie.propHooks._default.set(this),
                                    this
                                );
                            },
                        }),
                        (ie.prototype.init.prototype = ie.prototype),
                        (ie.propHooks = {
                            _default: {
                                get: function (t) {
                                    var e;
                                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                                },
                                set: function (t) {
                                    k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (!k.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)]) ? (t.elem[t.prop] = t.now) : k.style(t.elem, t.prop, t.now + t.unit);
                                },
                            },
                        }),
                        (ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
                            set: function (t) {
                                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                            },
                        }),
                        (k.easing = {
                            linear: function (t) {
                                return t;
                            },
                            swing: function (t) {
                                return 0.5 - Math.cos(t * Math.PI) / 2;
                            },
                            _default: "swing",
                        }),
                        (k.fx = ie.prototype.init),
                        (k.fx.step = {});
                    var re,
                        oe,
                        se = /^(?:toggle|show|hide)$/,
                        ae = /queueHooks$/;
                    function le() {
                        oe && (!1 === w.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(le) : i.setTimeout(le, k.fx.interval), k.fx.tick());
                    }
                    function ue() {
                        return (
                            i.setTimeout(function () {
                                re = void 0;
                            }),
                            (re = Date.now())
                        );
                    }
                    function ce(t, e) {
                        var n,
                            i = 0,
                            r = { height: t };
                        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = ot[i])] = r["padding" + n] = t;
                        return e && (r.opacity = r.width = t), r;
                    }
                    function de(t, e, n) {
                        for (var i, r = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), o = 0, s = r.length; o < s; o++) if ((i = r[o].call(n, e, t))) return i;
                    }
                    function pe(t, e, n) {
                        var i,
                            r,
                            o = 0,
                            s = pe.prefilters.length,
                            a = k.Deferred().always(function () {
                                delete l.elem;
                            }),
                            l = function () {
                                if (r) return !1;
                                for (var e = re || ue(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                                return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1);
                            },
                            u = a.promise({
                                elem: t,
                                props: k.extend({}, e),
                                opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, n),
                                originalProperties: e,
                                originalOptions: n,
                                startTime: re || ue(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function (e, n) {
                                    var i = k.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                                    return u.tweens.push(i), i;
                                },
                                stop: function (e) {
                                    var n = 0,
                                        i = e ? u.tweens.length : 0;
                                    if (r) return this;
                                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this;
                                },
                            }),
                            c = u.props;
                        for (
                            !(function (t, e) {
                                var n, i, r, o, s;
                                for (n in t)
                                    if (((r = e[(i = G(n))]), (o = t[n]), Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])), n !== i && ((t[i] = o), delete t[n]), (s = k.cssHooks[i]) && ("expand" in s)))
                                        for (n in ((o = s.expand(o)), delete t[i], o)) (n in t) || ((t[n] = o[n]), (e[n] = r));
                                    else e[i] = r;
                            })(c, u.opts.specialEasing);
                            o < s;
                            o++
                        )
                            if ((i = pe.prefilters[o].call(u, t, c, u.opts))) return m(i.stop) && (k._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                        return (
                            k.map(c, de, u),
                            m(u.opts.start) && u.opts.start.call(t, u),
                            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                            k.fx.timer(k.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
                            u
                        );
                    }
                    (k.Animation = k.extend(pe, {
                        tweeners: {
                            "*": [
                                function (t, e) {
                                    var n = this.createTween(t, e);
                                    return ct(n.elem, t, rt.exec(e), n), n;
                                },
                            ],
                        },
                        tweener: function (t, e) {
                            m(t) ? ((e = t), (t = ["*"])) : (t = t.match(I));
                            for (var n, i = 0, r = t.length; i < r; i++) (n = t[i]), (pe.tweeners[n] = pe.tweeners[n] || []), pe.tweeners[n].unshift(e);
                        },
                        prefilters: [
                            function (t, e, n) {
                                var i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    u,
                                    c,
                                    d = "width" in e || "height" in e,
                                    p = this,
                                    f = {},
                                    h = t.style,
                                    g = t.nodeType && ut(t),
                                    v = K.get(t, "fxshow");
                                for (i in (n.queue ||
                                    (null == (s = k._queueHooks(t, "fx")).unqueued &&
                                        ((s.unqueued = 0),
                                        (a = s.empty.fire),
                                        (s.empty.fire = function () {
                                            s.unqueued || a();
                                        })),
                                    s.unqueued++,
                                    p.always(function () {
                                        p.always(function () {
                                            s.unqueued--, k.queue(t, "fx").length || s.empty.fire();
                                        });
                                    })),
                                e))
                                    if (((r = e[i]), se.test(r))) {
                                        if ((delete e[i], (o = o || "toggle" === r), r === (g ? "hide" : "show"))) {
                                            if ("show" !== r || !v || void 0 === v[i]) continue;
                                            g = !0;
                                        }
                                        f[i] = (v && v[i]) || k.style(t, i);
                                    }
                                if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(f))
                                    for (i in (d &&
                                        1 === t.nodeType &&
                                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                        null == (u = v && v.display) && (u = K.get(t, "display")),
                                        "none" === (c = k.css(t, "display")) && (u ? (c = u) : (ft([t], !0), (u = t.style.display || u), (c = k.css(t, "display")), ft([t]))),
                                        ("inline" === c || ("inline-block" === c && null != u)) &&
                                            "none" === k.css(t, "float") &&
                                            (l ||
                                                (p.done(function () {
                                                    h.display = u;
                                                }),
                                                null == u && ((c = h.display), (u = "none" === c ? "" : c))),
                                            (h.display = "inline-block"))),
                                    n.overflow &&
                                        ((h.overflow = "hidden"),
                                        p.always(function () {
                                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                        })),
                                    (l = !1),
                                    f))
                                        l ||
                                            (v ? "hidden" in v && (g = v.hidden) : (v = K.access(t, "fxshow", { display: u })),
                                            o && (v.hidden = !g),
                                            g && ft([t], !0),
                                            p.done(function () {
                                                for (i in (g || ft([t]), K.remove(t, "fxshow"), f)) k.style(t, i, f[i]);
                                            })),
                                            (l = de(g ? v[i] : 0, i, p)),
                                            i in v || ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
                            },
                        ],
                        prefilter: function (t, e) {
                            e ? pe.prefilters.unshift(t) : pe.prefilters.push(t);
                        },
                    })),
                        (k.speed = function (t, e, n) {
                            var i = t && "object" == typeof t ? k.extend({}, t) : { complete: n || (!n && e) || (m(t) && t), duration: t, easing: (n && e) || (e && !m(e) && e) };
                            return (
                                k.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in k.fx.speeds ? (i.duration = k.fx.speeds[i.duration]) : (i.duration = k.fx.speeds._default)),
                                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                                (i.old = i.complete),
                                (i.complete = function () {
                                    m(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue);
                                }),
                                i
                            );
                        }),
                        k.fn.extend({
                            fadeTo: function (t, e, n, i) {
                                return this.filter(ut).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
                            },
                            animate: function (t, e, n, i) {
                                var r = k.isEmptyObject(t),
                                    o = k.speed(e, n, i),
                                    s = function () {
                                        var e = pe(this, k.extend({}, t), o);
                                        (r || K.get(this, "finish")) && e.stop(!0);
                                    };
                                return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
                            },
                            stop: function (t, e, n) {
                                var i = function (t) {
                                    var e = t.stop;
                                    delete t.stop, e(n);
                                };
                                return (
                                    "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                                    e && this.queue(t || "fx", []),
                                    this.each(function () {
                                        var e = !0,
                                            r = null != t && t + "queueHooks",
                                            o = k.timers,
                                            s = K.get(this);
                                        if (r) s[r] && s[r].stop && i(s[r]);
                                        else for (r in s) s[r] && s[r].stop && ae.test(r) && i(s[r]);
                                        for (r = o.length; r--; ) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                                        (!e && n) || k.dequeue(this, t);
                                    })
                                );
                            },
                            finish: function (t) {
                                return (
                                    !1 !== t && (t = t || "fx"),
                                    this.each(function () {
                                        var e,
                                            n = K.get(this),
                                            i = n[t + "queue"],
                                            r = n[t + "queueHooks"],
                                            o = k.timers,
                                            s = i ? i.length : 0;
                                        for (n.finish = !0, k.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                                        delete n.finish;
                                    })
                                );
                            },
                        }),
                        k.each(["toggle", "show", "hide"], function (t, e) {
                            var n = k.fn[e];
                            k.fn[e] = function (t, i, r) {
                                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ce(e, !0), t, i, r);
                            };
                        }),
                        k.each({ slideDown: ce("show"), slideUp: ce("hide"), slideToggle: ce("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
                            k.fn[t] = function (t, n, i) {
                                return this.animate(e, t, n, i);
                            };
                        }),
                        (k.timers = []),
                        (k.fx.tick = function () {
                            var t,
                                e = 0,
                                n = k.timers;
                            for (re = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                            n.length || k.fx.stop(), (re = void 0);
                        }),
                        (k.fx.timer = function (t) {
                            k.timers.push(t), k.fx.start();
                        }),
                        (k.fx.interval = 13),
                        (k.fx.start = function () {
                            oe || ((oe = !0), le());
                        }),
                        (k.fx.stop = function () {
                            oe = null;
                        }),
                        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                        (k.fn.delay = function (t, e) {
                            return (
                                (t = (k.fx && k.fx.speeds[t]) || t),
                                (e = e || "fx"),
                                this.queue(e, function (e, n) {
                                    var r = i.setTimeout(e, t);
                                    n.stop = function () {
                                        i.clearTimeout(r);
                                    };
                                })
                            );
                        }),
                        (function () {
                            var t = w.createElement("input"),
                                e = w.createElement("select").appendChild(w.createElement("option"));
                            (t.type = "checkbox"), (v.checkOn = "" !== t.value), (v.optSelected = e.selected), ((t = w.createElement("input")).value = "t"), (t.type = "radio"), (v.radioValue = "t" === t.value);
                        })();
                    var fe,
                        he = k.expr.attrHandle;
                    k.fn.extend({
                        attr: function (t, e) {
                            return X(this, k.attr, t, e, arguments.length > 1);
                        },
                        removeAttr: function (t) {
                            return this.each(function () {
                                k.removeAttr(this, t);
                            });
                        },
                    }),
                        k.extend({
                            attr: function (t, e, n) {
                                var i,
                                    r,
                                    o = t.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return void 0 === t.getAttribute
                                        ? k.prop(t, e, n)
                                        : ((1 === o && k.isXMLDoc(t)) || (r = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? fe : void 0)),
                                          void 0 !== n
                                              ? null === n
                                                  ? void k.removeAttr(t, e)
                                                  : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                                                  ? i
                                                  : (t.setAttribute(e, n + ""), n)
                                              : r && "get" in r && null !== (i = r.get(t, e))
                                              ? i
                                              : null == (i = k.find.attr(t, e))
                                              ? void 0
                                              : i);
                            },
                            attrHooks: {
                                type: {
                                    set: function (t, e) {
                                        if (!v.radioValue && "radio" === e && M(t, "input")) {
                                            var n = t.value;
                                            return t.setAttribute("type", e), n && (t.value = n), e;
                                        }
                                    },
                                },
                            },
                            removeAttr: function (t, e) {
                                var n,
                                    i = 0,
                                    r = e && e.match(I);
                                if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n);
                            },
                        }),
                        (fe = {
                            set: function (t, e, n) {
                                return !1 === e ? k.removeAttr(t, n) : t.setAttribute(n, n), n;
                            },
                        }),
                        k.each(k.expr.match.bool.source.match(/\w+/g), function (t, e) {
                            var n = he[e] || k.find.attr;
                            he[e] = function (t, e, i) {
                                var r,
                                    o,
                                    s = e.toLowerCase();
                                return i || ((o = he[s]), (he[s] = r), (r = null != n(t, e, i) ? s : null), (he[s] = o)), r;
                            };
                        });
                    var ge = /^(?:input|select|textarea|button)$/i,
                        ve = /^(?:a|area)$/i;
                    function me(t) {
                        return (t.match(I) || []).join(" ");
                    }
                    function ye(t) {
                        return (t.getAttribute && t.getAttribute("class")) || "";
                    }
                    function we(t) {
                        return Array.isArray(t) ? t : ("string" == typeof t && t.match(I)) || [];
                    }
                    k.fn.extend({
                        prop: function (t, e) {
                            return X(this, k.prop, t, e, arguments.length > 1);
                        },
                        removeProp: function (t) {
                            return this.each(function () {
                                delete this[k.propFix[t] || t];
                            });
                        },
                    }),
                        k.extend({
                            prop: function (t, e, n) {
                                var i,
                                    r,
                                    o = t.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return (
                                        (1 === o && k.isXMLDoc(t)) || ((e = k.propFix[e] || e), (r = k.propHooks[e])),
                                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t[e] = n)) : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                                    );
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (t) {
                                        var e = k.find.attr(t, "tabindex");
                                        return e ? parseInt(e, 10) : ge.test(t.nodeName) || (ve.test(t.nodeName) && t.href) ? 0 : -1;
                                    },
                                },
                            },
                            propFix: { for: "htmlFor", class: "className" },
                        }),
                        v.optSelected ||
                            (k.propHooks.selected = {
                                get: function (t) {
                                    var e = t.parentNode;
                                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                                },
                                set: function (t) {
                                    var e = t.parentNode;
                                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                                },
                            }),
                        k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                            k.propFix[this.toLowerCase()] = this;
                        }),
                        k.fn.extend({
                            addClass: function (t) {
                                var e,
                                    n,
                                    i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l = 0;
                                if (m(t))
                                    return this.each(function (e) {
                                        k(this).addClass(t.call(this, e, ye(this)));
                                    });
                                if ((e = we(t)).length)
                                    for (; (n = this[l++]); )
                                        if (((r = ye(n)), (i = 1 === n.nodeType && " " + me(r) + " "))) {
                                            for (s = 0; (o = e[s++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                            r !== (a = me(i)) && n.setAttribute("class", a);
                                        }
                                return this;
                            },
                            removeClass: function (t) {
                                var e,
                                    n,
                                    i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l = 0;
                                if (m(t))
                                    return this.each(function (e) {
                                        k(this).removeClass(t.call(this, e, ye(this)));
                                    });
                                if (!arguments.length) return this.attr("class", "");
                                if ((e = we(t)).length)
                                    for (; (n = this[l++]); )
                                        if (((r = ye(n)), (i = 1 === n.nodeType && " " + me(r) + " "))) {
                                            for (s = 0; (o = e[s++]); ) for (; i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                                            r !== (a = me(i)) && n.setAttribute("class", a);
                                        }
                                return this;
                            },
                            toggleClass: function (t, e) {
                                var n = typeof t,
                                    i = "string" === n || Array.isArray(t);
                                return "boolean" == typeof e && i
                                    ? e
                                        ? this.addClass(t)
                                        : this.removeClass(t)
                                    : m(t)
                                    ? this.each(function (n) {
                                          k(this).toggleClass(t.call(this, n, ye(this), e), e);
                                      })
                                    : this.each(function () {
                                          var e, r, o, s;
                                          if (i) for (r = 0, o = k(this), s = we(t); (e = s[r++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                                          else
                                              (void 0 !== t && "boolean" !== n) ||
                                                  ((e = ye(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""));
                                      });
                            },
                            hasClass: function (t) {
                                var e,
                                    n,
                                    i = 0;
                                for (e = " " + t + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + me(ye(n)) + " ").indexOf(e) > -1) return !0;
                                return !1;
                            },
                        });
                    var xe = /\r/g;
                    k.fn.extend({
                        val: function (t) {
                            var e,
                                n,
                                i,
                                r = this[0];
                            return arguments.length
                                ? ((i = m(t)),
                                  this.each(function (n) {
                                      var r;
                                      1 === this.nodeType &&
                                          (null == (r = i ? t.call(this, n, k(this).val()) : t)
                                              ? (r = "")
                                              : "number" == typeof r
                                              ? (r += "")
                                              : Array.isArray(r) &&
                                                (r = k.map(r, function (t) {
                                                    return null == t ? "" : t + "";
                                                })),
                                          ((e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value")) || (this.value = r));
                                  }))
                                : r
                                ? (e = k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value"))
                                    ? n
                                    : "string" == typeof (n = r.value)
                                    ? n.replace(xe, "")
                                    : null == n
                                    ? ""
                                    : n
                                : void 0;
                        },
                    }),
                        k.extend({
                            valHooks: {
                                option: {
                                    get: function (t) {
                                        var e = k.find.attr(t, "value");
                                        return null != e ? e : me(k.text(t));
                                    },
                                },
                                select: {
                                    get: function (t) {
                                        var e,
                                            n,
                                            i,
                                            r = t.options,
                                            o = t.selectedIndex,
                                            s = "select-one" === t.type,
                                            a = s ? null : [],
                                            l = s ? o + 1 : r.length;
                                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                                                if (((e = k(n).val()), s)) return e;
                                                a.push(e);
                                            }
                                        return a;
                                    },
                                    set: function (t, e) {
                                        for (var n, i, r = t.options, o = k.makeArray(e), s = r.length; s--; ) ((i = r[s]).selected = k.inArray(k.valHooks.option.get(i), o) > -1) && (n = !0);
                                        return n || (t.selectedIndex = -1), o;
                                    },
                                },
                            },
                        }),
                        k.each(["radio", "checkbox"], function () {
                            (k.valHooks[this] = {
                                set: function (t, e) {
                                    if (Array.isArray(e)) return (t.checked = k.inArray(k(t).val(), e) > -1);
                                },
                            }),
                                v.checkOn ||
                                    (k.valHooks[this].get = function (t) {
                                        return null === t.getAttribute("value") ? "on" : t.value;
                                    });
                        }),
                        (v.focusin = "onfocusin" in i);
                    var be = /^(?:focusinfocus|focusoutblur)$/,
                        Te = function (t) {
                            t.stopPropagation();
                        };
                    k.extend(k.event, {
                        trigger: function (t, e, n, r) {
                            var o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                d,
                                p,
                                h = [n || w],
                                g = f.call(t, "type") ? t.type : t,
                                v = f.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (
                                ((s = p = a = n = n || w),
                                3 !== n.nodeType &&
                                    8 !== n.nodeType &&
                                    !be.test(g + k.event.triggered) &&
                                    (g.indexOf(".") > -1 && ((v = g.split(".")), (g = v.shift()), v.sort()),
                                    (u = g.indexOf(":") < 0 && "on" + g),
                                    ((t = t[k.expando] ? t : new k.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                                    (t.namespace = v.join(".")),
                                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (t.result = void 0),
                                    t.target || (t.target = n),
                                    (e = null == e ? [t] : k.makeArray(e, [t])),
                                    (d = k.event.special[g] || {}),
                                    r || !d.trigger || !1 !== d.trigger.apply(n, e)))
                            ) {
                                if (!r && !d.noBubble && !y(n)) {
                                    for (l = d.delegateType || g, be.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), (a = s);
                                    a === (n.ownerDocument || w) && h.push(a.defaultView || a.parentWindow || i);
                                }
                                for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
                                    (p = s),
                                        (t.type = o > 1 ? l : d.bindType || g),
                                        (c = (K.get(s, "events") || Object.create(null))[t.type] && K.get(s, "handle")) && c.apply(s, e),
                                        (c = u && s[u]) && c.apply && Q(s) && ((t.result = c.apply(s, e)), !1 === t.result && t.preventDefault());
                                return (
                                    (t.type = g),
                                    r ||
                                        t.isDefaultPrevented() ||
                                        (d._default && !1 !== d._default.apply(h.pop(), e)) ||
                                        !Q(n) ||
                                        (u &&
                                            m(n[g]) &&
                                            !y(n) &&
                                            ((a = n[u]) && (n[u] = null),
                                            (k.event.triggered = g),
                                            t.isPropagationStopped() && p.addEventListener(g, Te),
                                            n[g](),
                                            t.isPropagationStopped() && p.removeEventListener(g, Te),
                                            (k.event.triggered = void 0),
                                            a && (n[u] = a))),
                                    t.result
                                );
                            }
                        },
                        simulate: function (t, e, n) {
                            var i = k.extend(new k.Event(), n, { type: t, isSimulated: !0 });
                            k.event.trigger(i, null, e);
                        },
                    }),
                        k.fn.extend({
                            trigger: function (t, e) {
                                return this.each(function () {
                                    k.event.trigger(t, e, this);
                                });
                            },
                            triggerHandler: function (t, e) {
                                var n = this[0];
                                if (n) return k.event.trigger(t, e, n, !0);
                            },
                        }),
                        v.focusin ||
                            k.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                                var n = function (t) {
                                    k.event.simulate(e, t.target, k.event.fix(t));
                                };
                                k.event.special[e] = {
                                    setup: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            r = K.access(i, e);
                                        r || i.addEventListener(t, n, !0), K.access(i, e, (r || 0) + 1);
                                    },
                                    teardown: function () {
                                        var i = this.ownerDocument || this.document || this,
                                            r = K.access(i, e) - 1;
                                        r ? K.access(i, e, r) : (i.removeEventListener(t, n, !0), K.remove(i, e));
                                    },
                                };
                            });
                    var _e = i.location,
                        ke = { guid: Date.now() },
                        Ce = /\?/;
                    k.parseXML = function (t) {
                        var e, n;
                        if (!t || "string" != typeof t) return null;
                        try {
                            e = new i.DOMParser().parseFromString(t, "text/xml");
                        } catch (t) {}
                        return (
                            (n = e && e.getElementsByTagName("parsererror")[0]),
                            (e && !n) ||
                                k.error(
                                    "Invalid XML: " +
                                        (n
                                            ? k
                                                  .map(n.childNodes, function (t) {
                                                      return t.textContent;
                                                  })
                                                  .join("\n")
                                            : t)
                                ),
                            e
                        );
                    };
                    var Se = /\[\]$/,
                        Ae = /\r?\n/g,
                        Ee = /^(?:submit|button|image|reset|file)$/i,
                        Oe = /^(?:input|select|textarea|keygen)/i;
                    function Me(t, e, n, i) {
                        var r;
                        if (Array.isArray(e))
                            k.each(e, function (e, r) {
                                n || Se.test(t) ? i(t, r) : Me(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i);
                            });
                        else if (n || "object" !== T(e)) i(t, e);
                        else for (r in e) Me(t + "[" + r + "]", e[r], n, i);
                    }
                    (k.param = function (t, e) {
                        var n,
                            i = [],
                            r = function (t, e) {
                                var n = m(e) ? e() : e;
                                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
                            };
                        if (null == t) return "";
                        if (Array.isArray(t) || (t.jquery && !k.isPlainObject(t)))
                            k.each(t, function () {
                                r(this.name, this.value);
                            });
                        else for (n in t) Me(n, t[n], e, r);
                        return i.join("&");
                    }),
                        k.fn.extend({
                            serialize: function () {
                                return k.param(this.serializeArray());
                            },
                            serializeArray: function () {
                                return this.map(function () {
                                    var t = k.prop(this, "elements");
                                    return t ? k.makeArray(t) : this;
                                })
                                    .filter(function () {
                                        var t = this.type;
                                        return this.name && !k(this).is(":disabled") && Oe.test(this.nodeName) && !Ee.test(t) && (this.checked || !vt.test(t));
                                    })
                                    .map(function (t, e) {
                                        var n = k(this).val();
                                        return null == n
                                            ? null
                                            : Array.isArray(n)
                                            ? k.map(n, function (t) {
                                                  return { name: e.name, value: t.replace(Ae, "\r\n") };
                                              })
                                            : { name: e.name, value: n.replace(Ae, "\r\n") };
                                    })
                                    .get();
                            },
                        });
                    var Pe = /%20/g,
                        $e = /#.*$/,
                        Le = /([?&])_=[^&]*/,
                        De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Ne = /^(?:GET|HEAD)$/,
                        je = /^\/\//,
                        He = {},
                        Ie = {},
                        Re = "*/".concat("*"),
                        Be = w.createElement("a");
                    function ze(t) {
                        return function (e, n) {
                            "string" != typeof e && ((n = e), (e = "*"));
                            var i,
                                r = 0,
                                o = e.toLowerCase().match(I) || [];
                            if (m(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
                        };
                    }
                    function qe(t, e, n, i) {
                        var r = {},
                            o = t === Ie;
                        function s(a) {
                            var l;
                            return (
                                (r[a] = !0),
                                k.each(t[a] || [], function (t, a) {
                                    var u = a(e, n, i);
                                    return "string" != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (e.dataTypes.unshift(u), s(u), !1);
                                }),
                                l
                            );
                        }
                        return s(e.dataTypes[0]) || (!r["*"] && s("*"));
                    }
                    function Fe(t, e) {
                        var n,
                            i,
                            r = k.ajaxSettings.flatOptions || {};
                        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                        return i && k.extend(!0, t, i), t;
                    }
                    (Be.href = _e.href),
                        k.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: _e.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: { "*": Re, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML },
                                flatOptions: { url: !0, context: !0 },
                            },
                            ajaxSetup: function (t, e) {
                                return e ? Fe(Fe(t, k.ajaxSettings), e) : Fe(k.ajaxSettings, t);
                            },
                            ajaxPrefilter: ze(He),
                            ajaxTransport: ze(Ie),
                            ajax: function (t, e) {
                                "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                                var n,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    u,
                                    c,
                                    d,
                                    p,
                                    f = k.ajaxSetup({}, e),
                                    h = f.context || f,
                                    g = f.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                                    v = k.Deferred(),
                                    m = k.Callbacks("once memory"),
                                    y = f.statusCode || {},
                                    x = {},
                                    b = {},
                                    T = "canceled",
                                    _ = {
                                        readyState: 0,
                                        getResponseHeader: function (t) {
                                            var e;
                                            if (u) {
                                                if (!s) for (s = {}; (e = De.exec(o)); ) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                                e = s[t.toLowerCase() + " "];
                                            }
                                            return null == e ? null : e.join(", ");
                                        },
                                        getAllResponseHeaders: function () {
                                            return u ? o : null;
                                        },
                                        setRequestHeader: function (t, e) {
                                            return null == u && ((t = b[t.toLowerCase()] = b[t.toLowerCase()] || t), (x[t] = e)), this;
                                        },
                                        overrideMimeType: function (t) {
                                            return null == u && (f.mimeType = t), this;
                                        },
                                        statusCode: function (t) {
                                            var e;
                                            if (t)
                                                if (u) _.always(t[_.status]);
                                                else for (e in t) y[e] = [y[e], t[e]];
                                            return this;
                                        },
                                        abort: function (t) {
                                            var e = t || T;
                                            return n && n.abort(e), C(0, e), this;
                                        },
                                    };
                                if (
                                    (v.promise(_),
                                    (f.url = ((t || f.url || _e.href) + "").replace(je, _e.protocol + "//")),
                                    (f.type = e.method || e.type || f.method || f.type),
                                    (f.dataTypes = (f.dataType || "*").toLowerCase().match(I) || [""]),
                                    null == f.crossDomain)
                                ) {
                                    l = w.createElement("a");
                                    try {
                                        (l.href = f.url), (l.href = l.href), (f.crossDomain = Be.protocol + "//" + Be.host != l.protocol + "//" + l.host);
                                    } catch (t) {
                                        f.crossDomain = !0;
                                    }
                                }
                                if ((f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), qe(He, f, e, _), u)) return _;
                                for (d in ((c = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                                (f.type = f.type.toUpperCase()),
                                (f.hasContent = !Ne.test(f.type)),
                                (r = f.url.replace($e, "")),
                                f.hasContent
                                    ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pe, "+"))
                                    : ((p = f.url.slice(r.length)),
                                      f.data && (f.processData || "string" == typeof f.data) && ((r += (Ce.test(r) ? "&" : "?") + f.data), delete f.data),
                                      !1 === f.cache && ((r = r.replace(Le, "$1")), (p = (Ce.test(r) ? "&" : "?") + "_=" + ke.guid++ + p)),
                                      (f.url = r + p)),
                                f.ifModified && (k.lastModified[r] && _.setRequestHeader("If-Modified-Since", k.lastModified[r]), k.etag[r] && _.setRequestHeader("If-None-Match", k.etag[r])),
                                ((f.data && f.hasContent && !1 !== f.contentType) || e.contentType) && _.setRequestHeader("Content-Type", f.contentType),
                                _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : f.accepts["*"]),
                                f.headers))
                                    _.setRequestHeader(d, f.headers[d]);
                                if (f.beforeSend && (!1 === f.beforeSend.call(h, _, f) || u)) return _.abort();
                                if (((T = "abort"), m.add(f.complete), _.done(f.success), _.fail(f.error), (n = qe(Ie, f, e, _)))) {
                                    if (((_.readyState = 1), c && g.trigger("ajaxSend", [_, f]), u)) return _;
                                    f.async &&
                                        f.timeout > 0 &&
                                        (a = i.setTimeout(function () {
                                            _.abort("timeout");
                                        }, f.timeout));
                                    try {
                                        (u = !1), n.send(x, C);
                                    } catch (t) {
                                        if (u) throw t;
                                        C(-1, t);
                                    }
                                } else C(-1, "No Transport");
                                function C(t, e, s, l) {
                                    var d,
                                        p,
                                        w,
                                        x,
                                        b,
                                        T = e;
                                    u ||
                                        ((u = !0),
                                        a && i.clearTimeout(a),
                                        (n = void 0),
                                        (o = l || ""),
                                        (_.readyState = t > 0 ? 4 : 0),
                                        (d = (t >= 200 && t < 300) || 304 === t),
                                        s &&
                                            (x = (function (t, e, n) {
                                                for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                                if (i)
                                                    for (r in a)
                                                        if (a[r] && a[r].test(i)) {
                                                            l.unshift(r);
                                                            break;
                                                        }
                                                if (l[0] in n) o = l[0];
                                                else {
                                                    for (r in n) {
                                                        if (!l[0] || t.converters[r + " " + l[0]]) {
                                                            o = r;
                                                            break;
                                                        }
                                                        s || (s = r);
                                                    }
                                                    o = o || s;
                                                }
                                                if (o) return o !== l[0] && l.unshift(o), n[o];
                                            })(f, _, s)),
                                        !d && k.inArray("script", f.dataTypes) > -1 && k.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}),
                                        (x = (function (t, e, n, i) {
                                            var r,
                                                o,
                                                s,
                                                a,
                                                l,
                                                u = {},
                                                c = t.dataTypes.slice();
                                            if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                                            for (o = c.shift(); o; )
                                                if ((t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = o), (o = c.shift())))
                                                    if ("*" === o) o = l;
                                                    else if ("*" !== l && l !== o) {
                                                        if (!(s = u[l + " " + o] || u["* " + o]))
                                                            for (r in u)
                                                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                                    !0 === s ? (s = u[r]) : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                                                                    break;
                                                                }
                                                        if (!0 !== s)
                                                            if (s && t.throws) e = s(e);
                                                            else
                                                                try {
                                                                    e = s(e);
                                                                } catch (t) {
                                                                    return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o };
                                                                }
                                                    }
                                            return { state: "success", data: e };
                                        })(f, x, _, d)),
                                        d
                                            ? (f.ifModified && ((b = _.getResponseHeader("Last-Modified")) && (k.lastModified[r] = b), (b = _.getResponseHeader("etag")) && (k.etag[r] = b)),
                                              204 === t || "HEAD" === f.type ? (T = "nocontent") : 304 === t ? (T = "notmodified") : ((T = x.state), (p = x.data), (d = !(w = x.error))))
                                            : ((w = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                                        (_.status = t),
                                        (_.statusText = (e || T) + ""),
                                        d ? v.resolveWith(h, [p, T, _]) : v.rejectWith(h, [_, T, w]),
                                        _.statusCode(y),
                                        (y = void 0),
                                        c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [_, f, d ? p : w]),
                                        m.fireWith(h, [_, T]),
                                        c && (g.trigger("ajaxComplete", [_, f]), --k.active || k.event.trigger("ajaxStop")));
                                }
                                return _;
                            },
                            getJSON: function (t, e, n) {
                                return k.get(t, e, n, "json");
                            },
                            getScript: function (t, e) {
                                return k.get(t, void 0, e, "script");
                            },
                        }),
                        k.each(["get", "post"], function (t, e) {
                            k[e] = function (t, n, i, r) {
                                return m(n) && ((r = r || i), (i = n), (n = void 0)), k.ajax(k.extend({ url: t, type: e, dataType: r, data: n, success: i }, k.isPlainObject(t) && t));
                            };
                        }),
                        k.ajaxPrefilter(function (t) {
                            var e;
                            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
                        }),
                        (k._evalUrl = function (t, e, n) {
                            return k.ajax({
                                url: t,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: { "text script": function () {} },
                                dataFilter: function (t) {
                                    k.globalEval(t, e, n);
                                },
                            });
                        }),
                        k.fn.extend({
                            wrapAll: function (t) {
                                var e;
                                return (
                                    this[0] &&
                                        (m(t) && (t = t.call(this[0])),
                                        (e = k(t, this[0].ownerDocument).eq(0).clone(!0)),
                                        this[0].parentNode && e.insertBefore(this[0]),
                                        e
                                            .map(function () {
                                                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                                return t;
                                            })
                                            .append(this)),
                                    this
                                );
                            },
                            wrapInner: function (t) {
                                return m(t)
                                    ? this.each(function (e) {
                                          k(this).wrapInner(t.call(this, e));
                                      })
                                    : this.each(function () {
                                          var e = k(this),
                                              n = e.contents();
                                          n.length ? n.wrapAll(t) : e.append(t);
                                      });
                            },
                            wrap: function (t) {
                                var e = m(t);
                                return this.each(function (n) {
                                    k(this).wrapAll(e ? t.call(this, n) : t);
                                });
                            },
                            unwrap: function (t) {
                                return (
                                    this.parent(t)
                                        .not("body")
                                        .each(function () {
                                            k(this).replaceWith(this.childNodes);
                                        }),
                                    this
                                );
                            },
                        }),
                        (k.expr.pseudos.hidden = function (t) {
                            return !k.expr.pseudos.visible(t);
                        }),
                        (k.expr.pseudos.visible = function (t) {
                            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
                        }),
                        (k.ajaxSettings.xhr = function () {
                            try {
                                return new i.XMLHttpRequest();
                            } catch (t) {}
                        });
                    var We = { 0: 200, 1223: 204 },
                        Xe = k.ajaxSettings.xhr();
                    (v.cors = !!Xe && "withCredentials" in Xe),
                        (v.ajax = Xe = !!Xe),
                        k.ajaxTransport(function (t) {
                            var e, n;
                            if (v.cors || (Xe && !t.crossDomain))
                                return {
                                    send: function (r, o) {
                                        var s,
                                            a = t.xhr();
                                        if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                                        for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) a.setRequestHeader(s, r[s]);
                                        (e = function (t) {
                                            return function () {
                                                e &&
                                                    ((e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                                    "abort" === t
                                                        ? a.abort()
                                                        : "error" === t
                                                        ? "number" != typeof a.status
                                                            ? o(0, "error")
                                                            : o(a.status, a.statusText)
                                                        : o(
                                                              We[a.status] || a.status,
                                                              a.statusText,
                                                              "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                              a.getAllResponseHeaders()
                                                          ));
                                            };
                                        }),
                                            (a.onload = e()),
                                            (n = a.onerror = a.ontimeout = e("error")),
                                            void 0 !== a.onabort
                                                ? (a.onabort = n)
                                                : (a.onreadystatechange = function () {
                                                      4 === a.readyState &&
                                                          i.setTimeout(function () {
                                                              e && n();
                                                          });
                                                  }),
                                            (e = e("abort"));
                                        try {
                                            a.send((t.hasContent && t.data) || null);
                                        } catch (t) {
                                            if (e) throw t;
                                        }
                                    },
                                    abort: function () {
                                        e && e();
                                    },
                                };
                        }),
                        k.ajaxPrefilter(function (t) {
                            t.crossDomain && (t.contents.script = !1);
                        }),
                        k.ajaxSetup({
                            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                            contents: { script: /\b(?:java|ecma)script\b/ },
                            converters: {
                                "text script": function (t) {
                                    return k.globalEval(t), t;
                                },
                            },
                        }),
                        k.ajaxPrefilter("script", function (t) {
                            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
                        }),
                        k.ajaxTransport("script", function (t) {
                            var e, n;
                            if (t.crossDomain || t.scriptAttrs)
                                return {
                                    send: function (i, r) {
                                        (e = k("<script>")
                                            .attr(t.scriptAttrs || {})
                                            .prop({ charset: t.scriptCharset, src: t.url })
                                            .on(
                                                "load error",
                                                (n = function (t) {
                                                    e.remove(), (n = null), t && r("error" === t.type ? 404 : 200, t.type);
                                                })
                                            )),
                                            w.head.appendChild(e[0]);
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        });
                    var Ue,
                        Ye = [],
                        Ve = /(=)\?(?=&|$)|\?\?/;
                    k.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var t = Ye.pop() || k.expando + "_" + ke.guid++;
                            return (this[t] = !0), t;
                        },
                    }),
                        k.ajaxPrefilter("json jsonp", function (t, e, n) {
                            var r,
                                o,
                                s,
                                a = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
                            if (a || "jsonp" === t.dataTypes[0])
                                return (
                                    (r = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                                    a ? (t[a] = t[a].replace(Ve, "$1" + r)) : !1 !== t.jsonp && (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                                    (t.converters["script json"] = function () {
                                        return s || k.error(r + " was not called"), s[0];
                                    }),
                                    (t.dataTypes[0] = "json"),
                                    (o = i[r]),
                                    (i[r] = function () {
                                        s = arguments;
                                    }),
                                    n.always(function () {
                                        void 0 === o ? k(i).removeProp(r) : (i[r] = o), t[r] && ((t.jsonpCallback = e.jsonpCallback), Ye.push(r)), s && m(o) && o(s[0]), (s = o = void 0);
                                    }),
                                    "script"
                                );
                        }),
                        (v.createHTMLDocument = (((Ue = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ue.childNodes.length)),
                        (k.parseHTML = function (t, e, n) {
                            return "string" != typeof t
                                ? []
                                : ("boolean" == typeof e && ((n = e), (e = !1)),
                                  e || (v.createHTMLDocument ? (((i = (e = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href), e.head.appendChild(i)) : (e = w)),
                                  (o = !n && []),
                                  (r = P.exec(t)) ? [e.createElement(r[1])] : ((r = _t([t], e, o)), o && o.length && k(o).remove(), k.merge([], r.childNodes)));
                            var i, r, o;
                        }),
                        (k.fn.load = function (t, e, n) {
                            var i,
                                r,
                                o,
                                s = this,
                                a = t.indexOf(" ");
                            return (
                                a > -1 && ((i = me(t.slice(a))), (t = t.slice(0, a))),
                                m(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
                                s.length > 0 &&
                                    k
                                        .ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                                        .done(function (t) {
                                            (o = arguments), s.html(i ? k("<div>").append(k.parseHTML(t)).find(i) : t);
                                        })
                                        .always(
                                            n &&
                                                function (t, e) {
                                                    s.each(function () {
                                                        n.apply(this, o || [t.responseText, e, t]);
                                                    });
                                                }
                                        ),
                                this
                            );
                        }),
                        (k.expr.pseudos.animated = function (t) {
                            return k.grep(k.timers, function (e) {
                                return t === e.elem;
                            }).length;
                        }),
                        (k.offset = {
                            setOffset: function (t, e, n) {
                                var i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    u = k.css(t, "position"),
                                    c = k(t),
                                    d = {};
                                "static" === u && (t.style.position = "relative"),
                                    (a = c.offset()),
                                    (o = k.css(t, "top")),
                                    (l = k.css(t, "left")),
                                    ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? ((s = (i = c.position()).top), (r = i.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                                    m(e) && (e = e.call(t, n, k.extend({}, a))),
                                    null != e.top && (d.top = e.top - a.top + s),
                                    null != e.left && (d.left = e.left - a.left + r),
                                    "using" in e ? e.using.call(t, d) : c.css(d);
                            },
                        }),
                        k.fn.extend({
                            offset: function (t) {
                                if (arguments.length)
                                    return void 0 === t
                                        ? this
                                        : this.each(function (e) {
                                              k.offset.setOffset(this, t, e);
                                          });
                                var e,
                                    n,
                                    i = this[0];
                                return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                            },
                            position: function () {
                                if (this[0]) {
                                    var t,
                                        e,
                                        n,
                                        i = this[0],
                                        r = { top: 0, left: 0 };
                                    if ("fixed" === k.css(i, "position")) e = i.getBoundingClientRect();
                                    else {
                                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === k.css(t, "position"); ) t = t.parentNode;
                                        t && t !== i && 1 === t.nodeType && (((r = k(t).offset()).top += k.css(t, "borderTopWidth", !0)), (r.left += k.css(t, "borderLeftWidth", !0)));
                                    }
                                    return { top: e.top - r.top - k.css(i, "marginTop", !0), left: e.left - r.left - k.css(i, "marginLeft", !0) };
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var t = this.offsetParent; t && "static" === k.css(t, "position"); ) t = t.offsetParent;
                                    return t || st;
                                });
                            },
                        }),
                        k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                            var n = "pageYOffset" === e;
                            k.fn[t] = function (i) {
                                return X(
                                    this,
                                    function (t, i, r) {
                                        var o;
                                        if ((y(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView), void 0 === r)) return o ? o[e] : t[i];
                                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (t[i] = r);
                                    },
                                    t,
                                    i,
                                    arguments.length
                                );
                            };
                        }),
                        k.each(["top", "left"], function (t, e) {
                            k.cssHooks[e] = Xt(v.pixelPosition, function (t, n) {
                                if (n) return (n = Wt(t, e)), Bt.test(n) ? k(t).position()[e] + "px" : n;
                            });
                        }),
                        k.each({ Height: "height", Width: "width" }, function (t, e) {
                            k.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                                k.fn[i] = function (r, o) {
                                    var s = arguments.length && (n || "boolean" != typeof r),
                                        a = n || (!0 === r || !0 === o ? "margin" : "border");
                                    return X(
                                        this,
                                        function (e, n, r) {
                                            var o;
                                            return y(e)
                                                ? 0 === i.indexOf("outer")
                                                    ? e["inner" + t]
                                                    : e.document.documentElement["client" + t]
                                                : 9 === e.nodeType
                                                ? ((o = e.documentElement), Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t]))
                                                : void 0 === r
                                                ? k.css(e, n, a)
                                                : k.style(e, n, r, a);
                                        },
                                        e,
                                        s ? r : void 0,
                                        s
                                    );
                                };
                            });
                        }),
                        k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                            k.fn[e] = function (t) {
                                return this.on(e, t);
                            };
                        }),
                        k.fn.extend({
                            bind: function (t, e, n) {
                                return this.on(t, null, e, n);
                            },
                            unbind: function (t, e) {
                                return this.off(t, null, e);
                            },
                            delegate: function (t, e, n, i) {
                                return this.on(e, t, n, i);
                            },
                            undelegate: function (t, e, n) {
                                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
                            },
                            hover: function (t, e) {
                                return this.mouseenter(t).mouseleave(e || t);
                            },
                        }),
                        k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                            t,
                            e
                        ) {
                            k.fn[e] = function (t, n) {
                                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
                            };
                        });
                    var Ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    (k.proxy = function (t, e) {
                        var n, i, r;
                        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), m(t)))
                            return (
                                (i = a.call(arguments, 2)),
                                (r = function () {
                                    return t.apply(e || this, i.concat(a.call(arguments)));
                                }),
                                (r.guid = t.guid = t.guid || k.guid++),
                                r
                            );
                    }),
                        (k.holdReady = function (t) {
                            t ? k.readyWait++ : k.ready(!0);
                        }),
                        (k.isArray = Array.isArray),
                        (k.parseJSON = JSON.parse),
                        (k.nodeName = M),
                        (k.isFunction = m),
                        (k.isWindow = y),
                        (k.camelCase = G),
                        (k.type = T),
                        (k.now = Date.now),
                        (k.isNumeric = function (t) {
                            var e = k.type(t);
                            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
                        }),
                        (k.trim = function (t) {
                            return null == t ? "" : (t + "").replace(Ge, "");
                        }),
                        void 0 ===
                            (n = function () {
                                return k;
                            }.apply(e, [])) || (t.exports = n);
                    var Qe = i.jQuery,
                        Je = i.$;
                    return (
                        (k.noConflict = function (t) {
                            return i.$ === k && (i.$ = Je), t && i.jQuery === k && (i.jQuery = Qe), k;
                        }),
                        void 0 === r && (i.jQuery = i.$ = k),
                        k
                    );
                });
            },
            154: (t, e, n) => {
                var i, r, o;
                !(function (s) {
                    "use strict";
                    (r = [n(755)]),
                        (i = function (t) {
                            var e = window.Slick || {};
                            ((e = (function () {
                                var e = 0;
                                function n(n, i) {
                                    var r,
                                        o = this;
                                    (o.defaults = {
                                        accessibility: !0,
                                        adaptiveHeight: !1,
                                        appendArrows: t(n),
                                        appendDots: t(n),
                                        arrows: !0,
                                        asNavFor: null,
                                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                        autoplay: !1,
                                        autoplaySpeed: 3e3,
                                        centerMode: !1,
                                        centerPadding: "50px",
                                        cssEase: "ease",
                                        customPaging: function (e, n) {
                                            return t('<button type="button" />').text(n + 1);
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
                                        t.extend(o, o.initials),
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
                                        (o.$slider = t(n)),
                                        (o.$slidesCache = null),
                                        (o.transformType = null),
                                        (o.transitionType = null),
                                        (o.visibilityChange = "visibilitychange"),
                                        (o.windowWidth = 0),
                                        (o.windowTimer = null),
                                        (r = t(n).data("slick") || {}),
                                        (o.options = t.extend({}, o.defaults, i, r)),
                                        (o.currentSlide = o.options.initialSlide),
                                        (o.originalSettings = o.options),
                                        void 0 !== document.mozHidden
                                            ? ((o.hidden = "mozHidden"), (o.visibilityChange = "mozvisibilitychange"))
                                            : void 0 !== document.webkitHidden && ((o.hidden = "webkitHidden"), (o.visibilityChange = "webkitvisibilitychange")),
                                        (o.autoPlay = t.proxy(o.autoPlay, o)),
                                        (o.autoPlayClear = t.proxy(o.autoPlayClear, o)),
                                        (o.autoPlayIterator = t.proxy(o.autoPlayIterator, o)),
                                        (o.changeSlide = t.proxy(o.changeSlide, o)),
                                        (o.clickHandler = t.proxy(o.clickHandler, o)),
                                        (o.selectHandler = t.proxy(o.selectHandler, o)),
                                        (o.setPosition = t.proxy(o.setPosition, o)),
                                        (o.swipeHandler = t.proxy(o.swipeHandler, o)),
                                        (o.dragHandler = t.proxy(o.dragHandler, o)),
                                        (o.keyHandler = t.proxy(o.keyHandler, o)),
                                        (o.instanceUid = e++),
                                        (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                                        o.registerBreakpoints(),
                                        o.init(!0);
                                }
                                return n;
                            })()).prototype.activateADA = function () {
                                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
                            }),
                                (e.prototype.addSlide = e.prototype.slickAdd = function (e, n, i) {
                                    var r = this;
                                    if ("boolean" == typeof n) (i = n), (n = null);
                                    else if (n < 0 || n >= r.slideCount) return !1;
                                    r.unload(),
                                        "number" == typeof n
                                            ? 0 === n && 0 === r.$slides.length
                                                ? t(e).appendTo(r.$slideTrack)
                                                : i
                                                ? t(e).insertBefore(r.$slides.eq(n))
                                                : t(e).insertAfter(r.$slides.eq(n))
                                            : !0 === i
                                            ? t(e).prependTo(r.$slideTrack)
                                            : t(e).appendTo(r.$slideTrack),
                                        (r.$slides = r.$slideTrack.children(this.options.slide)),
                                        r.$slideTrack.children(this.options.slide).detach(),
                                        r.$slideTrack.append(r.$slides),
                                        r.$slides.each(function (e, n) {
                                            t(n).attr("data-slick-index", e);
                                        }),
                                        (r.$slidesCache = r.$slides),
                                        r.reinit();
                                }),
                                (e.prototype.animateHeight = function () {
                                    var t = this;
                                    if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                                        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                                        t.$list.animate({ height: e }, t.options.speed);
                                    }
                                }),
                                (e.prototype.animateSlide = function (e, n) {
                                    var i = {},
                                        r = this;
                                    r.animateHeight(),
                                        !0 === r.options.rtl && !1 === r.options.vertical && (e = -e),
                                        !1 === r.transformsEnabled
                                            ? !1 === r.options.vertical
                                                ? r.$slideTrack.animate({ left: e }, r.options.speed, r.options.easing, n)
                                                : r.$slideTrack.animate({ top: e }, r.options.speed, r.options.easing, n)
                                            : !1 === r.cssTransitions
                                            ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
                                              t({ animStart: r.currentLeft }).animate(
                                                  { animStart: e },
                                                  {
                                                      duration: r.options.speed,
                                                      easing: r.options.easing,
                                                      step: function (t) {
                                                          (t = Math.ceil(t)),
                                                              !1 === r.options.vertical ? ((i[r.animType] = "translate(" + t + "px, 0px)"), r.$slideTrack.css(i)) : ((i[r.animType] = "translate(0px," + t + "px)"), r.$slideTrack.css(i));
                                                      },
                                                      complete: function () {
                                                          n && n.call();
                                                      },
                                                  }
                                              ))
                                            : (r.applyTransition(),
                                              (e = Math.ceil(e)),
                                              !1 === r.options.vertical ? (i[r.animType] = "translate3d(" + e + "px, 0px, 0px)") : (i[r.animType] = "translate3d(0px," + e + "px, 0px)"),
                                              r.$slideTrack.css(i),
                                              n &&
                                                  setTimeout(function () {
                                                      r.disableTransition(), n.call();
                                                  }, r.options.speed));
                                }),
                                (e.prototype.getNavTarget = function () {
                                    var e = this,
                                        n = e.options.asNavFor;
                                    return n && null !== n && (n = t(n).not(e.$slider)), n;
                                }),
                                (e.prototype.asNavFor = function (e) {
                                    var n = this.getNavTarget();
                                    null !== n &&
                                        "object" == typeof n &&
                                        n.each(function () {
                                            var n = t(this).slick("getSlick");
                                            n.unslicked || n.slideHandler(e, !0);
                                        });
                                }),
                                (e.prototype.applyTransition = function (t) {
                                    var e = this,
                                        n = {};
                                    !1 === e.options.fade ? (n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                                        !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
                                }),
                                (e.prototype.autoPlay = function () {
                                    var t = this;
                                    t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
                                }),
                                (e.prototype.autoPlayClear = function () {
                                    var t = this;
                                    t.autoPlayTimer && clearInterval(t.autoPlayTimer);
                                }),
                                (e.prototype.autoPlayIterator = function () {
                                    var t = this,
                                        e = t.currentSlide + t.options.slidesToScroll;
                                    t.paused ||
                                        t.interrupted ||
                                        t.focussed ||
                                        (!1 === t.options.infinite &&
                                            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
                                                ? (t.direction = 0)
                                                : 0 === t.direction && ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 == 0 && (t.direction = 1))),
                                        t.slideHandler(e));
                                }),
                                (e.prototype.buildArrows = function () {
                                    var e = this;
                                    !0 === e.options.arrows &&
                                        ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
                                        (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
                                        e.slideCount > e.options.slidesToShow
                                            ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                              e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                                              e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                                              e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                                              !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                                            : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
                                }),
                                (e.prototype.buildDots = function () {
                                    var e,
                                        n,
                                        i = this;
                                    if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                                        for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
                                        (i.$dots = n.appendTo(i.options.appendDots)), i.$dots.find("li").first().addClass("slick-active");
                                    }
                                }),
                                (e.prototype.buildOut = function () {
                                    var e = this;
                                    (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                                        (e.slideCount = e.$slides.length),
                                        e.$slides.each(function (e, n) {
                                            t(n)
                                                .attr("data-slick-index", e)
                                                .data("originalStyling", t(n).attr("style") || "");
                                        }),
                                        e.$slider.addClass("slick-slider"),
                                        (e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                                        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                                        e.$slideTrack.css("opacity", 0),
                                        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
                                        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                                        e.setupInfinite(),
                                        e.buildArrows(),
                                        e.buildDots(),
                                        e.updateDots(),
                                        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                                        !0 === e.options.draggable && e.$list.addClass("draggable");
                                }),
                                (e.prototype.buildRows = function () {
                                    var t,
                                        e,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s,
                                        a = this;
                                    if (((i = document.createDocumentFragment()), (o = a.$slider.children()), a.options.rows > 0)) {
                                        for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; t < r; t++) {
                                            var l = document.createElement("div");
                                            for (e = 0; e < a.options.rows; e++) {
                                                var u = document.createElement("div");
                                                for (n = 0; n < a.options.slidesPerRow; n++) {
                                                    var c = t * s + (e * a.options.slidesPerRow + n);
                                                    o.get(c) && u.appendChild(o.get(c));
                                                }
                                                l.appendChild(u);
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
                                (e.prototype.checkResponsive = function (e, n) {
                                    var i,
                                        r,
                                        o,
                                        s = this,
                                        a = !1,
                                        l = s.$slider.width(),
                                        u = window.innerWidth || t(window).width();
                                    if (
                                        ("window" === s.respondTo ? (o = u) : "slider" === s.respondTo ? (o = l) : "min" === s.respondTo && (o = Math.min(u, l)),
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
                                                      : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r])), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                                                  (a = r))
                                                : ((s.activeBreakpoint = r),
                                                  "unslick" === s.breakpointSettings[r]
                                                      ? s.unslick(r)
                                                      : ((s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r])), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)),
                                                  (a = r))
                                            : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), (a = r)),
                                            e || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                                    }
                                }),
                                (e.prototype.changeSlide = function (e, n) {
                                    var i,
                                        r,
                                        o = this,
                                        s = t(e.currentTarget);
                                    switch (
                                        (s.is("a") && e.preventDefault(),
                                        s.is("li") || (s = s.closest("li")),
                                        (i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
                                        e.data.message)
                                    ) {
                                        case "previous":
                                            (r = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, n);
                                            break;
                                        case "next":
                                            (r = 0 === i ? o.options.slidesToScroll : i), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, n);
                                            break;
                                        case "index":
                                            var a = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
                                            o.slideHandler(o.checkNavigable(a), !1, n), s.children().trigger("focus");
                                            break;
                                        default:
                                            return;
                                    }
                                }),
                                (e.prototype.checkNavigable = function (t) {
                                    var e, n;
                                    if (((n = 0), t > (e = this.getNavigableIndexes())[e.length - 1])) t = e[e.length - 1];
                                    else
                                        for (var i in e) {
                                            if (t < e[i]) {
                                                t = n;
                                                break;
                                            }
                                            n = e[i];
                                        }
                                    return t;
                                }),
                                (e.prototype.cleanUpEvents = function () {
                                    var e = this;
                                    e.options.dots &&
                                        null !== e.$dots &&
                                        (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                                        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                                        e.$slider.off("focus.slick blur.slick"),
                                        !0 === e.options.arrows &&
                                            e.slideCount > e.options.slidesToShow &&
                                            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                                            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                                            !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                                        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                                        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                                        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                                        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                                        e.$list.off("click.slick", e.clickHandler),
                                        t(document).off(e.visibilityChange, e.visibility),
                                        e.cleanUpSlideEvents(),
                                        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                                        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
                                        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                                        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                                        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                                        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
                                }),
                                (e.prototype.cleanUpSlideEvents = function () {
                                    var e = this;
                                    e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                                }),
                                (e.prototype.cleanUpRows = function () {
                                    var t,
                                        e = this;
                                    e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t));
                                }),
                                (e.prototype.clickHandler = function (t) {
                                    !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
                                }),
                                (e.prototype.destroy = function (e) {
                                    var n = this;
                                    n.autoPlayClear(),
                                        (n.touchObject = {}),
                                        n.cleanUpEvents(),
                                        t(".slick-cloned", n.$slider).detach(),
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
                                                    t(this).attr("style", t(this).data("originalStyling"));
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
                                        e || n.$slider.trigger("destroy", [n]);
                                }),
                                (e.prototype.disableTransition = function (t) {
                                    var e = this,
                                        n = {};
                                    (n[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
                                }),
                                (e.prototype.fadeSlide = function (t, e) {
                                    var n = this;
                                    !1 === n.cssTransitions
                                        ? (n.$slides.eq(t).css({ zIndex: n.options.zIndex }), n.$slides.eq(t).animate({ opacity: 1 }, n.options.speed, n.options.easing, e))
                                        : (n.applyTransition(t),
                                          n.$slides.eq(t).css({ opacity: 1, zIndex: n.options.zIndex }),
                                          e &&
                                              setTimeout(function () {
                                                  n.disableTransition(t), e.call();
                                              }, n.options.speed));
                                }),
                                (e.prototype.fadeSlideOut = function (t) {
                                    var e = this;
                                    !1 === e.cssTransitions
                                        ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
                                        : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
                                }),
                                (e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
                                    var e = this;
                                    null !== t && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
                                }),
                                (e.prototype.focusHandler = function () {
                                    var e = this;
                                    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                                        n.stopImmediatePropagation();
                                        var i = t(this);
                                        setTimeout(function () {
                                            e.options.pauseOnFocus && ((e.focussed = i.is(":focus")), e.autoPlay());
                                        }, 0);
                                    });
                                }),
                                (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                                    return this.currentSlide;
                                }),
                                (e.prototype.getDotCount = function () {
                                    var t = this,
                                        e = 0,
                                        n = 0,
                                        i = 0;
                                    if (!0 === t.options.infinite)
                                        if (t.slideCount <= t.options.slidesToShow) ++i;
                                        else for (; e < t.slideCount; ) ++i, (e = n + t.options.slidesToScroll), (n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                                    else if (!0 === t.options.centerMode) i = t.slideCount;
                                    else if (t.options.asNavFor)
                                        for (; e < t.slideCount; ) ++i, (e = n + t.options.slidesToScroll), (n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                                    else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                                    return i - 1;
                                }),
                                (e.prototype.getLeft = function (t) {
                                    var e,
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
                                                  t + o.options.slidesToScroll > o.slideCount &&
                                                  o.slideCount > o.options.slidesToShow &&
                                                  (t > o.slideCount
                                                      ? ((o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1), (s = (o.options.slidesToShow - (t - o.slideCount)) * n * -1))
                                                      : ((o.slideOffset = (o.slideCount % o.options.slidesToScroll) * o.slideWidth * -1), (s = (o.slideCount % o.options.slidesToScroll) * n * -1))))
                                            : t + o.options.slidesToShow > o.slideCount && ((o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth), (s = (t + o.options.slidesToShow - o.slideCount) * n)),
                                        o.slideCount <= o.options.slidesToShow && ((o.slideOffset = 0), (s = 0)),
                                        !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
                                            ? (o.slideOffset = (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 - (o.slideWidth * o.slideCount) / 2)
                                            : !0 === o.options.centerMode && !0 === o.options.infinite
                                            ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
                                            : !0 === o.options.centerMode && ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
                                        (e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + s),
                                        !0 === o.options.variableWidth &&
                                            ((i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow)),
                                            (e = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                                            !0 === o.options.centerMode &&
                                                ((i =
                                                    o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite
                                                        ? o.$slideTrack.children(".slick-slide").eq(t)
                                                        : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1)),
                                                (e = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                                                (e += (o.$list.width() - i.outerWidth()) / 2))),
                                        e
                                    );
                                }),
                                (e.prototype.getOption = e.prototype.slickGetOption = function (t) {
                                    return this.options[t];
                                }),
                                (e.prototype.getNavigableIndexes = function () {
                                    var t,
                                        e = this,
                                        n = 0,
                                        i = 0,
                                        r = [];
                                    for (!1 === e.options.infinite ? (t = e.slideCount) : ((n = -1 * e.options.slidesToScroll), (i = -1 * e.options.slidesToScroll), (t = 2 * e.slideCount)); n < t; )
                                        r.push(n), (n = i + e.options.slidesToScroll), (i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                                    return r;
                                }),
                                (e.prototype.getSlick = function () {
                                    return this;
                                }),
                                (e.prototype.getSlideCount = function () {
                                    var e,
                                        n,
                                        i = this;
                                    return (
                                        (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
                                        !0 === i.options.swipeToSlide
                                            ? (i.$slideTrack.find(".slick-slide").each(function (r, o) {
                                                  if (o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * i.swipeLeft) return (e = o), !1;
                                              }),
                                              Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1)
                                            : i.options.slidesToScroll
                                    );
                                }),
                                (e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
                                    this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
                                }),
                                (e.prototype.init = function (e) {
                                    var n = this;
                                    t(n.$slider).hasClass("slick-initialized") ||
                                        (t(n.$slider).addClass("slick-initialized"),
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
                                        e && n.$slider.trigger("init", [n]),
                                        !0 === n.options.accessibility && n.initADA(),
                                        n.options.autoplay && ((n.paused = !1), n.autoPlay());
                                }),
                                (e.prototype.initADA = function () {
                                    var e = this,
                                        n = Math.ceil(e.slideCount / e.options.slidesToShow),
                                        i = e.getNavigableIndexes().filter(function (t) {
                                            return t >= 0 && t < e.slideCount;
                                        });
                                    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                                        null !== e.$dots &&
                                            (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (n) {
                                                var r = i.indexOf(n);
                                                if ((t(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + n, tabindex: -1 }), -1 !== r)) {
                                                    var o = "slick-slide-control" + e.instanceUid + r;
                                                    t("#" + o).length && t(this).attr({ "aria-describedby": o });
                                                }
                                            }),
                                            e.$dots
                                                .attr("role", "tablist")
                                                .find("li")
                                                .each(function (r) {
                                                    var o = i[r];
                                                    t(this).attr({ role: "presentation" }),
                                                        t(this)
                                                            .find("button")
                                                            .first()
                                                            .attr({
                                                                role: "tab",
                                                                id: "slick-slide-control" + e.instanceUid + r,
                                                                "aria-controls": "slick-slide" + e.instanceUid + o,
                                                                "aria-label": r + 1 + " of " + n,
                                                                "aria-selected": null,
                                                                tabindex: "-1",
                                                            });
                                                })
                                                .eq(e.currentSlide)
                                                .find("button")
                                                .attr({ "aria-selected": "true", tabindex: "0" })
                                                .end());
                                    for (var r = e.currentSlide, o = r + e.options.slidesToShow; r < o; r++) e.options.focusOnChange ? e.$slides.eq(r).attr({ tabindex: "0" }) : e.$slides.eq(r).removeAttr("tabindex");
                                    e.activateADA();
                                }),
                                (e.prototype.initArrowEvents = function () {
                                    var t = this;
                                    !0 === t.options.arrows &&
                                        t.slideCount > t.options.slidesToShow &&
                                        (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide),
                                        t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide),
                                        !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)));
                                }),
                                (e.prototype.initDotEvents = function () {
                                    var e = this;
                                    !0 === e.options.dots &&
                                        e.slideCount > e.options.slidesToShow &&
                                        (t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                                        !0 === e.options.dots &&
                                            !0 === e.options.pauseOnDotsHover &&
                                            e.slideCount > e.options.slidesToShow &&
                                            t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                                }),
                                (e.prototype.initSlideEvents = function () {
                                    var e = this;
                                    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
                                }),
                                (e.prototype.initializeEvents = function () {
                                    var e = this;
                                    e.initArrowEvents(),
                                        e.initDotEvents(),
                                        e.initSlideEvents(),
                                        e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                                        e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                                        e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                                        e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                                        e.$list.on("click.slick", e.clickHandler),
                                        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
                                        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                                        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                                        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
                                        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
                                        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                                        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                                        t(e.setPosition);
                                }),
                                (e.prototype.initUI = function () {
                                    var t = this;
                                    !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
                                }),
                                (e.prototype.keyHandler = function (t) {
                                    var e = this;
                                    t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                                        (37 === t.keyCode && !0 === e.options.accessibility
                                            ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                                            : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
                                }),
                                (e.prototype.lazyLoad = function () {
                                    var e,
                                        n,
                                        i,
                                        r = this;
                                    function o(e) {
                                        t("img[data-lazy]", e).each(function () {
                                            var e = t(this),
                                                n = t(this).attr("data-lazy"),
                                                i = t(this).attr("data-srcset"),
                                                o = t(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                                                s = document.createElement("img");
                                            (s.onload = function () {
                                                e.animate({ opacity: 0 }, 100, function () {
                                                    i && (e.attr("srcset", i), o && e.attr("sizes", o)),
                                                        e.attr("src", n).animate({ opacity: 1 }, 200, function () {
                                                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                                        }),
                                                        r.$slider.trigger("lazyLoaded", [r, e, n]);
                                                });
                                            }),
                                                (s.onerror = function () {
                                                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, n]);
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
                                        (e = r.$slider.find(".slick-slide").slice(n, i)),
                                        "anticipated" === r.options.lazyLoad)
                                    )
                                        for (var s = n - 1, a = i, l = r.$slider.find(".slick-slide"), u = 0; u < r.options.slidesToScroll; u++) s < 0 && (s = r.slideCount - 1), (e = (e = e.add(l.eq(s))).add(l.eq(a))), s--, a++;
                                    o(e),
                                        r.slideCount <= r.options.slidesToShow
                                            ? o(r.$slider.find(".slick-slide"))
                                            : r.currentSlide >= r.slideCount - r.options.slidesToShow
                                            ? o(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow))
                                            : 0 === r.currentSlide && o(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
                                }),
                                (e.prototype.loadSlider = function () {
                                    var t = this;
                                    t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
                                }),
                                (e.prototype.next = e.prototype.slickNext = function () {
                                    this.changeSlide({ data: { message: "next" } });
                                }),
                                (e.prototype.orientationChange = function () {
                                    var t = this;
                                    t.checkResponsive(), t.setPosition();
                                }),
                                (e.prototype.pause = e.prototype.slickPause = function () {
                                    var t = this;
                                    t.autoPlayClear(), (t.paused = !0);
                                }),
                                (e.prototype.play = e.prototype.slickPlay = function () {
                                    var t = this;
                                    t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
                                }),
                                (e.prototype.postSlide = function (e) {
                                    var n = this;
                                    n.unslicked ||
                                        (n.$slider.trigger("afterChange", [n, e]),
                                        (n.animating = !1),
                                        n.slideCount > n.options.slidesToShow && n.setPosition(),
                                        (n.swipeLeft = null),
                                        n.options.autoplay && n.autoPlay(),
                                        !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && t(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
                                }),
                                (e.prototype.prev = e.prototype.slickPrev = function () {
                                    this.changeSlide({ data: { message: "previous" } });
                                }),
                                (e.prototype.preventDefault = function (t) {
                                    t.preventDefault();
                                }),
                                (e.prototype.progressiveLazyLoad = function (e) {
                                    e = e || 1;
                                    var n,
                                        i,
                                        r,
                                        o,
                                        s,
                                        a = this,
                                        l = t("img[data-lazy]", a.$slider);
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
                                              e < 3
                                                  ? setTimeout(function () {
                                                        a.progressiveLazyLoad(e + 1);
                                                    }, 500)
                                                  : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad());
                                          }),
                                          (s.src = i))
                                        : a.$slider.trigger("allImagesLoaded", [a]);
                                }),
                                (e.prototype.refresh = function (e) {
                                    var n,
                                        i,
                                        r = this;
                                    (i = r.slideCount - r.options.slidesToShow),
                                        !r.options.infinite && r.currentSlide > i && (r.currentSlide = i),
                                        r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
                                        (n = r.currentSlide),
                                        r.destroy(!0),
                                        t.extend(r, r.initials, { currentSlide: n }),
                                        r.init(),
                                        e || r.changeSlide({ data: { message: "index", index: n } }, !1);
                                }),
                                (e.prototype.registerBreakpoints = function () {
                                    var e,
                                        n,
                                        i,
                                        r = this,
                                        o = r.options.responsive || null;
                                    if ("array" === t.type(o) && o.length) {
                                        for (e in ((r.respondTo = r.options.respondTo || "window"), o))
                                            if (((i = r.breakpoints.length - 1), o.hasOwnProperty(e))) {
                                                for (n = o[e].breakpoint; i >= 0; ) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
                                                r.breakpoints.push(n), (r.breakpointSettings[n] = o[e].settings);
                                            }
                                        r.breakpoints.sort(function (t, e) {
                                            return r.options.mobileFirst ? t - e : e - t;
                                        });
                                    }
                                }),
                                (e.prototype.reinit = function () {
                                    var e = this;
                                    (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                                        (e.slideCount = e.$slides.length),
                                        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                                        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                                        e.registerBreakpoints(),
                                        e.setProps(),
                                        e.setupInfinite(),
                                        e.buildArrows(),
                                        e.updateArrows(),
                                        e.initArrowEvents(),
                                        e.buildDots(),
                                        e.updateDots(),
                                        e.initDotEvents(),
                                        e.cleanUpSlideEvents(),
                                        e.initSlideEvents(),
                                        e.checkResponsive(!1, !0),
                                        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                                        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                                        e.setPosition(),
                                        e.focusHandler(),
                                        (e.paused = !e.options.autoplay),
                                        e.autoPlay(),
                                        e.$slider.trigger("reInit", [e]);
                                }),
                                (e.prototype.resize = function () {
                                    var e = this;
                                    t(window).width() !== e.windowWidth &&
                                        (clearTimeout(e.windowDelay),
                                        (e.windowDelay = window.setTimeout(function () {
                                            (e.windowWidth = t(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                                        }, 50)));
                                }),
                                (e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, n) {
                                    var i = this;
                                    if (((t = "boolean" == typeof t ? (!0 === (e = t) ? 0 : i.slideCount - 1) : !0 === e ? --t : t), i.slideCount < 1 || t < 0 || t > i.slideCount - 1)) return !1;
                                    i.unload(),
                                        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(),
                                        (i.$slides = i.$slideTrack.children(this.options.slide)),
                                        i.$slideTrack.children(this.options.slide).detach(),
                                        i.$slideTrack.append(i.$slides),
                                        (i.$slidesCache = i.$slides),
                                        i.reinit();
                                }),
                                (e.prototype.setCSS = function (t) {
                                    var e,
                                        n,
                                        i = this,
                                        r = {};
                                    !0 === i.options.rtl && (t = -t),
                                        (e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px"),
                                        (n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px"),
                                        (r[i.positionProp] = t),
                                        !1 === i.transformsEnabled
                                            ? i.$slideTrack.css(r)
                                            : ((r = {}),
                                              !1 === i.cssTransitions ? ((r[i.animType] = "translate(" + e + ", " + n + ")"), i.$slideTrack.css(r)) : ((r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)"), i.$slideTrack.css(r)));
                                }),
                                (e.prototype.setDimensions = function () {
                                    var t = this;
                                    !1 === t.options.vertical
                                        ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding })
                                        : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                                        (t.listWidth = t.$list.width()),
                                        (t.listHeight = t.$list.height()),
                                        !1 === t.options.vertical && !1 === t.options.variableWidth
                                            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                                            : !0 === t.options.variableWidth
                                            ? t.$slideTrack.width(5e3 * t.slideCount)
                                            : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                                    var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                                    !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
                                }),
                                (e.prototype.setFade = function () {
                                    var e,
                                        n = this;
                                    n.$slides.each(function (i, r) {
                                        (e = n.slideWidth * i * -1),
                                            !0 === n.options.rtl
                                                ? t(r).css({ position: "relative", right: e, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 })
                                                : t(r).css({ position: "relative", left: e, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
                                    }),
                                        n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                                }),
                                (e.prototype.setHeight = function () {
                                    var t = this;
                                    if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                                        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                                        t.$list.css("height", e);
                                    }
                                }),
                                (e.prototype.setOption = e.prototype.slickSetOption = function () {
                                    var e,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s = this,
                                        a = !1;
                                    if (
                                        ("object" === t.type(arguments[0])
                                            ? ((i = arguments[0]), (a = arguments[1]), (o = "multiple"))
                                            : "string" === t.type(arguments[0]) &&
                                              ((i = arguments[0]), (r = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? (o = "responsive") : void 0 !== arguments[1] && (o = "single")),
                                        "single" === o)
                                    )
                                        s.options[i] = r;
                                    else if ("multiple" === o)
                                        t.each(i, function (t, e) {
                                            s.options[t] = e;
                                        });
                                    else if ("responsive" === o)
                                        for (n in r)
                                            if ("array" !== t.type(s.options.responsive)) s.options.responsive = [r[n]];
                                            else {
                                                for (e = s.options.responsive.length - 1; e >= 0; ) s.options.responsive[e].breakpoint === r[n].breakpoint && s.options.responsive.splice(e, 1), e--;
                                                s.options.responsive.push(r[n]);
                                            }
                                    a && (s.unload(), s.reinit());
                                }),
                                (e.prototype.setPosition = function () {
                                    var t = this;
                                    t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
                                }),
                                (e.prototype.setProps = function () {
                                    var t = this,
                                        e = document.body.style;
                                    (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                                        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                                        (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                                        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                                        void 0 !== e.OTransform &&
                                            ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                                        void 0 !== e.MozTransform &&
                                            ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                                        void 0 !== e.webkitTransform &&
                                            ((t.animType = "webkitTransform"),
                                            (t.transformType = "-webkit-transform"),
                                            (t.transitionType = "webkitTransition"),
                                            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                                        void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                                        void 0 !== e.transform && !1 !== t.animType && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                                        (t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
                                }),
                                (e.prototype.setSlideClasses = function (t) {
                                    var e,
                                        n,
                                        i,
                                        r,
                                        o = this;
                                    if (((n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode)) {
                                        var s = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                                        (e = Math.floor(o.options.slidesToShow / 2)),
                                            !0 === o.options.infinite &&
                                                (t >= e && t <= o.slideCount - 1 - e
                                                    ? o.$slides
                                                          .slice(t - e + s, t + e + 1)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")
                                                    : ((i = o.options.slidesToShow + t),
                                                      n
                                                          .slice(i - e + 1 + s, i + e + 2)
                                                          .addClass("slick-active")
                                                          .attr("aria-hidden", "false")),
                                                0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")),
                                            o.$slides.eq(t).addClass("slick-center");
                                    } else
                                        t >= 0 && t <= o.slideCount - o.options.slidesToShow
                                            ? o.$slides
                                                  .slice(t, t + o.options.slidesToShow)
                                                  .addClass("slick-active")
                                                  .attr("aria-hidden", "false")
                                            : n.length <= o.options.slidesToShow
                                            ? n.addClass("slick-active").attr("aria-hidden", "false")
                                            : ((r = o.slideCount % o.options.slidesToShow),
                                              (i = !0 === o.options.infinite ? o.options.slidesToShow + t : t),
                                              o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow
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
                                (e.prototype.setupInfinite = function () {
                                    var e,
                                        n,
                                        i,
                                        r = this;
                                    if ((!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && ((n = null), r.slideCount > r.options.slidesToShow))) {
                                        for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - i; e -= 1)
                                            (n = e - 1),
                                                t(r.$slides[n])
                                                    .clone(!0)
                                                    .attr("id", "")
                                                    .attr("data-slick-index", n - r.slideCount)
                                                    .prependTo(r.$slideTrack)
                                                    .addClass("slick-cloned");
                                        for (e = 0; e < i + r.slideCount; e += 1)
                                            (n = e),
                                                t(r.$slides[n])
                                                    .clone(!0)
                                                    .attr("id", "")
                                                    .attr("data-slick-index", n + r.slideCount)
                                                    .appendTo(r.$slideTrack)
                                                    .addClass("slick-cloned");
                                        r.$slideTrack
                                            .find(".slick-cloned")
                                            .find("[id]")
                                            .each(function () {
                                                t(this).attr("id", "");
                                            });
                                    }
                                }),
                                (e.prototype.interrupt = function (t) {
                                    var e = this;
                                    t || e.autoPlay(), (e.interrupted = t);
                                }),
                                (e.prototype.selectHandler = function (e) {
                                    var n = this,
                                        i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                                        r = parseInt(i.attr("data-slick-index"));
                                    r || (r = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(r, !1, !0) : n.slideHandler(r);
                                }),
                                (e.prototype.slideHandler = function (t, e, n) {
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a,
                                        l = null,
                                        u = this;
                                    if (((e = e || !1), !((!0 === u.animating && !0 === u.options.waitForAnimate) || (!0 === u.options.fade && u.currentSlide === t))))
                                        if (
                                            (!1 === e && u.asNavFor(t),
                                            (i = t),
                                            (l = u.getLeft(i)),
                                            (s = u.getLeft(u.currentSlide)),
                                            (u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft),
                                            !1 === u.options.infinite && !1 === u.options.centerMode && (t < 0 || t > u.getDotCount() * u.options.slidesToScroll))
                                        )
                                            !1 === u.options.fade &&
                                                ((i = u.currentSlide),
                                                !0 !== n && u.slideCount > u.options.slidesToShow
                                                    ? u.animateSlide(s, function () {
                                                          u.postSlide(i);
                                                      })
                                                    : u.postSlide(i));
                                        else if (!1 === u.options.infinite && !0 === u.options.centerMode && (t < 0 || t > u.slideCount - u.options.slidesToScroll))
                                            !1 === u.options.fade &&
                                                ((i = u.currentSlide),
                                                !0 !== n && u.slideCount > u.options.slidesToShow
                                                    ? u.animateSlide(s, function () {
                                                          u.postSlide(i);
                                                      })
                                                    : u.postSlide(i));
                                        else {
                                            if (
                                                (u.options.autoplay && clearInterval(u.autoPlayTimer),
                                                (r =
                                                    i < 0
                                                        ? u.slideCount % u.options.slidesToScroll != 0
                                                            ? u.slideCount - (u.slideCount % u.options.slidesToScroll)
                                                            : u.slideCount + i
                                                        : i >= u.slideCount
                                                        ? u.slideCount % u.options.slidesToScroll != 0
                                                            ? 0
                                                            : i - u.slideCount
                                                        : i),
                                                (u.animating = !0),
                                                u.$slider.trigger("beforeChange", [u, u.currentSlide, r]),
                                                (o = u.currentSlide),
                                                (u.currentSlide = r),
                                                u.setSlideClasses(u.currentSlide),
                                                u.options.asNavFor && (a = (a = u.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide),
                                                u.updateDots(),
                                                u.updateArrows(),
                                                !0 === u.options.fade)
                                            )
                                                return (
                                                    !0 !== n
                                                        ? (u.fadeSlideOut(o),
                                                          u.fadeSlide(r, function () {
                                                              u.postSlide(r);
                                                          }))
                                                        : u.postSlide(r),
                                                    void u.animateHeight()
                                                );
                                            !0 !== n && u.slideCount > u.options.slidesToShow
                                                ? u.animateSlide(l, function () {
                                                      u.postSlide(r);
                                                  })
                                                : u.postSlide(r);
                                        }
                                }),
                                (e.prototype.startLoad = function () {
                                    var t = this;
                                    !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                                        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                                        t.$slider.addClass("slick-loading");
                                }),
                                (e.prototype.swipeDirection = function () {
                                    var t,
                                        e,
                                        n,
                                        i,
                                        r = this;
                                    return (
                                        (t = r.touchObject.startX - r.touchObject.curX),
                                        (e = r.touchObject.startY - r.touchObject.curY),
                                        (n = Math.atan2(e, t)),
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
                                (e.prototype.swipeEnd = function (t) {
                                    var e,
                                        n,
                                        i = this;
                                    if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1), !1;
                                    if (((i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX)) return !1;
                                    if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
                                        switch ((n = i.swipeDirection())) {
                                            case "left":
                                            case "down":
                                                (e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
                                                break;
                                            case "right":
                                            case "up":
                                                (e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
                                        }
                                        "vertical" != n && (i.slideHandler(e), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
                                    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                                }),
                                (e.prototype.swipeHandler = function (t) {
                                    var e = this;
                                    if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))))
                                        switch (
                                            ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                                            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                                            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                                            t.data.action)
                                        ) {
                                            case "start":
                                                e.swipeStart(t);
                                                break;
                                            case "move":
                                                e.swipeMove(t);
                                                break;
                                            case "end":
                                                e.swipeEnd(t);
                                        }
                                }),
                                (e.prototype.swipeMove = function (t) {
                                    var e,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s,
                                        a = this;
                                    return (
                                        (o = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
                                        !(!a.dragging || a.scrolling || (o && 1 !== o.length)) &&
                                            ((e = a.getLeft(a.currentSlide)),
                                            (a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX),
                                            (a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY),
                                            (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                                            (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                                            !a.options.verticalSwiping && !a.swiping && s > 4
                                                ? ((a.scrolling = !0), !1)
                                                : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                                                  (n = a.swipeDirection()),
                                                  void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), t.preventDefault()),
                                                  (r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                                                  !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                                                  (i = a.touchObject.swipeLength),
                                                  (a.touchObject.edgeHit = !1),
                                                  !1 === a.options.infinite &&
                                                      ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                                                      ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                                                  !1 === a.options.vertical ? (a.swipeLeft = e + i * r) : (a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * r),
                                                  !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * r),
                                                  !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                                    );
                                }),
                                (e.prototype.swipeStart = function (t) {
                                    var e,
                                        n = this;
                                    if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return (n.touchObject = {}), !1;
                                    void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                                        (n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
                                        (n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
                                        (n.dragging = !0);
                                }),
                                (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                                    var t = this;
                                    null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
                                }),
                                (e.prototype.unload = function () {
                                    var e = this;
                                    t(".slick-cloned", e.$slider).remove(),
                                        e.$dots && e.$dots.remove(),
                                        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                                        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                                        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                                }),
                                (e.prototype.unslick = function (t) {
                                    var e = this;
                                    e.$slider.trigger("unslick", [e, t]), e.destroy();
                                }),
                                (e.prototype.updateArrows = function () {
                                    var t = this;
                                    Math.floor(t.options.slidesToShow / 2),
                                        !0 === t.options.arrows &&
                                            t.slideCount > t.options.slidesToShow &&
                                            !t.options.infinite &&
                                            (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                            t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                                            0 === t.currentSlide
                                                ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                                : ((t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode) || (t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode)) &&
                                                  (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
                                }),
                                (e.prototype.updateDots = function () {
                                    var t = this;
                                    null !== t.$dots &&
                                        (t.$dots.find("li").removeClass("slick-active").end(),
                                        t.$dots
                                            .find("li")
                                            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                                            .addClass("slick-active"));
                                }),
                                (e.prototype.visibility = function () {
                                    var t = this;
                                    t.options.autoplay && (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
                                }),
                                (t.fn.slick = function () {
                                    var t,
                                        n,
                                        i = this,
                                        r = arguments[0],
                                        o = Array.prototype.slice.call(arguments, 1),
                                        s = i.length;
                                    for (t = 0; t < s; t++) if (("object" == typeof r || void 0 === r ? (i[t].slick = new e(i[t], r)) : (n = i[t].slick[r].apply(i[t].slick, o)), void 0 !== n)) return n;
                                    return i;
                                });
                        }),
                        void 0 === (o = "function" == typeof i ? i.apply(e, r) : i) || (t.exports = o);
                })();
            },
            379: (t, e, n) => {
                "use strict";
                var i,
                    r = function () {
                        return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i;
                    },
                    o = (function () {
                        var t = {};
                        return function (e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                    try {
                                        n = n.contentDocument.head;
                                    } catch (t) {
                                        n = null;
                                    }
                                t[e] = n;
                            }
                            return t[e];
                        };
                    })(),
                    s = [];
                function a(t) {
                    for (var e = -1, n = 0; n < s.length; n++)
                        if (s[n].identifier === t) {
                            e = n;
                            break;
                        }
                    return e;
                }
                function l(t, e) {
                    for (var n = {}, i = [], r = 0; r < t.length; r++) {
                        var o = t[r],
                            l = e.base ? o[0] + e.base : o[0],
                            u = n[l] || 0,
                            c = "".concat(l, " ").concat(u);
                        n[l] = u + 1;
                        var d = a(c),
                            p = { css: o[1], media: o[2], sourceMap: o[3] };
                        -1 !== d ? (s[d].references++, s[d].updater(p)) : s.push({ identifier: c, updater: v(p, e), references: 1 }), i.push(c);
                    }
                    return i;
                }
                function u(t) {
                    var e = document.createElement("style"),
                        i = t.attributes || {};
                    if (void 0 === i.nonce) {
                        var r = n.nc;
                        r && (i.nonce = r);
                    }
                    if (
                        (Object.keys(i).forEach(function (t) {
                            e.setAttribute(t, i[t]);
                        }),
                        "function" == typeof t.insert)
                    )
                        t.insert(e);
                    else {
                        var s = o(t.insert || "head");
                        if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        s.appendChild(e);
                    }
                    return e;
                }
                var c,
                    d =
                        ((c = []),
                        function (t, e) {
                            return (c[t] = e), c.filter(Boolean).join("\n");
                        });
                function p(t, e, n, i) {
                    var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
                    if (t.styleSheet) t.styleSheet.cssText = d(e, r);
                    else {
                        var o = document.createTextNode(r),
                            s = t.childNodes;
                        s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o);
                    }
                }
                function f(t, e, n) {
                    var i = n.css,
                        r = n.media,
                        o = n.sourceMap;
                    if (
                        (r ? t.setAttribute("media", r) : t.removeAttribute("media"),
                        o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                        t.styleSheet)
                    )
                        t.styleSheet.cssText = i;
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(i));
                    }
                }
                var h = null,
                    g = 0;
                function v(t, e) {
                    var n, i, r;
                    if (e.singleton) {
                        var o = g++;
                        (n = h || (h = u(e))), (i = p.bind(null, n, o, !1)), (r = p.bind(null, n, o, !0));
                    } else
                        (n = u(e)),
                            (i = f.bind(null, n, e)),
                            (r = function () {
                                !(function (t) {
                                    if (null === t.parentNode) return !1;
                                    t.parentNode.removeChild(t);
                                })(n);
                            });
                    return (
                        i(t),
                        function (e) {
                            if (e) {
                                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                                i((t = e));
                            } else r();
                        }
                    );
                }
                t.exports = function (t, e) {
                    (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = r());
                    var n = l((t = t || []), e);
                    return function (t) {
                        if (((t = t || []), "[object Array]" === Object.prototype.toString.call(t))) {
                            for (var i = 0; i < n.length; i++) {
                                var r = a(n[i]);
                                s[r].references--;
                            }
                            for (var o = l(t, e), u = 0; u < n.length; u++) {
                                var c = a(n[u]);
                                0 === s[c].references && (s[c].updater(), s.splice(c, 1));
                            }
                            n = o;
                        }
                    };
                };
            },
        },
        e = {};
    function n(i) {
        var r = e[i];
        if (void 0 !== r) return r.exports;
        var o = (e[i] = { id: i, exports: {} });
        return t[i].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, { a: e }), e;
    }),
        (n.d = (t, e) => {
            for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        }),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (() => {
            "use strict";
            var t = n(755),
                e = n.n(t),
                i = (n(70), n(154), n(379)),
                r = n.n(i),
                o = n(773),
                s = { insert: "head", singleton: !1 };
            r()(o.Z, s);
            o.Z.locals;
            function a(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function l(t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
            }
            var u,
                c,
                d,
                p,
                f,
                h,
                g,
                v,
                m,
                y,
                w,
                x,
                b,
                T = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
                _ = { duration: 0.5, overwrite: !1, delay: 0 },
                k = 1e8,
                C = 1e-8,
                S = 2 * Math.PI,
                A = S / 4,
                E = 0,
                O = Math.sqrt,
                M = Math.cos,
                P = Math.sin,
                $ = function (t) {
                    return "string" == typeof t;
                },
                L = function (t) {
                    return "function" == typeof t;
                },
                D = function (t) {
                    return "number" == typeof t;
                },
                N = function (t) {
                    return void 0 === t;
                },
                j = function (t) {
                    return "object" == typeof t;
                },
                H = function (t) {
                    return !1 !== t;
                },
                I = function () {
                    return "undefined" != typeof window;
                },
                R = function (t) {
                    return L(t) || $(t);
                },
                B = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
                z = Array.isArray,
                q = /(?:-?\.?\d|\.)+/gi,
                F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                W = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                X = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                U = /[+-]=-?[.\d]+/,
                Y = /[^,'"\[\]\s]+/gi,
                V = /[\d.+\-=]+(?:e[-+]\d*)*/i,
                G = {},
                Q = {},
                J = function (t) {
                    return (Q = _t(t, G)) && dn;
                },
                K = function (t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
                },
                Z = function (t, e) {
                    return !e && console.warn(t);
                },
                tt = function (t, e) {
                    return (t && (G[t] = e) && Q && (Q[t] = e)) || G;
                },
                et = function () {
                    return 0;
                },
                nt = {},
                it = [],
                rt = {},
                ot = {},
                st = {},
                at = 30,
                lt = [],
                ut = "",
                ct = function (t) {
                    var e,
                        n,
                        i = t[0];
                    if ((j(i) || L(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
                        for (n = lt.length; n-- && !lt[n].targetTest(i); );
                        e = lt[n];
                    }
                    for (n = t.length; n--; ) (t[n] && (t[n]._gsap || (t[n]._gsap = new Ne(t[n], e)))) || t.splice(n, 1);
                    return t;
                },
                dt = function (t) {
                    return t._gsap || ct(te(t))[0]._gsap;
                },
                pt = function (t, e, n) {
                    return (n = t[e]) && L(n) ? t[e]() : (N(n) && t.getAttribute && t.getAttribute(e)) || n;
                },
                ft = function (t, e) {
                    return (t = t.split(",")).forEach(e) || t;
                },
                ht = function (t) {
                    return Math.round(1e5 * t) / 1e5 || 0;
                },
                gt = function (t) {
                    return Math.round(1e7 * t) / 1e7 || 0;
                },
                vt = function (t, e) {
                    for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; );
                    return i < n;
                },
                mt = function () {
                    var t,
                        e,
                        n = it.length,
                        i = it.slice(0);
                    for (rt = {}, it.length = 0, t = 0; t < n; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
                },
                yt = function (t, e, n, i) {
                    it.length && mt(), t.render(e, n, i), it.length && mt();
                },
                wt = function (t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(Y).length < 2 ? e : $(t) ? t.trim() : t;
                },
                xt = function (t) {
                    return t;
                },
                bt = function (t, e) {
                    for (var n in e) n in t || (t[n] = e[n]);
                    return t;
                },
                Tt = function (t, e) {
                    for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
                },
                _t = function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t;
                },
                kt = function t(e, n) {
                    for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = j(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
                    return e;
                },
                Ct = function (t, e) {
                    var n,
                        i = {};
                    for (n in t) n in e || (i[n] = t[n]);
                    return i;
                },
                St = function (t) {
                    var e = t.parent || c,
                        n = t.keyframes ? Tt : bt;
                    if (H(t.inherit)) for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
                    return t;
                },
                At = function (t, e, n, i) {
                    void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                    var r = e._prev,
                        o = e._next;
                    r ? (r._next = o) : t[n] === e && (t[n] = o), o ? (o._prev = r) : t[i] === e && (t[i] = r), (e._next = e._prev = e.parent = null);
                },
                Et = function (t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
                },
                Ot = function (t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
                    return t;
                },
                Mt = function (t) {
                    for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                    return t;
                },
                Pt = function t(e) {
                    return !e || (e._ts && t(e.parent));
                },
                $t = function (t) {
                    return t._repeat ? Lt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
                },
                Lt = function (t, e) {
                    var n = Math.floor((t /= e));
                    return t && n === t ? n - 1 : n;
                },
                Dt = function (t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
                },
                Nt = function (t) {
                    return (t._end = gt(t._start + (t._tDur / Math.abs(t._ts || t._rts || C) || 0)));
                },
                jt = function (t, e) {
                    var n = t._dp;
                    return n && n.smoothChildTiming && t._ts && ((t._start = gt(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Nt(t), n._dirty || Ot(n, t)), t;
                },
                Ht = function (t, e) {
                    var n;
                    if (((e._time || (e._initted && !e._dur)) && ((n = Dt(t.rawTime(), e)), (!e._dur || Gt(0, e.totalDuration(), n) - e._tTime > C) && e.render(n, !0)), Ot(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
                        if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
                        t._zTime = -1e-8;
                    }
                },
                It = function (t, e, n, i) {
                    return (
                        e.parent && Et(e),
                        (e._start = gt((D(n) ? n : n || t !== c ? Ut(t, n, e) : t._time) + e._delay)),
                        (e._end = gt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                        (function (t, e, n, i, r) {
                            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
                            var o,
                                s = t[i];
                            if (r) for (o = e[r]; s && s[r] > o; ) s = s._prev;
                            s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[n]), (t[n] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = s), (e.parent = e._dp = t);
                        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
                        qt(e) || (t._recent = e),
                        i || Ht(t, e),
                        t
                    );
                },
                Rt = function (t, e) {
                    return (G.ScrollTrigger || K("scrollTrigger", e)) && G.ScrollTrigger.create(e, t);
                },
                Bt = function (t, e, n, i) {
                    return qe(t, e), t._initted ? (!n && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && g !== Te.frame ? (it.push(t), (t._lazy = [e, i]), 1) : void 0) : 1;
                },
                zt = function t(e) {
                    var n = e.parent;
                    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
                },
                qt = function (t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e;
                },
                Ft = function (t, e, n, i) {
                    var r = t._repeat,
                        o = gt(e) || 0,
                        s = t._tTime / t._tDur;
                    return s && !i && (t._time *= o / t._dur), (t._dur = o), (t._tDur = r ? (r < 0 ? 1e10 : gt(o * (r + 1) + t._rDelay * r)) : o), s && !i ? jt(t, (t._tTime = t._tDur * s)) : t.parent && Nt(t), n || Ot(t.parent, t), t;
                },
                Wt = function (t) {
                    return t instanceof He ? Ot(t) : Ft(t, t._dur);
                },
                Xt = { _start: 0, endTime: et, totalDuration: et },
                Ut = function t(e, n, i) {
                    var r,
                        o,
                        s,
                        a = e.labels,
                        l = e._recent || Xt,
                        u = e.duration() >= k ? l.endTime(!1) : e._dur;
                    return $(n) && (isNaN(n) || n in a)
                        ? ((o = n.charAt(0)),
                          (s = "%" === n.substr(-1)),
                          (r = n.indexOf("=")),
                          "<" === o || ">" === o
                              ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (r < 0 ? l : i).totalDuration() / 100 : 1))
                              : r < 0
                              ? (n in a || (a[n] = u), a[n])
                              : ((o = parseFloat(n.charAt(r - 1) + n.substr(r + 1))), s && i && (o = (o / 100) * (z(i) ? i[0] : i).totalDuration()), r > 1 ? t(e, n.substr(0, r - 1), i) + o : u + o))
                        : null == n
                        ? u
                        : +n;
                },
                Yt = function (t, e, n) {
                    var i,
                        r,
                        o = D(e[1]),
                        s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                        a = e[s];
                    if ((o && (a.duration = e[1]), (a.parent = n), t)) {
                        for (i = a, r = n; r && !("immediateRender" in i); ) (i = r.vars.defaults || {}), (r = H(r.vars.inherit) && r.parent);
                        (a.immediateRender = H(i.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[s - 1]);
                    }
                    return new Ue(e[0], a, e[s + 1]);
                },
                Vt = function (t, e) {
                    return t || 0 === t ? e(t) : e;
                },
                Gt = function (t, e, n) {
                    return n < t ? t : n > e ? e : n;
                },
                Qt = function (t) {
                    if ("string" != typeof t) return "";
                    var e = V.exec(t);
                    return e ? t.substr(e.index + e[0].length) : "";
                },
                Jt = [].slice,
                Kt = function (t, e) {
                    return t && j(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && j(t[0]))) && !t.nodeType && t !== d;
                },
                Zt = function (t, e, n) {
                    return (
                        void 0 === n && (n = []),
                        t.forEach(function (t) {
                            var i;
                            return ($(t) && !e) || Kt(t, 1) ? (i = n).push.apply(i, te(t)) : n.push(t);
                        }) || n
                    );
                },
                te = function (t, e, n) {
                    return !$(t) || n || (!p && _e()) ? (z(t) ? Zt(t, n) : Kt(t) ? Jt.call(t, 0) : t ? [t] : []) : Jt.call((e || f).querySelectorAll(t), 0);
                },
                ee = function (t) {
                    return t.sort(function () {
                        return 0.5 - Math.random();
                    });
                },
                ne = function (t) {
                    if (L(t)) return t;
                    var e = j(t) ? t : { each: t },
                        n = Me(e.ease),
                        i = e.from || 0,
                        r = parseFloat(e.base) || 0,
                        o = {},
                        s = i > 0 && i < 1,
                        a = isNaN(i) || s,
                        l = e.axis,
                        u = i,
                        c = i;
                    return (
                        $(i) ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[i] || 0) : !s && a && ((u = i[0]), (c = i[1])),
                        function (t, s, d) {
                            var p,
                                f,
                                h,
                                g,
                                v,
                                m,
                                y,
                                w,
                                x,
                                b = (d || e).length,
                                T = o[b];
                            if (!T) {
                                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, k])[1])) {
                                    for (y = -k; y < (y = d[x++].getBoundingClientRect().left) && x < b; );
                                    x--;
                                }
                                for (T = o[b] = [], p = a ? Math.min(x, b) * u - 0.5 : i % x, f = a ? (b * c) / x - 0.5 : (i / x) | 0, y = 0, w = k, m = 0; m < b; m++)
                                    (h = (m % x) - p), (g = f - ((m / x) | 0)), (T[m] = v = l ? Math.abs("y" === l ? g : h) : O(h * h + g * g)), v > y && (y = v), v < w && (w = v);
                                "random" === i && ee(T),
                                    (T.max = y - w),
                                    (T.min = w),
                                    (T.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : l ? ("y" === l ? b / x : x) : Math.max(x, b / x)) || 0) * ("edges" === i ? -1 : 1)),
                                    (T.b = b < 0 ? r - b : r),
                                    (T.u = Qt(e.amount || e.each) || 0),
                                    (n = n && b < 0 ? Ee(n) : n);
                            }
                            return (b = (T[t] - T.min) / T.max || 0), gt(T.b + (n ? n(b) : b) * T.v) + T.u;
                        }
                    );
                },
                ie = function (t) {
                    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                    return function (n) {
                        var i = Math.round(parseFloat(n) / t) * t * e;
                        return (i - (i % 1)) / e + (D(n) ? 0 : Qt(n));
                    };
                },
                re = function (t, e) {
                    var n,
                        i,
                        r = z(t);
                    return (
                        !r && j(t) && ((n = r = t.radius || k), t.values ? ((t = te(t.values)), (i = !D(t[0])) && (n *= n)) : (t = ie(t.increment))),
                        Vt(
                            e,
                            r
                                ? L(t)
                                    ? function (e) {
                                          return (i = t(e)), Math.abs(i - e) <= n ? i : e;
                                      }
                                    : function (e) {
                                          for (var r, o, s = parseFloat(i ? e.x : e), a = parseFloat(i ? e.y : 0), l = k, u = 0, c = t.length; c--; )
                                              (r = i ? (r = t[c].x - s) * r + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && ((l = r), (u = c));
                                          return (u = !n || l <= n ? t[u] : e), i || u === e || D(e) ? u : u + Qt(e);
                                      }
                                : ie(t)
                        )
                    );
                },
                oe = function (t, e, n, i) {
                    return Vt(z(t) ? !e : !0 === n ? !!(n = 0) : !i, function () {
                        return z(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n) * n * i) / i;
                    });
                },
                se = function (t, e, n) {
                    return Vt(n, function (n) {
                        return t[~~e(n)];
                    });
                },
                ae = function (t) {
                    for (var e, n, i, r, o = 0, s = ""; ~(e = t.indexOf("random(", o)); )
                        (i = t.indexOf(")", e)), (r = "[" === t.charAt(e + 7)), (n = t.substr(e + 7, i - e - 7).match(r ? Y : q)), (s += t.substr(o, e - o) + oe(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)), (o = i + 1);
                    return s + t.substr(o, t.length - o);
                },
                le = function (t, e, n, i, r) {
                    var o = e - t,
                        s = i - n;
                    return Vt(r, function (e) {
                        return n + (((e - t) / o) * s || 0);
                    });
                },
                ue = function (t, e, n) {
                    var i,
                        r,
                        o,
                        s = t.labels,
                        a = k;
                    for (i in s) (r = s[i] - e) < 0 == !!n && r && a > (r = Math.abs(r)) && ((o = i), (a = r));
                    return o;
                },
                ce = function (t, e, n) {
                    var i,
                        r,
                        o = t.vars,
                        s = o[e];
                    if (s) return (i = o[e + "Params"]), (r = o.callbackScope || t), n && it.length && mt(), i ? s.apply(r, i) : s.call(r);
                },
                de = function (t) {
                    return Et(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ce(t, "onInterrupt"), t;
                },
                pe = function (t) {
                    var e = (t = (!t.name && t.default) || t).name,
                        n = L(t),
                        i =
                            e && !n && t.init
                                ? function () {
                                      this._props = [];
                                  }
                                : t,
                        r = { init: et, render: en, add: Be, kill: rn, modifier: nn, rawVars: 0 },
                        o = { targetTest: 0, get: 0, getSetter: Je, aliases: {}, register: 0 };
                    if ((_e(), t !== i)) {
                        if (ot[e]) return;
                        bt(i, bt(Ct(t, r), o)), _t(i.prototype, _t(r, Ct(t, o))), (ot[(i.prop = e)] = i), t.targetTest && (lt.push(i), (nt[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                    }
                    tt(e, i), t.register && t.register(dn, i, an);
                },
                fe = 255,
                he = {
                    aqua: [0, fe, fe],
                    lime: [0, fe, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, fe],
                    navy: [0, 0, 128],
                    white: [fe, fe, fe],
                    olive: [128, 128, 0],
                    yellow: [fe, fe, 0],
                    orange: [fe, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [fe, 0, 0],
                    pink: [fe, 192, 203],
                    cyan: [0, fe, fe],
                    transparent: [fe, fe, fe, 0],
                },
                ge = function (t, e, n) {
                    return ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * fe + 0.5) | 0;
                },
                ve = function (t, e, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f = t ? (D(t) ? [t >> 16, (t >> 8) & fe, t & fe] : 0) : he.black;
                    if (!f) {
                        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), he[t])) f = he[t];
                        else if ("#" === t.charAt(0)) {
                            if ((t.length < 6 && ((i = t.charAt(1)), (r = t.charAt(2)), (o = t.charAt(3)), (t = "#" + i + i + r + r + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                                return [(f = parseInt(t.substr(1, 6), 16)) >> 16, (f >> 8) & fe, f & fe, parseInt(t.substr(7), 16) / 255];
                            f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & fe, t & fe];
                        } else if ("hsl" === t.substr(0, 3))
                            if (((f = p = t.match(q)), e)) {
                                if (~t.indexOf("=")) return (f = t.match(F)), n && f.length < 4 && (f[3] = 1), f;
                            } else
                                (s = (+f[0] % 360) / 360),
                                    (a = +f[1] / 100),
                                    (i = 2 * (l = +f[2] / 100) - (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                                    f.length > 3 && (f[3] *= 1),
                                    (f[0] = ge(s + 1 / 3, i, r)),
                                    (f[1] = ge(s, i, r)),
                                    (f[2] = ge(s - 1 / 3, i, r));
                        else f = t.match(q) || he.transparent;
                        f = f.map(Number);
                    }
                    return (
                        e &&
                            !p &&
                            ((i = f[0] / fe),
                            (r = f[1] / fe),
                            (o = f[2] / fe),
                            (l = ((u = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2),
                            u === c ? (s = a = 0) : ((d = u - c), (a = l > 0.5 ? d / (2 - u - c) : d / (u + c)), (s = u === i ? (r - o) / d + (r < o ? 6 : 0) : u === r ? (o - i) / d + 2 : (i - r) / d + 4), (s *= 60)),
                            (f[0] = ~~(s + 0.5)),
                            (f[1] = ~~(100 * a + 0.5)),
                            (f[2] = ~~(100 * l + 0.5))),
                        n && f.length < 4 && (f[3] = 1),
                        f
                    );
                },
                me = function (t) {
                    var e = [],
                        n = [],
                        i = -1;
                    return (
                        t.split(we).forEach(function (t) {
                            var r = t.match(W) || [];
                            e.push.apply(e, r), n.push((i += r.length + 1));
                        }),
                        (e.c = n),
                        e
                    );
                },
                ye = function (t, e, n) {
                    var i,
                        r,
                        o,
                        s,
                        a = "",
                        l = (t + a).match(we),
                        u = e ? "hsla(" : "rgba(",
                        c = 0;
                    if (!l) return t;
                    if (
                        ((l = l.map(function (t) {
                            return (t = ve(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                        })),
                        n && ((o = me(t)), (i = n.c).join(a) !== o.c.join(a)))
                    )
                        for (s = (r = t.replace(we, "1").split(W)).length - 1; c < s; c++) a += r[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
                    if (!r) for (s = (r = t.split(we)).length - 1; c < s; c++) a += r[c] + l[c];
                    return a + r[s];
                },
                we = (function () {
                    var t,
                        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in he) e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi");
                })(),
                xe = /hsl[a]?\(/,
                be = function (t) {
                    var e,
                        n = t.join(" ");
                    if (((we.lastIndex = 0), we.test(n))) return (e = xe.test(n)), (t[1] = ye(t[1], e)), (t[0] = ye(t[0], e, me(t[1]))), !0;
                },
                Te = (function () {
                    var t,
                        e,
                        n,
                        i,
                        r,
                        o,
                        s = Date.now,
                        a = 500,
                        l = 33,
                        u = s(),
                        c = u,
                        g = 1e3 / 240,
                        v = g,
                        y = [],
                        w = function n(d) {
                            var p,
                                f,
                                h,
                                m,
                                w = s() - c,
                                x = !0 === d;
                            if ((w > a && (u += w - l), ((p = (h = (c += w) - u) - v) > 0 || x) && ((m = ++i.frame), (r = h - 1e3 * i.time), (i.time = h /= 1e3), (v += p + (p >= g ? 4 : g - p)), (f = 1)), x || (t = e(n)), f))
                                for (o = 0; o < y.length; o++) y[o](h, r, m, d);
                        };
                    return (i = {
                        time: 0,
                        frame: 0,
                        tick: function () {
                            w(!0);
                        },
                        deltaRatio: function (t) {
                            return r / (1e3 / (t || 60));
                        },
                        wake: function () {
                            h &&
                                (!p &&
                                    I() &&
                                    ((d = p = window), (f = d.document || {}), (G.gsap = dn), (d.gsapVersions || (d.gsapVersions = [])).push(dn.version), J(Q || d.GreenSockGlobals || (!d.gsap && d) || {}), (n = d.requestAnimationFrame)),
                                t && i.sleep(),
                                (e =
                                    n ||
                                    function (t) {
                                        return setTimeout(t, (v - 1e3 * i.time + 1) | 0);
                                    }),
                                (m = 1),
                                w(2));
                        },
                        sleep: function () {
                            (n ? d.cancelAnimationFrame : clearTimeout)(t), (m = 0), (e = et);
                        },
                        lagSmoothing: function (t, e) {
                            (a = t || 1e8), (l = Math.min(e, a, 0));
                        },
                        fps: function (t) {
                            (g = 1e3 / (t || 240)), (v = 1e3 * i.time + g);
                        },
                        add: function (t) {
                            y.indexOf(t) < 0 && y.push(t), _e();
                        },
                        remove: function (t) {
                            var e;
                            ~(e = y.indexOf(t)) && y.splice(e, 1) && o >= e && o--;
                        },
                        _listeners: y,
                    });
                })(),
                _e = function () {
                    return !m && Te.wake();
                },
                ke = {},
                Ce = /^[\d.\-M][\d.\-,\s]/,
                Se = /["']/g,
                Ae = function (t) {
                    for (var e, n, i, r = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++)
                        (n = o[a]), (e = a !== l - 1 ? n.lastIndexOf(",") : n.length), (i = n.substr(0, e)), (r[s] = isNaN(i) ? i.replace(Se, "").trim() : +i), (s = n.substr(e + 1).trim());
                    return r;
                },
                Ee = function (t) {
                    return function (e) {
                        return 1 - t(1 - e);
                    };
                },
                Oe = function t(e, n) {
                    for (var i, r = e._first; r; )
                        r instanceof He ? t(r, n) : !r.vars.yoyoEase || (r._yoyo && r._repeat) || r._yoyo === n || (r.timeline ? t(r.timeline, n) : ((i = r._ease), (r._ease = r._yEase), (r._yEase = i), (r._yoyo = n))), (r = r._next);
                },
                Me = function (t, e) {
                    return (
                        (t &&
                            (L(t)
                                ? t
                                : ke[t] ||
                                  (function (t) {
                                      var e,
                                          n,
                                          i,
                                          r,
                                          o = (t + "").split("("),
                                          s = ke[o[0]];
                                      return s && o.length > 1 && s.config
                                          ? s.config.apply(
                                                null,
                                                ~t.indexOf("{") ? [Ae(o[1])] : ((e = t), (n = e.indexOf("(") + 1), (i = e.indexOf(")")), (r = e.indexOf("(", n)), e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(wt)
                                            )
                                          : ke._CE && Ce.test(t)
                                          ? ke._CE("", t)
                                          : s;
                                  })(t))) ||
                        e
                    );
                },
                Pe = function (t, e, n, i) {
                    void 0 === n &&
                        (n = function (t) {
                            return 1 - e(1 - t);
                        }),
                        void 0 === i &&
                            (i = function (t) {
                                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                            });
                    var r,
                        o = { easeIn: e, easeOut: n, easeInOut: i };
                    return (
                        ft(t, function (t) {
                            for (var e in ((ke[t] = G[t] = o), (ke[(r = t.toLowerCase())] = n), o)) ke[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = o[e];
                        }),
                        o
                    );
                },
                $e = function (t) {
                    return function (e) {
                        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
                    };
                },
                Le = function t(e, n, i) {
                    var r = n >= 1 ? n : 1,
                        o = (i || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
                        s = (o / S) * (Math.asin(1 / r) || 0),
                        a = function (t) {
                            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * P((t - s) * o) + 1;
                        },
                        l =
                            "out" === e
                                ? a
                                : "in" === e
                                ? function (t) {
                                      return 1 - a(1 - t);
                                  }
                                : $e(a);
                    return (
                        (o = S / o),
                        (l.config = function (n, i) {
                            return t(e, n, i);
                        }),
                        l
                    );
                },
                De = function t(e, n) {
                    void 0 === n && (n = 1.70158);
                    var i = function (t) {
                            return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
                        },
                        r =
                            "out" === e
                                ? i
                                : "in" === e
                                ? function (t) {
                                      return 1 - i(1 - t);
                                  }
                                : $e(i);
                    return (
                        (r.config = function (n) {
                            return t(e, n);
                        }),
                        r
                    );
                };
            ft("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
                var n = e < 5 ? e + 1 : e;
                Pe(
                    t + ",Power" + (n - 1),
                    e
                        ? function (t) {
                              return Math.pow(t, n);
                          }
                        : function (t) {
                              return t;
                          },
                    function (t) {
                        return 1 - Math.pow(1 - t, n);
                    },
                    function (t) {
                        return t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
                    }
                );
            }),
                (ke.Linear.easeNone = ke.none = ke.Linear.easeIn),
                Pe("Elastic", Le("in"), Le("out"), Le()),
                (y = 7.5625),
                (x = 1 / (w = 2.75)),
                Pe(
                    "Bounce",
                    function (t) {
                        return 1 - b(1 - t);
                    },
                    (b = function (t) {
                        return t < x ? y * t * t : t < 0.7272727272727273 ? y * Math.pow(t - 1.5 / w, 2) + 0.75 : t < 0.9090909090909092 ? y * (t -= 2.25 / w) * t + 0.9375 : y * Math.pow(t - 2.625 / w, 2) + 0.984375;
                    })
                ),
                Pe("Expo", function (t) {
                    return t ? Math.pow(2, 10 * (t - 1)) : 0;
                }),
                Pe("Circ", function (t) {
                    return -(O(1 - t * t) - 1);
                }),
                Pe("Sine", function (t) {
                    return 1 === t ? 1 : 1 - M(t * A);
                }),
                Pe("Back", De("in"), De("out"), De()),
                (ke.SteppedEase = ke.steps = G.SteppedEase = {
                    config: function (t, e) {
                        void 0 === t && (t = 1);
                        var n = 1 / t,
                            i = t + (e ? 0 : 1),
                            r = e ? 1 : 0;
                        return function (t) {
                            return (((i * Gt(0, 0.99999999, t)) | 0) + r) * n;
                        };
                    },
                }),
                (_.ease = ke["quad.out"]),
                ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
                    return (ut += t + "," + t + "Params,");
                });
            var Ne = function (t, e) {
                    (this.id = E++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : pt), (this.set = e ? e.getSetter : Je);
                },
                je = (function () {
                    function t(t) {
                        (this.vars = t),
                            (this._delay = +t.delay || 0),
                            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                            (this._ts = 1),
                            Ft(this, +t.duration, 1, 1),
                            (this.data = t.data),
                            m || Te.wake();
                    }
                    var e = t.prototype;
                    return (
                        (e.delay = function (t) {
                            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                        }),
                        (e.duration = function (t) {
                            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                        }),
                        (e.totalDuration = function (t) {
                            return arguments.length ? ((this._dirty = 0), Ft(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                        }),
                        (e.totalTime = function (t, e) {
                            if ((_e(), !arguments.length)) return this._tTime;
                            var n = this._dp;
                            if (n && n.smoothChildTiming && this._ts) {
                                for (jt(this, t), !n._dp || n.parent || Ht(n, this); n && n.parent; )
                                    n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                                !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && It(this._dp, this, this._start - this._delay);
                            }
                            return (
                                (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === C) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), yt(this, t, e)), this
                            );
                        }),
                        (e.time = function (t, e) {
                            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + $t(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
                        }),
                        (e.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                        }),
                        (e.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + $t(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                        }),
                        (e.iteration = function (t, e) {
                            var n = this.duration() + this._rDelay;
                            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Lt(this._tTime, n) + 1 : 1;
                        }),
                        (e.timeScale = function (t) {
                            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                            if (this._rts === t) return this;
                            var e = this.parent && this._ts ? Dt(this.parent._time, this) : this._tTime;
                            return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), Mt(this.totalTime(Gt(-this._delay, this._tDur, e), !0)), Nt(this), this;
                        }),
                        (e.paused = function (t) {
                            return arguments.length
                                ? (this._ps !== t &&
                                      ((this._ps = t),
                                      t
                                          ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                          : (_e(),
                                            (this._ts = this._rts),
                                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== C && (this._tTime -= C)))),
                                  this)
                                : this._ps;
                        }),
                        (e.startTime = function (t) {
                            if (arguments.length) {
                                this._start = t;
                                var e = this.parent || this._dp;
                                return e && (e._sort || !this.parent) && It(e, this, t - this._delay), this;
                            }
                            return this._start;
                        }),
                        (e.endTime = function (t) {
                            return this._start + (H(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                        }),
                        (e.rawTime = function (t) {
                            var e = this.parent || this._dp;
                            return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Dt(e.rawTime(t), this) : this._tTime) : this._tTime;
                        }),
                        (e.globalTime = function (t) {
                            for (var e = this, n = arguments.length ? t : e.rawTime(); e; ) (n = e._start + n / (e._ts || 1)), (e = e._dp);
                            return n;
                        }),
                        (e.repeat = function (t) {
                            return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), Wt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                        }),
                        (e.repeatDelay = function (t) {
                            if (arguments.length) {
                                var e = this._time;
                                return (this._rDelay = t), Wt(this), e ? this.time(e) : this;
                            }
                            return this._rDelay;
                        }),
                        (e.yoyo = function (t) {
                            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                        }),
                        (e.seek = function (t, e) {
                            return this.totalTime(Ut(this, t), H(e));
                        }),
                        (e.restart = function (t, e) {
                            return this.play().totalTime(t ? -this._delay : 0, H(e));
                        }),
                        (e.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                        }),
                        (e.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                        }),
                        (e.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0);
                        }),
                        (e.resume = function () {
                            return this.paused(!1);
                        }),
                        (e.reversed = function (t) {
                            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
                        }),
                        (e.invalidate = function () {
                            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                        }),
                        (e.isActive = function () {
                            var t,
                                e = this.parent || this._dp,
                                n = this._start;
                            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - C));
                        }),
                        (e.eventCallback = function (t, e, n) {
                            var i = this.vars;
                            return arguments.length > 1 ? (e ? ((i[t] = e), n && (i[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
                        }),
                        (e.then = function (t) {
                            var e = this;
                            return new Promise(function (n) {
                                var i = L(t) ? t : xt,
                                    r = function () {
                                        var t = e.then;
                                        (e.then = null), L(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), (e.then = t);
                                    };
                                (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? r() : (e._prom = r);
                            });
                        }),
                        (e.kill = function () {
                            de(this);
                        }),
                        t
                    );
                })();
            bt(je.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
            var He = (function (t) {
                function e(e, n) {
                    var i;
                    return (
                        void 0 === e && (e = {}),
                        ((i = t.call(this, e) || this).labels = {}),
                        (i.smoothChildTiming = !!e.smoothChildTiming),
                        (i.autoRemoveChildren = !!e.autoRemoveChildren),
                        (i._sort = H(e.sortChildren)),
                        c && It(e.parent || c, a(i), n),
                        e.reversed && i.reverse(),
                        e.paused && i.paused(!0),
                        e.scrollTrigger && Rt(a(i), e.scrollTrigger),
                        i
                    );
                }
                l(e, t);
                var n = e.prototype;
                return (
                    (n.to = function (t, e, n) {
                        return Yt(0, arguments, this), this;
                    }),
                    (n.from = function (t, e, n) {
                        return Yt(1, arguments, this), this;
                    }),
                    (n.fromTo = function (t, e, n, i) {
                        return Yt(2, arguments, this), this;
                    }),
                    (n.set = function (t, e, n) {
                        return (e.duration = 0), (e.parent = this), St(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Ue(t, e, Ut(this, n), 1), this;
                    }),
                    (n.call = function (t, e, n) {
                        return It(this, Ue.delayedCall(0, t, e), n);
                    }),
                    (n.staggerTo = function (t, e, n, i, r, o, s) {
                        return (n.duration = e), (n.stagger = n.stagger || i), (n.onComplete = o), (n.onCompleteParams = s), (n.parent = this), new Ue(t, n, Ut(this, r)), this;
                    }),
                    (n.staggerFrom = function (t, e, n, i, r, o, s) {
                        return (n.runBackwards = 1), (St(n).immediateRender = H(n.immediateRender)), this.staggerTo(t, e, n, i, r, o, s);
                    }),
                    (n.staggerFromTo = function (t, e, n, i, r, o, s, a) {
                        return (i.startAt = n), (St(i).immediateRender = H(i.immediateRender)), this.staggerTo(t, e, i, r, o, s, a);
                    }),
                    (n.render = function (t, e, n) {
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
                            v = this._time,
                            m = this._dirty ? this.totalDuration() : this._tDur,
                            y = this._dur,
                            w = t <= 0 ? 0 : gt(t),
                            x = this._zTime < 0 != t < 0 && (this._initted || !y);
                        if ((this !== c && w > m && t >= 0 && (w = m), w !== this._tTime || n || x)) {
                            if ((v !== this._time && y && ((w += this._time - v), (t += this._time - v)), (i = w), (p = this._start), (l = !(d = this._ts)), x && (y || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                                if (((h = this._yoyo), (a = y + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, n);
                                if (
                                    ((i = gt(w % a)),
                                    w === m ? ((s = this._repeat), (i = y)) : ((s = ~~(w / a)) && s === w / a && ((i = y), s--), i > y && (i = y)),
                                    (f = Lt(this._tTime, a)),
                                    !v && this._tTime && f !== s && (f = s),
                                    h && 1 & s && ((i = y - i), (g = 1)),
                                    s !== f && !this._lock)
                                ) {
                                    var b = h && 1 & f,
                                        T = b === (h && 1 & s);
                                    if (
                                        (s < f && (b = !b),
                                        (v = b ? 0 : y),
                                        (this._lock = 1),
                                        (this.render(v || (g ? 0 : gt(s * a)), e, !y)._lock = 0),
                                        (this._tTime = w),
                                        !e && this.parent && ce(this, "onRepeat"),
                                        this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1),
                                        (v && v !== this._time) || l !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                                    )
                                        return this;
                                    if (((y = this._dur), (m = this._tDur), T && ((this._lock = 2), (v = b ? y : -1e-4), this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), (this._lock = 0), !this._ts && !l))
                                        return this;
                                    Oe(this, g);
                                }
                            }
                            if (
                                (this._hasPause &&
                                    !this._forcing &&
                                    this._lock < 2 &&
                                    ((u = (function (t, e, n) {
                                        var i;
                                        if (n > e)
                                            for (i = t._first; i && i._start <= n; ) {
                                                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                                                i = i._next;
                                            }
                                        else
                                            for (i = t._last; i && i._start >= n; ) {
                                                if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                                i = i._prev;
                                            }
                                    })(this, gt(v), gt(i))),
                                    u && (w -= i - (i = u._start))),
                                (this._tTime = w),
                                (this._time = i),
                                (this._act = !d),
                                this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (v = 0)),
                                !v && i && !e && (ce(this, "onStart"), this._tTime !== w))
                            )
                                return this;
                            if (i >= v && t >= 0)
                                for (r = this._first; r; ) {
                                    if (((o = r._next), (r._act || i >= r._start) && r._ts && u !== r)) {
                                        if (r.parent !== this) return this.render(t, e, n);
                                        if ((r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
                                            (u = 0), o && (w += this._zTime = -1e-8);
                                            break;
                                        }
                                    }
                                    r = o;
                                }
                            else {
                                r = this._last;
                                for (var _ = t < 0 ? t : i; r; ) {
                                    if (((o = r._prev), (r._act || _ <= r._end) && r._ts && u !== r)) {
                                        if (r.parent !== this) return this.render(t, e, n);
                                        if ((r.render(r._ts > 0 ? (_ - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (_ - r._start) * r._ts, e, n), i !== this._time || (!this._ts && !l))) {
                                            (u = 0), o && (w += this._zTime = _ ? -1e-8 : C);
                                            break;
                                        }
                                    }
                                    r = o;
                                }
                            }
                            if (u && !e && (this.pause(), (u.render(i >= v ? 0 : -1e-8)._zTime = i >= v ? 1 : -1), this._ts)) return (this._start = p), Nt(this), this.render(t, e, n);
                            this._onUpdate && !e && ce(this, "onUpdate", !0),
                                ((w === m && m >= this.totalDuration()) || (!w && v)) &&
                                    ((p !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                                        this._lock ||
                                        ((t || !y) && ((w === m && this._ts > 0) || (!w && this._ts < 0)) && Et(this, 1),
                                        e || (t < 0 && !v) || (!w && !v && m) || (ce(this, w === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < m && this.timeScale() > 0) && this._prom())));
                        }
                        return this;
                    }),
                    (n.add = function (t, e) {
                        var n = this;
                        if ((D(e) || (e = Ut(this, e, t)), !(t instanceof je))) {
                            if (z(t))
                                return (
                                    t.forEach(function (t) {
                                        return n.add(t, e);
                                    }),
                                    this
                                );
                            if ($(t)) return this.addLabel(t, e);
                            if (!L(t)) return this;
                            t = Ue.delayedCall(0, t);
                        }
                        return this !== t ? It(this, t, e) : this;
                    }),
                    (n.getChildren = function (t, e, n, i) {
                        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === i && (i = -k);
                        for (var r = [], o = this._first; o; ) o._start >= i && (o instanceof Ue ? e && r.push(o) : (n && r.push(o), t && r.push.apply(r, o.getChildren(!0, e, n)))), (o = o._next);
                        return r;
                    }),
                    (n.getById = function (t) {
                        for (var e = this.getChildren(1, 1, 1), n = e.length; n--; ) if (e[n].vars.id === t) return e[n];
                    }),
                    (n.remove = function (t) {
                        return $(t) ? this.removeLabel(t) : L(t) ? this.killTweensOf(t) : (At(this, t), t === this._recent && (this._recent = this._last), Ot(this));
                    }),
                    (n.totalTime = function (e, n) {
                        return arguments.length
                            ? ((this._forcing = 1),
                              !this._dp && this._ts && (this._start = gt(Te.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                              t.prototype.totalTime.call(this, e, n),
                              (this._forcing = 0),
                              this)
                            : this._tTime;
                    }),
                    (n.addLabel = function (t, e) {
                        return (this.labels[t] = Ut(this, e)), this;
                    }),
                    (n.removeLabel = function (t) {
                        return delete this.labels[t], this;
                    }),
                    (n.addPause = function (t, e, n) {
                        var i = Ue.delayedCall(0, e || et, n);
                        return (i.data = "isPause"), (this._hasPause = 1), It(this, i, Ut(this, t));
                    }),
                    (n.removePause = function (t) {
                        var e = this._first;
                        for (t = Ut(this, t); e; ) e._start === t && "isPause" === e.data && Et(e), (e = e._next);
                    }),
                    (n.killTweensOf = function (t, e, n) {
                        for (var i = this.getTweensOf(t, n), r = i.length; r--; ) Ie !== i[r] && i[r].kill(t, e);
                        return this;
                    }),
                    (n.getTweensOf = function (t, e) {
                        for (var n, i = [], r = te(t), o = this._first, s = D(e); o; )
                            o instanceof Ue
                                ? vt(o._targets, r) && (s ? (!Ie || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && i.push(o)
                                : (n = o.getTweensOf(r, e)).length && i.push.apply(i, n),
                                (o = o._next);
                        return i;
                    }),
                    (n.tweenTo = function (t, e) {
                        e = e || {};
                        var n,
                            i = this,
                            r = Ut(i, t),
                            o = e,
                            s = o.startAt,
                            a = o.onStart,
                            l = o.onStartParams,
                            u = o.immediateRender,
                            c = Ue.to(
                                i,
                                bt(
                                    {
                                        ease: e.ease || "none",
                                        lazy: !1,
                                        immediateRender: !1,
                                        time: r,
                                        overwrite: "auto",
                                        duration: e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || C,
                                        onStart: function () {
                                            if ((i.pause(), !n)) {
                                                var t = e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale());
                                                c._dur !== t && Ft(c, t, 0, 1).render(c._time, !0, !0), (n = 1);
                                            }
                                            a && a.apply(c, l || []);
                                        },
                                    },
                                    e
                                )
                            );
                        return u ? c.render(0) : c;
                    }),
                    (n.tweenFromTo = function (t, e, n) {
                        return this.tweenTo(e, bt({ startAt: { time: Ut(this, t) } }, n));
                    }),
                    (n.recent = function () {
                        return this._recent;
                    }),
                    (n.nextLabel = function (t) {
                        return void 0 === t && (t = this._time), ue(this, Ut(this, t));
                    }),
                    (n.previousLabel = function (t) {
                        return void 0 === t && (t = this._time), ue(this, Ut(this, t), 1);
                    }),
                    (n.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + C);
                    }),
                    (n.shiftChildren = function (t, e, n) {
                        void 0 === n && (n = 0);
                        for (var i, r = this._first, o = this.labels; r; ) r._start >= n && ((r._start += t), (r._end += t)), (r = r._next);
                        if (e) for (i in o) o[i] >= n && (o[i] += t);
                        return Ot(this);
                    }),
                    (n.invalidate = function () {
                        var e = this._first;
                        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
                        return t.prototype.invalidate.call(this);
                    }),
                    (n.clear = function (t) {
                        void 0 === t && (t = !0);
                        for (var e, n = this._first; n; ) (e = n._next), this.remove(n), (n = e);
                        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ot(this);
                    }),
                    (n.totalDuration = function (t) {
                        var e,
                            n,
                            i,
                            r = 0,
                            o = this,
                            s = o._last,
                            a = k;
                        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                        if (o._dirty) {
                            for (i = o.parent; s; )
                                (e = s._prev),
                                    s._dirty && s.totalDuration(),
                                    (n = s._start) > a && o._sort && s._ts && !o._lock ? ((o._lock = 1), (It(o, s, n - s._delay, 1)._lock = 0)) : (a = n),
                                    n < 0 && s._ts && ((r -= n), ((!i && !o._dp) || (i && i.smoothChildTiming)) && ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)), o.shiftChildren(-n, !1, -Infinity), (a = 0)),
                                    s._end > r && s._ts && (r = s._end),
                                    (s = e);
                            Ft(o, o === c && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
                        }
                        return o._tDur;
                    }),
                    (e.updateRoot = function (t) {
                        if ((c._ts && (yt(c, Dt(t, c)), (g = Te.frame)), Te.frame >= at)) {
                            at += T.autoSleep || 120;
                            var e = c._first;
                            if ((!e || !e._ts) && T.autoSleep && Te._listeners.length < 2) {
                                for (; e && !e._ts; ) e = e._next;
                                e || Te.sleep();
                            }
                        }
                    }),
                    e
                );
            })(je);
            bt(He.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
            var Ie,
                Re = function (t, e, n, i, r, o, s) {
                    var a,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f,
                        h,
                        g = new an(this._pt, t, e, 0, 1, tn, null, r),
                        v = 0,
                        m = 0;
                    for (g.b = n, g.e = i, n += "", (f = ~(i += "").indexOf("random(")) && (i = ae(i)), o && (o((h = [n, i]), t, e), (n = h[0]), (i = h[1])), l = n.match(X) || []; (a = X.exec(i)); )
                        (c = a[0]),
                            (d = i.substring(v, a.index)),
                            u ? (u = (u + 1) % 5) : "rgba(" === d.substr(-5) && (u = 1),
                            c !== l[m++] &&
                                ((p = parseFloat(l[m - 1]) || 0),
                                (g._pt = { _next: g._pt, p: d || 1 === m ? d : ",", s: p, c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - p, m: u && u < 4 ? Math.round : 0 }),
                                (v = X.lastIndex));
                    return (g.c = v < i.length ? i.substring(v, i.length) : ""), (g.fp = s), (U.test(i) || f) && (g.e = 0), (this._pt = g), g;
                },
                Be = function (t, e, n, i, r, o, s, a, l) {
                    L(i) && (i = i(r || 0, t, o));
                    var u,
                        c = t[e],
                        d = "get" !== n ? n : L(c) ? (l ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : c,
                        p = L(c) ? (l ? Ge : Ve) : Ye;
                    if (($(i) && (~i.indexOf("random(") && (i = ae(i)), "=" === i.charAt(1) && ((u = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Qt(d) || 0)) || 0 === u) && (i = u)), d !== i))
                        return isNaN(d * i) || "" === i
                            ? (!c && !(e in t) && K(e, i), Re.call(this, t, e, d, i, p, a || T.stringFilter, l))
                            : ((u = new an(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof c ? Ze : Ke, 0, p)), l && (u.fp = l), s && u.modifier(s, this, t), (this._pt = u));
                },
                ze = function (t, e, n, i, r, o) {
                    var s, a, l, u;
                    if (
                        ot[t] &&
                        !1 !==
                            (s = new ot[t]()).init(
                                r,
                                s.rawVars
                                    ? e[t]
                                    : (function (t, e, n, i, r) {
                                          if ((L(t) && (t = Fe(t, r, e, n, i)), !j(t) || (t.style && t.nodeType) || z(t) || B(t))) return $(t) ? Fe(t, r, e, n, i) : t;
                                          var o,
                                              s = {};
                                          for (o in t) s[o] = Fe(t[o], r, e, n, i);
                                          return s;
                                      })(e[t], i, r, o, n),
                                n,
                                i,
                                o
                            ) &&
                        ((n._pt = a = new an(n._pt, r, t, 0, 1, s.render, s, 0, s.priority)), n !== v)
                    )
                        for (l = n._ptLookup[n._targets.indexOf(r)], u = s._props.length; u--; ) l[s._props[u]] = a;
                    return s;
                },
                qe = function t(e, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        d,
                        p,
                        f,
                        h,
                        g,
                        v,
                        m,
                        y = e.vars,
                        w = y.ease,
                        x = y.startAt,
                        b = y.immediateRender,
                        T = y.lazy,
                        k = y.onUpdate,
                        S = y.onUpdateParams,
                        A = y.callbackScope,
                        E = y.runBackwards,
                        O = y.yoyoEase,
                        M = y.keyframes,
                        P = y.autoRevert,
                        $ = e._dur,
                        L = e._startAt,
                        D = e._targets,
                        N = e.parent,
                        j = N && "nested" === N.data ? N.parent._targets : D,
                        I = "auto" === e._overwrite && !u,
                        R = e.timeline;
                    if (
                        (R && (!M || !w) && (w = "none"),
                        (e._ease = Me(w, _.ease)),
                        (e._yEase = O ? Ee(Me(!0 === O ? w : O, _.ease)) : 0),
                        O && e._yoyo && !e._repeat && ((O = e._yEase), (e._yEase = e._ease), (e._ease = O)),
                        (e._from = !R && !!y.runBackwards),
                        !R)
                    ) {
                        if (((v = (p = D[0] ? dt(D[0]).harness : 0) && y[p.prop]), (i = Ct(y, nt)), L && L.render(-1, !0).kill(), x))
                            if (
                                (Et((e._startAt = Ue.set(D, bt({ data: "isStart", overwrite: !1, parent: N, immediateRender: !0, lazy: H(T), startAt: null, delay: 0, onUpdate: k, onUpdateParams: S, callbackScope: A, stagger: 0 }, x)))),
                                n < 0 && !b && !P && e._startAt.render(-1, !0),
                                b)
                            ) {
                                if ((n > 0 && !P && (e._startAt = 0), $ && n <= 0)) return void (n && (e._zTime = n));
                            } else !1 === P && (e._startAt = 0);
                        else if (E && $)
                            if (L) !P && (e._startAt = 0);
                            else if (
                                (n && (b = !1),
                                (o = bt({ overwrite: !1, data: "isFromStart", lazy: b && H(T), immediateRender: b, stagger: 0, parent: N }, i)),
                                v && (o[p.prop] = v),
                                Et((e._startAt = Ue.set(D, o))),
                                n < 0 && e._startAt.render(-1, !0),
                                b)
                            ) {
                                if (!n) return;
                            } else t(e._startAt, C);
                        for (e._pt = 0, T = ($ && H(T)) || (T && !$), r = 0; r < D.length; r++) {
                            if (
                                ((d = (a = D[r])._gsap || ct(D)[r]._gsap),
                                (e._ptLookup[r] = h = {}),
                                rt[d.id] && it.length && mt(),
                                (g = j === D ? r : j.indexOf(a)),
                                p &&
                                    !1 !== (f = new p()).init(a, v || i, e, g, j) &&
                                    ((e._pt = s = new an(e._pt, a, f.name, 0, 1, f.render, f, 0, f.priority)),
                                    f._props.forEach(function (t) {
                                        h[t] = s;
                                    }),
                                    f.priority && (l = 1)),
                                !p || v)
                            )
                                for (o in i) ot[o] && (f = ze(o, i, e, g, a, j)) ? f.priority && (l = 1) : (h[o] = s = Be.call(e, a, o, "get", i[o], g, j, 0, y.stringFilter));
                            e._op && e._op[r] && e.kill(a, e._op[r]), I && e._pt && ((Ie = e), c.killTweensOf(a, h, e.globalTime(n)), (m = !e.parent), (Ie = 0)), e._pt && T && (rt[d.id] = 1);
                        }
                        l && sn(e), e._onInit && e._onInit(e);
                    }
                    (e._onUpdate = k), (e._initted = (!e._op || e._pt) && !m);
                },
                Fe = function (t, e, n, i, r) {
                    return L(t) ? t.call(e, n, i, r) : $(t) && ~t.indexOf("random(") ? ae(t) : t;
                },
                We = ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
                Xe = (We + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
                Ue = (function (t) {
                    function e(e, n, i, r) {
                        var o;
                        "number" == typeof n && ((i.duration = n), (n = i), (i = null));
                        var s,
                            l,
                            d,
                            p,
                            f,
                            h,
                            g,
                            v,
                            m = (o = t.call(this, r ? n : St(n)) || this).vars,
                            y = m.duration,
                            w = m.delay,
                            x = m.immediateRender,
                            b = m.stagger,
                            _ = m.overwrite,
                            k = m.keyframes,
                            C = m.defaults,
                            S = m.scrollTrigger,
                            A = m.yoyoEase,
                            E = n.parent || c,
                            O = (z(e) || B(e) ? D(e[0]) : "length" in n) ? [e] : te(e);
                        if (((o._targets = O.length ? ct(O) : Z("GSAP target " + e + " not found. https://greensock.com", !T.nullTargetWarn) || []), (o._ptLookup = []), (o._overwrite = _), k || b || R(y) || R(w))) {
                            if (((n = o.vars), (s = o.timeline = new He({ data: "nested", defaults: C || {} })).kill(), (s.parent = s._dp = a(o)), (s._start = 0), k))
                                St(bt(s.vars.defaults, { ease: "none" })),
                                    b
                                        ? O.forEach(function (t, e) {
                                              return k.forEach(function (n, i) {
                                                  return s.to(t, n, i ? ">" : e * b);
                                              });
                                          })
                                        : k.forEach(function (t) {
                                              return s.to(O, t, ">");
                                          });
                            else {
                                if (((p = O.length), (g = b ? ne(b) : et), j(b))) for (f in b) ~We.indexOf(f) && (v || (v = {}), (v[f] = b[f]));
                                for (l = 0; l < p; l++) {
                                    for (f in ((d = {}), n)) Xe.indexOf(f) < 0 && (d[f] = n[f]);
                                    (d.stagger = 0),
                                        A && (d.yoyoEase = A),
                                        v && _t(d, v),
                                        (h = O[l]),
                                        (d.duration = +Fe(y, a(o), l, h, O)),
                                        (d.delay = (+Fe(w, a(o), l, h, O) || 0) - o._delay),
                                        !b && 1 === p && d.delay && ((o._delay = w = d.delay), (o._start += w), (d.delay = 0)),
                                        s.to(h, d, g(l, h, O));
                                }
                                s.duration() ? (y = w = 0) : (o.timeline = 0);
                            }
                            y || o.duration((y = s.duration()));
                        } else o.timeline = 0;
                        return (
                            !0 !== _ || u || ((Ie = a(o)), c.killTweensOf(O), (Ie = 0)),
                            It(E, a(o), i),
                            n.reversed && o.reverse(),
                            n.paused && o.paused(!0),
                            (x || (!y && !k && o._start === gt(E._time) && H(x) && Pt(a(o)) && "nested" !== E.data)) && ((o._tTime = -1e-8), o.render(Math.max(0, -w))),
                            S && Rt(a(o), S),
                            o
                        );
                    }
                    l(e, t);
                    var n = e.prototype;
                    return (
                        (n.render = function (t, e, n) {
                            var i,
                                r,
                                o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                d,
                                p = this._time,
                                f = this._tDur,
                                h = this._dur,
                                g = t > f - C && t >= 0 ? f : t < C ? 0 : t;
                            if (h) {
                                if (g !== this._tTime || !t || n || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != t < 0)) {
                                    if (((i = g), (c = this.timeline), this._repeat)) {
                                        if (((s = h + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * s + t, e, n);
                                        if (
                                            ((i = gt(g % s)),
                                            g === f ? ((o = this._repeat), (i = h)) : ((o = ~~(g / s)) && o === g / s && ((i = h), o--), i > h && (i = h)),
                                            (l = this._yoyo && 1 & o) && ((d = this._yEase), (i = h - i)),
                                            (a = Lt(this._tTime, s)),
                                            i === p && !n && this._initted)
                                        )
                                            return this;
                                        o !== a && (c && this._yEase && Oe(c, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = n = 1), (this.render(gt(s * o), !0).invalidate()._lock = 0)));
                                    }
                                    if (!this._initted) {
                                        if (Bt(this, t < 0 ? t : i, n, e)) return (this._tTime = 0), this;
                                        if (h !== this._dur) return this.render(t, e, n);
                                    }
                                    if (
                                        ((this._tTime = g),
                                        (this._time = i),
                                        !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                        (this.ratio = u = (d || this._ease)(i / h)),
                                        this._from && (this.ratio = u = 1 - u),
                                        i && !p && !e && (ce(this, "onStart"), this._tTime !== g))
                                    )
                                        return this;
                                    for (r = this._pt; r; ) r.r(u, r.d), (r = r._next);
                                    (c && c.render(t < 0 ? t : !i && l ? -1e-8 : c._dur * u, e, n)) || (this._startAt && (this._zTime = t)),
                                        this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), ce(this, "onUpdate")),
                                        this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && ce(this, "onRepeat"),
                                        (g !== this._tDur && g) ||
                                            this._tTime !== g ||
                                            (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                            (t || !h) && ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) && Et(this, 1),
                                            e || (t < 0 && !p) || (!g && !p) || (ce(this, g === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < f && this.timeScale() > 0) && this._prom()));
                                }
                            } else
                                !(function (t, e, n, i) {
                                    var r,
                                        o,
                                        s,
                                        a = t.ratio,
                                        l = e < 0 || (!e && ((!t._start && zt(t) && (t._initted || !qt(t))) || ((t._ts < 0 || t._dp._ts < 0) && !qt(t)))) ? 0 : 1,
                                        u = t._rDelay,
                                        c = 0;
                                    if (
                                        (u && t._repeat && ((c = Gt(0, t._tDur, e)), (o = Lt(c, u)), (s = Lt(t._tTime, u)), t._yoyo && 1 & o && (l = 1 - l), o !== s && ((a = 1 - l), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                        l !== a || i || t._zTime === C || (!e && t._zTime))
                                    ) {
                                        if (!t._initted && Bt(t, e, i, n)) return;
                                        for (s = t._zTime, t._zTime = e || (n ? C : 0), n || (n = e && !s), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, r = t._pt; r; ) r.r(l, r.d), (r = r._next);
                                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                                            t._onUpdate && !n && ce(t, "onUpdate"),
                                            c && t._repeat && !n && t.parent && ce(t, "onRepeat"),
                                            (e >= t._tDur || e < 0) && t.ratio === l && (l && Et(t, 1), n || (ce(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                                    } else t._zTime || (t._zTime = e);
                                })(this, t, e, n);
                            return this;
                        }),
                        (n.targets = function () {
                            return this._targets;
                        }),
                        (n.invalidate = function () {
                            return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
                        }),
                        (n.kill = function (t, e) {
                            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? de(this) : this;
                            if (this.timeline) {
                                var n = this.timeline.totalDuration();
                                return this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)._first || de(this), this.parent && n !== this.timeline.totalDuration() && Ft(this, (this._dur * this.timeline._tDur) / n, 0, 1), this;
                            }
                            var i,
                                r,
                                o,
                                s,
                                a,
                                l,
                                u,
                                c = this._targets,
                                d = t ? te(t) : c,
                                p = this._ptLookup,
                                f = this._pt;
                            if (
                                (!e || "all" === e) &&
                                (function (t, e) {
                                    for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; );
                                    return n < 0;
                                })(c, d)
                            )
                                return "all" === e && (this._pt = 0), de(this);
                            for (
                                i = this._op = this._op || [],
                                    "all" !== e &&
                                        ($(e) &&
                                            ((a = {}),
                                            ft(e, function (t) {
                                                return (a[t] = 1);
                                            }),
                                            (e = a)),
                                        (e = (function (t, e) {
                                            var n,
                                                i,
                                                r,
                                                o,
                                                s = t[0] ? dt(t[0]).harness : 0,
                                                a = s && s.aliases;
                                            if (!a) return e;
                                            for (i in ((n = _t({}, e)), a)) if ((i in n)) for (r = (o = a[i].split(",")).length; r--; ) n[o[r]] = n[i];
                                            return n;
                                        })(c, e))),
                                    u = c.length;
                                u--;

                            )
                                if (~d.indexOf(c[u]))
                                    for (a in ((r = p[u]), "all" === e ? ((i[u] = e), (s = r), (o = {})) : ((o = i[u] = i[u] || {}), (s = e)), s))
                                        (l = r && r[a]) && (("kill" in l.d && !0 !== l.d.kill(a)) || At(this, l, "_pt"), delete r[a]), "all" !== o && (o[a] = 1);
                            return this._initted && !this._pt && f && de(this), this;
                        }),
                        (e.to = function (t, n) {
                            return new e(t, n, arguments[2]);
                        }),
                        (e.from = function (t, e) {
                            return Yt(1, arguments);
                        }),
                        (e.delayedCall = function (t, n, i, r) {
                            return new e(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: n, onReverseComplete: n, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: r });
                        }),
                        (e.fromTo = function (t, e, n) {
                            return Yt(2, arguments);
                        }),
                        (e.set = function (t, n) {
                            return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
                        }),
                        (e.killTweensOf = function (t, e, n) {
                            return c.killTweensOf(t, e, n);
                        }),
                        e
                    );
                })(je);
            bt(Ue.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
                ft("staggerTo,staggerFrom,staggerFromTo", function (t) {
                    Ue[t] = function () {
                        var e = new He(),
                            n = Jt.call(arguments, 0);
                        return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
                    };
                });
            var Ye = function (t, e, n) {
                    return (t[e] = n);
                },
                Ve = function (t, e, n) {
                    return t[e](n);
                },
                Ge = function (t, e, n, i) {
                    return t[e](i.fp, n);
                },
                Qe = function (t, e, n) {
                    return t.setAttribute(e, n);
                },
                Je = function (t, e) {
                    return L(t[e]) ? Ve : N(t[e]) && t.setAttribute ? Qe : Ye;
                },
                Ke = function (t, e) {
                    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
                },
                Ze = function (t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
                },
                tn = function (t, e) {
                    var n = e._pt,
                        i = "";
                    if (!t && e.b) i = e.b;
                    else if (1 === t && e.e) i = e.e;
                    else {
                        for (; n; ) (i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i), (n = n._next);
                        i += e.c;
                    }
                    e.set(e.t, e.p, i, e);
                },
                en = function (t, e) {
                    for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
                },
                nn = function (t, e, n, i) {
                    for (var r, o = this._pt; o; ) (r = o._next), o.p === i && o.modifier(t, e, n), (o = r);
                },
                rn = function (t) {
                    for (var e, n, i = this._pt; i; ) (n = i._next), (i.p === t && !i.op) || i.op === t ? At(this, i, "_pt") : i.dep || (e = 1), (i = n);
                    return !e;
                },
                on = function (t, e, n, i) {
                    i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
                },
                sn = function (t) {
                    for (var e, n, i, r, o = t._pt; o; ) {
                        for (e = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
                        (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o), (o._next = n) ? (n._prev = o) : (r = o), (o = e);
                    }
                    t._pt = i;
                },
                an = (function () {
                    function t(t, e, n, i, r, o, s, a, l) {
                        (this.t = e), (this.s = i), (this.c = r), (this.p = n), (this.r = o || Ke), (this.d = s || this), (this.set = a || Ye), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
                    }
                    return (
                        (t.prototype.modifier = function (t, e, n) {
                            (this.mSet = this.mSet || this.set), (this.set = on), (this.m = t), (this.mt = n), (this.tween = e);
                        }),
                        t
                    );
                })();
            ft(
                ut +
                    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
                function (t) {
                    return (nt[t] = 1);
                }
            ),
                (G.TweenMax = G.TweenLite = Ue),
                (G.TimelineLite = G.TimelineMax = He),
                (c = new He({ sortChildren: !1, defaults: _, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
                (T.stringFilter = be);
            var ln = {
                registerPlugin: function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    e.forEach(function (t) {
                        return pe(t);
                    });
                },
                timeline: function (t) {
                    return new He(t);
                },
                getTweensOf: function (t, e) {
                    return c.getTweensOf(t, e);
                },
                getProperty: function (t, e, n, i) {
                    $(t) && (t = te(t)[0]);
                    var r = dt(t || {}).get,
                        o = n ? xt : wt;
                    return (
                        "native" === n && (n = ""),
                        t
                            ? e
                                ? o(((ot[e] && ot[e].get) || r)(t, e, n, i))
                                : function (e, n, i) {
                                      return o(((ot[e] && ot[e].get) || r)(t, e, n, i));
                                  }
                            : t
                    );
                },
                quickSetter: function (t, e, n) {
                    if ((t = te(t)).length > 1) {
                        var i = t.map(function (t) {
                                return dn.quickSetter(t, e, n);
                            }),
                            r = i.length;
                        return function (t) {
                            for (var e = r; e--; ) i[e](t);
                        };
                    }
                    t = t[0] || {};
                    var o = ot[e],
                        s = dt(t),
                        a = (s.harness && (s.harness.aliases || {})[e]) || e,
                        l = o
                            ? function (e) {
                                  var i = new o();
                                  (v._pt = 0), i.init(t, n ? e + n : e, v, 0, [t]), i.render(1, i), v._pt && en(1, v);
                              }
                            : s.set(t, a);
                    return o
                        ? l
                        : function (e) {
                              return l(t, a, n ? e + n : e, s, 1);
                          };
                },
                isTweening: function (t) {
                    return c.getTweensOf(t, !0).length > 0;
                },
                defaults: function (t) {
                    return t && t.ease && (t.ease = Me(t.ease, _.ease)), kt(_, t || {});
                },
                config: function (t) {
                    return kt(T, t || {});
                },
                registerEffect: function (t) {
                    var e = t.name,
                        n = t.effect,
                        i = t.plugins,
                        r = t.defaults,
                        o = t.extendTimeline;
                    (i || "").split(",").forEach(function (t) {
                        return t && !ot[t] && !G[t] && Z(e + " effect requires " + t + " plugin.");
                    }),
                        (st[e] = function (t, e, i) {
                            return n(te(t), bt(e || {}, r), i);
                        }),
                        o &&
                            (He.prototype[e] = function (t, n, i) {
                                return this.add(st[e](t, j(n) ? n : (i = n) && {}, this), i);
                            });
                },
                registerEase: function (t, e) {
                    ke[t] = Me(e);
                },
                parseEase: function (t, e) {
                    return arguments.length ? Me(t, e) : ke;
                },
                getById: function (t) {
                    return c.getById(t);
                },
                exportRoot: function (t, e) {
                    void 0 === t && (t = {});
                    var n,
                        i,
                        r = new He(t);
                    for (r.smoothChildTiming = H(t.smoothChildTiming), c.remove(r), r._dp = 0, r._time = r._tTime = c._time, n = c._first; n; )
                        (i = n._next), (!e && !n._dur && n instanceof Ue && n.vars.onComplete === n._targets[0]) || It(r, n, n._start - n._delay), (n = i);
                    return It(c, r, 0), r;
                },
                utils: {
                    wrap: function t(e, n, i) {
                        var r = n - e;
                        return z(e)
                            ? se(e, t(0, e.length), n)
                            : Vt(i, function (t) {
                                  return ((r + ((t - e) % r)) % r) + e;
                              });
                    },
                    wrapYoyo: function t(e, n, i) {
                        var r = n - e,
                            o = 2 * r;
                        return z(e)
                            ? se(e, t(0, e.length - 1), n)
                            : Vt(i, function (t) {
                                  return e + ((t = (o + ((t - e) % o)) % o || 0) > r ? o - t : t);
                              });
                    },
                    distribute: ne,
                    random: oe,
                    snap: re,
                    normalize: function (t, e, n) {
                        return le(t, e, 0, 1, n);
                    },
                    getUnit: Qt,
                    clamp: function (t, e, n) {
                        return Vt(n, function (n) {
                            return Gt(t, e, n);
                        });
                    },
                    splitColor: ve,
                    toArray: te,
                    selector: function (t) {
                        return (
                            (t = te(t)[0] || Z("Invalid scope") || {}),
                            function (e) {
                                var n = t.current || t.nativeElement || t;
                                return te(e, n.querySelectorAll ? n : n === t ? Z("Invalid scope") || f.createElement("div") : t);
                            }
                        );
                    },
                    mapRange: le,
                    pipe: function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return function (t) {
                            return e.reduce(function (t, e) {
                                return e(t);
                            }, t);
                        };
                    },
                    unitize: function (t, e) {
                        return function (n) {
                            return t(parseFloat(n)) + (e || Qt(n));
                        };
                    },
                    interpolate: function t(e, n, i, r) {
                        var o = isNaN(e + n)
                            ? 0
                            : function (t) {
                                  return (1 - t) * e + t * n;
                              };
                        if (!o) {
                            var s,
                                a,
                                l,
                                u,
                                c,
                                d = $(e),
                                p = {};
                            if ((!0 === i && (r = 1) && (i = null), d)) (e = { p: e }), (n = { p: n });
                            else if (z(e) && !z(n)) {
                                for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                                u--,
                                    (o = function (t) {
                                        t *= u;
                                        var e = Math.min(c, ~~t);
                                        return l[e](t - e);
                                    }),
                                    (i = n);
                            } else r || (e = _t(z(e) ? [] : {}, e));
                            if (!l) {
                                for (s in n) Be.call(p, e, s, "get", n[s]);
                                o = function (t) {
                                    return en(t, p) || (d ? e.p : e);
                                };
                            }
                        }
                        return Vt(i, o);
                    },
                    shuffle: ee,
                },
                install: J,
                effects: st,
                ticker: Te,
                updateRoot: He.updateRoot,
                plugins: ot,
                globalTimeline: c,
                core: {
                    PropTween: an,
                    globals: tt,
                    Tween: Ue,
                    Timeline: He,
                    Animation: je,
                    getCache: dt,
                    _removeLinkedListItem: At,
                    suppressOverwrites: function (t) {
                        return (u = t);
                    },
                },
            };
            ft("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
                return (ln[t] = Ue[t]);
            }),
                Te.add(He.updateRoot),
                (v = ln.to({}, { duration: 0 }));
            var un = function (t, e) {
                    for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
                    return n;
                },
                cn = function (t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function (t, n, i) {
                            i._onInit = function (t) {
                                var i, r;
                                if (
                                    ($(n) &&
                                        ((i = {}),
                                        ft(n, function (t) {
                                            return (i[t] = 1);
                                        }),
                                        (n = i)),
                                    e)
                                ) {
                                    for (r in ((i = {}), n)) i[r] = e(n[r]);
                                    n = i;
                                }
                                !(function (t, e) {
                                    var n,
                                        i,
                                        r,
                                        o = t._targets;
                                    for (n in e) for (i = o.length; i--; ) (r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = un(r, n)), r && r.modifier && r.modifier(e[n], t, o[i], n));
                                })(t, n);
                            };
                        },
                    };
                },
                dn =
                    ln.registerPlugin(
                        {
                            name: "attr",
                            init: function (t, e, n, i, r) {
                                var o, s;
                                for (o in e) (s = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, r, 0, 0, o)) && (s.op = o), this._props.push(o);
                            },
                        },
                        {
                            name: "endArray",
                            init: function (t, e) {
                                for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
                            },
                        },
                        cn("roundProps", ie),
                        cn("modifiers"),
                        cn("snap", re)
                    ) || ln;
            (Ue.version = He.version = dn.version = "3.8.0"), (h = 1), I() && _e();
            ke.Power0, ke.Power1, ke.Power2, ke.Power3, ke.Power4, ke.Linear, ke.Quad, ke.Cubic, ke.Quart, ke.Quint, ke.Strong, ke.Elastic, ke.Back, ke.SteppedEase, ke.Bounce, ke.Sine, ke.Expo, ke.Circ;
            var pn,
                fn,
                hn,
                gn,
                vn,
                mn,
                yn,
                wn = {},
                xn = 180 / Math.PI,
                bn = Math.PI / 180,
                Tn = Math.atan2,
                _n = /([A-Z])/g,
                kn = /(?:left|right|width|margin|padding|x)/i,
                Cn = /[\s,\(]\S/,
                Sn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
                An = function (t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                },
                En = function (t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                },
                On = function (t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
                },
                Mn = function (t, e) {
                    var n = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
                },
                Pn = function (t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e);
                },
                $n = function (t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
                },
                Ln = function (t, e, n) {
                    return (t.style[e] = n);
                },
                Dn = function (t, e, n) {
                    return t.style.setProperty(e, n);
                },
                Nn = function (t, e, n) {
                    return (t._gsap[e] = n);
                },
                jn = function (t, e, n) {
                    return (t._gsap.scaleX = t._gsap.scaleY = n);
                },
                Hn = function (t, e, n, i, r) {
                    var o = t._gsap;
                    (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
                },
                In = function (t, e, n, i, r) {
                    var o = t._gsap;
                    (o[e] = n), o.renderTransform(r, o);
                },
                Rn = "transform",
                Bn = Rn + "Origin",
                zn = function (t, e) {
                    var n = fn.createElementNS ? fn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fn.createElement(t);
                    return n.style ? n : fn.createElement(t);
                },
                qn = function t(e, n, i) {
                    var r = getComputedStyle(e);
                    return r[n] || r.getPropertyValue(n.replace(_n, "-$1").toLowerCase()) || r.getPropertyValue(n) || (!i && t(e, Wn(n) || n, 1)) || "";
                },
                Fn = "O,Moz,ms,Ms,Webkit".split(","),
                Wn = function (t, e, n) {
                    var i = (e || vn).style,
                        r = 5;
                    if (t in i && !n) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Fn[r] + t in i); );
                    return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Fn[r] : "") + t;
                },
                Xn = function () {
                    "undefined" != typeof window &&
                        window.document &&
                        ((pn = window),
                        (fn = pn.document),
                        (hn = fn.documentElement),
                        (vn = zn("div") || { style: {} }),
                        zn("div"),
                        (Rn = Wn(Rn)),
                        (Bn = Rn + "Origin"),
                        (vn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                        (yn = !!Wn("perspective")),
                        (gn = 1));
                },
                Un = function t(e) {
                    var n,
                        i = zn("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        o = this.nextSibling,
                        s = this.style.cssText;
                    if ((hn.appendChild(i), i.appendChild(this), (this.style.display = "block"), e))
                        try {
                            (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                        } catch (t) {}
                    else this._gsapBBox && (n = this._gsapBBox());
                    return r && (o ? r.insertBefore(this, o) : r.appendChild(this)), hn.removeChild(i), (this.style.cssText = s), n;
                },
                Yn = function (t, e) {
                    for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
                },
                Vn = function (t) {
                    var e;
                    try {
                        e = t.getBBox();
                    } catch (n) {
                        e = Un.call(t, !0);
                    }
                    return (e && (e.width || e.height)) || t.getBBox === Un || (e = Un.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +Yn(t, ["x", "cx", "x1"]) || 0, y: +Yn(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
                },
                Gn = function (t) {
                    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Vn(t));
                },
                Qn = function (t, e) {
                    if (e) {
                        var n = t.style;
                        e in wn && e !== Bn && (e = Rn), n.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), n.removeProperty(e.replace(_n, "-$1").toLowerCase())) : n.removeAttribute(e);
                    }
                },
                Jn = function (t, e, n, i, r, o) {
                    var s = new an(t._pt, e, n, 0, 1, o ? $n : Pn);
                    return (t._pt = s), (s.b = i), (s.e = r), t._props.push(n), s;
                },
                Kn = { deg: 1, rad: 1, turn: 1 },
                Zn = function t(e, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        u = parseFloat(i) || 0,
                        c = (i + "").trim().substr((u + "").length) || "px",
                        d = vn.style,
                        p = kn.test(n),
                        f = "svg" === e.tagName.toLowerCase(),
                        h = (f ? "client" : "offset") + (p ? "Width" : "Height"),
                        g = 100,
                        v = "px" === r,
                        m = "%" === r;
                    return r === c || !u || Kn[r] || Kn[c]
                        ? u
                        : ("px" !== c && !v && (u = t(e, n, i, "px")),
                          (l = e.getCTM && Gn(e)),
                          (!m && "%" !== c) || (!wn[n] && !~n.indexOf("adius"))
                              ? ((d[p ? "width" : "height"] = g + (v ? c : r)),
                                (s = ~n.indexOf("adius") || ("em" === r && e.appendChild && !f) ? e : e.parentNode),
                                l && (s = (e.ownerSVGElement || {}).parentNode),
                                (s && s !== fn && s.appendChild) || (s = fn.body),
                                (a = s._gsap) && m && a.width && p && a.time === Te.time
                                    ? ht((u / a.width) * g)
                                    : ((m || "%" === c) && (d.position = qn(e, "position")),
                                      s === e && (d.position = "static"),
                                      s.appendChild(vn),
                                      (o = vn[h]),
                                      s.removeChild(vn),
                                      (d.position = "absolute"),
                                      p && m && (((a = dt(s)).time = Te.time), (a.width = s[h])),
                                      ht(v ? (o * u) / g : o && u ? (g / o) * u : 0)))
                              : ((o = l ? e.getBBox()[p ? "width" : "height"] : e[h]), ht(m ? (u / o) * g : (u / 100) * o)));
                },
                ti = function (t, e, n, i) {
                    var r;
                    return (
                        gn || Xn(),
                        e in Sn && "transform" !== e && ~(e = Sn[e]).indexOf(",") && (e = e.split(",")[0]),
                        wn[e] && "transform" !== e
                            ? ((r = di(t, i)), (r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : pi(qn(t, Bn)) + " " + r.zOrigin + "px"))
                            : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = (ri[e] && ri[e](t, e, n)) || qn(t, e) || pt(t, e) || ("opacity" === e ? 1 : 0)),
                        n && !~(r + "").trim().indexOf(" ") ? Zn(t, e, r, n) + n : r
                    );
                },
                ei = function (t, e, n, i) {
                    if (!n || "none" === n) {
                        var r = Wn(e, t, 1),
                            o = r && qn(t, r, 1);
                        o && o !== n ? ((e = r), (n = o)) : "borderColor" === e && (n = qn(t, "borderTopColor"));
                    }
                    var s,
                        a,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f,
                        h,
                        g,
                        v,
                        m,
                        y = new an(this._pt, t.style, e, 0, 1, tn),
                        w = 0,
                        x = 0;
                    if (((y.b = n), (y.e = i), (n += ""), "auto" === (i += "") && ((t.style[e] = i), (i = qn(t, e) || i), (t.style[e] = n)), be((s = [n, i])), (i = s[1]), (l = (n = s[0]).match(W) || []), (i.match(W) || []).length)) {
                        for (; (a = W.exec(i)); )
                            (p = a[0]),
                                (h = i.substring(w, a.index)),
                                c ? (c = (c + 1) % 5) : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) || (c = 1),
                                p !== (d = l[x++] || "") &&
                                    ((u = parseFloat(d) || 0),
                                    (v = d.substr((u + "").length)),
                                    (m = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                                    (f = parseFloat(p)),
                                    (g = p.substr((f + "").length)),
                                    (w = W.lastIndex - g.length),
                                    g || ((g = g || T.units[e] || v), w === i.length && ((i += g), (y.e += g))),
                                    v !== g && (u = Zn(t, e, d, g) || 0),
                                    (y._pt = { _next: y._pt, p: h || 1 === x ? h : ",", s: u, c: m ? m * f : f - u, m: (c && c < 4) || "zIndex" === e ? Math.round : 0 }));
                        y.c = w < i.length ? i.substring(w, i.length) : "";
                    } else y.r = "display" === e && "none" === i ? $n : Pn;
                    return U.test(i) && (y.e = 0), (this._pt = y), y;
                },
                ni = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
                ii = function (t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var n,
                            i,
                            r,
                            o = e.t,
                            s = o.style,
                            a = e.u,
                            l = o._gsap;
                        if ("all" === a || !0 === a) (s.cssText = ""), (i = 1);
                        else for (r = (a = a.split(",")).length; --r > -1; ) (n = a[r]), wn[n] && ((i = 1), (n = "transformOrigin" === n ? Bn : Rn)), Qn(o, n);
                        i && (Qn(o, Rn), l && (l.svg && o.removeAttribute("transform"), di(o, 1), (l.uncache = 1)));
                    }
                },
                ri = {
                    clearProps: function (t, e, n, i, r) {
                        if ("isFromStart" !== r.data) {
                            var o = (t._pt = new an(t._pt, e, n, 0, 0, ii));
                            return (o.u = i), (o.pr = -10), (o.tween = r), t._props.push(n), 1;
                        }
                    },
                },
                oi = [1, 0, 0, 1, 0, 0],
                si = {},
                ai = function (t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
                },
                li = function (t) {
                    var e = qn(t, Rn);
                    return ai(e) ? oi : e.substr(7).match(F).map(ht);
                },
                ui = function (t, e) {
                    var n,
                        i,
                        r,
                        o,
                        s = t._gsap || dt(t),
                        a = t.style,
                        l = li(t);
                    return s.svg && t.getAttribute("transform")
                        ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",")
                            ? oi
                            : l
                        : (l !== oi ||
                              t.offsetParent ||
                              t === hn ||
                              s.svg ||
                              ((r = a.display),
                              (a.display = "block"),
                              ((n = t.parentNode) && t.offsetParent) || ((o = 1), (i = t.nextSibling), hn.appendChild(t)),
                              (l = li(t)),
                              r ? (a.display = r) : Qn(t, "display"),
                              o && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : hn.removeChild(t))),
                          e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
                },
                ci = function (t, e, n, i, r, o) {
                    var s,
                        a,
                        l,
                        u = t._gsap,
                        c = r || ui(t, !0),
                        d = u.xOrigin || 0,
                        p = u.yOrigin || 0,
                        f = u.xOffset || 0,
                        h = u.yOffset || 0,
                        g = c[0],
                        v = c[1],
                        m = c[2],
                        y = c[3],
                        w = c[4],
                        x = c[5],
                        b = e.split(" "),
                        T = parseFloat(b[0]) || 0,
                        _ = parseFloat(b[1]) || 0;
                    n
                        ? c !== oi && (a = g * y - v * m) && ((l = T * (-v / a) + _ * (g / a) - (g * x - v * w) / a), (T = T * (y / a) + _ * (-m / a) + (m * x - y * w) / a), (_ = l))
                        : ((T = (s = Vn(t)).x + (~b[0].indexOf("%") ? (T / 100) * s.width : T)), (_ = s.y + (~(b[1] || b[0]).indexOf("%") ? (_ / 100) * s.height : _))),
                        i || (!1 !== i && u.smooth) ? ((w = T - d), (x = _ - p), (u.xOffset = f + (w * g + x * m) - w), (u.yOffset = h + (w * v + x * y) - x)) : (u.xOffset = u.yOffset = 0),
                        (u.xOrigin = T),
                        (u.yOrigin = _),
                        (u.smooth = !!i),
                        (u.origin = e),
                        (u.originIsAbsolute = !!n),
                        (t.style[Bn] = "0px 0px"),
                        o && (Jn(o, u, "xOrigin", d, T), Jn(o, u, "yOrigin", p, _), Jn(o, u, "xOffset", f, u.xOffset), Jn(o, u, "yOffset", h, u.yOffset)),
                        t.setAttribute("data-svg-origin", T + " " + _);
                },
                di = function (t, e) {
                    var n = t._gsap || new Ne(t);
                    if ("x" in n && !e && !n.uncache) return n;
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        d,
                        p,
                        f,
                        h,
                        g,
                        v,
                        m,
                        y,
                        w,
                        x,
                        b,
                        _,
                        k,
                        C,
                        S,
                        A,
                        E,
                        O,
                        M,
                        P,
                        $,
                        L,
                        D,
                        N,
                        j = t.style,
                        H = n.scaleX < 0,
                        I = "px",
                        R = "deg",
                        B = qn(t, Bn) || "0";
                    return (
                        (i = r = o = l = u = c = d = p = f = 0),
                        (s = a = 1),
                        (n.svg = !(!t.getCTM || !Gn(t))),
                        (v = ui(t, n.svg)),
                        n.svg && ((A = (!n.uncache || "0px 0px" === B) && !e && t.getAttribute("data-svg-origin")), ci(t, A || B, !!A || n.originIsAbsolute, !1 !== n.smooth, v)),
                        (h = n.xOrigin || 0),
                        (g = n.yOrigin || 0),
                        v !== oi &&
                            ((x = v[0]),
                            (b = v[1]),
                            (_ = v[2]),
                            (k = v[3]),
                            (i = C = v[4]),
                            (r = S = v[5]),
                            6 === v.length
                                ? ((s = Math.sqrt(x * x + b * b)),
                                  (a = Math.sqrt(k * k + _ * _)),
                                  (l = x || b ? Tn(b, x) * xn : 0),
                                  (d = _ || k ? Tn(_, k) * xn + l : 0) && (a *= Math.abs(Math.cos(d * bn))),
                                  n.svg && ((i -= h - (h * x + g * _)), (r -= g - (h * b + g * k))))
                                : ((N = v[6]),
                                  (L = v[7]),
                                  (M = v[8]),
                                  (P = v[9]),
                                  ($ = v[10]),
                                  (D = v[11]),
                                  (i = v[12]),
                                  (r = v[13]),
                                  (o = v[14]),
                                  (u = (m = Tn(N, $)) * xn),
                                  m &&
                                      ((A = C * (y = Math.cos(-m)) + M * (w = Math.sin(-m))),
                                      (E = S * y + P * w),
                                      (O = N * y + $ * w),
                                      (M = C * -w + M * y),
                                      (P = S * -w + P * y),
                                      ($ = N * -w + $ * y),
                                      (D = L * -w + D * y),
                                      (C = A),
                                      (S = E),
                                      (N = O)),
                                  (c = (m = Tn(-_, $)) * xn),
                                  m && ((y = Math.cos(-m)), (D = k * (w = Math.sin(-m)) + D * y), (x = A = x * y - M * w), (b = E = b * y - P * w), (_ = O = _ * y - $ * w)),
                                  (l = (m = Tn(b, x)) * xn),
                                  m && ((A = x * (y = Math.cos(m)) + b * (w = Math.sin(m))), (E = C * y + S * w), (b = b * y - x * w), (S = S * y - C * w), (x = A), (C = E)),
                                  u && Math.abs(u) + Math.abs(l) > 359.9 && ((u = l = 0), (c = 180 - c)),
                                  (s = ht(Math.sqrt(x * x + b * b + _ * _))),
                                  (a = ht(Math.sqrt(S * S + N * N))),
                                  (m = Tn(C, S)),
                                  (d = Math.abs(m) > 2e-4 ? m * xn : 0),
                                  (f = D ? 1 / (D < 0 ? -D : D) : 0)),
                            n.svg && ((A = t.getAttribute("transform")), (n.forceCSS = t.setAttribute("transform", "") || !ai(qn(t, Rn))), A && t.setAttribute("transform", A))),
                        Math.abs(d) > 90 && Math.abs(d) < 270 && (H ? ((s *= -1), (d += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (d += d <= 0 ? 180 : -180))),
                        (n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetWidth * n.xPercent) / 100 : 0) + I),
                        (n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetHeight * n.yPercent) / 100 : 0) + I),
                        (n.z = o + I),
                        (n.scaleX = ht(s)),
                        (n.scaleY = ht(a)),
                        (n.rotation = ht(l) + R),
                        (n.rotationX = ht(u) + R),
                        (n.rotationY = ht(c) + R),
                        (n.skewX = d + R),
                        (n.skewY = p + R),
                        (n.transformPerspective = f + I),
                        (n.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (j[Bn] = pi(B)),
                        (n.xOffset = n.yOffset = 0),
                        (n.force3D = T.force3D),
                        (n.renderTransform = n.svg ? wi : yn ? yi : hi),
                        (n.uncache = 0),
                        n
                    );
                },
                pi = function (t) {
                    return (t = t.split(" "))[0] + " " + t[1];
                },
                fi = function (t, e, n) {
                    var i = Qt(e);
                    return ht(parseFloat(e) + parseFloat(Zn(t, "x", n + "px", i))) + i;
                },
                hi = function (t, e) {
                    (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), yi(t, e);
                },
                gi = "0deg",
                vi = "0px",
                mi = ") ",
                yi = function (t, e) {
                    var n = e || this,
                        i = n.xPercent,
                        r = n.yPercent,
                        o = n.x,
                        s = n.y,
                        a = n.z,
                        l = n.rotation,
                        u = n.rotationY,
                        c = n.rotationX,
                        d = n.skewX,
                        p = n.skewY,
                        f = n.scaleX,
                        h = n.scaleY,
                        g = n.transformPerspective,
                        v = n.force3D,
                        m = n.target,
                        y = n.zOrigin,
                        w = "",
                        x = ("auto" === v && t && 1 !== t) || !0 === v;
                    if (y && (c !== gi || u !== gi)) {
                        var b,
                            T = parseFloat(u) * bn,
                            _ = Math.sin(T),
                            k = Math.cos(T);
                        (T = parseFloat(c) * bn), (b = Math.cos(T)), (o = fi(m, o, _ * b * -y)), (s = fi(m, s, -Math.sin(T) * -y)), (a = fi(m, a, k * b * -y + y));
                    }
                    g !== vi && (w += "perspective(" + g + mi),
                        (i || r) && (w += "translate(" + i + "%, " + r + "%) "),
                        (x || o !== vi || s !== vi || a !== vi) && (w += a !== vi || x ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + mi),
                        l !== gi && (w += "rotate(" + l + mi),
                        u !== gi && (w += "rotateY(" + u + mi),
                        c !== gi && (w += "rotateX(" + c + mi),
                        (d === gi && p === gi) || (w += "skew(" + d + ", " + p + mi),
                        (1 === f && 1 === h) || (w += "scale(" + f + ", " + h + mi),
                        (m.style[Rn] = w || "translate(0, 0)");
                },
                wi = function (t, e) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a = e || this,
                        l = a.xPercent,
                        u = a.yPercent,
                        c = a.x,
                        d = a.y,
                        p = a.rotation,
                        f = a.skewX,
                        h = a.skewY,
                        g = a.scaleX,
                        v = a.scaleY,
                        m = a.target,
                        y = a.xOrigin,
                        w = a.yOrigin,
                        x = a.xOffset,
                        b = a.yOffset,
                        T = a.forceCSS,
                        _ = parseFloat(c),
                        k = parseFloat(d);
                    (p = parseFloat(p)),
                        (f = parseFloat(f)),
                        (h = parseFloat(h)) && ((f += h = parseFloat(h)), (p += h)),
                        p || f
                            ? ((p *= bn),
                              (f *= bn),
                              (n = Math.cos(p) * g),
                              (i = Math.sin(p) * g),
                              (r = Math.sin(p - f) * -v),
                              (o = Math.cos(p - f) * v),
                              f && ((h *= bn), (s = Math.tan(f - h)), (r *= s = Math.sqrt(1 + s * s)), (o *= s), h && ((s = Math.tan(h)), (n *= s = Math.sqrt(1 + s * s)), (i *= s))),
                              (n = ht(n)),
                              (i = ht(i)),
                              (r = ht(r)),
                              (o = ht(o)))
                            : ((n = g), (o = v), (i = r = 0)),
                        ((_ && !~(c + "").indexOf("px")) || (k && !~(d + "").indexOf("px"))) && ((_ = Zn(m, "x", c, "px")), (k = Zn(m, "y", d, "px"))),
                        (y || w || x || b) && ((_ = ht(_ + y - (y * n + w * r) + x)), (k = ht(k + w - (y * i + w * o) + b))),
                        (l || u) && ((s = m.getBBox()), (_ = ht(_ + (l / 100) * s.width)), (k = ht(k + (u / 100) * s.height))),
                        (s = "matrix(" + n + "," + i + "," + r + "," + o + "," + _ + "," + k + ")"),
                        m.setAttribute("transform", s),
                        T && (m.style[Rn] = s);
                },
                xi = function (t, e, n, i, r, o) {
                    var s,
                        a,
                        l = 360,
                        u = $(r),
                        c = parseFloat(r) * (u && ~r.indexOf("rad") ? xn : 1),
                        d = o ? c * o : c - i,
                        p = i + d + "deg";
                    return (
                        u &&
                            ("short" === (s = r.split("_")[1]) && (d %= l) !== d % 180 && (d += d < 0 ? l : -360),
                            "cw" === s && d < 0 ? (d = ((d + 36e9) % l) - ~~(d / l) * l) : "ccw" === s && d > 0 && (d = ((d - 36e9) % l) - ~~(d / l) * l)),
                        (t._pt = a = new an(t._pt, e, n, i, d, En)),
                        (a.e = p),
                        (a.u = "deg"),
                        t._props.push(n),
                        a
                    );
                },
                bi = function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t;
                },
                Ti = function (t, e, n) {
                    var i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c = bi({}, n._gsap),
                        d = n.style;
                    for (r in (c.svg
                        ? ((o = n.getAttribute("transform")), n.setAttribute("transform", ""), (d[Rn] = e), (i = di(n, 1)), Qn(n, Rn), n.setAttribute("transform", o))
                        : ((o = getComputedStyle(n)[Rn]), (d[Rn] = e), (i = di(n, 1)), (d[Rn] = o)),
                    wn))
                        (o = c[r]) !== (s = i[r]) &&
                            "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
                            ((a = Qt(o) !== (u = Qt(s)) ? Zn(n, r, o, u) : parseFloat(o)), (l = parseFloat(s)), (t._pt = new an(t._pt, i, r, a, l - a, An)), (t._pt.u = u || 0), t._props.push(r));
                    bi(i, c);
                };
            ft("padding,margin,Width,Radius", function (t, e) {
                var n = "Top",
                    i = "Right",
                    r = "Bottom",
                    o = "Left",
                    s = (e < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function (n) {
                        return e < 2 ? t + n : "border" + n + t;
                    });
                ri[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
                    var o, a;
                    if (arguments.length < 4)
                        return (
                            (o = s.map(function (e) {
                                return ti(t, e, n);
                            })),
                            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
                        );
                    (o = (i + "").split(" ")),
                        (a = {}),
                        s.forEach(function (t, e) {
                            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
                        }),
                        t.init(e, a, r);
                };
            });
            var _i,
                ki,
                Ci,
                Si = {
                    name: "css",
                    register: Xn,
                    targetTest: function (t) {
                        return t.style && t.nodeType;
                    },
                    init: function (t, e, n, i, r) {
                        var o,
                            s,
                            a,
                            l,
                            u,
                            c,
                            d,
                            p,
                            f,
                            h,
                            g,
                            v,
                            m,
                            y,
                            w,
                            x,
                            b,
                            _,
                            k,
                            C = this._props,
                            S = t.style,
                            A = n.vars.startAt;
                        for (d in (gn || Xn(), e))
                            if ("autoRound" !== d && ((s = e[d]), !ot[d] || !ze(d, e, n, i, t, r)))
                                if (((u = typeof s), (c = ri[d]), "function" === u && (u = typeof (s = s.call(n, i, t, r))), "string" === u && ~s.indexOf("random(") && (s = ae(s)), c)) c(this, t, d, s, n) && (w = 1);
                                else if ("--" === d.substr(0, 2))
                                    (o = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                                        (s += ""),
                                        (we.lastIndex = 0),
                                        we.test(o) || ((p = Qt(o)), (f = Qt(s))),
                                        f ? p !== f && (o = Zn(t, d, o, f) + f) : p && (s += p),
                                        this.add(S, "setProperty", o, s, i, r, 0, 0, d),
                                        C.push(d);
                                else if ("undefined" !== u) {
                                    if (
                                        (A && d in A
                                            ? ((o = "function" == typeof A[d] ? A[d].call(n, i, t, r) : A[d]),
                                              d in T.units && !Qt(o) && (o += T.units[d]),
                                              $(o) && ~o.indexOf("random(") && (o = ae(o)),
                                              "=" === (o + "").charAt(1) && (o = ti(t, d)))
                                            : (o = ti(t, d)),
                                        (l = parseFloat(o)),
                                        (h = "string" === u && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                                        (a = parseFloat(s)),
                                        d in Sn &&
                                            ("autoAlpha" === d && (1 === l && "hidden" === ti(t, "visibility") && a && (l = 0), Jn(this, S, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                                            "scale" !== d && "transform" !== d && ~(d = Sn[d]).indexOf(",") && (d = d.split(",")[0])),
                                        (g = d in wn))
                                    )
                                        if (
                                            (v ||
                                                (((m = t._gsap).renderTransform && !e.parseTransform) || di(t, e.parseTransform),
                                                (y = !1 !== e.smoothOrigin && m.smooth),
                                                ((v = this._pt = new an(this._pt, S, Rn, 0, 1, m.renderTransform, m, 0, -1)).dep = 1)),
                                            "scale" === d)
                                        )
                                            (this._pt = new an(this._pt, m, "scaleY", m.scaleY, (h ? h * a : a - m.scaleY) || 0)), C.push("scaleY", d), (d += "X");
                                        else {
                                            if ("transformOrigin" === d) {
                                                (b = void 0),
                                                    (_ = void 0),
                                                    (k = void 0),
                                                    (b = (x = s).split(" ")),
                                                    (_ = b[0]),
                                                    (k = b[1] || "50%"),
                                                    ("top" !== _ && "bottom" !== _ && "left" !== k && "right" !== k) || ((x = _), (_ = k), (k = x)),
                                                    (b[0] = ni[_] || _),
                                                    (b[1] = ni[k] || k),
                                                    (s = b.join(" ")),
                                                    m.svg ? ci(t, s, 0, y, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin && Jn(this, m, "zOrigin", m.zOrigin, f), Jn(this, S, d, pi(o), pi(s)));
                                                continue;
                                            }
                                            if ("svgOrigin" === d) {
                                                ci(t, s, 1, y, 0, this);
                                                continue;
                                            }
                                            if (d in si) {
                                                xi(this, m, d, l, s, h);
                                                continue;
                                            }
                                            if ("smoothOrigin" === d) {
                                                Jn(this, m, "smooth", m.smooth, s);
                                                continue;
                                            }
                                            if ("force3D" === d) {
                                                m[d] = s;
                                                continue;
                                            }
                                            if ("transform" === d) {
                                                Ti(this, s, t);
                                                continue;
                                            }
                                        }
                                    else d in S || (d = Wn(d) || d);
                                    if (g || ((a || 0 === a) && (l || 0 === l) && !Cn.test(s) && d in S))
                                        a || (a = 0),
                                            (p = (o + "").substr((l + "").length)) !== (f = Qt(s) || (d in T.units ? T.units[d] : p)) && (l = Zn(t, d, o, f)),
                                            (this._pt = new an(this._pt, g ? m : S, d, l, h ? h * a : a - l, g || ("px" !== f && "zIndex" !== d) || !1 === e.autoRound ? An : Mn)),
                                            (this._pt.u = f || 0),
                                            p !== f && "%" !== f && ((this._pt.b = o), (this._pt.r = On));
                                    else if (d in S) ei.call(this, t, d, o, s);
                                    else {
                                        if (!(d in t)) {
                                            K(d, s);
                                            continue;
                                        }
                                        this.add(t, d, o || t[d], s, i, r);
                                    }
                                    C.push(d);
                                }
                        w && sn(this);
                    },
                    get: ti,
                    aliases: Sn,
                    getSetter: function (t, e, n) {
                        var i = Sn[e];
                        return (
                            i && i.indexOf(",") < 0 && (e = i),
                            e in wn && e !== Bn && (t._gsap.x || ti(t, "x")) ? (n && mn === n ? ("scale" === e ? jn : Nn) : (mn = n || {}) && ("scale" === e ? Hn : In)) : t.style && !N(t.style[e]) ? Ln : ~e.indexOf("-") ? Dn : Je(t, e)
                        );
                    },
                    core: { _removeProperty: Qn, _getMatrix: ui },
                };
            (dn.utils.checkPrefix = Wn),
                (Ci = ft((_i = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ki = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                    wn[t] = 1;
                })),
                ft(ki, function (t) {
                    (T.units[t] = "deg"), (si[t] = 1);
                }),
                (Sn[Ci[13]] = _i + "," + ki),
                ft("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
                    var e = t.split(":");
                    Sn[e[1]] = Ci[e[0]];
                }),
                ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                    T.units[t] = "px";
                }),
                dn.registerPlugin(Si);
            var Ai = dn.registerPlugin(Si) || dn,
                Ei = Ai.core.Tween,
                Oi = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                Mi = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                Pi = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                $i = /(^[#\.][a-z]|[a-y][a-z])/i,
                Li = Math.PI / 180,
                Di = 180 / Math.PI,
                Ni = Math.sin,
                ji = Math.cos,
                Hi = Math.abs,
                Ii = Math.sqrt,
                Ri = Math.atan2,
                Bi = 1e8,
                zi = function (t) {
                    return "string" == typeof t;
                },
                qi = function (t) {
                    return "number" == typeof t;
                },
                Fi = {},
                Wi = {},
                Xi = 1e5,
                Ui = function (t) {
                    return Math.round(((t + Bi) % 1) * Xi) / Xi || (t < 0 ? 0 : 1);
                },
                Yi = function (t) {
                    return Math.round(t * Xi) / Xi || 0;
                },
                Vi = function (t) {
                    return Math.round(1e10 * t) / 1e10 || 0;
                },
                Gi = function (t, e, n, i) {
                    var r = t[e],
                        o = 1 === i ? 6 : ar(r, n, i);
                    if (o && o + n + 2 < r.length) return t.splice(e, 0, r.slice(0, n + o + 2)), r.splice(0, n + o), 1;
                },
                Qi = function (t, e, n) {
                    var i = t.length,
                        r = ~~(n * i);
                    if (t[r] > e) for (; --r && t[r] > e; );
                    else for (; t[++r] < e && r < i; );
                    return r < i ? r : i - 1;
                },
                Ji = function (t, e) {
                    return (
                        (e.totalLength = t.totalLength),
                        t.samples ? ((e.samples = t.samples.slice(0)), (e.lookup = t.lookup.slice(0)), (e.minLength = t.minLength), (e.resolution = t.resolution)) : t.totalPoints && (e.totalPoints = t.totalPoints),
                        e
                    );
                },
                Ki = function (t, e) {
                    var n = t.length,
                        i = t[n - 1] || [],
                        r = i.length;
                    n && e[0] === i[r - 2] && e[1] === i[r - 1] && ((e = i.concat(e.slice(2))), n--), (t[n] = e);
                };
            function Zi(t) {
                var e,
                    n = (t = (zi(t) && $i.test(t) && document.querySelector(t)) || t).getAttribute ? t : 0;
                return n && (t = t.getAttribute("d"))
                    ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : (n._gsPath[t] = pr(t)))
                    : t
                    ? zi(t)
                        ? pr(t)
                        : qi(t[0])
                        ? [t]
                        : t
                    : console.warn("Expecting a <path> element or an SVG path data string");
            }
            function tr(t) {
                var e,
                    n = 0;
                for (t.reverse(); n < t.length; n += 2) (e = t[n]), (t[n] = t[n + 1]), (t[n + 1] = e);
                t.reversed = !t.reversed;
            }
            var er = { rect: "rx,ry,x,y,width,height", circle: "r,cx,cy", ellipse: "rx,ry,cx,cy", line: "x1,x2,y1,y2" };
            function nr(t, e) {
                var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    d,
                    p,
                    f,
                    h,
                    g,
                    v,
                    m,
                    y,
                    w,
                    x,
                    b,
                    T,
                    _,
                    k = t.tagName.toLowerCase(),
                    C = 0.552284749831;
                return "path" !== k && t.getBBox
                    ? ((a = (function (t, e) {
                          var n,
                              i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                              r = [].slice.call(t.attributes),
                              o = r.length;
                          for (e = "," + e + ","; --o > -1; ) (n = r[o].nodeName.toLowerCase()), e.indexOf("," + n + ",") < 0 && i.setAttributeNS(null, n, r[o].nodeValue);
                          return i;
                      })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
                      (_ = (function (t, e) {
                          for (var n = e ? e.split(",") : [], i = {}, r = n.length; --r > -1; ) i[n[r]] = +t.getAttribute(n[r]) || 0;
                          return i;
                      })(t, er[k])),
                      "rect" === k
                          ? ((o = _.rx),
                            (s = _.ry || o),
                            (i = _.x),
                            (r = _.y),
                            (d = _.width - 2 * o),
                            (p = _.height - 2 * s),
                            (n =
                                o || s
                                    ? "M" +
                                      (m = (g = (h = i + o) + d) + o) +
                                      "," +
                                      (w = r + s) +
                                      " V" +
                                      (x = w + p) +
                                      " C" +
                                      [
                                          m,
                                          (b = x + s * C),
                                          (v = g + o * C),
                                          (T = x + s),
                                          g,
                                          T,
                                          g - (g - h) / 3,
                                          T,
                                          h + (g - h) / 3,
                                          T,
                                          h,
                                          T,
                                          (f = i + o * (1 - C)),
                                          T,
                                          i,
                                          b,
                                          i,
                                          x,
                                          i,
                                          x - (x - w) / 3,
                                          i,
                                          w + (x - w) / 3,
                                          i,
                                          w,
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
                                          v,
                                          r,
                                          m,
                                          y,
                                          m,
                                          w,
                                      ].join(",") +
                                      "z"
                                    : "M" + (i + d) + "," + r + " v" + p + " h" + -d + " v" + -p + " h" + d + "z"))
                          : "circle" === k || "ellipse" === k
                          ? ("circle" === k ? (u = (o = s = _.r) * C) : ((o = _.rx), (u = (s = _.ry) * C)),
                            (n =
                                "M" +
                                ((i = _.cx) + o) +
                                "," +
                                (r = _.cy) +
                                " C" +
                                [i + o, r + u, i + (l = o * C), r + s, i, r + s, i - l, r + s, i - o, r + u, i - o, r, i - o, r - u, i - l, r - s, i, r - s, i + l, r - s, i + o, r - u, i + o, r].join(",") +
                                "z"))
                          : "line" === k
                          ? (n = "M" + _.x1 + "," + _.y1 + " L" + _.x2 + "," + _.y2)
                          : ("polyline" !== k && "polygon" !== k) ||
                            ((n = "M" + (i = (c = (t.getAttribute("points") + "").match(Mi) || []).shift()) + "," + (r = c.shift()) + " L" + c.join(",")), "polygon" === k && (n += "," + i + "," + r + "z")),
                      a.setAttribute("d", gr((a._gsRawPath = pr(n)))),
                      e && t.parentNode && (t.parentNode.insertBefore(a, t), t.parentNode.removeChild(t)),
                      a)
                    : t;
            }
            function ir(t, e, n) {
                var i,
                    r = t[e],
                    o = t[e + 2],
                    s = t[e + 4];
                return (
                    (r += (o - r) * n),
                    (r += ((o += (s - o) * n) - r) * n),
                    (i = o + (s + (t[e + 6] - s) * n - o) * n - r),
                    (r = t[e + 1]),
                    (r += ((o = t[e + 3]) - r) * n),
                    (r += ((o += ((s = t[e + 5]) - o) * n) - r) * n),
                    Yi(Ri(o + (s + (t[e + 7] - s) * n - o) * n - r, i) * Di)
                );
            }
            function rr(t, e, n) {
                (n = void 0 === n ? 1 : Vi(n) || 0), (e = Vi(e) || 0);
                var i = Math.max(0, ~~(Hi(n - e) - 1e-8)),
                    r = (function (t) {
                        for (var e = [], n = 0; n < t.length; n++) e[n] = Ji(t[n], t[n].slice(0));
                        return Ji(t, e);
                    })(t);
                if (
                    (e > n &&
                        ((e = 1 - e),
                        (n = 1 - n),
                        (function (t, e) {
                            var n = t.length;
                            for (e || t.reverse(); n--; ) t[n].reversed || tr(t[n]);
                        })(r),
                        (r.totalLength = 0)),
                    e < 0 || n < 0)
                ) {
                    var o = Math.abs(~~Math.min(e, n)) + 1;
                    (e += o), (n += o);
                }
                r.totalLength || sr(r);
                var s,
                    a,
                    l,
                    u,
                    c,
                    d,
                    p,
                    f,
                    h = n > 1,
                    g = lr(r, e, Fi, !0),
                    v = lr(r, n, Wi),
                    m = v.segment,
                    y = g.segment,
                    w = v.segIndex,
                    x = g.segIndex,
                    b = v.i,
                    T = g.i,
                    _ = x === w,
                    k = b === T && _;
                if (h || i) {
                    for (
                        s = w < x || (_ && b < T) || (k && v.t < g.t),
                            Gi(r, x, T, g.t) && (x++, s || (w++, k ? ((v.t = (v.t - g.t) / (1 - g.t)), (b = 0)) : _ && (b -= T))),
                            1 - (n - e) < 1e-5 ? (w = x - 1) : !v.t && w ? w-- : Gi(r, w, b, v.t) && s && x++,
                            1 === g.t && (x = (x + 1) % r.length),
                            c = [],
                            p = 1 + (d = r.length) * i,
                            f = x,
                            p += (d - x + w) % d,
                            u = 0;
                        u < p;
                        u++
                    )
                        Ki(c, r[f++ % d]);
                    r = c;
                } else if (((l = 1 === v.t ? 6 : ar(m, b, v.t)), e !== n)) for (a = ar(y, T, k ? g.t / v.t : g.t), _ && (l += a), m.splice(b + l + 2), (a || T) && y.splice(0, T + a), u = r.length; u--; ) (u < x || u > w) && r.splice(u, 1);
                else (m.angle = ir(m, b + l, 0)), (g = m[(b += l)]), (v = m[b + 1]), (m.length = m.totalLength = 0), (m.totalPoints = r.totalPoints = 8), m.push(g, v, g, v, g, v, g, v);
                return (r.totalLength = 0), r;
            }
            function or(t, e, n) {
                (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    d,
                    p,
                    f,
                    h,
                    g,
                    v,
                    m,
                    y,
                    w,
                    x = ~~t.resolution || 12,
                    b = 1 / x,
                    T = n ? e + 6 * n + 1 : t.length,
                    _ = t[e],
                    k = t[e + 1],
                    C = e ? (e / 6) * x : 0,
                    S = t.samples,
                    A = t.lookup,
                    E = (e ? t.minLength : Bi) || Bi,
                    O = S[C + n * x - 1],
                    M = e ? S[C - 1] : 0;
                for (S.length = A.length = 0, r = e + 2; r < T; r += 6) {
                    if (((o = t[r + 4] - _), (s = t[r + 2] - _), (a = t[r] - _), (c = t[r + 5] - k), (d = t[r + 3] - k), (p = t[r + 1] - k), (l = u = f = h = 0), Hi(o) < 0.01 && Hi(c) < 0.01 && Hi(a) + Hi(p) < 0.01))
                        t.length > 8 && (t.splice(r, 6), (r -= 6), (T -= 6));
                    else
                        for (i = 1; i <= x; i++)
                            (l = u - (u = ((v = b * i) * v * o + 3 * (g = 1 - v) * (v * s + g * a)) * v)), (f = h - (h = (v * v * c + 3 * g * (v * d + g * p)) * v)), (y = Ii(f * f + l * l)) < E && (E = y), (M += y), (S[C++] = M);
                    (_ += o), (k += c);
                }
                if (O) for (O -= M; C < S.length; C++) S[C] += O;
                if (S.length && E) {
                    if (((t.totalLength = w = S[S.length - 1] || 0), (t.minLength = E), w / E < 9999)) for (y = m = 0, i = 0; i < w; i += E) A[y++] = S[m] < i ? ++m : m;
                } else t.totalLength = S[0] = 0;
                return e ? M - S[e / 2 - 1] : M;
            }
            function sr(t, e) {
                var n, i, r;
                for (r = n = i = 0; r < t.length; r++) (t[r].resolution = ~~e || 12), (i += t[r].length), (n += or(t[r]));
                return (t.totalPoints = i), (t.totalLength = n), t;
            }
            function ar(t, e, n) {
                if (n <= 0 || n >= 1) return 0;
                var i = t[e],
                    r = t[e + 1],
                    o = t[e + 2],
                    s = t[e + 3],
                    a = t[e + 4],
                    l = t[e + 5],
                    u = i + (o - i) * n,
                    c = o + (a - o) * n,
                    d = r + (s - r) * n,
                    p = s + (l - s) * n,
                    f = u + (c - u) * n,
                    h = d + (p - d) * n,
                    g = a + (t[e + 6] - a) * n,
                    v = l + (t[e + 7] - l) * n;
                return (
                    (c += (g - c) * n),
                    (p += (v - p) * n),
                    t.splice(e + 2, 4, Yi(u), Yi(d), Yi(f), Yi(h), Yi(f + (c - f) * n), Yi(h + (p - h) * n), Yi(c), Yi(p), Yi(g), Yi(v)),
                    t.samples && t.samples.splice(((e / 6) * t.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
                    6
                );
            }
            function lr(t, e, n, i) {
                (n = n || {}), t.totalLength || sr(t), (e < 0 || e > 1) && (e = Ui(e));
                var r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    d = 0,
                    p = t[0];
                if (e)
                    if (1 === e) (c = 1), (u = (p = t[(d = t.length - 1)]).length - 8);
                    else {
                        if (t.length > 1) {
                            for (s = t.totalLength * e, l = u = 0; (l += t[u++].totalLength) < s; ) d = u;
                            e = (s - (a = l - (p = t[d]).totalLength)) / (l - a) || 0;
                        }
                        (r = p.samples),
                            (o = p.resolution),
                            (s = p.totalLength * e),
                            (a = (u = p.lookup.length ? p.lookup[~~(s / p.minLength)] || 0 : Qi(r, s, e)) ? r[u - 1] : 0),
                            (l = r[u]) < s && ((a = l), (l = r[++u])),
                            (c = (1 / o) * ((s - a) / (l - a) + (u % o))),
                            (u = 6 * ~~(u / o)),
                            i && 1 === c && (u + 6 < p.length ? ((u += 6), (c = 0)) : d + 1 < t.length && ((u = c = 0), (p = t[++d])));
                    }
                else (c = u = d = 0), (p = t[0]);
                return (n.t = c), (n.i = u), (n.path = t), (n.segment = p), (n.segIndex = d), n;
            }
            function ur(t, e, n, i) {
                var r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    d,
                    p,
                    f = t[0],
                    h = i || {};
                if (((e < 0 || e > 1) && (e = Ui(e)), t.length > 1)) {
                    for (s = t.totalLength * e, l = u = 0; (l += t[u++].totalLength) < s; ) f = t[u];
                    e = (s - (a = l - f.totalLength)) / (l - a) || 0;
                }
                return (
                    (r = f.samples),
                    (o = f.resolution),
                    (s = f.totalLength * e),
                    (a = (u = f.lookup.length ? f.lookup[e < 1 ? ~~(s / f.minLength) : f.lookup.length - 1] || 0 : Qi(r, s, e)) ? r[u - 1] : 0),
                    (l = r[u]) < s && ((a = l), (l = r[++u])),
                    (p = 1 - (c = (1 / o) * ((s - a) / (l - a) + (u % o)) || 0)),
                    (d = f[(u = 6 * ~~(u / o))]),
                    (h.x = Yi((c * c * (f[u + 6] - d) + 3 * p * (c * (f[u + 4] - d) + p * (f[u + 2] - d))) * c + d)),
                    (h.y = Yi((c * c * (f[u + 7] - (d = f[u + 1])) + 3 * p * (c * (f[u + 5] - d) + p * (f[u + 3] - d))) * c + d)),
                    n && (h.angle = f.totalLength ? ir(f, u, c >= 1 ? 1 - 1e-9 : c || 1e-9) : f.angle || 0),
                    h
                );
            }
            function cr(t, e, n, i, r, o, s) {
                for (var a, l, u, c, d, p = t.length; --p > -1; ) for (l = (a = t[p]).length, u = 0; u < l; u += 2) (c = a[u]), (d = a[u + 1]), (a[u] = c * e + d * i + o), (a[u + 1] = c * n + d * r + s);
                return (t._dirty = 1), t;
            }
            function dr(t, e, n, i, r, o, s, a, l) {
                if (t !== a || e !== l) {
                    (n = Hi(n)), (i = Hi(i));
                    var u = (r % 360) * Li,
                        c = ji(u),
                        d = Ni(u),
                        p = Math.PI,
                        f = 2 * p,
                        h = (t - a) / 2,
                        g = (e - l) / 2,
                        v = c * h + d * g,
                        m = -d * h + c * g,
                        y = v * v,
                        w = m * m,
                        x = y / (n * n) + w / (i * i);
                    x > 1 && ((n = Ii(x) * n), (i = Ii(x) * i));
                    var b = n * n,
                        T = i * i,
                        _ = (b * T - b * w - T * y) / (b * w + T * y);
                    _ < 0 && (_ = 0);
                    var k = (o === s ? -1 : 1) * Ii(_),
                        C = k * ((n * m) / i),
                        S = k * ((-i * v) / n),
                        A = (t + a) / 2 + (c * C - d * S),
                        E = (e + l) / 2 + (d * C + c * S),
                        O = (v - C) / n,
                        M = (m - S) / i,
                        P = (-v - C) / n,
                        $ = (-m - S) / i,
                        L = O * O + M * M,
                        D = (M < 0 ? -1 : 1) * Math.acos(O / Ii(L)),
                        N = (O * $ - M * P < 0 ? -1 : 1) * Math.acos((O * P + M * $) / Ii(L * (P * P + $ * $)));
                    isNaN(N) && (N = p), !s && N > 0 ? (N -= f) : s && N < 0 && (N += f), (D %= f), (N %= f);
                    var j,
                        H = Math.ceil(Hi(N) / (f / 4)),
                        I = [],
                        R = N / H,
                        B = ((4 / 3) * Ni(R / 2)) / (1 + ji(R / 2)),
                        z = c * n,
                        q = d * n,
                        F = d * -i,
                        W = c * i;
                    for (j = 0; j < H; j++) (v = ji((r = D + j * R))), (m = Ni(r)), (O = ji((r += R))), (M = Ni(r)), I.push(v - B * m, m + B * v, O + B * M, M - B * O, O, M);
                    for (j = 0; j < I.length; j += 2) (v = I[j]), (m = I[j + 1]), (I[j] = v * z + m * F + A), (I[j + 1] = v * q + m * W + E);
                    return (I[j - 2] = a), (I[j - 1] = l), I;
                }
            }
            function pr(t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    d,
                    p,
                    f,
                    h,
                    g,
                    v =
                        (t + "")
                            .replace(Pi, function (t) {
                                var e = +t;
                                return e < 1e-4 && e > -1e-4 ? 0 : e;
                            })
                            .match(Oi) || [],
                    m = [],
                    y = 0,
                    w = 0,
                    x = 2 / 3,
                    b = v.length,
                    T = 0,
                    _ = "ERROR: malformed path: " + t,
                    k = function (t, e, n, i) {
                        (c = (n - t) / 3), (d = (i - e) / 3), a.push(t + c, e + d, n - c, i - d, n, i);
                    };
                if (!t || !isNaN(v[0]) || isNaN(v[1])) return console.log(_), m;
                for (e = 0; e < b; e++)
                    if (((f = o), isNaN(v[e]) ? (s = (o = v[e].toUpperCase()) !== v[e]) : e--, (i = +v[e + 1]), (r = +v[e + 2]), s && ((i += y), (r += w)), e || ((l = i), (u = r)), "M" === o))
                        a && (a.length < 8 ? (m.length -= 1) : (T += a.length)), (y = l = i), (w = u = r), (a = [i, r]), m.push(a), (e += 2), (o = "L");
                    else if ("C" === o) a || (a = [0, 0]), s || (y = w = 0), a.push(i, r, y + 1 * v[e + 3], w + 1 * v[e + 4], (y += 1 * v[e + 5]), (w += 1 * v[e + 6])), (e += 6);
                    else if ("S" === o) (c = y), (d = w), ("C" !== f && "S" !== f) || ((c += y - a[a.length - 4]), (d += w - a[a.length - 3])), s || (y = w = 0), a.push(c, d, i, r, (y += 1 * v[e + 3]), (w += 1 * v[e + 4])), (e += 4);
                    else if ("Q" === o) (c = y + (i - y) * x), (d = w + (r - w) * x), s || (y = w = 0), (y += 1 * v[e + 3]), (w += 1 * v[e + 4]), a.push(c, d, y + (i - y) * x, w + (r - w) * x, y, w), (e += 4);
                    else if ("T" === o) (c = y - a[a.length - 4]), (d = w - a[a.length - 3]), a.push(y + c, w + d, i + (y + 1.5 * c - i) * x, r + (w + 1.5 * d - r) * x, (y = i), (w = r)), (e += 2);
                    else if ("H" === o) k(y, w, (y = i), w), (e += 1);
                    else if ("V" === o) k(y, w, y, (w = i + (s ? w - y : 0))), (e += 1);
                    else if ("L" === o || "Z" === o) "Z" === o && ((i = l), (r = u), (a.closed = !0)), ("L" === o || Hi(y - i) > 0.5 || Hi(w - r) > 0.5) && (k(y, w, i, r), "L" === o && (e += 2)), (y = i), (w = r);
                    else if ("A" === o) {
                        if (
                            ((h = v[e + 4]),
                            (g = v[e + 5]),
                            (c = v[e + 6]),
                            (d = v[e + 7]),
                            (n = 7),
                            h.length > 1 && (h.length < 3 ? ((d = c), (c = g), n--) : ((d = g), (c = h.substr(2)), (n -= 2)), (g = h.charAt(1)), (h = h.charAt(0))),
                            (p = dr(y, w, +v[e + 1], +v[e + 2], +v[e + 3], +h, +g, (s ? y : 0) + 1 * c, (s ? w : 0) + 1 * d)),
                            (e += n),
                            p)
                        )
                            for (n = 0; n < p.length; n++) a.push(p[n]);
                        (y = a[a.length - 2]), (w = a[a.length - 1]);
                    } else console.log(_);
                return (e = a.length) < 6 ? (m.pop(), (e = 0)) : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0), (m.totalPoints = T + e), m;
            }
            function fr(t, e) {
                void 0 === e && (e = 1);
                for (var n = t[0], i = 0, r = [n, i], o = 2; o < t.length; o += 2) r.push(n, i, t[o], (i = ((t[o] - n) * e) / 2), (n = t[o]), -i);
                return r;
            }
            function hr(t, e, n) {
                Hi(t[0] - t[2]) < 1e-4 && Hi(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    d,
                    p,
                    f,
                    h,
                    g,
                    v,
                    m = t.length - 2,
                    y = +t[0],
                    w = +t[1],
                    x = +t[2],
                    b = +t[3],
                    T = [y, w, y, w],
                    _ = x - y,
                    k = b - w,
                    C = Math.abs(t[m] - y) < 0.001 && Math.abs(t[m + 1] - w) < 0.001;
                for (isNaN(n) && (n = Math.PI / 10), C && (t.push(x, b), (x = y), (b = w), (y = t[m - 2]), (w = t[m - 1]), t.unshift(y, w), (m += 4)), e = e || 0 === e ? +e : 1, a = 2; a < m; a += 2)
                    (i = y),
                        (r = w),
                        (y = x),
                        (w = b),
                        (x = +t[a + 2]),
                        (b = +t[a + 3]),
                        (y === x && w === b) ||
                            ((h = (l = _) * l + (c = k) * c),
                            (g = (_ = x - y) * _ + (k = b - w) * k),
                            (v = (u = x - i) * u + (d = b - r) * d),
                            (f = ((o = Math.acos((h + g - v) / Ii(4 * h * g))) / Math.PI) * e),
                            (p = Ii(h) * f),
                            (f *= Ii(g)),
                            (y === i && w === r) ||
                                (o > n
                                    ? ((s = Ri(d, u)), T.push(Yi(y - ji(s) * p), Yi(w - Ni(s) * p), Yi(y), Yi(w), Yi(y + ji(s) * f), Yi(w + Ni(s) * f)))
                                    : ((s = Ri(c, l)), T.push(Yi(y - ji(s) * p), Yi(w - Ni(s) * p)), (s = Ri(k, _)), T.push(Yi(y), Yi(w), Yi(y + ji(s) * f), Yi(w + Ni(s) * f)))));
                return y !== x || w !== b || T.length < 4 ? T.push(Yi(x), Yi(b), Yi(x), Yi(b)) : (T.length -= 2), C && (T.splice(0, 6), (T.length = T.length - 6)), T;
            }
            function gr(t) {
                qi(t[0]) && (t = [t]);
                var e,
                    n,
                    i,
                    r,
                    o = "",
                    s = t.length;
                for (n = 0; n < s; n++) {
                    for (r = t[n], o += "M" + Yi(r[0]) + "," + Yi(r[1]) + " C", e = r.length, i = 2; i < e; i++) o += Yi(r[i++]) + "," + Yi(r[i++]) + " " + Yi(r[i++]) + "," + Yi(r[i++]) + " " + Yi(r[i++]) + "," + Yi(r[i]) + " ";
                    r.closed && (o += "z");
                }
                return o;
            }
            var vr,
                mr,
                yr,
                wr,
                xr,
                br,
                Tr,
                _r,
                kr,
                Cr = "transform",
                Sr = Cr + "Origin",
                Ar = function (t) {
                    var e = t.ownerDocument || t;
                    !(Cr in t.style) && "msTransform" in t.style && (Sr = (Cr = "msTransform") + "Origin");
                    for (; e.parentNode && (e = e.parentNode); );
                    if (((mr = window), (Tr = new Nr()), e)) {
                        (vr = e), (yr = e.documentElement), (wr = e.body), ((_r = vr.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none");
                        var n = e.createElement("div"),
                            i = e.createElement("div");
                        wr.appendChild(n), n.appendChild(i), (n.style.position = "static"), (n.style[Cr] = "translate3d(0,0,1px)"), (kr = i.offsetParent !== n), wr.removeChild(n);
                    }
                    return e;
                },
                Er = [],
                Or = [],
                Mr = function (t) {
                    return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null);
                },
                Pr = function t(e) {
                    return "fixed" === mr.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0);
                },
                $r = function t(e, n) {
                    if (e.parentNode && (vr || Ar(e))) {
                        var i = Mr(e),
                            r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                            o = i ? (n ? "rect" : "g") : "div",
                            s = 2 !== n ? 0 : 100,
                            a = 3 === n ? 100 : 0,
                            l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                            u = vr.createElementNS ? vr.createElementNS(r.replace(/^https/, "http"), o) : vr.createElement(o);
                        return (
                            n &&
                                (i
                                    ? (br || (br = t(e)), u.setAttribute("width", 0.01), u.setAttribute("height", 0.01), u.setAttribute("transform", "translate(" + s + "," + a + ")"), br.appendChild(u))
                                    : (xr || ((xr = t(e)).style.cssText = l), (u.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px"), xr.appendChild(u))),
                            u
                        );
                    }
                    throw "Need document and parent.";
                },
                Lr = function (t, e) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l = Mr(t),
                        u = t === l,
                        c = l ? Er : Or,
                        d = t.parentNode;
                    if (t === mr) return t;
                    if ((c.length || c.push($r(t, 1), $r(t, 2), $r(t, 3)), (n = l ? br : xr), l))
                        u
                            ? ((r = (function (t) {
                                  var e,
                                      n = t.getCTM();
                                  return (
                                      n || ((e = t.style[Cr]), (t.style[Cr] = "none"), t.appendChild(_r), (n = _r.getCTM()), t.removeChild(_r), e ? (t.style[Cr] = e) : t.style.removeProperty(Cr.replace(/([A-Z])/g, "-$1").toLowerCase())),
                                      n || Tr.clone()
                                  );
                              })(t)),
                              (o = -r.e / r.a),
                              (s = -r.f / r.d),
                              (i = Tr))
                            : ((r = t.getBBox()),
                              (i = (i = t.transform ? t.transform.baseVal : {}).numberOfItems
                                  ? i.numberOfItems > 1
                                      ? (function (t) {
                                            for (var e = new Nr(), n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                                            return e;
                                        })(i)
                                      : i.getItem(0).matrix
                                  : Tr),
                              (o = i.a * r.x + i.c * r.y),
                              (s = i.b * r.x + i.d * r.y)),
                            e && "g" === t.tagName.toLowerCase() && (o = s = 0),
                            (u ? l : d).appendChild(n),
                            n.setAttribute("transform", "matrix(" + i.a + "," + i.b + "," + i.c + "," + i.d + "," + (i.e + o) + "," + (i.f + s) + ")");
                    else {
                        if (((o = s = 0), kr)) for (i = t.offsetParent, r = t; r && (r = r.parentNode) && r !== i && r.parentNode; ) (mr.getComputedStyle(r)[Cr] + "").length > 4 && ((o = r.offsetLeft), (s = r.offsetTop), (r = 0));
                        if ("absolute" !== (a = mr.getComputedStyle(t)).position && "fixed" !== a.position) for (i = t.offsetParent; d && d !== i; ) (o += d.scrollLeft || 0), (s += d.scrollTop || 0), (d = d.parentNode);
                        ((r = n.style).top = t.offsetTop - s + "px"), (r.left = t.offsetLeft - o + "px"), (r[Cr] = a[Cr]), (r[Sr] = a[Sr]), (r.position = "fixed" === a.position ? "fixed" : "absolute"), t.parentNode.appendChild(n);
                    }
                    return n;
                },
                Dr = function (t, e, n, i, r, o, s) {
                    return (t.a = e), (t.b = n), (t.c = i), (t.d = r), (t.e = o), (t.f = s), t;
                },
                Nr = (function () {
                    function t(t, e, n, i, r, o) {
                        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === o && (o = 0), Dr(this, t, e, n, i, r, o);
                    }
                    var e = t.prototype;
                    return (
                        (e.inverse = function () {
                            var t = this.a,
                                e = this.b,
                                n = this.c,
                                i = this.d,
                                r = this.e,
                                o = this.f,
                                s = t * i - e * n || 1e-10;
                            return Dr(this, i / s, -e / s, -n / s, t / s, (n * o - i * r) / s, -(t * o - e * r) / s);
                        }),
                        (e.multiply = function (t) {
                            var e = this.a,
                                n = this.b,
                                i = this.c,
                                r = this.d,
                                o = this.e,
                                s = this.f,
                                a = t.a,
                                l = t.c,
                                u = t.b,
                                c = t.d,
                                d = t.e,
                                p = t.f;
                            return Dr(this, a * e + u * i, a * n + u * r, l * e + c * i, l * n + c * r, o + d * e + p * i, s + d * n + p * r);
                        }),
                        (e.clone = function () {
                            return new t(this.a, this.b, this.c, this.d, this.e, this.f);
                        }),
                        (e.equals = function (t) {
                            var e = this.a,
                                n = this.b,
                                i = this.c,
                                r = this.d,
                                o = this.e,
                                s = this.f;
                            return e === t.a && n === t.b && i === t.c && r === t.d && o === t.e && s === t.f;
                        }),
                        (e.apply = function (t, e) {
                            void 0 === e && (e = {});
                            var n = t.x,
                                i = t.y,
                                r = this.a,
                                o = this.b,
                                s = this.c,
                                a = this.d,
                                l = this.e,
                                u = this.f;
                            return (e.x = n * r + i * s + l || 0), (e.y = n * o + i * a + u || 0), e;
                        }),
                        t
                    );
                })();
            function jr(t, e, n, i) {
                if (!t || !t.parentNode || (vr || Ar(t)).documentElement === t) return new Nr();
                var r = (function (t) {
                        for (var e, n; t && t !== wr; )
                            (n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && ((n.scaleX = n.scaleY = 1e-4), n.renderTransform(1, n), e ? e.push(n) : (e = [n])), (t = t.parentNode);
                        return e;
                    })(t),
                    o = Mr(t) ? Er : Or,
                    s = Lr(t, n),
                    a = o[0].getBoundingClientRect(),
                    l = o[1].getBoundingClientRect(),
                    u = o[2].getBoundingClientRect(),
                    c = s.parentNode,
                    d = !i && Pr(t),
                    p = new Nr(
                        (l.left - a.left) / 100,
                        (l.top - a.top) / 100,
                        (u.left - a.left) / 100,
                        (u.top - a.top) / 100,
                        a.left + (d ? 0 : mr.pageXOffset || vr.scrollLeft || yr.scrollLeft || wr.scrollLeft || 0),
                        a.top + (d ? 0 : mr.pageYOffset || vr.scrollTop || yr.scrollTop || wr.scrollTop || 0)
                    );
                if ((c.removeChild(s), r)) for (a = r.length; a--; ) ((l = r[a]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
                return e ? p.inverse() : p;
            }
            var Hr,
                Ir,
                Rr,
                Br,
                zr = "x,translateX,left,marginLeft,xPercent".split(","),
                qr = "y,translateY,top,marginTop,yPercent".split(","),
                Fr = Math.PI / 180,
                Wr = function (t, e, n, i) {
                    for (var r = e.length, o = 2 === i ? 0 : i, s = 0; s < r; s++) (t[o] = parseFloat(e[s][n])), 2 === i && (t[o + 1] = 0), (o += 2);
                    return t;
                },
                Xr = function (t, e, n) {
                    return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
                },
                Ur = function (t) {
                    var e,
                        n = t[0],
                        i = t[1];
                    for (e = 2; e < t.length; e += 2) (n = t[e] += n), (i = t[e + 1] += i);
                },
                Yr = function (t, e, n, i, r, o, s, a, l) {
                    "cubic" === s.type ? (e = [e]) : (!1 !== s.fromCurrent && e.unshift(Xr(n, i, a), r ? Xr(n, r, l) : 0), s.relative && Ur(e), (e = [(r ? hr : fr)(e, s.curviness)]));
                    return (e = o(Kr(e, n, s))), Zr(t, n, i, e, "x", a), r && Zr(t, n, r, e, "y", l), sr(e, s.resolution || (0 === s.curviness ? 20 : 12));
                },
                Vr = function (t) {
                    return t;
                },
                Gr = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
                Qr = function (t, e, n) {
                    var i,
                        r = jr(t),
                        o = 0,
                        s = 0;
                    return (
                        "svg" === (t.tagName + "").toLowerCase() ? (i = t.viewBox.baseVal).width || (i = { width: +t.getAttribute("width"), height: +t.getAttribute("height") }) : (i = e && t.getBBox && t.getBBox()),
                        e && "auto" !== e && ((o = e.push ? e[0] * (i ? i.width : t.offsetWidth || 0) : e.x), (s = e.push ? e[1] * (i ? i.height : t.offsetHeight || 0) : e.y)),
                        n.apply(o || s ? r.apply({ x: o, y: s }) : { x: r.e, y: r.f })
                    );
                },
                Jr = function (t, e, n, i) {
                    var r,
                        o = jr(t.parentNode, !0, !0),
                        s = o.clone().multiply(jr(e)),
                        a = Qr(t, n, o),
                        l = Qr(e, i, o),
                        u = l.x,
                        c = l.y;
                    return (
                        (s.e = s.f = 0),
                        "auto" === i && e.getTotalLength && "path" === e.tagName.toLowerCase() && ((r = e.getAttribute("d").match(Gr) || []), (u += (r = s.apply({ x: +r[0], y: +r[1] })).x), (c += r.y)),
                        (r || (e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement)) && ((u -= (r = s.apply(e.getBBox())).x), (c -= r.y)),
                        (s.e = u - a.x),
                        (s.f = c - a.y),
                        s
                    );
                },
                Kr = function (t, e, n) {
                    var i,
                        r,
                        o,
                        s = n.align,
                        a = n.matrix,
                        l = n.offsetX,
                        u = n.offsetY,
                        c = n.alignOrigin,
                        d = t[0][0],
                        p = t[0][1],
                        f = Xr(e, "x"),
                        h = Xr(e, "y");
                    return t && t.length
                        ? (s &&
                              ("self" === s || (i = Br(s)[0] || e) === e
                                  ? cr(t, 1, 0, 0, 1, f - d, h - p)
                                  : (c && !1 !== c[2] ? Hr.set(e, { transformOrigin: 100 * c[0] + "% " + 100 * c[1] + "%" }) : (c = [Xr(e, "xPercent") / -100, Xr(e, "yPercent") / -100]),
                                    (o = (r = Jr(e, i, c, "auto")).apply({ x: d, y: p })),
                                    cr(t, r.a, r.b, r.c, r.d, f + r.e - (o.x - r.e), h + r.f - (o.y - r.f)))),
                          a ? cr(t, a.a, a.b, a.c, a.d, a.e, a.f) : (l || u) && cr(t, 1, 0, 0, 1, l || 0, u || 0),
                          t)
                        : Zi("M0,0L0,0");
                },
                Zr = function (t, e, n, i, r, o) {
                    var s = e._gsap,
                        a = s.harness,
                        l = a && a.aliases && a.aliases[n],
                        u = l && l.indexOf(",") < 0 ? l : n,
                        c = (t._pt = new Ir(t._pt, e, u, 0, 0, Vr, 0, s.set(e, u, t)));
                    (c.u = Rr(s.get(e, u, o)) || 0), (c.path = i), (c.pp = r), t._props.push(u);
                },
                to = {
                    version: "3.8.0",
                    name: "motionPath",
                    register: function (t, e, n) {
                        (Rr = (Hr = t).utils.getUnit), (Br = Hr.utils.toArray), (Ir = n);
                    },
                    init: function (t, e) {
                        if (!Hr) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                        ("object" == typeof e && !e.style && e.path) || (e = { path: e });
                        var n,
                            i,
                            r,
                            o,
                            s = [],
                            a = e,
                            l = a.path,
                            u = a.autoRotate,
                            c = a.unitX,
                            d = a.unitY,
                            p = a.x,
                            f = a.y,
                            h = l[0],
                            g =
                                ((r = e.start),
                                (o = "end" in e ? e.end : 1),
                                function (t) {
                                    return r || 1 !== o ? rr(t, r, o) : t;
                                });
                        if (
                            ((this.rawPaths = s),
                            (this.target = t),
                            (this.rotate = u || 0 === u) &&
                                ((this.rOffset = parseFloat(u) || 0),
                                (this.radians = !!e.useRadians),
                                (this.rProp = e.rotation || "rotation"),
                                (this.rSet = t._gsap.set(t, this.rProp, this)),
                                (this.ru = Rr(t._gsap.get(t, this.rProp)) || 0)),
                            Array.isArray(l) && !("closed" in l) && "number" != typeof h)
                        ) {
                            for (i in h) !p && ~zr.indexOf(i) ? (p = i) : !f && ~qr.indexOf(i) && (f = i);
                            for (i in (p && f ? s.push(Yr(this, Wr(Wr([], l, p, 0), l, f, 1), t, p, f, g, e, c || Rr(l[0][p]), d || Rr(l[0][f]))) : (p = f = 0), h))
                                i !== p && i !== f && s.push(Yr(this, Wr([], l, i, 2), t, i, 0, g, e, Rr(l[0][i])));
                        } else sr((n = g(Kr(Zi(e.path), t, e))), e.resolution), s.push(n), Zr(this, t, e.x || "x", n, "x", e.unitX || "px"), Zr(this, t, e.y || "y", n, "y", e.unitY || "px");
                    },
                    render: function (t, e) {
                        var n = e.rawPaths,
                            i = n.length,
                            r = e._pt;
                        for (t > 1 ? (t = 1) : t < 0 && (t = 0); i--; ) ur(n[i], t, !i && e.rotate, n[i]);
                        for (; r; ) r.set(r.t, r.p, r.path[r.pp] + r.u, r.d, t), (r = r._next);
                        e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? Fr : 1) + e.rOffset + e.ru, e, t);
                    },
                    getLength: function (t) {
                        return sr(Zi(t)).totalLength;
                    },
                    sliceRawPath: rr,
                    getRawPath: Zi,
                    pointsToSegment: hr,
                    stringToRawPath: pr,
                    rawPathToString: gr,
                    transformRawPath: cr,
                    getGlobalMatrix: jr,
                    getPositionOnPath: ur,
                    cacheRawPathMeasurements: sr,
                    convertToPath: function (t, e) {
                        return Br(t).map(function (t) {
                            return nr(t, !1 !== e);
                        });
                    },
                    convertCoordinates: function (t, e, n) {
                        var i = jr(e, !0, !0).multiply(jr(t));
                        return n ? i.apply(n) : i;
                    },
                    getAlignMatrix: Jr,
                    getRelativePosition: function (t, e, n, i) {
                        var r = Jr(t, e, n, i);
                        return { x: r.e, y: r.f };
                    },
                    arrayToRawPath: function (t, e) {
                        var n = Wr(Wr([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
                        return e.relative && Ur(n), ["cubic" === e.type ? n : hr(n, e.curviness)];
                    },
                };
            (Hr || ("undefined" != typeof window && (Hr = window.gsap) && Hr.registerPlugin && Hr)) && Hr.registerPlugin(to);
            var eo,
                no,
                io,
                ro,
                oo,
                so,
                ao,
                lo = function () {
                    return "undefined" != typeof window;
                },
                uo = function () {
                    return eo || (lo() && (eo = window.gsap) && eo.registerPlugin && eo);
                },
                co = function (t) {
                    return "string" == typeof t;
                },
                po = function (t) {
                    return "function" == typeof t;
                },
                fo = function (t, e) {
                    var n = "x" === e ? "Width" : "Height",
                        i = "scroll" + n,
                        r = "client" + n;
                    return t === io || t === ro || t === oo ? Math.max(ro[i], oo[i]) - (io["inner" + n] || ro[r] || oo[r]) : t[i] - t["offset" + n];
                },
                ho = function (t, e) {
                    var n = "scroll" + ("x" === e ? "Left" : "Top");
                    return (
                        t === io && (null != t.pageXOffset ? (n = "page" + e.toUpperCase() + "Offset") : (t = null != ro[n] ? ro : oo)),
                        function () {
                            return t[n];
                        }
                    );
                },
                go = function (t, e) {
                    if (!(t = so(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 };
                    var n = t.getBoundingClientRect(),
                        i = !e || e === io || e === oo,
                        r = i ? { top: ro.clientTop - (io.pageYOffset || ro.scrollTop || oo.scrollTop || 0), left: ro.clientLeft - (io.pageXOffset || ro.scrollLeft || oo.scrollLeft || 0) } : e.getBoundingClientRect(),
                        o = { x: n.left - r.left, y: n.top - r.top };
                    return !i && e && ((o.x += ho(e, "x")()), (o.y += ho(e, "y")())), o;
                },
                vo = function (t, e, n, i, r) {
                    return isNaN(t) || "object" == typeof t
                        ? co(t) && "=" === t.charAt(1)
                            ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + i - r
                            : "max" === t
                            ? fo(e, n) - r
                            : Math.min(fo(e, n), go(t, e)[n] - r)
                        : parseFloat(t) - r;
                },
                mo = function () {
                    (eo = uo()), lo() && eo && document.body && ((io = window), (oo = document.body), (ro = document.documentElement), (so = eo.utils.toArray), eo.config({ autoKillThreshold: 7 }), (ao = eo.config()), (no = 1));
                },
                yo = {
                    version: "3.8.0",
                    name: "scrollTo",
                    rawVars: 1,
                    register: function (t) {
                        (eo = t), mo();
                    },
                    init: function (t, e, n, i, r) {
                        no || mo();
                        var o = this,
                            s = eo.getProperty(t, "scrollSnapType");
                        (o.isWin = t === io),
                            (o.target = t),
                            (o.tween = n),
                            (e = (function (t, e, n, i) {
                                if ((po(t) && (t = t(e, n, i)), "object" != typeof t)) return co(t) && "max" !== t && "=" !== t.charAt(1) ? { x: t, y: t } : { y: t };
                                if (t.nodeType) return { y: t, x: t };
                                var r,
                                    o = {};
                                for (r in t) o[r] = "onAutoKill" !== r && po(t[r]) ? t[r](e, n, i) : t[r];
                                return o;
                            })(e, i, t, r)),
                            (o.vars = e),
                            (o.autoKill = !!e.autoKill),
                            (o.getX = ho(t, "x")),
                            (o.getY = ho(t, "y")),
                            (o.x = o.xPrev = o.getX()),
                            (o.y = o.yPrev = o.getY()),
                            s && "none" !== s && ((o.snap = 1), (o.snapInline = t.style.scrollSnapType), (t.style.scrollSnapType = "none")),
                            null != e.x ? (o.add(o, "x", o.x, vo(e.x, t, "x", o.x, e.offsetX || 0), i, r), o._props.push("scrollTo_x")) : (o.skipX = 1),
                            null != e.y ? (o.add(o, "y", o.y, vo(e.y, t, "y", o.y, e.offsetY || 0), i, r), o._props.push("scrollTo_y")) : (o.skipY = 1);
                    },
                    render: function (t, e) {
                        for (var n, i, r, o, s, a = e._pt, l = e.target, u = e.tween, c = e.autoKill, d = e.xPrev, p = e.yPrev, f = e.isWin, h = e.snap, g = e.snapInline; a; ) a.r(t, a.d), (a = a._next);
                        (n = f || !e.skipX ? e.getX() : d),
                            (r = (i = f || !e.skipY ? e.getY() : p) - p),
                            (o = n - d),
                            (s = ao.autoKillThreshold),
                            e.x < 0 && (e.x = 0),
                            e.y < 0 && (e.y = 0),
                            c &&
                                (!e.skipX && (o > s || o < -s) && n < fo(l, "x") && (e.skipX = 1),
                                !e.skipY && (r > s || r < -s) && i < fo(l, "y") && (e.skipY = 1),
                                e.skipX && e.skipY && (u.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(u, e.vars.onAutoKillParams || []))),
                            f ? io.scrollTo(e.skipX ? n : e.x, e.skipY ? i : e.y) : (e.skipY || (l.scrollTop = e.y), e.skipX || (l.scrollLeft = e.x)),
                            !h ||
                                (1 !== t && 0 !== t) ||
                                ((i = l.scrollTop), (n = l.scrollLeft), g ? (l.style.scrollSnapType = g) : l.style.removeProperty("scroll-snap-type"), (l.scrollTop = i + 1), (l.scrollLeft = n + 1), (l.scrollTop = i), (l.scrollLeft = n)),
                            (e.xPrev = e.x),
                            (e.yPrev = e.y);
                    },
                    kill: function (t) {
                        var e = "scrollTo" === t;
                        (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1);
                    },
                };
            (yo.max = fo), (yo.getOffset = go), (yo.buildGetter = ho), uo() && eo.registerPlugin(yo);
            var wo,
                xo,
                bo,
                To,
                _o,
                ko,
                Co,
                So,
                Ao,
                Eo,
                Oo,
                Mo,
                Po,
                $o,
                Lo,
                Do,
                No,
                jo,
                Ho,
                Io,
                Ro,
                Bo,
                zo,
                qo,
                Fo,
                Wo,
                Xo,
                Uo,
                Yo = 1,
                Vo = [],
                Go = [],
                Qo = Date.now,
                Jo = Qo(),
                Ko = 0,
                Zo = 1,
                ts = function (t) {
                    return t;
                },
                es = function (t) {
                    return Oo(t)[0] || (ds(t) ? console.warn("Element not found:", t) : null);
                },
                ns = function (t) {
                    return Math.round(1e5 * t) / 1e5 || 0;
                },
                is = function () {
                    return "undefined" != typeof window;
                },
                rs = function () {
                    return wo || (is() && (wo = window.gsap) && wo.registerPlugin && wo);
                },
                os = function (t) {
                    return !!~Co.indexOf(t);
                },
                ss = function (t, e) {
                    return ~Vo.indexOf(t) && Vo[Vo.indexOf(t) + 1][e];
                },
                as = function (t, e) {
                    var n = e.s,
                        i = e.sc,
                        r = Go.indexOf(t),
                        o = i === Is.sc ? 1 : 2;
                    return (
                        !~r && (r = Go.push(t) - 1),
                        Go[r + o] ||
                            (Go[r + o] =
                                ss(t, n) ||
                                (os(t)
                                    ? i
                                    : function (e) {
                                          return arguments.length ? (t[n] = e) : t[n];
                                      }))
                    );
                },
                ls = function (t) {
                    return (
                        ss(t, "getBoundingClientRect") ||
                        (os(t)
                            ? function () {
                                  return (Ca.width = bo.innerWidth), (Ca.height = bo.innerHeight), Ca;
                              }
                            : function () {
                                  return zs(t);
                              })
                    );
                },
                us = function (t, e) {
                    var n = e.s,
                        i = e.d2,
                        r = e.d,
                        o = e.a;
                    return (n = "scroll" + i) && (o = ss(t, n)) ? o() - ls(t)()[r] : os(t) ? (ko[n] || _o[n]) - (bo["inner" + i] || _o["client" + i] || ko["client" + i]) : t[n] - t["offset" + i];
                },
                cs = function (t, e) {
                    for (var n = 0; n < Ro.length; n += 3) (!e || ~e.indexOf(Ro[n + 1])) && t(Ro[n], Ro[n + 1], Ro[n + 2]);
                },
                ds = function (t) {
                    return "string" == typeof t;
                },
                ps = function (t) {
                    return "function" == typeof t;
                },
                fs = function (t) {
                    return "number" == typeof t;
                },
                hs = function (t) {
                    return "object" == typeof t;
                },
                gs = function (t) {
                    return ps(t) && t();
                },
                vs = function (t, e) {
                    return function () {
                        var n = gs(t),
                            i = gs(e);
                        return function () {
                            gs(n), gs(i);
                        };
                    };
                },
                ms = function (t, e, n) {
                    return t && t.progress(e ? 0 : 1) && n && t.pause();
                },
                ys = function (t, e) {
                    var n = e(t);
                    n && n.totalTime && (t.callbackAnimation = n);
                },
                ws = Math.abs,
                xs = "scrollLeft",
                bs = "scrollTop",
                Ts = "left",
                _s = "top",
                ks = "right",
                Cs = "bottom",
                Ss = "width",
                As = "height",
                Es = "Right",
                Os = "Left",
                Ms = "Top",
                Ps = "Bottom",
                $s = "padding",
                Ls = "margin",
                Ds = "Width",
                Ns = "Height",
                js = "px",
                Hs = {
                    s: xs,
                    p: Ts,
                    p2: Os,
                    os: ks,
                    os2: Es,
                    d: Ss,
                    d2: Ds,
                    a: "x",
                    sc: function (t) {
                        return arguments.length ? bo.scrollTo(t, Is.sc()) : bo.pageXOffset || To.scrollLeft || _o.scrollLeft || ko.scrollLeft || 0;
                    },
                },
                Is = {
                    s: bs,
                    p: _s,
                    p2: Ms,
                    os: Cs,
                    os2: Ps,
                    d: As,
                    d2: Ns,
                    a: "y",
                    op: Hs,
                    sc: function (t) {
                        return arguments.length ? bo.scrollTo(Hs.sc(), t) : bo.pageYOffset || To.scrollTop || _o.scrollTop || ko.scrollTop || 0;
                    },
                },
                Rs = function (t) {
                    return bo.getComputedStyle(t);
                },
                Bs = function (t, e) {
                    for (var n in e) n in t || (t[n] = e[n]);
                    return t;
                },
                zs = function (t, e) {
                    var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== Rs(t)[No] && wo.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                        i = t.getBoundingClientRect();
                    return n && n.progress(0).kill(), i;
                },
                qs = function (t, e) {
                    var n = e.d2;
                    return t["offset" + n] || t["client" + n] || 0;
                },
                Fs = function (t) {
                    var e,
                        n = [],
                        i = t.labels,
                        r = t.duration();
                    for (e in i) n.push(i[e] / r);
                    return n;
                },
                Ws = function (t) {
                    var e = wo.utils.snap(t),
                        n =
                            Array.isArray(t) &&
                            t.slice(0).sort(function (t, e) {
                                return t - e;
                            });
                    return n
                        ? function (t, i) {
                              var r;
                              if (!i) return e(t);
                              if (i > 0) {
                                  for (t -= 1e-4, r = 0; r < n.length; r++) if (n[r] >= t) return n[r];
                                  return n[r - 1];
                              }
                              for (r = n.length, t += 1e-4; r--; ) if (n[r] <= t) return n[r];
                              return n[0];
                          }
                        : function (n, i) {
                              var r = e(n);
                              return !i || Math.abs(r - n) < 0.001 || r - n < 0 == i < 0 ? r : e(i < 0 ? n - t : n + t);
                          };
                },
                Xs = function (t, e, n, i) {
                    return n.split(",").forEach(function (n) {
                        return t(e, n, i);
                    });
                },
                Us = function (t, e, n) {
                    return t.addEventListener(e, n, { passive: !0 });
                },
                Ys = function (t, e, n) {
                    return t.removeEventListener(e, n);
                },
                Vs = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
                Gs = { toggleActions: "play", anticipatePin: 0 },
                Qs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
                Js = function (t, e) {
                    if (ds(t)) {
                        var n = t.indexOf("="),
                            i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
                        ~n && (t.indexOf("%") > n && (i *= e / 100), (t = t.substr(0, n - 1))), (t = i + (t in Qs ? Qs[t] * e : ~t.indexOf("%") ? (parseFloat(t) * e) / 100 : parseFloat(t) || 0));
                    }
                    return t;
                },
                Ks = function (t, e, n, i, r, o, s, a) {
                    var l = r.startColor,
                        u = r.endColor,
                        c = r.fontSize,
                        d = r.indent,
                        p = r.fontWeight,
                        f = To.createElement("div"),
                        h = os(n) || "fixed" === ss(n, "pinType"),
                        g = -1 !== t.indexOf("scroller"),
                        v = h ? ko : n,
                        m = -1 !== t.indexOf("start"),
                        y = m ? l : u,
                        w =
                            "border-color:" +
                            y +
                            ";font-size:" +
                            c +
                            ";color:" +
                            y +
                            ";font-weight:" +
                            p +
                            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return (
                        (w += "position:" + ((g || a) && h ? "fixed;" : "absolute;")),
                        (g || a || !h) && (w += (i === Is ? ks : Cs) + ":" + (o + parseFloat(d)) + "px;"),
                        s && (w += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
                        (f._isStart = m),
                        f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
                        (f.style.cssText = w),
                        (f.innerText = e || 0 === e ? t + "-" + e : t),
                        v.children[0] ? v.insertBefore(f, v.children[0]) : v.appendChild(f),
                        (f._offset = f["offset" + i.op.d2]),
                        Zs(f, 0, i, m),
                        f
                    );
                },
                Zs = function (t, e, n, i) {
                    var r = { display: "block" },
                        o = n[i ? "os2" : "p2"],
                        s = n[i ? "p2" : "os2"];
                    (t._isFlipped = i), (r[n.a + "Percent"] = i ? -100 : 0), (r[n.a] = i ? "1px" : 0), (r["border" + o + Ds] = 1), (r["border" + s + Ds] = 0), (r[n.p] = e + "px"), wo.set(t, r);
                },
                ta = [],
                ea = {},
                na = function () {
                    return Qo() - Ko > 20 && ya();
                },
                ia = function () {
                    var t = Qo();
                    Ko !== t ? (ya(), Ko || ca("scrollStart"), (Ko = t)) : Eo || (Eo = Ao(ya));
                },
                ra = function () {
                    return !Lo && !qo && !To.fullscreenElement && So.restart(!0);
                },
                oa = {},
                sa = [],
                aa = [],
                la = function (t) {
                    var e,
                        n = wo.ticker.frame,
                        i = [],
                        r = 0;
                    if (Xo !== n || Yo) {
                        for (fa(); r < aa.length; r += 4) (e = bo.matchMedia(aa[r]).matches) !== aa[r + 3] && ((aa[r + 3] = e), e ? i.push(r) : fa(1, aa[r]) || (ps(aa[r + 2]) && aa[r + 2]()));
                        for (pa(), r = 0; r < i.length; r++) (e = i[r]), (Wo = aa[e]), (aa[e + 2] = aa[e + 1](t));
                        (Wo = 0), xo && ga(0, 1), (Xo = n), ca("matchMedia");
                    }
                },
                ua = function t() {
                    return Ys(Ma, "scrollEnd", t) || ga(!0);
                },
                ca = function (t) {
                    return (
                        (oa[t] &&
                            oa[t].map(function (t) {
                                return t();
                            })) ||
                        sa
                    );
                },
                da = [],
                pa = function (t) {
                    for (var e = 0; e < da.length; e += 5) (t && da[e + 4] !== t) || ((da[e].style.cssText = da[e + 1]), da[e].getBBox && da[e].setAttribute("transform", da[e + 2] || ""), (da[e + 3].uncache = 1));
                },
                fa = function (t, e) {
                    var n;
                    for (jo = 0; jo < ta.length; jo++) (n = ta[jo]), (e && n.media !== e) || (t ? n.kill(1) : n.revert());
                    e && pa(e), e || ca("revert");
                },
                ha = function () {
                    return Go.forEach(function (t) {
                        return "function" == typeof t && (t.rec = 0);
                    });
                },
                ga = function (t, e) {
                    if (!Ko || t) {
                        Uo = !0;
                        var n = ca("refreshInit");
                        Bo && Ma.sort(),
                            e || fa(),
                            ta.forEach(function (t) {
                                return t.refresh();
                            }),
                            n.forEach(function (t) {
                                return t && t.render && t.render(-1);
                            }),
                            ha(),
                            So.pause(),
                            (Uo = !1),
                            ca("refresh");
                    } else Us(Ma, "scrollEnd", ua);
                },
                va = 0,
                ma = 1,
                ya = function () {
                    if (!Uo) {
                        var t = ta.length,
                            e = Qo(),
                            n = e - Jo >= 50,
                            i = t && ta[0].scroll();
                        if (((ma = va > i ? -1 : 1), (va = i), n && (Ko && !Do && e - Ko > 200 && ((Ko = 0), ca("scrollEnd")), (Po = Jo), (Jo = e)), ma < 0)) {
                            for (jo = t; jo-- > 0; ) ta[jo] && ta[jo].update(0, n);
                            ma = 1;
                        } else for (jo = 0; jo < t; jo++) ta[jo] && ta[jo].update(0, n);
                        Eo = 0;
                    }
                },
                wa = [
                    Ts,
                    _s,
                    Cs,
                    ks,
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
                xa = wa.concat([Ss, As, "boxSizing", "maxWidth", "maxHeight", "position", Ls, $s, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
                ba = function (t, e, n, i) {
                    if (t.parentNode !== e) {
                        for (var r, o = wa.length, s = e.style, a = t.style; o--; ) s[(r = wa[o])] = n[r];
                        (s.position = "absolute" === n.position ? "absolute" : "relative"),
                            "inline" === n.display && (s.display = "inline-block"),
                            (a.bottom = a.right = "auto"),
                            (s.overflow = "visible"),
                            (s.boxSizing = "border-box"),
                            (s.width = qs(t, Hs) + js),
                            (s.height = qs(t, Is) + js),
                            (s.padding = a.margin = a.top = a.left = "0"),
                            _a(i),
                            (a.width = a.maxWidth = n.width),
                            (a.height = a.maxHeight = n.height),
                            (a.padding = n.padding),
                            t.parentNode.insertBefore(e, t),
                            e.appendChild(t);
                    }
                },
                Ta = /([A-Z])/g,
                _a = function (t) {
                    if (t) {
                        var e,
                            n,
                            i = t.t.style,
                            r = t.length,
                            o = 0;
                        for ((t.t._gsap || wo.core.getCache(t.t)).uncache = 1; o < r; o += 2) (n = t[o + 1]), (e = t[o]), n ? (i[e] = n) : i[e] && i.removeProperty(e.replace(Ta, "-$1").toLowerCase());
                    }
                },
                ka = function (t) {
                    for (var e = xa.length, n = t.style, i = [], r = 0; r < e; r++) i.push(xa[r], n[xa[r]]);
                    return (i.t = t), i;
                },
                Ca = { left: 0, top: 0 },
                Sa = function (t, e, n, i, r, o, s, a, l, u, c, d, p) {
                    ps(t) && (t = t(a)), ds(t) && "max" === t.substr(0, 3) && (t = d + ("=" === t.charAt(4) ? Js("0" + t.substr(3), n) : 0));
                    var f,
                        h,
                        g,
                        v = p ? p.time() : 0;
                    if ((p && p.seek(0), fs(t))) s && Zs(s, n, i, !0);
                    else {
                        ps(e) && (e = e(a));
                        var m,
                            y,
                            w,
                            x,
                            b = t.split(" ");
                        (g = es(e) || ko),
                            ((m = zs(g) || {}) && (m.left || m.top)) || "none" !== Rs(g).display || ((x = g.style.display), (g.style.display = "block"), (m = zs(g)), x ? (g.style.display = x) : g.style.removeProperty("display")),
                            (y = Js(b[0], m[i.d])),
                            (w = Js(b[1] || "0", n)),
                            (t = m[i.p] - l[i.p] - u + y + r - w),
                            s && Zs(s, w, i, n - w < 20 || (s._isStart && w > 20)),
                            (n -= n - w);
                    }
                    if (o) {
                        var T = t + n,
                            _ = o._isStart;
                        (f = "scroll" + i.d2), Zs(o, T, i, (_ && T > 20) || (!_ && (c ? Math.max(ko[f], _o[f]) : o.parentNode[f]) <= T + 1)), c && ((l = zs(s)), c && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + js));
                    }
                    return p && g && ((f = zs(g)), p.seek(d), (h = zs(g)), (p._caScrollDist = f[i.p] - h[i.p]), (t = (t / p._caScrollDist) * d)), p && p.seek(v), p ? t : Math.round(t);
                },
                Aa = /(?:webkit|moz|length|cssText|inset)/i,
                Ea = function (t, e, n, i) {
                    if (t.parentNode !== e) {
                        var r,
                            o,
                            s = t.style;
                        if (e === ko) {
                            for (r in ((t._stOrig = s.cssText), (o = Rs(t)))) +r || Aa.test(r) || !o[r] || "string" != typeof s[r] || "0" === r || (s[r] = o[r]);
                            (s.top = n), (s.left = i);
                        } else s.cssText = t._stOrig;
                        (wo.core.getCache(t).uncache = 1), e.appendChild(t);
                    }
                },
                Oa = function (t, e) {
                    var n,
                        i,
                        r = as(t, e),
                        o = "_scroll" + e.p2,
                        s = function e(s, a, l, u, c) {
                            var d = e.tween,
                                p = a.onComplete,
                                f = {};
                            return (
                                d && d.kill(),
                                (n = Math.round(l)),
                                (a[o] = s),
                                (a.modifiers = f),
                                (f[o] = function (t) {
                                    return (t = ns(r())) !== n && t !== i && Math.abs(t - n) > 2 ? (d.kill(), (e.tween = 0)) : (t = l + u * d.ratio + c * d.ratio * d.ratio), (i = n), (n = ns(t));
                                }),
                                (a.onComplete = function () {
                                    (e.tween = 0), p && p.call(d);
                                }),
                                (d = e.tween = wo.to(t, a))
                            );
                        };
                    return (
                        (t[o] = r),
                        t.addEventListener(
                            "wheel",
                            function () {
                                return s.tween && s.tween.kill() && (s.tween = 0);
                            },
                            { passive: !0 }
                        ),
                        s
                    );
                };
            Hs.op = Is;
            var Ma = (function () {
                function t(e, n) {
                    xo || t.register(wo) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, n);
                }
                return (
                    (t.prototype.init = function (e, n) {
                        if (((this.progress = this.start = 0), this.vars && this.kill(1), Zo)) {
                            var i,
                                r,
                                o,
                                s,
                                a,
                                l,
                                u,
                                c,
                                d,
                                p,
                                f,
                                h,
                                g,
                                v,
                                m,
                                y,
                                w,
                                x,
                                b,
                                T,
                                _,
                                k,
                                C,
                                S,
                                A,
                                E,
                                O,
                                M,
                                P,
                                $,
                                L,
                                D,
                                N,
                                j,
                                H,
                                I,
                                R,
                                B,
                                z,
                                q,
                                F = (e = Bs(ds(e) || fs(e) || e.nodeType ? { trigger: e } : e, Gs)),
                                W = F.onUpdate,
                                X = F.toggleClass,
                                U = F.id,
                                Y = F.onToggle,
                                V = F.onRefresh,
                                G = F.scrub,
                                Q = F.trigger,
                                J = F.pin,
                                K = F.pinSpacing,
                                Z = F.invalidateOnRefresh,
                                tt = F.anticipatePin,
                                et = F.onScrubComplete,
                                nt = F.onSnapComplete,
                                it = F.once,
                                rt = F.snap,
                                ot = F.pinReparent,
                                st = F.pinSpacer,
                                at = F.containerAnimation,
                                lt = F.fastScrollEnd,
                                ut = F.preventOverlaps,
                                ct = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? Hs : Is,
                                dt = !G && 0 !== G,
                                pt = es(e.scroller || bo),
                                ft = wo.core.getCache(pt),
                                ht = os(pt),
                                gt = "fixed" === ("pinType" in e ? e.pinType : ss(pt, "pinType") || (ht && "fixed")),
                                vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                mt = dt && e.toggleActions.split(" "),
                                yt = "markers" in e ? e.markers : Gs.markers,
                                wt = ht ? 0 : parseFloat(Rs(pt)["border" + ct.p2 + Ds]) || 0,
                                xt = this,
                                bt =
                                    e.onRefreshInit &&
                                    function () {
                                        return e.onRefreshInit(xt);
                                    },
                                Tt = (function (t, e, n) {
                                    var i = n.d,
                                        r = n.d2,
                                        o = n.a;
                                    return (o = ss(t, "getBoundingClientRect"))
                                        ? function () {
                                              return o()[i];
                                          }
                                        : function () {
                                              return (e ? bo["inner" + r] : t["client" + r]) || 0;
                                          };
                                })(pt, ht, ct),
                                _t = (function (t, e) {
                                    return !e || ~Vo.indexOf(t)
                                        ? ls(t)
                                        : function () {
                                              return Ca;
                                          };
                                })(pt, ht),
                                kt = 0,
                                Ct = as(pt, ct);
                            if (
                                ((xt.media = Wo),
                                (tt *= 45),
                                (xt.scroller = pt),
                                (xt.scroll = at ? at.time.bind(at) : Ct),
                                (s = Ct()),
                                (xt.vars = e),
                                (n = n || e.animation),
                                "refreshPriority" in e && (Bo = 1),
                                (ft.tweenScroll = ft.tweenScroll || { top: Oa(pt, Is), left: Oa(pt, Hs) }),
                                (xt.tweenTo = i = ft.tweenScroll[ct.p]),
                                n &&
                                    ((n.vars.lazy = !1),
                                    n._initted || (!1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0)),
                                    (xt.animation = n.pause()),
                                    (n.scrollTrigger = xt),
                                    (L = fs(G) && G) &&
                                        ($ = wo.to(n, {
                                            ease: "power3",
                                            duration: L,
                                            onComplete: function () {
                                                return et && et(xt);
                                            },
                                        })),
                                    (M = 0),
                                    U || (U = n.vars.id)),
                                ta.push(xt),
                                rt &&
                                    ((hs(rt) && !rt.push) || (rt = { snapTo: rt }),
                                    "scrollBehavior" in ko.style && wo.set(ht ? [ko, _o] : pt, { scrollBehavior: "auto" }),
                                    (o = ps(rt.snapTo)
                                        ? rt.snapTo
                                        : "labels" === rt.snapTo
                                        ? (function (t) {
                                              return function (e) {
                                                  return wo.utils.snap(Fs(t), e);
                                              };
                                          })(n)
                                        : "labelsDirectional" === rt.snapTo
                                        ? ((B = n),
                                          function (t, e) {
                                              return Ws(Fs(B))(t, e.direction);
                                          })
                                        : !1 !== rt.directional
                                        ? function (t, e) {
                                              return Ws(rt.snapTo)(t, e.direction);
                                          }
                                        : wo.utils.snap(rt.snapTo)),
                                    (D = rt.duration || { min: 0.1, max: 2 }),
                                    (D = hs(D) ? Mo(D.min, D.max) : Mo(D, D)),
                                    (N = wo
                                        .delayedCall(rt.delay || L / 2 || 0.1, function () {
                                            if (Math.abs(xt.getVelocity()) < 10 && !Do && kt !== Ct()) {
                                                var t = n && !dt ? n.totalProgress() : xt.progress,
                                                    e = ((t - P) / (Qo() - Po)) * 1e3 || 0,
                                                    r = wo.utils.clamp(-xt.progress, 1 - xt.progress, (ws(e / 2) * e) / 0.185),
                                                    s = xt.progress + (!1 === rt.inertia ? 0 : r),
                                                    a = Mo(0, 1, o(s, xt)),
                                                    c = Ct(),
                                                    d = Math.round(l + a * g),
                                                    p = rt,
                                                    f = p.onStart,
                                                    h = p.onInterrupt,
                                                    v = p.onComplete,
                                                    m = i.tween;
                                                if (c <= u && c >= l && d !== c) {
                                                    if (m && !m._initted && m.data <= ws(d - c)) return;
                                                    !1 === rt.inertia && (r = a - xt.progress),
                                                        i(
                                                            d,
                                                            {
                                                                duration: D(ws((0.185 * Math.max(ws(s - t), ws(a - t))) / e / 0.05 || 0)),
                                                                ease: rt.ease || "power3",
                                                                data: ws(d - c),
                                                                onInterrupt: function () {
                                                                    return N.restart(!0) && h && h(xt);
                                                                },
                                                                onComplete: function () {
                                                                    (kt = Ct()), (M = P = n && !dt ? n.totalProgress() : xt.progress), nt && nt(xt), v && v(xt);
                                                                },
                                                            },
                                                            c,
                                                            r * g,
                                                            d - c - r * g
                                                        ),
                                                        f && f(xt, i.tween);
                                                }
                                            } else xt.isActive && N.restart(!0);
                                        })
                                        .pause())),
                                U && (ea[U] = xt),
                                (Q = xt.trigger = es(Q || J)),
                                (J = !0 === J ? Q : es(J)),
                                ds(X) && (X = { targets: Q, className: X }),
                                J &&
                                    (!1 === K || K === Ls || (K = !(!K && "flex" === Rs(J.parentNode).display) && $s),
                                    (xt.pin = J),
                                    !1 !== e.force3D && wo.set(J, { force3D: !0 }),
                                    (r = wo.core.getCache(J)).spacer
                                        ? (v = r.pinState)
                                        : (st && ((st = es(st)) && !st.nodeType && (st = st.current || st.nativeElement), (r.spacerIsNative = !!st), st && (r.spacerState = ka(st))),
                                          (r.spacer = w = st || To.createElement("div")),
                                          w.classList.add("pin-spacer"),
                                          U && w.classList.add("pin-spacer-" + U),
                                          (r.pinState = v = ka(J))),
                                    (xt.spacer = w = r.spacer),
                                    (O = Rs(J)),
                                    (C = O[K + ct.os2]),
                                    (b = wo.getProperty(J)),
                                    (T = wo.quickSetter(J, ct.a, js)),
                                    ba(J, w, O),
                                    (y = ka(J))),
                                yt &&
                                    ((h = hs(yt) ? Bs(yt, Vs) : Vs),
                                    (p = Ks("scroller-start", U, pt, ct, h, 0)),
                                    (f = Ks("scroller-end", U, pt, ct, h, 0, p)),
                                    (x = p["offset" + ct.op.d2]),
                                    (c = Ks("start", U, pt, ct, h, x, 0, at)),
                                    (d = Ks("end", U, pt, ct, h, x, 0, at)),
                                    at && (R = wo.quickSetter([c, d], ct.a, js)),
                                    gt ||
                                        (Vo.length && !0 === ss(pt, "fixedMarkers")) ||
                                        ((q = Rs((z = ht ? ko : pt)).position),
                                        (z.style.position = "absolute" === q || "fixed" === q ? q : "relative"),
                                        wo.set([p, f], { force3D: !0 }),
                                        (A = wo.quickSetter(p, ct.a, js)),
                                        (E = wo.quickSetter(f, ct.a, js)))),
                                at)
                            ) {
                                var St = at.vars.onUpdate,
                                    At = at.vars.onUpdateParams;
                                at.eventCallback("onUpdate", function () {
                                    xt.update(0, 0, 1), St && St.apply(At || []);
                                });
                            }
                            (xt.previous = function () {
                                return ta[ta.indexOf(xt) - 1];
                            }),
                                (xt.next = function () {
                                    return ta[ta.indexOf(xt) + 1];
                                }),
                                (xt.revert = function (t) {
                                    var e = !1 !== t || !xt.enabled,
                                        i = Lo;
                                    e !== xt.isReverted &&
                                        (e && (xt.scroll.rec || (xt.scroll.rec = Ct()), (H = Math.max(Ct(), xt.scroll.rec || 0)), (j = xt.progress), (I = n && n.progress())),
                                        c &&
                                            [c, d, p, f].forEach(function (t) {
                                                return (t.style.display = e ? "none" : "block");
                                            }),
                                        e && (Lo = 1),
                                        xt.update(e),
                                        (Lo = i),
                                        J &&
                                            (e
                                                ? (function (t, e, n) {
                                                      _a(n);
                                                      var i = t._gsap;
                                                      if (i.spacerIsNative) _a(i.spacerState);
                                                      else if (t.parentNode === e) {
                                                          var r = e.parentNode;
                                                          r && (r.insertBefore(t, e), r.removeChild(e));
                                                      }
                                                  })(J, w, v)
                                                : (!ot || !xt.isActive) && ba(J, w, Rs(J), S)),
                                        (xt.isReverted = e));
                                }),
                                (xt.refresh = function (i, r) {
                                    if ((!Lo && xt.enabled) || r)
                                        if (J && i && Ko) Us(t, "scrollEnd", ua);
                                        else {
                                            (Lo = 1), $ && $.pause(), Z && n && n.progress(0).invalidate(), xt.isReverted || xt.revert();
                                            for (
                                                var o,
                                                    h,
                                                    x,
                                                    T,
                                                    C,
                                                    A,
                                                    E,
                                                    O,
                                                    M,
                                                    P,
                                                    L = Tt(),
                                                    D = _t(),
                                                    N = at ? at.duration() : us(pt, ct),
                                                    R = 0,
                                                    B = 0,
                                                    z = e.end,
                                                    q = e.endTrigger || Q,
                                                    F = e.start || (0 !== e.start && Q ? (J ? "0 0" : "0 100%") : 0),
                                                    W = e.pinnedContainer && es(e.pinnedContainer),
                                                    X = (Q && Math.max(0, ta.indexOf(xt))) || 0,
                                                    U = X;
                                                U--;

                                            )
                                                (A = ta[U]).end || A.refresh(0, 1) || (Lo = 1), !(E = A.pin) || (E !== Q && E !== J) || A.isReverted || (P || (P = []), P.unshift(A), A.revert());
                                            for (
                                                ps(F) && (F = F(xt)),
                                                    l = Sa(F, Q, L, ct, Ct(), c, p, xt, D, wt, gt, N, at) || (J ? -0.001 : 0),
                                                    ps(z) && (z = z(xt)),
                                                    ds(z) && !z.indexOf("+=") && (~z.indexOf(" ") ? (z = (ds(F) ? F.split(" ")[0] : "") + z) : ((R = Js(z.substr(2), L)), (z = ds(F) ? F : l + R), (q = Q))),
                                                    u = Math.max(l, Sa(z || (q ? "100% 0" : N), q, L, ct, Ct() + R, d, f, xt, D, wt, gt, N, at)) || -0.001,
                                                    g = u - l || ((l -= 0.01) && 0.001),
                                                    R = 0,
                                                    U = X;
                                                U--;

                                            )
                                                (E = (A = ta[U]).pin) && A.start - A._pinPush < l && !at && ((o = A.end - A.start), (E === Q || E === W) && !fs(F) && (R += o), E === J && (B += o));
                                            if (((l += R), (u += R), (xt._pinPush = B), c && R && (((o = {})[ct.a] = "+=" + R), W && (o[ct.p] = "-=" + Ct()), wo.set([c, d], o)), J))
                                                (o = Rs(J)),
                                                    (T = ct === Is),
                                                    (x = Ct()),
                                                    (_ = parseFloat(b(ct.a)) + B),
                                                    !N && u > 1 && ((ht ? ko : pt).style["overflow-" + ct.a] = "scroll"),
                                                    ba(J, w, o),
                                                    (y = ka(J)),
                                                    (h = zs(J, !0)),
                                                    (O = gt && as(pt, T ? Hs : Is)()),
                                                    K && (((S = [K + ct.os2, g + B + js]).t = w), (U = K === $s ? qs(J, ct) + g + B : 0) && S.push(ct.d, U + js), _a(S), gt && Ct(H)),
                                                    gt &&
                                                        (((C = { top: h.top + (T ? x - l : O) + js, left: h.left + (T ? O : x - l) + js, boxSizing: "border-box", position: "fixed" }).width = C.maxWidth = Math.ceil(h.width) + js),
                                                        (C.height = C.maxHeight = Math.ceil(h.height) + js),
                                                        (C.margin = C.marginTop = C.marginRight = C.marginBottom = C.marginLeft = "0"),
                                                        (C.padding = o.padding),
                                                        (C.paddingTop = o.paddingTop),
                                                        (C.paddingRight = o.paddingRight),
                                                        (C.paddingBottom = o.paddingBottom),
                                                        (C.paddingLeft = o.paddingLeft),
                                                        (m = (function (t, e, n) {
                                                            for (var i, r = [], o = t.length, s = n ? 8 : 0; s < o; s += 2) (i = t[s]), r.push(i, i in e ? e[i] : t[s + 1]);
                                                            return (r.t = t.t), r;
                                                        })(v, C, ot))),
                                                    n ? ((M = n._initted), zo(1), n.render(n.duration(), !0, !0), (k = b(ct.a) - _ + g + B), g !== k && m.splice(m.length - 2, 2), n.render(0, !0, !0), M || n.invalidate(), zo(0)) : (k = g);
                                            else if (Q && Ct() && !at) for (h = Q.parentNode; h && h !== ko; ) h._pinOffset && ((l -= h._pinOffset), (u -= h._pinOffset)), (h = h.parentNode);
                                            P &&
                                                P.forEach(function (t) {
                                                    return t.revert(!1);
                                                }),
                                                (xt.start = l),
                                                (xt.end = u),
                                                (s = a = Ct()),
                                                at || (s < H && Ct(H), (xt.scroll.rec = 0)),
                                                xt.revert(!1),
                                                (Lo = 0),
                                                n && dt && n._initted && n.progress() !== I && n.progress(I, !0).render(n.time(), !0, !0),
                                                j !== xt.progress && (n && !dt && n.totalProgress(j, !0), (xt.progress = j), xt.update(0, 0, 1)),
                                                J && K && (w._pinOffset = Math.round(xt.progress * k)),
                                                V && V(xt);
                                        }
                                }),
                                (xt.getVelocity = function () {
                                    return ((Ct() - a) / (Qo() - Po)) * 1e3 || 0;
                                }),
                                (xt.endAnimation = function () {
                                    ms(xt.callbackAnimation), n && ($ ? $.progress(1) : n.paused() ? dt || ms(n, xt.direction < 0, 1) : ms(n, n.reversed()));
                                }),
                                (xt.getTrailing = function (t) {
                                    var e = ta.indexOf(xt),
                                        n = xt.direction > 0 ? ta.slice(0, e).reverse() : ta.slice(e + 1);
                                    return ds(t)
                                        ? n.filter(function (e) {
                                              return e.vars.preventOverlaps === t;
                                          })
                                        : n;
                                }),
                                (xt.update = function (t, e, r) {
                                    if (!at || r || t) {
                                        var o,
                                            c,
                                            d,
                                            f,
                                            h,
                                            v,
                                            x,
                                            b = xt.scroll(),
                                            S = t ? 0 : (b - l) / g,
                                            O = S < 0 ? 0 : S > 1 ? 1 : S || 0,
                                            L = xt.progress;
                                        if (
                                            (e && ((a = s), (s = at ? Ct() : b), rt && ((P = M), (M = n && !dt ? n.totalProgress() : O))),
                                            tt && !O && J && !Lo && !Yo && Ko && l < b + ((b - a) / (Qo() - Po)) * tt && (O = 1e-4),
                                            O !== L && xt.enabled)
                                        ) {
                                            if (
                                                ((f = (h = (o = xt.isActive = !!O && O < 1) !== (!!L && L < 1)) || !!O != !!L),
                                                (xt.direction = O > L ? 1 : -1),
                                                (xt.progress = O),
                                                f && !Lo && ((c = O && !L ? 0 : 1 === O ? 1 : 1 === L ? 2 : 3), dt && ((d = (!h && "none" !== mt[c + 1] && mt[c + 1]) || mt[c]), (x = n && ("complete" === d || "reset" === d || d in n)))),
                                                ut &&
                                                    h &&
                                                    (x || G || !n) &&
                                                    (ps(ut)
                                                        ? ut(xt)
                                                        : xt.getTrailing(ut).forEach(function (t) {
                                                              return t.endAnimation();
                                                          })),
                                                dt || (!$ || Lo || Yo ? n && n.totalProgress(O, !!Lo) : (($.vars.totalProgress = O), $.invalidate().restart())),
                                                J)
                                            )
                                                if ((t && K && (w.style[K + ct.os2] = C), gt)) {
                                                    if (f) {
                                                        if (((v = !t && O > L && u + 1 > b && b + 1 >= us(pt, ct)), ot))
                                                            if (t || (!o && !v)) Ea(J, w);
                                                            else {
                                                                var D = zs(J, !0),
                                                                    j = b - l;
                                                                Ea(J, ko, D.top + (ct === Is ? j : 0) + js, D.left + (ct === Is ? 0 : j) + js);
                                                            }
                                                        _a(o || v ? m : y), (k !== g && O < 1 && o) || T(_ + (1 !== O || v ? 0 : k));
                                                    }
                                                } else T(_ + k * O);
                                            rt && !i.tween && !Lo && !Yo && N.restart(!0),
                                                X &&
                                                    (h || (it && O && (O < 1 || !Fo))) &&
                                                    Oo(X.targets).forEach(function (t) {
                                                        return t.classList[o || it ? "add" : "remove"](X.className);
                                                    }),
                                                W && !dt && !t && W(xt),
                                                f && !Lo
                                                    ? (dt && (x && ("complete" === d ? n.pause().totalProgress(1) : "reset" === d ? n.restart(!0).pause() : "restart" === d ? n.restart(!0) : n[d]()), W && W(xt)),
                                                      (!h && Fo) || (Y && h && ys(xt, Y), vt[c] && ys(xt, vt[c]), it && (1 === O ? xt.kill(!1, 1) : (vt[c] = 0)), h || (vt[(c = 1 === O ? 1 : 3)] && ys(xt, vt[c]))),
                                                      lt && !o && Math.abs(xt.getVelocity()) > (fs(lt) ? lt : 2500) && (ms(xt.callbackAnimation), $ ? $.progress(1) : ms(n, !O, 1)))
                                                    : dt && W && !Lo && W(xt);
                                        }
                                        if (E) {
                                            var H = at ? (b / at.duration()) * (at._caScrollDist || 0) : b;
                                            A(H + (p._isFlipped ? 1 : 0)), E(H);
                                        }
                                        R && R((-b / at.duration()) * (at._caScrollDist || 0));
                                    }
                                }),
                                (xt.enable = function (e, n) {
                                    xt.enabled || ((xt.enabled = !0), Us(pt, "resize", ra), Us(pt, "scroll", ia), bt && Us(t, "refreshInit", bt), !1 !== e && ((xt.progress = j = 0), (s = a = kt = Ct())), !1 !== n && xt.refresh());
                                }),
                                (xt.getTween = function (t) {
                                    return t && i ? i.tween : $;
                                }),
                                (xt.disable = function (e, n) {
                                    if (
                                        xt.enabled &&
                                        (!1 !== e && xt.revert(),
                                        (xt.enabled = xt.isActive = !1),
                                        n || ($ && $.pause()),
                                        (H = 0),
                                        r && (r.uncache = 1),
                                        bt && Ys(t, "refreshInit", bt),
                                        N && (N.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                                        !ht)
                                    ) {
                                        for (var o = ta.length; o--; ) if (ta[o].scroller === pt && ta[o] !== xt) return;
                                        Ys(pt, "resize", ra), Ys(pt, "scroll", ia);
                                    }
                                }),
                                (xt.kill = function (t, e) {
                                    xt.disable(t, e), $ && $.kill(), U && delete ea[U];
                                    var i = ta.indexOf(xt);
                                    ta.splice(i, 1),
                                        i === jo && ma > 0 && jo--,
                                        (i = 0),
                                        ta.forEach(function (t) {
                                            return t.scroller === xt.scroller && (i = 1);
                                        }),
                                        i || (xt.scroll.rec = 0),
                                        n && ((n.scrollTrigger = null), t && n.render(-1), e || n.kill()),
                                        c &&
                                            [c, d, p, f].forEach(function (t) {
                                                return t.parentNode && t.parentNode.removeChild(t);
                                            }),
                                        J &&
                                            (r && (r.uncache = 1),
                                            (i = 0),
                                            ta.forEach(function (t) {
                                                return t.pin === J && i++;
                                            }),
                                            i || (r.spacer = 0));
                                }),
                                xt.enable(!1, !1),
                                n && n.add && !g
                                    ? wo.delayedCall(0.01, function () {
                                          return l || u || xt.refresh();
                                      }) &&
                                      (g = 0.01) &&
                                      (l = u = 0)
                                    : xt.refresh();
                        } else this.update = this.refresh = this.kill = ts;
                    }),
                    (t.register = function (e) {
                        if (
                            !xo &&
                            ((wo = e || rs()),
                            is() && window.document && ((bo = window), (To = document), (_o = To.documentElement), (ko = To.body)),
                            wo && ((Oo = wo.utils.toArray), (Mo = wo.utils.clamp), (zo = wo.core.suppressOverwrites || ts), wo.core.globals("ScrollTrigger", t), ko))
                        ) {
                            (Ao =
                                bo.requestAnimationFrame ||
                                function (t) {
                                    return setTimeout(t, 16);
                                }),
                                Us(bo, "wheel", ia),
                                (Co = [bo, To, _o, ko]),
                                Us(To, "scroll", ia);
                            var n,
                                i = ko.style,
                                r = i.borderTopStyle;
                            (i.borderTopStyle = "solid"),
                                (n = zs(ko)),
                                (Is.m = Math.round(n.top + Is.sc()) || 0),
                                (Hs.m = Math.round(n.left + Hs.sc()) || 0),
                                r ? (i.borderTopStyle = r) : i.removeProperty("border-top-style"),
                                ($o = setInterval(na, 200)),
                                wo.delayedCall(0.5, function () {
                                    return (Yo = 0);
                                }),
                                Us(To, "touchcancel", ts),
                                Us(ko, "touchstart", ts),
                                Xs(Us, To, "pointerdown,touchstart,mousedown", function () {
                                    return (Do = 1);
                                }),
                                Xs(Us, To, "pointerup,touchend,mouseup", function () {
                                    return (Do = 0);
                                }),
                                (No = wo.utils.checkPrefix("transform")),
                                xa.push(No),
                                (xo = Qo()),
                                (So = wo.delayedCall(0.2, ga).pause()),
                                (Ro = [
                                    To,
                                    "visibilitychange",
                                    function () {
                                        var t = bo.innerWidth,
                                            e = bo.innerHeight;
                                        To.hidden ? ((Ho = t), (Io = e)) : (Ho === t && Io === e) || ra();
                                    },
                                    To,
                                    "DOMContentLoaded",
                                    ga,
                                    bo,
                                    "load",
                                    function () {
                                        return Ko || ga();
                                    },
                                    bo,
                                    "resize",
                                    ra,
                                ]),
                                cs(Us);
                        }
                        return xo;
                    }),
                    (t.defaults = function (t) {
                        for (var e in t) Gs[e] = t[e];
                    }),
                    (t.kill = function () {
                        (Zo = 0),
                            ta.slice(0).forEach(function (t) {
                                return t.kill(1);
                            });
                    }),
                    (t.config = function (t) {
                        "limitCallbacks" in t && (Fo = !!t.limitCallbacks);
                        var e = t.syncInterval;
                        (e && clearInterval($o)) || (($o = e) && setInterval(na, e)), "autoRefreshEvents" in t && (cs(Ys) || cs(Us, t.autoRefreshEvents || "none"), (qo = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
                    }),
                    (t.scrollerProxy = function (t, e) {
                        var n = es(t),
                            i = Go.indexOf(n),
                            r = os(n);
                        ~i && Go.splice(i, r ? 6 : 2), r ? Vo.unshift(bo, e, ko, e, _o, e) : Vo.unshift(n, e);
                    }),
                    (t.matchMedia = function (t) {
                        var e, n, i, r, o;
                        for (n in t)
                            (i = aa.indexOf(n)),
                                (r = t[n]),
                                (Wo = n),
                                "all" === n
                                    ? r()
                                    : (e = bo.matchMedia(n)) &&
                                      (e.matches && (o = r()),
                                      ~i ? ((aa[i + 1] = vs(aa[i + 1], r)), (aa[i + 2] = vs(aa[i + 2], o))) : ((i = aa.length), aa.push(n, r, o), e.addListener ? e.addListener(la) : e.addEventListener("change", la)),
                                      (aa[i + 3] = e.matches)),
                                (Wo = 0);
                        return aa;
                    }),
                    (t.clearMatchMedia = function (t) {
                        t || (aa.length = 0), (t = aa.indexOf(t)) >= 0 && aa.splice(t, 4);
                    }),
                    (t.isInViewport = function (t, e, n) {
                        var i = (ds(t) ? es(t) : t).getBoundingClientRect(),
                            r = i[n ? Ss : As] * e || 0;
                        return n ? i.right - r > 0 && i.left + r < bo.innerWidth : i.bottom - r > 0 && i.top + r < bo.innerHeight;
                    }),
                    (t.positionInViewport = function (t, e, n) {
                        ds(t) && (t = es(t));
                        var i = t.getBoundingClientRect(),
                            r = i[n ? Ss : As],
                            o = null == e ? r / 2 : e in Qs ? Qs[e] * r : ~e.indexOf("%") ? (parseFloat(e) * r) / 100 : parseFloat(e) || 0;
                        return n ? (i.left + o) / bo.innerWidth : (i.top + o) / bo.innerHeight;
                    }),
                    t
                );
            })();
            (Ma.version = "3.8.0"),
                (Ma.saveStyles = function (t) {
                    return t
                        ? Oo(t).forEach(function (t) {
                              if (t && t.style) {
                                  var e = da.indexOf(t);
                                  e >= 0 && da.splice(e, 5), da.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), wo.core.getCache(t), Wo);
                              }
                          })
                        : da;
                }),
                (Ma.revert = function (t, e) {
                    return fa(!t, e);
                }),
                (Ma.create = function (t, e) {
                    return new Ma(t, e);
                }),
                (Ma.refresh = function (t) {
                    return t ? ra() : (xo || Ma.register()) && ga(!0);
                }),
                (Ma.update = ya),
                (Ma.clearScrollMemory = ha),
                (Ma.maxScroll = function (t, e) {
                    return us(t, e ? Hs : Is);
                }),
                (Ma.getScrollFunc = function (t, e) {
                    return as(es(t), e ? Hs : Is);
                }),
                (Ma.getById = function (t) {
                    return ea[t];
                }),
                (Ma.getAll = function () {
                    return ta.slice(0);
                }),
                (Ma.isScrolling = function () {
                    return !!Ko;
                }),
                (Ma.snapDirectional = Ws),
                (Ma.addEventListener = function (t, e) {
                    var n = oa[t] || (oa[t] = []);
                    ~n.indexOf(e) || n.push(e);
                }),
                (Ma.removeEventListener = function (t, e) {
                    var n = oa[t],
                        i = n && n.indexOf(e);
                    i >= 0 && n.splice(i, 1);
                }),
                (Ma.batch = function (t, e) {
                    var n,
                        i = [],
                        r = {},
                        o = e.interval || 0.016,
                        s = e.batchMax || 1e9,
                        a = function (t, e) {
                            var n = [],
                                i = [],
                                r = wo
                                    .delayedCall(o, function () {
                                        e(n, i), (n = []), (i = []);
                                    })
                                    .pause();
                            return function (t) {
                                n.length || r.restart(!0), n.push(t.trigger), i.push(t), s <= n.length && r.progress(1);
                            };
                        };
                    for (n in e) r[n] = "on" === n.substr(0, 2) && ps(e[n]) && "onRefreshInit" !== n ? a(0, e[n]) : e[n];
                    return (
                        ps(s) &&
                            ((s = s()),
                            Us(Ma, "refresh", function () {
                                return (s = e.batchMax());
                            })),
                        Oo(t).forEach(function (t) {
                            var e = {};
                            for (n in r) e[n] = r[n];
                            (e.trigger = t), i.push(Ma.create(e));
                        }),
                        i
                    );
                }),
                (Ma.sort = function (t) {
                    return ta.sort(
                        t ||
                            function (t, e) {
                                return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0));
                            }
                    );
                }),
                rs() && wo.registerPlugin(Ma),
                Ai.registerPlugin(Ue, Ei, to, yo, Ma);
            var Pa = {
                scrollSection: function () {
                    e().scrollify({
                        section: ".scroller",
                        sectionName: "section-name",
                        interstitialSection: "header, footer",
                        easing: "easeOutExpo",
                        scrollSpeed: 700,
                        offset: -92,
                        scrollbars: !0,
                        standardScrollElements: ".social-media",
                        setHeights: !0,
                        overflowScroll: !0,
                        updateHash: !1,
                        touchScroll: !0,
                        before: function () {},
                        after: function () {},
                        afterResize: function () {},
                        afterRender: function () {},
                    });
                },
                sliderBanner: function () {
                    var t = function (t) {
                            return t < 10 ? "0" + t : "" + t;
                        },
                        n = e()(".banner__slider");
                    n.find(".banner__slider-item");
                    n.slick({
                        arrows: !0,
                        autoplay: !0,
                        autoplaySpeed: 5000,
                        dots: !1,
                        fade: !0,
                        pauseOnHover: !1,
                        nextArrow: e()(".banner__slider-arrow .arrow-next"),
                        prevArrow: e()(".banner__slider-arrow .arrow-prev"),
                        lazyLoad: "ondemand",
                    });
                    var i = n.find(".slick-slide").not(".slick-cloned").length;
                    if ((n.parent().find(".numbers .total").html(t(i)), n.length)) {
                        n.find(".slick-list .slick-slide figure > img");
                        n.on("beforeChange", function (t, e, i, r) {
                            var o = n.find(".slick-slide[data-slick-index=" + r + "]");
                            n.find(".slick-slide[data-slick-index=" + i + "]");
                            Ue.to(o.find("h2"), 0.2, { css: { top: "50px", opacity: "0" }, ease: "Quart.easeOut" }),
                                Ue.to(o.find("p"), 0.4, { css: { top: "50px", opacity: "0" }, ease: "Quart.easeOut" }),
                                Ue.to(o.find("a"), 0.6, { css: { top: "50px", opacity: "0" }, ease: "Quart.easeOut" });
                        }),
                            n.on("afterChange", function (i, r, o) {
                                e()(".numbers .active").text(t(o + 1)), console.log(o);
                                var s = n.find(".slick-slide[data-slick-index=" + o + "]");
                                Ue.to(s.find("h2"), 0.5, { css: { top: "0", opacity: "1" }, delay: 0.4, ease: "Quart.easeOut" }),
                                    Ue.to(s.find("p"), 0.7, { css: { top: "0", opacity: "1" }, delay: 0.4, ease: "Quart.easeOut" }),
                                    Ue.to(s.find("a"), 0.9, { css: { top: "0", opacity: "1" }, delay: 0.4, ease: "Quart.easeOut" });
                            });
                    }
                },
                ourSolution: function () {
                    e()(".our-solution__box-thumb .nav-tab li").click(function () {
                        var t = e()(this).attr("data-id");
                        e()(".our-solution__box-thumb .nav-tab li").not(e()(this)).removeClass("active"),
                            e()(this).addClass("active"),
                            e()(this).parents(".our-solution__box-thumb").find(".nav-content__item").removeClass("active"),
                            e()(this)
                                .parents(".our-solution__box-thumb")
                                .find(".nav-content__item#" + t)
                                .addClass("active"),
                            e()(".our-solution__image-item").removeClass("active"),
                            e()('.our-solution__image-item[data-id-img="' + t + '"]').addClass("active");
                    });
                },
                projectSlider: function () {
                    var t = e()(".slider-project");
                    t.find(".slider-project__item-text");
                    if ((t.slick({ arrows: !1, dots: !1, fade: !0, infinite: !1, asNavFor: ".slider-project-thumb__box" }), t.length)) {
                        t.find(".slick-list .slick-slide figure > img");
                        t.on("beforeChange", function (e, n, i, r) {
                            var o = t.find(".slick-slide[data-slick-index=" + r + "]");
                            t.find(".slick-slide[data-slick-index=" + i + "]");
                            Ue.to(o.find("h3"), 0.3, { css: { top: "30px", opacity: "0" }, ease: "Quart.easeOut" }),
                                Ue.to(o.find("span"), 0.4, { css: { top: "30px", opacity: "0" }, ease: "Quart.easeOut" }),
                                Ue.to(o.find("p"), 0.5, { css: { top: "30px", opacity: "0" }, ease: "Quart.easeOut" }),
                                Ue.to(o.find("a"), 0.5, { css: { top: "30px", opacity: "0" }, ease: "Quart.easeOut" });
                        }),
                            t.on("afterChange", function (e, n, i) {
                                var r = t.find(".slick-slide[data-slick-index=" + i + "]");
                                Ue.to(r.find("h3"), 0.5, { css: { top: "0", opacity: "1" }, delay: 0.3, ease: "Quart.easeOut" }),
                                    Ue.to(r.find("span"), 0.6, { css: { top: "0", opacity: "1" }, delay: 0.4, ease: "Quart.easeOut" }),
                                    Ue.to(r.find("p"), 0.6, { css: { top: "0", opacity: "1" }, delay: 0.4, ease: "Quart.easeOut" }),
                                    Ue.to(r.find("a"), 0.7, { css: { top: "0", opacity: "1" }, delay: 0.4, ease: "Quart.easeOut" });
                            });
                    }
                    e()(".slider-project-thumb__box").slick({
                        asNavFor: ".slider-project",
                        dots: !1,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        centerMode: !1,
                        infinite: !1,
                        focusOnSelect: !0,
                        prevArrow:
                            '<div class="slick-prev">                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">                     <rect width="32" height="32" rx="16" transform="matrix(0 -1 -1 0 32 32)" fill="white" fill-opacity="0.2"/>                     <path d="M17.625 10.75L12.375 16L17.625 21.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                   </svg>                 </div>',
                        nextArrow:
                            '<div class="slick-next">                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">                     <rect y="32" width="32" height="32" rx="16" transform="rotate(-90 0 32)" fill="white" fill-opacity="0.2"/>                     <path d="M14.375 10.75L19.625 16L14.375 21.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                   </svg>                 </div>',
                        responsive: [
                            { breakpoint: 1281, settings: { slidesToShow: 4 } },
                            { breakpoint: 1024, settings: { slidesToShow: 2 } },
                        ],
                    });
                },
            };
            (Pa.indicator = function () {
                e()(".indicator a").on("click", function (t) {
                    if ((t.preventDefault(), window.innerWidth > 1280)) var n = e()("#".concat(e()(this).attr("content-target"))).offset().top;
                    else n = e()("#".concat(e()(this).attr("content-target"))).offset().top - 80;
                    Ai.to(e()(window), 1.2, { scrollTo: { y: n }, ease: "Power2.easeOut", overwrite: 1 });
                });
                e()(window).scroll(function () {
                    var t,
                        n,
                        i,
                        r,
                        o,
                        s = e()(window).scrollTop();
                    (t = s),
                        e()(".scroller").each(function () {
                            (r = e()(this)),
                                (n = r.offset().top - e()(window).height() / 2),
                                (i = r.offset().top + r.outerHeight() - e()(window).height() / 2),
                                n <= t &&
                                    i >= t &&
                                    ((o = r.attr("id").split(" ")),
                                    e()(".indicator a[content-target=" + o[o.length - 1] + "]").hasClass("active") ||
                                        (e()(".indicator a").removeClass("active"), e()(".indicator a[content-target=" + o[o.length - 1] + "]").addClass("active")));
                        }),
                        s;
                    var a = e()(".wrap-parallax");
                    if (a.length) {
                        var l = e()(window).scrollTop();
                        if (window.innerWidth > 1280) var u = a.find(".news-update").offset().top + 92;
                        else u = a.find(".news-update").offset().top;
                        l > u ? (e()(".indicator").addClass("stick"), e()(".indicator__box-item:last-child").addClass("active")) : e()(".indicator").removeClass("stick");
                    }
                });
            }),
                (Pa.popupVideo = function () {
                    e()(".popup-video").on("click", function () {
                        var t = e()(this).attr("data-iframe");
                        openPopup("#video-popup"),
                            setTimeout(function () {
                                e()("#video-popup").find(".video") &&
                                    e()("#video-popup")
                                        .find(".video")
                                        .html(
                                            '<iframe width="560" height="650" src="https://www.youtube.com/embed/' +
                                                t +
                                                '?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                                        );
                            }, 800);
                    });
                }),
                (Pa.mousemoveEffect = function () {
                    function t(t) {
                        !(function (t, n, i) {
                            var r = e()(".about-us"),
                                o = t.pageX - r.offset().left,
                                s = t.pageY - r.offset().top;
                            Ai.to(n, 1, { x: ((o - r.width() / 2) / r.width()) * i, y: ((s - r.height() / 4) / r.height()) * i, ease: "Power2.easeOut" });
                        })(t, ".animated-solar-panel", -20);
                    }
                    e()(".about-us").mousemove(function (e) {
                        setTimeout(t.bind(null, e), 200);
                    });
                }),
                (Pa.numberCounting = function () {
                    window.addEventListener("scroll", function t() {
                        e()(".about-us").hasClass("after-animate") &&
                            (e()(".counting").each(function () {
                                e()(this)
                                    .prop("Counter", 0)
                                    .animate(
                                        { Counter: e()(this).text() },
                                        {
                                            duration: 4e3,
                                            easing: "swing",
                                            step: function (t) {
                                                e()(this).text(Math.ceil(t));
                                            },
                                        }
                                    );
                            }),
                            window.removeEventListener("scroll", t));
                    });
                }),
                (Pa.welcomePopup = function () {
                    window.onload = function (t) {
                        openPopup("#welcome-popup");
                    };
                }),
                (Pa.socialMedia = function () {
                    e()(".social-media__list.list-three").slick({
                        slidesToShow: 3,
                        arrows: !1,
                        autoplay: !0,
                        responsive: [
                            { breakpoint: 1280, settings: { slidesToShow: 2, arrows: !0, variableWidth: !0, infinite: !1 } },
                            { breakpoint: 1023, settings: { slidesToShow: 1, arrows: !0, infinite: !1, variableWidth: !0 } },
                        ],
                    }),
                        e()(".social-media__list.four-item").slick({
                            slidesToShow: 4,
                            arrows: !1,
                            autoplay: !0,
                            responsive: [
                                { breakpoint: 1280, settings: { slidesToShow: 3, arrows: !0, variableWidth: !0, infinite: !1, draggable: !0 } },
                                { breakpoint: 1023, settings: { slidesToShow: 2, arrows: !0, variableWidth: !0, infinite: !1, draggable: !0 } },
                            ],
                        });
                }),
                (Pa.init = function () {
                    this.sliderBanner(),
                        this.projectSlider(),
                        this.indicator(),
                        this.ourSolution(),
                        this.numberCounting(),
                        this.mousemoveEffect(),
                        this.popupVideo(),
                        this.welcomePopup(),
                        this.socialMedia(),
                        window.innerWidth > 1280 &&
                            (function (t) {
                                for (
                                    var e = document.querySelectorAll(t),
                                        n = function (t) {
                                            var n = e[t],
                                                i = n.getAttribute("data-animate-trigger"),
                                                r = document.querySelector(i);
                                            n.classList.add("before-animate"),
                                                window.addEventListener("scroll", function t() {
                                                    var e = window.innerHeight;
                                                    r.getBoundingClientRect().top - e < 0 && (window.removeEventListener("scroll", t), n.classList.add("after-animate"));
                                                });
                                        },
                                        i = 0;
                                    i < e.length;
                                    i++
                                )
                                    n(i);
                            })(".animating-scroll");
                }),
                e()(document).ready(function () {
                    Pa.init(),
                        window.innerWidth > 1280 &&
                            (e()(".banner").isOnScreen() || e()(".our-project").isOnScreen() ? e()(".indicator").addClass("white") : e()(".indicator").removeClass("white"),
                            (e()(".news-update").isOnScreen() || e()(".about-us").isOnScreen()) && e()(".indicator").removeClass("white"));
                }),
                e()(window).scroll(function () {
                    window.innerWidth > 1280 &&
                        (e()(".banner").isOnScreen() || e()(".our-project").isOnScreen() ? e()(".indicator").addClass("white") : e()(".indicator").removeClass("white"),
                        (e()(".news-update").isOnScreen() || e()(".about-us").isOnScreen()) && e()(".indicator").removeClass("white"));
                }),
                window.addEventListener("load", function (t) {
                    window.innerWidth;
                }),
                (e().fn.isOnScreen = function () {
                    if (this.length) {
                        var t = {};
                        (t.top = e()(window).scrollTop()), (t.bottom = t.top + e()(window).height());
                        var n = {};
                        return (n.top = this.offset().top + 92), (n.bottom = n.top + this.outerHeight()), n.top <= t.bottom && n.bottom >= t.top;
                    }
                    return !1;
                });
        })();
})();
//# sourceMappingURL=home.js.map
