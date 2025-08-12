import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <main className="container mx-auto px-4 mt-8">
      <Helmet>
        <title>About Us | CookCraft</title>
        <meta name="description" content="Learn about CookCraft and our mission to bring premium kitchen tools to India." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <h1 className="text-3xl font-semibold mb-3">About Us</h1>
      <p className="text-muted-foreground max-w-2xl">We curate high‑quality kitchenware from trusted brands, combining performance with value. Our team is committed to fast delivery and excellent service.</p>
    </main>
  );
}
