export type CatalogProduct = {
  slug: string;
  name: string;
  type: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  colors: string[];
  sizes: string[];
};

export type DesignTemplate = {
  slug: string;
  name: string;
  category: string;
  image: string;
};

export const catalogProducts: CatalogProduct[] = [
  {
    slug: "daily-tee",
    name: "The Daily Tee",
    type: "Heavyweight cotton",
    price: "$34",
    description: "A considered blank for the idea you keep coming back to.",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    alt: "White t-shirt on a model",
    category: "T-shirts",
    colors: ["#eee8db", "#2d3133", "#879975"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "studio-hoodie",
    name: "Studio Hoodie",
    type: "Brushed fleece",
    price: "$68",
    description: "Heavyweight comfort for ideas that refuse to sit still.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    alt: "Stone hoodie",
    category: "Hoodies",
    colors: ["#c8c1b3", "#1e2524", "#5c6b61"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "everyday-cap",
    name: "Everyday Cap",
    type: "Cotton twill",
    price: "$28",
    description: "A signature on the piece you reach for every day.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85",
    alt: "Black cap",
    category: "Caps",
    colors: ["#252827", "#eee8db", "#879975"],
    sizes: ["One size"],
  },
  {
    slug: "morning-tumbler",
    name: "Morning Tumbler",
    type: "Stainless steel",
    price: "$32",
    description: "Start the morning with something made entirely yours.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
    alt: "Steel travel tumbler",
    category: "Drinkware",
    colors: ["#d9d7d0", "#252827"],
    sizes: ["20 oz"],
  },
];

export const designTemplates: DesignTemplate[] = [
  { slug: "good-things", name: "Good things take time", category: "Typography", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=85" },
  { slug: "keep-moving", name: "Keep moving", category: "Motivation", image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=700&q=85" },
  { slug: "night-bloom", name: "Night bloom", category: "Illustration", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85" },
];
