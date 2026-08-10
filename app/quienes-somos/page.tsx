import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Quiénes somos | IGNI",
  description:
    "IGNI es una escuela de oficio, técnica y pensamiento culinario. Formamos criterio y rigor profesional con certificación dual verificable con código QR.",
};

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-[#2E2A22]">
          Quiénes somos
        </h1>
        <div className="text-[#7A6F5F] max-w-3xl leading-relaxed space-y-5">
          <p>
            IGNI es una escuela de oficio, técnica y pensamiento culinario.
          </p>
          <p>
            Formamos criterio y rigor profesional, no solo técnica suelta.
            Cada programa combina técnica, producto y pensamiento culinario,
            con certificación conjunta de una universidad acreditada y una
            asociación profesional del sector, verificable con código QR.
          </p>
          <p>
            Empezamos por el fuego, con Fuego y Parrilla como primera
            formación, pero el proyecto sigue creciendo hacia otras áreas
            de la cocina.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
