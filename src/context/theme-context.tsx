"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export const themeStorageKey = "goodform-appearance";

export type ThemeSettings = {
  colorMode: "light" | "dark" | "system";
  accent: "blue" | "green" | "purple" | "orange" | "rose";
  fontSize: "small" | "medium" | "large";
  corners: "sharp" | "rounded";
  motion: "on" | "reduced";
  density: "comfortable" | "compact";
};

export const defaultThemeSettings: ThemeSettings = {
  colorMode: "light",
  accent: "rose",
  fontSize: "medium",
  corners: "rounded",
  motion: "on",
  density: "comfortable",
};

type ThemeContextValue = {
  settings: ThemeSettings;
  updateSetting: <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function validChoice<T extends string>(value: unknown, choices: readonly T[], fallback: T): T {
  return choices.includes(value as T) ? value as T : fallback;
}

function readStoredSettings(): ThemeSettings {
  if (typeof window === "undefined") return defaultThemeSettings;
  try {
    const stored = window.localStorage.getItem(themeStorageKey);
    if (!stored) return defaultThemeSettings;
    const value: Partial<ThemeSettings> = JSON.parse(stored);
    return {
      colorMode: validChoice(value.colorMode, ["light", "dark", "system"], defaultThemeSettings.colorMode),
      accent: validChoice(value.accent, ["blue", "green", "purple", "orange", "rose"], defaultThemeSettings.accent),
      fontSize: validChoice(value.fontSize, ["small", "medium", "large"], defaultThemeSettings.fontSize),
      corners: validChoice(value.corners, ["sharp", "rounded"], defaultThemeSettings.corners),
      motion: validChoice(value.motion, ["on", "reduced"], defaultThemeSettings.motion),
      density: validChoice(value.density, ["comfortable", "compact"], defaultThemeSettings.density),
    };
  } catch {
    return defaultThemeSettings;
  }
}

function applyTheme(settings: ThemeSettings) {
  const root = document.documentElement;
  root.dataset.colorMode = settings.colorMode;
  root.dataset.accent = settings.accent;
  root.dataset.fontSize = settings.fontSize;
  root.dataset.corners = settings.corners;
  root.dataset.motion = settings.motion;
  root.dataset.density = settings.density;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState(readStoredSettings);

  useEffect(() => {
    applyTheme(settings);
    try { window.localStorage.setItem(themeStorageKey, JSON.stringify(settings)); } catch { /* Appearance still applies for this visit. */ }
  }, [settings]);

  const value = useMemo<ThemeContextValue>(() => ({
    settings,
    updateSetting: (key, value) => setSettings((current) => ({ ...current, [key]: value })),
  }), [settings]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeSettings() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeSettings must be used inside ThemeProvider");
  return context;
}