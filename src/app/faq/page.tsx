import Link from "next/link";
import { ArrowRight, CheckCircle2, Headphones, ShieldCheck, Truck } from "lucide-react";
import { ScrollReveal } from "@/components/motion";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "We offer complimentary express shipping worldwide. Domestic orders typically arrive within 2–4 business days. International deliveries arrive via DHL Express or FedEx Priority within 3–6 business days with live doorstep tracking.",
  },
  {
    question: "Do you offer free shipping and duties covered?",
    answer: "Yes, all orders over $150 receive complimentary express shipping. Import duties and taxes are prepaid and included at checkout for all major international destinations, ensuring no unexpected fees upon delivery.",
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We want you to adore every piece. We offer a complimentary 30-day return and exchange window for unworn items with original designer tags and packaging attached. Returns are processed within 48 hours of receipt.",
  },
  {
    question: "How should I care for silk, linen, and cashmere garments?",
    answer: "Each garment arrives with dedicated fabric care guidance. For Mulberry silk and cashmere, we recommend gentle dry cleaning or delicate hand washing with pH-neutral detergent. Our 100% organic linens become softer with every gentle cycle wash.",
  },
  {
    question: "Do you offer bespoke gift packaging?",
    answer: "Every AROLAX order arrives in our signature matte black recyclable gift box with silk ribbon and embossed tissue paper. You may also include a personalized handwritten gift note during checkout at no extra charge.",
  },
  {
    question: "Can I get personalized sizing and styling advice?",
    answer: "Our private client concierge is available 24/7. Whether you need exact garment measurements, silhouette styling suggestions, or bridal party curation, our stylists are delighted to help.",
  },
];

export default function FaqPage() {
  return (
    <div className="page-shell faq-shell">
      <ScrollReveal className="page-intro">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Support</span>
        </nav>
        <span className="eyebrow">CLIENT CARE &amp; ASSISTANCE</span>
        <h1>How Can We Help You Today?</h1>
        <p>Comprehensive answers regarding global deliveries, complimentary returns, garment care, and concierge services.</p>
      </ScrollReveal>

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
              <strong>Express Delivery</strong>
              <span>Complimentary worldwide on orders over $150</span>
            </div>
          </div>
          <div className="info-tile">
            <ShieldCheck size={18} />
            <div>
              <strong>30-Day Returns</strong>
              <span>Hassle-free complimentary doorstep pickups</span>
            </div>
          </div>
          <div className="info-tile">
            <Headphones size={18} />
            <div>
              <strong>Personal Stylist</strong>
              <span>Dedicated 24/7 client concierge support</span>
            </div>
          </div>
          <Link className="button-primary faq-button" href="/about#contact">
            Contact Concierge <ArrowRight size={15} />
          </Link>
        </aside>
      </ScrollReveal>

      <ScrollReveal as="section" className="support-cta">
        <div>
          <span className="eyebrow">THE AROLAX PROMISE</span>
          <h2>Artisanal Elegance Delivered Seamlessly</h2>
        </div>
        <ul>
          <li><CheckCircle2 size={16} /> Certified premium fabrics &amp; Italian leathers</li>
          <li><CheckCircle2 size={16} /> Fully insured worldwide express dispatch</li>
          <li><CheckCircle2 size={16} /> Complimentary gift packaging with every order</li>
        </ul>
      </ScrollReveal>
    </div>
  );
}
