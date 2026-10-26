"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, LockKeyhole, ShoppingBag, Tag, Trash2, Check } from "lucide-react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { ScrollReveal } from "@/components/motion";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { products } from "@/lib/products";
import { animateButtonPress } from "@/lib/gsap";

const shippingFor = (subtotal: number) => (subtotal === 0 || subtotal >= 150 ? 0 : 12);

export default function CartPage() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, isReady } = useCart();
  const { formatPrice } = useCurrency();
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");

  if (!isReady) {
    return (
      <div className="page-shell cart-loading">
        <div className="skeleton-line" />
        <div className="skeleton-card" />
      </div>
    );
  }

  const handleApplyPromo = () => {
    const clean = promoCode.trim().toUpperCase();
    if (clean === "SUMMER20" || clean === "AROLAX20") {
      setDiscountPercent(20);
      setPromoMessage("20% Summer Sale discount applied!");
    } else if (clean) {
      setDiscountPercent(15);
      setPromoMessage("15% Welcome VIP discount applied!");
    }
  };

  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingAmount = shippingFor(subtotal);
  const total = Math.max(0, subtotal - discountAmount + shippingAmount);

  return (
    <div className="page-shell checkout-shell">
      <div className="page-intro cart-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Your Shopping Bag</span>
        </nav>
        <h1>
          Your Shopping Bag
          <span className="cart-title-count">{itemCount ? ` (${itemCount})` : ""}</span>
        </h1>
      </div>

      {!items.length ? (
        <ScrollReveal className="empty-state cart-empty">
          <div className="empty-bag-mark">
            <ShoppingBag size={24} />
          </div>
          <h2>Your shopping bag is empty.</h2>
          <p>Explore our latest arrivals, stunning maxi dresses, and signature collections.</p>
          <Link className="button-primary" href="/shop">
            Explore Collections <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      ) : (
        <ScrollReveal className="cart-layout">
          <section className="cart-items" aria-label="Items in your shopping bag">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <Link className="cart-item-image" href={`/product/${item.slug}`}>
                  <Image src={item.image} alt={item.name} fill sizes="120px" />
                </Link>
                <div className="cart-item-detail">
                  <span className="product-category">AROLAX Collection</span>
                  <Link className="cart-item-name" href={`/product/${item.slug}`}>
                    {item.name}
                  </Link>
                  <span className="cart-item-price">{formatPrice(item.price)}</span>
                  <div className="cart-item-controls">
                    <QuantityStepper
                      value={item.quantity}
                      max={item.stock}
                      label={`Quantity for ${item.name}`}
                      onChange={(quantity) => updateQuantity(item.id, quantity)}
                    />
                    <button
                      className="remove-item"
                      onClick={(e) => {
                        animateButtonPress(e.currentTarget);
                        removeItem(item.id);
                      }}
                      aria-label={`Remove ${item.name} from bag`}
                    >
                      <Trash2 size={15} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                <strong className="cart-line-total">{formatPrice(item.price * item.quantity)}</strong>
              </article>
            ))}

            <div className="promo-row">
              <label className="promo-field">
                <Tag size={14} />
                <input
                  type="text"
                  placeholder="Enter code (e.g. SUMMER20)"
                  aria-label="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </label>
              <button
                type="button"
                className="button-secondary promo-button"
                onClick={handleApplyPromo}
              >
                Apply
              </button>
            </div>
            {promoMessage && (
              <p className="text-xs text-emerald-600 font-semibold mt-1">
                <Check size={13} className="inline mr-1" />
                {promoMessage}
              </p>
            )}

            <Link className="text-link continue-shopping" href="/shop">
              <ArrowLeft size={15} /> Continue Shopping
            </Link>
          </section>

          <aside className="summary-panel">
            <h2>Order summary</h2>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="summary-line text-emerald-600 font-semibold">
                <span>Discount ({discountPercent}%)</span>
                <span>-{formatPrice(discountAmount)}</span>
              </div>
            )}
            <div className="summary-line">
              <span>Express Delivery</span>
              <span>{shippingAmount ? formatPrice(shippingAmount) : "Free"}</span>
            </div>
            {subtotal < 150 && (
              <p className="shipping-note">
                Add {formatPrice(150 - subtotal)} more to qualify for complimentary express delivery.
              </p>
            )}
            <div className="summary-total">
              <span>Estimated Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <p className="tax-note">All duties &amp; local taxes included in total.</p>
            <Link className="button-primary checkout-button" href="/checkout">
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
            <div className="secure-note">
              <LockKeyhole size={14} /> 256-Bit Encrypted Secure Checkout
            </div>
          </aside>
        </ScrollReveal>
      )}

      {!items.length && (
        <ScrollReveal className="recommended-wrap">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">CURATED RECOMMENDATIONS</span>
              <h2>Pairs Well Together</h2>
            </div>
          </div>
          <div className="recommended-list">
            {products.slice(0, 3).map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="recommended-item">
                <Image src={product.image} alt={product.name} width={88} height={100} />
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatPrice(product.price)}</span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}