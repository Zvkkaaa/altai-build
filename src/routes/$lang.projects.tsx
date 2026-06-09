import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, MapPin, CalendarDays, BadgeCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";
import { projects, type ProjectCategory, type Project } from "@/lib/content";

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
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <PageHero eyebrow={tr.nav.projects} title={tr.projects.title} sub={tr.projects.sub} />

      <section className="border-b border-hairline bg-background/95 backdrop-blur">
        <div className="container-x py-6 md:py-8">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`rounded-full px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.22em] transition-all ${
                    active
                      ? "bg-foreground text-background shadow-sm"
                      : "bg-transparent text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {l === "mn" ? c.mn : c.en}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="group relative block w-full overflow-hidden rounded-3xl border border-hairline bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title[l]}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-accent/90">
                            {tr.projects.status[p.status]}
                          </p>
                          <h3 className="mt-2 text-xl md:text-2xl font-semibold leading-tight text-white">
                            {p.title[l]}
                          </h3>
                        </div>
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={12} className="text-accent" />
                        {p.location[l]}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={12} className="text-accent" />
                        {p.year}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {p.description[l]}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      {l === "mn" ? "Дэлгэрэнгүй" : "View details"}
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected ? (
          <DialogContent className="max-w-5xl overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-full">
                <img
                  src={selected.image}
                  alt={selected.title[l]}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <DialogHeader className="text-left">
                  <p className="eyebrow text-accent">{tr.nav.projects}</p>
                  <DialogTitle className="display text-3xl md:text-4xl text-brand">
                    {selected.title[l]}
                  </DialogTitle>
                  <DialogDescription className="text-base md:text-lg leading-relaxed mt-4">
                    {selected.description[l]}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-8 grid gap-3">
                  <div className="flex flex-wrap gap-2">
                    <BadgeCheck size={16} className="mt-0.5 text-accent shrink-0" />
                    <span className="text-sm text-foreground/80">
                      {selected.location[l]} · {selected.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <BadgeCheck size={16} className="mt-0.5 text-accent shrink-0" />
                    <span className="text-sm text-foreground/80">
                      {tr.projects.status[selected.status]}
                    </span>
                  </div>
                </div>

                {selected.highlights && (
                  <div className="mt-8">
                    <p className="eyebrow text-muted-foreground mb-4">
                      {l === "mn" ? "Онцлох мэдээлэл" : "Highlights"}
                    </p>
                    <div className="grid gap-3">
                      {selected.highlights[l].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-hairline bg-surface px-4 py-3 text-sm text-foreground/80"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>

      <Footer />
    </>
  );
}
