import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { catalogProducts } from "@/app/data/catalog";

export default function ShopPage() {
  return (
    <main className="commerce-page">
      <header className="commerce-header"><Link className="logo dark-logo" href="/">memories<span>.</span></Link><nav><Link href="/">Home</Link><Link href="/designs">Design library</Link><Link href="/cart">Cart</Link></nav></header>
      <section className="commerce-intro"><p className="eyebrow">Shop / 01</p><h1>Choose your<br /><em>blank.</em></h1><p>Good materials make room for good ideas. Start with a piece built to become yours.</p></section>
      <section className="commerce-grid">{catalogProducts.map((product) => <article className="commerce-product" key={product.slug}><Link href={`/products/${product.slug}`}><div className="commerce-image"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 700px) 100vw, 25vw" /></div><div className="commerce-meta"><div><h2>{product.name}</h2><p>{product.type}</p></div><strong>{product.price}</strong></div><span className="text-link">Customize <ArrowRight size={16} /></span></Link></article>)}</section>
    </main>
  );
}
