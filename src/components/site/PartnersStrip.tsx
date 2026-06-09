import { partners } from "@/lib/content";

const loopedPartners = [...partners, ...partners];

function PartnerCard({
  name,
  logo,
}: {
  name: string;
  logo?: string;
}) {
  const hasLogo = typeof logo === "string" && logo.length > 0;

  return (
    <div className="flex h-20 w-[9.75rem] sm:h-24 sm:w-[11rem] md:w-[12rem] shrink-0 items-center justify-center rounded-2xl border border-hairline bg-white/90 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,59,122,0.12)]">
      {hasLogo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="max-h-10 max-w-full object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fallback = e.currentTarget.nextElementSibling;
            if (fallback instanceof HTMLElement) fallback.style.display = "flex";
          }}
        />
      ) : null}
      <span
        className="hidden items-center justify-center text-center text-xs sm:text-sm font-bold tracking-tight text-brand px-2"
        style={{ display: hasLogo ? "none" : "flex" }}
      >
        {name}
      </span>
    </div>
  );
}

export function PartnersStrip() {
  return (
    <div className="overflow-x-auto pb-3 [-webkit-overflow-scrolling:touch] hide-scrollbar">
      <div className="partners-marquee flex w-max items-stretch gap-4 pr-2">
        {loopedPartners.map((partner, index) => (
          <PartnerCard
            key={`${partner.name}-${index}`}
            name={partner.name}
            logo={partner.logo}
          />
        ))}
      </div>
    </div>
  );
}
