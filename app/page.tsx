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
    nombre: "Proximamente",
    href: "/proximamente",
    detalle: "Las proximas escuelas de IGNI",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-neutral-800/80">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(234,88,12,0.25), transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-orange-400 mb-4">
            Escuela I - Fuego y Parrilla
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Certificacion profesional
            <br />
            del oficio del fuego
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
            IGNI certifica a quienes se forman en el oficio del fuego junto a
            asociaciones profesionales de referencia y una universidad
            acreditada. Un curso, tres niveles, una certificacion dual.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cursos"
              className="bg-orange-600 hover:bg-orange-500 transition-colors font-medium rounded-full px-6 py-3"
            >
              Conoce el curso
            </Link>
            <Link
              href="/verificar"
              className="border border-neutral-700 hover:border-neutral-500 transition-colors font-medium rounded-full px-6 py-3"
            >
              Verificar un certificado
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-neutral-800/80">
        <h2 className="text-2xl font-semibold mb-4">Quienes somos</h2>
        <p className="text-neutral-400 max-w-3xl leading-relaxed">
          IGNI es una institucion de formacion profesional dedicada a
          certificar los oficios del fuego. Nace con una escuela, Fuego y
          Parrilla, y crece de forma progresiva hacia nuevas escuelas y
          especialidades. Nuestro modelo combina contenido practico con una
          doble certificacion: la de una asociacion profesional de
          referencia y la de una universidad acreditada, respaldadas por
          convenios firmados y certificados verificables con codigo QR.
        </p>
        <Link
          href="/quienes-somos"
          className="inline-block mt-6 text-sm text-orange-400 hover:text-orange-300 transition-colors"
        >
          Conoce mas sobre IGNI â
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-2">Explora IGNI</h2>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          Cada seccion tiene su propia pagina.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {secciones.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 hover:border-neutral-600 transition-colors"
            >
              <p className="font-medium text-lg">{s.nombre}</p>
              <p className="mt-2 text-sm text-neutral-500">{s.detalle}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
