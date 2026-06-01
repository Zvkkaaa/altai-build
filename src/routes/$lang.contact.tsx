import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.contact} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.contact.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.contact.sub },
        { property: "og:url", content: `/${params.lang}/contact` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/contact` }],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  const [sent, setSent] = useState(false);
  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.contact} title={tr.contact.title} sub={tr.contact.sub} />

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-16">
          <Reveal className="md:col-span-5 space-y-12">
            {[
              { label: tr.contact.office, value: l === "mn" ? "БЗД, 8-р хороо\nAmgalan Residence\nУлаанбаатар, Монгол" : "Amgalan Residence\n8th khoroo, Bayanzurkh District\nUlaanbaatar, Mongolia" },
              { label: tr.contact.phone, value: "+976 9507-7733\n+976 9507-9955\n+976 7609-7777" },
              { label: tr.contact.email, value: "info@hussenzug.mn\nsales@amgalanresidence.mn" },
              { label: tr.contact.hours, value: l === "mn" ? "Даваа – Баасан · 09:00 – 18:00\nБямба · 10:00 – 14:00" : "Mon – Fri · 09:00 – 18:00\nSat · 10:00 – 14:00" },
            ].map((b) => (
              <div key={b.label} className="border-t border-hairline pt-6">
                <p className="eyebrow text-muted-foreground mb-3">{b.label}</p>
                <p className="text-base text-foreground/85 whitespace-pre-line leading-relaxed">{b.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            {sent ? (
              <div className="border border-hairline p-10 bg-surface text-center">
                <p className="display text-3xl">{tr.contact.form.sent}</p>
                <p className="mt-3 text-muted-foreground text-sm">
                  {l === "mn" ? "Бид 24 цагийн дотор хариу өгнө." : "We'll get back to you within 24 hours."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="border border-hairline p-8 md:p-10 bg-background space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label={tr.contact.form.name} required />
                  <Field label={tr.contact.form.email} type="email" required />
                </div>
                <Field label={tr.contact.form.subject} required />
                <div>
                  <label className="block eyebrow text-muted-foreground mb-2">{tr.contact.form.message}</label>
                  <textarea required rows={5} className="w-full border border-input px-3 py-2.5 text-sm focus:outline-none focus:border-foreground" />
                </div>
                <button className="w-full py-3.5 bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  {tr.cta.send}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="aspect-[21/9] w-full bg-surface relative overflow-hidden">
          <iframe
            title="Office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=106.965%2C47.905%2C107.015%2C47.935&layer=mapnik"
            className="w-full h-full grayscale"
            loading="lazy"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block eyebrow text-muted-foreground mb-2">{label}</label>
      <input {...rest} className="w-full border border-input px-3 py-2.5 text-sm focus:outline-none focus:border-foreground" />
    </div>
  );
}
