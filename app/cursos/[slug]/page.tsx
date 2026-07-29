import Link from "next/link";
import { notFound } from "next/navigation";
import { cursos } from "@/lib/cursos";

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
      <header className="border-b border-neutral-800/80 sticky top-0 bg-neutral-950/90 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            IGNI<span className="text-orange-500">.</span>
          </Link>
          <Link
            href="/#cursos"
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            Volver a los cursos
          </Link>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-orange-400 mb-4">
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

      <footer className="border-t border-neutral-800/80 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-neutral-500">
          <span>Â© {new Date().getFullYear()} IGNI</span>
          <Link href="/" className="hover:text-neutral-300">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </main>
  );
}
