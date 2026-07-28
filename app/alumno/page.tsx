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
      <main className="min-h-screen flex items-center justify-center px-6">
        <p className="text-neutral-500 text-sm">Cargando...</p>
      </main>
    );
  }

  if (session) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <a
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            â Volver al inicio
          </a>
          <h1 className="text-2xl font-semibold mt-6 mb-2">Area de alumno</h1>
          <p className="text-neutral-400 text-sm mb-8">
            Sesion iniciada como <span className="text-neutral-200">{session.user.email}</span>.
          </p>
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 mb-6">
            <p className="text-xs uppercase tracking-wide text-orange-400 mb-2">
              Tus cursos
            </p>
            <p className="text-sm text-neutral-500">
              Todavia no hay cursos ni certificados cargados a tu cuenta. Esta
              seccion se activa con el lanzamiento del curso.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full border border-neutral-700 hover:border-neutral-500 transition-colors font-medium rounded-full px-6 py-3"
          >
            Cerrar sesion
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <a
          href="/"
          className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          â Volver al inicio
        </a>
        <h1 className="text-2xl font-semibold mt-6 mb-2">Area de alumno</h1>
        <p className="text-neutral-400 text-sm mb-8">
          Aca vas a poder acceder a tus cursos, tu progreso por nivel y tus
          certificados con codigo QR de verificacion.
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
                ? "bg-orange-600"
                : "border border-neutral-700 text-neutral-400"
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
                ? "bg-orange-600"
                : "border border-neutral-700 text-neutral-400"
            }`}
          >
            Crear cuenta
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div>
              <label className="block text-sm text-neutral-400 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-sm placeholder:text-neutral-600"
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-sm placeholder:text-neutral-600"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Contrasena
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="â¢â¢â¢â¢â¢â¢â¢â¢"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-sm placeholder:text-neutral-600"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-950/30 border border-red-900/50 rounded-lg px-4 py-2">
              {error}
            </p>
          )}
          {info && (
            <p className="text-sm text-green-400 bg-green-950/30 border border-green-900/50 rounded-lg px-4 py-2">
              {info}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-500 disabled:opacity-50 transition-colors font-medium rounded-full px-6 py-3"
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
