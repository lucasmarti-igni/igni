import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-800/80 sticky top-0 bg-neutral-950/90 backdrop-blur z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          IGNI<span className="text-orange-500">.</span>
        </Link>
        <nav className="hidden lg:flex gap-7 text-sm text-neutral-300">
          <Link
            href="/quienes-somos"
            className="hover:text-white transition-colors"
          >
            Quienes somos
          </Link>
          <Link
            href="/autoridades"
            className="hover:text-white transition-colors"
          >
            Autoridades y docentes
          </Link>
          <Link href="/cursos" className="hover:text-white transition-colors">
            Los cursos
          </Link>
          <Link href="/niveles" className="hover:text-white transition-colors">
            Niveles y certificacion
          </Link>
          <Link
            href="/instituciones"
            className="hover:text-white transition-colors"
          >
            Instituciones
          </Link>
          <Link href="/tienda" className="hover:text-white transition-colors">
            Tienda
          </Link>
          <Link
            href="/proximamente"
            className="hover:text-white transition-colors"
          >
            Proximamente
          </Link>
        </nav>
        <Link
          href="/alumno"
          className="text-sm font-medium bg-orange-600 hover:bg-orange-500 transition-colors rounded-full px-4 py-2"
        >
          Area de alumno
        </Link>
      </div>
    </header>
  );
}
