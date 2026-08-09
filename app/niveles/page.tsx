import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const niveles = [
  {
    nivel: "Nivel Inicial",
    certificado: "Certificado de Nivel Inicial",
    emitido: "Asociación asignada a ese nivel",
  },
  {
    nivel: "Nivel Avanzado",
    certificado: "Certificado de Nivel Avanzado (además del de Nivel Inicial)",
    emitido: "Asociación asignada a ese nivel",
  },
  {
    nivel: "Nivel Experto",
    certificado: "Certificado de Nivel Experto (además de los anteriores)",
    emitido: "Asociación asignada a ese nivel",
  },
];

export default function NivelesPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Niveles y certificación
        </h1>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Cada certificado incluye un código QR de verificación único.
          Cualquiera puede escanearlo para confirmar que es auténtico en
          nuestra página pública de validación.
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
            <p className="mt-3 font-medium text-[#2E2A22]">Certificación universitaria</p>
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
