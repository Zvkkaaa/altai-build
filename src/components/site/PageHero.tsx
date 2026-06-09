import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
}

export function PageHero({ eyebrow, title, sub }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-surface hero-sheen pt-14 md:pt-16 pb-12 md:pb-16">
      <div className="page-hero-orb left-[-5rem] top-[0.5rem] h-36 w-36 bg-accent/12" />
      <div className="page-hero-orb right-[8%] top-[0.25rem] h-52 w-52 bg-brand/10" />
      <div className="page-hero-orb right-[-4rem] bottom-[-2rem] h-56 w-56 bg-accent/8" />
      <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mb-6 h-1.5 w-44 max-w-full rounded-full bg-accent" />
        <div className="max-w-4xl">
          {eyebrow && <p className="eyebrow text-muted-foreground mb-4">{eyebrow}</p>}
          <h1 className="display text-4xl md:text-6xl xl:text-7xl max-w-4xl">{title}</h1>
          {sub && (
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {sub}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
