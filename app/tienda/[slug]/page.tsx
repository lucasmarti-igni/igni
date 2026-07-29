import Link from "next/link";
import { notFound } from "next/navigation";
import { productos } from "@/lib/productos";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const dynamic = "force-static";

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
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
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/tienda"
          className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
        >
          â Volver a la tienda
        </Link>
        <span className="block mt-6 text-xs uppercase tracking-[0.2em] text-orange-400 mb-4">
          {producto.tipo === "digital" ? "Producto digital" : "Producto fisico"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          {producto.nombre}
        </h1>
        <p className="text-neutral-400 max-w-2xl leading-relaxed mb-6">
          {producto.descripcion}
        </p>
        <p className="text-2xl font-semibold mb-8">
          {producto.precio !== null
            ? `${producto.precio} ${producto.moneda}`
            : "Precio a confirmar"}
        </p>
        <button
          disabled
          className="cursor-not-allowed rounded-full border border-neutral-700 px-6 py-3 font-medium text-neutral-500"
        >
          Comprar (proximamente)
        </button>
      </section>
      <SiteFooter />
    </main>
  );
}
