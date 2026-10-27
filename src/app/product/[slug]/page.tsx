import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { ProductPurchase } from "@/components/product-purchase";
import { ScrollReveal } from "@/components/motion";
import { getProduct, getRelatedProducts, products } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <div className="page-shell">
      <nav className="breadcrumbs product-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><Link href={`/shop?category=${encodeURIComponent(product.category)}`}>{product.category}</Link><span>/</span><span aria-current="page">{product.name}</span>
      </nav>
      <ScrollReveal as="section" className="product-detail-layout">
        <ProductGallery product={product} />
        <ProductPurchase product={product} />
      </ScrollReveal>
      <ScrollReveal as="section" className="product-story-row">
        <div><span className="eyebrow">A little more about it</span><h2>Thought through,<br />right down to the details.</h2></div>
        <p>{product.description} We choose pieces that are a pleasure to use, simple to care for, and made with the kind of detail you notice over time.</p>
      </ScrollReveal>
      <ScrollReveal as="section" className="section-block related-section">
        <div className="section-heading"><div><span className="eyebrow">Good company</span><h2>More to make a day.</h2></div><Link className="text-link" href="/shop">Shop all <ArrowRight size={15} /></Link></div>
        <div className="product-grid reveal-stagger">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div>
      </ScrollReveal>
    </div>
  );
}