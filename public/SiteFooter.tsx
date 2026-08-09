import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E4D9C8] py-10 bg-[#F6EFE7]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-[#8A8070]">
        <span>© {new Date().getFullYear()} IGNI</span>
        <div className="flex gap-6">
          <Link href="/alumno" className="hover:text-[#2E2A22]">
            Area de alumno
          </Link>
          <Link href="/verificar" className="hover:text-[#2E2A22]">
            Verificar certificado
          </Link>
          <Link href="#" className="hover:text-[#2E2A22]">
            Terminos
          </Link>
          <Link href="#" className="hover:text-[#2E2A22]">
            Privacidad
          </Link>
          <Link href="#" className="hover:text-[#2E2A22]">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
