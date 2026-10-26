"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Heart, ShieldCheck, Truck } from "lucide-react";
import { useCurrency } from "@/context/currency-context";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { QuantityStepper } from "@/components/quantity-stepper";
import { animateButtonPress, animateHeartPop } from "@/lib/gsap";

export function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();
  const { toggleItem, isSaved } = useWishlist();
  const router = useRouter();
  const saved = isSaved(product.id);

  return (
    <div className="purchase-panel">
      <div className="detail-category">{product.category} <span aria-hidden="true">/</span> AURA edit</div>
      <h1>{product.name}</h1>
      <div className="detail-rating"><span className="stars">★★★★★</span> {product.rating} <span>({product.reviewCount} considered reviews)</span></div>
      <div className="detail-price-row">
        <strong>{formatPrice(product.price)}</strong>
        {product.compareAt && <><del>{formatPrice(product.compareAt)}</del><span className="save-label">A little less</span></>}
      </div>
      <p className="detail-description">{product.description}</p>
      <div className="purchase-availability">{product.stock < 1 ? "Out of stock" : product.availability}</div>
      <div className="purchase-controls">
        <QuantityStepper value={quantity} max={product.stock} onChange={setQuantity} />
        <button
          className="button-primary purchase-add"
          disabled={product.stock < 1}
          onClick={(e) => {
            animateButtonPress(e.currentTarget);
            addItem(product, quantity);
          }}
        >
          {product.stock < 1 ? "Out of stock" : "Add to bag"} <ArrowRight size={16} />
        </button>
      </div>
      <div className="detail-actions">
        <button
          className="button-secondary purchase-buy"
          disabled={product.stock < 1}
          onClick={(e) => {
            animateButtonPress(e.currentTarget);
            addItem(product, quantity);
            router.push("/checkout");
          }}
        >
          Buy now
        </button>
        <button
          type="button"
          className={`wishlist-detail-toggle${saved ? " is-saved" : ""}`}
          onClick={(e) => {
            animateHeartPop(e.currentTarget, !saved);
            toggleItem(product);
          }}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        >
          <Heart size={15} fill={saved ? "currentColor" : "none"} />
          {saved ? "Saved" : "Wishlist"}
        </button>
      </div>
      <div className="product-promises">
        <div><Truck size={17} /> Free shipping over {formatPrice(100)}</div>
        <div><ShieldCheck size={17} /> Easy 30-day returns</div>
      </div>
    </div>
  );
}