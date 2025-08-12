import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const eta = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
    weekday: "short", month: "short", day: "numeric"
  });

  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <Helmet>
        <title>Order Confirmed | CookCraft</title>
        <meta name="description" content="Thank you for your purchase. Your order is confirmed." />
        <link rel="canonical" href={`/order-confirmation/${orderId}`} />
      </Helmet>

      <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
        <svg viewBox="0 0 52 52" className="h-10 w-10 text-primary">
          <path fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
            d="M14 27 l8 8 l16 -16">
            <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="0.6s" fill="freeze" />
          </path>
        </svg>
      </div>

      <h1 className="text-3xl font-semibold">Thank you for your order!</h1>
      <p className="mt-2 text-muted-foreground">Order ID: <span className="font-medium">{orderId}</span></p>
      <p className="mt-1 text-muted-foreground">Estimated delivery by <span className="font-medium">{eta}</span></p>

      <Link to="/" className="inline-block mt-6 underline text-primary">Continue Shopping</Link>
    </main>
  );
}
