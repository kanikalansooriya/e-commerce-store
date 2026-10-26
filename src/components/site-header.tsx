"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Heart, Menu, Settings2, ShoppingBag, UserRound, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { useCurrency } from "@/context/currency-context";
import { SettingsPanel } from "@/components/settings-panel";
import { SiteSearch } from "@/components/site-search";
import { categories } from "@/lib/products";
import { gsap, animateBadgeBounce, isReducedMotion } from "@/lib/gsap";

const topLinks = [
  ...categories.map((category) => ({
    href: `/shop?category=${encodeURIComponent(category)}`,
    label: category,
  })),
];

type CurrencySwitchProps = {
  currency: "LKR" | "USD";
  setCurrency: (currency: "LKR" | "USD") => void;
  rateStatus: "updating" | "live" | "cached" | "fallback";
  usdToLkr: number;
  className: string;
};

function CurrencySwitch({ currency, setCurrency, rateStatus, usdToLkr, className }: CurrencySwitchProps) {
  return (
    <div className={className}>
      <div className="currency-switch" role="group" aria-label="Display currency">
        <button type="button" aria-pressed={currency === "LKR"} onClick={() => setCurrency("LKR")}>LKR</button>
        <button type="button" aria-pressed={currency === "USD"} onClick={() => setCurrency("USD")}>USD</button>
      </div>
      {rateStatus !== "live" && (
        <span className="currency-rate-status" role="status" aria-live="polite">
          {rateStatus === "updating"
            ? "Updating exchange rate…"
            : rateStatus === "cached"
              ? "Live rate unavailable · saved rate in use"
              : `Live rate unavailable · using Rs. ${Math.round(usdToLkr)} per USD`}
        </span>
      )}
    </div>
  );
}

export function SiteHeader() {
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { currency, setCurrency, rateStatus, usdToLkr } = useCurrency();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const bagBadgeRef = useRef<HTMLSpanElement>(null);
  const wishlistBadgeRef = useRef<HTMLSpanElement>(null);
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
        Storefront preview • Sample catalog and availability • No live orders or payments
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
            <CurrencySwitch currency={currency} setCurrency={setCurrency} rateStatus={rateStatus} usdToLkr={usdToLkr} className="currency-control" />
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
        <nav className="category-nav page-shell" aria-label="Shop by category">
          {categories.map((category) => (
            <Link key={category} href={`/shop?category=${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </nav>
        {menuOpen && (
          <nav ref={mobileNavRef} className="mobile-nav" aria-label="Mobile navigation">
            <CurrencySwitch currency={currency} setCurrency={setCurrency} rateStatus={rateStatus} usdToLkr={usdToLkr} className="mobile-currency-control" />
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