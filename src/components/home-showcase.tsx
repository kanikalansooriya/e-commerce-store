"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles, TrendingUp, Award } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/motion";
import { type Product } from "@/lib/products";
import { gsap, animateButtonPress, isReducedMotion } from "@/lib/gsap";

export function FlashDealsSection({ dealProducts }: { dealProducts: Product[] }) {
  return (
    <ScrollReveal as="section" className="flash-deals-section page-shell">
      <div className="flash-deals-header">
        <div className="flash-deals-title-wrap">
          <div className="deals-badge">
            <Flame size={16} className="text-amber-500 animate-pulse" />
            <span>SAMPLE PRICING</span>
          </div>
          <h2>Marked-down examples</h2>
          <p>These sample prices are illustrative only; no live promotion or countdown is active.</p>
        </div>

        <span className="demo-note">No live offers</span>
      </div>

      <div className="product-grid reveal-stagger">
        {dealProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ScrollReveal>
  );
}

export function CuratedTabsSection({ allProducts }: { allProducts: Product[] }) {
  const [activeTab, setActiveTab] = useState<"featured" | "ratings" | "new" | "deals">("featured");
  const gridRef = useRef<HTMLDivElement>(null);

  const tabProducts = allProducts.filter((p) => {
    if (activeTab === "featured") return p.isFeatured;
    if (activeTab === "ratings") return p.rating >= 4.8;
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
    <ScrollReveal as="section" className="section-block page-shell">
      <div className="collection-tabs-header">
        <div>
          <span className="eyebrow">SAMPLE EDIT</span>
          <h2>Explore the product preview</h2>
        </div>

        <div className="tabs-nav-bar">
          <button
            type="button"
            className={`tab-btn ${activeTab === "featured" ? "is-active" : ""}`}
            onClick={(e) => {
              animateButtonPress(e.currentTarget);
              setActiveTab("featured");
            }}
          >
            <TrendingUp size={15} /> Featured
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "ratings" ? "is-active" : ""}`}
            onClick={(e) => {
              animateButtonPress(e.currentTarget);
              setActiveTab("ratings");
            }}
          >
            <Award size={15} /> Sample ratings
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
            <Flame size={15} /> Sample prices
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
    </ScrollReveal>
  );
}
