"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, Clock3, Search, X } from "lucide-react";
import { useCurrency } from "@/context/currency-context";
import { categories, products } from "@/lib/products";
import { gsap, isReducedMotion } from "@/lib/gsap";

const recentStorageKey = "goodform-recent-searches";
const popularCategories = categories;

function highlightMatch(text: string, query: string) {
  const cleanQuery = query.trim();
  if (!cleanQuery) return text;
  const index = text.toLowerCase().indexOf(cleanQuery.toLowerCase());
  if (index < 0) return text;
  return <>{text.slice(0, index)}<mark>{text.slice(index, index + cleanQuery.length)}</mark>{text.slice(index + cleanQuery.length)}</>;
}

export function SiteSearch() {
  const { formatPrice } = useCurrency();
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = window.localStorage.getItem(recentStorageKey);
      if (!saved) return [];
      const parsed: unknown = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string").slice(0, 5) : [];
    } catch {
      return [];
    }
  });
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = suggestionsRef.current;
    if (!el || !isOpen || isReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" });
    }, el);
    return () => ctx.revert();
  }, [isOpen]);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query.trim()), 140);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    function onShortcut(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.matches("input, textarea, select, [contenteditable='true']");
      if (!isTyping && (event.key === "/" || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k"))) {
        event.preventDefault();
        if (window.matchMedia("(max-width: 760px)").matches) setMobileOpen(true);
        window.requestAnimationFrame(() => inputRef.current?.focus());
        setIsOpen(true);
      }
    }
    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  const matches = useMemo(() => {
    const value = debouncedQuery.toLowerCase();
    if (!value) return [];
    return products.filter((product) => [
      product.name,
      product.category,
      product.subcategory,
      product.brand,
      product.description,
      product.sku,
      ...product.tags,
    ].join(" ").toLowerCase().includes(value)).slice(0, 5);
  }, [debouncedQuery]);

  function saveAndSearch(value: string) {
    const term = value.trim();
    if (!term) return;
    const next = [term, ...recentSearches.filter((search) => search.toLowerCase() !== term.toLowerCase())].slice(0, 5);
    setRecentSearches(next);
    try { window.localStorage.setItem(recentStorageKey, JSON.stringify(next)); } catch { /* Search remains available if storage is disabled. */ }
    setIsOpen(false);
    setMobileOpen(false);
    router.push(`/shop?q=${encodeURIComponent(term)}`);
  }

  function browseCategory(category: string) {
    setIsOpen(false);
    setMobileOpen(false);
    router.push(`/shop?category=${encodeURIComponent(category)}`);
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && activeIndex >= 0 && matches[activeIndex]) {
      event.preventDefault();
      setIsOpen(false);
      setMobileOpen(false);
      router.push(`/product/${matches[activeIndex].slug}`);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      if (mobileOpen) setMobileOpen(false);
    }
    if (event.key === "ArrowDown" && matches.length) {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % matches.length);
    }
    if (event.key === "ArrowUp" && matches.length) {
      event.preventDefault();
      setActiveIndex((index) => (index <= 0 ? matches.length - 1 : index - 1));
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveAndSearch(query);
  }

  const showDropdown = isOpen;

  return (
    <>
      <button className="mobile-search-toggle icon-button" type="button" aria-label="Open search" onClick={() => { setMobileOpen(true); setIsOpen(true); }}><Search size={20} /></button>
      {mobileOpen && <button className="search-mobile-backdrop" type="button" aria-label="Close search" onClick={() => setMobileOpen(false)} />}
      <div className={`site-search-shell${mobileOpen ? " mobile-open" : ""}`} ref={wrapperRef}>
        <form className="site-search-form" role="search" onSubmit={submit}>
          {mobileOpen && <button className="search-mobile-close icon-button" type="button" aria-label="Close search" onClick={() => { setMobileOpen(false); setIsOpen(false); }}><X size={20} /></button>}
          <Search className="search-leading-icon" size={18} aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setActiveIndex(-1); setIsOpen(true); }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={onKeyDown}
            placeholder="Search the collection"
            aria-label="Search products"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showDropdown}
            aria-controls="search-suggestions"
            aria-activedescendant={activeIndex >= 0 ? `search-result-${activeIndex}` : undefined}
          />
          {query && <button className="search-clear icon-button" type="button" onClick={() => { setQuery(""); setDebouncedQuery(""); setActiveIndex(-1); setIsOpen(true); inputRef.current?.focus(); }} aria-label="Clear search"><X size={15} /></button>}
          {!query && <kbd className="search-shortcut"><span>/</span><span>Ctrl K</span></kbd>}
          <button className="search-submit" type="submit" aria-label="Search">Go</button>
        </form>
        {showDropdown && (
          <div ref={suggestionsRef} className="search-suggestions" id="search-suggestions" role="listbox" aria-label="Search suggestions">
            {debouncedQuery ? matches.length ? <>
              <div className="suggestion-heading">Suggestions <span>{matches.length} results</span></div>
              {matches.map((product, index) => (
                <button id={`search-result-${index}`} className={`suggestion-product${activeIndex === index ? " is-active" : ""}`} key={product.id} role="option" aria-selected={activeIndex === index} type="button" onClick={() => { setIsOpen(false); setMobileOpen(false); router.push(`/product/${product.slug}`); }}>
                  <span className="suggestion-thumb"><Image src={product.image} alt="" width={46} height={50} sizes="46px" /></span>
                  <span className="suggestion-product-copy"><strong>{highlightMatch(product.name, debouncedQuery)}</strong><small>{product.category}</small></span>
                  <span className="suggestion-price">{formatPrice(product.price)}</span>
                </button>
              ))}
              <button className="suggestion-all" type="button" onClick={() => saveAndSearch(query)}>See all results for “{query}” <ArrowUpRight size={15} /></button>
            </> : <div className="search-no-results"><strong>No exact matches yet.</strong><span>Try “dress”, “bag”, or browse a category.</span><div>{popularCategories.map((category) => <button type="button" key={category} onClick={() => browseCategory(category)}>{category}</button>)}</div></div> : <>
              {recentSearches.length > 0 && <><div className="suggestion-heading">Recent searches</div>{recentSearches.slice(0, 4).map((search) => <button type="button" className="suggestion-recent" key={search} onClick={() => { setQuery(search); saveAndSearch(search); }}><Clock3 size={14} />{search}<ArrowUpRight size={13} /></button>)}</>}
              <div className="suggestion-heading">Popular categories</div>
              <div className="suggestion-categories">{popularCategories.filter((category) => categories.includes(category)).map((category) => <button key={category} type="button" onClick={() => browseCategory(category)}>{category}<ArrowUpRight size={13} /></button>)}</div>
              <span className="search-hint">Press <kbd>Esc</kbd> to close</span>
            </>}
          </div>
        )}
      </div>
    </>
  );
}