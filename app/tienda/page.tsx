import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { productos } from "@/lib/productos";

export const metadata: Metadata = {
  title: "Tienda | IGNI",
  description:
    "Recetarios, libros y recursos de IGNI para llevar la técnica de tus niveles de certificación a tu cocina.",
};

export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Tienda
        </h1>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          Herramientas para llevarte la técnica de IGNI a tu cocina.
          Recetarios y libros pensados para acompañar cada nivel de tu
          certificación.
        </p>
        {productos.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#E4D9C8] p-8 text-[#8A8070] max-w-xl">
            Estamos preparando el catálogo. Todavía no hay productos
            publicados.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {productos.map((p) => (
              <Link
                key={p.slug}
                href={`/tienda/${p.slug}`}
                className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6 hover:border-[#B8944A] transition-colors"
              >
                <p className="font-medium text-lg text-[#2E2A22]">{p.nombre}</p>
                <p className="mt-2 text-sm text-[#8A8070]">
                  {p.descripcion}
                </p>
                <p className="mt-3 text-sm text-[#B8944A]">
                  {p.precio !== null
                    ? `${p.precio} ${p.moneda}`
                    : "Precio a confirmar"}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
