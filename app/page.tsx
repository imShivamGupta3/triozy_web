import HomeClient from "./HomeClient";

export const metadata = {
  metadataBase: new URL("https://triozy.com"),

  title: {
    default: "Triozy – Find Broker-Free Flats, Flatmates & Local Services",
    template: "%s | Triozy",
  },

  description: "Find broker-free flats, PGs, rooms, compatible flatmates, maids, tiffin services and local marketplace listings with Triozy.",

  keywords: [
    "broker free flats",
    "broker free PG",
    "flatmates",
    "roommates",
    "rooms for rent",
    "maids in indore",
    "tiffin services",
    "buy sell marketplace",
    "student housing",
    "room finder",
    "PG near me",
    "shared rooms",
    "local services",
    "pg in indore",
    "flatmates in indore"
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "Housing and Local Services",

  openGraph: {
    title: "Triozy – Find Broker-Free Flats, Flatmates & Local Services",
    description: "Discover broker-free flats, PGs, flatmates, maids, tiffin services and local marketplace listings.",
    url: "https://triozy.com",
    siteName: "Triozy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Triozy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Triozy – Find Broker-Free Flats, Flatmates & Local Services",
    description: "Discover broker-free flats, PGs, flatmates, maids and local services.",
    images: ["/og-image.png"],
  },
};

export default function TriozyLandingPagePro() {
  return <HomeClient />;
}
