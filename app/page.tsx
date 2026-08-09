import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const secciones = [
  {
    nombre: "Quiénes somos",
    href: "/quienes-somos",
    detalle: "Qué es IGNI, valores y objetivos",
  },
  {
    nombre: "Autoridades y docentes",
    href: "/autoridades",
    detalle: "Dirección y cuerpo docente",
  },
  {
    nombre: "Los cursos",
    href: "/cursos",
    detalle: "Listado y repositorio de cursos",
  },
  {
    nombre: "Niveles y certificación",
    href: "/niveles",
    detalle: "Cómo funciona la certificación dual",
  },
  {
    nombre: "Instituciones",
    href: "/instituciones",
    detalle: "Universidad y asociaciones que respaldan a IGNI",
  },
  {
    nombre: "Tienda",
    href: "/tienda",
    detalle: "Recetarios, libros y otros recursos de IGNI",
  },
  {
    nombre: "Próximamente",
    href: "/proximamente",
    detalle: "Las próximas escuelas de IGNI",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#E4D9C8]">
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.18em] text-[#B8944A] mb-4">
            Certificación profesional dual
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-[#2E2A22]">
            La misma exigencia de las grandes escuelas de cocina, sin
            salir de tu casa
          </h1>
          <p className="text-[#7A6F5F] max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            IGNI certifica técnica, producto y pensamiento culinario con el
            aval conjunto de una universidad acreditada y una asociación
            profesional del sector, verificable con código QR, cien por
            ciento online y en español.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cursos"
              className="bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
            >
              Empezá tu certificación
            </Link>
            <Link
              href="/verificar"
              className="border border-[#A9AEB2] text-[#5C5648] hover:border-[#7A6F5F] transition-colors font-medium rounded-full px-6 py-3"
            >
              Verificar un certificado
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#E4D9C8]">
        <h2 className="text-2xl font-semibold mb-4 text-[#2E2A22]">
          Quiénes somos
        </h2>
        <p className="text-[#7A6F5F] max-w-3xl leading-relaxed">
          IGNI es una escuela de oficio, técnica y pensamiento culinario. No
          enseñamos recetas sueltas, formamos criterio y rigor profesional,
          con programas certificados en conjunto por una universidad
          acreditada y una asociación profesional del sector, verificable
          con código QR. Empezamos por el fuego, pero no nos quedamos ahí.
        </p>
        <Link
          href="/quienes-somos"
          className="inline-block mt-6 text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors"
        >
          Conocé más sobre IGNI →
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-2 text-[#2E2A22]">
          Explorá IGNI
        </h2>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Cada sección tiene su propia página.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {secciones.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6 hover:border-[#B8944A] transition-colors"
            >
              <p className="font-medium text-lg text-[#2E2A22]">
                {s.nombre}
              </p>
              <p className="mt-2 text-sm text-[#8A8070]">{s.detalle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[#E4D9C8]">
        <h2 className="text-2xl font-semibold mb-2 text-[#2E2A22]">
          ¿Dónde estás hoy?
        </h2>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Elegí tu punto de partida.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[#B8944A] mb-2">
              Quiero empezar
            </p>
            <p className="font-medium text-lg text-[#2E2A22] mb-1">
              Nivel Inicial, 169 euros
            </p>
            <p className="text-sm text-[#8A8070] mb-4">
              Construí tus bases con método y criterio.
            </p>
            <Link
              href="/niveles"
              className="text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors"
            >
              Empezar por acá →
            </Link>
          </div>
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[#B8944A] mb-2">
              Ya tengo experiencia
            </p>
            <p className="font-medium text-lg text-[#2E2A22] mb-1">
              Nivel Avanzado, 375 euros
            </p>
            <p className="text-sm text-[#8A8070] mb-4">
              Llevá la técnica a un nivel de aplicación profesional.
            </p>
            <Link
              href="/niveles"
              className="text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors"
            >
              Subir de nivel →
            </Link>
          </div>
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[#B8944A] mb-2">
              Quiero especializarme
            </p>
            <p className="font-medium text-lg text-[#2E2A22] mb-1">
              Nivel Experto, 499 euros
            </p>
            <p className="text-sm text-[#8A8070] mb-4">
              Profundizá en el dominio técnico y conceptual.
            </p>
            <Link
              href="/niveles"
              className="text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors"
            >
              Ir al nivel experto →
            </Link>
          </div>
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[#B8944A] mb-2">
              Quiero el recorrido completo
            </p>
            <p className="font-medium text-lg text-[#2E2A22] mb-1">
              Los tres niveles juntos, 965 euros
            </p>
            <p className="text-sm text-[#8A8070] mb-4">
              El camino entero, de inicial a experto, en un solo pack.
            </p>
            <Link
              href="/niveles"
              className="text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors"
            >
              Ver el programa completo →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
