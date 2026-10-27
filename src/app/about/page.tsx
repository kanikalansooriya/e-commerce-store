import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/motion";

export default function AboutPage() {
  return (
    <>
      <section className="about-hero page-shell">
        <ScrollReveal className="about-copy reveal-stagger">
          <span className="eyebrow">THE AROLAX ATELIER</span>
          <h1>Elegance Defined by Craft &amp; Intention.</h1>
          <p>
            AROLAX represents a curated edit of contemporary women&apos;s fashion, sculpted maxi silhouettes, luxurious Italian leather accessories, and refined essentials tailored for life&apos;s memorable moments.
          </p>
        </ScrollReveal>
        <ScrollReveal className="about-image">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85"
            alt="Fashion collection styled in warm natural light"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </ScrollReveal>
      </section>

      <ScrollReveal as="section" className="about-principles page-shell">
        <span className="eyebrow">OUR PHILOSOPHY</span>
        <h2>Signature Aesthetics, Uncompromising Quality.</h2>
        <div className="reason-grid">
          <article className="reason-item">
            <span className="reason-number">01</span>
            <h3>Sculptural Design</h3>
            <p>Every piece is drafted with intentional proportions, flattering drape, and fluid movement that commands effortless confidence.</p>
          </article>
          <article className="reason-item">
            <span className="reason-number">02</span>
            <h3>Artisanal Integrity</h3>
            <p>We source authentic mulberry silk, organic linens, and vegetable-tanned leather crafted to endure and soften with time.</p>
          </article>
          <article className="reason-item">
            <span className="reason-number">03</span>
            <h3>Considered Curation</h3>
            <p>Our creative studio edits each seasonal drop strictly, ensuring every garment earns an irreplaceable spot in your wardrobe.</p>
          </article>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="contact-section" id="contact">
        <div className="page-shell contact-layout">
          <div>
            <span className="eyebrow">CLIENT CONCIERGE</span>
            <h2>Have a question?<br />We’re here for you.</h2>
            <p>Our client styling team is available to assist with sizing advice, bespoke styling recommendations, and order inquiries.</p>
          </div>
          <ContactForm />
        </div>
      </ScrollReveal>
    </>
  );
}