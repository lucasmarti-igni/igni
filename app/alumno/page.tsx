export default function Alumno() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <a
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          ← Volver al inicio
        </a>
        <h1 className="text-2xl font-semibold mt-6 mb-2">Area de alumno</h1>
        <p className="text-neutral-400 text-sm mb-8">
          Aca vas a poder acceder a tus cursos, tu progreso por nivel y tus
          certificados con codigo QR de verificacion.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Email
            </label>
            <input
              type="email"
              disabled
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-sm placeholder:text-neutral-600 disabled:opacity-60"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Contrasena
            </label>
            <input
              type="password"
              disabled
              placeholder="••••••••"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-sm placeholder:text-neutral-600 disabled:opacity-60"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full bg-orange-600/50 cursor-not-allowed font-medium rounded-full px-6 py-3"
          >
            Ingresar
          </button>
        </form>
        <p className="text-xs text-neutral-600 mt-6 text-center">
          El acceso se habilita con el lanzamiento del curso.
        </p>
      </div>
    </main>
  );
}
