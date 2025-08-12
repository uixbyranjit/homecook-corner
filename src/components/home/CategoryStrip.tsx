import { useNavigate } from "react-router-dom";
import { CookingPot, CupSoda, Microwave, Egg, ChefHat, Utensils } from "lucide-react";

const categories = [
  { key: "Kitchenware", icon: Utensils, label: "Kitchenware" },
  { key: "Cookware", icon: CookingPot, label: "Cookware" },
  { key: "Egg Beater", icon: Egg, label: "Egg Beater" },
  { key: "Toaster", icon: Microwave, label: "Toaster" },
  { key: "Rice Cooker", icon: ChefHat, label: "Rice Cooker" },
  { key: "Blender", icon: CupSoda, label: "Blender" },
  { key: "Pot", icon: CookingPot, label: "Pot" },
];

export const CategoryStrip = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => navigate(`/catalog?category=${encodeURIComponent(cat.key)}`)}
              className="group flex items-center gap-2 rounded-md border border-transparent px-3 py-2 hover:scale-105 transition-transform"
              aria-label={cat.label}
            >
              <cat.icon className="opacity-80 group-hover:opacity-100" />
              <span className="text-sm">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
