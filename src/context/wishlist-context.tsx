"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Heart } from "lucide-react";
import { products, type Product } from "@/lib/products";
import { animateToastEnter } from "@/lib/gsap";

const STORAGE_KEY = "northline-wishlist";

type WishlistContextValue = {
  items: Product[];
  wishlistCount: number;
  isReady: boolean;
  toast: string;
  toggleItem: (product: Product) => void;
  removeItem: (id: string) => void;
  isSaved: (id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

function restoreWishlist(value: unknown): Product[] {
  if (!Array.isArray(value)) return [];

  const savedIds = new Set(
    value.flatMap((item) =>
      typeof item === "object" && item !== null && "id" in item && typeof item.id === "string" ? [item.id] : [],
    ),
  );
  return products.filter((product) => savedIds.has(product.id));
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [toast, setToast] = useState("");
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed: unknown = JSON.parse(stored);
          setItems(restoreWishlist(parsed));
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isReady]);

  useEffect(() => {
    if (!toast) return;
    animateToastEnter(toastRef.current);
    const timer = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const value = useMemo<WishlistContextValue>(() => ({
    items,
    wishlistCount: items.length,
    isReady,
    toast,
    toggleItem: (product) => {
      setItems((current) => {
        const exists = current.some((item) => item.id === product.id);
        const next = exists ? current.filter((item) => item.id !== product.id) : [product, ...current];
        setToast(exists ? `${product.name} removed from wishlist` : `${product.name} saved to wishlist`);
        return next;
      });
    },
    removeItem: (id) => {
      setItems((current) => current.filter((item) => item.id !== id));
    },
    isSaved: (id) => items.some((item) => item.id === id),
  }), [items, isReady, toast]);

  return (
    <WishlistContext.Provider value={value}>
      {children}
      {toast && (
        <div ref={toastRef} className="toast" role="status" aria-live="polite">
          <span className="toast-check" aria-hidden="true"><Heart size={12} fill="currentColor" /></span>
          {toast}
        </div>
      )}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
}
