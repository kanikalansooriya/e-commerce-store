"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/motion";
import { useWishlist } from "@/context/wishlist-context";

export function WishlistExperience() {
  const { items, isReady, removeItem } = useWishlist();

  if (!isReady) {
    return (
      <div className="page-shell wishlist-shell">
        <div className="page-intro">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Wishlist</span>
          </nav>
        </div>
        <div className="skeleton-card" style={{ maxWidth: 220, minHeight: 24 }} />
      </div>
    );
  }

  return (
    <div className="page-shell wishlist-shell">
      <div className="page-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Wishlist</span>
        </nav>
        <div className="wishlist-header">
          <div>
            <span className="eyebrow">Saved for later</span>
            <h1>Your wishlist.</h1>
          </div>
          <Link className="button-secondary" href="/shop">Continue shopping</Link>
        </div>
      </div>

      {items.length ? (
        <ScrollReveal className="product-grid wishlist-grid reveal-stagger">
          {items.map((product) => (
            <div key={product.id} className="wishlist-item-card">
              <ProductCard product={product} />
              <button className="wishlist-remove" type="button" onClick={() => removeItem(product.id)}>
                <Heart size={15} fill="currentColor" /> Remove
              </button>
            </div>
          ))}
        </ScrollReveal>
      ) : (
        <div className="empty-state wishlist-empty">
          <div className="empty-bag-mark"><Heart size={28} fill="currentColor" /></div>
          <h2>Your wishlist is empty.</h2>
          <p>Save the pieces you love most and come back to them whenever you’re ready.</p>
          <Link className="button-primary" href="/shop">Browse the edit</Link>
        </div>
      )}
    </div>
  );
}
