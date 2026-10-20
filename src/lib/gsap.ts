import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely in browser environments
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Checks whether user prefers reduced motion (system or store setting)
 */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  const storeSetting = document.documentElement.dataset.motion;
  if (storeSetting === "reduced") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Cart / Wishlist badge bounce micro-interaction
 */
export function animateBadgeBounce(element: HTMLElement | null) {
  if (!element || isReducedMotion()) return;
  gsap.fromTo(
    element,
    { scale: 0.8 },
    {
      scale: 1,
      duration: 0.45,
      ease: "back.out(2.5)",
      overwrite: "auto",
    }
  );
}

/**
 * Wishlist heart button toggle micro-interaction (spring heartbeat)
 */
export function animateHeartPop(element: HTMLElement | null, saved: boolean) {
  if (!element || isReducedMotion()) return;
  gsap.fromTo(
    element,
    { scale: saved ? 0.75 : 1 },
    {
      scale: saved ? 1.25 : 0.85,
      duration: 0.18,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.25,
          ease: "elastic.out(1.2, 0.4)",
        });
      },
    }
  );
}

/**
 * Button click feedback micro-interaction
 */
export function animateButtonPress(element: HTMLElement | null) {
  if (!element || isReducedMotion()) return;
  gsap.fromTo(
    element,
    { scale: 0.96 },
    {
      scale: 1,
      duration: 0.22,
      ease: "power2.out",
      overwrite: "auto",
    }
  );
}

/**
 * Toast popup entrance animation
 */
export function animateToastEnter(element: HTMLElement | null) {
  if (!element || isReducedMotion()) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 18, scale: 0.94 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.32,
      ease: "power3.out",
    }
  );
}

export { gsap, ScrollTrigger };
