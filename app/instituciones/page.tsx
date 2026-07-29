import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const universidades = [
  { nombre: "NIU", tipo: "Certificacion universitaria" },
];

const asociaciones = [
  { nombre: "FELAMS", tipo: "Asociacion profesional" },
  { nombre: "APC", tipo: "Asociacion profesional" },
  { nombre: "World BBQ Argentina", tipo: "Asociacion profesional" },
  { nombre: "Club Parrillero Costa Brava", tipo: "Asociacion profesional" },
  { nombre: "AEAP", tipo: "Asociacion profesional" },
  { nombre: "Asociacion Santafesina", tipo: "Asociacion profesional" },
  {
    nombre: "Asociacion Ecuatoriana de Asadores",
    tipo: "Asociacion profesional",
  },
];

export default function InstitucionesPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Respaldo institucional
        </h1>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          IGNI emite certificaciones junto a una universidad acreditada y
          asociaciones profesionales, con convenios firmados que avalan cada
          nivel del programa.
        </p>

        <h2 className="text-sm uppercase tracking-wide text-orange-400 mb-4">
          Universidad
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {universidades.map((u) => (
            <div
              key={u.nombre}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <p className="font-medium">{u.nombre}</p>
              <p className="mt-2 text-sm text-neutral-500">{u.tipo}</p>
            </div>
          ))}
        </div>

        <h2 className="text-sm uppercase tracking-wide text-orange-400 mb-4">
          Asociaciones
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {asociaciones.map((a) => (
            <div
              key={a.nombre}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <p className="font-medium">{a.nombre}</p>
              <p className="mt-2 text-sm text-neutral-500">{a.tipo}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
