import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const bebas = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const description =
  "Green Carpentry — construction and renovation services across Somerset and the South West. Loft conversions, extensions, full house renovations, and commercial refurbishments.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Green Carpentry | Construction & Renovation",
    template: "%s | Green Carpentry",
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Green Carpentry",
    title: "Green Carpentry | Construction & Renovation",
    description,
    url: "/",
    images: [
      {
        url: "/media/og/loft-conversion-north-somerset.jpg",
        width: 1200,
        height: 630,
        alt: "Green Carpentry loft conversion in North Somerset",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://iframe.mediadelivery.net" />
        <link rel="dns-prefetch" href="https://iframe.mediadelivery.net" />
        <link rel="preconnect" href="https://assets.mediadelivery.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://video-1365.mediadelivery.net" />
      </head>
      <body className={`${bebas.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
