import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import aboutImg from "@/assets/about-cover.jpg";

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

      {/* Video */}
      <section className="py-16 md:py-24 border-b border-hairline">
        <div className="container-x">
          <p className="eyebrow text-muted-foreground mb-6">{tr.about.video}</p>
          <div className="relative aspect-video w-full overflow-hidden bg-foreground">
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


      <section className="py-24 md:py-32">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <img src={aboutImg} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </Reveal>
          <div className="md:col-span-5 md:pt-12">
            <Reveal>
              <p className="eyebrow text-muted-foreground">{tr.about.vision}</p>
              <h2 className="display text-3xl md:text-4xl mt-4">{tr.about.visionBody}</h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-12 pt-12 border-t border-hairline">
              <p className="eyebrow text-muted-foreground">{tr.about.mission}</p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{tr.about.missionBody}</p>
            </Reveal>
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
