import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import { news } from "@/lib/content";

export const Route = createFileRoute("/$lang/news")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.news} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.news.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.news.sub },
        { property: "og:url", content: `/${params.lang}/news` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/news` }],
    };
  },
  component: NewsPage,
});

function NewsPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  const [featured, ...rest] = news;
  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.news} title={tr.news.title} sub={tr.news.sub} />

      <section className="py-20 md:py-28">
        <div className="container-x">
          {/* Featured */}
          <Reveal>
            <article className="grid md:grid-cols-12 gap-10 group cursor-pointer">
              <div className="md:col-span-7 aspect-[16/10] overflow-hidden bg-muted">
                <img src={featured.image} alt={featured.title[l]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="md:col-span-5 md:pt-8">
                <p className="eyebrow text-muted-foreground">
                  {featured.category[l]} · {new Date(featured.date).toLocaleDateString(l === "mn" ? "mn-MN" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h2 className="display text-3xl md:text-5xl mt-6">{featured.title[l]}</h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{featured.excerpt[l]}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24 pt-16 border-t border-hairline">
            {rest.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.08}>
                <article className="group">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={n.image} alt={n.title[l]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="eyebrow text-muted-foreground mt-6">
                    {n.category[l]} · {new Date(n.date).toLocaleDateString(l === "mn" ? "mn-MN" : "en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                  <h3 className="text-2xl font-medium mt-3 tracking-tight">{n.title[l]}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{n.excerpt[l]}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
