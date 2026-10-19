import { ShopExperience } from "@/components/shop-experience";

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string; sort?: string }> }) {
  const params = await searchParams;
  return <ShopExperience initialQuery={params.q ?? ""} initialCategory={params.category ?? "All"} initialSort={params.sort ?? "featured"} />;
}