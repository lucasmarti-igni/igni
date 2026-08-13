import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Pago confirmado | IGNI",
  description: "Tu inscripción en IGNI fue confirmada.",
};

export default function CheckoutExitoPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.18em] text-[#B8944A] mb-4">
          Pago confirmado
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-[#2E2A22]">
          ¡Gracias por inscribirte en IGNI!
        </h1>
        <p className="text-[#7A6F5F] mb-10 leading-relaxed">
          Recibimos tu pago correctamente. En breve vas a recibir un email
          con los próximos pasos para acceder a tu formación.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
        >
          Volver al inicio
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
