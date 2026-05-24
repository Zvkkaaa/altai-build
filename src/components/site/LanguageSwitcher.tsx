import { Link, useLocation, useParams } from "@tanstack/react-router";
import { isLocale, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const params = useParams({ strict: false }) as { lang?: string };
  const location = useLocation();
  const current: Locale = isLocale(params.lang ?? "") ? (params.lang as Locale) : "mn";

  const swap = (target: Locale) => {
    const path = location.pathname.replace(/^\/(mn|en)/, `/${target}`);
    return path || `/${target}`;
  };

  return (
    <div className={`flex items-center gap-1 text-[11px] tracking-widest uppercase ${className}`}>
      {(["mn", "en"] as Locale[]).map((l, i) => (
        <div key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground/50">/</span>}
          <Link
            to={swap(l)}
            className={
              l === current
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            {l.toUpperCase()}
          </Link>
        </div>
      ))}
    </div>
  );
}
