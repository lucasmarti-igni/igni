import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { cursos } from "@/lib/cursos";
import { proximamente } from "@/lib/proximamente";

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

        <h2 className="text-2xl font-semibold mt-16 mb-2 text-[#2E2A22]">
          Próximamente
        </h2>
        <p className="text-[#7A6F5F] mb-6 max-w-2xl">
          IGNI crece de forma progresiva. Estas formaciones ya están en camino.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proximamente.map((p) => (
            <div
              key={p.nombre}
              className="rounded-xl border border-dashed border-[#E4D9C8] p-6 text-[#8A8070]"
            >
              <p className="font-medium text-[#2E2A22]">{p.nombre}</p>
              <p className="text-sm mt-1">{p.detalle}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
