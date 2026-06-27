import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";
import type { CartItem } from "@/context/CartContext";

export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json(
      {
        error:
          "Payments aren't configured yet. Add STRIPE_SECRET_KEY to .env.local (see .env.example).",
      },
      { status: 500 }
    );
  }

  const stripe = new Stripe(key);

  let items: CartItem[] = [];
  try {
    const body = await req.json();
    items = Array.isArray(body.items) ? body.items : [];
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Build line items from the server-side catalogue so prices can't be tampered
  // with, and skip anything that's sold out.
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const item of items) {
    const product = getProduct(item.slug);
    if (!product || product.soldOut) continue;
    const qty = Math.max(1, Math.min(99, Math.floor(item.qty)));
    lineItems.push({
      quantity: qty,
      price_data: {
        currency: "gbp",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product.name,
          description: product.short,
        },
      },
    });
  }

  if (lineItems.length === 0) {
    return NextResponse.json(
      { error: "Your basket has no purchasable items." },
      { status: 400 }
    );
  }

  const origin =
    process.env.NEXT_PUBLIC_BASE_URL ??
    req.headers.get("origin") ??
    "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["GB"] },
      phone_number_collection: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unable to start checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
