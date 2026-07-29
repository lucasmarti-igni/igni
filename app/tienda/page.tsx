import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { productos } from "@/lib/productos";

export default function TiendaPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Tienda
        </h1>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          Recetarios, libros y otros recursos de IGNI.
        </p>
        {productos.length === 0 ? (
          <div className="rounded-xl border border-dashed border-neutral-800 p-8 text-neutral-500 max-w-xl">
            Estamos preparando el catalogo. Todavia no hay productos
            publicados.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {productos.map((p) => (
              <Link
                key={p.slug}
                href={`/tienda/${p.slug}`}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 hover:border-neutral-600 transition-colors"
              >
                <p className="font-medium text-lg">{p.nombre}</p>
                <p className="mt-2 text-sm text-neutral-500">
                  {p.descripcion}
                </p>
                <p className="mt-3 text-sm text-orange-400">
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
