import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery & Returns — Breezely",
  description: "Free UK delivery, next-day options and a hassle-free 30-day returns policy.",
};

export default function DeliveryPage() {
  return (
    <div className="container-px max-w-3xl py-14">
      <h1 className="text-4xl font-extrabold tracking-tight text-ink">
        Delivery &amp; returns
      </h1>

      <div className="mt-10 space-y-10 text-ink/70">
        <section>
          <h2 className="text-xl font-bold text-ink">Delivery</h2>
          <ul className="mt-4 space-y-3">
            <li className="card p-5">
              <span className="font-semibold text-ink">Free standard delivery</span>
              <p className="mt-1 text-sm">2–4 working days across mainland UK. Free on every order.</p>
            </li>
            <li className="card p-5">
              <span className="font-semibold text-ink">Next-day delivery</span>
              <p className="mt-1 text-sm">Order before 2pm on a working day — available at checkout.</p>
            </li>
            <li className="card p-5">
              <span className="font-semibold text-ink">Tracking</span>
              <p className="mt-1 text-sm">You&apos;ll get a tracking link by email as soon as your order ships.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Returns</h2>
          <p className="mt-4">
            Changed your mind? Return any unused item in its original packaging
            within <strong>30 days</strong> for a full refund. Start a return by
            emailing{" "}
            <a href="mailto:hello@breezely.co.uk" className="text-ice-600 hover:underline">
              hello@breezely.co.uk
            </a>{" "}
            and we&apos;ll arrange free collection.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Guarantee</h2>
          <p className="mt-4">
            Every appliance is covered by a 2-year guarantee as standard (1 year
            on personal and USB-powered items). If anything develops a fault,
            we&apos;ll repair or replace it free of charge. This is in addition to
            your statutory rights.
          </p>
        </section>
      </div>
    </div>
  );
}
