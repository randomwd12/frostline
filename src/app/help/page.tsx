import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help & FAQs — Frostline",
  description: "Answers to common questions about Frostline cooling appliances, delivery, returns and guarantees.",
};

const faqs = [
  {
    q: "Which is right for me — air conditioner, air cooler or fan?",
    a: "A portable air conditioner actively lowers room temperature and is best for hot, stuffy rooms — it does need to vent out of a window. An evaporative air cooler uses water and ice for low-energy relief and works best in drier heat with some ventilation. A fan moves air to help you feel cooler and is the most affordable, quietest option.",
  },
  {
    q: "Do portable air conditioners need a window?",
    a: "Yes. Portable air conditioners produce warm exhaust air that needs to vent outside, usually through a window using the included venting kit. Fans, air coolers and dehumidifiers don't need any venting.",
  },
  {
    q: "How much do they cost to run?",
    a: "Fans and personal coolers use very little electricity (often under 50W). Evaporative coolers are also low-energy. Portable air conditioners use more power, but our models are A-rated for efficiency. Each product page lists the power draw so you can compare.",
  },
  {
    q: "How fast is delivery?",
    a: "Delivery is free across mainland UK. In-stock items are dispatched within 24 hours on working days, with next-day delivery available at checkout.",
  },
  {
    q: "What's your returns policy?",
    a: "You can return any unused item within 30 days for a full refund. If something develops a fault, our 2-year guarantee has you covered.",
  },
  {
    q: "Is everything guaranteed?",
    a: "Yes — every appliance comes with a 2-year guarantee as standard (1 year on personal/USB items), in addition to your statutory rights.",
  },
];

export default function HelpPage() {
  return (
    <div className="container-px py-14">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">
          Help &amp; FAQs
        </h1>
        <p className="mt-3 text-lg text-ink/60">
          Everything you need to choose, buy and look after your cooling.
        </p>
      </header>

      <div className="mt-10 max-w-3xl space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group card p-6 open:shadow-md">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
              {f.q}
              <span className="ml-4 text-ink/40 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink/65">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 card max-w-3xl p-8 text-center">
        <h2 className="text-xl font-bold text-ink">Still need a hand?</h2>
        <p className="mt-2 text-ink/60">
          Our UK team is here Monday to Friday, 9am–5pm.
        </p>
        <a href="mailto:hello@frostline.co.uk" className="btn-accent mt-5">
          Email hello@frostline.co.uk
        </a>
        <p className="mt-4 text-sm text-ink/50">
          Or read our{" "}
          <Link href="/delivery" className="text-ice-600 hover:underline">
            delivery &amp; returns
          </Link>{" "}
          info.
        </p>
      </div>
    </div>
  );
}
