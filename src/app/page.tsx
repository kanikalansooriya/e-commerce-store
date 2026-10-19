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
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ScrollReveal } from "@/components/motion";
import { FlashDealsSection, CuratedTabsSection } from "@/components/home-showcase";
import { products } from "@/lib/products";

const categoryTiles = [
  {
    name: "Women's Collection",
    subtitle: "Dresses, Cashmere & Tailoring",
    href: "/category/women",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
    badge: "New Season",
  },
  {
    name: "Men's Apparel",
    subtitle: "Overcoats, Oxford Shirts & Blazers",
    href: "/category/men",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    badge: "Trending",
  },
  {
    name: "Footwear & Sneakers",
    subtitle: "Running, Leather Loafers & Boots",
    href: "/category/shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
    badge: "Hot Drops",
  },
  {
    name: "Watches & Jewelry",
    subtitle: "Chronographs & 18K Gold Vermeil",
    href: "/category/jewelry-watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
    badge: "Luxury",
  },
  {
    name: "Audio & Smart Tech",
    subtitle: "ANC Headphones, Keyboards & Audio",
    href: "/category/electronics-tech",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    badge: "Best Sound",
  },
  {
    name: "Bags & Leather Goods",
    subtitle: "Weekender Duffels & Tech Packs",
    href: "/category/bags-accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
    badge: "Full-Grain",
  },
  {
    name: "Modern Home & Decor",
    subtitle: "Sculptural Lighting & Stoneware",
    href: "/category/home-living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
    badge: "Scandi Edit",
  },
  {
    name: "Beauty & Fragrance",
    subtitle: "Botanical Serums & Niche Perfumes",
    href: "/category/beauty-self-care",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85",
    badge: "Clean Beauty",
  },
];

const customerReviews = [
  {
    name: "Sophia Martinez",
    location: "New York, NY",
    rating: 5,
    product: "Sony WH-1000XM5 Headphones",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    comment: "The sound clarity and active noise cancellation are completely next-level. Packed beautifully and arrived in just 2 days. 10/10 experience!",
  },
  {
    name: "Marcus Vance",
    location: "London, UK",
    rating: 5,
    product: "Heritage Leather Duffel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    comment: "Outstanding leather quality. The brass zippers and dedicated shoe pocket make weekend trips effortless. It looks even better in person.",
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
  "SONY",
  "BOSE",
  "APPLE",
  "NIKE",
  "KEYCHRON",
  "ATELIER MAISON",
  "HEARTH & FORM",
  "CHRONOS",
];

const dealProducts = products.filter((p) => p.isSale);

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="ecommerce-hero">
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
            Discover precision tech audio, tailored apparel, artisan Italian leathers, and modern home essentials crafted with purpose.
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
      </section>

      {/* VALUE PROPOSITIONS / BENEFITS BAR */}
      <section className="features-strip page-shell" aria-label="Customer Benefits">
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
            <strong>100% Authentic Guarantee</strong>
            <span>Directly sourced genuine products</span>
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
      </section>

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
            <span className="promo-eyebrow">PRECISION ACOUSTICS</span>
            <h3>Hi-Fi Audio & Workspace Tech</h3>
            <p>Noise-canceling headphones, custom mechanical keyboards, and 360° wireless speakers designed for focus and flow.</p>
            <Link href="/category/electronics-tech" className="promo-btn-light">
              Shop Tech & Audio <ArrowRight size={15} />
            </Link>
          </div>
          <div className="promo-card-visual">
            <Image
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85"
              alt="Studio Headphones and Audio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="promo-card promo-card-warm">
          <div className="promo-card-content">
            <span className="promo-eyebrow">HERITAGE CRAFT</span>
            <h3>Full-Grain Leather & Timepieces</h3>
            <p>Vegetable-tanned weekender duffels, sapphire crystal chronographs, and heirloom accessories made to travel everywhere.</p>
            <Link href="/category/bags-accessories" className="promo-btn-dark">
              Explore Leather Goods <ArrowRight size={15} />
            </Link>
          </div>
          <div className="promo-card-visual">
            <Image
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85"
              alt="Leather Weekender Duffel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* CURATED TABS PRODUCT SHOWCASE */}
      <CuratedTabsSection allProducts={products} />

      {/* BRAND PARTNERS TICKER */}
      <section className="brand-ticker-section">
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
      </section>

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
      <section className="instagram-strip">
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
      </section>

      {/* NEWSLETTER */}
      <ScrollReveal as="section" className="section-block section-tint">
        <div className="page-shell">
          <NewsletterSignup />
        </div>
      </ScrollReveal>
    </>
  );
}
