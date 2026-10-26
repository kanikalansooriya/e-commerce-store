"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { products, type Product } from "@/lib/products";
import { animateToastEnter } from "@/lib/gsap";

export type CartItem = Pick<Product, "id" | "slug" | "name" | "price" | "image" | "stock"> & {
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

function restoreCartItems(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((entry): CartItem[] => {
    if (typeof entry !== "object" || entry === null || !("id" in entry) || !("quantity" in entry)) return [];
    const product = products.find((item) => item.id === entry.id);
    const quantity = entry.quantity;
    if (!product || typeof quantity !== "number" || !Number.isFinite(quantity) || quantity < 1 || product.stock < 1) return [];

    return [{
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      stock: product.stock,
      quantity: Math.min(Math.floor(quantity), product.stock),
    }];
  });
}

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
          setItems(restoreCartItems(parsed));
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
      const safeQuantity = Math.min(Math.floor(quantity), product.stock);
      if (!Number.isFinite(safeQuantity) || safeQuantity < 1) return;

      setItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (existing) {
          return current.map((item) =>
            item.id === product.id ? { ...item, stock: product.stock, quantity: Math.min(product.stock, item.quantity + safeQuantity) } : item,
          );
        }
        return [...current, {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          stock: product.stock,
          quantity: safeQuantity,
        }];
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
        const product = products.find((item) => item.id === id);
        if (!product || !Number.isFinite(quantity) || quantity < 1 || product.stock < 1) return;
        const safeQuantity = Math.min(Math.floor(quantity), product.stock);
        setItems((current) => current.map((item) => (item.id === id ? { ...item, stock: product.stock, quantity: safeQuantity } : item)));
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