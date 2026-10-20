"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { animateToastEnter } from "@/lib/gsap";

export type CartItem = Pick<Product, "id" | "slug" | "name" | "price" | "image"> & {
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isReady: boolean;
  toast: string;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [toast, setToast] = useState("");
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem("northline-cart");
        if (stored) {
          const parsed: unknown = JSON.parse(stored);
          if (Array.isArray(parsed)) setItems(parsed as CartItem[]);
        }
      } catch {
        window.localStorage.removeItem("northline-cart");
      }
      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isReady) window.localStorage.setItem("northline-cart", JSON.stringify(items));
  }, [items, isReady]);

  useEffect(() => {
    if (!toast) return;
    animateToastEnter(toastRef.current);
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (product: Product, quantity = 1) => {
      setItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (existing) {
          return current.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
          );
        }
        return [...current, { ...product, quantity }];
      });
      setToast(`${product.name} added to your bag`);
    };

    return {
      items,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
      isReady,
      toast,
      addItem,
      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)));
      },
      removeItem: (id) => setItems((current) => current.filter((item) => item.id !== id)),
      clearCart: () => setItems([]),
    };
  }, [items, isReady, toast]);

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <div ref={toastRef} className="toast" role="status" aria-live="polite">
          <span className="toast-check" aria-hidden="true"><Check size={13} /></span>
          {toast}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}