import heroPan from "@/assets/hero-pan.jpg";
import heroCookware from "@/assets/hero-cookware.jpg";
import heroBlender from "@/assets/hero-blender.jpg";
import imgPan from "@/assets/prod-pan.jpg";
import imgPot from "@/assets/prod-pot.jpg";
import imgKnifeSet from "@/assets/prod-knife-set.jpg";
import imgToaster from "@/assets/prod-toaster.jpg";
import imgRiceCooker from "@/assets/prod-rice-cooker.jpg";
import imgBlender from "@/assets/prod-blender.jpg";
import imgEggBeater from "@/assets/prod-egg-beater.jpg";
import imgSaucepan from "@/assets/prod-saucepan.jpg";

export type Product = {
  id: string;
  name: string;
  price: number; // in INR
  rating: number; // 0-5
  brand: string;
  material: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
};

export const heroSlides = [
  {
    id: "hero-pan",
    title: "Pro Non‑Stick Pan",
    description: "Effortless cooking with even heat and durable coating.",
    image: heroPan,
  },
  {
    id: "hero-cookware",
    title: "Stainless Cookware Set",
    description: "Premium 5‑piece set built for everyday performance.",
    image: heroCookware,
  },
  {
    id: "hero-blender",
    title: "High‑Speed Blender",
    description: "Crush ice and blend smoothies in seconds.",
    image: heroBlender,
  },
];

export const products: Product[] = [
  {
    id: "pan-nonstick",
    name: "Pro Non‑Stick Frying Pan 28cm",
    price: 2499,
    rating: 4.6,
    brand: "CookCraft",
    material: "Non‑stick",
    category: "Cookware",
    image: imgPan,
    images: [imgPan, heroPan],
    description:
      "Our best‑selling non‑stick pan delivers even heating and effortless release, perfect for everyday cooking.",
    specs: [
      { label: "Material", value: "Aluminum + Non‑stick" },
      { label: "Size", value: "28 cm" },
      { label: "Weight", value: "0.9 kg" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    id: "pot-steel",
    name: "Stainless Steel Pot 3L",
    price: 1999,
    rating: 4.4,
    brand: "SteelPro",
    material: "Stainless Steel",
    category: "Cookware",
    image: imgPot,
    images: [imgPot, heroCookware],
    description:
      "Durable 3L stainless pot with lid, ideal for soups, curries, and boiling.",
    specs: [
      { label: "Material", value: "304 Stainless Steel" },
      { label: "Capacity", value: "3 Litres" },
      { label: "Weight", value: "1.2 kg" },
      { label: "Warranty", value: "5 years" },
    ],
  },
  {
    id: "knife-set",
    name: "Chef Knife Set (5 pcs)",
    price: 2899,
    rating: 4.5,
    brand: "EdgeMaster",
    material: "Stainless Steel",
    category: "Kitchenware",
    image: imgKnifeSet,
    images: [imgKnifeSet],
    description:
      "Precision‑forged knives with ergonomic handles for effortless prep.",
    specs: [
      { label: "Material", value: "High‑carbon Steel" },
      { label: "Pieces", value: "5" },
      { label: "Weight", value: "1.6 kg" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    id: "toaster-2slice",
    name: "2‑Slice Toaster (Chrome)",
    price: 1799,
    rating: 4.2,
    brand: "HomeHeat",
    material: "Metal",
    category: "Appliances",
    image: imgToaster,
    images: [imgToaster],
    description:
      "Even browning with 6 levels and high‑lift lever for easy toast removal.",
    specs: [
      { label: "Material", value: "Brushed Metal" },
      { label: "Power", value: "800W" },
      { label: "Weight", value: "1.1 kg" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: "ricecooker-basic",
    name: "Rice Cooker 1.8L",
    price: 2199,
    rating: 4.3,
    brand: "RiceMate",
    material: "Plastic/Metal",
    category: "Appliances",
    image: imgRiceCooker,
    images: [imgRiceCooker],
    description:
      "Fluffy rice every time with auto keep‑warm and measuring cup included.",
    specs: [
      { label: "Capacity", value: "1.8 Litres" },
      { label: "Power", value: "700W" },
      { label: "Weight", value: "1.9 kg" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    id: "blender-pro",
    name: "High‑Speed Blender",
    price: 3499,
    rating: 4.7,
    brand: "BlendX",
    material: "Plastic/Metal",
    category: "Appliances",
    image: imgBlender,
    images: [imgBlender, heroBlender],
    description:
      "Powerful motor with multi‑speed control for smoothies, soups, and more.",
    specs: [
      { label: "Jar", value: "1.5L BPA‑free" },
      { label: "Power", value: "1000W" },
      { label: "Weight", value: "2.8 kg" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    id: "eggbeater-hand",
    name: "Hand Mixer (Egg Beater)",
    price: 1299,
    rating: 4.1,
    brand: "BakeEase",
    material: "Plastic/Metal",
    category: "Kitchenware",
    image: imgEggBeater,
    images: [imgEggBeater],
    description:
      "Lightweight hand mixer with multiple speed settings and whisk attachments.",
    specs: [
      { label: "Power", value: "250W" },
      { label: "Weight", value: "0.8 kg" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: "saucepan-nonstick",
    name: "Non‑Stick Saucepan 2L",
    price: 1599,
    rating: 4.3,
    brand: "CookCraft",
    material: "Non‑stick",
    category: "Cookware",
    image: imgSaucepan,
    images: [imgSaucepan],
    description:
      "Perfect for sauces and reheating with glass lid and cool‑touch handle.",
    specs: [
      { label: "Capacity", value: "2 Litres" },
      { label: "Weight", value: "1.0 kg" },
      { label: "Warranty", value: "2 years" },
    ],
  },
];

export const brands = Array.from(new Set(products.map(p => p.brand)));
export const materials = Array.from(new Set(products.map(p => p.material)));
export const categories = Array.from(new Set(products.map(p => p.category)));
