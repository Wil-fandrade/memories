"use client";

import {
  ArrowUpRight,
  ChevronDown,
  Download,
  ImagePlus,
  LayoutGrid,
  Menu,
  Plus,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";
import { ChangeEvent, useState } from "react";

const inspirations = [
  { title: "Sunday, 1998", category: "Family archive", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=85", tone: "sage" },
  { title: "Summer light", category: "Collected moments", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85", tone: "sun" },
  { title: "Letters home", category: "Small things", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=85", tone: "clay" },
];

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const [activeTab, setActiveTab] = useState("Canvas");
  const [caption, setCaption] = useState("The places we return to");
  const [image, setImage] = useState(inspirations[0].image);
  const [isGenerating, setIsGenerating] = useState(false);
  const [notice, setNotice] = useState("");

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setNotice("Image added to your canvas");
  }

  function generateCaption() {
    setIsGenerating(true);
    setNotice("");
    window.setTimeout(() => {
      setCaption("A little proof that ordinary days become everything");
      setIsGenerating(false);
      setNotice("Caption refreshed with Claude");
    }, 900);
  }

  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileNav ? "sidebar-open" : ""}`}>
        <div className="brand-row">
          <a className="brand" href="#top" aria-label="Memories home"><span className="brand-mark">M</span><span>memories</span></a>
          <button className="icon-button mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X size={18} /></button>
        </div>
        <button className="new-project"><Plus size={16} /> New memory <span>⌘ N</span></button>
        <nav className="primary-nav" aria-label="Primary navigation">
          {["Canvas", "Collections", "Discover"].map((item, index) => (
            <button className={activeTab === item ? "nav-item active" : "nav-item"} key={item} onClick={() => setActiveTab(item)}>
              {index === 0 ? <WandSparkles size={17} /> : index === 1 ? <LayoutGrid size={17} /> : <Sparkles size={17} />}{item}{item === "Collections" && <span className="nav-count">12</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-rule" /><p className="eyebrow">Your studio</p>
        <nav className="secondary-nav"><button className="nav-item"><span className="color-dot dot-coral" /> Recent memories</button><button className="nav-item"><span className="color-dot dot-yellow" /> Family archive</button><button className="nav-item"><span className="color-dot dot-green" /> Places</button></nav>
        <div className="sidebar-footer"><div className="storage-label"><span>Storage</span><span>2.4 / 10 GB</span></div><div className="storage-bar"><span /></div><button className="profile"><span className="avatar">EA</span><span><strong>Einsof A.</strong><small>Personal studio</small></span><ChevronDown size={15} /></button></div>
      </aside>

      <section className="workspace" id="top">
        <header className="topbar"><button className="icon-button mobile-menu" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={20} /></button><div className="breadcrumbs"><span>Canvas</span><span className="slash">/</span><strong>{activeTab === "Canvas" ? "Untitled memory" : activeTab}</strong></div><div className="top-actions"><span className="saved-status"><span className="saved-dot" /> Saved just now</span><button className="icon-button" title="Download memory" aria-label="Download memory"><Download size={18} /></button><button className="publish-button">Share <ArrowUpRight size={15} /></button></div></header>
        <div className="workspace-content">
          <div className="intro-row"><div><p className="kicker">A quiet place for loud memories</p><h1>Make something<br /><em>worth keeping.</em></h1></div><p className="intro-copy">Bring a moment to life with a little help from AI.<br />Shape it, save it, share it.</p></div>
          <div className="studio-grid">
            <section className="canvas-column"><div className="section-toolbar"><div><span className="section-index">01</span><span className="section-title">Your canvas</span></div><button className="quiet-button">Auto layout <ChevronDown size={14} /></button></div><div className="memory-canvas"><div className="canvas-image-wrap"><img src={image} alt="A memory selected for the canvas" /><div className="image-tag">IMG · 01 <span>Original</span></div></div><div className="canvas-copy"><div className="copy-meta"><span>MEMORY 001</span><span>SEPTEMBER 2026</span></div><textarea value={caption} onChange={(event) => setCaption(event.target.value)} aria-label="Memory caption" /><p className="canvas-description">Some moments don&apos;t ask to be understood.<br />They ask to be remembered.</p><div className="canvas-signature">— E.A.</div></div><div className="canvas-footer"><span>Made with intention</span><span>01 / 01</span></div></div><div className="canvas-actions"><label className="upload-button"><ImagePlus size={17} /> Add image<input type="file" accept="image/*" onChange={handleUpload} /></label><button className="text-button" onClick={() => setNotice("Your memory is ready to share")}>Save memory <ArrowUpRight size={15} /></button>{notice && <span className="notice">{notice}</span>}</div></section>
            <aside className="tools-column"><div className="section-toolbar"><div><span className="section-index">02</span><span className="section-title">Make it yours</span></div></div><div className="tool-panel"><div className="tool-heading"><span className="tool-icon pink"><Sparkles size={16} /></span><div><strong>Write with AI</strong><span>Find the feeling</span></div><span className="ai-label">CLAUDE</span></div><p className="tool-prompt">What should this memory feel like?</p><div className="prompt-chips"><button onClick={() => setCaption("A little proof that ordinary days become everything")}>Nostalgic</button><button onClick={() => setCaption("The kind of day you wish you could fold away")}>Tender</button><button onClick={() => setCaption("Sun on the table, time moving softly")}>Poetic</button></div><button className="generate-button" onClick={generateCaption} disabled={isGenerating}>{isGenerating ? "Finding the words..." : "Generate a caption"}<WandSparkles size={16} /></button></div><div className="tool-panel image-tool"><div className="tool-heading"><span className="tool-icon yellow"><ImagePlus size={16} /></span><div><strong>Visual direction</strong><span>Set the atmosphere</span></div><span className="ai-label">GPT-4O</span></div><div className="swatch-row"><button className="swatch selected" style={{ backgroundImage: `url(${image})` }} aria-label="Warm original image" /><button className="swatch" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=160&q=80)" }} aria-label="Mountain inspiration" /><button className="swatch" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=160&q=80)" }} aria-label="Green inspiration" /><button className="swatch-add" aria-label="Add visual reference"><Plus size={16} /></button></div><div className="slider-label"><span>Warmth</span><span>68%</span></div><input className="range" type="range" defaultValue="68" aria-label="Warmth" /></div></aside>
          </div>
          <section className="inspiration-section"><div className="section-toolbar inspiration-heading"><div><span className="section-index">03</span><span className="section-title">From the community</span></div><button className="text-button">See all <ArrowUpRight size={15} /></button></div><div className="gallery-grid">{inspirations.map((item) => <button className={`gallery-card ${item.tone}`} key={item.title} onClick={() => { setImage(item.image); setNotice(`${item.title} added to your canvas`); }}><img src={item.image} alt={item.title} /><span className="gallery-overlay"><span>{item.category}</span><strong>{item.title}</strong></span></button>)}</div></section>
          <footer className="page-footer"><span>MEMORIES / 2026</span><span>Make room for what matters.</span><span>Built for keeping.</span></footer>
        </div>
      </section>
    </main>
  );
}
