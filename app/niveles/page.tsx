import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const niveles = [
  {
    nivel: "Nivel 1",
    certificado: "Certificado de nivel 1",
    emitido: "Asociacion asignada a ese nivel",
  },
  {
    nivel: "Nivel 2",
    certificado: "Certificado de nivel 2 (ademas del de nivel 1)",
    emitido: "Asociacion asignada a ese nivel",
  },
  {
    nivel: "Nivel 3",
    certificado: "Certificado de nivel 3 (ademas de los anteriores)",
    emitido: "Asociacion asignada a ese nivel",
  },
];

export default function NivelesPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Niveles y certificacion
        </h1>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Cada certificado incluye un codigo QR de verificacion unico:
          cualquiera puede escanearlo y confirmar que es autentico en
          nuestra pagina publica de validacion.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {niveles.map((n) => (
            <div
              key={n.nivel}
              className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6"
            >
              <span className="text-xs uppercase tracking-wide text-[#B8944A]">
                {n.nivel}
              </span>
              <p className="mt-3 font-medium text-[#2E2A22]">{n.certificado}</p>
              <p className="mt-2 text-sm text-[#8A8070]">{n.emitido}</p>
            </div>
          ))}
          <div className="rounded-xl border border-[#B8944A]/60 bg-[#B8944A]/10 p-6">
            <span className="text-xs uppercase tracking-wide text-[#B8944A]">
              Los 3 niveles completos
            </span>
            <p className="mt-3 font-medium text-[#2E2A22]">Certificacion universitaria</p>
            <p className="mt-2 text-sm text-[#8A8070]">
              Emitida por universidad acreditada
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
