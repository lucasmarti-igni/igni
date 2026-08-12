import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "IGNI | Certificación culinaria profesional online y en español",
  description:
    "IGNI certifica técnica, producto y pensamiento culinario con el aval conjunto de una universidad acreditada y una asociación profesional del sector, verificable con código QR. Cien por ciento online y en español.",
};

// TODO: reemplazar por el número real de WhatsApp de IGNI en cuanto Lucas lo confirme.
const WHATSAPP_NUMERO = "5491100000000";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />

      <a
        href={`https://wa.me/${WHATSAPP_NUMERO}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] shadow-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.362.687 4.564 1.872 6.418L4 29l7.755-1.836A11.94 11.94 0 0 0 16.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.6 1.09 1.115-4.482-.232-.368A9.7 9.7 0 0 1 6.25 15c0-5.376 4.375-9.75 9.751-9.75 5.375 0 9.75 4.374 9.75 9.75s-4.375 9.75-9.75 9.75zm5.34-7.29c-.293-.147-1.734-.856-2.003-.953-.269-.098-.464-.147-.66.147-.195.293-.756.953-.927 1.148-.171.196-.342.22-.635.073-.293-.147-1.238-.456-2.36-1.457-.872-.778-1.461-1.739-1.632-2.032-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.514.146-.171.195-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.592-.905-2.181-.238-.573-.481-.496-.66-.505l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.446 0 1.442 1.05 2.836 1.197 3.032.147.196 2.067 3.157 5.008 4.428.7.302 1.246.483 1.672.618.702.223 1.34.191 1.845.116.563-.084 1.734-.709 1.979-1.394.244-.685.244-1.271.171-1.394-.073-.122-.269-.196-.562-.343z"/>
        </svg>
      </a>

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
          Parrilla y Fuego es la primera formación de IGNI: tres niveles,
          cada uno con su propio certificado, hasta llegar a la
          certificación universitaria completa.
        </p>
        <Link
          href="/cursos/parrilla-y-fuego"
          className="inline-block bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
        >
          Ver niveles y precios →
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
