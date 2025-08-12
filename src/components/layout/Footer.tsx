import { Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-header text-header-foreground mt-16" role="contentinfo">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="opacity-80">CookCraft brings premium kitchen essentials at fair prices with fast delivery across India.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 opacity-90">
            <li><a className="hover:text-primary" href="/faq">FAQ</a></li>
            <li><a className="hover:text-primary" href="/return-policy">Return Policy</a></li>
            <li><a className="hover:text-primary" href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 opacity-90">
            <li><a className="hover:text-primary" href="/catalog?category=Kitchenware">Kitchenware</a></li>
            <li><a className="hover:text-primary" href="/catalog?category=Cookware">Cookware</a></li>
            <li><a className="hover:text-primary" href="/catalog?category=Appliances">Appliances</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="opacity-80 mb-3">Get special offers and updates.</p>
          <form className="flex gap-2 mt-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Your email" aria-label="Email" className="h-11" />
            <Button type="submit" className="h-11">Subscribe</Button>
          </form>
          <div className="flex items-center gap-4 mt-5 opacity-90">
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter /></a>
            <a href="#" aria-label="YouTube" className="hover:text-primary"><Youtube /></a>
            <Mail className="ml-auto" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} CookCraft. All rights reserved.
      </div>
    </footer>
  );
};
