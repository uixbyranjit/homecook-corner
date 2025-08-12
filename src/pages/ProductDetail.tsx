import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products } from "@/data/products";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProductCard } from "@/components/products/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();
  const { addToCart, formatINR } = useCart();

  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");
  const [pinResult, setPinResult] = useState<null | { ok: boolean; msg: string }>(null);

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Button className="mt-4" onClick={() => navigate("/catalog")}>Back to Catalog</Button>
      </main>
    );
  }

  const related = useMemo(() => products.filter((p) => p.category === product.category && p.id !== product.id), [product]);

  const checkPincode = () => {
    const ok = /^[1-9][0-9]{5}$/.test(pincode);
    setPinResult(ok ? { ok: true, msg: "Delivery available to your area" } : { ok: false, msg: "Please enter a valid 6‑digit pincode" });
  };

  return (
    <main className="container mx-auto px-4 mt-8">
      <Helmet>
        <title>{product.name} | CookCraft</title>
        <meta name="description" content={`Buy ${product.name} at CookCraft. ${product.description}`} />
        <link rel="canonical" href={`/product/${product.id}`} />
      </Helmet>

      <section className="grid gap-8 md:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-lg border bg-white">
            <img src={product.images[0]} alt={`${product.name} main image`} className="w-full h-[360px] object-contain hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {product.images.map((img, i) => (
              <div key={i} className="rounded-md border bg-white p-2">
                <img src={img} alt={`${product.name} view ${i + 1}`} className="h-20 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="mt-2 text-2xl font-bold">{formatINR(product.price)}</div>
          <p className="mt-3 text-muted-foreground">{product.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {product.specs.map((s) => (
              <div key={s.label} className="rounded-md border p-3">
                <div className="text-sm text-muted-foreground">{s.label}</div>
                <div className="font-medium">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Pincode checker */}
          <div className="mt-6">
            <Label htmlFor="pin">Check Delivery</Label>
            <div className="mt-2 flex gap-2 max-w-sm">
              <Input id="pin" placeholder="Enter pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
              <Button onClick={checkPincode}>Check</Button>
            </div>
            {pinResult && (
              <div className={`mt-2 text-sm ${pinResult.ok ? "text-primary" : "text-destructive"}`}>{pinResult.msg}</div>
            )}
          </div>

          {/* Quantity and actions */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</Button>
              <div className="w-10 text-center">{qty}</div>
              <Button variant="outline" size="icon" onClick={() => setQty((q) => q + 1)}>+</Button>
            </div>
            <Button onClick={() => addToCart(product, qty)}>Add to Cart</Button>
            <Button variant="secondary" onClick={() => { addToCart(product, qty); navigate("/checkout"); }}>Buy Now</Button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related Products</h2>
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {related.map((p) => (
                <CarouselItem key={p.id} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductCard product={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      )}
    </main>
  );
}
