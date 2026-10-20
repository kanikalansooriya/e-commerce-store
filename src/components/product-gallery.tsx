"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { gsap, isReducedMotion } from "@/lib/gsap";

export function ProductGallery({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.gallery.length ? product.gallery : [product.image];
  const mainImageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mainImageWrapRef.current;
    if (!el || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0.7, scale: 0.985 },
        { opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" }
      );
    }, el);

    return () => ctx.revert();
  }, [activeImage]);

  return (
    <div className="detail-gallery">
      <div ref={mainImageWrapRef} className="detail-main-image">
        <Image
          src={images[activeImage]}
          alt={`${product.name}, view ${activeImage + 1}`}
          fill
          priority
          sizes="(max-width: 760px) 100vw, 55vw"
        />
      </div>
      <div className="detail-thumbnails" aria-label="Product images">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            className={activeImage === index ? "is-active" : ""}
            onClick={() => setActiveImage(index)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={activeImage === index}
          >
            <Image src={image} alt="" fill sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  );
}