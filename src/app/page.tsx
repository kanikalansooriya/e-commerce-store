import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  RotateCcw,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { HeroSlider } from "@/components/hero-slider";
import { FlashDealsSection, CuratedTabsSection } from "@/components/home-showcase";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { products } from "@/lib/products";

// Top Collections cards matching the user reference screenshot
const topCollections = [
  {
    name: "Top T-Shirt",
    href: "/shop?subcategory=Tops%20%26%20T-Shirts",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85",
    alt: "Model wearing stylish top t-shirt",
  },
  {
    name: "Sweatshirt",
    href: "/shop?subcategory=Jackets%20%26%20Cardigans",
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=800&q=85",
    alt: "Model wearing cozy striped sweatshirt knitwear",
  },
  {
    name: "Dresses",
    href: "/category/dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
    alt: "Model wearing white summer maxi halter dress",
  },
  {
    name: "Shirts",
    href: "/shop?subcategory=Shirts%20%26%20Blouses",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=85",
    alt: "Model wearing textured knit polo shirt and skirt",
  },
  {
    name: "Blazers",
    href: "/shop?category=Clothing",
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=85",
    alt: "Model in pristine tailored white blazer",
  },
  {
    name: "Jeans",
    href: "/shop?subcategory=Jeans%20%26%20Pants",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85",
    alt: "Model wearing classic fit denim jeans",
  },
  {
    name: "Tops",
    href: "/category/tops-blouses",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    alt: "Model wearing elegant white v-neck summer top",
  },
  {
    name: "Tank Tops",
    href: "/shop?category=Clothing",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=85",
    alt: "Model wearing minimalist ribbed white square neck tank top",
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
    location: "London, UK",
    rating: 5,
    product: "Pure Cashmere Relaxed Cardigan",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    comment: "Incredibly soft, perfect drape, and genuinely high-grade cashmere. It feels like wearing a warm cloud. Will definitely purchase again!",
  },
];

const brandLogos = [
  "AROLAX ATELIER",
  "MILAN STUDIO",
  "PARIS HAUTE",
  "MAISON SOLEIL",
  "FLORENCE LEATHER",
  "NORDIC MINIMAL",
  "BOTANICA LABS",
];

const dealProducts = products.filter((p) => p.isSale);

export default function Home() {
  return (
    <>
      {/* 1. HERO BANNER WITH SLIDER (MATCHING USER REFERENCE SCREENSHOT) */}
      <HeroSlider />

      {/* 2. TOP COLLECTIONS GRID (MATCHING USER REFERENCE SCREENSHOT) */}
      <ScrollReveal as="section" className="arolax-collections-section page-shell">
        <div className="arolax-section-header-center">
          <h2 className="arolax-section-title">Top Collections</h2>
          <p className="arolax-section-subtitle">
            Signature styles chosen to elevate your wardrobe.
          </p>
        </div>

        <div className="arolax-collections-grid">
          {topCollections.map((col) => (
            <Link className="arolax-collection-card" href={col.href} key={col.name}>
              <div className="arolax-card-image-wrap">
                <Image
                  src={col.image}
                  alt={col.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="arolax-card-img"
                />
                {/* Floating pill button at bottom center */}
                <div className="arolax-card-pill-btn">
                  <span>{col.name}</span>
                  <span className="arolax-card-pill-arrow" aria-hidden="true">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {/* 3. LUXURY VALUE PROPOSITIONS STRIP */}
      <ScrollReveal as="section" className="features-strip page-shell reveal-stagger" aria-label="Store Benefits">
        <div className="feature-item">
          <div className="feature-icon-wrap"><Truck size={20} /></div>
          <div>
            <strong>Complimentary Worldwide Shipping</strong>
            <span>Express doorstep delivery on all orders over $150</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrap"><ShieldCheck size={20} /></div>
          <div>
            <strong>100% Authentic Luxury</strong>
            <span>Handcrafted with premium certified natural materials</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrap"><RotateCcw size={20} /></div>
          <div>
            <strong>Complimentary 30-Day Returns</strong>
            <span>Effortless global returns and size exchanges</span>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrap"><Headphones size={20} /></div>
          <div>
            <strong>Dedicated Client Concierge</strong>
            <span>24/7 personal styling advice and order assistance</span>
          </div>
        </div>
      </ScrollReveal>

      {/* 4. FLASH DEALS SPOTLIGHT */}
      <FlashDealsSection dealProducts={dealProducts} />

      {/* 5. DUAL EDITORIAL PROMO BANNERS */}
      <ScrollReveal as="section" className="promo-banners-strip page-shell">
        <div className="promo-card promo-card-dark">
          <div className="promo-card-content">
            <span className="promo-eyebrow">SUMMER LINEN EDIT</span>
            <h3>Effortless Silhouettes &amp; Neutrals</h3>
            <p>
              Lightweight dresses, breathable linen blouses, and relaxed trousers tailored for sunny days and warm evenings.
            </p>
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
            <h3>Sculptural Bags &amp; Gold Accents</h3>
            <p>
              Artisanal Italian leather shoulder bags and fine 18k vermeil jewelry designed to complement every silhouette.
            </p>
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

      {/* 6. CURATED TABS PRODUCT SHOWCASE */}
      <CuratedTabsSection allProducts={products} />

      {/* 7. BRAND PARTNERS TICKER */}
      <ScrollReveal as="section" className="brand-ticker-section">
        <div className="page-shell">
          <p className="ticker-intro">DISCOVER OUR ATELIER HOUSES &amp; PARTNERS</p>
          <div className="brand-logos-row">
            {brandLogos.map((brand) => (
              <span key={brand} className="brand-logo-text">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 8. CLIENT REVIEWS & TESTIMONIALS */}
      <ScrollReveal as="section" className="section-block page-shell">
        <div className="section-heading-center">
          <span className="eyebrow">CLIENT VOICES</span>
          <h2>Loved by Modern Women Everywhere</h2>
          <p>Read authentic feedback from our community of discerning fashion lovers.</p>
        </div>

        <div className="reviews-grid">
          {customerReviews.map((rev) => (
            <div className="review-card" key={rev.name}>
              <div className="review-rating-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#eab308" stroke="#eab308" />
                ))}
                <span className="verified-badge"><CheckCircle2 size={13} aria-hidden="true" /> Verified Buyer</span>
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

      {/* 9. EDITORIAL INSTAGRAM STRIP */}
      <ScrollReveal as="section" className="instagram-strip">
        <div className="page-shell">
          <div className="insta-header">
            <h3>Follow @AROLAX on Instagram</h3>
            <p>Tag #ArolaxStyle on your looks to be featured in our seasonal lookbook.</p>
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
                <Image src={imgUrl} alt={`Arolax editorial photo ${i + 1}`} fill sizes="20vw" />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 10. NEWSLETTER VIP CLUB */}
      <ScrollReveal as="section" className="newsletter-band">
        <div className="page-shell newsletter-inner">
          <div className="newsletter-copy">
            <span className="eyebrow">VIP PRIVILEGES</span>
            <h2>Join the AROLAX Circle</h2>
            <p>Subscribe to receive 15% off your first purchase, invitations to private sales, and seasonal lookbooks.</p>
          </div>
          <NewsletterSignup />
        </div>
      </ScrollReveal>
    </>
  );
}
