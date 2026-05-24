import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import { services } from "@/lib/content";

export const Route = createFileRoute("/$lang/services")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.services} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.services.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.services.sub },
        { property: "og:url", content: `/${params.lang}/services` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/services` }],
    };
  },
  component: ServicesPage,
});

function ServicesPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.services} title={tr.services.title} sub={tr.services.sub} />
      <section className="py-20 md:py-28">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <div className="flex items-start gap-6">
                <span className="display text-2xl text-muted-foreground tabular-nums pt-1">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="display text-3xl md:text-4xl">{s.title[l]}</h2>
                  <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {s.summary[l]}
                  </p>
                  <ul className="mt-8 space-y-2.5 text-sm border-t border-hairline pt-6">
                    {[1, 2, 3, 4].map((n) => (
                      <li key={n} className="flex items-start gap-3">
                        <span className="text-accent mt-1">—</span>
                        <span className="text-foreground/80">
                          {l === "mn"
                            ? `Үе шат ${n}: техникийн санал, төсөв, гүйцэтгэл, хяналт.`
                            : `Phase ${n}: technical proposal, costing, delivery, supervision.`}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
