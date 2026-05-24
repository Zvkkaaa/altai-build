import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import { jobs } from "@/lib/content";

export const Route = createFileRoute("/$lang/careers")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.careers} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.careers.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.careers.sub },
        { property: "og:url", content: `/${params.lang}/careers` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/careers` }],
    };
  },
  component: CareersPage,
});

function CareersPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    { mn: "Эрүүл мэндийн нэгдсэн даатгал", en: "Comprehensive health insurance" },
    { mn: "Сургалт, мэргэжил дээшлүүлэх дэмжлэг", en: "Training & development budget" },
    { mn: "Хүүхдийн сургуулийн тэтгэлэг", en: "Children's tuition support" },
    { mn: "Жилийн урамшуулал, бонус систем", en: "Annual performance bonus" },
    { mn: "Алслагдсан төслийн нэмэгдэл", en: "Remote-site project allowance" },
    { mn: "Корпорацийн орон сууцны хөнгөлөлт", en: "Corporate housing discount" },
  ];

  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.careers} title={tr.careers.title} sub={tr.careers.sub} />

      <section className="py-20 md:py-28 border-b border-hairline">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground mb-10">{tr.careers.openRoles}</p>
          <div className="border-t border-hairline">
            {jobs.map((j, i) => (
              <Reveal key={j.slug} delay={i * 0.04}>
                <div className="grid grid-cols-12 gap-4 py-6 border-b border-hairline items-center group hover:bg-surface px-2 -mx-2 transition-colors cursor-pointer">
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight">{j.title[l]}</h3>
                  </div>
                  <p className="col-span-4 md:col-span-2 text-sm text-muted-foreground">{j.department[l]}</p>
                  <p className="col-span-4 md:col-span-2 text-sm text-muted-foreground">{j.location[l]}</p>
                  <p className="col-span-3 md:col-span-2 text-sm text-muted-foreground">{j.type[l]}</p>
                  <ArrowRight size={18} className="col-span-1 ml-auto text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="container-x grid md:grid-cols-2 gap-16">
          <Reveal>
            <p className="eyebrow text-muted-foreground mb-4">{tr.careers.benefits}</p>
            <h2 className="display text-3xl md:text-5xl mb-10">
              {l === "mn" ? "Хүндлэгдсэн ажилчин." : "Respected at every level."}
            </h2>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4 text-base text-foreground/85 border-b border-hairline pb-4">
                  <span className="text-accent">—</span>
                  {l === "mn" ? b.mn : b.en}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-muted-foreground mb-4">{tr.careers.apply}</p>
            <h2 className="display text-3xl md:text-5xl mb-10">
              {l === "mn" ? "Өргөдөл илгээх." : "Submit your application."}
            </h2>
            {submitted ? (
              <div className="border border-hairline p-8 bg-background">
                <p className="display text-2xl">{l === "mn" ? "Баярлалаа." : "Thank you."}</p>
                <p className="mt-3 text-muted-foreground text-sm">
                  {l === "mn" ? "Бид 5 ажлын өдрийн дотор хариу өгнө." : "We will respond within 5 business days."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5 bg-background p-8 border border-hairline"
              >
                {(["name", "email", "phone", "position"] as const).map((f) => (
                  <Field key={f} label={tr.careers.form[f]} type={f === "email" ? "email" : "text"} name={f} required />
                ))}
                <Field label={tr.careers.form.cv} type="file" name="cv" accept=".pdf" />
                <div>
                  <label className="block eyebrow text-muted-foreground mb-2">{tr.careers.form.message}</label>
                  <textarea required rows={4} className="w-full border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-foreground" />
                </div>
                <button className="w-full py-3.5 bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  {tr.cta.send}
                </button>
              </form>
            )}
          </Reveal>
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
      <input {...rest} className="w-full border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-foreground" />
    </div>
  );
}
