const niveles = [
  {
    nivel: "Nivel 1",
    certificado: "Certificado de nivel 1",
    emitido: "Asociacion asignada a ese nivel",
  },
  {
    nivel: "Nivel 2",
    certificado: "Certificado de nivel 2 (ademas del de nivel 1)",
    emitido: "Asociacion asignada a ese nivel",
  },
  {
    nivel: "Nivel 3",
    certificado: "Certificado de nivel 3 (ademas de los anteriores)",
    emitido: "Asociacion asignada a ese nivel",
  },
];

const proximamente = [
  {
    nombre: "Maestro Veggie a la Brasa",
    detalle: "Segundo curso confirmado",
  },
  { nombre: "Pasteleria", detalle: "Proximamente" },
  { nombre: "Cocina Regional", detalle: "Proximamente" },
];

const instituciones = [
  { nombre: "NIU", tipo: "Certificacion universitaria" },
  { nombre: "FELAMS", tipo: "Asociacion profesional" },
  { nombre: "APC", tipo: "Asociacion profesional" },
  { nombre: "World BBQ Argentina", tipo: "Asociacion profesional" },
  { nombre: "Club Parrillero Costa Brava", tipo: "Asociacion profesional" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-neutral-800/80 sticky top-0 bg-neutral-950/90 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight">
            IGNI<span className="text-orange-500">.</span>
          </span>
          <nav className="hidden sm:flex gap-8 text-sm text-neutral-300">
            <a href="#curso" className="hover:text-white transition-colors">
              El curso
            </a>
            <a href="#niveles" className="hover:text-white transition-colors">
              Niveles y certificacion
            </a>
            <a
              href="#instituciones"
              className="hover:text-white transition-colors"
            >
              Instituciones
            </a>
            <a
              href="#proximamente"
              className="hover:text-white transition-colors"
            >
              Proximamente
            </a>
          </nav>
          <a
            href="#curso"
            className="text-sm font-medium bg-orange-600 hover:bg-orange-500 transition-colors rounded-full px-4 py-2"
          >
            Ingresar
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-neutral-800/80">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(234,88,12,0.25), transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-orange-400 mb-4">
            Escuela I - Fuego y Parrilla
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Certificacion profesional
            <br />
            del oficio del fuego
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
            IGNI certifica a quienes se forman en el oficio del fuego junto a
            asociaciones profesionales de referencia y una universidad
            acreditada. Un curso, tres niveles, una certificacion dual.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#niveles"
              className="bg-orange-600 hover:bg-orange-500 transition-colors font-medium rounded-full px-6 py-3"
            >
              Conoce el curso
            </a>
            <a
              href="#verificar"
              className="border border-neutral-700 hover:border-neutral-500 transition-colors font-medium rounded-full px-6 py-3"
            >
              Verificar un certificado
            </a>
          </div>
        </div>
      </section>

      <section id="curso" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-4">
          Fuego y Parrilla — el curso de lanzamiento
        </h2>
        <p className="text-neutral-400 max-w-3xl leading-relaxed">
          Un recorrido de tres niveles pensado para formar profesionales
          reales del oficio, con contenido en video, materiales descargables
          y evaluacion practica en cada etapa. Cada nivel completado suma un
          certificado propio; al terminar los tres, se emite ademas la
          certificacion universitaria.
        </p>
      </section>

      <section
        id="niveles"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800/80"
      >
        <h2 className="text-2xl font-semibold mb-2">
          Niveles y certificacion
        </h2>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          Cada certificado incluye un codigo QR de verificacion unico:
          cualquiera puede escanearlo y confirmar que es autentico en
          nuestra pagina publica de validacion.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {niveles.map((n) => (
            <div
              key={n.nivel}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <span className="text-xs uppercase tracking-wide text-orange-400">
                {n.nivel}
              </span>
              <p className="mt-3 font-medium">{n.certificado}</p>
              <p className="mt-2 text-sm text-neutral-500">{n.emitido}</p>
            </div>
          ))}
          <div className="rounded-xl border border-orange-700/60 bg-orange-950/20 p-6">
            <span className="text-xs uppercase tracking-wide text-orange-400">
              Los 3 niveles completos
            </span>
            <p className="mt-3 font-medium">Certificacion universitaria</p>
            <p className="mt-2 text-sm text-neutral-500">
              Emitida por universidad acreditada
            </p>
          </div>
        </div>
      </section>

      <section
        id="instituciones"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800/80"
      >
        <h2 className="text-2xl font-semibold mb-2">Respaldo institucional</h2>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          IGNI emite certificaciones junto a asociaciones profesionales y una
          universidad acreditada, con convenios firmados que avalan cada
          nivel del programa.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {instituciones.map((i) => (
            <div
              key={i.nombre}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <p className="font-medium">{i.nombre}</p>
              <p className="mt-2 text-sm text-neutral-500">{i.tipo}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-8">
          <p className="text-xs uppercase tracking-wide text-orange-400 mb-3">
            Direccion
          </p>
          <p className="font-medium text-lg">Lucas Marti Boldrini</p>
          <p className="mt-2 text-neutral-400 text-sm leading-relaxed max-w-2xl">
            Presidente de AEAP (Asociacion Espanola de Asadores
            Profesionales), Embajador de Marca Pais Argentina, autor de dos
            libros publicados y conductor del programa de radio
            &quot;Aca Como Alla&quot;.
          </p>
        </div>
      </section>

      <section
        id="proximamente"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-800/80"
      >
        <h2 className="text-2xl font-semibold mb-2">Proximas escuelas</h2>
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

      <footer
        id="verificar"
        className="border-t border-neutral-800/80 py-10"
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} IGNI</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300">
              Terminos
            </a>
            <a href="#" className="hover:text-neutral-300">
              Privacidad
            </a>
            <a href="#" className="hover:text-neutral-300">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
