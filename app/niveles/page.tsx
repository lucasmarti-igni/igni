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
  },	];

export default function NivelesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Niveles y certificacion
        </h1>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          Cada certificado incluye un codigo QR de verificacion unico:
          cualquiera puede escanearlo y confirmar que es autentico en
          nuestra pagina publica de validacion.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {niveles.map((n) => (
            <div
              key={n.nivel}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <span className="text-xs uppercase tracking-wide text-orange-400">
                {n.nivel}
              </span>
              <p className="mt-3 font-medium">{n.certificado}</p>
              <p className="mt-2 text-sm text-neutral-500">{n.emitido}</p>
            </div>
          ))}
          <div className="rounded-xl border border-orange-700/60 bg-orange-950/20 p-6">
            <span className="text-xs uppercase tracking-wide text-orange-400">
              Los 3 niveles completos
            </span>
            <p className="mt-3 font-medium">Certificacion universitaria</p>
            <p className="mt-2 text-sm text-neutral-500">
              Emitida por universidad acreditada
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
