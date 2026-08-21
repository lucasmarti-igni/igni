"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

export default function Alumno() {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError(error.message);
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { nombre },
        },
      });
      if (error) {
        setError(error.message);
      } else {
        setInfo(
          "Cuenta creada. Revisa tu email para confirmar el registro antes de ingresar."
        );
      }
    }
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  if (checkingSession) {
    return (
      <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22] flex items-center justify-center px-6">
        <p className="text-[#8A8070] text-sm">Cargando...</p>
      </main>
    );
  }

  if (session) {
    return (
      <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <a
            href="/"
            className="text-sm text-[#8A8070] hover:text-[#2E2A22] transition-colors"
          >
            ← Volver al inicio
          </a>
          <h1 className="text-2xl font-semibold mt-6 mb-2 text-[#2E2A22]">Área de alumno</h1>
          <p className="text-[#6B5D48] text-sm mb-8">
            Sesión iniciada como <span className="text-[#2E2A22]">{session.user.email}</span>.
          </p>
          <div className="rounded-xl border border-[#E4D9C8] bg-white/40 p-6 mb-6">
            <p className="text-xs uppercase tracking-wide text-[#B8944A] mb-2">
              Tus cursos
            </p>
            <p className="text-sm text-[#8A8070]">
              Todavía no hay cursos ni certificados cargados a tu cuenta. Esta
              sección se activa con el lanzamiento del curso.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full border border-[#A9AEB2] text-[#5C5648] hover:border-[#6B5D48] transition-colors font-medium rounded-full px-6 py-3"
          >
            Cerrar sesión
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F6EFE7] text-[#2E2A22] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <a
          href="/"
          className="text-sm text-[#8A8070] hover:text-[#2E2A22] transition-colors"
        >
          ← Volver al inicio
        </a>
        <h1 className="text-2xl font-semibold mt-6 mb-2 text-[#2E2A22]">Área de alumno</h1>
        <p className="text-[#6B5D48] text-sm mb-8">
          Acá vas a poder acceder a tus cursos, tu progreso por nivel y tus
          certificados con código QR de verificación.
        </p>

        <div className="flex gap-2 mb-6 text-sm">
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setError(null);
              setInfo(null);
            }}
            className={`flex-1 rounded-full px-4 py-2 transition-colors ${
              mode === "login"
                ? "bg-[#B8944A] text-[#F6EFE7]"
                : "border border-[#A9AEB2] text-[#5C5648]"
            }`}
          >
            Ingresar
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("signup");
              setError(null);
              setInfo(null);
            }}
            className={`flex-1 rounded-full px-4 py-2 transition-colors ${
              mode === "signup"
                ? "bg-[#B8944A] text-[#F6EFE7]"
                : "border border-[#A9AEB2] text-[#5C5648]"
            }`}
          >
            Crear cuenta
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div>
              <label className="block text-sm text-[#6B5D48] mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2.5 text-sm text-[#2E2A22] placeholder:text-[#A9AEB2]"
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-[#6B5D48] mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2.5 text-sm text-[#2E2A22] placeholder:text-[#A9AEB2]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#6B5D48] mb-1">
              Contraseña
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-[#E4D9C8] bg-white/60 px-4 py-2.5 text-sm text-[#2E2A22] placeholder:text-[#A9AEB2]"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              {error}
            </p>
          )}
          {info && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
              {info}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#B8944A] hover:bg-[#A6803D] text-[#F6EFE7] disabled:opacity-50 transition-colors font-medium rounded-full px-6 py-3"
          >
            {loading
              ? "Procesando..."
              : mode === "login"
              ? "Ingresar"
              : "Crear cuenta"}
          </button>
        </form>
      </div>
    </main>
  );
}
