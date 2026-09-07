"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, LoaderCircle, Sparkles } from "lucide-react";
import { generateDesign, type DesignGenerationResult } from "@/app/services/ai-design";

export default function DesignStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Streetwear");
  const [results, setResults] = useState<DesignGenerationResult[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (event: FormEvent) => { event.preventDefault(); if (!prompt.trim()) { setMessage("Describe an idea to begin."); return; } setMessage(""); setIsGenerating(true); setResults(await generateDesign({ prompt, style, palette: "Colorful", composition: "Centered" })); setIsGenerating(false); };
  return <main className="commerce-page studio-page"><header className="commerce-header"><Link className="logo dark-logo" href="/">memories<span>.</span></Link><nav><Link href="/shop">Shop</Link><Link href="/designs">Library</Link><Link href="/cart">Cart</Link></nav></header><div className="studio-layout"><div className="studio-heading"><Link className="back-link" href="/"><ArrowLeft size={15} /> Home</Link><p className="eyebrow">Creative room / 03</p><h1>Turn the thought<br /><em>into a thing.</em></h1><p>Describe a feeling, a reference, or a strange little idea. This prototype keeps the provider behind a server-side adapter.</p></div><form className="prompt-panel" onSubmit={handleSubmit}><label className="field-label" htmlFor="prompt">What are you imagining?</label><textarea id="prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="A vintage sun on a skateboard, warm ink, slightly imperfect..." rows={5} /><div className="studio-controls"><label className="field-label" htmlFor="style">Style<select id="style" value={style} onChange={(event) => setStyle(event.target.value)}><option>Streetwear</option><option>Minimal</option><option>Vintage</option><option>Illustration</option></select></label><button className="button button-dark" disabled={isGenerating}>{isGenerating ? <LoaderCircle className="spin-icon" size={17} /> : <Sparkles size={17} />}{isGenerating ? "Generating" : "Generate design"}</button></div>{message && <p className="form-message">{message}</p>}</form></div>{results.length > 0 && <section className="generation-results"><div className="section-heading"><div><p className="eyebrow">Your first direction</p><h2>Four ways<br /><em>forward.</em></h2></div><span className="mock-label">Mock provider results</span></div><div className="generation-grid">{results.map((result) => <article key={result.id}><div className="generation-image"><Image src={result.preview} alt="Generated design direction" fill sizes="(max-width: 800px) 100vw, 25vw" /></div><h3>{result.title}</h3><Link className="text-link" href={`/cart?design=${result.id}`}>Use this direction <ArrowRight size={15} /></Link></article>)}</div></section>}</main>;
}
