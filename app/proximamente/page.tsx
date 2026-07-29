import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const proximamente = [
  {
    nombre: "Maestro Veggie a la Brasa",
    detalle: "Segundo curso confirmado",
  },
  { nombre: "Pasteleria", detalle: "Proximamente" },
  { nombre: "Cocina Regional", detalle: "Proximamente" },
];

export default function ProximamentePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Proximas escuelas
        </h1>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          IGNI crece de forma progresiva. Estas escuelas ya estan en
          camino.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proximamente.map((p) => (
            <div
              key={p.nombre}
              className="rounded-xl border border-dashed border-neutral-800 p-6 text-neutral-500"
            >
              <p className="font-medium text-neutral-300">{p.nombre}</p>
              <p className="text-sm mt-1">{p.detalle}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
