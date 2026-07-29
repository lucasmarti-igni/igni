import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AutoridadesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8">
          Autoridades y docentes
        </h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
            <p className="text-xs uppercase tracking-wide text-orange-400 mb-3">
              Direccion
            </p>
            <p className="font-medium text-lg">Monica C. Ramos Molina</p>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
              Docente y Tecnico en administracion.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
            <p className="text-xs uppercase tracking-wide text-orange-400 mb-3">
              Direccion academica
            </p>
            <p className="font-medium text-lg">Lucas Marti Boldrini</p>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
              Presidente de AEAP (Asociacion Espanola de Asadores y
              Parrilleros), Promotor de Marca Pais Argentina y autor de tres
              libros publicados.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          El cuerpo docente que dicta cada nivel se suma a esta seccion a
          medida que se confirma.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
