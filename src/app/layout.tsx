import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { SITE_URL } from "@/lib/palm-springs-data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Palm Springs by Nakheel Dubai | Villas, Townhouses, Prices & Masterplan",
    template: "%s | Palm Springs by Nakheel Dubai",
  },
  description:
    "Explore Palm Springs by Nakheel in Hessyan First, Dubai: a 3.8M sq m LEED Platinum Precertified community near Palm Jebel Ali featuring Aliso townhouses (from AED 3.8M) and Rancho villas (from AED 7.0M), 60/40 payment plan, and October 2030 handover.",
  keywords: [
    "Palm Springs Dubai",
    "Palm Springs by Nakheel",
    "Nakheel Palm Springs villas",
    "Aliso townhouses Dubai",
    "Rancho villas Nakheel",
    "Palm Jebel Ali mainland community",
    "Dubai Holding Real Estate Palm Springs",
    "LEED Platinum community Dubai",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "Z86mD2iXxLeb4lazWDCmzqZxiuni_-jcn-0r9S5Ga30",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: "Palm Springs by Nakheel — Dubai",
    title:
      "Palm Springs by Nakheel Dubai | Aliso Townhouses & Rancho Villas",
    description:
      "3.8 million sq m desert-modern community opposite Palm Jebel Ali. Phase 1 (977 homes) sold out for AED 5.5B. Explore unit specs, Canyon Park, payment plan, and Phase 2 updates.",
    images: [
      {
        url: "/images/hero-palm-springs.jpg",
        width: 1408,
        height: 768,
        alt: "Palm Springs by Nakheel golden-hour desert-modern courtyard villa in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palm Springs by Nakheel Dubai | Masterplan & Residences",
    description:
      "3.8M sq m LEED Platinum Precertified community near Palm Jebel Ali. Aliso townhouses from AED 3.8M & Rancho villas from AED 7.0M.",
    images: ["/images/hero-palm-springs.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-[#1b1917] selection:bg-[#a65d3b]/20 selection:text-[#1b1917]">
        {children}
      </body>
    </html>
  );
}
