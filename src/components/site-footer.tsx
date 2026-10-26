import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <Link className="wordmark" href="/" aria-label="Aura Store">
            <span className="wordmark-mark" aria-hidden="true">A</span>AURA<span className="wordmark-period">.</span>
          </Link>
          <p>
            A considered edit of women&apos;s clothing, shoes, bags, accessories, and beauty.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h2>Shop Categories</h2>
            <Link href="/shop?category=Clothing">Clothing</Link>
            <Link href="/shop?category=Shoes">Shoes</Link>
            <Link href="/shop?category=Bags">Bags</Link>
            <Link href="/shop?category=Accessories">Accessories</Link>
            <Link href="/shop?category=Beauty%20%26%20Perfumes">Beauty & Perfumes</Link>
            <Link href="/category/sale">Sample sale prices</Link>
          </div>

          <div>
            <h2>Customer Care</h2>
            <Link href="/faq">Help Center & FAQ</Link>
            <Link href="/about#contact">Contact Support</Link>
            <Link href="/account">Account preview</Link>
            <Link href="/cart">Shopping Bag</Link>
            <Link href="/wishlist">Saved Wishlist</Link>
            <Link href="/faq">Shipping & returns (preview)</Link>
          </div>

          <div>
            <h2>About AURA</h2>
            <Link href="/about">About the store</Link>
            <Link href="/about">Our approach</Link>
            <Link href="/about#contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="page-shell footer-bottom">
        <span>© 2026 AURA · storefront preview</span>
        <span className="payment-badges-text">Preview storefront · live payments are not enabled</span>
        <Link href="/">Back to top ↑</Link>
      </div>
    </footer>
  );
}