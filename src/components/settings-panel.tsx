"use client";

import { useEffect, useRef } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { defaultThemeSettings, useThemeSettings } from "@/context/theme-context";
import { gsap, animateButtonPress, isReducedMotion } from "@/lib/gsap";

const accents = [
  { id: "blue", label: "Ocean blue", color: "#3975b7" },
  { id: "green", label: "Garden green", color: "#50836a" },
  { id: "purple", label: "Iris purple", color: "#8462a8" },
  { id: "orange", label: "Persimmon orange", color: "#c66b36" },
  { id: "rose", label: "Soft rose", color: "#cf5c60" },
] as const;

function SettingGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="setting-group"><h3>{title}</h3>{children}</section>;
}

function SegmentedSetting<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="setting-control" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          className={value === option.value ? "is-selected" : ""}
          onClick={(e) => {
            animateButtonPress(e.currentTarget);
            onChange(option.value);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function SettingsPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { settings, updateSetting } = useThemeSettings();
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const handleClose = () => {
    const backdrop = backdropRef.current;
    const drawer = drawerRef.current;
    if (!backdrop || !drawer || isReducedMotion()) {
      onClose();
      return;
    }
    gsap.to(drawer, {
      x: "100%",
      duration: 0.22,
      ease: "power3.in",
    });
    gsap.to(backdrop, {
      opacity: 0,
      duration: 0.22,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.querySelector<HTMLButtonElement>(".settings-close")?.focus();

    const backdrop = backdropRef.current;
    const drawer = drawerRef.current;
    let ctx: gsap.Context | null = null;

    if (backdrop && drawer && !isReducedMotion()) {
      ctx = gsap.context(() => {
        gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
        gsap.fromTo(drawer, { x: "100%" }, { x: "0%", duration: 0.35, ease: "power3.out" });
      });
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
      if (event.key === "Tab") {
        const d = drawerRef.current;
        const focusable = d?.querySelectorAll<HTMLElement>("button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      ctx?.revert();
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.querySelector<HTMLButtonElement>("[data-settings-trigger]")?.focus();
    };
  }, [open]);

  function resetSettings() {
    updateSetting("colorMode", defaultThemeSettings.colorMode);
    updateSetting("accent", defaultThemeSettings.accent);
    updateSetting("fontSize", defaultThemeSettings.fontSize);
    updateSetting("corners", defaultThemeSettings.corners);
    updateSetting("motion", defaultThemeSettings.motion);
    updateSetting("density", defaultThemeSettings.density);
  }

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="settings-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <aside
        ref={drawerRef}
        className="settings-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
      >
        <div className="settings-header">
          <div><span className="eyebrow">Make it yours</span><h2 id="settings-title">Appearance</h2></div>
          <button className="icon-button settings-close" type="button" onClick={handleClose} aria-label="Close appearance settings">
            <X size={20} />
          </button>
        </div>
        <div className="settings-content">
          <SettingGroup title="Colour mode">
            <SegmentedSetting
              label="Colour mode"
              value={settings.colorMode}
              onChange={(value) => updateSetting("colorMode", value)}
              options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }, { value: "system", label: "System" }]}
            />
          </SettingGroup>
          <SettingGroup title="Accent colour">
            <div className="accent-options" role="group" aria-label="Accent colour">
              {accents.map((accent) => (
                <button
                  key={accent.id}
                  type="button"
                  className={settings.accent === accent.id ? "is-selected" : ""}
                  onClick={(e) => {
                    animateButtonPress(e.currentTarget);
                    updateSetting("accent", accent.id);
                  }}
                  aria-label={accent.label}
                  aria-pressed={settings.accent === accent.id}
                  style={{ "--swatch": accent.color } as React.CSSProperties}
                >
                  {settings.accent === accent.id && <Check size={16} />}
                </button>
              ))}
            </div>
          </SettingGroup>
          <SettingGroup title="Text size">
            <SegmentedSetting
              label="Text size"
              value={settings.fontSize}
              onChange={(value) => updateSetting("fontSize", value)}
              options={[{ value: "small", label: "Small" }, { value: "medium", label: "Medium" }, { value: "large", label: "Large" }]}
            />
          </SettingGroup>
          <SettingGroup title="Corner style">
            <SegmentedSetting
              label="Corner style"
              value={settings.corners}
              onChange={(value) => updateSetting("corners", value)}
              options={[{ value: "sharp", label: "Sharp" }, { value: "rounded", label: "Rounded" }]}
            />
          </SettingGroup>
          <SettingGroup title="Animations">
            <SegmentedSetting
              label="Animations"
              value={settings.motion}
              onChange={(value) => updateSetting("motion", value)}
              options={[{ value: "on", label: "On" }, { value: "reduced", label: "Reduced" }]}
            />
          </SettingGroup>
          <SettingGroup title="Layout density">
            <SegmentedSetting
              label="Layout density"
              value={settings.density}
              onChange={(value) => updateSetting("density", value)}
              options={[{ value: "comfortable", label: "Comfortable" }, { value: "compact", label: "Compact" }]}
            />
          </SettingGroup>
        </div>
        <div className="settings-footer">
          <button className="settings-reset" type="button" onClick={resetSettings}>
            <RotateCcw size={15} /> Reset to default
          </button>
          <span>Saved on this device</span>
        </div>
      </aside>
    </div>
  );
}