"use client";

import { useEffect, useRef } from "react";
import { useCart } from "@/context/cart-context";

export function ClearCartOnPayment({ paid }: { paid: boolean }) {
  const { clearCart, isReady } = useCart();
  const cleared = useRef(false);

  useEffect(() => {
    if (paid && isReady && !cleared.current) {
      cleared.current = true;
      clearCart();
    }
  }, [clearCart, isReady, paid]);

  return null;
}
