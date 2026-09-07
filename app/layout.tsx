import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memories | Make it yours",
  description: "Premium print-on-demand pieces made from your ideas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}