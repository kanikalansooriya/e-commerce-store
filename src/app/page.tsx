import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Leaf, PackageCheck, RotateCcw, Sparkles } from "lucide-react";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ScrollReveal } from "@/components/motion";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

const categoryTiles = [
  { name: "Women", href: "/category/women", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85", alt: "A curated women’s fashion edit" },
  { name: "Men", href: "/category/men", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85", alt: "A modern men’s essentials edit" },
  { name: "Home & Living", href: "/category/home-living", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85", alt: "Sunlit living room with considered home details" },
  { name: "Beauty & Self-care", href: "/category/beauty-self-care", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=85", alt: "A beauty ritual highlighting soft textures and calm tones" },
  { name: "Electronics & Tech", href: "/category/electronics-tech", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85", alt: "Desk setup with premium gadgets and charging essentials" },
  { name: "Gifts", href: "/category/gifts", image: "https://images.unsplash.com/photo-1602872029706-8d2f1f3e3b43?auto=format&fit=crop&w=800&q=85", alt: "Giftable lifestyle essentials in a thoughtful arrangement" },
  { name: "New Arrivals", href: "/category/new-arrivals", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=85", alt: "Freshly arrived accessories and travel essentials" },
  { name: "Sale", href: "/category/sale", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85", alt: "A sale edit of everyday essentials" },
];

const featured = products.filter((product) => product.isFeatured).slice(0, 4);
const newArrivals = [...products].filter((product) => product.isNew).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">A considered little shop</span>
          <h1>Good things.<br /><em>Well chosen.</em></h1>
          <p>Everyday objects with a little more thought behind them. Useful, well-made, and a joy to keep around.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/shop">Shop the edit <ArrowRight size={16} /></Link>
            <Link className="text-link" href="/about">A note from us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=90" alt="Warm, light-filled living room with carefully chosen furniture" fill priority sizes="(max-width: 640px) 100vw, 50vw" />
          <div className="hero-image-note"><strong>Made for the everyday</strong>Small details, lasting comfort.</div>
        </div>
      </section>
      <div className="benefit-strip page-shell" aria-label="Store benefits">
        <div className="benefit-item"><PackageCheck size={17} /> Free shipping over $100</div>
        <div className="benefit-item"><RotateCcw size={16} /> Easy 30-day returns</div>
        <div className="benefit-item"><Leaf size={17} /> Thoughtful materials</div>
        <div className="benefit-item"><Check size={16} /> Small-batch favorites</div>
      </div>
      <ScrollReveal as="section" className="section-block page-shell">
        <div className="section-heading"><div><span className="eyebrow">Start somewhere good</span><h2>Find your kind of useful.</h2></div><Link className="text-link" href="/shop">All categories <ArrowRight size={15} /></Link></div>
        <div className="category-grid reveal-stagger">{categoryTiles.map((category) => <Link className="category-tile" href={category.href} key={category.name}><Image src={category.image} alt={category.alt} fill sizes="(max-width: 640px) 48vw, 25vw" /><div className="category-label"><strong>{category.name}</strong><span aria-hidden="true">↗</span></div></Link>)}</div>
      </ScrollReveal>
      <ScrollReveal as="section" className="section-block section-tint"><div className="page-shell">
        <div className="section-heading"><div><span className="eyebrow">A few good picks</span><h2>Worth a closer look.</h2><p>The pieces our little team keeps coming back to.</p></div><Link className="text-link" href="/shop">Shop everything <ArrowRight size={15} /></Link></div>
        <div className="product-grid reveal-stagger">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </div></ScrollReveal>
      <ScrollReveal as="section" className="story-band">
        <div className="story-image"><Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85" alt="Soft, natural materials in a calm home interior" fill sizes="(max-width: 640px) 100vw, 50vw" /></div>
        <div className="story-copy"><span className="eyebrow">Fewer, better things</span><h2>We believe the everyday deserves a little care.</h2><p>Goodform is a small shop with a simple point of view: choose useful things that are made with care, and make room for them to become part of your life.</p><Link className="text-link" href="/about">Get to know us <ArrowRight size={15} /></Link></div>
      </ScrollReveal>
      <ScrollReveal as="section" className="section-block page-shell">
        <div className="section-heading"><div><span className="eyebrow">Fresh on the shelves</span><h2>Just found, just landed.</h2></div><Link className="text-link" href="/shop?sort=newest">See new arrivals <ArrowRight size={15} /></Link></div>
        <div className="product-grid reveal-stagger">{newArrivals.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </ScrollReveal>
      <ScrollReveal as="section" className="section-block section-tint"><div className="page-shell">
        <div className="section-heading"><div><span className="eyebrow">Why goodform</span><h2>Good by design.</h2></div></div>
        <div className="reason-grid">
          <article className="reason-item"><span className="reason-number">01</span><h3>Picked with purpose</h3><p>Every piece earns its place. We look for thoughtful design, lasting materials, and details that make daily life feel easier.</p></article>
          <article className="reason-item"><span className="reason-number">02</span><h3>Made to stay</h3><p>We favor things you can use often and keep for a long time, from useful basics to small everyday upgrades.</p></article>
          <article className="reason-item"><span className="reason-number">03</span><h3>People, not algorithms</h3><p>A real small team finds every item in our edit. Have a question? A real person is happy to help.</p></article>
        </div>
      </div></ScrollReveal>
      <ScrollReveal as="section" className="newsletter-band"><div className="page-shell newsletter-inner">
        <div className="newsletter-copy"><span className="eyebrow"><Sparkles size={13} /> Notes from goodform</span><h2>A little good in your inbox.</h2><p>New finds, useful ideas, and the occasional nice note. No noise.</p></div>
        <NewsletterSignup />
      </div></ScrollReveal>
    </>
  );
}
