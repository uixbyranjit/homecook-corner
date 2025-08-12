import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products as allProducts, brands, materials, Product } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Catalog() {
  const query = useQuery();
  const initialQ = query.get("q") || "";
  const initialCategory = query.get("category") || "";
  const [q, setQ] = useState(initialQ);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [bestSellerOnly, setBestSellerOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([500, 4000]);
  const [sort, setSort] = useState("popularity");

  useEffect(() => {
    if (initialCategory) {
      // map some keywords to categories if needed
    }
  }, [initialCategory]);

  const filtered: Product[] = useMemo(() => {
    let list = [...allProducts];

    if (q.trim()) {
      const t = q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(t) || p.brand.toLowerCase().includes(t));
    }
    if (initialCategory) {
      list = list.filter(
        (p) =>
          p.category.toLowerCase() === initialCategory.toLowerCase() ||
          p.name.toLowerCase().includes(initialCategory.toLowerCase())
      );
    }
    if (selectedBrands.length) {
      list = list.filter((p) => selectedBrands.includes(p.brand));
    }
    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }
    if (bestSellerOnly) {
      list = list.filter((p) => p.rating >= 4.5);
    }
    // price range
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "new":
        list.sort((a, b) => (a.id < b.id ? 1 : -1));
        break;
      default:
        list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [q, initialCategory, selectedBrands, selectedMaterials, bestSellerOnly, priceRange, sort]);

  const toggle = (arr: string[], setArr: (v: string[]) => void, v: string) => {
    setArr(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  };

  return (
    <main className="container mx-auto px-4 mt-8 grid gap-8 md:grid-cols-[260px_1fr]">
      <Helmet>
        <title>Catalog | Shop Kitchen Utensils Online</title>
        <meta name="description" content="Browse premium kitchenware, cookware, and appliances. Filter by brand, material, and price. Fast delivery in India." />
        <link rel="canonical" href="/catalog" />
      </Helmet>

      {/* Filters */}
      <aside>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="space-y-6">
          <div>
            <Label htmlFor="q">Search</Label>
            <Input id="q" placeholder="Search products" value={q} onChange={(e) => setQ(e.target.value)} className="mt-1" />
          </div>

          <div>
            <Label>Price Range (₹)</Label>
            <div className="mt-2 px-2">
              <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={5000} step={100} />
            </div>
            <div className="mt-1 text-sm text-muted-foreground">₹{priceRange[0]} – ₹{priceRange[1]}</div>
          </div>

          <div>
            <Label>Material</Label>
            <div className="mt-2 space-y-2">
              {materials.map((m) => (
                <label key={m} className="flex items-center gap-2">
                  <Checkbox checked={selectedMaterials.includes(m)} onCheckedChange={() => toggle(selectedMaterials, setSelectedMaterials, m)} />
                  <span>{m}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label>Brand</Label>
            <div className="mt-2 space-y-2">
              {brands.map((b) => (
                <label key={b} className="flex items-center gap-2">
                  <Checkbox checked={selectedBrands.includes(b)} onCheckedChange={() => toggle(selectedBrands, setSelectedBrands, b)} />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <Checkbox checked={bestSellerOnly} onCheckedChange={() => setBestSellerOnly((v) => !v)} />
              <span>Best Sellers</span>
            </label>
          </div>
        </div>
      </aside>

      {/* Results */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Products</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by</span>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-asc">Price Low → High</SelectItem>
                <SelectItem value="price-desc">Price High → Low</SelectItem>
                <SelectItem value="new">New Arrivals</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ProductGrid products={filtered} />
      </section>
    </main>
  );
}
