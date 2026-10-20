import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Headphones,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { FlashDealsSection, CuratedTabsSection } from "@/components/home-showcase";
import { products } from "@/lib/products";

const categoryTiles = [
  {
    name: "Dresses",
    subtitle: "Slip, Midi & Summer Silhouettes",
    href: "/category/dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
    badge: "Trending",
  },
  {
    name: "Tops & Blouses",
    subtitle: "Linen Shirts & Silk Tops",
    href: "/category/tops-blouses",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=85",
    badge: "Essentials",
  },
  {
    name: "Knitwear & Sweaters",
    subtitle: "Cashmere Cardigans & Knits",
    href: "/category/knitwear",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=85",
    badge: "New Season",
  },
  {
    name: "Jackets & Blazers",
    subtitle: "Tailored Wool & Linen Coats",
    href: "/category/jackets-coats",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    badge: "Editor's Pick",
  },
  {
    name: "Skirts & Pants",
    subtitle: "Fluid Trousers & Pleated Skirts",
    href: "/category/pants-skirts",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=85",
    badge: "Popular",
  },
  {
    name: "Shoes & Heels",
    subtitle: "Strappy Heels & Leather Flats",
    href: "/category/shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=85",
    badge: "Footwear",
  },
  {
    name: "Handbags & Totes",
    subtitle: "Italian Leather Shoulder Bags",
    href: "/category/bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85",
    badge: "Full-Grain",
  },
  {
    name: "Jewelry & Fragrance",
    subtitle: "18K Gold Vermeil & Perfumes",
    href: "/category/jewelry-accessories",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85",
    badge: "Luxury",
  },
];

const customerReviews = [
  {
    name: "Sophia Martinez",
    location: "New York, NY",
    rating: 5,
    product: "Silk Charmeuse Bias Cut Midi Dress",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    comment: "The silk drape is so flattering and effortlessly chic. Packed beautifully and arrived in just 2 days. 10/10 experience!",
  },
  {
    name: "Chloe Bennett",
    location: "Melbourne, Australia",
    rating: 5,
    product: "Italian Leather Crossbody Bag",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    comment: "Outstanding leather craftsmanship. The soft structure and gold accents make it my go-to everyday handbag. Absolutely love it.",
  },
  {
    name: "Elena Rostova",
    location: "Sydney, Australia",
    rating: 5,
    product: "Pure Cashmere Relaxed Cardigan",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    comment: "Incredibly soft, perfect drape, and genuinely high-grade cashmere. It feels like wearing a warm cloud. Will definitely purchase again!",
  },
];

const brandLogos = [
  "ATELIER MAISON",
  "AURA STUDIO",
  "FIELD HOUSE",
  "RIDGE & CO.",
  "HEARTH & FORM",
  "FLORENCE LEATHER",
  "BOTANICA LABS",
];

