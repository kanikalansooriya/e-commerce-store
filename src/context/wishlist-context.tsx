"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
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

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed as Product[];
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    return [];
  });
  const isReady = typeof window !== "undefined";
  const [toast, setToast] = useState("");
  const toastRef = useRef<HTMLDivElement>(null);

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
