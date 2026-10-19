import Link from "next/link";
import { ArrowRight, CheckCircle2, Headphones, ShieldCheck, Truck } from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Most orders leave our studio within one to two business days, and delivery typically takes three to seven days depending on your location.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes. Orders over $100 ship free within the contiguous United States. We also include carbon-conscious packaging for every order.",
  },
  {
    question: "Can I return or exchange an item?",
    answer: "Absolutely. We accept returns on unworn or unused items within 30 days of delivery. Exchanges are processed quickly and we’ll help you find the right fit.",
  },
  {
    question: "Are materials and care details included?",
    answer: "Every product page includes materials, dimensions, and care guidance. We also provide in-depth product notes on the item details section.",
  },
  {
    question: "Do you sell gift cards or gift packaging?",
    answer: "Yes. Gift cards are available in-store and online, and many items can be wrapped in recyclable packaging when selected at checkout.",
  },
  {
    question: "What if I need help choosing a product?",
    answer: "We’re happy to help. Send us a note at hello@goodform.example and we’ll answer with thoughtful recommendations tailored to your home or routine.",
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

      <div className="faq-layout">
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
              <span>Free over $100 • 3–7 day delivery</span>
            </div>
          </div>
          <div className="info-tile">
            <ShieldCheck size={18} />
            <div>
              <strong>Returns</strong>
              <span>30-day easy returns</span>
            </div>
          </div>
          <div className="info-tile">
            <Headphones size={18} />
            <div>
              <strong>Need a hand?</strong>
              <span>hello@goodform.example</span>
            </div>
          </div>
          <Link className="button-primary faq-button" href="/about#contact">
            Contact the team <ArrowRight size={15} />
          </Link>
        </aside>
      </div>

      <section className="support-cta">
        <div>
          <span className="eyebrow">A thoughtful promise</span>
          <h2>We choose useful things with care.</h2>
        </div>
        <ul>
          <li><CheckCircle2 size={16} /> Helpful product guidance</li>
          <li><CheckCircle2 size={16} /> Thoughtful returns & exchanges</li>
          <li><CheckCircle2 size={16} /> Real people behind every reply</li>
        </ul>
      </section>
    </div>
  );
}
