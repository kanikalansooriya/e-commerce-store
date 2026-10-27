"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CreditCard, LockKeyhole } from "lucide-react";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ScrollReveal } from "@/components/motion";
import { useCart } from "@/context/cart-context";
import { animateButtonPress } from "@/lib/gsap";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey?.startsWith("pk_test_") ? loadStripe(publishableKey) : null;
const isGitHubPagesPreview = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const formatUsd = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

export default function CheckoutPage() {
  const { items, subtotal, isReady } = useCart();
  const [delivery, setDelivery] = useState("standard");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [error, setError] = useState("");
  const [isPreparingPayment, setIsPreparingPayment] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [orderReference, setOrderReference] = useState("");
  const shipping = delivery === "express" ? 15 : subtotal >= 100 ? 0 : 8;

  async function preparePayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length || isPreparingPayment) return;
    setError("");
    if (isGitHubPagesPreview) {
      setError("Card payment is disabled in this static GitHub Pages preview.");
      return;
    }
    if (!stripePromise) {
      setError("Card payment is unavailable until Stripe test keys are configured.");
      return;
    }
    setIsPreparingPayment(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(({ slug, quantity }) => ({ slug, quantity })),
          delivery,
          customer: {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            city: formData.get("city"),
            postal: formData.get("postal"),
            country: formData.get("country"),
          },
        }),
      });
      const result: unknown = await response.json();
      if (
        !response.ok ||
        typeof result !== "object" || result === null ||
        !("clientSecret" in result) || typeof result.clientSecret !== "string" ||
        !("orderReference" in result) || typeof result.orderReference !== "string"
      ) {
        const message =
          typeof result === "object" && result !== null && "error" in result && typeof result.error === "string"
            ? result.error
            : "We couldn't prepare secure payment. Please try again.";
        throw new Error(message);
      }

      setClientSecret(result.clientSecret);
      setOrderReference(result.orderReference);
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "We couldn't prepare secure payment. Please try again.");
    } finally {
      setIsPreparingPayment(false);
    }
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
        <h1>Finalize Order.</h1><p>Enter your delivery details, then pay securely in USD through Stripe.</p>
      </ScrollReveal>
      <ScrollReveal as="div" className="checkout-reveal-wrap">
        <div className="checkout-layout">
          <div className="checkout-fields">
            <form id="checkout-details" onSubmit={preparePayment}>
            <section className="form-section">
              <div className="form-section-heading"><span>01</span><div><h2>Your details</h2><p>Where should we send your order updates?</p></div></div>
              <div className="form-grid">
                <label className="field-full">Full name<input name="name" autoComplete="name" placeholder="First and last name" required /></label>
                <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
                <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-0123" pattern="[0-9()+. -]{7,}" title="Enter a valid phone number" required /></label>
                <label className="field-full">Street address<input name="address" autoComplete="street-address" placeholder="Street and number" required /></label>
                <label>City<input name="city" autoComplete="address-level2" placeholder="City" required /></label>
                <label>ZIP / postal code<input name="postal" autoComplete="postal-code" placeholder="ZIP code" required /></label>
                <label>Country (2-letter code)<input name="country" autoComplete="country" placeholder="LK" defaultValue="LK" maxLength={2} pattern="[A-Za-z]{2}" title="Enter your two-letter country code, such as LK." required /></label>
              </div>
            </section>

            <section className="form-section">
              <div className="form-section-heading"><span>02</span><div><h2>Delivery</h2><p>Choose how quickly you’d like it to arrive.</p></div></div>
              <div className="option-list">
                <label className={`choice-row ${delivery === "standard" ? "is-selected" : ""}`}><input type="radio" name="delivery" value="standard" checked={delivery === "standard"} onChange={() => setDelivery("standard")} /><span className="choice-copy"><strong>Standard delivery</strong><small>Arrives in 3–5 business days</small></span><span>{subtotal >= 100 ? "Free" : formatUsd(8)}</span></label>
                <label className={`choice-row ${delivery === "express" ? "is-selected" : ""}`}><input type="radio" name="delivery" value="express" checked={delivery === "express"} onChange={() => setDelivery("express")} /><span className="choice-copy"><strong>Express delivery</strong><small>Arrives in 1–2 business days</small></span><span>{formatUsd(15)}</span></label>
              </div>
            </section>

            </form>

            <section className="form-section">
              <div className="form-section-heading"><span>03</span><div><h2>Payment method</h2><p>{isGitHubPagesPreview ? "This published static preview does not accept payments." : "Select how you&apos;d like to pay."}</p></div></div>
              {isGitHubPagesPreview ? (
                <p className="form-error" role="status">Checkout is a preview only on GitHub Pages. Payment processing requires the server-side Stripe route.</p>
              ) : clientSecret && stripePromise ? (
                <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: "stripe" } }}>
                  <StripePaymentForm orderReference={orderReference} />
                </Elements>
              ) : (
                <>
                  {error && <p className="form-error" role="alert">{error}</p>}
                  <div className="option-list">
                    <label className={`choice-row ${selectedPaymentMethod === "card" ? "is-selected" : ""}`}>
                      <input
                        type="radio"
                        name="payment-method"
                        value="card"
                        checked={selectedPaymentMethod === "card"}
                        onChange={() => {
                          setSelectedPaymentMethod("card");
                          setError("");
                        }}
                      />
                      <CreditCard size={18} />
                      <span className="choice-copy"><strong>Credit or debit card</strong><small>Secure card entry powered by Stripe.</small></span>
                    </label>
                  </div>
                  {selectedPaymentMethod === "card" && (
                    <button
                      className="button-primary place-order-button"
                      type="submit"
                      form="checkout-details"
                      disabled={isPreparingPayment}
                      onClick={(event) => animateButtonPress(event.currentTarget)}
                    >
                      {isPreparingPayment ? "Preparing card details…" : "Continue to card details"} <ArrowRight size={16} />
                    </button>
                  )}
                </>
              )}
            </section>
            {!isGitHubPagesPreview && <div className="secure-note checkout-secure"><LockKeyhole size={14} /> Card details are handled by Stripe. Test mode only; no real charge.</div>}
          </div>

        <aside className="summary-panel checkout-summary">
          <h2>Order Summary <span>{items.reduce((count, item) => count + item.quantity, 0)}</span></h2>
          <div className="checkout-item-list">{items.map((item) => <div className="checkout-item" key={item.id}>
            <div className="checkout-item-image"><Image src={item.image} alt={item.name} fill sizes="56px" /><span>{item.quantity}</span></div>
          <div><strong>{item.name}</strong><small>Qty {item.quantity}</small></div><span>{formatUsd(item.price * item.quantity)}</span>
          </div>)}</div>
          <div className="summary-line"><span>Subtotal</span><span>{formatUsd(subtotal)}</span></div>
          <div className="summary-line"><span>Shipping</span><span>{shipping ? formatUsd(shipping) : "Free"}</span></div>
          <div className="summary-total"><span>Total (USD)</span><strong>{formatUsd(subtotal + shipping)}</strong></div>
          <Link className="text-link edit-bag" href="/cart"><ArrowLeft size={14} /> Edit your bag</Link>
        </aside>
      </div>
    </ScrollReveal>
    </div>
  );
}

