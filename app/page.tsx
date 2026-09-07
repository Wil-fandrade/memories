"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, Check, Heart, Menu, Pause, Play, Plus, Search, ShoppingBag,
  Sparkles, Upload, X,
} from "lucide-react";

type HeroItem = { number: string; label: string; title: string; description: string; image: string; tags: string[] };
type Product = { name: string; type: string; price: string; image: string; alt: string };

const heroItems: HeroItem[] = [
  { number: "01", label: "T-shirts", title: "Wear the idea.", description: "Premium cotton, printed with the thing only you could imagine.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1300&q=85", tags: ["Premium cotton", "DTF print", "Soft touch"] },
  { number: "02", label: "Caps", title: "Make your mark.", description: "A signature on the pieces you reach for every day.", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1300&q=85", tags: ["Adjustable fit", "Embroidered", "Built to last"] },
  { number: "03", label: "Mugs & tumblers", title: "Your ritual, reimagined.", description: "Start the morning with something made entirely yours.", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=1300&q=85", tags: ["Ceramic", "Gift ready", "Long-lasting"] },
  { number: "04", label: "Hoodies", title: "Soft outside the lines.", description: "Heavyweight comfort for ideas that refuse to sit still.", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1300&q=85", tags: ["Premium fabric", "Soft interior", "High durability"] },
  { number: "05", label: "Pants", title: "Build the whole look.", description: "The finishing piece for a wardrobe with a point of view.", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1300&q=85", tags: ["Everyday fit", "Made to order", "Custom print"] },
  { number: "06", label: "Custom apparel", title: "Start with anything.", description: "Your idea does not need a category. We will find it a home.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1300&q=85", tags: ["Your canvas", "Small batches", "Made for you"] },
];

const products: Product[] = [
  { name: "The Daily Tee", type: "Heavyweight cotton", price: "$34", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85", alt: "White t-shirt on a model" },
  { name: "Studio Hoodie", type: "Brushed fleece", price: "$68", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85", alt: "Stone hoodie" },
  { name: "Everyday Cap", type: "Cotton twill", price: "$28", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85", alt: "Black cap" },
  { name: "Morning Tumbler", type: "Stainless steel", price: "$32", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", alt: "Steel travel tumbler" },
];

const designs = [
  ["Good things take time", "Typography", "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=85"],
  ["Keep moving", "Motivation", "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=700&q=85"],
  ["Night bloom", "Illustration", "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85"],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cart, setCart] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  const [filter, setFilter] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleDesigns = filter === "All" ? designs : designs.filter(([, category]) => category === filter);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroItems.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const chooseHero = (index: number) => { setActive(index); setPaused(true); };
  const runGeneration = () => { setGenerating(true); window.setTimeout(() => { setGenerating(false); setGenerated(true); }, 1400); };

  return (
    <main>
      <nav className="nav-shell">
        <a className="logo" href="#top" aria-label="Memories home"><span className="logo-mark">M</span>memories<span className="logo-dot">.</span></a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {[["Shop", "#shop"], ["Customize", "#studio"], ["Design library", "#library"], ["Inspiration", "#story"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <div className="nav-actions"><button className="icon-button" aria-label="Search"><Search size={18} /></button><button className="icon-button cart-button" aria-label={`Cart, ${cart} items`} onClick={() => setCart((count) => count + 1)}><ShoppingBag size={18} />{cart > 0 && <b>{cart}</b>}</button><button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-intro"><p className="eyebrow">Print the feeling <span>↗</span></p><h1>Make it<br /><em>yours.</em></h1><p className="hero-note">Thoughtful objects for<br />the ideas that stay with you.</p></div>
        <div className="accordion" aria-label="Product categories">
          {heroItems.map((item, index) => <button className={`hero-panel ${active === index ? "active" : ""}`} key={item.number} onClick={() => chooseHero(index)} aria-label={`View ${item.label}`}>
            <img src={item.image} alt="" />
            <div className="panel-shade" />
            <div className="panel-label"><span>{item.number}</span><strong>{item.label}</strong></div>
            <AnimatePresence mode="wait">{active === index && <motion.div className="panel-copy" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: .15 }}><p className="eyebrow">{item.number} / 06</p><h2>{item.title}</h2><p>{item.description}</p><span className="text-link">Customize now <ArrowRight size={16} /></span><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></motion.div>}</AnimatePresence>
          </button>)}
        </div>
        <div className="hero-controls"><button onClick={() => setPaused(!paused)} aria-label={paused ? "Resume autoplay" : "Pause autoplay"}>{paused ? <Play size={14} /> : <Pause size={14} />}</button><div className="progress"><span style={{ width: `${((active + 1) / heroItems.length) * 100}%` }} /></div><span>0{active + 1} / 06</span></div>
      </section>

      <section className="section products-section" id="shop"><div className="section-heading"><div><p className="eyebrow">The edit / 01</p><h2>Made for the<br /><em>everyday.</em></h2></div><a className="text-link" href="#library">View all pieces <ArrowRight size={16} /></a></div><div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.alt} /><button className={`heart ${liked.includes(index) ? "liked" : ""}`} aria-label={`Favorite ${product.name}`} onClick={() => setLiked((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index])}><Heart size={18} fill={liked.includes(index) ? "currentColor" : "none"} /></button><button className="quick-add" onClick={() => setCart((count) => count + 1)}>Quick add <Plus size={15} /></button></div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.type}</p></div><strong>{product.price}</strong></div><div className="swatches"><i /><i /><i /></div></article>)}</div></section>

      <section className="studio-section" id="studio"><div className="studio-copy"><p className="eyebrow">The creative room / 02</p><h2>Start with a<br /><em>feeling.</em></h2><p>Upload an image, start from scratch, or let a little AI turn a half-formed thought into something you can hold.</p><a className="button button-dark" href="#create">Open the studio <ArrowRight size={17} /></a></div><div className="studio-options" id="create"><button className="studio-option" onClick={() => document.getElementById("file-upload")?.click()}><span className="option-icon"><Upload size={20} /></span><span><b>Upload a design</b><small>{uploaded ? "Your image is ready" : "PNG, JPG, SVG up to 10MB"}</small></span><ArrowRight size={18} /></button><input id="file-upload" type="file" accept="image/png,image/jpeg,image/svg+xml" hidden onChange={() => setUploaded(true)} /><button className="studio-option" onClick={() => setSelectedDesign("A blank canvas") }><span className="option-icon"><Plus size={20} /></span><span><b>Make it from scratch</b><small>Text, shapes, layers, the works</small></span><ArrowRight size={18} /></button><button className="studio-option ai-option" onClick={runGeneration}><span className="option-icon"><Sparkles size={20} /></span><span><b>{generating ? "Making a little magic..." : "Ask the studio AI"}</b><small>{generated ? "4 ideas are waiting below" : "Describe the thing in your head"}</small></span>{generating ? <span className="spinner" /> : <ArrowRight size={18} />}</button></div></section>

      <section className="library-section section" id="library"><div className="section-heading"><div><p className="eyebrow">The library / 03</p><h2>Find your<br /><em>starting point.</em></h2></div><div className="filter-row">{["All", "Typography", "Motivation", "Illustration"].map((item) => <button className={filter === item ? "selected" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="design-grid">{designs.map(([name, category, image]) => <button className="design-card" key={name} onClick={() => setSelectedDesign(name)}><img src={image} alt={name} /><span className="design-overlay"><small>{category}</small><b>{name}</b><span>Use this design <ArrowRight size={14} /></span></span></button>)}</div>{(selectedDesign || generated || uploaded) && <div className="toast"><Check size={16} /> {selectedDesign ? `${selectedDesign} selected` : uploaded ? "Upload ready to customize" : "Your ideas are ready"}<button aria-label="Dismiss" onClick={() => { setSelectedDesign(null); setGenerated(false); setUploaded(false); }}><X size={14} /></button></div>}</section>
        <section className="library-section section" id="library"><div className="section-heading"><div><p className="eyebrow">The library / 03</p><h2>Find your<br /><em>starting point.</em></h2></div><div className="filter-row">{["All", "Typography", "Motivation", "Illustration"].map((item) => <button className={filter === item ? "selected" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="design-grid">{visibleDesigns.map(([name, category, image]) => <button className="design-card" key={name} onClick={() => setSelectedDesign(name)}><img src={image} alt={name} /><span className="design-overlay"><small>{category}</small><b>{name}</b><span>Use this design <ArrowRight size={14} /></span></span></button>)}</div>{(selectedDesign || generated || uploaded) && <div className="toast"><Check size={16} /> {selectedDesign ? `${selectedDesign} selected` : uploaded ? "Upload ready to customize" : "Your ideas are ready"}<button aria-label="Dismiss" onClick={() => { setSelectedDesign(null); setGenerated(false); setUploaded(false); }}><X size={14} /></button></div>}</section>

      <section className="story-section" id="story"><div className="story-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" alt="Person wearing a custom printed shirt" /></div><div className="story-copy"><p className="eyebrow">How it works / 04</p><h2>Good design<br /><em>takes a minute.</em></h2><ol><li><b>Choose</b><span>Pick the blank that fits your life.</span></li><li><b>Create</b><span>Bring an idea, an image, or a feeling.</span></li><li><b>Make it yours</b><span>We print it carefully and send it your way.</span></li></ol><a className="text-link" href="#studio">Create something <ArrowRight size={16} /></a></div></section>

      <footer><div className="footer-top"><div><a className="logo" href="#top"><span className="logo-mark">M</span>memories<span className="logo-dot">.</span></a><p>Objects with a point of view.<br />Made one idea at a time.</p></div><div className="footer-links"><div><b>Explore</b><a href="#shop">Shop all</a><a href="#library">Design library</a><a href="#studio">Customize</a></div><div><b>Help</b><a href="#top">Shipping & returns</a><a href="#top">FAQs</a><a href="#top">Contact</a></div><div className="newsletter"><b>Stay in the loop</b><p>New drops, good ideas, no noise.</p><label><input type="email" placeholder="Your email address" aria-label="Email address" /><button aria-label="Subscribe"><ArrowRight size={17} /></button></label></div></div></div><div className="footer-bottom"><span>© 2026 Memories Studio</span><span>Designed to be kept.</span><span>Instagram ↗ &nbsp; Pinterest ↗</span></div></footer>
    </main>
  );
}