import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-[#2E2A22]">
          Quiénes somos
        </h1>
        <p className="text-[#7A6F5F] max-w-3xl leading-relaxed">
          IGNI es una escuela de oficio, técnica y pensamiento culinario. No
          enseñamos recetas sueltas, formamos criterio y rigor profesional,
          con programas certificados en conjunto por una universidad
          acreditada y una asociación profesional del sector, verificable
          con código QR. Empezamos por el fuego, pero no nos quedamos ahí.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
