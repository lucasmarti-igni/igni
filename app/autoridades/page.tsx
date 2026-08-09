import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AutoridadesPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-[#2E2A22]">
          Autoridades y docentes
        </h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-8">
            <p className="text-xs uppercase tracking-wide text-[#B8944A] mb-3">
              Direccion
            </p>
            <p className="font-medium text-lg text-[#2E2A22]">Monica C. Ramos Molina</p>
            <p className="mt-2 text-[#7A6F5F] text-sm leading-relaxed">
              Docente y Tecnico en administracion.
            </p>
          </div>
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-8">
            <p className="text-xs uppercase tracking-wide text-[#B8944A] mb-3">
              Direccion academica
            </p>
            <p className="font-medium text-lg text-[#2E2A22]">Lucas Marti Boldrini</p>
            <p className="mt-2 text-[#7A6F5F] text-sm leading-relaxed">
              Presidente de AEAP (Asociacion Espanola de Asadores y
              Parrilleros), Promotor de Marca Pais Argentina y autor de tres
              libros publicados.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-[#8A8070]">
          El cuerpo docente que dicta cada nivel se suma a esta seccion a
          medida que se confirma.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
