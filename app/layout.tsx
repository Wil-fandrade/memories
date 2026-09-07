import type { Metadata } from "next";
import "./globals.css";
import "./commerce.css";

export const metadata: Metadata = {
  title: "Memories | Make it yours",
  description: "Premium print-on-demand pieces made from your ideas.",
  metadataBase: new URL("http://localhost:3000"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Memories | Make it yours",
    description: "Premium print-on-demand pieces made from your ideas.",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Memories | Make it yours" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}