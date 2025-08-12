import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, formatINR } = useCart();
  const navigate = useNavigate();

  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Star key={i} className={i + 1 <= Math.round(product.rating) ? "text-primary" : "opacity-30"} />
  ));

  return (
    <article className="group rounded-lg border p-4 transition-shadow hover:shadow-md">
      <button onClick={() => navigate(`/product/${product.id}`)} className="block w-full">
        <div className="overflow-hidden rounded-md bg-white">
          <img
            src={product.image}
            alt={`${product.name} product image`}
            loading="lazy"
            className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-3 font-medium text-left">{product.name}</h3>
      </button>
      <div className="mt-1 flex items-center gap-1 text-foreground/80">{stars}</div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-lg font-semibold">{formatINR(product.price)}</span>
        <Button size="sm" onClick={() => addToCart(product, 1)}>Add to Cart</Button>
      </div>
    </article>
  );
};
