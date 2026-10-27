"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Heart, Menu, Search, Settings2, ShoppingBag, UserRound, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { useCurrency } from "@/context/currency-context";
import { SettingsPanel } from "@/components/settings-panel";
import { SiteSearch } from "@/components/site-search";
import { gsap, animateBadgeBounce, isReducedMotion } from "@/lib/gsap";

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
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { currency, setCurrency, rateStatus, usdToLkr } = useCurrency();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isShopActive = pathname === "/shop";
  const isDressesActive = pathname === "/category/dresses";
  const isTopsActive = pathname === "/category/tops-blouses";
  const isBottomsActive = pathname === "/category/pants-skirts";
  const isSaleActive = pathname === "/category/sale";
  const isAboutActive = pathname === "/about" || pathname === "/faq";

  const bagBadgeRef = useRef<HTMLSpanElement>(null);
  const wishlistBadgeRef = useRef<HTMLSpanElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const previousCartCount = useRef(itemCount);
  const previousWishlistCount = useRef(wishlistCount);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      {/* Top Scrolling Marquee Announcement Bar */}
      <div className="arolax-top-ticker" aria-label="Store Announcements">
        <div className="arolax-ticker-track">
          <div className="arolax-ticker-content">
            <span>Summer Sale: Get 20% Off – Shop Now</span>
            <span className="ticker-sparkle">✦</span>
            <span>Free Express Worldwide Delivery on Orders Over $150</span>
            <span className="ticker-sparkle">✦</span>
            <span>Summer Sale: Get 20% Off – Shop Now</span>
            <span className="ticker-sparkle">✦</span>
            <span>Limited Edition Atelier Collection Just Dropped</span>
            <span className="ticker-sparkle">✦</span>
            <span>Summer Sale: Get 20% Off – Shop Now</span>
            <span className="ticker-sparkle">✦</span>
            <span>Complimentary 30-Day Hassle-Free Returns</span>
            <span className="ticker-sparkle">✦</span>
          </div>
          <div className="arolax-ticker-content" aria-hidden="true">
            <span>Summer Sale: Get 20% Off – Shop Now</span>
            <span className="ticker-sparkle">✦</span>
            <span>Free Express Worldwide Delivery on Orders Over $150</span>
            <span className="ticker-sparkle">✦</span>
            <span>Summer Sale: Get 20% Off – Shop Now</span>
            <span className="ticker-sparkle">✦</span>
            <span>Limited Edition Atelier Collection Just Dropped</span>
            <span className="ticker-sparkle">✦</span>
            <span>Summer Sale: Get 20% Off – Shop Now</span>
            <span className="ticker-sparkle">✦</span>
            <span>Complimentary 30-Day Hassle-Free Returns</span>
            <span className="ticker-sparkle">✦</span>
          </div>
        </div>
      </div>

      <header className={`arolax-site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="arolax-header-main page-shell">
          {/* Mobile Hamburger Button */}
          <button
            className="icon-button menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Clean Luxury Wordmark Logo */}
          <Link className="arolax-brand-logo" href="/" aria-label="AROLAX Home">
            AROLAX
          </Link>

          {/* Desktop Center Navigation Bar with Active Highlights */}
          <nav className="arolax-desktop-nav" aria-label="Main Navigation">
            <div className="arolax-nav-item has-dropdown">
              <Link
                href="/shop"
                className={`arolax-nav-link ${isShopActive ? "is-active" : ""}`}
                aria-current={isShopActive ? "page" : undefined}
              >
                Shop <ChevronDown size={13} className="nav-chevron" />
              </Link>
              <div className="arolax-nav-dropdown">
                <Link href="/category/dresses">Dresses & Evening</Link>
                <Link href="/category/tops-blouses">Tops & Blouses</Link>
                <Link href="/category/pants-skirts">Pants & Bottoms</Link>
                <Link href="/category/shoes">Shoes & Heels</Link>
                <Link href="/category/bags">Bags & Totes</Link>
                <Link href="/category/jewelry-accessories">Jewelry & Accessories</Link>
                <Link href="/category/beauty-fragrance">Beauty & Fragrance</Link>
                <div className="dropdown-divider" />
                <Link href="/shop" className="dropdown-all-link">View All Products →</Link>
              </div>
            </div>

            <Link
              href="/category/dresses"
              className={`arolax-nav-link ${isDressesActive ? "is-active" : ""}`}
              aria-current={isDressesActive ? "page" : undefined}
            >
              Dresses
            </Link>

            <div className="arolax-nav-item has-dropdown">
              <Link
                href="/category/tops-blouses"
                className={`arolax-nav-link ${isTopsActive ? "is-active" : ""}`}
                aria-current={isTopsActive ? "page" : undefined}
              >
                Tops <ChevronDown size={13} className="nav-chevron" />
              </Link>
              <div className="arolax-nav-dropdown">
                <Link href="/shop?subcategory=Tops%20%26%20T-Shirts">Tops & T-Shirts</Link>
                <Link href="/shop?subcategory=Shirts%20%26%20Blouses">Shirts & Blouses</Link>
                <Link href="/shop?subcategory=Jackets%20%26%20Cardigans">Sweatshirts & Cardigans</Link>
              </div>
            </div>

            <div className="arolax-nav-item has-dropdown">
              <Link
                href="/category/pants-skirts"
                className={`arolax-nav-link ${isBottomsActive ? "is-active" : ""}`}
                aria-current={isBottomsActive ? "page" : undefined}
              >
                Bottoms <ChevronDown size={13} className="nav-chevron" />
              </Link>
              <div className="arolax-nav-dropdown">
                <Link href="/shop?subcategory=Jeans%20%26%20Pants">Jeans & Denim</Link>
                <Link href="/shop?subcategory=Skirts%20%26%20Shorts">Skirts & Shorts</Link>
              </div>
            </div>

            <div className="arolax-nav-item has-dropdown">
              <Link href="/shop?category=Clothing" className="arolax-nav-link">
                Intimates <ChevronDown size={13} className="nav-chevron" />
              </Link>
              <div className="arolax-nav-dropdown">
                <Link href="/shop?subcategory=Matching%20Sets">Matching Sets</Link>
                <Link href="/shop?subcategory=Sleepwear%20%26%20Loungewear">Loungewear & Slips</Link>
              </div>
            </div>

            <Link
              href="/category/sale"
              className={`arolax-nav-link arolax-sale-link ${isSaleActive ? "is-active" : ""}`}
              aria-current={isSaleActive ? "page" : undefined}
            >
              Sale
            </Link>

            <div className="arolax-nav-item has-dropdown">
              <Link
                href="/about"
                className={`arolax-nav-link ${isAboutActive ? "is-active" : ""}`}
                aria-current={isAboutActive ? "page" : undefined}
              >
                About <ChevronDown size={13} className="nav-chevron" />
              </Link>
              <div className="arolax-nav-dropdown">
                <Link href="/about">About AROLAX</Link>
                <Link href="/faq">Client FAQ & Help</Link>
                <Link href="/about#contact">Contact & Concierge</Link>
              </div>
            </div>
          </nav>

          {/* Right Action Icons: Currency Switcher, Login, Search, Wishlist, Cart, Settings */}
          <div className="arolax-header-actions">
            {/* LKR / USD Instant Converter Switch in Header */}
            <CurrencySwitch
              currency={currency}
              setCurrency={setCurrency}
              rateStatus={rateStatus}
              usdToLkr={usdToLkr}
              className="arolax-header-currency-switch"
            />

            {/* Login Link with Icon + Text */}
            <Link className="arolax-login-btn" href="/account" aria-label="Account Login">
              <UserRound size={18} />
              <span className="login-text">Login</span>
            </Link>

            {/* Search Trigger Button */}
            <button
              className="icon-button arolax-search-trigger"
              type="button"
              aria-label="Search collection"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search size={19} />
            </button>

            {/* Wishlist Link with Badge */}
            <Link
              className="icon-button arolax-wishlist-btn"
              href="/wishlist"
              aria-label={`Wishlist, ${wishlistCount} items`}
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span ref={wishlistBadgeRef} className="bag-count">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Bag Link with Badge */}
            <Link
              className="icon-button arolax-cart-btn"
              href="/cart"
              aria-label={`Shopping bag, ${itemCount} items`}
            >
              <ShoppingBag size={19} />
              <span ref={bagBadgeRef} className="arolax-cart-count">
                {itemCount}
              </span>
            </Link>

            {/* Appearance Settings Trigger */}
            <button
              className="icon-button settings-trigger"
              type="button"
              data-settings-trigger
              aria-label="Appearance settings"
              aria-haspopup="dialog"
              aria-expanded={settingsOpen}
              onClick={() => setSettingsOpen(true)}
            >
              <Settings2 size={18} />
            </button>
          </div>
        </div>

        {/* Search Bar Drawer / Dropdown when Search Icon Clicked */}
        {searchOpen && (
          <div className="arolax-search-dropdown-bar page-shell">
            <SiteSearch />
            <button
              type="button"
              className="icon-button close-search-btn"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
        )}

        {/* Mobile Navigation Menu Drawer */}
        {menuOpen && (
          <nav ref={mobileNavRef} className="arolax-mobile-nav" aria-label="Mobile navigation">
            <div className="mobile-search-section">
              <SiteSearch />
            </div>
            <CurrencySwitch
              currency={currency}
              setCurrency={setCurrency}
              rateStatus={rateStatus}
              usdToLkr={usdToLkr}
              className="mobile-currency-control"
            />
            <div className="mobile-links-list">
              <Link href="/shop" className={isShopActive ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Shop All</Link>
              <Link href="/category/dresses" className={isDressesActive ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Dresses</Link>
              <Link href="/category/tops-blouses" className={isTopsActive ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Tops & Blouses</Link>
              <Link href="/category/pants-skirts" className={isBottomsActive ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Bottoms & Pants</Link>
              <Link href="/shop?subcategory=Matching%20Sets" onClick={() => setMenuOpen(false)}>Intimates & Sets</Link>
              <Link href="/category/shoes" onClick={() => setMenuOpen(false)}>Shoes & Heels</Link>
              <Link href="/category/bags" onClick={() => setMenuOpen(false)}>Bags & Totes</Link>
              <Link href="/category/jewelry-accessories" onClick={() => setMenuOpen(false)}>Jewelry & Accessories</Link>
              <Link href="/category/beauty-fragrance" onClick={() => setMenuOpen(false)}>Beauty & Fragrance</Link>
              <Link href="/category/sale" className={`mobile-sale-highlight ${isSaleActive ? "is-active" : ""}`} onClick={() => setMenuOpen(false)}>Sale & Deals</Link>
              <div className="mobile-divider" />
              <Link href="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist ({wishlistCount})</Link>
              <Link href="/cart" onClick={() => setMenuOpen(false)}>Shopping Bag ({itemCount})</Link>
              <Link href="/account" onClick={() => setMenuOpen(false)}>Sign in / Account</Link>
              <Link href="/faq" onClick={() => setMenuOpen(false)}>Help & FAQ</Link>
              <Link href="/about" className={isAboutActive ? "is-active" : ""} onClick={() => setMenuOpen(false)}>About AROLAX</Link>
            </div>
          </nav>
        )}
      </header>

      <SettingsPanel open={settingsOpen} onClose={closeSettings} />
    </>
  );
}