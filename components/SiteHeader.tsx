import Link from "next/link";

const links = [
  { href: "/quienes-somos", label: "Quienes somos" },
  { href: "/autoridades", label: "Autoridades" },
  { href: "/cursos", label: "Cursos" },
  { href: "/niveles", label: "Niveles" },
  { href: "/instituciones", label: "Instituciones" },
  { href: "/tienda", label: "Tienda" },
  { href: "/proximamente", label: "Proximamente" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-800/80 sticky top-0 bg-neutral-950/90 backdrop-blur z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight shrink-0">
          IGNI<span className="text-orange-500">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-neutral-300 whitespace-nowrap overflow-x-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/alumno"
          className="text-sm font-medium bg-orange-600 hover:bg-orange-500 transition-colors rounded-full px-4 py-2 shrink-0 whitespace-nowrap"
        >
          Area de alumno
        </Link>
      </div>
    </header>
  );
}
