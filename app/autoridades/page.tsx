import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Autoridades y docentes | IGNI",
  description:
    "Conocé la dirección y el cuerpo docente de IGNI, la escuela de oficio, técnica y pensamiento culinario.",
};

export default function AutoridadesPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-[#2E2A22]">
          Autoridades y docentes
        </h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-8">
            <p className="text-xs uppercase tracking-wide text-[#B8944A] mb-3">
              Dirección
            </p>
            <p className="font-medium text-lg text-[#2E2A22]">Mónica Ramos</p>
            <p className="mt-2 text-[#7A6F5F] text-sm leading-relaxed">
              Docente y técnico en administración.
            </p>
          </div>
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-8">
            <p className="text-xs uppercase tracking-wide text-[#B8944A] mb-3">
              Dirección académica y docente de Parrilla y Fuego
            </p>
            <p className="font-medium text-lg text-[#2E2A22]">Lucas Martí Boldrini</p>
            <p className="mt-2 text-[#7A6F5F] text-sm leading-relaxed">
              Presidente y fundador de AEAP (Asociación Española de Asadores y
              Parrilleros), Promotor de Marca País Argentina y autor de tres
              libros publicados.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-[#8A8070]">
          El cuerpo docente que dicta cada nivel se suma a esta sección a
          medida que se confirma.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
