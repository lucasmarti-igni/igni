"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/autoridades", label: "Autoridades" },
  { href: "/cursos", label: "Cursos" },
  { href: "/niveles", label: "Niveles" },
  { href: "/instituciones", label: "Instituciones" },
  { href: "/tienda", label: "Tienda" },
  { href: "/proximamente", label: "Próximamente" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#E4D9C8] sticky top-0 bg-[#F6EFE7]/95 backdrop-blur z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-3">
        <Link href="/" className="shrink-0 flex items-center">
          <div
            style={{
              height: "44px",
              width: "77.7px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/logo%20igni%20dorado%20y%20plata%20fondo%20crema.jpeg"
              alt="IGNI"
              style={{
                position: "absolute",
                height: "57.85px",
                width: "92.28px",
                left: "-7.67px",
                top: "-8.63px",
                maxWidth: "none",
              }}
            />
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-[#6B5D48] whitespace-nowrap overflow-x-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[#2E2A22] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/alumno"
            className="text-sm font-medium bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors rounded-full px-4 py-2 whitespace-nowrap"
          >
            Área de alumno
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 shrink-0"
          >
            <span
              className={`block h-0.5 w-6 bg-[#2E2A22] transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2E2A22] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2E2A22] transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-[#E4D9C8] bg-[#F6EFE7] px-6 py-4 flex flex-col gap-4 text-sm text-[#6B5D48]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#2E2A22] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
