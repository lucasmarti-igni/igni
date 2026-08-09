import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "IGNI | Certificacion profesional del oficio del fuego",
  description:
    "IGNI certifica a profesionales del oficio del fuego junto a asociaciones referentes y universidad acreditada. Escuela I: Fuego y Parrilla.",
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
