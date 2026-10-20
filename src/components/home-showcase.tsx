"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Flame, Sparkles, TrendingUp, Award } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { type Product } from "@/lib/products";
import { gsap, animateButtonPress, isReducedMotion } from "@/lib/gsap";

export function FlashDealsSection({ dealProducts }: { dealProducts: Product[] }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="flash-deals-section page-shell">
      <div className="flash-deals-header">
        <div className="flash-deals-title-wrap">
          <div className="deals-badge">
            <Flame size={16} className="text-amber-500 animate-pulse" />
            <span>LIMITED TIME DROP</span>
          </div>
          <h2>Flash Deals & Specials</h2>
          <p>Hand-picked seasonal discounts. Grab yours before stock or the timer runs out!</p>
        </div>

        <div className="countdown-wrap">
          <span className="countdown-label">
            <Clock size={14} /> Ends In:
          </span>
          <div className="countdown-timer">
            <div className="time-block">
              <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
              <span>HRS</span>
            </div>
            <span className="time-colon">:</span>
            <div className="time-block">
              <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
              <span>MIN</span>
            </div>
            <span className="time-colon">:</span>
            <div className="time-block">
              <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
              <span>SEC</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {dealProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export function CuratedTabsSection({ allProducts }: { allProducts: Product[] }) {
  const [activeTab, setActiveTab] = useState<"trending" | "bestseller" | "new" | "deals">("trending");
  const gridRef = useRef<HTMLDivElement>(null);

  const tabProducts = allProducts.filter((p) => {
    if (activeTab === "trending") return p.rating >= 4.8;
    if (activeTab === "bestseller") return p.reviewCount > 100;
    if (activeTab === "new") return p.isNew;
    if (activeTab === "deals") return p.isSale;
    return true;
  });

  useEffect(() => {
    const el = gridRef.current;
    if (!el || isReducedMotion()) return;

    const cards = el.querySelectorAll(".product-card");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.38, stagger: 0.05, ease: "power2.out" }
      );
    }, el);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section className="section-block page-shell">
      <div className="collection-tabs-header">
        <div>
          <span className="eyebrow">CURATED EDIT</span>
          <h2>Explore Trending Collections</h2>
        </div>

        <div className="tabs-nav-bar">
          <button
            type="button"
            className={`tab-btn ${activeTab === "trending" ? "is-active" : ""}`}
            onClick={(e) => {
              animateButtonPress(e.currentTarget);
              setActiveTab("trending");
            }}
          >
            <TrendingUp size={15} /> Trending Now
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "bestseller" ? "is-active" : ""}`}
            onClick={(e) => {
              animateButtonPress(e.currentTarget);
              setActiveTab("bestseller");
            }}
          >
            <Award size={15} /> Best Sellers
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "new" ? "is-active" : ""}`}
            onClick={(e) => {
              animateButtonPress(e.currentTarget);
              setActiveTab("new");
            }}
          >
            <Sparkles size={15} /> New Arrivals
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "deals" ? "is-active" : ""}`}
            onClick={(e) => {
              animateButtonPress(e.currentTarget);
              setActiveTab("deals");
            }}
          >
            <Flame size={15} /> Top Deals
          </button>
        </div>
      </div>

      <div ref={gridRef} className="product-grid">
        {tabProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="section-cta-center">
        <Link href="/shop" className="button-primary">
          View All {allProducts.length}+ Products <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
