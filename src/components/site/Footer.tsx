import { Link, useParams } from "@tanstack/react-router";
import { t, type Locale } from "@/lib/i18n";
import logo from "@/assets/logo-hussen-zug.jpeg";

export function Footer() {
  const { lang } = useParams({ strict: false }) as { lang: Locale };
  const l = lang ?? "mn";
  const tr = t(l);

  return (
    <footer className="bg-brand text-white mt-24">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 bg-white rounded-md flex items-center justify-center">
                <img src={logo} alt="" className="h-full w-full object-contain p-0.5" />
              </span>
              <span className="font-bold text-base tracking-tight">{tr.brand}</span>
            </div>
            <h2 className="display text-2xl md:text-3xl mt-8 max-w-md leading-tight">
              {tr.home.ctaTitle}
            </h2>
            <Link
              to={`/${l}/contact`}
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-md hover:brightness-110 transition"
            >
              {tr.cta.getInTouch} →
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-accent mb-5">{tr.footer.explore}</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", tr.nav.home],
                ["/about", tr.nav.about],
                ["/services", tr.nav.services],
                ["/projects", tr.nav.projects],
                ["/news", tr.nav.news],
                ["/contact", tr.nav.contact],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={`/${l}${href === "/" ? "" : href}`}
                    className="text-white/75 hover:text-accent transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-accent mb-5">{tr.footer.contact}</p>
            <address className="not-italic text-sm text-white/75 space-y-2 leading-relaxed">
              <p>{tr.footer.address}</p>
              <p>+976 9507-7733 · 9507-9955</p>
              <p>+976 7609-7777</p>
              <p>info@hussenzug.mn</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/55 gap-3">
          <p>{tr.footer.legal}</p>
          <p>{tr.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

