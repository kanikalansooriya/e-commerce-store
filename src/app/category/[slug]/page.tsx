import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/motion";
import { products } from "@/lib/products";

const categoryMap: Record<string, { label: string; description: string; image: string; subcategories: string[] }> = {
  women: {
    label: "Women",
    description: "Quiet confidence, considered layers, and pieces that feel as good as they look.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Clothing", "Shoes", "Bags", "Accessories", "Jewelry"],
  },
  men: {
    label: "Men",
    description: "Modern essentials built for everyday ease, sharp silhouettes, and less fuss.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Clothing", "Shoes", "Bags", "Accessories", "Watches"],
  },
  clothing: {
    label: "Clothing",
    description: "Soft layers, elevated basics, and silhouettes that move with the rhythm of real life.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["T-Shirts", "Shirts", "Dresses", "Tops", "Bottoms", "Jackets", "Knitwear", "Activewear"],
  },
  shoes: {
    label: "Shoes",
    description: "Comfortable soles, refined finishes, and everyday pairs that feel easy to live in.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Sneakers", "Casual", "Formal", "Sandals", "Boots"],
  },
  "bags-accessories": {
    label: "Bags & Accessories",
    description: "The small details that finish the look and make daily routines feel more put together.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Tote Bags", "Backpacks", "Crossbody Bags", "Wallets", "Belts", "Sunglasses", "Hats"],
  },
  "beauty-self-care": {
    label: "Beauty & Self-care",
    description: "Slow rituals and well-made essentials that support comfort, rest, and everyday glow.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Skincare", "Haircare", "Body Care", "Fragrance", "Wellness", "Bath & Body"],
  },
  "home-living": {
    label: "Home & Living",
    description: "Objects that soften routines, warm spaces, and make the home feel more personal.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Decor", "Lighting", "Furniture", "Kitchen & Dining", "Storage", "Bedding", "Candles"],
  },
  "electronics-tech": {
    label: "Electronics & Tech",
    description: "Useful tools and beautifully designed accessories that fit more calmly into modern life.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Gadgets", "Accessories", "Chargers & Cables", "Smart Devices", "Desk Setup"],
  },
  audio: {
    label: "Audio",
    description: "Clear, calming sound designed for focus, movement, and unwinding at home.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Headphones", "Earbuds", "Speakers", "Audio Accessories"],
  },
  "jewelry-watches": {
    label: "Jewelry & Watches",
    description: "Thoughtful finishing touches that quietly elevate the everyday uniform.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Necklaces", "Rings", "Bracelets", "Earrings", "Watches"],
  },
  "sports-outdoors": {
    label: "Sports & Outdoors",
    description: "Purposeful performance layers and gear made for movement, fresh air, and everyday momentum.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Fitness", "Running", "Yoga", "Outdoor", "Accessories"],
  },
  travel: {
    label: "Travel",
    description: "Organized, durable essentials that make going out and being away feel a little lighter.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Luggage", "Travel Bags", "Travel Accessories", "Organizers"],
  },
  kids: {
    label: "Kids",
    description: "Soft, durable pieces for growing routines, playtime, and the everyday rhythm of family life.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Clothing", "Toys", "School", "Baby", "Accessories"],
  },
  gifts: {
    label: "Gifts",
    description: "Thoughtful presents for every occasion, from quiet home rituals to practical everyday favorites.",
    image: "https://images.unsplash.com/photo-1602872029706-8d2f1f3e3b43?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Gifts for Her", "Gifts for Him", "Home Gifts", "Tech Gifts", "Self-care Gifts"],
  },
  "new-arrivals": {
    label: "New Arrivals",
    description: "Freshly landed favorites with a considered edit of the latest pieces worth discovering.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Newest Finds", "Weekend Edit", "Limited Run", "Softer Layers"],
  },
  sale: {
    label: "Sale",
    description: "A smarter edit of quality essentials and everyday pieces at a more approachable price point.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Under $75", "Last Chance", "Home Finds", "Accessories"],
  },
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  return CategoryPageInner({ params });
}

async function CategoryPageInner({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = categoryMap[slug];
  if (!data) notFound();

  const categoryProducts = (() => {
    if (slug === "sale") return products.filter((p) => p.isSale);
    if (slug === "new-arrivals") return products.filter((p) => p.isNew);
    const direct = products.filter(
      (product) =>
        product.category === data.label ||
        product.category.toLowerCase().includes(data.label.toLowerCase()) ||
        data.subcategories.some(
          (sub) =>
            product.subcategory.toLowerCase().includes(sub.toLowerCase()) ||
            product.category.toLowerCase().includes(sub.toLowerCase())
        )
    );
    if (direct.length > 0) return direct;
    return products.slice(0, 8);
  })();
  const featured = categoryProducts.slice(0, 4);

  return (
    <div className="page-shell category-shell">
      <div className="page-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/shop">Shop</Link>
          <span>/</span>
          <span aria-current="page">{data.label}</span>
        </nav>
      </div>

      <ScrollReveal as="section" className="category-hero">
        <div className="category-hero-copy">
          <span className="eyebrow">Category edit</span>
          <h1>{data.label}</h1>
          <p>{data.description}</p>
          <div className="category-subnav" aria-label={`${data.label} subcategories`}>
            {data.subcategories.map((item) => (
              <Link key={item} href={`/shop?category=${encodeURIComponent(data.label)}`}>
                {item}
              </Link>
            ))}
          </div>
          <Link className="button-primary" href={`/shop?category=${encodeURIComponent(data.label)}`}>
            Shop {data.label} <ArrowRight size={15} />
          </Link>
        </div>
        <div className="category-hero-image">
          <Image src={data.image} alt={data.label} fill sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="section-block category-featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured</span>
            <h2>Picked for this edit.</h2>
          </div>
        </div>
        <div className="product-grid reveal-stagger">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="category-full-grid">
        <div className="section-heading">
          <div>
            <span className="eyebrow">More to discover</span>
            <h2>Everything in this category.</h2>
          </div>
          <Link className="text-link" href="/shop">See all products <ArrowRight size={15} /></Link>
        </div>
        <div className="product-grid reveal-stagger">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
