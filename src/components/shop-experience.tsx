"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, SearchX } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/motion";
import { useCurrency } from "@/context/currency-context";
import { categories, getSubcategories, products } from "@/lib/products";
import { animateButtonPress } from "@/lib/gsap";

const pageSize = 12;

export function ShopExperience({ initialQuery, initialCategory, initialSubcategory, initialSort, initialSaleOnly, initialNewOnly }: { initialQuery: string; initialCategory: string; initialSubcategory: string; initialSort: string; initialSaleOnly: boolean; initialNewOnly: boolean }) {
  const { formatPrice } = useCurrency();
  const [query] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [subcategory, setSubcategory] = useState(initialSubcategory);
  const [brand, setBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(500);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [saleOnly, setSaleOnly] = useState(initialSaleOnly);
  const [newOnly, setNewOnly] = useState(initialNewOnly);
  const [sort, setSort] = useState(initialSort);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 260);
    return () => window.clearTimeout(timer);
  }, []);

  const subcategoryOptions = category === "All" ? [] : getSubcategories(category);
  const brandOptions = useMemo(() => [...new Set(products.map((product) => product.brand))].sort(), []);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesQuery = !normalizedQuery || [
        product.name,
        product.category,
        product.subcategory,
        product.brand,
        product.description,
        product.sku,
        ...product.tags,
      ].join(" ").toLowerCase().includes(normalizedQuery);

      const matchesCategory = category === "All" || product.category === category;
      const matchesSubcategory = subcategory === "All" || product.subcategory === subcategory;
      const matchesBrand = brand === "All" || product.brand === brand;
      const matchesPrice = product.price <= maxPrice;
      const matchesRating = product.rating >= minRating;
      const matchesAvailability = !inStockOnly || product.stock > 0;
      const matchesSale = !saleOnly || Boolean(product.isSale);
      const matchesNew = !newOnly || Boolean(product.isNew);

      return matchesQuery && matchesCategory && matchesSubcategory && matchesBrand && matchesPrice && matchesRating && matchesAvailability && matchesSale && matchesNew;
    });

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      case "popular":
        result.sort((a, b) => b.reviewCount - a.reviewCount || b.rating - a.rating);
        break;
      case "relevance":
      default:
        result.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured) || b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [brand, category, inStockOnly, maxPrice, minRating, newOnly, query, saleOnly, sort, subcategory]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleProducts = useMemo(() => filtered.slice((page - 1) * pageSize, page * pageSize), [filtered, page]);

  return (
    <div className="page-shell">
      <div className="page-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Shop</span></nav>
        <span className="eyebrow" style={{ marginTop: 22 }}>The good stuff</span>
        <h1>Shop the edit.</h1>
        <p>Thoughtful everyday things, chosen to be useful, well made, and easy to love.</p>
      </div>
      <div className="shop-toolbar">
        <div className="shop-filters">
          <label className="filter-control">Category
            <select value={category} onChange={(event) => { setCategory(event.target.value); setSubcategory("All"); setBrand("All"); setPage(1); }}>
              <option value="All">All categories</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          {subcategoryOptions.length > 0 && <label className="filter-control">Subcategory
            <select value={subcategory} onChange={(event) => { setSubcategory(event.target.value); setPage(1); }}>
              <option value="All">All</option>
              {subcategoryOptions.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>}
          <label className="filter-control">Brand
            <select value={brand} onChange={(event) => { setBrand(event.target.value); setPage(1); }}>
              <option value="All">All brands</option>
              {brandOptions.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label className="filter-control">Up to {formatPrice(maxPrice)}
            <input type="range" min="30" max="500" step="10" value={maxPrice} onChange={(event) => { setMaxPrice(Number(event.target.value)); setPage(1); }} aria-label="Maximum price" />
          </label>
          <label className="filter-control">Rating
            <select value={minRating} onChange={(event) => { setMinRating(Number(event.target.value)); setPage(1); }}>
              <option value={0}>Any rating</option>
              <option value={4}>4.0+</option>
              <option value={4.5}>4.5+</option>
              <option value={4.8}>4.8+</option>
            </select>
          </label>
          <label className="filter-control checkbox-inline">
            <input type="checkbox" checked={inStockOnly} onChange={() => { setInStockOnly((current) => !current); setPage(1); }} />
            In stock
          </label>
          <label className="filter-control checkbox-inline">
            <input type="checkbox" checked={saleOnly} onChange={() => { setSaleOnly((current) => !current); setPage(1); }} />
            Sale
          </label>
          <label className="filter-control checkbox-inline">
            <input type="checkbox" checked={newOnly} onChange={() => { setNewOnly((current) => !current); setPage(1); }} />
            New
          </label>
          <label className="filter-control">Sort by
            <select value={sort} onChange={(event) => { setSort(event.target.value); setPage(1); }}>
              <option value="featured">Featured</option>
              <option value="popular">Most popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </label>
        </div>
        <span className="shop-count" aria-live="polite">{filtered.length.toLocaleString()} {filtered.length === 1 ? "piece" : "pieces"}</span>
      </div>

      {loading ? (
        <div className="product-grid" aria-label="Loading products">
          {Array.from({ length: 8 }, (_, index) => <div key={index}><div className="skeleton-card" /><div className="skeleton-line" /><div className="skeleton-line" style={{ width: "55%" }} /></div>)}
        </div>
      ) : filtered.length ? (
        <>
          <div id="catalog-results">
            <ScrollReveal key={`${page}-${category}-${sort}`} className="product-grid catalog-grid reveal-stagger">
              {visibleProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index === 0} />
              ))}
            </ScrollReveal>
          </div>
          <nav className="pagination-row" aria-label="Catalog pagination">
            <button
              type="button"
              className="pagination-btn-prev"
              disabled={page === 1}
              onClick={(e) => {
                animateButtonPress(e.currentTarget);
                setPage((current) => Math.max(1, current - 1));
                document.getElementById("catalog-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <ChevronLeft size={16} /> Previous
            </button>

            <div className="pagination-pages" aria-label="Page navigation">
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`pagination-num-btn ${page === p ? "is-active" : ""}`}
                  aria-current={page === p ? "page" : undefined}
                  onClick={(e) => {
                    animateButtonPress(e.currentTarget);
                    setPage(p);
                    document.getElementById("catalog-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="pagination-btn-next"
              disabled={page >= pageCount}
              onClick={(e) => {
                animateButtonPress(e.currentTarget);
                setPage((current) => Math.min(pageCount, current + 1));
                document.getElementById("catalog-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Next Page <ChevronRight size={16} />
            </button>
          </nav>
        </>
      ) : (
        <div className="empty-state">
          <SearchX size={28} strokeWidth={1.4} />
          <h2>{subcategory !== "All" ? `No ${subcategory} items yet.` : category !== "All" ? `No ${category} items yet.` : "Nothing quite like that."}</h2>
          <p>
            {subcategory !== "All" || category !== "All"
              ? "This sample catalog does not have products in this category yet. Browse the full collection or check back when it is populated."
              : "Try another search or ease up on your filters. Your next favorite is around here somewhere."}
          </p>
          <Link className="button-secondary" href="/shop">Browse all products</Link>
        </div>
      )}
    </div>
  );
}