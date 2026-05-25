import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { t, type Locale } from "@/lib/i18n";
import { projects, services, news, testimonials, stats, partners } from "@/lib/content";
import heroImg from "@/assets/amgalan-residence-towers.jpg";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = params.lang === "mn"
      ? `${tr.brand} — Үндэсний хэмжээний барилгын корпораци`
      : `${tr.brand} — National construction corporation`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.home.heroSub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.home.heroSub },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/${params.lang}` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}` }],
    };
  },
  component: HomePage,
});

function HomePage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  const featured = projects.slice(0, 4);
  const latest = news.slice(0, 3);

  return (
    <>
      <Navbar transparent />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-foreground text-white">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 container-x flex items-end pb-16 md:pb-28">
            <div className="max-w-5xl">
              <Reveal>
                <p className="eyebrow text-accent">{tr.home.heroEyebrow}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="display text-5xl md:text-7xl xl:text-[8.5rem] mt-6 text-white">
                  {tr.home.heroTitle}
                </h1>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-8 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
                  {tr.home.heroSub}
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/$lang/projects"
                    params={{ lang: l }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground text-sm font-medium hover:translate-y-[-2px] transition-transform"
                  >
                    {tr.cta.viewProjects} <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    to="/$lang/contact"
                    params={{ lang: l }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-foreground transition-colors"
                  >
                    {tr.cta.contactUs}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="container-x pb-8 flex items-center justify-between text-xs text-white/60">
            <span>UB · Mongolia · est. 1998</span>
            <span className="flex items-center gap-2 animate-pulse">
              <ArrowDown size={14} /> scroll
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-40 border-b border-hairline">
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">{tr.home.introEyebrow}</p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="display text-3xl md:text-5xl xl:text-6xl">{tr.home.introTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {tr.home.introBody}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-x">
          <div className="flex items-end justify-between mb-14">
            <Reveal>
              <p className="eyebrow text-muted-foreground mb-3">{tr.home.services}</p>
              <h2 className="display text-3xl md:text-5xl">{tr.services.title}</h2>
            </Reveal>
            <Link
              to="/$lang/services"
              params={{ lang: l }}
              className="hidden md:inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground"
            >
              {tr.cta.readMore} <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-hairline">
            {services.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 0.05}
                className="border-b border-r border-hairline p-8 md:p-10 bg-background hover:bg-surface transition-colors group"
              >
                <p className="text-xs text-muted-foreground tabular-nums">
                  0{i + 1}
                </p>
                <h3 className="mt-6 text-xl md:text-2xl font-medium tracking-tight">
                  {s.title[l]}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.summary[l]}
                </p>
                <span className="mt-8 inline-flex items-center text-xs text-foreground group-hover:gap-2 gap-1 transition-all">
                  {tr.cta.readMore} →
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between mb-14">
            <Reveal>
              <p className="eyebrow text-muted-foreground mb-3">{tr.home.featured}</p>
              <h2 className="display text-3xl md:text-5xl max-w-2xl">{tr.projects.title}</h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title[l]}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {p.location[l]} · {p.year}
                      </p>
                      <h3 className="mt-2 text-xl md:text-2xl font-medium tracking-tight">
                        {p.title[l]}
                      </h3>
                    </div>
                    <ArrowUpRight size={20} className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-accent mb-3">{tr.home.stats}</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-12">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="display text-5xl md:text-7xl text-background">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-sm text-background/60">{s.label[l]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between mb-14">
            <Reveal>
              <p className="eyebrow text-muted-foreground mb-3">{tr.home.latestNews}</p>
              <h2 className="display text-3xl md:text-5xl">{tr.news.title}</h2>
            </Reveal>
            <Link
              to="/$lang/news"
              params={{ lang: l }}
              className="hidden md:inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground"
            >
              {tr.cta.readMore} <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latest.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.08}>
                <article className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={n.image} alt={n.title[l]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="eyebrow text-muted-foreground mt-5">{n.category[l]} · {new Date(n.date).toLocaleDateString(l === "mn" ? "mn-MN" : "en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight">{n.title[l]}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-surface border-y border-hairline">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground mb-12">{tr.home.testimonials}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {testimonials.map((t2, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-xl md:text-2xl font-medium leading-snug tracking-tight">
                  "{t2.quote[l]}"
                </p>
                <div className="mt-8 pt-6 border-t border-hairline">
                  <p className="text-sm font-medium">{t2.author}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t2.org[l]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground text-center mb-10">{tr.home.partners}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-foreground/40">
            {partners.map((p) => (
              <span key={p} className="text-lg md:text-xl font-medium tracking-tight">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
