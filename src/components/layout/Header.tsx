import { NavLink, useNavigate } from "react-router-dom";
import { Search, Phone, User, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Specials", to: "/catalog?sort=popularity" },
  { label: "All Brands", to: "/catalog?section=brands" },
  { label: "About Us", to: "/about" },
  { label: "Delivery", to: "/delivery" },
  { label: "Blog", to: "/blog" },
];

export const Header = () => {
  const { totalItems } = useCart();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    navigate(`/catalog?${params.toString()}`);
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary" : "hover:text-primary";

  return (
    <header className="bg-header text-header-foreground border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col gap-3 py-4 md:grid md:grid-cols-12 md:items-center">
          {/* Logo */}
          <div className="md:col-span-2">
            <NavLink to="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-semibold">CookCraft</span>
            </NavLink>
          </div>

          {/* Search */}
          <div className="md:col-span-7">
            <form onSubmit={onSearch} className="flex items-stretch gap-2">
              <div className="flex-1 relative">
                <Input
                  aria-label="Search products"
                  placeholder="Search kitchenware, cookware, brands..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-11 pr-10"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60" />
              </div>
              <Button type="submit" variant="default" className="h-11">
                Search
              </Button>
            </form>
          </div>

          {/* Contact + Icons */}
          <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
            <a href="tel:+919999999999" className="flex items-center gap-2 opacity-90 hover:opacity-100">
              <Phone />
              <span className="hidden sm:inline">+91 99999 99999</span>
            </a>
            <NavLink to="/account" className="hover:text-primary" aria-label="Account">
              <User />
            </NavLink>
            <NavLink to="/cart" className="relative hover:text-primary" aria-label="Cart">
              <ShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>

        {/* Nav strip */}
        <nav className="py-2 text-sm">
          <ul className="flex flex-wrap gap-5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={getNavCls} end>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
