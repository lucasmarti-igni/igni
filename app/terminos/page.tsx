import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Términos y condiciones | IGNI",
  description:
    "Términos y condiciones de uso del sitio web y los servicios de formación online de IGNI.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-[#2E2A22]">
          Términos y condiciones
        </h1>
        <div className="text-[#6B5D48] leading-relaxed space-y-6">
          <p>
            Estos términos y condiciones regulan el uso del sitio web y los
            servicios de formación online ofrecidos por IGNI (en adelante,
            "IGNI"). Al acceder al sitio o inscribirte en un curso, aceptás
            estas condiciones.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Objeto
            </h2>
            <p>
              IGNI ofrece programas de formación culinaria online, con
              certificación conjunta de una universidad acreditada y una
              asociación profesional del sector, verificable mediante código
              QR.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Condiciones de uso
            </h2>
            <p>
              El usuario se compromete a hacer un uso adecuado y lícito del
              sitio y de los contenidos, y a no emplearlo para fines
              contrarios a la ley, la moral o el orden público.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Propiedad intelectual
            </h2>
            <p>
              Los contenidos del sitio y de los cursos, incluyendo textos,
              imágenes, vídeos y materiales didácticos, son propiedad de IGNI
              o de terceros que han autorizado su uso, y están protegidos por
              la normativa de propiedad intelectual. No está permitida su
              reproducción, distribución o comunicación pública sin
              autorización previa.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Cuentas de usuario y certificaciones
            </h2>
            <p>
              El acceso a los cursos requiere la creación de una cuenta en el
              área de alumno. Las certificaciones se emiten una vez
              completados los requisitos de cada nivel y son verificables
              públicamente mediante código QR.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Precios y pagos
            </h2>
            <p>
              Los precios de los cursos son los que figuran en el sitio en el
              momento de la inscripción, expresados en euros. Las condiciones
              específicas de pago, cancelación y reembolso se informan antes
              de completar la inscripción.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Derecho de desistimiento
            </h2>
            <p>
              De acuerdo con la normativa europea de protección de las
              personas consumidoras, disponés de un plazo de 14 días
              naturales desde la contratación para desistir del curso sin
              necesidad de justificar tu decisión y sin ningún costo. Para
              ejercer este derecho, podés escribirnos desde la página de
              contacto indicando tu nombre, el curso contratado y la fecha de
              inscripción. Te reembolsaremos el importe pagado dentro de los
              14 días siguientes a la recepción de tu solicitud.
            </p>
            <p className="mt-4">
              Si solicitás expresamente comenzar el curso antes de que
              termine el plazo de 14 días, aceptás que el derecho de
              desistimiento se pierde una vez que el contenido haya sido
              ejecutado en su totalidad, conforme a la excepción prevista
              para contenidos digitales y servicios prestados a distancia
              cuya ejecución haya comenzado con tu consentimiento expreso.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Limitación de responsabilidad
            </h2>
            <p>
              IGNI no se hace responsable de los daños derivados de un uso
              inadecuado del sitio o de interrupciones del servicio ajenas a
              su control.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Legislación aplicable
            </h2>
            <p>
              Estos términos se rigen por la legislación española. Para
              cualquier consulta relacionada con estas condiciones, podés
              escribirnos desde la página de contacto.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
