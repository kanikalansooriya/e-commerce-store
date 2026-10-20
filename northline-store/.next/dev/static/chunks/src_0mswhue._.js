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
    "Dresses": [
        "Casual Dresses",
        "Midi Dresses",
        "Maxi Dresses",
        "Evening Dresses",
        "Summer Dresses"
    ],
    "Tops & Blouses": [
        "Blouses",
        "Shirts",
        "T-Shirts",
        "Knit Tops",
        "Camisoles"
    ],
    "Knitwear": [
        "Cardigans",
        "Sweaters",
        "Cashmere Knits",
        "Vests"
    ],
    "Jackets & Coats": [
        "Blazers",
        "Trench Coats",
        "Wool Coats",
        "Jackets"
    ],
    "Pants & Skirts": [
        "Trousers",
        "Skirts",
        "Linen Pants",
        "Wide-Leg Pants"
    ],
    "Shoes & Heels": [
        "Heels",
        "Flats",
        "Sandals",
        "Boots",
        "Sneakers"
    ],
    "Bags & Totes": [
        "Handbags",
        "Shoulder Bags",
        "Tote Bags",
        "Crossbody"
    ],
    "Jewelry & Accessories": [
        "Earrings",
        "Necklaces",
        "Rings",
        "Bracelets",
        "Sunglasses"
    ],
    "Beauty & Fragrance": [
        "Perfume",
        "Skincare",
        "Bath & Body",
        "Candles"
    ],
    "Sale": [
        "Flash Deals",
        "Best Value",
        "Under $75"
    ]
};
const rawProducts = [
    // --- ELECTRONICS & AUDIO ---
    {
        slug: "sony-wh1000xm5-wireless-headphones",
        name: "Sony WH-1000XM5 Noise-Canceling Headphones",
        category: "Electronics & Tech",
        subcategory: "Headphones",
        brand: "Sony Audio",
        price: 349,
        compareAt: 399,
        description: "Industry-leading active noise canceling with two processors and eight microphones. Exceptional hi-res sound quality with 30-hour battery life and ultra-comfortable lightweight design.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 342,
        stock: 24,
        availability: "In stock",
        sku: "SONY-WH-001",
        tags: [
            "wireless",
            "noise-canceling",
            "audiophile",
            "travel",
            "bestseller"
        ],
        attributes: {
            Connectivity: "Bluetooth 5.3",
            Battery: "30 Hours",
            Weight: "250g",
            Color: "Silver / Black"
        },
        variants: [
            {
                color: "Matte Black",
                sku: "SONY-WH-001-BLK",
                stock: 14
            },
            {
                color: "Platinum Silver",
                sku: "SONY-WH-001-SLV",
                stock: 10
            }
        ],
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-15"
    },
    {
        slug: "bose-soundlink-revolve-speaker",
        name: "Bose SoundLink 360° Bluetooth Speaker",
        category: "Electronics & Tech",
        subcategory: "Speakers",
        brand: "Bose",
        price: 199,
        compareAt: 249,
        description: "True 360-degree deep, jaw-dropping sound with uniform coverage. Water and dust-resistant seamless aluminum body with 17-hour battery life.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 189,
        stock: 19,
        availability: "In stock",
        sku: "BOSE-SPK-002",
        tags: [
            "audio",
            "bluetooth",
            "portable",
            "waterproof"
        ],
        attributes: {
            Battery: "17h",
            Rating: "IP55 Water Resistant",
            Finish: "Triple Black"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-20"
    },
    {
        slug: "custom-mechanical-wireless-keyboard",
        name: "Keychron Pro Wireless Mechanical Keyboard",
        category: "Electronics & Tech",
        subcategory: "Keyboards",
        brand: "Keychron",
        price: 145,
        compareAt: 175,
        description: "Hot-swappable mechanical switches, CNC machined aluminum frame, PBT double-shot keycaps, and customizable RGB backlighting for Mac and Windows.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 156,
        stock: 8,
        availability: "Low stock",
        sku: "KEY-PRO-003",
        tags: [
            "desk-setup",
            "mechanical",
            "wireless",
            "gaming",
            "minimal"
        ],
        attributes: {
            Switches: "Gateron Brown",
            Layout: "75% Compact",
            Connectivity: "BT 5.1 & Type-C"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-28"
    },
    {
        slug: "airpods-pro-spatial-audio-earbuds",
        name: "Aura Pro Wireless ANC Earbuds",
        category: "Electronics & Tech",
        subcategory: "Earbuds",
        brand: "Aura Sound",
        price: 179,
        compareAt: 219,
        description: "Adaptive Audio seamlessly blends active noise cancellation with transparency mode. Personalized spatial audio places sound all around you with dynamic head tracking.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 220,
        stock: 35,
        availability: "In stock",
        sku: "AURA-EAR-004",
        tags: [
            "earbuds",
            "anc",
            "spatial-audio",
            "commute",
            "fitness"
        ],
        attributes: {
            Charging: "MagSafe & USB-C",
            Battery: "30h Total",
            WaterResistance: "IPX4"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-10"
    },
    {
        slug: "magfast-3in1-wireless-charging-station",
        name: "MagFast 3-in-1 Foldable Charging Stand",
        category: "Electronics & Tech",
        subcategory: "Chargers",
        brand: "Lumina Tech",
        price: 79,
        compareAt: 99,
        description: "Charge your smartphone, smartwatch, and wireless earbuds simultaneously with fast 15W MagSafe magnetic alignment in an ultra-sleek anodized aluminum frame.",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1622445262464-84b14e3295b6?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 94,
        stock: 45,
        availability: "In stock",
        sku: "MAG-CHG-005",
        tags: [
            "chargers",
            "desk-setup",
            "magsafe",
            "giftable"
        ],
        attributes: {
            Power: "15W Fast Charge",
            Material: "Aluminum & Silicone",
            Color: "Space Gray"
        },
        isNew: true,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-09-18"
    },
    // --- FOOTWEAR & SNEAKERS ---
    {
        slug: "nike-air-retro-racing-sneakers",
        name: "Nike Air Zoom Heritage Running Sneakers",
        category: "Shoes",
        subcategory: "Sneakers",
        brand: "Nike",
        price: 155,
        compareAt: 185,
        description: "Responsive Zoom Air cushioning paired with lightweight engineered mesh upper for peak comfort on street or track. Bold signature silhouette.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 412,
        stock: 18,
        availability: "In stock",
        sku: "NIKE-ZOOM-006",
        tags: [
            "sneakers",
            "running",
            "streetwear",
            "bestseller",
            "iconic"
        ],
        attributes: {
            Material: "Engineered Mesh & Rubber",
            Cushioning: "Air Zoom",
            Sole: "High-traction Waffle"
        },
        variants: [
            {
                size: "US 8",
                sku: "NIKE-006-8",
                stock: 5
            },
            {
                size: "US 9",
                sku: "NIKE-006-9",
                stock: 6
            },
            {
                size: "US 10",
                sku: "NIKE-006-10",
                stock: 7
            }
        ],
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-22"
    },
    {
        slug: "court-minimalist-leather-sneakers",
        name: "Common Projects Style Clean Leather Court Shoes",
        category: "Shoes",
        subcategory: "Sneakers",
        brand: "Atelier Footwear",
        price: 168,
        compareAt: 210,
        description: "Handcrafted in Italy using supple nappa calf leather. Clean, unbranded aesthetic that elevates tailored trousers, denim, and weekend wear.",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 135,
        stock: 12,
        availability: "In stock",
        sku: "CRT-SNEAK-007",
        tags: [
            "shoes",
            "minimal",
            "luxury",
            "italian-leather",
            "clean"
        ],
        attributes: {
            Leather: "Full-Grain Italian Calf",
            Lining: "Soft Calfskin",
            Outsole: "Margom Rubber"
        },
        isNew: true,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-09-02"
    },
    {
        slug: "artisan-suede-chelsea-boots",
        name: "Artisan Waxed Suede Chelsea Boots",
        category: "Shoes",
        subcategory: "Boots",
        brand: "Field & Ridge",
        price: 220,
        compareAt: 275,
        description: "Constructed with water-resistant waxed snuff suede, elastic side gussets, Goodyear welt, and durable studded rubber soles made to withstand the seasons.",
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 88,
        stock: 7,
        availability: "Low stock",
        sku: "CHE-BOOT-008",
        tags: [
            "boots",
            "chelsea",
            "suede",
            "winter",
            "durable"
        ],
        attributes: {
            Welt: "Goodyear Welted",
            Leather: "Waxed Suede",
            Sole: "Dainite Rubber"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-14"
    },
    {
        slug: "classic-penny-loafers-cordovan",
        name: "Heritage Italian Leather Penny Loafers",
        category: "Shoes",
        subcategory: "Loafers",
        brand: "Mason & Co.",
        price: 185,
        description: "Timeless slip-on dress shoes crafted in polished burgundy box calfskin. Hand-stitched apron toe and stacked leather heel with rubber tap.",
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 62,
        stock: 14,
        availability: "In stock",
        sku: "PNY-LOAF-009",
        tags: [
            "loafers",
            "formal",
            "classic",
            "leather"
        ],
        attributes: {
            Upper: "Box Calf Leather",
            Lining: "Breathable Leather",
            Fit: "True to size"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-11"
    },
    // --- LUXURY WATCHES & JEWELRY ---
    {
        slug: "chronos-minimalist-sapphire-watch",
        name: "Chronos Bauhaus Minimalist Sapphire Watch",
        category: "Jewelry & Watches",
        subcategory: "Chronograph",
        brand: "Chronos Horology",
        price: 265,
        compareAt: 320,
        description: "Surgical grade 316L stainless steel case, scratch-resistant sapphire crystal glass, Japanese precision quartz movement, and vegetable-tanned Italian leather band.",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 178,
        stock: 9,
        availability: "Low stock",
        sku: "CHR-WATCH-010",
        tags: [
            "watch",
            "minimalist",
            "sapphire",
            "luxury",
            "gift"
        ],
        attributes: {
            Movement: "Japanese Miyota Quartz",
            Case: "39mm 316L Steel",
            WaterResistance: "5 ATM"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-29"
    },
    {
        slug: "automatic-diver-steel-watch",
        name: "Seafarer 200M Automatic Diver Watch",
        category: "Jewelry & Watches",
        subcategory: "Watches",
        brand: "Northline Marine",
        price: 390,
        compareAt: 480,
        description: "High-beat automatic self-winding movement with 41-hour power reserve. Ceramic unidirectional rotating bezel, Super-LumiNova indices, and 200m water resistance.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 5.0,
        reviewCount: 97,
        stock: 5,
        availability: "Low stock",
        sku: "DIV-WATCH-011",
        tags: [
            "watch",
            "diver",
            "automatic",
            "luxury",
            "steel"
        ],
        attributes: {
            Movement: "NH35A Automatic",
            Glass: "Double-domed Sapphire",
            Depth: "200m / 20 ATM"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-12"
    },
    {
        slug: "18k-gold-herringbone-chain-necklace",
        name: "18K Gold Vermeil Herringbone Snake Chain",
        category: "Jewelry & Watches",
        subcategory: "Necklaces",
        brand: "Aura Fine Jewelry",
        price: 110,
        compareAt: 140,
        description: "Liquid gold shine with flat interlocking links that sit flush against the collarbone. Heavy 18k gold layered over 925 solid sterling silver for durable shine.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 142,
        stock: 22,
        availability: "In stock",
        sku: "JWL-GOLD-012",
        tags: [
            "jewelry",
            "necklace",
            "gold",
            "layering",
            "gift"
        ],
        attributes: {
            Length: "16-18 inch adjustable",
            Thickness: "3mm",
            BaseMetal: "925 Sterling Silver"
        },
        isNew: true,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-08-30"
    },
    {
        slug: "solitaire-diamond-band-ring",
        name: "Pavé Band Solitaire Moissanite Ring",
        category: "Jewelry & Watches",
        subcategory: "Rings",
        brand: "Aura Fine Jewelry",
        price: 215,
        description: "Brilliant 1.5-carat round cut ethical moissanite center stone flanked by delicate micro-pavé accents on a comfort-fit 14k white gold plated band.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 81,
        stock: 11,
        availability: "In stock",
        sku: "JWL-RING-013",
        tags: [
            "ring",
            "solitaire",
            "luxury",
            "gift"
        ],
        attributes: {
            Stone: "VVS1 D-Color Moissanite",
            Band: "14K White Gold Plated Silver",
            Sizes: "5, 6, 7, 8"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-05-19"
    },
    // --- BAGS & CARRY ---
    {
        slug: "heritage-full-grain-leather-duffel",
        name: "Heritage Full-Grain Leather Weekender Duffel",
        category: "Bags & Accessories",
        subcategory: "Duffels",
        brand: "Field House Goods",
        price: 245,
        compareAt: 295,
        description: "Built from rich pull-up oiled cowhide leather that develops a magnificent patina over time. Includes separate ventilated shoe compartment and padded shoulder strap.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 164,
        stock: 14,
        availability: "In stock",
        sku: "BAG-DUF-014",
        tags: [
            "bags",
            "travel",
            "leather",
            "duffel",
            "weekend"
        ],
        attributes: {
            Capacity: "45 Liters",
            Hardware: "Solid Antique Brass",
            Lining: "Waterproof Cotton Twill"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-04"
    },
    {
        slug: "commuter-urban-tech-backpack",
        name: "Aura Transit Waterproof Commuter Backpack",
        category: "Bags & Accessories",
        subcategory: "Backpacks",
        brand: "Aura Studio",
        price: 135,
        compareAt: 165,
        description: "Weatherproof matte polyurethane-coated shell with dedicated 16-inch fleece-lined laptop sleeve, quick-access passport pocket, and ergonomic airflow back panel.",
        image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 210,
        stock: 28,
        availability: "In stock",
        sku: "BAG-BPK-015",
        tags: [
            "backpack",
            "commute",
            "tech",
            "laptop",
            "waterproof"
        ],
        attributes: {
            Volume: "22L",
            LaptopFit: "Up to 16-inch MacBook Pro",
            Zippers: "YKK Aquaguard"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-14"
    },
    {
        slug: "heavyweight-canvas-utility-tote",
        name: "Everyday Heavyweight 16oz Canvas Tote",
        category: "Bags & Accessories",
        subcategory: "Tote Bags",
        brand: "Harbor & Coast",
        price: 48,
        compareAt: 60,
        description: "Sturdy unbleached 16oz cotton canvas with reinforced top handles, internal zip security pouch, and brass key clip. Perfect for market runs or daily carry.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 95,
        stock: 50,
        availability: "In stock",
        sku: "BAG-TOT-016",
        tags: [
            "tote",
            "canvas",
            "everyday",
            "market",
            "organic"
        ],
        attributes: {
            Material: "100% Organic Cotton Canvas",
            Dimensions: "15 x 16 x 5 inches"
        },
        isNew: false,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-08-01"
    },
    {
        slug: "italian-leather-saddle-crossbody-bag",
        name: "Florence Italian Leather Crossbody Saddle Bag",
        category: "Bags & Accessories",
        subcategory: "Crossbody",
        brand: "Atelier Maison",
        price: 185,
        compareAt: 225,
        description: "Curved saddle silhouette with magnetic flap closure, interior card slots, and an adjustable wide leather shoulder strap. Lined in luxe micro-suede.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 112,
        stock: 12,
        availability: "In stock",
        sku: "BAG-CRB-017",
        tags: [
            "crossbody",
            "saddle-bag",
            "leather",
            "luxury",
            "women"
        ],
        attributes: {
            Leather: "Smooth Vegetable-Tanned Cowhide",
            StrapDrop: "18-22 inches"
        },
        isNew: true,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-09-22"
    },
    // --- WOMEN'S FASHION ---
    {
        slug: "pure-cashmere-ribbed-cardigan",
        name: "Pure Mongolian Cashmere Relaxed Cardigan",
        category: "Knitwear",
        subcategory: "Cardigans",
        brand: "Atelier Maison",
        price: 180,
        compareAt: 220,
        description: "Spun from ultra-soft 100% Grade-A Mongolian cashmere. Dropped shoulders, ribbed cuffs, and horn buttons create an effortlessly chic, cozy drape.",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 88,
        stock: 15,
        availability: "In stock",
        sku: "WMN-CSH-018",
        tags: [
            "cashmere",
            "cardigan",
            "knitwear",
            "luxury",
            "bestseller"
        ],
        attributes: {
            Yarn: "100% Cashmere 2-ply",
            Fit: "Relaxed / Oversized",
            Care: "Hand wash or dry clean"
        },
        variants: [
            {
                size: "S",
                sku: "WMN-CSH-018-S",
                stock: 5
            },
            {
                size: "M",
                sku: "WMN-CSH-018-M",
                stock: 6
            },
            {
                size: "L",
                sku: "WMN-CSH-018-L",
                stock: 4
            }
        ],
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-17"
    },
    {
        slug: "silk-charmeuse-midi-slip-dress",
        name: "Silk Charmeuse Bias Cut Midi Dress",
        category: "Dresses",
        subcategory: "Midi Dresses",
        brand: "Aura Studio",
        price: 145,
        compareAt: 175,
        description: "Draped gracefully on the bias to follow body contours without clinging. Delicate spaghetti straps, subtle V-neckline, and a glossy, fluid silk finish.",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 65,
        stock: 10,
        availability: "In stock",
        sku: "WMN-SLK-019",
        tags: [
            "dress",
            "silk",
            "evening",
            "minimalist",
            "summer"
        ],
        attributes: {
            Fabric: "100% Mulberry Silk",
            Cut: "Bias Cut",
            Length: "Midi (below knee)"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-07-19"
    },
    {
        slug: "oversized-wool-blend-trench-blazer",
        name: "Oversized Double-Breasted Wool Blazer",
        category: "Jackets & Coats",
        subcategory: "Blazers",
        brand: "Atelier Maison",
        price: 195,
        compareAt: 240,
        description: "Structured shoulders with a modern boxy silhouette. Made from recycled Italian wool blend with peak lapels, flap pockets, and horn button detail.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 104,
        stock: 8,
        availability: "Low stock",
        sku: "WMN-BLZ-020",
        tags: [
            "blazer",
            "outerwear",
            "wool",
            "tailored",
            "office"
        ],
        attributes: {
            Material: "70% Wool, 30% Polyamide",
            Closure: "Double-breasted"
        },
        isNew: true,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-09-24"
    },
    {
        slug: "organic-cotton-weekend-blouse",
        name: "Crisp Organic Cotton Poplin Button-Down",
        category: "Tops & Blouses",
        subcategory: "Shirts",
        brand: "Field House",
        price: 78,
        description: "Lightweight organic cotton poplin with a slightly relaxed boyfriend fit. Features a curved hem, mother-of-pearl buttons, and point collar.",
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 47,
        stock: 20,
        availability: "In stock",
        sku: "WMN-BLS-021",
        tags: [
            "cotton",
            "shirt",
            "casual",
            "sustainable"
        ],
        attributes: {
            Fabric: "GOTS Certified 100% Organic Cotton",
            Pattern: "Solid Crisp White"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-25"
    },
    // --- WOMEN'S COATS & ESSENTIALS ---
    {
        slug: "wool-cashmere-overcoat",
        name: "Women's Tailored Wool & Cashmere Overcoat",
        category: "Jackets & Coats",
        subcategory: "Wool Coats",
        brand: "Ridge & Co.",
        price: 285,
        compareAt: 350,
        description: "An effortlessly elegant winter staple crafted with 90% Italian Melton wool and 10% cashmere. Features a tailored feminine drape, peak lapels, and silky satin lining.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 122,
        stock: 9,
        availability: "Low stock",
        sku: "WMN-COAT-022",
        tags: [
            "coat",
            "winter",
            "tailored",
            "wool",
            "women"
        ],
        attributes: {
            Material: "Melton Wool & Cashmere",
            Cut: "Feminine Tailored Fit",
            Length: "Knee-length"
        },
        variants: [
            {
                size: "XS",
                sku: "WMN-COAT-022-XS",
                stock: 3
            },
            {
                size: "S",
                sku: "WMN-COAT-022-S",
                stock: 4
            },
            {
                size: "M",
                sku: "WMN-COAT-022-M",
                stock: 2
            }
        ],
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-08"
    },
    {
        slug: "classic-oxford-cotton-shirt",
        name: "Relaxed Cotton Poplin Boyfriend Shirt",
        category: "Tops & Blouses",
        subcategory: "Shirts",
        brand: "Field House",
        price: 68,
        compareAt: 85,
        description: "An effortless essential crafted from crisp organic cotton poplin. Designed with dropped shoulders, shell buttons, and a flattering relaxed drape.",
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 230,
        stock: 40,
        availability: "In stock",
        sku: "WMN-SHT-023",
        tags: [
            "shirt",
            "cotton",
            "casual",
            "relaxed",
            "women"
        ],
        attributes: {
            Fabric: "100% Organic Cotton Poplin",
            Collar: "Classic Point Collar",
            Fit: "Relaxed Drape"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-05-18"
    },
    {
        slug: "heavyweight-boxy-cotton-tee",
        name: "Organic Pima Cotton Relaxed Crew Tee",
        category: "Tops & Blouses",
        subcategory: "T-Shirts",
        brand: "Aura Essentials",
        price: 36,
        description: "Buttery soft organic Pima cotton with a relaxed silhouette and clean bound collar. The ultimate everyday wardrobe base layer.",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 310,
        stock: 65,
        availability: "In stock",
        sku: "WMN-TEE-024",
        tags: [
            "tshirt",
            "pima-cotton",
            "minimal",
            "women",
            "everyday"
        ],
        attributes: {
            Material: "100% Peruvian Pima Cotton",
            Collar: "Fine Ribbed Crewneck",
            Fit: "Relaxed"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-06-02"
    },
    {
        slug: "relaxed-linen-blazer",
        name: "Oversized Washed Linen Summer Blazer",
        category: "Jackets & Coats",
        subcategory: "Blazers",
        brand: "Ridge & Co.",
        price: 175,
        compareAt: 215,
        description: "Breathable European flax linen tailored with relaxed shoulders, patch pockets, and a featherweight drape for warm days and layered evenings.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.7,
        reviewCount: 78,
        stock: 12,
        availability: "In stock",
        sku: "WMN-BLZ-025",
        tags: [
            "linen",
            "blazer",
            "summer",
            "women",
            "chic"
        ],
        attributes: {
            Composition: "100% Washed European Linen",
            Lining: "Unlined Breathable Finish"
        },
        isNew: true,
        isFeatured: false,
        isSale: true,
        createdAt: "2026-09-01"
    },
    // --- HOME & LIVING ---
    {
        slug: "sculptural-matte-ceramic-vase",
        name: "Nordic Minimalist Matte Ceramic Vase Set",
        category: "Home & Living",
        subcategory: "Ceramics",
        brand: "Hearth & Form",
        price: 64,
        compareAt: 80,
        description: "Pair of hand-thrown stoneware vessels with a soft, tactile chalk matte glaze. Display with dried botanicals or let them stand as sculptural art.",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 145,
        stock: 25,
        availability: "In stock",
        sku: "HOM-VAS-026",
        tags: [
            "vase",
            "ceramic",
            "decor",
            "home",
            "scandinavian"
        ],
        attributes: {
            Material: "Natural Clay Stoneware",
            Finish: "Matte Sand",
            Origin: "Portugal"
        },
        isNew: false,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-08-11"
    },
    {
        slug: "arc-minimalist-brass-table-lamp",
        name: "Arc Mid-Century Brass & Opal Glass Table Lamp",
        category: "Home & Living",
        subcategory: "Lighting",
        brand: "Hearth & Form",
        price: 139,
        compareAt: 179,
        description: "Solid spun brass base holding a hand-blown frosted opal glass sphere. Emits a warm, diffused ambient glow with an inline brass rotary dimmer.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 92,
        stock: 14,
        availability: "In stock",
        sku: "HOM-LMP-027",
        tags: [
            "lamp",
            "lighting",
            "brass",
            "mid-century",
            "cozy"
        ],
        attributes: {
            Bulb: "G9 LED Included",
            Switch: "Smooth Rotary Dimmer",
            Cord: "Braided Fabric"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-21"
    },
    {
        slug: "french-washed-linen-duvet-throw",
        name: "French Washed Organic Linen Bed Blanket",
        category: "Home & Living",
        subcategory: "Bedding & Throws",
        brand: "Hearth & Form",
        price: 119,
        compareAt: 145,
        description: "Pre-washed for signature lived-in texture and breathable thermoregulation. Keeps you cool in summer and cozy in winter.",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 68,
        stock: 18,
        availability: "In stock",
        sku: "HOM-LIN-028",
        tags: [
            "linen",
            "bedding",
            "throw",
            "cozy",
            "home"
        ],
        attributes: {
            Fabric: "100% French Flax",
            Weight: "175 GSM",
            Dimensions: "90 x 90 inches"
        },
        isNew: false,
        isFeatured: true,
        isSale: false,
        createdAt: "2026-07-28"
    },
    {
        slug: "handcrafted-ceramic-pour-over-coffee-set",
        name: "Barista Pour-Over Glass & Ceramic Dripper Set",
        category: "Home & Living",
        subcategory: "Coffee & Dining",
        brand: "Orchard Lane",
        price: 54,
        description: "Thermal shock-resistant borosilicate glass carafe with a precision grooved ceramic dripper for the cleanest, most aromatic morning brew.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 110,
        stock: 22,
        availability: "In stock",
        sku: "HOM-COF-029",
        tags: [
            "coffee",
            "pour-over",
            "kitchen",
            "giftable"
        ],
        attributes: {
            Capacity: "600ml (2-4 cups)",
            Material: "Borosilicate Glass & Stoneware"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-05-14"
    },
    // --- BEAUTY & SELF-CARE ---
    {
        slug: "botanical-hyaluronic-face-serum",
        name: "Botanica Hydra-Plump Multi-Hyaluronic Serum",
        category: "Beauty & Self-care",
        subcategory: "Skincare",
        brand: "Botanica Organics",
        price: 49,
        compareAt: 62,
        description: "Five molecular weights of hyaluronic acid infused with niacinamide, snow mushroom extract, and marine bio-ferments for deeply quenched, dewy skin.",
        image: "https://images.unsplash.com/photo-1608248597359-54070a25698b?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1608248597359-54070a25698b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.9,
        reviewCount: 215,
        stock: 38,
        availability: "In stock",
        sku: "BTY-SRM-030",
        tags: [
            "skincare",
            "serum",
            "clean-beauty",
            "anti-aging",
            "bestseller"
        ],
        attributes: {
            Volume: "30ml / 1.0 fl oz",
            SkinType: "All skin types",
            Clean: "Cruelty-Free, Vegan, Fragrance-Free"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-20"
    },
    {
        slug: "artisan-eau-de-parfum-santal",
        name: "Atelier No. 04 Santal & Black Pepper Perfume",
        category: "Beauty & Self-care",
        subcategory: "Fragrance",
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
        sku: "BTY-PRF-031",
        tags: [
            "perfume",
            "fragrance",
            "sandalwood",
            "luxury",
            "unisex"
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
        slug: "cedar-fig-soy-wax-candle-set",
        name: "Wild Fig & Hinoki Wood Soy Candle Set",
        category: "Beauty & Self-care",
        subcategory: "Candles",
        brand: "Hearth & Form",
        price: 46,
        description: "Poured by hand in reusable amber glass tumblers. Clean-burning 100% natural soy wax scented with wild fig, earthy Hinoki wood, and black amber.",
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 94,
        stock: 30,
        availability: "In stock",
        sku: "BTY-CND-032",
        tags: [
            "candle",
            "soy-wax",
            "aromatherapy",
            "home",
            "gift"
        ],
        attributes: {
            BurnTime: "50 Hours each",
            Wax: "100% USA Soy Wax",
            Wick: "Lead-free Cotton"
        },
        isNew: false,
        isFeatured: false,
        isSale: false,
        createdAt: "2026-07-15"
    },
    {
        slug: "bamboo-waffle-cloud-bath-robe",
        name: "Bamboo & Organic Cotton Waffle Lounge Robe",
        category: "Beauty & Self-care",
        subcategory: "Bath & Body",
        brand: "Aura Essentials",
        price: 88,
        compareAt: 110,
        description: "Lightweight honeycombed waffle weave that absorbs water instantly and dries fast. Ultra-soft against sensitive skin, featuring deep pockets and a secure tie.",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85",
        gallery: [
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1200&q=85"
        ],
        rating: 4.8,
        reviewCount: 79,
        stock: 16,
        availability: "In stock",
        sku: "BTY-ROB-033",
        tags: [
            "robe",
            "loungewear",
            "spa",
            "cotton",
            "bath"
        ],
        attributes: {
            Blend: "60% Organic Cotton, 40% Bamboo Viscose",
            Fit: "Unisex Relaxed"
        },
        isNew: true,
        isFeatured: true,
        isSale: true,
        createdAt: "2026-09-25"
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