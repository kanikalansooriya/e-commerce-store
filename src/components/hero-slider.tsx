"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  tagline: string;
  title: string;
  subtitle: string;
  priceText: string;
  href: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    tagline: "STYLE THAT SHINES FOREVER",
    title: "Stunning Maxi Dress Collection",
    subtitle: "Comfortable, Elegant, Perfect For Every Occasion.",
    priceText: "From $46.00",
    href: "/category/dresses",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=90",
    alt: "Model wearing stunning black maxi dress collection",
  },
  {
    tagline: "NEW SEASON ATELIER",
    title: "Pure Mulberry Silk Edit",
    subtitle: "Fluid silhouettes and effortless grace for day-to-night glamour.",
    priceText: "From $58.00",
    href: "/category/dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90",
    alt: "Atelier summer linen and silk dresses",
  },
  {
    tagline: "MODERN ARCHITECTURAL TAILORING",
    title: "Structured Blazer & Suiting",
    subtitle: "Sharp shoulders, sculptural cuts, and pristine Italian craftsmanship.",
    priceText: "From $79.00",
    href: "/shop?category=Clothing",
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1400&q=90",
    alt: "High fashion tailored white blazer collection",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = slides[currentIndex];

  return (
    <section
      className="arolax-hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
    >
      <div className="arolax-hero-container">
        {/* Left Slider Content */}
        <div className="arolax-hero-left">
          <div className="arolax-hero-eyebrow" key={`tag-${currentIndex}`}>
            <span>{current.tagline}</span>
          </div>

          <h1 className="arolax-hero-title" key={`title-${currentIndex}`}>
            {current.title}
          </h1>

          <p className="arolax-hero-subtitle" key={`sub-${currentIndex}`}>
            {current.subtitle}
          </p>

          <div className="arolax-hero-cta-row" key={`cta-${currentIndex}`}>
            <Link href={current.href} className="arolax-hero-pill-btn">
              <span>{current.priceText}</span>
              <span className="arolax-pill-arrow-circle" aria-hidden="true">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>

          {/* Slider Pagination dots */}
          <div className="arolax-hero-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`arolax-hero-dot ${idx === currentIndex ? "is-active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentIndex}
              />
            ))}
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="arolax-hero-right">
          <div className="arolax-hero-image-wrap">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
              className="arolax-hero-image"
            />
            <div className="arolax-hero-overlay" />
          </div>
        </div>

        {/* Circular Prev & Next Buttons on Hero */}
        <button
          type="button"
          onClick={prevSlide}
          className="arolax-nav-arrow arolax-nav-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="arolax-nav-arrow arolax-nav-next"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
