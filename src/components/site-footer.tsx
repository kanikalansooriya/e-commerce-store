import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Link className="wordmark" href="/"><span className="wordmark-mark" aria-hidden="true">g</span>goodform<span className="wordmark-period">.</span></Link>
          <p>Useful things, made to stay.<br />A small edit for everyday living.</p>
        </div>
        <div className="footer-links">
          <div><h2>Explore</h2><Link href="/shop">Shop everything</Link><Link href="/shop?sort=newest">New arrivals</Link><Link href="/about">Our story</Link><Link href="/wishlist">Wishlist</Link></div>
          <div><h2>Here to help</h2><Link href="/faq">FAQ</Link><Link href="/about#contact">Contact us</Link><Link href="/account">Your account</Link><Link href="/cart">Your bag</Link></div>
          <a className="footer-social" href="https://instagram.com" target="_blank" rel="noreferrer">Follow along <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="page-shell footer-bottom"><span>© 2026 goodform goods</span><span>Thoughtfully picked. Happily kept.</span><Link href="/">Back to top ↑</Link></div>
    </footer>
  );
}