import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://igni-alpha.vercel.app";
const OG_IMAGE = "/logo%20igni%20dorado%20y%20plata%20fondo%20crema.jpeg";
const SITE_TITLE =
  "IGNI | Certificación culinaria profesional online y en español";
const SITE_DESCRIPTION =
  "IGNI certifica técnica, producto y pensamiento culinario junto a una universidad acreditada y una asociación profesional del sector, verificable con código QR. Cien por ciento online y en español.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "IGNI",
    images: [{ url: OG_IMAGE, width: 800, height: 600, alt: "IGNI" }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-[#F6EFE7] text-[#2E2A22] antialiased">
        {children}
      </body>
    </html>
  );
}
