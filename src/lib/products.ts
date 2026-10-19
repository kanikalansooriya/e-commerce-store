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

const categoryDefinitions = {
  Women: ["Clothing", "Shoes", "Bags", "Accessories", "Jewelry"],
  Men: ["Clothing", "Shoes", "Bags", "Accessories", "Watches"],
  Clothing: ["T-Shirts", "Shirts", "Dresses", "Tops", "Bottoms", "Jackets", "Knitwear", "Activewear"],
  Shoes: ["Sneakers", "Casual", "Formal", "Sandals", "Boots"],
  "Bags & Accessories": ["Tote Bags", "Backpacks", "Crossbody Bags", "Wallets", "Belts", "Sunglasses", "Hats"],
  "Beauty & Self-care": ["Skincare", "Haircare", "Body Care", "Fragrance", "Wellness", "Bath & Body"],
  "Home & Living": ["Decor", "Lighting", "Furniture", "Kitchen & Dining", "Storage", "Bedding", "Candles"],
  "Electronics & Tech": ["Gadgets", "Accessories", "Chargers & Cables", "Smart Devices", "Desk Setup"],
  Audio: ["Headphones", "Earbuds", "Speakers", "Audio Accessories"],
  "Jewelry & Watches": ["Necklaces", "Rings", "Bracelets", "Earrings", "Watches"],
  "Sports & Outdoors": ["Fitness", "Running", "Yoga", "Outdoor", "Accessories"],
  Travel: ["Luggage", "Travel Bags", "Travel Accessories", "Organizers"],
  Kids: ["Clothing", "Toys", "School", "Baby", "Accessories"],
  Gifts: ["Gifts for Her", "Gifts for Him", "Home Gifts", "Tech Gifts", "Self-care Gifts"],
  "New Arrivals": ["New Finds", "Weekend Edit", "Limited Run", "Fresh Drops"],
  Sale: ["Last Chance", "Editor Picks", "Daily Deals", "Clearance"],
} as const;

const categoryOrder = Object.keys(categoryDefinitions) as Array<keyof typeof categoryDefinitions>;

const adjectives = ["North", "Marlow", "Aster", "Cedar", "Harbor", "Canvas", "Luma", "Summit", "Drift", "Vale", "Ridge", "Noir", "Hearth", "Juniper", "Soho", "Luna", "Oak", "Fjord", "Vela", "Stone", "Lark", "Atlas", "Moss", "Pilot", "Orchard", "Cove", "Rook", "Bloom", "Sierra", "Halo"];
const nouns = ["Tee", "Blazer", "Tote", "Lamp", "Set", "Sandal", "Jacket", "Robe", "Chair", "Speaker", "Watch", "Jar", "Case", "Kettle", "Sneaker", "Tray", "Mug", "Rug", "Lantern", "Pack", "Desk", "Vase", "Bowl", "Scarf", "Mat", "Pouch", "Pillow", "Belt"]; 
const brands = ["Northline", "Hearth & Form", "Aster Studio", "Miro", "Field House", "Ridge & Co.", "Luma", "Kite", "Marrow", "Brae", "Everwell", "Cinder", "Orchard Lane", "Vanta", "Sora", "Bromley", "Pilot & Pine", "Forest & Tide", "Mason & Co.", "Hollow Oak"]; 
const materials = ["Organic Cotton", "Recycled Nylon", "Italian Leather", "Linen Blend", "Natural Wool", "Glass", "Brushed Metal", "Ceramic", "Alpaca Blend", "Microfiber"]; 
const colors = ["Slate", "Ivory", "Olive", "Sand", "Charcoal", "Cocoa", "Forest", "Ash", "Stone", "Terracotta", "Deep Blue", "Navy", "Rosewood", "Sage", "Cream"]; 
const tags = ["everyday", "travel-ready", "soft-touch", "premium", "minimal", "giftable", "new", "limited", "well-made", "thoughtful", "home", "urban", "functional", "versatile", "clean lines"]; 

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildPrice(seed: number, category: string, subcategory: string) {
  const categoryWeight = category === "Audio" || category === "Electronics & Tech" ? 1.5 : category === "Jewelry & Watches" ? 1.4 : category === "Travel" ? 1.35 : 1;
  const subcategoryWeight = subcategory.includes("Watch") || subcategory.includes("Speaker") || subcategory.includes("Lamp") ? 1.2 : 1;
  return Math.round((35 + ((seed * 11) % 260) + (Math.abs(category.length) % 45)) * categoryWeight * subcategoryWeight);
}

