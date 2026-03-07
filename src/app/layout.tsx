import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3, Raleway } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Green Carpentry | Construction & Renovation",
  description:
    "Performance-first construction site blueprint with drone montage, services, and featured projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${sourceSans.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
