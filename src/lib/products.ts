export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  compareAt?: number;
  description: string;
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  availability: "In stock" | "Low stock" | "Backorder";
  sku: string;
  tags: string[];
  attributes: Record<string, string | number | string[]>;
  variants?: { size?: string; color?: string; sku: string; stock: number }[];
  isNew: boolean;
  isFeatured: boolean;
  isSale: boolean;
  createdAt: string;
};

export const categoryDefinitions: Record<string, string[]> = {
  "Dresses": ["Casual Dresses", "Midi Dresses", "Maxi Dresses", "Evening Dresses", "Summer Dresses"],
  "Tops & Blouses": ["Blouses", "Shirts", "T-Shirts", "Knit Tops", "Camisoles"],
  "Knitwear": ["Cardigans", "Sweaters", "Cashmere Knits", "Vests"],
  "Jackets & Coats": ["Blazers", "Trench Coats", "Wool Coats", "Jackets"],
  "Pants & Skirts": ["Trousers", "Skirts", "Linen Pants", "Wide-Leg Pants"],
  "Shoes & Heels": ["Heels", "Flats", "Sandals", "Boots", "Sneakers"],
  "Bags & Totes": ["Handbags", "Shoulder Bags", "Tote Bags", "Crossbody"],
  "Jewelry & Accessories": ["Earrings", "Necklaces", "Rings", "Bracelets", "Sunglasses"],
  "Beauty & Fragrance": ["Perfume", "Skincare", "Bath & Body", "Candles"],
  "Sale": ["Flash Deals", "Best Value", "Under $75"],
};

