"use client";

import { FormEvent, useState } from "react";
import { animateButtonPress } from "@/lib/gsap";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Your name<input name="name" autoComplete="name" placeholder="How should we address you?" required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label>Your note<textarea name="message" rows={4} placeholder="What can we help with?" required /></label>
      <button
        className="button-primary"
        type="submit"
        disabled={sent}
        onClick={(e) => animateButtonPress(e.currentTarget)}
      >
        {sent ? "Note sent" : "Send a note"} <span aria-hidden="true">→</span>
      </button>
      {sent && <p className="form-success" role="status">Thanks for writing. This demo form has recorded your message locally for this screen.</p>}
    </form>
  );
}