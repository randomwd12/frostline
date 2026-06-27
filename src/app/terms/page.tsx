import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Frostline",
};

export default function TermsPage() {
  return (
    <div className="container-px max-w-3xl py-14">
      <h1 className="text-4xl font-extrabold tracking-tight text-ink">
        Terms &amp; conditions
      </h1>
      <p className="mt-4 text-sm text-ink/50">Last updated: June 2026</p>

      <div className="mt-8 space-y-6 text-ink/70">
        <p>
          These are placeholder terms for the Frostline demo store. Replace them
          with your finalised terms before trading.
        </p>
        <div>
          <h2 className="text-xl font-bold text-ink">Orders</h2>
          <p className="mt-2">
            All orders are subject to acceptance and availability. Prices are in
            GBP and include VAT where applicable.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">Pricing &amp; payment</h2>
          <p className="mt-2">
            We take care to ensure prices are correct. In the rare event of a
            pricing error we&apos;ll contact you before dispatch.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">Returns &amp; guarantee</h2>
          <p className="mt-2">
            Our returns and guarantee terms are set out on the Delivery &amp;
            Returns page and do not affect your statutory rights.
          </p>
        </div>
      </div>
    </div>
  );
}
