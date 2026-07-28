import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IGNI",
  description: "Plataforma de certificacion IGNI - Escuela I: Fuego y Parrilla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
