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
  { slug: "oversized-tee", name: "Premium Oversized Tee", type: "Relaxed heavyweight cotton", price: "$42", description: "More room for a bigger point of view.", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85", alt: "Oversized black t-shirt", category: "T-shirts", colors: ["#202322", "#eee8db"], sizes: ["S", "M", "L", "XL"] },
  { slug: "classic-cap", name: "Classic Cap", type: "Six-panel cotton twill", price: "$30", description: "A clean canvas for a quiet signature.", image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=900&q=85", alt: "Neutral classic cap", category: "Caps", colors: ["#d0b79e", "#202322"], sizes: ["One size"] },
  { slug: "ceramic-mug", name: "Ceramic Mug", type: "12 oz stoneware", price: "$24", description: "A little ritual, made personal.", image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=900&q=85", alt: "Ceramic mug on a table", category: "Drinkware", colors: ["#f1efe9", "#202322"], sizes: ["12 oz"] },
  { slug: "custom-hoodie", name: "Custom Hoodie", type: "Premium brushed fleece", price: "$78", description: "Your biggest ideas deserve a softer landing.", image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=85", alt: "Premium hoodie", category: "Hoodies", colors: ["#7f8a86", "#202322"], sizes: ["S", "M", "L", "XL"] },
  { slug: "studio-jogger", name: "Studio Jogger", type: "Loopback cotton", price: "$58", description: "Made for making, moving, and starting again.", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85", alt: "Cotton jogger pants", category: "Pants", colors: ["#202322", "#b2aa9d"], sizes: ["S", "M", "L", "XL"] },
  { slug: "long-sleeve", name: "Long Sleeve", type: "Soft ring-spun cotton", price: "$46", description: "A little extra space for the season ahead.", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85", alt: "Long sleeve shirt", category: "Apparel", colors: ["#eee8db", "#6b7771"], sizes: ["S", "M", "L", "XL"] },
  { slug: "premium-sweatshirt", name: "Premium Sweatshirt", type: "Heavy French terry", price: "$62", description: "The everyday layer with a point of view.", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85", alt: "Premium cream sweatshirt", category: "Apparel", colors: ["#eee8db", "#383f3b"], sizes: ["S", "M", "L", "XL"] },
  { slug: "custom-pants", name: "Custom Pants", type: "Relaxed utility fit", price: "$72", description: "Build the whole look from the ground up.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85", alt: "Relaxed custom pants", category: "Pants", colors: ["#252827", "#c8b8a5"], sizes: ["S", "M", "L", "XL"] },
];

export const designTemplates: DesignTemplate[] = [
  { slug: "good-things", name: "Good things take time", category: "Typography", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=85" },
  { slug: "keep-moving", name: "Keep moving", category: "Motivation", image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=700&q=85" },
  { slug: "night-bloom", name: "Night bloom", category: "Illustration", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85" },
  { slug: "slow-sunday", name: "Slow Sunday", category: "Minimal", image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?auto=format&fit=crop&w=700&q=85" },
  { slug: "loud-and-clear", name: "Loud and clear", category: "Typography", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=85" },
  { slug: "wild-at-heart", name: "Wild at heart", category: "Animals", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=85" },
  { slug: "after-hours", name: "After hours", category: "Music", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=85" },
  { slug: "match-point", name: "Match point", category: "Sports", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=700&q=85" },
  { slug: "good-energy", name: "Good energy", category: "Motivation", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=700&q=85" },
  { slug: "retro-sun", name: "Retro sun", category: "Vintage", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85" },
  { slug: "electric-dream", name: "Electric dream", category: "Abstract", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85" },
  { slug: "stay-curious", name: "Stay curious", category: "Typography", image: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=700&q=85" },
  { slug: "good-company", name: "Good company", category: "Funny", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=85" },
  { slug: "no-rules", name: "No rules", category: "Streetwear", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=85" },
  { slug: "home-team", name: "Home team", category: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=85" },
  { slug: "soft-focus", name: "Soft focus", category: "Minimal", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85" },
  { slug: "orbit", name: "Orbit", category: "Abstract", image: "https://images.unsplash.com/photo-1534791547706-8b7f9f995f0b?auto=format&fit=crop&w=700&q=85" },
  { slug: "weekend-club", name: "Weekend club", category: "Streetwear", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85" },
  { slug: "tiny-rebellion", name: "Tiny rebellion", category: "Funny", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=85" },
];
