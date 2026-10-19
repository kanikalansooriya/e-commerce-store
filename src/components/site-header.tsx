"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Heart, Menu, Settings2, ShoppingBag, UserRound, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useWishlist } from "@/context/wishlist-context";
import { SettingsPanel } from "@/components/settings-panel";
import { SiteSearch } from "@/components/site-search";

const topLinks = [
  { href: "/category/women", label: "Women" },
  { href: "/category/men", label: "Men" },
  { href: "/category/home-living", label: "Home" },
  { href: "/category/beauty-self-care", label: "Beauty" },
  { href: "/category/electronics-tech", label: "Tech" },
  { href: "/category/gifts", label: "Gifts" },
  { href: "/category/sale", label: "Sale" },
];

const megaGroups = [
  { heading: "Women", items: ["Clothing", "Shoes", "Bags", "Accessories", "Jewelry"] },
  { heading: "Men", items: ["Clothing", "Shoes", "Bags", "Accessories", "Watches"] },
  { heading: "Home & Living", items: ["Decor", "Lighting", "Kitchen", "Furniture", "Bedding"] },
  { heading: "Beauty & Self-care", items: ["Skincare", "Haircare", "Fragrance", "Wellness", "Bath & Body"] },
  { heading: "Tech & Audio", items: ["Electronics", "Headphones", "Speakers", "Accessories", "Desk Setup"] },
  { heading: "Travel & Outdoors", items: ["Travel", "Fitness", "Outdoor", "Luggage", "Accessories"] },
  { heading: "Kids", items: ["Clothing", "Toys", "Baby", "School", "Accessories"] },
  { heading: "Gifts", items: ["For Her", "For Him", "Home Gifts", "Tech Gifts", "Self-care Gifts"] },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bagBounce, setBagBounce] = useState(false);
  const previousCount = useRef(itemCount);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (previousCount.current === itemCount) return;
    previousCount.current = itemCount;
    setBagBounce(true);
    const timer = window.setTimeout(() => setBagBounce(false), 420);
    return () => window.clearTimeout(timer);
  }, [itemCount]);

  return (
    <>
      <div className="announcement">A little more thoughtful. A lot more useful. <span>Free shipping over $100</span></div>
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
          <Link className="wordmark" href="/" aria-label="Goodform home">
            <span className="wordmark-mark" aria-hidden="true">g</span>goodform<span className="wordmark-period">.</span>
          </Link>
          <SiteSearch />
          <div className="header-actions">
            <button className="icon-button settings-trigger" type="button" data-settings-trigger aria-label="Appearance settings" aria-haspopup="dialog" aria-expanded={settingsOpen} onClick={() => setSettingsOpen(true)}>
              <Settings2 size={19} />
            </button>
            <Link className="icon-button account-link" href="/account" aria-label="Your account">
              <UserRound size={20} />
            </Link>
            <Link className="icon-button wishlist-link" href="/wishlist" aria-label={`Wishlist, ${wishlistCount} items`}>
              <Heart size={19} />
              {wishlistCount > 0 && <span className="bag-count">{wishlistCount}</span>}
            </Link>
            <Link className="icon-button bag-link" href="/cart" aria-label={`Shopping bag, ${itemCount} items`}>
              <ShoppingBag size={20} />
              <span className={`bag-count${bagBounce ? " is-bouncing" : ""}`}>{itemCount}</span>
            </Link>
          </div>
        </div>
        <nav className="desktop-nav page-shell" aria-label="Main navigation">
          <div className={`shop-menu-wrap${shopMenuOpen ? " is-open" : ""}`} onMouseEnter={() => setShopMenuOpen(true)} onMouseLeave={() => setShopMenuOpen(false)}>
            <button type="button" className="nav-shop-trigger" aria-expanded={shopMenuOpen} aria-label="Open shop categories" onClick={() => setShopMenuOpen((open) => !open)}>
              Shop
            </button>
            <div className="mega-menu" role="menu" aria-label="Shop categories">
              <div className="mega-menu-columns">
                {megaGroups.map((group) => (
                  <div key={group.heading} className="mega-menu-column">
                    <span className="mega-menu-heading">{group.heading}</span>
                    {group.items.map((item) => (
                      <Link key={item} href={`/shop?category=${encodeURIComponent(group.heading)}`} onClick={() => setShopMenuOpen(false)}>{item}</Link>
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
          <Link href="/shop?sort=newest" aria-current={pathname === "/shop?sort=newest" ? "page" : undefined}>New Arrivals</Link>
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-right" href="/shop">View all categories</Link>
        </nav>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
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