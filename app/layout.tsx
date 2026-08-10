import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "IGNI | Certificación culinaria profesional online y en español",
  description:
    "IGNI certifica técnica, producto y pensamiento culinario junto a una universidad acreditada y una asociación profesional del sector, verificable con código QR. Cien por ciento online y en español.",
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
