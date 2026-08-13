"use client";

import { useState } from "react";

export default function CheckoutButton({
  slug,
  nivel,
  label,
}: {
  slug: string;
  nivel: string;
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, nivel }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "No se pudo iniciar el pago.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("No se pudo iniciar el pago. Intentá de nuevo.");
      setLoading(false);
    }
  }

  return (
    <div className="mt-4">
      <button
        onClick={handleClick}
        disabled={loading}
        className="inline-block bg-[#B8944A] hover:bg-[#A6803D] disabled:opacity-60 text-[#F6EFE7] transition-colors font-medium rounded-full px-5 py-2 text-sm"
      >
        {loading ? "Redirigiendo..." : label}
      </button>
      {error && <p className="mt-2 text-xs text-[#8A6F5F]">{error}</p>}
    </div>
  );
}
