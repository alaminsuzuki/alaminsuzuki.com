import type { Metadata, Viewport } from "next";
import { Manrope, Syne, Major_Mono_Display } from "next/font/google"; // Import Major Mono Display
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const majorMono = Major_Mono_Display({
  variable: "--font-major-mono",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050608",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://alaminsuzuki.com'),
  title: {
    default: "Al-Amin Suzuki — Design × Build × Identity",
    template: "%s | Al-Amin Suzuki",
  },
  description: "Designer, Builder, and Entrepreneur based in France. J’aide les fondateurs et créatifs à bâtir leur identité en ligne.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: "Al-Amin Suzuki — Design × Build × Identity",
    description: "Designer, Builder, and Entrepreneur based in France.",
    siteName: "Al-Amin Suzuki",
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: "Al-Amin Suzuki Portfolio",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Al-Amin Suzuki — Design × Build × Identity",
    description: "Designer, Builder, and Entrepreneur based in France.",
    images: ['/og.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Default language is 'fr' as requested for the root page
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${syne.variable} ${majorMono.variable} antialiased bg-[#050608] text-[#F5F5F7] selection:bg-white/20`}
      >
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
