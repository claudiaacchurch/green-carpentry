import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Green Carpentry | Construction & Renovation",
  description:
    "Green Carpentry — construction and renovation services across Somerset and the South West. Loft conversions, extensions, full house renovations, and commercial refurbishments.",
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
      </head>
      <body className={`${bebas.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
