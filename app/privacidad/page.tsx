import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-8 text-[#2E2A22]">
          Política de privacidad
        </h1>
        <div className="text-[#7A6F5F] leading-relaxed space-y-6">
          <p>
            En IGNI nos tomamos en serio la protección de tus datos
            personales. Esta política explica qué datos recogemos, con qué
            finalidad y qué derechos tenés al respecto, de acuerdo con el
            Reglamento General de Protección de Datos (RGPD) y la Ley
            Orgánica de Protección de Datos Personales y garantía de los
            derechos digitales (LOPDGDD).
          </p>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Responsable del tratamiento
            </h2>
            <p>
              IGNI es el responsable del tratamiento de los datos personales
              que se recogen a través de este sitio web. Para cualquier
              consulta sobre el tratamiento de tus datos, podés escribirnos
              desde la página de contacto.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Qué datos recogemos
            </h2>
            <p>
              Recogemos los datos que nos facilitás directamente al
              inscribirte en un curso, crear una cuenta en el área de
              alumno, o completar el formulario de contacto: nombre, email,
              teléfono, país y el contenido de tus mensajes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Finalidad del tratamiento
            </h2>
            <p>
              Usamos tus datos para gestionar tu inscripción y acceso a los
              cursos, emitir y verificar certificaciones, responder a tus
              consultas, y enviarte comunicaciones relacionadas con los
              servicios de IGNI.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Legitimación
            </h2>
            <p>
              El tratamiento se basa en la ejecución del contrato de
              formación cuando te inscribís en un curso, y en tu
              consentimiento cuando completás el formulario de contacto.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Conservación de los datos
            </h2>
            <p>
              Conservamos tus datos mientras exista una relación con IGNI y,
              posteriormente, durante los plazos legalmente exigibles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Destinatarios
            </h2>
            <p>
              Tus datos no se ceden a terceros salvo obligación legal, o
              cuando sea necesario para la emisión de la certificación
              conjunta con la universidad y la asociación profesional
              correspondiente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Tus derechos
            </h2>
            <p>
              Podés ejercer tus derechos de acceso, rectificación,
              supresión, oposición, limitación del tratamiento y
              portabilidad escribiéndonos desde la página de contacto.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#2E2A22] mb-2">
              Cookies
            </h2>
            <p>
              Este sitio puede utilizar cookies técnicas necesarias para su
              funcionamiento. No utilizamos cookies de publicidad de
              terceros.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
