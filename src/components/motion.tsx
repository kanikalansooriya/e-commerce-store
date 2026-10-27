"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { gsap, isReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  delay?: number;
  id?: string;
  "aria-label"?: string;
};

export function ScrollReveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  id,
  "aria-label": ariaLabel,
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (isReducedMotion()) {
      element.classList.add("is-visible");
      return;
    }

    const ctx = gsap.context(() => {
      const isStaggered =
        element.classList.contains("reveal-stagger") ||
        element.querySelector(".product-card") ||
        element.querySelector(".arolax-collection-card") ||
        element.querySelector(".cat-card") ||
        element.querySelector(".review-card");
      const hasProducts = element.querySelector(".product-card") !== null;

      if (isStaggered) {
        let items = Array.from(
          element.querySelectorAll<HTMLElement>(
            ".product-card, .arolax-collection-card, .cat-card, .review-card, .feature-item, .promo-card, .reveal-item"
          )
        );

        if (items.length === 0) {
          items = Array.from(element.children) as HTMLElement[];
        }

        if (items.length === 0) {
          items = [element];
        }

        // Hide initially in GSAP context (preserves SSR visibility if JS fails)
        gsap.set(element, { opacity: 1 });
        element.classList.add("is-visible");

        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: "power2.out",
            delay: delay / 1000,
            scrollTrigger: hasProducts
              ? {
                  trigger: element,
                  start: "top 88%",
                  end: "bottom 12%",
                  toggleActions: "restart none restart none",
                }
              : {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
          }
        );

        if (element.classList.contains("promo-banners-strip")) {
          const visuals = element.querySelectorAll<HTMLElement>(".promo-card-visual");
          gsap.fromTo(
            visuals,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.9,
              stagger: 0.16,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      } else {
        gsap.fromTo(
          element,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: delay / 1000,
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
            onComplete: () => {
              element.classList.add("is-visible");
            },
          }
        );
      }
    }, element);

    return () => {
      ctx.revert();
    };
  }, [delay]);

  const classNames = `scroll-reveal${className ? ` ${className}` : ""}`;
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  if (as === "section") {
    return (
      <section
        ref={(el) => {
          elementRef.current = el;
        }}
        id={id}
        aria-label={ariaLabel}
        className={classNames}
        style={style}
      >
        {children}
      </section>
    );
  }

  return (
    <div
      ref={(el) => {
        elementRef.current = el;
      }}
      id={id}
      aria-label={ariaLabel}
      className={classNames}
      style={style}
    >
      {children}
    </div>
  );
}

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 16, scale: 0.995 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.48,
          ease: "power3.out",
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return (
    <div ref={containerRef} className="route-transition" key={pathname}>
      {children}
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn || !visible || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        btn,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          ease: "back.out(1.8)",
        }
      );
    }, btn);

    return () => {
      ctx.revert();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <button
      ref={buttonRef}
      className="back-to-top"
      type="button"
      onClick={() => {
        const reduced = isReducedMotion();
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={17} />
    </button>
  );
}