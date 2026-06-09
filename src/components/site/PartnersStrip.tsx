import { partners } from "@/lib/content";

export function PartnersStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
      {partners.map((p) => (
        <div
          key={p.name}
          className="group relative h-20 md:h-24 flex items-center justify-center rounded-lg border border-hairline bg-white hover:border-accent hover:shadow-md transition-all duration-300"
        >
          <img
            src={p.logo}
            alt={p.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const sib = e.currentTarget.nextElementSibling;
              if (sib instanceof HTMLElement) sib.style.display = "block";
            }}
            className="max-h-12 max-w-[80%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition"
          />
          <span
            style={{ display: "none" }}
            className="text-center px-2 text-[13px] font-bold tracking-tight text-brand"
          >
            {p.name}
          </span>
        </div>
      ))}
    </div>
  );
}
