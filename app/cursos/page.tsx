import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { cursos } from "@/lib/cursos";

export const metadata: Metadata = {
  title: "Cursos | IGNI",
  description:
    "Conocé las formaciones disponibles en IGNI y las próximas a lanzarse, cada una con su propio recorrido de niveles y certificación.",
};

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Los cursos
        </h1>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Listado de cursos disponibles en IGNI. Cada uno tiene su propio
          recorrido de niveles y certificación.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {cursos.map((c) => (
            <Link
              key={c.slug}
              href={`/cursos/${c.slug}`}
              className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6 hover:border-[#B8944A] transition-colors"
            >
              <p className="font-medium text-lg text-[#2E2A22]">{c.nombre}</p>
              <p className="mt-2 text-sm text-[#8A8070]">{c.resumen}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-dashed border-[#E4D9C8] p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-medium text-[#2E2A22]">
              IGNI crece de forma progresiva
            </p>
            <p className="text-sm text-[#8A8070] mt-1">
              Conocé las próximas formaciones en camino.
            </p>
          </div>
          <Link
            href="/proximamente"
            className="text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors font-medium"
          >
            Ver próximamente →
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
