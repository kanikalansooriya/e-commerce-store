import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/motion";
import { categories, getSubcategories, products } from "@/lib/products";

const categoryMap: Record<string, { label: string; description: string; image: string; subcategories: string[] }> = {
  women: {
    label: "Women's Collection",
    description: "Effortlessly elegant silhouettes, timeless staples, and pieces designed to make you feel your best.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Dresses", "Tops & Blouses", "Knitwear", "Jackets", "Shoes", "Bags", "Jewelry"],
  },
  dresses: {
    label: "Dresses",
    description: "From effortless daytime linen to radiant silk evening silhouettes.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Casual Dresses", "Midi Dresses", "Maxi Dresses", "Evening Dresses", "Summer Dresses"],
  },
  "tops-blouses": {
    label: "Tops & Blouses",
    description: "Crisp cotton button-downs, fluid silk blouses, and everyday tees.",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Blouses", "Shirts", "T-Shirts", "Knit Tops", "Camisoles"],
  },
  knitwear: {
    label: "Knitwear",
    description: "Sumptuous cashmere cardigans, relaxed crewnecks, and light transitional layers.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Cardigans", "Sweaters", "Cashmere Knits", "Vests"],
  },
  "jackets-coats": {
    label: "Jackets & Coats",
    description: "Modern tailored blazers, classic trench coats, and warm wool outwear.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Blazers", "Trench Coats", "Wool Coats", "Jackets"],
  },
  "pants-skirts": {
    label: "Pants & Skirts",
    description: "Flattering tailored trousers, fluid pleated skirts, and breathable linen bottoms.",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Trousers", "Skirts", "Linen Pants", "Wide-Leg Pants"],
  },
  shoes: {
    label: "Shoes & Heels",
    description: "Comfortable flats, timeless leather loafers, and delicate strappy heels.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Heels", "Flats", "Sandals", "Boots", "Sneakers"],
  },
  bags: {
    label: "Bags & Totes",
    description: "Full-grain leather shoulder bags, everyday carryall totes, and sleek crossbodies.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Handbags", "Shoulder Bags", "Tote Bags", "Crossbody"],
  },
  "jewelry-accessories": {
    label: "Jewelry & Accessories",
    description: "Subtle 18K gold vermeil chains, pavé earrings, and everyday finishing touches.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Earrings", "Necklaces", "Rings", "Bracelets", "Sunglasses"],
  },
  "beauty-fragrance": {
    label: "Beauty & Fragrance",
    description: "Nourishing botanical skincare, artisan eau de parfums, and calming home scents.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Perfume", "Skincare", "Bath & Body", "Candles"],
  },
  sale: {
    label: "Sale & Offers",
    description: "A curated edit of quality fashion and everyday pieces at special pricing.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Sale Highlights", "Seasonal Markdowns", "Last Chance"],
  },
  // Aliases for compatibility:
  men: {
    label: "Women's Collection",
    description: "Effortlessly elegant silhouettes and timeless staples.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Clothing", "Shoes", "Bags", "Jewelry"],
  },
  clothing: {
    label: "Clothing",
    description: "Soft layers, elevated basics, and silhouettes that move with real life.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Dresses", "Tops", "Jackets", "Knitwear"],
  },
  "bags-accessories": {
    label: "Bags & Totes",
    description: "The small details that finish the look.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Tote Bags", "Crossbody", "Handbags"],
  },
  "beauty-self-care": {
    label: "Beauty & Fragrance",
    description: "Slow rituals and well-made essentials.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Skincare", "Fragrance", "Candles"],
  },
  "home-living": {
    label: "Living & Gifts",
    description: "Objects that soften routines and warm spaces.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Candles", "Ceramics", "Throws"],
  },
  "electronics-tech": {
    label: "Lifestyle Accessories",
    description: "Thoughtful accessories that fit cleanly into modern life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Audio", "Chargers"],
  },
  audio: {
    label: "Audio & Focus",
    description: "Clear sound designed for focus and unwinding.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Headphones", "Speakers"],
  },
  "jewelry-watches": {
    label: "Jewelry",
    description: "Thoughtful finishing touches that quietly elevate the everyday.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Necklaces", "Rings", "Earrings"],
  },
  "sports-outdoors": {
    label: "Active & Movement",
    description: "Pieces made for movement and fresh air.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Fitness", "Yoga", "Accessories"],
  },
  travel: {
    label: "Travel Essentials",
    description: "Durable essentials that make journeys effortless.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Luggage", "Travel Bags"],
  },
  kids: {
    label: "Family & Gifts",
    description: "Soft, durable pieces for family routines.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Gifts", "Accessories"],
  },
  gifts: {
    label: "Gifts for Her",
    description: "Thoughtful presents for every special moment.",
    image: "https://images.unsplash.com/photo-1602872029706-8d2f1f3e3b43?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Gifts for Her", "Self-care Gifts"],
  },
  "new-arrivals": {
    label: "New Arrivals",
    description: "Freshly landed favorites with a considered edit.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1400&q=85",
    subcategories: ["Newest Finds", "Weekend Edit"],
  },
};

