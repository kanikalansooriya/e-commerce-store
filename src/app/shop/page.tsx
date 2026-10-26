import { ShopExperience } from "@/components/shop-experience";
import { categories, getSubcategories } from "@/lib/products";

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string; subcategory?: string; sort?: string; sale?: string; new?: string }> }) {
  const params = await searchParams;
  const category = params.category && categories.includes(params.category) ? params.category : "All";
  const subcategory = params.subcategory && getSubcategories(category).includes(params.subcategory) ? params.subcategory : "All";
  const allowedSorts = ["featured", "popular", "newest", "price-low", "price-high", "rating"];
  const sort = params.sort && allowedSorts.includes(params.sort) ? params.sort : "featured";

  return (
    <ShopExperience
    key={`${category}:${subcategory}:${params.q ?? ""}:${sort}:${params.sale === "true"}:${params.new === "true"}`}
    initialQuery={params.q ?? ""}
      initialCategory={category}
      initialSubcategory={subcategory}
      initialSort={sort}
      initialSaleOnly={params.sale === "true"}
      initialNewOnly={params.new === "true"}
    />
  );
}