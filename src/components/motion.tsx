"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap, isReducedMotion, ScrollTrigger } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  delay?: number;
  animationKey?: string | number;
  id?: string;
  "aria-label"?: string;
};

export function ScrollReveal({
  children,
  className = "",
  as = "div",
  delay = 0,
  animationKey,
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
      element.querySelector(".arolax-collection-card") ||
      element.querySelector(".cat-card") ||
      element.querySelector(".category-tile, .category-hero-image, .review-card");
    const hasProducts = element.querySelector(".product-card") !== null;
    const productCards = Array.from(element.querySelectorAll<HTMLElement>(".product-card"));
    const hasCategories = element.querySelector(
      ".arolax-collection-card, .cat-card, .category-tile, .category-hero-image"
    ) !== null;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    const zoomTargets = element.querySelectorAll<HTMLElement>(
      ".arolax-card-img, .cat-card-img, .category-hero-image img, .promo-card-visual img, .about-image img"
    );
    if (zoomTargets.length > 0) {
      gsap.fromTo(
        zoomTargets,
        { scale: isMobile ? 1.045 : 1.075 },
        {
          scale: 1,
          duration: isMobile ? 0.65 : 0.85,
          stagger: hasProducts && isMobile ? 0.025 : 0.045,
          ease: "power2.out",
          onComplete: () => gsap.set(zoomTargets, { clearProps: "transform" }),
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: hasProducts ? "bottom 12%" : undefined,
            toggleActions: hasProducts ? "restart none restart none" : "play none none none",
            once: !hasProducts,
            onLeaveBack: () => gsap.set(zoomTargets, { clearProps: "transform" }),
          },
        }
      );
    }

    if (hasProducts) {
      const movement = isMobile ? 12 : 20;
      const stagger = isMobile ? 0.035 : 0.065;

      const revealProducts = (targets: Element[], enteringFrom: "top" | "bottom") => {
        const cards = targets as HTMLElement[];
        const images = cards
          .map((card) => card.querySelector<HTMLElement>(".product-image-wrap img"))
          .filter((image): image is HTMLElement => image !== null);
        gsap.killTweensOf(cards);
        gsap.killTweensOf(images);

        const horizontalOffset = (index: number, target: Element) => {
          const position = productCards.indexOf(target as HTMLElement);
          const alternatingOffset = position % 2 === 0 ? -7 : 7;
          return position < 0 ? 0 : enteringFrom === "bottom" ? alternatingOffset : -alternatingOffset;
        };

        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            x: horizontalOffset,
            y: enteringFrom === "bottom" ? movement : -movement,
            scale: 0.975,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.52,
            stagger,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => gsap.set(cards, { clearProps: "opacity,visibility,transform" }),
          }
        );

        gsap.fromTo(
          images,
          {
            clipPath: enteringFrom === "bottom" ? "inset(0 0 14% 0)" : "inset(14% 0 0 0)",
            scale: 1.045,
          },
          {
            clipPath: "inset(0 0 0 0)",
            scale: 1,
            duration: 0.58,
            stagger: stagger * 0.7,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => gsap.set(images, { clearProps: "clipPath,transform" }),
          }
        );
      };

      const concealProducts = (targets: Element[], leavingTowards: "top" | "bottom") => {
        const cards = targets as HTMLElement[];
        const images = cards
          .map((card) => card.querySelector<HTMLElement>(".product-image-wrap img"))
          .filter((image): image is HTMLElement => image !== null);
        gsap.killTweensOf(cards);
        gsap.killTweensOf(images);

        gsap.to(cards, {
          autoAlpha: 0,
          x: (index, target) => {
            const position = productCards.indexOf(target as HTMLElement);
            const alternatingOffset = position % 2 === 0 ? -5 : 5;
            return position < 0 ? 0 : leavingTowards === "top" ? alternatingOffset : -alternatingOffset;
          },
          y: leavingTowards === "top" ? -movement * 0.6 : movement * 0.6,
          scale: 0.985,
          duration: 0.28,
          stagger: stagger * 0.45,
          ease: "power1.in",
          overwrite: "auto",
        });
        gsap.to(images, {
          clipPath: leavingTowards === "top" ? "inset(0 0 10% 0)" : "inset(10% 0 0 0)",
          scale: 1.02,
          duration: 0.28,
          stagger: stagger * 0.45,
          ease: "power1.in",
          overwrite: "auto",
        });
      };

      ScrollTrigger.batch(productCards, {
        start: "top 92%",
        end: "bottom 8%",
        interval: 0.08,
        batchMax: isMobile ? 4 : 8,
        onEnter: (cards) => revealProducts(cards, "bottom"),
        onEnterBack: (cards) => revealProducts(cards, "top"),
        onLeave: (cards) => concealProducts(cards, "top"),
        onLeaveBack: (cards) => concealProducts(cards, "bottom"),
      });
    } else if (isStaggered) {
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
          stagger: isMobile ? 0.035 : 0.07,
          ease: "power2.out",
          delay: delay / 1000,
          scrollTrigger: {
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
        const images = element.querySelectorAll<HTMLElement>(".promo-card-visual");
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

    return () => {
      promoMedia?.revert();
      const productImages = productCards
        .map((card) => card.querySelector<HTMLElement>(".product-image-wrap img"))
        .filter((image): image is HTMLElement => image !== null);
      gsap.killTweensOf(productCards);
      gsap.killTweensOf(productImages);
    };
  }, { scope: elementRef, dependencies: [delay, animationKey], revertOnUpdate: true });

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