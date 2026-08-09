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
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <a
          href="/verificar"
          className="text-sm text-[#8A8070] hover:text-[#2E2A22] transition-colors"
        >
          ← Verificar otro codigo
        </a>

        {certificado ? (
          <div className="mt-6 rounded-xl border border-green-300 bg-green-50 p-8">
            <p className="text-xs uppercase tracking-wide text-green-700 mb-3">
              Certificado autentico
            </p>
            <p className="font-medium text-lg mb-1 text-[#2E2A22]">
              {certificado.nombre_alumno}
            </p>
            <p className="text-sm text-[#7A6F5F] mb-4">
              {certificado.tipo === "universitario"
                ? "Certificacion universitaria"
                : "Certificado de nivel"}
            </p>
            <div className="text-sm text-[#8A8070] space-y-1">
              <p>Emitido por: {certificado.emitido_por}</p>
              <p>
                Fecha de emision:{" "}
                {new Date(certificado.emitido_at).toLocaleDateString("es-AR")}
              </p>
              <p>Codigo: {certificado.codigo_verificacion}</p>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-red-300 bg-red-50 p-8">
            <p className="text-xs uppercase tracking-wide text-red-600 mb-3">
              Certificado no encontrado
            </p>
            <p className="text-sm text-[#7A6F5F]">
              El codigo &quot;{codigo}&quot; no corresponde a ningun
              certificado emitido por IGNI. Verifica que este bien escrito.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
