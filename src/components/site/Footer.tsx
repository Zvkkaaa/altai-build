import { Link, useParams } from "@tanstack/react-router";
import { t, type Locale } from "@/lib/i18n";
import logo from "@/assets/logo-hussen-zug.jpeg";

export function Footer() {
  const { lang } = useParams({ strict: false }) as { lang: Locale };
  const l = lang ?? "mn";
  const tr = t(l);

  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 bg-white rounded-sm flex items-center justify-center">
                <img src={logo} alt="" className="h-full w-full object-contain p-0.5" />
              </span>
              <span className="font-semibold text-sm tracking-tight">{tr.brand}</span>
            </div>
            <h2 className="display text-4xl md:text-6xl mt-10 max-w-md">
              {tr.home.ctaTitle}
            </h2>
            <Link
              to={`/${l}/contact`}
              className="inline-flex items-center gap-2 mt-10 px-5 py-3 bg-accent text-accent-foreground text-sm font-medium hover:translate-x-1 transition-transform"
            >
              {tr.cta.getInTouch} →
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-background/60 mb-5">{tr.footer.explore}</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", tr.nav.home],
                ["/about", tr.nav.about],
                ["/services", tr.nav.services],
                ["/projects", tr.nav.projects],
                ["/news", tr.nav.news],
                ["/social-duty", tr.nav.socialDuty],
                ["/careers", tr.nav.careers],
                ["/contact", tr.nav.contact],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={`/${l}${href === "/" ? "" : href}`}
                    className="text-background/75 hover:text-background"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-background/60 mb-5">{tr.footer.contact}</p>
            <address className="not-italic text-sm text-background/75 space-y-2 leading-relaxed">
              <p>{tr.footer.address}</p>
              <p>+976 9507-7733 · 9507-9955</p>
              <p>+976 7609-7777</p>
            </address>
          </div>
        </div>

        <div className="border-t border-background/10 mt-20 pt-8 flex flex-col md:flex-row justify-between text-xs text-background/55 gap-3">
          <p>{tr.footer.legal}</p>
          <p>{tr.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
