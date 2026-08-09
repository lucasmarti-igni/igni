import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const secciones = [
  {
    nombre: "Quienes somos",
    href: "/quienes-somos",
    detalle: "Que es IGNI, valores y objetivos",
  },
  {
    nombre: "Autoridades y docentes",
    href: "/autoridades",
    detalle: "Direccion y cuerpo docente",
  },
  {
    nombre: "Los cursos",
    href: "/cursos",
    detalle: "Listado y repositorio de cursos",
  },
  {
    nombre: "Niveles y certificacion",
    href: "/niveles",
    detalle: "Como funciona la certificacion dual",
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
    nombre: "Proximamente",
    href: "/proximamente",
    detalle: "Las proximas escuelas de IGNI",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#E4D9C8]">
        <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.18em] text-[#B8944A] mb-4">
            Certificacion profesional dual
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-[#2E2A22]">
            La misma exigencia de las grandes escuelas de cocina, sin
            mudarte de pais ni gastar una fortuna
          </h1>
          <p className="text-[#7A6F5F] max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            IGNI certifica tecnica, producto y pensamiento culinario con el
            aval conjunto de una universidad acreditada y una asociacion
            profesional del sector, cien por ciento online y en espanol.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cursos"
              className="bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
            >
              Ver cursos
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
          Quienes somos
        </h2>
        <p className="text-[#7A6F5F] max-w-3xl leading-relaxed">
          IGNI es una escuela de oficio, tecnica y pensamiento culinario. No
          ensenamos recetas sueltas, formamos criterio y rigor profesional,
          con programas que van desde la tecnica inicial hasta
          certificaciones de nivel superior avaladas por una universidad y
          una asociacion del sector. Empezamos por el fuego, pero no nos
          quedamos ahi.
        </p>
        <Link
          href="/quienes-somos"
          className="inline-block mt-6 text-sm text-[#B8944A] hover:text-[#A6803D] transition-colors"
        >
          Conoce mas sobre IGNI →
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-2 text-[#2E2A22]">
          Explora IGNI
        </h2>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Cada seccion tiene su propia pagina.
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

      <SiteFooter />
    </main>
  );
}
