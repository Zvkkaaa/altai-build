import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { t, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface Props { transparent?: boolean }

export function Navbar({ transparent = false }: Props) {
  const { lang } = useParams({ strict: false }) as { lang: Locale };
  const tr = t(lang ?? "mn");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = transparent && !scrolled;
  const linkBase = dark ? "text-white/85 hover:text-white" : "text-foreground/80 hover:text-foreground";

  const links = [
    { to: `/${lang}/about`, label: tr.nav.about },
    { to: `/${lang}/services`, label: tr.nav.services },
    { to: `/${lang}/projects`, label: tr.nav.projects },
    { to: `/${lang}/news`, label: tr.nav.news },
    { to: `/${lang}/careers`, label: tr.nav.careers },
    { to: `/${lang}/contact`, label: tr.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !transparent
          ? "bg-background/85 backdrop-blur border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to={`/${lang}`} className="flex items-center gap-3 group">
          <div
            className={`h-2 w-8 transition-colors ${dark ? "bg-accent" : "bg-foreground"}`}
            aria-hidden
          />
          <span
            className={`font-medium tracking-tight text-sm md:text-[15px] ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {tr.brand}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] font-medium transition-colors ${linkBase}`}
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher className={dark ? "[&_a]:text-white/80 [&_a:hover]:text-white" : ""} />
          <button
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden p-2 -mr-2 ${dark ? "text-white" : "text-foreground"}`}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-hairline">
          <nav className="container-x py-6 flex flex-col gap-4">
            {[{ to: `/${lang}`, label: tr.nav.home }, ...links].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground py-1"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
