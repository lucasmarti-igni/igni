import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-800/80 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-neutral-500">
        <span>Â© {new Date().getFullYear()} IGNI</span>
        <div className="flex gap-6">
          <Link href="/alumno" className="hover:text-neutral-300">
            Area de alumno
          </Link>
          <Link href="/verificar" className="hover:text-neutral-300">
            Verificar certificado
          </Link>
          <Link href="#" className="hover:text-neutral-300">
            Terminos
          </Link>
          <Link href="#" className="hover:text-neutral-300">
            Privacidad
          </Link>
          <Link href="#" className="hover:text-neutral-300">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