const dealProducts = products.filter((p) => p.isSale);

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <ScrollReveal as="section" className="ecommerce-hero">
        <div className="hero-left-content">
          <div className="hero-badge">
            <Sparkles size={14} className="text-amber-400" />
            <span>SPRING / SUMMER 2026 DROP</span>
          </div>

          <h1 className="hero-heading">
            Elevate Your Everyday <br />
            <span className="hero-highlight">With Considered Style.</span>
          </h1>

          <p className="hero-subtext">
            Discover effortlessly elegant dresses, fine knitwear, timeless jewelry, and beautiful essentials designed for every day.
          </p>

          <div className="hero-buttons">
            <Link className="hero-btn-primary" href="/shop">
              Shop Collections <ArrowRight size={17} />
            </Link>
            <Link className="hero-btn-secondary" href="/category/sale">
              <Zap size={16} /> Explore Deals
            </Link>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-stat">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#eab308" stroke="#eab308" />
                ))}
              </div>
              <span><strong>4.9 / 5.0</strong> (14,800+ Verified Reviews)</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-badge-pill">
              <Truck size={15} /> Free Express Shipping Over $75
            </div>
          </div>
        </div>

        <div className="hero-visual-container">
          <div className="hero-banner-image-wrap">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=90"
              alt="High fashion luxury storefront collection"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="hero-main-photo"
            />
            <div className="hero-floating-card">
              <div className="floating-card-icon">
                <PackageCheck size={20} />
              </div>
              <div>
                <strong>Over 25,000+ Orders</strong>
                <span>Shipped Islandwide & Globally</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* VALUE PROPOSITIONS / BENEFITS BAR */}
      <ScrollReveal as="section" className="features-strip page-shell reveal-stagger" aria-label="Customer Benefits">
        <div className="feature-item">
          <div className="feature-icon-wrap"><Truck size={20} /></div>
          <div>
            <strong>Free Express Shipping</strong>
            <span>On all domestic orders over $75</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrap"><ShieldCheck size={20} /></div>
          <div>
            <strong>Premium Quality Fabrics</strong>
            <span>Thoughtfully designed & crafted</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrap"><RotateCcw size={20} /></div>
          <div>
            <strong>30-Day Easy Returns</strong>
            <span>Hassle-free exchange policy</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrap"><Headphones size={20} /></div>
          <div>
            <strong>24/7 Priority Support</strong>
            <span>Dedicated concierge assistance</span>
          </div>
        </div>
      </ScrollReveal>

      {/* POPULAR CATEGORIES GRID */}
      <ScrollReveal as="section" className="section-block page-shell">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">EXPLORE BY CATEGORY</span>
            <h2>Curated Departments</h2>
            <p>Select a category to view high-resolution collections and authentic items.</p>
          </div>
          <Link className="view-all-link" href="/shop">
            All Categories <ArrowRight size={15} />
          </Link>
        </div>

        <div className="categories-modern-grid">
          {categoryTiles.map((cat) => (
            <Link className="cat-card group" href={cat.href} key={cat.name}>
              <div className="cat-card-image-wrap">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="cat-card-img"
                />
                <span className="cat-card-badge">{cat.badge}</span>
                <div className="cat-card-overlay">
                  <div className="cat-card-details">
                    <h3>{cat.name}</h3>
                    <p>{cat.subtitle}</p>
                  </div>
                  <span className="cat-arrow-btn">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {/* FLASH DEALS COUNTDOWN SECTION */}
      <FlashDealsSection dealProducts={dealProducts} />

      {/* DUAL EDITORIAL PROMO BANNERS */}
      <ScrollReveal as="section" className="promo-banners-strip page-shell">
        <div className="promo-card promo-card-dark">
          <div className="promo-card-content">
            <span className="promo-eyebrow">SUMMER LINEN EDIT</span>
            <h3>Effortless Silhouettes & Neutrals</h3>
            <p>Lightweight dresses, breathable linen blouses, and relaxed trousers tailored for sunny days and warm evenings.</p>
            <Link href="/category/dresses" className="promo-btn-light">
              Shop Summer Edit <ArrowRight size={15} />
            </Link>
          </div>
          <div className="promo-card-visual">
            <Image
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=85"
              alt="Summer Linen Dresses"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="promo-card promo-card-warm">
          <div className="promo-card-content">
            <span className="promo-eyebrow">HANDCRAFTED ACCENTS</span>
            <h3>Sculptural Bags & Gold Jewelry</h3>
            <p>Full-grain leather shoulder bags, versatile totes, and 18K gold vermeil pieces made to quietly elevate every look.</p>
            <Link href="/category/bags" className="promo-btn-dark">
              Explore Handbags <ArrowRight size={15} />
            </Link>
          </div>
          <div className="promo-card-visual">
            <Image
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85"
              alt="Italian Leather Handbag"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* CURATED TABS PRODUCT SHOWCASE */}
      <CuratedTabsSection allProducts={products} />

      {/* BRAND PARTNERS TICKER */}
      <ScrollReveal as="section" className="brand-ticker-section">
        <div className="page-shell">
          <p className="ticker-intro">TRUSTED PARTNER BRANDS & PRESS FEATURES</p>
          <div className="brand-logos-row">
            {brandLogos.map((brand) => (
              <span key={brand} className="brand-logo-text">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* CUSTOMER REVIEWS & TESTIMONIALS */}
      <ScrollReveal as="section" className="section-block page-shell">
        <div className="section-heading-center">
          <span className="eyebrow">COMMUNITY PRAISE</span>
          <h2>Loved by Modern Shoppers</h2>
          <p>Read genuine reviews from over 25,000+ happy customers worldwide.</p>
        </div>

        <div className="reviews-grid">
          {customerReviews.map((rev) => (
            <div className="review-card" key={rev.name}>
              <div className="review-rating-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#eab308" stroke="#eab308" />
                ))}
                <span className="verified-badge">
                  <CheckCircle2 size={13} className="text-emerald-500" /> Verified Buyer
                </span>
              </div>
              <p className="review-quote">&ldquo;{rev.comment}&rdquo;</p>
              <div className="reviewer-info">
                 <div className="reviewer-avatar">
                  <Image src={rev.avatar} alt={rev.name} fill sizes="48px" />
                </div>
                <div>
                  <strong>{rev.name}</strong>
                  <span>{rev.location} • <em>Purchased {rev.product}</em></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* INSTAGRAM COMMUNITY SHOWCASE */}
      <ScrollReveal as="section" className="instagram-strip">
        <div className="page-shell">
          <div className="insta-header">
            <h3>#AuraLifestyle</h3>
            <p>Tag @aura.store on Instagram to be featured on our community feed.</p>
          </div>
          <div className="insta-grid">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80",
            ].map((imgUrl, i) => (
              <div className="insta-photo-wrap" key={i}>
                <Image src={imgUrl} alt={`Community photo ${i + 1}`} fill sizes="20vw" />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

    </>
  );
}
