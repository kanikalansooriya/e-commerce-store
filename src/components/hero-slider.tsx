"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCurrency } from "@/context/currency-context";
import { animateButtonPress } from "@/lib/gsap";

interface HeroSlide {
  tagline: string;
  title: string;
  subtitle: string;
  basePrice: number;
  href: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    tagline: "STYLE THAT SHINES FOREVER",
    title: "Stunning Maxi Dress Collection",
    subtitle: "Comfortable, Elegant, Perfect For Every Occasion.",
    basePrice: 46,
    href: "/category/dresses",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=90",
    alt: "Model wearing stunning black maxi dress collection",
  },
  {
    tagline: "NEW SEASON ATELIER",
    title: "Pure Mulberry Silk Edit",
    subtitle: "Fluid silhouettes and effortless grace for day-to-night glamour.",
    basePrice: 58,
    href: "/category/dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90",
    alt: "Atelier summer linen and silk dresses",
  },
  {
    tagline: "MODERN ARCHITECTURAL TAILORING",
    title: "Structured Blazer & Suiting",
    subtitle: "Sharp shoulders, sculptural cuts, and pristine Italian craftsmanship.",
    basePrice: 79,
    href: "/category/jackets-coats",
    image: "/images/black-blazer-suit.jpg",
    alt: "High fashion tailored black blazer suit collection",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { formatPrice } = useCurrency();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Continuous auto-slide every 4.5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, currentIndex]);

  const current = slides[currentIndex];

  return (
    <section className="arolax-hero-section" aria-label="Hero Showcase">
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
            <Link
              href={current.href}
              className="arolax-hero-pill-btn"
              onClick={(e) => animateButtonPress(e.currentTarget)}
            >
              <span>{`From ${formatPrice(current.basePrice)}`}</span>
              <span className="arolax-pill-arrow-circle" aria-hidden="true">
                <ArrowRight size={15} />
              </span>
            </Link>
          </div>

          {/* Slider Pagination dots with countdown progress */}
          <div className="arolax-hero-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`arolax-hero-dot ${idx === currentIndex ? "is-active" : ""}`}
                onClick={() => {
                  if (timerRef.current) clearInterval(timerRef.current);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentIndex}
              >
                {idx === currentIndex && <span className="arolax-dot-progress" />}
              </button>
            ))}
          </div>
        </div>

        {/* Right Visual Image with Cinematic Smooth Crossfade */}
        <div className="arolax-hero-right">
          <div className="arolax-hero-image-wrap">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`arolax-hero-slide-layer ${idx === currentIndex ? "is-active" : ""}`}
                aria-hidden={idx !== currentIndex}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="arolax-hero-image"
                />
              </div>
            ))}
            <div className="arolax-hero-overlay" />
          </div>
        </div>

        {/* Circular Prev & Next Buttons on Hero */}
        <button
          type="button"
          onClick={() => {
            if (timerRef.current) clearInterval(timerRef.current);
            prevSlide();
          }}
          className="arolax-nav-arrow arolax-nav-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={() => {
            if (timerRef.current) clearInterval(timerRef.current);
            nextSlide();
          }}
          className="arolax-nav-arrow arolax-nav-next"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
