import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import { projects, type ProjectCategory } from "@/lib/content";

export const Route = createFileRoute("/$lang/projects")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.projects} — ${tr.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: tr.projects.sub },
        { property: "og:title", content: title },
        { property: "og:description", content: tr.projects.sub },
        { property: "og:url", content: `/${params.lang}/projects` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/projects` }],
    };
  },
  component: ProjectsPage,
});

const CATEGORIES: { id: ProjectCategory | "all"; mn: string; en: string }[] = [
  { id: "all", mn: "Бүгд", en: "All" },
  { id: "apartment", mn: "Орон сууц", en: "Residential" },
  { id: "office", mn: "Оффис", en: "Office" },
  { id: "government", mn: "Төрийн", en: "Government" },
  { id: "industrial", mn: "Үйлдвэрлэл", en: "Industrial" },
  { id: "infrastructure", mn: "Дэд бүтэц", en: "Infrastructure" },
  { id: "luxury", mn: "Тансаг", en: "Luxury" },
];

function ProjectsPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.projects} title={tr.projects.title} sub={tr.projects.sub} />

      <section className="py-12 border-b border-hairline sticky top-16 md:top-20 bg-background/90 backdrop-blur z-20">
        <div className="container-x flex flex-wrap gap-x-1 gap-y-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                filter === c.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l === "mn" ? c.mn : c.en}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <div className={`group ${i % 3 === 0 ? "md:mt-16" : ""}`}>
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
                        {p.location[l]} · {p.year} · {tr.projects.status[p.status]}
                      </p>
                      <h3 className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
                        {p.title[l]}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                        {p.description[l]}
                      </p>
                    </div>
                    <ArrowUpRight size={20} className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
