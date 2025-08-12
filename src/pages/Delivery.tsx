import { Helmet } from "react-helmet-async";

export default function Delivery() {
  return (
    <main className="container mx-auto px-4 mt-8">
      <Helmet>
        <title>Delivery Information | CookCraft</title>
        <meta name="description" content="Delivery timelines, shipping charges, and serviceable pincodes for CookCraft orders." />
        <link rel="canonical" href="/delivery" />
      </Helmet>
      <h1 className="text-3xl font-semibold mb-3">Delivery</h1>
      <ul className="list-disc ml-5 text-muted-foreground space-y-2 max-w-2xl">
        <li>Standard delivery: 3–6 business days across India.</li>
        <li>Free shipping on orders above ₹999.</li>
        <li>COD available for select pincodes.</li>
      </ul>
    </main>
  );
}
