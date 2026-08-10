"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerificarIndex() {
  const [codigo, setCodigo] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = codigo.trim();
    if (clean) router.push(`/verificar/${clean}`);
  }

  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <a
          href="/"
          className="text-sm text-[#8A8070] hover:text-[#2E2A22] transition-colors"
        >
          ← Volver al inicio
        </a>
        <h1 className="text-2xl font-semibold mt-6 mb-2 text-[#2E2A22]">
          Verificar un certificado
        </h1>
        <p className="text-[#7A6F5F] text-sm mb-8">
          Ingresá el código de verificación que figura en el certificado o en
          el código QR para confirmar su autenticidad.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-[#7A6F5F] mb-1">
              Código de verificación
            </label>
            <input
              type="text"
              required
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Ej: A1B2C3D4E5"
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2.5 text-sm text-[#2E2A22] placeholder:text-[#A9AEB2] tracking-widest uppercase"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
          >
            Verificar
          </button>
        </form>
      </div>
    </main>
  );
}
