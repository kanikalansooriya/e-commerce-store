"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";

export function ProductGallery({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.gallery.length ? product.gallery : [product.image];

  return (
    <div className="detail-gallery">
      <div className="detail-main-image">
        <Image src={images[activeImage]} alt={`${product.name}, view ${activeImage + 1}`} fill priority sizes="(max-width: 760px) 100vw, 55vw" />
      </div>
      <div className="detail-thumbnails" aria-label="Product images">
        {images.map((image, index) => (
          <button key={`${image}-${index}`} className={activeImage === index ? "is-active" : ""} onClick={() => setActiveImage(index)} aria-label={`Show image ${index + 1}`} aria-pressed={activeImage === index}>
            <Image src={image} alt="" fill sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  );
}