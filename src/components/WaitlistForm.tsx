"use client";

import { useState } from "react";

export default function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // No backend yet — store interest locally so nothing is lost before launch.
    try {
      const raw = localStorage.getItem("frostline-waitlist");
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("frostline-waitlist", JSON.stringify(list));
    } catch {
      // ignore
    }
    setDone(true);
  }

  if (done) {
    return (
      <p className={dark ? "text-white/80" : "text-ink/70"}>
        🎉 You&apos;re on the list — we&apos;ll email you the moment summer deals
        drop.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.co.uk"
        className={`flex-1 rounded-full border px-5 py-3 text-sm outline-none transition focus:ring-2 focus:ring-accent ${
          dark
            ? "border-white/15 bg-white/10 text-white placeholder:text-white/40"
            : "border-black/10 bg-white text-ink placeholder:text-ink/40"
        }`}
      />
      <button type="submit" className="btn-accent">
        Notify me
      </button>
    </form>
  );
}
