import Link from "next/link";
import { notFound } from "next/navigation";
import { cursos } from "@/lib/cursos";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const dynamic = "force-static";

export function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }));
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
    <main className="min-h-screen">
      <SiteHeader />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/cursos"
          className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
        >
          â Volver a los cursos
        </Link>
        <span className="block mt-6 text-xs uppercase tracking-[0.2em] text-orange-400 mb-4">
          Curso
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          {curso.nombre}
        </h1>
        <p className="text-neutral-400 max-w-2xl leading-relaxed">
          {curso.descripcion}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-neutral-800/80">
        <h2 className="text-2xl font-semibold mb-2">
          Que se aprende en cada nivel
        </h2>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          Cada nivel completado suma un certificado propio.
        </p>
        <div className="grid gap-4">
          {curso.niveles.map((n) => (
            <div
              key={n.nivel}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <span className="text-xs uppercase tracking-wide text-orange-400">
                {n.nivel}
              </span>
              <p className="mt-2 font-medium">{n.titulo}</p>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                {n.aprendizajes}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
