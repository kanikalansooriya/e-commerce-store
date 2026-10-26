"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CreditCard, LockKeyhole } from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { animateButtonPress } from "@/lib/gsap";

export default function CheckoutPage() {
  const { items, subtotal, clearCart, isReady } = useCart();
  const { formatPrice } = useCurrency();
  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("cod");
  const [error, setError] = useState("");
  const router = useRouter();
  const shipping = delivery === "express" ? 15 : subtotal >= 100 ? 0 : 8;

  function placeOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length) return;
    const orderId = `GF-${Date.now().toString(36).toUpperCase()}`;
    const form = new FormData(event.currentTarget);
    const order = {
      orderId,
      customer: Object.fromEntries(form.entries()),
      items,
      subtotal,
      shipping,
      total: subtotal + shipping,
      payment,
      createdAt: new Date().toISOString(),
    };

    try {
      window.sessionStorage.setItem("goodform-last-order", JSON.stringify(order));
    } catch {
      setError("We couldn't save your order details. Please try again.");
      return;
    }

    clearCart();
    router.push(`/success/${orderId}`);
  }

  if (!isReady) return <div className="page-shell checkout-loading"><div className="skeleton-line" /><div className="skeleton-card" /></div>;

  if (!items.length) {
    return (
      <div className="page-shell">
        <ScrollReveal className="empty-state checkout-empty">
          <h1>Nothing to check out yet.</h1>
          <p>Your bag is waiting for something good.</p>
          <Link className="button-primary" href="/shop">Browse the shop <ArrowRight size={16} /></Link>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="page-shell checkout-shell">
      <ScrollReveal className="page-intro checkout-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/cart">Your bag</Link><span>/</span><span aria-current="page">Checkout</span></nav>
        <h1>Almost yours.</h1><p>A few details and we’ll get your good things on their way.</p>
      </ScrollReveal>
      <ScrollReveal as="div" className="checkout-reveal-wrap">
        <form className="checkout-layout" onSubmit={placeOrder}>
          <div className="checkout-fields">
            <section className="form-section">
              <div className="form-section-heading"><span>01</span><div><h2>Your details</h2><p>Where should we send your order updates?</p></div></div>
              <div className="form-grid">
                <label className="field-full">Full name<input name="name" autoComplete="name" placeholder="First and last name" required /></label>
                <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-0123" pattern="[0-9()+. -]{7,}" title="Enter a valid phone number" required /></label>
                <label className="field-full">Street address<input name="address" autoComplete="street-address" placeholder="Street and number" required /></label>
                <label>City<input name="city" autoComplete="address-level2" placeholder="City" required /></label>
                <label>ZIP / postal code<input name="postal" autoComplete="postal-code" placeholder="ZIP code" required /></label>
              </div>
            </section>

            <section className="form-section">
              <div className="form-section-heading"><span>02</span><div><h2>Delivery</h2><p>Choose how quickly you’d like it to arrive.</p></div></div>
              <div className="option-list">
                <label className={`choice-row ${delivery === "standard" ? "is-selected" : ""}`}><input type="radio" name="delivery" value="standard" checked={delivery === "standard"} onChange={() => setDelivery("standard")} /><span className="choice-copy"><strong>Standard delivery</strong><small>Arrives in 3–5 business days</small></span><span>{subtotal >= 100 ? "Free" : formatPrice(8)}</span></label>
                <label className={`choice-row ${delivery === "express" ? "is-selected" : ""}`}><input type="radio" name="delivery" value="express" checked={delivery === "express"} onChange={() => setDelivery("express")} /><span className="choice-copy"><strong>Express delivery</strong><small>Arrives in 1–2 business days</small></span><span>{formatPrice(15)}</span></label>
              </div>
            </section>

            <section className="form-section">
              <div className="form-section-heading"><span>03</span><div><h2>Payment</h2><p>Choose a payment method for this demo order.</p></div></div>
              <div className="option-list">
                <label className={`choice-row ${payment === "cod" ? "is-selected" : ""}`}><input type="radio" name="payment" value="cod" checked={payment === "cod"} onChange={() => setPayment("cod")} /><span className="choice-copy"><strong>Cash on delivery</strong><small>Pay when your order arrives</small></span></label>
                <label className={`choice-row ${payment === "card" ? "is-selected" : ""}`}><input type="radio" name="payment" value="card" checked={payment === "card"} onChange={() => setPayment("card")} /><span className="choice-copy"><strong>Card</strong><small>Demo only · no payment will be processed</small></span><CreditCard size={18} /></label>
              </div>
            </section>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button
              className="button-primary place-order-button"
              type="submit"
              onClick={(e) => animateButtonPress(e.currentTarget)}
            >
              Place demo order <ArrowRight size={16} />
            </button>
            <div className="secure-note checkout-secure"><LockKeyhole size={14} /> Your details stay private in this demo</div>
          </div>

        <aside className="summary-panel checkout-summary">
          <h2>Your good things <span>{items.reduce((count, item) => count + item.quantity, 0)}</span></h2>
          <div className="checkout-item-list">{items.map((item) => <div className="checkout-item" key={item.id}>
            <div className="checkout-item-image"><Image src={item.image} alt={item.name} fill sizes="56px" /><span>{item.quantity}</span></div>
            <div><strong>{item.name}</strong><small>Qty {item.quantity}</small></div><span>{formatPrice(item.price * item.quantity)}</span>
          </div>)}</div>
          <div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-line"><span>Shipping</span><span>{shipping ? formatPrice(shipping) : "Free"}</span></div>
          <div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal + shipping)}</strong></div>
          <Link className="text-link edit-bag" href="/cart"><ArrowLeft size={14} /> Edit your bag</Link>
        </aside>
      </form>
    </ScrollReveal>
    </div>
  );
}