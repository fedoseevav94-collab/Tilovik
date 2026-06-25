import { PageHero } from "@/components/ui/PageHero";
import { RegionCard } from "@/components/ui/RegionCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadSection } from "@/components/sections/LeadSection";
import { createMetadata } from "@/lib/seo";
import { regions } from "@/data/regions";

export const metadata = createMetadata({
  title: "Гражданские специальности по регионам — Центр тылового обеспечения",
  description: "Подбор направлений по гражданским специальностям для кандидатов из разных регионов РФ. Уточните выплаты и условия по региону.",
  path: "/regions"
});

export default function RegionsPage() {
  return (
    <>
      <PageHero title="Кандидаты из разных регионов" text="Оставьте заявку — специалист уточнит ваш город и подскажет доступные направления по гражданской специальности." eyebrow="Регионы" breadcrumbs={[{ label: "Регионы" }]} />
      <section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{regions.map((region) => <RegionCard region={region} key={region.slug} />)}</div></section>
      <LeadSection sourcePage="Регионы" />
      <FinalCTA />
    </>
  );
}
