import Link from "next/link";
import { ArrowUpRight, Lock, ShieldCheck, Truck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Link className="wordmark" href="/" aria-label="Aura Store">
            <span className="wordmark-mark" aria-hidden="true">A</span>AURA<span className="wordmark-period">.</span>
          </Link>
          <p>
            Considered lifestyle essentials, precision sound, tailored apparel, and modern living objects crafted to endure.
          </p>
          <div className="footer-trust-notes">
            <span><Lock size={13} /> 256-Bit SSL Encrypted Checkout</span>
            <span><ShieldCheck size={13} /> Authenticity Guaranteed</span>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h2>Shop Departments</h2>
            <Link href="/category/women">Women's Fashion</Link>
            <Link href="/category/men">Men's Apparel</Link>
            <Link href="/category/shoes">Footwear & Sneakers</Link>
            <Link href="/category/electronics-tech">Audio & Tech</Link>
            <Link href="/category/jewelry-watches">Watches & Fine Jewelry</Link>
            <Link href="/category/home-living">Home & Decor</Link>
            <Link href="/category/sale">Flash Sale & Deals</Link>
          </div>

          <div>
            <h2>Customer Care</h2>
            <Link href="/faq">Help Center & FAQ</Link>
            <Link href="/about#contact">Contact Support</Link>
            <Link href="/account">Order Tracking</Link>
            <Link href="/cart">Shopping Bag</Link>
            <Link href="/wishlist">Saved Wishlist</Link>
            <Link href="/about">Shipping & Global Delivery</Link>
          </div>

          <div>
            <h2>Company & Press</h2>
            <Link href="/about">About Aura Studio</Link>
            <Link href="/about#sustainability">Ethical Sourcing</Link>
            <Link href="/about#careers">Careers</Link>
            <a className="footer-social" href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram @aura.store <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="page-shell footer-bottom">
        <span>© 2026 AURA Commerce Inc. All rights reserved.</span>
        <span className="payment-badges-text">
          Accepting: VISA • MASTERCARD • AMEX • APPLE PAY • GOOGLE PAY • PAYPAL
        </span>
        <Link href="/">Back to top ↑</Link>
      </div>
    </footer>
  );
}