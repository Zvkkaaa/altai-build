import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import { services } from "@/lib/content";

export const Route = createFileRoute("/$lang/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!services.find((s) => s.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    const tr = t(params.lang as Locale);
    const l = params.lang as Locale;
    const title = s ? `${s.title[l]} — ${tr.brand}` : tr.nav.services;
    const desc = s?.summary[l] ?? tr.services.sub;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(s ? [{ property: "og:image", content: s.image }] : []),
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { lang, slug } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  const service = services.find((s) => s.slug === slug)!;
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden bg-brand">
        <img src={service.image} alt={service.title[l]} className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/70 to-brand/20" />
        <div className="relative container-x pb-14 text-white">
          <Link
            to="/$lang/services" params={{ lang: l }}
            className="inline-flex items-center gap-2 text-white/80 text-sm hover:text-accent transition mb-5"
          >
            <ArrowLeft size={14} /> {tr.nav.services}
          </Link>
          <p className="eyebrow text-accent">{tr.nav.services}</p>
          <h1 className="display text-4xl md:text-6xl mt-3 max-w-3xl">{service.title[l]}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {service.summary[l]}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="display text-2xl md:text-3xl text-brand mt-12 mb-6">
                {l === "mn" ? "Үйлчилгээний хүрээ" : "What's included"}
              </h2>
              <ul className="space-y-3">
                {service.features[l].map((f) => (
                  <li key={f} className="flex items-start gap-3 p-4 bg-surface rounded-lg border border-hairline">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {service.gallery && service.gallery.length > 0 && (
              <Reveal delay={0.15}>
                <h2 className="display text-2xl md:text-3xl text-brand mt-12 mb-6">
                  {l === "mn" ? "Холбоотой ажлууд" : "Related work"}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {service.gallery.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden rounded-lg">
                      <img src={img} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-brand text-white p-6 md:p-8 rounded-xl">
              <p className="eyebrow text-accent mb-3">{tr.cta.contactUs}</p>
              <h3 className="display text-2xl mb-4">
                {l === "mn" ? "Зөвлөгөө авах уу?" : "Need a consultation?"}
              </h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                {l === "mn"
                  ? "Манай инженерийн баг тантай 24 цагийн дотор холбогдоно."
                  : "Our engineering team will respond within 24 hours."}
              </p>
              <a href="tel:+97695077733" className="flex items-center gap-2 text-lg font-bold mb-4 hover:text-accent transition">
                <Phone size={18} className="text-accent" /> +976 9507-7733
              </a>
              <Link
                to="/$lang/contact" params={{ lang: l }}
                className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-md hover:brightness-110 transition"
              >
                {tr.cta.getInTouch} <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container-x">
          <h2 className="display text-2xl md:text-3xl text-brand mb-8">
            {l === "mn" ? "Бусад үйлчилгээ" : "Other services"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/$lang/services/$slug" params={{ lang: l, slug: s.slug }}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
              >
                <img src={s.image} alt={s.title[l]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-white font-bold text-lg">{s.title[l]}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
