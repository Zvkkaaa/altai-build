import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { PartnersStrip } from "@/components/site/PartnersStrip";
import { t, type Locale } from "@/lib/i18n";
import { services, stats } from "@/lib/content";
import heroImg from "@/assets/hero-construction.jpg";
import amgalanHero from "@/assets/amgalan-residence-hero.jpg";


export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = params.lang === "mn"
      ? `${tr.brand} — Барилга, архитектур, инженерчлэл`
      : `${tr.brand} — Construction, Architecture, Engineering`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.home.heroSub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.home.heroSub },
        { property: "og:type", content: "website" },
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
  const previewServices = services.slice(0, 6);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[78vh] md:min-h-[86vh] flex items-center overflow-hidden bg-brand">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/80 to-brand/40" />
        <div className="relative container-x py-20 md:py-28 text-white">
          <Reveal>
            <p className="eyebrow text-accent">{tr.home.heroEyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-4xl md:text-6xl xl:text-7xl mt-5 max-w-3xl text-white">
              {tr.home.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-white/80 text-base md:text-lg leading-relaxed">
              {tr.home.heroSub}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/$lang/projects" params={{ lang: l }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-semibold rounded-md hover:brightness-110 transition"
              >
                {tr.cta.viewProjects} <ArrowRight size={16} />
              </Link>
              <Link
                to="/$lang/contact" params={{ lang: l }}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/40 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition"
              >
                {tr.cta.contactUs}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SHORT ABOUT */}
      <section className="py-20 md:py-28">
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-accent mb-3">{tr.home.introEyebrow}</p>
            <h2 className="display text-3xl md:text-5xl text-brand">{tr.home.introTitle}</h2>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {tr.home.introBody}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {stats.map((s, i) => (
                  <div key={i} className="border-l-2 border-accent pl-4">
                    <p className="display text-3xl md:text-4xl text-brand">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground leading-snug">{s.label[l]}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/$lang/about" params={{ lang: l }}
                className="inline-flex items-center gap-2 mt-10 text-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                {tr.cta.readMore} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT — AMGALAN RESIDENCE */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-accent mb-3">{tr.home.featured}</p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img src={amgalanHero} alt="AMGALAN RESIDENCE" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="display text-3xl md:text-5xl text-brand">AMGALAN RESIDENCE</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {l === "mn" ? "Богд уулын бэлд · Улаанбаатар" : "Foot of Bogd Mountain · Ulaanbaatar"}
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {l === "mn"
                  ? "5 блок, 15 давхар орон сууцны цогцолбор. Цутгамал төмөр бетон бүтэц, эрчим хүчний хэмнэлттэй технологи, нарны хавтан, 24 цагийн харуул хамгаалалт."
                  : "Five-block, 15-storey residential complex. Cast-in-place reinforced concrete, energy-efficient systems, rooftop solar, and 24/7 security."}
              </p>
              <ul className="mt-6 space-y-2.5">
                {(l === "mn"
                  ? ["5 блок · 15 давхар", "46-70 м² 2-3 өрөө", "Далд болон ил зогсоол", "24/7 харуул хамгаалалт"]
                  : ["5 blocks · 15 floors", "46-70 m² · 2-3 bedrooms", "Underground & surface parking", "24/7 security"]
                ).map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/$lang/projects" params={{ lang: l }}
                className="inline-flex items-center gap-2 mt-8 px-5 py-3 bg-brand text-white text-sm font-semibold rounded-md hover:bg-accent transition"
              >
                {tr.cta.readMore} <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10">
            <Reveal>
              <p className="eyebrow text-accent mb-3">{tr.home.services}</p>
              <h2 className="display text-3xl md:text-5xl text-brand">{tr.services.title}</h2>
            </Reveal>
            <Link
              to="/$lang/services" params={{ lang: l }}
              className="hidden md:inline-flex items-center gap-1 text-sm text-accent font-semibold hover:gap-2 transition-all"
            >
              {tr.cta.readMore} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {previewServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  to="/$lang/services/$slug" params={{ lang: l, slug: s.slug }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow"
                >
                  <img src={s.image} alt={s.title[l]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-white font-bold text-lg leading-tight">{s.title[l]}</h3>
                    <div className="mt-2 flex items-center gap-2 text-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition">
                      {tr.cta.readMore} <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative overflow-hidden py-20 md:py-24 bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-brand/8 blur-3xl" />
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-accent text-center mb-3">{tr.home.partners}</p>
            <h2 className="display text-2xl md:text-4xl text-brand text-center mb-4">
              {tr.home.partners}
            </h2>
          </Reveal>
          <PartnersStrip />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-20 md:py-28 bg-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <div className="container-x relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="eyebrow text-accent mb-3">{tr.cta.contactUs}</p>
            <h2 className="display text-3xl md:text-5xl">{tr.home.ctaTitle}</h2>
            <p className="mt-4 text-white/75 max-w-md">{tr.home.ctaSub}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 md:items-end">
              <a href="tel:+97695077733" className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-accent transition">
                <Phone size={22} className="text-accent" /> +976 9507-7733
              </a>
              <Link
                to="/$lang/contact" params={{ lang: l }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-semibold rounded-md hover:brightness-110 transition"
              >
                {tr.cta.getInTouch} <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
