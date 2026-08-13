import { NextRequest, NextResponse } from "next/server";
import { cursos } from "@/lib/cursos";

// Crea una sesión de Stripe Checkout para un nivel del curso.
// Requiere la variable de entorno STRIPE_SECRET_KEY configurada en Vercel.
export async function POST(req: NextRequest) {
  const { slug, nivel } = await req.json();

  const curso = cursos.find((c) => c.slug === slug);
  const nivelData = curso?.niveles.find((n) => n.nivel === nivel);

  if (!curso || !nivelData || nivelData.precio === null) {
    return NextResponse.json(
      { error: "No pudimos encontrar ese nivel." },
      { status: 400 }
    );
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      {
        error:
          "Los pagos online todavía no están habilitados. Escribinos por WhatsApp para reservar tu lugar.",
      },
      { status: 503 }
    );
  }

  const origin = req.headers.get("origin") || "https://igni-alpha.vercel.app";

  const params = new URLSearchParams();
  params.append("mode", "payment");
  params.append(
    "success_url",
    `${origin}/checkout/exito?session_id={CHECKOUT_SESSION_ID}`
  );
  params.append("cancel_url", `${origin}/cursos/${slug}`);
  params.append("line_items[0][quantity]", "1");
  params.append("line_items[0][price_data][currency]", "eur");
  params.append(
    "line_items[0][price_data][unit_amount]",
    String(Math.round(nivelData.precio * 100))
  );
  params.append(
    "line_items[0][price_data][product_data][name]",
    `IGNI — ${curso.nombre} — ${nivelData.nivel}`
  );
  params.append(
    "line_items[0][price_data][product_data][description]",
    nivelData.titulo
  );

  const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const session = await stripeRes.json();

  if (!stripeRes.ok) {
    return NextResponse.json(
      { error: session.error?.message || "No se pudo iniciar el pago." },
      { status: 500 }
    );
  }

  return NextResponse.json({ url: session.url });
}
