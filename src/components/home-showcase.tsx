"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles, TrendingUp, Award, Clock } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/motion";
import { type Product } from "@/lib/products";
import { animateButtonPress } from "@/lib/gsap";

export function FlashDealsSection({ dealProducts }: { dealProducts: Product[] }) {
  return (
    <ScrollReveal as="section" className="flash-deals-section page-shell">
      <div className="flash-deals-header">
        <div className="flash-deals-title-wrap">
          <div className="deals-badge">
            <Flame size={16} className="text-amber-500 animate-pulse" />
            <span>LIMITED TIME PROMOTION</span>
          </div>
          <h2>Seasonal Spotlight Deals</h2>
          <p>Exclusive summer markdowns on bestselling silhouettes and signature accessories.</p>
        </div>

        <div className="deals-timer-badge">
          <Clock size={15} />
          <span>Ends in <strong>14h : 32m : 18s</strong></span>
        </div>
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

  const tabProducts = allProducts.filter((p) => {
    if (activeTab === "featured") return p.isFeatured;
    if (activeTab === "ratings") return p.rating >= 4.8;
    if (activeTab === "new") return p.isNew;
    if (activeTab === "deals") return p.isSale;
    return true;
  });

  return (
    <ScrollReveal as="section" className="section-block page-shell" animationKey={activeTab}>
      <div className="collection-tabs-header">
        <div>
          <span className="eyebrow">CURATED EDIT</span>
          <h2>Explore Signature Pieces</h2>
          <p>Hand-selected items designed to effortlessly elevate your everyday wardrobe.</p>
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
            <TrendingUp size={15} /> Trending
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === "ratings" ? "is-active" : ""}`}
            onClick={(e) => {
              animateButtonPress(e.currentTarget);
              setActiveTab("ratings");
            }}
          >
            <Award size={15} /> Top Rated
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
            <Flame size={15} /> Special Offers
          </button>
        </div>
      </div>

      <div className="product-grid">
        {tabProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="section-cta-center">
        <Link href="/shop" className="button-primary">
          View Complete Catalog ({allProducts.length}+ Pieces) <ArrowRight size={16} />
        </Link>
      </div>
    </ScrollReveal>
  );
}