const categoryFilters: Record<string, {
  all?: boolean;
  category?: string;
  categories?: string[];
  subcategories?: string[];
  sale?: boolean;
  newest?: boolean;
}> = {
  women: { all: true },
  dresses: { category: "Clothing", subcategories: ["Dresses"] },
  "tops-blouses": { category: "Clothing", subcategories: ["Tops & T-Shirts", "Shirts & Blouses"] },
  knitwear: { category: "Clothing", subcategories: ["Jackets & Cardigans"] },
  "jackets-coats": { category: "Clothing", subcategories: ["Jackets & Cardigans"] },
  "pants-skirts": { category: "Clothing", subcategories: ["Jeans & Pants", "Skirts & Shorts"] },
  shoes: { category: "Shoes" },
  bags: { category: "Bags" },
  "jewelry-accessories": { category: "Accessories" },
  "beauty-fragrance": { category: "Beauty & Perfumes" },
  sale: { all: true, sale: true },
  men: {},
  clothing: { category: "Clothing" },
  "bags-accessories": { category: "Bags" },
  "beauty-self-care": { category: "Beauty & Perfumes" },
  "home-living": { category: "Beauty & Perfumes", subcategories: ["Home Fragrance"] },
  "electronics-tech": { category: "Accessories", subcategories: [] },
  audio: { category: "Accessories", subcategories: [] },
  "jewelry-watches": { category: "Accessories" },
  "sports-outdoors": { category: "Shoes", subcategories: [] },
  travel: { category: "Bags" },
  kids: {
    categories: ["Clothing", "Shoes", "Bags", "Accessories"],
    subcategories: ["Baby & Kids Clothing", "Baby & Kids Shoes", "Baby & Kids Bags", "Baby & Kids Accessories"],
  },
  gifts: {},
  "new-arrivals": { all: true, newest: true },
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  return CategoryPageInner({ params });
}

async function CategoryPageInner({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = categoryMap[slug];
  if (!data) notFound();
  const filter = categoryFilters[slug] ?? {};

  const categoryProducts = products.filter((product) => {
    const matchesCategory = filter.all ||
      (filter.categories?.includes(product.category) ?? false) ||
      product.category === filter.category;
    const matchesSubcategory = filter.subcategories === undefined || filter.subcategories.includes(product.subcategory);
    const matchesSale = !filter.sale || product.isSale;
    const matchesNew = !filter.newest || product.isNew;
    return matchesCategory && matchesSubcategory && matchesSale && matchesNew;
  });
  const featured = categoryProducts.slice(0, 4);
  const subcategoryOptions = filter.subcategories ?? (filter.category ? getSubcategories(filter.category) : []);

  function shopHref(subcategory?: string) {
    const params = new URLSearchParams();
    const category = subcategory
      ? categories.find((item) => getSubcategories(item).includes(subcategory))
      : filter.category;
    if (category) params.set("category", category);
    if (subcategory) params.set("subcategory", subcategory);
    if (filter.sale) params.set("sale", "true");
    if (filter.newest) params.set("new", "true");
    const search = params.toString();
    return search ? `/shop?${search}` : "/shop";
  }

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
            {subcategoryOptions.map((item) => (
              <Link key={item} href={shopHref(item)}>
                {item}
              </Link>
            ))}
          </div>
          <Link className="button-primary" href={shopHref()}>
            Shop {data.label} <ArrowRight size={15} />
          </Link>
        </div>
        <div className="category-hero-image">
          <Image src={data.image} alt={data.label} fill sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
      </ScrollReveal>

      {featured.length > 0 && (
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
      )}

      {categoryProducts.length > 4 && (
        <ScrollReveal as="section" className="category-full-grid">
          <div className="section-heading">
            <div>
              <span className="eyebrow">More to discover</span>
              <h2>Everything in this category.</h2>
            </div>
            <Link className="text-link" href={shopHref()}>See all products <ArrowRight size={15} /></Link>
          </div>
          <div className="product-grid reveal-stagger">
            {categoryProducts.slice(4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ScrollReveal>
      )}

      {!categoryProducts.length && (
        <div className="empty-state">
          <h2>No products in this edit yet.</h2>
          <p>Browse the available catalog or check back when this category is populated.</p>
          <Link className="button-primary" href="/shop">Browse all products <ArrowRight size={15} /></Link>
        </div>
      )}
    </div>
  );
}
