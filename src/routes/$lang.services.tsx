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
      <section className="py-20 md:py-32">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <article className="group">
                <p className="display text-sm text-accent tabular-nums tracking-widest">
                  /{String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="display text-3xl md:text-5xl mt-5 transition-transform duration-500 group-hover:translate-x-1">
                  {s.title[l]}
                </h2>
                <div className="mt-6 h-px w-full bg-hairline" />
                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {s.summary[l]}
                </p>
                <ul className="mt-8 space-y-3">
                  {s.features[l].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
