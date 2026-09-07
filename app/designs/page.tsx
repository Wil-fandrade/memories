import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { designTemplates } from "@/app/data/catalog";

export default function DesignsPage() {
  return <main className="commerce-page"><header className="commerce-header"><Link className="logo dark-logo" href="/">memories<span>.</span></Link><nav><Link href="/shop">Shop</Link><Link href="/design-studio">Create</Link><Link href="/cart">Cart</Link></nav></header><div className="commerce-intro"><Link className="back-link" href="/"><ArrowLeft size={15} /> Home</Link><p className="eyebrow">Design library / 02</p><h1>Find your<br /><em>starting point.</em></h1><p>Templates are just invitations. Change the words, switch the colors, make them yours.</p></div><div className="commerce-design-grid">{designTemplates.map((design) => <article className="commerce-design" key={design.slug}><div className="commerce-design-image"><Image src={design.image} alt={design.name} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><p className="eyebrow">{design.category}</p><h2>{design.name}</h2><Link className="text-link" href={`/design-studio?design=${design.slug}`}>Use this design <ArrowRight size={16} /></Link></article>)}</div></main>;
}
