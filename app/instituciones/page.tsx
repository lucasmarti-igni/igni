import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Universidades y asociaciones | IGNI",
  description:
    "IGNI emite certificaciones junto a una universidad acreditada y asociaciones profesionales del sector, con convenios firmados que avalan cada nivel del programa.",
};

const universidades = [
  {
    nombre: "NIU (Northern International University)",
    tipo: "Certificación universitaria",
    descripcion:
      "Universidad digital con oferta académica 100% online, registrada legalmente en el estado de California, Estados Unidos, y enfocada en la educación superior y continua en Hispanoamérica.",
  },
];

const asociaciones = [
  {
    nombre: "FELAMS (Federación Latinoamericana de Master Chefs, Argentina)",
    tipo: "Asociación profesional",
    descripcion: "Referente de chefs en Argentina.",
  },
  {
    nombre: "Asociación de Parrilleros de Coahuila (APC)",
    tipo: "Asociación profesional",
    descripcion: "Referente de la parrilla en la zona norte de México.",
  },
  {
    nombre: "World BBQ Argentina",
    tipo: "Asociación profesional",
    descripcion: "Referente de la parrilla y alta cocina al aire libre en Argentina.",
  },
  {
    nombre: "Club Parrillero Costa Brava",
    tipo: "Asociación profesional",
    descripcion: "Referente de la parrilla en Cataluña, zona Costa Brava.",
  },
  {
    nombre: "Asociación Española de Asadores y Parrilleros (AEAP)",
    tipo: "Asociación profesional",
    descripcion: "Referente de la parrilla a nivel nacional en España.",
  },
  {
    nombre: "Asociación Santafesina de Asadores y Afines",
    tipo: "Asociación profesional",
    descripcion: "Referente de la parrilla y asado tradicional en Santa Fe y provincias aledañas, Argentina.",
  },
  {
    nombre: "Asociación Ecuatoriana de Asadores",
    tipo: "Asociación profesional",
    descripcion: "Referente de la parrilla a nivel nacional en Ecuador.",
  },
];

export default function InstitucionesPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Universidades y asociaciones
        </h1>
        <p className="text-[#7A6F5F] mb-10 max-w-2xl">
          IGNI emite certificaciones junto a una universidad acreditada y
          asociaciones profesionales, con convenios firmados que avalan cada
          nivel del programa.
        </p>

        <h2 className="text-sm uppercase tracking-wide text-[#B8944A] mb-4">
          Universidad
        </h2>
        <div className="grid gap-4 mb-10">
          {universidades.map((u) => (
            <div
              key={u.nombre}
              className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6"
            >
              <p className="font-medium text-[#2E2A22]">{u.nombre}</p>
              <p className="mt-1 text-sm text-[#B8944A]">{u.tipo}</p>
              <p className="mt-3 text-sm text-[#8A8070] leading-relaxed max-w-2xl">
                {u.descripcion}
              </p>
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
              <p className="mt-2 text-sm text-[#B8944A]">{a.tipo}</p>
              <p className="mt-2 text-sm text-[#8A8070] leading-relaxed">
                {a.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
