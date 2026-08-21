"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// TODO: reemplazar por el email real de contacto de IGNI en cuanto Lucas lo confirme.
const CONTACTO_EMAIL = "contacto@igni.pendiente";

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    pais: "",
    asunto: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}
Email: ${form.email}
Teléfono: ${form.telefono}
País: ${form.pais}

${form.mensaje}`
    );
    const subject = encodeURIComponent(
      form.asunto || "Contacto desde la web de IGNI"
    );
    window.location.href = `mailto:${CONTACTO_EMAIL}?subject=${subject}&body=${body}`;
    setEnviado(true);
  }

  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22]">
      <SiteHeader />
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-[#2E2A22]">
          Contacto
        </h1>
        <p className="text-[#6B5D48] mb-10 max-w-xl">
          Completá el formulario y te respondemos a la brevedad.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              className="block text-sm text-[#5C5648] mb-1"
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2 text-[#2E2A22] focus:outline-none focus:border-[#B8944A]"
            />
          </div>
          <div>
            <label
              className="block text-sm text-[#5C5648] mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2 text-[#2E2A22] focus:outline-none focus:border-[#B8944A]"
            />
          </div>
          <div>
            <label
              className="block text-sm text-[#5C5648] mb-1"
              htmlFor="telefono"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2 text-[#2E2A22] focus:outline-none focus:border-[#B8944A]"
            />
          </div>
          <div>
            <label
              className="block text-sm text-[#5C5648] mb-1"
              htmlFor="pais"
            >
              País
            </label>
            <input
              id="pais"
              name="pais"
              value={form.pais}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2 text-[#2E2A22] focus:outline-none focus:border-[#B8944A]"
            />
          </div>
          <div>
            <label
              className="block text-sm text-[#5C5648] mb-1"
              htmlFor="asunto"
            >
              Asunto
            </label>
            <input
              id="asunto"
              name="asunto"
              required
              value={form.asunto}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2 text-[#2E2A22] focus:outline-none focus:border-[#B8944A]"
            />
          </div>
          <div>
            <label
              className="block text-sm text-[#5C5648] mb-1"
              htmlFor="mensaje"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2 text-[#2E2A22] focus:outline-none focus:border-[#B8944A]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] transition-colors font-medium rounded-full px-6 py-3"
          >
            Enviar
          </button>
          {enviado && (
            <p className="text-sm text-[#8A8070]">
              Se abrió tu cliente de email para enviar el mensaje.
            </p>
          )}
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
