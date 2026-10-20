"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { animateButtonPress } from "@/lib/gsap";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" type="email" placeholder="Your email address" required disabled={submitted} />
      <button
        type="submit"
        aria-label="Subscribe to the newsletter"
        disabled={submitted}
        onClick={(e) => animateButtonPress(e.currentTarget)}
      >
        {submitted ? "You're on the list" : <>Join the list <ArrowRight size={17} /></>}
      </button>
    </form>
  );
}