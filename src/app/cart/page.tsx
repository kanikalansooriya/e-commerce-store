"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LockKeyhole, Tag, Trash2 } from "lucide-react";
import { QuantityStepper } from "@/components/quantity-stepper";
import { useCart } from "@/context/cart-context";
import { formatPrice, products } from "@/lib/products";

const shippingFor = (subtotal: number) => subtotal === 0 || subtotal >= 100 ? 0 : 8;

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, isReady } = useCart();

  if (!isReady) return <div className="page-shell cart-loading"><div className="skeleton-line" /><div className="skeleton-card" /></div>;

  return (
    <div className="page-shell checkout-shell">
      <div className="page-intro cart-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Your bag</span></nav>
        <h1>Your bag<span className="cart-title-count">{items.length ? ` (${items.length})` : ""}</span></h1>
      </div>
      {!items.length ? (
        <div className="empty-state cart-empty"><div className="empty-bag-mark">g.</div><h2>A little room for good things.</h2><p>Your bag is empty for now. Take a look around and see what feels right.</p><Link className="button-primary" href="/shop">Find something good <ArrowRight size={16} /></Link></div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Items in your bag">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <Link className="cart-item-image" href={`/product/${item.slug}`}><Image src={item.image} alt={item.name} fill sizes="120px" /></Link>
                <div className="cart-item-detail">
                  <span className="product-category">Goodform edit</span>
                  <Link className="cart-item-name" href={`/product/${item.slug}`}>{item.name}</Link>
                  <span className="cart-item-price">{formatPrice(item.price)}</span>
                  <div className="cart-item-controls">
                    <QuantityStepper value={item.quantity} label={`Quantity for ${item.name}`} onChange={(quantity) => updateQuantity(item.id, quantity)} />
                    <button className="remove-item" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name} from bag`}><Trash2 size={15} /><span>Remove</span></button>
                  </div>
                </div>
                <strong className="cart-line-total">{formatPrice(item.price * item.quantity)}</strong>
              </article>
            ))}
            <div className="promo-row">
              <label className="promo-field">
                <Tag size={14} />
                <input type="text" placeholder="Promo code" aria-label="Promo code" />
              </label>
              <button type="button" className="button-secondary promo-button">Apply</button>
            </div>
            <Link className="text-link continue-shopping" href="/shop"><ArrowLeft size={15} /> Keep looking</Link>
          </section>
          <aside className="summary-panel">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="summary-line"><span>Shipping</span><span>{shippingFor(subtotal) ? formatPrice(shippingFor(subtotal)) : "Free"}</span></div>
            {subtotal < 100 && <p className="shipping-note">You’re {formatPrice(100 - subtotal)} away from free shipping.</p>}
            <div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal + shippingFor(subtotal))}</strong></div>
            <p className="tax-note">Taxes included. Shipping calculated above.</p>
            <Link className="button-primary checkout-button" href="/checkout">Proceed to checkout <ArrowRight size={16} /></Link>
            <div className="secure-note"><LockKeyhole size={14} /> Secure, simple checkout</div>
          </aside>
        </div>
      )}
      {!items.length && (
        <div className="recommended-wrap">
          <div className="section-heading compact-heading">
            <div>
              <span className="eyebrow">A few good things</span>
              <h2>Often saved together.</h2>
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
        </div>
      )}
    </div>
  );
}