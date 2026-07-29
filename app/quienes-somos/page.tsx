import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
          Quienes somos
        </h1>
        <p className="text-neutral-400 max-w-3xl leading-relaxed">
          IGNI es una institucion de formacion profesional dedicada a
          certificar los oficios del fuego. Nace con una escuela, Fuego y
          Parrilla, y crece de forma progresiva hacia nuevas escuelas y
          especialidades. Nuestro modelo combina contenido practico con una
          doble certificacion: la de una asociacion profesional de
          referencia y la de una universidad acreditada, respaldadas por
          convenios firmados y certificados verificables con codigo QR.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
