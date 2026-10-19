"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  delay?: number;
  id?: string;
};

export function ScrollReveal({ children, className = "", as = "div", delay = 0, id }: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const motion = document.documentElement.dataset.motion;
    if (motion === "reduced" || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classNames = `scroll-reveal${className ? ` ${className}` : ""}`;
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  if (as === "section") return <section ref={(element) => { elementRef.current = element; }} id={id} className={classNames} style={style}>{children}</section>;
  return <div ref={(element) => { elementRef.current = element; }} id={id} className={classNames} style={style}>{children}</div>;
}

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div className="route-transition" key={pathname}>{children}</div>;
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return <button className="back-to-top" type="button" onClick={() => {
    const reduced = document.documentElement.dataset.motion === "reduced" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }} aria-label="Back to top"><ArrowUp size={17} /></button>;
}