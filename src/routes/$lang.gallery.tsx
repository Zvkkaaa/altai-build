import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { t, type Locale } from "@/lib/i18n";

import a0 from "@/assets/amgalan/p-000.jpg";
import a1 from "@/assets/amgalan/p-001.jpg";
import a2 from "@/assets/amgalan/p-002.jpg";
import a3 from "@/assets/amgalan/p-003.jpg";
import a4 from "@/assets/amgalan/p-004.jpg";
import a5 from "@/assets/amgalan/p-005.jpg";
import a6 from "@/assets/amgalan/p-006.jpg";
import a7 from "@/assets/amgalan/p-007.jpg";
import a8 from "@/assets/amgalan/p-008.jpg";
import a9 from "@/assets/amgalan/p-009.jpg";
import a10 from "@/assets/amgalan/p-010.jpg";
import a11 from "@/assets/amgalan/p-011.jpg";
import a12 from "@/assets/amgalan/p-012.jpg";
import a13 from "@/assets/amgalan/p-013.jpg";
import a14 from "@/assets/amgalan/p-014.jpg";
import a15 from "@/assets/amgalan/p-015.jpg";
import a16 from "@/assets/amgalan/p-016.jpg";
import a17 from "@/assets/amgalan/p-017.jpg";
import a18 from "@/assets/amgalan/p-018.jpg";
import a19 from "@/assets/amgalan/p-019.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import projectGov from "@/assets/project-government.jpg";
import projectLuxury from "@/assets/project-luxury.jpg";
import amgalanInterior from "@/assets/amgalan-residence-interior.jpg";
import amgalanAmenities from "@/assets/amgalan-residence-amenities.jpg";
import amgalanMasterplan from "@/assets/amgalan-residence-masterplan.jpg";
import amgalanTowers from "@/assets/amgalan-residence-towers.jpg";

type Cat = "all" | "construction" | "residential" | "commercial" | "interior" | "architecture";

interface Item { src: string; cat: Exclude<Cat, "all">; }

const items: Item[] = [
  { src: amgalanTowers, cat: "residential" },
  { src: a0, cat: "architecture" },
  { src: projectIndustrial, cat: "construction" },
  { src: amgalanInterior, cat: "interior" },
  { src: a1, cat: "residential" },
  { src: projectOffice, cat: "commercial" },
  { src: a2, cat: "architecture" },
  { src: amgalanAmenities, cat: "interior" },
  { src: projectInfra, cat: "construction" },
  { src: a3, cat: "residential" },
  { src: projectLuxury, cat: "commercial" },
  { src: a4, cat: "architecture" },
  { src: amgalanMasterplan, cat: "architecture" },
  { src: a5, cat: "residential" },
  { src: projectGov, cat: "commercial" },
  { src: a6, cat: "interior" },
  { src: a7, cat: "construction" },
  { src: a8, cat: "residential" },
  { src: a9, cat: "architecture" },
  { src: a10, cat: "residential" },
  { src: a11, cat: "interior" },
  { src: a12, cat: "construction" },
  { src: a13, cat: "residential" },
  { src: a14, cat: "architecture" },
  { src: a15, cat: "interior" },
  { src: a16, cat: "residential" },
  { src: a17, cat: "construction" },
  { src: a18, cat: "architecture" },
  { src: a19, cat: "residential" },
];

export const Route = createFileRoute("/$lang/gallery")({
  head: ({ params }) => {
    const tr = t(params.lang as Locale);
    const title = `${tr.nav.gallery} — ${tr.brand}`;
    const desc = params.lang === "mn"
      ? "Барилга, орон сууц, арилжаа, интерьер, архитектурын зургийн цуглуулга."
      : "Construction, residential, commercial, interior, and architecture photo gallery.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/${params.lang}/gallery` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}/gallery` }],
    };
  },
  component: GalleryPage,
});

function GalleryPage() {
  const { lang } = Route.useParams();
  const l = lang as Locale;
  const tr = t(l);
  const [cat, setCat] = useState<Cat>("all");
  const [open, setOpen] = useState<number | null>(null);

  const labels: Record<Cat, string> = l === "mn"
    ? { all: "Бүгд", construction: "Барилга", residential: "Орон сууц", commercial: "Арилжаа", interior: "Интерьер", architecture: "Архитектур" }
    : { all: "All", construction: "Construction", residential: "Residential", commercial: "Commercial", interior: "Interior", architecture: "Architecture" };

  const filtered = useMemo(() => items.filter((i) => cat === "all" || i.cat === cat), [cat]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? null : (o + 1) % filtered.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? null : (o - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, filtered.length]);

  return (
    <>
      <Navbar />
      <PageHero
        eyebrow={tr.nav.gallery}
        title={l === "mn" ? "Бидний бүтээлийн цуглуулга" : "Our visual archive"}
        sub={l === "mn"
          ? "Барилга, архитектур, интерьер, орчны зургийг ангилалаар нь үзнэ үү."
          : "Explore construction, architecture, interior, and environmental photography by category."}
      />

      <section className="container-x py-12 md:py-16">
        <div className="flex flex-wrap gap-2 md:gap-3 border-b border-hairline pb-6">
          {(Object.keys(labels) as Cat[]).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 text-xs md:text-sm tracking-wide uppercase transition-colors ${
                cat === c
                  ? "bg-foreground text-background"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {labels[c]}
            </button>
          ))}
        </div>

        <div className="mt-8 md:mt-12 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
          {filtered.map((it, idx) => (
            <Reveal key={`${it.src}-${idx}`} delay={(idx % 8) * 0.04} className="mb-4 md:mb-6 break-inside-avoid">
              <button
                onClick={() => setOpen(idx)}
                className="group block w-full overflow-hidden bg-muted"
              >
                <img
                  src={it.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-3 md:left-8 text-white/80 hover:text-white p-3"
              onClick={(e) => { e.stopPropagation(); setOpen((o) => o === null ? null : (o - 1 + filtered.length) % filtered.length); }}
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[open].src}
              alt=""
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-3 md:right-8 text-white/80 hover:text-white p-3"
              onClick={(e) => { e.stopPropagation(); setOpen((o) => o === null ? null : (o + 1) % filtered.length); }}
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>
            <p className="absolute bottom-5 left-0 right-0 text-center text-xs text-white/50 tracking-widest uppercase">
              {open + 1} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
