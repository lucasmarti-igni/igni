import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { cursos } from "@/lib/cursos";

export default function CursosPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Los cursos
        </h1>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          Listado de cursos disponibles en IGNI. Cada uno tiene su propio
          recorrido de niveles y certificacion.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {cursos.map((c) => (
            <Link
              key={c.slug}
              href={`/cursos/${c.slug}`}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 hover:border-neutral-600 transition-colors"
            >
              <p className="font-medium text-lg">{c.nombre}</p>
              <p className="mt-2 text-sm text-neutral-500">{c.resumen}</p>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
