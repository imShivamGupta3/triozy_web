import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalHeader from "../components/GlobalHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triozy.com"),
  title: "Triozy: Verified PGs, Flatmate Finder & Marketplace App",
  description: "Find verified rooms, PGs, trusted flatmates & daily essentials like used furniture in one app. Triozy streamlines city relocation with secure chat and zero broker hassle.",
  keywords: "Find flatmates near me, Best PG app, Buy used furniture locally, rooms for rent, broker free flats, student housing, PG near me, Triozy App",
  openGraph: {
    title: "Triozy: Move Smarter, Settle Faster",
    description: "Find verified rooms, PGs, trusted flatmates & daily essentials in one app.",
    url: "https://triozy.com",
    siteName: "Triozy App",
    images: [
      {
        url: "/Banner.webp", // This will show up beautifully when you paste your link in WhatsApp/LinkedIn
        width: 1200,
        height: 630,
        alt: "Triozy App Ecosystem for Housing and Marketplace",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triozy: Move Smarter, Settle Faster",
    description: "Find verified rooms, PGs, trusted flatmates & daily essentials in one app.",
    images: ["/Banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5507752351572129"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col">
        <GlobalHeader />
        {children}
      </body>
    </html>
  );
}
