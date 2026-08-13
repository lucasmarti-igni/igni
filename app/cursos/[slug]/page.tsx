import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cursos } from "@/lib/cursos";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const dynamic = "force-static";

export function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const curso = cursos.find((c) => c.slug === params.slug);
  if (!curso) return {};
  return {
    title: `${curso.nombre} | IGNI`,
    description: curso.resumen,
  };
}

export default function CursoPage({
  params,
}: {
  params: { slug: string };
}) {
  const curso = cursos.find((c) => c.slug === params.slug);

  if (!curso) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/cursos"
          className="text-sm text-[#8A8070] hover:text-[#2E2A22] transition-colors"
        >
          ← Volver a los cursos
        </Link>
        <span className="block mt-6 text-xs uppercase tracking-[0.2em] text-[#B8944A] mb-4">
          Curso
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 text-[#2E2A22]">
          {curso.nombre}
        </h1>
        <p className="text-[#7A6F5F] max-w-2xl leading-relaxed">
          {curso.descripcion}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E4D9C8]">
        <h2 className="text-2xl font-semibold mb-2 text-[#2E2A22]">
          ¿Dónde estás hoy?
        </h2>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Elegí tu punto de partida. Cada nivel suma un certificado propio.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {curso.niveles.map((n) => (
            <div
              key={n.nivel}
              className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6"
            >
              <span className="text-xs uppercase tracking-wide text-[#B8944A]">
                {n.nivel}
              </span>
              <p className="mt-2 font-medium text-[#2E2A22]">{n.titulo}</p>
              <p className="mt-2 text-[#7A6F5F] text-sm leading-relaxed">
                {n.aprendizajes}
              </p>
              {n.precio !== null && (
                <p className="mt-3 text-sm text-[#B8944A] font-medium">
                  {n.precio} {n.moneda}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
