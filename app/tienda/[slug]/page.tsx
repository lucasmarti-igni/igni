import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productos } from "@/lib/productos";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const dynamic = "force-static";

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const producto = productos.find((p) => p.slug === params.slug);
  if (!producto) return {};
  return {
    title: `${producto.nombre} | Tienda IGNI`,
    description: producto.descripcion,
  };
}

export default function ProductoPage({
  params,
}: {
  params: { slug: string };
}) {
  const producto = productos.find((p) => p.slug === params.slug);

  if (!producto) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/tienda"
          className="text-sm text-[#8A8070] hover:text-[#2E2A22] transition-colors"
        >
          ← Volver a la tienda
        </Link>
        <span className="block mt-6 text-xs uppercase tracking-[0.2em] text-[#B8944A] mb-4">
          {producto.tipo === "digital" ? "Producto digital" : "Producto físico"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 text-[#2E2A22]">
          {producto.nombre}
        </h1>
        <p className="text-[#7A6F5F] max-w-2xl leading-relaxed mb-6">
          {producto.descripcion}
        </p>
        <p className="text-2xl font-semibold mb-8 text-[#2E2A22]">
          {producto.precio !== null
            ? `${producto.precio} ${producto.moneda}`
            : "Precio a confirmar"}
        </p>
        <button
          disabled
          className="cursor-not-allowed rounded-full border border-[#A9AEB2] px-6 py-3 font-medium text-[#8A8070]"
        >
          Comprar (próximamente)
        </button>
      </section>
      <SiteFooter />
    </main>
  );
}
