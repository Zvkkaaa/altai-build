import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import aboutImg from "@/assets/about-cover.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import projectGov from "@/assets/project-government.jpg";
import projectResidential from "@/assets/project-residential.jpg";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.about} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.about.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.about.sub },
        { property: "og:url", content: `/${params.lang}/about` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/about` }],
    };
  },
  component: AboutPage,
});

const timeline = [
  { year: "1998", mn: "Корпорацийн үндэс байгуулагдсан.", en: "Company founded in Ulaanbaatar." },
  { year: "2006", mn: "Анхны төрийн томоохон төслийг гүйцэтгэсэн.", en: "First major government contract delivered." },
  { year: "2012", mn: "ISO 9001 чанарын стандартыг авсан.", en: "ISO 9001 certification awarded." },
  { year: "2018", mn: "Аймгуудад салбар нээж, үндэсний хэмжээнд өргөжсөн.", en: "Expanded nationwide across provinces." },
  { year: "2023", mn: "340 дэх төслийг амжилттай хүлээлгэн өгсөн.", en: "Delivered our 340th completed project." },
  { year: "2026", mn: "Дижитал барилгын менежментийн системд шилжсэн.", en: "Migrated to a fully digital construction management platform." },
];

function AboutPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);

  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.about} title={tr.about.hero} sub={tr.about.sub} />

      {/* Company profile */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-accent mb-4">{l === "mn" ? "Компанийн танилцуулга" : "Company profile"}</p>
              <h2 className="display text-3xl md:text-5xl text-brand max-w-lg">
                {l === "mn"
                  ? "Бидний тухай хэсэг нь товч, илүү цэвэр, ойлгомжтой харагдана."
                  : "A cleaner, more concise introduction that reads immediately."}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {tr.about.sub}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-4">
                {[
                  l === "mn" ? "Орон сууц, иргэний барилга" : "Residential and civil construction",
                  l === "mn" ? "Төслийн удирдлага ба хяналт" : "Project management and supervision",
                  l === "mn" ? "Хамтрагч НБИК ХХК-тай хамтын ажиллагаа" : "Partnership with NBIK LLC",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-hairline bg-surface px-5 py-4 text-sm md:text-base text-foreground/85">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="sm:row-span-2">
                <div className="group h-full overflow-hidden rounded-3xl border border-hairline bg-surface shadow-sm">
                  <img
                    src={aboutImg}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="group overflow-hidden rounded-3xl border border-hairline bg-surface shadow-sm">
                  <img
                    src={heroConstruction}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="group overflow-hidden rounded-3xl border border-hairline bg-surface shadow-sm">
                  <img
                    src={projectGov}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="group overflow-hidden rounded-3xl border border-hairline bg-surface shadow-sm">
                  <img
                    src={projectResidential}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 md:py-24 border-y border-hairline bg-surface">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground mb-6">{tr.about.video}</p>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-foreground shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/QGQRm2wlIpU"
              title={tr.about.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-surface border-y border-hairline">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground mb-4">{tr.about.history}</p>
          <h2 className="display text-3xl md:text-5xl mb-16 max-w-2xl">
            {l === "mn" ? "25 жилийн замнал." : "25 years of building."}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {timeline.map((t1, i) => (
              <Reveal key={t1.year} delay={i * 0.05}>
                <p className="display text-5xl md:text-6xl text-accent">{t1.year}</p>
                <p className="mt-4 text-base text-foreground/85 leading-relaxed">{l === "mn" ? t1.mn : t1.en}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container-x">
          <p className="eyebrow text-accent mb-4">{tr.about.certs}</p>
          <h2 className="display text-3xl md:text-5xl mb-16 max-w-2xl">
            {l === "mn" ? "Олон улсын стандартууд." : "Internationally certified."}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {["ISO 9001", "ISO 14001", "ISO 45001", "LEED AP"].map((c) => (
              <Reveal key={c}>
                <p className="display text-3xl md:text-4xl">{c}</p>
                <p className="text-xs text-background/55 mt-2">since 2012</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
