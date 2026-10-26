"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Currency = "LKR" | "USD";

const currencyCookieName = "aura-currency";
const rateStorageKey = "aura-usd-lkr-rate";
const fallbackUsdToLkr = 300;
const exchangeRateUrl = "https://open.er-api.com/v6/latest/USD";

type ExchangeRateResponse = {
  result: string;
  rates: Record<string, unknown>;
  time_next_update_unix: number;
};

type CachedRate = {
  rate: number;
  nextUpdate: number;
};

type CurrencyStatus = "updating" | "live" | "cached" | "fallback";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  usdToLkr: number;
  rateStatus: CurrencyStatus;
  formatPrice: (amount: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function readCachedRate(): CachedRate | null {
  try {
    const stored = window.localStorage.getItem(rateStorageKey);
    if (!stored) return null;

    const value: unknown = JSON.parse(stored);
    if (typeof value !== "object" || value === null) return null;

    const cached = value as Partial<CachedRate>;
    if (
      typeof cached.rate !== "number" ||
      !Number.isFinite(cached.rate) ||
      cached.rate <= 0 ||
      typeof cached.nextUpdate !== "number" ||
      !Number.isFinite(cached.nextUpdate)
    ) {
      return null;
    }

    return { rate: cached.rate, nextUpdate: cached.nextUpdate };
  } catch (error) {
    console.warn("Could not read the saved USD/LKR exchange rate.", error);
    return null;
  }
}

function formatCurrencyPrice(amount: number, currency: Currency, usdToLkr: number): string {
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(amount);
  }

  const rupees = new Intl.NumberFormat("en-LK", {
    maximumFractionDigits: 0,
  }).format(amount * usdToLkr);

  return `Rs. ${rupees}`;
}

function parseRateResponse(value: unknown): CachedRate {
  if (typeof value !== "object" || value === null) {
    throw new Error("The exchange-rate service returned an invalid response.");
  }

  const response = value as Partial<ExchangeRateResponse>;
  const rate = response.rates?.LKR;
  if (
    response.result !== "success" ||
    typeof rate !== "number" ||
    !Number.isFinite(rate) ||
    rate <= 0 ||
    typeof response.time_next_update_unix !== "number" ||
    !Number.isFinite(response.time_next_update_unix)
  ) {
    throw new Error("The exchange-rate service did not provide a valid LKR rate.");
  }

  return {
    rate,
    nextUpdate: response.time_next_update_unix * 1000,
  };
}

export function CurrencyProvider({ children, initialCurrency }: { children: ReactNode; initialCurrency: Currency }) {
  const [currency, setCurrencyState] = useState<Currency>(initialCurrency);
  const [usdToLkr, setUsdToLkr] = useState(fallbackUsdToLkr);
  const [rateStatus, setRateStatus] = useState<CurrencyStatus>("updating");

  useEffect(() => {
    const cachedRate = readCachedRate();
    if (cachedRate) {
      queueMicrotask(() => setUsdToLkr(cachedRate.rate));
      if (cachedRate.nextUpdate > Date.now()) {
        queueMicrotask(() => setRateStatus("live"));
        return;
      }
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    async function updateRate() {
      try {
        const response = await fetch(exchangeRateUrl, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Exchange-rate request failed with status ${response.status}.`);
        }

        const nextRate = parseRateResponse(await response.json());
        setUsdToLkr(nextRate.rate);
        setRateStatus("live");
        try {
          window.localStorage.setItem(rateStorageKey, JSON.stringify(nextRate));
        } catch (error) {
          console.warn("Could not save the latest USD/LKR exchange rate.", error);
        }
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Could not update the live USD/LKR exchange rate.", error);
        setRateStatus(cachedRate ? "cached" : "fallback");
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void updateRate();
    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const setCurrency = useCallback((nextCurrency: Currency) => {
    setCurrencyState(nextCurrency);
    try {
      const secure = window.location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `${currencyCookieName}=${nextCurrency}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    } catch (error) {
      console.warn("Could not save the selected currency.", error);
    }
  }, []);

  const value = useMemo<CurrencyContextValue>(() => ({
    currency,
    setCurrency,
    usdToLkr,
    rateStatus,
    formatPrice: (amount) => formatCurrencyPrice(amount, currency, usdToLkr),
  }), [currency, setCurrency, usdToLkr, rateStatus]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used inside CurrencyProvider");
  return context;
}
