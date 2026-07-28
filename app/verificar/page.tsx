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
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <a
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          â Volver al inicio
        </a>
        <h1 className="text-2xl font-semibold mt-6 mb-2">
          Verificar un certificado
        </h1>
        <p className="text-neutral-400 text-sm mb-8">
          Ingresa el codigo de verificacion que figura en el certificado o en
          el codigo QR para confirmar su autenticidad.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Codigo de verificacion
            </label>
            <input
              type="text"
              required
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Ej: A1B2C3D4E5"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-sm placeholder:text-neutral-600 tracking-widest uppercase"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 transition-colors font-medium rounded-full px-6 py-3"
          >
            Verificar
          </button>
        </form>
      </div>
    </main>
  );
}
