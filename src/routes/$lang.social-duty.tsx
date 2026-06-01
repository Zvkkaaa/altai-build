import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Sprout, Trophy, Users } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import communityImg from "@/assets/project-residential.jpg";
import environmentImg from "@/assets/project-infrastructure.jpg";
import safetyImg from "@/assets/project-industrial.jpg";

const sportImg = "/pirates-sport-management.svg";

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

  const initiatives = [
    {
      id: "sport",
      icon: Trophy,
      title: tr.socialDuty.sport,
      body: tr.socialDuty.sportBody,
      stat: l === "mn" ? "Сагсан бөмбөгийн багууд" : "Basketball teams",
    },
    {
      id: "environment",
      icon: Sprout,
      title: tr.socialDuty.environment,
      body: tr.socialDuty.environmentBody,
      stat: l === "mn" ? "Ногоон байгууламж" : "Green spaces",
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: tr.socialDuty.safety,
      body: tr.socialDuty.safetyBody,
      stat: l === "mn" ? "Өдөр тутмын сургалт" : "Daily safety practice",
    },
    {
      id: "community",
      icon: Users,
      title: tr.socialDuty.community,
      body: tr.socialDuty.communityBody,
      stat: l === "mn" ? "Орон нутгийн хамтын ажиллагаа" : "Local partnerships",
    },
  ];
  const sportStats = l === "mn"
    ? ["2017 оноос хойш үйл ажиллагаа", "Олон удаагийн аварга баг", "Эмэгтэй сагсан бөмбөгийн хөгжилд хувь нэмэр"]
    : ["Active since 2017", "Multiple-time champion team", "Contributing to women's basketball"];

  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.socialDuty} title={tr.socialDuty.title} sub={tr.socialDuty.sub} />

      <section className="py-20 md:py-28">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <a
                  href={`#${item.id}`}
                  className="group block h-full border border-hairline p-8 md:p-10 bg-background transition-colors hover:bg-surface focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <div className="flex items-start justify-between gap-8">
                    <Icon size={28} className="text-accent transition-transform group-hover:-translate-y-1" />
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      /0{i + 1}
                    </span>
                  </div>
                  <h2 className="display text-3xl md:text-4xl mt-10">{item.title}</h2>
                  <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                  <p className="mt-10 pt-6 border-t border-hairline text-sm font-medium">
                    {item.stat}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="environment" className="scroll-mt-24 py-20 md:py-28 bg-surface border-y border-hairline">
        <div className="container-x grid md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-muted-foreground mb-4">{tr.socialDuty.environment}</p>
            <h2 className="display text-3xl md:text-5xl">
              {l === "mn" ? "Барилга бүрийн дараа илүү ногоон орчин." : "Greener places after every build."}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {tr.socialDuty.environmentBody}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <img
              src={environmentImg}
              alt=""
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section id="safety" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7 md:order-2">
            <img
              src={safetyImg}
              alt=""
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:order-1">
            <p className="eyebrow text-muted-foreground mb-4">{tr.socialDuty.safety}</p>
            <h2 className="display text-3xl md:text-5xl">
              {l === "mn" ? "Аюулгүй ажиллагаа бол ажлын эхлэл." : "Safety starts before the work does."}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {tr.socialDuty.safetyBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="sport" className="scroll-mt-24 bg-[#05070A] text-white">
        <div className="container-x py-20 md:py-28 xl:py-36">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)] lg:items-center xl:gap-16">
            <Reveal>
              <div className="relative overflow-hidden bg-white/5">
                <img
                  src={sportImg}
                  alt={l === "mn" ? "PIRATES сагсан бөмбөгийн баг" : "PIRATES Basketball Club team"}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover opacity-90 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#05070A]/30 via-transparent to-[#D4AF37]/10" />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="lg:py-10">
                <p className="eyebrow text-accent mb-5">{tr.socialDuty.sport}</p>
                <h2 className="display text-4xl md:text-6xl xl:text-7xl text-white">
                  {l === "mn" ? "Багийн спорт, багийн соёл." : "Team sport, team culture."}
                </h2>
                <p className="mt-8 text-base md:text-lg text-white/70 leading-relaxed">
                  {tr.socialDuty.sportBody}
                </p>
                <div className="mt-12 grid gap-4 border-t border-white/10 pt-8">
                  {sportStats.map((stat) => (
                    <p key={stat} className="flex items-center gap-3 text-sm text-white/75">
                      <span className="h-1.5 w-1.5 bg-accent" aria-hidden />
                      {stat}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="community" className="scroll-mt-24 py-20 md:py-28 bg-surface border-b border-hairline">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <img
              src={communityImg}
              alt=""
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="eyebrow text-muted-foreground mb-4">{tr.socialDuty.community}</p>
            <h2 className="display text-3xl md:text-5xl">
              {l === "mn" ? "Орон нутагтай хамт өсөх." : "Growing with local communities."}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {tr.socialDuty.communityBody}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
