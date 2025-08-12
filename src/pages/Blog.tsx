import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <main className="container mx-auto px-4 mt-8">
      <Helmet>
        <title>Blog | CookCraft</title>
        <meta name="description" content="Tips, recipes, and product guides for better cooking at home." />
        <link rel="canonical" href="/blog" />
      </Helmet>
      <h1 className="text-3xl font-semibold mb-3">Blog</h1>
      <p className="text-muted-foreground">Coming soon: recipes, how‑to guides, and kitchen inspiration.</p>
    </main>
  );
}
