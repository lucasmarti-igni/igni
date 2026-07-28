import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type Props = {
  params: { codigo: string };
};

export default async function VerificarCodigo({ params }: Props) {
  const codigo = params.codigo.trim().toUpperCase();

  const { data: certificado } = await supabase
    .from("certificados")
    .select(
      "codigo_verificacion, nombre_alumno, emitido_por, tipo, emitido_at"
    )
    .eq("codigo_verificacion", codigo)
    .maybeSingle();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <a
          href="/verificar"
          className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          â Verificar otro codigo
        </a>

        {certificado ? (
          <div className="mt-6 rounded-xl border border-green-800/60 bg-green-950/20 p-8">
            <p className="text-xs uppercase tracking-wide text-green-400 mb-3">
              Certificado autentico
            </p>
            <p className="font-medium text-lg mb-1">
              {certificado.nombre_alumno}
            </p>
            <p className="text-sm text-neutral-400 mb-4">
              {certificado.tipo === "universitario"
                ? "Certificacion universitaria"
                : "Certificado de nivel"}
            </p>
            <div className="text-sm text-neutral-500 space-y-1">
              <p>Emitido por: {certificado.emitido_por}</p>
              <p>
                Fecha de emision:{" "}
                {new Date(certificado.emitido_at).toLocaleDateString("es-AR")}
              </p>
              <p>Codigo: {certificado.codigo_verificacion}</p>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-red-900/60 bg-red-950/20 p-8">
            <p className="text-xs uppercase tracking-wide text-red-400 mb-3">
              Certificado no encontrado
            </p>
            <p className="text-sm text-neutral-400">
              El codigo &quot;{codigo}&quot; no corresponde a ningun
              certificado emitido por IGNI. Verifica que este bien escrito.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