function buildCatalog(count = 20000): Product[] {
  const products: Product[] = [];

  for (let index = 0; index < count; index += 1) {
    const category = categoryOrder[index % categoryOrder.length];
    const subcategories = categoryDefinitions[category];
    const subcategory = subcategories[(index * 3 + 1) % subcategories.length];
    const brand = brands[(index * 5 + 2) % brands.length];
    const adjective = adjectives[(index * 7) % adjectives.length];
    const noun = nouns[(index * 13 + category.length) % nouns.length];
    const name = `${adjective} ${noun}`;
    const price = buildPrice(index + 1, category, subcategory);
    const isSale = index % 9 === 0;
    const isFeatured = index % 11 === 0;
    const isNew = index % 7 === 0;
    const compareAt = isSale ? Math.round(price * (1.18 + ((index % 7) * 0.05))) : undefined;
    const stock = Math.max(0, (index * 17 + 13) % 120);
    const availability = stock <= 8 ? "Low stock" : stock <= 0 ? "Backorder" : "In stock";
    const slug = `${slugify(name)}-${index + 1}`;
    const rating = Number((3.8 + ((index * 17) % 14) / 10).toFixed(1));
    const reviewCount = 12 + ((index * 33) % 840);
    const createdAt = new Date(Date.now() - (index % 1200) * 86400000).toISOString().slice(0, 10);
    const color = colors[(index * 11) % colors.length];
    const material = materials[(index * 13) % materials.length];
    const imageSeed = [
      "1505740420928-5e560c06d30e",
      "1521572163474-6864f9cf17ab",
      "1505693416388-ac5ce068fe85",
      "1542291026-7eec264c27ff",
      "1529139574466-a303027c1d8b",
      "1522335789203-aabd1fc54bc9",
      "1496747611176-843222e1e57c",
      "1517841905240-472988babdf9",
      "1518770660439-4636190af475",
      "1584917865442-de89df76afd3",
    ][index % 10];
    const image = `https://images.unsplash.com/photo-${imageSeed}?auto=format&fit=crop&w=1000&q=85`;
    const gallery = [
      image,
      `https://images.unsplash.com/photo-${["1546435770-a3e426bf472b", "1578500494198-246f612d3b3d", "1515377905703-c4788e51af15", "1553062407-98eeb64c6a62", "1525966222134-fcfa99b8ae77", "1483985988355-763728e1935b", "1603006905003-be475563bc59", "1523170335258-f5ed11844a49", "1523721304830-6d5323d0d47c", "1515886657613-9f3515b0c78f"][index % 10]}?auto=format&fit=crop&w=1200&q=85`,
    ];

    products.push({
      id: `prod-${String(index + 1).padStart(6, "0")}`,
      slug,
      name,
      category,
      subcategory,
      brand,
      price,
      compareAt,
      description: `${brand} crafts the ${name.toLowerCase()} with a refined, modern approach. Built for everyday use, it blends ${material.toLowerCase()} construction with tactile details and functional design.`,
      image,
      gallery,
      rating,
      reviewCount,
      stock,
      availability,
      sku: `${brand.replace(/[^a-z]/gi, "").slice(0, 4).toUpperCase()}-${category.slice(0, 2).toUpperCase()}-${String(index + 1).padStart(5, "0")}`,
      tags: Array.from(new Set([
        tags[(index * 3) % tags.length],
        tags[(index * 5 + 2) % tags.length],
        tags[(index * 7 + 4) % tags.length],
        subcategory.toLowerCase().replace(/\s+/g, "-"),
      ])),
      attributes: {
        material,
        color,
        fit: ["Regular", "Relaxed", "Slim"][index % 3],
        size: ["XS", "S", "M", "L", "XL"][index % 5],
        inventory: `${stock} units`,
      },
      variants: [
        { size: "XS", color, sku: `${brand.replace(/[^a-z]/gi, "").slice(0, 4).toUpperCase()}-${String(index + 1).padStart(5, "0")}-XS`, stock: Math.max(2, stock - 4) },
        { size: "S", color: "Ivory", sku: `${brand.replace(/[^a-z]/gi, "").slice(0, 4).toUpperCase()}-${String(index + 1).padStart(5, "0")}-S`, stock: Math.max(1, stock - 2) },
        { size: "M", color, sku: `${brand.replace(/[^a-z]/gi, "").slice(0, 4).toUpperCase()}-${String(index + 1).padStart(5, "0")}-M`, stock: Math.max(3, stock) },
      ],
      isNew,
      isFeatured,
      isSale,
      createdAt,
    });
  }

  return products;
}

export const products = buildCatalog(20000);
export const categories = [...Object.keys(categoryDefinitions)];
export const subcategoriesByCategory: Record<string, string[]> = Object.fromEntries(
  Object.entries(categoryDefinitions).map(([category, subcategories]) => [category, [...subcategories]]),
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, limit);
}

export function getSubcategories(category: string) {
  return subcategoriesByCategory[category] ?? [];
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
