!(function(e) {
    function a(a) {
        for (var n, i, o = a[0], l = a[1], c = a[2], p = 0, d = []; p < o.length; p++)
            (i = o[p]), s[i] && d.push(s[i][0]), (s[i] = 0);
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        for (m && m(a); d.length; ) d.shift()();
        return r.push.apply(r, c || []), t();
    }
    function t() {
        for (var e, a = 0; a < r.length; a++) {
            for (var t = r[a], n = !0, o = 1; o < t.length; o++) {
                var l = t[o];
                0 !== s[l] && (n = !1);
            }
            n && (r.splice(a--, 1), (e = i((i.s = t[0]))));
        }
        return e;
    }
    var n = {},
        s = { 0: 0 },
        r = [];
    function i(a) {
        if (n[a]) return n[a].exports;
        var t = (n[a] = { i: a, l: !1, exports: {} });
        return e[a].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
    }
    (i.m = e),
        (i.c = n),
        (i.d = function(e, a, t) {
            i.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
        }),
        (i.r = function(e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function(e, a) {
            if ((1 & a && (e = i(e)), 8 & a)) return e;
            if (4 & a && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (
                (i.r(t),
                Object.defineProperty(t, "default", { enumerable: !0, value: e }),
                2 & a && "string" != typeof e)
            )
                for (var n in e)
                    i.d(
                        t,
                        n,
                        function(a) {
                            return e[a];
                        }.bind(null, n)
                    );
            return t;
        }),
        (i.n = function(e) {
            var a =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return i.d(a, "a", a), a;
        }),
        (i.o = function(e, a) {
            return Object.prototype.hasOwnProperty.call(e, a);
        }),
        (i.p = "/");
    var o = (window.webpackJsonp = window.webpackJsonp || []),
        l = o.push.bind(o);
    (o.push = a), (o = o.slice());
    for (var c = 0; c < o.length; c++) a(o[c]);
    var m = l;
    r.push([202, 2]), t();
})({
    119: function(e, a, t) {
        e.exports = t.p + "images/fast-dna.svg";
    },
    189: function(e, a, t) {
        e.exports = t.p + "images/medium.svg";
    },
    190: function(e, a, t) {
        e.exports = t.p + "images/twitter.svg";
    },
    191: function(e, a, t) {
        e.exports = t.p + "images/facebook.svg";
    },
    192: function(e, a, t) {
        e.exports = t.p + "images/dribble.svg";
    },
    193: function(e, a, t) {
        e.exports = t.p + "images/animation.svg";
    },
    194: function(e, a, t) {
        e.exports = t.p + "images/colors.svg";
    },
    195: function(e, a, t) {
        e.exports = t.p + "images/grids.svg";
    },
    196: function(e, a, t) {
        e.exports = t.p + "images/more.svg";
    },
    197: function(e, a, t) {
        e.exports = t.p + "images/AdaptiveUIScreens.mp4";
    },
    202: function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t(0),
            s = t.n(n),
            r = t(120),
            i = t.n(r),
            o = t(49),
            l = t(52),
            c = t(79),
            m = t(7),
            p = t(222),
            d = t(223),
            g = t(128),
            h = t(9),
            u = t(41),
            f = t(204),
            b = t(207),
            x = t(206);
        const v = {
                banner: Object.assign(
                    { position: "relative", boxSizing: "border-box", marginTop: "30px" },
                    Object(u.c)()
                ),
                banner_contentRegion: {
                    display: "grid",
                    gridTemplateRows: "repeat(3, 1fr)",
                    boxSizing: "border-box",
                    maxWidth: "calc(1600px + 10%)",
                    padding: "16px 5%",
                    margin: "0 auto",
                    height: "294px",
                    alignItems: "center",
                    "@media only screen and (min-width: 768px)": {
                        height: "150px",
                        gridTemplateColumns: "1fr 1fr .5fr",
                        gridTemplateRows: "1fr",
                    },
                    "@media only screen and (min-width: 1084px)": {
                        height: "150px",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows: "1fr",
                    },
                },
                banner_title: { margin: "0", textDecoration: "none" },
                banner_abstract: { margin: "0" },
                banner_action: {
                    "&:after": {
                        content: "''",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                    },
                },
            },
            y = {
                button: Object.assign(
                    {
                        color: f.c,
                        fill: f.c,
                        textDecoration: "none",
                        width: "60px",
                        background: "transparent",
                        border: "none",
                        justifySelf: "end",
                        "&:hover": { color: f.b, fill: f.b },
                        "&:active": { fill: f.a, color: f.a },
                    },
                    Object(x.a)({ borderColor: b.a }),
                    { "& svg": {} }
                ),
            };
        var C = v,
            E = t(225),
            w = t(217),
            j = t(218),
            O = t(219),
            N = t(118),
            S = t(62),
            k = t(208);
        const P = Object(m.a)(y)(E.a);
        class _ extends h.a {
            constructor() {
                super(...arguments),
                    (this.handledProps = {
                        action: void 0,
                        backgroundColor: void 0,
                        title: void 0,
                        tag: void 0,
                        value: void 0,
                        drawBackground: void 0,
                        abstract: void 0,
                        managedClasses: void 0,
                        designSystemMergingFunction: void 0,
                    });
            }
            render() {
                return s.a.createElement(
                    w.a,
                    Object.assign({}, this.generateAttributes(), {
                        tag: this.props.tag,
                        value: this.props.backgroundColor,
                        drawBackground: this.props.drawBackground,
                        designSystemMergingFunction: this.props
                            .designSystemMergingFunction,
                    }),
                    s.a.createElement(
                        "div",
                        {
                            className: Object(k.a)(
                                this.props.managedClasses,
                                "banner_contentRegion",
                                ""
                            ),
                        },
                        s.a.createElement(j.a, Object.assign({}, this.getTitleProps())),
                        s.a.createElement(
                            O.a,
                            Object.assign({}, this.getAbstractProps())
                        ),
                        s.a.createElement(
                            P,
                            Object.assign({}, this.props.action, {
                                className: Object(k.a)(
                                    this.props.managedClasses,
                                    "banner_action",
                                    ""
                                ),
                            }),
                            s.a.createElement(
                                "svg",
                                {
                                    width: "60",
                                    height: "56",
                                    viewBox: "0 0 60 56",
                                    xmlns: "http://www.w3.org/2000/svg",
                                },
                                s.a.createElement("path", {
                                    d:
                                        "M59.8242 28L32.2559 55.5684L29.6191 52.9316L52.6758 29.875H0V26.125H52.6758L29.6191 3.06836L32.2559 0.431641L59.8242 28Z",
                                })
                            )
                        )
                    )
                );
            }
            generateClassNames() {
                return super.generateClassNames(
                    Object(k.a)(this.props.managedClasses, "banner", "")
                );
            }
            getTitleProps() {
                return Object.assign(
                    {},
                    {
                        className: Object(k.a)(
                            this.props.managedClasses,
                            "banner_title",
                            ""
                        ),
                        size: N.a._3,
                        tag: N.b.h3,
                    },
                    this.props.title
                );
            }
            getAbstractProps() {
                return Object.assign(
                    {},
                    {
                        className: Object(k.a)(
                            this.props.managedClasses,
                            "banner_abstract",
                            ""
                        ),
                        size: S.a._3,
                    },
                    this.props.abstract
                );
            }
            generateAttributes() {
                const e = Object.assign({}, this.unhandledProps(), {
                    className: this.generateClassNames(),
                });
                return Object.assign({}, e, { style: Object.assign({}, e.style) });
            }
        }
        (_.displayName = "Banner"), (_.defaultProps = { backgroundColor: "#0078D4" });
        var T = _;
        const A = Object(m.a)(C)(T);
        var M = t(209);
        var D = {
            contentPlacement: {
                boxSizing: "border-box",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                marginTop: "24px",
            },
            contentPlacement_contentContainer: {
                flex: "1",
                order: "2",
                "& $contentPlacement_heading": { marginTop: "24px" },
                "& $contentPlacement_paragraph": { margin: "16px 0" },
            },
            contentPlacement_image: {
                order: "1",
                fill: M.c,
                "& > img": { maxWidth: "100%" },
            },
            contentPlacement_action: { display: "inline-flex", flexDirection: "column" },
            contentPlacement_heading: { position: "relative" },
            contentPlacement_paragraph: { paddingRight: "25px" },
        };
        class L extends h.a {
            constructor() {
                super(...arguments),
                    (this.handledProps = {
                        action: void 0,
                        heading: void 0,
                        image: void 0,
                        paragraph: void 0,
                        managedClasses: void 0,
                    });
            }
            render() {
                return s.a.createElement(
                    "div",
                    Object.assign({}, this.unhandledProps(), {
                        className: this.generateClassNames(),
                    }),
                    s.a.createElement(
                        "div",
                        {
                            className: Object(k.a)(
                                this.props.managedClasses,
                                "contentPlacement_contentContainer",
                                ""
                            ),
                        },
                        s.a.createElement(
                            j.a,
                            Object.assign({}, this.getHeadingProps(), {
                                className: Object(k.a)(
                                    this.props.managedClasses,
                                    "contentPlacement_heading",
                                    ""
                                ),
                            })
                        ),
                        s.a.createElement(
                            O.a,
                            Object.assign({}, this.getParagraphProps(), {
                                className: Object(k.a)(
                                    this.props.managedClasses,
                                    "contentPlacement_paragraph",
                                    ""
                                ),
                            })
                        ),
                        "function" == typeof this.props.action
                            ? this.props.action(
                                  Object(k.a)(
                                      this.props.managedClasses,
                                      "contentPlacement_action",
                                      ""
                                  )
                              )
                            : null
                    ),
                    "function" == typeof this.props.image
                        ? this.props.image(
                              Object(k.a)(
                                  this.props.managedClasses,
                                  "contentPlacement_image",
                                  ""
                              )
                          )
                        : null
                );
            }
            generateClassNames() {
                return super.generateClassNames(
                    Object(k.a)(this.props.managedClasses, "contentPlacement", "")
                );
            }
            getHeadingProps() {
                return Object.assign(
                    {},
                    { tag: N.b.h3, size: N.a._5 },
                    this.props.heading
                );
            }
            getParagraphProps() {
                return Object.assign({}, { size: S.a._3 }, this.props.paragraph);
            }
        }
        L.displayName = "ContentPlacement";
        var F = L;
        const B = Object(m.a)(D)(F);
        var z = t(6),
            H = (t(205), t(28));
        const V = Object.assign({}, z.c, {
            backgroundColor: "#1B1B1B",
            accentPalette: Object(z.b)(Object(H.c)("#DC2E5F")),
            accentBaseColor: "#DC2E5F",
        });
        var $ = t(65),
            I = t(210),
            U = t(20),
            W = t(211),
            G = t(107);
        var R = {
                feature: Object.assign(
                    {
                        boxSizing: "border-box",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "auto",
                    },
                    Object($.a)(),
                    { overflow: "hidden" },
                    Object(I.b)(I.a.e4),
                    {
                        "& $feature_contentContainer, $feature_content": {
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                        },
                        "@media only screen and (min-width: 1083px)": {
                            flexDirection: "row",
                        },
                    }
                ),
                feature_action: {},
                feature_badge: Object.assign({}, Object(U.a)("t8"), {
                    letterSpacing: "4px",
                    color: f.c,
                    borderBottom: Object(G.a)("1px solid {0}", W.c),
                    justifyContent: "flex-start",
                    padding: "16px 20px",
                    "@media only screen and (min-width: 1083px)": {
                        padding: "16px 48px",
                    },
                }),
                feature_contentContainer: {
                    justifyContent: "center",
                    flex: "initial",
                    "@media only screen and (min-width: 1083px)": { width: "25%" },
                },
                feature_content: {
                    justifyContent: "flex-start",
                    padding: "12px 20px",
                    "@media only screen and (min-width: 1083px)": {
                        padding: "12px 48px",
                    },
                    "& $feature_heading": { marginTop: "24px" },
                    "& $feature_paragraph": { marginTop: "16px", marginBottom: "auto" },
                    "& $feature_action": { margin: "16px 0", justifySelf: "flex-end" },
                },
                feature_heading: {},
                feature_image: {
                    maxWidth: "100%",
                    height: "auto",
                    "@media only screen and (min-width: 1083px)": { width: "75%" },
                },
                feature_paragraph: {},
            },
            Z = t(212);
        class J extends h.a {
            constructor() {
                super(...arguments),
                    (this.handledProps = {
                        action: void 0,
                        badge: void 0,
                        heading: void 0,
                        image: void 0,
                        paragraph: void 0,
                        managedClasses: void 0,
                    });
            }
            render() {
                return s.a.createElement(
                    w.a,
                    Object.assign({}, this.unhandledProps(), {
                        className: this.generateClassNames(),
                        value: Z.a,
                    }),
                    s.a.createElement(
                        "div",
                        {
                            className: Object(k.a)(
                                this.props.managedClasses,
                                "feature_contentContainer",
                                ""
                            ),
                        },
                        s.a.createElement(
                            "div",
                            {
                                className: Object(k.a)(
                                    this.props.managedClasses,
                                    "feature_badge",
                                    ""
                                ),
                            },
                            s.a.createElement("span", null, this.props.badge)
                        ),
                        s.a.createElement(
                            "div",
                            {
                                className: Object(k.a)(
                                    this.props.managedClasses,
                                    "feature_content",
                                    ""
                                ),
                            },
                            s.a.createElement(
                                j.a,
                                Object.assign({}, this.getHeadingProps(), {
                                    className: Object(k.a)(
                                        this.props.managedClasses,
                                        "feature_heading",
                                        ""
                                    ),
                                })
                            ),
                            s.a.createElement(
                                O.a,
                                Object.assign({}, this.getParagraphProps(), {
                                    className: Object(k.a)(
                                        this.props.managedClasses,
                                        "feature_paragraph",
                                        ""
                                    ),
                                })
                            ),
                            "function" == typeof this.props.action
                                ? this.props.action(
                                      Object(k.a)(
                                          this.props.managedClasses,
                                          "feature_action",
                                          ""
                                      )
                                  )
                                : null
                        )
                    ),
                    "function" == typeof this.props.image
                        ? this.props.image(
                              Object(k.a)(this.props.managedClasses, "feature_image", "")
                          )
                        : null
                );
            }
            generateClassNames() {
                return super.generateClassNames(
                    Object(k.a)(this.props.managedClasses, "feature", "")
                );
            }
            getHeadingProps() {
                return Object.assign(
                    {},
                    { tag: N.b.h3, size: N.a._5 },
                    this.props.heading
                );
            }
            getParagraphProps() {
                return Object.assign({}, { size: S.a._2 }, this.props.paragraph);
            }
        }
        J.displayName = "Feature";
        var q = J;
        const Y = Object(m.a)(R)(q);
        var X = t(213),
            K = t(27);
        var Q = {
                "@global": {
                    body: {
                        fontFamily:
                            "Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif",
                        margin: "0",
                        padding: "0",
                    },
                },
                footer: {
                    listStyleType: "none",
                    backgroundColor: e => e.backgroundColor,
                    height: "100%",
                    margin: "0 auto",
                    overflow: "hidden",
                    "& span, & a": Object.assign({}, Object(U.a)("t8"), {
                        color: X.a,
                        textDecoration: "none",
                        display: "inline-block",
                    }),
                },
                footer_wrapper: {
                    margin: "30px auto 0",
                    maxWidth: "calc(1600px + 10%)",
                    padding: "0 5%",
                    boxSizing: "border-box",
                },
                currentTitle: Object.assign({}, Object(U.a)("t5"), Object(K.b)()),
                social: {
                    margin: "0px",
                    order: "2",
                    padding: "16px 0",
                    fontSize: "15px",
                    display: "flex",
                    "& img": { maxWidth: "24px", padding: "0 24px 4px 0" },
                    "& a": { padding: "0 24px 4px 0", display: "inline-block" },
                    "@media only screen and (max-width: 768px)": {
                        display: "block",
                        float: "unset",
                    },
                },
                ul: {
                    order: "1",
                    listStyleType: "none",
                    margin: "0px",
                    padding: "16px 0",
                    fontSize: "15px",
                    display: "flex",
                    "& a": { padding: "0 24px 4px 0", display: "inline-block" },
                    "@media only screen and (max-width: 768px)": {
                        display: "block",
                        float: "left",
                    },
                },
                container: { width: "100%" },
                column: {
                    width: "100%",
                    minHeight: "60px",
                    flexWrap: "wrap",
                    margin: "10px 0px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                },
            },
            ee = t(216);
        const ae = t(119),
            te = t(189),
            ne = t(190);
        t(191), t(192);
        class se extends h.a {
            constructor() {
                super(...arguments), (this.handledProps = { managedClasses: void 0 });
            }
            render() {
                return s.a.createElement(
                    "footer",
                    Object.assign({}, this.unhandledProps(), {
                        className: this.generateClassNames(),
                    }),
                    s.a.createElement(
                        "div",
                        {
                            className: Object(k.a)(
                                this.props.managedClasses,
                                "footer_wrapper",
                                ""
                            ),
                        },
                        this.props.children,
                        s.a.createElement(
                            "div",
                            {
                                className: Object(k.a)(
                                    this.props.managedClasses,
                                    "headerGrid",
                                    ""
                                ),
                            },
                            s.a.createElement(
                                "div",
                                {
                                    className: Object(k.a)(
                                        this.props.managedClasses,
                                        "column",
                                        ""
                                    ),
                                },
                                s.a.createElement(
                                    "div",
                                    {
                                        className: Object(k.a)(
                                            this.props.managedClasses,
                                            "logo",
                                            ""
                                        ),
                                    },
                                    s.a.createElement(ee.a, {
                                        src: ae,
                                        alt: "FAST-DNA logo",
                                    })
                                )
                            ),
                            s.a.createElement(
                                "div",
                                {
                                    className: Object(k.a)(
                                        this.props.managedClasses,
                                        "column",
                                        ""
                                    ),
                                },
                                s.a.createElement(
                                    "div",
                                    {
                                        className: Object(k.a)(
                                            this.props.managedClasses,
                                            "social",
                                            ""
                                        ),
                                    },
                                    s.a.createElement(
                                        "a",
                                        {
                                            href: "https://medium.com/fast-dna",
                                            target: "_blank",
                                        },
                                        s.a.createElement("img", {
                                            src: te,
                                            alt: "Medium logo",
                                        })
                                    ),
                                    s.a.createElement(
                                        "a",
                                        {
                                            href: "https://twitter.com/FAST_DNA",
                                            target: "_blank",
                                        },
                                        s.a.createElement("img", {
                                            src: ne,
                                            alt: "Twitter logo",
                                        })
                                    )
                                ),
                                s.a.createElement(
                                    "ul",
                                    {
                                        className: Object(k.a)(
                                            this.props.managedClasses,
                                            "ul",
                                            ""
                                        ),
                                    },
                                    s.a.createElement(
                                        "li",
                                        null,
                                        s.a.createElement(
                                            "a",
                                            {
                                                href:
                                                    "https://github.com/microsoft/fast-dna/blob/master/LICENSE",
                                            },
                                            "License"
                                        )
                                    ),
                                    s.a.createElement(
                                        "li",
                                        null,
                                        s.a.createElement(
                                            "a",
                                            {
                                                href:
                                                    "https://privacy.microsoft.com/en-US/privacystatement",
                                            },
                                            "Privacy & Cookies"
                                        )
                                    ),
                                    s.a.createElement(
                                        "li",
                                        null,
                                        s.a.createElement(
                                            "a",
                                            {
                                                href:
                                                    "https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx",
                                            },
                                            "Terms of Use"
                                        )
                                    ),
                                    s.a.createElement(
                                        "li",
                                        null,
                                        s.a.createElement("span", null, "©2019 Microsoft")
                                    )
                                )
                            )
                        )
                    )
                );
            }
            generateClassNames() {
                return super.generateClassNames(
                    Object(k.a)(this.props.managedClasses, "footer", "")
                );
            }
        }
        se.displayName = "Footer";
        var re = se;
        const ie = Object(m.a)(Q)(re);
        var oe = t(226),
            le = t(70);
        var ce = {
            divider: {
                boxSizing: "content-box",
                height: "0",
                margin: "0",
                border: "none",
                borderTop: Object(G.a)("8px solid {0}", M.c),
                transition: "all 0.2s ease-in-out",
            },
        };
        Object(m.a)(ce)(oe.a).defaultProps = { role: le.a.presentation };
        var me = t(221),
            pe = t(220),
            de = t(215),
            ge = t(80);
        const he = "768px",
            ue = "767px",
            fe = {
                heading__3: {
                    position: "relative",
                    [`@media only screen and (max-width: ${ue})`]: Object.assign(
                        {},
                        Object(U.a)("t5")
                    ),
                },
            },
            be = e => Object.assign({}, e, { backgroundColor: "#C22551", density: 2 }),
            xe = Object(m.a)({
                hero: {
                    height: "100vh",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "650px",
                    title: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                    },
                },
                headingWrapper: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "100vh",
                    minHeight: "650px",
                    position: "relative",
                    zIndex: "5",
                    padding: "0 5%",
                },
                imageZ0: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "0",
                    minWidth: "100%",
                    height: "100vh",
                    overflow: "hidden",
                },
            })(e =>
                s.a.createElement(
                    w.a,
                    {
                        className: e.managedClasses.hero,
                        value: e.backgroundColor,
                        designSystemMergingFunction: be,
                    },
                    "function" == typeof e.srcBackground
                        ? e.srcBackground(e.managedClasses.imageZ0)
                        : null,
                    s.a.createElement(
                        "div",
                        { className: e.managedClasses.headingWrapper },
                        s.a.createElement(
                            j.a,
                            { jssStyleSheet: fe, size: N.a._3, tag: N.b.h1 },
                            e.text
                        ),
                        s.a.createElement(pe.a, {
                            jssStyleSheet: {
                                divider: {
                                    marginTop: "48px",
                                    width: "100%",
                                    maxWidth: "1299px",
                                    borderColor: Object(f.c)(() => "#000"),
                                    [`@media only screen and (max-width: ${ue})`]: {
                                        marginTop: "24px",
                                    },
                                },
                            },
                            role: le.a.presentation,
                        }),
                        s.a.createElement(
                            de.a,
                            {
                                href: e.destination,
                                appearance: ge.a.lightweight,
                                jssStyleSheet: {
                                    callToAction: {
                                        marginTop: "48px",
                                        [`@media only screen and (max-width: ${ue})`]: {
                                            marginTop: "24px",
                                        },
                                    },
                                },
                            },
                            e.callToAction
                        )
                    )
                )
            ),
            ve = Object(m.a)({
                height1: { height: "10px" },
                height2: { height: "20px" },
                height3: { height: "30px" },
                height4: { height: "40px" },
                height5: { height: "50px" },
                height6: { height: "60px" },
                height7: { height: "70px" },
                height8: { height: "80px" },
                height9: { height: "90px" },
                height10: { height: "100px" },
                height125: { height: "125px" },
            })(e =>
                s.a.createElement(
                    g.a,
                    { span: e.span, row: e.row },
                    s.a.createElement("div", {
                        className: e.managedClasses[`height${e.height}`],
                    })
                )
            ),
            ye = t(193),
            Ce = t(194),
            Ee = t(195),
            we = t(196),
            je = {
                heading: { children: "Composition" },
                paragraph: {
                    children:
                        "Create new component compositions by nesting, styling base components, and passing unhandled props. The combinations are endless.",
                },
            },
            Oe = {
                heading: { children: "Design systems" },
                paragraph: {
                    children:
                        "Use Fluent by default or customize design system properties to make it your own. Or, create your own design system to use with FAST components.",
                },
            },
            Ne = {
                heading: { children: "Technology" },
                paragraph: {
                    children:
                        "Out of the box, FAST components are built on React, but you can build components on any modern framework using the FAST system.",
                },
            },
            Se = {
                heading: { children: "Web standards" },
                paragraph: {
                    children:
                        "All FAST components follow WCAG 2.1, are W3C spec-compliant and use the W3C interaction models when available.",
                },
            },
            ke = {
                heading: { children: "Animation" },
                paragraph: {
                    children:
                        "Design sophisticated animation sequences with the animation library, an interface for the Web Animations API.",
                },
                action: e =>
                    s.a.createElement(
                        "div",
                        { className: e },
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://www.fast.design/docs/en/packages/fast-animation/",
                            },
                            "Documentation"
                        ),
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://github.com/microsoft/fast-dna/tree/master/packages/fast-animation",
                            },
                            "GitHub"
                        )
                    ),
                image: e =>
                    s.a.createElement("img", {
                        className: e,
                        src: ye,
                        alt: "green orb representing motion",
                    }),
            },
            Pe = {
                heading: { children: "Colors" },
                paragraph: {
                    children:
                        "Create color palettes, extract colors from images, and handle other color operations using our color library.",
                },
                action: e =>
                    s.a.createElement(
                        "div",
                        { className: e },
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://www.fast.design/docs/en/packages/fast-colors/",
                            },
                            "Documentation"
                        ),
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://github.com/microsoft/fast-dna/tree/master/packages/fast-colors",
                            },
                            "GitHub"
                        )
                    ),
                image: e =>
                    s.a.createElement("img", {
                        className: e,
                        src: Ce,
                        alt: "controls representing color swatches and computer monitors",
                    }),
            },
            _e = {
                heading: { children: "Layout & Grid" },
                paragraph: {
                    children:
                        "Build layouts such as a 12 column grid for content or an application grid with resizable panels.",
                },
                action: e =>
                    s.a.createElement(
                        "div",
                        { className: e },
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://www.fast.design/docs/en/packages/fast-layouts-react/",
                            },
                            "Documentation"
                        ),
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://github.com/microsoft/fast-dna/tree/master/packages/fast-layouts-react",
                            },
                            "GitHub"
                        )
                    ),
                image: e =>
                    s.a.createElement("img", {
                        className: e,
                        src: Ee,
                        alt: "seven pink lines of varying length representing a grid",
                    }),
            },
            Te = {
                heading: { children: "Other useful utilities" },
                paragraph: {
                    children:
                        "Leverage a toolkit of general utilities such as keyboarding, Right-To-Left (RTL), number, and string manipulation.",
                },
                action: e =>
                    s.a.createElement(
                        "div",
                        { className: e },
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://www.fast.design/docs/en/packages/fast-web-utilities/",
                            },
                            "Documentation"
                        ),
                        s.a.createElement(
                            me.a,
                            {
                                href:
                                    "https://github.com/microsoft/fast-dna/tree/master/packages/fast-web-utilities",
                            },
                            "GitHub"
                        )
                    ),
                image: e =>
                    s.a.createElement("img", {
                        className: e,
                        src: we,
                        alt: "four gradient blue half circles",
                    }),
            },
            Ae = {
                heading: { children: "Discord" },
                paragraph: {
                    children:
                        "Join our active community on Discord. Follow the latest updates and contributions, ask questions, give feedback, or keep up on our reading list.",
                },
                action: e =>
                    s.a.createElement(
                        me.a,
                        { href: "https://discord.gg/FcSNfg4", className: e },
                        "Join our discord community"
                    ),
                image: e =>
                    s.a.createElement(
                        "svg",
                        {
                            className: e,
                            width: "91",
                            height: "106",
                            viewBox: "0 0 91 106",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        s.a.createElement("path", {
                            d:
                                "M35.8297 45.0969C32.8463 45.0969 30.491 47.5184 30.491 50.4727C30.491 53.4269 32.8986 55.8484 35.8297 55.8484C38.8131 55.8484 41.1685 53.4269 41.1685 50.4727C41.2208 47.5184 38.8131 45.0969 35.8297 45.0969ZM54.934 45.0969C51.9506 45.0969 49.5953 47.5184 49.5953 50.4727C49.5953 53.4269 52.003 55.8484 54.934 55.8484C57.9174 55.8484 60.2728 53.4269 60.2728 50.4727C60.2728 47.5184 57.9174 45.0969 54.934 45.0969Z",
                        }),
                        s.a.createElement("path", {
                            d:
                                "M80.1313 0.657959H10.6323C4.77157 0.657959 0 5.4717 0 11.4365V82.1776C0 88.1424 4.77157 92.9561 10.6323 92.9561H69.4472L66.6983 83.2764L73.337 89.5028L79.6127 95.363L90.7636 105.304V11.4365C90.7636 5.4717 85.9921 0.657959 80.1313 0.657959ZM60.1115 68.9921C60.1115 68.9921 58.2443 66.7422 56.6884 64.7539C63.4827 62.818 66.0759 58.5275 66.0759 58.5275C63.9495 59.9402 61.9267 60.9343 60.1115 61.6145C57.5182 62.7133 55.0287 63.4458 52.591 63.8644C47.612 64.8063 43.0479 64.5446 39.158 63.8121C36.2017 63.2366 33.6603 62.3994 31.5339 61.5622C30.341 61.0913 29.0444 60.5157 27.7477 59.7832C27.5921 59.6786 27.4366 59.6262 27.281 59.5216C27.1772 59.4693 27.1254 59.417 27.0735 59.3646C26.1399 58.8414 25.6213 58.4751 25.6213 58.4751C25.6213 58.4751 28.1108 62.661 34.6976 64.6493C33.1417 66.6376 31.2227 68.9921 31.2227 68.9921C19.7605 68.6258 15.4039 61.039 15.4039 61.039C15.4039 44.1909 22.8724 30.5345 22.8724 30.5345C30.341 24.8836 37.4465 25.0406 37.4465 25.0406L37.9651 25.6685C28.6294 28.3893 24.3247 32.5228 24.3247 32.5228C24.3247 32.5228 25.4657 31.8949 27.3847 31.0054C32.9342 28.5462 37.3428 27.866 39.158 27.7091C39.4692 27.6567 39.7285 27.6044 40.0397 27.6044C43.2035 27.1858 46.7822 27.0812 50.5164 27.4998C55.4436 28.0753 60.7338 29.5404 66.1278 32.5228C66.1278 32.5228 62.0305 28.5986 53.2134 25.8778L53.9395 25.0406C53.9395 25.0406 61.045 24.8836 68.5136 30.5345C68.5136 30.5345 75.9821 44.1909 75.9821 61.039C75.9821 61.039 71.5736 68.6258 60.1115 68.9921Z",
                        })
                    ),
            },
            Me = {
                heading: { children: "Twitter" },
                paragraph: {
                    children:
                        "Follow along as we share out the latest happenings on Twitter. You will find important updates, announcements, and sneak peeks.",
                },
                action: e =>
                    s.a.createElement(
                        me.a,
                        { href: "https://twitter.com/fast_dna", className: e },
                        "Follow along on Twitter"
                    ),
                image: e =>
                    s.a.createElement(
                        "svg",
                        {
                            className: e,
                            width: "116",
                            height: "95",
                            viewBox: "0 0 116 95",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        s.a.createElement("path", {
                            d:
                                "M36.406 94.2383C80.1396 94.2383 104.07 57.9714 104.07 26.5741C104.07 25.5538 104.07 24.5335 104.024 23.5132C108.662 20.174 112.696 15.9537 115.896 11.1769C111.63 13.0783 107.038 14.3305 102.215 14.9334C107.131 12.0117 110.888 7.32758 112.696 1.76233C108.105 4.49858 103.004 6.44642 97.5774 7.51309C93.218 2.87538 87.0498 0 80.2324 0C67.1077 0 56.4409 10.6667 56.4409 23.7915C56.4409 25.6465 56.6728 27.4552 57.0438 29.2176C37.2872 28.2437 19.7566 18.7364 8.02324 4.35945C5.98265 7.88411 4.82322 11.9653 4.82322 16.3247C4.82322 24.5799 9.04354 31.8611 15.3972 36.1278C11.5015 35.9886 7.83773 34.922 4.63771 33.1596C4.63771 33.2524 4.63771 33.3451 4.63771 33.4843C4.63771 44.9858 12.8465 54.6322 23.6987 56.812C21.7045 57.3685 19.6175 57.6467 17.4378 57.6467C15.9073 57.6467 14.4233 57.5076 12.9856 57.2294C16.0001 66.6903 24.8118 73.5541 35.2002 73.7396C27.0379 80.1396 16.7885 83.9426 5.65801 83.9426C3.75655 83.9426 1.85508 83.8498 0 83.6179C10.4812 90.2962 23.003 94.2383 36.406 94.2383Z",
                        })
                    ),
            },
            De = {
                heading: { children: "Medium" },
                paragraph: {
                    children:
                        "Dive deeper on important FAST related topics, find tutorials, and hear our opinions on up and coming industry topics.",
                },
                action: e =>
                    s.a.createElement(
                        me.a,
                        { href: "https://medium.com/fast-dna", className: e },
                        "Read our blog on Medium"
                    ),
                image: e =>
                    s.a.createElement(
                        "svg",
                        {
                            className: e,
                            width: "113",
                            height: "91",
                            viewBox: "0 0 113 91",
                            xmlns: "http://www.w3.org/2000/svg",
                        },
                        s.a.createElement("path", {
                            d:
                                "M13.3996 19.2345C13.54 17.8429 13.011 16.4675 11.9753 15.5308L1.42437 2.77952V0.874756H34.1849L59.507 56.589L81.7694 0.874756H113V2.77952L103.979 11.4568C103.201 12.0515 102.815 13.029 102.977 13.9964V77.7531C102.815 78.7205 103.201 79.698 103.979 80.2927L112.789 88.97V90.8748H68.4753V88.97L77.6018 80.0811C78.4986 79.1816 78.4986 78.9171 78.4986 77.5414V26.007L53.1237 90.6631H49.6947L20.1522 26.007V69.3404C19.9059 71.1622 20.509 72.9964 21.7876 74.3139L33.6573 88.7583V90.6631H0V88.7583L11.8697 74.3139C13.139 72.9942 13.707 71.1479 13.3996 69.3404V19.2345Z",
                        })
                    ),
            },
            Le = e =>
                s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement("style", {
                        dangerouslySetInnerHTML: {
                            __html:
                                '\n                #curve1 path {\n                    animation: anim1 16s ease-in-out -12s infinite alternate;\n                }\n\n                @keyframes anim1 {\n                    0% {  }\n                    100% { d: path("M1920 1080V180.6c-66.5 11.6-127.2 62.2-239.1 104.4-108.8 41-250.6 57.6-360.5 41-102.7-15.5-179.6-8.4-265.5 6.9-138.7 24.8-193.6-47.2-305.2-77.3-124.8-33.7-232.9-3.3-318.1 12.9C280.1 297.2 150.3 46.5 0 91.2V1080h1920z"); } }\n\n                #curve2 path {\n                    animation: anim2 16s ease-in-out -4s infinite alternate;\n                }\n\n                @keyframes anim2 {\n                    0% {  }\n                    100% { d: path("M1655.6 348.5c98.5 10.8 175.1-27.5 264.4-18.2V1080H0V335.6c76.2-19.9 175.9-65.3 299.9-42.4 128.8 23.8 244.3 24.8 307.2 9.9 71.3-16.8 179.8-77 273.5-36.7 78.3 33.7 124.8 153.6 240.8 150.6 120.4-3.1 156.4-100.9 268.5-115.9 110.9-14.8 157.7 35.5 265.7 47.4z"); } }\n\n                #curve3 path {\n                    animation: anim3 16s ease-in-out -8s infinite alternate;\n                }\n\n                @keyframes anim3 {\n                    0% {  }\n                    100% { d: path("M1920 1080V420.9c-128.7 3.1-381.6 97.3-534.2 173.5-169.9 84.9-233.8 142-404.3 111-143-26-276.4-101.8-548.9-43.6C216.8 707.9 19.7 537.7 0 529.7V369v711h1920z"); } }\n\n                #curve4 path {\n                    animation: anim4 16s ease-in-out 0s infinite alternate;\n                }\n\n                    @keyframes anim4 {\n                    0% {  }\n                    100% { d: path("M238.5 465.6C157.3 438.2 78 416.1 0 438.6V1080h1727.2C1390.8 858.9 1237.4 449.3 960 481.5c-85.4 9.9-204.3 43.6-275.7 5.9-81.5-43-128.8-61.3-206.1-45.6-79.7 16.3-164.8 49.2-239.7 23.8z"); } }\n\n            ',
                        },
                    }),
                    s.a.createElement(
                        "svg",
                        {
                            className: e,
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1920",
                            height: "900",
                            viewBox: "0 0 1920 900",
                            preserveAspectRatio: "xMinYMax slice",
                        },
                        s.a.createElement("path", {
                            d: "M0 0h1920v900H0z",
                            fill: "#021B4F",
                        }),
                        s.a.createElement(
                            "g",
                            { id: "curve1" },
                            s.a.createElement(
                                "linearGradient",
                                {
                                    id: "gradient1",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "509.562",
                                    y1: "-1016.382",
                                    x2: "1408.152",
                                    y2: "-1638.59",
                                    gradientTransform: "matrix(1 0 0 -1 0 -698)",
                                },
                                s.a.createElement("stop", {
                                    offset: "0",
                                    stopColor: "#AD3B8F",
                                }),
                                s.a.createElement("stop", {
                                    offset: "1",
                                    stopColor: "#D84498",
                                })
                            ),
                            s.a.createElement("path", {
                                d:
                                    "M1920 900V180.6c-30.8 25.5-91.3 66.1-234 49.7-152.4-17.5-252.6 45.1-359.5 115.7-86.7 57.2-206.2 41.4-285.2-3.1-75.3-42.4-173.6-184.4-296.7-112.4-130 76-225.7 80.6-300.9 42.7C367.4 234.6 146.3 23.7 0 91.2V1080h1920z",
                                fill: "url(#gradient1)",
                            })
                        ),
                        s.a.createElement(
                            "g",
                            { id: "curve2" },
                            s.a.createElement(
                                "linearGradient",
                                {
                                    id: "gradient2",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "423.43",
                                    y1: "-1023.418",
                                    x2: "1488.562",
                                    y2: "-1777.18",
                                    gradientTransform: "matrix(1 0 0 -1 0 -698)",
                                },
                                s.a.createElement("stop", {
                                    offset: "0",
                                    stopColor: "#D34395",
                                }),
                                s.a.createElement("stop", {
                                    offset: "0.3",
                                    stopColor: "#B63386",
                                }),
                                s.a.createElement("stop", {
                                    offset: "1",
                                    stopColor: "#823389",
                                })
                            ),
                            s.a.createElement("path", {
                                d:
                                    "M1653.4 302.3c99.1 12.7 172.4 56.3 266.6 28V1080H0V335.6c87.9 60.7 153 74.1 289.2-14.1 135.5-87.7 241.6-114.6 300.6-100 61.8 15.3 144.7 91.6 241.5 120.7 101.4 30.5 148.4 46.1 233.9 53.6 84.9 7.4 199.8-5.1 279-40.4 88.2-39.4 209.3-66 309.2-53.1z",
                                fill: "url(#gradient2)",
                            })
                        ),
                        s.a.createElement(
                            "g",
                            { id: "curve3" },
                            s.a.createElement("path", {
                                d:
                                    "M1920 900V420.9c-128.7 3.1-331.2 214.6-524.8 249.8-186.9 34-230.1-39.6-411.2-44.8-145.3-4.2-250.9 91.6-544.5 58.3C220.2 659.4 19.7 537.7 0 529.7V369v711h1920z",
                                fill: "#021B4F",
                            })
                        ),
                        s.a.createElement(
                            "g",
                            { id: "curve4" },
                            s.a.createElement(
                                "linearGradient",
                                {
                                    id: "gradient4",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "369.253",
                                    y1: "-1145.08",
                                    x2: "1190.462",
                                    y2: "-2196.5",
                                    gradientTransform: "matrix(1 0 0 -1 0 -698)",
                                },
                                s.a.createElement("stop", {
                                    offset: "0",
                                    stopColor: "#643187",
                                }),
                                s.a.createElement("stop", {
                                    offset: "1",
                                    stopColor: "#3722BA",
                                    stopOpacity: "0",
                                })
                            ),
                            s.a.createElement("path", {
                                d:
                                    "M246.7 452.1c-79.5 32-162.4 27.1-246.7-13.5V1080h1727.2c-336.4-221.1-502.8-609.8-779.1-650.9-80.6-12-139.3 17.9-237.2 24.9-92 6.6-130.5-23.3-216.8-38.1-80.2-13.7-171.3 5.6-247.4 36.2z",
                                fill: "url(#gradient4)",
                            })
                        ),
                        s.a.createElement(
                            "g",
                            { id: "gradient" },
                            s.a.createElement(
                                "linearGradient",
                                {
                                    id: "gradient5",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "960",
                                    y1: "900",
                                    x2: "960",
                                    y2: "740",
                                },
                                s.a.createElement("stop", {
                                    offset: "0",
                                    stopColor: "#1B1B1B",
                                    stopOpacity: "1",
                                }),
                                s.a.createElement("stop", {
                                    offset: "1",
                                    stopColor: "#1B1B1B",
                                    stopOpacity: "0",
                                })
                            ),
                            s.a.createElement("path", {
                                fill: "url(#gradient5)",
                                d: "M0 650h1920v250H0z",
                            })
                        )
                    )
                ),
            Fe = { column: { minHeight: "30px", margin: "4px 0" } },
            Be = { heading: { padding: "20px 0px" } },
            ze = t(197),
            He = {
                backgroundColor: "#C22551",
                drawBackground: !1,
                title: { children: "Get started on Github" },
                abstract: {
                    children:
                        "Explore the FAST mono repository on Github and try out our components, utilities, and tools. Or, mix-and-match with your own solutions.",
                },
                action: { href: "https://github.com/microsoft/fast-dna/" },
                style: {
                    background:
                        "linear-gradient(90deg, rgba(251,53,109,1) 8%, rgba(0,35,94,1) 100%)",
                },
            },
            Ve = {
                badge: "COMPONENTS",
                heading: { children: "One component, many faces" },
                paragraph: {
                    children:
                        "Using an unopinionated architecture and Adaptive Styling, one suite of components can blend into any environment.",
                },
                action: e =>
                    s.a.createElement(
                        me.a,
                        { className: e, href: "https://explore.fast.design" },
                        "View Component Explorer"
                    ),
                image: e =>
                    s.a.createElement(
                        "video",
                        {
                            className: e,
                            role: "img",
                            "aria-label":
                                "Video of the Edge browser themes switching from light to dark",
                            autoPlay: !0,
                            loop: !0,
                        },
                        s.a.createElement("source", { src: ze, type: "video/mp4" })
                    ),
            };
        class $e extends h.a {
            constructor() {
                super(...arguments), (this.handledProps = { managedClasses: void 0 });
            }
            render() {
                return s.a.createElement(
                    "div",
                    {
                        className: super.generateClassNames(
                            this.props.managedClasses.homePage
                        ),
                    },
                    s.a.createElement(xe, {
                        srcBackground: Le,
                        backgroundColor: "#1B1B1B",
                        destination: "https://explore.fast.design",
                        callToAction: "EXPLORE COMPONENTS",
                        text: "An unopinionated system to build adaptive interfaces.",
                    }),
                    s.a.createElement(
                        p.a,
                        {
                            jssStyleSheet: {
                                page: { position: "relative", marginTop: "-30vh" },
                            },
                        },
                        s.a.createElement(d.a, { gutter: 16 }, this.components()),
                        s.a.createElement(d.a, { gutter: 16 }, this.utilities()),
                        s.a.createElement(d.a, { gutter: 16, row: 3 }, this.community())
                    ),
                    s.a.createElement(A, Object.assign({}, He))
                );
            }
            components() {
                return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(ve, { height: 5, row: 1 }),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: 12, row: 2 },
                        s.a.createElement(Y, Object.assign({}, Ve))
                    ),
                    s.a.createElement(ve, { height: 5, row: 3 }),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: 4 },
                        s.a.createElement(B, Object.assign({}, je))
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: [5, 4, 4] },
                        s.a.createElement(B, Object.assign({}, Oe))
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: [6, 5, 5, 4] },
                        s.a.createElement(B, Object.assign({}, Ne))
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: [7, 5, 5, 4] },
                        s.a.createElement(B, Object.assign({}, Se))
                    ),
                    s.a.createElement(ve, { height: 5, row: 8 })
                );
            }
            utilities() {
                return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 12, 4], row: 7 },
                        s.a.createElement(
                            j.a,
                            { jssStyleSheet: Be, tag: N.b.h2, size: N.a._3 },
                            "Utilities"
                        )
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: 8 },
                        s.a.createElement(B, Object.assign({}, ke))
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: [9, 8, 8] },
                        s.a.createElement(B, Object.assign({}, Pe))
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: [10, 9, 9, 8] },
                        s.a.createElement(B, Object.assign({}, _e))
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 6, 6, 3], row: [11, 9, 9, 8] },
                        s.a.createElement(B, Object.assign({}, Te))
                    )
                );
            }
            community() {
                return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(ve, { height: 8, row: 9 }),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 12, 4], row: 10 },
                        s.a.createElement(
                            j.a,
                            { jssStyleSheet: Be, tag: N.b.h2, size: N.a._3 },
                            "Community"
                        )
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 12, 4], row: 11 },
                        s.a.createElement(
                            B,
                            Object.assign(
                                {
                                    jssStyleSheet: {
                                        contentPlacement_image: { height: "80px" },
                                    },
                                },
                                Ae
                            )
                        )
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 12, 4], row: [12, 12, 11] },
                        s.a.createElement(
                            B,
                            Object.assign(
                                {
                                    jssStyleSheet: {
                                        contentPlacement_image: { height: "80px" },
                                    },
                                },
                                Me
                            )
                        )
                    ),
                    s.a.createElement(
                        g.a,
                        { jssStyleSheet: Fe, span: [12, 12, 4], row: [13, 13, 11] },
                        s.a.createElement(
                            B,
                            Object.assign(
                                {
                                    jssStyleSheet: {
                                        contentPlacement_image: { height: "80px" },
                                    },
                                },
                                De
                            )
                        )
                    ),
                    s.a.createElement(ve, { height: 5, row: 18 })
                );
            }
        }
        $e.displayName = "HomePage";
        const Ie = Object(m.a)({
            "@font-face": {
                fontFamily: "SegoeUIVF",
                src:
                    "url(https://res.cloudinary.com/fast-dna/raw/upload/v1558051831/SegoeUI-Roman-VF_web.ttf) format('truetype')",
                fontWeight: "1 1000",
            },
            "@global": {
                body: {
                    fontFamily:
                        "SegoeUIVF, Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif",
                    margin: "0",
                    padding: "0",
                    background: e => e.backgroundColor,
                },
            },
            homePage: {},
        })($e);
        var Ue = t(39),
            We = t(224);
        const Ge = t(119),
            Re = {
                "@font-face": {
                    fontFamily: "MDL2",
                    src:
                        "url(https://www.microsoft.com/design/fonts/FWMDL2.ttf) format('truetype')",
                },
                "@global": {
                    fontFamily: "'MDL2', 'Segoe MDL2 Assets'",
                    position: "absolute",
                },
                logoWrapper: { position: "relative", zIndex: "1" },
                logo: {
                    height: "54px",
                    [`@media only screen and (min-width: ${he})`]: { height: "72px" },
                },
                active: Object.assign({}, Object(K.b)()),
                navigation: {
                    top: "0",
                    width: "100%",
                    zIndex: "10",
                    position: "absolute",
                    "@media only screen and (max-width: 740px)": { padding: "0px" },
                    "a:visited": { color: "white" },
                    "a:active, a:focus": { fontWeight: Object(K.b)() },
                },
                navItem: { color: Object(f.c)(() => "#000"), margin: "0px 16px" },
                mobileNavItem: { margin: "24px 0px" },
                mobileNavLink: {
                    color: Object(f.c)(() => "#000"),
                    textDecoration: "none",
                },
                navItems: {
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginLeft: "40px",
                    [`@media only screen and (max-width: ${he})`]: { maxWidth: "500px" },
                },
                hamburgerButton: {
                    display: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    [`@media only screen and (max-width: ${he})`]: {
                        position: "relative",
                        display: "block",
                        marginLeft: "auto",
                    },
                },
                hamburger: {
                    fontSize: "26px",
                    height: "28px",
                    width: "26px",
                    color: "#FFF",
                    fontFamily: '"MDL2", "Segoe MDL2 Assets", "SegoeMDL2Assets"',
                },
                desktopNav: {
                    display: "flex",
                    marginTop: "24px",
                    [`@media only screen and (max-width: ${he})`]: { display: "none" },
                },
                mobileHeader: {
                    marginTop: "24px",
                    [`@media only screen and (min-width: ${he})`]: { display: "none" },
                },
                mobileNavBase: {
                    height: "100vh",
                    display: "block",
                    position: "absolute",
                    zIndex: "0",
                    backgroundColor: "black",
                    width: "100%",
                    paddingTop: "100px",
                    [`@media only screen and (min-width: ${he})`]: { display: "none" },
                },
                mobileNav: { top: "calc(-100vh - 100px)" },
                mobileNavActive: { top: "0px" },
                animationProps: { transition: "all 0.333s ease" },
            };
        function Ze(e, a) {
            if ("/" === e) return e === a;
            if (a) {
                const t = /([aA-zZ-])\w+/g,
                    n = a.match(t) && a.match(t).join("");
                return e.includes(n);
            }
            return !1;
        }
        function Je({ isMobile: e, route: a, NavData: t, style: n }) {
            const r = Object.keys(t);
            return e
                ? s.a.createElement(
                      g.a,
                      { span: 12, position: 1 },
                      r.map((e, r) => {
                          const i = t[e],
                              o = Ze(a, i.href) ? n.active : "";
                          let c;
                          return (
                              (c = i.external
                                  ? s.a.createElement(
                                        me.a,
                                        {
                                            href: i.href,
                                            className: `${o} ${n.mobileNavLink}`,
                                        },
                                        i.text
                                    )
                                  : s.a.createElement(
                                        l.b,
                                        {
                                            to: i.href,
                                            className: `${o} ${n.mobileNavLink}`,
                                        },
                                        i.text
                                    )),
                              s.a.createElement(
                                  "div",
                                  { className: n.mobileNavItem, key: r },
                                  c
                              )
                          );
                      }),
                      s.a.createElement(
                          We.a,
                          { href: "https://github.com/microsoft/fast-dna/" },
                          "GitHub"
                      )
                  )
                : s.a.createElement(
                      "div",
                      { style: { display: "flex", width: "100%" } },
                      s.a.createElement(
                          "div",
                          { className: n.navItems },
                          r.map((e, r) => {
                              const i = t[e],
                                  o = Ze(a, i.href) ? n.active : "";
                              let c;
                              return (c = i.external
                                  ? s.a.createElement(
                                        me.a,
                                        {
                                            href: i.href,
                                            key: r,
                                            className: `${o} ${n.navItem}`,
                                        },
                                        i.text
                                    )
                                  : s.a.createElement(
                                        l.b,
                                        {
                                            to: i.href,
                                            key: r,
                                            className: `${o} ${n.navItem}`,
                                        },
                                        i.text
                                    ));
                          }),
                          s.a.createElement(
                              We.a,
                              {
                                  href: "https://github.com/microsoft/fast-dna/",
                                  jssStyleSheet: { button: { marginLeft: "auto" } },
                              },
                              "GitHub"
                          )
                      )
                  );
        }
        const qe = {
            column: { display: "inline-flex", alignItems: "center", width: "100%" },
        };
        var Ye = Object(m.a)(Re)(e => {
            const [a, t] = s.a.useState(!1);
            return (
                s.a.useEffect(
                    () => {
                        t(!1);
                    },
                    [e.routeProps.location.pathname]
                ),
                (function(e, a) {
                    s.a.useEffect(
                        () => {
                            document &&
                                document.body &&
                                (!0 === a
                                    ? document.body.setAttribute(
                                          "style",
                                          "overflow: hidden"
                                      )
                                    : document.body.setAttribute(
                                          "style",
                                          "overflow: auto"
                                      ));
                        },
                        [a]
                    );
                })(0, a),
                s.a.createElement(
                    c.a,
                    { designSystem: { density: 2 } },
                    s.a.createElement(
                        p.a,
                        { className: e.managedClasses.navigation },
                        s.a.createElement(d.a, {
                            gutter: 16,
                            gridColumn: 1,
                            className: `${e.managedClasses.animationProps} ${
                                e.managedClasses.mobileNavBase
                            } ${
                                a
                                    ? e.managedClasses.mobileNavActive
                                    : e.managedClasses.mobileNav
                            }`,
                        }),
                        s.a.createElement(
                            d.a,
                            {
                                gutter: 16,
                                className: `${e.managedClasses.animationProps} ${
                                    e.managedClasses.mobileNavBase
                                } ${
                                    a
                                        ? e.managedClasses.mobileNavActive
                                        : e.managedClasses.mobileNav
                                }`,
                            },
                            s.a.createElement(Je, {
                                NavData: e.NavData,
                                isMobile: !0,
                                route: e.routeProps.location.pathname,
                                style: e.managedClasses,
                            })
                        ),
                        s.a.createElement(
                            d.a,
                            {
                                gutter: 16,
                                className: e.managedClasses.mobileHeader,
                                verticalAlign: Ue.a.center,
                            },
                            s.a.createElement(
                                g.a,
                                { position: 1, span: 12, jssStyleSheet: qe },
                                s.a.createElement(
                                    l.b,
                                    { className: e.managedClasses.logoWrapper, to: "/" },
                                    s.a.createElement("img", {
                                        className: e.managedClasses.logo,
                                        src: Ge,
                                    })
                                ),
                                s.a.createElement(
                                    "button",
                                    {
                                        className: e.managedClasses.hamburgerButton,
                                        onClick: function() {
                                            t(e => !e);
                                        },
                                    },
                                    s.a.createElement(
                                        "span",
                                        { className: e.managedClasses.hamburger },
                                        ""
                                    )
                                )
                            )
                        ),
                        s.a.createElement(
                            d.a,
                            {
                                gutter: 16,
                                className: e.managedClasses.desktopNav,
                                verticalAlign: Ue.a.center,
                            },
                            s.a.createElement(
                                g.a,
                                { position: 1, span: 12, jssStyleSheet: qe },
                                s.a.createElement(
                                    l.b,
                                    { to: "/", className: e.managedClasses.logoWrapper },
                                    s.a.createElement("img", {
                                        className: e.managedClasses.logo,
                                        src: Ge,
                                        alt: "FAST-DNA text in white",
                                        "aria-label": "Home",
                                    })
                                ),
                                s.a.createElement(Je, {
                                    NavData: e.NavData,
                                    isMobile: !1,
                                    route: e.routeProps.location.pathname,
                                    style: e.managedClasses,
                                })
                            )
                        )
                    )
                )
            );
        });
        const Xe = {
                components: {
                    external: !0,
                    href: "https://explore.fast.design",
                    text: "COMPONENTS",
                    selected: !1,
                },
                documentation: {
                    external: !0,
                    href: "https://www.fast.design/docs/en/contributing/install",
                    text: "DOCUMENTATION",
                    selected: !1,
                },
            },
            Ke = document.createElement("div");
        Ke.setAttribute("id", "root"), document.body.appendChild(Ke);
        const Qe = Object(o.f)(e =>
            s.a.createElement(Ye, { NavData: Xe, routeProps: e })
        );
        i.a.render(
            s.a.createElement(
                c.a,
                { designSystem: V },
                s.a.createElement(
                    l.a,
                    null,
                    s.a.createElement(Qe, null),
                    s.a.createElement(
                        o.c,
                        null,
                        s.a.createElement(o.a, {
                            exact: !0,
                            path: "/",
                            render: () => s.a.createElement(Ie, null),
                        })
                    ),
                    s.a.createElement(ie, null)
                )
            ),
            document.getElementById("root")
        );
    },
});
