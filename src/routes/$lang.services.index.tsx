import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import { services } from "@/lib/content";

export const Route = createFileRoute("/$lang/services/")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.services} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.services.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.services.sub },
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
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  to="/$lang/services/$slug"
                  params={{ lang: l, slug: s.slug }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={s.image}
                    alt={s.title[l]}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/55 to-transparent transition-opacity duration-500 group-hover:from-brand" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-2 text-accent text-xs font-bold mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="text-white font-bold text-xl leading-tight">{s.title[l]}</h3>
                    <p className="mt-2 text-white/80 text-sm leading-relaxed line-clamp-2 opacity-90">
                      {s.summary[l]}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-accent text-xs font-semibold">
                      {tr.cta.readMore}
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
