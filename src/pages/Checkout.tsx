import { Helmet } from "react-helmet-async";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, totalPrice, clearCart, formatINR } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState({ name: "", phone: "", pincode: "", line1: "", city: "", state: "" });
  const [payment, setPayment] = useState("cod");

  const placeOrder = () => {
    const id = `OD${Math.floor(Math.random() * 1_000_000)}`;
    clearCart();
    navigate(`/order-confirmation/${id}`);
  };

  const isValid = useMemo(() => {
    return (
      address.name.trim() &&
      /^[0-9]{10}$/.test(address.phone) &&
      /^[1-9][0-9]{5}$/.test(address.pincode) &&
      address.line1.trim() &&
      address.city.trim() &&
      address.state.trim()
    );
  }, [address]);

  return (
    <main className="container mx-auto px-4 mt-8 grid gap-8 md:grid-cols-[1fr_360px]">
      <Helmet>
        <title>Checkout | CookCraft</title>
        <meta name="description" content="Enter delivery address, choose payment method, and place your order." />
        <link rel="canonical" href="/checkout" />
      </Helmet>

      <section>
        <h1 className="text-2xl font-semibold mb-4">Delivery Address</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label>Name</Label>
            <Input value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} />
          </div>
          <div>
            <Label>Phone</Label>
            <Input value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} />
          </div>
          <div>
            <Label>Pincode</Label>
            <Input value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} />
          </div>
          <div className="sm:col-span-2">
            <Label>Address Line</Label>
            <Input value={address.line1} onChange={(e) => setAddress({ ...address, line1: e.target.value })} />
          </div>
          <div>
            <Label>City</Label>
            <Input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
          </div>
          <div>
            <Label>State</Label>
            <Input value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-3">Payment Method</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="pay" checked={payment === "cod"} onChange={() => setPayment("cod")} />
            Cash on Delivery
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="pay" checked={payment === "upi"} onChange={() => setPayment("upi")} />
            UPI
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="pay" checked={payment === "card"} onChange={() => setPayment("card")} />
            Debit/Credit Card
          </label>
        </div>
      </section>

      <aside className="rounded-lg border p-4 h-fit">
        <h2 className="text-lg font-semibold">Order Review</h2>
        <ul className="mt-3 space-y-2">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="flex justify-between text-sm">
              <span>{product.name} × {quantity}</span>
              <span>{formatINR(product.price * quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-between font-semibold">
          <span>Total</span>
          <span>{formatINR(totalPrice)}</span>
        </div>
        <Button className="mt-4 w-full" disabled={!isValid || items.length === 0} onClick={placeOrder}>
          Place Order
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">By placing your order, you agree to our Terms & Conditions.</p>
      </aside>
    </main>
  );
}
