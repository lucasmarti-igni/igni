import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "IGNI | Certificación culinaria profesional online y en español",
  description:
    "IGNI certifica técnica, producto y pensamiento culinario con el aval conjunto de una universidad acreditada y una asociación profesional del sector, verificable con código QR. Cien por ciento online y en español.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#E4D9C8]">
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.18em] text-[#B8944A] mb-4">
            Certificación profesional dual
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-[#2E2A22]">
            La misma exigencia de las grandes escuelas de cocina, sin
            salir de tu casa
          </h1>
          <p className="text-[#7A6F5F] max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            IGNI certifica técnica, producto y pensamiento culinario con el
            aval conjunto de una universidad acreditada y una asociación
            profesional del sector, verificable con código QR, cien por
            ciento online y en español.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cursos"
              className="bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
            >
              Empezá tu certificación
            </Link>
            <Link
              href="/verificar"
              className="border border-[#A9AEB2] text-[#5C5648] hover:border-[#7A6F5F] transition-colors font-medium rounded-full px-6 py-3"
            >
              Verificar un certificado
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#E4D9C8]">
        <h2 className="text-2xl font-semibold mb-4 text-[#2E2A22]">
          Quiénes somos
        </h2>
        <p className="text-[#7A6F5F] max-w-3xl leading-relaxed">
          IGNI enseña oficio, técnica y pensamiento culinario con el rigor
          de una escuela profesional. Cada nivel suma un certificado
          propio, verificable con código QR, hasta llegar a la
          certificación universitaria completa.
        </p>
        <Link
          href="/quienes-somos"
          className="inline-block mt-6 text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors"
        >
          Conocé más sobre IGNI →
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-4 text-[#2E2A22]">
          Empezá tu certificación
        </h2>
        <p className="text-[#7A6F5F] max-w-2xl mb-8 leading-relaxed">
          Fuego y Parrilla es la primera formación de IGNI: tres niveles,
          cada uno con su propio certificado, hasta llegar a la
          certificación universitaria completa.
        </p>
        <Link
          href="/cursos/fuego-y-parrilla"
          className="inline-block bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
        >
          Ver niveles y precios →
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
