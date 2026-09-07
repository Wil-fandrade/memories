import Link from "next/link";

export default function AboutPage() {
  return <main className="commerce-page about-page"><header className="commerce-header"><Link className="logo dark-logo" href="/">memories<span>.</span></Link><nav><Link href="/shop">Shop</Link><Link href="/designs">Design library</Link><Link href="/cart">Cart</Link></nav></header><section className="about-hero"><p className="eyebrow">About Memories</p><h1>Make room for<br /><em>the idea.</em></h1><p>Memories is a print studio for objects with a point of view. We make the blank, you bring the spark.</p><Link className="button button-dark" href="/design-studio">Open the studio</Link></section></main>;
}
