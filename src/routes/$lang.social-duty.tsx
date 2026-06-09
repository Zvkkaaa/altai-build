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

export const Route = createFileRoute("/$lang/social-duty")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.socialDuty} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.socialDuty.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.socialDuty.sub },
        { property: "og:url", content: `/${params.lang}/social-duty` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/social-duty` }],
    };
  },
  component: SocialDutyPage,
});

function SocialDutyPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);

  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.socialDuty} title={tr.socialDuty.title} sub={tr.socialDuty.sub} />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal className="group overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={heroConstruction}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow text-accent mb-3">{tr.socialDuty.sport}</p>
              <h2 className="display text-2xl md:text-3xl">{l === "mn" ? "Спортын дэмжлэг" : "Supporting sport"}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{tr.socialDuty.sportBody}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="group overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={aboutImg}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow text-accent mb-3">{tr.socialDuty.environment}</p>
              <h2 className="display text-2xl md:text-3xl">{l === "mn" ? "Мод тарих, нөхөн сэргээлт" : "Tree planting and restoration"}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{tr.socialDuty.environmentBody}</p>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="group overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={projectGov}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow text-accent mb-3">{tr.socialDuty.safety}</p>
              <h2 className="display text-2xl md:text-3xl">{l === "mn" ? "Хөдөлмөрийн аюулгүй байдал" : "Occupational safety"}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{tr.socialDuty.safetyBody}</p>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="group overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={projectResidential}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow text-accent mb-3">{tr.socialDuty.community}</p>
              <h2 className="display text-2xl md:text-3xl">{l === "mn" ? "Орон нутгийн хамтын ажиллагаа" : "Community partnership"}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{tr.socialDuty.communityBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface border-y border-hairline">
        <div className="container-x grid gap-8 md:grid-cols-12 items-start">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-accent mb-3">{tr.nav.socialDuty}</p>
            <h2 className="display text-3xl md:text-5xl">{l === "mn" ? "Бид зөвхөн барилга барьдаггүй." : "We do more than build."}</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {l === "mn"
                ? "Барилга бүрийн ард орон нутгийн хэрэгцээ, аюулгүй ажиллагаа, урт хугацааны үнэ цэнийг бодож ажилладаг."
                : "Behind every project is a commitment to local needs, safer work, and long-term value for the communities around us."}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
