import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function PageHero({
  title,
  text,
  eyebrow,
  breadcrumbs,
  children
}: {
  title: string;
  text: string;
  eyebrow?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-[#26311F] py-12 text-white md:py-16">
      <div className="container">
        {breadcrumbs ? <div className="text-white/75"><Breadcrumbs items={breadcrumbs} /></div> : null}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            {eyebrow ? <Badge className="mb-5 border-white/20 bg-white/10 text-white">{eyebrow}</Badge> : null}
            <h1 className="max-w-4xl text-4xl font-[780] leading-tight md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-white/82">{text}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
