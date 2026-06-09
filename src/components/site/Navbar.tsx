import { Link, useParams, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { t, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/logo-hussen-zug.jpeg";

export function Navbar() {
  const { lang } = useParams({ strict: false }) as { lang: Locale };
  const l = lang ?? "mn";
  const tr = t(l);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const links = [
    { to: `/${l}`, label: tr.nav.home, exact: true },
    { to: `/${l}/about`, label: tr.nav.about },
    { to: `/${l}/services`, label: tr.nav.services },
    { to: `/${l}/projects`, label: tr.nav.projects },
    { to: `/${l}/news`, label: tr.nav.news },
    { to: `/${l}/contact`, label: tr.nav.contact },
  ];

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to || pathname === `${to}/` : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white">
      {/* Orange top strip */}
      <div className="h-1 bg-accent w-full" />
      <div className="bg-white border-b border-hairline">
        <div className="container-x flex items-center justify-between h-9 text-[12px] text-muted-foreground">
          <div className="flex items-center gap-5">
            <a href="mailto:info@hussenzug.mn" className="hidden sm:inline-flex items-center gap-1.5 hover:text-brand">
              <Mail size={13} className="text-accent" /> info@hussenzug.mn
            </a>
            <a href="tel:+97695077733" className="inline-flex items-center gap-1.5 hover:text-brand">
              <Phone size={13} className="text-accent" /> 9507-7733
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-hairline shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        <div className="container-x flex items-center justify-between h-20">
          <Link to={`/${l}`} className="flex items-center gap-3">
            <img src={logo} alt={tr.brand} className="h-11 w-11 object-contain" />
            <div className="leading-tight">
              <div className="font-bold text-brand text-[15px] tracking-tight">{tr.brand}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden sm:block">
                Construction · Engineering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9 h-full">
            {links.map((lnk) => {
              const active = isActive(lnk.to, lnk.exact);
              return (
                <Link
                  key={lnk.to}
                  to={lnk.to}
                  className={`relative h-full flex items-center text-[14px] font-medium transition-colors ${
                    active ? "text-accent" : "text-foreground/85 hover:text-brand"
                  }`}
                >
                  {lnk.label}
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-accent rounded-t" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to={`/${l}/contact`}
              className="inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-md hover:brightness-110 transition"
            >
              {tr.cta.getInTouch}
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 -mr-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-hairline">
          <nav className="container-x py-5 flex flex-col">
            {links.map((lnk) => {
              const active = isActive(lnk.to, lnk.exact);
              return (
                <Link
                  key={lnk.to}
                  to={lnk.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 border-b border-hairline text-[15px] font-medium ${
                    active ? "text-accent" : "text-foreground"
                  }`}
                >
                  {lnk.label}
                </Link>
              );
            })}
            <Link
              to={`/${l}/contact`}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center px-5 py-3 bg-accent text-white text-sm font-semibold rounded-md"
            >
              {tr.cta.getInTouch}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
