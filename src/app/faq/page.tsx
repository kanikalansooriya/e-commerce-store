import Link from "next/link";
import { ArrowRight, CheckCircle2, Headphones, ShieldCheck, Truck } from "lucide-react";
import { ScrollReveal } from "@/components/motion";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "This preview does not accept or ship orders. Delivery estimates need to be confirmed and connected to your fulfillment provider before launch.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "The cart preview estimates free standard shipping above its sample threshold. This is display-only and is not applied to a real order.",
  },
  {
    question: "Can I return or exchange an item?",
    answer: "The 30-day return statement is sample policy copy only. Publish a verified returns policy before accepting orders.",
  },
  {
    question: "Are materials and care details included?",
    answer: "Product specifications in this preview are sample data and should be verified against the real products before publishing.",
  },
  {
    question: "Do you sell gift cards or gift packaging?",
    answer: "Gift cards and gift packaging are not configured in this preview.",
  },
  {
    question: "What if I need help choosing a product?",
    answer: "The contact form is a visual preview only and does not send messages. Configure a real support address and form service before launch.",
  },
];

export default function FaqPage() {
  return (
    <div className="page-shell faq-shell">
      <div className="page-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Support</span>
        </nav>
        <span className="eyebrow">Help & FAQ</span>
        <h1>We’re here to help.</h1>
        <p>Answers for shipping, returns, orders, and the little details that make choosing well easier.</p>
      </div>

      <ScrollReveal as="section" className="faq-layout">
        <div className="faq-stack">
          {faqs.map((item, index) => (
            <details key={item.question} className="faq-item" open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <aside className="faq-sidebar">
          <div className="info-tile">
            <Truck size={18} />
            <div>
              <strong>Shipping</strong>
              <span>Sample threshold shown in your selected currency</span>
            </div>
          </div>
          <div className="info-tile">
            <ShieldCheck size={18} />
            <div>
              <strong>Returns</strong>
              <span>Sample policy only</span>
            </div>
          </div>
          <div className="info-tile">
            <Headphones size={18} />
            <div>
              <strong>Need a hand?</strong>
              <span>Contact form is not connected</span>
            </div>
          </div>
          <Link className="button-primary faq-button" href="/about#contact">
            Contact the team <ArrowRight size={15} />
          </Link>
        </aside>
      </ScrollReveal>

      <ScrollReveal as="section" className="support-cta">
        <div>
          <span className="eyebrow">A thoughtful promise</span>
          <h2>We choose useful things with care.</h2>
        </div>
        <ul>
          <li><CheckCircle2 size={16} /> Sample catalog for preview</li>
          <li><CheckCircle2 size={16} /> No payment processing</li>
          <li><CheckCircle2 size={16} /> Connect customer support before launch</li>
        </ul>
      </ScrollReveal>
    </div>
  );
}
