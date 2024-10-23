import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Literata } from "next/font/google";

export const metadata: Metadata = {
  title: "Sabr Resort Hotel",
  description: "Comfort & Luxury",
};

const literata = Literata({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body>
        <Navbar />
        <main className={literata.className}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
