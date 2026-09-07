"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { catalogProducts } from "@/app/data/catalog";

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const product = catalogProducts[0];
  const total = 34 * quantity;
  return <main className="commerce-page"><header className="commerce-header"><Link className="logo dark-logo" href="/">memories<span>.</span></Link><nav><Link href="/shop">Shop</Link><Link href="/designs">Design library</Link><Link href="/about">About</Link></nav></header><div className="cart-layout"><div><Link className="back-link" href="/shop"><ArrowLeft size={15} /> Continue shopping</Link><p className="eyebrow">Your bag / 04</p><h1>Ready when<br /><em>you are.</em></h1><div className="cart-line"><div className="cart-thumb"><Image src={product.image} alt={product.alt} fill sizes="80px" /></div><div className="cart-line-copy"><h2>{product.name}</h2><p>{product.type} · Custom design</p><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={14} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={14} /></button></div></div><strong>${total}</strong><button className="remove-button" aria-label="Remove item"><Trash2 size={16} /></button></div></div><aside className="summary-panel"><p className="eyebrow">Order summary</p><div><span>Subtotal</span><strong>${total}</strong></div><div><span>Shipping</span><span>Calculated at checkout</span></div><div className="summary-total"><span>Total</span><strong>${total}</strong></div><Link className="button button-dark" href="/checkout">Continue to checkout <ArrowRight size={17} /></Link></aside></div></main>;
}
