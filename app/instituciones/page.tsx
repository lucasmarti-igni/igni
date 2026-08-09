import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const universidades = [
  { nombre: "NIU", tipo: "Certificación universitaria" },
];

const asociaciones = [
  { nombre: "FELAMS", tipo: "Asociación profesional" },
  { nombre: "Asociación de Parrilleros de Coahuila (APC)", tipo: "Asociación profesional" },
  { nombre: "World BBQ Argentina", tipo: "Asociación profesional" },
  { nombre: "Club Parrillero Costa Brava", tipo: "Asociación profesional" },
  { nombre: "Asociación Española de Asadores y Parrilleros (AEAP)", tipo: "Asociación profesional" },
  { nombre: "Asociación Santafesina de Asadores y Afines", tipo: "Asociación profesional" },
  {
    nombre: "Asociación Ecuatoriana de Asadores",
    tipo: "Asociación profesional",
  },
];

export default function InstitucionesPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Respaldo institucional
        </h1>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          IGNI emite certificaciones junto a una universidad acreditada y
          asociaciones profesionales, con convenios firmados que avalan cada
          nivel del programa.
        </p>

        <h2 className="text-sm uppercase tracking-wide text-[#B8944A] mb-4">
          Universidad
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {universidades.map((u) => (
            <div
              key={u.nombre}
              className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6"
            >
              <p className="font-medium text-[#2E2A22]">{u.nombre}</p>
              <p className="mt-2 text-sm text-[#8A8070]">{u.tipo}</p>
            </div>
          ))}
        </div>

        <h2 className="text-sm uppercase tracking-wide text-[#B8944A] mb-4">
          Asociaciones
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {asociaciones.map((a) => (
            <div
              key={a.nombre}
              className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6"
            >
              <p className="font-medium text-[#2E2A22]">{a.nombre}</p>
              <p className="mt-2 text-sm text-[#8A8070]">{a.tipo}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
