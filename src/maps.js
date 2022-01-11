/*!
 * NAVER Maps API v3 - 3.4.1 - 2020-08-13
 *
 * Copyright(c) 2020, NAVER corp, Team mantle
 */
! function(t, e) {
    var i = t.document,
        n = {},
        o = null;
    ! function() {
        var t = function() {};
        t.prototype = {
            constructor: t,
            __export: function() {
                return n
            }
        }, o = new t
    }(), o.onJSContentLoaded = null, o.jsContentLoaded = !1;
    var s = "",
        r = null,
        a = null,
        h = null,
        l = null,
        c = null,
        u = null,
        p = /openapi\.map\.naver\.com\/openapi\/v3\/maps\.js\b/,
        d = (t.location.href + "").replace(/\s+/g, "");
    ! function() {
        for (var t = i.getElementsByTagName("script"), e = "", n = t.length - 1; n >= 0 && (e = t[n].src || "", !p.test(e)); n--) e = "";
        if (t = null, e = (e || "").split("?")[1]) {
            e = e.split("&");
            for (var o = e.length - 1; o >= 0; o--) 0 === e[o].indexOf("clientId=") ? s = r = e[o].replace("clientId=", "") : 0 === e[o].indexOf("ncpClientId=") ? s = a = e[o].replace("ncpClientId=", "") : 0 === e[o].indexOf("govClientId=") ? s = h = e[o].replace("govClientId=", "") : 0 === e[o].indexOf("finClientId=") ? s = l = e[o].replace("finClientId=", "") : 0 === e[o].indexOf("env=") ? c = e[o].replace("env=", "") : 0 === e[o].indexOf("language=") && (u = e[o].replace("language=", "").toLowerCase());
            var f = {
                getHostname: function(t) {
                    var e = t.split("/");
                    return (t.indexOf("://") > -1 ? e[2] : e[0]).split(":")[0].split("?")[0]
                },
                getUrlParams: function(t) {
                    for (var e, i = (t.split("?")[1] || "").split("&"), n = {}, o = 0, s = i.length; o < s; o++) e = i[o].split("="), n[e[0]] = e[1];
                    return n
                },
                patterns: ["webcache.googleusercontent.com"],
                handlers: {
                    webcache_googleusercontent_com: function(t) {
                        var e = f.getUrlParams(t),
                            i = t;
                        return e.q && (i = e.q.split(":").slice(2).join(":")), i
                    }
                },
                getRealUrl: function(t) {
                    for (var e, i = f.getHostname(t), n = f.patterns, o = t, s = 0, r = n.length; s < r; s++)
                        if (e = n[s], i.indexOf(e) > -1) {
                            var a = f.handlers[e.replace(/\./g, "_")] || function() {};
                            o = a(t) || t;
                            break
                        } return o
                }
            };
            d = f.getRealUrl(d)
        }
    }();
    var f = !1,
        g = function(e) {
            if (e instanceof n.Map != !1) {
                if (at) return void(f && (f = !1));
                ht++;
                var i = function() {
                        ht--, at = !1, lt.push(function() {
                            e && e.destroy && e.destroy(!0)
                        }), t.setTimeout(function() {
                            ht <= 0 && ut()
                        }, 100)
                    },
                    o = function(t, e) {
                        n.console.info([t, "  * Error Code / Error Message: " + e, "  * Client ID: " + s, "  * URI: " + encodeURI(k)], {
                            header: "background:#f00;color:#fff;display:block;"
                        })
                    };
                if (!s) return void i();
                var u = (new Date).getTime(),
                    p = (z ? "https" : "http") + "://openapi.map.naver.com/v1/validatev3" + (r ? "?clientId=" + r : "") + (a ? "?ncpClientId=" + a : "") + (h ? "?govClientId=" + h : "") + (l ? "?finClientId=" + l : "") + (c ? "&env=" + c : "") + "&uri=" + encodeURIComponent(d) + "&useStyleMap=" + e.useStyleMap + "&time=" + u;
                f ? (ht--, lt.push(function() {
                    e && e.destroy && e.destroy(!0)
                }), t.setTimeout(function() {
                    ht <= 0 && !at && ut()
                }, 100)) : (n.jsonp(p, {
                    callback: function(t) {
                        if (t && t.result) ht--, at = !0, lt.length = 0;
                        else {
                            if (t.error) {
                                var e = t.error.errorCode ? t.error.errorCode : "",
                                    n = "";
                                t.error.errorMessage ? n = t.error.errorMessage : t.error.message && (n = t.error.message), o("\ub124\uc774\ubc84 \uc9c0\ub3c4 Open API \uc778\uc99d\uc774 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8 \uc544\uc774\ub514\uc640 \uc6f9 \uc11c\ube44\uc2a4 URL\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.", e + " / " + n)
                            } else o("\ub124\uc774\ubc84 \uc9c0\ub3c4 Open API \uc778\uc99d\uc774 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8 \uc544\uc774\ub514\uc640 \uc6f9 \uc11c\ube44\uc2a4 URL\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.");
                            i()
                        }
                    },
                    error: function() {
                        o("\uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc694\uccad\ud574 \uc8fc\uc138\uc694.", "500 / Internal Server Error (\ub0b4\ubd80 \uc11c\ubc84 \uc624\ub958)"), i()
                    }
                }), f = !0)
            }
        };
    n.CLIENT_ID = s, n.OPENAPI_CLIENT_ID = r, n.NCP_CLIENT_ID = a, n.GOV_CLIENT_ID = h, n.FIN_CLIENT_ID = l, n.USER_LANGUAGE = u;
    var _, m, y, v = {
            onetile: "205",
            dv: "1912.002"
        },
        T = i.documentElement,
        x = {
            CENTER: 0,
            TOP_LEFT: 1,
            TOP_CENTER: 2,
            TOP_RIGHT: 3,
            LEFT_CENTER: 4,
            LEFT_TOP: 5,
            LEFT_BOTTOM: 6,
            RIGHT_TOP: 7,
            RIGHT_CENTER: 8,
            RIGHT_BOTTOM: 9,
            BOTTOM_LEFT: 10,
            BOTTOM_CENTER: 11,
            BOTTOM_RIGHT: 12
        },
        b = {
            LARGE: 1,
            SMALL: 2,
            BUTTON: 1,
            DROPDOWN: 2
        },
        M = {
            KOREAN: "ko",
            ENGLISH: "en",
            CHINESE: "zh",
            JAPANESE: "ja"
        },
        E = {
            BACKWARD_CLOSED_ARROW: 1,
            BACKWARD_OPEN_ARROW: 2,
            CIRCLE: 3,
            FORWARD_CLOSED_ARROW: 4,
            FORWARD_OPEN_ARROW: 5
        },
        S = {
            CIRCLE: "circle",
            PATH: "path",
            CLOSED_PATH: "closedPath"
        },
        P = {
            OPEN_ARROW: 1,
            BLOCK_ARROW: 2,
            CIRCLE: 3,
            DIAMOND: 4
        },
        w = {
            BOUNCE: 1,
            DROP: 2
        },
        O = ["A", "AREA", "BUTTON", "EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"],
        C = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick", "dragstart", "drag", "dragend", "touchstart", "touchmove", "touchend", "pinchstart", "pinch", "pinchend", "tap", "longtap", "twofingertap", "keydown", "keyup"],
        I = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            contextmenu: "rightclick"
        },
        A = 5,
        k = ((t.location.host + "").split(":")[0], t.location.href + ""),
        D = /^file(?=:\/\/\/)/.test(k),
        z = D || 0 === t.location.protocol.indexOf("https"),
        R = k.indexOf("mantle_debug=true") > -1,
        B = Math.floor(t.devicePixelRatio || 1) > 1 ? 2 : 1,
        N = z ? "https://ssl.pstatic.net/static" : "http://static.naver.net",
        V = N + "/maps/mantle/" + B + "x",
        Z = V + "/dot.gif",
        F = Z,
        U = 'Helvetica,AppleSDGothicNeo-Light,nanumgothic,NanumGothic,"\ub098\ub214\uace0\ub515",Dotum,"\ub3cb\uc6c0",sans-serif',
        j = "margin:0;padding:0;border:solid 0 transparent;display:block;box-sizing:content-box !important;",
        X = "position:absolute;top:0;left:0;z-index:0;" + j,
        Y = X + "width:0;height:0;overflow:visible;",
        G = "max-width:none !important;max-height:none !important;min-width:0 !important;min-height:0 !important;",
        W = "-webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-drag: none;",
        K = "-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;",
        H = 1,
        q = {
            mousedown: !0,
            mouseup: !0,
            mousemove: !0,
            touchstart: !0,
            touchmove: !0,
            touchend: !0,
            dblclick: !0,
            doubletap: !0,
            longtap: !0
        },
        J = {
            image: 1,
            circle: 2,
            path: 3,
            closedPath: 4,
            html: 5
        },
        Q = {
            coords: [11, 0, 9, 0, 6, 1, 4, 2, 2, 4, 0, 8, 0, 12, 1, 14, 2, 16, 5, 19, 5, 20, 6, 23, 8, 26, 9, 30, 9, 34, 13, 34, 13, 30, 14, 26, 16, 23, 17, 20, 17, 19, 20, 16, 21, 14, 22, 12, 22, 12, 22, 8, 20, 4, 18, 2, 16, 1, 13, 0],
            type: "poly"
        },
        $ = ["naver:cadastral"],
        tt = "Point",
        et = "LineString",
        it = "Polygon",
        nt = "MultiLineString",
        ot = "GeometryCollection",
        st = "Feature",
        rt = "FeatureCollection",
        at = !1,
        ht = 0,
        lt = [],
        ct = null,
        ut = function() {
            if (0 !== lt.length) {
                for (var e = 0, i = lt.length; e < i; e++) lt[e]();
                lt.length = 0, t.clearTimeout(ct), ct = t.setTimeout(function() {
                    t.N === t.naver.maps && (t.N = null), n = null, t.naver.maps = null
                }, 1e3)
            }
        },
        pt = B > 1,
        dt = pt ? "@2x" : "",
        ft = {},
        gt = ["basic", "terrain", "satellite"],
        _t = {
            BACKGROUND: "bg",
            BACKGROUND_DETAIL: "ol",
            POI_KOREAN: "lko",
            POI_ENGLISH: "len",
            POI_CHINESE: "lzh",
            POI_JAPANESE: "lja",
            BYCYCLE: "br",
            PANORAMA: "ps",
            CADASTRAL: "lp",
            HIKING_TRAIL: "ar",
            CTT: "ctt",
            SUBWAY: "sw",
            TRANSIT: "ts",
            BUS_STATION: "bs",
            INDOOR: "ib"
        },
        mt = function(t) {
            var e = t ? z ? "https://map.pstatic.net/nrb/styles/" : "http://nrb.map.naver.net/styles/" : z ? "https://nrbe.pstatic.net/styles/" : "http://nrbe.map.naver.net/styles/",
                i = [e + "basic" + dt + ".json?fmt=png", e + "terrain" + dt + ".json?fmt=png", e + "satellite" + dt + ".json?fmt=png"];
            return t && i.push(e + "minimap" + dt + ".json?fmt=png"), i
        },
        yt = function(t) {
            return t === M.ENGLISH ? _t.POI_ENGLISH : t === M.CHINESE ? _t.POI_CHINESE : t === M.JAPANESE ? _t.POI_JAPANESE : _t.POI_KOREAN
        },
        vt = ["bg", "ol", "sw", "bs", "ts", "ps", "pr", "br", "ar", "lp", "ctt", "lko", "ib"],
        Tt = vt,
        xt = Tt.indexOf("bs"),
        bt = Tt.indexOf("sw"),
        Mt = Tt.indexOf("ts"),
        Et = {
            TRY_AGAIN_CONTROL: ["init_stylemap \uc774\ubca4\ud2b8 \uc774\ud6c4 Control\uc744 \uc0dd\uc131\ud574 \uc8fc\uc138\uc694.", "\u25a0 Web Dynamic Map \ub9f5 \ud0c0\uc77c \uad6c\ubc84\uc804\uc5d0\uc11c \uc2e0\ubc84\uc804\uc73c\ub85c \uc804\ud658\ud558\uae30(https://navermaps.github.io/maps.js.ncp/docs/tutorial-Migrate-To-StyleMap.html)"],
            TRY_AGAIN_LAYER: ["init_stylemap \uc774\ubca4\ud2b8 \uc774\ud6c4 Layer\ub97c \uc0dd\uc131\ud574 \uc8fc\uc138\uc694.", "\u25a0 Web Dynamic Map \ub9f5 \ud0c0\uc77c \uad6c\ubc84\uc804\uc5d0\uc11c \uc2e0\ubc84\uc804\uc73c\ub85c \uc804\ud658\ud558\uae30(https://navermaps.github.io/maps.js.ncp/docs/tutorial-Migrate-To-StyleMap.html)"]
        },
        St = {
            DEFAULT_TWO_LINE: ["font-family:helvetica,dotum; font-size:14px;color:green;", "font-family:helvetica,dotum; font-size:14px;"]
        };
    n.SSL = z, n.IS_IN_HOUSE = !1;
    var Pt = t.console || {
            info: function(t) {},
            log: function(t) {},
            warn: function(t) {},
            error: function(t) {}
        },
        wt = {
            noop: function() {},
            isDefined: function(t) {
                return t !== e
            },
            isNumber: function(t) {
                return "number" == typeof t
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isFunction: function(t) {
                return "function" == typeof t
            },
            isNull: function(t) {
                return null === t
            },
            isElement: function(t) {
                return !(!t || 1 != t.nodeType)
            },
            hasValue: function(t) {
                return wt.isDefined(t) && null !== t && "" !== t
            },
            isArray: function() {
                return Array.isArray ? function(t) {
                    return Array.isArray(t)
                } : function(t) {
                    return t && t instanceof Array && t.constructor === Array
                }
            }(),
            isEmptyObject: function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            },
            nearRange: function(t, e, i) {
                return Math.max(Math.min(t, i), e)
            },
            forEach: function(t, e) {
                if (!t || !e) return t;
                if (wt.isArray(t))
                    for (var i = 0, n = t.length; i < n && !e(t[i], i, t); i++);
                else
                    for (var o in t)
                        if (t.hasOwnProperty(o) && e(t[o], o, t)) break;
                return t
            },
            getIndexOfElement: function() {
                return Array.prototype.indexOf ? function(t, e, i) {
                    return t.indexOf(e, i)
                } : function(t, e, i) {
                    var n = t.length || 0,
                        o = "number" == typeof i && i < 0 ? n + i : i || 0;
                    if (n <= 0) return -1;
                    for (o < 0 && (o = 0); o < n;) {
                        if (o in t && t[o] === e) return o;
                        o++
                    }
                    return -1
                }
            }(),
            keys: function(t) {
                if (!t || "object" != typeof t) return [];
                if (Object.keys) return Object.keys(t);
                var e = [];
                return n.forEach(t, function(t, i) {
                    e.push(i)
                }), e
            },
            extend: function(t) {
                var e, i, n = !1;
                for ("boolean" == typeof t && (n = t, t = arguments[1]), i = 1; i < arguments.length; i++) e = arguments[i], wt.forEach(e, function(e, i) {
                    switch (typeof e) {
                        case "object":
                            n && e ? e.clone ? t[i] = e.clone() : wt.isArray(e) ? t[i] = Ct([], e) : t[i] = Ct({}, e) : t[i] = e;
                            break;
                        case "undefined":
                            break;
                        default:
                            t[i] = e
                    }
                });
                return t
            },
            equals: function(t, i) {
                var n = typeof t,
                    o = typeof i;
                if (n !== o) return !1;
                if ("object" !== n) return t === i;
                if (t === i) return !0;
                if (t.equals) return t.equals(i);
                if ("object" !== o) return !1;
                var s = wt.keys(t),
                    r = wt.keys(i);
                if (s.length !== r.length) return !1;
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var h = t[a],
                            l = i ? i[a] : e;
                        if ("object" != typeof h) {
                            if (h !== l) return !1
                        } else if (h.equals) {
                            if (!1 === h.equals(l)) return !1
                        } else if (!1 === wt.equals(h, l)) return !1
                    } return !0
            },
            bind: function() {
                return Function.prototype.bind ? function(t, e) {
                    for (var i = [], n = 1, o = arguments.length; n < o; n++) i.push(arguments[n]);
                    return t.bind.apply(t, i)
                } : function(t, e) {
                    for (var i = [], n = 2, o = arguments.length; n < o; n++) i.push(arguments[n]);
                    return function() {
                        for (var n = [], o = 0, s = arguments.length; o < s; o++) n[o] = arguments[o];
                        return t.apply(e, i.concat(n))
                    }
                }
            }(),
            capitalize: function() {
                var t = {};
                return function(e) {
                    return t[e] || (t[e] = e.substring(0, 1).toUpperCase() + e.substring(1)), t[e]
                }
            }(),
            toNumber: function(t) {
                return parseFloat(t) || 0
            }
        };
    wt.extend(n, wt), wt.BLANK_IMAGE = Z, n.calcFitZoomAndCenter = function(t, e, i, o, s, r) {
        var a = i.fromCoordToPoint(e.getMin()),
            h = i.fromCoordToPoint(e.getMax()),
            l = Dt.bounds(a, h);
        a = l.getMin(), h = l.getMax();
        for (var c = h.x - a.x, u = h.y - a.y, p = kt(c / 2 + a.x, u / 2 + a.y), d = r || 0;

            function(t, e, i) {
                return t.width >= e && t.height >= i
            }(t, c, u) && !(d > o);) d++, c *= 2, u *= 2;
        return d--, d = n.nearRange(d, s, o), {
            zoom: d,
            center: i.fromPointToCoord(p),
            centerPoint: p
        }
    }, n.calcAnchorPosition = function(t, e) {
        if (e instanceof kt) return e;
        if (n.isFunction(e)) return e(t.width, t.height);
        var i = t.width,
            o = t.height,
            s = i / 2,
            r = o / 2,
            a = null;
        switch (e) {
            case x.CENTER:
                a = kt(s, r);
                break;
            case x.TOP_LEFT:
            case x.LEFT_TOP:
                a = kt();
                break;
            case x.TOP_CENTER:
                a = kt(s, 0);
                break;
            case x.TOP_RIGHT:
            case x.RIGHT_TOP:
                a = kt(i, 0);
                break;
            case x.LEFT_CENTER:
                a = kt(0, r);
                break;
            case x.LEFT_BOTTOM:
            case x.BOTTOM_LEFT:
                a = kt(0, o);
                break;
            case x.RIGHT_CENTER:
                a = kt(i, r);
                break;
            case x.RIGHT_BOTTOM:
            case x.BOTTOM_RIGHT:
                a = kt(i, o);
                break;
            case x.BOTTOM_CENTER:
                a = kt(s, o);
                break;
            default:
                a = kt(s, o)
        }
        return a
    }, n.round = Math.round, n.floor = Math.floor, n.ceil = Math.ceil, n.trbl = function(t) {
        return t = Ct({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t), t.top = parseFloat(t.top), t.right = parseFloat(t.right), t.bottom = parseFloat(t.bottom), t.left = parseFloat(t.left), t
    }, n.trbl_isZero = function(t) {
        return 0 === t.top && 0 === t.right && 0 === t.bottom && 0 === t.left
    }, n.trbl_abs = function(t) {
        return t.top = Math.abs(t.top), t.right = Math.abs(t.right), t.bottom = Math.abs(t.bottom), t.left = Math.abs(t.left), t
    }, n.getLiteralType = function(t) {
        var e = {
            Point: ["x", "y"],
            LatLng: ["lat", "lng"],
            PointBounds: ["minX", "minY", "maxX", "maxY"],
            LatLngBounds: ["west", "south", "east", "north"]
        };
        if (n.isArray(t)) return 2 === t.length ? n.Point : 4 === t.length ? n.PointBounds : 3 === t.length ? n.Point : null;
        for (var i in e)
            if (e.hasOwnProperty(i) && n.isObjectLiteral(t, e[i])) return n[i];
        return null
    }, n.isObjectLiteral = function(t, e) {
        if (!t || "object" != typeof t) return !1;
        for (var i = !0, n = 0, o = e.length; n < o; n++)
            if (!(e[n] in t)) {
                i = !1;
                break
            } return i
    }, n.box = function(t) {
        if (t instanceof n.Point || t instanceof n.PointBounds || t instanceof n.Size) return t;
        for (var e, i = [], o = 0, s = arguments.length; o < s; o++) {
            if ("function" == typeof arguments[o]) {
                e = arguments[o];
                break
            }
            i.push(arguments[o])
        }
        return e || (e = n.getLiteralType.apply(this, i)), e && e.apply(e, i)
    }, n.boxToIcon = function(t) {
        if (!t) return {
            url: V + "/marker-default.png",
            size: n.Size(22, 33),
            scaledSize: n.Size(22, 33),
            origin: n.Point(0, 0),
            anchor: n.Point(11, 33),
            type: "image"
        };
        if ("string" == typeof t) return {
            url: t,
            type: "image"
        };
        var e = n.extend({}, t);
        if (e.size && (e.size = n.box(e.size, Bt)), e.scaledSize && (e.scaledSize = n.box(e.scaledSize, Bt)), e.origin && (e.origin = n.box(e.origin, kt)), e.anchor && "number" != typeof e.anchor && (e.anchor = n.box(e.anchor, kt)), n.isString(e.url)) e.type = "image";
        else if (e.path || e.style) {
            var i = [
                [kt(0, 12), kt(12, 0), kt(24, 12)],
                [kt(0, 0), kt(12, 12), kt(24, 0)]
            ];
            switch (e.path) {
                case E.CIRCLE:
                    e.style = S.CIRCLE;
                    break;
                case E.BACKWARD_CLOSED_ARROW:
                case E.FORWARD_CLOSED_ARROW:
                    e.path = i[e.path % 2], e.style = S.CLOSED_PATH;
                    break;
                case E.BACKWARD_OPEN_ARROW:
                case E.FORWARD_OPEN_ARROW:
                    e.path = i[(e.path - 1) % 2], e.style = S.PATH;
                    break;
                default:
                    n.isArray(e.path) && (e.path = n.boxToPath(e.path))
            }
            var o;
            e.style === S.CLOSED_PATH ? (o = n.DrawingUtil.getBounds(e.path), e.minBoundPoint = o.min, e.maxBoundPoint = o.max, e.paths = [e.path]) : e.style === S.PATH ? (o = n.DrawingUtil.getBounds(e.path), e.minBoundPoint = o.min, e.maxBoundPoint = o.max) : e.style === S.CIRCLE && (e.path = null, e.radius = e.radius || 10, e.center = {
                x: e.radius,
                y: e.radius
            }), e.type = e.style
        } else e.content && (e.type = "html");
        return e
    }, n.boxToPath = function(t) {
        var e = [];
        return n.forEach(t, function(t) {
            e.push(n.box(t))
        }), e
    }, n.now = function() {
        return Date.now ? function() {
            return Date.now()
        } : function() {
            return (new Date).getTime()
        }
    }(), n.guid = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" == t ? e : 3 & e | 8).toString(16)
        }).toUpperCase()
    }, n.jsonp = function(e, o) {
        var s = Ct({
                charset: "utf-8",
                callbackname: "callback",
                callback: null,
                data: {}
            }, o),
            r = Nt.createElement("script"),
            a = i.getElementsByTagName("head")[0],
            h = i.body;
        r.type = "text/javascript", r.charset = s.charset, a ? a.appendChild(r) : h && h.appendChild(r);
        var l = n.jsonp.id++,
            c = "__naver_maps_callback__" + l,
            u = function() {
                t.setTimeout(function() {
                    try {
                        Nt.removeElement(r), t[c] = null
                    } catch (t) {}
                }, 10)
            },
            p = function(t) {
                r.onreadystatechange && (r.onreadystatechange = null), s.callback && s.callback(t), u()
            },
            d = function() {
                s.error && s.error(), u()
            };
        t[c] = function(t) {
            try {
                p(t)
            } catch (t) {}
        }, "onreadystatechange" in r ? r.onreadystatechange = function() {
            "loaded" === r.readyState && (t[c] ? d() : u(), r.onreadystatechange = null)
        } : (r.onload = function() {
            r.onload = null, r.onerror = null
        }, r.onerror = function() {
            d(), r.onload = null, r.onerror = null
        }), o && (e += (-1 === e.indexOf("?") ? "?" : "&") + s.callbackname + "=" + c), s.data && n.forEach(s.data, function(t, i) {
            e += ["&", i, "=", t].join("")
        }), r.src = e
    }, n.jsonp.id = 0;
    var Lt = n.noop,
        Ot = n.bind,
        Ct = n.extend;
    n.glSupported = function() {
        return !1
    };
    ! function() {
        for (var e = navigator.userAgent.toLowerCase(), o = function(t) {
                var e, i;
                return (e = /(webkit)[ \/]([\w.]+)/.exec(t)) ? ((i = /chrome\/([\w.]+)/.exec(t)) ? (e[2] = i[1], e[3] = "chrome") : (i = /version\/([\w.]+)/.exec(t)) && (e[2] = i[1], /safari\/([\w.]+)/.exec(t) && (e[3] = "safari")), t.indexOf(" edge") > -1 && (e[3] = "edge"), t.indexOf("naver(") > -1 && (e[3] = "naver"), e) : (e = /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(t)) ? e : (e = /(msie) ([\w.]+)/.exec(t)) ? e : (e = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(t)) ? (i = /rv:([\w.]+)/.exec(t), e[2] = i[1], t.indexOf("trident") > -1 && (e[1] = "msie"), e) : []
            }(e), s = {}, r = !1, a = ["ipad", "ipod", "iphone"], h = ["android", "nokia", "webos", "opera mini", "blackberry"].concat(a), l = 0; l < h.length; l++)
            if (e.indexOf(h[l]) > -1) {
                r = h[l];
                break
            } for (l = 0; l < a.length; l++)
            if (r === a[l]) {
                r = "iOS";
                break
            } if (s[o[1]] = !0, s.version = parseFloat(o[2]), s.msie) {
            var c = /trident\/([\w.]+)/.exec(e);
            c && c[1] && (s.trident = parseFloat(c[1])), (i.documentMode && i.documentMode <= 8 || s.version <= 8) && (s.csszoom = !0)
        }
        if (o[3] && (s[o[3]] = !0), "android" !== r || s.chrome || s.naver || !s.webkit || (s.android = !0), n.Agent = {
                browser: s,
                devicePixelRatio: t.devicePixelRatio || 1,
                mobile: r
            }, "android" === r) {
            var u = e.match(/android\s([0-9\.]*)/);
            u && u[1] && (n.Agent.version = u[1])
        }
        var p = !1,
            d = !1,
            f = !1;
        if (r) {
            if ("iOS" === r) d = !0;
            else if ("android" === r) {
                var g = parseFloat(n.Agent.version);
                g >= 4.1 && (d = !0, g < 4.2 && (p = !0))
            }
        } else d = !0, s.chrome ? (f = !0, d = !1) : s.msie && s.version < 10 ? d = !1 : s.safari && 5.1 === s.version && (d = !1);
        !r && ("ontouchstart" in t || navigator.maxTouchPoints) && (n.Agent.touchablePC = !0), n.Agent.usingGPU = d, n.Agent.restrictiveGPU = p, n.Agent.poorGPU = f
    }();
    var It = n.Agent;
    wt.Agent = It,
        function() {
            It.mobile ? (_ = ["touchstart", "touchend", "click"], m = _.concat(["touchmove"]), y = _, GROUND_DOMEVENTS = _, A = 8) : (_ = ["click", "mousedown", "mouseup", "contextmenu"], m = _.concat(["mousemove", "mouseout", "mouseover"]), y = It.browser.safari && 5.1 === It.browser.version ? _.concat(["mouseover", "mouseout"]) : _.concat(["mouseenter", "mouseleave"]), GROUND_DOMEVENTS = _, A = 5, It.touchablePC && (A = 8, m = m.concat("touchstart"), y = y.concat("touchstart")))
        }(),
        function() {
            var t = n.Agent.browser.msie || n.Agent.browser.edge,
                e = "font-family:helvetica,dotum;";
            n.console = {
                header: t ? " NAVER Maps JavaScript API v3 \n\n" : "%c NAVER Maps JavaScript API v3 %c\n\n",
                multiMessageHeader: t ? " NAVER Maps JavaScript API v3 \n\n" : "%c NAVER Maps JavaScript API v3 \n\n",
                headerStyle: t ? "" : e + "font-size:16px;background: #2db400; color: white; display: block;",
                msgStyle: t ? "" : e + "font-size:14px;background: #fff; color: #334231; display: inline;",
                once: function() {
                    var e = {};
                    return function(i, o) {
                        if (!e[i]) try {
                            var s = Ct({
                                header: n.console.headerStyle,
                                msg: n.console.msgStyle
                            }, o || {});
                            t && (s.header = "", s.msg = ""), Pt.info(n.console.header + i, s.header, s.msg), e[i] = 1
                        } catch (t) {}
                    }
                }(),
                info: function(e, i) {
                    try {
                        var o = Ct({
                            header: n.console.headerStyle,
                            msg: n.console.msgStyle
                        }, i || {});
                        t && (o.header = "", o.msg = ""), Pt.info(n.console.header + e, o.header, o.msg)
                    } catch (t) {}
                },
                log: function(e, i) {
                    if (e) {
                        var o = n.isArray(i),
                            s = n.isArray(e),
                            r = s ? "" : e,
                            a = s ? e.length : 1,
                            h = i || n.console.msgStyle,
                            l = o ? h : [h],
                            c = o ? n.console.msgStyle : h,
                            u = s ? n.console.multiMessageHeader : n.console.header;
                        try {
                            s && n.forEach(e, function(t) {
                                r += "%c" + t + "\n", o || l.push(c)
                            }), l.length > a && (l.length = a);
                            if (l.length < a)
                                for (; a > l.length;) l.push(c);
                            if (l.unshift(n.console.headerStyle), r = u + r, t) {
                                var p = r.split("%c");
                                return void Pt.log(p.join(""))
                            }
                            Pt.log.apply(Pt, [r].concat(l))
                        } catch (t) {
                            Pt.log(s ? e.join(" ") : e)
                        }
                    }
                }
            }
        }();
    var At = function(t, e, i, n) {
        var o = function() {},
            s = [],
            r = {},
            a = {};
        e && (o.prototype = e.prototype, a = new o), wt.isArray(i) ? (s = i, r = n) : r = i || {};
        for (var h = 0, l = s.length; h < l; h++) wt.forEach(s[h], function(t, e) {
            if (a[e]) throw new Error("property '" + e + "' is already exist.");
            a[e] = t
        });
        return wt.forEach(r, function(t, e) {
            a[e] = t
        }), a.constructor = t, t.prototype = a, t
    };
    At.getMembers = function(t) {
            var e = {};
            return wt.forEach(t.prototype, function(t, i) {
                "constructor" !== i && (e[i] = t)
            }), e
        }, wt.ClassExtend = At, n.easing = {
            linear: function(t, e, i) {
                return t * i + e
            },
            easeInQuad: function(t, e, i) {
                return i * t * t + e
            },
            easeOutQuad: function(t, e, i) {
                return -i * t * (t - 2) + e
            },
            easeInCubic: function(t, e, i) {
                return i * t * t * t + e
            },
            easeOutCubic: function(t, e, i) {
                return i * ((t -= 1) * t * t + 1) + e
            },
            easeOutBounce: function(t, e, i) {
                return t < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
            }
        }, n.TransitionQueue = function() {
            var t = [],
                e = null;
            return {
                getQueue: function() {
                    return t
                },
                addJob: function(e) {
                    return 1 === t.push(e) && this._run(), e
                },
                pop: function() {
                    var e = t.pop();
                    return 0 === t.length && this._stop(), e
                },
                removeJob: function(e) {
                    var i = n.getIndexOfElement(t, e);
                    return i > -1 && t.splice(i, 1), 0 === t.length && this._stop(), i > -1 ? e : null
                },
                _run: function() {
                    e || (this._fProcess || (this._fProcess = Ot(this._process, this)), e = n.requestAnimationFrame(this._fProcess))
                },
                _process: function() {
                    var i, o = t.length;
                    if (o > 0) {
                        for (o -= 1; o >= 0; o--)(i = t[o]) && i();
                        e = n.requestAnimationFrame(this._fProcess)
                    } else e = null, this._stop()
                },
                _stop: function() {
                    !e || t.length > 0 || (n.cancelAnimationFrame(e), e = null, t.length = 0, t = [])
                }
            }
        }(), n.Transition = function(t) {
            this.relations = [], this.options = Ct({
                start: Lt,
                progress: Lt,
                complete: Lt,
                stop: Lt,
                step: 0,
                duration: 0,
                easing: n.easing.linear
            }, t)
        }, n.Transition.prototype = {
            constructor: n.Transition,
            isRunning: function() {
                return this._animLoop !== e
            },
            _getEasing: function(t) {
                return n.isFunction(t) ? t : n.easing[t]
            },
            run: function(t, e, i) {
                i = i || {};
                var o = this.options,
                    s = this._getEasing(i.easing || o.easing),
                    r = i.duration || o.duration,
                    a = n.now(),
                    h = o.step,
                    l = i.infinity || !1,
                    c = a,
                    u = {
                        from: t,
                        to: e,
                        easing: s,
                        progress: {}
                    },
                    p = this;
                this.stop(), o.start(), Zt.trigger(p, "start"), this._animLoop = function() {
                    var i = n.now(),
                        d = i - a,
                        f = d / r;
                    if (!(i - c < h)) {
                        if (c = i, d >= r ? u.progress = e : n.forEach(t, function(t, i) {
                                u.progress[i] = s(f, t, e[i] - t)
                            }), u.factor = f, d < r) return o.progress(u), Zt.trigger(p, "progress", u);
                        o.progress(u), Zt.trigger(p, "progress", u), l || (p.stop(), o.complete(), Zt.trigger(p, "complete"))
                    }
                }, n.TransitionQueue.addJob(this._animLoop)
            },
            stop: function() {
                this.isRunning() && (n.TransitionQueue.removeJob(this._animLoop), this._animLoop = null, delete this._animLoop, this.options.stop(), Zt.trigger(this, "stop"))
            },
            addListener: function(t, i) {
                if ("string" != typeof t && i === e) {
                    var o = t,
                        s = [],
                        r = this;
                    return n.forEach(o, function(t, e) {
                        s.push(Zt.addListener(r, e, t))
                    }), this.relations = this.relations.concat(s), s
                }
                var a = Zt.addListener(this, t, i);
                return this.relations.push(a), a
            },
            removeListener: function(t) {
                var e = n.getIndexOfElement(this.relations, t);
                e > -1 && this.relations.splice(e, 1), Zt.removeListener(t)
            },
            clearListeners: function() {
                for (var t = 0, e = this.relations.length; t < e; t++) Zt.removeListener(this.relations[t]);
                this.relations.length = 0, this.relations = []
            }
        },
        function() {
            for (var e = 0, i = ["webkit", "moz"], o = 0; o < i.length && !t.requestAnimationFrame; ++o) t.requestAnimationFrame = t[i[o] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[o] + "CancelAnimationFrame"] || t[i[o] + "CancelRequestAnimationFrame"];
            n.requestAnimationFrame = function(i, o) {
                var s = n.now(),
                    r = Math.max(0, 16 - (s - e)),
                    a = t.setTimeout(function() {
                        i(s + r)
                    }, r);
                return e = s + r, a
            }, n.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }, t.requestAnimationFrame || (t.requestAnimationFrame = n.requestAnimationFrame), t.cancelAnimationFrame || (t.cancelAnimationFrame = n.cancelAnimationFrame)
        }(), n.Point = function(t, e) {
            if (!(this instanceof n.Point)) return new n.Point(t, e);
            var i = this._unbox(t, e);
            this.x = i[0], this.y = i[1]
        }, n.Point.prototype = {
            constructor: n.Point,
            _unbox: function(t, e) {
                var i, o, s = t,
                    r = s && n.getLiteralType(s);
                if (n.isArray(s)) i = s[0], o = s[1];
                else if (r) {
                    if (r !== kt) throw new Error("not a PointLiteral");
                    i = s.x, o = s.y
                } else i = "number" == typeof t ? t : parseFloat(t), o = "number" == typeof e ? e : parseFloat(e);
                return [i || 0, o || 0]
            },
            clone: function() {
                return new n.Point(this.x, this.y)
            },
            toString: function() {
                return "(" + this.x + "," + this.y + ")"
            },
            equals: function(t) {
                return t = n.box(t, kt), this.x == t.x && this.y == t.y
            },
            add: function(t, e) {
                return t = n.box(t, e, kt), this.x += t.x, this.y += t.y, this
            },
            sub: function(t, e) {
                return t = n.box(t, e, kt), this.x -= t.x, this.y -= t.y, this
            },
            mul: function(t, e) {
                return t = n.box(t, e, kt), this.x *= t.x, this.y *= t.y, this
            },
            div: function(t, e) {
                return t = n.box(t, e, kt), this.x /= t.x, this.y /= t.y, this
            },
            round: function() {
                return this.x = n.round(this.x), this.y = n.round(this.y), this
            },
            floor: function() {
                return this.x = n.floor(this.x), this.y = n.floor(this.y), this
            },
            ceil: function() {
                return this.x = n.ceil(this.x), this.y = n.ceil(this.y), this
            },
            toArray: function() {
                return [this.x, this.y]
            },
            isEmpty: function() {
                return !this.x && !this.y
            }
        };
    var kt = n.Point;
    n.PointBounds = function(t, e) {
        if (!(this instanceof Dt)) return new Dt(t, e);
        var i = this._unbox(t, e);
        this._min = i[0], this._max = i[1]
    }, n.PointBounds.prototype = {
        constructor: n.PointBounds,
        _unbox: function(t, e) {
            var i, o, s = e ? null : t;
            if (s)
                if (n.isArray(s)) i = new kt(s[0], s[1]), o = new kt(s[2], s[3]);
                else {
                    if (n.getLiteralType(s) !== Dt) throw new Error("not a PointBoundsLiteral");
                    i = new kt(s.minX, s.minY), o = new kt(s.maxX, s.maxY)
                }
            else i = new kt(t), o = new kt(e);
            return [i || t, o || e]
        },
        clone: function() {
            return new Dt(this._min.clone(), this._max.clone())
        },
        toString: function() {
            return "(" + this._min + "," + this._max + ")"
        },
        hasPoint: function(t) {
            t = n.box(t, kt);
            var e = t.x,
                i = t.y,
                o = this.minX(),
                s = this.maxX(),
                r = i >= this.minY() && i <= this.maxY();
            return r && (r = e >= o && e <= s), r
        },
        hasBounds: function(t) {
            t = n.box(t, Dt);
            var e = t.getMin(),
                i = t.getMax();
            return !(!this.hasPoint(e) || !this.hasPoint(i))
        },
        intersects: function(t) {
            t = n.box(t, Dt);
            var e = this.minX(),
                i = this.maxX(),
                o = t.minX(),
                s = t.maxX();
            return this.minY() <= t.maxY() && this.maxY() >= t.minY() && e <= s && i >= o
        },
        getCenter: function() {
            var t = this.minX() + Math.abs(this.maxX() - this.minX()) / 2,
                e = this.minY() + Math.abs(this.maxY() - this.minY()) / 2;
            return kt(t, e)
        },
        equals: function(t) {
            return t = n.box(t, Dt), this.getMin().equals(t.getMin()) && this.getMax().equals(t.getMax())
        },
        getMin: function() {
            return this._min
        },
        getMax: function() {
            return this._max
        },
        minX: function() {
            return this._min.x
        },
        minY: function() {
            return this._min.y
        },
        maxX: function() {
            return this._max.x
        },
        maxY: function() {
            return this._max.y
        },
        extend: function(t) {
            t = n.box(t, kt);
            var e, i, o = this._min,
                s = this._max;
            return e = t, i = t, o.x = Math.min(e.x, o.x), o.y = Math.min(e.y, o.y), s.x = Math.max(i.x, s.x), s.y = Math.max(i.y, s.y), this
        },
        union: function(t) {
            t = n.box(t, Dt);
            var e = Math.min(this.minY(), t.minY()),
                i = Math.max(this.maxY(), t.maxY()),
                o = Math.min(this.minX(), t.minX()),
                s = Math.max(this.maxX(), t.maxX());
            return new Dt(kt(o, e), kt(s, i))
        },
        toArray: function() {
            return [this.getMin().toArray(), this.getMax().toArray()]
        }
    }, n.PointBounds.bounds = function() {
        if (arguments.length < 2) return null;
        for (var t = [], e = 0, i = arguments.length; e < i; e++) t[e] = n.box(arguments[e], kt);
        for (var o, s, r, a, h = [], l = [], c = 0, u = t.length; c < u; c++) h.push(t[c].x), l.push(t[c].y);
        return o = Math.min.apply(Math, h), r = Math.max.apply(Math, h), s = Math.min.apply(Math, l), a = Math.max.apply(Math, l), Dt(kt(o, s), kt(r, a))
    };
    var Dt = n.PointBounds;
    n.LatLng = function(t, e) {
        if (!(this instanceof n.LatLng)) return new n.LatLng(t, e);
        var i = this._unbox(t, e);
        this._lat = this.y = i[1], this._lng = this.x = i[0]
    }, At(n.LatLng, n.Point, {
        _unbox: function(t, e) {
            var i, o, s = t,
                r = n.getLiteralType(s);
            return n.isArray(s) ? (i = s[0], o = s[1]) : r ? r === zt ? (i = s.lng, o = s.lat) : r === kt && (i = s.x, o = s.y) : (i = "number" == typeof e ? e : parseFloat(e), o = "number" == typeof t ? t : parseFloat(t)), [i || 0, o || 0]
        },
        lat: function() {
            return this._lat
        },
        lng: function() {
            return this._lng
        },
        clone: function() {
            return new n.LatLng(this._lat, this._lng)
        },
        equals: function(t, i) {
            return t = n.box(t, zt), Math.max(Math.abs(this.lat() - t.y), Math.abs(this.lng() - t.x)) <= (i === e ? 1e-9 : i)
        },
        destinationPoint: function(t, e) {
            var i = n.Math.fromDegreesToRadians,
                o = n.Math.fromRadiansToDegrees;
            e /= 6378137, t = i(t);
            var s = i(this.lat()),
                r = i(this.lng()),
                a = Math.asin(Math.sin(s) * Math.cos(e) + Math.cos(s) * Math.sin(e) * Math.cos(t)),
                h = Math.atan2(Math.sin(t) * Math.sin(e) * Math.cos(s), Math.cos(e) - Math.sin(s) * Math.sin(a)) + r;
            return isNaN(a) || isNaN(h) ? null : new n.LatLng(o(a), o(h))
        },
        toPoint: function() {
            return new n.Point(this.lng(), this.lat())
        },
        isEmpty: function() {
            return !this._lat && !this._lng
        },
        add: Lt,
        sub: Lt,
        mul: Lt,
        div: Lt,
        round: Lt,
        floor: Lt,
        ceil: Lt
    });
    var zt = n.LatLng;
    zt.prototype.toString = function() {
        return "(lat:" + this._lat + ",lng:" + this._lng + ")"
    }, n.LatLngBounds = function(t, e) {
        if (!(this instanceof Rt)) return new Rt(t, e);
        var i = this._unbox(t, e);
        this._sw = this._min = i[0], this._ne = this._max = i[1], !this._sw || this._ne && !this._ne.isEmpty() || (this._ne = this._max = this._sw.clone())
    }, At(n.LatLngBounds, n.PointBounds, {
        _unbox: function(t, e) {
            var i, o, s = e ? null : t,
                r = s && n.getLiteralType(s);
            return s ? n.isArray(s) ? (i = new zt(s[1], s[0]), o = new zt(s[3], s[2])) : r && (r === Rt ? (i = new zt(s.south, s.west), o = new zt(s.north, s.east)) : r == Dt && (i = new zt(s.minY, s.minX), o = new zt(s.maxY, s.maxX))) : (i = new zt(t), o = new zt(e)), [i || t, o || e]
        },
        clone: function() {
            return new Rt(this._sw.clone(), this._ne.clone())
        },
        hasPoint: function(t) {
            t = n.box(t, zt);
            var e = t.x,
                i = t.y,
                o = this.minX(),
                s = this.maxX(),
                r = i >= this.minY() && i <= this.maxY();
            return r && (r = o <= s ? e >= o && e <= s : e >= s && e <= o), r
        },
        hasLatLng: function(t) {
            return t = n.box(t, zt), this.hasPoint(t)
        },
        intersects: function(t) {
            t = n.box(t, Rt);
            var e = this.minX(),
                i = this.maxX(),
                o = i < e ? i + 360 : i,
                s = t.minX(),
                r = t.maxX(),
                a = r < s ? r + 360 : r;
            return this.minY() <= t.maxY() && this.maxY() >= t.minY() && e <= a && o >= s
        },
        getCenter: function() {
            var t = this.minY() + Math.abs(this.maxY() - this.minY()) / 2,
                e = this.minX() + Math.abs((this.minX() > this.maxX() ? 360 : 0) + this.maxX() - this.minX()) / 2;
            return n.LatLng(t, e)
        },
        equals: function(t) {
            return t = n.box(t, Rt), this.getMin().equals(t.getMin()) && this.getMax().equals(t.getMax())
        },
        getSW: function() {
            return this.getMin()
        },
        getNE: function() {
            return this.getMax()
        },
        minX: function() {
            return this._sw.lng()
        },
        minY: function() {
            return this._sw.lat()
        },
        maxX: function() {
            return this._ne.lng()
        },
        maxY: function() {
            return this._ne.lat()
        },
        south: function() {
            return this.minY()
        },
        west: function() {
            return this.minX()
        },
        north: function() {
            return this.maxY()
        },
        east: function() {
            return this.maxX()
        },
        extend: function(t) {
            t = n.box(t, zt);
            var e, i, o = this._sw,
                s = this._ne;
            return e = t, i = t, o._lat = this._min.y = Math.min(e.y, o.y), o._lng = this._min.x = Math.min(e.x, o.x), s._lat = this._max.y = Math.max(i.y, s.y), s._lng = this._max.x = Math.max(i.x, s.x), o.isEmpty() && (this._sw = this._min = s.clone()), this
        },
        union: function(t) {
            t = n.box(t, Rt);
            var e, i, o = Math.min(this.minY(), t.minY()),
                s = Math.max(this.maxY(), t.maxY()),
                r = function(t, e) {
                    var i = Math.abs(e.maxX() - t.minX());
                    return t.minX() > 0 && e.maxX() < 0 && (i += 360), i
                };
            return r(this, t) < r(t, this) ? (e = t.minX(), i = this.maxX()) : (e = this.minX(), i = t.maxX()), new n.LatLngBounds(n.LatLng(o, e), n.LatLng(s, i))
        },
        toPointBounds: function() {
            return new n.PointBounds(this.getMin().toPoint(), this.getMax().toPoint())
        }
    }), n.LatLngBounds.bounds = function() {
        if (arguments.length < 2) return null;
        for (var t = [], e = 0, i = arguments.length; e < i; e++) t[e] = n.box(arguments[e], zt);
        for (var o, s, r, a, h = [], l = [], c = 0, u = t.length; c < u; c++) h.push(t[c].lat()), l.push(t[c].lng());
        return o = Math.min.apply(Math, h), r = Math.max.apply(Math, h), s = Math.min.apply(Math, l), a = Math.max.apply(Math, l), Rt(zt(o, s), zt(r, a))
    };
    var Rt = n.LatLngBounds;
    n.Size = function(t, e) {
        if (!(this instanceof n.Size)) return new n.Size(t, e);
        var i = ["width", "height"];
        n.isArray(t) ? (e = t[1], t = t[0]) : n.isObjectLiteral(t, i) ? (e = t.height, t = t.width) : ("number" != typeof t && (t = parseFloat(t)), "number" != typeof e && (e = parseFloat(e))), this.width = t || 0, this.height = e || 0
    }, n.Size.prototype = {
        constructor: n.Size,
        clone: function() {
            return new n.Size(this.width, this.height)
        },
        toString: function() {
            return "(w:" + this.width + ",h:" + this.height + ")"
        },
        equals: function(t) {
            return t = n.box(t, Bt), this.width == t.width && this.height == t.height
        },
        add: function(t, e) {
            return t = n.box(t, e, Bt), this.width += t.width, this.height += t.height, this
        },
        sub: function(t, e) {
            return t = n.box(t, e, Bt), this.width -= t.width, this.height -= t.height, this
        },
        mul: function(t, e) {
            return t = n.box(t, e, Bt), this.width *= t.width, this.height *= t.height, this
        },
        div: function(t, e) {
            return t = n.box(t, e, Bt), this.width /= t.width, this.height /= t.height, this
        },
        round: function() {
            return this.width = n.round(this.width), this.height = n.round(this.height), this
        },
        floor: function() {
            return this.width = n.floor(this.width), this.height = n.floor(this.height), this
        },
        ceil: function() {
            return this.width = n.ceil(this.width), this.height = n.ceil(this.height), this
        }
    };
    var Bt = n.Size;
    n.DOM = {
        createElement: function(t, e) {
            var n = i.createElement(t);
            return e && (n.style.cssText = e), n
        },
        addElement: function(t, e) {
            t && e && e.appendChild(t)
        },
        removeElement: function(t) {
            if (t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }
        },
        insertAt: function(t, e, i) {
            var n = t.childNodes,
                o = n.length;
            0 === o || i >= o ? t.appendChild(e) : t.insertBefore(e, n[i])
        },
        removeAt: function(t, e) {
            var i = t.childNodes,
                n = i[e];
            i.length;
            n && this.removeElement(n)
        },
        calculateSize: function(t, e) {
            var o, s = Nt.SIZE_ELEMENT,
                r = n.Size();
            return s || (s = Nt.createElement("div", "position:absolute;margin:0;padding:0;border:0 none;top:-100000px;left:-100000px;"), Nt.SIZE_ELEMENT = s), e ? e.appendChild(s) : i.body.appendChild(s), o = t.cloneNode(!0), o.style.position = "relative", s.innerHTML = "", s.appendChild(o), r = Nt.getSize(s), r.width = Math.ceil(r.width), r.height = Math.ceil(r.height), s.innerHTML = "", Nt.removeElement(s), r
        },
        visible: function(t, e) {
            var i = t.style;
            return "boolean" == typeof e && (i.display = e ? "" : "none"), "none" !== i.display
        },
        toggle: function(t) {
            return Nt.visible(t, !Nt.visible(t))
        },
        setZIndex: function(t, e) {
            t.style.zIndex = e || 0
        },
        getCSS: function() {
            if (i.defaultView && i.defaultView.getComputedStyle) return function(e, n) {
                return t.getComputedStyle ? i.defaultView.getComputedStyle(e, null).getPropertyValue(n.replace(/([A-Z])/g, "-$1").toLowerCase()) || e.style[n] : e.style[n]
            };
            if (T.currentStyle) {
                var e = function(t) {
                        return "float" == t ? "styleFloat" : t
                    },
                    n = function(t, e) {
                        return t.currentStyle ? t.currentStyle[e] || t.style[e] : t.style[e]
                    };
                return It.browser.msie ? function(t, i) {
                    return n(t, e(i))
                } : n
            }
        }(),
        getCSSValue: function(t, e) {
            return parseFloat(Nt.getCSS(t, e)) || 0
        },
        contains: function() {
            return T.compareDocumentPosition ? function(t, e) {
                return !!(16 & t.compareDocumentPosition(e))
            } : T.contains ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e.parentNode;
                return i === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
            } : function(t, e) {
                for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1
            }
        }(),
        setBackgroundSize: function(t, e) {
            t.style[Nt.vendorPrefix + "BackgroundSize"] = e, t.style.backgroundSize = e
        }
    };
    var Nt = n.DOM;
    ! function() {
        var n = T,
            o = n.style,
            s = {},
            r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            },
            a = {
                input: null,
                form: null,
                img: null,
                div: null
            },
            h = function(t) {
                var e = r[t] || "div";
                return a[e] || (a[e] = i.createElement(e)), a[e]
            };
        Nt.isSupportedStyle = function(t) {
            return o[t] !== e
        }, Nt.isSupportedEvent = function(i) {
            if (s[i] === e) {
                var n = h(i),
                    o = "on" + i,
                    r = o in n || o in t;
                r || (n.setAttribute(o, "return;"), r = "function" == typeof n[o]), s[i] = r
            }
            return s[i]
        }
    }(), n.DOMEvent = function() {
        function o(t) {
            t.target || (t.target = t.srcElement || i), 3 === t.target.nodeType && (t.target = t.target.parentNode)
        }

        function s(t) {
            n.hasValue(t.which) || (t.which = n.hasValue(t.charCode) ? t.charCode : t.keyCode)
        }

        function r(t) {
            if (!n.hasValue(t.pageX) || n.hasValue(t.clientX)) {
                var e = t.target.ownerDoucment || i,
                    o = e.documentElement,
                    s = e.body;
                t.pageX = t.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
            }
            return t
        }

        function a(t) {
            r(t), l(t), c(t)
        }

        function h(t) {
            var e = t.touches || [],
                i = t.changedTouches || [],
                n = 0,
                o = 0;
            for (n = 0, o = e.length; n < o; n++) r(e[n]);
            for (n = 0, o = i.length; n < o; n++) r(i[n])
        }

        function l(t) {
            var e = t.relatedTarget,
                i = t.fromElement,
                n = t.toElement;
            !e && i && n && (t.relatedTarget = i == t.target ? n : i)
        }

        function c(t) {
            if (!t.which && t.button !== e) {
                var i = t.button;
                t.which = 1 & i ? m : 2 & i ? v : 4 & i ? y : _
            }
        }

        function u(t) {
            return t % 120 == 0 ? t / 120 : t % 3 == 0 ? t / 3 : t
        }

        function p() {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                t.addEventListener("test", null, i)
            } catch (t) {}
            return e
        }
        var d = /mouse|click$|^context/i,
            f = /^touch/i,
            g = /^key/i,
            _ = 0,
            m = 1,
            y = 2,
            v = 3,
            T = !1;
        return {
            MOUSE_NO_BUTTON: _,
            MOUSE_LBUTTON: m,
            MOUSE_MBUTTON: y,
            MOUSE_RBUTTON: v,
            startTouch: function(t) {
                T = !t || f.test(t.type)
            },
            endTouch: function() {
                T = !1
            },
            isTouchStarted: function() {
                return T
            },
            isMouseWheelSupport: Nt.isSupportedEvent("mousewheel"),
            isGestureSupport: Nt.isSupportedEvent("gesturestart"),
            preventDefault: function(e) {
                e = e || t.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function(e) {
                e = e || t.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            },
            stop: function(t) {
                this.preventDefault(t), this.stopPropagation(t)
            },
            fix: function(e) {
                e = e || t.event;
                var i = e.type;
                return o(e), e.preventDefault || (e.preventDefault = function() {
                    this.returnValue = !1
                }), e.stopPropagation || (e.stopPropagation = function() {
                    this.cancelBubble = !0
                }), e.stop = function() {
                    this.preventDefault(), this.stopPropagation()
                }, g.test(i) ? s(e) : d.test(i) ? a(e) : f.test(i) && h(e), e.pos = function() {
                    var t = {};
                    return e.touches && e.touches.length ? t = e.touches[0] : e.changedTouches && e.changedTouches.length && (t = e.changedTouches[e.changedTouches.length - 1]), {
                        clientX: t.clientX || e.clientX || 0,
                        clientY: t.clientY || e.clientY || 0,
                        pageX: t.pageX || e.pageX || 0,
                        pageY: t.pageY || e.pageY || 0,
                        screenX: t.screenX || e.screenX || 0,
                        screenY: t.screenY || e.screenY || 0
                    }
                }, e
            },
            getWheelDelta: function(t) {
                if ("mousewheel" !== t.type && "DOMMouseScroll" !== t.type && "wheel" !== t.type) return null;
                var i = {
                    deltaX: 0,
                    deltaY: 0
                };
                return t.deltaY ? i.deltaY = u(-t.deltaY) : t.wheelDelta ? i.deltaY = u(t.wheelDelta) : t.detail && (i.deltaY = -t.detail), t.axis !== e && t.axis === t.HORIZONTAL_AXIS && (i.deltaX = -1 * i.deltaY, i.deltaY = 0), t.wheelDeltaY !== e && (i.deltaY = u(t.wheelDeltaY)), t.wheelDeltaX !== e && (i.deltaX = -1 * u(t.wheelDeltaX)), i
            },
            getOffsetsByEvent: function(t) {
                return kt("offsetX" in t ? t.offsetX : "layerX" in t ? t.layerX : 0, "offsetY" in t ? t.offsetY : "layerY" in t ? t.layerY : 0)
            },
            attach: function() {
                var t = p();
                return i.addEventListener ? function(e, i, n, o) {
                    var s = !1;
                    return t && o ? (s = Ct({
                        capture: !1,
                        passive: !1,
                        once: !1
                    }, o), e.addEventListener(i, n, s)) : e.addEventListener(i, n, !1)
                } : function(t, e, i) {
                    return t.attachEvent("on" + e, i)
                }
            }(),
            detach: function() {
                return i.removeEventListener ? function(t, e, i) {
                    return t.removeEventListener(e, i, !1)
                } : function(t, e, i) {
                    return t.detachEvent("on" + e, i)
                }
            }()
        }
    }();
    var Vt = n.DOMEvent;
    Nt.css3Styles = {
            transition: null,
            transform: null,
            transformOrigin: null,
            backfaceVisibility: null,
            willChange: null
        }, Nt.vendorPrefix = null,
        function() {
            var t = ["Webkit", "Moz", "O"],
                e = n.Agent.poorGPU || "android" === It.mobile && parseFloat(It.version) < 4.1 && !It.browser.mozilla && !It.browser.chrome,
                o = It.browser && It.browser.msie && It.browser.version < 10;
            if (It.browser.csszoom || e || n.forEach(n.keys(Nt.css3Styles), function(e) {
                    for (var i, o, s = 0, r = t.length; s < r; s++)
                        if (i = t[s], o = i + n.capitalize(e), Nt.isSupportedStyle(o)) {
                            Nt.vendorPrefix = i.toLowerCase(), Nt.css3Styles[e] = o;
                            break
                        }! Nt.css3Styles[e] && Nt.isSupportedStyle(e) && (Nt.css3Styles[e] = e)
                }), Nt.isSupportedCSS3Style = function(t) {
                    return null !== Nt.css3Styles[t]
                }, Nt.isSupportedCSS3Style("transform") && !o) {
                var s = (i.documentMode && i.documentMode, function(t, e, i, n, o, s, r) {
                        var a = "matrix(" + e + ",0,0," + e + "," + i + "," + n + ")";
                        t.style[Nt.css3Styles.transform] = a;
                        var h = o.x + "px " + o.y + "px";
                        r && (h = h.replace(/px/gi, r)), t.style[Nt.css3Styles.transformOrigin] = h
                    }),
                    r = function(t) {
                        var e = /\([0-9epx\.\, \t\-]+/gi;
                        return (t.style[Nt.css3Styles.transform] || "matrix(1, 0, 0, 1, 0, 0)").match(e)[0].substr(1).split(",")
                    };
                Nt.transform = function(t, e, i, n, o, r) {
                    s(t, e, i, n, o)
                }, Nt.setScale = function(t, e, i, n) {
                    Nt.transform(t, e, 0, 0, i, n)
                }, Nt.setScaleByPercent = function(t, e, i, n) {
                    s(t, e, 0, 0, i, 0, "%")
                }, Nt.translate = function(t, e) {
                    s(t, 1, e.x, e.y, {
                        x: 0,
                        y: 0
                    })
                }, Nt.getTranslate = function(t) {
                    var e = r(t),
                        i = kt(0, 0);
                    return e.length > 1 && i.add(parseFloat(e[4]), parseFloat(e[5])), i.add(Nt.getRawOffset(t)), i
                }
            } else Nt.transform = function(t, e, i, n, o) {
                o = o || kt(0, 0);
                var s = -(o.x * e - o.x),
                    r = -(o.y * e - o.y);
                It.browser.msie ? (i *= e, n *= e) : (s /= e, r /= e), s += i, r += n, t.style.zoom = e, t.style.left = s + "px", t.style.top = r + "px"
            }, Nt.setScale = function(t, e, i) {
                Nt.transform(t, e, 0, 0, i)
            }, Nt.translate = function(t, e) {
                Nt.setOffset(t, e)
            }, Nt.getTranslate = function(t) {
                return Nt.getRawOffset(t)
            };
            var a = Nt.css3Styles.transform,
                h = n.Agent.usingGPU && a;
            Nt.backfaceVisibility = function() {
                var t = Nt.css3Styles.backfaceVisibility;
                return t && !It.mobile ? function(e, i) {
                    e.style[t] = i
                } : Lt
            }(), Nt.forceGPU = function() {
                return h ? function(t) {
                    t.style[a] = "translateZ(0)"
                } : Lt
            }(), Nt.clearGPU = function() {
                return h ? function(t) {
                    t.style[a] = "none"
                } : Lt
            }(), Nt.createDummyForRestrictiveGPU = function() {
                var t = Nt.createElement("div", "color:transparent;width:0;height:0;overflow:visible;");
                return Nt.setText(t, "&nbsp;"), t
            }, Nt.willChange = function() {
                var t = Nt.css3Styles.willChange;
                return t ? function(e, i) {
                    e.style[t] = i || "auto"
                } : Lt
            }()
        }(), Ct(Nt, {
            setSize: function(t, e, i) {
                var n = e instanceof Bt ? e.clone() : Bt(e, i);
                n.round(), t.style.width = n.width + "px", t.style.height = n.height + "px"
            },
            _getSize: function() {
                var t = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                };
                return function(e, i) {
                    var o = 0,
                        s = 0,
                        r = 0,
                        a = 0,
                        h = {};
                    if ("getBoundingClientRect" in T) {
                        var l;
                        try {
                            l = e.getBoundingClientRect()
                        } catch (t) {}
                        l && "width" in l ? (r = l.width, a = l.height) : (r = e.offsetWidth, a = e.offsetHeight)
                    } else try {
                        r = e.offsetWidth, a = e.offsetHeight
                    } catch (t) {}
                    if (0 === r && 0 === a) {
                        var c = e.style;
                        n.forEach(t, function(t, e) {
                            h[e] = c[e], c[e] = t
                        }), o = Nt.getCSSValue(e, "width"), s = Nt.getCSSValue(e, "height"), n.forEach(t, function(t, e) {
                            c[e] = h[e], h[e] = null
                        })
                    } else o = r, s = a;
                    switch (i) {
                        case 1:
                            return o;
                        case 2:
                            return s;
                        default:
                            return n.Size(o, s)
                    }
                }
            }(),
            getSize: function(t) {
                return Nt._getSize(t)
            },
            getWidth: function(t) {
                return Nt._getSize(t, 1)
            },
            getHeight: function(t) {
                return Nt._getSize(t, 2)
            },
            getSizeWithMargin: function(t) {
                var e = Nt.getSize(t),
                    i = t.style;
                return e.width = n.toNumber(i.marginLeft) + e.width + n.toNumber(i.marginRight), e.height = n.toNumber(i.marginTop) + e.height + n.toNumber(i.marginBottom), e
            },
            getRawSize: function(t) {
                var e = t.style,
                    i = n.toNumber(e.width),
                    o = n.toNumber(e.height);
                return n.Size(i, o)
            },
            getOffset: function() {
                if ("getBoundingClientRect" in T) {
                    var t = "CSS1Compat" === i.compatMode;
                    return function(e) {
                        var i, n, o, s = e && e.ownerDocument,
                            r = s.window || s.defaultView || s.parentWindow,
                            a = s.body,
                            h = s.documentElement;
                        try {
                            i = e.getBoundingClientRect()
                        } catch (t) {}
                        if (Nt.contains(h, e)) {
                            var l = h.clientTop || a.clientTop || 0,
                                c = h.clientLeft || a.clientLeft || 0,
                                u = r.pageYOffset || t && h.scrollTop || a.scrollTop,
                                p = r.pageXOffset || t && h.scrollLeft || a.scrollLeft;
                            n = i.top + u - l, o = i.left + p - c
                        } else i ? (o = i.left, n = i.top) : (o = 0, n = 0);
                        return kt(o, n)
                    }
                }
                return It.browser.webkit ? function(t) {
                    for (var e = t, i = e.offsetParent, n = 0, o = 0; e = e.parentNode;) e.offsetParent && (n -= e.scrollLeft, o -= e.scrollTop), e == i && (n += t.offsetLeft + e.clientLeft, o += t.offsetTop + e.clientTop, e.offsetParent || (n += e.offsetLeft, o += e.offsetTop), i = e.offsetParent, t = e);
                    return kt(n, o)
                } : function(t) {
                    var e = 0,
                        n = 0,
                        o = t.ownerDocument || t.document || i;
                    if (o.getBoxObjectFor) {
                        var s = o.getBoxObjectFor(t),
                            r = o.getBoxObjectFor(o.documentElement || o.body);
                        e = s.screenX - r.screenX, n = s.screenY - r.screenY
                    } else {
                        var a;
                        for (a = t; a; a = a.offsetParent) e += a.offsetLeft, n += a.offsetTop;
                        for (a = t.parentNode; a && "BODY" != a.tagName; a = a.parentNode) "TR" == a.tagName && (n += 2), e -= a.scrollLeft, n -= a.scrollTop
                    }
                    return kt(e, n)
                }
            }(),
            getRawOffset: function(t) {
                var e = t.style,
                    i = n.toNumber(e.left),
                    o = n.toNumber(e.top);
                return kt(i, o)
            },
            setOffset: function(t, e, i) {
                var n = e instanceof kt ? e.clone() : kt(e, i);
                n.round(), t.style.left = n.x + "px", t.style.top = n.y + "px"
            },
            setOffsetWithAnchor: function(t, e, i) {
                e = e || kt(0, 0), i = i || kt(0, 0);
                var n = e.x - i.x,
                    o = e.y - i.y;
                Nt.setOffset(t, n, o)
            },
            getScrollOffset: function() {
                var t = T,
                    e = i.body,
                    n = (t && t.scrollLeft || e && e.scrollLeft || 0) - (t && t.clientLeft || e && e.clientLeft || 0),
                    o = (t && t.scrollTop || e && e.scrollTop || 0) - (t && t.clientTop || e && e.clientTop || 0);
                return kt(n, o)
            },
            disableSelection: function() {
                for (var t, e = ["ms", "webkit", "Khtml", "Moz"], i = 0, n = e.length; i < n && (t = e[i] + "UserSelect", !Nt.isSupportedStyle(t)); i++) t = null;
                return t ? function(e) {
                    e.style[t] = "none"
                } : function(t) {
                    t.unselectable = "on", t.onselectstart = function(t) {
                        Vt.stop(t)
                    }
                }
            }(),
            setOpacity: function() {
                return Nt.isSupportedStyle("opacity") ? function(t, e) {
                    t.style.opacity = e
                } : function(t, e) {
                    var i = t.style,
                        o = n.isNumber(e) ? "alpha(opacity=" + n.round(100 * e) + ")" : "",
                        s = i.filter || "",
                        r = /alpha\([^)]*\)/i,
                        a = /^\s*|\s*$/g;
                    if (i.zoom = 1, e >= 1) return i.filter = s.replace(r, "").replace(a, ""), void("" === s && i.removeAttribute && i.removeAttribute("filter"));
                    i.filter = r.test(s) ? s.replace(r, o) : s + " " + o
                }
            }(),
            getOpacity: function() {
                return Nt.isSupportedStyle("opacity") ? function(t) {
                    var e = parseFloat(t.style.opacity);
                    return isNaN(e) ? 1 : e
                } : function(t) {
                    try {
                        if (t && t.filters && t.filters.alpha) {
                            var i = t.filters.alpha.opacity;
                            return (i !== e ? i : 100) / 100
                        }
                        if (t && t.style && t.style.filter) {
                            return /opacity=([^)]*)/.test(t.style.filter || "") ? parseFloat(RegExp.$1) / 100 : 1
                        }
                        return 1
                    } catch (t) {
                        return 1
                    }
                }
            }()
        }), Nt.Image = function(t) {
            var e = this;
            e.DEFAULT_OPTIONS = {
                contextmenu: null,
                disableSelection: !1,
                onload: Lt,
                onerror: Lt,
                opacity: null
            }, t = Ct({}, e.DEFAULT_OPTIONS, t), e._fLoad = t.onload || Lt, e._fError = t.onerror || Lt, e._img = Nt.createElement("img", j + G + K + W), e._img.setAttribute("draggable", !1), e._img.setAttribute("unselectable", "on"), t.disableSelection && Nt.disableSelection(e._img), n.forEach(t, function(t, i) {
                var o = "set" + n.capitalize(i);
                n.isFunction(e[o]) && e[o](t)
            })
        }, Nt.Image.prototype = {
            constructor: Nt.Image,
            setHandler: function(t) {
                var e = Ct({
                    onload: this._fLoad,
                    onerror: this._fError
                }, t);
                this._fLoad = e.onload || Lt, this._fError = e.onerror || Lt
            },
            setOpacity: function(t) {
                this._opacity = t, Nt.setOpacity(this._img, t)
            },
            setPosition: function(t) {
                this._img.style.position = t
            },
            setUrl: function(t, e, i) {
                var n = this._img;
                return t && (t === n.src ? (this._fLoad && this._fLoad(n), e && e(n)) : (n.style.width = "", n.style.height = "", n.removeAttribute("width"), n.removeAttribute("height"), this._setUrl(n, t, e, i))), this
            },
            setSize: function(t) {
                var e = this._img;
                Nt.setSize(e, t), e.setAttribute("width", t.width), e.setAttribute("height", t.height)
            },
            setAlt: function(t) {
                this._img.setAttribute("alt", t)
            },
            setContextmenu: function(t) {
                this._img.contextmenu = t
            },
            getElement: function() {
                return this._img
            },
            _setUrl: function() {
                var e, i = It.browser.msie,
                    n = It.browser.version,
                    o = i && n > 6 && n < 9;
                return e = o ? function(e, i, n, o) {
                    function s() {
                        e.onload = e.onerror = null, r._fLoad(e), n && n(e)
                    }
                    var r = this;
                    e.onload = function() {
                        t.setTimeout(s, 1)
                    }, e.onerror = function() {
                        e.onload = e.onerror = null, r._fError(e), o && o(e)
                    }, e.galleryImg = "no", e.src = i
                } : function(t, e, i, n) {
                    var o = this;
                    t.onload = function() {
                        t.onload = t.onerror = null, o._fLoad(t), i && i(t)
                    }, t.onerror = function() {
                        t.onload = t.onerror = null, o._fError(t), n && n(t)
                    }, t.src = e
                }, i = n = null, o = null, e
            }()
        },
        function() {
            var t = It.browser.csszoom ? "innerText" : "textContent",
                e = function(t, e, i) {
                    if (!n.isDefined(i)) return t[e];
                    t[e] = i
                },
                i = function(i, n) {
                    i.nodeType;
                    switch (i.nodeType) {
                        case 1:
                        case 9:
                        case 11:
                            return e(i, t, n);
                        case 3:
                        case 4:
                            return e(i, "nodeValue", n);
                        default:
                            return ""
                    }
                };
            Nt.setText = i, Nt.getText = i
        }(),
        function() {
            function e(t) {
                var e = t.getAttribute("data-ntranid");
                return e || (e = "NTran-" + ++r, t.setAttribute("data-ntranid", e)), e
            }

            function i(t) {
                var i = e(t),
                    n = a[i];
                return n || (n = {
                    timer: null,
                    props: null
                }, a[i] = n), n
            }

            function o(t) {
                t.complete && (Zt.removeDOMListener(t.complete), t.complete = null)
            }

            function s(t, e) {
                e && n.forEach(e, function(e, i) {
                    "opacity" === i ? Nt.setOpacity(t, e) : (-1 === i.indexOf("tran") && "number" == typeof e && (e += "px"), t.style[i] = e)
                })
            }
            var r = 0,
                a = {},
                h = Nt.css3Styles.transition,
                l = "transitionend";
            if (h) {
                var c = ["transitionend", "webkitTransitionEnd", "oTransitionEnd"];
                n.forEach(c, function(t) {
                    return Nt.isSupportedEvent(t.toLowerCase()) ? (l = t, !0) : Nt.isSupportedEvent(t) ? (l = t, !0) : void 0
                })
            }
            Nt.animate = function(e, r, a) {
                var c = i(e);
                a = Ct({
                    duration: 0,
                    delay: 0,
                    easing: "linear"
                }, a), this.stop(e, {});
                var u = [];
                if (n.forEach(r, function(t, e) {
                        u.push(e)
                    }), c.props = Ct({}, r), h) c.complete = Zt.addDOMListener(e, l, function() {
                    c.props = null, e.style[h] = "none", "function" == typeof a.complete && a.complete(), o(c)
                }), c.timer = t.setTimeout(function() {
                    c.timer = null;
                    var t = a.easing;
                    t.indexOf("Cubic") > -1 && (t = "easeOutCubic" === t ? "ease-out" : "ease-in"), e.style[h] = [u.join(","), a.duration + "ms", t, a.delay + "ms"].join(" "), s(e, r)
                }, 100);
                else {
                    var p, d = a.easing;
                    p = "function" == typeof d ? d : n.easing[d || "linear"];
                    for (var f = {}, g = 0, _ = u.length; g < _; g++) key = u[g], "opacity" === key ? f[key] = Nt.getOpacity(e) : f[key] = parseFloat(Nt.getCSS(e, key));
                    var m = n.now();
                    c.animLoop = function() {
                        var t = n.now() - m,
                            i = t / a.duration,
                            o = {};
                        n.forEach(r, function(t, e) {
                            o[e] = p(i, f[e], t - f[e])
                        }), t < a.duration ? s(e, o) : (s(e, r), n.TransitionQueue.removeJob(c.animLoop), c.animLoop = null, c.props = null, "function" == typeof a.complete && a.complete())
                    }, n.TransitionQueue.addJob(c.animLoop)
                }
            }, Nt.stop = function(r, l) {
                var c = e(r),
                    u = i(r);
                h ? (t.clearTimeout(u.timer), u.timer = null, o(u), r.style[h] = "none") : (n.TransitionQueue.removeJob(u.animLoop), u.animLoop = null), s(r, l || u.props), u.props = null, a[c] = null, delete a[c]
            }
        }(), n.Event = function() {
            function t(t) {
                return t.__event_relations__ || (t.__event_relations__ = {}), t.__event_relations__
            }

            function i() {
                return "NEvent_" + o++
            }
            var o = 0,
                s = function() {
                    return String.prototype.trim ? function(t) {
                        return t.trim()
                    } : function(t) {
                        return t.replace(/^\s+|\s+$/gm, "")
                    }
                }();
            return {
                addListener: function(e, n, o) {
                    var r = s(n),
                        a = r.split(" ");
                    if (a.length > 1) {
                        for (var h = [], l = 0, c = a.length; l < c; l++) s(a[l]) && h.push(Zt.addListener(e, a[l], o));
                        return h
                    }
                    var u = t(e),
                        p = i();
                    return u[r] || (u[r] = {}, "__BEGIN_DISPATCH__" !== r && "__STOP_DISPATCH__" !== r && Zt.trigger(e, "__BEGIN_DISPATCH__", r)), u[r][p] = o, {
                        target: e,
                        eventName: r,
                        listenerId: p,
                        listener: o
                    }
                },
                hasListener: function(e, i) {
                    var o = t(e);
                    return !!o[i] && !1 === n.isEmptyObject(o[i])
                },
                once: function(t, e, i) {
                    var n = Zt.addListener(t, e, function() {
                        for (var t = [], e = 0, o = arguments.length; e < o; e++) t[e] = arguments[e];
                        i.apply(null, t), Zt.removeListener(n), n = null
                    });
                    return n
                },
                removeListener: function(e) {
                    if (e)
                        if (n.isArray(e))
                            for (var i = 0, o = e.length; i < o; i++) Zt.removeListener(e[i]);
                        else {
                            var s = e.target,
                                r = e.eventName,
                                a = e.listenerId,
                                h = t(s);
                            if (!h[r]) return;
                            h[r][a] = null, delete h[r][a], !0 === n.isEmptyObject(h[r]) && (h[r] = null, delete h[r]), "__STOP_DISPATCH__" === r || "__BEGIN_DISPATCH__" === r || h[r] || Zt.trigger(s, "__STOP_DISPATCH__", r)
                        }
                },
                trigger: function(e, i) {
                    for (var o, r = s(i), a = r.split(" "), h = [], l = 0, c = arguments.length; l < c; l++) h[l] = arguments[l];
                    if (a.length > 1)
                        for (var u = 0, p = a.length; u < p; u++) s(a[u]) && (o = [e, a[u]].concat(h.slice(2)), Zt.trigger.apply(Zt, o));
                    else {
                        var d = t(e),
                            f = d[r];
                        !(d.__ALL_STOPPED || d["__" + r + "_STOPPED"]) && f && (o = h.slice(2), 0 === o.length && e._getDefaultEventParameters && (o = e._getDefaultEventParameters(r) || []), n.forEach(f, function(t) {
                            t && t.apply(null, o)
                        }))
                    }
                },
                getDispatcher: function(e, i) {
                    var n = t(e),
                        o = s(i || "");
                    return i ? n[o] : n
                },
                stopDispatch: function(e, i) {
                    var n = t(e),
                        o = s(i || "");
                    o ? n["__" + o + "_STOPPED"] = !0 : n.__ALL_STOPPED = !0
                },
                resumeDispatch: function(e, i) {
                    var n = t(e),
                        o = s(i || "");
                    o ? n["__" + o + "_STOPPED"] = !1 : n.__ALL_STOPPED = !1
                },
                forward: function(t, e, i, n) {
                    var o = n || e;
                    return Zt.addListener(t, e, Ot(Zt.trigger, Zt, i, o))
                },
                clearInstanceListeners: function(t) {
                    t.__event_relations__ = null, delete t.__event_relations__
                },
                clearListeners: function(e, i) {
                    var n = t(e);
                    n[i] = null, delete n[i]
                },
                addDOMListener: function(t, e, i, n) {
                    var o = s(e),
                        r = o.split(" ");
                    if (r.length > 1) {
                        for (var a = [], h = 0, l = r.length; h < l; h++) s(r[h]) && a.push(Zt.addDOMListener(t, r[h], i, n));
                        return a
                    }
                    return "mousewheel" !== o || Vt.isMouseWheelSupport || (o = "wheel"), Vt.attach(t, o, i, n), {
                        target: t,
                        eventName: o,
                        listener: i
                    }
                },
                removeDOMListener: function(t, i, o) {
                    if (t)
                        if (n.isArray(t))
                            for (var r = 0, a = t.length; r < a; r++) Zt.removeDOMListener(t[r]);
                        else {
                            if (t !== e && i === e && o === e) {
                                var h = t;
                                i = h.eventName, o = h.listener, t = h.target
                            }
                            i = s(i), "mousewheel" !== i || Vt.isMouseWheelSupport || (i = "wheel"), Vt.detach(t, i, o)
                        }
                }
            }
        }();
    var Zt = n.Event;
    n.KVO = function() {}, n.KVO.prototype = {
            constructor: n.KVO,
            set: function(t, e, i) {
                var o = this.__getTargets()[t];
                if (o) {
                    var s = o.target,
                        r = o.targetKey,
                        a = "set" + n.capitalize(t);
                    s[a] ? s[a](e, i) : s.set(r, e, i)
                } else this[t] = e, !0 !== i && this.__notifyChanged(t)
            },
            __lazySet: function(t, e, i) {
                this.get(t) !== e && this.set(t, e, i)
            },
            get: function(t) {
                var e = this.__getTargets()[t];
                if (e) {
                    var i = e.target,
                        o = e.targetKey,
                        s = "get" + n.capitalize(t);
                    return i[s] ? i[s](o) : i.get(o)
                }
                return this[t]
            },
            __notifyChanged: function(t) {
                var e = this.get(t),
                    i = t + "_changed";
                this[i] ? this[i](e) : this.changed && this.changed(t, e), Zt.trigger(this, i, e)
            },
            bindTo: function(t, e, i) {
                if ("string" == typeof t) {
                    i = i || t, this.unbind(t);
                    var o = Ot(function(t) {
                            this.__notifyChanged(t)
                        }, this, t),
                        s = e.__bind(e, i, o);
                    s.targetKey = i, this.__getTargets()[t] = s, this.__notifyChanged(t)
                } else if (n.isArray(t))
                    for (var r = t, a = 0, h = r.length; a < h; a++) this.bindTo(r[a], e)
            },
            __bind: function(t, e, i) {
                return Zt.addListener(t, e + "_changed", i)
            },
            unbind: function(t) {
                if (n.isArray(t)) n.forEach(t, Ot(this.unbind, this));
                else {
                    var e = this.__getTargets()[t];
                    if (e) {
                        var i = e.target,
                            o = this.get(t);
                        i.__unbind(e), this.__getTargets()[t] = null, delete this.__getTargets()[t], this[t] = o
                    }
                }
            },
            __unbind: function(t) {
                Zt.removeListener(t)
            },
            unbindAll: function() {
                var t = this;
                n.forEach(t.__getTargets(), function(e, i) {
                    t.unbind(i)
                })
            },
            setValues: function(t) {
                var e = this;
                n.forEach(t, function(t, i) {
                    var o = "set" + n.capitalize(i);
                    e[o] ? e[o](t) : e.set(i, t)
                })
            },
            __getTargets: function() {
                return this.__targets || (this.__targets = {})
            },
            addListener: function(t, e) {
                return Zt.addListener(this, t, e)
            },
            hasListener: function(t) {
                return Zt.hasListener(this, t)
            },
            addListenerOnce: function(t, e) {
                return Zt.once(this, t, e)
            },
            removeListener: function(t) {
                return Zt.removeListener(t)
            },
            trigger: function(t) {
                var e = [this, t];
                if (arguments.length > 1)
                    for (var i = 1, n = arguments.length; i < n; i++) e.push(arguments[i]);
                return Zt.trigger.apply(Zt, e)
            },
            clearListeners: function(t) {
                return t ? Zt.clearListeners(this, t) : Zt.clearInstanceListeners(this)
            }
        }, n.KVOArray = function(t) {
            this._array = t || [], this.set("length", this._array.length)
        }, At(n.KVOArray, n.KVO, {
            setAt: function(t, i) {
                var n = this._array[t],
                    o = this.getLength();
                if (t > o - 1) {
                    for (var s = o; s < t; s++) this.insertAt(s, e);
                    this.insertAt(t, i)
                } else this._array[t] = i, this.set("length", this._array.length), Zt.trigger(this, "set_at", t, n)
            },
            insertAt: function(t, e) {
                if (t < 0) throw new Error("index number should be positive");
                this.splice(t, 0, e)
            },
            removeAt: function(t) {
                if (t < 0) throw new Error("index number should be positive");
                return this.splice(t, 1)[0]
            },
            splice: function(t, e) {
                for (var i = e || 0, n = [], o = this._array, s = o.length, r = 2, a = arguments.length; r < a; r++) n.push(arguments[r]);
                var h = o.splice.apply(o, [t, i].concat(n));
                if (this.set("length", o.length), t < 0 ? (t = s + t) < 0 && (t = 0) : t >= s && (t = s), h.length > 0)
                    for (var l = t + i - 1, c = h.length; l >= t; l--) Zt.trigger(this, "remove_at", l, h[--c]);
                if (n.length > 0) {
                    var u = (n.length, t);
                    for (r = 0, a = n.length; r < a; r++) Zt.trigger(this, "insert_at", u++, n[r])
                }
                return h
            },
            removeElement: function(t) {
                var e = this.getIndexOfElement(t); - 1 !== e && this.removeAt(e)
            },
            push: function(t) {
                return this.insertAt(this._array.length, t), this._array.length
            },
            pop: function() {
                return this.removeAt(this.getLength() - 1)
            },
            getAt: function(t) {
                return this._array[t]
            },
            getIndexOfElement: function(t) {
                return n.getIndexOfElement(this._array, t)
            },
            getLength: function() {
                return this.get("length")
            },
            getArray: function() {
                return this._array
            },
            clear: function() {
                for (var t = this.getLength() - 1; t >= 0; t--) this.removeAt(t)
            },
            forEach: function(t) {
                for (var e = 0, i = this.getLength(); e < i; e++) t(this.getAt(e), e)
            }
        }),
        function() {
            n.Math = {
                radianPerDegree: Math.PI / 180,
                degreePerRadian: 180 / Math.PI,
                fromDegreesToRadians: function(t) {
                    return t * n.Math.radianPerDegree
                },
                fromRadiansToDegrees: function(t) {
                    return t * n.Math.degreePerRadian
                },
                distance: function(t, e) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                },
                area: function(t) {
                    if (!t || 3 !== t.length) return 0;
                    var e = t[0],
                        i = t[1],
                        n = t[2],
                        o = (e + i + n) / 2;
                    return Math.sqrt(o * (o - e) * (o - i) * (o - n))
                },
                getPolygonSize: function(t, i) {
                    if (!t || !i) return 0;
                    var s = 0,
                        r = e(t).concat(t),
                        a = null;
                    return r.sort(function(t, e) {
                        return t.x - e.x
                    }), n.forEach(r, function(e) {
                        var n = e.x;
                        a && a !== n && (s += o(t, a, n, i)), a = n
                    }), s
                },
                getDegrees: function(t, e) {
                    var i = t.x,
                        o = t.y,
                        s = e.x,
                        r = e.y;
                    return n.Math.fromRadiansToDegrees(Math.atan2(i * r - o * s, i * s + o * r))
                },
                getHorizontalDegrees: function(t, e) {
                    var i = {
                            x: t.x,
                            y: e.y
                        },
                        o = {
                            x: e.x - i.x,
                            y: e.y - i.y
                        },
                        s = {
                            x: e.x - t.x,
                            y: e.y - t.y
                        };
                    return n.Math.getDegrees(o, s)
                },
                magnitude: function(t) {
                    var e = t.x,
                        i = t.y;
                    return Math.sqrt(e * e + i * i)
                },
                getVector: function(t, e) {
                    var i = t.x,
                        n = t.y,
                        o = e.x,
                        s = e.y;
                    return kt(i - o, n - s)
                }
            };
            var t = function(t, e, i, n) {
                    var o = {
                            x: e.x - t.x,
                            y: e.y - t.y
                        },
                        s = {
                            x: n.x - i.x,
                            y: n.y - i.y
                        },
                        r = s.x * (t.y - i.y) - s.y * (t.x - i.x),
                        a = o.x * (t.y - i.y) - o.y * (t.x - i.x),
                        h = s.y * o.x - s.x * o.y;
                    if (0 === h) return null;
                    if (r /= h, a /= h, !(0 < r && r <= 1 && 0 < a && a <= 1)) return null;
                    var l = kt(t.x + r * (e.x - t.x), t.y + r * (e.y - t.y));
                    return (l.x <= Math.min(t.x, e.x) || l.x >= Math.max(t.x, e.x) || l.y <= Math.min(t.y, e.y) || l.y <= Math.min(t.y, e.y)) && (l.x <= Math.min(i.x, n.x) || l.x >= Math.max(i.x, n.x) || l.y <= Math.min(i.y, n.y) || l.y <= Math.min(i.y, n.y)) ? null : l
                },
                e = function(e) {
                    for (var i = e.length, n = [], o = 0; o < i; o++)
                        for (var s = e[o], r = e[(o + 1) % i], a = 0; a < i; a++) {
                            var h = e[a],
                                l = e[(a + 1) % i],
                                c = t(s, r, h, l);
                            c && n.push(c)
                        }
                    return n
                },
                i = function(t, e, i) {
                    return (i - t.x) * (e.y - t.y) / (e.x - t.x) + t.y
                },
                o = function(t, e, n, o) {
                    var s, a = 0,
                        h = [],
                        l = [],
                        c = t.length;
                    for (s = 0; s < c; s++) {
                        var u = t[s],
                            p = t[(s + 1) % c];
                        if (Math.min(u.x, p.x) <= e && n <= Math.max(u.x, p.x)) {
                            var d, f;
                            u instanceof zt ? (d = zt(i(u, p, e), e), f = zt(i(u, p, n), n)) : (d = kt(e, i(u, p, e)), f = kt(n, i(u, p, n))), h.push(d), l.push(f)
                        }
                    }
                    if (h.sort(function(t, e) {
                            return t.y - e.y
                        }), l.sort(function(t, e) {
                            return t.y - e.y
                        }), h.length != l.length || h.length < 2) return 0;
                    for (c = h.length, s = 0; s < c; s += 2) a += r([h[s], l[s], l[s + 1], h[s + 1]], o);
                    return a
                },
                s = function(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) {
                        for (var o = !1, s = 0, r = e.length; s < r; s++)
                            if (e[s].equals(t[i])) {
                                o = !0;
                                break
                            } o || e.push(t[i])
                    }
                    return e
                },
                r = function(t, e) {
                    var i, o = 0,
                        r = s(t);
                    return 3 === r.length ? i = [r] : 4 === r.length && (i = [
                        [r[0], r[1], r[2]],
                        [r[0], r[2], r[3]]
                    ]), n.forEach(i, function(t) {
                        for (var i = [], s = 0, r = t.length; s < r; s++) {
                            var a, h = t[s];
                            a = s + 1 === r ? t[0] : t[s + 1], i.push(e.getDistance(h, a))
                        }
                        o += n.Math.area(i)
                    }), o
                }
        }(), n.AsyncEventsModel = function(t) {
            this._tranId = null, this.bindTo(["transformOrigin_px", "projection", "zoom", "containerTopLeft", "scale"], t), this._fProgress = Ot(this.progressZooming, this)
        }, At(n.AsyncEventsModel, n.KVO, {
            SCALE_FACTOR: It.browser.csszoom ? .08 : .04,
            _tranId: null,
            startZooming: function(t, e, i) {
                if (this.set("transformOrigin_px", e), this.isZooming()) {
                    this._delta = this._delta + t;
                    var o = this._getScaleBy(this._delta);
                    0 === o ? this.stopZooming() : this._dstScale = o
                } else this._delta = t, this.set("scale", 1), this.set("containerTopLeft_px", i), this._dstScale = this._getScaleBy(this._delta), Zt.trigger(this, "zoomstart", this), this._tranId = n.TransitionQueue.addJob(this._fProgress)
            },
            progressZooming: function() {
                if (this.isZooming()) {
                    var t, e = this.get("scale"),
                        i = this._dstScale,
                        n = Math.abs(this._delta),
                        o = this.SCALE_FACTOR * (n > 3 ? .4 : 1),
                        s = n * o;
                    e < i ? t = Math.min(e * (1 + s), i) : e > i && (t = Math.max(e * (1 - s), i)), this.set("scale", t), t === i && this.stopZooming()
                }
            },
            stopZooming: function() {
                this.isZooming() && (n.TransitionQueue.removeJob(this._fProgress), this._tranId = null, this._delta = null, this._dstScale = null, this.set("scale", 1), this.set("containerTopLeft_px", this.get("containerTopLeft")), this.set("transformOrigin_px", kt(0, 0)), Zt.trigger(this, "zoomend", this))
            },
            zoomingWithScale: function(t, e) {
                var i = this.getContainerTopLeft();
                this._isPinching || (this.set("transformOrigin_px", e), this.set("containerTopLeft_px", i), this._isPinching = !0, Zt.trigger(this, "zoomstart", this)), this.set("scale", t)
            },
            stopZoomingWithScale: function() {
                this._isPinching && (this.set("scale", 1), this.set("containerTopLeft_px", this.get("containerTopLeft")), this.set("transformOrigin_px", kt(0, 0)), this._isPinching = !1, Zt.trigger(this, "zoomend", this))
            },
            _getScaleBy: function(t) {
                return 0 === t ? 0 : Math.pow(2, t)
            },
            getContainerTopLeft: function() {
                return this.isZooming() ? this.get("containerTopLeft_px") : this.get("containerTopLeft")
            },
            startPanning: function() {
                this.isZooming() && this.stopZooming()
            },
            isZooming: function() {
                return null !== this._tranId
            }
        }),
        function() {
            n.ZoomScaleChecker = {
                getFittableMinZoom: function(t) {
                    t = n.isDefined(t) ? t : this.get("zoom");
                    var e = Math.max(this.getMinZoom(), t);
                    return e !== t && e
                },
                getFittableMaxZoom: function(t) {
                    t = n.isDefined(t) ? t : this.get("zoom");
                    var e = Math.min(this.getMaxZoom(), t);
                    return e !== t && e
                },
                isValidZoom: function(t) {
                    return !(this.get("userMinZoom") > t || this.get("mapTypeMinZoom") > t) && !(this.get("userMaxZoom") < t || this.get("mapTypeMaxZoom") < t)
                },
                getMinZoom: function() {
                    return Math.max(this.get("mapTypeMinZoom"), this.get("userMinZoom"))
                },
                getMaxZoom: function() {
                    return Math.min(this.get("mapTypeMaxZoom"), this.get("userMaxZoom"))
                },
                getValidZoom: function(t) {
                    var e = this.get("zoom") + t,
                        i = this.getMinZoom();
                    if (e <= i) return i;
                    var n = this.getMaxZoom();
                    return e >= n ? n : e
                },
                getValidDeltaZoom: function(t) {
                    var e = this.get("zoom"),
                        i = e + t,
                        n = this.getMinZoom(),
                        o = this.getMaxZoom();
                    return i < n ? t += n - i : i > o && (t += o - i), t
                },
                getFittableScale: function(t) {
                    var e = this.getMinZoom(),
                        i = this.getMaxZoom();
                    this._minScale = Math.pow(2, e - 1), this._maxScale = Math.pow(2, i - 1);
                    var n, o = this.get("zoom"),
                        s = Math.pow(2, o - 1) * t,
                        r = t;
                    return s > this._maxScale ? (n = i - o, r = Math.pow(2, n)) : s < this._minScale && (n = e - o, r = Math.pow(2, n)), r
                },
                getFittableZoomAndScale: function(t) {
                    var e = this.getMinZoom(),
                        i = this.getMaxZoom();
                    this._minScale = Math.pow(2, e - 1), this._maxScale = Math.pow(2, i - 1);
                    var n = this.get("zoom");
                    return {
                        scale: Math.pow(2, n - 1) * t,
                        deltaLevel: Math.log(t, 2)
                    }
                }
            }
        }(), n.KeyRecognizer = {
            _initMetaKeys: function() {
                this.set("shiftKey", !1), this.set("ctrlKey", !1), this.set("metaKey", !1), this.set("altKey", !1)
            },
            _setMetaKeys: function(t) {
                this.__lazySet("shiftKey", t.shiftKey), this.__lazySet("ctrlKey", t.ctrlKey), this.__lazySet("metaKey", t.metaKey), this.__lazySet("altKey", t.altKey)
            },
            listenKey: function() {
                function e(t, e, i) {
                    return Zt.addDOMListener(t, e, i)
                }
                this._initMetaKeys(), this._keyInfo = {}, this._keyTran = new n.Transition({
                    easing: n.easing.easeOutCubic,
                    step: 30,
                    duration: 1e3,
                    progress: Ot(this._onKeyTransition, this),
                    stop: Ot(this._onKeyTranEnd, this)
                }), this._keyListeners = [e(t, "blur", Ot(this._onWindowBlur, this)), e(i, "click", Ot(this._onCheckFocus, this)), e(i, "keydown", Ot(this._onKeyDown, this)), e(i, "keyup", Ot(this._onKeyUp, this))]
            },
            unlistenKey: function() {
                Zt.removeDOMListener(this._keyListeners), this._keyInfo = {}, this._keyTran && this._keyTran.stop(), this._keyTran = null
            },
            _focused: !1,
            _isDirKey: function(t) {
                return 38 === t || 40 === t || 37 === t || 39 === t
            },
            _getXFactor: function() {
                var t = 0;
                return this._keyInfo[37] && (t -= 1), this._keyInfo[39] && (t += 1), t
            },
            _getYFactor: function() {
                var t = 0;
                return this._keyInfo[38] && (t -= 1), this._keyInfo[40] && (t += 1), t
            },
            _onWindowBlur: function() {
                this._keyInfo = {}
            },
            _isFocusable: function(t) {
                return !!t && n.getIndexOfElement(O, t.tagName) > -1
            },
            _onCheckFocus: function(t) {
                t = Vt.fix(t);
                var e = t.target,
                    i = t.target,
                    n = this.getElement();
                for (this._focused = !1; e && "BODY" !== e.tagName && "HTML" !== e.tagName;) {
                    if (e === n && !this._isFocusable(i)) {
                        this._focused = !0;
                        break
                    }
                    e = e.parentNode
                }
            },
            _onKeyTransition: function(t) {
                var e = t.progress,
                    i = (this._keyInfo, this._getXFactor()),
                    n = this._getYFactor(),
                    o = e.weight,
                    s = kt(i * o, n * o);
                Zt.trigger(this, "keytransition", s)
            },
            _onKeyTranEnd: function(t) {
                Zt.trigger(this, "keytransitionend")
            },
            _onKeyDown: function(t) {
                if (this._setMetaKeys(t), this._focused && (t = Vt.fix(t), Zt.trigger(this, "keydown", t), this.get("keyboardShortcuts") && !this._isFocusable(t.target))) {
                    var e = t.which,
                        i = this._keyInfo,
                        n = this._keyTran;
                    this._isDirKey(e) && (i[e] = !0, n.isRunning() || n.run({
                        weight: 1
                    }, {
                        weight: 70
                    }, {
                        infinity: !0
                    }), Vt.preventDefault(t))
                }
            },
            _onKeyUp: function(t) {
                if (this._setMetaKeys(t), this._focused && (t = Vt.fix(t), Zt.trigger(this, "keyup", t), this.get("keyboardShortcuts"))) {
                    var e = t.which,
                        i = this._keyInfo,
                        n = this._keyTran;
                    this._isDirKey(e) && (i[e] = !1, !n.isRunning() || i[38] || i[40] || i[37] || i[39] || n.stop())
                }
            }
        }, n.MouseRecognizer = {
            listenMouse: function() {
                function t(t, e, i) {
                    return Zt.addDOMListener(t, e, i || n._getTrigger(e))
                }
                var e = this.getTarget(),
                    n = this;
                n._dragListeners = [], n._dragStart = !1, n._panEl = e.setCapture ? e : i, n._mouseListeners = [t(e, "mousedown", Ot(n._onDown, n)), t(e, "mousemove", Ot(n._onMove, n)), t(e, "mouseup", Ot(n._onUp, n)), t(e, "mousewheel", Ot(n._onWheel, n)), t(e, "contextmenu", Ot(n._onContextMenu, n)), t(e, "mouseenter", Ot(n._onEnter, n)), t(e, "mouseleave", Ot(n._onLeave, n))], !1 === It.mobile && n._mouseListeners.push(t(e, "click", Ot(n._onClick, n)))
            },
            unlistenMouse: function() {
                Zt.removeDOMListener(this._mouseListeners), Zt.removeDOMListener(this._dragListeners), this._dragStart = !1, this._panEl = null
            },
            _onEnter: function(t) {
                t = Vt.fix(t), t.preventDefault(), Zt.trigger(this, "mouseover", t)
            },
            _onLeave: function(t) {
                t = Vt.fix(t), t.preventDefault(), Zt.trigger(this, "mouseout", t)
            },
            _onClick: function(t) {
                t = Vt.fix(t), this._triggerSingleClick(t)
            },
            _triggerSingleClick: function(t, e) {
                var i = n.now(),
                    o = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    s = this.__ct__ ? i - this.__ct__ : 1e4,
                    r = this.__cp__ ? n.Math.distance(this.__cp__, o) : 1e4;
                if (s < 250 && r <= A) this.__ct__ = null, this.__cp__ = null, this._triggerDblClick(t);
                else {
                    if (e) return;
                    this.__ct__ = i, this.__cp__ = o, this._triggerClick(t)
                }
            },
            _isMapEvent: function(t) {
                for (var e = this.__ie_dtarget__ || t.target, i = this.getTarget(), o = !0; e && e !== i;) {
                    if (!1 === e.__clickable) {
                        o = !0;
                        break
                    }
                    if (e.__clickable || e === this.panes.floatPane || n.getIndexOfElement(O, e.tagName) > -1) {
                        o = !1;
                        break
                    }
                    e = e.parentNode
                }
                return o
            },
            _triggerClick: function(t) {
                if (this._dragStart) return void(this._dragStart = !1);
                this._isMapEvent(t) && (t.preventDefault && t.preventDefault(), Zt.trigger(this, "click", t))
            },
            _triggerDblClick: function(t) {
                this._isMapEvent(t) && Zt.trigger(this, "dblclick", t)
            },
            _onDown: function(e) {
                if (!Vt.isTouchStarted() && (e = Vt.fix(e), e.preventDefault(), this.__dp__ = {
                        x: e.pageX,
                        y: e.pageY
                    }, this.__ie_dtarget__ = It.browser.msie && It.browser.version > 8 && e.target, Vt.startTouch(e), Zt.trigger(this, "mousedown", e), this.get("draggable"))) {
                    var i = this._panEl;
                    this._dragEndTimer && (t.clearTimeout(this._dragEndTimer), this._dragEndTimer = null, delete this._dragEndTimer), this._dragListeners.length && (this._initDrag(), this._dragStart = !1), i.setCapture && i.setCapture(), Zt.trigger(this, "dragready", e), this._dragListeners = [Zt.addDOMListener(i, "mousemove", Ot(this._onDrag, this)), Zt.addDOMListener(i, "mouseup", Ot(this._onDragEnd, this))]
                }
            },
            _initDrag: function() {
                this._dragListeners.length && (this._panEl.releaseCapture && this._panEl.releaseCapture(), Zt.removeDOMListener(this._dragListeners), this._dragListeners.length = 0, this._dragListeners = [])
            },
            _onDrag: function(t) {
                this._dragListeners.length && !Vt.isTouchStarted() && (t = Vt.fix(t), t.preventDefault(), this.__dp__ && n.Math.distance(this.__dp__, {
                    x: t.pageX,
                    y: t.pageY
                }) <= 5 || (this.__dp__ = null, this._dragStart || (this._dragStart = !0), Zt.trigger(this, "drag", t)))
            },
            _onDragEnd: function(e) {
                Vt.endTouch(), e = Vt.fix(e), e.preventDefault(), this._dragStart && Zt.trigger(this, "dragend", e), this._initDrag();
                var i = this;
                i._dragEndTimer = t.setTimeout(function() {
                    i._dragStart = !1
                }, 0)
            },
            _onMove: function(t) {
                Vt.isTouchStarted() || (t = Vt.fix(t), Zt.trigger(this, "mousemove", t))
            },
            _onUp: function(t) {
                Vt.endTouch(), t = Vt.fix(t), Zt.trigger(this, "mouseup", t), this._isMapEvent(t) && t.which === Vt.MOUSE_RBUTTON && !this._dragStart && Zt.trigger(this, "rightclick", t), It.browser.msie && 8 === It.browser.version && this._triggerSingleClick(t, !0), this.__ie_dtarget__ = null
            },
            _onWheel: function(t) {
                return t = Vt.fix(t), Zt.trigger(this, "mousewheel", t), !1
            },
            _onContextMenu: function(t) {
                t = Vt.fix(t), t.preventDefault()
            }
        };
    n.TouchRecognizer = {
        listenTouch: function() {
            function t(t, e, i) {
                return Zt.addDOMListener(t, e, i, {
                    passive: !1
                })
            }
            var e = this.getTarget();
            this._clearTouches(), this._swipeListeners = [], this._swipeEl = e.setCapture ? e : i, this._touchListeners = [t(e, "touchstart", Ot(this._onTouchStart, this)), t(e, "touchmove", Ot(this._onTouchMove, this)), t(e, "touchend", Ot(this._onTouchEnd, this))]
        },
        unlistenTouch: function() {
            Zt.removeDOMListener(this._touchListeners), Zt.removeDOMListener(this._swipeListeners), this._swipeStart = !1, this._swipeEl = null
        },
        _clearTouches: function() {
            this._swipeStart = !1, this._startTouches = null, this._moveTouches = null, this._endTouches = null, this._pinching = !1, this._startDistance = null, this._tilting = !1, this._startVec = null, delete this._startVec
        },
        _isValidParent: function(t) {
            for (var e = this.getTarget(); t;) {
                if (t === e) return !0;
                t = t.parentElement
            }
            return !1
        },
        _getTouches: function(t) {
            for (var e = t.touches || [], i = [], n = 0, o = e.length; n < o; n++) i.push({
                pageX: e[n].pageX,
                pageY: e[n].pageY,
                clientX: e[n].clientX,
                clientY: e[n].clientY,
                target: e[n].target || t.target
            });
            return i
        },
        _excludeOutsideTouches: function(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var o = t[i],
                    s = o.target;
                this._isValidParent(s) && e.push(o)
            }
            return e
        },
        _onTouchStart: function(t) {
            Vt.startTouch(t), t = Vt.fix(t), this._clearTouches();
            var e = this._getTouches(t);
            switch (e = this._excludeOutsideTouches(e), this._startTouches = e, Zt.trigger(this, "touchstart", t), e.length > 1 && this._clearDoubleTap(), e.length) {
                case 1:
                    this._oneFingerStart(t);
                    break;
                case 2:
                    this._twoFingerStart(t)
            }
        },
        _onTouchMove: function(t) {
            if (Vt.isTouchStarted()) {
                t = Vt.fix(t);
                var e = this._getTouches(t),
                    i = this._startTouches;
                switch (this._moveTouches = e, Zt.trigger(this, "touchmove", t), e.length > 1 && this._clearDoubleTap(), i && i.length) {
                    case 1:
                        this._oneFingerMove(t);
                        break;
                    case 2:
                        this._twoFingerMove(t)
                }
            }
        },
        _onTouchEnd: function(t) {
            Vt.endTouch(), t = Vt.fix(t);
            var e = this._startTouches,
                i = this._endTouches || [].concat(this._moveTouches || e || []),
                n = t.changedTouches;
            if (this._endTouches = i, Zt.trigger(this, "touchend", t), i) {
                switch (e && e.length) {
                    case 1:
                        this._oneFingerEnd(t);
                        break;
                    case 2:
                        this._twoFingerEnd(t)
                }
                if (n && n.length > 0)
                    for (var o = 0, s = n.length; o < s; o++) this._endTouches.pop()
            }
        },
        _clearSwipe: function() {
            this._swipeEl.releaseCapture && this._swipeEl.releaseCapture(), Zt.removeDOMListener(this._swipeListeners), this._swipeListeners.length = 0, this._swipeListeners = [], this._swipeStart = !1
        },
        _readySwipe: function(t) {
            if (this.get("draggable") && !this._pinching) {
                var e = this._swipeEl;
                e.setCapture && e.setCapture(), this._swipeListeners = [Zt.addDOMListener(e, "touchmove", Ot(this._onSwipe, this), {
                    passive: !1
                }), Zt.addDOMListener(e, "touchend", Ot(this._onSwipeEnd, this), {
                    passive: !1
                })], Zt.trigger(this, "dragready", t), this._swipeStart = !0
            }
        },
        _onSwipe: function(t) {
            if (this._swipeStart) {
                if (t = Vt.fix(t), t.preventDefault(), t.touches && t.touches.length > 1) return void this._clearSwipe();
                Zt.trigger(this, "drag", t)
            }
        },
        _onSwipeEnd: function(t) {
            Vt.endTouch(), t = Vt.fix(t), this._swipeStart && Zt.trigger(this, "dragend", t), this._clearSwipe()
        },
        _getCenter: function(t) {
            function e(t, e) {
                var i = Math.min.apply(Math, t),
                    n = Math.max.apply(Math, t),
                    o = Math.min.apply(Math, e),
                    s = Math.max.apply(Math, e);
                return kt((i + n) / 2, (o + s) / 2)
            }
            var i, n = 0,
                o = t.length,
                s = [],
                r = [],
                a = [],
                h = [];
            for (n = 0; n < o; n++) i = t[n], s.push(i.pageX), r.push(i.pageY), a.push(i.clientX), h.push(i.clientY);
            return {
                pageXY: e(s, r),
                clientXY: e(a, h)
            }
        },
        _getDistance: function(t) {
            if (!t || t.length < 2) return 0;
            var e = t[0],
                i = t[1];
            if (null === e || null === i) return 0;
            var o = this.getPaddingOffset();
            return n.Math.distance({
                x: e.pageX + o.x,
                y: e.pageY + o.y
            }, {
                x: i.pageX + o.x,
                y: i.pageY + o.y
            })
        },
        _refineGesture: function(t) {
            var e, i = this._getCenter(t.touches).pageXY,
                n = this._getDistance(t.touches);
            return null === this._startDistance ? (this._startDistance = n, e = 1) : e = n / this._startDistance, {
                pageX: i.x,
                pageY: i.y,
                scale: e,
                originalEvent: t
            }
        },
        _clearPinch: function() {
            this._pinchEndCallback ? this._pinchEndCallback() : this._pinchEnd(), this._clearPinchTimer(), this._startDistance = null
        },
        _clearPinchTimer: function() {
            t.clearTimeout(this._pinchTimer), this._pinchEndCallback = null, delete this._pinchEndCallback, this._pinchTimer = null, delete this._pinchTimer
        },
        _getTwoTouches: function(t) {
            var e = t.touches,
                i = [kt(0, 0), kt(0, 0)];
            return e && e.length >= 2 && (i = [kt(e[0].pageX, e[0].pageY), kt(e[1].pageX, e[1].pageY)]), i
        },
        _isTiltGesture: function(t) {
            var e = t.scale,
                i = Math.abs(1 - e),
                n = i <= .009,
                o = Math.abs(t.rotation) < 2,
                s = !this._pinching && n && o;
            return (!s || 1 !== e) && s
        },
        _processTilt: function(t, e) {
            var i = t.originalEvent,
                o = this._getTwoTouches(i),
                s = Ct({
                    scale: t.scale,
                    center: kt(t.pageX, t.pageY),
                    pageX: t.pageX,
                    pageY: t.pageY,
                    originalEvent: i
                }, e);
            if (!this._tilting) {
                Math.abs(n.Math.getHorizontalDegrees(o[0], o[1])) < 15 && (this._tilting = !0, Zt.trigger(this, "tiltstart", s))
            }
            this._tilting && Zt.trigger(this, "tilt", s)
        },
        _processPinch: function(t, e) {
            var i = Ct({
                scale: t.scale,
                center: kt(t.pageX, t.pageY),
                pageX: t.pageX,
                pageY: t.pageY,
                rotation: t.rotation,
                originalEvent: t.originalEvent
            }, e);
            this._pinching || (this._pinching = !0, Zt.trigger(this, "pinchstart", i)), Zt.trigger(this, "pinch", i)
        },
        _pinchStart: function(t) {
            var e = this._getTwoTouches(t.originalEvent);
            this._tilting = !1, this._startVec = n.Math.getVector(e[0], e[1]), this._pinching = !1, this._startDistance = null
        },
        _pinchChange: function(t) {
            if (2 === t.originalEvent.touches.length) {
                var e = this._getTwoTouches(t.originalEvent),
                    i = n.Math.getVector(e[0], e[1]);
                this._startVec && (t.rotation = n.Math.getDegrees(i, this._startVec)), this.get("pinchZoom") && !this._tilting && 1 !== t.scale && this._processPinch(t)
            }
        },
        _pinchEnd: function(t) {
            this._tilting && Zt.trigger(this, "tiltend", t), this._startVec = null, delete this._startVec, this._tilting = !1, this._clearPinchTimer(), this.get("pinchZoom") && (this._startDistance = null, Zt.trigger(this, "pinchend", t))
        },
        _clearDoubleTap: function() {
            t.clearTimeout(this._dbltapTimer), this._dbltapTimer = null, this._prevTouch = null
        },
        _isOverSwipeThreshold: function(t) {
            if (!this._prevTouch) return !1;
            var e = kt(this._prevTouch.pageX, this._prevTouch.pageY),
                i = kt(t.pageX, t.pageY);
            return n.Math.distance(e, i) >= 15
        },
        _tapClick: function(t) {
            var e = this._startTouches,
                i = this._moveTouches,
                n = e ? e[0] : null,
                o = i ? i[0] : null,
                s = n && 1 === e.length,
                r = !o || this._getDistance([o, n]) <= 15;
            s && r && (n = kt(n.pageX, n.pageY), this._triggerClick && this._triggerClick({
                type: "click",
                pageX: n.x,
                pageY: n.y,
                target: t.target
            }))
        },
        _twofingerTap: function() {
            var t = this._startTouches,
                e = this._getCenter(t),
                i = e.pageXY;
            e.clientXY;
            Zt.trigger(this, "twofingertap", {
                pageX: i.x,
                pageY: i.y
            })
        },
        _doubleTap: function(e) {
            var i = this._startTouches[0];
            kt(i.pageX, i.pageY);
            if (this._isMapEvent(e))
                if (this._prevTouch)
                    if (this._prevTouch && this._isOverSwipeThreshold(i)) this._clearDoubleTap();
                    else {
                        this._clearDoubleTap();
                        var o = this,
                            s = n.now(),
                            r = Zt.addListener(this, "touchend", function() {
                                Zt.removeListener(r), o._clearDoubleTap(), n.now() - s > 250 || Zt.trigger(o, "doubletap", {
                                    pageX: i.pageX,
                                    pageY: i.pageY,
                                    target: e.target
                                })
                            })
                    }
            else this._dbltapTimer = t.setTimeout(Ot(this._clearDoubleTap, this), 500)
        },
        _longTap: function(e) {
            var i = this;
            this._clearLongTap(), this._longTapTimer = t.setTimeout(function() {
                i._clearTouches(), i._clearSwipe(), Zt.trigger(i, "longtap", e)
            }, 1e3)
        },
        _clearLongTap: function() {
            t.clearTimeout(this._longTapTimer), this._longTapTimer = null
        },
        _oneFingerStart: function(t) {
            var e = this._startTouches[0];
            this._clearPinch(), this._clearSwipe(), this._readySwipe(t), this._longTap(t), this._doubleTap(t), this._prevTouch = e
        },
        _twoFingerStart: function(t) {
            if (this._clearLongTap(), this._clearDoubleTap(), this._clearSwipe(), this._startDistance = null, this.get("pinchZoom") && t.preventDefault(), this._twoTouchAngle = null, t.touches && t.touches.length >= 2) {
                var e = this._getTwoTouches(t);
                this._twoTouchAngle = Math.abs(n.Math.getHorizontalDegrees(e[0], e[1]))
            }
            this._pinchStart(this._refineGesture(t))
        },
        _oneFingerMove: function(t) {
            var e = this._moveTouches[0];
            this._swipeStart && this._isOverSwipeThreshold(e) && (this._clearLongTap(), this._clearDoubleTap())
        },
        _twoFingerMove: function(e) {
            this.get("pinchZoom") && e.preventDefault();
            var i = this._refineGesture(e);
            if (e.touches && e.touches.length >= 2) {
                var o = this._getTwoTouches(e);
                this._twoTouchAngle = Math.abs(n.Math.getHorizontalDegrees(o[0], o[1]))
            }
            this._pinchChange(i), this._clearPinchTimer(), this._pinchEndCallback = Ot(this._pinchEnd, this, i), this._pinchTimer = t.setTimeout(this._pinchEndCallback, 500)
        },
        _oneFingerEnd: function(t) {
            this._clearLongTap(), this._tapClick(t)
        },
        _twoFingerEnd: function(t) {
            if (!this._pinching && !this._tilting) {
                var e = this._twoTouchAngle;
                null !== e && e < 15 && this._twofingerTap()
            }(this._pinching || this._tilting) && this._pinchEnd(t), this._twoTouchAngle = null
        }
    }, n.MapUpdater = {
        update: function(t, e, i, o, s) {
            var r = {},
                a = this.get("zoom"),
                h = this.get("centerPoint"),
                l = this.get("mapSystemProjection"),
                c = (this.get("projection"), this.get("maxBounds")),
                u = n.hasValue(i);
            if (u && (i = n.nearRange(i, this.get("userMinZoom"), this.get("userMaxZoom"))), c) {
                if (t && !c.hasPoint(t)) return;
                if (e && !t && !c.hasPoint(l.fromPointToCoord(e))) return
            }
            if (!t && e ? (r.center = l.fromPointToCoord(e), r.centerPoint = e) : t && !e ? (e = l.fromCoordToPoint(t), r.center = t, r.centerPoint = e) : t && e && (r.center = t, r.centerPoint = e), u && !o && a !== i && (o = kt(0, 0)), n.hasValue(o)) this.get("containerTopLeft").equals(o) || (r.containerTopLeft = o);
            else {
                o = this.get("containerTopLeft").clone();
                var p = r.centerPoint,
                    d = l.scaleUp(h.x - p.x, a),
                    f = l.scaleUp(h.y - p.y, a);
                o.add(d, f), r.containerTopLeft = o
            }
            if (u && (r.zoom = i), u || n.hasValue(r.centerPoint) || n.hasValue(r.containerTopLeft)) {
                i = u ? i : a, e = e || this.get("centerPoint");
                var g = this.get("size"),
                    _ = l.scaleDown(g.width, i) / 2,
                    m = l.scaleDown(g.height, i) / 2,
                    y = e.clone(),
                    v = this.get("tileSize");
                this.get("repeatX") && ((y.x < 0 || y.x > v.width) && (y.x = y.x % v.width, y.x < 0 && (y.x = v.width + y.x)), r.centerPoint && (r.centerPoint = y.clone())), r.projectionTopLeft = y.clone().sub(_, m), r.projectionBottomRight = y.clone().add(_, m)
            }
            this._fireEvents(r, s)
        },
        _fireEvents: function(t, e) {
            var i, o = ["projectionTopLeft", "containerTopLeft", "center", "centerPoint", "zoom"];
            t.centerPoint && n.isDefined(t.zoom) && this.set("bounds", this.calcBoundsBy(t.centerPoint, t.zoom), !0);
            for (var s = 0; s < o.length; s++) i = o[s], n.isDefined(t[i]) && this.set(i, t[i], e);
            this.set("bounds", this.calcBounds(), e)
        }
    }, n.MapView = function(e, o) {
        var s = n.isString(e) ? i.getElementById(e) : e,
            r = s.style;
        "absolute" !== r.position && (r.position = "relative"), r.overflow = "hidden", t.navigator.pointerEnabled ? (r.touchAction = "none", r.contentZooming = "none") : t.navigator.msPointerEnabled && (r.msTouchAction = "none", r.msContentZooming = "none"), this._mapDiv = s, this.set("mapDiv", s), this._initMetaKeys(), this._prepareDOM(), this.setCursor("open"), this._etarget = this.get("containerFillDiv"), this._bindMapOption(o)
    }, At(n.MapView, n.KVO, [n.MouseRecognizer, n.KeyRecognizer, n.TouchRecognizer], {
        DEFAULT_STYLE: "position:absolute;display:block;margin:0;padding:0;border:0px none;top:0;left:0;",
        _createPane: function(t, e, i, n, o) {
            e = e || 0, n = n || "overflow:visible;width:100%;height:0;" + this.DEFAULT_STYLE, n += "z-index:" + e + ";", n += o || "";
            var s = Nt.createElement("div", n);
            return R && i && s.setAttribute("data-pane-name", i), t.appendChild(s), s
        },
        _prepareDOM: function() {
            var t = Ot(this._createPane, this),
                e = this.DEFAULT_STYLE,
                i = e + "overflow:visible;width:100%;height:100%;-webkit-tap-highlight-color: rgba(0,0,0,0);",
                o = t(this._mapDiv, 0, "fillMapDiv", i),
                s = t(o, 0, "containerFillDiv", i),
                r = t(s, 1, "containerDiv"),
                a = t(s, 1e4, "loadingDiv", i + "background-color:#fff;"),
                h = t(r, 0, "zoomPane"),
                l = t(r, 1, "tilePane"),
                c = t(r, 100, "overlayPane");
            h.style.display = "none", Nt.disableSelection(l), Nt.disableSelection(h), Nt.setOpacity(a, .5), a.style.display = "none", this.set("fillMapDiv", o), this.set("containerFillDiv", s), this.set("containerDiv", r), this.set("loadingDiv", a), this.set("zoomPane", h), this.set("tilePane", l), this.set("overlayPane", c);
            var u = {
                overlayLayer: t(c, 101, "overlayLayer"),
                overlayImage: t(c, 103, "overlayImage"),
                floatPane: t(c, 106, "floatPane")
            };
            this.set("panes", u), this.set("tileindexpanes", new n.KVOArray), this._zIndex = 107
        },
        addTilePane: function(t) {
            this.get("tileindexpanes").push(t)
        },
        removeTilePane: function(t) {
            this.get("tileindexpanes").removeElement(t)
        },
        getTilePanes: function() {
            return this.get("tileindexpanes")
        },
        addPane: function(t, e) {
            var i, o = e;
            return n.isNumber(o) || !n.hasValue(o) ? (i = o || this._zIndex++, o = this._createPane(this.get("containerDiv"), i, t)) : this.get("containerDiv").appendChild(o), this.get("panes")[t] = o, o
        },
        removePane: function(t) {
            var e = this.get("panes"),
                i = e[t];
            i && (Nt.removeElement(i), i = null, e[t] = null, delete e[t])
        },
        _bindMapOption: function(t) {
            this.bindTo(["padding", "draggable", "scrollWheel", "keyboardShortcuts", "pinchZoom", "background"], t)
        },
        background_changed: function(t) {
            var e = this.get("mapDiv"),
                i = "transparent";
            i = 0 === t.indexOf("#") || 0 === t.indexOf("rgb") ? t : "url('" + t + "') repeat 0 0 transparent";
            try {
                e.style.background = i
            } catch (t) {}
        },
        swapTilePane: function() {
            var t, e = this.get("tilePane"),
                i = this.get("zoomPane");
            Zt.trigger(this, "before_tilepane_swap"), t = e, e = i, i = t, e.style.zIndex = 1, i.style.zIndex = 0, this.set("tilePane", e), this.set("zoomPane", i), t = null, Zt.trigger(this, "tilepane_swapped")
        },
        setCursor: function(t) {
            var e = t;
            t && "auto" !== t || (t = "open"), "open" !== t && "closed" !== t || (e = "url('" + V + "/" + t + "hand.cur'), default"), this._cursorType = t, this.get("fillMapDiv").style.cursor = e
        },
        getCursor: function() {
            return this._cursorType
        },
        toggleHand: function(t) {
            if (t && ("open" === t || "closed" === t)) {
                var e = "open" === t ? "closed" : "open";
                this.getCursor() === e && this.setCursor(t)
            }
        },
        getInfoWindowElement: function() {
            function t(t) {
                Vt.stopPropagation(t)
            }
            var e = this._infoWindowEl;
            if (e) return e;
            e = Nt.createElement("div", Y + "cursor:default;");
            for (var i = ["click", "mousedown", "dblclick", "mousewheel", "touchstart", "gesturestart"], n = 0, o = i.length; n < o; n++) Zt.addDOMListener(e, i[n], t);
            return this._infoWindowEl = e, e
        },
        getElement: function() {
            return this.get("mapDiv")
        },
        getMapOffset: function() {
            return Nt.getOffset(this.get("mapDiv")).add(this.getPaddingOffset())
        },
        getContainerDivOffset: function() {
            var t = (this.get("padding"), Nt.getTranslate(this.get("containerDiv"))),
                e = this.getPaddingOffset();
            return t.add(e)
        },
        getTarget: function() {
            return this._etarget
        },
        _getTrigger: function(t) {
            var e = this;
            return function(i) {
                i = Vt.fix(i), i.preventDefault(), Zt.trigger(e, t, i)
            }
        },
        listen: function() {
            this.unlisten(), this.listenMouse(), this.listenKey(), this.listenTouch()
        },
        unlisten: function() {
            this.unlistenMouse(), this.unlistenKey(), this.unlistenTouch()
        },
        padding_changed: function() {
            var t = this.get("containerDiv"),
                e = this.getPaddingOffset();
            t.style.marginLeft = e.x + "px", t.style.marginTop = e.y + "px"
        },
        getPaddingOffset: function() {
            var t = this.get("padding");
            return kt((t.right - t.left) / 2, (t.bottom - t.top) / 2).mul(-1, -1)
        },
        setSize: function(t) {
            !t || this._size && this._size.equals(t) || (this._size = t.clone(), Nt.setSize(this.get("mapDiv"), t))
        },
        getSize: function() {
            return this._size || (this._size = Nt.getSize(this.get("mapDiv")).round()), this._size
        },
        destroy: function() {
            Nt.removeElement(this.get("fillMapDiv")), this.unlisten(), this.unbindAll()
        }
    }), n.MapModel = function(t) {
        var e = this;
        e.bindTo(["userMinZoom", "userMaxZoom", "padding", "resizeOrigin", "maxBounds", "tileTransition", "tileSpare"], t), e.set("instantTiling", !0), e.set("mapTypeId", t.get("mapTypeId")), e.set("mapSystemProjection", new n.MapSystemProjection(e)), e.set("containerTopLeft", kt()), e.set("scale", 1), e.set("transformOrigin_px", kt()), e.set("infowindow", null), e.set("renderMode", 1)
    }, At(n.MapModel, n.KVO, [n.MapUpdater, n.ZoomScaleChecker], {
        padding_changed: function(t) {
            var e = kt(t.left, t.top),
                i = kt(t.right, t.bottom);
            this.set("paddingOffset", kt((i.x - e.x) / 2, (i.y - e.y) / 2).mul(-1, -1)), this.getCenter() && this.setProjBounds(this.get("size"), this.get("centerPoint"), this.get("zoom"))
        },
        initPrimaryData: function(t) {
            var e, i = this,
                o = i.get("userMinZoom"),
                s = i.get("userMaxZoom"),
                r = t.mapTypes.getSelectedType(),
                a = r.tileSize || Bt(256, 256),
                h = r.projection || n.EmptyProjection,
                l = t.get("bounds"),
                c = t.get("maxBounds"),
                u = t.get("center"),
                p = t.get("zoom");
            !1 === n.hasValue(o) && (o = -1), !1 === n.hasValue(s) && (s = 100), i.set("tileSize", a), i.set("projection", h), i.set("isTilingSystemChanged", !1), i.set("repeatX", r.repeatX || !1), l && (e = this.getFitZoomAndCenter(l), p = Math.max(e.zoom, o), u = e.center, t.set("bounds", null)), c && !c.hasPoint(u) && (e = this.getFitZoomAndCenter(c), p = Math.max(e.zoom, o), u = e.center), o > p && (p = o), s < p && (p = s), t.set("zoom", p), t.set("center", u), i.set("zoom", p), i.set("center", u), i.set("centerPoint", i.get("mapSystemProjection").fromCoordToPoint(u)), i.set("tilt", t.get("tilt")), i.set("rotation", t.get("rotation")), i.setProjBounds(i.get("size"), i.get("centerPoint"), p)
        },
        setCenter: function(t) {
            return !t.equals(this.get("center")) && (this.setCenterPoint(this.get("mapSystemProjection").fromCoordToPoint(t)), !0)
        },
        getCenter: function() {
            return this.get("center")
        },
        setCenterPoint: function(t) {
            var e = !1 === t.equals(this.get("centerPoint")),
                i = this._getTileChanges();
            return this.set("instantTiling", !0), this.update(null, t, null), i === this._getTileChanges() && this.set("instantTiling", !1), e
        },
        getCenterPoint: function() {
            return this.get("centerPoint")
        },
        getCenterPixel: function() {
            var t = this.get("size");
            return kt(t.width / 2, t.height / 2).sub(this.get("containerTopLeft"))
        },
        getZoom: function() {
            return this.get("zoom")
        },
        setProjBounds: function(t, e, i) {
            var n = this.get("mapSystemProjection"),
                o = n.scaleDown(t.width, i) / 2,
                s = n.scaleDown(t.height, i) / 2;
            this.set("projectionTopLeft", e.clone().sub(o, s)), this.set("projectionBottomRight", e.clone().add(o, s)), this.set("bounds", this.calcBounds())
        },
        _fromCoordToOffsetAtZoom: function(t, e) {
            var i = this.get("mapSystemProjection"),
                n = i.fromCoordToPoint(t.clone());
            return n.sub(this.get("projectionTopLeft")), i.scaleUp(n, e), n.sub(this.get("containerTopLeft")), n
        },
        _fromOffsetToCoordAtZoom: function(t, e) {
            var i = this.get("mapSystemProjection"),
                n = t.clone();
            return n.add(this.get("containerTopLeft")), i.scaleDown(n, e), n.add(this.get("projectionTopLeft")), i.fromPointToCoord(n)
        },
        getBoundsWithMargin: function(t, e, i) {
            if (t = t || this.getBounds(), e = n.trbl(e), e = n.trbl_abs(e), i = n.isDefined(i) ? i : this.get("zoom"), n.trbl_isZero(e)) return t;
            var o = this._fromCoordToOffsetAtZoom(t.getMin(), i),
                s = this._fromCoordToOffsetAtZoom(t.getMax(), i);
            return o.sub(e.left, -1 * e.bottom), s.add(e.right, -1 * e.top), o = this._fromOffsetToCoordAtZoom(o, i), s = this._fromOffsetToCoordAtZoom(s, i), o instanceof zt ? Rt.bounds(o, s) : Dt.bounds(o, s)
        },
        fitBounds: function(t, e) {
            var i = this.getBounds(),
                n = this.getFitZoomAndCenter(t),
                o = this._getTileChanges(),
                s = this.calcBoundsBy(n.centerPoint, n.zoom),
                r = this.getBoundsWithMargin(t, e, n.zoom);
            if (i.equals(r)) return !1;
            for (n.center = r.getCenter(), n.centerPoint = this.get("mapSystemProjection").fromCoordToPoint(n.center); !1 === s.hasBounds(r) && (n.zoom -= 1, s = this.calcBoundsBy(n.centerPoint, n.zoom), !(n.zoom <= this.get("mapTypeMinZoom") || s.hasBounds(r))););
            return this.set("instantTiling", !0), this.update(null, n.centerPoint, n.zoom), o === this._getTileChanges() && this.set("instantTiling", !1), !1 === this.getBounds().equals(i)
        },
        getBounds: function() {
            return this.get("bounds")
        },
        getFitZoomAndCenter: function(t) {
            var e = this.get("size").clone(),
                i = (this.get("padding"), this.get("mapSystemProjection")),
                o = this.get("userMinZoom"),
                s = this.get("userMaxZoom"),
                r = this.get("mapTypeMinZoom");
            !1 === n.hasValue(o) && (o = -1), !1 === n.hasValue(s) && (s = 100);
            var a = n.calcFitZoomAndCenter(e, t, i, s, o, r),
                h = this.getFittableMinZoom(a.zoom);
            return !1 === h && (h = a.zoom), a.zoom = h, a
        },
        calcBoundsBy: function(t, e) {
            var i = this.get("mapSystemProjection"),
                n = this.get("tileSize"),
                o = this.get("padding"),
                s = this.get("size").clone().sub(o.left + o.right, o.top + o.bottom),
                r = i.scaleDown(s.width, e) / 2,
                a = i.scaleDown(s.height, e) / 2,
                h = t.clone().add(-1 * r, a),
                l = t.clone().add(r, -1 * a);
            return h.x = Math.max(h.x, 0), h.y = Math.min(h.y, n.height), l.x = Math.min(l.x, n.width), l.y = Math.max(l.y, 0), h = i.fromPointToCoord(h), l = i.fromPointToCoord(l), (h instanceof zt ? Rt : Dt).bounds(h, l)
        },
        calcBounds: function() {
            return this.calcBoundsBy(this.get("centerPoint"), this.get("zoom"))
        },
        getSize: function() {
            return this.get("size")
        },
        setSize: function(t) {
            this.getCenter() && !this.get("size").equals(t) && (t = t.clone(), this._applyResizeOrigin(this.get("size").clone(), t.clone()), this.set("size", t), this.setProjBounds(t, this.get("centerPoint"), this.get("zoom")), this.set("instantTiling", !1))
        },
        setTilt: function(t) {
            this.set("tilt", t || 0)
        },
        getTilt: function() {
            return this.get("tilt") || 0
        },
        setRotation: function(t) {
            this.set("rotation", t || 0)
        },
        getRotation: function() {
            return this.get("rotation") || 0
        },
        _applyResizeOrigin: function(t, e) {
            var i = this.get("resizeOrigin");
            if (i !== x.CENTER) {
                var n = this.get("mapSystemProjection"),
                    o = this.get("zoom"),
                    s = this.get("centerPoint").clone(),
                    r = n.scaleDown(e.sub(t).div(2, 2), o);
                switch (r = kt(r.width, r.height), i) {
                    case x.TOP_LEFT:
                    case x.LEFT_TOP:
                        s.add(r);
                        break;
                    case x.TOP_RIGHT:
                    case x.RIGHT_TOP:
                        s.add(-r.x, r.y);
                        break;
                    case x.BOTTOM_RIGHT:
                    case x.RIGHT_BOTTOM:
                        s.sub(r);
                        break;
                    case x.BOTTOM_LEFT:
                    case x.LEFT_BOTTOM:
                        s.sub(-r.x, r.y)
                }
                this.setCenterPoint(s)
            }
        },
        _calcBaseOffset: function() {
            this.set("baseOffset", this.get("mapSystemProjection").fromPointToOffset(kt(0, 0)))
        },
        _calcLinearCenterPoint: function() {
            var t = this.get("centerPoint").clone();
            if (this.get("repeatX")) {
                var e = this.get("mapSystemProjection"),
                    i = this.get("zoom"),
                    n = e.scaleDown(this.get("baseOffset").clone(), i),
                    o = e.scaleDown(e.fromPointToOffset(kt(0, 0)), i),
                    s = o.sub(n);
                t.add(s);
                var r = this._cpdiff,
                    a = t.clone().sub(this.get("centerPoint"));
                r && !1 === r.equals(a) && Zt.trigger(this, "__point_shifted"), this._cpdiff = a
            }
            this.set("__linearCenterPoint", t)
        },
        bounds_changed: function() {
            var t = this.get("zoom"),
                e = this.get("size"),
                i = this.__prevZoom !== t,
                n = !this.__prevSize || !1 === this.__prevSize.equals(e),
                o = this.get("isTilingSystemChanged");
            (n || i || o) && this._calcBaseOffset(), this._calcLinearCenterPoint(), this.__prevZoom = this.get("zoom"), this.__prevSize = this.get("size");
            var s = this.get("tileIndexArray");
            s && (i || o ? s.build() : s.update(n), o && this.set("isTilingSystemChanged", !1))
        },
        initTilePaneModel: function() {
            var t = new n.TileIndexArray(this),
                e = 0,
                i = function() {
                    e > 1e3 ? e = 0 : e++
                };
            this.set("tileIndexArray", t), this._getTileChanges = function() {
                return e || 0
            }, Zt.addListener(t, "insert_at", i)
        },
        refreshTiles: function(t) {
            t && this.set("instantTiling", !0), Zt.trigger(this, "refresh", t)
        },
        projection_changed: function() {
            var t = this.getCenter();
            if (t) {
                var e = this.get("mapSystemProjection").fromCoordToPoint(t);
                this.set("isTilingSystemChanged", !0), this.set("centerPoint", e), this.setProjBounds(this.getSize(), e, this.getZoom())
            }
        },
        maxBounds_changed: function(t) {
            var e = this.getCenter();
            if (e && t && !t.hasPoint(e)) return this.setCenter(t.getCenter())
        }
    }), n.MapAction = function(t) {
        var e = this;
        e._mapView = null, e._mapModel = null, e._zoomEffector = null, this._asyncEventsModel = null, e._trans = {}, e._listeningEvents = {}, Zt.addListener(e, "__BEGIN_DISPATCH__", Ot(e._onBeginDispatch, e)), Zt.addListener(e, "__STOP_DISPATCH__", Ot(e._onStopDispatch, e)), e.bindTo(["draggable", "scrollWheel", "disableDoubleClickZoom", "disableKineticPan", "keyboardShortcuts", "disableDoubleTapZoom", "disableTwoFingerTapZoom", "zoomOrigin"], t), !Nt.isSupportedCSS3Style("transform") || It.browser.msie && It.browser.version < 10 || e.bindTo("overlayZoomEffect", t)
    }, At(n.MapAction, n.KVO, {
        setMapModel: function(t) {
            this.bindTo(["mapSystemProjection", "centerPoint", "maxBounds", "scale", "containerTopLeft", "zoom", "center", "tilt", "rotation", "projection", "bounds", "padding", "paddingOffset", "size", "tileTransition", "instantTiling", "mapTypeMinZoom", "mapTypeMaxZoom", "tileSize", "repeatX"], t), this._mapModel = t;
            var e = new n.AsyncEventsModel(t);
            Zt.forward(e, "zoomstart", this), Zt.forward(e, "zoomend", this), this._asyncEventsModel = e, this.forwardZooming(), this.forwardIdle()
        },
        overlayZoomEffect_changed: function(t) {
            var e = n.hasValue(t);
            if (this.setValues({
                    ef_overlay: e,
                    ef_overlaylayer: !1,
                    ef_overlayimage: !1,
                    ef_floatpane: !1
                }), e)
                if ("all" === t) this.setValues({
                    ef_overlaylayer: !0,
                    ef_overlayimage: !0,
                    ef_floatpane: !0
                });
                else {
                    var i = t.split(",");
                    n.forEach(i, function(t) {
                        this.set("ef_" + t.toLowerCase().trim(), !0)
                    }.bind(this))
                }
        },
        repeatX_changed: function() {
            this.triggerIdle()
        },
        forwardZooming: function() {
            var t = this,
                e = t._asyncEventsModel;
            t.clearZooming(), t._zforwards = Zt.forward(e, "zoomstart", t, "zooming")
        },
        forwardIdle: function() {
            var t = this,
                e = t._asyncEventsModel;
            t.clearIdle(), t._iforwards = Zt.forward(e, "zoomend", t, "idle")
        },
        clearZooming: function() {
            Zt.removeListener(this._zforwards), this._zforwards = null
        },
        clearIdle: function() {
            Zt.removeListener(this._iforwards), this._iforwards = null
        },
        triggerIdle: function() {
            Zt.trigger(this, "idle", this._asyncEventsModel)
        },
        setMapView: function(t) {
            this.bindTo(["zoomPane", "tilePane", "shiftKey", "ctrlKey", "metaKey", "altKey"], t), this._mapView = t, this.listenView(t)
        },
        initZoomEffector: function() {
            var t = new n.ZoomEffector(this._mapView, this);
            this.bindTo("tileszooming", t), Zt.forward(t, "scale", this), Zt.forward(t, "clearpaneposition", this), this._zoomEffector = t
        },
        clearOverlayPanePosition: function() {
            this._zoomEffector.clearOverlayPanePosition()
        },
        panBy: function(t, e) {
            if (!t.equals(kt(0, 0))) {
                var i, n = this.get("mapSystemProjection"),
                    o = this.get("centerPoint").clone(),
                    s = this.get("maxBounds"),
                    r = this.get("scale") || 1,
                    a = this.get("containerTopLeft").clone();
                t = t.clone().round(), a.sub(t), t.div(r, r), n.scaleDown(t, this.get("zoom")), o.add(t), i = n.fromPointToCoord(o), this._asyncEventsModel.startPanning(t), s && !s.hasPoint(i) || (a.round(), e && (this.set("containerTopLeft", a), this._mapModel.set("center", i, e)), this._mapModel.update(null, o, null, a, e))
            }
        },
        _getPageXYPointBy: function(t) {
            if (t) {
                if (t.pos) {
                    var e = t.pos();
                    return kt(e.pageX, e.pageY)
                }
                return "pageX" in t && "pageY" in t ? kt(t.pageX, t.pageY) : void 0
            }
        },
        fromEventToPointerEvent: function(t) {
            return this._getPointerEvent(t)
        },
        _getPointerEvent: function(t, e) {
            var i = this._getPageXYPointBy(t);
            if (i) {
                var o = {
                    type: e || t.type || "",
                    originalEvent: t,
                    domEvent: t
                };
                if (o.type) {
                    if (0 === o.type.indexOf("key")) return o.keyboardEvent = t, o
                } else o.type = null, delete o.type;
                var s = this.get("mapSystemProjection"),
                    r = this.get("projection"),
                    a = this._mapView.getMapOffset(),
                    h = i.clone().sub(a).sub(this.get("containerTopLeft")),
                    l = s.fromOffsetToPoint(h),
                    c = s.fromPointToCoord(l);
                return o.pointerEvent = t, o.offset = h, o.point = l, r !== n.EmptyProjection && (o.coord = c), r.fromPointToLatLng && (o.latlng = c), this.get("repeatX") && (o.point = s.fromCoordToPoint(c)), o
            }
        },
        _triggerTap: function(t) {
            var e = {
                    type: "tap",
                    target: t.pointerEvent.target,
                    pageX: t.pointerEvent.pageX,
                    pageY: t.pointerEvent.pageY
                },
                i = {
                    domEvent: e,
                    pointerEvent: e,
                    offset: t.offset,
                    point: t.point,
                    coord: t.coord
                };
            t.latlng && (i.latlng = t.latlng), Zt.trigger(this, "tap", i)
        },
        _isMapEvent: function(t, e) {
            return !(q[e] && !this._mapView._isMapEvent(t))
        },
        handleEvent: function(t, e) {
            var i = !t;
            if (e = e || t.type, t && this._listeningEvents[e] && this._isMapEvent(t, e) && (i = !0), i) {
                var n = [this, e],
                    o = null;
                t && (o = this._getPointerEvent(t, e), n.push(o)), o && It.mobile && "click" === e && this._triggerTap(o), Zt.trigger.apply(Zt, n)
            }
        },
        zoomBy: function(e, i, n) {
            i = this._eventOrigin_px || i;
            var o = this._asyncEventsModel,
                s = this._mapModel.getValidDeltaZoom(e),
                r = this.get("zoom"),
                a = r + s,
                h = this.get("mapSystemProjection"),
                l = this;
            if (!this._mapModel.isValidZoom(a) || r === a) return !1;
            this.stopKineticPan();
            var c = this.get("size"),
                u = o.getContainerTopLeft(),
                p = this.get("centerPoint").clone(),
                d = i.clone();
            d.sub(c.width / 2, c.height / 2), d.add(u.x, u.y);
            var f = d.clone();
            h.scaleDown(d, r), h.scaleDown(f, a), p.add(d), p.sub(f);
            var g = this.get("maxBounds"),
                _ = this.get("centerPoint").clone();
            return g && (g.hasPoint(h.fromPointToCoord(p)) || (p = _, i = this._mapModel.getCenterPixel())), n && (o.isZooming() || (this._eventOrigin_px = i.clone(), Zt.removeListener(l._zbl), this._zbl = Zt.addListener(this, "idle", function() {
                t.setTimeout(function() {
                    Zt.removeListener(l._zbl), l._eventOrigin_px = null, l._zbl = null
                }, 100)
            })), o.startZooming(s, i, u)), this._mapModel.update(null, p, a), !0
        },
        zoomingBy: function(t, e, i) {
            switch (t) {
                case "start":
                    this._onStartZoomingBy();
                    break;
                case "change":
                    this._onChangeZoomingBy(e, i);
                    break;
                case "end":
                    this._onEndZoomingBy()
            }
        },
        _onStartZoomingBy: function() {
            var t = this.get("scale");
            this._startScale = t - 1, this._trans.pinch && (this._trans.pinch.stop(), this._trans.pinch = null, delete this._trans.pinch)
        },
        _onChangeZoomingBy: function(t, e) {
            e && !this._scaleEventOrigin && (e = this._getZoomOriginByPoint(e), this._scaleEventOrigin = e);
            var i, n = this._getZoomOrigin() || this._scaleEventOrigin || this._mapModel.getCenterPixel();
            t < 1 ? (t -= 1, i = this._startScale + 1 + t) : i = this._startScale + t, 1 !== (i = this._mapModel.getFittableScale(i)) && (this._prevPinch && (i < .1 && (i = .1), i > 16 && (i = 16)), this._asyncEventsModel.zoomingWithScale(i, n))
        },
        _onEndZoomingBy: function() {
            function t(t, e) {
                h.zoomingWithScale(t, e || a)
            }

            function e() {
                c._scaleEventOrigin = null, delete c._scaleEventOrigin, h.stopZoomingWithScale()
            }

            function i(t) {
                c._trans.pinch && (c._trans.pinch.stop(), c._trans.pinch = null, delete c._trans.pinch);
                var e = new n.Transition(Ct({
                    duration: 100
                }, t));
                c.stopTransition(), e.run({
                    scale: s
                }, {
                    scale: o
                }), c._trans.pinch = e
            }
            var o, s = this.get("scale"),
                r = this.get("zoom"),
                a = this._getZoomOrigin() || this._scaleEventOrigin || this._mapModel.getCenterPixel(),
                h = this._asyncEventsModel,
                l = 0,
                c = this;
            if (s && a) {
                if (1 === s) return e();
                var u = Math.pow(2, r),
                    p = u * s,
                    d = Math.floor(Math.log(p) / Math.log(2));
                l = d - r, 0 === l && s > 1 && (l = 1), o = Math.pow(2, l), s > 1 && s > o && (l += 1, o = Math.pow(2, l));
                var f, g = !1;
                0 === l ? (f = function() {
                    g || (c._mapModel.update(null, c.get("centerPoint"), r), e(), g = !0)
                }, i({
                    progress: function(e) {
                        t(e.progress.scale)
                    },
                    complete: f,
                    stop: f
                })) : o !== s ? (f = function() {
                    g || (c.zoomBy(l, a, !1), e(), g = !0)
                }, i({
                    progress: function(e) {
                        t(e.progress.scale)
                    },
                    complete: f,
                    stop: f
                })) : (this.zoomBy(l, a, !1), e())
            }
        },
        isZooming: function() {
            return !!this._asyncEventsModel && this._asyncEventsModel.isZooming()
        },
        changeScale: function(t) {
            this._asyncEventsModel && (this._startScale = 0, this._onChangeZoomingBy(t), this._onEndZoomingBy())
        },
        isTranRunning: function(t) {
            var e = this._trans;
            if (t) {
                var i = e[t] || null;
                return !!i && i.isRunning()
            }
            var n = !1;
            for (var o in e)
                if (e.hasOwnProperty(o) && e[o] && e[o].isRunning()) {
                    n = !0;
                    break
                } return n
        },
        stopTransition: function() {
            n.forEach(this._trans, function(t) {
                t && t.stop()
            })
        },
        __isFar: function(t) {
            var e = this.get("mapSystemProjection"),
                i = e.fromPointToOffset(this.get("centerPoint")),
                n = e.fromCoordToOffset(t).sub(i),
                o = this.get("size").clone().mul(5, 5);
            return n.x = Math.abs(n.x), n.y = Math.abs(n.y), n.x > o.width || n.y > o.height
        },
        panTo: function(t, e) {
            if (!this.get("center").equals(t)) {
                var i = this.get("mapSystemProjection"),
                    o = this._trans.panto,
                    s = i.fromPointToOffset(this.get("centerPoint")),
                    r = i.fromCoordToOffset(t),
                    a = this;
                if (this.stopTransition(), this.__isFar(t)) return this._mapModel.setCenter(t), e.complete && e.complete(), void a.triggerIdle();
                Zt.trigger(this, "panning"), o || (o = new n.Transition({
                    easing: "easeOutCubic"
                }), this._trans.panto = o);
                var h = s.clone().round();
                o.clearListeners(), o.addListener({
                    progress: function(t) {
                        var i = kt(t.progress.x, t.progress.y);
                        i.sub(h).round(), a.set("instantTiling", !0), a.panBy(i), h.add(i), e.progress && e.progress(t)
                    },
                    complete: function() {
                        a._mapModel.setCenter(t), a.set("instantTiling", !1), e.complete && e.complete(), a.triggerIdle()
                    }
                }), o.run({
                    x: s.x,
                    y: s.y
                }, {
                    x: r.x,
                    y: r.y
                }, e || {})
            }
        },
        panToBounds: function(t, e, i) {
            var n = this._mapModel.getFitZoomAndCenter(t);
            if (i) {
                var o = this._mapModel.calcBoundsBy(n.centerPoint, n.zoom),
                    s = this._mapModel.getBoundsWithMargin(t, i, n.zoom);
                for (n.center = s.getCenter(), n.centerPoint = this.get("mapSystemProjection").fromCoordToPoint(n.center); !1 === o.hasBounds(s) && (n.zoom -= 1, o = this._mapModel.calcBoundsBy(n.centerPoint, n.zoom), !(n.zoom <= this.get("mapTypeMinZoom") || o.hasBounds(s))););
            }
            this.morph(n.center, n.zoom, e)
        },
        morph: function(t, i, o) {
            o = o || {};
            var s, r = this.get("zoom"),
                a = {
                    duration: 500,
                    easing: "easeOutCubic"
                };
            if (n.hasValue(i) && (i = this._mapModel.getValidZoom(i - r)), s = i - r, i === e || 0 === s) return this.panTo(t, Ct(a, o));
            var h = this.get("mapSystemProjection"),
                l = Math.pow(2, s) - 1,
                c = this.get("centerPoint").clone(),
                u = h.fromCoordToPoint(t),
                p = c.sub(u).div(l, l),
                d = u.clone().sub(p),
                f = h.fromPointToOffset(d);
            this.stopTransition(), l < 1 && (a.easing = "eastInCubic"), this.zoomBy(s, f, Ct(a, o))
        },
        kineticPan: function(t, e) {
            if (!t || !e) return this.stopKineticPan();
            var i = this._trans.kinetic;
            if (i) {
                var o = kt(t.x - e.x, t.y - e.y),
                    s = parseInt(Math.sqrt(o.x * o.x + o.y * o.y), 10),
                    r = n.nearRange(12 * s, 500, 800),
                    a = e.clone(),
                    h = this;
                o.mul(5, 5), o.x = n.nearRange(o.x, -500, 500), o.y = n.nearRange(o.y, -500, 500), a.sub(o), this.stopKineticPan(), this.stopTransition(), i.addListener({
                    progress: function(t) {
                        var i = kt(t.progress.x, t.progress.y);
                        h.panBy(e.clone().sub(i)), e = i.clone()
                    },
                    complete: function() {
                        h.triggerIdle()
                    }
                }), i.run({
                    x: e.x,
                    y: e.y
                }, {
                    x: a.x,
                    y: a.y
                }, {
                    duration: r
                })
            }
        },
        stopKineticPan: function() {
            var t = this._trans.kinetic;
            t && (t.isRunning() && (t.stop(), this.triggerIdle()), t.clearListeners())
        },
        disableKineticPan_changed: function(t) {
            this.stopKineticPan(), !1 === t ? this._trans.kinetic || (this._trans.kinetic = new n.Transition({
                easing: "easeOutCubic"
            })) : this._trans.kinetic && (this._trans.kinetic = null, delete this._trans.kinetic)
        },
        setZoom: function(t, e) {
            var i = this.get("zoom"),
                n = this._mapModel.getValidDeltaZoom(t - i);
            if ((t = i + n) === i || !this._mapModel.isValidZoom(t)) return !1;
            if (e) {
                var o = this._getZoomOrigin() || this._eventOrigin_px;
                o || (o = this._mapModel.getCenterPixel(), this._eventOrigin_px = o);
                var s = this;
                Zt.once(s, "zoomend", function() {
                    s._eventOrigin_px = null, delete s._eventOrigin_px
                }), this.zoomBy(n, o, e)
            } else {
                this.set("instantTiling", !0);
                var r = this._getZoomOrigin() || this._mapModel.getCenterPixel();
                this.zoomBy(n, r, !1)
            }
            return !0
        },
        mapTypeMinZoom_changed: function() {
            if (this._mapModel) {
                var t = this._mapModel.getFittableMinZoom();
                !1 !== t && this.setZoom(t, !0)
            }
        },
        mapTypeMaxZoom_changed: function() {
            if (this._mapModel) {
                var t = this._mapModel.getFittableMaxZoom();
                !1 !== t && this.setZoom(t, !0)
            }
        },
        _onBeginDispatch: function(t) {
            this._listeningEvents[t] = !0, (It.mobile && "tap" === t || "click" === t) && (this._listeningEvents.tap = !0, this._listeningEvents.click = !0)
        },
        _onStopDispatch: function(t) {
            this._listeningEvents[t] = null, delete this._listeningEvents[t], (It.mobile && "tap" === t || "click" === t) && (this._listeningEvents.tap = null, delete this._listeningEvents.tap, this._listeningEvents.click = null, delete this._listeningEvents.click)
        },
        listenView: function(t) {
            var e = this,
                i = Ot(e.handleEvent, e),
                n = function(n, o) {
                    return Zt.addListener(t, n, o ? Ot(o, e) : i)
                };
            t.listen(), e._viewListeners = [n("click", e._onClick), n("rightclick", e._onRightClick), n("mousedown", e._onDown), n("mousemove"), n("mouseup", e._onUp), n("dblclick", e._onDblClick), n("mouseover", e._onOver), n("mouseout", e._onOut), n("dragready", e._onDragReady), n("drag", e._onDrag), n("dragend", e._onDragEnd), n("mousewheel", e._onWheel), n("keydown"), n("keytransition", e._onKeyTransition), n("keytransitionend", e._onKeyTransitionEnd), n("keyup"), n("touchstart"), n("touchmove"), n("touchend"), n("pinchstart", e._onPinchStart), n("pinch", e._onPinch), n("pinchend", e._onPinchEnd), n("twofingertap", e._onTwoFingerTap), n("doubletap", e._onDoubleTap), n("longtap", e._onLongTap), n("tiltstart", e._onTiltStart), n("tilt", e._onTilt), n("tiltend", e._onTiltEnd)]
        },
        unlistenView: function() {
            Zt.removeListener(this._viewListeners)
        },
        _onDown: function(t) {
            this._mapView.toggleHand("closed"), this.handleEvent(t, "mousedown")
        },
        _onUp: function(t) {
            this._mapView.toggleHand("open"), this.handleEvent(t, "mouseup")
        },
        _onClick: function(t) {
            this.handleEvent(t, "click")
        },
        _onRightClick: function(t) {
            this.handleEvent(t, "rightclick")
        },
        _initDrag: function() {
            this._down = null, this._curPoint = null, this._prevPoint = null, this._isMapDragging = null
        },
        _firePanning: function(t, e) {
            var i = kt(0, 0),
                n = this._curPoint ? this._curPoint : this._startPoint;
            i.x = n.x - t.x, i.y = n.y - t.y, this._curPoint = t, this.panBy(i, e)
        },
        _onDragReady: function(t) {
            if (t.which !== Vt.MOUSE_RBUTTON && !this._prevPinch && !this.isTranRunning("pinch")) {
                this.kineticPan(null);
                var e = t.pos();
                this._down && this._initDrag(), this._startPoint = kt(e.pageX, e.pageY), this._prevPoint = [this._startPoint], this._down = !0
            }
        },
        _onDrag: function(t) {
            if (this._down) {
                var e = t.pos(),
                    i = kt(e.pageX, e.pageY);
                if (!this._isMapDragging) {
                    if (n.Math.distance(this._startPoint, i) < 4) return;
                    this._isMapDragging = !0, this.handleEvent(t, "dragstart")
                }
                2 === this._prevPoint.length && this._prevPoint.shift(), this._prevPoint.push(this._curPoint), this._firePanning(i, !!It.mobile), this.handleEvent(t, "drag")
            }
        },
        _onDragEnd: function(t) {
            if (this._down) {
                var e, i, n = t.pos(),
                    o = kt(n.pageX, n.pageY);
                0 === t.type.indexOf("touch") && 0 === o.x && 0 === o.y ? (o = this._prevPoint.pop() || this._startPoint, e = this._prevPoint.pop() || this._startPoint) : e = this._prevPoint.pop(), i = e ? e.clone().sub(o) : kt(0, 0), this._isMapDragging && (-1 === t.type.indexOf("touch") && this._mapView.toggleHand("open"), this.get("disableKineticPan") || 0 === i.x && 0 === i.y ? (this._firePanning(o, !!It.mobile), It.mobile && this._mapModel.update(null, this.get("centerPoint"), null), this.handleEvent(t, "dragend"), this.triggerIdle()) : (this.handleEvent(t, "dragend"), this.kineticPan(e.clone(), o.clone()))), this._initDrag()
            }
        },
        _getZoomOriginByPoint: function(t) {
            var e = t.clone(),
                i = this._mapView.getContainerDivOffset(),
                n = Nt.getOffset(this._mapView.getElement());
            return e.sub(i).sub(n), e
        },
        _getZoomOriginByOption: function() {
            var t = this.get("zoomOrigin");
            return t && this.get("bounds").hasPoint(t) ? this.get("mapSystemProjection").fromCoordToOffset(t) : null
        },
        _getZoomOrigin: function(t) {
            return this._getZoomOriginByOption() || (t ? this._getZoomOriginByPoint(kt(t.pageX, t.pageY)) : null)
        },
        _onDblClick: function(t) {
            if (this.handleEvent(t, "dblclick"), !this.get("disableDoubleClickZoom")) {
                var e = this._getZoomOrigin(t);
                this.zoomBy(1, e, !0)
            }
        },
        _onOver: function(t) {
            if (this._isMapDragging) return void(this._overMap || (this._overMap = !0, this.handleEvent(t, "mouseover")));
            this._overMap = !0, this.handleEvent(t, "mouseover")
        },
        _onOut: function(t) {
            this._overMap = !1, this.handleEvent(t, "mouseout")
        },
        _onWheel: function(t) {
            if (this.handleEvent(t, "mousewheel"), !this.get("scrollWheel") || Vt.isTouchStarted()) return !1;
            t.stop();
            var e = n.now(),
                i = null !== this._wheelTime && e - this._wheelTime < 100,
                o = "wheelDeltaY" in t ? t.wheelDeltaY : "wheelDelta" in t ? t.wheelDelta : null,
                s = null !== o && Math.abs(o) <= 6;
            if (!i && !s) {
                this._wheelTime = e;
                var r = Vt.getWheelDelta(t).deltaY > 0 ? 1 : -1,
                    a = this._getZoomOrigin(t);
                this.stopTransition(), this.zoomBy(r, a, !0)
            }
        },
        _onKeyTransition: function(t) {
            this.panBy(t)
        },
        _onKeyTransitionEnd: function() {
            this.triggerIdle()
        },
        _onPinchStart: function(t) {
            this._prevPinch = t.center, this.zoomingBy("start"), this.handleEvent(t, "pinchstart")
        },
        _onPinch: function(t) {
            this._prevPinch && (this.zoomingBy("change", t.scale, t.center), this.handleEvent(t, "pinch"), this._prevPinch = t.center)
        },
        _onPinchEnd: function(t) {
            this._prevPinch && (this.zoomingBy("end"), this.handleEvent(t, "pinchend"), this._prevPinch = null)
        },
        _onTiltStart: function(t) {
            this._tiltCenter = t.center.clone(), this.handleEvent(t, "tiltstart")
        },
        _onTilt: function(t) {
            this._tiltCenter && t.center && (this._tiltCenter = t.center.clone(), this.handleEvent(t, "tilt"))
        },
        _onTiltEnd: function(t) {
            this._tiltCenter = null, delete this._tiltCenter, this.handleEvent(t, "tiltend")
        },
        _onTap: function(t) {
            this.handleEvent(t, "tap")
        },
        _onTwoFingerTap: function(t) {
            if (this.handleEvent(t, "twofingertap"), !this.get("disableTwoFingerTapZoom")) {
                var e = this._getZoomOrigin(t);
                this.zoomBy(-1, e, !0)
            }
        },
        _onDoubleTap: function(t) {
            if (this.handleEvent(t, "doubletap"), !this.get("disableDoubleTapZoom")) {
                var e = this._getZoomOrigin(t);
                this.zoomBy(1, e, !0)
            }
        },
        _onLongTap: function(t) {
            this.handleEvent(t, "longtap")
        },
        containerTopLeft_changed: function(t) {
            this._zoomEffector && !0 !== this.get("tileszooming") && Nt.translate(this._mapView.get("containerDiv"), t.clone().round())
        },
        destroy: function() {
            this.trigger("willDestroy", this), this.unlistenView(), this.unbindAll(), Zt.clearInstanceListeners(this)
        }
    }), n.TileIndexArray = function(t) {
        this._halfSize = n.Size(0, 0), this._forwards = [], this.set("startXIndex", 0), this.set("startYIndex", 0), this.set("startX_px", 0), this.set("startY_px", 0), this.set("indexes", new n.KVOArray), this._forwardEvents(this.get("indexes")), this.bindTo(["mapSystemProjection", "centerPoint", "__linearCenterPoint", "containerTopLeft", "size", "tileSize", "isTilingSystemChanged", "zoom", "scale", "tileSpare", "padding"], t), this._size = this.get("size"), this._zoom = this.get("zoom"), this._inited = !0, this.build()
    }, At(n.TileIndexArray, n.KVO, {
        BASE_FOR_EXTRA_TILE: .5,
        _tileSize: null,
        _baseForExtraTile_px: null,
        _oldRange: null,
        _forwardEvents: function(t) {
            this._clearEvents(), this._forwards = [Zt.forward(t, "insert_at", this), Zt.forward(t, "set_at", this), Zt.forward(t, "remove_at", this)]
        },
        _clearEvents: function() {
            Zt.removeListener(this._forwards), this._forwards.length = 0, this._forwards = []
        },
        getRotatedIndexes: function() {
            for (var t = [], e = this.get("indexes").getLength(), i = 0, n = []; i < e; i++) t.push(i);
            for (; e;) {
                var o = t.splice(Math.min(Math.floor(e / 2), e - 1), 1)[0];
                n.push(o), e--
            }
            return n
        },
        _rotateFire: function(t) {
            for (var e = this.getRotatedIndexes(), i = 0, n = e.length; i < n; i++) Zt.trigger(this, "insert_at", e[i], t.getAt(e[i]));
            this._forwardEvents(t)
        },
        tileSize_changed: function(t) {
            this._tileSize = t, this._baseForExtraTile_px = new n.Point(parseInt(t.width * this.BASE_FOR_EXTRA_TILE, 10), parseInt(t.height * this.BASE_FOR_EXTRA_TILE, 10)).round()
        },
        size_changed: function(t) {
            this._halfSize = t.clone().mul(.5, .5)
        },
        tileSpare_changed: function() {
            this.update()
        },
        build: function() {
            if (this._inited) {
                var t = this.get("indexes"),
                    e = this.getIndexesRange(this.get("centerPoint"), this.get("zoom"));
                Zt.trigger(this, "cleared", e), t.clear(), this.set("startXIndex", e.startXIndex), this.set("startYIndex", e.startYIndex), this.set("endXIndex", e.endXIndex), this.set("endYIndex", e.endYIndex), this.set("startX_px", e.startX_px), this.set("startY_px", e.startY_px), this._clearEvents();
                for (var i = e.startXIndex; i <= e.endXIndex; i++)
                    for (var n = e.startYIndex; n <= e.endYIndex; n++) t.push({
                        xIndex: i,
                        yIndex: n
                    });
                this._rotateFire(t), this._oldRange = e, this._basePx = new kt(e.startX_px, e.startY_px), Zt.trigger(this, "built", e)
            }
        },
        refresh: function() {
            Zt.trigger(this, "refresh", range)
        },
        update: function(t) {
            if (this._inited) {
                var e = this.get("indexes"),
                    i = this.getIndexesRange(this.get("__linearCenterPoint"), this.get("zoom")),
                    n = this._getDiffOfTiles(this._oldRange, i),
                    o = this._getDiffOfTiles(i, this._oldRange);
                this._removeHiddenTiles(e, n), this._addShowingTiles(e, o), t || o.length === e.getLength() ? (this._basePx.x = i.startX_px, this._basePx.y = i.startY_px) : this._interpolate(i), this.set("startXIndex", i.startXIndex), this.set("startYIndex", i.startYIndex), this.set("endXIndex", i.endXIndex), this.set("endYIndex", i.endYIndex), this.set("startX_px", i.startX_px), this.set("startY_px", i.startY_px), this._oldRange = i, Zt.trigger(this, "updated", i), t && Zt.trigger(this, "resized", i)
            }
        },
        _interpolate: function(t) {
            var e = this._oldRange,
                i = this._basePx;
            if (e && i) {
                var n = this._tileSize,
                    o = n.width,
                    s = n.height,
                    r = kt(t.startX_px, t.startY_px),
                    a = r.clone().sub(i);
                a.clone();
                return a.x = a.x % o, (a.y = a.y % s, a.equals(kt(0, 0))) ? t : (a.x > 0 ? a.x > o / 2 && (a.x = -1 * (o - a.x)) : -a.x > o / 2 && (a.x = 1 * (o + a.x)), a.y > 0 ? a.y > s / 2 && (a.y = -1 * (s - a.y)) : -a.y > s / 2 && (a.y = 1 * (s + a.y)), r.sub(a), t.startX_px = r.x, t.startY_px = r.y, this._basePx.x = r.x, this._basePx.y = r.y, t)
            }
        },
        _removeHiddenTiles: function(t, e) {
            if (!(t.getLength() <= 0)) {
                var i, n;
                for (n = e.length - 1; n >= 0; n--) i = e[n].tileIndex, t.getAt(i) && t.removeAt(i)
            }
        },
        _addShowingTiles: function(t, e) {
            for (var i, n = 0, o = e.length; n < o; n++) i = e[n], t.insertAt(i.tileIndex, i), i.tileIndex = null, delete i.tileIndex
        },
        _getDiffOfTiles: function(t, e) {
            var i, n = [],
                o = t.endYIndex - t.startYIndex + 1;
            if (this._isCoveredByDst(t, e)) return n;
            for (var s = t.startXIndex; s <= t.endXIndex; s++)
                for (var r = s < e.startXIndex || s > e.endXIndex, a = t.startYIndex; a <= t.endYIndex; a++) {
                    var h = a < e.startYIndex || a > e.endYIndex;
                    r || h ? (i = (s - t.startXIndex) * o + (a - t.startYIndex), n.push({
                        tileIndex: i,
                        xIndex: s,
                        yIndex: a
                    })) : r || a !== e.startYIndex || (a = e.endYIndex)
                }
            return n
        },
        _isCoveredByDst: function(t, e) {
            return t.startXIndex >= e.startXIndex && t.startYIndex >= e.startYIndex && t.endXIndex <= e.endXIndex && t.endYIndex <= e.endYIndex
        },
        getIndexesRange: function(t, e) {
            var i = this.get("mapSystemProjection"),
                o = this.get("containerTopLeft").clone().round(),
                s = (this.get("scale"), n.round(this.get("tileSpare"))),
                r = this._tileSize,
                a = r.width,
                h = r.height,
                l = this._halfSize.width,
                c = this._halfSize.height,
                u = n.floor(i.scaleUp(t.x, e)),
                p = n.floor(i.scaleUp(t.y, e)),
                d = n.floor(u / a),
                f = n.floor(p / h),
                g = l,
                _ = l,
                m = c,
                y = c;
            2 * l % 2 == 1 && (g -= .5, _ += .5), 2 * c % 2 == 1 && (m -= .5, y += .5);
            var v = this._getCenterGap(u, "width"),
                T = this._getCenterGap(p, "height"),
                x = Math.round(g - v),
                b = Math.round(_ - (a - v)),
                M = Math.round(m - T),
                E = Math.round(y - (h - T)),
                S = Math.max(n.round(s / 2), 0),
                P = Math.max(s - S, 0),
                w = this._getEdgeIndex(d, x, -1, "width"),
                L = this._getEdgeIndex(f, M, -1, "height"),
                O = this._getEdgeIndex(d, b, 1, "width"),
                C = this._getEdgeIndex(f, E, 1, "height"),
                I = {
                    centerXIndex: d,
                    centerYIndex: f,
                    startXIndex: w,
                    startYIndex: L,
                    endXIndex: O,
                    endYIndex: C,
                    cx_px: u,
                    cy_px: p
                };
            return 0 !== S && (I.startXIndex -= S, I.startYIndex -= S), 0 !== P && (I.endXIndex += S, I.endYIndex += S), I.startX_px = n.round((I.startXIndex - d) * a + x - o.x), I.startY_px = n.round((I.startYIndex - f) * h + M - o.y), I
        },
        _getCenterGap: function(t, e) {
            return t %= this._tileSize[e], t < 0 && (t += this._tileSize[e]), t
        },
        _getEdgeIndex: function(t, e, i, n) {
            var o = this._divideAndCeil(e, this._tileSize[n]),
                s = this._needsExtraTile(e, o, n),
                r = s ? 1 : 0;
            return Math.round(t + o * i + r * i)
        },
        _divideAndCeil: function(t, e) {
            return t < 0 ? 0 : Math.ceil(t / e)
        },
        _needsExtraTile: function(t, e, i) {
            return e * this._tileSize[i] - t < ("width" === i ? this._baseForExtraTile_px.x : this._baseForExtraTile_px.y)
        },
        forEach: function(t) {
            this.get("indexes").forEach(t)
        },
        getAt: function(t) {
            return this.get("indexes").getAt(t)
        },
        getLength: function() {
            return this.get("indexes").getLength()
        },
        getArray: function() {
            return this.get("indexes").getArray()
        },
        getRange: function() {
            return this._oldRange
        },
        getTileCount: function() {
            return {
                x: Math.abs(this.get("endXIndex") - this.get("startXIndex")),
                y: Math.abs(this.get("endYIndex") - this.get("startYIndex"))
            }
        }
    }), n.TileIndexPane = function(t, e) {
        this._paneName = t || n.guid(), this._options = Ct({
            overlayMap: !0
        }, e), this._pool = new n.TilePool, this.set("paneElement", Nt.createElement("div", Y)), this.set("tileopacity", 1), this._options.overlayMap && this.set("spareElement", Nt.createElement("div", Y))
    }, At(n.TileIndexPane, n.KVO, {
        setMap: function(t) {
            var e = !this._options.overlayMap;
            if (null === t) this._unlistenSwap(), this._unlistenTile(), this._removeAllTiles(), this.unbindAll(), this.get("view").removeTilePane(this), e ? this.get("view").removePane(this._paneName) : (Nt.removeElement(this.getElement()), Nt.removeElement(this.getSpareElement())), this.set("model", null), this.set("action", null), this.set("view", null), this._tileIndexArray = null;
            else {
                var i = t.getMapModel(),
                    n = t.getMapView(),
                    o = t.getMapAction();
                if (2 === i.get("renderMode")) return;
                n.addTilePane(this);
                var s = i.get("tileIndexArray");
                this.set("model", i), this.set("action", o), this.set("view", n), this.bindTo(["tileTransition", "instantTiling", "zoom", "tileSize", "padding"], i), this.bindTo(["tilePane", "zoomPane"], n), this.bindTo("tileszooming", o), this.bindTo(["startXIndex", "startYIndex", "startX_px", "startY_px"], s), this._tileIndexArray = s, this._listenSwap(n), this._initTiles(), e ? n.addPane(this._paneName, this.getElement()) : Nt.addElement(this.getElement(), this.get("tilePane"))
            }
        },
        setMapTypeRegistry: function(t) {
            this._mapTypes = t, this.bindTo("selectedMapType", t)
        },
        tileSize_changed: function() {},
        _initTiles: function() {
            this._pool.init(), this._listenTile(this._tileIndexArray), this._addAllTiles(this._tileIndexArray)
        },
        _listenTile: function(t) {
            this._unlistenTile(), this._relationArray = [Zt.addListener(t, "insert_at", Ot(this._addTileAt, this)), Zt.addListener(t, "remove_at", Ot(this._removeTileAt, this)), Zt.addListener(t, "resized", Ot(this._rearrangeTiles, this)), Zt.addListener(this.get("model"), "refresh", Ot(this.refresh, this))]
        },
        _listenSwap: function(t) {
            this._swapRelation = [Zt.addListener(t, "before_tilepane_swap", Ot(this._beforeTilePaneSwap, this)), Zt.addListener(t, "tilepane_swapped", Ot(this._onTilePaneSwapped, this))]
        },
        _unlistenTile: function() {
            Zt.removeListener(this._relationArray), this._relationArray = null
        },
        _unlistenSwap: function() {
            Zt.removeListener(this._swapRelation), Zt.removeListener(this._tsL), this._swapRelation = null, this._tsL = null
        },
        _getTile: function(t, e, i) {
            var o = this.get("selectedMapType"),
                s = null;
            if (!o) return null;
            var r = this.get("tileopacity");
            return s = o.getTile(t, e, i), s instanceof n.Tile || (s = new n.Tile(s, {
                tileIndex: {
                    xIndex: t,
                    yIndex: e
                },
                size: this.get("tileSize")
            })), s.setOpacity(r), s.getTileIndex() || s.setTileIndex({
                xIndex: t,
                yIndex: e
            }), s.addListener("loaded", Ot(this._onLoadTile, this)), s
        },
        _getTileOffset: function(t, e) {
            "number" != typeof t && "string" != typeof t && (e = t.y || t.yIndex || 0, t = t.x || t.xIndex || 0);
            var i = this.get("tileSize"),
                n = (t - this.get("startXIndex")) * i.width + this.get("startX_px"),
                o = (e - this.get("startYIndex")) * i.height + this.get("startY_px");
            return kt(n, o)
        },
        _addTileAt: function(t, e) {
            var i = e.xIndex,
                n = e.yIndex,
                o = this._getTile(i, n, this.get("zoom")),
                s = this._getTileOffset(i, n);
            this._pool.add(o), o.load({
                offset: s,
                pane: this.get("paneElement"),
                transition: this.get("tileTransition") && !this.get("instantTiling")
            })
        },
        _addAllTiles: function() {
            var t = this,
                e = t._tileIndexArray,
                i = e.getRotatedIndexes();
            t._pool.clearState(), n.forEach(i, function(i) {
                var n = e.getAt(i);
                t._addTileAt(i, n)
            })
        },
        _rearrangeTiles: function() {
            var t = this;
            this._pool.forEach(function(e) {
                var i = e.getTileIndex(),
                    n = t._getTileOffset(i);
                e.setOffset(n)
            })
        },
        _removeTileAt: function(t, e) {
            this._pool.remove(e)
        },
        _removeAllTiles: function() {
            this._pool.removeAll()
        },
        refresh: function(t) {
            t && this.set("instantTiling", !0);
            var e = this.get("selectedMapType");
            e && this._pool.reset(e, this.get("zoom"), {
                transition: !t
            })
        },
        _onLoadTile: function(t) {
            var e = t.getTileIndex();
            this._pool.markAt(e, !0), this._pool.getLoadedCount() === (this._tileIndexArray && this._tileIndexArray.getLength()) && Zt.trigger(this, "tilesloaded")
        },
        getMinZoom: function() {
            var t = this.get("selectedMapType");
            return t ? t.minZoom : 0
        },
        getMaxZoom: function() {
            var t = this.get("selectedMapType");
            return t ? t.maxZoom : 0
        },
        getElement: function() {
            return this.get("paneElement")
        },
        getSpareElement: function() {
            return this.get("spareElement") || null
        },
        selectedMapType_changed: function(t) {
            if (this.get("model")) {
                var e = this._mapTypes,
                    i = e.get(e.getPreviousTypeId()),
                    n = !i || !1,
                    o = i ? i.constructor : null;
                n || (n = o !== t.constructor, o === Object && (n = !0)), n ? (this._pool.clearState(), this._removeAllTiles(), this._addAllTiles()) : this.refresh(!0), this.get("zoomPane").style.display = "none"
            }
        },
        _swapPane: function() {
            var t, e = this.getSpareElement();
            e && (e.parentNode || this.get("tilePane").appendChild(e), t = this.get("paneElement"), e.innerHTML = "", this.set("paneElement", e), this.set("spareElement", t))
        },
        _beforeTilePaneSwap: function() {
            this._unlistenTile()
        },
        _onTilePaneSwapped: function() {
            var t = this,
                e = t._pool,
                i = t._options.overlayMap;
            i && (t._swapPane(), e.swap()), Zt.removeListener(t._tsL), t._tsL = Zt.once(t.get("action"), "zoomend", function() {
                i || e.removeAll(), t._initTiles(), t._tsL = null, delete t._tsL
            })
        },
        getSwapped: function() {
            return this._pool.getSwapped()
        },
        setOpacity: function(t) {
            var e = Math.min(Math.max(t, 0), 1) || (0 === t ? 0 : 1);
            this.set("tileopacity", e)
        },
        getOpacity: function() {
            var t = this.get("tileopacity");
            return t === e ? 1 : t
        },
        tileopacity_changed: function(t) {
            this._pool.forEach(function(e) {
                e.setOpacity(t)
            })
        },
        tileszooming_changed: function(t) {
            t && this.get("tileTransition") && !this.get("instantTiling") && this._pool.forEach(function(t) {
                t.cancelFadeIn()
            })
        }
    }), n.ZoomEffector = function(t, e) {
        var i = this;
        i.csszoom = It.browser.csszoom, i._topLeft = null, i._curTopLeft = null, i._origin = null, i._containerDiv = t.get("containerDiv"), i._zoomPane = t.get("zoomPane"), i._tilePane = t.get("tilePane"), i._panes = t.get("panes"), i._overlayPane = t.get("overlayPane"), i.listen(e), i.set("tileszooming", !1), i._working = !1, i._view = t
    }, At(n.ZoomEffector, n.KVO, {
        listen: function(t) {
            Zt.addListener(t, "tilesloaded", Ot(this._onTilesloaded, this)), Zt.addListener(t, "zoomstart", Ot(this._onZoomStart, this)), Zt.addListener(t, "zoomend", Ot(this._onZoomEnd, this)), this.bindTo("tileSize", t), this.bindTo("ef_overlay", t), this.bindTo("ef_overlaylayer", t), this.bindTo("ef_overlayimage", t), this.bindTo("ef_floatpane", t)
        },
        _onTilesloaded: function() {
            if (this._working) {
                this.clearPanePosition(), this._zoomPane.style.display = "none", this._tilePane.style.display = "", this._working = !1;
                var t = this.get("ef_overlay");
                t && this._showPane(t)
            }
        },
        _onZoomStart: function(t) {
            !1 === this.get("tileszooming") && (Nt.willChange(this._tilePane, "transform"), Nt.backfaceVisibility(this._tilePane, "hidden"), this._hidePane(this.get("ef_overlay")), this.set("tileszooming", !0)), this.start(t)
        },
        _onZoomEnd: function() {
            if (!1 !== this.get("tileszooming")) {
                this.set("tileszooming", !1), this.finish();
                var t = this.get("ef_overlay");
                t || this._showPane(t), Nt.backfaceVisibility(this._zoomPane, "visible"), Nt.willChange(this._zoomPane, "auto")
            }
        },
        _hidePane: function(t) {
            var e = this;
            n.forEach(this._panes, function(i, n) {
                t ? e.get("ef_" + n.toLowerCase()) || Nt.visible(i, !1) : Nt.visible(i, !1)
            })
        },
        _showPane: function(t) {
            var e = this;
            n.forEach(this._panes, function(i, n) {
                t ? e.get("ef_" + n.toLowerCase()) || Nt.visible(i, !0) : Nt.visible(i, !0)
            })
        },
        clearOverlayPanePosition: function() {
            if (this.get("ef_overlay")) {
                var t = this._overlayPane;
                Nt.transform(t, 1, 0, 0, {
                    x: 0,
                    y: 0
                }), Nt.setOffset(t, 0, 0)
            }
        },
        isZooming: function() {
            return this.get("tileszooming")
        },
        clearPanePosition: function() {
            var t = this._zoomPane,
                e = this._tilePane;
            Nt.transform(t, 1, 0, 0, {
                x: 0,
                y: 0
            }), Nt.transform(e, 1, 0, 0, {
                x: 0,
                y: 0
            }), Nt.setOffset(t, 0, 0), Nt.setOffset(e, 0, 0), this.clearOverlayPanePosition();
            var i = this._tiles;
            i && (n.forEach(i, function(t) {
                t.setOffset(t.offsetSnapShot)
            }), this._tiles.length = 0, this._tiles = []), Zt.trigger(this, "clearpaneposition")
        },
        _swap: function() {
            var t = this._view;
            t.swapTilePane(), this._tilePane = t.get("tilePane"), this._zoomPane = t.get("zoomPane"), this._zoomPane.style.display = "", this._tilePane.style.display = "none", this._working = !0
        },
        start: function(t) {
            this._topLeft = t.get("containerTopLeft_px"), this._origin = t.get("transformOrigin_px"), this._curTopLeft = this._topLeft.clone(), this._swap(), this.csszoom && this._prepareIEZoom(), this.bindTo("scale", t), this.bindTo("transformOrigin_px", t), this.bindTo("containerTopLeft_px", t)
        },
        _prepareIEZoom: function() {
            var t = [];
            this._view.getTilePanes().forEach(function(e) {
                var i = e.getSwapped();
                n.forEach(i, function(e) {
                    e.offsetSnapShot = e.getOffset().clone(), t.push(e)
                })
            }), this._tiles = t
        },
        scale_changed: function(t) {
            1 !== t && (this._curTopLeft = this._topLeft.clone(), this._curScale = t, this._scaleZoomPane(t))
        },
        _scaleZoomPane: function(t) {
            var e = this._zoomPane,
                i = this._overlayPane,
                o = this._origin.clone() || kt(0, 0);
            if (this.csszoom) {
                var s = this._tiles,
                    r = o.clone().mul(t, t).sub(o).mul(-1, -1),
                    a = this.get("tileSize").clone().mul(t, t).ceil();
                Nt.setOffset(e, r), n.forEach(s, function(e) {
                    var i = e.offsetSnapShot.clone().mul(t, t).ceil();
                    e.setSize(a), e.setOffset(i)
                })
            } else Nt.setScale(e, t, o, !0), this.get("ef_overlay") && Nt.setScale(i, t, o, !0);
            Zt.trigger(this, "scale", t)
        },
        transformOrigin_px_changed: function(t) {
            this._origin = t
        },
        containerTopLeft_px_changed: function(t) {
            this._topLeft = t
        },
        _teardown: function() {
            Nt.transform(this._containerDiv, 1, 0, 0, {
                x: 0,
                y: 0
            });
            var t = this._curTopLeft,
                e = this._zoomPane,
                i = this._overlayPane,
                n = this._curScale;
            Nt.isSupportedCSS3Style("transform") || (It.browser.msie || t.div(n, n), t.add(Nt.getRawOffset(e))), Nt.setOffset(e, t), this.get("ef_overlay") && Nt.setOffset(i, t), this._tilePane.style.display = ""
        },
        finish: function() {
            this.unbind(["scale", "transformOrigin_px", "containerTopLeft_px"]), this._teardown(), this._topLeft = null, this._origin = null, this._curTopLeft = null, this._curScale = 1
        },
        tileszooming_changed: function(t) {
            t && this.clearPanePosition()
        }
    });
    var Ft = function() {};
    Ft.prototype = {
            constructor: Ft,
            fromCoordToPoint: function(t) {
                var e, i;
                return t instanceof zt ? (e = t.lng(), i = t.lat()) : (e = t.x, i = t.y), kt(e, i)
            },
            fromPointToCoord: function(t) {
                var e = t.x,
                    i = t.y;
                return kt(e, i)
            }
        }, n.EmptyProjection = new Ft,
        function() {
            var t = n.Math.fromRadiansToDegrees,
                e = n.Math.fromDegreesToRadians,
                i = 1 / (4 * Math.PI),
                o = -1 / (2 * Math.PI),
                s = function() {};
            At(s, Ft, {
                name: "EPSG:3857",
                fromCoordToPoint: function(t) {
                    return this.fromLatLngToPoint(t)
                },
                fromLatLngToPoint: function(t) {
                    var n, o, s = t.y,
                        r = t.x;
                    return t instanceof zt && (s = t.lat(), r = t.lng()), n = r * (1 / 360) + .5, s >= 85.051128 ? o = 0 : s <= -85.051128 ? o = 1 : (o = Math.sin(e(s)), o = .5 - Math.log((1 + o) / (1 - o)) * i), kt(n, o)
                },
                fromPointToCoord: function(t) {
                    return this.fromPointToLatLng(t)
                },
                fromPointToLatLng: function(e) {
                    var i = e.x,
                        s = e.y;
                    return i = 360 * (i - .5), s = 2 * Math.atan(Math.exp((s - .5) / o)), s = t(s - Math.PI / 2), n.LatLng(parseFloat(s.toFixed(7)), parseFloat(i.toFixed(7)))
                },
                fromCoordToLatLng: function(t) {
                    return t.clone()
                },
                fromLatLngToCoord: function(t) {
                    return t.clone()
                },
                getDistance: function(t, e) {
                    var i = n.Math.radianPerDegree,
                        o = t.y,
                        s = e.y,
                        r = t.x,
                        a = e.x,
                        h = (s - o) * i,
                        l = (a - r) * i,
                        c = Math.sin(h / 2) * Math.sin(h / 2) + Math.cos(o * i) * Math.cos(s * i) * Math.sin(l / 2) * Math.sin(l / 2);
                    return 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c)) * 6378137
                },
                getDestinationCoord: function(t, e, i) {
                    return new zt(t.y, t.x).destinationPoint(e, i)
                }
            }), n.EPSG3857Projection = s, n.EPSG3857 = new s
        }(), n.MapSystemProjection = function(t) {
            this.bindTo(["projection", "zoom", "tileSize", "mapTypeMinZoom", "projectionTopLeft", "containerTopLeft", "repeatX"], t)
        }, At(n.MapSystemProjection, n.KVO, {
            factor: function(t) {
                var e = this.get("projection").minZoom || 0;
                return Math.pow(2, t - e)
            },
            scaleUp: function(t, e) {
                var i = this.factor(e);
                return t instanceof kt || t instanceof Bt ? t.mul(i, i) : t * i
            },
            scaleDown: function(t, e) {
                var i = this.factor(e);
                return t instanceof kt || t instanceof Bt ? t.div(i, i) : t / i
            },
            fromCoordToPoint: function(t) {
                var e = this.get("projection"),
                    i = this.get("tileSize"),
                    o = e.fromCoordToPoint(t);
                return e !== n.EmptyProjection && o.mul(i.width, i.height), this._interpolate(o)
            },
            fromPointToCoord: function(t) {
                var e = this.get("projection"),
                    i = this.get("tileSize"),
                    o = t.clone();
                return e !== n.EmptyProjection && o.div(i.width, i.height), e.fromPointToCoord(o)
            },
            fromCoordToOffset: function(t) {
                var e = this.fromCoordToPoint(t);
                return this.fromPointToOffset(e)
            },
            fromPointToOffset: function(t) {
                var e = (this.get("tileSize"), t.clone());
                return e.sub(this.get("projectionTopLeft")), this.scaleUp(e, this.get("zoom")), e.sub(this.get("containerTopLeft")), e
            },
            fromOffsetToCoord: function(t) {
                var e = this.fromOffsetToPoint(t);
                return this.fromPointToCoord(e)
            },
            fromOffsetToPoint: function(t) {
                var e = t.clone();
                return e.add(this.get("containerTopLeft")), this.scaleDown(e, this.get("zoom")), e.add(this.get("projectionTopLeft")), this._interpolate(e)
            },
            fromCoordToPixelPoint: function(t) {
                var e = this.get("zoom"),
                    i = this.fromCoordToPoint(t),
                    n = i.clone();
                return this.scaleUp(n, e), n
            },
            getDistance: function(t, e) {
                var i = this.get("projection");
                return i.getDistance ? i.getDistance(t, e) : 0
            },
            getDestinationCoord: function(t, e, i) {
                var n = this.get("projection");
                return n.getDestinationCoord ? n.getDestinationCoord(t, e, i) : null
            },
            getProjectionName: function() {
                return this.get("projection").name || "unknown"
            },
            _interpolate: function(t) {
                var e = t.clone(),
                    i = this.get("tileSize"),
                    n = i.width,
                    o = i.height;
                return this.get("repeatX") ? (e.x > n ? e.x = e.x % n : e.x < 0 && (e.x = n + e.x % n), e.y > o ? e.y = e.y % o : e.y < 0 && (e.y = o + e.y % o)) : (e.x = Math.min(Math.max(e.x, 0), n), e.y = Math.min(Math.max(e.y, 0), n)), e
            }
        }),
        function() {
            function t(t, e, i, n, o) {
                return t * o - e * Math.sin(2 * o) + i * Math.sin(4 * o) - n * Math.sin(6 * o)
            }

            function e(t) {
                return t < 0 ? -1 : 1
            }

            function i(t) {
                return Math.abs(t) < r ? t : t - e(t) * a
            }
            var o = n.Math.fromRadiansToDegrees,
                s = n.Math.fromDegreesToRadians,
                r = 3.141592653589793,
                a = 6.283185307179586,
                h = {
                    name: "UTMK",
                    datum: "GRS80",
                    lat0: 38,
                    lng0: 127.5,
                    a: 6378137,
                    b: 6356752.314140356,
                    falseNorthing: 2e6,
                    falseEasting: 1e6,
                    scaleFactor: .9996,
                    minX: 340901120,
                    maxX: 359494656,
                    minY: 141928960,
                    maxY: 157454848,
                    TILE_SIZE: 256,
                    BASE_X: 90112,
                    BASE_Y: 668608,
                    POINT_UNIT_PER_METER: 8192
                };
            h.lat0 = s(h.lat0), h.lng0 = s(h.lng0), h.a2 = h.a * h.a, h.b2 = h.b * h.b, h.es = (h.a2 - h.b2) / h.a2, h.e = Math.sqrt(h.es), h.ep2 = (h.a2 - h.b2) / h.b2, h.e0 = function(t) {
                return 1 - .25 * t * (1 + t / 16 * (3 + 1.25 * t))
            }(h.es), h.e1 = function(t) {
                return .375 * t * (1 + .25 * t * (1 + .46875 * t))
            }(h.es), h.e2 = function(t) {
                return .05859375 * t * t * (1 + .75 * t)
            }(h.es), h.e3 = function(t) {
                return t * t * t * (35 / 3072)
            }(h.es), h.ml0 = h.a * t(h.e0, h.e1, h.e2, h.e3, h.lat0);
            var l = function() {};
            At(l, Ft, {
                name: "UTMK",
                minZoom: -1,
                fromCoordToUTMK: function(t) {
                    return this.fromLatLngToUTMK(t)
                },
                fromLatLngToUTMK: function(t) {
                    return this._fromCoordToPlane("LATLNG_TO_UTMK", t)
                },
                fromUTMKToPoint: function(t) {
                    return this._fromCoordToPlane("UTMK_TO_POINT", t)
                },
                fromCoordToPoint: function(t) {
                    return this.fromLatLngToPoint(t)
                },
                fromLatLngToPoint: function(t) {
                    return this._fromCoordToPlane("LATLNG_TO_POINT", t)
                },
                fromPointToUTMK: function(t) {
                    return this._fromPlaneToCoord("POINT_TO_UTMK", t)
                },
                fromUTMKToCoord: function(t) {
                    return this.fromUTMKToLatLng(t)
                },
                fromUTMKToLatLng: function(t) {
                    return this._fromPlaneToCoord("UTMK_TO_LATLNG", t)
                },
                fromPointToCoord: function(t) {
                    return this.fromPointToLatLng(t)
                },
                fromPointToLatLng: function(t) {
                    return this._fromPlaneToCoord("POINT_TO_LATLNG", t)
                },
                fromLatLngToCoord: function(t) {
                    return t.clone()
                },
                fromCoordToLatLng: function(t) {
                    return t.clone()
                },
                pointPerMeter: h.POINT_UNIT_PER_METER,
                getDistance: function(t, e) {
                    var i = this.fromCoordToPoint(t),
                        o = this.fromCoordToPoint(e);
                    return n.Math.distance(i, o) * h.POINT_UNIT_PER_METER * h.TILE_SIZE
                },
                getDestinationCoord: function(t, e, i) {
                    var o = (e || 0) - 90,
                        s = this.fromCoordToPoint(t),
                        r = i / (h.POINT_UNIT_PER_METER * h.TILE_SIZE),
                        a = o * n.Math.radianPerDegree,
                        l = s.clone();
                    return l.add(r * Math.cos(a), r * Math.sin(a)), this.fromPointToCoord(l)
                },
                _fromCoordToPlane: function(e, n) {
                    var o, r;
                    if ("UTMK_TO_POINT" !== e) {
                        o = s(n.x), r = s(n.y);
                        var a = i(o - h.lng0),
                            l = Math.sin(r),
                            c = Math.cos(r),
                            u = c * a,
                            p = Math.pow(u, 2),
                            d = h.ep2 * Math.pow(c, 2),
                            f = Math.tan(r),
                            g = Math.pow(f, 2),
                            _ = 1 - h.es * Math.pow(l, 2),
                            m = h.a / Math.sqrt(_),
                            y = h.a * t(h.e0, h.e1, h.e2, h.e3, r);
                        o = h.scaleFactor * m * u * (1 + p / 6 * (1 - g + d + p / 20 * (5 - 18 * g + Math.pow(g, 2) + 72 * d - 58 * h.ep2))) + h.falseEasting, r = h.scaleFactor * (y - h.ml0 + m * f * (p * (.5 + p / 24 * (5 - g + 9 * d + 4 * Math.pow(d, 2) + p / 30 * (61 - 58 * g + Math.pow(g, 2) + 600 * d - 330 * h.ep2))))) + h.falseNorthing, o = parseFloat(o), r = parseFloat(r)
                    }
                    return "LATLNG_TO_UTMK" === e ? kt(parseFloat(o.toFixed(1)), parseFloat(r.toFixed(1))) : ("UTMK_TO_POINT" === e && (o = arguments[1].x, r = arguments[1].y), o = (o - h.BASE_X) / h.POINT_UNIT_PER_METER, r = 1.25 * h.TILE_SIZE - (r - h.BASE_Y) / h.POINT_UNIT_PER_METER, o /= h.TILE_SIZE, r /= h.TILE_SIZE, kt(o, r))
                },
                _fromPlaneToCoord: function(t, s) {
                    var r, a;
                    if ("UTMK_TO_LATLNG" !== t ? (r = s.x * h.TILE_SIZE, a = s.y * h.TILE_SIZE) : (r = s.x, a = s.y), "UTMK_TO_LATLNG" !== t && (r = r * h.POINT_UNIT_PER_METER + h.BASE_X, a = (1.25 * h.TILE_SIZE - a) * h.POINT_UNIT_PER_METER + h.BASE_Y), "POINT_TO_UTMK" === t) return kt(parseFloat(r.toFixed(1)), parseFloat(a.toFixed(1)));
                    "UTMK_TO_LATLNG" === t && (r = r, a = a);
                    var l, c, u, p;
                    for (r -= h.falseEasting, a -= h.falseNorthing, l = (h.ml0 + a / h.scaleFactor) / h.a, c = l, p = 0; u = (l + h.e1 * Math.sin(2 * c) - h.e2 * Math.sin(4 * c) + h.e3 * Math.sin(6 * c)) / h.e0 - c, c += u, !(Math.abs(u) <= 1e-10); p++)
                        if (p >= 6) return !1;
                    if (Math.abs(c) < 1.5707963267948966) {
                        var d = Math.sin(c),
                            f = Math.cos(c),
                            g = Math.tan(c),
                            _ = h.ep2 * Math.pow(f, 2),
                            m = Math.pow(_, 2),
                            y = Math.pow(g, 2),
                            v = Math.pow(y, 2);
                        l = 1 - h.es * Math.pow(d, 2);
                        var T = h.a / Math.sqrt(l),
                            x = T * (1 - h.es) / l,
                            b = r / (T * h.scaleFactor),
                            M = Math.pow(b, 2);
                        r = i(h.lng0 + b * (1 - M / 6 * (1 + 2 * y + _ - M / 20 * (5 - 2 * _ + 28 * y - 3 * m + 8 * h.ep2 + 24 * v))) / f), a = c - T * g * M / x * (.5 - M / 24 * (5 + 3 * y + 10 * _ - 4 * m - 9 * h.ep2 - M / 30 * (61 + 90 * y + 298 * _ + 45 * v - 252 * h.ep2 - 3 * m)))
                    } else r = h.lng0, a = 1.5707963267948966 * e(a);
                    return r = o(r), a = o(a), r = parseFloat(r.toFixed(7)), a = parseFloat(a.toFixed(7)), n.LatLng(a, r)
                }
            }), n.UTMKProjection = l, n.UTMK = new l
        }(),
        function() {
            var t = function() {};
            At(t, n.UTMKProjection, {
                name: "UTMK_NAVER",
                fromCoordToNaver: function(t) {
                    return this.fromLatLngToNaver(t)
                },
                fromLatLngToNaver: function(t) {
                    var e = this._fromCoordToPlane("LATLNG_TO_UTMK", t);
                    return this.fromUTMKToNaver(e)
                },
                fromUTMKToNaver: function(t) {
                    var e = parseInt(10 * t.x + 34e7, 10),
                        i = parseInt(10 * t.y + 13e7, 10);
                    return kt(e, i)
                },
                fromNaverToPoint: function(t) {
                    var e = this.fromNaverToUTMK(t);
                    return this.fromUTMKToPoint(e)
                },
                fromPointToNaver: function(t) {
                    var e = this.fromPointToUTMK(t);
                    return this.fromUTMKToNaver(e)
                },
                fromNaverToUTMK: function(t) {
                    var e = parseFloat((t.x - 34e7) / 10),
                        i = parseFloat((t.y - 13e7) / 10);
                    return kt(e, i)
                },
                fromNaverToCoord: function(t) {
                    return this.fromNaverToLatLng(t)
                },
                fromNaverToLatLng: function(t) {
                    var e = this.fromNaverToUTMK(t);
                    return this.fromUTMKToCoord(e)
                }
            }), n.UTMK_NAVERProjection = t, n.UTMK_NAVER = new t
        }(), n.MapTypeRegistry = function(t, i) {
            this._typeIds = [], this._typeId = null, this._prevId = null, this.setValues(t), i !== e && this.setSelectedTypeId(i)
        }, At(n.MapTypeRegistry, n.KVO, {
            set: function(t, e) {
                if ("selectedPaneType" !== t && "selectedMapType" !== t) {
                    var i = this.get(t),
                        o = n.getIndexOfElement(this._typeIds, t);
                    n.KVO.prototype.set.apply(this, arguments), o > -1 && this._typeIds.splice(o, 1), null !== e ? (this._typeIds.push(t), Zt.trigger(this, "add_paneType", t, e), Zt.trigger(this, "addMapType", t, e)) : i && (Zt.trigger(this, "remove_paneType", t, i), Zt.trigger(this, "removeMapType", t, i))
                }
            },
            setSelectedTypeId: function(t) {
                this._prevId = this._typeId, this._typeId = t, n.KVO.prototype.set.apply(this, ["selectedMapType", this.get(t)]),
                    n.KVO.prototype.set.apply(this, ["selectedPaneType", this.get(t)])
            },
            getSelectedTypeId: function() {
                return this._typeId
            },
            getPreviousTypeId: function() {
                return this._prevId
            },
            getSelectedType: function() {
                return this.get("selectedMapType")
            },
            getTypeIds: function() {
                return this._typeIds.slice(0)
            }
        }), n.Tile = function(t, e) {
            var i = Ct({
                opacity: 1,
                transition: !0,
                zIndex: 0
            }, e || {});
            this._prepareDOM(), t && this._el.appendChild(t), this.setValues(i)
        }, At(n.Tile, n.KVO, {
            _prepareDOM: function() {
                var t = Nt.createElement("div", X + K + W);
                t.setAttribute("draggable", !1), t.setAttribute("unselectable", "on"), !It.mobile && It.browser.safari && (t.style.pointerEvents = "none"), It.usingGPU && It.restrictiveGPU && Nt.addElement(Nt.createDummyForRestrictiveGPU(), t), Nt.forceGPU(t), this._el = t
            },
            appendTo: function(t) {
                this._el.parentNode !== t && Nt.addElement(this._el, t)
            },
            getElement: function() {
                return this._el
            },
            getElements: function() {
                return [this._el]
            },
            show: function() {
                this._el && (this._el.style.display = "")
            },
            hide: function() {
                this._el && (this._el.style.display = "none")
            },
            fadeIn: function() {
                var t = Nt.css3Styles.transition ? 300 : 600;
                return function(e, i) {
                    var n = this._el,
                        o = this.getOpacity();
                    Nt.setOpacity(n, i || 0), Nt.animate(n, {
                        opacity: o
                    }, {
                        duration: t,
                        easing: "easeOutCubic",
                        complete: function() {
                            e && e()
                        }
                    })
                }
            }(),
            cancelFadeIn: function() {
                Nt.stop(this._el, {
                    opacity: this.getOpacity()
                })
            },
            load: function(t) {
                var e = Ct({}, t);
                this.getOffset() || e.offset || (e.offset = kt(0, 0)), this.setValues(e), this.show(), this.get("transition") ? this.fadeIn(Ot(this._triggerLoaded, this)) : this._triggerLoaded()
            },
            reset: function(t, e, i) {
                t instanceof n.AbstractMapType && !(arguments.length < 2) && this.load(i)
            },
            setBlank: function() {
                this.hide()
            },
            remove: function() {
                Nt.removeElement(this._el)
            },
            destroy: function() {
                this.remove(), this._el = null
            },
            setOffset: function(t, e) {
                var i = t instanceof kt ? t.clone() : kt(t, e);
                i !== this.getOffset() && this.set("offset", i)
            },
            getOffset: function() {
                return this.get("offset")
            },
            setOpacity: function(t) {
                t !== this.getOpacity() && this.set("opacity", t)
            },
            getOpacity: function() {
                return this.get("opacity")
            },
            setZIndex: function(t) {
                t !== this.getZIndex() && this.set("zIndex", t)
            },
            getZIndex: function() {
                return this.get("zIndex")
            },
            setSize: function(t) {
                this.getSize();
                this.set("size", t)
            },
            getSize: function() {
                return this.get("size")
            },
            setTileIndex: function(t) {
                var e = t.xIndex,
                    i = t.yIndex;
                "x" in t && (e = t.x, i = t.y), this.set("tileIndex", {
                    xIndex: e || 0,
                    yIndex: i || 0
                })
            },
            disable: function() {
                this._triggerLoaded = Lt
            },
            getTileIndex: function() {
                return this.get("tileIndex") || null
            },
            _triggerLoaded: function() {
                Zt.trigger(this, "loaded", this)
            },
            offset_changed: function(t) {
                Nt.setOffset(this._el, t)
            },
            opacity_changed: function(t) {
                Nt.setOpacity(this._el, t)
            },
            zIndex_changed: function(t) {
                this._el.style.zIndex = t
            },
            size_changed: function(t) {
                Nt.setSize(this._el, t)
            },
            pane_changed: function(t) {
                this.appendTo(t)
            }
        }), n.ImageTile = function(t) {
            var e = Ct({
                urls: "",
                opacity: 1,
                zIndex: 0,
                imgonload: null,
                imgonerror: null
            }, t);
            this._imgs = [], n.Tile.apply(this, [null, e])
        }, At(n.ImageTile, n.Tile, {
            _prepareImage: function() {
                var t = this.getUrls(),
                    e = this._imgs.length,
                    i = t.length - e,
                    n = this.getElement(),
                    o = 0,
                    s = null,
                    r = null;
                if (i > 0)
                    for (o = 0; o < i; o++) s = new Nt.Image({
                        contextmenu: null,
                        disableSelection: !0,
                        position: "absolute",
                        opacity: 1,
                        alt: ""
                    }), r = s.getElement(), Nt.setOffset(r, 0, 0), Nt.setZIndex(r, e + o), n.appendChild(r), this._imgs.push(s);
                else if (i < 0)
                    for (i = Math.abs(i), o = 0; o < i; o++) s = this._imgs.pop(), n.removeChild(s.getElement()), s = null
            },
            forEachImages: function(t) {
                return n.forEach(this._imgs, t)
            },
            getElements: function() {
                return [this._el].concat(this.getImageElements())
            },
            setUrls: function(t) {
                return this.set("urls", t), this
            },
            getUrls: function() {
                return this.get("urls")
            },
            load: function(t) {
                var e = Ct({}, t);
                this.getOffset() || e.offset || (e.offset = kt(0, 0)), this.setValues(e), this.get("transition") && this.hide(), this.loadImage(e.urls || this.get("urls"))
            },
            reset: function(t, e, i) {
                if (t instanceof n.AbstractMapType && !(arguments.length < 2)) {
                    var o = this,
                        s = t.getImageOptions() || {},
                        r = Ct({
                            size: t.tileSize,
                            imgonload: s.onload || null,
                            imgonerror: s.onerror || null
                        }, i);
                    n.forEach(r, function(t, e) {
                        o.set(e, t, !0)
                    });
                    var a = this.getTileIndex(),
                        h = t.getTileUrls(a.xIndex, a.yIndex, e);
                    this.setUrls(h), this.load(r)
                }
            },
            loadImage: function(t) {
                var e = t;
                if (!e) return this.setBlank(), void this._triggerLoaded();
                n.isString(e) && (e = [e]);
                var i = this,
                    o = e.length,
                    s = function() {
                        if (i.show(), i.get("transition")) i.fadeIn(function() {
                            --o > 0 || i._triggerLoaded()
                        });
                        else {
                            if (--o > 0) return;
                            i._triggerLoaded()
                        }
                    };
                this.forEachImages(function(t, i) {
                    var n = t.getElement(),
                        o = n.src + "",
                        r = e[i];
                    o || (n.src = F, o = F), r === o ? s() : t._setUrl(n, r, s, s)
                })
            },
            setBlank: function() {
                this.forEachImages(function(t) {
                    var e = t.getElement();
                    e.onload = null, e.onerror = null, e.src = F
                })
            },
            disable: function() {
                this.forEachImages(function(t) {
                    var e = t.getElement();
                    e.onload = null, e.onerror = null
                }), n.Tile.prototype.disable.apply(this)
            },
            remove: function() {
                this.setBlank(), n.Tile.prototype.remove.apply(this)
            },
            destroy: function() {
                n.Tile.prototype.destroy.apply(this), this._imgs.length = 0, this._imgs = null
            },
            getImageElements: function() {
                var t = [];
                return this.forEachImages(function(e) {
                    t.push(e.getElement())
                }), t
            },
            urls_changed: function(t) {
                this._imgs.length !== t.length && this._prepareImage()
            },
            size_changed: function(t) {
                this.forEachImages(function(e) {
                    e.setSize(t)
                }), Nt.setSize(this._el, t)
            },
            imgonload_changed: function(t) {
                this.forEachImages(function(e) {
                    e.setHandler({
                        onload: t
                    })
                })
            },
            imgonerror_changed: function(t) {
                this.forEachImages(function(e) {
                    e.setHandler({
                        onerror: t
                    })
                })
            }
        }), n.CanvasTile = function(t) {
            var e = Ct({
                opacity: 1
            }, t);
            this._prepareDOM(e), n.Tile.apply(this, [null, e])
        }, At(n.CanvasTile, n.Tile, {
            _prepareDOM: function() {
                n.Tile.prototype._prepareDOM.apply(this);
                var t = Nt.createElement("canvas"),
                    e = t.getContext("2d");
                this._canvas = t, this._ctx = e, this._el.appendChild(t)
            },
            getElements: function() {
                return [this._el, this._canvas]
            },
            reset: function(t, e, i) {
                if (t instanceof n.AbstractMapType && !(arguments.length < 2)) {
                    var o = this,
                        s = Ct({
                            size: t.tileSize
                        }, i);
                    n.forEach(s, function(t, e) {
                        o.set(e, t, !0)
                    });
                    var r = this.getTileIndex(),
                        a = t.getTileData(r.xIndex, r.yIndex, e);
                    this.set("imageData", a), this.load(s)
                }
            },
            setBlank: function() {
                var t = this._ctx;
                if (t) {
                    var e = this.getSize();
                    t.clearRect(0, 0, e.width, e.height)
                }
            },
            remove: function() {
                this.setBlank(), n.Tile.prototype.remove.apply(this)
            },
            destroy: function() {
                n.Tile.prototype.destroy.apply(this), this._ctx = null, this._canvas = null
            },
            size_changed: function(t) {
                if (t) {
                    var e = this._canvas;
                    e.width = t.width, e.height = t.height, Nt.setSize(e, t), Nt.setSize(this._el, t)
                }
            },
            imageData_changed: function(t) {
                t && (this.setBlank(), this._ctx.putImageData(t, 0, 0))
            }
        }), n.TilePool = function() {
            this._tiles = {}, this._loadState = {}, this._swapped = []
        }, At(n.TilePool, n.KVO, {
            init: function() {
                this._tiles = {}, this._loadState = {}
            },
            add: function(t, e) {
                var i = e || t.getTileIndex(),
                    n = this.fromIndexToKey(i);
                this._loadState[n] = !1, this._tiles[n] = t
            },
            remove: function(t) {
                var e, i;
                t instanceof n.Tile ? (e = t, i = this.fromIndexToKey(e.getTileIndex())) : (i = this.fromIndexToKey(t), e = this._tiles[i]), e && (e.destroy(), e = null, this._loadState[i] = null, delete this._loadState[i], this._tiles[i] = null, delete this._tiles[i])
            },
            removeAll: function() {
                var t = this;
                n.forEach(this._tiles, function(e) {
                    t.remove(e)
                }), t.init()
            },
            getAt: function(t) {
                var e = this.fromIndexToKey(t);
                return this._tiles[e]
            },
            getLength: function() {
                var t = 0;
                return n.forEach(this._tiles, function() {
                    t++
                }), t
            },
            clearState: function() {
                this._loadState = {}
            },
            markAt: function(t, i) {
                i === e && (i = !0), this._loadState[this.fromIndexToKey(t)] = i
            },
            getLoadedCount: function() {
                var t = 0;
                return n.forEach(this._loadState, function(e) {
                    e && t++
                }), t
            },
            swap: function() {
                var t = this._swapped;
                n.forEach(t, function(t) {
                    t.destroy(), t = null
                }), t.length = 0, t = [], n.forEach(this._tiles, function(e) {
                    e.disable(), t.push(e), Nt.clearGPU(e.getElement())
                }), this._tiles = {}, this._swapped = t
            },
            getSwapped: function() {
                return this._swapped
            },
            reload: function(t) {
                this.clearState(), this.forEach(function(e) {
                    e.reload(t)
                })
            },
            reset: function(t, e, i) {
                this.clearState(), this.forEach(function(n) {
                    n.reset(t, e, i)
                })
            },
            forEach: function(t) {
                n.forEach(this._tiles, t)
            },
            fromIndexToKey: function(t) {
                return "tile_" + t.xIndex + "x" + t.yIndex
            }
        }), n.AbstractMapType = function(t) {
            this.setMapTypeOptions(t)
        }, n.AbstractMapType.prototype = {
            constructor: n.AbstractMapType,
            setMapTypeOptions: function(t) {
                var i = this,
                    o = t.tileSize || Bt(256, 256);
                o = n.isNumber(o) ? Bt(o, o) : n.box(o, Bt), i.tileSize = o, i.minZoom = (n.isDefined(t.minZoom) ? t.minZoom : t.maxZoom) || 0, i.maxZoom = t.maxZoom || 0, i.name = t.name || "unknown", i.projection = t.projection || n.EmptyProjection, i.repeatX = t.repeatX || !1, i.provider = t.provider || e, i.vendor = t.vendor || e, i.darktheme = t.darktheme || !1, i.uid = t.uid, i.uid || (H++, i.uid = "unknown:unknown-" + H), i._options = t
            },
            getMapTypeOptions: function() {
                return this._options
            },
            _getTileCount: function(t) {
                return Math.pow(2, t - (this.projection.minZoom || 0))
            },
            getMinZoom: function() {
                return this.minZoom
            },
            getMaxZoom: function() {
                return this.maxZoom
            },
            getName: function() {
                return this.name
            }
        }, n.ImageMapType = function(t) {
            n.AbstractMapType.apply(this, arguments)
        }, At(n.ImageMapType, n.AbstractMapType, {
            setMapTypeOptions: function(t) {
                if ("function" != typeof t.getTileUrl && !t.tileSet) throw new Error("'getTileUrl' or 'tileSet' options is required.");
                n.AbstractMapType.prototype.setMapTypeOptions.apply(this, arguments);
                var e = this;
                t.tileSet ? e.tileSet = n.isString(t.tileSet) ? [t.tileSet] : t.tileSet : (n.isArray(e.tileSet) && (e.tileSet.length = 0), e.tileSet = []), e._imgOptions = e._getImageOptions()
            },
            getTileUrls: function(t, e, i) {
                var o, s = this._getTileCount(i),
                    r = this._options;
                return this.repeatX && (t %= s) < 0 && (t += s), !this.repeatX && (t < 0 || t >= s) || e < 0 || e >= s ? o = r.TRANSPARENT_URL || F : r.getTileUrl ? o = r.getTileUrl(t, e, i) : r.tileSet && (o = this._getUrlFromTileSet({
                    x: t,
                    y: e,
                    z: i
                })), null === o ? [] : n.isString(o) ? [o] : o
            },
            getTile: function(t, e, i) {
                var o = this.getImageOptions() || {};
                return new n.ImageTile({
                    tileIndex: {
                        xIndex: t,
                        yIndex: e
                    },
                    urls: this.getTileUrls(t, e, i),
                    size: this.tileSize,
                    imgonload: o.onload || null,
                    imgonerror: o.onerror || null
                })
            },
            _getUrlFromTileSet: function(t) {
                var e = this.tileSet || [],
                    i = this.getMapTypeOptions(),
                    o = e.length || 0,
                    s = 0,
                    r = [];
                if (e.length) {
                    s = parseInt((t.x + t.y) % o, 10);
                    var a = e[s];
                    if (n.isArray(a)) n.forEach(a, function(e) {
                        r.push(Ut(e, t, i))
                    });
                    else {
                        var h = a;
                        r.push(Ut(h, t, i))
                    }
                } else r.push(this._options.TRANSPARENT_URL || F);
                return r
            },
            getImageOptions: function() {
                return this._imgOptions
            },
            _getImageOptions: function() {
                var t = this._options;
                return {
                    tileSize: this.tileSize,
                    onload: function(e) {
                        t && t.onload && t.onload(e)
                    },
                    onerror: function(e) {
                        t && t.onerror && t.onerror(e)
                    },
                    position: t.position || "absolute",
                    disableSelection: !0,
                    alt: ""
                }
            }
        });
    var Ut = function(t, e, i) {
        return t.replace(/\{(-?)(\w+)\}/g, function(t, n, o) {
            return ("x" === o || "y" === o || "z" === o) && o in e ? "-" === n ? "z" === o ? i.maxZoom - e[o] : Math.pow(2, e.z - i.minZoom) - 1 - e[o] : e[o] : o in i ? i[o] : t
        })
    };
    n.CanvasMapType = function(t) {
        n.AbstractMapType.apply(this, arguments)
    }, At(n.CanvasMapType, n.AbstractMapType, {
        setMapTypeOptions: function(t) {
            if ("function" != typeof t.getTileData) throw new Error("'getTileData' option is required.");
            n.AbstractMapType.prototype.setMapTypeOptions.apply(this, arguments)
        },
        getTileData: function(t, e, i) {
            var n, o = this._getTileCount(i),
                s = this._options;
            return this.repeatX && (t %= o) < 0 && (t += o), !this.repeatX && (t < 0 || t >= o) || e < 0 || e >= o ? n = null : s.getTileData && (n = s.getTileData(t, e, i)), n
        },
        getTile: function(t, e, i) {
            var o = this.getTileData(t, e, i);
            return new n.CanvasTile({
                tileIndex: {
                    xIndex: t,
                    yIndex: e
                },
                size: this.tileSize,
                imageData: o
            })
        }
    });
    var jt = ["enus", "zhcn", "jajp"],
        Xt = function(t) {
            var e = this;
            n.forEach(t, function(t, i) {
                e[i] = t
            }), e.vendor = "\xa9 NAVER Corp.", e._langSuffix = e._getLanguageSuffix(), e.uid || (H++, e.uid = "naver:unknown-" + H)
        };
    Xt.prototype = {
            constructor: Xt,
            name: "",
            version: v.onetile,
            tileSize: new n.Size(256, 256),
            minZoom: -1,
            maxZoom: 14,
            projection: n.UTMK_NAVER,
            serverCount: 4,
            timeStamp: "0",
            imgFormat: 0,
            hd: B > 1,
            prefix: "",
            postfix: "",
            overview: !0,
            darktheme: !1,
            language: "ko-KR",
            _getLanguageSuffix: function() {
                var t = (this.language || "").toLowerCase().replace("-", "") || "kokr";
                return "kokr" === t || -1 === n.getIndexOfElement(jt, t) ? "" : "_" + t
            },
            getTileUrl: function(t, e, i) {
                if (!this.overview && i < 1) return F;
                var o, s;
                i < 1 ? (o = Math.pow(2, i + 1) - 1, s = o) : (o = 3 * Math.pow(2, i - 1), s = o - 1), e = Math.pow(2, i + 1) - 1 - e;
                var r = this.version,
                    a = this.timeStamp,
                    h = this.imgFormat,
                    l = this.overlayType,
                    c = 0,
                    u = 0;
                if (n.isArray(h) || (h = [h]), n.isArray(l) || (l = [l]), h.length < l.length)
                    for (c = h.length, u = l.length; c < u; c++) h[c] = h[0];
                if (t >= 0 && t <= o && e >= 0 && e <= s) {
                    var p = [];
                    for (c = 0, u = l.length; c < u; c++) p.push(this.toTileUrl(t, e, i, r, a, h[c], l[c]));
                    return p
                }
                return F
            },
            _xyToServerNum: function(t, e) {
                return this.serverCount <= 1 ? "" : parseInt((t + e) % this.serverCount + 1, 10)
            },
            toTileUrl: function(t, e, i, n, o, s, r) {
                return r && r.indexOf("_an") === r.length - 3 && (r += this._langSuffix), [this._getLocation(t, e), this.hd ? "hd" : "get", n, o, s, i, t, e, r].join("/") + this.postfix
            },
            _getLocation: function() {
                return z ? function() {
                    return this._ssl_proxy ? this._ssl_proxy + this.prefix + "onetile" : "https://simg.pstatic.net/onetile"
                } : function(t, e) {
                    return "http://" + this.prefix + "onetile" + this._xyToServerNum(t, e) + ".map.naver.net"
                }
            }(),
            onerror: function(t) {
                var e = t.src;
                if (e) {
                    var i = e.split("://"),
                        n = i[0],
                        o = i[1].split(".");
                    0 === o[0].indexOf("onetile") ? (o[0] = "nc.onetile", t.src = n + "://" + o.join(".")) : t.src = F
                } else t.src = F
            }
        },
        function() {
            var t = function() {
                    for (var t = [], i = 0, o = arguments.length; i < o; i++) t[i] = arguments[i];
                    var s;
                    return t.unshift({
                        imgFormat: "0"
                    }), s = Ct.apply(null, t), s && (s.provider = e[s.uid.split(":")[1]]), new n.ImageMapType(new Xt(s))
                },
                e = {
                    world: [{
                        title: " OpenStreetMap",
                        link: "http://www.openstreetmap.org/copyright"
                    }, {
                        title: " Natural Earth",
                        link: "http://www.naturalearthdata.com/"
                    }],
                    normal: [{
                        title: " /OpenStreetMap",
                        bounds: Rt(zt(37.659996, 124.019911), zt(42.99527, 130.51321)),
                        link: "http://www.openstreetmap.org/copyright"
                    }],
                    satellite: [{
                        title: " /OpenStreetMap",
                        bounds: Rt(zt(37.659996, 124.019911), zt(42.99527, 130.51321)),
                        link: "http://www.openstreetmap.org/copyright"
                    }, {
                        title: " /SPOT"
                    }, {
                        title: " /\uc778\ucc9c\uad11\uc5ed\uc2dc",
                        bounds: Rt(zt(36.915887, 125.690716), zt(37.687529, 126.853252))
                    }, {
                        title: " /\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0",
                        bounds: [Rt(zt(36.9604682, 126.7654746), zt(38.1834428, 127.8062689)), Rt(zt(33.1940984, 126.1631646), zt(33.5666617, 126.9448023)), Rt(zt(34.2894075, 126.1667903), zt(36.157058, 127.916409)), Rt(zt(37.0338716, 127.1017059), zt(38.6097027, 129.4009515)), Rt(zt(34.7636795, 127.5739401), zt(37.1422076, 129.6170151)), Rt(zt(37.2844933, 130.6524052), zt(37.6950155, 131.0788897)), Rt(zt(35.9625217, 125.5567761), zt(37.2537581, 128.6557701))]
                    }],
                    traffic: [{
                        title: " /\uad6d\ud1a0\uad50\ud1b5\ubd80"
                    }, {
                        title: " /\uacbd\ucc30\uccad(UTIS)"
                    }],
                    cadastral: [{
                        title: " /\ub2e4\uc6b8\uc9c0\uc624\uc778\ud3ec"
                    }]
                };
            Ct(Xt, {
                getMapTypes: function(t) {
                    var e = new n.MapTypeRegistry({
                        normal: Xt.getNormalMap(t),
                        terrain: Xt.getTerrainMap(t),
                        satellite: Xt.getSatelliteMap(t),
                        hybrid: Xt.getHybridMap(t)
                    });
                    return e.VENDOR = "\xa9 NAVER Corp.", e.uid = "naver:imagemap:default", e
                },
                getWorldMap: function(e) {
                    return t({
                        uid: "naver:world",
                        name: "\uc77c\ubc18",
                        minZoom: 0,
                        maxZoom: 7,
                        projection: n.EPSG3857,
                        tileSize: new n.Size(256, 256),
                        overlayType: "g_bl_vc_bg/g_ol_vc_rd/g_ol_vc_an",
                        repeatX: !0,
                        getTileUrl: function(t, e, i) {
                            var n = Math.pow(2, i);
                            return e >= 0 && e < n ? (e = n - 1 - e, this.toTileUrl(t, e, i, this.version, this.timeStamp, this.imgFormat, this.overlayType)) : F
                        }
                    }, e)
                },
                getVectorMap: function(e) {
                    return t({
                        uid: "naver:normal:bg",
                        name: "\uc77c\ubc18",
                        overlayType: "bl_vc_bg"
                    }, e)
                },
                getNormalMap: function(e) {
                    return t({
                        uid: "naver:normal",
                        name: "\uc77c\ubc18",
                        overlayType: "bl_vc_bg/ol_vc_an"
                    }, e)
                },
                getTerrainMap: function(e) {
                    return t({
                        uid: "naver:normal:terrain",
                        name: "\uc9c0\ud615\ub3c4",
                        overlayType: "bl_tn_bg/ol_vc_bg/ol_vc_an"
                    }, e)
                },
                getSatelliteMap: function(e) {
                    return t({
                        uid: "naver:satellite",
                        name: "\uc704\uc131",
                        imgFormat: "1",
                        overlayType: "bl_st_bg",
                        darktheme: !0
                    }, e)
                },
                getHybridMap: function(e) {
                    return t({
                        uid: "naver:satellite:hybrid",
                        name: "\uacb9\uccd0\ubcf4\uae30",
                        overlayType: ["bl_st_bg", "empty/ol_st_rd/ol_st_an"],
                        imgFormat: [1, 0],
                        darktheme: !0
                    }, e)
                },
                getBlankMap: function(e) {
                    return t({
                        uid: "naver:blank",
                        name: "\ud22c\uba85",
                        getTileUrl: function() {
                            return F
                        }
                    }, e)
                },
                getLiteMap: function(e) {
                    return t({
                        uid: "naver:normal:lite",
                        name: "Lite",
                        overlayType: "bl_cs_bg/ol_cs_an",
                        minZoom: 1,
                        maxZoom: 9,
                        repeatX: !1
                    }, e)
                },
                getNormalLabelLayer: function(e) {
                    return t({
                        uid: "naver:normal:label",
                        name: "\uc8fc\uae30",
                        overlayType: "empty/ol_vc_an"
                    }, e)
                },
                getSatelliteLabelLayer: function(e) {
                    return t({
                        uid: "naver:satellite:label",
                        name: "\uc8fc\uae30",
                        overlayType: "empty/ol_st_an"
                    }, e)
                },
                getTrafficLayer: function(e) {
                    return t({
                        uid: "naver:traffic",
                        name: "\uad50\ud1b5",
                        overlayType: "empty/ol_tr_rt/ol_vc_an",
                        overview: !1
                    }, e)
                },
                getBicycleLayer: function(e) {
                    return t({
                        uid: "naver:bicycle",
                        name: "\uc790\uc804\uac70",
                        overlayType: "empty/ol_bc_hb/ol_vc_an",
                        overview: !1
                    }, e)
                },
                getTrafficBicycleLayer: function(e) {
                    return t({
                        uid: "naver:trafficbicycle",
                        name: "\uad50\ud1b5/\uc790\uc804\uac70",
                        overlayType: "empty/ol_bc_hb/ol_tr_rt/ol_vc_an",
                        overview: !1
                    }, e)
                },
                getCadastralLayer: function(e) {
                    return t({
                        uid: "naver:cadastral",
                        name: "\uc9c0\uc801\ub3c4",
                        overlayType: "empty/ol_lp_cn",
                        overview: !1
                    }, e)
                },
                getStreetLayer: function(e) {
                    return t({
                        uid: "naver:street",
                        name: "\uac70\ub9ac\ubdf0",
                        overlayType: "empty/ol_pn_rd",
                        overview: !1,
                        postfix: "?dv=" + v.dv
                    }, e)
                }
            })
        }(), n.NaverImagePaneTypeOption = Xt;
    var Yt = function(t) {
        var e = this;
        n.forEach(t, function(t, i) {
            e[i] = t
        }), e.vendor = "\xa9 NAVER Corp.", e.uid || (H++, e.uid = "naver:unknown-" + H)
    };
    Yt.prototype = {
            constructor: Yt,
            name: "",
            version: "",
            tileSize: new n.Size(256, 256),
            minZoom: 0,
            maxZoom: 21,
            projection: n.EPSG3857,
            hd: pt,
            prefix: "",
            postfix: "",
            overview: !0,
            overlayType: "",
            darktheme: !1,
            blankMap: !1,
            getTileUrl: function(t, e, i) {
                var o = this.map;
                if (!this.overview && i < 1 || this.blankMap || !o) return F;
                var s = o.mapTypes,
                    r = s && s.getSelectedType() || null,
                    a = r.getMapTypeOptions().mapType || "",
                    h = this.versions[a] || null;
                if (!h) return n.console.log(Et.TRY_AGAIN_LAYER.slice(), St.DEFAULT_TWO_LINE.slice()), F;
                if (!r) return F;
                var l = this._getFormat(this.imgFormat),
                    c = this._getScaleFactor(),
                    u = this.overlayType,
                    p = this.query,
                    d = 0,
                    f = 0;
                if (n.isArray(l) || (l = [l]), n.isArray(u) || (u = [u]), l.length < u.length)
                    for (d = l.length, f = u.length; d < f; d++) l[d] = l[0];
                var g = [];
                for (d = 0, f = u.length; d < f; d++) g.push(this.toTileUrl(t, e, i, a, h, l[d], c, u[d], p));
                return g
            },
            toTileUrl: function(t, e, i, n, o, s, r, a, h) {
                return "minimap" === n ? [this._getLocationInHouse(t, e), n, i, t, e].join("/") + r + "." + s + this._getOverlayType(a) + this._getQuery(h) : [this._getLocation(t, e), n, o, i, t, e].join("/") + r + "." + s + this._getOverlayType(a)
            },
            _getLocation: function() {
                return z ? "https://nrbe.pstatic.net/styles" : "http://nrbe.map.naver.net/styles"
            },
            _getLocationInHouse: function() {
                return z ? "https://map.pstatic.net/nrb/styles" : "http://nrb.map.naver.net/styles"
            },
            _getScaleFactor: function() {
                return this.hd ? "@2x" : ""
            },
            _getFormat: function(t) {
                return t = parseInt(t, 10), 1 === t ? "jpg" : "png"
            },
            _getOverlayType: function(t) {
                return t ? "" === t ? "" : "?mt=" + t : ""
            },
            _getQuery: function(t) {
                return t ? "" === t ? "" : "&" + t : ""
            },
            onerror: function(t) {
                t.src = F
            }
        },
        function() {
            var t = function() {
                    for (var t = [], e = 0, o = arguments.length; e < o; e++) t[e] = arguments[e];
                    var s;
                    return t.unshift({
                        imgFormat: "0"
                    }), s = Ct.apply(null, t), n.forEach(s, function(t, e) {
                        "overlayType" !== e && "originalOverlayType" !== e || (t = Yt.sortOverlay(t), s[e] = Yt.convertToUserLanguage(t))
                    }), s && (s.provider = i[s.uid.split(":")[1]]), new n.ImageMapType(new Yt(s))
                },
                e = {
                    title: " /OpenStreetMap",
                    bounds: Rt(zt(38.72384708044177, 132.43015866445896), zt(32.006017049418105, 122.77804853762284)),
                    link: "http://www.openstreetmap.org/copyright",
                    exclude: !0
                },
                i = {
                    world: [{
                        title: " OpenStreetMap",
                        link: "http://www.openstreetmap.org/copyright"
                    }, {
                        title: " Natural Earth",
                        link: "http://www.naturalearthdata.com/"
                    }],
                    normal: [e],
                    satellite: [e, {
                        title: " /SPOT"
                    }, {
                        title: " /\uc778\ucc9c\uad11\uc5ed\uc2dc",
                        bounds: Rt(zt(36.915887, 125.690716), zt(37.687529, 126.853252))
                    }, {
                        title: " /\uad6d\ud1a0\uc9c0\ub9ac\uc815\ubcf4\uc6d0",
                        bounds: [Rt(zt(36.9604682, 126.7654746), zt(38.1834428, 127.8062689)), Rt(zt(33.1940984, 126.1631646), zt(33.5666617, 126.9448023)), Rt(zt(34.2894075, 126.1667903), zt(36.157058, 127.916409)), Rt(zt(37.0338716, 127.1017059), zt(38.6097027, 129.4009515)), Rt(zt(34.7636795, 127.5739401), zt(37.1422076, 129.6170151)), Rt(zt(37.2844933, 130.6524052), zt(37.6950155, 131.0788897)), Rt(zt(35.9625217, 125.5567761), zt(37.2537581, 128.6557701))]
                    }],
                    traffic: [{
                        title: " /\uad6d\ud1a0\uad50\ud1b5\ubd80"
                    }, {
                        title: " /\uacbd\ucc30\uccad(UTIS)"
                    }],
                    cadastral: [e, {
                        title: " /\ub2e4\uc6b8\uc9c0\uc624\uc778\ud3ec"
                    }]
                };
            Ct(Yt, {
                getMapTypes: function(t) {
                    var e = new n.MapTypeRegistry({
                        normal: Yt.getNormalMap(t),
                        terrain: Yt.getTerrainMap(t),
                        satellite: Yt.getSatelliteMap(t),
                        hybrid: Yt.getHybridMap(t)
                    });
                    return e.VENDOR = "\xa9 NAVER Corp.", e.uid = "naver:imagemap:default", e
                },
                getWorldMap: function(e) {
                    return t({
                        uid: "naver:world",
                        name: "\uc77c\ubc18",
                        repeatX: !0,
                        mapType: "basic",
                        overlayType: "ar.bg.ol.sw.lko"
                    }, e)
                },
                getVectorMap: function(e) {
                    return t({
                        uid: "naver:normal:bg",
                        name: "\uc77c\ubc18",
                        mapType: "basic",
                        overlayType: "ar.bg.ol.sw"
                    }, e)
                },
                getNormalMap: function(e) {
                    return t({
                        uid: "naver:normal",
                        name: "\uc77c\ubc18",
                        mapType: "basic",
                        overlayType: "ar.bg.ol.sw.lko",
                        originalOverlayType: "ar.bg.ol.sw.lko"
                    }, e)
                },
                getTerrainMap: function(e) {
                    return t({
                        uid: "naver:normal:terrain",
                        name: "\uc9c0\ud615\ub3c4",
                        mapType: "terrain",
                        overlayType: "bg.ol.sw.lko",
                        originalOverlayType: "bg.ol.sw.lko"
                    }, e)
                },
                getSatelliteMap: function(e) {
                    return t({
                        uid: "naver:satellite",
                        name: "\uc704\uc131",
                        mapType: "satellite",
                        overlayType: "bg",
                        originalOverlayType: "bg",
                        darktheme: !0
                    }, e)
                },
                getHybridMap: function(e) {
                    return t({
                        uid: "naver:satellite:hybrid",
                        name: "\uacb9\uccd0\ubcf4\uae30",
                        mapType: "satellite",
                        overlayType: "ar.bg.ol.sw.lko",
                        originalOverlayType: "ar.bg.ol.sw.lko",
                        darktheme: !0
                    }, e)
                },
                getTrafficMiniMap: function(e) {
                    return t({
                        uid: "naver:satellite:minimap",
                        name: "\uad50\ud1b5\uc57d\uc2dd",
                        mapType: "minimap",
                        overlayType: "bg.ol.ctt.lko",
                        originalOverlayType: "bg.ol.ctt.lko"
                    }, e)
                },
                getBlankMap: function(e) {
                    return t({
                        uid: "naver:blank",
                        name: "\ud22c\uba85",
                        getTileUrl: function() {
                            return F
                        }
                    }, e)
                },
                getLiteMap: function(e) {
                    return t({
                        uid: "naver:normal:lite",
                        name: "Lite",
                        mapType: "basic",
                        overlayType: "bg.ol.lko",
                        repeatX: !1
                    }, e)
                },
                getNormalLabelLayer: function(e) {
                    return t({
                        uid: "naver:normal:label",
                        name: "\uc8fc\uae30",
                        mapType: "basic",
                        overlayType: "lko"
                    }, e)
                },
                getSatelliteLabelLayer: function(e) {
                    return t({
                        uid: "naver:satellite:label",
                        name: "\uc8fc\uae30",
                        mapType: "satellite",
                        overlayType: "lko"
                    }, e)
                },
                getTrafficLayer: function(e) {
                    return t({
                        uid: "naver:traffic",
                        name: "\uad50\ud1b5",
                        imgFormat: 0,
                        mapType: "basic",
                        overlayType: "ctt.lko"
                    }, e)
                },
                getBicycleLayer: function(e) {
                    return t({
                        uid: "naver:bicycle",
                        name: "\uc790\uc804\uac70",
                        imgFormat: 0,
                        mapType: "basic",
                        overlayType: "br.lko",
                        overview: !1
                    }, e)
                },
                getTrafficBicycleLayer: function(e) {
                    return t({
                        uid: "naver:trafficbicycle",
                        name: "\uad50\ud1b5/\uc790\uc804\uac70",
                        imgFormat: 0,
                        mapType: "basic",
                        overlayType: "br.ctt",
                        overview: !1
                    }, e)
                },
                getCadastralLayer: function(e) {
                    return t({
                        uid: "naver:cadastral",
                        name: "\uc9c0\uc801\ub3c4",
                        imgFormat: 0,
                        mapType: "basic",
                        overlayType: "bg.ol.lp.sw",
                        overview: !1
                    }, e)
                },
                getStreetLayer: function(e) {
                    return t({
                        uid: "naver:street",
                        name: "\uac70\ub9ac\ubdf0",
                        imgFormat: 0,
                        mapType: "basic",
                        overlayType: "ps.lko",
                        overview: !1
                    }, e)
                },
                convertToUserLanguage: function(t) {
                    return n.USER_LANGUAGE ? (n.forEach(M, function(e) {
                        -1 !== t.indexOf(e) && (t = t.replace("l" + e, "l" + n.USER_LANGUAGE))
                    }), t) : t
                },
                emptyValueFilter: function(t) {
                    return !!t
                },
                sortOverlay: function(t) {
                    var e, i = [],
                        o = t.split("."),
                        s = !1,
                        r = !1,
                        a = !1;
                    return n.forEach(o, function(t) {
                        -1 !== (e = Tt.indexOf(t)) && (i[e] = t, "bs" === t ? s = !0 : "sw" === t ? r = !0 : "ts" === t && (a = !0))
                    }), a ? (i[xt] = "", i[bt] = "") : s && r && (i[xt] = "", i[bt] = "", i[Mt] = "ts"), i.filter(this.emptyValueFilter).join(".")
                }
            })
        }(), n.NaverStyleMapTypeOption = Yt, n.Layer = function(t, e, i) {
            this.name = t, this._initRegistry(e);
            var n = this.registry;
            if (!n.getSelectedTypeId()) {
                var o = n.getTypeIds();
                o.length && n.setSelectedTypeId(o[0])
            }
            this.options = Ct({
                zIndex: 0,
                overlayMap: !1
            }, i)
        }, At(n.Layer, n.KVO, {
            _initRegistry: function(t) {
                if (t instanceof n.MapTypeRegistry) return void(this.registry = t);
                var e = this.name || n.guid(),
                    i = t,
                    o = {};
                o[e] = i, this.registry = new n.MapTypeRegistry(o, e)
            },
            _initPane: function() {
                var t = this.options.overlayMap,
                    e = this.options.zIndex || (t ? 0 : 90);
                return this.pane = new n.TileIndexPane(this.name, {
                    overlayMap: t
                }), this.pane.getElement().style.zIndex = e, t && (this.pane.getSpareElement().style.zIndex = e), this.pane
            },
            _beforeSetMap: Lt,
            setMap: function(t) {
                var e = this.getMap();
                if (t !== e) {
                    if (this._beforeSetMap(t), t) {
                        this.map = t;
                        var i = this.getLayerType(),
                            n = i.getMapTypeOptions ? i.getMapTypeOptions() : null;
                        n && (n.map = t);
                        var o = this._initPane();
                        this._updateRegistry(t), o.setMapTypeRegistry(this.registry), this._addToMap(t)
                    } else e && this._destroy();
                    return this.set("map", t), this._afterSetMap(t), !0
                }
            },
            _addToMap: function(t) {
                this.pane.setMap(t), t.layers.set(this.name, this), t.set(this.name + "Layer", this)
            },
            _afterSetMap: Lt,
            getMap: function() {
                return this.get("map") || null
            },
            setLayerTypeId: function(t) {
                this.registry.setSelectedTypeId(t)
            },
            getLayerTypeId: function() {
                return this.registry.getSelectedTypeId()
            },
            getLayerType: function() {
                return this.registry.getSelectedType()
            },
            getPaneElement: function() {
                return this.pane ? this.pane.get("paneElement") : null
            },
            refresh: function(t) {
                this.pane.refresh(t)
            },
            setOpacity: function(t) {
                this.pane && this.pane.setOpacity(t)
            },
            getOpacity: function() {
                return this.pane ? this.pane.getOpacity() : 1
            },
            _updateRegistry: Lt,
            _destroy: function() {
                this.pane.unbindAll(), this.pane.setMap(null), this.pane = null, delete this.pane;
                var t = this.getMap();
                return t && (t.layers.set(this.name, null), t.set(this.name + "Layer", null), this.set("map", null), this.map = null, delete this.map), !1
            }
        }), n.LabelLayer = function(t, e, i) {
            this._forceExcludeSymbol = !1, n.Layer.apply(this, arguments)
        }, At(n.LabelLayer, n.Layer, {
            _afterSetMap: function(t) {
                t && (this._mapTypeRelation = [Zt.addListener(t, "mapType_changed", Ot(this._onMapTypeChanged, this)), Zt.addListener(t, "addLayer", Ot(this._onMapAddLayer, this)), Zt.addListener(t, "removeLayer", Ot(this._onMapRemoveLayer, this))])
            },
            _updateRegistry: function(t) {
                this._checkCadastral(t), this._changeLabelOverlay(t.getMapType())
            },
            _onMapAddLayer: function(t) {
                var e = this.getMap(),
                    i = n.getIndexOfElement($, t.getLayerType().uid) > -1;
                e && i && (this._checkCadastral(), this._refreshLabelOverlay())
            },
            _onMapRemoveLayer: function(t) {
                this.getMap() && (this._checkCadastral(), this._refreshLabelOverlay())
            },
            _refreshLabelOverlay: function(t) {
                var e = this.getMap(),
                    i = t || (e ? e.getMapType() : null);
                i && this._changeLabelOverlay(i) && this.refresh()
            },
            _checkCadastral: function(t) {
                var e = t || this.getMap();
                if (e && e.layers) {
                    for (var i, o = e.layers, s = o.getLayerNames(), r = !1, a = 0, h = s.length; a < h; a++)
                        if ((i = o.get(s[a])) && n.getIndexOfElement($, i.getLayerType().uid) > -1) {
                            r = !0;
                            break
                        } this._forceExcludeSymbol = r
                }
            },
            _changeLabelOverlay: function(t) {
                var e = this.getMap(),
                    i = !e || e.useStyleMap,
                    o = this.getLayerType(),
                    s = o.getMapTypeOptions(),
                    r = s.overlayType,
                    a = r,
                    h = (t.uid || "").split(":");
                if ("naver" !== h[0]) return !1;
                if (i) {
                    var l = [_t.POI_KOREAN, _t.POI_ENGLISH, _t.POI_CHINESE, _t.POI_JAPANESE];
                    n.forEach(l, function(t) {
                        1 !== a.indexOf(t) && (a = a.replace("." + t, "").replace(t, ""))
                    })
                } else a = a.replace("/ol_vc_an", "").replace("/ol_st_an", "");
                var c = function(t, e) {
                    return "" === t ? e : t + "." + e
                };
                return this.options.smartSymbol && this._forceExcludeSymbol || ("satellite" === h[1] && "hybrid" === h[2] ? i ? a = c(a, yt(n.USER_LANGUAGE)) : a += "/ol_st_an" : "satellite" !== h[1] && (i ? a = c(a, yt(n.USER_LANGUAGE)) : a += "/ol_vc_an")), a !== r && (s.overlayType = a, !0)
            },
            _onMapTypeChanged: function(t) {
                this._refreshLabelOverlay(t)
            },
            _destroy: function() {
                Zt.removeListener(this._mapTypeRelation), this._mapTypeRelation = null, n.Layer.prototype._destroy.apply(this)
            }
        }), n.BicycleLayer = function(t) {
            var e = Ct({
                zIndex: 3,
                overlayMap: !0
            }, t);
            if (e.useStyleMap || !0) return void n.LabelLayer.apply(this, ["bicycle", Yt.getBicycleLayer(), e]);
            n.LabelLayer.apply(this, ["bicycle", Xt.getBicycleLayer(), e])
        }, At(n.BicycleLayer, n.LabelLayer), n.CadastralLayer = function(t) {
            var e = Ct({
                zIndex: 1,
                overlayMap: !1
            }, t);
            if (this.useStyleMap = e.useStyleMap || !0) return void n.Layer.apply(this, ["cadastral", Yt.getCadastralLayer(), e]);
            n.Layer.apply(this, ["cadastral", Xt.getCadastralLayer(), e])
        }, At(n.CadastralLayer, n.Layer, {
            _afterSetMap: function(t) {
                t && this.useStyleMap && (this._mapTypeRelation = [Zt.addListener(t, "mapType_changed", Ot(this._refresh, this))])
            },
            _refresh: function() {
                if (this.useStyleMap) {
                    var t = this.map;
                    (t ? t.getMapType() : null) && this.refresh()
                }
            },
            _destroy: function() {
                Zt.removeListener(this._mapTypeRelation), this._mapTypeRelation = null, this.map = null, n.Layer.prototype._destroy.apply(this)
            }
        }), n.LayerRegistry = function() {
            this._layerNames = []
        }, At(n.LayerRegistry, n.KVO, {
            set: function(t, e) {
                var i = this.get(t),
                    o = n.getIndexOfElement(this._layerNames, t);
                n.KVO.prototype.set.apply(this, arguments), o > -1 && this._layerNames.splice(o, 1), null !== e ? (this._layerNames.push(t), Zt.trigger(this, "addLayer", e)) : i && Zt.trigger(this, "removeLayer", t)
            },
            getLayerNames: function() {
                return this._layerNames.slice(0)
            }
        }), n.StreetLayer = function(t) {
            var e = Ct({
                zIndex: 10,
                overlayMap: !0,
                smartSymbol: !0
            }, t);
            if (this._cadastralActivated = !1, e.useStyleMap || !0) return void n.Layer.apply(this, ["street", Yt.getStreetLayer(), e]);
            n.Layer.apply(this, ["street", Xt.getStreetLayer(), e])
        }, At(n.StreetLayer, n.LabelLayer), n.TrafficLayer = function(t) {
            var e = Ct({
                zIndex: 2,
                overlayMap: !0,
                interval: 3e5
            }, t);
            if (this._lastVersion = {
                    version: 0,
                    updateDate: ""
                }, this.useStyleMap = e.useStyleMap || !0) return void n.LabelLayer.apply(this, ["traffic", Yt.getTrafficLayer(), e]);
            n.LabelLayer.apply(this, ["traffic", Xt.getTrafficLayer(), e])
        }, At(n.TrafficLayer, n.LabelLayer, {
            RT_VERSION_API: z ? "https://ssl.map.naver.com/rts/wmts?request=GetLastVersion" : "http://rts1.map.naver.net/rts/wmts?request=GetLastVersion",
            _addToMap: function(t) {
                var e = this;
                e._getRTVersion(function() {
                    n.Layer.prototype._addToMap.apply(e, [t]), e.options.interval && e.startAutoRefresh()
                })
            },
            _updateRTVersion: function() {
                this.registry.get(this.name).getMapTypeOptions().timeStamp = this._lastVersion.version
            },
            _destroy: function() {
                this.endAutoRefresh(), n.LabelLayer.prototype._destroy.apply(this)
            },
            _setLastVersion: function(t) {
                this._lastVersion = t, this._updateRTVersion()
            },
            _getRTVersion: function(t) {
                var e = this;
                n.jsonp(this.RT_VERSION_API, {
                    callbackname: "callbackname",
                    callback: function(i) {
                        e._setLastVersion(i), t && t(i)
                    },
                    error: function() {
                        t && t()
                    }
                })
            },
            startAutoRefresh: function() {
                var e = this,
                    i = e.options.interval;
                if (e._timer && t.clearTimeout(e._timer), this.useStyleMap) {
                    var n = i < 3e5 ? 3e5 : i;
                    return void(e._timer = t.setTimeout(function i() {
                        e.refresh(!0), e._timer = t.setTimeout(i, n)
                    }, n))
                }
                e._timer = t.setTimeout(function n() {
                    e._getRTVersion(function(o) {
                        o && e.refresh(!0), e._timer = t.setTimeout(n, i)
                    })
                }, i)
            },
            endAutoRefresh: function() {
                this._timer && (t.clearTimeout(this._timer), this._timer = null, delete this._timer)
            }
        }), n.MapOptions = function(t, e) {
            e = e || {}, this.map = t;
            var i = t.useStyleMap;
            if (F = e.blankTileImage || Z, Ct(this, {
                    useStyleMap: i,
                    gl: !1,
                    background: V + "/pattern_1.png",
                    tileSpare: 0,
                    pixelRatio: B,
                    center: zt(37.5666103, 126.9783882),
                    bounds: null,
                    tilt: 0,
                    rotation: 0,
                    maxBounds: null,
                    padding: n.trbl(),
                    overlayZoomEffect: null,
                    tileTransition: !0,
                    baseTileOpacity: 1,
                    disableKineticPan: !0,
                    zoomOrigin: null,
                    size: null,
                    zoom: i ? 16 : 11,
                    minZoom: null,
                    maxZoom: null,
                    mapTypes: null,
                    mapTypeId: "normal",
                    resizeOrigin: x.CENTER,
                    draggable: !0,
                    disableDoubleClickZoom: !1,
                    disableDoubleTapZoom: !1,
                    disableTwoFingerTapZoom: !1,
                    keyboardShortcuts: !0,
                    scrollWheel: !0,
                    pinchZoom: !0,
                    scaleControl: !0,
                    scaleControlOptions: {
                        position: x.BOTTOM_RIGHT
                    },
                    logoControl: !0,
                    logoControlOptions: {
                        position: x.BOTTOM_RIGHT
                    },
                    mapDataControl: !0,
                    mapDataControlOptions: {
                        position: x.BOTTOM_LEFT
                    },
                    mapTypeControl: !1,
                    mapTypeControlOptions: {
                        position: x.TOP_RIGHT
                    },
                    zoomControl: !1,
                    zoomControlOptions: {
                        position: x.TOP_LEFT
                    },
                    compassControl: !1,
                    compassControlOptions: {
                        position: x.TOP_LEFT
                    }
                }), e.logoControl = !0, "mapTypes" in e || (e.mapTypes = i ? Yt.getMapTypes({
                    map: t
                }) : Xt.getMapTypes()), e.center) {
                if (!(e.center instanceof n.Point)) {
                    var o = e.mapTypes.get(e.mapTypeId || this.mapTypeId).projection;
                    ["UTMK", "UTMK_NAVER", "EPSG:3857"].indexOf(o.name) > -1 ? e.center = n.box(e.center, zt) : e.center = n.box(e.center)
                }
            } else e.center = this.center;
            !e.zoomOrigin || e.zoomOrigin instanceof n.Point || (e.zoomOrigin = n.box(e.zoomOrigin)), !e.bounds || e.bounds instanceof n.PointBounds || (e.bounds = n.box(e.bounds)), !e.maxBounds || e.maxBounds instanceof n.PointBounds || (e.maxBounds = n.box(e.maxBounds)), !e.size || e.size instanceof n.Size || (e.size = n.box(e.size, n.Size)), e.padding && (e.padding = n.trbl(e.padding)), this.setValues(e), this.set("__optionsOrder", n.keys(Ct(e, {
                scaleControl: this.scaleControl,
                logoControl: this.logoControl,
                mapDataControl: this.mapDataControl,
                mapTypeControl: this.mapTypeControl,
                zoomControl: this.zoomControl,
                compassControl: this.compassControl
            }))), this.get("tileTransition") && It.browser.csszoom && this.set("tileTransition", !1)
        }, At(n.MapOptions, n.KVO, {
            setRefinedOption: function(t, e) {
                "size" === t ? e = n.box(e, Bt) : "center" === t || "zoomOrigin" === t || "bounds" === t ? e = n.box(e) : "maxBounds" === t ? e = this.limitMaxBounds(e) : "minZoom" === t ? e = this.limitMinZoom(e) : "logoControl" === t && (e = !0), this.set(t, e)
            },
            updateSilently: function(t, e) {
                var i = this.get(t);
                i instanceof kt || i instanceof Dt || i instanceof Bt ? !1 === i.equals(e) && this.set(t, e, !0) : "object" != typeof i ? i !== e && this.set(t, e, !0) : this.set(t, e, !0)
            },
            isBuiltInMapType: function() {
                var t = this.map;
                if (!t.useStyleMap) return !1;
                var e = t.getMapType(),
                    i = e && e.vendor || null;
                if (!i || "\xa9 NAVER Corp." !== i) return !1;
                var o = e && e.projection || null;
                return !(!o || o !== n.EPSG3857)
            },
            limitMaxBounds: function(t) {
                if (!this.isBuiltInMapType()) return t;
                t = n.box(t);
                var e = n.LatLngBounds({
                    lng: 124.2694863,
                    lat: 32.122953
                }, {
                    lng: 131.969556,
                    lat: 38.6152377
                });
                return e.hasBounds(t) ? t : e
            },
            limitMinZoom: function(t) {
                if (!this.isBuiltInMapType()) return t;
                return t > 6 ? t : 6
            },
            minZoom_changed: function() {
                this.set("minZoom", this.limitMinZoom(this.get("minZoom")), !0)
            },
            maxBounds_changed: function() {
                this.set("maxBounds", this.limitMaxBounds(this.get("maxBounds")), !0)
            },
            destroy: function() {
                for (var t = this.get("mapTypes"), e = t.getTypeIds(), i = 0, n = e.length; i < n; i += 1) {
                    t.get(e[i]).map = null
                }
                this.map = null
            }
        }), n.Map = function(t, i) {
            n.USE_STYLE_MAP = this.useStyleMap = !i || i.useStyleMap === e || i.useStyleMap, n.USE_STYLE_MAP = this.useStyleMap = !0, g(this), this.mapTypeId = "normal", this._pendingOptions = [], this.isStyleMapReady = !1, this.useStyleMap && $t(this);
            var o = this._initMapOptions(i);
            this.id = "nmap-" + n.guid(), this.__WILL_REDRAW = !1, this._mapModel = new n.MapModel(o), this._initRenderMode(), this._initMapView(t, o), this.switchTo(this.get("renderMode")), this._initTilePane(), this._initLayers(), this._initMapTypes(), this._initDataLayer(), n.Map.__instances.push(this), Jt && Jt()
        }, At(n.Map, n.KVO, {
            initStyleMap: function() {
                this._updateStyleMapTypeOption(), this.isStyleMapReady = !0, this._unsetMapTypeSetting(), this._assembleRest(), this._setPendingOptions(), this.trigger("init_stylemap")
            },
            isCustomMapType: function() {
                var t = this.get("mapTypeId"),
                    e = this.get("mapType");
                return !(t && e && e.uid && -1 !== e.uid.indexOf("naver:"))
            },
            isNotReady: function() {
                return this.useStyleMap && !this.isStyleMapReady
            },
            _unsetMapTypeSetting: function() {
                this.mapTypes && this.mapTypes.selectedMapType && this.mapTypes.selectedMapType instanceof n.ImageMapType && (this.mapTypes.setSelectedTypeId(this.mapTypes.getSelectedTypeId()), this.mapTypes.selectedMapType.getMapTypeOptions().map = this)
            },
            _setPendingOptions: function() {
                if (this._pendingOptions) {
                    for (var t = 0, e = this._pendingOptions.length; t < e; t += 1) this.setOptions.apply(this, this._pendingOptions[t]);
                    delete this._pendingOptions
                }
            },
            _updateStyleMapTypeOption: function() {
                Yt.prototype.versions = ft.versions || {}, Yt.prototype.minZoom = ft.minzoom || 0, Yt.prototype.maxZoom = ft.maxzoom || 21
            },
            switchTo: function(t) {
                this._initParts()
            },
            _initParts: function() {
                var t = this._mapOptions;
                this._mapModel.setMapbox && this._mapModel.setMapbox(null), this._mapAction = new n.MapAction(t)
            },
            setCenter: function(t) {
                if (t = n.box(t), this._stopTransition(), !this.__reserveMove("setCenter", [t])) {
                    this._mapModel.setCenter(t) && this._triggerIdle()
                }
            },
            setCenterPoint: function(t) {
                if (t = n.box(t, kt), this._stopTransition(), !this.__reserveMove("setCenterPoint", [t])) {
                    this._mapModel.setCenterPoint(t) && this._triggerIdle()
                }
            },
            setZoom: function(t, e) {
                this._stopTransition();
                var i = this._mapAction.setZoom(t, e);
                !e && i && this._triggerIdle()
            },
            zoomBy: function(t, e, i) {
                e = e ? n.box(e) : this.getCenter();
                var o = this.getProjection(),
                    s = o.fromCoordToOffset(e);
                this._stopTransition();
                var r = this._mapAction.zoomBy(t, s, i);
                !i && r && this._triggerIdle()
            },
            updateBy: function(t, e) {
                t = n.box(t), this.getCenter().equals(t) && this.getZoom() === e || (this._stopTransition(), this.__reserveMove("updateBy", [t, e]) || (this._mapModel.set("instantTiling", !0), this._mapModel.update(t, null, e), this._triggerIdle()))
            },
            fitBounds: function(t, e) {
                if (n.isArray(t) && "number" != typeof t[0]) {
                    if (t.length < 2) return;
                    n.forEach(t, function(e, i) {
                        e instanceof kt || (t[i] = n.box(e))
                    });
                    var i = Rt;
                    t[0] instanceof zt || (i = Dt), t = i.bounds.apply(i, t)
                } else t = n.box(t);
                if (this._stopTransition(), !this.__reserveMove("fitBounds", [t, e])) {
                    this._mapModel.fitBounds(t, e) && this._triggerIdle()
                }
            },
            panTo: function(t, e) {
                t = n.box(t), this.__reserveMove("panTo", [t, e]) || this._mapAction.panTo(t, Ct({
                    duration: 1e3,
                    easing: "easeOutCubic"
                }, e))
            },
            panToBounds: function(t, e, i) {
                t = n.box(t), this.__reserveMove("panToBounds", [t, e, i]) || this._mapAction.panToBounds(t, Ct({
                    duration: 1e3,
                    easing: "easeOutCubic"
                }, e), i)
            },
            panBy: function(t) {
                t && (t = n.box(t, kt), this._stopTransition(), this.__reserveMove("panBy", [t]) || (this._mapAction.panBy(t), this._triggerIdle()))
            },
            morph: function(t, e, i) {
                t = n.box(t), this._stopTransition(), this.__reserveMove("morph", [t, e, i]) || this._mapAction.morph(t, e, i)
            },
            setTilt: function(t) {
                this._mapModel.setTilt(t)
            },
            getTilt: function() {
                return this._mapModel.getTilt()
            },
            setRotation: function(t) {
                this._mapModel.setRotation(t)
            },
            getRotation: function() {
                return this._mapModel.getRotation()
            },
            setOptions: function(t) {
                if (this.isNotReady()) return void this._pendingOptions.push(arguments);
                var e = this._mapOptions;
                if ("string" == typeof t) {
                    var i = t,
                        o = arguments[1];
                    "padding" === i && (o = Ct(e.get("padding"), o)), e.setRefinedOption(i, o)
                } else n.forEach(t, Ot(function(t, e) {
                    this.setOptions(e, t)
                }, this))
            },
            getOptions: function(t) {
                var i = this._mapOptions;
                return t !== e ? "minZoom" === t || "maxZoom" === t ? i.get("user" + n.capitalize(t)) : i.get(t) : i
            },
            getProjection: function() {
                return this.get("mapSystemProjection")
            },
            getPrimitiveProjection: function() {
                return this.get("projection")
            },
            getCenterPoint: function() {
                return this._mapModel.getCenterPoint().clone()
            },
            getCenter: function() {
                return this._mapModel.getCenter().clone()
            },
            getZoom: function() {
                return this._mapModel.getZoom()
            },
            setMapTypeId: function(t) {
                this._assembleListener && (Zt.removeListener(this._assembleListener), this._assembleListener = null, delete this._assembleListener, this._assemble(t)), this.mapTypes.setSelectedTypeId(t)
            },
            refresh: function(t) {
                var e = this._mapModel,
                    i = this.getMapType(),
                    o = i.projection || n.EmptyProjection,
                    s = i.tileSize || Bt(256, 256),
                    r = !1;
                r = e.get("projection") !== o || !1 === e.get("tileSize").equals(s), r && (e.set("tileSize", s), e.set("projection", o)), e.refreshTiles(t), this._triggerIdle()
            },
            setSize: function(t) {
                t = n.box(t, Bt), this.getSize().equals(t) || (this._resizeListener && (Zt.removeDOMListener(this._resizeListener), this._resizeListener = null, delete this._resizeListener), this._resizeMapListener && (Zt.removeListener(this._resizeMapListener), this._resizeMapListener = null, delete this._resizeMapListener), this._mapModel.setSize(t), Zt.trigger(this, "resize"), this._triggerIdle())
            },
            getSize: function() {
                return this._mapModel.getSize().clone()
            },
            getBounds: function() {
                return this._mapModel.getBounds().clone()
            },
            getFitZoomAndCenter: function(t) {
                return this._mapModel.getFitZoomAndCenter(t)
            },
            getElement: function() {
                return this._mapView.getElement()
            },
            setCursor: function(t) {
                this._mapView.setCursor(t)
            },
            getCursor: function() {
                return this._mapView.getCursor()
            },
            getCurrentInfoWindow: function() {
                return this._mapModel.get("infowindow")
            },
            closeInfoWindow: function() {
                this._mapModel.get("infowindow") && this._mapModel.get("infowindow").close()
            },
            getPanes: function() {
                return this._mapView.get("panes")
            },
            addPane: function(t, e) {
                return this._mapView.addPane(t, e)
            },
            removePane: function(t) {
                this._mapView.removePane(t)
            },
            __reserveMove: function(t, e) {
                return !!this._mapAction.isZooming() && (this.__RESERVED_MOVE = [t, e], !0)
            },
            _initMapOptions: function(t) {
                var e = new n.MapOptions(this, t),
                    i = e.get("minZoom"),
                    o = e.get("maxZoom");
                return null !== i && e.set("userMinZoom", i), null !== o && e.set("userMaxZoom", o), this._listenMapOptions(e), this._mapOptions = e, e
            },
            _initRenderMode: function() {
                var t = this._mapOptions,
                    e = this._mapModel;
                t.get("gl") && n.glSupported() ? e.set("renderMode", 2) : e.set("renderMode", 1), Zt.addListener(this, "renderMode_changed", function(e) {
                    var i = !1;
                    2 === e && (i = !0), t.set("gl", i, !0)
                }), this.bindTo("renderMode", e)
            },
            __unlisten__: function(t) {
                this[t] && (Zt.removeListener(this[t]), this[t] = null, delete this[t])
            },
            __listen__: function(t, e) {
                this.__unlisten__(t), this[t] = e
            },
            _listenMapOptions: function(t) {
                var e = this;
                Zt.once(this, "init_stylemap", function() {
                    e.controlPositioner.update()
                }), Zt.once(this, "assemble", function() {
                    e.__listen__("_mapOptionsListeners", [Zt.addListener(t, "minZoom_changed", function(i) {
                        t.set("userMinZoom", i), i > e.getZoom() && e.setZoom(i, !0)
                    }), Zt.addListener(t, "maxZoom_changed", function(i) {
                        t.set("userMaxZoom", i), i < e.getZoom() && e.setZoom(i, !0)
                    }), Zt.addListener(t, "mapTypes_changed", function(t) {
                        e._changeRegistry(t)
                    }), Zt.addListener(t, "center_changed", function(t) {
                        e.setCenter(t)
                    }), Zt.addListener(t, "zoom_changed", function(t) {
                        e.setZoom(t)
                    }), Zt.addListener(t, "bounds_changed", function(t) {
                        e.fitBounds(t)
                    }), Zt.addListener(t, "size_changed", function(t) {
                        e.setSize(t)
                    }), Zt.addListener(t, "tilt_changed", function(t) {
                        e.setTilt(t)
                    }), Zt.addListener(t, "rotation_changed", function(t) {
                        e.setRotation(t)
                    }), Zt.addListener(t, "gl_changed", function(t) {
                        e.switchTo(t ? 2 : 1)
                    })])
                })
            },
            _initMapView: function(t, e) {
                var i = new n.MapView(t, e),
                    o = e.get("size");
                this._resizeMapListener = Zt.addListener(this, "resize", Ot(this._onResize, this)), o ? i.setSize(o) : (e.set("size", i.getSize(), !0), this._listenResize()), this._mapView = i
            },
            _listenResize: function() {
                this._resizeListener = Zt.addDOMListener(t, "resize", Ot(this._onResizeWindow, this))
            },
            _onResizeWindow: function(t) {
                this._resizeByTrigger(), Zt.trigger(this, "resize", "__SILENTLY__")
            },
            _onResize: function(t) {
                this._resizeListener && (t && "__SILENTLY__" === t || this._resizeByTrigger())
            },
            _resizeByTrigger: function() {
                if (this._mapModel && this._resizeListener) {
                    var t = Nt.getSize(this.getElement()).round();
                    this.getSize().equals(t) || (this._mapModel.setSize(t), this._sizeChanged = !0, this._triggerIdle())
                }
            },
            _initTilePane: function() {
                this.mapPane = new n.TileIndexPane("basemap"), this.mapPane.bindTo("tileopacity", this._mapOptions, "baseTileOpacity"), this._listenTilePane(this.mapPane)
            },
            _listenTilePane: function(t) {
                var e = this;
                this.__listen__("_tilePaneListeners", [Zt.forward(t, "tilesloaded", this), Zt.addListener(this, "tilesloaded", function() {
                    e._mapModel.set("instantTiling", !1)
                })])
            },
            _initLayers: function() {
                this.layers = new n.LayerRegistry, this._listenLayers(this.layers)
            },
            _listenLayers: function(t) {
                this.__listen__("_layersListeners", [Zt.forward(t, "addLayer", this), Zt.forward(t, "removeLayer", this)])
            },
            _initMapAction: function() {
                var t = this._mapAction;
                t.setMapModel(this._mapModel), t.setMapView(this._mapView), t.initZoomEffector(), this._listenMapAction(t)
            },
            _listenMapAction: function(t) {
                var e = this;
                e.__listen__("_mapActionListeners", [Zt.forward(e, "tilesloaded", t), Zt.addListener(t, "idle", Ot(e.__onIdle, e)), Zt.addListener(t, "willDestroy", Ot(e.__unlisten__, e, "_mapActionListeners"))])
            },
            _initMapTypes: function() {
                var t = this._mapOptions.get("mapTypeId"),
                    e = this._mapOptions.get("mapTypes");
                if (this.mapTypes = e, !e.get(t)) return void(this._assembleListener = Zt.once(e, t + "_changed", Ot(this._assemble, this, t)));
                this._assemble(t)
            },
            _initDataLayer: function() {
                var t = new n.DataLayer;
                t.setMap(this), this.data = t
            },
            _assemble: function(t) {
                if (this._initRegistry(t || this.mapTypes.getSelectedTypeId()), this._initMapModel(), this._initMapAction(), this.__FORWARDS) {
                    var e = this;
                    n.forEach(this.__FORWARDS, function(t, i) {
                        t = Zt.forward(e._mapAction, i, e), e._mapActionListeners && e._mapActionListeners.push(t)
                    })
                }
                this._listenDispatchStatus(), this.isNotReady() || this._assembleRest()
            },
            _assembleRest: function() {
                this.mapPane.setMap(this), this._initControl(), this.trigger("assemble")
            },
            _listenDispatchStatus: function() {
                this.__listen__("_dispatchStatusListeners", [Zt.addListener(this, "__BEGIN_DISPATCH__", Ot(this._onBeginDispatch, this, this)), Zt.addListener(this, "__STOP_DISPATCH__", Ot(this._onStopDispatch, this, this))])
            },
            _initRegistry: function(t) {
                var e = this.mapTypes;
                e.setSelectedTypeId(t), this.unbind("mapType"), this._listenMapTypes(), this.bindTo("mapType", e, "selectedMapType"), this.mapPane.setMapTypeRegistry(e), this._adjustZoomLimit(this.get("mapType"))
            },
            _listenMapTypes: function() {
                var t = this;
                this.__listen__("_mapTypesListeners", [Zt.addListener(this, "mapType_changed", function(e) {
                    t._mapType_changed(e)
                })])
            },
            _changeRegistry: function(t) {
                var e = this.getMapTypeId(),
                    i = this.mapTypeControl;
                this.mapTypes = t, this._initRegistry(e), i && i.getMap() && (i.setMap(null), i.setMap(this))
            },
            _extendProj: function() {
                var t = this.get("mapSystemProjection");
                if (t && !t.fromPageXYToOffset) {
                    var e = this._mapView;
                    t.fromPageXYToOffset = function(t) {
                        var i = e.getMapOffset();
                        return t.clone().sub(i).sub(this.get("containerTopLeft"))
                    }, t.fromPageXYToPoint = function(t) {
                        var e = this.fromPageXYToOffset(t);
                        return this.fromOffsetToPoint(e)
                    }, t.fromPageXYToCoord = function(t) {
                        var e = this.fromPageXYToOffset(t);
                        return this.fromOffsetToCoord(e)
                    }
                }
            },
            _initMapModel: function() {
                function t(t, e) {
                    c[t] = e
                }

                function i() {
                    n.forEach(a, function(t) {
                        t in c && s.set(t, c[t])
                    }), c = {}
                }

                function o(i) {
                    return function(n) {
                        var o = s.get(i);
                        if (o === e) return s.set(i, n);
                        o.equals && o.equals(n) || o === n || (s._mapAction.isZooming() && l[i] ? t(i, n) : s.set(i, n))
                    }
                }
                var s = this,
                    r = s._mapModel;
                if (!r.get("center")) {
                    r.set("size", s._mapView.getSize()), r.initPrimaryData(s._mapOptions), r.initTilePaneModel(), s.bindTo(["projection", "mapSystemProjection", "mapTypeId", "padding", "repeatX"], r), s._extendProj();
                    var a = ["center", "centerPoint", "zoom", "bounds"],
                        h = a.concat(["size", "tilt", "rotation", "scale"]),
                        l = {};
                    n.forEach(a, function(t) {
                        l[t] = 1
                    });
                    var c = {};
                    s._zcl && Zt.removeListener(s._zcl), s._zcl = Zt.addListener(s._mapAction, "zoomend", function() {
                        i()
                    }), n.forEach(h, function(t) {
                        Zt.addListener(s, t + "_m_changed", o(t)), s.bindTo(t + "_m", r, t)
                    }), Zt.addListener(r, "__point_shifted", function() {
                        s._pointShifted = !0
                    }), Zt.addListener(s, "size_changed", function(t) {
                        s._size_changed(t)
                    })
                }
            },
            getMapModel: function() {
                return this._mapModel
            },
            getMapView: function() {
                return this._mapView
            },
            getMapAction: function() {
                return this._mapAction
            },
            _adjustZoomLimit: function(t) {
                var e = this._mapOptions,
                    i = this._mapModel,
                    n = t.minZoom,
                    o = t.maxZoom;
                null === e.get("minZoom") && e.set("userMinZoom", e.limitMinZoom(n)), null === e.get("maxZoom") && e.set("userMaxZoom", o), i.set("mapTypeMinZoom", n), i.set("mapTypeMaxZoom", o)
            },
            _addInternalControl: function(t, e) {
                if (e) {
                    var i = this._mapOptions,
                        n = this,
                        o = function(t) {
                            n[t] ? n[t].getMap() !== n && n[t].setMap(n) : (n[t] = new e(Ct({
                                useStyleMap: n.useStyleMap
                            }, i[t + "Options"])), n[t].setMap(n))
                        };
                    i[t] && o(t), Zt.addListener(i, t + "_changed", function(t) {
                        return function(e) {
                            e ? o(t) : n[t] && n[t].setMap(null)
                        }
                    }(t)), Zt.addListener(i, t + "Options_changed", function(t) {
                        return function(e) {
                            n[t] && n[t].setOptions(e)
                        }
                    }(t))
                }
            },
            _addCopyrightControls: function() {
                var t = this.getPrimitiveProjection();
                t !== n.UTMK && t !== n.UTMK_NAVER && t !== n.EPSG3857 || this._addInternalControl("scaleControl", n.ScaleControl), this._addInternalControl("logoControl", n.LogoControl), this._addInternalControl("mapDataControl", n.MapDataControl)
            },
            _addDefaultControls: function() {
                var t = this._mapOptions.get("__optionsOrder"),
                    e = this;
                n.forEach(t, function(t) {
                    "mapTypeControl" !== t && "zoomControl" !== t && "compassControl" !== t || e._addInternalControl(t, n[n.capitalize(t)])
                })
            },
            _onBeginDispatch: function(t, e) {
                var i = e.match(/\S+_changed$/gi);
                if (!i || !i.length) {
                    t = t || this, t.__FORWARDS || (t.__FORWARDS = {});
                    var n = Zt.forward(this._mapAction, e, t);
                    t.__FORWARDS[e] = n, this._mapActionListeners && this._mapActionListeners.push(n)
                }
            },
            _onStopDispatch: function(t, e) {
                t = t || this, t.__FORWARDS && (Zt.removeListener(t.__FORWARDS[e]), t.__FORWARDS[e] = null, delete t.__FORWARDS[e])
            },
            _initControl: function() {
                if (!this.controls) {
                    var t = this,
                        e = this.controlPositioner = new n.CalcControlPosition(t),
                        i = [];
                    n.forEach(x, function(t, o) {
                        var s = new n.KVOArray;
                        e.bind(s, o), i[t] = s
                    }), this.controls = i, t._addCopyrightControls(), t._addDefaultControls()
                }
            },
            _triggerIdle: function() {
                this._mapAction.triggerIdle()
            },
            _triggerRedraw: function() {
                this._sizeChanged && (this._sizeChanged = !1), this._pointShifted && (this._pointShifted = !1), this._isTilingSystemChanged && (this._isTilingSystemChanged = !1), this.trigger("redraw")
            },
            setScale: function(t) {
                this._stopTransition(), this._mapAction.changeScale(t)
            },
            _stopTransition: function() {
                this._mapAction.stopTransition()
            },
            getMapTypeId: function() {
                return this.mapTypes.getSelectedTypeId()
            },
            getMapType: function() {
                return this.mapTypes ? this.mapTypes.getSelectedType() : null
            },
            fromEventToPointerEvent: function(t) {
                return t = Vt.fix(t.originalEvent || t), this._mapAction.fromEventToPointerEvent(t)
            },
            destroy: function(t) {
                var e = t || !1;
                this._mapView.destroy(), this._mapAction.destroy(), this._mapOptions.destroy();
                var i = this.getElement();
                if (i.innerHTML = "", e) {
                    i.style.backgroundImage = 'url("' + V + '/auth_fail.png")', i.style.backgroundPosition = "center center";
                    try {
                        i.style.backgroundSize = "256px 256px"
                    } catch (t) {}
                } else i.style.background = "none"
            },
            _mapType_changed: function(t) {
                var e = this.getOptions(),
                    i = this.get("projection");
                if (i) {
                    t.projection && (e.maxBounds = e.limitMaxBounds(e.maxBounds));
                    var o = this._mapModel,
                        s = o.get("tileSize") || Bt(256, 256),
                        r = t.projection || n.EmptyProjection,
                        a = t.tileSize || Bt(256, 256);
                    this._isTilingSystemChanged = i !== r || !1 === s.equals(a), t.map = this;
                    var h = t.getMapTypeOptions ? t.getMapTypeOptions() : null;
                    h && (h.map = this), this.mapTypeId = this.getMapTypeId(), o.set("instantTiling", !0), o.set("mapTypeId", this.getMapTypeId()), this._adjustZoomLimit(t);
                    var l = t.repeatX || !1,
                        c = o.get("repeatX") !== l;
                    this._isTilingSystemChanged && this.refresh(!0), c && this._mapModel.set("repeatX", l, this._isTilingSystemChanged)
                }
            },
            _size_changed: function(t) {
                this._resizeListener || this._mapView.setSize(t), this._sizeChanged = !0
            },
            _checkRedrawRequired: function() {
                var t = this._mapModel,
                    e = t.get("containerTopLeft"),
                    i = t.get("repeatX");
                if (this.__WILL_REDRAW) return this.__WILL_REDRAW = !1, this._triggerRedraw();
                (this._sizeChanged || this._isTilingSystemChanged || 0 === e.x && 0 === e.y || i && (!i || this._pointShifted)) && this._triggerRedraw()
            },
            __onIdle: function() {
                var t = this._mapOptions;
                if (t.updateSilently("center", this.getCenter()), t.updateSilently("zoom", this.getZoom()), t.updateSilently("bounds", this.getBounds()), t.updateSilently("size", this.getSize()), t.updateSilently("tilt", this.getTilt()), t.updateSilently("rotation", this.getRotation()), this._checkRedrawRequired(), this.__RESERVED_MOVE && !this._mapAction.isZooming()) {
                    var e = this.__RESERVED_MOVE,
                        i = e[0],
                        n = e[1];
                    this.__RESERVED_MOVE = null, delete this.__RESERVED_MOVE, this.__WILL_REDRAW = !0, this[i].apply(this, n)
                }
            },
            _getPointerEvent: function() {
                var t = this.getProjection(),
                    e = this.getCenter();
                if (t && e) {
                    var i = this.getPrimitiveProjection(),
                        n = t.fromCoordToOffset(e),
                        o = t.fromOffsetToPoint(n),
                        s = {
                            coord: e.clone(),
                            point: o,
                            offset: n,
                            pointerEvent: null,
                            domEvent: null
                        };
                    return i.fromPointToLatLng && (s.latlng = e.clone()), s
                }
            },
            _getDefaultEventParameters: function(t) {
                for (var e = !1, i = [], n = 0, o = C.length; n < o; n++)
                    if (C[n] === t) {
                        e = !0;
                        break
                    } return e && 0 !== t.indexOf("key") ? i.push(this._getPointerEvent()) : t.indexOf("_changed") === t.length - 8 && i.push(this.get(t.replace("_changed", ""))), i
            }
        }), n.Map.__instances = [], n.CustomControl = function(t, e) {
            "string" != typeof t && (e = t, t = null);
            var i = this.DEFAULT_OPTIONS || {
                    position: x.TOP_LEFT
                },
                n = Ct({
                    zIndex: H++
                }, i);
            this.setOptions(Ct({}, n, e || {})), this._element = this._createElement(t), this._oldPosition = null, this._oldMap = null
        }, At(n.CustomControl, n.KVO, {
            _beforeSetMap: Lt,
            setMap: function(t) {
                if (t && (!t.controls || t.isNotReady && t.isNotReady())) return void n.console.log(Et.TRY_AGAIN_CONTROL.slice(), St.DEFAULT_TWO_LINE.slice());
                var e = this.get("map"),
                    i = this.get("position");
                t !== e && (e && (Zt.removeListener(this._renderModeListener), this.unbind("renderMode")), t && (this._renderModeListener = Zt.addListener(this, "renderMode_changed", Ot(this._renderMode_changed, this)), this.bindTo("renderMode", t.getMapModel())), this._beforeSetMap(t), t ? this._addControl(t, i) : e && this._removeControl(e, i), this.set("map", t), this._afterSetMap(t))
            },
            _afterSetMap: Lt,
            getMap: function() {
                return this.get("map")
            },
            setPosition: function(t) {
                var e = this.get("map"),
                    i = this.get("position"),
                    n = this.DEFAULT_OPTIONS || {
                        position: x.TOP_LEFT
                    };
                "number" != typeof t && (t = n.position), e && (this._removeControl(e, i), this._addControl(e, t)), this.set("position", t)
            },
            _createElement: function(t) {
                var e = Nt.createElement("div", "position:relative;");
                return t && (e.innerHTML = t), Nt.setZIndex(e, this.get("zIndex")), e
            },
            html: function(t) {
                if (!t) return this._element.innerHTML;
                this._element.innerHTML = t
            },
            getElement: function() {
                return this._element
            },
            _addControl: function(t, e) {
                t.controls[e].push(this._element)
            },
            _removeControl: function(t, e) {
                t.controls[e].removeElement(this._element)
            },
            setOptions: function(t) {
                var e = this;
                if ("string" == typeof t) {
                    var i = t,
                        o = arguments[1];
                    "position" === i ? e.setPosition(o) : e.set(i, o)
                } else n.forEach(t, function(t, i) {
                    e.setOptions(i, t)
                })
            },
            getOptions: function(t) {
                var i = this,
                    o = {};
                return t !== e ? this.get(t) : (n.forEach(i.DEFAULT_OPTIONS, function(t, e) {
                    o[e] = i.get(e)
                }), o)
            },
            zIndex_changed: function(t) {
                var e = this.getElement();
                e && Nt.setZIndex(e, t)
            },
            _setAdvancedOptions: Lt,
            _renderMode_changed: function(t) {
                this._onRenderModeChanged && this._onRenderModeChanged(t)
            }
        }), n.CalcControlPosition = function(t) {
            this._panes = {}, this._mapDiv = t.getElement(), this._mapSize = t.getSize(), Zt.addListener(t, "size_changed", Ot(this._onSizeChanged, this))
        }, n.CalcControlPosition.prototype = {
            constructor: n.CalcControlPosition,
            bind: function(t, e) {
                this._listeners = [Zt.addListener(t, "insert_at", Ot(this.insertAt, this, e, t)), Zt.addListener(t, "set_at", Ot(this.setAt, this, e, t)), Zt.addListener(t, "remove_at", Ot(this.removeAt, this, e, t))]
            },
            unbind: function() {
                Zt.removeListener(this._listeners), this._listeners.length = 0, this._listeners = []
            },
            insertAt: function(t, e, i) {
                var n = this._typeToStyle(t);
                this._arrange(n, e, i)
            },
            setAt: function(t, e, i, n) {
                n && Nt.removeElement(n.parentNode);
                var o = this._typeToStyle(t);
                this._arrange(o, e, i)
            },
            removeAt: function(t, e, i, n) {
                if (n) {
                    var o = this._typeToStyle(t);
                    Nt.removeElement(n.parentNode), "bottom" === o[0] && this._alignBottom(o), "center" === o[1] && this._alignCenter(o)
                }
            },
            update: function(t) {
                this._onSizeChanged(t || this._mapSize)
            },
            _getWrapper: function(t) {
                var e = t.join("_"),
                    i = "border:0 none;margin:0;padding:0;pointer-events:none;";
                switch (e) {
                    case "top_left":
                    case "bottom_left":
                    case "left_center":
                        i += "float:left";
                        break;
                    case "top_right":
                    case "bottom_right":
                    case "right_center":
                        i += "float:right"
                }
                return Nt.createElement("div", i)
            },
            _bottomBaseline: function(t, e) {
                var i = e.offsetHeight;
                if (t.minElement)
                    if (i < t.minHeight) {
                        t.minElement = e, t.minHeight = i;
                        for (var n, o = 0, s = t.element.childNodes.length; o < s; o++)(n = t.element.childNodes[o]) !== e && 1 === n.nodeType && (n.style.marginTop = -(n.offsetHeight - i) + "px")
                    } else e.style.marginTop = -(i - t.minHeight) + "px", e.style.height = i + "px";
                else t.minElement = e, t.minHeight = i, e.style.height = i + "px"
            },
            _arrange: function(t, e, i) {
                var n = this._getPaneInfo(t),
                    o = n.element,
                    s = e.getAt(i),
                    r = t[0],
                    a = t[1],
                    h = this._getWrapper(t);
                "none" !== s.style.pointerEvents && (s.style.pointerEvents = "auto"), h.appendChild(s), Nt.insertAt(o, h, "bottom" !== a ? i : 0), "bottom" === r && this._bottomBaseline(n, h), "center" === a && this._alignCenter(t)
            },
            _typeToStyle: function(t) {
                return t.toLowerCase().split("_")
            },
            _getPaneInfo: function(t) {
                var e = t.join("_"),
                    i = this._panes[e],
                    n = i ? i.element : null;
                if (posPane = this._panes[e], n) return i;
                var o = t[0],
                    s = t[1],
                    r = "position:absolute;z-index:100;margin:0;padding:0;pointer-events:none;";
                if ("center" === s) r += o + ":0;";
                else
                    for (var a = 0, h = t.length; a < h; a++) r += t[a] + ":0;";
                return n = Nt.createElement("div", r), i = {
                    element: n
                }, this._panes[e] = i, this._mapDiv.appendChild(n), i
            },
            _alignCenter: function(t) {
                if ("center" === t[1]) {
                    var e = this._getPaneInfo(t).element,
                        i = t[0],
                        o = this._mapSize,
                        s = Nt.getSize(e);
                    "top" === i || "bottom" === i ? e.style.left = n.round((o.width - s.width) / 2) + "px" : e.style.top = n.round((o.height - s.height) / 2) + "px"
                }
            },
            _alignBottom: function(t) {
                if ("bottom" === t[0]) {
                    for (var e, i = this._getPaneInfo(t), o = [], s = 1 / 0, r = null, a = 0, h = i.element.childNodes.length; a < h; a++) e = i.element.childNodes[a], 1 === e.nodeType && o.push(e);
                    0 !== o.length && (n.forEach(o, function(t) {
                        var e = t.offsetHeight;
                        t.offsetHeight < s && (s = e, r = t)
                    }), r.style.marginTop = 0, r.style.height = s + "px", i.minElement = r, i.minHeight = s, n.forEach(o, function(t) {
                        if (t !== r) {
                            var e = t.offsetHeight;
                            t.style.marginTop = -(e - s) + "px", t.style.height = e + "px"
                        }
                    }))
                }
            },
            _onSizeChanged: function(t) {
                var e = this;
                e._mapSize = t, n.forEach(e._panes, function(t, i) {
                    -1 !== i.indexOf("center") && e._alignCenter(i.split("_"))
                })
            }
        }, n.MapTypeControl = function(t) {
            this.set("id", "nmaptypecontrol-" + n.guid()), this._domListeners = [], this._registryListeners = [], this._registry = null, this._lazyMapTypeId = null, this.DEFAULT_OPTIONS = {
                position: x.TOP_RIGHT,
                mapTypeIds: null,
                style: b.BUTTON,
                hideTime: 2e3
            }, n.CustomControl.apply(this, [t])
        }, At(n.MapTypeControl, n.CustomControl, {
            _beforeSetMap: function(t) {
                if (t) {
                    var e = t.mapTypes;
                    this._registry = e, this._prepareDOM(e), this._bindEvent(e)
                } else this._unbindEvent(), this._registry = null
            },
            _afterSetMap: function(t) {
                t || (this._removeDOMEvents(), this._element.innerHTML = "")
            },
            _addControl: function(t, e) {
                n.CustomControl.prototype._addControl.apply(this, arguments), this._adjustUI(e)
            },
            _adjustUI: function(t) {
                var e = t || this.get("position");
                if (this.get("style") === b.DROPDOWN) switch (e) {
                    case x.BOTTOM_LEFT:
                    case x.BOTTOM_CENTER:
                    case x.BOTTOM_RIGHT:
                        this._mapTypeListWrap.style.top = "auto", this._mapTypeListWrap.style.bottom = "29px";
                        break;
                    default:
                        this._mapTypeListWrap.style.top = "29px", this._mapTypeListWrap.style.bottom = "auto"
                } else switch (e) {
                    case x.BOTTOM_LEFT:
                    case x.BOTTOM_CENTER:
                    case x.BOTTOM_RIGHT:
                        this._subMapTypeWrap.style.top = "-32px";
                        break;
                    default:
                        this._subMapTypeWrap.style.top = "32px"
                }
            },
            _bindEvent: function(t) {
                this._registryListeners = [Zt.addListener(t, "addMapType", Ot(this._onAddMapType, this)), Zt.addListener(t, "removeMapType", Ot(this._onRemoveMapType, this)), Zt.addListener(t, "selectedMapType_changed", Ot(this._onMapTypeChanged, this))]
            },
            _unbindEvent: function() {
                Zt.removeListener(this._registryListeners), this._registryListeners.length = 0
            },
            _onAddMapType: function(t, e) {
                this.get("style") === b.DROPDOWN ? this._addMapTypeList(t, e) : this._addMapTypeButton(t, e), this._lazyMapTypeId && this._lazyMapTypeId === t && (this._onMapTypeChanged(this._registry.getSelectedType()), this._lazyMapTypeId = null, delete this._lazyMapTypeId)
            },
            _onRemoveMapType: function(t, e) {
                this.get("style") === b.DROPDOWN ? this._removeMapTypeList(t, e) : this._removeMapTypeButton(t, e)
            },
            _clearMapType: function() {
                var t = this._registry;
                if (t) {
                    var e = this._mapTypeScheme,
                        i = this;
                    n.forEach(e, function(e, o) {
                        var s = e.subs || {};
                        n.forEach(s, function(e, n) {
                            i._onRemoveMapType(n, t.get(n))
                        }), i._onRemoveMapType(o, t.get(o))
                    }), this._mapTypeScheme = {}
                }
            },
            _onMapTypeChanged: function(t) {
                if (t) {
                    var e = this._registry.getSelectedTypeId(),
                        i = null,
                        o = null,
                        s = null;
                    if (this.get("style") === b.DROPDOWN) i = this._mapTypeScheme[e], o = i.element, this._mapTypeNameWrap.innerHTML = t.name || (t.getName ? t.getName() : e), o.style.backgroundColor = "#f6f6f6", s = this.get("mapTypeElement"), s && (s.style.backgroundColor = "#fff"), this.set("mapTypeElement", o);
                    else {
                        var r = this._getParentMapTypeId(t);
                        if (i = this._mapTypeScheme[r || e], !(o = i.element)) return;
                        s = this.get("mapTypeElement"), s && (s.style.borderColor = "#fff", s.style.backgroundColor = "#fff", s.style.color = "#444"), o.style.borderColor = "#2A7CDD", o.style.backgroundColor = "#2F87EC", o.style.color = "#fff", n.forEach(i.subs, function(t, i) {
                            var n = t.element.getElementsByTagName("img")[0],
                                o = "-checked",
                                s = "-unchecked";
                            e === i && (s = "-checked", o = "-unchecked"), n.src = n.src.replace(o, s)
                        }), this.set("mapTypeElement", o)
                    }
                    this.set("mapTypeId", e)
                }
            },
            _prepareDOM: function(t) {
                this._element.style.margin = "10px", this._element.innerHTML = "", this.get("style") === b.DROPDOWN ? this._prepareDropdown(t) : this._prepareButton(t);
                var e = t.getSelectedTypeId(),
                    i = this.get("mapTypeIds") || t.getTypeIds();
                n.getIndexOfElement(i, e) > -1 ? this._onMapTypeChanged(t.getSelectedType()) : this._lazyMapTypeId = e, this._style = this.get("style"), this._adjustUI()
            },
            _prepareButton: function(t) {
                var e = this.get("mapTypeIds") || t.getTypeIds(),
                    i = "position:relative;z-index:1;padding:0;margin:0;list-style:none;display:block;height:30px;box-sizing:content-box !important;",
                    o = Nt.createElement("ul", i),
                    s = Nt.createElement("ul", i.replace("position:relative", "position:absolute") + "left:0;width:100%;");
                o.style.borderRight = "solid 1px #444", s.style.top = "34px", s.style.display = "none", this._mapTypeWrap = o, this._subMapTypeWrap = s, this._mapTypeScheme = {};
                var r = Ot(this._addMapTypeButton, this);
                n.forEach(e, function(e) {
                    var i = t.get(e);
                    i.uid.split(":").length < 3 && r(e, i)
                }), n.forEach(e, function(e) {
                    var i = t.get(e);
                    i.uid.split(":").length >= 3 && r(e, i)
                }), this._element.appendChild(o), this._element.appendChild(s), this._domListeners = [Zt.addDOMListener(o, "mousedown", Ot(this._onDownButton, this)), Zt.addDOMListener(o, "mouseover", Ot(this._onOverButton, this)), Zt.addDOMListener(o, "mouseout", Ot(this._onOutButton, this)), Zt.addDOMListener(s, "mousedown", Ot(this._onDownCheckbox, this)), Zt.addDOMListener(s, "mouseover", Ot(this._onOverCheckbox, this)), Zt.addDOMListener(s, "mouseout", Ot(this._onOutCheckbox, this))]
            },
            _updateSubMapTypeStyle: function(t) {
                var e = n.keys(t),
                    i = e.length;
                0 !== i && (1 === i ? t[e[0]].listElement.style.border = "solid 1px #444" : n.forEach(e, function(e, n) {
                    var o = t[e].listElement;
                    o.style.borderBottom = n < i - 1 ? "0 none" : "solid 1px #444", n > 0 && (o.style.borderTop = "solid 1px #ddd")
                }))
            },
            _addMapTypeButton: function(t, e) {
                var i = "position:relative;z-index:1;float:left;display:block;margin:0;padding:0;list-style:none;border:solid 1px #444;box-sizing:content-box !important;",
                    n = j + "height:26px;line-height:26px;border:solid 1px #fff;background-color:#fff;text-decoration:none;color:#000;font-size:13px;letter-spacing:-1px;font-family:" + U,
                    o = "<a href='#' style='" + n + "'>{{name}}</a>",
                    s = ["<a href='#' style='" + n.replace("color:#000", "color:#666") + "' title='{{name}}'>", '<img src="' + V + '/maptype-unchecked.png" width="13" height="13" alt="" style="position:absolute;display:block;top:7px;left:7px;width:13px;height:13px;border:0 none;cursor:pointer;' + G + '" />', "<span style='display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0;padding:0;color:#666;font-size:13px;letter-spacing:-1px;font-family:" + U + ";'>{{name}}</span>", "</a>"].join(""),
                    r = this._mapTypeScheme,
                    a = e.name || (e.getName ? e.getName() : t),
                    h = this._getParentMapTypeId(e),
                    l = null,
                    c = null;
                if (h && h !== t) {
                    h = this._getParentMapTypeId(e), l = Nt.createElement("li", i.replace("float:left;", ""));
                    var u = s.replace(/\{\{name\}\}/g, a);
                    "naver:satellite:hybrid" === e.uid && (u = u.replace("-unchecked", "-checked")), l.innerHTML = u, l.style.display = "none", c = l.getElementsByTagName("a")[0], c.style.position = "relative", c.style.paddingLeft = "25px", c.__mapTypeId = t, c.onclick = Ot(this._preventLink, this), r[h] || (r[h] = {
                        element: null,
                        listElement: null,
                        uid: null,
                        subs: {}
                    }), r[h].subs[t] = {
                        element: c,
                        listElement: l
                    }, this._updateSubMapTypeStyle(r[h].subs), this._subMapTypeWrap.appendChild(l)
                } else l = Nt.createElement("li", i), l.style.borderRight = "0 none", l.innerHTML = o.replace("{{name}}", a), c = l.getElementsByTagName("a")[0], c.style.padding = "0 7px", c.__mapTypeId = t, c.onclick = Ot(this._preventLink, this), r[t] ? (r[t].element = c, r[t].uid = e.uid) : r[t] = {
                    element: c,
                    listElement: l,
                    uid: e.uid,
                    subs: {}
                }, this._mapTypeWrap.appendChild(l)
            },
            _removeMapTypeButton: function(t, e) {
                var i = this._getParentMapTypeId(e),
                    n = this._mapTypeScheme[i || t];
                if (i === t) {
                    Nt.removeElement(n.element.parentNode), n.element = null;
                    var o = !1;
                    if (n.subs)
                        for (var s in n.subs)
                            if (n.subs.hasOwnProperty(s) && n.subs[s]) {
                                o = !0;
                                break
                            } o || (n.uid = null)
                } else Nt.removeElement(n.subs[t].listElement), n.subs[t] = null, delete n.subs[t], this._updateSubMapTypeStyle(n.subs)
            },
            _getParentMapTypeId: function(t) {
                var e = this._mapTypeScheme,
                    i = t.uid,
                    n = i.split(":"),
                    o = n[0] + ":" + n[1],
                    s = null;
                for (var r in e)
                    if (e.hasOwnProperty(r) && e[r].uid === o) {
                        s = r;
                        break
                    } return s
            },
            _getButtonElement: function(t) {
                if ("A" === t.tagName && t.__mapTypeId) return t;
                for (; t && "A" !== t.tagName && "DIV" !== t.tagName;) t = t.parentNode;
                return t && t.__mapTypeId ? t : null
            },
            _hideCheckbox: function(e) {
                function i() {
                    for (var t = 0, e = s.length; t < e; t++) s[t].style.display = "none";
                    o.style.display = "none"
                }
                var n = e || 0,
                    o = this._subMapTypeWrap,
                    s = o.getElementsByTagName("li");
                t.clearTimeout(this._hoverTimer), n ? this._hoverTimer = t.setTimeout(i, n) : i()
            },
            _showCheckboxOf: function(t) {
                var e = this._mapTypeScheme[t];
                if (e) {
                    var i = 0;
                    n.forEach(e.subs, function(t) {
                        t.listElement.style.display = "block", i++
                    }), i && (this._subMapTypeWrap.style.display = "block")
                }
            },
            _onDownButton: function(e) {
                var i = Vt.fix(e),
                    o = this._getButtonElement(i.target);
                if (o) {
                    var s = o.__mapTypeId,
                        r = this._mapTypeScheme[s];
                    t.clearTimeout(this._hoverTimer), this._hideCheckbox(), this._showCheckboxOf(s), n.forEach(r.subs, function(t, e) {
                        if (t.element.getElementsByTagName("img")[0].src.indexOf("-checked") > -1) return s = e, !0
                    }), this.setMapTypeId(s)
                }
            },
            _onOverButton: function(e) {
                var i = Vt.fix(e),
                    n = this._getButtonElement(i.target);
                if (n) {
                    var o = this._registry.getSelectedType(),
                        s = this._getParentMapTypeId(o) || this._registry.getSelectedTypeId(),
                        r = this._registry.get(n.__mapTypeId),
                        a = this._getParentMapTypeId(r) || n.__mapTypeId;
                    this._mapTypeScheme[a];
                    s === a && (t.clearTimeout(this._hoverTimer), this._showCheckboxOf(a))
                }
            },
            _onOutButton: function(t) {
                this._hideCheckbox(this._getHideTime())
            },
            _onDownCheckbox: function(t) {
                var e = Vt.fix(t),
                    i = this._getButtonElement(e.target);
                if (i) {
                    var n = this._registry.getSelectedTypeId(),
                        o = i.__mapTypeId;
                    n === o && (o = this._getParentMapTypeId(this._registry.get(o))), this.setMapTypeId(o)
                }
            },
            _onOverCheckbox: function(e) {
                t.clearTimeout(this._hoverTimer)
            },
            _onOutCheckbox: function(t) {
                this._hideCheckbox(this._getHideTime())
            },
            _prepareDropdown: function(t) {
                var e = this.get("mapTypeIds") || t.getTypeIds(),
                    i = t.getSelectedType(),
                    o = "\uc9c0\ub3c4 \uc720\ud615 \ubcc0\uacbd";
                i && (o = i.name || (i.getName ? i.getName() : t.getSelectedTypeId()));
                var s = Nt.createElement("div", j + "position:relative;z-index:0;"),
                    r = Nt.createElement("ul", "position:absolute;z-index:1;top:29px;left:0;padding:0;margin:0;list-style:none;display:none;width:100%;border-top:solid 1px #444;border-bottom:solid 1px #444;box-sizing:content-box !important;"),
                    a = Nt.createElement("a", "text-decoration:none;color:#000;font-size:13px;letter-spacing:-1px;display:block;padding:0 21px 0 9px;text-align:left;background-color:#fff;border:solid 1px #444;height:28px;line-height:28px;min-width:69px !important;box-sizing:content-box !important;font-family:" + U);
                a.innerHTML = "<span>" + o + '</span><img src="' + V + '/maptype-arrow-down.png" width="8" height="4" alt="\ud3bc\uce58\uae30" style="position:absolute;z-index:0;top:14px;right:8px;width:8px;height:4px;' + G + '" />', a.href = "#", a.title = "\uc9c0\ub3c4 \uc720\ud615 \ubcc0\uacbd", a.onclick = Ot(this._preventLink, this), s.appendChild(a), this._mapTypeNameWrap = a.getElementsByTagName("span")[0], this._dropDownArrow = a.getElementsByTagName("img")[0], this._mapTypeListWrap = r, this._mapTypeScheme = {};
                var h = Ot(this._addMapTypeList, this);
                n.forEach(e, function(e) {
                    h(e, t.get(e))
                }), this._element.appendChild(s), this._element.appendChild(r), this._domListeners = [Zt.addDOMListener(a, "mousedown", Ot(this._onToggleList, this)), Zt.addDOMListener(r, "mousedown", Ot(this._onDownListItem, this)), Zt.addDOMListener(r, "mouseover", Ot(this._onOverListItem, this)), Zt.addDOMListener(r, "mouseout", Ot(this._onOutListItem, this))]
            },
            _addMapTypeList: function(t, e) {
                var i = j + "height:28px;line-height:28px;background-color:#fff;text-decoration:none;color:#666;font-size:13px;letter-spacing:-1px;padding:0 9px;font-family:" + U,
                    n = "<a href='#'' style='" + i + "'>{{name}}</a>",
                    o = this._mapTypeScheme,
                    s = e.name || (e.getName ? e.getName() : t),
                    r = Nt.createElement("li", "display:block;margin:0;padding:0;list-style:none;background-color:#fff;border:solid 1px #444;box-sizing:content-box !important;");
                r.innerHTML = n.replace("{{name}}", s), r.style.borderTop = "0 none", r.style.borderBottom = "0 none";
                var a = r.getElementsByTagName("a")[0];
                a.__mapTypeId = t, a.onclick = Ot(this._preventLink, this), o[t] = {
                    element: a,
                    uid: e.uid,
                    listElement: r
                }, this._mapTypeListWrap.appendChild(r)
            },
            _removeMapTypeList: function(t, e) {
                var i = this._mapTypeScheme[t];
                Nt.removeElement(i.listElement), i = null, this._mapTypeScheme[t] = null, delete this._mapTypeScheme[t]
            },
            _toggleList: function(t) {
                var e = "-down",
                    i = "-up";
                t || (e = "-up", i = "-down"), Nt.visible(this._mapTypeListWrap, t), this._dropDownArrow.src = this._dropDownArrow.src.replace(e, i)
            },
            _onToggleList: function() {
                this._toggleList(!1 === Nt.visible(this._mapTypeListWrap))
            },
            _onDownListItem: function(t) {
                var e = Vt.fix(t),
                    i = this._getButtonElement(e.target);
                if (i) {
                    var n = i.__mapTypeId;
                    this.setMapTypeId(n), this._toggleList(!1)
                }
            },
            _onOverListItem: function(t) {
                var e = Vt.fix(t),
                    i = this._getButtonElement(e.target);
                i && (i.style.backgroundColor = "#f6f6f6")
            },
            _onOutListItem: function(t) {
                var e = Vt.fix(t),
                    i = this._getButtonElement(e.target);
                i && i.__mapTypeId !== this._registry.getSelectedTypeId() && (i.style.backgroundColor = "#fff")
            },
            _preventLink: function(t) {
                Vt.fix(t).preventDefault()
            },
            setMapTypeId: function(t) {
                t !== this._registry.getSelectedTypeId() && this._registry.setSelectedTypeId(t)
            },
            mapTypeIds_changed: function(t) {
                var e = this;
                if (e._registry) {
                    var i = e._registry,
                        o = t || i.getTypeIds();
                    e._clearMapType(), e._lazyMapTypeId = i.getSelectedTypeId(), n.forEach(o, function(t) {
                        var n = i.get(t);
                        e._onAddMapType(t, n)
                    })
                }
            },
            _removeDOMEvents: function() {
                n.forEach(this._domListeners, function(t) {
                    Zt.removeDOMListener(t)
                }), this._domListeners.length = 0
            },
            style_changed: function(t) {
                this._element && (this._style !== t && (this._removeDOMEvents(), Vt.endTouch(), this._prepareDOM(this._registry)), this._style = t)
            },
            _getHideTime: function() {
                return Math.max(parseInt(this.getOptions("hideTime"), 10), 150)
            }
        });
    var Gt = [
            ["\ubd80\ub3d9\uc0b0", 13],
            ["\uac70\ub9ac", 11],
            ["\uc74d,\uba74,\ub3d9", 9],
            ["\uc2dc,\uad70,\uad6c", 6],
            ["\uc2dc,\ub3c4", 3],
            ["\uad6d\uac00", 1]
        ],
        Wt = [
            ["\ubd80\ub3d9\uc0b0", 17],
            ["\uac70\ub9ac", 15],
            ["\uc74d,\uba74,\ub3d9", 13],
            ["\uc2dc,\uad70,\uad6c", 10],
            ["\uc2dc,\ub3c4", 7],
            ["\uad6d\uac00", 5]
        ];
    n.ZoomControl = function(t) {
            this.DEFAULT_OPTIONS = {
                position: x.TOP_LEFT,
                style: b.LARGE,
                legendDisabled: !1
            };
            var e = !(!t || !t.useStyleMap),
                i = this.useStyleMap = e ? t.useStyleMap : n.USE_STYLE_MAP;
            this.__LEGEND_SCHEME__ = i ? Wt : Gt, this.SCALER_GAP = 10, this._domListeners = [], this.set("legendAllowed", !0), n.CustomControl.apply(this, [t])
        }, At(n.ZoomControl, n.CustomControl, {
            _beforeSetMap: function(t) {
                if (t) {
                    if (t.isNotReady && t.isNotReady()) return;
                    this._prepareDOM(), this._bindDOMEvent()
                } else this._unbindDOMEvent(), this._destroyDOM()
            },
            _afterSetMap: function(t) {
                if (t) {
                    if (t.isNotReady && t.isNotReady()) return;
                    var e = t.getMapModel();
                    this.bindTo("minZoom", e, "userMinZoom"), this.bindTo("maxZoom", e, "userMaxZoom"), this.bindTo("mapTypeMinZoom", e), this.bindTo("mapTypeMaxZoom", e), this.bindTo("zoom", t), this.bindTo("mapType", t), this._adjustLegend()
                } else this.unbind("minZoom"), this.unbind("maxZoom"), this.unbind("mapTypeMinZoom"), this.unbind("mapTypeMaxZoom"), this.unbind("zoom"), this.unbind("mapType", t)
            },
            _addControl: function(t, e) {
                n.CustomControl.prototype._addControl.apply(this, arguments), this._adjustLegend(e)
            },
            _prepareDOM: function() {
                var t = function(t, e, i) {
                        var n = Nt.createElement(t, e);
                        return i && (n.innerHTML = i), n
                    },
                    e = function(t, e) {
                        for (var i = 0, n = e.length; i < n; i++) t.appendChild(e[i])
                    },
                    i = function(t, e, i, n) {
                        var o = {
                            url: V + "/zoom-" + t,
                            width: e || 0,
                            height: i || 0,
                            alt: n || ""
                        };
                        return '<img src="{{url}}" width="{{width}}" height="{{height}}" alt="{{alt}}" style="margin:0;padding:0;border:solid 0 transparent;display:block;box-sizing:content-box !important;max-width:none !important;max-height:none !important;min-width:0 !important;min-height:0 !important;width:{{width}}px;height:{{height}}px;" />'.replace(/{{(\w+)}}/g, function(t, e) {
                            return o[e]
                        })
                    },
                    n = "position:relative;z-index:2;width:28px;height:22px;cursor:pointer;display:block;overflow:hidden;box-sizing:content-box !important;",
                    o = "position:absolute;top:7px;bottom:7px;left:12px;width:4px;height:100%;display:block;",
                    s = t("div", "position:relative;z-index:0;width:28px;margin:10px;border:solid 1px #444;box-sizing:content-box !important;"),
                    r = t("a", n + "border-bottom:solid 1px #cacdd1;", i("in-large-normal.png", 28, 22, "\uc9c0\ub3c4 \ud655\ub300")),
                    a = t("div", "position:relative;width:28px;height:118px;overflow:hidden;margin:0;padding:7px 0;background-color:#fff;cursor:pointer;box-sizing:content-box !important;"),
                    h = t("div", o + "background-color:#2F87EC;"),
                    l = t("div", o + "background-color:#CACDD1;"),
                    c = t("a", "position:absolute;left:4px;width:18px;height:10px;top:27px;border:solid 1px #444;cursor:move;display:block;overflow:hidden;box-sizing:content-box !important;", i("handle.png", 18, 10, "\uc9c0\ub3c4 \ud655\ub300/\ucd95\uc18c \uc2ac\ub77c\uc774\ub354")),
                    u = t("a", n + "border-top:solid 1px #cacdd1;", i("out-large-normal.png", 28, 22, "\uc9c0\ub3c4 \ucd95\uc18c")),
                    p = t("div", "position:absolute;top:22px;width:44px;height:0;overflow:visible;display:none;"),
                    d = t("div", "display:block;margin:0;padding:0;");
                Nt.disableSelection(s), r.href = "#", u.href = "#", c.href = "#", e(a, [h, l, c]), e(s, [r, a, u]), p.appendChild(d), s.appendChild(p), this._doms = {
                    wrap: s,
                    zoomIn: r,
                    zoomOut: u,
                    zoomInImg: r.getElementsByTagName("img")[0],
                    zoomOutImg: u.getElementsByTagName("img")[0],
                    scaler: a,
                    scalerOn: h,
                    scalerOff: l,
                    slider: c,
                    legend: p,
                    legendInner: d
                }, this.style_changed(this.get("style") || b.LARGE), this._element.appendChild(s), this._drawLegend()
            },
            _createLegendItem: function(t, e) {
                var i = this.SCALER_GAP,
                    n = this.useStyleMap,
                    o = n ? 21 : 14,
                    s = this.get("maxZoom") || o,
                    r = Nt.createElement("div", "position:absolute;top:0;left:0;z-index:0;margin:0;padding:0;border:solid 0 transparent;display:block;box-sizing:content-box !important;width:44px;height:17px;overflow:hidden;"),
                    a = t || "",
                    h = e || 1,
                    l = (s - o) * i + 3,
                    c = Nt.createElement("img", X + G + "width:44px;height:17px;"),
                    u = Nt.createElement("span", j + "font-family:" + U + ";position:relative;z-index:2;line-height:17px;color:#fff;font-size:11px;padding:0 4px 0 0;text-align:center;letter-spacing:-1px;");
                return c.src = V + "/zoom-legend-left-normal.png", c.alt = "", u.innerHTML = a, r.appendChild(c), r.appendChild(u), r.style.top = l + i * (o - h) + "px", {
                    zoom: h,
                    element: r,
                    imgEl: c,
                    textEl: u
                }
            },
            _drawLegend: function() {
                var t = this._doms.legendInner,
                    e = [],
                    i = Ot(this._createLegendItem, this);
                t.innerHTML = '<h4 style="visibility:hidden;width:0;height:0;overflow:hidden;margin:0;padding:0;">\uc9c0\ub3c4 \ucee8\ud2b8\ub864\ub7ec \ubc94\ub840</h4>', n.forEach(this.__LEGEND_SCHEME__, function(n, o) {
                    var s = n[0],
                        r = n[1],
                        a = i(s, r);
                    0 === o && (a.imgEl.src = a.imgEl.src.replace("-normal", "-on")), a.zoom = r, e.push(a), t.appendChild(a.element)
                }), this.__legends__ = e, this._adjustLegend()
            },
            _bindDOMEvent: function() {
                var t = (this.get("map"), this._doms),
                    e = t.zoomIn,
                    i = t.zoomOut,
                    n = t.scaler,
                    o = t.slider,
                    s = Zt.addDOMListener,
                    r = function(t) {
                        Vt.stop(t)
                    };
                this._domListeners = [s(e, "click", r), s(i, "click", r), s(e, "mousedown", Ot(this._onClickZoomIn, this)), s(i, "mousedown", Ot(this._onClickZoomOut, this)), s(n, "mouseover", Ot(this._onMouseOver, this)), s(n, "mouseout", Ot(this._onMouseOut, this)), s(n, "mousedown", Ot(this._onMouseDownScaler, this)), s(o, "mousedown", Ot(this._onMouseDownSlider, this)), s(o, "click", r)]
            },
            _unbindDOMEvent: function() {
                Zt.removeDOMListener(this._domListeners), this._domListeners.length = 0, this._domListeners = []
            },
            _onClickZoomIn: function(t) {
                Vt.stop(t);
                var e = this.getMap(),
                    i = e.getZoom() + 1;
                e.setZoom(i, !0)
            },
            _onClickZoomOut: function(t) {
                Vt.stop(t);
                var e = this.getMap(),
                    i = e.getZoom() - 1;
                e.setZoom(i, !0)
            },
            _onMouseOver: function() {
                !this.get("legendDisabled") && this.get("legendAllowed") && (this._doms.legend.style.display = "")
            },
            _onMouseOut: function() {
                !this.get("legendDisabled") && this.get("legendAllowed") && (this._doms.legend.style.display = "none")
            },
            _onMouseDownScaler: function(t) {
                t = Vt.fix(t), t.stop();
                var e, i = t.target || t.srcElement,
                    n = t.pos(),
                    o = this._doms.scaler,
                    s = n.pageY - Nt.getOffset(o).y;
                if (i !== this._doms.slider) {
                    e = Math.floor(s / this.SCALER_GAP);
                    var r = this.getMap(),
                        a = r.getZoom(),
                        h = this.get("maxZoom") - e;
                    h !== a && r.setZoom(h, !0)
                }
            },
            _onMouseDownSlider: function(t) {
                t = Vt.fix(t), t.stop();
                var e = this,
                    n = this._doms.scaler,
                    o = this.getMap(),
                    s = [Zt.addDOMListener(i, "mousemove", function(t) {
                        t = Vt.fix(t), t.stop();
                        var i, s = t.target || t.srcElement,
                            r = t.pos(),
                            a = r.pageY - Nt.getOffset(n).y;
                        s !== n && s.parentNode !== n || (i = Math.floor((a + 2) / e.SCALER_GAP), o.setZoom(e.get("maxZoom") - i, !0))
                    }), Zt.addDOMListener(i, "mouseup", function(t) {
                        Zt.removeDOMListener(s), s = null
                    })]
            },
            zoom_changed: function(t) {
                var i, n = this.get("maxZoom");
                if (n !== e && (i = n - t), !(t === e || n === e || i < 0)) {
                    var o = this._doms,
                        s = (this.getMap(), this.get("minZoom")),
                        r = this.SCALER_GAP,
                        a = i * r + 4,
                        h = o.zoomIn,
                        l = o.zoomOut,
                        c = o.zoomInImg,
                        u = o.zoomOutImg;
                    t === s ? (l.style.cursor = "default", c.src = c.src.replace("-dimmed", "-normal"), u.src = u.src.replace("-normal", "-dimmed")) : t === n ? (h.style.cursor = "default", c.src = c.src.replace("-normal", "-dimmed"), u.src = u.src.replace("-dimmed", "-normal")) : (h.style.cursor = "pointer", l.style.cursor = "pointer", c.src = c.src.replace("-dimmed", "-normal"), u.src = u.src.replace("-dimmed", "-normal")), o.slider.style.top = a + "px", o.scalerOff.style.height = a + "px"
                }
            },
            minZoom_changed: function() {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            maxZoom_changed: function() {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            mapTypeMinZoom_changed: function(t) {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            mapTypeMaxZoom_changed: function(t) {
                this._setScalerHeight(), this.zoom_changed(this.get("zoom"))
            },
            mapType_changed: function(t) {
                var e = this.useStyleMap,
                    i = !t || "\xa9 NAVER Corp." !== t.vendor || t.projection !== n.UTMK_NAVER;
                e && (i = !t || "\xa9 NAVER Corp." !== t.vendor || t.projection !== n.EPSG3857), this.get("legendAllowed") === i && this.set("legendAllowed", !i)
            },
            legendAllowed_changed: function(t) {
                this._doms && !t && this.get("legendDisabled") && Nt.visible(this._doms.legend, !1)
            },
            style_changed: function(t) {
                var e = this._doms;
                if (e && e.wrap) {
                    var i = e.scaler,
                        n = e.zoomIn,
                        o = e.zoomInImg,
                        s = e.zoomOut,
                        r = e.zoomOutImg,
                        a = 22,
                        h = "block",
                        l = "solid 1px #cacdd1",
                        c = "-small",
                        u = "-large";
                    t === b.SMALL && (h = "none", l = "0 none", a = 28, c = "-large", u = "-small"), i.style.display = h, n.style.height = a + "px", n.style.borderBottom = l, o.style.height = a + "px", o.height = a, o.src = o.src.replace(c, u), s.style.height = a + "px", r.style.height = a + "px", r.height = a, r.src = r.src.replace(c, u)
                }
            },
            _setScalerHeight: function() {
                var t = this.get("minZoom"),
                    i = this.get("maxZoom"),
                    n = this.get("mapTypeMaxZoom"),
                    o = 119;
                i !== e && t !== e && n !== e && (o = (i - t) * this.SCALER_GAP + 6, this._doms.scaler.style.height = o + "px", this._doms.scalerOn.style.height = o + "px", this._adjustLegend())
            },
            _adjustLegend: function(t) {
                var e = this.getMap();
                if (!(!e || e.isCustomMapType && e.isCustomMapType())) {
                    var i = t || this.get("position"),
                        o = this.get("minZoom"),
                        s = this.get("maxZoom");
                    n.forEach(this.__legends__, function(t) {
                        var e = t.zoom,
                            i = t.element;
                        i.style.visibility = e > s || e < o ? "hidden" : "visible"
                    });
                    var r = this._doms.legend,
                        a = 36,
                        h = "-left-",
                        l = "-right-",
                        c = "0 0 0 4px";
                    switch (i) {
                        case x.TOP_RIGHT:
                        case x.RIGHT_TOP:
                        case x.BOTTOM_RIGHT:
                        case x.RIGHT_BOTTOM:
                        case x.RIGHT_CENTER:
                            a = -51, h = "-right-", l = "-left-", c = "0 4px 0 0"
                    }
                    r.style.left = a + "px", this.__legends__ && n.forEach(this.__legends__, function(t) {
                        var e = t.imgEl,
                            i = t.textEl;
                        e.src = e.src.replace(h, l), i.style.padding = c
                    })
                }
            },
            _destroyDOM: function() {
                this._doms = null, delete this._doms, this._element.innerHTML = "", this._doms = {}
            }
        }), n.LogoControl = function(t) {
            this.DEFAULT_OPTIONS = {
                position: x.BOTTOM_RIGHT
            }, n.CustomControl.apply(this, arguments)
        }, At(n.LogoControl, n.CustomControl, {
            _beforeSetMap: function(t) {
                t ? this._bindEvent(t) : this._unbindEvent()
            },
            _bindEvent: function(t) {
                this.bindTo("mapType", t)
            },
            _unbindEvent: function(t) {
                this.unbind("mapType")
            },
            _createElement: function() {
                var t = V + "/naver-normal-new.png",
                    e = "display:block;width:48px;height:17px;overflow:hidden;",
                    i = Nt.createElement("a", e + "margin:0 5px 5px 12px;");
                return i.href = "https://ssl.pstatic.net/static/maps/mantle/notice/legal.html", i.target = "_blank", i.innerHTML = '<img src="' + t + '" width="48" height="17" alt="NAVER" style="' + e + "border:0 none;margin:0;padding:0;" + G + '" />', this._logoImg = i.getElementsByTagName("img")[0], i
            },
            mapType_changed: function(t) {
                t && (t.darktheme ? this._logoImg.src = this._logoImg.src.replace("-normal-new.png", "-dark-new.png") : this._logoImg.src = this._logoImg.src.replace("-dark-new.png", "-normal-new.png"))
            }
        }), n.MapDataControl = function(t) {
            this.DEFAULT_OPTIONS = {
                position: x.BOTTOM_RIGHT
            }, this.POPUP_PADDING = 15, this._providers = {}, n.CustomControl.apply(this, arguments)
        }, At(n.MapDataControl, n.CustomControl, {
            _afterSetMap: function(t) {
                t ? (this.bindTo("mapType", t), this.bindTo("size", t), this._listeners = [Zt.addListener(t, "addLayer", Ot(this._onAddLayer, this)), Zt.addListener(t, "removeLayer", Ot(this._onRemoveLayer, this)), Zt.addListener(t, "idle", Ot(this._onIdle, this))], t.getElement().appendChild(this._popupEl), this._syncToLayers(t.layers)) : (this.unbind("mapType"), this.unbind("size"), Zt.removeListener(this._listeners), this._popupEl.parentElement.removeChild(this._popupEl))
            },
            _onIdle: function() {
                n.forEach(this._providers, function(t, e) {
                    t.checkValid()
                })
            },
            _createElement: function() {
                var t = this,
                    e = function() {
                        var t = Nt.createElement("div", "margin:0;padding:0 0 2px 10px;height:19px;line-height:19px;color:#444;font-family:" + U + ";font-size:11px;clear:both;white-space:nowrap;pointer-events:none;");
                        return t.className = "map_copyright", t
                    }();
                return t._viewMoreAnchor = function() {
                    var e = Nt.createElement("a", "font-family:" + U + ";font-size:11px;line-height: 19px;margin:0 0 0 5px;padding:0;color:#444;float:left;pointer-events:auto;text-decoration:underline;display:none;");
                    return e.setAttribute("href", "#"), Nt.setText(e, "\ub354\ubcf4\uae30"), Zt.addDOMListener(e, "click", function(e) {
                        Vt.preventDefault(e), t._toggleViewMoreEl()
                    }), e
                }(), t._popupEl = function() {
                    var e = Nt.createElement("div", "border:1px solid #292930;background:#fff;padding:" + t.POPUP_PADDING + "px;color:#333;position:absolute;font-size:11px;max-width:350px !important;line-height:1.5;max-height:300px !important;clear:both;display:none"),
                        i = Nt.createElement("h5", "font-size: 12px;margin-top: 0px;margin-bottom: 10px;"),
                        n = Nt.createElement("a", "position:absolute;top:8px;right:8px;width:14px;height:14px;font-size:14px;line-height:14px;display:block;overflow:hidden;color:#444;text-decoration:none;font-weight:bold;text-align:center;"),
                        o = Nt.createElement("div");
                    return Nt.setText(i, "\uc9c0\ub3c4 \ub370\uc774\ud130"), n.setAttribute("href", "#"), Nt.setText(n, "x"), Zt.addDOMListener(n, "click", function(t) {
                        Vt.stop(t), Nt.visible(e, !1)
                    }), e.appendChild(i), e.appendChild(n), e.appendChild(o), e
                }(), e.appendChild(this._viewMoreAnchor), e
            },
            size_changed: function(t) {
                this._layout(t), this._updatePopupSize()
            },
            mapType_changed: function(t) {
                if (this.getMap()) {
                    var e = this._providers.basemap;
                    e ? e.setMapType(this.get("mapType")) : this._providers.basemap = new n.MapDataProvider(this), this._adjColor(t), this._layout()
                }
            },
            _adjColor: function(t) {
                var e = t,
                    i = "#444";
                e.darktheme && (i = "#fff"), this._element.style.color = i, this._viewMoreAnchor.style.color = i, n.forEach(this._providers, function(t, e) {
                    t.setColor(i)
                })
            },
            _syncToLayers: function(t) {
                var e = this,
                    i = t.getLayerNames();
                n.forEach(this._providers, function(t, o) {
                    if ("basemap" !== o) {
                        var s = n.getIndexOfElement(i, o);
                        s < 0 ? e._removeProvider(o) : i.splice(s, 1)
                    }
                }), n.forEach(i, function(i) {
                    e._addProvider(t.get(i))
                }), this._layout()
            },
            _addProvider: function(t) {
                var e = t.get("name");
                this._providers[e] || (this._providers[e] = new n.MapDataProvider(this, t.getLayerType()))
            },
            _removeProvider: function(t) {
                this._providers[t] && (this._providers[t].setMapType(null), this._providers[t] = null, delete this._providers[t])
            },
            _onAddLayer: function(t) {
                this._addProvider(t), this._layout()
            },
            _onRemoveLayer: function(t) {
                this._removeProvider(t)
            },
            _layout: function() {
                var t = this.getMap().getSize(),
                    e = t.width < 300;
                Nt.visible(this._viewMoreAnchor, e), n.forEach(this._providers, function(t, i) {
                    t.setVisible(!e)
                })
            },
            _toggleViewMoreEl: function() {
                Nt.toggle(this._popupEl), this._updatePopupSize()
            },
            _updatePopupSize: function() {
                if (Nt.visible(this._popupEl)) {
                    var t = this.getMap().getSize(),
                        e = 4 * this.POPUP_PADDING;
                    this._popupEl.style.width = n.round(t.width - e) + "px";
                    var i = Nt.getSize(this._popupEl),
                        o = t.height / 2 - i.height / 2,
                        s = t.width / 2 - i.width / 2;
                    Nt.setOffset(this._popupEl, kt(n.round(s), n.round(o)))
                }
            },
            getElement: function() {
                return this._element
            },
            getPopupElement: function() {
                return this._popupEl
            }
        }), n.MapDataProvider = function(t, e) {
            this._isBasemap = !1, this._items = [], this._control = t, e || (this._isBasemap = !0, e = t.get("mapType")), this._createElement(), this.setMapType(e)
        }, At(n.MapDataProvider, n.KVO, {
            _createElement: function() {
                var t = this._control.getElement();
                this._isBasemap && (this._vendorElement = Nt.createElement("div", "float:left"), t.insertBefore(this._vendorElement, t.firstChild)), this._element = Nt.createElement("div", "float:left"), t.appendChild(this._element)
            },
            setMapType: function(t) {
                this.set("mapType", t)
            },
            setVisible: function(t) {
                Nt.visible(this._element, t)
            },
            setColor: function(t) {
                n.forEach(this._items, function(e) {
                    e.el.style.color = t
                }), this._vendorElement && (this._vendorElement.firstChild.style.color = t)
            },
            mapType_changed: function(t) {
                t ? (this._isBasemap && this._removeItemElements(), this._create(t), this.checkValid()) : this._destroy()
            },
            _create: function(t) {
                var e = t,
                    o = i.createDocumentFragment(),
                    s = i.createDocumentFragment(),
                    r = this._control.getPopupElement().getElementsByTagName("div")[0];
                if (n.forEach(e.provider, Ot(function(t, e) {
                        var i = this._createItemElements(t),
                            r = t.bounds && [];
                        if (t.bounds) {
                            !n.getLiteralType(t.bounds) && t.bounds.length ? n.forEach(t.bounds, function(t) {
                                r.push(n.box(t))
                            }) : r = [n.box(t.bounds)]
                        }
                        this._items.push({
                            el: i[0],
                            cloneEl: i[1],
                            bounds: r,
                            exclude: t.exclude
                        }), o.appendChild(i[0]), s.appendChild(i[1])
                    }, this)), this._isBasemap) {
                    var a = this._createItemElements({
                        title: t.vendor || ""
                    });
                    this._items.push({
                        el: a[0],
                        cloneEl: a[1]
                    }), this._vendorElement.appendChild(a[0]), s.insertBefore(a[1], s.firstChild), r.insertBefore(s, r.firstChild)
                } else r.appendChild(s);
                this._element.appendChild(o)
            },
            _createItemElements: function(t) {
                var e, i;
                return t.link ? (e = Nt.createElement("a", "pointer-events:auto;white-space:pre;"), e.setAttribute("target", "_blank"), e.setAttribute("href", t.link)) : e = Nt.createElement("span", "white-space:pre;"), It.browser.msie && (e.style.opacity = "0.99"), i = e.cloneNode(), i.style.color = "#444", i.style.float = "left", Nt.setText(e, t.title), Nt.setText(i, t.title), [e, i]
            },
            _removeItemElements: function() {
                n.forEach(this._items, function(t) {
                    Nt.removeElement(t.el), Nt.removeElement(t.cloneEl), t = null
                }), this._items.length = 0, this._items = []
            },
            checkValid: function() {
                var t = this._control.getMap().getBounds();
                n.forEach(this._items, function(e) {
                    var i = !1;
                    e.bounds && (n.forEach(e.bounds, function(n) {
                        var o = null;
                        o = n instanceof Rt ? Dt.bounds(n.getSW(), n.getNE()) : n, i = e.exclude ? !o.hasBounds(t) : o.intersects(t)
                    }), Nt.visible(e.el, i), Nt.visible(e.cloneEl, i))
                })
            },
            _destroy: function() {
                this._removeItemElements(), Nt.removeElement(this._element), this._isBasemap && Nt.removeElement(this._vendorElement), this._items = null, delete this._items
            }
        }), n.ScaleControl = function(t) {
            this._IMG_SCALE = [V + "/scale-normal-l.png", V + "/scale-normal-b.png", V + "/scale-normal-r.png"], this._SCALE_SIZE = 50, this._MAX_SCALE_SIZE = 100, this._textEl = null, this._textShadowCss = "-1px 0 rgba(255, 255, 255, 0.3), 0 1px rgba(255, 255, 255, 0.3), 1px 0 rgba(255, 255, 255, 0.3), 0 -1px rgba(255, 255, 255, 0.3)", this.DEFAULT_OPTIONS = {
                position: x.BOTTOM_RIGHT
            }, n.CustomControl.apply(this, arguments)
        }, At(n.ScaleControl, n.CustomControl, {
            getScaleText: function() {
                var t = this._textEl;
                return t ? t.innerHTML : ""
            },
            _afterSetMap: function(t) {
                if (t) {
                    var e = t.getMapModel();
                    this.bindTo(["mapTypeMinZoom", "mapTypeMaxZoom", "mapSystemProjection", "projection", "tileSize"], e), this.bindTo(["zoom", "center", "mapType"], t)
                } else this.unbind(["mapTypeMinZoom", "mapTypeMaxZoom", "projection", "tileSize", "zoom", "center", "mapType"])
            },
            zoom_changed: function() {
                this._update()
            },
            center_changed: function() {
                this.get("map");
                this.get("projection").pointPerMeter || this._update()
            },
            projection_changed: function() {
                this.get("mapSystemProjection") && (this._calcPointPerMeter(), this._update())
            },
            tileSize_changed: function() {
                this.get("mapSystemProjection") && (this._calcPointPerMeter(), this._update())
            },
            mapType_changed: function(t) {
                if (t) {
                    var e = "#000",
                        i = this._textShadowCss,
                        o = "-dark-",
                        s = "-normal-";
                    t.darktheme && (e = "#fff", i = i.replace(/rgba\(255, 255, 255, 0\.3/g, "rgba(0, 0, 0, 0.15"), o = "-normal-", s = "-dark-"), this._textEl.style.color = e;
                    try {
                        this._textEl.style.textShadow = i
                    } catch (t) {}
                    n.forEach(this._barEls, function(t) {
                        t.src = t.src.replace(o, s)
                    })
                }
            },
            _calcPointPerMeter: function(t, e) {
                var i = t || this.get("projection"),
                    n = e || this.get("tileSize");
                if (i && n) {
                    if (!i.name || i.name.indexOf("EPSG:3857") > -1 || !i.pointPerMeter) return void(this._pointPerMeter = null);
                    var o = n.width,
                        s = 256 / o;
                    this._pointPerMeter = i.pointPerMeter * s
                }
            },
            _update: function() {
                var t, e = this.get("map").getZoom(),
                    i = this.get("projection"),
                    n = this.getElement(),
                    o = this._barEls[1],
                    s = parseInt(n.style.width, 10),
                    r = 52,
                    a = r - 8;
                if ("UTMK_NAVER" === i.name || "UTMK" === i.name) {
                    s !== r && (n.style.width = r + "px", o.style.width = a + "px");
                    var h = this._calcMeterPerPixel(e);
                    t = this._SCALE_SIZE * h
                } else {
                    var l = this._calcMeterPerPixel(e, this._MAX_SCALE_SIZE);
                    t = this._getRoundNum(l), r = Math.round(this._MAX_SCALE_SIZE * (t / l)), a = r - 8, n.style.width = r + "px", o.style.width = a + "px", o.width = a
                }
                t = this._addUnitToDistance(t), Nt.setText(this._textEl, t)
            },
            _addUnitToDistance: function(t) {
                return t = t > 1e3 ? n.round(t / 100) / 10 + "km" : n.round(10 * t) / 10 + "m"
            },
            _calcMeterPerPixel: function(t, e) {
                var i = this.get("map"),
                    o = this.get("projection"),
                    s = this.get("mapSystemProjection"),
                    r = 0;
                if (this._pointPerMeter) r = this._pointPerMeter / s.scaleUp(1, t);
                else {
                    var a = i.getCenterPoint(),
                        h = s.scaleUp(a.clone(), t),
                        l = s.scaleDown(new n.Point(h.x + e, h.y), t),
                        c = s.fromPointToCoord(a),
                        u = s.fromPointToCoord(l);
                    r = o.getDistance ? o.getDistance(c, u) : 0
                }
                return r
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    i = t / e;
                return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
            },
            _createElement: function() {
                var t = "position:absolute;left:0;bottom:0;z-index:2;display:block;width:4px;height:10px;overflow:hidden;margin:0;padding:0;border:0 none;" + G,
                    e = "text-shadow:" + this._textShadowCss + ";",
                    i = this._IMG_SCALE,
                    n = Nt.createElement("div", "position:relative;width:52px;height:14px;margin:0 12px 7px 2px;overflow:hidden;");
                n.innerHTML = ["<span style='display:block;margin:0;padding:0 4px;text-align:center;font-size:10px;line-height:11px;font-family:" + U + ";font-weight:bold;color:#000;" + e + "'></span>", '<img src="' + i[1] + '" width="44" height="4" alt="" style="' + t.replace("h:4px", "h:44px").replace("t:10px", "t:4px").replace("left:0", "left:4px;") + '" />', '<img src="' + i[0] + '" width="4" height="10" alt="" style="' + t + '" />', '<img src="' + i[2] + '" width="4" height="10" alt="" style="' + t.replace("left:", "right:") + '" />'].join(""), this._textEl = n.getElementsByTagName("span")[0];
                var o = n.getElementsByTagName("img");
                return this._barEls = [o[1], o[0], o[2]], n
            }
        }), n.DrawingUtil = {
            getDrawingType: function() {
                if (!this._drawingType) {
                    var t = "NONE";
                    this.isSupportedSVG() ? t = "SVG" : this.isSupportedVML() && (t = "VML"), this._drawingType = t
                }
                return this._drawingType
            },
            isSupportedSVG: function() {
                return i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
            },
            isSupportedVML: function() {
                if (this.__isSupportedVML === e) {
                    var t = i.createElement("div");
                    t.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
                    var n = t.firstChild;
                    n.style.behavior = "url(#default#VML)", this.__isSupportedVML = !n || "object" == typeof n.adj
                }
                return this.__isSupportedVML
            },
            isSupportedCanvas: function() {
                if (this.__isSupportedCanvas === e) {
                    var t = i.createElement("canvas");
                    this.__isSupportedCanvas = !(!t.getContext || !t.getContext("2d"))
                }
                return this.__isSupportedCanvas
            },
            getBounds: function(t) {
                var e, i, n, o = t.length,
                    s = 1 / 0,
                    r = 1 / 0,
                    a = -1 / 0,
                    h = -1 / 0;
                for (e = 0; e < o; e++) i = t[e].x, n = t[e].y, s = Math.min(s, i), r = Math.min(r, n), a = Math.max(a, i), h = Math.max(h, n);
                return {
                    min: kt(s, r),
                    max: kt(a, h)
                }
            }
        }, n.LineUtil = {
            simplify: function(t, e) {
                var i = Math.min(e || 1, 150);
                if (!t.length) return t.slice();
                var n = i * i;
                return t = this._reducePoints(t, n), t = this._simplifyDP(t, n)
            },
            pointToSegmentDistance: function(t, e, i) {
                return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
            },
            closestPointOnSegment: function(t, e, i) {
                return this._sqClosestPointOnSegment(t, e, i)
            },
            _simplifyDP: function(t, i) {
                var n = t.length,
                    o = typeof Uint8Array != e + "" ? Uint8Array : Array,
                    s = new o(n);
                s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, i, 0, n - 1);
                var r, a = [];
                for (r = 0; r < n; r++) s[r] && a.push(t[r]);
                return a
            },
            _simplifyDPStep: function(t, e, i, n, o) {
                var s, r, a, h = 0;
                for (r = n + 1; r <= o - 1; r++)(a = this._sqClosestPointOnSegment(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
                h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
            },
            _reducePoints: function(t, e) {
                for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                return o < s - 1 && i.push(t[s - 1]), i
            },
            clipSegment: function(t, e, i, n) {
                var o, s, r, a = n ? this._lastCode : this._getBitCode(t, i),
                    h = this._getBitCode(e, i);
                for (this._lastCode = h;;) {
                    if (!(a | h)) return [t, e];
                    if (a & h) return !1;
                    o = a || h, s = this._getEdgeIntersection(t, e, o, i), r = this._getBitCode(s, i), o === a ? (t = s, a = r) : (e = s, h = r)
                }
            },
            _getEdgeIntersection: function(t, e, i, n) {
                var o, s, r = e.x - t.x,
                    a = e.y - t.y,
                    h = n.min,
                    l = n.max;
                return 8 & i ? (o = t.x + r * (l.y - t.y) / a, s = l.y) : 4 & i ? (o = t.x + r * (h.y - t.y) / a, s = h.y) : 2 & i ? (o = l.x, s = t.y + a * (l.x - t.x) / r) : 1 & i && (o = h.x, s = t.y + a * (h.x - t.x) / r), new L.Point(o, s, !0)
            },
            _getBitCode: function(t, e) {
                var i = 0;
                return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
            },
            _sqDist: function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y;
                return i * i + n * n
            },
            _sqClosestPointOnSegment: function(t, e, i, n) {
                var o, s = e.x,
                    r = e.y,
                    a = i.x - s,
                    h = i.y - r,
                    l = a * a + h * h;
                return l > 0 && (o = ((t.x - s) * a + (t.y - r) * h) / l, o > 1 ? (s = i.x, r = i.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new L.Point(s, r)
            }
        }, n.shapes = {}, n.shapes.Shape = function(t) {
            this.options = Ct({}, this.options, t), this.element = this._initShape(), this._updateShape(), this._updateStyle()
        }, n.shapes.Shape.prototype = {
            constructor: n.shapes.Shape,
            setOptions: function(t) {
                this.options = Ct(this.options, t), this.isShapeChanged(t) && this._updateShape(), this.isStyleChanged(t) && this._updateStyle()
            },
            _initShape: function() {
                return null
            },
            _updateShape: Lt,
            _updateStyle: function() {
                var t = this.getElement(),
                    e = this.options;
                Nt.setZIndex(t, e.zIndex), Nt.visible(t, e.visible)
            },
            _calcBounds: function(t, e, i, o, s) {
                return 0 === t && 0 === e && 0 === i && 0 === o ? {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0
                } : {
                    x: n.round(t - s),
                    y: n.round(e - s),
                    w: n.round(i + 2 * s),
                    h: n.round(o + 2 * s)
                }
            },
            getElement: function() {
                return this.element
            },
            getShapeElement: function() {
                return this._shapeElement || this.element || null
            }
        },
        function() {
            if (n.shapes.CommonShape = {
                    isStyleChanged: function(t) {
                        return t.strokeColor !== e || t.strokeOpacity !== e || t.strokeWeight !== e || t.strokeStyle !== e || t.strokeLineCap !== e || t.strokeLineJoin !== e || t.fillColor !== e || t.fillOpacity !== e || t.visible !== e || t.zIndex !== e
                    },
                    toPathString: function(t) {
                        var e = [];
                        if (0 === t.length) return "";
                        e.push("M");
                        for (var i = 0, n = t.length; i < n; i++) e.push(t[i].x + "," + t[i].y), 0 === i && e.push("L");
                        return e.join(" ")
                    }
                }, n.shapes.CommonShape.circle = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "none",
                        fillOpacity: 1,
                        center: kt(0, 0),
                        radius: 0
                    },
                    isShapeChanged: function(t) {
                        return t.center !== e || t.radius !== e
                    },
                    isStyleChanged: n.shapes.CommonShape.isStyleChanged
                }, n.shapes.CommonShape.rectangle = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "none",
                        fillOpacity: 1,
                        minBoundPoint: kt(0, 0),
                        maxBoundPoint: kt(0, 0)
                    },
                    isShapeChanged: function(t) {
                        return t.minBoundPoint !== e || t.maxBoundPoint !== e
                    },
                    isStyleChanged: n.shapes.CommonShape.isStyleChanged
                }, n.shapes.CommonShape.path = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "none",
                        fillOpacity: 1,
                        path: [],
                        minBoundPoint: kt(0, 0),
                        maxBoundPoint: kt(0, 0)
                    },
                    isShapeChanged: function(t) {
                        return t.path !== e
                    },
                    isStyleChanged: function(t) {
                        return t.strokeColor !== e || t.strokeOpacity !== e || t.strokeWeight !== e || t.strokeStyle !== e || t.strokeLineCap !== e || t.strokeLineJoin !== e || t.visible !== e || t.zIndex !== e
                    },
                    isIconChanged: function(t) {
                        return t.startIcon !== e || t.endIcon !== e || t.startIconSize !== e || t.endIconSize !== e || t.strokeColor !== e
                    },
                    toPathString: n.shapes.CommonShape.toPathString
                }, n.shapes.CommonShape.closedPath = {
                    options: {
                        strokeColor: "#007EEA",
                        strokeOpacity: 1,
                        strokeWeight: 1,
                        strokeStyle: "solid",
                        fillColor: "#007EEA",
                        fillOpacity: .3,
                        paths: [
                            []
                        ],
                        minBoundPoint: kt(0, 0),
                        maxBoundPoint: kt(0, 0)
                    },
                    isShapeChanged: function(t) {
                        return t.path !== e
                    },
                    isStyleChanged: n.shapes.CommonShape.isStyleChanged,
                    toPathString: n.shapes.CommonShape.toPathString
                }, "NONE" === n.DrawingUtil.getDrawingType()) {
                var t = function() {};
                t.prototype = {
                    constructor: t,
                    _initShape: Lt,
                    setCenter: Lt,
                    setRadius: Lt,
                    setOptions: Lt,
                    getOptions: Lt,
                    setBounds: Lt,
                    getBounds: Lt,
                    getShapeElement: Lt,
                    getElement: Lt,
                    setPath: Lt
                }, n.shapes.Circle = function() {}, At(n.shapes.Circle, t), n.shapes.Ellipse = function() {}, At(n.shapes.Ellipse, t), n.shapes.Rectangle = function() {}, At(n.shapes.Rectangle, t), n.shapes.Path = function() {}, At(n.shapes.Path, t), n.shapes.ClosedPath = function() {}, At(n.shapes.ClosedPath, t)
            }
        }(),
        function() {
            n.DrawingUtil.isSupportedSVG() && (n.shapes.ShapeSVG = function(t) {
                this.DASH_STYLE = {
                    solid: "0",
                    shortdash: "2,1",
                    shortdot: "1,1",
                    shortdashdot: "2,1,1,1",
                    shortdashdotdot: "2,1,1,1,1,1",
                    dot: "1,2",
                    dash: "3,2",
                    longdash: "7,2",
                    dashdot: "3,2,1,2",
                    longdashdot: "7,2,1,2",
                    longdashdotdot: "7,2,1,2,1,2"
                }, n.shapes.Shape.call(this, t), this._setBounds()
            }, At(n.shapes.ShapeSVG, n.shapes.Shape, {
                _initShape: function() {
                    function t(t, e) {
                        i.setAttribute(t, e)
                    }
                    var e = this._calcBoundsFromOptions(),
                        i = this._makeSVGTag(It.browser.msie ? "svg" : "svg:svg");
                    return t("version", "1.1"), t("width", e.w + "px"), t("height", e.h + "px"), t("viewBox", e.x + " " + e.y + " " + e.w + " " + e.h), t("overflow", "visible"),
                        i.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), t("style", "position:absolute;overflow:visible;margin:0;padding:0;border:0;width:" + e.w + "px; height:" + e.h + "px;pointer-events:none;"), this._shapeElement = this._makeSVGTag("path"), this._shapeElement.setAttribute("fill-rule", "evenodd"), i.appendChild(this._shapeElement), i
                },
                setOptions: function(t) {
                    n.shapes.Shape.prototype.setOptions.call(this, t), this._setBounds()
                },
                _makeSVGTag: function(t) {
                    return i.createElementNS("http://www.w3.org/2000/svg", t)
                },
                _updateShape: function() {},
                _updateStyle: function() {
                    var t = this._getCssText(this.options);
                    this._shapeElement.setAttribute("style", t + "pointer-events:visiblePainted;"), n.shapes.Shape.prototype._updateStyle.call(this)
                },
                _setBounds: function() {
                    var t = this.getElement(),
                        e = this._calcBoundsFromOptions(),
                        i = t.style;
                    return i.left = e.x + "px", i.top = e.y + "px", i.width = e.w + "px", i.height = e.h + "px", t.setAttribute("width", e.w + "px"), t.setAttribute("height", e.h + "px"), t.setAttribute("viewBox", e.x + " " + e.y + " " + e.w + " " + e.h), this._bounds = e, e
                },
                getBounds: function() {
                    return this._bounds
                },
                _calcBoundsFromOptions: function() {
                    return this._calcBounds(0, 0, 0, 0, 0)
                },
                _getCssText: function(t) {
                    if (n.isEmptyObject(t)) return "";
                    var e = [];
                    if ("none" != t.strokeColor) {
                        e.push("stroke:" + t.strokeColor, "stroke-width:" + t.strokeWeight + "px", "stroke-opacity:" + t.strokeOpacity);
                        var i = this._getLineCap(t.strokeLineCap),
                            o = this._getLineJoin(t.strokeLineJoin),
                            s = this._getDashStyle(t.strokeStyle, t.strokeWeight, i);
                        i && e.push("stroke-linecap:" + i), o && e.push("stroke-linejoin:" + o), s && e.push("stroke-dasharray:" + s)
                    } else e.push("stroke:none");
                    "none" != t.fillColor ? e.push("fill:" + t.fillColor, "fill-opacity:" + t.fillOpacity) : e.push("fill:none");
                    var r = e.join(";");
                    return r ? r + ";" : ""
                },
                _getDashStyle: function(t, e, i) {
                    var o;
                    if (n.isArray(t)) o = t.join(",");
                    else {
                        o = [];
                        for (var s, r = parseFloat(e), a = (this.DASH_STYLE[t] || "0").split(","), h = 0, l = a.length; h < l; h++) s = parseInt(a[h], 10), s = s * r + (s > 1 ? r : 0), i && l > 1 && (h % 2 == 0 ? s = Math.max(1, s - r) : s *= 2), o[h] = s;
                        o = o.join(",")
                    }
                    return o = o || this.DASH_STYLE.solid, "0" === o ? null : o
                },
                _getLineCap: function(t) {
                    var e = (t || "").toLowerCase(),
                        i = ["flat", "butt", "round", "square"];
                    return n.getIndexOfElement(i, e) > -1 ? ("flat" === e && (e = "butt"), e) : null
                },
                _getLineJoin: function(t) {
                    var e = (t || "").toLowerCase(),
                        i = ["miter", "round", "bevel"];
                    return n.getIndexOfElement(i, e) > -1 ? e : null
                }
            }))
        }(),
        function() {
            n.DrawingUtil.isSupportedSVG() && (n.shapes.CircleSVG = function(t) {
                n.shapes.ShapeSVG.call(this, t)
            }, At(n.shapes.CircleSVG, n.shapes.ShapeSVG, [n.shapes.CommonShape.circle], {
                setCenter: function(t) {
                    this.options.center = t, this._updateShape(), this._setBounds()
                },
                setRadius: function(t) {
                    this.options.radius = t, this._updateShape(), this._setBounds()
                },
                _updateShape: function() {
                    var t = this.options,
                        e = t.radius,
                        i = t.center.x - e,
                        n = t.center.y - e;
                    this._shapeElement.setAttribute("d", ["M", i, n + e, "A", e, e, 0, 1, 0, i, n + e - 1, "Z"].join(" "))
                },
                _calcBoundsFromOptions: function() {
                    var t = this.options,
                        e = t.radius,
                        i = t.center.x - e,
                        n = t.center.y - e,
                        o = 2 * e,
                        s = o,
                        r = t.strokeWeight;
                    return this._calcBounds(i, n, o, s, r)
                }
            }), "SVG" === n.DrawingUtil.getDrawingType() && (n.shapes.Circle = n.shapes.CircleSVG))
        }(),
        function() {
            n.DrawingUtil.isSupportedSVG() && (n.shapes.ClosedPathSVG = function(t) {
                n.shapes.ShapeSVG.call(this, t), this._shapeElement.setAttribute("stroke-linejoin", "round")
            }, At(n.shapes.ClosedPathSVG, n.shapes.ShapeSVG, [n.shapes.CommonShape.closedPath], {
                setPath: function(t, e, i, n) {
                    var o = this.options;
                    o.paths = t, o.minBoundPoint = e, o.maxBoundPoint = i, this._updateShape(n), this._setBounds()
                },
                _updateShape: function(t) {
                    for (var e, i = [], o = this.options.paths, s = 0, r = o.length; s < r; s++) e = n.LineUtil.simplify(o[s], t), i.push(this.toPathString(e));
                    0 !== i.length && i[0] || (i = ["M 0,0"]), this._shapeElement.setAttribute("d", i.join(" Z ") + " Z")
                },
                _calcBoundsFromOptions: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        i = t.maxBoundPoint,
                        n = e.x,
                        o = e.y,
                        s = Math.abs(i.x - n),
                        r = Math.abs(i.y - o),
                        a = t.strokeWeight;
                    return this._calcBounds(n, o, s, r, a)
                }
            }), "SVG" === n.DrawingUtil.getDrawingType() && (n.shapes.ClosedPath = n.shapes.ClosedPathSVG))
        }(),
        function() {
            if (n.DrawingUtil.isSupportedSVG()) {
                n.shapes.PathSVG = function(t) {
                    t && t.fillColor && (t.fillColor = "none"), n.shapes.ShapeSVG.call(this, t), this._shapeElement.setAttribute("stroke-linejoin", "round")
                }, At(n.shapes.PathSVG, n.shapes.ShapeSVG, [n.shapes.CommonShape.path], {
                    setOptions: function(t) {
                        t.fillColor && (t.fillColor = "none"), n.shapes.ShapeSVG.prototype.setOptions.call(this, t), this.isIconChanged(t) && this._updateIcons(t)
                    },
                    _updateIcons: function(t) {
                        this._defsElement || (this._defsElement = this._makeSVGTag("defs"), this.element.insertBefore(this._defsElement, this._shapeElement)), t.startIcon && (this._startIcon = this._startIcon || this._addMarker(0), this._setIconShape(this._startIcon, t.startIcon, 0)), t.endIcon && (this._endIcon = this._endIcon || this._addMarker(1), this._setIconShape(this._endIcon, t.endIcon, 1)), this._startIcon && null === t.startIcon && (this._removeMarker(this._startIcon, 0), this._startIcon = null), this._endIcon && null === t.endIcon && (this._removeMarker(this._endIcon, 1), this._endIcon = null), this._setIconSize(), this._updateIconsStyle(), this._startIcon || this._endIcon || !this._defsElement || (this._defsElement.parentNode.removeChild(this._defsElement), this._defsElement = null), this._defsElement && n.Agent.browser.msie && n.Agent.browser.version > 9 && this._forceRender()
                    },
                    _setIconShape: function(t, e, i) {
                        if (t) {
                            var n, o, s = t.childNodes[0],
                                r = 10,
                                a = [0, 0, r, r],
                                h = [
                                    [kt(r, r), kt(0, 5), kt(r, 0)],
                                    [kt(0, 0), kt(r, 5), kt(0, r)]
                                ],
                                l = [
                                    ["M", 0, 5, "A", 5, 5, 0, 1, 0, 0, 4.99],
                                    [kt(0, 5), kt(5, r), kt(r, 5), kt(5, 0)]
                                ],
                                c = 5;
                            switch (e) {
                                case P.OPEN_ARROW:
                                    var u = 0 === i ? -1 : 1;
                                    n = h[i], n[0].x = n[0].y += u, n[1].x -= 2 * u, n[2].x += u, n[2].y -= u, c = n[1].x - 2 * u, o = this.toPathString(n);
                                    break;
                                case P.BLOCK_ARROW:
                                    n = h[i], o = this.toPathString(n) + " Z";
                                    break;
                                case P.CIRCLE:
                                    n = l[0], o = n.join(" ") + " Z";
                                    break;
                                case P.DIAMOND:
                                    n = l[1], o = this.toPathString(n) + " Z"
                            }
                            s.setAttribute("d", o), t.setAttribute("viewBox", a.join(" ")), t.setAttribute("refX", c), t.setAttribute("refY", 5)
                        }
                    },
                    _setIconSize: function() {
                        var t = function(t, e, i) {
                            t && (i ? t.setAttribute("markerUnits", "userSpaceOnUse") : (t.setAttribute("markerUnits", "strokeWidth"), i = e === P.OPEN_ARROW ? 5 : 3), t.setAttribute("markerWidth", i), t.setAttribute("markerHeight", i))
                        };
                        t(this._startIcon, this.options.startIcon, this.options.startIconSize), t(this._endIcon, this.options.endIcon, this.options.endIconSize)
                    },
                    _updateIconsStyle: function() {
                        var t = this.options.strokeColor,
                            e = function(e, i) {
                                var n = "";
                                e && (n = i < 2 ? "fill:none; stroke-width:2px; stroke-linecap:round; stroke:" + t + ";" : "fill:" + t + "; stroke:none;", e.childNodes[0].setAttribute("style", n))
                            };
                        e(this._startIcon, this.options.startIcon), e(this._endIcon, this.options.endIcon)
                    },
                    _addMarker: function(t) {
                        var e = n.guid(),
                            i = this._makeSVGTag("marker"),
                            o = this._makeSVGTag("path"),
                            s = 0 === t ? "marker-start" : "marker-end";
                        return i.setAttribute("id", e), i.setAttribute("orient", "auto"), i.appendChild(o), this._defsElement.appendChild(i), this._shapeElement.setAttribute(s, "url(#" + e + ")"), i
                    },
                    _removeMarker: function(t, e) {
                        var i = 0 === e ? "marker-start" : "marker-end";
                        this._shapeElement.removeAttribute(i), this._defsElement.removeChild(t)
                    },
                    setPath: function(t, e, i, n) {
                        var o = this.options;
                        o.path = t, o.minBoundPoint = e, o.maxBoundPoint = i, this._updateShape(n), this._setBounds()
                    },
                    _updateShape: function(t) {
                        var e = n.LineUtil.simplify(this.options.path, t),
                            i = this.toPathString(e);
                        i || (i = "M 0 0"), this._shapeElement.setAttribute("d", i), this._defsElement && n.Agent.browser.msie && n.Agent.browser.version > 9 && this._forceRender()
                    },
                    _forceRender: function() {
                        var t = this.getElement();
                        t && t.parentNode && t.parentNode.insertBefore(t, t)
                    },
                    _calcBoundsFromOptions: function() {
                        var t = this.options,
                            e = t.minBoundPoint,
                            i = t.maxBoundPoint,
                            n = e.x,
                            o = e.y,
                            s = Math.abs(i.x - n),
                            r = Math.abs(i.y - o),
                            a = t.strokeWeight;
                        return this._calcBounds(n, o, s, r, a)
                    }
                }), "SVG" === n.DrawingUtil.getDrawingType() && (n.shapes.Path = n.shapes.PathSVG)
            }
        }(),
        function() {
            n.DrawingUtil.isSupportedSVG() && (n.shapes.RectangleSVG = function(t) {
                n.shapes.ShapeSVG.call(this, t)
            }, At(n.shapes.RectangleSVG, n.shapes.ShapeSVG, [n.shapes.CommonShape.rectangle], {
                setBounds: function(t, e) {
                    var i = this.options;
                    i.minBoundPoint = t, i.maxBoundPoint = e, this._updateShape(), this._setBounds()
                },
                _updateShape: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        i = t.maxBoundPoint,
                        n = e.x,
                        o = e.y,
                        s = Math.abs(i.x - n),
                        r = Math.abs(i.y - o);
                    this._shapeElement.setAttribute("d", ["M", n, o, "L", n + s, o, n + s, o + r, n, o + r, "Z"].join(" "))
                },
                _calcBoundsFromOptions: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        i = t.maxBoundPoint,
                        n = e.x,
                        o = e.y,
                        s = Math.abs(i.x - n),
                        r = Math.abs(i.y - o),
                        a = t.strokeWeight;
                    return this._calcBounds(n, o, s, r, a)
                }
            }), "SVG" === n.DrawingUtil.getDrawingType() && (n.shapes.Rectangle = n.shapes.RectangleSVG))
        }(),
        function() {
            n.DrawingUtil.isSupportedSVG() && (n.shapes.EllipseSVG = function(t) {
                n.shapes.ShapeSVG.call(this, t)
            }, At(n.shapes.EllipseSVG, n.shapes.RectangleSVG, {
                _updateShape: function() {
                    var t = this.options,
                        e = t.minBoundPoint,
                        i = t.maxBoundPoint,
                        n = e.x,
                        o = e.y,
                        s = Math.abs(i.x - n) / 2,
                        r = Math.abs(i.y - o) / 2;
                    this._shapeElement.setAttribute("d", ["M", n, o + r, "A", s, r, 0, 1, 0, n, o + r - 1, "Z"].join(" "))
                }
            }), "SVG" === n.DrawingUtil.getDrawingType() && (n.shapes.Ellipse = n.shapes.EllipseSVG))
        }(),
        function() {
            if (n.DrawingUtil.isSupportedVML()) {
                try {
                    i.namespaces.add("v", "urn:schemas-microsoft-com:vml");
                    var t = i.createElement("style"),
                        e = i.getElementsByTagName("head")[0];
                    e.insertBefore(t, e.firstChild.firstChild);
                    var o = t.styleSheet,
                        s = "behavior: url(#default#VML);";
                    o.addRule("v\\:shape", s), o.addRule("v\\:path", s), o.addRule("v\\:fill", s), o.addRule("v\\:stroke", s)
                } catch (t) {}
                n.shapes.ShapeVML = function(t) {
                    n.shapes.Shape.call(this, t)
                }, At(n.shapes.ShapeVML, n.shapes.Shape, {
                    setOptions: function(t) {
                        this.options = Ct(this.options, t), this._updateShape()
                    },
                    _initShape: function() {
                        var t = Nt.createElement("v:shape", "position:absolute;width:1px;height:1px;margin:0;padding:0;border:0;"),
                            e = Nt.createElement("v:path"),
                            i = Nt.createElement("v:fill"),
                            n = Nt.createElement("v:stroke");
                        t.setAttribute("coordorigin", "0 0"), t.setAttribute("coordsize", "1 1"), i.setAttribute("on", !1), n.setAttribute("on", !1), t.appendChild(e), t.appendChild(i), t.appendChild(n), this._shapeElement = t, this._pathElement = e, this._fillElement = i, this._strokeElement = n;
                        var o = Nt.createElement("div", "position:absolute;overflow:visible;margin:0;padding:0;border:0;top:0;left:0;");
                        return o.appendChild(t), o
                    },
                    _updateShape: function() {},
                    _updateStyle: function() {
                        var t = this.options;
                        if (!n.isEmptyObject(t)) {
                            var e = this._strokeElement,
                                i = this._fillElement;
                            if ("none" == t.strokeColor) e.on = !1;
                            else {
                                e.on = !0, e.color = t.strokeColor || "transparent", e.weight = t.strokeWeight + "px", e.opacity = t.strokeOpacity;
                                var o = this._getLineCap(t.strokeLineCap),
                                    s = this._getLineJoin(t.strokeLineJoin),
                                    r = this._getDashStyle(t.strokeStyle);
                                o && (e.endcap = o), s && (e.joinstyle = s), r && (e.dashstyle = r)
                            }
                            "none" == t.fillColor ? i.on = !1 : (i.on = !0, i.color = t.fillColor || "transparent", i.opacity = t.fillOpacity), n.shapes.Shape.prototype._updateStyle.call(this)
                        }
                    },
                    _getDashStyle: function(t) {
                        if (!t) return null;
                        return n.isArray(t) ? t.join(" ") : t
                    },
                    _getLineCap: function(t) {
                        var e = (t || "").toLowerCase(),
                            i = ["flat", "butt", "square", "round"];
                        return n.getIndexOfElement(i, e) > -1 ? ("butt" === e && (e = "flat"), e) : null
                    },
                    _getLineJoin: function(t) {
                        var e = (t || "").toLowerCase(),
                            i = ["miter", "round", "bevel"];
                        return n.getIndexOfElement(i, e) > -1 ? e : null
                    }
                })
            }
        }(),
        function() {
            n.DrawingUtil.isSupportedVML() && (n.shapes.CircleVML = function(t) {
                n.shapes.ShapeVML.call(this, t)
            }, At(n.shapes.CircleVML, n.shapes.ShapeVML, [n.shapes.CommonShape.circle], {
                setCenter: function(t) {
                    this.options.center = t, this._updateShape()
                },
                setRadius: function(t) {
                    this.options.radius = t, this._updateShape()
                },
                _updateShape: function() {
                    this._updateStyle();
                    var t = this.options,
                        e = t.radius,
                        i = 2 * e,
                        n = t.center.x - e,
                        o = t.center.y - e;
                    this._pathElement.v = ["AR", n, o, n + i, o + i, "0 0 0 0 X E"].join(" ")
                }
            }), "VML" === n.DrawingUtil.getDrawingType() && (n.shapes.Circle = n.shapes.CircleVML))
        }(),
        function() {
            n.DrawingUtil.isSupportedVML() && (n.shapes.ClosedPathVML = function(t) {
                n.shapes.ShapeVML.call(this, t)
            }, At(n.shapes.ClosedPathVML, n.shapes.ShapeVML, [n.shapes.CommonShape.closedPath], {
                setPath: function(t, e, i, n) {
                    var o = this.options;
                    o.paths = t, o.minBoundPoint = e, o.maxBoundPoint = i, this._updateShape(n)
                },
                _updateShape: function(t) {
                    this._updateStyle();
                    for (var e, i = [], o = this.options.paths, s = 0, r = o.length; s < r; s++) e = n.LineUtil.simplify(o[s], t), i.push(this.toPathString(e));
                    this._shapeElement.style.display = "none", this._pathElement.v = i.join(" X ") + " X E", this._shapeElement.style.display = ""
                }
            }), "VML" === n.DrawingUtil.getDrawingType() && (n.shapes.ClosedPath = n.shapes.ClosedPathVML))
        }(),
        function() {
            n.DrawingUtil.isSupportedVML() && (n.shapes.PathVML = function(t) {
                t && t.fillColor && (t.fillColor = "none"), n.shapes.ShapeVML.call(this, t)
            }, At(n.shapes.PathVML, n.shapes.ShapeVML, [n.shapes.CommonShape.path], {
                setPath: function(t, e, i, n) {
                    var o = this.options;
                    o.path = t, o.minBoundPoint = e, o.maxBoundPoint = i, this._updateShape(n)
                },
                setOptions: function(t) {
                    t.fillColor && (t.fillColor = "none"), n.shapes.ShapeVML.prototype.setOptions.call(this, t), (t.hasOwnProperty("startIcon") || t.hasOwnProperty("endIcon")) && this._updateIcons(t)
                },
                _updateIcons: function(t) {
                    var e = n.keys(t)[0],
                        i = "startIcon" === e ? "startArrow" : "endArrow",
                        o = ["open", "block", "oval", "diamond"];
                    this._shapeElement.getElementsByTagName("stroke")[0][i] = o[t[e] - 1] || "none"
                },
                _updateShape: function(t) {
                    this._updateStyle(), this._shapeElement.style.display = "none";
                    var e = n.LineUtil.simplify(this.options.path, t),
                        i = this.toPathString(e);
                    i || (i = "M 0 0"), i += " E", this._pathElement.v = i, this._shapeElement.style.display = ""
                }
            }), "VML" === n.DrawingUtil.getDrawingType() && (n.shapes.Path = n.shapes.PathVML))
        }(),
        function() {
            n.DrawingUtil.isSupportedVML() && (n.shapes.RectangleVML = function(t) {
                n.shapes.ShapeVML.call(this, t)
            }, At(n.shapes.RectangleVML, n.shapes.ShapeVML, [n.shapes.CommonShape.rectangle], {
                setBounds: function(t, e) {
                    this.options.minBoundPoint = t, this.options.maxBoundPoint = e, this._updateShape()
                },
                _updateShape: function() {
                    this._updateStyle();
                    var t = this.options,
                        e = t.minBoundPoint,
                        i = t.maxBoundPoint,
                        n = e.x,
                        o = e.y,
                        s = Math.abs(i.x - n),
                        r = Math.abs(i.y - o),
                        a = n,
                        h = o,
                        l = n + s,
                        c = o + r;
                    this._pathElement.v = ["M", a, h, "L", l, h, l, c, a, c, "X E"].join(" ")
                }
            }), "VML" === n.DrawingUtil.getDrawingType() && (n.shapes.Rectangle = n.shapes.RectangleVML))
        }(),
        function() {
            n.DrawingUtil.isSupportedVML() && (n.shapes.EllipseVML = function(t) {
                n.shapes.ShapeVML.call(this, t)
            }, At(n.shapes.EllipseVML, n.shapes.RectangleVML, {
                _updateShape: function() {
                    this._updateStyle();
                    var t = this.options,
                        e = t.minBoundPoint,
                        i = t.maxBoundPoint,
                        n = e.x,
                        o = e.y,
                        s = Math.abs(i.x - n),
                        r = Math.abs(i.y - o);
                    this._pathElement.v = ["AR", n, o, n + s, o + r, "0 0 0 0 X E"].join(" ")
                }
            }), "VML" === n.DrawingUtil.getDrawingType() && (n.shapes.Ellipse = n.shapes.EllipseVML))
        }(), n.OverlayView = function() {}, At(n.OverlayView, n.KVO, {
            __notifyChanged: function(t) {
                var e = this.get(t),
                    i = "_" + t + "_changed";
                this[i] && this[i](e), n.KVO.prototype.__notifyChanged.apply(this, [t])
            },
            _bindMap: function(t) {
                var e = this,
                    i = t.getMapModel(),
                    n = t.getMapView(),
                    o = t.getMapAction();
                e.bindTo("mapCenter", t, "center"), e.bindTo("mapZoom", t, "zoom"), e.bindTo("mapSize", t, "size"), e.bindTo("mapBounds", t, "bounds"), e.bindTo("tileRepeatX", t, "repeatX"), e.bindTo(["panes", "mapDiv"], n), e._renderModeListener = Zt.addListener(this, "renderMode_changed", Ot(this._renderMode_changed, this)), e.bindTo(["mapSystemProjection", "padding", "paddingOffset", "containerTopLeft", "renderMode"], i), e.bindTo(["ef_overlay", "ef_overlaylayer", "ef_overlayimage", "ef_floatpane"], o), e._redrawListeners = [Zt.addListener(t, "redraw", Ot(e._onRedraw, e))], e._isAdded = !0, e._isZoomEffect = !1, e._isEffectCustomOverlay = !1
            },
            _onEffectEnd: function() {
                this._isZoomEffect && (this._isZoomEffect = !1, this._onRedraw())
            },
            _onEffectStart: function() {
                this._isZoomEffect = !0
            },
            _onScale: function(t) {
                if (this.get("ef_overlay"))
                    if (this.scale) this.scale(t);
                    else if (this.getElement && this.getEffectAnchor) {
                    var e = this.getElement(),
                        i = this.getEffectAnchor();
                    this._isEffectCustomOverlay = !0, Nt.setScale(e, 1 / t, {
                        x: i.x,
                        y: i.y
                    }, !0)
                }
            },
            _onRedraw: function() {
                this._isAdded && (this._isZoomEffect || (this.draw(), Zt.trigger(this, "draw"), this._isEffectCustomOverlay && Nt.transform(this.getElement(), 1, 0, 0, {
                    x: 0,
                    y: 0
                })))
            },
            _unbindMap: function() {
                this._isAdded && (this.unbind("mapSystemProjection"), this.unbind("padding"), this.unbind("paddingOffset"), this.unbind("mapCenter"), this.unbind("mapZoom"), this.unbind("mapSize"), this.unbind("mapBounds"), this.unbind("tileRepeatX"), this.unbind("panes"), this.unbind("mapDiv"), this.unbind("containerTopLeft"), this.unbind("renderMode"), this.unbind("ef_overlay"), this.unbind("ef_overlaylayer"), this.unbind("ef_overlayimage"), this.unbind("ef_floatpane"), Zt.removeListener(this._renderModeListener), Zt.removeListener(this._redrawListeners), this._effectListener && Zt.removeListener(this._effectListener), this._isAdded = !1, this._isZoomEffect = !1, this._isEffectCustomOverlay = !1, this._effectListener = null)
            },
            setMap: function(t) {
                if (t && t.getMapModel || (t = null), t && 2 === t.get("renderMode") && !(this instanceof naver.maps.Marker)) return void this.switchTo(2, t);
                this.getMap() && (this.get("ef_overlay") && this.getMap().getMapAction().clearOverlayPanePosition(), this.onRemove(), this._unbindMap(), Zt.trigger(this, "removed")), this.set("map", t), t && (this._bindMap(t), this.onAdd(), Zt.trigger(this, "added"), this.draw(), Zt.trigger(this, "draw"))
            },
            getMap: function() {
                return this.get("map")
            },
            getProjection: function() {
                return this.getMap() ? this.get("mapSystemProjection") : null
            },
            getContainerTopLeft: function() {
                return this.getMap() ? this.get("containerTopLeft") : null
            },
            getMapOffset: function() {
                if (!this.getMap()) return null;
                var t = this.get("paddingOffset");
                return Nt.getOffset(this.get("mapDiv")).add(t)
            },
            getPanes: function() {
                return this.getMap() ? this.get("panes") : null
            },
            toFeature: function() {
                if (!n.isFunction(this.toGeometry)) return null;
                var t = this.toGeometry(),
                    e = {
                        type: st,
                        geometry: t,
                        properties: {}
                    };
                return n.forEach(t.mantle_properties, function(t, i) {
                    e.properties[i] = t
                }), e
            },
            toGeoJson: function() {
                if (!n.isFunction(this.toGeometry)) return null;
                var t = {
                        type: rt,
                        features: []
                    },
                    e = this.toFeature();
                return t.features.push(e), t
            },
            _getMantleProperties: function() {
                var t = ["map", "position", "simplifyLevel", "path", "paths", "bounds", "center"],
                    e = this.getOptions(),
                    i = {};
                return n.forEach(e, function(e, o) {
                    -1 === t.indexOf(o) && n.hasValue(e) && (i[o] = e)
                }), i.overlayType = this.OVERLAY_TYPE, i
            },
            _fromCoordToPointerEvent: function(t) {
                var e = this.getProjection();
                if (e && t) {
                    var i = e.get("projection"),
                        n = e.fromCoordToOffset(t),
                        o = e.fromOffsetToPoint(n),
                        s = {
                            coord: t.clone(),
                            point: o,
                            offset: n,
                            pointerEvent: null,
                            domEvent: null,
                            overlay: this
                        };
                    return i.fromPointToLatLng && (s.latlng = t.clone()), s
                }
            },
            _renderMode_changed: function(t) {
                this._onRenderModeChanged && this._onRenderModeChanged(t)
            },
            switchTo: Lt,
            _getDefaultEventParameters: function(t) {
                for (var e = !1, i = [], n = 0, o = C.length; n < o; n++)
                    if (C[n] === t) {
                        e = !0;
                        break
                    } return e && this._getPointerEvent ? i.push(this._getPointerEvent()) : t.indexOf("_changed") === t.length - 8 && i.push(this.get(t.replace("_changed", ""))), i
            },
            _getSingleClickType: function(t, e) {
                var i, o = n.now(),
                    s = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    r = this.__ct__ ? o - this.__ct__ : 1e4,
                    a = this.__cp__ ? n.Math.distance(this.__cp__, s) : 1e4;
                if (r < 250 && a <= A) this.__ct__ = null, this.__cp__ = null, t.stopPropagation(), i = "dblclick";
                else {
                    if (e) return;
                    this.__ct__ = o, this.__cp__ = s, i = "click"
                }
                return i
            },
            ef_overlay_changed: function(t) {
                var e = this.getMap();
                if (e)
                    if (t) {
                        var i = e.getMapAction();
                        this._effectListener = [Zt.addListener(i, "clearpaneposition", Ot(this._onEffectEnd, this)), Zt.addListener(i, "zoomstart", Ot(this._onEffectStart, this)), Zt.addListener(i, "scale", Ot(this._onScale, this))]
                    } else Zt.removeListener(this._effectListener), this._effectListener = null
            }
        }), n.CalcShapeDrawingPixelBounds = {
            getDrawingRect: function() {
                return this.getDrawingPixelBounds()
            },
            getDrawingPixelBounds: function() {
                var t = this.getProjection(),
                    e = this.getBounds();
                if (!e) return null;
                var i = t.fromCoordToPixelPoint(e.getMin()),
                    n = t.fromCoordToPixelPoint(e.getMax()),
                    o = kt(i.x, n.y),
                    s = kt(n.x, i.y),
                    r = this.getOptions().strokeWeight;
                return r && (o = o.sub(r, r), s = s.add(r, r)), Dt.bounds(o, s)
            }
        }, n.MarkerIcon = function(t) {
            this.type = t.type
        }, n.MarkerIcon.prototype = {
            constructor: n.MarkerIcon,
            update: function(t, e) {},
            destroy: function() {
                Nt.removeElement(this._element), delete this._element, this.size = null, this.anchor = null, this._manager && delete this._manager
            },
            getElement: function() {
                return this._element
            }
        }, n.ImageIcon = function(t) {
            this.type = J.image
        }, At(n.ImageIcon, n.MarkerIcon, {
            update: function(t, e) {
                var i = n.bind(this._onLoad, this, t, e),
                    o = n.bind(this._onError, this, e);
                this._manager ? (new Nt.Image({
                    url: t.url,
                    onload: n.bind(function() {
                        this._manager.setUrl(t.url)
                    }, this),
                    onerror: o
                }), this._manager.setHandler({
                    onload: i,
                    onerror: o
                })) : (this._manager = new Nt.Image({
                    url: t.url,
                    onload: i,
                    onerror: o,
                    disableSelection: !0,
                    alt: "",
                    position: "absolute"
                }), this._element = this._manager.getElement(), this._element.ondragstart = function() {
                    return !1
                }), (t.size || t.scaledSize) && (this.size = t.size || t.scaledSize, this.anchor = n.calcAnchorPosition(this.size, t.anchor))
            },
            _onLoad: function(t, e, i) {
                var o = n.Size(i.width, i.height),
                    s = t.origin ? t.origin.clone().mul(-1, -1) : n.Point(0, 0);
                Nt.setSize(i, t.scaledSize || o), Nt.setOffset(i, s), this.size = t.size || t.scaledSize || o, this.anchor = n.calcAnchorPosition(this.size, t.anchor), e()
            },
            _onError: function(t) {
                this.update(n.boxToIcon(), t)
            }
        }), n.SymbolIcon = function() {
            this.isSymbol = !0
        }, At(n.SymbolIcon, n.MarkerIcon, {
            update: function(t, e) {
                t = n.extend({}, n.SymbolIcon.DEFAULT_OPTIONS, t), this._manager ? this._manager.setOptions(t) : (this._manager = new(n.shapes[n.capitalize(t.style)])(t), this._element = this._manager.getElement(), this._element.style.position = "static", It.browser.msie && It.browser.version < 9 && (this._element.style.padding = t.strokeWeight)), this.size = this._calcSize(t), this.anchor = n.calcAnchorPosition(this.size, t.anchor), e()
            },
            _calcSize: function(t) {
                var e, i, o = 2 * t.strokeWeight;
                if (t.style === S.CIRCLE) e = i = 2 * t.radius;
                else {
                    var s = t.minBoundPoint,
                        r = t.maxBoundPoint;
                    e = Math.abs(r.x - s.x), i = Math.abs(r.y - s.y)
                }
                return n.Size(e + o, i + o)
            },
            getShapeElement: function() {
                return this._manager.getShapeElement()
            }
        }), n.SymbolIcon.DEFAULT_OPTIONS = {
            fillColor: "#000000",
            fillOpacity: 0,
            strokeColor: "#000000",
            strokeOpacity: 1,
            strokeStyle: "solid",
            strokeWeight: 1,
            simplifyLevel: 1
        }, n.CircleIcon = function() {
            this.type = J.circle
        }, At(n.CircleIcon, n.SymbolIcon, {}), n.PathIcon = function() {
            this.type = J.path
        }, At(n.PathIcon, n.SymbolIcon, {}), n.ClosedPathIcon = function() {
            this.type = J.closedPath
        }, At(n.ClosedPathIcon, n.SymbolIcon, {}), n.HtmlIcon = function() {
            this.type = J.html
        }, At(n.HtmlIcon, n.MarkerIcon, {
            update: function(t, e) {
                this._element && Nt.removeElement(this._element), n.isString(t.content) ? this._element = this._makeElement(t.content) : this._element = t.content, this.size = t.scaledSize || t.size || n.Size(0, 0), this.anchor = n.calcAnchorPosition(this.size, t.anchor), e()
            },
            _makeElement: function(t) {
                var e = Nt.createElement("DIV");
                return e.innerHTML = t, 1 == e.childNodes.length ? e.removeChild(e.firstChild) : e
            }
        }), n.MarkerAnimation = {
            _animation_changed: function() {
                if (!this._trans) {
                    var t = new n.Transition({
                            easing: n.easing.easeOutBounce,
                            duration: 700
                        }),
                        e = new n.Transition({
                            easing: n.easing.easeOutQuad,
                            duration: 350
                        }),
                        i = new n.Transition({
                            easing: n.easing.easeInQuad,
                            duration: 350
                        });
                    this._trans = {
                        drop: t,
                        bounceUp: e,
                        bounceDown: i
                    }
                }
                this.draw()
            },
            startTransition: function(t, e, i) {
                var n = this._getAnimation(t, e, i),
                    o = n.startTran,
                    s = n.startTranOptions;
                o.run(s.from, s.to)
            },
            stopTransition: function() {
                n.forEach(this._trans, function(t) {
                    t && (t.clearListeners(), t.stop())
                })
            },
            _getAnimation: function(t, e, i) {
                var n = this,
                    o = function(e) {
                        var n = e.progress;
                        t.style.left = n.left - i.x + "px", t.style.top = n.top - i.y + "px"
                    },
                    s = null,
                    r = null,
                    a = null;
                switch (this.animation) {
                    case w.BOUNCE:
                        var h = this._trans.bounceUp,
                            l = this._trans.bounceDown;
                        s = h, r = {
                            top: e.y,
                            left: e.x
                        }, a = {
                            top: e.y - 20,
                            left: e.x
                        }, h.addListener({
                            start: function() {
                                Nt.setOffsetWithAnchor(t, e, i)
                            },
                            progress: o,
                            complete: function() {
                                l.run(a, r)
                            }
                        }), l.addListener({
                            progress: o,
                            complete: function() {
                                h.run(r, a)
                            }
                        });
                        break;
                    case w.DROP:
                        var c = this._trans.drop,
                            u = this.get("containerTopLeft");
                        s = c, r = {
                            top: -u.y,
                            left: e.x
                        }, a = {
                            top: e.y,
                            left: e.x
                        }, c.addListener({
                            start: function() {
                                Nt.setOffsetWithAnchor(t, e, i)
                            },
                            progress: o,
                            complete: function() {
                                Nt.setOffsetWithAnchor(t, e, i), n.stopTransition(), n.set("animation", null, !0)
                            }
                        });
                        break;
                    default:
                        throw Error("Invalid animation.")
                }
                return {
                    startTran: s,
                    startTranOptions: {
                        from: r,
                        to: a
                    }
                }
            }
        }, n.MarkerDraggble = {
            THRESHOLD: 50,
            EVENT_NAME: {
                move: It.mobile ? "touchmove" : "mousemove",
                up: It.mobile ? "touchend" : "mouseup"
            },
            _init: function() {
                this._keyInfo = {}
            },
            _cleanUp: function() {
                this._dragReady = null, this._deltaMouseToMarker = null, this._startPageXY = null, this._startMousePoint = null, this._prevCursor = null, this._keyInfo = null, this._dragReadyListener = null
            },
            _enableDrag: function() {
                this.eventTarget && !this._dragReadyListener && (this._init(), this._dragReadyListener = this.addListener("mousedown", n.bind(this._onMouseDown, this)), this._panningTran || (this._panningTran = new n.Transition({
                    easing: n.easing.easeOutCubic,
                    step: 30,
                    duration: 1e3,
                    progress: Ot(this._onPanningTransition, this)
                })))
            },
            _disableDrag: function() {
                this.removeListener(this._dragReadyListener), this._dragReadyListener = null, this._panningTran && this._panningTran.stop(), this._cleanUp()
            },
            _onMouseDown: function(t) {
                if (Vt.preventDefault(t.domEvent), Vt.stopPropagation(t.domEvent), !(It.touchablePC && t.domEvent.which > 1 || !It.touchablePC && !It.mobile && 1 !== t.domEvent.which)) {
                    this.animation && this.stopTransition(), this._dListener = [Zt.addDOMListener(T, this.EVENT_NAME.move, Ot(this._onMouseMove, this), {
                        passive: !1
                    }), Zt.addDOMListener(T, this.EVENT_NAME.up, Ot(this._onMouseUp, this))], It.touchablePC && (this._dListener.push(Zt.addDOMListener(T, "touchmove", Ot(this._onMouseMove, this), {
                        passive: !1
                    })), this._dListener.push(Zt.addDOMListener(T, "touchend", Ot(this._onMouseUp, this))));
                    var e = t.pointerEvent.pos(),
                        i = t.point,
                        n = kt(e.pageX, e.pageY),
                        o = Nt.getOffset(this._wrapper);
                    this._deltaMouseToMarker = n.sub(o), this._startMousePoint = i, this._startPageXY = n, this._dragReady = !0
                }
            },
            _onMouseMove: function(t) {
                if (this._dragReady) {
                    t = Vt.fix(t), Vt.preventDefault(t);
                    var e = t.pos(),
                        i = kt(e.pageX, e.pageY);
                    if (this._isMoved(i)) {
                        var n = this._getDraggablePointerEvent(t),
                            o = i.sub(this.getMapOffset()).sub(this._deltaMouseToMarker);
                        this._dragStarted || (this._prevCursor = this.cursor, this.set("cursor", "url('" + V + "/closedhand.cur'), default"), Zt.trigger(this, "dragstart", n), this._detachToMarkerPane(), this._dragStarted = !0), Nt.setOffset(this._wrapper, o), this._detectDirection(o), Zt.trigger(this, "drag", n)
                    }
                }
            },
            _onMouseUp: function(t) {
                if (this._dragReady) {
                    t = Vt.fix(t), Vt.stopPropagation(t), Zt.removeDOMListener(this._dListener), this._panningTran.isRunning() && this._panningTran.stop();
                    var e = this._getDraggablePointerEvent(t),
                        i = e.coord,
                        n = this.getMap();
                    this._dragStarted ? (this._dragStarted = null, n.getBounds().hasPoint(i) || n.setCenter(i), this._attachToMarkerPane(), this.set("position", i), this.set("cursor", this._prevCursor), this._prevCursor = null, this._dragReady = null, Zt.trigger(this, "dragend", e)) : this.draw()
                }
            },
            _detachToMarkerPane: function() {
                Nt.addElement(this._wrapper, this.getMap().getElement())
            },
            _attachToMarkerPane: function() {
                Nt.addElement(this._wrapper, this.getPanes().overlayImage)
            },
            _detectDirection: function(t) {
                var e = this._keyInfo,
                    i = this._panningTran,
                    n = i.isRunning(),
                    o = this.get("mapSize"),
                    s = this.THRESHOLD,
                    r = t.x,
                    a = t.y,
                    h = r >= o.width - s,
                    l = r <= 0 + s,
                    c = a >= o.height - s,
                    u = a <= 0 + s;
                e[39] = h, e[37] = l, e[40] = c, e[38] = u, !n && (h || l || c || u) && i.run({
                    weight: 1
                }, {
                    weight: 40
                }, {
                    infinity: !0
                }), !n || h || l || c || u || i.stop()
            },
            _getXFactor: function() {
                var t = 0,
                    e = this._keyInfo;
                return e[37] && (t -= 1), e[39] && (t += 1), t
            },
            _getYFactor: function() {
                var t = 0,
                    e = this._keyInfo;
                return e[38] && (t -= 1), e[40] && (t += 1), t
            },
            _onPanningTransition: function(t) {
                var e = t.progress,
                    i = this._getXFactor(),
                    n = this._getYFactor(),
                    o = e.weight,
                    s = kt(i * o, n * o);
                this.getMap().panBy(s)
            },
            _isMoved: function(t) {
                return n.Math.distance(this._startPageXY, t) >= 5
            },
            _getDraggablePointerEvent: function(t) {
                var e = t.pos(),
                    i = kt(e.pageX, e.pageY),
                    n = this._calcNewMarkerCoordinates(i),
                    o = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
                return {
                    offset: n.offset,
                    point: n.point,
                    coord: n.coord,
                    pointerEvent: o,
                    domEvent: o,
                    overlay: this
                }
            },
            _calcNewMarkerCoordinates: function(t) {
                var e = this.getProjection(),
                    i = t.sub(this.getMapOffset()).sub(this.get("containerTopLeft")),
                    n = e.fromOffsetToPoint(i),
                    o = this.getPosition(),
                    s = e.fromCoordToPoint(o),
                    r = n.sub(this._startMousePoint),
                    a = s.add(r);
                return {
                    offset: e.fromPointToOffset(a),
                    point: a,
                    coord: e.fromPointToCoord(a)
                }
            }
        }, n.Marker = function(t) {
            this.OVERLAY_TYPE = "Marker", this.DEFAULT_OPTIONS = {
                icon: null,
                shape: null,
                cursor: "pointer",
                clickable: !0,
                draggable: !1,
                position: null,
                map: null,
                title: "",
                visible: !0,
                zIndex: null,
                simplifyLevel: 1,
                animation: null
            }, this._wrapper = this._createWrapper(), this.set("_nmarker_id", "nmarker-" + n.guid()), this.setOptions(Ct({}, this.DEFAULT_OPTIONS, t))
        }, At(n.Marker, n.OverlayView, [n.MarkerAnimation, n.MarkerDraggble], {
            setOptions: function(t) {
                var e = this;
                if ("string" == typeof t) {
                    var i = t,
                        o = arguments[1],
                        s = "set" + n.capitalize(i);
                    if ("shadow" === t) return void n.console.once("[DEPRECATED] The 'shadow' option of naver.maps.Marker is DEPRECATED.\nnaver.maps.Marker\uc758 'shadow' \uc635\uc158\uc740 \uc9c0\uc6d0 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");
                    e[s] ? e[s](o) : e.set(i, o)
                } else n.forEach(t, function(t, i) {
                    "map" !== i && e.setOptions(i, t)
                }), t.map && this.setMap(t.map)
            },
            setShadow: function() {
                n.console.info("[DEPRECATED] The 'setShadow' method is DEPRECATED.\n'setShadow' \uba54\uc11c\ub4dc\ub294 \uc9c0\uc6d0 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")
            },
            getShadow: function() {
                n.console.info("[DEPRECATED] The 'getShadow' method is DEPRECATED.\n'getShadow' \uba54\uc11c\ub4dc\ub294 \uc9c0\uc6d0 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")
            },
            getOptions: function(t) {
                var e = this,
                    i = {};
                return t ? this.get(t) : (n.forEach(this.DEFAULT_OPTIONS, function(t, n) {
                    i[n] = e.get(n)
                }), i)
            },
            setPosition: function(t) {
                this.set("position", n.box(t))
            },
            setIcon: function(t) {
                this.set("icon", t)
            },
            getDrawingRect: function() {
                var t = this._icon.size,
                    e = this._icon.anchor,
                    i = this._toPixelPoint(this.position);
                if (!t) return Dt.bounds(i.clone(), i.clone());
                var n = new kt(i.x - e.x, i.y - e.y),
                    o = new kt(i.x + t.width - e.x, i.y + t.height - e.y);
                return Dt.bounds(n, o)
            },
            toGeometry: function() {
                return {
                    type: tt,
                    coordinates: n.DataUtil.toPoint(this.getPosition()),
                    mantle_properties: this._getMantleProperties()
                }
            },
            getWrapElement: function() {
                return this._wrapper
            },
            getElement: function() {
                return this._wrapper
            },
            _toPixelPoint: function(t) {
                return this.getProjection().fromCoordToPixelPoint(t)
            },
            getAnchor: function() {
                if (this._icon) return this._icon.anchor
            },
            getSize: function() {
                if (this._icon) return this._icon.size
            },
            onAdd: function() {
                var t = this.getPanes().overlayImage,
                    e = this.getMap().getMapAction();
                t.appendChild(this._wrapper), this._addWrapListener(this._wrapper), this._addListener(this.eventTarget), this.bindTo("ef_overlayImage", e)
            },
            onRemove: function() {
                this.unbind("ef_overlayImage"), this._removeListener(), this._removeWrapListener(this._wrapper), Nt.removeElement(this._wrapper), this.stopTransition()
            },
            _zIndex_changed: function(t) {
                (0 === t || t) && Nt.setZIndex(this._wrapper, t)
            },
            _visible_changed: function(t) {
                Nt.visible(this._wrapper, !!t)
            },
            _position_changed: function() {
                this.draw()
            },
            _title_changed: function(t) {
                this._wrapper.title = t
            },
            _clickable_changed: function(t) {
                this.eventTarget && (this._wrapper.__clickable = !!t, this.eventTarget.__clickable = !!t, this._icon.getElement().__clickable = !!t, this.set("cursor", this.cursor))
            },
            _cursor_changed: function(t) {
                if (this.eventTarget) {
                    var e = this._getCursorState(t || "pointer"),
                        i = this._icon.getElement();
                    this._icon.isSymbol ? (this._wrapper.style.cursor = "inherit", this.eventTarget.style.cursor = e, i.style.cursor = e) : (this._wrapper.style.cursor = "inherit", i.style.cursor = "inherit", this.eventTarget.style.cursor = e)
                }
            },
            _draggable_changed: function(t) {
                this._updateDraggable(t)
            },
            _shape_changed: function(t) {
                this.updateShape(t)
            },
            _icon_changed: function(t) {
                var e = n.boxToIcon(t);
                n.equals(e, this._beforeBoxedIcon) || (this._icon && this._icon.type === J[e.type] || (this._icon && (this._removeFromWrapper(this._icon.getElement()), this._icon.destroy()), this._icon = new(n[n.capitalize(e.type) + "Icon"])), this._beforeBoxedIcon = e, this._icon.update(e, n.bind(this._icon_loaded, this)))
            },
            _icon_loaded: function() {
                this._icon.type === J.html ? this._wrapper.style.overflow = "visible" : (Nt.setSize(this._wrapper, this._icon.size), this._wrapper.style.overflow = "hidden"), this._transformOriginX = this._icon.anchor.x / this._icon.size.width * 100, this._transformOriginY = this._icon.anchor.y / this._icon.size.height * 100, this.draw(), this._addToWrapper(this._icon.getElement()), this.updateShape(this.shape)
            },
            draw: function() {
                if (this.map && this.position && this._icon.anchor && !this._dragStarted) {
                    var t = this.getProjection(),
                        e = this.position,
                        i = t.fromCoordToOffset(e);
                    this.stopTransition(), this.animation ? this.startTransition(this._wrapper, i, this._icon.anchor, this.animation) : Nt.setOffsetWithAnchor(this._wrapper, i, this._icon.anchor), this.get("ef_overlayimage") && Nt.transform(this._wrapper, 1, 0, 0, {
                        x: 0,
                        y: 0
                    })
                }
            },
            scale: function(t) {
                this.getMap() && this.get("ef_overlayimage") && this._transformOriginX && this._transformOriginY && Nt.setScaleByPercent(this._wrapper, 1 / t, {
                    x: this._transformOriginX,
                    y: this._transformOriginY
                }, !0)
            },
            updateShape: function(t) {
                this._icon.getElement() && (this.icon || this.shape || (t = Q), t ? (this._updateMaskTarget(), this._updateMask(t), this._updateAccessibility(), this._setEventTarget(this._mask.childNodes[0])) : (this._removeMaskTarget(), this._removeMask(), this._icon.isSymbol ? this._setEventTarget(this._icon.getShapeElement()) : this._setEventTarget(this._icon.getElement())))
            },
            _updateMaskTarget: function() {
                this._dummImg || (this._dummImg = this._createDummImg()), this._addToWrapper(this._dummImg), Nt.setSize(this._dummImg, this._icon.size), this._dummImg.useMap = "#" + this._nmarker_id
            },
            _updateMask: function(t) {
                this._mask || (this._mask = this._createShapeMap(t), this._addToWrapper(this._mask));
                var e = this._mask.getElementsByTagName("area")[0];
                e.shape = t.type, e.coords = t.coords
            },
            _updateAccessibility: function() {
                this._mask.getElementsByTagName("area")[0].alt = "\ub9c8\ucee4\uc758 \uacbd\uc704\ub3c4\ub294 " + n.DataUtil.toPoint(this.getPosition()) + " \uc785\ub2c8\ub2e4."
            },
            _removeMaskTarget: function() {
                this._removeFromWrapper(this._dummImg), this._dummImg = null
            },
            _removeMask: function() {
                this._mask && (this._removeFromWrapper(this._mask), delete this._mask)
            },
            _addToWrapper: function(t) {
                this._wrapper && this._wrapper.appendChild(t)
            },
            _removeFromWrapper: function(t) {
                if (this._wrapper) try {
                    this._wrapper.removeChild(t)
                } catch (t) {}
            },
            _setEventTarget: function(t) {
                this.eventTarget !== t && (this.eventTarget = t, this.set("clickable", this.clickable), this._removeListener(), this._addListener(this.eventTarget), this._updateDraggable(this.draggable))
            },
            _updateDraggable: function(t) {
                t ? this._enableDrag() : this._disableDrag()
            },
            _getCursorState: function(t) {
                return t = t || this.cursor, this.clickable ? t || "pointer" : "inherit"
            },
            _createWrapper: function() {
                var t = ["position:absolute;", "overflow:hidden;", "box-sizing:content-box !important"].join("");
                return Nt.createElement("div", t)
            },
            _createDummImg: function() {
                var t = Nt.createElement("img", "position:absolute;border:0;left:0px;top:0px;" + G);
                return Nt.disableSelection(t), t.src = Z, t.alt = "", t
            },
            _createShapeMap: function(t) {
                var e = Nt.createElement("map"),
                    i = Nt.createElement("area", "display: block"),
                    n = this;
                return e.name = this._nmarker_id, i.href = "#", i.onclick = function(t) {
                    return Vt.preventDefault(t), !1
                }, (It.browser.msie || It.browser.edge) && (i.onmouseover = function(t) {
                    if (!n.__hover) {
                        n._getListener("mouseenter")(t)
                    }
                    n._dummImg.style.cursor = n._getCursorState()
                }, i.onmouseout = function(t) {
                    n._getListener("mouseleave")(t), n._dummImg.style.cursor = ""
                }), e.appendChild(i), e
            },
            _addListener: function(t) {
                if (t && (this.clickable || this.draggable))
                    for (var e, i = 0, o = y.length; i < o; i++) e = y[i], this._listeners.push(n.Event.addDOMListener(t, e, this._getListener(e)))
            },
            _removeListener: function() {
                n.Event.removeDOMListener(this._listeners), this._listeners = []
            },
            _addWrapListener: function(t) {
                var e = this;
                e._wrapListeners = n.Event.addDOMListener(t, "mouseleave", function(t) {
                    e._getListener("mouseleave")(Vt.fix(t))
                })
            },
            _removeWrapListener: function() {
                n.Event.removeDOMListener(this._wrapListeners), this._wrapListeners = null
            },
            _getListener: function(t) {
                var e, i = this,
                    o = It.browser.msie && It.browser.version < 9;
                return e = n.Agent.mobile ? function(t, e) {
                        var n;
                        switch (t) {
                            case "click":
                                n = i._getSingleClickType(e)
                        }
                        return [n || t]
                    } : function(t, e) {
                        var s, r = t,
                            a = i._dragStarted;
                        switch (t) {
                            case "mouseenter":
                            case "mouseover":
                                if (a || i.__hover) return;
                                i.__hover = !0;
                                break;
                            case "mouseleave":
                            case "mouseout":
                                if (a || !i.__hover) return;
                                i.__hover = null;
                                break;
                            case "mousedown":
                                i.__dp__ = {
                                    x: e.pageX,
                                    y: e.pageY
                                };
                                break;
                            case "click":
                                if (a) return;
                                r = n.Math.distance(i.__dp__, {
                                    x: e.pageX,
                                    y: e.pageY
                                }) < 4 ? i._getSingleClickType(e) : null;
                                break;
                            case "mouseup":
                                o && (s = i._getSingleClickType(e, o))
                        }
                        return [void 0, r, s]
                    },
                    function(o) {
                        if (i.map && i.clickable) {
                            var s = Vt.fix(o),
                                r = i._getPointerEvent(s),
                                a = e(t, s);
                            n.forEach(a, function(t) {
                                t && Zt.trigger(i, I[t] || t, r)
                            })
                        }
                    }
            },
            _getPointerEvent: function(t) {
                if (!t) return this._fromCoordToPointerEvent(this.getPosition());
                var e = t.pos(),
                    i = kt(e.pageX, e.pageY),
                    n = this.getProjection(),
                    o = this.get("containerTopLeft"),
                    s = this.getMapOffset(),
                    r = kt(i.x - s.x, i.y - s.y).sub(o),
                    a = n.fromOffsetToPoint(r),
                    h = {
                        offset: r,
                        point: a,
                        coord: n.fromPointToCoord(a),
                        pointerEvent: t,
                        domEvent: t,
                        overlay: this
                    };
                return this.get("tileRepeatX") && (h.point = n.fromCoordToPoint(h.coord)), h
            }
        }), n.forEach(["position", "icon", "shape", "cursor", "clickable", "draggable", "title", "visible", "zIndex", "animation"], function(t) {
            var e = n.capitalize(t),
                i = "set" + e,
                o = "get" + e;
            n.Marker.prototype[i] || (n.Marker.prototype[i] = function() {
                this.get(t) !== arguments[0] && this.set(t, arguments[0])
            }), n.Marker.prototype[o] || (n.Marker.prototype[o] = function() {
                return this.get(t)
            })
        }), n.InfoWindow = function(t) {
            this.DEFAULT_OPTIONS = {
                position: null,
                zIndex: 0,
                maxWidth: 0,
                pixelOffset: kt(0, 0),
                backgroundColor: "#fff",
                borderColor: "#333333",
                borderWidth: 1,
                disableAutoPan: !1,
                disableAnchor: !1,
                anchorSkew: !1,
                anchorSize: Bt(20, 24),
                anchorColor: "#ffffff"
            }, this._iconAnchor = kt(0, 0), this._boundary = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            }, this._disabled = !1, this._drawRequired = !1, this._resizeRequired = !1, this._prepareDOM(), this.setOptions(Ct({}, this.DEFAULT_OPTIONS, t), !0)
        }, At(n.InfoWindow, n.OverlayView, {
            _prepareDOM: function() {
                var t = function(t) {
                        return Nt.createElement("div", t)
                    },
                    e = j + "width:0;height:0;position:absolute;border:solid 0 transparent;pointer-events:none;",
                    i = t(X + "cursor:default;"),
                    n = t("margin:0;padding:0;border:solid 0 transparent;display:inline-block;box-sizing:content-box !important;"),
                    o = t(e),
                    s = t(e);
                Nt.isSupportedCSS3Style("transform") && (o.style[Nt.css3Styles.transformOrigin] = "right bottom", s.style[Nt.css3Styles.transformOrigin] = "right bottom"), i.appendChild(n), i.appendChild(o), i.appendChild(s), this.wrapper = i, this.contentWrap = n, this.anchorBack = o, this.anchorFore = s
            },
            _calculateSize: function() {
                var t = this.getPanes(),
                    e = this.getContentElement(),
                    i = this.get("maxWidth") || 0,
                    n = Bt(60, 30);
                if (t) {
                    var o = t.floatPane;
                    if (e && (n = Nt.calculateSize(e, o)), i > 0 && n.width > i) {
                        var s = e.cloneNode(!0);
                        s.style.width = i + "px", n = Nt.calculateSize(s, o), Nt.removeElement(s), s = null
                    }
                }
                this.set("contentSize", n)
            },
            getElement: function(t) {
                if (!t && !this.element) return null;
                var e = this.element || t.getMapView().getInfoWindowElement();
                return this.element = e, e
            },
            getWrapElement: function() {
                return this.wrapper
            },
            getContentElement: function() {
                return this.contentElement
            },
            setOptions: function(t) {
                var e = this,
                    i = function(t, i) {
                        "position" === t && (i = n.box(i)), "anchorSize" === t && (i = n.box(i, n.Size)), "pixelOffset" === t && (i = n.box(i, n.Point)), e.set(t, i)
                    };
                if ("string" == typeof t) {
                    var o = t,
                        s = arguments[1];
                    i(o, s)
                } else n.forEach(t, function(t, e) {
                    i(e, t)
                });
                this._disabled = !1, this._resizeRequired ? this.resize() : this._drawRequired && this.draw(), this._resizeRequired = !1, this._drawRequired = !1
            },
            getOptions: function(t) {
                var i = this,
                    o = {};
                return t !== e ? this.get(t) : (n.forEach(i.DEFAULT_OPTIONS, function(t, e) {
                    o[e] = i.get(e)
                }), o)
            },
            open: function(t, e) {
                if (!t) throw new Error("unassigned map");
                if (e) {
                    var i = e.getPosition ? e.getPosition().clone() : n.box(e);
                    this._iconAnchor = e.getAnchor && e.getAnchor() ? e.getAnchor().clone() : kt(0, 0), this.set("position", i, !0)
                }
                if (!this.get("position")) throw new Error("position or anchor should be assigned.");
                this.getContent() || this.setContent(""), this.setMap(t), !1 === this.get("disableAutoPan") && this._panToVisible()
            },
            close: function() {
                this.setMap(null)
            },
            _panToVisible: function() {
                if (this.getMap()) {
                    var t = this.getMap();
                    if (!t.getMapAction().isTranRunning()) {
                        var e = t.getMapModel(),
                            i = this.getProjection(),
                            n = i.fromCoordToOffset(t.getCenter()),
                            o = t.getSize(),
                            s = this._boundary,
                            r = e.get("containerTopLeft"),
                            a = kt(0, 0),
                            h = {
                                left: r.x + s.x,
                                top: r.y + s.y,
                                right: r.x + s.x + s.w,
                                bottom: r.y + s.y + s.h
                            },
                            l = {
                                left: h.left < 0,
                                top: h.top < 0,
                                right: h.right > o.width,
                                bottom: h.bottom > o.height
                            };
                        l.left && !l.right ? a.x += h.left - 20 : !l.left && l.right && (a.x += h.right - o.width + 20), l.top && !l.bottom ? a.y += h.top - 20 : !l.top && l.bottom && (a.y += h.bottom - o.height + 20), 0 === a.x && 0 === a.y || (a.y > 0 && (a.y += this._iconAnchor.y), n.add(a), t.panTo(i.fromOffsetToCoord(n), {
                            duration: 200
                        }))
                    }
                }
            },
            setContent: function(t) {
                this.set("content", t)
            },
            getContent: function() {
                return this.get("content")
            },
            setPosition: function(t) {
                if (!t) throw new Error("Property 'position' is required.");
                this.set("position", n.box(t))
            },
            getPosition: function() {
                return this.get("position")
            },
            setZIndex: function(t) {
                t = parseInt(t || 0, 10), this.set("zIndex", t)
            },
            getZIndex: function() {
                return this.get("zIndex")
            },
            onAdd: function() {
                if (this.getMap()) {
                    var t = this.getMap(),
                        e = this.getPanes().floatPane,
                        i = this.getElement(t);
                    i.style.zIndex = n.toNumber(this.get("zIndex")), t.closeInfoWindow(), t.getMapModel().set("infowindow", this), e.appendChild(i), this._calculateSize();
                    var o = this.getPosition();
                    Zt.trigger(this, "open", this._fromCoordToPointerEvent(o))
                }
            },
            draw: function() {
                if (this.getMap()) {
                    if (this._disabled) return void(this._drawRequired = !0);
                    var t = this.getElement(),
                        e = this.wrapper;
                    e.parentNode !== t && (t.innerHTML = "", t.appendChild(e));
                    var i = this.getBoundary();
                    Nt.setOffset(t, i.x, i.y), this.get("ef_floatpane") && Nt.transform(t, 1, 0, 0, {
                        x: 0,
                        y: 0
                    })
                }
            },
            scale: function(t) {
                if (this.get("ef_floatpane")) {
                    var e = this.getElement(),
                        i = this.getBoundary();
                    Nt.setScale(e, 1 / t, {
                        x: i.w / 2,
                        y: i.h
                    }, !0)
                }
            },
            resize: function() {
                if (this.getMap()) {
                    if (this._disabled) return void(this._resizeRequired = !0);
                    this._calculateSize(), this.draw()
                }
            },
            getBoundary: function() {
                var t = this.getProjection(),
                    e = this.get("position"),
                    i = t.fromCoordToOffset(e).clone().round(),
                    n = this.get("contentSize"),
                    o = 2 * this.get("borderWidth"),
                    s = this.get("pixelOffset"),
                    r = this._iconAnchor,
                    a = this.get("disableAnchor") ? 0 : this.get("anchorSize").height,
                    h = kt((n.width + o) / 2, n.height + o + a),
                    l = i.clone().sub(h.sub(s.x, s.y - r.y));
                return this._boundary = {
                    x: l.x,
                    y: l.y,
                    w: n.width + o,
                    h: i.y - r.y - l.y,
                    anchor: r
                }, this._boundary
            },
            onRemove: function() {
                if (this.getMap()) {
                    this.getMap().getMapModel().set("infowindow", null), Nt.removeElement(this.element), Nt.removeElement(this.wrapper), Zt.trigger(this, "close", this._fromCoordToPointerEvent(this.getPosition()))
                }
            },
            _changeContent: function(t) {
                var e = this.contentWrap,
                    i = t || this.contentElement;
                this._calculateSize(), e.innerHTML = "", i && e.appendChild(i), this.draw()
            },
            _content_changed: function(t) {
                var e = null;
                if ("string" == typeof t) {
                    var i = Nt.createElement("div");
                    i.innerHTML = t;
                    for (var n = i.childNodes, o = n.length, s = 0, r = o; s < r; s++) {
                        var a = n[s].nodeType;
                        if (1 === a) {
                            if (e) {
                                e = i;
                                break
                            }
                            e = n[s]
                        } else 1 === o && 3 === a && (e = i)
                    }
                } else e = t;
                this.contentElement = e, this._changeContent(e)
            },
            _contentSize_changed: function(t) {
                var e = this.anchorBack,
                    i = this.anchorFore,
                    o = this.get("anchorSize"),
                    s = this.get("pixelOffset"),
                    r = this.get("borderWidth"),
                    a = 0 === r ? 0 : 2;
                Nt.setSize(this.contentWrap, t), e.style.left = i.style.left = n.round(t.width / 2 - o.width / 2 - s.x) + "px", e.style.bottom = n.round(-1 * (o.height - s.y) - r) + "px", i.style.bottom = n.round(-1 * (o.height - s.y) + a) + "px"
            },
            _position_changed: function(t) {
                this.draw()
            },
            _borderColor_changed: function(t) {
                this.wrapper.style.borderColor = t, this.anchorBack.style.borderTopColor = t
            },
            _borderWidth_changed: function(t) {
                this.wrapper.style.borderWidth = t + "px", this.resize()
            },
            _maxWidth_changed: function(t) {
                this.resize()
            },
            _anchorSize_changed: function(t) {
                var e = t.width / 2,
                    i = this.anchorBack.style,
                    n = this.anchorFore.style,
                    o = this.get("pixelOffset"),
                    s = this.get("borderWidth"),
                    r = 0 === s ? 0 : 2;
                i.borderLeftWidth = n.borderLeftWidth = e + "px", i.borderRightWidth = n.borderRightWidth = e + "px";
                var a = t.height - o.y;
                i.borderTopWidth = n.borderTopWidth = (a < 0 ? 0 : a) + "px", i.bottom = -1 * (t.height - o.y) - s + "px", n.bottom = -1 * (t.height - o.y) + r + "px", this.resize()
            },
            _anchorSkew_changed: function(t) {
                if (Nt.isSupportedCSS3Style("transform")) {
                    var e = !0 === t ? -40 : 0;
                    this.anchorBack.style[Nt.css3Styles.transform] = "skewX(" + e + "deg)", this.anchorFore.style[Nt.css3Styles.transform] = "skewX(" + e + "deg)", this.anchorBack.style.marginLeft = !0 === t ? -1 - this.get("borderWidth") + "px" : 0, this.draw()
                }
            },
            _anchorColor_changed: function(t) {
                this.anchorFore.style.borderTopColor = t
            },
            _pixelOffset_changed: function(t) {
                if (this.get("contentSize")) {
                    var e = this.get("contentSize"),
                        i = this.anchorBack.style,
                        n = this.anchorFore.style,
                        o = this.get("anchorSize");
                    i.left = n.left = e.width / 2 - o.width / 2 - t.x + "px", this.set("anchorSize", this.get("anchorSize"))
                }
            },
            _disableAnchor_changed: function(t) {
                var e = this.anchorBack.style,
                    i = this.anchorFore.style;
                e.display = i.display = t ? "none" : "", this.draw()
            },
            _zIndex_changed: function(t) {
                var e = this.getElement();
                e && (e.style.zIndex = t)
            },
            _backgroundColor_changed: function(t) {
                this.wrapper.style.background = t
            },
            _getPointerEvent: function(t) {
                return this._fromCoordToPointerEvent(this.getPosition())
            }
        }), n.GroundOverlay = function(t, e, i) {
            this.DEFAULT_OPTIONS = {
                clickable: !0,
                map: null,
                opacity: 1
            }, this.set("url", t), this.set("bounds", n.box(e)), this._clonedWrapper = null, this._prepareDOM(), this._setOptions(Ct({}, this.DEFAULT_OPTIONS, i)), this._initEvent()
        }, At(n.GroundOverlay, n.OverlayView, {
            _prepareDOM: function() {
                var t = Nt.createElement("div", "position:absolute;overflow:hidden;z-index:10;"),
                    e = Nt.createElement("img", "position:absolute;left:0px;top:0px;border:0px;padding:0px;margin:0px;");
                e.src = this.get("url"), e.alt = "", Nt.disableSelection(e), Nt.addElement(e, t), this._wrapper = t, this._img = e
            },
            _setOptions: function(t) {
                var e = {};
                n.forEach(this.DEFAULT_OPTIONS, function(i, n) {
                    n in t && "map" !== n && (e[n] = t[n])
                }), this.setValues(e), t.map && this.setMap(t.map)
            },
            _bindDefaultEvent: function(t, e) {
                this._defaultListener = [Zt.addListener(e, "zooming", Ot(this._copyWrapperIntoZoomPane, this)), Zt.addListener(e, "idle", Ot(this._removeWrapperFromZoomPane, this))]
            },
            _initEvent: function() {
                var t = this._wrapper,
                    e = this;
                t && n.forEach(GROUND_DOMEVENTS, function(i) {
                    Zt.addDOMListener(t, i, e._getListener(i))
                })
            },
            _getListener: function(t) {
                var e, i = this,
                    o = It.browser.msie && It.browser.version < 9;
                return e = It.mobile ? function(t, e) {
                        var n;
                        switch (t) {
                            case "click":
                                n = i._getSingleClickType(e)
                        }
                        return [n || t]
                    } : function(t, e) {
                        var s, r = t;
                        switch (t) {
                            case "mousedown":
                                i.__dp__ = {
                                    x: e.pageX,
                                    y: e.pageY
                                };
                                break;
                            case "click":
                                r = n.Math.distance(i.__dp__, {
                                    x: e.pageX,
                                    y: e.pageY
                                }) < 4 ? i._getSingleClickType(e) : null;
                                break;
                            case "mouseup":
                                o && (s = i._getSingleClickType(e, o))
                        }
                        return [void 0, r, s]
                    },
                    function(o) {
                        if (i.getMap() && i.get("clickable")) {
                            var s = Vt.fix(o),
                                r = i._getPointerEvent(s),
                                a = e(t, s);
                            n.forEach(a, function(t) {
                                t && Zt.trigger(i, I[t] || t, r)
                            })
                        }
                    }
            },
            _getPointerEvent: function(t) {
                var e = t.pos(),
                    i = kt(e.pageX, e.pageY),
                    n = this.getProjection(),
                    o = this.get("containerTopLeft"),
                    s = this.getMapOffset(),
                    r = kt(i.x - s.x, i.y - s.y).sub(o),
                    a = n.fromOffsetToPoint(r),
                    h = {
                        offset: r,
                        point: a,
                        coord: n.fromPointToCoord(a),
                        pointerEvent: t,
                        domEvent: t,
                        overlay: this
                    };
                return this.get("tileRepeatX") && (h.point = n.fromCoordToPoint(h.coord)), h
            },
            _unbindEvent: function() {
                Zt.removeListener(this._defaultListener), this._defaultListener.length = 0, this._defaultListener = [], this.get("clickable") && (Zt.removeListener(this._clickableListener), this._clickableListener = [])
            },
            _copyWrapperIntoZoomPane: function() {
                if (!this._clonedWrapper) {
                    var t = this._wrapper.cloneNode(!0);
                    Nt.addElement(t, this.get("zoomPane")), this._clonedWrapper = t
                }
            },
            _removeWrapperFromZoomPane: function() {
                this._clonedWrapper && (Nt.removeElement(this._clonedWrapper), this._clonedWrapper = null)
            },
            _clickable_changed: function(t) {
                this._wrapper && (t ? (this._wrapper.__clickable = !0, this._wrapper.style.cursor = "pointer") : (this._wrapper.__clickable = !1, this._wrapper.style.cursor = ""))
            },
            getBounds: function() {
                return this.get("bounds")
            },
            getOpacity: function() {
                return this.get("opacity")
            },
            setOpacity: function(t) {
                this.set("opacity", t)
            },
            getUrl: function() {
                return this.get("url")
            },
            onAdd: function() {
                var t = this.getMap();
                t && (Nt.addElement(this._wrapper, this.getPanes().overlayLayer), this.bindTo("zoomPane", t.getMapView()), this._bindDefaultEvent(t, t.getMapAction()))
            },
            draw: function() {
                if (this.getMap()) {
                    var t = this.getBounds(),
                        e = this.getProjection(),
                        i = e.fromCoordToOffset(t.getMax()).round(),
                        n = e.fromCoordToOffset(t.getMin()).round(),
                        o = Dt.bounds(i, n),
                        s = o.getMin(),
                        r = o.getMax(),
                        a = s.x,
                        h = s.y,
                        l = r.x,
                        c = r.y,
                        u = Bt(Math.abs(l - a), Math.abs(c - h));
                    Nt.setOffset(this._wrapper, a, h), Nt.setSize(this._wrapper, u), Nt.setSize(this._img, u)
                }
            },
            onRemove: function() {
                this.getMap() && (this.unbind("zoomPane"), this._unbindEvent(), Nt.removeElement(this._wrapper))
            },
            _opacity_changed: function(t) {
                Nt.setOpacity(this._wrapper, t)
            }
        }), n.AbstractShapeOverlay = function(t) {
            this._shape = this._createShape(), t = Ct({}, this.DEFAULT_OPTIONS || {}, t), this.setOptions(t), this._initEvent()
        }, At(n.AbstractShapeOverlay, n.OverlayView, [n.CalcShapeDrawingPixelBounds], {
            _initEvent: function() {
                var t = this._shape.getShapeElement();
                if (t)
                    for (var e, i = 0, n = m.length; i < n; i++) e = m[i], Zt.addDOMListener(t, e, this._getListener(e))
            },
            _getPointerEvent: function(t) {
                if (t) {
                    var e = t.pos(),
                        i = kt(e.pageX, e.pageY),
                        n = this.getProjection(),
                        o = this.get("containerTopLeft"),
                        s = this.getMapOffset(),
                        r = kt(i.x - s.x, i.y - s.y).sub(o),
                        a = n.fromOffsetToPoint(r),
                        h = {
                            offset: r,
                            point: a,
                            coord: n.fromPointToCoord(a),
                            pointerEvent: t,
                            domEvent: t,
                            overlay: this
                        };
                    return this.get("tileRepeatX") && (h.point = n.fromCoordToPoint(h.coord)), h
                }
                if (this.getCenter) return this._fromCoordToPointerEvent(this.getCenter());
                if (this.getBounds) {
                    var l = this.getBounds();
                    return l ? this._fromCoordToPointerEvent(l.getCenter()) : {}
                }
            },
            _getListener: function(t) {
                var e, i = this,
                    o = It.browser.msie && It.browser.version < 9;
                return e = It.mobile ? function(t, e) {
                        var n;
                        switch (t) {
                            case "click":
                                n = i._getSingleClickType(e)
                        }
                        return [n || t]
                    } : function(t, e) {
                        var s, r, a = t;
                        switch (t) {
                            case "mousedown":
                                i.__dp__ = {
                                    x: e.pageX,
                                    y: e.pageY
                                };
                                break;
                            case "click":
                                It.browser.msie && (s = "mouseup"), a = n.Math.distance(i.__dp__, {
                                    x: e.pageX,
                                    y: e.pageY
                                }) < 4 ? i._getSingleClickType(e) : null;
                                break;
                            case "mouseup":
                                o && (r = i._getSingleClickType(e, o))
                        }
                        return [s, a, r]
                    },
                    function(o) {
                        if (i.getMap() && i.getClickable()) {
                            var s = Vt.fix(o),
                                r = i._getPointerEvent(s),
                                a = e(t, s);
                            n.forEach(a, function(t) {
                                t && Zt.trigger(i, I[t] || t, r)
                            })
                        }
                    }
            },
            setOptions: function(t) {
                var i = this.PROPERTIES_NAME || [],
                    o = this;
                if ("string" == typeof t) {
                    var s = t,
                        r = arguments[1],
                        a = {}; - 1 === n.getIndexOfElement(i, s) ? o.setStyles(s, r) : (a[s] = r, o.setValues(a))
                } else n.forEach(t, function(t, e) {
                    "map" !== e && o.setOptions(e, t)
                }), t.map !== e && this.setMap(t.map)
            },
            getOptions: function(t) {
                var i = {},
                    o = this;
                return t !== e ? o.get(t) : (n.forEach(o.DEFAULT_OPTIONS || {}, function(t, e) {
                    i[e] = o.get(e)
                }), i)
            },
            setStyles: function(t) {
                var e = this.PROPERTIES_NAME || [],
                    i = this;
                if ("string" == typeof t) {
                    var o = t,
                        s = arguments[1],
                        r = {};
                    if (-1 !== n.getIndexOfElement(e, o)) throw new Error("The '" + o + "' is not style property.");
                    i.set(o, s), r[o] = s, i._shape.setOptions(r)
                } else n.forEach(t, function(t, e) {
                    i.setStyles(e, t)
                })
            },
            getStyles: function(t) {
                var i = this.PROPERTIES_NAME || [],
                    o = {},
                    s = this;
                if (t !== e) {
                    if (-1 === n.getIndexOfElement(i, t)) return s.get(t);
                    throw new Error("The '" + t + "' is not style property.")
                }
                return n.forEach(s.DEFAULT_OPTIONS || {}, function(t, e) {
                    -1 === n.getIndexOfElement(i, e) && (o[e] = s.get(e))
                }), o
            },
            setVisible: function(t) {
                this.set("visible", t), this._shape.setOptions({
                    visible: t
                })
            },
            getVisible: function() {
                return this.get("visible")
            },
            setZIndex: function(t) {
                this.set("zIndex", t), this._shape.setOptions({
                    zIndex: t
                })
            },
            getZIndex: function() {
                return this.get("zIndex") || 0
            },
            setClickable: function(t) {
                this.set("clickable", t)
            },
            getClickable: function() {
                return this.get("clickable")
            },
            _clickable_changed: function(t) {
                var e = this.getWrapElement();
                e && (t ? (e.__clickable = !0, e.style.cursor = "pointer") : (e.__clickable = !1, e.style.cursor = ""))
            },
            draw: function() {
                if (this.getMap() && (this._draw(), this.get("ef_overlaylayer"))) {
                    var t = this.getElement(),
                        e = this.strokeWeight;
                    t.style.strokeWidth = e + "px"
                }
            },
            onAdd: function() {
                if (this.getMap() && this._shape.element) {
                    var t = this.getPanes().overlayLayer,
                        e = this.getMap().getMapAction();
                    t.appendChild(this._shape.element), this.__added = !0, this.get("ef_overlaylayer") && (this._mapActionListener = Zt.addListener(e, "scale", Ot(this._onScale, this)))
                }
            },
            onRemove: function() {
                if (this.getMap() && this._shape.element && this.__added) {
                    this.getPanes().overlayLayer.removeChild(this._shape.element), Zt.removeListener(this._clickableListener), this._mapActionListener && Zt.removeListener(this._mapActionListener), this.__added = !1, this._mapActionListener = null
                }
            },
            scale: function(t) {
                if (this.get("ef_overlaylayer") && this.strokeWeight) {
                    var e = this.getElement(),
                        i = this.strokeWeight;
                    e.style.strokeWidth = 1 * i / t + "px"
                }
            },
            _createShape: function() {
                throw new Error("please implement this method")
            },
            getShape: function() {
                return this._shape || null
            },
            getBounds: function() {
                return null
            },
            _draw: function() {
                throw new Error("please implement this method")
            },
            getElement: function() {
                return this._shape.getShapeElement()
            },
            getWrapElement: function() {
                return this._shape.getElement()
            }
        }), n.Polyline = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                path: [],
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 2,
                strokeStyle: "solid",
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                visible: !0,
                clickable: !1,
                simplifyLevel: 1,
                startIcon: null,
                startIconSize: null,
                endIcon: null,
                endIconSize: null,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Polyline", this.PROPERTIES_NAME = ["path", "map"], n.AbstractShapeOverlay.call(this, t)
        }, At(n.Polyline, n.AbstractShapeOverlay, {
            setPath: function(t) {
                if (!n.isArray(t) && t.constructor !== n.KVOArray) throw new Error("path must be Array or naver.maps.KVOArray");
                var e;
                e = n.isArray(t) ? t[0] instanceof kt ? new n.KVOArray(t) : new n.KVOArray(n.boxToPath(t)) : t, this._unbindPath(), this.set("path", e), this._bindPath(), this.draw()
            },
            _bindPath: function() {
                var t = this.getPath(),
                    e = Ot(this.draw, this);
                Zt.addListener(t, "insert_at", e), Zt.addListener(t, "remove_at", e), Zt.addListener(t, "set_at", e)
            },
            _unbindPath: function() {
                var t = this.getPath();
                t && Zt.clearInstanceListeners(t)
            },
            getPath: function() {
                return this.get("path")
            },
            getBounds: function() {
                var t = this.getPath();
                if (!t || 0 === t.getLength()) return null;
                var e = t.getAt(0),
                    i = Dt(e.clone(), e.clone());
                if (t.forEach(function(t) {
                        i.extend(t)
                    }), e instanceof zt) {
                    var n = i.getMin(),
                        o = i.getMax();
                    i = Rt([n.x, n.y, o.x, o.y])
                }
                return i
            },
            getDistance: function() {
                var t = this.getPath().getArray(),
                    e = this.getProjection();
                if (!t || 0 === t.length || !e) return 0;
                for (var i = 0, n = 0, o = t.length; n < o && n + 1 !== o; n++) i += e.getDistance(t[n], t[n + 1]);
                return i
            },
            _createShape: function() {
                return new n.shapes.Path
            },
            _draw: function() {
                var t = this._project(this.getPath());
                t.path.length > 0 && this._shape.setPath(t.path, t.minBoundPoint, t.maxBoundPoint, this.get("simplifyLevel"))
            },
            _project: function(t) {
                var e = this.getProjection(),
                    i = [],
                    n = 1 / 0,
                    o = 1 / 0,
                    s = -1 / 0,
                    r = -1 / 0;
                return t.forEach(function(t) {
                    var a = e.fromCoordToOffset(t).round();
                    n = Math.min(a.x, n), o = Math.min(a.y, o), s = Math.max(a.x, s), r = Math.max(a.y, r), i.push(a)
                }), 1 === i.length && i.push(i[0].clone()), {
                    path: i,
                    minBoundPoint: kt(n, o),
                    maxBoundPoint: kt(s, r)
                }
            },
            _simplifyLevel_changed: function() {
                this.getMap() && this._draw()
            },
            _path_changed: function() {},
            toGeometry: function() {
                return {
                    type: et,
                    coordinates: n.DataUtil.fromPointArrayToCoordinates(this.getPath()),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), n.Polygon = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                paths: [],
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                strokeLineCap: "butt",
                strokeLineJoin: "miter",
                clickable: !1,
                simplifyLevel: 1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Polygon", this.PROPERTIES_NAME = ["paths", "map"], n.AbstractShapeOverlay.call(this, t)
        }, At(n.Polygon, n.AbstractShapeOverlay, {
            _isPath: function(t) {
                var e = "array";
                if (!n.isArray(t) && (e = "kvoArray", t.constructor !== n.KVOArray)) throw e = null, new Error("path must be Array or naver.maps.KVOArray");
                return e
            },
            setPaths: function(t) {
                var e = this._isPath(t),
                    i = "kvoArray" === e ? t : new n.KVOArray;
                this._unbindPaths(), "array" === e && t.length > 0 && (t[0] instanceof kt ? i.push(new n.KVOArray(t)) : n.isArray(t[0]) && (!t[0][0] || t[0][0] instanceof kt ? n.forEach(t, function(t) {
                    i.push(new n.KVOArray(t))
                }) : "number" == typeof t[0][0] ? i.push(new n.KVOArray(n.boxToPath(t))) : n.forEach(t, function(t) {
                    i.push(new n.KVOArray(n.boxToPath(t)))
                }))), this.set("paths", i), this._bindPaths(), i.getLength() > 0 && this.draw()
            },
            setPath: function(t) {
                var e, i = this._isPath(t);
                e = "array" === i ? t[0] instanceof kt ? new n.KVOArray(t) : new n.KVOArray(n.boxToPath(t)) : t, this._unbindPaths(), this.getPaths().setAt(0, e), this._bindPaths(), this.draw()
            },
            _bindPaths: function() {
                var t = this.getPaths(),
                    e = Ot(this.draw, this);
                t.forEach(function(t) {
                    Zt.addListener(t, "insert_at", e), Zt.addListener(t, "remove_at", e), Zt.addListener(t, "set_at", e)
                })
            },
            _unbindPaths: function() {
                var t = this.getPaths();
                t && t.forEach(function(t) {
                    Zt.clearInstanceListeners(t)
                })
            },
            getPaths: function() {
                return this.get("paths")
            },
            getPath: function() {
                return this.get("paths").getAt(0)
            },
            getBounds: function() {
                var t, e = this.getPaths();
                if (!e || 0 === e.getLength()) return null;
                if (!(t = this.getPath()) || 0 === t.getLength()) return null;
                var i = t.getAt(0),
                    n = Dt(i.clone(), i.clone());
                if (e.forEach(function(t) {
                        t.forEach(function(t) {
                            n.extend(t)
                        })
                    }), i instanceof zt) {
                    var o = n.getMin(),
                        s = n.getMax();
                    n = Rt([o.x, o.y, s.x, s.y])
                }
                return n
            },
            _createShape: function() {
                return new n.shapes.ClosedPath
            },
            _draw: function() {
                var t = this._project(this.getPaths());
                t.paths.length > 0 && this._shape.setPath(t.paths, t.minBoundPoint, t.maxBoundPoint, this.get("simplifyLevel"))
            },
            _project: function(t) {
                var e = this.getProjection(),
                    i = [],
                    n = 1 / 0,
                    o = 1 / 0,
                    s = -1 / 0,
                    r = -1 / 0,
                    a = !1;
                return t.forEach(function(t) {
                    var h = [];
                    t.forEach(function(i) {
                        var l = e.fromCoordToOffset(i).round();
                        n = Math.min(l.x, n), o = Math.min(l.y, o), s = Math.max(l.x, s), r = Math.max(l.y, r), h.push(l), 1 === t.getLength() && h.push(l.clone()), a = !0
                    }), i.push(h)
                }), a || (i = []), {
                    paths: i,
                    minBoundPoint: kt(n, o),
                    maxBoundPoint: kt(s, r)
                }
            },
            getAreaSize: function() {
                var t = this.getProjection(),
                    e = this.getPaths(),
                    i = 0;
                return e.forEach(function(e) {
                    var o = e.getArray();
                    i += n.Math.getPolygonSize(o, t)
                }), i
            },
            _simplifyLevel_changed: function() {
                this.getMap() && this._draw()
            },
            _paths_changed: function() {},
            toGeometry: function() {
                return {
                    type: it,
                    coordinates: n.DataUtil.fromPolygonArrayToCoordinates([this.getPaths()])[0],
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), n.Rectangle = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                bounds: Rt(zt(0, 0), zt(0, 0)),
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                clickable: !1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Rectangle", this.PROPERTIES_NAME = ["bounds", "map"], n.AbstractShapeOverlay.call(this, t)
        }, At(n.Rectangle, n.AbstractShapeOverlay, {
            setBounds: function(t) {
                t = n.box(t);
                var e = t.getMin(),
                    i = t.getMax();
                t = t instanceof Rt ? Rt.bounds(e, i) : Dt.bounds(e, i), this.set("bounds", t), this.draw()
            },
            getBounds: function() {
                return this.get("bounds")
            },
            _createShape: function() {
                return new n.shapes.Rectangle
            },
            _draw: function() {
                var t = this.get("bounds"),
                    e = this.getProjection(),
                    i = e.fromCoordToOffset(t.getMin()).round(),
                    n = e.fromCoordToOffset(t.getMax()).round(),
                    o = Dt.bounds(i, n);
                this._shape.setBounds(o.getMin(), o.getMax())
            },
            getAreaSize: function() {
                var t, e = this.getBounds(),
                    i = this.getProjection(),
                    n = e.getMin(),
                    o = e.getMax();
                return t = e instanceof Rt ? zt(e.south(), e.east()) : kt(e.maxX(), e.minY()), i.getDistance(t, n) * i.getDistance(t, o)
            },
            _bounds_changed: function() {},
            toGeometry: function() {
                return {
                    type: "MultiPoint",
                    coordinates: this.getBounds().toArray(),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), n.Circle = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                center: zt(0, 0),
                radius: 0,
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                clickable: !1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Circle", this.PROPERTIES_NAME = ["center", "radius", "map"], n.AbstractShapeOverlay.call(this, t)
        }, At(n.Circle, n.AbstractShapeOverlay, {
            setCenter: function(t) {
                this.set("center", n.box(t)), this.draw()
            },
            getCenter: function() {
                return this.get("center")
            },
            setRadius: function(t) {
                this.set("radius", t), this.draw()
            },
            getRadius: function() {
                return this.get("radius")
            },
            getBounds: function() {
                var t = this.getProjection(),
                    e = this.getCenter(),
                    i = this.getRadius(),
                    n = t.getDestinationCoord(e, 0, i),
                    o = t.getDestinationCoord(e, 180, i),
                    s = t.getDestinationCoord(e, 90, i),
                    r = t.getDestinationCoord(e, 270, i),
                    a = Dt([r.x, o.y, s.x, n.y]);
                return e instanceof zt && (a = Rt([r.x, o.y, s.x, n.y])), a
            },
            _createShape: function() {
                return new n.shapes.Circle
            },
            _draw: function() {
                var t = this.get("center"),
                    e = this.get("radius"),
                    i = this.getProjection(),
                    n = i.fromCoordToOffset(t).round(),
                    o = i.getDestinationCoord(t, 90, e),
                    s = e;
                if (o) {
                    s = i.fromCoordToOffset(o).round().x - n.x
                }
                this._shape.setOptions({
                    center: n,
                    radius: s
                })
            },
            getAreaSize: function() {
                var t = this.getRadius();
                this.getProjection();
                return t * t * Math.PI
            },
            _center_changed: function() {},
            toGeometry: function() {
                return {
                    type: tt,
                    coordinates: this.getCenter().toArray(),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), n.Ellipse = function(t) {
            this.DEFAULT_OPTIONS = {
                map: null,
                bounds: Rt(zt(0, 0), zt(0, 0)),
                strokeColor: "#007EEA",
                strokeOpacity: 1,
                strokeWeight: 1,
                strokeStyle: "solid",
                fillColor: "none",
                fillOpacity: 1,
                visible: !0,
                clickable: !1,
                zIndex: 0
            }, this.OVERLAY_TYPE = "Ellipse", this.PROPERTIES_NAME = ["bounds", "map"], n.AbstractShapeOverlay.call(this, t)
        }, At(n.Ellipse, n.Rectangle, {
            _createShape: function() {
                return new n.shapes.Ellipse
            },
            getAreaSize: function() {
                var t, e = this.getBounds(),
                    i = this.getProjection(),
                    n = e.getMin(),
                    o = e.getMax();
                t = e instanceof Rt ? zt(e.south(), e.east()) : kt(e.maxX(), e.minY());
                var s = i.getDistance(t, n) / 2,
                    r = i.getDistance(t, o) / 2;
                return Math.PI * s * r
            },
            toGeometry: function() {
                this.getBounds();
                return {
                    type: "MultiPoint",
                    coordinates: this.getBounds().toArray(),
                    mantle_properties: this._getMantleProperties()
                }
            }
        }), n.ConverterUtil = {
            isXMLDoc: function(t) {
                if (!t) return !1;
                var e = (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            },
            isHexColor: function(t) {
                return /(^[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{6}$)/i.test(t)
            },
            isAlphabet: function(t) {
                return /^[A-Z]+$/i.test(t)
            },
            getElementsByTagName: function(t, e, i) {
                var n = t.getElementsByTagName(e);
                return 0 === n.length && -1 !== e.indexOf(":") && (n = t.getElementsByTagName(e.split(":")[1])), i ? [].slice.call(n) : n
            },
            getOneElementByTagName: function(t, e) {
                var i = n.ConverterUtil.getElementsByTagName(t, e, !0);
                return i.length > 0 ? i[0] : null
            },
            getElementByTagNameInParent: function(t, e, i) {
                for (var o, s = n.ConverterUtil.getElementsByTagName(t, e), r = 0, a = s.length; r < a; r++) {
                    var h = s[r];
                    if (h.parentNode.nodeName === i) {
                        o = h;
                        break
                    }
                }
                return o
            },
            getValueByTagName: function(t, e) {
                var i = void 0 !== e ? n.ConverterUtil.getElementsByTagName(t, e, !0) : t,
                    o = "";
                return i && (o = i.length ? i[0].textContent || i[0].innerText : i.textContent || i.innerText), o
            },
            getAttribute: function(t, e) {
                return t.getAttribute(e)
            },
            parseColor: function(t) {
                t = t || "", "#" === t.substr(0, 1) && (t = t.substr(1));
                var e, i = t.length,
                    n = "",
                    o = [];
                switch (i) {
                    case 3:
                    case 6:
                        n = t;
                        break;
                    case 8:
                        e = parseInt(t.substr(0, 2), 16) / 255, n = t.substr(6, 2) + t.substr(4, 2) + t.substr(2, 2)
                }
                return 0 === n.length || (o.push("#" + n), isNaN(e)) ? o[0] : (o.push(e), o)
            }
        };
    var Kt = n.ConverterUtil;
    ! function() {
        function t(t) {
            var e = Kt.getElementsByTagName(t, "bounds"),
                i = null;
            if (e && e.length) {
                var n = e[0],
                    o = parseFloat(Kt.getAttribute(n, "minlat")),
                    s = parseFloat(Kt.getAttribute(n, "minlon")),
                    r = parseFloat(Kt.getAttribute(n, "maxlat"));
                i = [s, o, parseFloat(Kt.getAttribute(n, "maxlon")), r]
            }
            return i
        }

        function e(t) {
            var e = {};
            return n.forEach(p, function(i) {
                var n = Kt.getValueByTagName(t, i);
                n && (e[i] = n)
            }), n.isEmptyObject(e) ? null : e
        }

        function i(t, e) {
            var i = Kt.getElementByTagNameInParent(t, "extensions", e),
                n = null;
            return i && (n = s(i)), n
        }

        function o(t, e, i, n) {
            var o = null,
                s = null;
            switch (t) {
                case "width":
                    s = "strokeWeight", o = Math.floor(+e / 25.4 * 96), isNaN(o) && (s = null);
                    break;
                case "opacity":
                    s = "strokeOpacity", o = parseFloat(e), isNaN(o) && (s = null);
                    break;
                case "linecap":
                    s = "strokeLineCap", o = e.toLowerCase();
                    break;
                case "pattern":
                    s = "strokeStyle", o = e.toLowerCase();
                    break;
                case "color":
                    s = "strokeColor", o = Kt.parseColor(e)
            }
            s && (i[t] = o, n[s] = o)
        }

        function s(t) {
            var e = {},
                i = {};
            if (t)
                for (var s = 0, r = d.length; s < r; s++) {
                    var a = d[s],
                        h = Kt.getValueByTagName(t, a);
                    h && o(a, h, e, i)
                }
            return {
                bypassStyle: n.isEmptyObject(e) ? null : e,
                mantleStyle: n.isEmptyObject(i) ? null : i
            }
        }

        function r(t) {
            var e = Kt.getAttribute(t, "lat"),
                i = Kt.getAttribute(t, "lon"),
                n = Kt.getValueByTagName(t, "ele"),
                o = [parseFloat(i), parseFloat(e)];
            return n && (n = parseFloat(n), isNaN(n) || o.push(n)), o
        }

        function a(t, e, i) {
            var n = {
                type: st,
                geometry: {
                    type: t,
                    coordinates: e
                }
            };
            return i && (i.bypassStyle && (n.properties = i.bypassStyle), i.mantleStyle && (n.geometry.mantle_properties = i.mantleStyle, n.geometry.mantle_properties.overlayType = "PolyLine")), n
        }

        function h(t) {
            var i = r(t),
                n = e(t),
                o = {
                    type: st,
                    geometry: {
                        type: tt,
                        coordinates: i
                    }
                };
            return n && (o.properties = n), o
        }

        function l(t, e) {
            var i = Kt.getElementsByTagName(t, "trkseg", !0),
                o = 1 === i.length,
                s = [];
            return n.forEach(i, function(t) {
                var e = Kt.getElementsByTagName(t, "trkpt", !0),
                    i = [];
                n.forEach(e, function(t) {
                    i.push(r(t))
                }), s.push(i)
            }), a(o ? et : nt, o ? s[0] : s, e)
        }

        function c(t, e) {
            var i = Kt.getElementsByTagName(t, "rtept", !0),
                o = [];
            return n.forEach(i, function(t) {
                o.push(r(t))
            }), a(et, o, e)
        }

        function u(e) {
            var o = Kt.getElementsByTagName(e, "wpt", !0),
                s = Kt.getElementsByTagName(e, "trk", !0),
                r = Kt.getElementsByTagName(e, "rte", !0),
                a = null,
                u = {
                    type: rt,
                    features: []
                },
                p = t(e);
            return p && (u.bbox = p), n.forEach(o, function(t) {
                (a = h(t)) && u.features.push(a)
            }), n.forEach(s, function(t) {
                (a = l(t, i(t, "trk"))) && u.features.push(a)
            }), n.forEach(r, function(t) {
                (a = c(t, i(t, "rte"))) && u.features.push(a)
            }), u
        }
        var p = ["time", "name", "desc", "cmt", "type", "sym"],
            d = ["color", "opacity", "width", "linecap", "pattern"];
        n.GPX = {
            fromGpxToGeoJson: u
        }
    }(),
    function() {
        function t(t, e) {
            e = e || ",", t = t.split(e);
            for (var i = [], n = 0, o = t.length; n < o; n++) i[n] = parseFloat(p(t[n]));
            return i
        }

        function e(e) {
            e = e.replace(/^\s*|\s*$/g, "").split(/\s+/);
            var i = [];
            return n.forEach(e, function(e) {
                i.push(t(e))
            }), i
        }

        function i(t, e, i) {
            e && (e = p(e)) && (i[t] = e)
        }

        function o(t) {
            return !!+t
        }

        function s(t, e) {
            var s = r(t),
                a = {},
                h = {};
            if (0 === s.length) return [];
            var l = Kt.getOneElementByTagName(t, "visibility");
            if (l) {
                var c = Kt.getValueByTagName(l);
                c = o(c), a.visibility = c, h.visible = c
            }
            var u = Kt.getValueByTagName(t, "styleUrl");
            if (u && "#" === u[0]) {
                a.styleUrl = u;
                var p = e[u];
                if (p.normal && p.highlight) {
                    var d = p.normal,
                        f = p.highlight,
                        g = e[d],
                        _ = e[f];
                    a[d] = g.o, a[f] = _.o, h[d] = g.m, h[f] = _.m, n.extend(h, g.m)
                } else {
                    var m = p.o,
                        y = p.m;
                    m && n.extend(a, m), y && n.extend(h, y)
                }
            }
            return i("name", Kt.getValueByTagName(t, "name"), a), i("address", Kt.getValueByTagName(t, "address"), a), i("description", Kt.getValueByTagName(t, "description"), a), n.isEmptyObject(h) || n.forEach(s, function(t) {
                t.mantle_properties = n.extend(t.mantle_properties, h)
            }), {
                type: st,
                geometry: 1 === s.length ? s[0] : {
                    type: ot,
                    geometries: s
                },
                properties: a
            }
        }

        function r(i) {
            var o = Kt.getOneElementByTagName(i, "MultiGeometry"),
                s = Kt.getOneElementByTagName(i, "gx:MultiTrack");
            if (o) return r(o);
            if (s) return r(s);
            var a = [];
            return n.forEach(c, function(o) {
                var s = Kt.getElementsByTagName(i, o);
                s && s.length > 0 && n.forEach(s, function(i) {
                    var s = null,
                        r = o,
                        h = null;
                    switch (o) {
                        case tt:
                            h = "Marker", s = t(Kt.getValueByTagName(i, "coordinates"));
                            break;
                        case et:
                            h = "Polyline", s = e(Kt.getValueByTagName(i, "coordinates"));
                            break;
                        case it:
                            h = "Polygon";
                            var l = Kt.getOneElementByTagName(i, "outerBoundaryIs"),
                                c = Kt.getElementsByTagName(i, "innerBoundaryIs"),
                                u = null;
                            s = [], l && (u = Kt.getOneElementByTagName(l, "LinearRing"), s.push(e(Kt.getValueByTagName(u, "coordinates")))), n.forEach(c, function(t) {
                                u = Kt.getOneElementByTagName(t, "LinearRing"), s.push(e(Kt.getValueByTagName(u, "coordinates")))
                            });
                            break;
                        case "gx:Track":
                            h = "Polyline", r = et, s = [];
                            var p = Kt.getElementsByTagName(i, "gx:coord", !0);
                            n.forEach(p, function(e) {
                                s.push(t(Kt.getValueByTagName(e), " "))
                            })
                    }
                    s && s.length > 0 && a.push({
                        type: r,
                        coordinates: s,
                        mantle_properties: {
                            overlayType: h
                        }
                    })
                })
            }), a
        }

        function a(t) {
            var e = Kt.getValueByTagName(t, "color"),
                i = Kt.getElementsByTagName(t, "width"),
                n = {
                    o: {},
                    m: {}
                };
            if (e) {
                var o = Kt.parseColor(e);
                n.o.color = e, n.m.strokeColor = o[0], n.m.strokeOpacity = o[1]
            }
            return i && i.length > 0 && (i = Kt.getValueByTagName(i), n.o.width = i, n.m.strokeWeight = i), n
        }

        function h(t) {
            var e = Kt.getValueByTagName(t, "color"),
                i = (Kt.getElementsByTagName(t, "fill"), Kt.getElementsByTagName(t, "outline"), {
                    o: {},
                    m: {}
                });
            if (e) {
                var n = Kt.parseColor(e);
                i.o.color = e, i.m.fillColor = n[0], i.m.fillOpacity = n[1]
            }
            return i
        }

        function l(t) {
            var e = {
                    type: rt,
                    features: []
                },
                i = Kt.getElementsByTagName(t, "Style", !0),
                o = Kt.getElementsByTagName(t, "StyleMap", !0),
                r = Kt.getElementsByTagName(t, "Placemark", !0),
                l = {};
            return n.forEach(i, function(t) {
                var e = Kt.getAttribute(t, "id"),
                    i = "#" + e;
                l[i] = {}, i.length > 1 && n.forEach(u, function(e) {
                    var o = Kt.getElementsByTagName(t, e, !0);
                    n.forEach(o, function(t) {
                        var o = null;
                        switch (e) {
                            case "LineStyle":
                                o = a(t);
                                break;
                            case "PolyStyle":
                                o = h(t)
                        }
                        l[i] = n.extend(l[i], o)
                    })
                })
            }), n.forEach(o, function(t) {
                var e = Kt.getAttribute(t, "id"),
                    i = "#" + e,
                    o = Kt.getElementsByTagName(t, "Pair", !0),
                    s = {};
                n.forEach(o, function(t) {
                    var e = Kt.getValueByTagName(t, "key"),
                        i = Kt.getValueByTagName(t, "styleUrl");
                    s[e] = i
                }), l[i] = s
            }), n.forEach(r, function(t) {
                e.features.push(s(t, l))
            }), e
        }
        var c = [it, et, tt, "gx:Track"],
            u = ["LineStyle", "PolyStyle"],
            p = function() {
                return String.prototype.trim ? function(t) {
                    return t.trim()
                } : function(t) {
                    return t.replace(/^\s+|\s+$/gm, "")
                }
            }();
        n.KML = {
            fromKmlToGeoJson: l
        }
    }(), n.Converter = {
        gpx: function(t) {
            if (!Kt.isXMLDoc(t)) throw new Error("Invalid Parameter Type Error.");
            return n.GPX.fromGpxToGeoJson(t)
        },
        kml: function(t) {
            if (!Kt.isXMLDoc(t)) throw new Error("Invalid Parameter Type Error.");
            return n.KML.fromKmlToGeoJson(t)
        }
    };
    n.Converter;
    n.DataUtil = {
        toPoint: function(t) {
            return t ? [t.x, t.y] : []
        },
        fromPointArrayToCoordinates: function(t) {
            var e = [];
            return t instanceof n.KVOArray && (t = t.getArray()), n.forEach(t, function(t) {
                e.push(n.DataUtil.toPoint(t))
            }), e
        },
        fromPointArrayListToCoordinates: function(t) {
            var e = [];
            return n.forEach(t, function(t) {
                t instanceof n.KVOArray && (t = t.getArray()), e.push(n.DataUtil.fromPointArrayToCoordinates(t))
            }), e
        },
        fromPolygonArrayToCoordinates: function(t) {
            var e = [];
            return t instanceof n.KVOArray && (t = t.getArray()), n.forEach(t, function(t) {
                t instanceof n.KVOArray && (t = t.getArray()), e.push(n.DataUtil.fromPointArrayListToCoordinates(t))
            }), e
        },
        _parsePoint: function(t) {
            return new naver.maps.Point(t)
        },
        _parseLineString: function(t) {
            var e = [];
            return n.forEach(t, function(t) {
                e.push(n.DataUtil._parsePoint(t))
            }), e
        },
        _parseMultiLineString: function(t) {
            var e = [];
            return n.forEach(t, function(t) {
                e.push(n.DataUtil._parseLineString(t))
            }), e
        },
        _parseMultiPolygon: function(t) {
            var e = [];
            return n.forEach(t, function(t, i) {
                e.push(n.DataUtil._parseMultiLineString(t))
            }), e
        }
    };
    n.DataUtil;
    n.DataLayer = function() {
        this._features = [], this._stylist = null, this._styleType = null
    }, At(n.DataLayer, n.KVO, {
        setMap: function(t) {
            this.set("map", t)
        },
        getMap: function() {
            return this.get("map")
        },
        addGeoJson: function(t, e) {
            for (var i = this._getFeaturesFrom(t), n = 0, o = i.length; n < o; n++) this.addFeature(i[n], e);
            t.bbox && this.getMap().fitBounds(t.bbox)
        },
        addGpx: function(t, e) {
            var i = n.Converter.gpx(t);
            i && this.addGeoJson(i, e)
        },
        addKml: function(t, e) {
            var i = n.Converter.kml(t);
            i && this.addGeoJson(i, e)
        },
        removeGeoJson: function(t) {
            var e = this._features,
                i = [];
            if (t.type === st) i.push(t);
            else {
                if (t.type !== rt) return;
                i = i.concat(t.features)
            }
            for (var o, s, r = e.length - 1; r >= 0; r--) {
                o = e[r], s = o.getRaw();
                for (var a = 0, h = i.length; a < h; a++)
                    if (n.equals(s, i[a])) {
                        this.removeFeature(o), i.splice(a, 1);
                        break
                    }
            }
        },
        addFeature: function(t, e) {
            t.setDataLayer(this), e && t.autoStyle(), this._listenFeature(t), this._features.push(t), Zt.trigger(this, "addfeature", {
                feature: t
            })
        },
        removeFeature: function(t) {
            var e = this._features,
                i = n.getIndexOfElement(e, t);
            i > -1 && (t.setDataLayer(null), this._unlistenFeature(t), e.splice(i, 1), Zt.trigger(this, "removefeature", {
                feature: t
            }))
        },
        getAllFeature: function() {
            return this._features
        },
        getFeatureById: function(t) {
            var e = null;
            return this.forEach(function(i) {
                if (i.getId() === t) return e = i, !0
            }), e
        },
        forEach: function(t) {
            var e = this.getAllFeature();
            return n.forEach(e, t)
        },
        _getFeaturesFrom: function(t) {
            var e = [],
                i = this;
            switch (t.type) {
                case rt:
                    n.forEach(t.features, function(t) {
                        e = e.concat(i._getFeaturesFrom(t))
                    });
                    break;
                case st:
                    e.push(new n.Feature(t))
            }
            return e
        },
        _listenFeature: function(t) {
            this._unlistenFeature(t);
            var e = t.EVENT_LIST,
                i = this;
            t.__dataLayerListeners = [], n.forEach(e, function(e) {
                t.__dataLayerListeners.push(Zt.forward(t, e, i))
            }), t.__dataLayerListeners.push(Zt.forward(t, "property_changed", this))
        },
        _unlistenFeature: function(t) {
            var e = t.__dataLayerListeners;
            e && (Zt.removeListener(e), t.__overlayListeners = null, delete t.__overlayListeners)
        },
        setStyle: function(t) {
            var e = t || null,
                i = null,
                o = this;
            e && (i = n.isFunction(e) ? "function" : "object", n.isFunction(e) || (e = function() {
                return t
            })), this._stylelist = e, this._styleType = i, e && this.forEach(function(t) {
                o._setFeatureStyle(t)
            })
        },
        getStyle: function() {
            return this._stylelist ? "function" !== this._styleType ? this._stylelist() : this._stylelist : null
        },
        overrideStyle: function(t, e) {
            this.set("overriden_style", e), this._setFeatureStyle(t, e)
        },
        revertStyle: function(t) {
            if (this.set("overriden_style", null), t) this._setFeatureStyle(t);
            else {
                var e = this;
                this.forEach(function(t) {
                    e._setFeatureStyle(t)
                })
            }
        },
        _setFeatureStyle: function(t, e) {
            if (this._stylelist || e) {
                var i = this._stylelist,
                    n = e || (i ? i(t) : null);
                n && t.setStyle(n)
            }
        },
        toGeoJson: function() {
            var t = {
                type: rt,
                features: []
            };
            return this.forEach(function(e) {
                t.features.push(e.toGeoJson())
            }), 1 === t.features.length && (t = t.features[0]), t
        }
    }), n.Geometry = function(t) {
        if (this._raw = t, !t.type || !t.coordinates) throw new Error("Invalid geojson!");
        this.set("id", n.guid()), this.set("type", t.type), this.set("coords", []), this._parseCoordinates()
    }, At(n.Geometry, n.KVO, {
        getRaw: function() {
            return this._raw
        },
        getMantleProperties: function() {
            return this._raw.mantle_properties
        },
        getId: function() {
            return this.get("id")
        },
        getType: function() {
            return this.get("type")
        },
        getCoords: function() {
            return this.get("coords")
        },
        _parseCoordinates: function() {
            var t = this.get("type"),
                e = this._raw.coordinates,
                i = [];
            switch (t) {
                case tt:
                    i = [n.DataUtil._parsePoint(e)];
                    break;
                case "MultiPoint":
                    i = n.DataUtil._parseLineString(e);
                    break;
                case et:
                    i = [n.DataUtil._parseLineString(e)];
                    break;
                case nt:
                    i = n.DataUtil._parseMultiLineString(e);
                    break;
                case it:
                    i = [n.DataUtil._parseMultiLineString(e)];
                    break;
                case "MultiPolygon":
                    i = n.DataUtil._parseMultiPolygon(e)
            }
            this.set("coords", i)
        },
        toGeoJson: function() {
            var t = (this.getRaw(), this.getType()),
                e = this.getCoords(),
                i = {
                    type: t,
                    coordinates: []
                };
            switch (t) {
                case tt:
                    i.coordinates = n.DataUtil.toPoint(e[0]);
                    break;
                case "MultiPoint":
                    i.coordinates = n.DataUtil.fromPointArrayToCoordinates(e);
                    break;
                case et:
                    i.coordinates = n.DataUtil.fromPointArrayToCoordinates(e[0]);
                    break;
                case nt:
                    i.coordinates = n.DataUtil.fromPointArrayListToCoordinates(e);
                    break;
                case it:
                    i.coordinates = n.DataUtil.fromPolygonArrayToCoordinates(e)[0];
                    break;
                case "MultiPolygon":
                    i.coordinates = n.DataUtil.fromPolygonArrayToCoordinates(e)
            }
            return i
        }
    }), n.Feature = function(t) {
        this._raw = t, this.EVENT_LIST = ["click", "dblclick", "mouseover", "mouseout", "mousedown", "mouseup", "rightclick"], this.DEFAULT_OVERLAY_STYLE = {
            strokeColor: "#000",
            strokeOpacity: .8,
            strokeWeight: 3,
            fillColor: "#000",
            fillOpacity: .3,
            clickable: !0
        }, this.set("type", t.type), this.set("id", t.id || n.guid()), this._initProperties(), this._initGeometryCollection(), this._initOverlay()
    }, At(n.Feature, n.KVO, {
        getRaw: function() {
            return this._raw
        },
        getId: function() {
            return this.get("id")
        },
        setProperty: function(t, e) {
            var i = this._propertyList || [],
                o = this.getProperty(t); - 1 === n.getIndexOfElement(i, t) && i.push(t), this.set("property_" + t, e), Zt.trigger(this, "property_changed", {
                feature: this,
                name: t,
                newValue: e,
                oldValue: o
            }), this._applyStyle()
        },
        getProperty: function(t) {
            return this.get("property_" + t)
        },
        getBounds: function() {
            return this.get("bounds") || null
        },
        getGeometries: function() {
            return this.get("geometryCollection")
        },
        getOverlays: function() {
            return this._overlays
        },
        forEachOverlay: function(t) {
            return n.forEach(this._overlays, t)
        },
        setStyle: function(t) {
            this.forEachOverlay(function(e) {
                var i = Ct(!0, {}, t || {});
                e instanceof naver.maps.Marker && !i.icon && null === e.getIcon() && (i.icon = null, delete i.icon), e.setOptions(i)
            })
        },
        autoStyle: function() {
            var t = this.getGeometries();
            this.forEachOverlay(function(e) {
                var i = e.__geometryId;
                i && n.forEach(t, function(t) {
                    t.getId() === i && e.setOptions(t.getMantleProperties())
                })
            })
        },
        setDataLayer: function(t) {
            this.set("dataLayer", t)
        },
        _initBounds: function() {
            var t = this._raw.bbox,
                e = null;
            t ? e = new naver.maps.PointBounds(this._raw.bbox) : this.forEachOverlay(function(t) {
                var i = null;
                t.getBounds ? i = t.getBounds() : t.getPosition && (i = Dt(t.getPosition().clone(), t.getPosition().clone())), i && (e = e ? e.union(i) : i.clone())
            }), this.set("bounds", e)
        },
        _initProperties: function() {
            var t = this._raw,
                e = t.properties,
                i = [],
                o = this;
            n.forEach(e, function(t, e) {
                i.push(e), o.set("property_" + e, t)
            }), this._propertyList = i
        },
        _initGeometryCollection: function() {
            var t = this._parseGeometry(this._raw.geometry);
            this.set("geometryCollection", t)
        },
        _parseGeometry: function(t) {
            var e = [],
                i = this;
            return t.type === ot ? n.forEach(t.geometries, function(t) {
                e = e.concat(i._parseGeometry(t))
            }) : e.push(new n.Geometry(t)), e
        },
        _initOverlay: function() {
            var t = this.get("geometryCollection"),
                e = this.DEFAULT_OVERLAY_STYLE,
                i = [];
            n.forEach(t, function(t) {
                var o = t.getType(),
                    s = t.getCoords(),
                    r = t.getMantleProperties(),
                    a = r ? r.overlayType : null,
                    h = r ? t.getId() : null;
                switch (o) {
                    case tt:
                        r && "Circle" === a ? i.push(new naver.maps.Circle({
                            center: s[0],
                            radius: r.radius,
                            __geometryId: h
                        })) : i.push(new naver.maps.Marker({
                            position: s[0],
                            __geometryId: h
                        }));
                        break;
                    case "MultiPoint":
                        r ? i.push(new naver.maps[a]({
                            bounds: new naver.maps.PointBounds(s[0], s[1]),
                            __geometryId: h
                        })) : n.forEach(s, function(t) {
                            i.push(new naver.maps.Marker({
                                position: t,
                                __geometryId: h
                            }))
                        });
                        break;
                    case et:
                    case nt:
                        n.forEach(s, function(t) {
                            i.push(new naver.maps.Polyline(Ct({
                                path: t,
                                __geometryId: h
                            }, e)))
                        });
                        break;
                    case it:
                    case "MultiPolygon":
                        var l = [];
                        n.forEach(s, function(t) {
                            n.forEach(t, function(t) {
                                l.push(t)
                            })
                        }), i.push(new naver.maps.Polygon(Ct({
                            paths: l,
                            __geometryId: h
                        }, e)))
                }
            }), this._initFeatureEvent(i), this._overlays = i
        },
        _initFeatureEvent: function(t) {
            var e = this,
                i = function(t, i) {
                    return Zt.addListener(t, i, function(t) {
                        var n = t || {};
                        n.feature = e, Zt.trigger(e, i, n)
                    })
                },
                o = e.EVENT_LIST,
                s = [];
            n.forEach(t, function(t) {
                n.forEach(o, function(e) {
                    s.push(i(t, e))
                })
            }), e._listeners = s
        },
        _applyStyle: function() {
            var t = this.get("dataLayer");
            if (t) {
                var e = t.getStyle(),
                    i = null,
                    o = t.get("overriden_style");
                e && (i = n.isFunction(e) ? e(this) : e), i && this.setStyle(i), o && this.setStyle(o)
            }
        },
        dataLayer_changed: function(t) {
            t ? (this._applyStyle(), this.bindTo("map", t)) : (this.unbind("map"), this.map_changed(null))
        },
        map_changed: function(t) {
            this.forEachOverlay(function(e) {
                e.setMap(t)
            }), this._initBounds()
        },
        toGeoJson: function() {
            var t = this._propertyList,
                e = this.getRaw(),
                i = {
                    id: this.getId(),
                    type: st,
                    properties: {},
                    geometry: {}
                },
                o = this.getOverlays(),
                s = this;
            return n.forEach(t, function(t) {
                var e = s.getProperty(t);
                n.hasValue(e) && (i.properties[t] = e)
            }), e.bbox && (i.bbox = e.bbox), e.crs && (i.crs = e.crs), o.length > 1 ? (i.geometry.type = ot, i.geometry.geometries = [], n.forEach(o, function(t) {
                i.geometry.geometries.push(t.toGeometry())
            })) : i.geometry = o[0].toGeometry(), i
        }
    });
    var Ht = function() {
            for (var t = i.getElementsByTagName("script"), e = "", n = t.length - 1; n >= 0 && (e = t[n].src || "", !p.test(e)); n--) e = "";
            return t = null, e
        },
        qt = function(t) {
            var e = i.createElement("a");
            e.href = t;
            var n = e.protocol,
                o = e.hostname || e.host;
            return 0 !== n.indexOf("http") && (n = "https:"), e = null, n + "//" + o + "/openapi/v3/maps-"
        };
    ! function() {
        var e = function(t, e) {
            this._parse(t);
            var i = this.submodules;
            if (i) {
                for (var n = [], o = 0, s = i.length; o < s; o++) n.push(e + i[o] + ".js");
                this.load(n, Ot(this.boot, this))
            } else this.boot()
        };
        e.prototype = {
            constructor: e,
            exec: function(e) {
                function i() {
                    if (s) {
                        var e = function(e) {
                            for (var i = t, n = e.split("."), o = n.length - 1, s = n[o], r = 0, a = o; r < a; r++) {
                                var h = n[r];
                                if (!(h in i)) return null;
                                i = i[h]
                            }
                            return i[s]
                        }(s);
                        e && (o.jsContentLoaded = !0, e())
                    }
                    o.onJSContentLoaded && (o.jsContentLoaded = !0, o.onJSContentLoaded())
                }
                if (!o.jsContentLoaded) {
                    var s = this.callback;
                    t.clearTimeout(this._t), n.isNumber(e) ? this._t = t.setTimeout(i, e) : i()
                }
            },
            boot: function() {
                var e = Zt.addDOMListener(t, "load", Ot(function() {
                    Zt.removeDOMListener(e), e = null, this.exec()
                }, this));
                this.exec(), o.jsContentLoaded || "complete" !== i.readyState || this.exec(10)
            },
            load: function(t, e) {
                var n = navigator.connection || {},
                    o = "cellular" === n.type && n.downlinkMax <= .115;
                "loading" !== i.readyState || o ? this._async(t, e) : this._sync(t, e)
            },
            _parse: function(t) {
                var e = t.split("?")[1];
                if (e) {
                    e = e.replace(/&amp;/gi, "&").split("&");
                    for (var i = e.length - 1; i >= 0; i--) {
                        var n = e[i];
                        if (0 === n.indexOf("submodules=")) {
                            var o = n.replace("submodules=", "");
                            o && (this.submodules = o.split(","))
                        } else 0 === n.indexOf("callback=") && (this.callback = n.replace("callback=", ""))
                    }
                }
            },
            _sync: function(t, e) {
                n.forEach(t, function(t) {
                    i.write('<script type="text/javascript" src="' + t + '"><\/script>')
                }), e()
            },
            _async: function(t, e) {
                for (var n = t.length, o = 0, s = function() {
                        ++o >= n && e()
                    }, r = i.body || i.getElementsByTagName("head")[0], a = 0, h = n; a < h; a++) {
                    var l = i.createElement("script");
                    l.type = "text/javascript", l.src = t[a], "readyState" in l ? l.onreadystatechange = function() {
                        "loaded" != l.readyState && "complete" != l.readyState || (l.onreadystatechange = null, s())
                    } : l.onload = s, r.appendChild(l)
                }
            }
        };
        var s = (Ht || Lt)() || "";
        new e(s, (qt || Lt)(s) || "")
    }();
    var Jt = function() {
            try {
                if (n.USE_STYLE_MAP) return;
                if (new Date > new Date("2020-02-29T23:59:59")) return;
                var t = "font-family:helvetica,dotum; font-size:20px;",
                    e = [t + "color:red;", t, t],
                    i = ["\uad6c\ubc84\uc804 \ub9f5 \ud0c0\uc77c \uc885\ub8cc \uc0ac\uc804 \uc548\ub0b4 (~2020.2.29)", "NAVER Maps JavaScript API v3", "\uc548\ub155\ud558\uc138\uc694. \ub124\uc774\ubc84 \ud074\ub77c\uc6b0\ub4dc \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \u200bWeb Dynamic Map \uad6c\ubc84\uc804 \ub9f5 \ud0c0\uc77c\uc740 2020\ub144 2\uc6d4 29\uc77c\uae4c\uc9c0 \uc81c\uacf5\ub420 \uc608\uc815\uc774\uba70, 3\uc6d4 1\uc77c\ubd80\ud130 \uc2e0\ubc84\uc804\ub9cc \uc81c\uacf5\ub420 \uc608\uc815\uc785\ub2c8\ub2e4. \u200b\uc544\ub798 \uc77c\uc815\uc73c\ub85c \ub9f5 \ud0c0\uc77c \uad6c\ubc84\uc804 \uc885\ub8cc\uac00 \uc9c4\ud589\ub420 \uc608\uc815\uc774\uba70, \uac00\uc774\ub4dc\ub97c \ucc38\uace0\ud558\uc2dc\uc5b4 \uad6c\ubc84\uc804\uc774 \uc885\ub8cc\ub418\uae30 \uc804\uc5d0 \ubcc0\uacbd\uc0ac\ud56d\uc744 \uc801\uc6a9\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \u200b\u25a0 \ub9f5 \ud0c0\uc77c \uad6c\ubc84\uc804 \uc885\ub8cc \uc77c\uc815 \u25a0 2019\ub144 12\uc6d4 31\uc77c : \uad6c\ubc84\uc804 \ub9f5 \ud0c0\uc77c \uc5c5\ub370\uc774\ud2b8 \uc885\ub8cc \u25a0 2020\ub144 2\uc6d4 1\uc77c : \uad6c\ubc84\uc804 \ub9f5 \ud0c0\uc77c\uc744 \uc2e0\ubc84\uc804\uc73c\ub85c \uc77c\uad04 \uc804\ud658 (\u203b \ub9cc\uc57d 1\uc6d4 31\uc77c\uae4c\uc9c0 \uc804\ud658\uc774 \uc5b4\ub824\uc6b4 \uacbd\uc6b0, \uc635\uc158 \uc124\uc815\uc73c\ub85c 2\uc6d4 29\uc77c\uae4c\uc9c0 \uad6c\ubc84\uc804 \uc0ac\uc6a9 \uac00\ub2a5) \u25a0 2020\ub144 3\uc6d4 1\uc77c : \uad6c\ubc84\uc804 \ub9f5 \ud0c0\uc77c \uc11c\ube44\uc2a4 \uc885\ub8cc\u200b \u25a0 Web Dynamic Map \ub9f5 \ud0c0\uc77c \uad6c\ubc84\uc804\uc5d0\uc11c \uc2e0\ubc84\uc804\uc73c\ub85c \uc804\ud658\ud558\uae30(https://navermaps.github.io/maps.js.ncp/docs/tutorial-Migrate-To-StyleMap.html) \u25a0 \uad81\uae08\ud558\uc2e0 \uc0ac\ud56d\uc740 '\uace0\uac1d\uc9c0\uc6d0 \ubb38\uc758\ud558\uae30' \ub610\ub294 '1544-5876'\uc73c\ub85c \ubb38\uc758\ubc14\ub78d\ub2c8\ub2e4. \ub124\uc774\ubc84 \ud074\ub77c\uc6b0\ub4dc \ud50c\ub7ab\ud3fc \ub4dc\ub9bc."];
                n.console.log(i, e)
            } catch (t) {}
        },
        Qt = function(t, e) {
            this._initialize(t, e)
        };
    Qt.prototype = {
            constructor: Qt,
            _initialize: function(t, e) {
                this._urls = e, this._metadata = {
                    versions: {}
                }, this._loadCounts = 0, this._isFailed = !1, this._mapTypes = t, this._isSetDefaultMetadata = !1, this._defaultMetadata = "attribution,bounds,center,format,maxzoom,minzoom,name,scheme,tilejson,version";
                for (var i = 0, n = t.length; i < n; i++) this._load(t[i], e[i]);
                Zt.trigger(this, "style_map_metadata_load_started")
            },
            _load: function(t, e) {
                wt.jsonp(e, {
                    callbackname: "callback",
                    callback: Ot(function(e) {
                        this._onLoadMetadata(t, this._parse(e))
                    }, this),
                    error: Ot(this._onLoadFailed, this)
                })
            },
            _parse: function(t) {
                return this._setDefaultMetadata(t), t
            },
            _setDefaultMetadata: function(t) {
                if (!this._isSetDefaultMetadata) {
                    for (var e, i = this._metadata, n = this._defaultMetadata.split(","); e = n.pop();) i[e] = t[e];
                    this._isSetDefaultMetadata = !0
                }
            },
            _onLoadMetadata: function(t, e) {
                this._loadCounts += 1, this._metadata[t] = e, this._metadata.versions[t] = e.version, this._loadCounts === this._urls.length && this._onLoadComplete(this._metadata)
            },
            _onLoadComplete: function(t) {
                Zt.trigger(this, "style_map_metadata_load_completed", t)
            },
            _onLoadFailed: function() {
                this._isFailed || (this._isFailed = !0, Zt.trigger(this, "style_map_metadata_load_failed"))
            }
        },
        function() {
            if (!t.naver || !t.naver.maps) {
                n.isDefined(t.naver) || (t.naver = {}), wt.DOM = Nt, wt.DOMEvent = Vt, wt.jsonp = n.jsonp, wt.CalcControlPosition = n.CalcControlPosition, Ct(o, {
                    Map: n.Map,
                    MapTypeId: {
                        NORMAL: "normal",
                        TERRAIN: "terrain",
                        SATELLITE: "satellite",
                        HYBRID: "hybrid"
                    },
                    Point: kt,
                    PointBounds: Dt,
                    LatLng: zt,
                    LatLngBounds: Rt,
                    Size: Bt,
                    Event: Zt,
                    KVO: n.KVO,
                    KVOArray: n.KVOArray,
                    Layer: n.Layer,
                    BicycleLayer: n.BicycleLayer,
                    CadastralLayer: n.CadastralLayer,
                    LabelLayer: n.LabelLayer,
                    StreetLayer: n.StreetLayer,
                    TrafficLayer: n.TrafficLayer,
                    Marker: n.Marker,
                    InfoWindow: n.InfoWindow,
                    GroundOverlay: n.GroundOverlay,
                    OverlayView: n.OverlayView,
                    PaneTypeRegistry: n.MapTypeRegistry,
                    MapTypeRegistry: n.MapTypeRegistry,
                    Polyline: n.Polyline,
                    Polygon: n.Polygon,
                    Rectangle: n.Rectangle,
                    Ellipse: n.Ellipse,
                    Circle: n.Circle,
                    Projection: Ft,
                    EmptyProjection: n.EmptyProjection,
                    UTMK: n.UTMK,
                    UTMK_NAVER: n.UTMK_NAVER,
                    EPSG3857: n.EPSG3857,
                    Tile: n.Tile,
                    ImageTile: n.ImageTile,
                    CanvasTile: n.CanvasTile,
                    ImageMapType: n.ImageMapType,
                    CanvasMapType: n.CanvasMapType,
                    NaverMapTypeOption: Xt,
                    NaverStyleMapTypeOption: Yt,
                    TileIndexPane: n.TileIndexPane,
                    CustomControl: n.CustomControl,
                    ScaleControl: n.ScaleControl,
                    LogoControl: n.LogoControl,
                    MapDataControl: n.MapDataControl,
                    MapTypeControl: n.MapTypeControl,
                    MapTypeControlStyle: b,
                    ZoomControl: n.ZoomControl,
                    ZoomControlStyle: b,
                    SymbolPath: E,
                    SymbolStyle: S,
                    Position: x,
                    Animation: w,
                    PointingIcon: P,
                    Util: wt,
                    Data: n.DataLayer,
                    Feature: n.Feature,
                    Geometry: n.Geometry,
                    DataConverter: n.Converter
                }), t.naver.maps = o;
                var e = Zt.addListener(o, "__sbinit", function(t) {
                    at ? (Zt.removeListener(e), e = null) : g(t)
                });
                R && (o.VERSION = "3.4.1")
            }
        }(), !t.N && t.naver.maps && (t.N = t.naver.maps);
    var $t = function(t) {
        var e = new Qt(gt, mt(!1));
        Zt.addListener(e, "style_map_metadata_load_completed", function(e) {
            ft = e, t.initStyleMap()
        }), Zt.addListener(e, "style_map_metadata_load_failed", function() {
            n.console.log("\uc77c\uc2dc\uc801\uc778 \uc11c\ube44\uc2a4 \uc624\ub958\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")
        })
    }
}(window);