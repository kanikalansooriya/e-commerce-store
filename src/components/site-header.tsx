"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Heart, Menu, Settings2, ShoppingBag, UserRound, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { SettingsPanel } from "@/components/settings-panel";
import { SiteSearch } from "@/components/site-search";
import { gsap, animateBadgeBounce, isReducedMotion } from "@/lib/gsap";

const topLinks = [
  { href: "/category/dresses", label: "Dresses" },
  { href: "/category/tops-blouses", label: "Tops & Blouses" },
  { href: "/category/knitwear", label: "Knitwear" },
  { href: "/category/jackets-coats", label: "Jackets" },
  { href: "/category/pants-skirts", label: "Pants & Skirts" },
  { href: "/category/shoes", label: "Shoes" },
  { href: "/category/bags", label: "Bags" },
  { href: "/category/jewelry-accessories", label: "Jewelry" },
  { href: "/category/beauty-fragrance", label: "Beauty" },
  { href: "/category/sale", label: "Sale" },
];

const megaGroups = [
  { heading: "Dresses", items: ["Casual Dresses", "Midi Dresses", "Maxi Dresses", "Evening Dresses", "Summer Dresses"] },
  { heading: "Tops & Blouses", items: ["Blouses", "Shirts", "Knit Tops", "T-Shirts", "Camisoles"] },
  { heading: "Knitwear", items: ["Cardigans", "Cashmere Knits", "Sweaters", "Knit Vests"] },
  { heading: "Jackets & Outerwear", items: ["Tailored Blazers", "Trench Coats", "Wool Coats", "Jackets"] },
  { heading: "Pants & Skirts", items: ["Tailored Trousers", "Pleated Skirts", "Linen Pants", "Wide-Leg Pants"] },
  { heading: "Shoes & Heels", items: ["Strappy Heels", "Leather Loafers", "Ballet Flats", "Boots", "Sneakers"] },
  { heading: "Bags & Totes", items: ["Handbags", "Shoulder Bags", "Tote Bags", "Crossbody"] },
  { heading: "Jewelry & Beauty", items: ["Gold Earrings", "Pendant Necklaces", "Rings", "Perfume", "Skincare"] },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const bagBadgeRef = useRef<HTMLSpanElement>(null);
  const wishlistBadgeRef = useRef<HTMLSpanElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const previousCartCount = useRef(itemCount);
  const previousWishlistCount = useRef(wishlistCount);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP Cart badge bounce
  useEffect(() => {
    if (previousCartCount.current === itemCount) return;
    previousCartCount.current = itemCount;
    animateBadgeBounce(bagBadgeRef.current);
  }, [itemCount]);

  // GSAP Wishlist badge bounce
  useEffect(() => {
    if (previousWishlistCount.current === wishlistCount) return;
    previousWishlistCount.current = wishlistCount;
    if (wishlistBadgeRef.current) {
      animateBadgeBounce(wishlistBadgeRef.current);
    }
  }, [wishlistCount]);

  // GSAP Mega Menu entrance
  useEffect(() => {
    const el = megaMenuRef.current;
    if (!el || !shopMenuOpen || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" }
      );
    }, el);

    return () => ctx.revert();
  }, [shopMenuOpen]);

  // GSAP Mobile Nav entrance
  useEffect(() => {
    const el = mobileNavRef.current;
    if (!el || !menuOpen || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }, el);

    return () => ctx.revert();
  }, [menuOpen]);

  return (
    <>
      <div className="announcement">
        ⚡ <span>FLASH SALE:</span> Use code <strong>LUXE20</strong> for 20% off • 🚚 Free Shipping on orders over $75 • ⭐ 4.9/5 Rated
      </div>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-main page-shell">
          <button
            className="icon-button menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <Link className="wordmark" href="/" aria-label="Aura Store Home">
            <span className="wordmark-mark" aria-hidden="true">A</span>AURA<span className="wordmark-period">.</span>
          </Link>
          <SiteSearch />
          <div className="header-actions">
            <button
              className="icon-button settings-trigger"
              type="button"
              data-settings-trigger
              aria-label="Appearance settings"
              aria-haspopup="dialog"
              aria-expanded={settingsOpen}
              onClick={() => setSettingsOpen(true)}
            >
              <Settings2 size={19} />
            </button>
            <Link className="icon-button account-link" href="/account" aria-label="Your account">
              <UserRound size={20} />
            </Link>
            <Link className="icon-button wishlist-link" href="/wishlist" aria-label={`Wishlist, ${wishlistCount} items`}>
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span ref={wishlistBadgeRef} className="bag-count">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link className="icon-button bag-link" href="/cart" aria-label={`Shopping bag, ${itemCount} items`}>
              <ShoppingBag size={20} />
              <span ref={bagBadgeRef} className="bag-count">
                {itemCount}
              </span>
            </Link>
          </div>
        </div>
        <nav className="desktop-nav page-shell" aria-label="Main navigation">
          <div
            className={`shop-menu-wrap${shopMenuOpen ? " is-open" : ""}`}
            onMouseEnter={() => setShopMenuOpen(true)}
            onMouseLeave={() => setShopMenuOpen(false)}
          >
            <button
              type="button"
              className="nav-shop-trigger"
              aria-expanded={shopMenuOpen}
              aria-label="Open shop categories"
              onClick={() => setShopMenuOpen((open) => !open)}
            >
              Shop
            </button>
            <div ref={megaMenuRef} className="mega-menu" role="menu" aria-label="Shop categories">
              <div className="mega-menu-columns">
                {megaGroups.map((group) => (
                  <div key={group.heading} className="mega-menu-column">
                    <span className="mega-menu-heading">{group.heading}</span>
                    {group.items.map((item) => (
                      <Link key={item} href={`/shop?category=${encodeURIComponent(group.heading)}`} onClick={() => setShopMenuOpen(false)}>
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mega-menu-footer">
                <Link href="/shop" onClick={() => setShopMenuOpen(false)}>View all categories</Link>
                <Link href="/shop?sort=newest" onClick={() => setShopMenuOpen(false)}>New arrivals</Link>
                <Link href="/category/sale" onClick={() => setShopMenuOpen(false)}>Sale</Link>
              </div>
            </div>
          </div>
          <Link href="/shop?sort=newest" aria-current={pathname === "/shop?sort=newest" ? "page" : undefined}>
            New Arrivals
          </Link>
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-right" href="/shop">View all categories</Link>
        </nav>
        {menuOpen && (
          <nav ref={mobileNavRef} className="mobile-nav" aria-label="Mobile navigation">
            <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link href="/shop?sort=newest" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
            {topLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
            ))}
            <Link href="/shop" onClick={() => setMenuOpen(false)}>View all categories</Link>
            <Link href="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</Link>
            <Link href="/account" onClick={() => setMenuOpen(false)}>Sign in</Link>
          </nav>
        )}
      </header>
      <SettingsPanel open={settingsOpen} onClose={closeSettings} />
    </>
  );
}