import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { catalogProducts } from "@/app/data/catalog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) notFound();
  return (
    <main className="commerce-page">
      <header className="commerce-header">
        <Link className="logo dark-logo" href="/">memories<span>.</span></Link>
        <nav><Link href="/shop">Shop</Link><Link href="/designs">Design library</Link><Link href="/cart">Cart</Link></nav>
      </header>
      <div className="product-detail">
        <Link className="back-link" href="/shop"><ArrowLeft size={15} /> Back to shop</Link>
        <div className="detail-grid">
          <div className="detail-image"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 800px) 100vw, 55vw" priority /></div>
          <div className="detail-copy">
            <p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="detail-type">{product.type}</p><strong className="detail-price">{product.price}</strong><p className="detail-description">{product.description}</p>
            <label className="field-label" htmlFor="size">Size</label>
            <select id="size" defaultValue={product.sizes[0]}>{product.sizes.map((size) => <option key={size}>{size}</option>)}</select>
            <label className="field-label" htmlFor="color">Color</label>
            <div className="color-options">{product.colors.map((color) => <button key={color} className="color-swatch" style={{ backgroundColor: color }} aria-label={`Select ${color}`} />)}</div>
            <div className="detail-actions"><Link className="button button-dark" href={`/design-studio?product=${product.slug}`}>Customize product <ArrowRight size={17} /></Link><Link className="studio-link" href="/design-studio"><Sparkles size={16} /> Start with AI</Link></div>
          </div>
        </div>
      </div>
    </main>
  );
}
