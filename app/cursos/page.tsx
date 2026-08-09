import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { cursos } from "@/lib/cursos";

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
      </section>
      <SiteFooter />
    </main>
  );
}
