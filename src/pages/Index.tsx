import { Helmet } from "react-helmet-async";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";

const Index = () => {
  const featured = products.slice(0, 8);
  return (
    <main>
      <Helmet>
        <title>CookCraft | Premium Kitchen Utensils Online</title>
        <meta name="description" content="Shop premium kitchenware, cookware, and appliances. Explore top brands with fast delivery across India." />
        <link rel="canonical" href="/" />
      </Helmet>

      <CategoryStrip />
      <HeroCarousel />

      <section className="container mx-auto px-4 mt-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">Best Sellers in Kitchen & Cookware</h1>
        <ProductGrid products={featured} />
      </section>
    </main>
  );
};

export default Index;
