"use client";

import { useEffect, useRef } from "react";
import { Minus, Plus } from "lucide-react";
import { gsap, isReducedMotion } from "@/lib/gsap";

export function QuantityStepper({
  value,
  onChange,
  label = "Quantity",
}: {
  value: number;
  onChange: (value: number) => void;
  label?: string;
}) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current === value) return;
    prevValue.current = value;
    const el = valueRef.current;
    if (!el || isReducedMotion()) return;
    gsap.fromTo(el, { scale: 1.2 }, { scale: 1, duration: 0.2, ease: "back.out(2)" });
  }, [value]);

  return (
    <div className="quantity-stepper" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span ref={valueRef} aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}