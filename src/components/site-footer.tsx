import Link from "next/link";
import { ShieldCheck, Truck, RefreshCw, CreditCard } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* Top trust badges row */}
      <div className="footer-trust-strip">
        <div className="page-shell footer-trust-inner">
          <div className="footer-trust-item">
            <Truck size={18} />
            <div>
              <strong>Worldwide Express Delivery</strong>
              <span>Fast DHL & FedEx air shipping</span>
            </div>
          </div>
          <div className="footer-trust-item">
            <RefreshCw size={18} />
            <div>
              <strong>30-Day Effortless Returns</strong>
              <span>Complimentary returns & exchanges</span>
            </div>
          </div>
          <div className="footer-trust-item">
            <ShieldCheck size={18} />
            <div>
              <strong>100% Secure Checkout</strong>
              <span>Encrypted SSL 256-bit protection</span>
            </div>
          </div>
          <div className="footer-trust-item">
            <CreditCard size={18} />
            <div>
              <strong>Flexible Payment Options</strong>
              <span>Visa, Mastercard, Amex, Apple Pay</span>
            </div>
          </div>
        </div>
      </div>

      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Link className="arolax-brand-logo footer-logo" href="/" aria-label="AROLAX Home">
            AROLAX
          </Link>
          <p>
            Curating timeless women&apos;s ready-to-wear, maxi dresses, fine silk silhouettes, leather accessories, and bespoke beauty essentials.
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">Pinterest</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h2>Collections</h2>
            <Link href="/category/dresses">Maxi & Slip Dresses</Link>
            <Link href="/category/tops-blouses">Tops & Sweatshirts</Link>
            <Link href="/category/pants-skirts">Pants & Denim</Link>
            <Link href="/category/shoes">Shoes & Leather Flats</Link>
            <Link href="/category/bags">Handbags & Totes</Link>
            <Link href="/category/jewelry-accessories">Jewelry & Accents</Link>
            <Link href="/category/sale">Seasonal Sale</Link>
          </div>

          <div>
            <h2>Client Care</h2>
            <Link href="/faq">Help Center & FAQ</Link>
            <Link href="/about#contact">Contact Concierge</Link>
            <Link href="/account">My Account & Orders</Link>
            <Link href="/cart">Shopping Bag</Link>
            <Link href="/wishlist">Saved Wishlist</Link>
            <Link href="/faq#shipping">Shipping & Delivery Info</Link>
            <Link href="/faq#returns">Returns & Exchanges</Link>
          </div>

          <div>
            <h2>The House</h2>
            <Link href="/about">About AROLAX</Link>
            <Link href="/about#sustainability">Sustainable Craftsmanship</Link>
            <Link href="/about#materials">Our Fabrics & Materials</Link>
            <Link href="/faq#privacy">Privacy Policy</Link>
            <Link href="/faq#terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="page-shell footer-bottom">
        <span>© 2026 AROLAX. All rights reserved.</span>
        <div className="footer-bottom-badges">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>American Express</span>
          <span>Apple Pay</span>
          <span>Google Pay</span>
        </div>
        <Link href="/" className="back-to-top-link">Back to top ↑</Link>
      </div>
    </footer>
  );
}