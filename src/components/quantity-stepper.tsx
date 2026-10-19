import { Minus, Plus } from "lucide-react";

export function QuantityStepper({ value, onChange, label = "Quantity" }: { value: number; onChange: (value: number) => void; label?: string }) {
  return (
    <div className="quantity-stepper" aria-label={label}>
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus size={14} /></button>
      <span aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
    </div>
  );
}