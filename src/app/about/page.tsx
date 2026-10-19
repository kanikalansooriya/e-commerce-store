import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/motion";

export default function AboutPage() {
  return (
    <>
      <ScrollReveal as="section" className="about-hero page-shell">
        <div className="about-copy"><span className="eyebrow">A small shop with a point of view</span><h1>Life is made of little things.</h1><p>We think those little things deserve a bit more thought. Goodform is an independent edit of useful, well-made objects for everyday living.</p></div>
        <div className="about-image"><Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85" alt="Quiet, sunlit home with natural textures and thoughtful objects" fill priority sizes="(max-width: 760px) 100vw, 50vw" /></div>
      </ScrollReveal>
      <ScrollReveal as="section" className="about-principles page-shell">
        <span className="eyebrow">What we look for</span><h2>Less, but better considered.</h2>
        <div className="reason-grid"><article className="reason-item"><span className="reason-number">01</span><h3>Useful first</h3><p>Good design should make the everyday a little easier. Beauty is lovely; usefulness is essential.</p></article><article className="reason-item"><span className="reason-number">02</span><h3>Made with care</h3><p>We seek out quality materials, thoughtful construction, and the details that help something last.</p></article><article className="reason-item"><span className="reason-number">03</span><h3>Chosen by people</h3><p>Our small team selects every piece with curiosity, care, and an eye for what earns a place at home.</p></article></div>
      </ScrollReveal>
      <ScrollReveal as="section" className="contact-section" id="contact"><div className="page-shell contact-layout"><div><span className="eyebrow">We’re easy to reach</span><h2>Have a question?<br />We’re all ears.</h2><p>Product question, order note, or just want to say hello? Leave a message and our small team will be in touch.</p><a href="mailto:hello@goodform.example" className="text-link">hello@goodform.example <span aria-hidden="true">↗</span></a></div><ContactForm /></div></ScrollReveal>
    </>
  );
}