import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Link className="wordmark" href="/" aria-label="Aura Store">
            <span className="wordmark-mark" aria-hidden="true">A</span>AURA<span className="wordmark-period">.</span>
          </Link>
          <p>
            Curated women's fashion, timeless staples, and everyday essentials crafted with care and elegance.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h2>Shop Collections</h2>
            <Link href="/category/dresses">Women's Dresses</Link>
            <Link href="/category/tops-blouses">Tops & Blouses</Link>
            <Link href="/category/knitwear">Knitwear & Sweaters</Link>
            <Link href="/category/jackets-coats">Jackets & Coats</Link>
            <Link href="/category/pants-skirts">Skirts & Pants</Link>
            <Link href="/category/shoes">Shoes & Heels</Link>
            <Link href="/category/bags">Bags & Totes</Link>
            <Link href="/category/jewelry-accessories">Jewelry & Accessories</Link>
            <Link href="/category/sale">Sale & Offers</Link>
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