import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Frostline",
};

export default function PrivacyPage() {
  return (
    <div className="container-px max-w-3xl py-14">
      <h1 className="text-4xl font-extrabold tracking-tight text-ink">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm text-ink/50">Last updated: June 2026</p>

      <div className="prose mt-8 space-y-6 text-ink/70">
        <p>
          This is a placeholder privacy policy for the Frostline demo store.
          Replace it with your finalised policy before going live.
        </p>
        <div>
          <h2 className="text-xl font-bold text-ink">What we collect</h2>
          <p className="mt-2">
            We collect the information you give us when placing an order or
            joining our waitlist — such as your name, email, delivery address and
            order details — to fulfil your order and keep you updated.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">How we use it</h2>
          <p className="mt-2">
            Your data is used to process orders, provide support, and — only if
            you opt in — send occasional offers. We never sell your data.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">Your rights</h2>
          <p className="mt-2">
            Under UK GDPR you can request access to, correction of, or deletion
            of your personal data at any time by emailing
            hello@frostline.co.uk.
          </p>
        </div>
      </div>
    </div>
  );
}
