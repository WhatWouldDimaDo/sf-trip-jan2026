import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SF City Rhythms | Jan 2026",
  description: "Curated SF trip itinerary for January 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
