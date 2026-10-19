"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Plus, Star } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart();
  const { toggleItem, isSaved } = useWishlist();
  const saved = isSaved(product.id);

  return (
    <article className="product-card">
      <Link className="product-image-link" href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
        <div className="product-image-wrap">
            <Image src={product.image} alt={product.name} fill priority={priority} sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 24vw" />
          {product.isNew && <span className="product-badge">New</span>}
          {product.compareAt && <span className="product-badge is-sale">Sale</span>}
          <button
            type="button"
            className={`wishlist-toggle${saved ? " is-saved" : ""}`}
            aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
            onClick={(event) => {
              event.preventDefault();
              toggleItem(product);
            }}
          >
            <Heart size={15} fill={saved ? "currentColor" : "none"} />
          </button>
          <span className="product-view" aria-hidden="true"><ArrowUpRight size={16} /></span>
        </div>
      </Link>
      <div className="product-card-info">
        <div>
          <span className="product-category">{product.category}</span>
          <Link className="product-name" href={`/product/${product.slug}`}>{product.name}</Link>
          <span className="product-rating"><Star size={13} fill="currentColor" /> {product.rating} <span>({product.reviewCount})</span></span>
        </div>
        <div className="product-card-buy">
          <span className="product-price-wrap"><span className="product-price">{formatPrice(product.price)}</span>{product.compareAt && <del className="product-compare-price">{formatPrice(product.compareAt)}</del>}</span>
          <button className="add-icon" onClick={() => addItem(product)} aria-label={`Add ${product.name} to bag`}>
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}