function StripePaymentForm({ orderReference }: { orderReference: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function confirmPayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!stripe || !elements || isSubmitting) return;
    setError("");
    setIsSubmitting(true);

    try {
      const returnUrl = `${window.location.origin}/success/stripe?order_reference=${encodeURIComponent(orderReference)}`;
      const result = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: { return_url: returnUrl },
      });

      if (result.error) {
        setError(result.error.message ?? "Stripe couldn't confirm the payment. Check your details and try again.");
        return;
      }

      if (result.paymentIntent?.status === "succeeded") {
        router.push(`${returnUrl}&payment_intent=${encodeURIComponent(result.paymentIntent.id)}`);
        return;
      }

      setError("The payment is still processing. Please wait and check its status before trying again.");
    } catch (paymentError) {
      setError(paymentError instanceof Error ? paymentError.message : "We couldn't confirm the payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
      <form onSubmit={confirmPayment}>
      <PaymentElement options={{ layout: "tabs", wallets: { applePay: "never", googlePay: "never", link: "never" } }} />
      {error && <p className="form-error" role="alert">{error}</p>}
      <button
        className="button-primary place-order-button"
        type="submit"
        disabled={!stripe || !elements || isSubmitting}
        onClick={(event) => animateButtonPress(event.currentTarget)}
      >
        {isSubmitting ? "Confirming payment…" : "Pay securely"} <ArrowRight size={16} />
      </button>
      </form>
  );
}