export const rawProducts: Omit<Product, "id">[] = [
  // --- ELECTRONICS & AUDIO ---
  {
    slug: "sony-wh1000xm5-wireless-headphones",
    name: "Sony WH-1000XM5 Noise-Canceling Headphones",
    category: "Electronics & Tech",
    subcategory: "Headphones",
    brand: "Sony Audio",
    price: 349,
    compareAt: 399,
    description: "Industry-leading active noise canceling with two processors and eight microphones. Exceptional hi-res sound quality with 30-hour battery life and ultra-comfortable lightweight design.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 342,
    stock: 24,
    availability: "In stock",
    sku: "SONY-WH-001",
    tags: ["wireless", "noise-canceling", "audiophile", "travel", "bestseller"],
    attributes: { Connectivity: "Bluetooth 5.3", Battery: "30 Hours", Weight: "250g", Color: "Silver / Black" },
    variants: [
      { color: "Matte Black", sku: "SONY-WH-001-BLK", stock: 14 },
      { color: "Platinum Silver", sku: "SONY-WH-001-SLV", stock: 10 }
    ],
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-15"
  },
  {
    slug: "bose-soundlink-revolve-speaker",
    name: "Bose SoundLink 360° Bluetooth Speaker",
    category: "Electronics & Tech",
    subcategory: "Speakers",
    brand: "Bose",
    price: 199,
    compareAt: 249,
    description: "True 360-degree deep, jaw-dropping sound with uniform coverage. Water and dust-resistant seamless aluminum body with 17-hour battery life.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 189,
    stock: 19,
    availability: "In stock",
    sku: "BOSE-SPK-002",
    tags: ["audio", "bluetooth", "portable", "waterproof"],
    attributes: { Battery: "17h", Rating: "IP55 Water Resistant", Finish: "Triple Black" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-20"
  },
  {
    slug: "custom-mechanical-wireless-keyboard",
    name: "Keychron Pro Wireless Mechanical Keyboard",
    category: "Electronics & Tech",
    subcategory: "Keyboards",
    brand: "Keychron",
    price: 145,
    compareAt: 175,
    description: "Hot-swappable mechanical switches, CNC machined aluminum frame, PBT double-shot keycaps, and customizable RGB backlighting for Mac and Windows.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 156,
    stock: 8,
    availability: "Low stock",
    sku: "KEY-PRO-003",
    tags: ["desk-setup", "mechanical", "wireless", "gaming", "minimal"],
    attributes: { Switches: "Gateron Brown", Layout: "75% Compact", Connectivity: "BT 5.1 & Type-C" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-28"
  },
  {
    slug: "airpods-pro-spatial-audio-earbuds",
    name: "Aura Pro Wireless ANC Earbuds",
    category: "Electronics & Tech",
    subcategory: "Earbuds",
    brand: "Aura Sound",
    price: 179,
    compareAt: 219,
    description: "Adaptive Audio seamlessly blends active noise cancellation with transparency mode. Personalized spatial audio places sound all around you with dynamic head tracking.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 220,
    stock: 35,
    availability: "In stock",
    sku: "AURA-EAR-004",
    tags: ["earbuds", "anc", "spatial-audio", "commute", "fitness"],
    attributes: { Charging: "MagSafe & USB-C", Battery: "30h Total", WaterResistance: "IPX4" },
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-08-10"
  },
  {
    slug: "magfast-3in1-wireless-charging-station",
    name: "MagFast 3-in-1 Foldable Charging Stand",
    category: "Electronics & Tech",
    subcategory: "Chargers",
    brand: "Lumina Tech",
    price: 79,
    compareAt: 99,
    description: "Charge your smartphone, smartwatch, and wireless earbuds simultaneously with fast 15W MagSafe magnetic alignment in an ultra-sleek anodized aluminum frame.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1622445262464-84b14e3295b6?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.7,
    reviewCount: 94,
    stock: 45,
    availability: "In stock",
    sku: "MAG-CHG-005",
    tags: ["chargers", "desk-setup", "magsafe", "giftable"],
    attributes: { Power: "15W Fast Charge", Material: "Aluminum & Silicone", Color: "Space Gray" },
    isNew: true,
    isFeatured: false,
    isSale: false,
    createdAt: "2026-09-18"
  },

  // --- FOOTWEAR & SNEAKERS ---
  {
    slug: "nike-air-retro-racing-sneakers",
    name: "Nike Air Zoom Heritage Running Sneakers",
    category: "Shoes",
    subcategory: "Sneakers",
    brand: "Nike",
    price: 155,
    compareAt: 185,
    description: "Responsive Zoom Air cushioning paired with lightweight engineered mesh upper for peak comfort on street or track. Bold signature silhouette.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 412,
    stock: 18,
    availability: "In stock",
    sku: "NIKE-ZOOM-006",
    tags: ["sneakers", "running", "streetwear", "bestseller", "iconic"],
    attributes: { Material: "Engineered Mesh & Rubber", Cushioning: "Air Zoom", Sole: "High-traction Waffle" },
    variants: [
      { size: "US 8", sku: "NIKE-006-8", stock: 5 },
      { size: "US 9", sku: "NIKE-006-9", stock: 6 },
      { size: "US 10", sku: "NIKE-006-10", stock: 7 }
    ],
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-07-22"
  },
  {
    slug: "court-minimalist-leather-sneakers",
    name: "Common Projects Style Clean Leather Court Shoes",
    category: "Shoes",
    subcategory: "Sneakers",
    brand: "Atelier Footwear",
    price: 168,
    compareAt: 210,
    description: "Handcrafted in Italy using supple nappa calf leather. Clean, unbranded aesthetic that elevates tailored trousers, denim, and weekend wear.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 135,
    stock: 12,
    availability: "In stock",
    sku: "CRT-SNEAK-007",
    tags: ["shoes", "minimal", "luxury", "italian-leather", "clean"],
    attributes: { Leather: "Full-Grain Italian Calf", Lining: "Soft Calfskin", Outsole: "Margom Rubber" },
    isNew: true,
    isFeatured: true,
    isSale: false,
    createdAt: "2026-09-02"
  },
  {
    slug: "artisan-suede-chelsea-boots",
    name: "Artisan Waxed Suede Chelsea Boots",
    category: "Shoes",
    subcategory: "Boots",
    brand: "Field & Ridge",
    price: 220,
    compareAt: 275,
    description: "Constructed with water-resistant waxed snuff suede, elastic side gussets, Goodyear welt, and durable studded rubber soles made to withstand the seasons.",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 88,
    stock: 7,
    availability: "Low stock",
    sku: "CHE-BOOT-008",
    tags: ["boots", "chelsea", "suede", "winter", "durable"],
    attributes: { Welt: "Goodyear Welted", Leather: "Waxed Suede", Sole: "Dainite Rubber" },
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-08-14"
  },
  {
    slug: "classic-penny-loafers-cordovan",
    name: "Heritage Italian Leather Penny Loafers",
    category: "Shoes",
    subcategory: "Loafers",
    brand: "Mason & Co.",
    price: 185,
    description: "Timeless slip-on dress shoes crafted in polished burgundy box calfskin. Hand-stitched apron toe and stacked leather heel with rubber tap.",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.7,
    reviewCount: 62,
    stock: 14,
    availability: "In stock",
    sku: "PNY-LOAF-009",
    tags: ["loafers", "formal", "classic", "leather"],
    attributes: { Upper: "Box Calf Leather", Lining: "Breathable Leather", Fit: "True to size" },
    isNew: false,
    isFeatured: false,
    isSale: false,
    createdAt: "2026-06-11"
  },

  // --- LUXURY WATCHES & JEWELRY ---
  {
    slug: "chronos-minimalist-sapphire-watch",
    name: "Chronos Bauhaus Minimalist Sapphire Watch",
    category: "Jewelry & Watches",
    subcategory: "Chronograph",
    brand: "Chronos Horology",
    price: 265,
    compareAt: 320,
    description: "Surgical grade 316L stainless steel case, scratch-resistant sapphire crystal glass, Japanese precision quartz movement, and vegetable-tanned Italian leather band.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 178,
    stock: 9,
    availability: "Low stock",
    sku: "CHR-WATCH-010",
    tags: ["watch", "minimalist", "sapphire", "luxury", "gift"],
    attributes: { Movement: "Japanese Miyota Quartz", Case: "39mm 316L Steel", WaterResistance: "5 ATM" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-29"
  },
  {
    slug: "automatic-diver-steel-watch",
    name: "Seafarer 200M Automatic Diver Watch",
    category: "Jewelry & Watches",
    subcategory: "Watches",
    brand: "Northline Marine",
    price: 390,
    compareAt: 480,
    description: "High-beat automatic self-winding movement with 41-hour power reserve. Ceramic unidirectional rotating bezel, Super-LumiNova indices, and 200m water resistance.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 5.0,
    reviewCount: 97,
    stock: 5,
    availability: "Low stock",
    sku: "DIV-WATCH-011",
    tags: ["watch", "diver", "automatic", "luxury", "steel"],
    attributes: { Movement: "NH35A Automatic", Glass: "Double-domed Sapphire", Depth: "200m / 20 ATM" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-12"
  },
  {
    slug: "18k-gold-herringbone-chain-necklace",
    name: "18K Gold Vermeil Herringbone Snake Chain",
    category: "Jewelry & Watches",
    subcategory: "Necklaces",
    brand: "Aura Fine Jewelry",
    price: 110,
    compareAt: 140,
    description: "Liquid gold shine with flat interlocking links that sit flush against the collarbone. Heavy 18k gold layered over 925 solid sterling silver for durable shine.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 142,
    stock: 22,
    availability: "In stock",
    sku: "JWL-GOLD-012",
    tags: ["jewelry", "necklace", "gold", "layering", "gift"],
    attributes: { Length: "16-18 inch adjustable", Thickness: "3mm", BaseMetal: "925 Sterling Silver" },
    isNew: true,
    isFeatured: false,
    isSale: true,
    createdAt: "2026-08-30"
  },
  {
    slug: "solitaire-diamond-band-ring",
    name: "Pavé Band Solitaire Moissanite Ring",
    category: "Jewelry & Watches",
    subcategory: "Rings",
    brand: "Aura Fine Jewelry",
    price: 215,
    description: "Brilliant 1.5-carat round cut ethical moissanite center stone flanked by delicate micro-pavé accents on a comfort-fit 14k white gold plated band.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 81,
    stock: 11,
    availability: "In stock",
    sku: "JWL-RING-013",
    tags: ["ring", "solitaire", "luxury", "gift"],
    attributes: { Stone: "VVS1 D-Color Moissanite", Band: "14K White Gold Plated Silver", Sizes: "5, 6, 7, 8" },
    isNew: false,
    isFeatured: false,
    isSale: false,
    createdAt: "2026-05-19"
  },

  // --- BAGS & CARRY ---
  {
    slug: "heritage-full-grain-leather-duffel",
    name: "Heritage Full-Grain Leather Weekender Duffel",
    category: "Bags & Accessories",
    subcategory: "Duffels",
    brand: "Field House Goods",
    price: 245,
    compareAt: 295,
    description: "Built from rich pull-up oiled cowhide leather that develops a magnificent patina over time. Includes separate ventilated shoe compartment and padded shoulder strap.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 164,
    stock: 14,
    availability: "In stock",
    sku: "BAG-DUF-014",
    tags: ["bags", "travel", "leather", "duffel", "weekend"],
    attributes: { Capacity: "45 Liters", Hardware: "Solid Antique Brass", Lining: "Waterproof Cotton Twill" },
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-07-04"
  },
  {
    slug: "commuter-urban-tech-backpack",
    name: "Aura Transit Waterproof Commuter Backpack",
    category: "Bags & Accessories",
    subcategory: "Backpacks",
    brand: "Aura Studio",
    price: 135,
    compareAt: 165,
    description: "Weatherproof matte polyurethane-coated shell with dedicated 16-inch fleece-lined laptop sleeve, quick-access passport pocket, and ergonomic airflow back panel.",
    image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 210,
    stock: 28,
    availability: "In stock",
    sku: "BAG-BPK-015",
    tags: ["backpack", "commute", "tech", "laptop", "waterproof"],
    attributes: { Volume: "22L", LaptopFit: "Up to 16-inch MacBook Pro", Zippers: "YKK Aquaguard" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-14"
  },
  {
    slug: "heavyweight-canvas-utility-tote",
    name: "Everyday Heavyweight 16oz Canvas Tote",
    category: "Bags & Accessories",
    subcategory: "Tote Bags",
    brand: "Harbor & Coast",
    price: 48,
    compareAt: 60,
    description: "Sturdy unbleached 16oz cotton canvas with reinforced top handles, internal zip security pouch, and brass key clip. Perfect for market runs or daily carry.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.7,
    reviewCount: 95,
    stock: 50,
    availability: "In stock",
    sku: "BAG-TOT-016",
    tags: ["tote", "canvas", "everyday", "market", "organic"],
    attributes: { Material: "100% Organic Cotton Canvas", Dimensions: "15 x 16 x 5 inches" },
    isNew: false,
    isFeatured: false,
    isSale: true,
    createdAt: "2026-08-01"
  },
  {
    slug: "italian-leather-saddle-crossbody-bag",
    name: "Florence Italian Leather Crossbody Saddle Bag",
    category: "Bags & Accessories",
    subcategory: "Crossbody",
    brand: "Atelier Maison",
    price: 185,
    compareAt: 225,
    description: "Curved saddle silhouette with magnetic flap closure, interior card slots, and an adjustable wide leather shoulder strap. Lined in luxe micro-suede.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 112,
    stock: 12,
    availability: "In stock",
    sku: "BAG-CRB-017",
    tags: ["crossbody", "saddle-bag", "leather", "luxury", "women"],
    attributes: { Leather: "Smooth Vegetable-Tanned Cowhide", StrapDrop: "18-22 inches" },
    isNew: true,
    isFeatured: true,
    isSale: false,
    createdAt: "2026-09-22"
  },

  // --- WOMEN'S FASHION ---
  {
    slug: "pure-cashmere-ribbed-cardigan",
    name: "Pure Mongolian Cashmere Relaxed Cardigan",
    category: "Knitwear",
    subcategory: "Cardigans",
    brand: "Atelier Maison",
    price: 180,
    compareAt: 220,
    description: "Spun from ultra-soft 100% Grade-A Mongolian cashmere. Dropped shoulders, ribbed cuffs, and horn buttons create an effortlessly chic, cozy drape.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 88,
    stock: 15,
    availability: "In stock",
    sku: "WMN-CSH-018",
    tags: ["cashmere", "cardigan", "knitwear", "luxury", "bestseller"],
    attributes: { Yarn: "100% Cashmere 2-ply", Fit: "Relaxed / Oversized", Care: "Hand wash or dry clean" },
    variants: [
      { size: "S", sku: "WMN-CSH-018-S", stock: 5 },
      { size: "M", sku: "WMN-CSH-018-M", stock: 6 },
      { size: "L", sku: "WMN-CSH-018-L", stock: 4 }
    ],
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-17"
  },
  {
    slug: "silk-charmeuse-midi-slip-dress",
    name: "Silk Charmeuse Bias Cut Midi Dress",
    category: "Dresses",
    subcategory: "Midi Dresses",
    brand: "Aura Studio",
    price: 145,
    compareAt: 175,
    description: "Draped gracefully on the bias to follow body contours without clinging. Delicate spaghetti straps, subtle V-neckline, and a glossy, fluid silk finish.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 65,
    stock: 10,
    availability: "In stock",
    sku: "WMN-SLK-019",
    tags: ["dress", "silk", "evening", "minimalist", "summer"],
    attributes: { Fabric: "100% Mulberry Silk", Cut: "Bias Cut", Length: "Midi (below knee)" },
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-07-19"
  },
  {
    slug: "oversized-wool-blend-trench-blazer",
    name: "Oversized Double-Breasted Wool Blazer",
    category: "Jackets & Coats",
    subcategory: "Blazers",
    brand: "Atelier Maison",
    price: 195,
    compareAt: 240,
    description: "Structured shoulders with a modern boxy silhouette. Made from recycled Italian wool blend with peak lapels, flap pockets, and horn button detail.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 104,
    stock: 8,
    availability: "Low stock",
    sku: "WMN-BLZ-020",
    tags: ["blazer", "outerwear", "wool", "tailored", "office"],
    attributes: { Material: "70% Wool, 30% Polyamide", Closure: "Double-breasted" },
    isNew: true,
    isFeatured: true,
    isSale: false,
    createdAt: "2026-09-24"
  },
  {
    slug: "organic-cotton-weekend-blouse",
    name: "Crisp Organic Cotton Poplin Button-Down",
    category: "Tops & Blouses",
    subcategory: "Shirts",
    brand: "Field House",
    price: 78,
    description: "Lightweight organic cotton poplin with a slightly relaxed boyfriend fit. Features a curved hem, mother-of-pearl buttons, and point collar.",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.7,
    reviewCount: 47,
    stock: 20,
    availability: "In stock",
    sku: "WMN-BLS-021",
    tags: ["cotton", "shirt", "casual", "sustainable"],
    attributes: { Fabric: "GOTS Certified 100% Organic Cotton", Pattern: "Solid Crisp White" },
    isNew: false,
    isFeatured: false,
    isSale: false,
    createdAt: "2026-06-25"
  },

  // --- WOMEN'S COATS & ESSENTIALS ---
  {
    slug: "wool-cashmere-overcoat",
    name: "Women's Tailored Wool & Cashmere Overcoat",
    category: "Jackets & Coats",
    subcategory: "Wool Coats",
    brand: "Ridge & Co.",
    price: 285,
    compareAt: 350,
    description: "An effortlessly elegant winter staple crafted with 90% Italian Melton wool and 10% cashmere. Features a tailored feminine drape, peak lapels, and silky satin lining.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 122,
    stock: 9,
    availability: "Low stock",
    sku: "WMN-COAT-022",
    tags: ["coat", "winter", "tailored", "wool", "women"],
    attributes: { Material: "Melton Wool & Cashmere", Cut: "Feminine Tailored Fit", Length: "Knee-length" },
    variants: [
      { size: "XS", sku: "WMN-COAT-022-XS", stock: 3 },
      { size: "S", sku: "WMN-COAT-022-S", stock: 4 },
      { size: "M", sku: "WMN-COAT-022-M", stock: 2 }
    ],
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-08"
  },
  {
    slug: "classic-oxford-cotton-shirt",
    name: "Relaxed Cotton Poplin Boyfriend Shirt",
    category: "Tops & Blouses",
    subcategory: "Shirts",
    brand: "Field House",
    price: 68,
    compareAt: 85,
    description: "An effortless essential crafted from crisp organic cotton poplin. Designed with dropped shoulders, shell buttons, and a flattering relaxed drape.",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 230,
    stock: 40,
    availability: "In stock",
    sku: "WMN-SHT-023",
    tags: ["shirt", "cotton", "casual", "relaxed", "women"],
    attributes: { Fabric: "100% Organic Cotton Poplin", Collar: "Classic Point Collar", Fit: "Relaxed Drape" },
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-05-18"
  },
  {
    slug: "heavyweight-boxy-cotton-tee",
    name: "Organic Pima Cotton Relaxed Crew Tee",
    category: "Tops & Blouses",
    subcategory: "T-Shirts",
    brand: "Aura Essentials",
    price: 36,
    description: "Buttery soft organic Pima cotton with a relaxed silhouette and clean bound collar. The ultimate everyday wardrobe base layer.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 310,
    stock: 65,
    availability: "In stock",
    sku: "WMN-TEE-024",
    tags: ["tshirt", "pima-cotton", "minimal", "women", "everyday"],
    attributes: { Material: "100% Peruvian Pima Cotton", Collar: "Fine Ribbed Crewneck", Fit: "Relaxed" },
    isNew: false,
    isFeatured: false,
    isSale: false,
    createdAt: "2026-06-02"
  },
  {
    slug: "relaxed-linen-blazer",
    name: "Oversized Washed Linen Summer Blazer",
    category: "Jackets & Coats",
    subcategory: "Blazers",
    brand: "Ridge & Co.",
    price: 175,
    compareAt: 215,
    description: "Breathable European flax linen tailored with relaxed shoulders, patch pockets, and a featherweight drape for warm days and layered evenings.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.7,
    reviewCount: 78,
    stock: 12,
    availability: "In stock",
    sku: "WMN-BLZ-025",
    tags: ["linen", "blazer", "summer", "women", "chic"],
    attributes: { Composition: "100% Washed European Linen", Lining: "Unlined Breathable Finish" },
    isNew: true,
    isFeatured: false,
    isSale: true,
    createdAt: "2026-09-01"
  },

  // --- HOME & LIVING ---
  {
    slug: "sculptural-matte-ceramic-vase",
    name: "Nordic Minimalist Matte Ceramic Vase Set",
    category: "Home & Living",
    subcategory: "Ceramics",
    brand: "Hearth & Form",
    price: 64,
    compareAt: 80,
    description: "Pair of hand-thrown stoneware vessels with a soft, tactile chalk matte glaze. Display with dried botanicals or let them stand as sculptural art.",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 145,
    stock: 25,
    availability: "In stock",
    sku: "HOM-VAS-026",
    tags: ["vase", "ceramic", "decor", "home", "scandinavian"],
    attributes: { Material: "Natural Clay Stoneware", Finish: "Matte Sand", Origin: "Portugal" },
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-08-11"
  },
  {
    slug: "arc-minimalist-brass-table-lamp",
    name: "Arc Mid-Century Brass & Opal Glass Table Lamp",
    category: "Home & Living",
    subcategory: "Lighting",
    brand: "Hearth & Form",
    price: 139,
    compareAt: 179,
    description: "Solid spun brass base holding a hand-blown frosted opal glass sphere. Emits a warm, diffused ambient glow with an inline brass rotary dimmer.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 92,
    stock: 14,
    availability: "In stock",
    sku: "HOM-LMP-027",
    tags: ["lamp", "lighting", "brass", "mid-century", "cozy"],
    attributes: { Bulb: "G9 LED Included", Switch: "Smooth Rotary Dimmer", Cord: "Braided Fabric" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-21"
  },
  {
    slug: "french-washed-linen-duvet-throw",
    name: "French Washed Organic Linen Bed Blanket",
    category: "Home & Living",
    subcategory: "Bedding & Throws",
    brand: "Hearth & Form",
    price: 119,
    compareAt: 145,
    description: "Pre-washed for signature lived-in texture and breathable thermoregulation. Keeps you cool in summer and cozy in winter.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 68,
    stock: 18,
    availability: "In stock",
    sku: "HOM-LIN-028",
    tags: ["linen", "bedding", "throw", "cozy", "home"],
    attributes: { Fabric: "100% French Flax", Weight: "175 GSM", Dimensions: "90 x 90 inches" },
    isNew: false,
    isFeatured: true,
    isSale: false,
    createdAt: "2026-07-28"
  },
  {
    slug: "handcrafted-ceramic-pour-over-coffee-set",
    name: "Barista Pour-Over Glass & Ceramic Dripper Set",
    category: "Home & Living",
    subcategory: "Coffee & Dining",
    brand: "Orchard Lane",
    price: 54,
    description: "Thermal shock-resistant borosilicate glass carafe with a precision grooved ceramic dripper for the cleanest, most aromatic morning brew.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 110,
    stock: 22,
    availability: "In stock",
    sku: "HOM-COF-029",
    tags: ["coffee", "pour-over", "kitchen", "giftable"],
    attributes: { Capacity: "600ml (2-4 cups)", Material: "Borosilicate Glass & Stoneware" },
    isNew: false,
    isFeatured: false,
    isSale: false,
    createdAt: "2026-05-14"
  },

  // --- BEAUTY & SELF-CARE ---
  {
    slug: "botanical-hyaluronic-face-serum",
    name: "Botanica Hydra-Plump Multi-Hyaluronic Serum",
    category: "Beauty & Self-care",
    subcategory: "Skincare",
    brand: "Botanica Organics",
    price: 49,
    compareAt: 62,
    description: "Five molecular weights of hyaluronic acid infused with niacinamide, snow mushroom extract, and marine bio-ferments for deeply quenched, dewy skin.",
    image: "https://images.unsplash.com/photo-1608248597359-54070a25698b?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1608248597359-54070a25698b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 215,
    stock: 38,
    availability: "In stock",
    sku: "BTY-SRM-030",
    tags: ["skincare", "serum", "clean-beauty", "anti-aging", "bestseller"],
    attributes: { Volume: "30ml / 1.0 fl oz", SkinType: "All skin types", Clean: "Cruelty-Free, Vegan, Fragrance-Free" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-20"
  },
  {
    slug: "artisan-eau-de-parfum-santal",
    name: "Atelier No. 04 Santal & Black Pepper Perfume",
    category: "Beauty & Self-care",
    subcategory: "Fragrance",
    brand: "Atelier Maison",
    price: 95,
    compareAt: 120,
    description: "Warm, intoxicating blend of Australian sandalwood, cracked black peppercorn, powdery iris, and smoky cedarwood. Long-lasting niche fragrance.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.9,
    reviewCount: 168,
    stock: 14,
    availability: "In stock",
    sku: "BTY-PRF-031",
    tags: ["perfume", "fragrance", "sandalwood", "luxury", "unisex"],
    attributes: { Concentration: "Eau de Parfum 20%", Volume: "50ml / 1.7 fl oz" },
    isNew: false,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-08-04"
  },
  {
    slug: "cedar-fig-soy-wax-candle-set",
    name: "Wild Fig & Hinoki Wood Soy Candle Set",
    category: "Beauty & Self-care",
    subcategory: "Candles",
    brand: "Hearth & Form",
    price: 46,
    description: "Poured by hand in reusable amber glass tumblers. Clean-burning 100% natural soy wax scented with wild fig, earthy Hinoki wood, and black amber.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 94,
    stock: 30,
    availability: "In stock",
    sku: "BTY-CND-032",
    tags: ["candle", "soy-wax", "aromatherapy", "home", "gift"],
    attributes: { BurnTime: "50 Hours each", Wax: "100% USA Soy Wax", Wick: "Lead-free Cotton" },
    isNew: false,
    isFeatured: false,
    isSale: false,
    createdAt: "2026-07-15"
  },
  {
    slug: "bamboo-waffle-cloud-bath-robe",
    name: "Bamboo & Organic Cotton Waffle Lounge Robe",
    category: "Beauty & Self-care",
    subcategory: "Bath & Body",
    brand: "Aura Essentials",
    price: 88,
    compareAt: 110,
    description: "Lightweight honeycombed waffle weave that absorbs water instantly and dries fast. Ultra-soft against sensitive skin, featuring deep pockets and a secure tie.",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1200&q=85"
    ],
    rating: 4.8,
    reviewCount: 79,
    stock: 16,
    availability: "In stock",
    sku: "BTY-ROB-033",
    tags: ["robe", "loungewear", "spa", "cotton", "bath"],
    attributes: { Blend: "60% Organic Cotton, 40% Bamboo Viscose", Fit: "Unisex Relaxed" },
    isNew: true,
    isFeatured: true,
    isSale: true,
    createdAt: "2026-09-25"
  }
];

// Helper functions
export const products: Product[] = rawProducts.map((p, index) => ({
  ...p,
  id: `prod-${String(index + 1).padStart(4, "0")}`,
}));

export const categories = [...Object.keys(categoryDefinitions)];
export const subcategoriesByCategory: Record<string, string[]> = categoryDefinitions;

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter((item) => item.category === product.category && item.id !== product.id);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const remaining = products.filter((item) => item.id !== product.id && !sameCategory.includes(item));
  return [...sameCategory, ...remaining].slice(0, limit);
}

export function getSubcategories(category: string): string[] {
  return subcategoriesByCategory[category] ?? [];
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
