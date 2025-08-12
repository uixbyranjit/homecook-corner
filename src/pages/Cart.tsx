import { Helmet } from "react-helmet-async";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, formatINR } = useCart();

  return (
    <main className="container mx-auto px-4 mt-8">
      <Helmet>
        <title>Your Cart | CookCraft</title>
        <meta name="description" content="Review items in your cart and proceed to checkout." />
        <link rel="canonical" href="/cart" />
      </Helmet>
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-[1fr_320px]">
          <section className="space-y-4">
            {items.map(({ product, quantity }) => (
              <article key={product.id} className="flex items-center gap-4 rounded-lg border p-4">
                <img src={product.image} alt={`${product.name} in cart`} className="h-20 w-20 object-contain" />
                <div className="flex-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="text-sm text-muted-foreground">{formatINR(product.price)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}>−</Button>
                  <div className="w-10 text-center">{quantity}</div>
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(product.id, quantity + 1)}>+</Button>
                </div>
                <Button variant="ghost" onClick={() => removeFromCart(product.id)}>Remove</Button>
              </article>
            ))}
          </section>

          <aside className="rounded-lg border p-4 h-fit">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <div className="mt-2 flex items-center justify-between">
              <span>Total</span>
              <span className="text-xl font-bold">{formatINR(totalPrice)}</span>
            </div>
            <Button className="mt-4 w-full" onClick={() => (window.location.href = "/checkout")}>Proceed to Checkout</Button>
          </aside>
        </div>
      )}
    </main>
  );
}
