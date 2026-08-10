import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { proximamente } from "@/lib/proximamente";

export const metadata: Metadata = {
  title: "Próximamente | IGNI",
  description:
    "Las próximas formaciones de IGNI: Maestro Veggie a la Brasa, Pastelería y Cocina Regional.",
};

export default function ProximamentePage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Próximamente en IGNI
        </h1>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          IGNI crece de forma progresiva. Estas formaciones ya están en camino.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proximamente.map((p) => (
            <div
              key={p.nombre}
              className="rounded-xl border border-dashed border-[#E4D9C8] p-6 text-[#8A8070]"
            >
              <p className="font-medium text-[#2E2A22]">{p.nombre}</p>
              <p className="text-sm mt-1">{p.detalle}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
