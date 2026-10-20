(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/motion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTop",
    ()=>BackToTop,
    "RouteTransition",
    ()=>RouteTransition,
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ScrollReveal({ children, className = "", as = "div", delay = 0, id, "aria-label": ariaLabel }) {
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const element = elementRef.current;
            if (!element) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) {
                element.classList.add("is-visible");
                return;
            }
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "ScrollReveal.useEffect.ctx": ()=>{
                    const isStaggered = element.classList.contains("reveal-stagger") || element.querySelector(".product-card") || element.querySelector(".cat-card") || element.querySelector(".review-card");
                    if (isStaggered) {
                        let items = Array.from(element.querySelectorAll(".product-card, .cat-card, .review-card, .feature-item, .promo-card, .reveal-item"));
                        if (items.length === 0) {
                            items = Array.from(element.children);
                        }
                        if (items.length === 0) {
                            items = [
                                element
                            ];
                        }
                        // Hide initially in GSAP context (preserves SSR visibility if JS fails)
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].set(element, {
                            opacity: 1
                        });
                        element.classList.add("is-visible");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(items, {
                            opacity: 0,
                            y: 18
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.55,
                            stagger: 0.07,
                            ease: "power2.out",
                            delay: delay / 1000,
                            scrollTrigger: {
                                trigger: element,
                                start: "top 88%",
                                once: true
                            }
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(element, {
                            opacity: 0,
                            y: 22
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            delay: delay / 1000,
                            scrollTrigger: {
                                trigger: element,
                                start: "top 88%",
                                once: true
                            },
                            onComplete: {
                                "ScrollReveal.useEffect.ctx": ()=>{
                                    element.classList.add("is-visible");
                                }
                            }["ScrollReveal.useEffect.ctx"]
                        });
                    }
                }
            }["ScrollReveal.useEffect.ctx"], element);
            return ({
                "ScrollReveal.useEffect": ()=>{
                    ctx.revert();
                }
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], [
        delay
    ]);
    const classNames = `scroll-reveal${className ? ` ${className}` : ""}`;
    const style = {
        "--reveal-delay": `${delay}ms`
    };
    if (as === "section") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: (el)=>{
                elementRef.current = el;
            },
            id: id,
            "aria-label": ariaLabel,
            className: classNames,
            style: style,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/motion.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: (el)=>{
            elementRef.current = el;
        },
        id: id,
        "aria-label": ariaLabel,
        className: classNames,
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/motion.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(ScrollReveal, "CKe/C9l/PZDcdMrjDfTWxieUegY=");
_c = ScrollReveal;
function RouteTransition({ children }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteTransition.useEffect": ()=>{
            const el = containerRef.current;
            if (!el || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "RouteTransition.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(el, {
                        opacity: 0.75,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.35,
                        ease: "power2.out"
                    });
                }
            }["RouteTransition.useEffect.ctx"], el);
            return ({
                "RouteTransition.useEffect": ()=>{
                    ctx.revert();
                }
            })["RouteTransition.useEffect"];
        }
    }["RouteTransition.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "route-transition",
        children: children
    }, pathname, false, {
        fileName: "[project]/src/components/motion.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s1(RouteTransition, "hU92UUchb8zuqBnV3VAEaZk6dEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = RouteTransition;
function BackToTop() {
    _s2();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackToTop.useEffect": ()=>{
            const onScroll = {
                "BackToTop.useEffect.onScroll": ()=>setVisible(window.scrollY > 600)
            }["BackToTop.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "BackToTop.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["BackToTop.useEffect"];
        }
    }["BackToTop.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackToTop.useEffect": ()=>{
            const btn = buttonRef.current;
            if (!btn || !visible || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "BackToTop.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(btn, {
                        opacity: 0,
                        scale: 0.8
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.25,
                        ease: "back.out(1.8)"
                    });
                }
            }["BackToTop.useEffect.ctx"], btn);
            return ({
                "BackToTop.useEffect": ()=>{
                    ctx.revert();
                }
            })["BackToTop.useEffect"];
        }
    }["BackToTop.useEffect"], [
        visible
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: buttonRef,
        className: "back-to-top",
        type: "button",
        onClick: ()=>{
            const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])();
            window.scrollTo({
                top: 0,
                behavior: reduced ? "auto" : "smooth"
            });
        },
        "aria-label": "Back to top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
            size: 17
        }, void 0, false, {
            fileName: "[project]/src/components/motion.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/motion.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s2(BackToTop, "ClHJuN6H1HXqeRbKJmlns2Dh6Jk=");
_c2 = BackToTop;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollReveal");
__turbopack_context__.k.register(_c1, "RouteTransition");
__turbopack_context__.k.register(_c2, "BackToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/settings-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsPanel",
    ()=>SettingsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const accents = [
    {
        id: "blue",
        label: "Ocean blue",
        color: "#3975b7"
    },
    {
        id: "green",
        label: "Garden green",
        color: "#50836a"
    },
    {
        id: "purple",
        label: "Iris purple",
        color: "#8462a8"
    },
    {
        id: "orange",
        label: "Persimmon orange",
        color: "#c66b36"
    },
    {
        id: "rose",
        label: "Soft rose",
        color: "#cf5c60"
    }
];
function SettingGroup({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "setting-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/settings-panel.tsx",
                lineNumber: 17,
                columnNumber: 45
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/settings-panel.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c = SettingGroup;
function SegmentedSetting({ label, value, options, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "setting-control",
        "aria-label": label,
        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-pressed": value === option.value,
                className: value === option.value ? "is-selected" : "",
                onClick: (e)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animateButtonPress"])(e.currentTarget);
                    onChange(option.value);
                },
                children: option.label
            }, option.value, false, {
                fileName: "[project]/src/components/settings-panel.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/settings-panel.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c1 = SegmentedSetting;
function SettingsPanel({ open, onClose }) {
    _s();
    const { settings, updateSetting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeSettings"])();
    const backdropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drawerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleClose = ()=>{
        const backdrop = backdropRef.current;
        const drawer = drawerRef.current;
        if (!backdrop || !drawer || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) {
            onClose();
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(drawer, {
            x: "100%",
            duration: 0.22,
            ease: "power3.in"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(backdrop, {
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
            onComplete: onClose
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPanel.useEffect": ()=>{
            if (!open) return;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            document.querySelector(".settings-close")?.focus();
            const backdrop = backdropRef.current;
            const drawer = drawerRef.current;
            let ctx = null;
            if (backdrop && drawer && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) {
                ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                    "SettingsPanel.useEffect": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(backdrop, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 0.25,
                            ease: "power2.out"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(drawer, {
                            x: "100%"
                        }, {
                            x: "0%",
                            duration: 0.35,
                            ease: "power3.out"
                        });
                    }
                }["SettingsPanel.useEffect"]);
            }
            function handleKeyDown(event) {
                if (event.key === "Escape") handleClose();
                if (event.key === "Tab") {
                    const d = drawerRef.current;
                    const focusable = d?.querySelectorAll("button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
                    if (!focusable?.length) return;
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (event.shiftKey && document.activeElement === first) {
                        event.preventDefault();
                        last.focus();
                    } else if (!event.shiftKey && document.activeElement === last) {
                        event.preventDefault();
                        first.focus();
                    }
                }
            }
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "SettingsPanel.useEffect": ()=>{
                    ctx?.revert();
                    document.body.style.overflow = previousOverflow;
                    document.removeEventListener("keydown", handleKeyDown);
                    document.querySelector("[data-settings-trigger]")?.focus();
                }
            })["SettingsPanel.useEffect"];
        }
    }["SettingsPanel.useEffect"], [
        open
    ]);
    function resetSettings() {
        updateSetting("colorMode", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeSettings"].colorMode);
        updateSetting("accent", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeSettings"].accent);
        updateSetting("fontSize", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeSettings"].fontSize);
        updateSetting("corners", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeSettings"].corners);
        updateSetting("motion", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeSettings"].motion);
        updateSetting("density", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultThemeSettings"].density);
    }
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: backdropRef,
        className: "settings-backdrop",
        onMouseDown: (event)=>{
            if (event.target === event.currentTarget) handleClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            ref: drawerRef,
            className: "settings-drawer",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "settings-title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "settings-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Make it yours"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/settings-panel.tsx",
                                    lineNumber: 147,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "settings-title",
                                    children: "Appearance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/settings-panel.tsx",
                                    lineNumber: 147,
                                    columnNumber: 62
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-button settings-close",
                            type: "button",
                            onClick: handleClose,
                            "aria-label": "Close appearance settings",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/settings-panel.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/settings-panel.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "settings-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingGroup, {
                            title: "Colour mode",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegmentedSetting, {
                                label: "Colour mode",
                                value: settings.colorMode,
                                onChange: (value)=>updateSetting("colorMode", value),
                                options: [
                                    {
                                        value: "light",
                                        label: "Light"
                                    },
                                    {
                                        value: "dark",
                                        label: "Dark"
                                    },
                                    {
                                        value: "system",
                                        label: "System"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/settings-panel.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingGroup, {
                            title: "Accent colour",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "accent-options",
                                role: "group",
                                "aria-label": "Accent colour",
                                children: accents.map((accent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: settings.accent === accent.id ? "is-selected" : "",
                                        onClick: (e)=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animateButtonPress"])(e.currentTarget);
                                            updateSetting("accent", accent.id);
                                        },
                                        "aria-label": accent.label,
                                        "aria-pressed": settings.accent === accent.id,
                                        style: {
                                            "--swatch": accent.color
                                        },
                                        children: settings.accent === accent.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/settings-panel.tsx",
                                            lineNumber: 176,
                                            columnNumber: 53
                                        }, this)
                                    }, accent.id, false, {
                                        fileName: "[project]/src/components/settings-panel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/settings-panel.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingGroup, {
                            title: "Text size",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegmentedSetting, {
                                label: "Text size",
                                value: settings.fontSize,
                                onChange: (value)=>updateSetting("fontSize", value),
                                options: [
                                    {
                                        value: "small",
                                        label: "Small"
                                    },
                                    {
                                        value: "medium",
                                        label: "Medium"
                                    },
                                    {
                                        value: "large",
                                        label: "Large"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/settings-panel.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingGroup, {
                            title: "Corner style",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegmentedSetting, {
                                label: "Corner style",
                                value: settings.corners,
                                onChange: (value)=>updateSetting("corners", value),
                                options: [
                                    {
                                        value: "sharp",
                                        label: "Sharp"
                                    },
                                    {
                                        value: "rounded",
                                        label: "Rounded"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/settings-panel.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingGroup, {
                            title: "Animations",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegmentedSetting, {
                                label: "Animations",
                                value: settings.motion,
                                onChange: (value)=>updateSetting("motion", value),
                                options: [
                                    {
                                        value: "on",
                                        label: "On"
                                    },
                                    {
                                        value: "reduced",
                                        label: "Reduced"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/settings-panel.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingGroup, {
                            title: "Layout density",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegmentedSetting, {
                                label: "Layout density",
                                value: settings.density,
                                onChange: (value)=>updateSetting("density", value),
                                options: [
                                    {
                                        value: "comfortable",
                                        label: "Comfortable"
                                    },
                                    {
                                        value: "compact",
                                        label: "Compact"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/settings-panel.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/settings-panel.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "settings-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "settings-reset",
                            type: "button",
                            onClick: resetSettings,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/settings-panel.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                " Reset to default"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Saved on this device"
                        }, void 0, false, {
                            fileName: "[project]/src/components/settings-panel.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/settings-panel.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/settings-panel.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/settings-panel.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(SettingsPanel, "ULjJ2NTds/Z4eeCrrOvZC4rnoS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeSettings"]
    ];
});
_c2 = SettingsPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SettingGroup");
__turbopack_context__.k.register(_c1, "SegmentedSetting");
__turbopack_context__.k.register(_c2, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.mjs [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.mjs [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/wishlist-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$settings$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/settings-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const topLinks = [
    {
        href: "/category/dresses",
        label: "Dresses"
    },
    {
        href: "/category/tops-blouses",
        label: "Tops & Blouses"
    },
    {
        href: "/category/knitwear",
        label: "Knitwear"
    },
    {
        href: "/category/jackets-coats",
        label: "Jackets"
    },
    {
        href: "/category/pants-skirts",
        label: "Pants & Skirts"
    },
    {
        href: "/category/shoes",
        label: "Shoes"
    },
    {
        href: "/category/bags",
        label: "Bags"
    },
    {
        href: "/category/jewelry-accessories",
        label: "Jewelry"
    },
    {
        href: "/category/beauty-fragrance",
        label: "Beauty"
    },
    {
        href: "/category/sale",
        label: "Sale"
    }
];
const megaGroups = [
    {
        heading: "Dresses",
        items: [
            "Casual Dresses",
            "Midi Dresses",
            "Maxi Dresses",
            "Evening Dresses",
            "Summer Dresses"
        ]
    },
    {
        heading: "Tops & Blouses",
        items: [
            "Blouses",
            "Shirts",
            "Knit Tops",
            "T-Shirts",
            "Camisoles"
        ]
    },
    {
        heading: "Knitwear",
        items: [
            "Cardigans",
            "Cashmere Knits",
            "Sweaters",
            "Knit Vests"
        ]
    },
    {
        heading: "Jackets & Outerwear",
        items: [
            "Tailored Blazers",
            "Trench Coats",
            "Wool Coats",
            "Jackets"
        ]
    },
    {
        heading: "Pants & Skirts",
        items: [
            "Tailored Trousers",
            "Pleated Skirts",
            "Linen Pants",
            "Wide-Leg Pants"
        ]
    },
    {
        heading: "Shoes & Heels",
        items: [
            "Strappy Heels",
            "Leather Loafers",
            "Ballet Flats",
            "Boots",
            "Sneakers"
        ]
    },
    {
        heading: "Bags & Totes",
        items: [
            "Handbags",
            "Shoulder Bags",
            "Tote Bags",
            "Crossbody"
        ]
    },
    {
        heading: "Jewelry & Beauty",
        items: [
            "Gold Earrings",
            "Pendant Necklaces",
            "Rings",
            "Perfume",
            "Skincare"
        ]
    }
];
function SiteHeader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { itemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { wishlistCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shopMenuOpen, setShopMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const bagBadgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wishlistBadgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const megaMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileNavRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousCartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(itemCount);
    const previousWishlistCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(wishlistCount);
    const closeSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SiteHeader.useCallback[closeSettings]": ()=>setSettingsOpen(false)
    }["SiteHeader.useCallback[closeSettings]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const onScroll = {
                "SiteHeader.useEffect.onScroll": ()=>setScrolled(window.scrollY > 18)
            }["SiteHeader.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    // GSAP Cart badge bounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (previousCartCount.current === itemCount) return;
            previousCartCount.current = itemCount;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animateBadgeBounce"])(bagBadgeRef.current);
        }
    }["SiteHeader.useEffect"], [
        itemCount
    ]);
    // GSAP Wishlist badge bounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (previousWishlistCount.current === wishlistCount) return;
            previousWishlistCount.current = wishlistCount;
            if (wishlistBadgeRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animateBadgeBounce"])(wishlistBadgeRef.current);
            }
        }
    }["SiteHeader.useEffect"], [
        wishlistCount
    ]);
    // GSAP Mega Menu entrance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const el = megaMenuRef.current;
            if (!el || !shopMenuOpen || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "SiteHeader.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(el, {
                        opacity: 0,
                        y: -6
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.22,
                        ease: "power2.out"
                    });
                }
            }["SiteHeader.useEffect.ctx"], el);
            return ({
                "SiteHeader.useEffect": ()=>ctx.revert()
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        shopMenuOpen
    ]);
    // GSAP Mobile Nav entrance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const el = mobileNavRef.current;
            if (!el || !menuOpen || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "SiteHeader.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(el, {
                        opacity: 0,
                        y: -8
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.25,
                        ease: "power2.out"
                    });
                }
            }["SiteHeader.useEffect.ctx"], el);
            return ({
                "SiteHeader.useEffect": ()=>ctx.revert()
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "announcement",
                children: [
                    "⚡ ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "FLASH SALE:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    " Use code ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "LUXE20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 113,
                        columnNumber: 45
                    }, this),
                    " for 20% off • 🚚 Free Shipping on orders over $75 • ⭐ 4.9/5 Rated"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `site-header${scrolled ? " is-scrolled" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-main page-shell",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-button menu-toggle",
                                "aria-label": menuOpen ? "Close menu" : "Open menu",
                                "aria-expanded": menuOpen,
                                onClick: ()=>setMenuOpen((open)=>!open),
                                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 21
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 21
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 123,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "wordmark",
                                href: "/",
                                "aria-label": "Aura Store Home",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "wordmark-mark",
                                        "aria-hidden": "true",
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    "AURA",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "wordmark-period",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 126,
                                        columnNumber: 76
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSearch"], {}, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-button settings-trigger",
                                        type: "button",
                                        "data-settings-trigger": true,
                                        "aria-label": "Appearance settings",
                                        "aria-haspopup": "dialog",
                                        "aria-expanded": settingsOpen,
                                        onClick: ()=>setSettingsOpen(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                            size: 19
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "icon-button account-link",
                                        href: "/account",
                                        "aria-label": "Your account",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-header.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "icon-button wishlist-link",
                                        href: "/wishlist",
                                        "aria-label": `Wishlist, ${wishlistCount} items`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                size: 19
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            wishlistCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: wishlistBadgeRef,
                                                className: "bag-count",
                                                children: wishlistCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "icon-button bag-link",
                                        href: "/cart",
                                        "aria-label": `Shopping bag, ${itemCount} items`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: bagBadgeRef,
                                                className: "bag-count",
                                                children: itemCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "desktop-nav page-shell",
                        "aria-label": "Main navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `shop-menu-wrap${shopMenuOpen ? " is-open" : ""}`,
                                onMouseEnter: ()=>setShopMenuOpen(true),
                                onMouseLeave: ()=>setShopMenuOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "nav-shop-trigger",
                                        "aria-expanded": shopMenuOpen,
                                        "aria-label": "Open shop categories",
                                        onClick: ()=>setShopMenuOpen((open)=>!open),
                                        children: "Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: megaMenuRef,
                                        className: "mega-menu",
                                        role: "menu",
                                        "aria-label": "Shop categories",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mega-menu-columns",
                                                children: megaGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mega-menu-column",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mega-menu-heading",
                                                                children: group.heading
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site-header.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/shop?category=${encodeURIComponent(group.heading)}`,
                                                                    onClick: ()=>setShopMenuOpen(false),
                                                                    children: item
                                                                }, item, false, {
                                                                    fileName: "[project]/src/components/site-header.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, group.heading, true, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mega-menu-footer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/shop",
                                                        onClick: ()=>setShopMenuOpen(false),
                                                        children: "View all categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/shop?sort=newest",
                                                        onClick: ()=>setShopMenuOpen(false),
                                                        children: "New arrivals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/category/sale",
                                                        onClick: ()=>setShopMenuOpen(false),
                                                        children: "Sale"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-header.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site-header.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-header.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop?sort=newest",
                                "aria-current": pathname === "/shop?sort=newest" ? "page" : undefined,
                                children: "New Arrivals"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            topLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    "aria-current": pathname === link.href ? "page" : undefined,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "nav-right",
                                href: "/shop",
                                children: "View all categories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        ref: mobileNavRef,
                        className: "mobile-nav",
                        "aria-label": "Mobile navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                onClick: ()=>setMenuOpen(false),
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop?sort=newest",
                                onClick: ()=>setMenuOpen(false),
                                children: "New Arrivals"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            topLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: ()=>setMenuOpen(false),
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/site-header.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                onClick: ()=>setMenuOpen(false),
                                children: "View all categories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/wishlist",
                                onClick: ()=>setMenuOpen(false),
                                children: "Wishlist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/account",
                                onClick: ()=>setMenuOpen(false),
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-header.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-header.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$settings$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsPanel"], {
                open: settingsOpen,
                onClose: closeSettings
            }, void 0, false, {
                fileName: "[project]/src/components/site-header.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-header.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "CHilh/NE/2xfo4EpHYVpLnzcyw8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteSearch",
    ()=>SiteSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const recentStorageKey = "goodform-recent-searches";
const popularCategories = [
    "Home",
    "Carry",
    "Audio",
    "Self-care"
];
function highlightMatch(text, query) {
    const cleanQuery = query.trim();
    if (!cleanQuery) return text;
    const index = text.toLowerCase().indexOf(cleanQuery.toLowerCase());
    if (index < 0) return text;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            text.slice(0, index),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                children: text.slice(index, index + cleanQuery.length)
            }, void 0, false, {
                fileName: "[project]/src/components/site-search.tsx",
                lineNumber: 19,
                columnNumber: 34
            }, this),
            text.slice(index + cleanQuery.length)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-search.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function SiteSearch() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedQuery, setDebouncedQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [recentSearches, setRecentSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SiteSearch.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const saved = window.localStorage.getItem(recentStorageKey);
                if (!saved) return [];
                const parsed = JSON.parse(saved);
                return Array.isArray(parsed) ? parsed.filter({
                    "SiteSearch.useState": (item)=>typeof item === "string"
                }["SiteSearch.useState"]).slice(0, 5) : [];
            } catch  {
                return [];
            }
        }
    }["SiteSearch.useState"]);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const suggestionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteSearch.useEffect": ()=>{
            const el = suggestionsRef.current;
            if (!el || !isOpen || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isReducedMotion"])()) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "SiteSearch.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(el, {
                        opacity: 0,
                        y: -6
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                }
            }["SiteSearch.useEffect.ctx"], el);
            return ({
                "SiteSearch.useEffect": ()=>ctx.revert()
            })["SiteSearch.useEffect"];
        }
    }["SiteSearch.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteSearch.useEffect": ()=>{
            const timer = window.setTimeout({
                "SiteSearch.useEffect.timer": ()=>setDebouncedQuery(query.trim())
            }["SiteSearch.useEffect.timer"], 140);
            return ({
                "SiteSearch.useEffect": ()=>window.clearTimeout(timer)
            })["SiteSearch.useEffect"];
        }
    }["SiteSearch.useEffect"], [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteSearch.useEffect": ()=>{
            function onPointerDown(event) {
                if (!wrapperRef.current?.contains(event.target)) setIsOpen(false);
            }
            document.addEventListener("pointerdown", onPointerDown);
            return ({
                "SiteSearch.useEffect": ()=>document.removeEventListener("pointerdown", onPointerDown)
            })["SiteSearch.useEffect"];
        }
    }["SiteSearch.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteSearch.useEffect": ()=>{
            function onShortcut(event) {
                const target = event.target;
                const isTyping = target?.matches("input, textarea, select, [contenteditable='true']");
                if (!isTyping && (event.key === "/" || (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k")) {
                    event.preventDefault();
                    if (window.matchMedia("(max-width: 760px)").matches) setMobileOpen(true);
                    window.requestAnimationFrame({
                        "SiteSearch.useEffect.onShortcut": ()=>inputRef.current?.focus()
                    }["SiteSearch.useEffect.onShortcut"]);
                    setIsOpen(true);
                }
            }
            window.addEventListener("keydown", onShortcut);
            return ({
                "SiteSearch.useEffect": ()=>window.removeEventListener("keydown", onShortcut)
            })["SiteSearch.useEffect"];
        }
    }["SiteSearch.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteSearch.useEffect": ()=>{
            if (!mobileOpen) return;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            window.requestAnimationFrame({
                "SiteSearch.useEffect": ()=>inputRef.current?.focus()
            }["SiteSearch.useEffect"]);
            return ({
                "SiteSearch.useEffect": ()=>{
                    document.body.style.overflow = previousOverflow;
                }
            })["SiteSearch.useEffect"];
        }
    }["SiteSearch.useEffect"], [
        mobileOpen
    ]);
    const matches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteSearch.useMemo[matches]": ()=>{
            const value = debouncedQuery.toLowerCase();
            if (!value) return [];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "SiteSearch.useMemo[matches]": (product)=>`${product.name} ${product.category} ${product.description}`.toLowerCase().includes(value)
            }["SiteSearch.useMemo[matches]"]).slice(0, 5);
        }
    }["SiteSearch.useMemo[matches]"], [
        debouncedQuery
    ]);
    function saveAndSearch(value) {
        const term = value.trim();
        if (!term) return;
        const next = [
            term,
            ...recentSearches.filter((search)=>search.toLowerCase() !== term.toLowerCase())
        ].slice(0, 5);
        setRecentSearches(next);
        try {
            window.localStorage.setItem(recentStorageKey, JSON.stringify(next));
        } catch  {}
        setIsOpen(false);
        setMobileOpen(false);
        router.push(`/shop?q=${encodeURIComponent(term)}`);
    }
    function browseCategory(category) {
        setIsOpen(false);
        setMobileOpen(false);
        router.push(`/shop?category=${encodeURIComponent(category)}`);
    }
    function onKeyDown(event) {
        if (event.key === "Enter" && activeIndex >= 0 && matches[activeIndex]) {
            event.preventDefault();
            setIsOpen(false);
            setMobileOpen(false);
            router.push(`/product/${matches[activeIndex].slug}`);
            return;
        }
        if (event.key === "Escape") {
            event.preventDefault();
            setIsOpen(false);
            if (mobileOpen) setMobileOpen(false);
        }
        if (event.key === "ArrowDown" && matches.length) {
            event.preventDefault();
            setActiveIndex((index)=>(index + 1) % matches.length);
        }
        if (event.key === "ArrowUp" && matches.length) {
            event.preventDefault();
            setActiveIndex((index)=>index <= 0 ? matches.length - 1 : index - 1);
        }
    }
    function submit(event) {
        event.preventDefault();
        saveAndSearch(query);
    }
    const showDropdown = isOpen;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mobile-search-toggle icon-button",
                type: "button",
                "aria-label": "Open search",
                onClick: ()=>{
                    setMobileOpen(true);
                    setIsOpen(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/site-search.tsx",
                    lineNumber: 144,
                    columnNumber: 157
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-search.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "search-mobile-backdrop",
                type: "button",
                "aria-label": "Close search",
                onClick: ()=>setMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/site-search.tsx",
                lineNumber: 145,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `site-search-shell${mobileOpen ? " mobile-open" : ""}`,
                ref: wrapperRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "site-search-form",
                        role: "search",
                        onSubmit: submit,
                        children: [
                            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "search-mobile-close icon-button",
                                type: "button",
                                "aria-label": "Close search",
                                onClick: ()=>{
                                    setMobileOpen(false);
                                    setIsOpen(false);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 148,
                                    columnNumber: 178
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-search.tsx",
                                lineNumber: 148,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "search-leading-icon",
                                size: 18,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-search.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "search",
                                value: query,
                                onChange: (event)=>{
                                    setQuery(event.target.value);
                                    setActiveIndex(-1);
                                    setIsOpen(true);
                                },
                                onFocus: ()=>setIsOpen(true),
                                onKeyDown: onKeyDown,
                                placeholder: "Search good things",
                                "aria-label": "Search products",
                                role: "combobox",
                                "aria-autocomplete": "list",
                                "aria-expanded": showDropdown,
                                "aria-controls": "search-suggestions",
                                "aria-activedescendant": activeIndex >= 0 ? `search-result-${activeIndex}` : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-search.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "search-clear icon-button",
                                type: "button",
                                onClick: ()=>{
                                    setQuery("");
                                    setDebouncedQuery("");
                                    setActiveIndex(-1);
                                    setIsOpen(true);
                                    inputRef.current?.focus();
                                },
                                "aria-label": "Clear search",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 165,
                                    columnNumber: 227
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-search.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            !query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                className: "search-shortcut",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-search.tsx",
                                        lineNumber: 166,
                                        columnNumber: 55
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ctrl K"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-search.tsx",
                                        lineNumber: 166,
                                        columnNumber: 69
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-search.tsx",
                                lineNumber: 166,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "search-submit",
                                type: "submit",
                                "aria-label": "Search",
                                children: "Go"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-search.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-search.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: suggestionsRef,
                        className: "search-suggestions",
                        id: "search-suggestions",
                        role: "listbox",
                        "aria-label": "Search suggestions",
                        children: debouncedQuery ? matches.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "suggestion-heading",
                                    children: [
                                        "Suggestions ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                matches.length,
                                                " results"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site-search.tsx",
                                            lineNumber: 172,
                                            columnNumber: 63
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                matches.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        id: `search-result-${index}`,
                                        className: `suggestion-product${activeIndex === index ? " is-active" : ""}`,
                                        role: "option",
                                        "aria-selected": activeIndex === index,
                                        type: "button",
                                        onClick: ()=>{
                                            setIsOpen(false);
                                            setMobileOpen(false);
                                            router.push(`/product/${product.slug}`);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "suggestion-thumb",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: product.image,
                                                    alt: "",
                                                    width: 46,
                                                    height: 50,
                                                    sizes: "46px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-search.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 54
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-search.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "suggestion-product-copy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: highlightMatch(product.name, debouncedQuery)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-search.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 61
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: product.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-search.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 124
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site-search.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "suggestion-price",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(product.price)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-search.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/src/components/site-search.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "suggestion-all",
                                    type: "button",
                                    onClick: ()=>saveAndSearch(query),
                                    children: [
                                        "See all results for “",
                                        query,
                                        "” ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-search.tsx",
                                            lineNumber: 180,
                                            columnNumber: 131
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-search.tsx",
                            lineNumber: 171,
                            columnNumber: 48
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "search-no-results",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "No exact matches yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 181,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Try “lamp”, “bag”, or browse a popular category."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 181,
                                    columnNumber: 92
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: popularCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>browseCategory(category),
                                            children: category
                                        }, category, false, {
                                            fileName: "[project]/src/components/site-search.tsx",
                                            lineNumber: 181,
                                            columnNumber: 195
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 181,
                                    columnNumber: 153
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-search.tsx",
                            lineNumber: 181,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                recentSearches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggestion-heading",
                                            children: "Recent searches"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-search.tsx",
                                            lineNumber: 182,
                                            columnNumber: 47
                                        }, this),
                                        recentSearches.slice(0, 4).map((search)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "suggestion-recent",
                                                onClick: ()=>{
                                                    setQuery(search);
                                                    saveAndSearch(search);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-search.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 274
                                                    }, this),
                                                    search,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site-search.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 302
                                                    }, this)
                                                ]
                                            }, search, true, {
                                                fileName: "[project]/src/components/site-search.tsx",
                                                lineNumber: 182,
                                                columnNumber: 148
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 182,
                                    columnNumber: 45
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "suggestion-heading",
                                    children: "Popular categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "suggestion-categories",
                                    children: popularCategories.filter((category)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].includes(category)).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>browseCategory(category),
                                            children: [
                                                category,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-search.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 231
                                                }, this)
                                            ]
                                        }, category, true, {
                                            fileName: "[project]/src/components/site-search.tsx",
                                            lineNumber: 184,
                                            columnNumber: 143
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "search-hint",
                                    children: [
                                        "Press ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            children: "Esc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-search.tsx",
                                            lineNumber: 185,
                                            columnNumber: 51
                                        }, this),
                                        " to close"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-search.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-search.tsx",
                            lineNumber: 181,
                            columnNumber: 309
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-search.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-search.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-search.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(SiteSearch, "X/WsZOlWyv+voCkkMptsQQ4imv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SiteSearch;
var _c;
__turbopack_context__.k.register(_c, "SiteSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CartProvider({ children }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const toastRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const timer = window.setTimeout({
                "CartProvider.useEffect.timer": ()=>{
                    try {
                        const stored = window.localStorage.getItem("northline-cart");
                        if (stored) {
                            const parsed = JSON.parse(stored);
                            if (Array.isArray(parsed)) setItems(parsed);
                        }
                    } catch  {
                        window.localStorage.removeItem("northline-cart");
                    }
                    setIsReady(true);
                }
            }["CartProvider.useEffect.timer"], 0);
            return ({
                "CartProvider.useEffect": ()=>window.clearTimeout(timer)
            })["CartProvider.useEffect"];
        }
    }["CartProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (isReady) window.localStorage.setItem("northline-cart", JSON.stringify(items));
        }
    }["CartProvider.useEffect"], [
        items,
        isReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (!toast) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animateToastEnter"])(toastRef.current);
            const timer = window.setTimeout({
                "CartProvider.useEffect.timer": ()=>setToast("")
            }["CartProvider.useEffect.timer"], 2600);
            return ({
                "CartProvider.useEffect": ()=>window.clearTimeout(timer)
            })["CartProvider.useEffect"];
        }
    }["CartProvider.useEffect"], [
        toast
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[value]": ()=>{
            const addItem = {
                "CartProvider.useMemo[value].addItem": (product, quantity = 1)=>{
                    setItems({
                        "CartProvider.useMemo[value].addItem": (current)=>{
                            const existing = current.find({
                                "CartProvider.useMemo[value].addItem.existing": (item)=>item.id === product.id
                            }["CartProvider.useMemo[value].addItem.existing"]);
                            if (existing) {
                                return current.map({
                                    "CartProvider.useMemo[value].addItem": (item)=>item.id === product.id ? {
                                            ...item,
                                            quantity: item.quantity + quantity
                                        } : item
                                }["CartProvider.useMemo[value].addItem"]);
                            }
                            return [
                                ...current,
                                {
                                    ...product,
                                    quantity
                                }
                            ];
                        }
                    }["CartProvider.useMemo[value].addItem"]);
                    setToast(`${product.name} added to your bag`);
                }
            }["CartProvider.useMemo[value].addItem"];
            return {
                items,
                itemCount: items.reduce({
                    "CartProvider.useMemo[value]": (count, item)=>count + item.quantity
                }["CartProvider.useMemo[value]"], 0),
                subtotal: items.reduce({
                    "CartProvider.useMemo[value]": (total, item)=>total + item.price * item.quantity
                }["CartProvider.useMemo[value]"], 0),
                isReady,
                toast,
                addItem,
                updateQuantity: ({
                    "CartProvider.useMemo[value]": (id, quantity)=>{
                        if (quantity < 1) return;
                        setItems({
                            "CartProvider.useMemo[value]": (current)=>current.map({
                                    "CartProvider.useMemo[value]": (item)=>item.id === id ? {
                                            ...item,
                                            quantity
                                        } : item
                                }["CartProvider.useMemo[value]"])
                        }["CartProvider.useMemo[value]"]);
                    }
                })["CartProvider.useMemo[value]"],
                removeItem: ({
                    "CartProvider.useMemo[value]": (id)=>setItems({
                            "CartProvider.useMemo[value]": (current)=>current.filter({
                                    "CartProvider.useMemo[value]": (item)=>item.id !== id
                                }["CartProvider.useMemo[value]"])
                        }["CartProvider.useMemo[value]"])
                })["CartProvider.useMemo[value]"],
                clearCart: ({
                    "CartProvider.useMemo[value]": ()=>setItems([])
                })["CartProvider.useMemo[value]"]
            };
        }
    }["CartProvider.useMemo[value]"], [
        items,
        isReady,
        toast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: value,
        children: [
            children,
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: toastRef,
                className: "toast",
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "toast-check",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 13
                        }, void 0, false, {
                            fileName: "[project]/src/context/cart-context.tsx",
                            lineNumber: 96,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/context/cart-context.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    toast
                ]
            }, void 0, true, {
                fileName: "[project]/src/context/cart-context.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/context/cart-context.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "uIZGTaAI+i4IpHLIUwZfGDEG100=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) throw new Error("useCart must be used inside CartProvider");
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/theme-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "defaultThemeSettings",
    ()=>defaultThemeSettings,
    "themeStorageKey",
    ()=>themeStorageKey,
    "useThemeSettings",
    ()=>useThemeSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const themeStorageKey = "goodform-appearance";
const defaultThemeSettings = {
    colorMode: "light",
    accent: "rose",
    fontSize: "medium",
    corners: "rounded",
    motion: "on",
    density: "comfortable"
};
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function validChoice(value, choices, fallback) {
    return choices.includes(value) ? value : fallback;
}
function readStoredSettings() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = window.localStorage.getItem(themeStorageKey);
        if (!stored) return defaultThemeSettings;
        const value = JSON.parse(stored);
        return {
            colorMode: validChoice(value.colorMode, [
                "light",
                "dark",
                "system"
            ], defaultThemeSettings.colorMode),
            accent: validChoice(value.accent, [
                "blue",
                "green",
                "purple",
                "orange",
                "rose"
            ], defaultThemeSettings.accent),
            fontSize: validChoice(value.fontSize, [
                "small",
                "medium",
                "large"
            ], defaultThemeSettings.fontSize),
            corners: validChoice(value.corners, [
                "sharp",
                "rounded"
            ], defaultThemeSettings.corners),
            motion: validChoice(value.motion, [
                "on",
                "reduced"
            ], defaultThemeSettings.motion),
            density: validChoice(value.density, [
                "comfortable",
                "compact"
            ], defaultThemeSettings.density)
        };
    } catch  {
        return defaultThemeSettings;
    }
}
function applyTheme(settings) {
    const root = document.documentElement;
    root.dataset.colorMode = settings.colorMode;
    root.dataset.accent = settings.accent;
    root.dataset.fontSize = settings.fontSize;
    root.dataset.corners = settings.corners;
    root.dataset.motion = settings.motion;
    root.dataset.density = settings.density;
}
function ThemeProvider({ children }) {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(readStoredSettings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            applyTheme(settings);
            try {
                window.localStorage.setItem(themeStorageKey, JSON.stringify(settings));
            } catch  {}
        }
    }["ThemeProvider.useEffect"], [
        settings
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[value]": ()=>({
                settings,
                updateSetting: ({
                    "ThemeProvider.useMemo[value]": (key, value)=>setSettings({
                            "ThemeProvider.useMemo[value]": (current)=>({
                                    ...current,
                                    [key]: value
                                })
                        }["ThemeProvider.useMemo[value]"])
                })["ThemeProvider.useMemo[value]"]
            })
    }["ThemeProvider.useMemo[value]"], [
        settings
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/theme-context.tsx",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
_s(ThemeProvider, "WywW2Zkz3lDT7X+5qhQsr227eBw=");
_c = ThemeProvider;
function useThemeSettings() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) throw new Error("useThemeSettings must be used inside ThemeProvider");
    return context;
}
_s1(useThemeSettings, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/wishlist-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const STORAGE_KEY = "northline-wishlist";
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function WishlistProvider({ children }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "WishlistProvider.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const stored = window.localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) return parsed;
                }
            } catch  {
                window.localStorage.removeItem(STORAGE_KEY);
            }
            return [];
        }
    }["WishlistProvider.useState"]);
    const isReady = ("TURBOPACK compile-time value", "object") !== "undefined";
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const toastRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        }
    }["WishlistProvider.useEffect"], [
        items,
        isReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            if (!toast) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animateToastEnter"])(toastRef.current);
            const timer = window.setTimeout({
                "WishlistProvider.useEffect.timer": ()=>setToast("")
            }["WishlistProvider.useEffect.timer"], 2200);
            return ({
                "WishlistProvider.useEffect": ()=>window.clearTimeout(timer)
            })["WishlistProvider.useEffect"];
        }
    }["WishlistProvider.useEffect"], [
        toast
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WishlistProvider.useMemo[value]": ()=>({
                items,
                wishlistCount: items.length,
                isReady,
                toast,
                toggleItem: ({
                    "WishlistProvider.useMemo[value]": (product)=>{
                        setItems({
                            "WishlistProvider.useMemo[value]": (current)=>{
                                const exists = current.some({
                                    "WishlistProvider.useMemo[value].exists": (item)=>item.id === product.id
                                }["WishlistProvider.useMemo[value].exists"]);
                                const next = exists ? current.filter({
                                    "WishlistProvider.useMemo[value]": (item)=>item.id !== product.id
                                }["WishlistProvider.useMemo[value]"]) : [
                                    product,
                                    ...current
                                ];
                                setToast(exists ? `${product.name} removed from wishlist` : `${product.name} saved to wishlist`);
                                return next;
                            }
                        }["WishlistProvider.useMemo[value]"]);
                    }
                })["WishlistProvider.useMemo[value]"],
                removeItem: ({
                    "WishlistProvider.useMemo[value]": (id)=>{
                        setItems({
                            "WishlistProvider.useMemo[value]": (current)=>current.filter({
                                    "WishlistProvider.useMemo[value]": (item)=>item.id !== id
                                }["WishlistProvider.useMemo[value]"])
                        }["WishlistProvider.useMemo[value]"]);
                    }
                })["WishlistProvider.useMemo[value]"],
                isSaved: ({
                    "WishlistProvider.useMemo[value]": (id)=>items.some({
                            "WishlistProvider.useMemo[value]": (item)=>item.id === id
                        }["WishlistProvider.useMemo[value]"])
                })["WishlistProvider.useMemo[value]"]
            })
    }["WishlistProvider.useMemo[value]"], [
        items,
        isReady,
        toast
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext.Provider, {
        value: value,
        children: [
            children,
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: toastRef,
                className: "toast",
                role: "status",
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "toast-check",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            size: 12,
                            fill: "currentColor"
                        }, void 0, false, {
                            fileName: "[project]/src/context/wishlist-context.tsx",
                            lineNumber: 79,
                            columnNumber: 60
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/context/wishlist-context.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    toast
                ]
            }, void 0, true, {
                fileName: "[project]/src/context/wishlist-context.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/context/wishlist-context.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(WishlistProvider, "rcfOZRUfnEwTQercMFdta6roTmY=");
_c = WishlistProvider;
function useWishlist() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
    if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
    return context;
}
_s1(useWishlist, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WishlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateBadgeBounce",
    ()=>animateBadgeBounce,
    "animateButtonPress",
    ()=>animateButtonPress,
    "animateHeartPop",
    ()=>animateHeartPop,
    "animateToastEnter",
    ()=>animateToastEnter,
    "isReducedMotion",
    ()=>isReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
;
// Register ScrollTrigger safely in browser environments
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function isReducedMotion() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const storeSetting = document.documentElement.dataset.motion;
    if (storeSetting === "reduced") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function animateBadgeBounce(element) {
    if (!element || isReducedMotion()) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(element, {
        scale: 0.8
    }, {
        scale: 1,
        duration: 0.45,
        ease: "back.out(2.5)",
        overwrite: "auto"
    });
}
function animateHeartPop(element, saved) {
    if (!element || isReducedMotion()) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(element, {
        scale: saved ? 0.75 : 1
    }, {
        scale: saved ? 1.25 : 0.85,
        duration: 0.18,
        ease: "power2.out",
        onComplete: ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(element, {
                scale: 1,
                duration: 0.25,
                ease: "elastic.out(1.2, 0.4)"
            });
        }
    });
}
function animateButtonPress(element) {
    if (!element || isReducedMotion()) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(element, {
        scale: 0.96
    }, {
        scale: 1,
        duration: 0.22,
        ease: "power2.out",
        overwrite: "auto"
    });
}
function animateToastEnter(element) {
    if (!element || isReducedMotion()) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(element, {
        opacity: 0,
        y: 18,
        scale: 0.94
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.32,
        ease: "power3.out"
    });
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "categoryDefinitions",
    ()=>categoryDefinitions,
    "formatPrice",
    ()=>formatPrice,
    "getProduct",
    ()=>getProduct,
    "getRelatedProducts",
    ()=>getRelatedProducts,
    "getSubcategories",
    ()=>getSubcategories,
    "products",
    ()=>products,
    "rawProducts",
    ()=>rawProducts,
    "subcategoriesByCategory",
    ()=>subcategoriesByCategory
]);
const categoryDefinitions = {
    "Clothing": [
        "Dresses",
        "Tops & T-Shirts",
        "Shirts & Blouses",
        "Jeans & Pants",
        "Skirts & Shorts",
        "Sleepwear & Loungewear",
        "Baby & Kids Clothing"
    ],
    "Shoes": [
        "Sneakers",
        "Sandals",
        "Flats",
        "Heels",
        "Baby & Kids Shoes"
    ],
    "Bags": [
        "Handbags",
        "Shoulder Bags",
        "Crossbody Bags",
        "Tote Bags",
        "Backpacks",
        "Mini Bags",
        "Baby & Kids Bags"
    ],
    "Accessories": [
        "Jewelry",
        "Watches",
        "Sunglasses",
        "Hair Accessories",
        "Belts & Wallets",
        "Hats & Scarves",
        "Earrings & Necklaces",
        "Perfumes & Beauty",
        "Baby & Kids Accessories"
    ]
};
const rawProducts = [
    // =========================================================================
    // 1. CLOTHING (Dresses, Tops, Blouses, Pants, Skirts, Loungewear, Kids)
    // =========================================================================
    {
        slug: "silk-charmeuse-midi-slip-dress",
        name: "Silk Charmeuse Bias Cut Midi Dress",
        category: "Clothing",
        subcategory: "Dresses",
        brand: "Aura Studio",
        price: 145,
        compareAt: 175,
        description: "Draped gracefully on the bias to follow body contours without clinging. Delicate spaghetti straps, subtle V-neckline, and a glossy, fluid silk finish.",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 94,
        stock: 14,
        availability: "In stock",
        sku: "CLO-DRS-001",
        tags: [
            "dress",
            "silk",
            "evening",
            "minimalist",
            "summer",
            "bestseller"
        ],
        attributes: {
            Fabric: "100% Mulberry Silk",
            Cut: "Bias Cut",
            Length: "Midi"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-15"
    },
    {
        slug: "floral-linen-summer-sundress",
        name: "Tiered Linen Floral Summer Sundress",
        category: "Clothing",
        subcategory: "Dresses",
        brand: "Field House",
        price: 120,
        compareAt: 145,
        description: "Lightweight European flax linen featuring a delicate vintage floral print, tiered ruffle hem, and adjustable tie shoulder ribbons.",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 68,
        stock: 18,
        availability: "In stock",
        sku: "CLO-DRS-002",
        tags: [
            "dress",
            "linen",
            "floral",
            "summer",
            "vacation"
        ],
        attributes: {
            Material: "100% European Flax Linen",
            Lining: "Organic Cotton Voile"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-12"
    },
    {
        slug: "ribbed-knit-column-midi-dress",
        name: "Sculptural Ribbed Knit Column Dress",
        category: "Clothing",
        subcategory: "Dresses",
        brand: "Atelier Maison",
        price: 135,
        description: "Form-fitting compact rib knit with a high boat neckline, clean sleeveless shoulders, and side walking slits for effortless movement.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 52,
        stock: 22,
        availability: "In stock",
        sku: "CLO-DRS-003",
        tags: [
            "dress",
            "knit",
            "ribbed",
            "autumn",
            "elegant"
        ],
        attributes: {
            Composition: "70% Viscose, 30% Stretch Nylon",
            Fit: "Body-skimming"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-22"
    },
    {
        slug: "pleated-chiffon-evening-maxi-dress",
        name: "Pleated Chiffon Evening Maxi Dress",
        category: "Clothing",
        subcategory: "Dresses",
        brand: "Aura Studio",
        price: 195,
        compareAt: 240,
        description: "Cascading accordian pleats with a plunging halter neckline and cinched sash waist. Glides effortlessly across black-tie and wedding celebrations.",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 41,
        stock: 8,
        availability: "Low stock",
        sku: "CLO-DRS-004",
        tags: [
            "dress",
            "maxi",
            "evening",
            "pleated",
            "formal"
        ],
        attributes: {
            Material: "Recycled Poly Chiffon",
            Lining: "Silk Blend"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-28"
    },
    {
        slug: "organic-pima-crew-tee",
        name: "Organic Pima Cotton Relaxed Crewneck Tee",
        category: "Clothing",
        subcategory: "Tops & T-Shirts",
        brand: "Field House",
        price: 38,
        description: "Buttery soft Peruvian Pima cotton with a relaxed drop-shoulder cut, bound collar, and pre-washed finish that holds its shape wash after wash.",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 165,
        stock: 45,
        availability: "In stock",
        sku: "CLO-TOP-005",
        tags: [
            "tshirt",
            "cotton",
            "pima",
            "basics",
            "essential"
        ],
        attributes: {
            Material: "100% Long-Staple Pima Cotton",
            Fit: "Relaxed Boxy"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-10"
    },
    {
        slug: "ribbed-scoop-neck-tank",
        name: "Fine Ribbed Scoop-Neck Cotton Tank",
        category: "Clothing",
        subcategory: "Tops & T-Shirts",
        brand: "Aura Essentials",
        price: 32,
        description: "Classic 90s-inspired scoop neckline in a stretchy micro-rib cotton. Seamless armholes and clean hems make it the perfect base layer.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 78,
        stock: 36,
        availability: "In stock",
        sku: "CLO-TOP-006",
        tags: [
            "tank",
            "ribbed",
            "summer",
            "layering"
        ],
        attributes: {
            Material: "95% Cotton, 5% Spandex",
            Care: "Machine wash cold"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-05"
    },
    {
        slug: "breton-striped-boatneck-top",
        name: "Heavyweight Breton Striped Long Sleeve Top",
        category: "Clothing",
        subcategory: "Tops & T-Shirts",
        brand: "Field House",
        price: 58,
        compareAt: 72,
        description: "Inspired by timeless nautical French tailoring. Crafted from a structured 260GSM combed cotton jersey with a flattering wide boat neckline.",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 112,
        stock: 24,
        availability: "In stock",
        sku: "CLO-TOP-007",
        tags: [
            "striped",
            "breton",
            "cotton",
            "nautical",
            "classic"
        ],
        attributes: {
            Weight: "260 GSM Heavyweight Jersey",
            Pattern: "Navy & Cream Stripe"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-14"
    },
    {
        slug: "relaxed-poplin-boyfriend-shirt",
        name: "Relaxed Cotton Poplin Boyfriend Shirt",
        category: "Clothing",
        subcategory: "Shirts & Blouses",
        brand: "Field House",
        price: 78,
        compareAt: 95,
        description: "Crisp organic cotton poplin tailored with dropped shoulders, real mother-of-pearl buttons, and a curved high-low shirttail hem.",
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 140,
        stock: 30,
        availability: "In stock",
        sku: "CLO-SHT-008",
        tags: [
            "shirt",
            "poplin",
            "cotton",
            "casual",
            "workwear"
        ],
        attributes: {
            Material: "100% GOTS Certified Cotton",
            Collar: "Spread Collar"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-01"
    },
    {
        slug: "mulberry-silk-button-blouse",
        name: "Pure Mulberry Silk Button-Up Blouse",
        category: "Clothing",
        subcategory: "Shirts & Blouses",
        brand: "Atelier Maison",
        price: 130,
        compareAt: 160,
        description: "Liquid-smooth 19mm Mulberry silk with a matte sheen. Classic tailored cuffs, pointed collar, and a luminous, flattering drape.",
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 89,
        stock: 12,
        availability: "In stock",
        sku: "CLO-SHT-009",
        tags: [
            "blouse",
            "silk",
            "luxury",
            "workwear",
            "timeless"
        ],
        attributes: {
            Material: "100% Grade 6A Mulberry Silk",
            Weight: "19mm Momme"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-18"
    },
    {
        slug: "breezy-linen-tie-front-blouse",
        name: "Breezy French Linen Tie-Front Blouse",
        category: "Clothing",
        subcategory: "Shirts & Blouses",
        brand: "Field House",
        price: 68,
        description: "Breathable pure washed linen with an airy silhouette, deep V-front with self-tie closure, and soft gathered blouson sleeves.",
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 46,
        stock: 19,
        availability: "In stock",
        sku: "CLO-SHT-010",
        tags: [
            "linen",
            "blouse",
            "summer",
            "breezy",
            "neutral"
        ],
        attributes: {
            Material: "100% French Washed Linen",
            Fit: "Relaxed"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-20"
    },
    {
        slug: "high-rise-wide-leg-linen-trousers",
        name: "High-Rise Wide-Leg Tailored Linen Trousers",
        category: "Clothing",
        subcategory: "Jeans & Pants",
        brand: "Atelier Maison",
        price: 110,
        compareAt: 135,
        description: "Tailored front pleats, concealed zip fly, and an elongating wide-leg silhouette cut from medium-weight non-sheer linen.",
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 97,
        stock: 16,
        availability: "In stock",
        sku: "CLO-PNT-011",
        tags: [
            "trousers",
            "linen",
            "wide-leg",
            "tailored",
            "summer"
        ],
        attributes: {
            Rise: "High 12.5 inch",
            Inseam: "31 inch",
            Material: "100% Linen"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-02"
    },
    {
        slug: "vintage-straight-leg-denim-jeans",
        name: "Classic Straight-Leg Vintage Wash Denim",
        category: "Clothing",
        subcategory: "Jeans & Pants",
        brand: "Field House",
        price: 98,
        description: "Constructed from 13oz rigid organic cotton denim with a gentle stone wash. Sits high at the natural waist with a straight ankle crop.",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 184,
        stock: 28,
        availability: "In stock",
        sku: "CLO-PNT-012",
        tags: [
            "jeans",
            "denim",
            "vintage",
            "straight-leg",
            "bestseller"
        ],
        attributes: {
            Denim: "100% Organic Rigid Cotton 13oz",
            Rise: "High-Rise"
        },
        isNew: false,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-05-30"
    },
    {
        slug: "pleated-wool-flannel-trousers",
        name: "Pleated Wool Flannel Relaxed Trousers",
        category: "Clothing",
        subcategory: "Jeans & Pants",
        brand: "Atelier Maison",
        price: 140,
        compareAt: 175,
        description: "Italian melange wool flannel woven with soft drape. Features deep reverse double pleats, horn buttons, and slant pockets.",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 63,
        stock: 11,
        availability: "In stock",
        sku: "CLO-PNT-013",
        tags: [
            "wool",
            "trousers",
            "pleated",
            "autumn",
            "workwear"
        ],
        attributes: {
            Material: "98% Virgin Wool, 2% Elastane",
            Lining: "Knee Viscose Lining"
        },
        isNew: true,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-09-14"
    },
    {
        slug: "satin-bias-cut-midi-skirt",
        name: "Satin Bias-Cut Fluid Midi Skirt",
        category: "Clothing",
        subcategory: "Skirts & Shorts",
        brand: "Aura Studio",
        price: 85,
        compareAt: 105,
        description: "Elasticized high waist that slips on effortlessly. The liquid satin fabric drapes across hips down to a gentle flounce hem.",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 92,
        stock: 20,
        availability: "In stock",
        sku: "CLO-SKT-014",
        tags: [
            "skirt",
            "satin",
            "midi",
            "evening",
            "versatile"
        ],
        attributes: {
            Waist: "Concealed Elastic Waistband",
            Length: "32 inch Midi"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-10"
    },
    {
        slug: "pleated-a-line-tennis-skirt",
        name: "High-Waist Pleated A-Line Mini Skirt",
        category: "Clothing",
        subcategory: "Skirts & Shorts",
        brand: "Aura Essentials",
        price: 62,
        description: "Crisp knife pleats in a structured stretch gabardine fabric. Built-in interior stretch shorts for comfort and confident movement.",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 54,
        stock: 25,
        availability: "In stock",
        sku: "CLO-SKT-015",
        tags: [
            "skirt",
            "pleated",
            "tennis",
            "athleisure",
            "preppy"
        ],
        attributes: {
            Material: "88% Polyester, 12% Spandex",
            BuiltIn: "Integrated Short Liner"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-08"
    },
    {
        slug: "relaxed-high-waist-linen-shorts",
        name: "Relaxed High-Rise Tailored Linen Shorts",
        category: "Clothing",
        subcategory: "Skirts & Shorts",
        brand: "Field House",
        price: 54,
        description: "Summer staple with tailored pleats, wide leg openings, side pockets, and an elasticated back waistband for all-day ease.",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 43,
        stock: 31,
        availability: "In stock",
        sku: "CLO-SKT-016",
        tags: [
            "shorts",
            "linen",
            "summer",
            "relaxed",
            "casual"
        ],
        attributes: {
            Inseam: "4.5 inch",
            Material: "100% Normandy Linen"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-15"
    },
    {
        slug: "bamboo-waffle-cloud-bath-robe",
        name: "Bamboo & Organic Cotton Waffle Lounge Robe",
        category: "Clothing",
        subcategory: "Sleepwear & Loungewear",
        brand: "Aura Essentials",
        price: 88,
        compareAt: 110,
        description: "Lightweight honeycombed waffle weave that absorbs water instantly and dries fast. Ultra-soft against sensitive skin, featuring deep pockets and a secure tie.",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 128,
        stock: 19,
        availability: "In stock",
        sku: "CLO-LNG-017",
        tags: [
            "robe",
            "loungewear",
            "spa",
            "cotton",
            "bath"
        ],
        attributes: {
            Blend: "60% Organic Cotton, 40% Bamboo Viscose",
            Fit: "Relaxed Kimono"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-20"
    },
    {
        slug: "washable-silk-cami-pajama-set",
        name: "Washable Mulberry Silk Cami Pajama Set",
        category: "Clothing",
        subcategory: "Sleepwear & Loungewear",
        brand: "Aura Studio",
        price: 115,
        compareAt: 140,
        description: "Thermoregulating silk cami and tap shorts set. Finished with raw scallop trim and completely machine washable on delicate cycle.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 76,
        stock: 15,
        availability: "In stock",
        sku: "CLO-LNG-018",
        tags: [
            "pajamas",
            "silk",
            "sleepwear",
            "luxury",
            "cami"
        ],
        attributes: {
            Material: "100% Washable Mulberry Silk",
            Care: "Machine Wash Cold"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-07-22"
    },
    {
        slug: "pure-cashmere-lounge-joggers",
        name: "Pure Mongolian Cashmere Lounge Knit Pants",
        category: "Clothing",
        subcategory: "Sleepwear & Loungewear",
        brand: "Atelier Maison",
        price: 160,
        compareAt: 195,
        description: "Knitted from double-twisted Grade-A Mongolian cashmere yarns. Wide ribbed elastic waistband, tailored tapered cuffs, and deep cozy pockets.",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 88,
        stock: 10,
        availability: "In stock",
        sku: "CLO-LNG-019",
        tags: [
            "cashmere",
            "loungewear",
            "knitwear",
            "joggers",
            "cozy"
        ],
        attributes: {
            Yarn: "100% Mongolian Cashmere 2-Ply",
            Care: "Hand Wash"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-17"
    },
    {
        slug: "organic-cotton-ribbed-baby-romper",
        name: "Organic Cotton Ribbed Baby Kimono Romper",
        category: "Clothing",
        subcategory: "Baby & Kids Clothing",
        brand: "Little Aura",
        price: 34,
        description: "Ultra-gentle GOTS certified organic cotton with snap button crotch closures and wrap-front kimono style for quick, tear-free changes.",
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 65,
        stock: 40,
        availability: "In stock",
        sku: "CLO-KID-020",
        tags: [
            "baby",
            "romper",
            "organic-cotton",
            "kids",
            "newborn"
        ],
        attributes: {
            Material: "100% GOTS Organic Cotton",
            Snaps: "Nickel-Free"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-25"
    },
    {
        slug: "pastel-floral-toddler-sundress",
        name: "Pastel Floral Toddler Tiered Cotton Dress",
        category: "Clothing",
        subcategory: "Baby & Kids Clothing",
        brand: "Little Aura",
        price: 42,
        description: "Charming ruffled shoulder flutter sleeves and sweet pastel wild bloom print on lightweight breathable cotton muslin.",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 39,
        stock: 22,
        availability: "In stock",
        sku: "CLO-KID-021",
        tags: [
            "kids",
            "toddler",
            "dress",
            "floral",
            "cotton"
        ],
        attributes: {
            Material: "100% Cotton Muslin",
            Ages: "2T - 6Y"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-08-04"
    },
    {
        slug: "chunky-knit-merino-kids-cardigan",
        name: "Chunky Knit Merino Wool Kids Cardigan",
        category: "Clothing",
        subcategory: "Baby & Kids Clothing",
        brand: "Little Aura",
        price: 56,
        compareAt: 70,
        description: "Hand-finished moss stitch cardigan with wooden button front and non-scratchy Australian merino wool yarn that keeps little ones warmly wrapped.",
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 48,
        stock: 14,
        availability: "In stock",
        sku: "CLO-KID-022",
        tags: [
            "kids",
            "cardigan",
            "merino-wool",
            "knit",
            "gift"
        ],
        attributes: {
            Yarn: "100% Pure Merino Wool",
            Buttons: "Natural Olive Wood"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-19"
    },
    // =========================================================================
    // 2. SHOES (Sneakers, Sandals, Flats, Heels, Baby & Kids Shoes)
    // =========================================================================
    {
        slug: "clean-leather-court-sneakers",
        name: "Clean Italian Leather Low-Top Court Sneakers",
        category: "Shoes",
        subcategory: "Sneakers",
        brand: "Aura Footwear",
        price: 135,
        compareAt: 165,
        description: "Handcrafted in Portugal with supple full-grain Italian calfskin, waxed cotton laces, cushioned ortholite footbed, and durable stitched margom rubber soles.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 215,
        stock: 35,
        availability: "In stock",
        sku: "SHO-SNK-023",
        tags: [
            "sneakers",
            "leather",
            "white-sneakers",
            "minimalist",
            "everyday"
        ],
        attributes: {
            Upper: "Italian Full-Grain Calfskin",
            Sole: "100% Natural Stitched Rubber"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-06-01"
    },
    {
        slug: "retro-suede-runner-sneakers",
        name: "Retro Suede Two-Tone Runner Sneakers",
        category: "Shoes",
        subcategory: "Sneakers",
        brand: "Field House",
        price: 120,
        description: "Vintage 1970s running silhouette with suede leather overlays, nylon ripstop underlays, and shock-absorbing EVA foam wedge soles.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 94,
        stock: 26,
        availability: "In stock",
        sku: "SHO-SNK-024",
        tags: [
            "sneakers",
            "suede",
            "runner",
            "retro",
            "casual"
        ],
        attributes: {
            Upper: "Suede & Recycled Nylon",
            Midsole: "Cushioned EVA Foam"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-10"
    },
    {
        slug: "breathable-slip-on-knit-trainers",
        name: "Breathable Cloud-Knit Slip-On Trainers",
        category: "Shoes",
        subcategory: "Sneakers",
        brand: "Aura Footwear",
        price: 85,
        compareAt: 110,
        description: "Seamless engineered stretch-knit upper that slips on like a sock. Ultra-featherweight construction with springy responsive air-sole cushioning.",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 78,
        stock: 29,
        availability: "In stock",
        sku: "SHO-SNK-025",
        tags: [
            "trainers",
            "knit",
            "slip-on",
            "walking",
            "lightweight"
        ],
        attributes: {
            Weight: "6.8 oz",
            Sole: "Flexible Phylon Foam"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-07-05"
    },
    {
        slug: "strappy-leather-ankle-wrap-sandals",
        name: "Strappy Italian Leather Ankle-Wrap Sandals",
        category: "Shoes",
        subcategory: "Sandals",
        brand: "Atelier Maison",
        price: 95,
        compareAt: 120,
        description: "Whisper-thin tubular leather straps that criss-cross over the instep and tie delicately around the ankle. Lightly cushioned leather footbed.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 104,
        stock: 18,
        availability: "In stock",
        sku: "SHO-SND-026",
        tags: [
            "sandals",
            "strappy",
            "leather",
            "summer",
            "vacation"
        ],
        attributes: {
            Insole: "Cushioned Leather",
            HeelHeight: "0.5 inch Flat"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-25"
    },
    {
        slug: "woven-raffia-platform-slides",
        name: "Woven Natural Raffia Platform Slide Sandals",
        category: "Shoes",
        subcategory: "Sandals",
        brand: "Field House",
        price: 78,
        description: "Artisanal handwoven Madagascar raffia strap set atop a lightweight jute-wrapped flatform sole with a durable treaded rubber bottom.",
        image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 62,
        stock: 21,
        availability: "In stock",
        sku: "SHO-SND-027",
        tags: [
            "sandals",
            "raffia",
            "platform",
            "boho",
            "resort"
        ],
        attributes: {
            PlatformHeight: "1.5 inch",
            Material: "Natural Woven Raffia"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-18"
    },
    {
        slug: "double-strap-suede-footbed-slides",
        name: "Double-Strap Ergonomic Suede Footbed Slides",
        category: "Shoes",
        subcategory: "Sandals",
        brand: "Aura Footwear",
        price: 88,
        description: "Anatomic cork-latex footbed lined with velvety suede that molds to the natural shape of your arches. Features adjustable brass pin buckles.",
        image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 153,
        stock: 33,
        availability: "In stock",
        sku: "SHO-SND-028",
        tags: [
            "slides",
            "suede",
            "footbed",
            "comfortable",
            "everyday"
        ],
        attributes: {
            Footbed: "Natural Molded Cork & Latex",
            Upper: "Oiled Suede"
        },
        isNew: false,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-05-12"
    },
    {
        slug: "soft-leather-square-toe-ballet-flats",
        name: "Glove Leather Square-Toe Ballet Flats",
        category: "Shoes",
        subcategory: "Flats",
        brand: "Atelier Maison",
        price: 110,
        compareAt: 135,
        description: "Crafted from butter-soft lambskin leather that needs zero break-in period. Modern square toe, delicate bow detail, and flexible leather sole.",
        image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 118,
        stock: 19,
        availability: "In stock",
        sku: "SHO-FLT-029",
        tags: [
            "flats",
            "ballet",
            "leather",
            "french-girl",
            "bestseller"
        ],
        attributes: {
            Upper: "100% Nappa Lambskin",
            ToeShape: "Modern Soft Square"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-14"
    },
    {
        slug: "pointed-toe-suede-dorsay-flats",
        name: "Pointed-Toe Velvet Suede D'Orsay Flats",
        category: "Shoes",
        subcategory: "Flats",
        brand: "Atelier Maison",
        price: 95,
        description: "Sleek cutaway D'Orsay silhouette that elongates the leg line. Rich espresso velvet suede with memory foam padded insoles for desk-to-dinner polish.",
        image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 65,
        stock: 15,
        availability: "In stock",
        sku: "SHO-FLT-030",
        tags: [
            "flats",
            "suede",
            "pointed-toe",
            "workwear",
            "chic"
        ],
        attributes: {
            Material: "Calfskin Suede",
            Silhouette: "D'Orsay Cutout"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-19"
    },
    {
        slug: "handcrafted-penny-leather-loafers",
        name: "Heritage Italian Leather Penny Loafers",
        category: "Shoes",
        subcategory: "Flats",
        brand: "Aura Footwear",
        price: 145,
        compareAt: 180,
        description: "Traditional moc-toe stitching with classic penny keeper strap. Polished box calf leather that patinas gorgeously over years of wear.",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 142,
        stock: 22,
        availability: "In stock",
        sku: "SHO-FLT-031",
        tags: [
            "loafers",
            "leather",
            "classic",
            "oxford",
            "tailored"
        ],
        attributes: {
            Construction: "Blake Stitched",
            Sole: "Stacked Leather & Rubber Heel"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-08"
    },
    {
        slug: "sculptural-block-heel-slingbacks",
        name: "Sculptural Block Heel Leather Slingbacks",
        category: "Shoes",
        subcategory: "Heels",
        brand: "Atelier Maison",
        price: 140,
        compareAt: 170,
        description: "Architectural 2.5-inch flared block heel providing stable, wobble-free elevation. Elasticized slingback strap and almond toe.",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 71,
        stock: 14,
        availability: "In stock",
        sku: "SHO-HEL-032",
        tags: [
            "heels",
            "slingbacks",
            "block-heel",
            "office",
            "wedding"
        ],
        attributes: {
            HeelHeight: "2.5 inches (65mm)",
            Closure: "Elastic Slingback"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-06"
    },
    {
        slug: "kitten-heel-pointed-mules",
        name: "Delicate Kitten Heel Pointed Satin Mules",
        category: "Shoes",
        subcategory: "Heels",
        brand: "Aura Studio",
        price: 125,
        description: "Easy slip-on evening mule with a sculptural 1.75-inch kitten heel, sharp pointed toe, and lustrous champagne duchess satin finish.",
        image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 53,
        stock: 17,
        availability: "In stock",
        sku: "SHO-HEL-033",
        tags: [
            "mules",
            "kitten-heel",
            "satin",
            "evening",
            "dainty"
        ],
        attributes: {
            HeelHeight: "1.75 inches",
            Upper: "Silk Duchess Satin"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-12"
    },
    {
        slug: "minimalist-two-strap-stiletto-heels",
        name: "Minimalist Two-Strap Ankle Stiletto Heels",
        category: "Shoes",
        subcategory: "Heels",
        brand: "Aura Studio",
        price: 150,
        compareAt: 185,
        description: "The quintessential barely-there evening stiletto. 3.25-inch heel, delicate buckle ankle strap, and non-slip rubber tipped heel caps.",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 88,
        stock: 10,
        availability: "Low stock",
        sku: "SHO-HEL-034",
        tags: [
            "stiletto",
            "heels",
            "minimalist",
            "strappy",
            "evening"
        ],
        attributes: {
            HeelHeight: "3.25 inches (85mm)",
            Insole: "Gel Padded"
        },
        isNew: true,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-09-21"
    },
    {
        slug: "soft-sole-suede-baby-moccasins",
        name: "Handmade Soft-Sole Suede Baby Moccasins",
        category: "Shoes",
        subcategory: "Baby & Kids Shoes",
        brand: "Little Aura",
        price: 36,
        description: "Non-slip split suede sole recommended by pediatricians for natural barefoot-like foot development and first steps. Elastic collar stays on feet.",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 92,
        stock: 32,
        availability: "In stock",
        sku: "SHO-KID-035",
        tags: [
            "baby-shoes",
            "moccasins",
            "soft-sole",
            "toddler",
            "gift"
        ],
        attributes: {
            Material: "100% Genuine Suede",
            Sizes: "0-6M, 6-12M, 12-18M"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-25"
    },
    {
        slug: "flexible-leather-first-walker-trainers",
        name: "Flexible Nappa Leather First-Walker Shoes",
        category: "Shoes",
        subcategory: "Baby & Kids Shoes",
        brand: "Little Aura",
        price: 44,
        description: "Featherlight first-walking shoes with breathable leather lining, padded ankle collars, and ultra-flexible rubber pod traction outsoles.",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 61,
        stock: 24,
        availability: "In stock",
        sku: "SHO-KID-036",
        tags: [
            "kids-shoes",
            "first-walker",
            "leather",
            "toddler"
        ],
        attributes: {
            Upper: "Soft Nappa Leather",
            Sole: "Flexible TPR Rubber"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-01"
    },
    {
        slug: "toddler-canvas-hook-and-loop-sneakers",
        name: "Toddler Washed Canvas Casual Low Sneakers",
        category: "Shoes",
        subcategory: "Baby & Kids Shoes",
        brand: "Little Aura",
        price: 38,
        compareAt: 48,
        description: "Easy-on dual hook-and-loop velcro straps that toddlers can put on independently. Durable rubber toe cap protects against playground scuffs.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 47,
        stock: 30,
        availability: "In stock",
        sku: "SHO-KID-037",
        tags: [
            "kids-sneakers",
            "canvas",
            "velcro",
            "play",
            "toddler"
        ],
        attributes: {
            Upper: "100% Breathable Cotton Canvas",
            Closure: "Double Hook & Loop"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-08-11"
    },
    // =========================================================================
    // 3. BAGS (Handbags, Shoulder Bags, Crossbody, Totes, Backpacks, Mini, Kids)
    // =========================================================================
    {
        slug: "florence-leather-structured-top-handle",
        name: "Florence Italian Leather Structured Top-Handle Bag",
        category: "Bags",
        subcategory: "Handbags",
        brand: "Florence Atelier",
        price: 245,
        compareAt: 295,
        description: "Architectural silhouette handcrafted in Tuscany from vegetable-tanned Italian calfskin. Features custom pale gold hardware and detachable shoulder strap.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 168,
        stock: 12,
        availability: "In stock",
        sku: "BAG-HND-038",
        tags: [
            "handbag",
            "top-handle",
            "leather",
            "luxury",
            "italian",
            "bestseller"
        ],
        attributes: {
            Leather: "Full-Grain Tuscan Calfskin",
            Dimensions: "10.5 x 8 x 4 inches"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-20"
    },
    {
        slug: "sculptural-crescent-leather-bag",
        name: "Sculptural Crescent Moon Leather Handbag",
        category: "Bags",
        subcategory: "Handbags",
        brand: "Atelier Maison",
        price: 185,
        description: "Curved crescent geometry with a smooth magnetic frame closure. Designed to tuck comfortably under the arm or be held by its sculptural top handle.",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 79,
        stock: 16,
        availability: "In stock",
        sku: "BAG-HND-039",
        tags: [
            "handbag",
            "crescent",
            "leather",
            "minimalist",
            "sculptural"
        ],
        attributes: {
            Material: "Smooth Semi-Gloss Cowhide",
            Interior: "Micro-Suede Lining"
        },
        isNew: true,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-09-15"
    },
    {
        slug: "woven-dumpling-pouch-handbag",
        name: "Woven Nappa Leather Dumpling Pouch Bag",
        category: "Bags",
        subcategory: "Handbags",
        brand: "Florence Atelier",
        price: 160,
        compareAt: 190,
        description: "Cloud-soft hand-woven buttery nappa lambskin with soft ruching and a concealed magnetic frame. Fits wallet, phone, keys, and cosmetics with ease.",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 64,
        stock: 14,
        availability: "In stock",
        sku: "BAG-HND-040",
        tags: [
            "dumpling-bag",
            "woven",
            "nappa",
            "pouch",
            "evening"
        ],
        attributes: {
            Material: "100% Woven Lambskin",
            Closure: "Concealed Magnetic Frame"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-08-05"
    },
    {
        slug: "classic-90s-baguette-shoulder-bag",
        name: "Classic 90s Baguette Leather Shoulder Bag",
        category: "Bags",
        subcategory: "Shoulder Bags",
        brand: "Aura Studio",
        price: 145,
        compareAt: 175,
        description: "Iconic slim horizontal shoulder profile with a comfortable flat strap that nests under the arm. Minimalist top zipper and interior card slot.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 145,
        stock: 22,
        availability: "In stock",
        sku: "BAG-SHD-041",
        tags: [
            "shoulder-bag",
            "baguette",
            "90s",
            "leather",
            "bestseller"
        ],
        attributes: {
            Leather: "Polished Spazzolato Calfskin",
            StrapDrop: "9.5 inches"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-06-28"
    },
    {
        slug: "ruched-leather-flap-shoulder-purse",
        name: "Soft Ruched Leather Flap Shoulder Purse",
        category: "Bags",
        subcategory: "Shoulder Bags",
        brand: "Atelier Maison",
        price: 170,
        description: "Plush gathered leather construction featuring an adjustable shoulder strap and signature brushed gold push-lock buckle clasp.",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 72,
        stock: 18,
        availability: "In stock",
        sku: "BAG-SHD-042",
        tags: [
            "shoulder-bag",
            "ruched",
            "leather",
            "gold-hardware"
        ],
        attributes: {
            Hardware: "Brushed 14K Gold Finish",
            Pocket: "Zippered Back Wall Pocket"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-18"
    },
    {
        slug: "pebbled-leather-curved-shoulder-bag",
        name: "Pebbled Leather Curved Everyday Shoulder Bag",
        category: "Bags",
        subcategory: "Shoulder Bags",
        brand: "Field House",
        price: 155,
        description: "Scratch-resistant pebbled Italian cowhide with relaxed rounded curves. Spacious enough for sunglasses, keys, cosmetic pouch, and water bottle.",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 58,
        stock: 25,
        availability: "In stock",
        sku: "BAG-SHD-043",
        tags: [
            "shoulder-bag",
            "pebbled-leather",
            "everyday",
            "durable"
        ],
        attributes: {
            Leather: "Pebbled Italian Cowhide",
            Zipper: "Smooth YKK Metal"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-16"
    },
    {
        slug: "smooth-saddle-leather-crossbody",
        name: "Smooth Vegetable-Tanned Saddle Crossbody Bag",
        category: "Bags",
        subcategory: "Crossbody Bags",
        brand: "Florence Atelier",
        price: 165,
        compareAt: 195,
        description: "Classic equestrian-inspired curved saddle flap with an adjustable crossbody strap and magnetic snap closure. Gains richer patina with age.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 130,
        stock: 17,
        availability: "In stock",
        sku: "BAG-CRB-044",
        tags: [
            "crossbody",
            "saddle-bag",
            "leather",
            "timeless",
            "travel"
        ],
        attributes: {
            Material: "Vegetable-Tanned Cowhide",
            StrapLength: "Adjustable 18-23 inch drop"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-20"
    },
    {
        slug: "compact-multi-compartment-phone-crossbody",
        name: "Compact Leather Multi-Pocket Phone Crossbody",
        category: "Bags",
        subcategory: "Crossbody Bags",
        brand: "Aura Essentials",
        price: 88,
        description: "Hands-free essential sized to fit all smartphone models, with 6 integrated RFID card slots, zip coin compartment, and slim leather strap.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 84,
        stock: 38,
        availability: "In stock",
        sku: "BAG-CRB-045",
        tags: [
            "phone-bag",
            "crossbody",
            "minimalist",
            "hands-free"
        ],
        attributes: {
            CardSlots: "6 Card Slots",
            Dimensions: "7.5 x 4.5 x 1.2 inches"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-12"
    },
    {
        slug: "minimalist-half-moon-crossbody",
        name: "Minimalist Half-Moon Italian Leather Crossbody",
        category: "Bags",
        subcategory: "Crossbody Bags",
        brand: "Atelier Maison",
        price: 140,
        description: "Sleek semi-circular geometry with a curved zip-around closure, flat wide shoulder strap, and internal slip pocket.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 51,
        stock: 20,
        availability: "In stock",
        sku: "BAG-CRB-046",
        tags: [
            "crossbody",
            "half-moon",
            "minimalist",
            "leather"
        ],
        attributes: {
            Leather: "Smooth Semi-Aniline Leather",
            Lining: "Cotton Twill"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-02"
    },
    {
        slug: "heavyweight-canvas-market-tote",
        name: "Everyday Heavyweight 16oz Canvas Market Tote",
        category: "Bags",
        subcategory: "Tote Bags",
        brand: "Field House",
        price: 48,
        description: "Indestructible 16oz cotton duck canvas with reinforced webbed handles, interior water bottle pocket, key clip, and brass snap closure.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 220,
        stock: 60,
        availability: "In stock",
        sku: "BAG-TOT-047",
        tags: [
            "tote",
            "canvas",
            "market-bag",
            "work-bag",
            "durable"
        ],
        attributes: {
            Fabric: "16oz 100% Organic Cotton Canvas",
            Pockets: "3 Interior Organizers"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-05-10"
    },
    {
        slug: "full-grain-leather-work-tote",
        name: "Supple Full-Grain Leather Laptop Work Tote",
        category: "Bags",
        subcategory: "Tote Bags",
        brand: "Florence Atelier",
        price: 210,
        compareAt: 260,
        description: "Designed for modern working professionals. Padded center sleeve fits laptops up to 15 inches, with reinforced shoulder drop straps and metal protective feet.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 156,
        stock: 14,
        availability: "In stock",
        sku: "BAG-TOT-048",
        tags: [
            "tote",
            "work-tote",
            "laptop-bag",
            "leather",
            "bestseller"
        ],
        attributes: {
            Fits: "Laptops up to 15.6 inch",
            Leather: "Full-Grain Italian Cowhide"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-08"
    },
    {
        slug: "french-straw-basket-beach-tote",
        name: "Handwoven French Straw Basket Summer Tote",
        category: "Bags",
        subcategory: "Tote Bags",
        brand: "Field House",
        price: 75,
        description: "Hand-braided natural Moroccan palm leaves with long double leather shoulder straps that sit comfortably on shoulders during beach days and farmer markets.",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 68,
        stock: 22,
        availability: "In stock",
        sku: "BAG-TOT-049",
        tags: [
            "straw-bag",
            "basket-bag",
            "tote",
            "summer",
            "market"
        ],
        attributes: {
            Material: "Natural Woven Palm Leaves",
            Handles: "Tan Cowhide"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-12"
    },
    {
        slug: "slim-waterproof-commuter-backpack",
        name: "Slim Water-Resistant Commuter City Backpack",
        category: "Bags",
        subcategory: "Backpacks",
        brand: "Aura Essentials",
        price: 125,
        compareAt: 155,
        description: "Matte waterproof PU coated fabric with taped seams. Features a padded 14-inch rear laptop compartment, hidden passport pocket, and luggage trolley sleeve.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 114,
        stock: 28,
        availability: "In stock",
        sku: "BAG-BPK-050",
        tags: [
            "backpack",
            "commuter",
            "waterproof",
            "laptop",
            "travel"
        ],
        attributes: {
            Volume: "14 Liters",
            WaterResistance: "IPX4 Weatherproof"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-07-25"
    },
    {
        slug: "vintage-washed-canvas-leather-rucksack",
        name: "Vintage Washed Canvas & Leather Trim Rucksack",
        category: "Bags",
        subcategory: "Backpacks",
        brand: "Field House",
        price: 110,
        description: "Stonewashed cotton canvas with genuine saddle leather trim, brass buckle quick-release snaps, and drawstring cinch closure.",
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 56,
        stock: 19,
        availability: "In stock",
        sku: "BAG-BPK-051",
        tags: [
            "backpack",
            "canvas",
            "vintage",
            "rucksack"
        ],
        attributes: {
            Capacity: "18L",
            Material: "Washed Cotton Canvas & Leather"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-04"
    },
    {
        slug: "convertible-mini-leather-backpack",
        name: "Convertible 2-in-1 Mini Leather Backpack Purse",
        category: "Bags",
        subcategory: "Backpacks",
        brand: "Atelier Maison",
        price: 135,
        description: "Clever interchangeable clip strap transforms this chic mini backpack into a crossbody shoulder purse in seconds. Pebbled Italian leather.",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 82,
        stock: 15,
        availability: "In stock",
        sku: "BAG-BPK-052",
        tags: [
            "backpack",
            "mini-backpack",
            "convertible",
            "leather"
        ],
        attributes: {
            Versatility: "Converts Backpack to Crossbody",
            Material: "Pebbled Calfskin"
        },
        isNew: true,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-09-11"
    },
    {
        slug: "micro-chain-strap-quilted-party-bag",
        name: "Micro Chain-Strap Quilted Evening Party Bag",
        category: "Bags",
        subcategory: "Mini Bags",
        brand: "Aura Studio",
        price: 95,
        compareAt: 120,
        description: "Chevron diamond quilt pattern on soft metallic-finished calfskin. High-polish gold curb chain strap and turn-lock clasp.",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 63,
        stock: 21,
        availability: "In stock",
        sku: "BAG-MIN-053",
        tags: [
            "mini-bag",
            "quilted",
            "chain-bag",
            "evening",
            "party"
        ],
        attributes: {
            ChainDrop: "21 inches",
            Dimensions: "6.5 x 4 x 2 inches"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-08-16"
    },
    {
        slug: "structured-geometric-vanity-case",
        name: "Structured Geometric Box Vanity Mini Bag",
        category: "Bags",
        subcategory: "Mini Bags",
        brand: "Atelier Maison",
        price: 120,
        description: "Rigid box trunk construction with top zip-around closure, mirror in top lid, and top handle. Statement accessory for day and night.",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 47,
        stock: 13,
        availability: "In stock",
        sku: "BAG-MIN-054",
        tags: [
            "mini-bag",
            "vanity-case",
            "box-bag",
            "statement"
        ],
        attributes: {
            Interior: "Built-In Compact Mirror",
            Frame: "Rigid Box"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-04"
    },
    {
        slug: "metallic-mini-drawstring-bucket-bag",
        name: "Metallic Foil Mini Drawstring Bucket Pouch",
        category: "Bags",
        subcategory: "Mini Bags",
        brand: "Aura Studio",
        price: 85,
        description: "Soft slouchy bucket pouch in iridescent champagne metallic leather with knotted drawstring cords and circular base.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 38,
        stock: 17,
        availability: "In stock",
        sku: "BAG-MIN-055",
        tags: [
            "bucket-bag",
            "drawstring",
            "metallic",
            "mini-bag"
        ],
        attributes: {
            Material: "Foil-Coated Lambskin",
            Closure: "Drawstring Cinch"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-30"
    },
    {
        slug: "multi-pocket-water-repellent-diaper-bag",
        name: "Multi-Pocket Water-Repellent Diaper Backpack",
        category: "Bags",
        subcategory: "Baby & Kids Bags",
        brand: "Little Aura",
        price: 92,
        compareAt: 115,
        description: "Thoughtfully designed for parents with 14 organized pockets, insulated bottle holders, wipe-clean changing mat, and stroller attachment clips.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 142,
        stock: 25,
        availability: "In stock",
        sku: "BAG-KID-056",
        tags: [
            "diaper-bag",
            "baby",
            "backpack",
            "insulated",
            "parenting"
        ],
        attributes: {
            Includes: "Cushioned Fold-Out Changing Mat",
            InsulatedPockets: "3 Bottle Holders"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-19"
    },
    {
        slug: "playful-animal-ear-toddler-backpack",
        name: "Playful Animal Ear Toddler Mini Daypack",
        category: "Bags",
        subcategory: "Baby & Kids Bags",
        brand: "Little Aura",
        price: 36,
        description: "Adorable soft sherpa fleece daypack with padded adjustable shoulder straps, chest safety clip, and easy-pull rubber zippers for little hands.",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 57,
        stock: 30,
        availability: "In stock",
        sku: "BAG-KID-057",
        tags: [
            "kids-backpack",
            "toddler",
            "animal-ears",
            "preschool"
        ],
        attributes: {
            Material: "Plush Teddy Sherpa",
            Safety: "Chest Buckle Clip"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-08-14"
    },
    {
        slug: "embroidered-cotton-kids-snack-bag",
        name: "Organic Embroidered Cotton Kids Carry Pouch",
        category: "Bags",
        subcategory: "Baby & Kids Bags",
        brand: "Little Aura",
        price: 28,
        description: "Insulated food-grade interior liner for snacks and fruit. Charming hand-embroidered wildflower motif on heavy natural organic cotton canvas.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 35,
        stock: 40,
        availability: "In stock",
        sku: "BAG-KID-058",
        tags: [
            "snack-bag",
            "kids",
            "insulated",
            "lunchbox"
        ],
        attributes: {
            Liner: "BPA-Free Thermal Insulated",
            Handle: "Cotton Webbing"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-09"
    },
    // =========================================================================
    // 4. ACCESSORIES (Jewelry, Watches, Sunglasses, Hair, Belts, Hats, Beauty, Kids)
    // =========================================================================
    {
        slug: "18k-gold-vermeil-herringbone-chain",
        name: "18K Gold Vermeil Herringbone Flat Chain",
        category: "Accessories",
        subcategory: "Jewelry",
        brand: "Aura Studio",
        price: 88,
        compareAt: 110,
        description: "Liquid-smooth silky herringbone flat weave plated with a thick 2.5 micron layer of 18K gold over solid 925 sterling silver. Tarnish-free and waterproof.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 235,
        stock: 45,
        availability: "In stock",
        sku: "ACC-JWL-059",
        tags: [
            "jewelry",
            "necklace",
            "gold-vermeil",
            "herringbone",
            "bestseller"
        ],
        attributes: {
            Core: "Solid 925 Sterling Silver",
            Plating: "18K Gold Vermeil 2.5um",
            Width: "3.5mm"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-06-14"
    },
    {
        slug: "freshwater-baroque-pearl-choker",
        name: "Dainty Freshwater Baroque Pearl Choker",
        category: "Accessories",
        subcategory: "Jewelry",
        brand: "Atelier Maison",
        price: 95,
        description: "Individually knotted hand-selected organic cultured freshwater baroque pearls, each displaying a luminous natural iridescence with 14K gold filled clasp.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 92,
        stock: 24,
        availability: "In stock",
        sku: "ACC-JWL-060",
        tags: [
            "pearls",
            "necklace",
            "choker",
            "baroque",
            "handmade"
        ],
        attributes: {
            Pearls: "Natural Cultured Baroque Pearls 5-6mm",
            Length: "15 inch + 2 inch extender"
        },
        isNew: true,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-09-03"
    },
    {
        slug: "chunky-twisted-gold-link-bracelet",
        name: "Chunky Twisted 18K Gold Link Chain Bracelet",
        category: "Accessories",
        subcategory: "Jewelry",
        brand: "Aura Studio",
        price: 78,
        compareAt: 98,
        description: "Bold statement chain link bracelet with twisted organic texture and a vintage oversized toggle closure. Waterproof and hypoallergenic.",
        image: "https://images.unsplash.com/photo-1611591475281-918bfbe2720e?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1611591475281-918bfbe2720e?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 84,
        stock: 30,
        availability: "In stock",
        sku: "ACC-JWL-061",
        tags: [
            "bracelet",
            "gold",
            "chain-link",
            "statement"
        ],
        attributes: {
            Material: "18K Gold Plated Stainless Steel",
            Closure: "Toggle Clasp"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-08-02"
    },
    {
        slug: "classic-petite-rose-gold-mesh-watch",
        name: "Classic Petite Rose Gold Milanese Mesh Watch",
        category: "Accessories",
        subcategory: "Watches",
        brand: "Aura Studio",
        price: 165,
        compareAt: 195,
        description: "Ultra-thin 28mm stainless steel casing with an eggshell white dial, Japanese quartz movement, scratch-resistant sapphire glass, and rose gold Milanese mesh strap.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 162,
        stock: 20,
        availability: "In stock",
        sku: "ACC-WTC-062",
        tags: [
            "watch",
            "rose-gold",
            "milanese",
            "minimalist",
            "timepiece"
        ],
        attributes: {
            CaseSize: "28mm",
            Glass: "Sapphire Crystal",
            Movement: "Miyota Japanese Quartz"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-15"
    },
    {
        slug: "vintage-roman-numeral-leather-watch",
        name: "Vintage Roman Numeral Croc-Embossed Watch",
        category: "Accessories",
        subcategory: "Watches",
        brand: "Atelier Maison",
        price: 145,
        description: "Retro rectangular tank case with blued-steel hands, ivory enamel dial with Roman numerals, and brown Italian croc-embossed calf leather strap.",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 96,
        stock: 16,
        availability: "In stock",
        sku: "ACC-WTC-063",
        tags: [
            "watch",
            "vintage",
            "tank-watch",
            "leather-strap",
            "classic"
        ],
        attributes: {
            Case: "Rectangular 24x31mm",
            Strap: "Genuine Croc-Embossed Calfskin"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-08"
    },
    {
        slug: "minimalist-sunray-dial-two-tone-watch",
        name: "Minimalist Sunray Dial Two-Tone Steel Watch",
        category: "Accessories",
        subcategory: "Watches",
        brand: "Aura Studio",
        price: 180,
        compareAt: 215,
        description: "Clean two-tone silver and gold link bracelet watch with shimmering sunray champagne dial, diamond-cut hour markers, and 50M water resistance.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 74,
        stock: 12,
        availability: "In stock",
        sku: "ACC-WTC-064",
        tags: [
            "watch",
            "two-tone",
            "steel-bracelet",
            "luxury"
        ],
        attributes: {
            CaseSize: "32mm",
            WaterResistance: "5 ATM (50 Meters)"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-08-18"
    },
    {
        slug: "retro-cat-eye-acetate-sunglasses",
        name: "Retro Cat-Eye UV400 Polished Acetate Sunglasses",
        category: "Accessories",
        subcategory: "Sunglasses",
        brand: "Aura Studio",
        price: 72,
        compareAt: 90,
        description: "Subtle vintage cat-eye curve crafted from hand-polished Italian bio-acetate with category 3 UV400 polarized black tinted lenses.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 154,
        stock: 35,
        availability: "In stock",
        sku: "ACC-SUN-065",
        tags: [
            "sunglasses",
            "cat-eye",
            "polarized",
            "acetate",
            "summer"
        ],
        attributes: {
            Protection: "100% UV400 / Category 3",
            Frame: "Bio-Acetate"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-06-22"
    },
    {
        slug: "oversized-tortoiseshell-shades",
        name: "Classic Oversized Tortoiseshell Square Sunglasses",
        category: "Accessories",
        subcategory: "Sunglasses",
        brand: "Field House",
        price: 68,
        description: "Timeless 70s oversized square frames with rich amber tortoiseshell marbling, reinforced 5-barrel hinges, and warm sepia gradient lenses.",
        image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 88,
        stock: 27,
        availability: "In stock",
        sku: "ACC-SUN-066",
        tags: [
            "sunglasses",
            "tortoiseshell",
            "oversized",
            "retro"
        ],
        attributes: {
            Lens: "Scratch-Resistant CR-39",
            Hinges: "5-Barrel German Metal"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-08"
    },
    {
        slug: "slim-wire-rim-hexagonal-sunglasses",
        name: "Slim Wire-Rim Hexagonal Gold Metal Sunglasses",
        category: "Accessories",
        subcategory: "Sunglasses",
        brand: "Atelier Maison",
        price: 65,
        description: "Featherlight gold stainless steel hexagonal frame with silicone nose pads and olive green crystal glass lenses.",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 49,
        stock: 22,
        availability: "In stock",
        sku: "ACC-SUN-067",
        tags: [
            "sunglasses",
            "wire-frame",
            "hexagonal",
            "gold"
        ],
        attributes: {
            Frame: "Gold Plated Stainless Steel",
            Weight: "Ultra-light 19g"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-15"
    },
    {
        slug: "french-tortoise-cellulose-hair-claw",
        name: "French Tortoise Cellulose Acetate Hair Claw Clip",
        category: "Accessories",
        subcategory: "Hair Accessories",
        brand: "Aura Essentials",
        price: 22,
        description: "Eco-friendly natural cellulose acetate hair claw with durable steel spring. Holds thick and fine hair securely without pulling or creasing.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 180,
        stock: 55,
        availability: "In stock",
        sku: "ACC-HAR-068",
        tags: [
            "hair-clip",
            "claw-clip",
            "tortoise",
            "hair-accessories",
            "bestseller"
        ],
        attributes: {
            Material: "Biodegradable Cellulose Acetate",
            Size: "4.2 inches Large"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-05-18"
    },
    {
        slug: "mulberry-silk-ribbon-scrunchie-set",
        name: "100% Mulberry Silk Ribbon Bow Scrunchie 3-Pack",
        category: "Accessories",
        subcategory: "Hair Accessories",
        brand: "Aura Studio",
        price: 34,
        compareAt: 42,
        description: "Three pure 22 Momme silk scrunchies with detachable ribbon bow tails. Protects hair from friction, split ends, and dents.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 110,
        stock: 40,
        availability: "In stock",
        sku: "ACC-HAR-069",
        tags: [
            "scrunchies",
            "silk",
            "hair-care",
            "bows",
            "gift"
        ],
        attributes: {
            Silk: "100% 22 Momme Grade 6A Silk",
            Quantity: "Pack of 3 (Champagne, Black, Rose)"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-02"
    },
    {
        slug: "padded-velvet-pearl-headband",
        name: "Padded Velvet Headband with Embellished Pearls",
        category: "Accessories",
        subcategory: "Hair Accessories",
        brand: "Atelier Maison",
        price: 38,
        description: "Sculpted padded headband upholstered in plush black cotton velvet and hand-sewn with luminous imitation pearl clusters. Comfortable, pinch-free fit.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 52,
        stock: 22,
        availability: "In stock",
        sku: "ACC-HAR-070",
        tags: [
            "headband",
            "velvet",
            "pearls",
            "hair-accessories",
            "statement"
        ],
        attributes: {
            Fabric: "Cotton Velvet",
            Base: "Flexible Comfort Band"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-28"
    },
    {
        slug: "italian-leather-reversible-waist-belt",
        name: "Full-Grain Italian Leather Reversible Waist Belt",
        category: "Accessories",
        subcategory: "Belts & Wallets",
        brand: "Florence Atelier",
        price: 58,
        compareAt: 70,
        description: "Twist-buckle mechanism allows easy switching between sleek black and cognac brown leather. Features beveled painted edges and brushed gold buckle.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 135,
        stock: 30,
        availability: "In stock",
        sku: "ACC-BLT-071",
        tags: [
            "belt",
            "leather",
            "reversible",
            "wardrobe-staple"
        ],
        attributes: {
            Width: "28mm (1.1 inch)",
            Leather: "100% Italian Cowhide"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-04"
    },
    {
        slug: "slim-rfid-pebbled-leather-card-case",
        name: "Slim RFID-Blocking Pebbled Leather Card Case",
        category: "Accessories",
        subcategory: "Belts & Wallets",
        brand: "Florence Atelier",
        price: 45,
        description: "Compact pocket wallet with 4 exterior card slots, center cash pocket, and built-in RFID blocking shield. Soft pebbled Italian leather.",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 96,
        stock: 42,
        availability: "In stock",
        sku: "ACC-BLT-072",
        tags: [
            "wallet",
            "card-case",
            "rfid",
            "leather"
        ],
        attributes: {
            Slots: "4 Card Slots + 1 Center Cash Pocket",
            Security: "RFID Protected"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-12"
    },
    {
        slug: "polished-gold-buckle-skinny-belt",
        name: "Polished Gold Buckle Skinny Waist Dress Belt",
        category: "Accessories",
        subcategory: "Belts & Wallets",
        brand: "Atelier Maison",
        price: 42,
        description: "18mm slim dress belt designed to cinch blazers, cardigans, and high-waist trousers. Polished round brass horseshoe buckle.",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 54,
        stock: 25,
        availability: "In stock",
        sku: "ACC-BLT-073",
        tags: [
            "belt",
            "skinny-belt",
            "waist-belt",
            "dress-belt"
        ],
        attributes: {
            Width: "18mm (0.7 inch)",
            Buckle: "Solid Polished Brass"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-30"
    },
    {
        slug: "panama-straw-sun-hat-black-ribbon",
        name: "Handwoven Panama Straw Sun Hat with Black Ribbon",
        category: "Accessories",
        subcategory: "Hats & Scarves",
        brand: "Field House",
        price: 68,
        compareAt: 85,
        description: "Woven by hand from Ecuadorian toquilla straw fibers. Wide 3.5-inch brim shields eyes and face from UV rays, accented with a grosgrain ribbon bow.",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 88,
        stock: 20,
        availability: "In stock",
        sku: "ACC-HAT-074",
        tags: [
            "hat",
            "panama-hat",
            "sun-hat",
            "straw",
            "summer"
        ],
        attributes: {
            Material: "100% Genuine Toquilla Straw",
            BrimWidth: "3.5 inches"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-06-18"
    },
    {
        slug: "pure-silk-printed-square-scarf",
        name: "Pure Silk Illustrated Floral Square Neck Scarf",
        category: "Accessories",
        subcategory: "Hats & Scarves",
        brand: "Atelier Maison",
        price: 52,
        description: "Hand-rolled hems on rich 16mm Mulberry silk twill. Wear tied around the neck, as a hair ribbon, or knotted to a handbag handle.",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 67,
        stock: 35,
        availability: "In stock",
        sku: "ACC-HAT-075",
        tags: [
            "scarf",
            "silk",
            "hand-rolled",
            "french-style",
            "versatile"
        ],
        attributes: {
            Dimensions: "26 x 26 inches (65x65cm)",
            Fabric: "100% Silk Twill"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-10"
    },
    {
        slug: "ribbed-cashmere-blend-winter-beanie",
        name: "Ultra-Soft Ribbed Cashmere Blend Winter Beanie",
        category: "Accessories",
        subcategory: "Hats & Scarves",
        brand: "Atelier Maison",
        price: 48,
        description: "Plush ribbed knit in a warm Mongolian cashmere and extra-fine merino wool blend. Features a foldover cuff for an adjustable slouchy fit.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 102,
        stock: 28,
        availability: "In stock",
        sku: "ACC-HAT-076",
        tags: [
            "beanie",
            "cashmere",
            "winter",
            "cozy",
            "warm"
        ],
        attributes: {
            Yarn: "70% Extra-fine Merino, 30% Cashmere",
            Fit: "Unisex Stretch"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-24"
    },
    {
        slug: "chunky-18k-gold-waterdrop-earrings",
        name: "Chunky 18K Gold Hollow Waterdrop Huggie Earrings",
        category: "Accessories",
        subcategory: "Earrings & Necklaces",
        brand: "Aura Studio",
        price: 64,
        compareAt: 80,
        description: "The viral hollow teardrop hoop. Ultra-lightweight so they never pull on earlobes. Plated with 18K gold over waterproof stainless steel with surgical steel posts.",
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 290,
        stock: 50,
        availability: "In stock",
        sku: "ACC-ERN-077",
        tags: [
            "earrings",
            "waterdrop",
            "gold-hoops",
            "chunky",
            "bestseller"
        ],
        attributes: {
            Weight: "Lightweight 4g per ear",
            Material: "18K Gold PVD Stainless Steel"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-06-19"
    },
    {
        slug: "pave-diamond-moissanite-studs",
        name: "Solitaire Moissanite Pavé Stud Earrings",
        category: "Accessories",
        subcategory: "Earrings & Necklaces",
        brand: "Aura Studio",
        price: 120,
        compareAt: 150,
        description: "Brilliant D-color VVS1 round cut moissanite stones set in four prongs with a halo of pavé stones. Sparkling with more fire and brilliance than mined diamonds.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 145,
        stock: 18,
        availability: "In stock",
        sku: "ACC-ERN-078",
        tags: [
            "earrings",
            "moissanite",
            "studs",
            "fine-jewelry",
            "gift"
        ],
        attributes: {
            Stone: "1.0ct DEW Each Moissanite",
            Metal: "14K White Gold Vermeil over 925 Silver"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-29"
    },
    {
        slug: "layered-celestial-coin-pendant-necklace",
        name: "Layered Celestial Coin & Star Pendant Necklace",
        category: "Accessories",
        subcategory: "Earrings & Necklaces",
        brand: "Atelier Maison",
        price: 85,
        description: "Two-in-one pre-layered necklace featuring a paperclip chain and an embossed Roman coin medallion set with a tiny sparkling cubic zirconia star.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 98,
        stock: 24,
        availability: "In stock",
        sku: "ACC-ERN-079",
        tags: [
            "necklace",
            "layered",
            "coin-necklace",
            "celestial",
            "gold"
        ],
        attributes: {
            Chains: "16 inch Paperclip + 18 inch Medallion Chain",
            Plating: "18K Gold Plated"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-17"
    },
    {
        slug: "artisan-eau-de-parfum-santal",
        name: "Atelier No. 04 Santal & Black Pepper Perfume",
        category: "Accessories",
        subcategory: "Perfumes & Beauty",
        brand: "Atelier Maison",
        price: 95,
        compareAt: 120,
        description: "Warm, intoxicating blend of Australian sandalwood, cracked black peppercorn, powdery iris, and smoky cedarwood. Long-lasting niche fragrance.",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 168,
        stock: 14,
        availability: "In stock",
        sku: "ACC-BTY-080",
        tags: [
            "perfume",
            "fragrance",
            "sandalwood",
            "luxury",
            "beauty"
        ],
        attributes: {
            Concentration: "Eau de Parfum 20%",
            Volume: "50ml / 1.7 fl oz"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-04"
    },
    {
        slug: "botanica-hydra-plump-multi-hyaluronic-serum",
        name: "Botanica Hydra-Plump Multi-Hyaluronic Serum",
        category: "Accessories",
        subcategory: "Perfumes & Beauty",
        brand: "Botanica Labs",
        price: 52,
        compareAt: 68,
        description: "Five molecular weights of hyaluronic acid combined with snow mushroom and niacinamide to flood skin with deep moisture, bounce, and all-day dewy radiance.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 204,
        stock: 35,
        availability: "In stock",
        sku: "ACC-BTY-081",
        tags: [
            "skincare",
            "serum",
            "hyaluronic",
            "clean-beauty",
            "glow"
        ],
        attributes: {
            Volume: "30ml / 1.0 fl oz",
            Type: "Vegan, Cruelty-Free, Fragrance-Free"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-20"
    },
    {
        slug: "cedar-fig-soy-wax-candle-set",
        name: "Wild Fig & Hinoki Wood Clean Soy Candle",
        category: "Accessories",
        subcategory: "Perfumes & Beauty",
        brand: "Hearth & Form",
        price: 46,
        description: "Poured by hand in reusable amber glass tumblers. Clean-burning 100% natural soy wax scented with wild fig, earthy Hinoki wood, and black amber.",
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 94,
        stock: 30,
        availability: "In stock",
        sku: "ACC-BTY-082",
        tags: [
            "candle",
            "soy-wax",
            "aromatherapy",
            "home",
            "gift"
        ],
        attributes: {
            BurnTime: "55 Hours",
            Wax: "100% USA Soy Wax",
            Wick: "Lead-Free Cotton"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-15"
    },
    {
        slug: "luminous-botanical-glow-oil",
        name: "Luminous Botanical Face & Body Glow Oil",
        category: "Accessories",
        subcategory: "Perfumes & Beauty",
        brand: "Botanica Labs",
        price: 64,
        description: "Fast-absorbing dry body oil packed with cold-pressed rosehip, squalane, and golden jojoba. Leaves skin glistening and scented with sweet neroli blossom.",
        image: "https://images.unsplash.com/photo-1608248597359-0744655b3310?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1608248597359-0744655b3310?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 78,
        stock: 22,
        availability: "In stock",
        sku: "ACC-BTY-083",
        tags: [
            "body-oil",
            "glow",
            "skincare",
            "botanical",
            "clean-beauty"
        ],
        attributes: {
            Volume: "100ml / 3.4 fl oz",
            KeyIngredients: "Cold-Pressed Rosehip, Squalane"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-08"
    },
    {
        slug: "ribbed-cotton-baby-headband-set",
        name: "Soft Ribbed Cotton Baby Top-Knot Headband 3-Pack",
        category: "Accessories",
        subcategory: "Baby & Kids Accessories",
        brand: "Little Aura",
        price: 24,
        description: "Stretchy organic cotton ribbed knit with hand-tied top knot bows. Super gentle on newborns and toddlers, leaves no red marks on delicate heads.",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 88,
        stock: 45,
        availability: "In stock",
        sku: "ACC-KID-084",
        tags: [
            "baby-headband",
            "bows",
            "baby-accessories",
            "organic",
            "gift"
        ],
        attributes: {
            Material: "95% Organic Cotton, 5% Spandex",
            Count: "Pack of 3 Neutral Earthy Tones"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-08-22"
    },
    {
        slug: "kids-polarized-flexible-sunglasses",
        name: "Kids Polarized Flexible Frame UV400 Sunglasses",
        category: "Accessories",
        subcategory: "Baby & Kids Accessories",
        brand: "Little Aura",
        price: 28,
        description: "Virtually unbreakable flexible silicone rubber frames that bend without snapping. Certified UV400 TAC polarized glare-blocking lenses with safety strap.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 65,
        stock: 35,
        availability: "In stock",
        sku: "ACC-KID-085",
        tags: [
            "kids-sunglasses",
            "polarized",
            "flexible",
            "summer",
            "beach"
        ],
        attributes: {
            Material: "Food-Grade Flexible TPE Silicone",
            AgeRange: "Ages 2 to 8"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-16"
    },
    {
        slug: "toddler-organic-cotton-bucket-hat",
        name: "Toddler Organic Cotton Sun Protection Bucket Hat",
        category: "Accessories",
        subcategory: "Baby & Kids Accessories",
        brand: "Little Aura",
        price: 30,
        compareAt: 38,
        description: "UPF 50+ sun defense with a wide protective brim, breathable cotton lining, and break-away safety chin strap for windy days outdoors.",
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 52,
        stock: 28,
        availability: "In stock",
        sku: "ACC-KID-086",
        tags: [
            "bucket-hat",
            "sun-hat",
            "kids",
            "upf50",
            "summer"
        ],
        attributes: {
            Protection: "UPF 50+ Certified",
            Material: "100% GOTS Organic Cotton"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-18"
    }
];
const products = rawProducts.map((p, index)=>({
        ...p,
        id: `prod-${String(index + 1).padStart(4, "0")}`
    }));
const categories = [
    ...Object.keys(categoryDefinitions)
];
const subcategoriesByCategory = categoryDefinitions;
function getProduct(slug) {
    return products.find((product)=>product.slug === slug);
}
function getRelatedProducts(product, limit = 4) {
    const sameCategory = products.filter((item)=>item.category === product.category && item.id !== product.id);
    if (sameCategory.length >= limit) {
        return sameCategory.slice(0, limit);
    }
    const remaining = products.filter((item)=>item.id !== product.id && !sameCategory.includes(item));
    return [
        ...sameCategory,
        ...remaining
    ].slice(0, limit);
}
function getSubcategories(category) {
    return subcategoriesByCategory[category] ?? [];
}
function formatPrice(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(amount);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0mswhue._.js.map