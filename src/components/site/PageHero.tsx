import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
}

export function PageHero({ eyebrow, title, sub }: Props) {
  return (
    <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-hairline">
      <div className="container-x">
        {eyebrow && <p className="eyebrow text-muted-foreground mb-6">{eyebrow}</p>}
        <h1 className="display text-5xl md:text-7xl xl:text-8xl max-w-5xl">{title}</h1>
        {sub && (
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
