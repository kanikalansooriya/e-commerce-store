"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { useGSAP } from "@gsap/react";
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

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (isReducedMotion()) {
      element.classList.add("is-visible");
      return undefined;
    }

    let promoMedia: ReturnType<typeof gsap.matchMedia> | undefined;
    const isStaggered =
      element.classList.contains("reveal-stagger") ||
      element.classList.contains("promo-banners-strip") ||
      element.querySelector(".product-card") ||
      element.querySelector(".arolax-collection-card") ||
      element.querySelector(".cat-card") ||
      element.querySelector(".category-tile, .category-hero-image, .review-card");
    const hasProducts = element.querySelector(".product-card") !== null;
    const hasCategories = element.querySelector(
      ".arolax-collection-card, .cat-card, .category-tile, .category-hero-image"
    ) !== null;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    if (isStaggered) {
      let items = Array.from(
        element.querySelectorAll<HTMLElement>(
          ".product-card, .arolax-collection-card, .cat-card, .category-tile, .review-card, .feature-item, .promo-card, .reveal-item, .newsletter-copy, .newsletter-form"
        )
      );

      if (items.length === 0) {
        items = Array.from(element.children) as HTMLElement[];
      }

      if (items.length === 0) {
        items = [element];
      }

      gsap.set(element, { opacity: 1 });
      element.classList.add("is-visible");

      gsap.fromTo(
        items,
        { opacity: 0, y: isMobile ? 12 : 18 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.42 : 0.55,
          stagger: hasProducts && isMobile ? 0.035 : 0.07,
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

      if (hasCategories) {
        const imageMasks = element.querySelectorAll<HTMLElement>(
          ".arolax-card-image-wrap, .cat-card-image-wrap, .category-tile, .category-hero-image"
        );
        imageMasks.forEach((image, index) => {
          const fromClip = index % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
          gsap.fromTo(
            image,
            { clipPath: fromClip },
            {
              clipPath: "inset(0 0 0 0)",
              duration: isMobile ? 0.55 : 0.75,
              delay: isMobile ? index * 0.035 : index * 0.07,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        const categoryTitles = element.querySelectorAll<HTMLElement>(
          ".arolax-card-pill-btn > span:first-child, .cat-card-details h3, .category-label strong"
        );
        gsap.fromTo(
          categoryTitles,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.42,
            stagger: isMobile ? 0.04 : 0.07,
            delay: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      if (element.classList.contains("promo-banners-strip")) {
        const visuals = element.querySelectorAll<HTMLElement>(".promo-card-visual");
        const images = element.querySelectorAll<HTMLElement>(".promo-card-visual img");
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

        promoMedia = gsap.matchMedia();
        promoMedia.add("(min-width: 768px)", () => {
          gsap.to(images, {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        });
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

    return () => promoMedia?.revert();
  }, { scope: elementRef, dependencies: [delay], revertOnUpdate: true });

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

  useGSAP(() => {
    const el = containerRef.current;
    if (!el || isReducedMotion()) return;

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
  }, { scope: containerRef, dependencies: [pathname], revertOnUpdate: true });

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

  useGSAP(() => {
    const btn = buttonRef.current;
    if (!btn || !visible || isReducedMotion()) return;

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
  }, { scope: buttonRef, dependencies: [visible], revertOnUpdate: true });

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