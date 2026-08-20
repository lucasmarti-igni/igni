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

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: curso.nombre,
    description: curso.descripcion,
    provider: {
      "@type": "Organization",
      name: "IGNI",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo verifico un certificado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier certificado emitido por IGNI se puede verificar en línea en la web de IGNI.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E4D9C8]">
        <span className="text-xs uppercase tracking-wide text-[#B8944A]">
          Nivel Inicial — 169€
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-6 text-[#2E2A22]">
          Curso de parrilla para principiantes online
        </h2>
        <div className="max-w-2xl space-y-4 text-[#7A6F5F] leading-relaxed">
          <p>
            Nadie nace aprendiendo a encender una buena brasa. Este nivel no lo damos por sabido. Si nunca encendiste un fuego sin miedo, hoy empezás acá.
          </p>
          <p>
            Sacar un asado perfecto para 4 a 6 personas sin depender de nadie. Al terminar hablás el idioma del asador y sabés exactamente qué te falta para el siguiente nivel.
          </p>
          <p>
            Examen final de 25 preguntas, 75% para aprobar. Certificado "Iniciación al Asado IGNI" con sello AEAP y verificación QR.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E4D9C8]">
        <span className="text-xs uppercase tracking-wide text-[#B8944A]">
          Nivel Avanzado — 375€
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-6 text-[#2E2A22]">
          Curso avanzado de parrilla online
        </h2>
        <div className="max-w-2xl space-y-4 text-[#7A6F5F] leading-relaxed">
          <p>
            Acá se termina el asar por instinto. Es el salto de cocinar bien a saber por qué cocinás bien, y poder defenderlo.
          </p>
          <p>
            130 horas de formación en técnicas que en Iniciación ni tocás. Entraña, vacío, secreto y presa ibéricos, achuras, pescado entero. Salís sabiendo planificar y ejecutar un servicio completo para 8 a 12 comensales, con los tres tipos de fuego y una carta propia.
          </p>
          <p>
            Examen de 35 preguntas más una evaluación práctica en video, corregida por un docente. Si la aprobás, tu certificado suma la mención "con evaluación práctica". No todos los que terminan este nivel la tienen.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E4D9C8]">
        <span className="text-xs uppercase tracking-wide text-[#B8944A]">
          Nivel Experto — 499€
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-6 text-[#2E2A22]">
          Curso experto de parrilla profesional online
        </h2>
        <div className="max-w-2xl space-y-4 text-[#7A6F5F] leading-relaxed">
          <p>
            Este nivel no es para el que asa bien. Es para el que quiere que su nombre quede asociado al oficio.
          </p>
          <p>
            130 horas de formación en lo que separa al aficionado del profesional. Costillar entero a la estaca, cordero y lechón enteros, fuego abierto sin infraestructura, servicios de 30 a 100 comensales, cálculo de escandallo y gestión económica real del negocio. Termina con vos armando tu propio proyecto. Una carta, un catering, un plan de formación, algo defendible ante un cliente o un inversor.
          </p>
          <p>
            Examen de 50 preguntas y evaluación práctica opcional con rúbrica de seis dimensiones. Certificado "Asador Experto IGNI" con sello AEAP y QR. Completar los tres niveles es lo único que hoy da acceso a la certificación universitaria de NIU.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E4D9C8]">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#2E2A22]">
          ¿Qué certifica IGNI?
        </h2>
        <div className="max-w-2xl space-y-4 text-[#7A6F5F] leading-relaxed">
          <p>
            IGNI es una escuela profesional de formación gastronómica. Certifica técnica, producto y criterio, evaluados nivel por nivel. Cada nivel otorga un certificado propio, verificable con código QR.
          </p>
          <p>
            Al completar los tres niveles, tu formación queda respaldada con créditos universitarios de Northern International University (NIU), un título propio de esta universidad digital registrada en California, Estados Unidos.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E4D9C8]">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-[#2E2A22]">
          Programa completo
        </h2>
        <p className="text-[#7A6F5F] mb-1">
          El camino entero, de inicial a experto, en un solo recorrido.
        </p>
        <p className="text-3xl font-bold text-[#B8944A] mb-6">€969</p>
        <div className="max-w-2xl space-y-4 text-[#7A6F5F] leading-relaxed">
          <p>
            Es la forma más directa de alcanzar tu certificación universitaria completa: tres niveles, una sola decisión, sin pausas entre etapas. El mismo recorrido, comprado nivel por nivel, cuesta €1.043 — con el programa completo ahorrás €82 y asegurás tu objetivo final desde el primer día.
          </p>
          <p>
            ¿Preferís avanzar a tu ritmo? Podés empezar por el nivel que corresponda a tu experiencia y sumar los siguientes más adelante. La certificación universitaria completa se obtiene al completar los tres niveles, elijas el camino que elijas.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E4D9C8]">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#2E2A22]">
          Preguntas frecuentes
        </h2>
        <div className="max-w-2xl">
          <p className="font-medium text-[#2E2A22] mb-2">
            ¿Cómo verifico un certificado?
          </p>
          <p className="text-[#7A6F5F] leading-relaxed">
            Cualquier certificado emitido por IGNI se puede verificar en línea en la web de IGNI.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
