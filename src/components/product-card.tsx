"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Heart, Plus, ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { formatPrice, type Product } from "@/lib/products";
import { animateButtonPress, animateHeartPop } from "@/lib/gsap";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart();
  const { toggleItem, isSaved } = useWishlist();
  const [added, setAdded] = useState(false);
  const saved = isSaved(product.id);

  const discountPercent = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    animateButtonPress(e.currentTarget);
    setTimeout(() => setAdded(false), 1400);
  };

  const secondaryImage = product.gallery && product.gallery.length > 1 ? product.gallery[1] : null;

  return (
    <article className="product-card group">
      <Link className="product-image-link" href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
        <div className="product-image-wrap">
          {/* Primary image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 24vw"
            className={`product-primary-img ${secondaryImage ? "group-hover:opacity-0 transition-opacity duration-300" : ""}`}
          />

          {/* Secondary image on hover if available */}
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 24vw"
              className="product-secondary-img opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}

          {/* Badges */}
          <div className="product-badges-container">
            {product.isNew && <span className="product-badge is-new">NEW</span>}
            {discountPercent > 0 && <span className="product-badge is-sale">-{discountPercent}%</span>}
            {product.stock <= 8 && product.stock > 0 && (
              <span className="product-badge is-low-stock">Only {product.stock} left</span>
            )}
          </div>

          {/* Wishlist toggle */}
          <button
            type="button"
            className={`wishlist-toggle${saved ? " is-saved" : ""}`}
            aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
            onClick={(event) => {
              event.preventDefault();
              animateHeartPop(event.currentTarget, !saved);
              toggleItem(product);
            }}
          >
            <Heart size={16} fill={saved ? "currentColor" : "none"} />
          </button>

          {/* Quick Add Overlay on bottom of image */}
          <button
            type="button"
            className={`quick-add-btn ${added ? "is-added" : ""}`}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to bag`}
          >
            {added ? (
              <>
                <Check size={14} className="text-emerald-500" /> Added to Bag
              </>
            ) : (
              <>
                <ShoppingBag size={14} /> Quick Add
              </>
            )}
          </button>
        </div>
      </Link>

      <div className="product-card-info">
        <div className="product-card-meta">
          <span className="product-brand">{product.brand}</span>
          <span className="product-rating">
            <Star size={12} fill="#eab308" stroke="#eab308" /> {product.rating}{" "}
            <span className="text-neutral-400 font-normal">({product.reviewCount})</span>
          </span>
        </div>

        <Link className="product-name" href={`/product/${product.slug}`} title={product.name}>
          {product.name}
        </Link>

        <div className="product-card-buy">
          <div className="product-price-wrap">
            <span className="product-price">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <del className="product-compare-price">{formatPrice(product.compareAt)}</del>
            )}
          </div>

          <button
            className={`add-icon ${added ? "is-added" : ""}`}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to bag`}
          >
            {added ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
}