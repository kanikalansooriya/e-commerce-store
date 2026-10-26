"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, UserRound, Check } from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { gsap, animateButtonPress, isReducedMotion } from "@/lib/gsap";

export function AccountExperience() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el || isReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0.6, y: 8 }, { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" });
    }, el);
    return () => ctx.revert();
  }, [mode]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      mode === "login"
        ? "Welcome back to AROLAX. Your session is active."
        : "Your AROLAX membership account has been created."
    );
  }

  return (
    <ScrollReveal className="account-card">
      <div className="account-icon"><UserRound size={21} /></div>
      <span className="eyebrow">AROLAX CLIENT ACCESS</span>
      <h1>{mode === "login" ? "Welcome back." : "Create Your Profile."}</h1>
      <p>{mode === "login" ? "Sign in to track orders, access private seasonal drops, and manage your wishlist." : "Join the AROLAX circle to enjoy express checkout and curated styling privileges."}</p>
      
      <div className="account-tabs" role="tablist" aria-label="Account access">
        <button
          role="tab"
          aria-selected={mode === "login"}
          className={mode === "login" ? "is-active" : ""}
          onClick={(e) => {
            animateButtonPress(e.currentTarget);
            setMode("login");
            setMessage("");
          }}
        >
          Sign in
        </button>
        <button
          role="tab"
          aria-selected={mode === "register"}
          className={mode === "register" ? "is-active" : ""}
          onClick={(e) => {
            animateButtonPress(e.currentTarget);
            setMode("register");
            setMessage("");
          }}
        >
          Create account
        </button>
      </div>

      <form ref={formRef} className="account-form" onSubmit={submit}>
        {mode === "register" && (
          <label>
            Full Name
            <input name="name" autoComplete="name" placeholder="First and last name" required />
          </label>
        )}
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" placeholder="client@arolax.com" required />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            minLength={8}
            placeholder="At least 8 characters"
            required
          />
        </label>
        <button
          className="button-primary"
          type="submit"
          onClick={(e) => animateButtonPress(e.currentTarget)}
        >
          {mode === "login" ? "Sign In to AROLAX" : "Register Profile"} <ArrowRight size={16} />
        </button>
        {message && (
          <p className="form-success" role="status">
            <Check size={14} className="inline mr-1 text-emerald-600" />
            {message}
          </p>
        )}
      </form>
      <Link className="account-back-link" href="/shop">Continue Shopping as Guest</Link>
    </ScrollReveal>
  );
}