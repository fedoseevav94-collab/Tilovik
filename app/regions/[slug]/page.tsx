import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { ProfessionCard } from "@/components/ui/ProfessionCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadSection } from "@/components/sections/LeadSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { createMetadata } from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { professions } from "@/data/professions";
import { getRegion, regions } from "@/data/regions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};
  return createMetadata({ title: region.seoTitle, description: region.seoDescription, path: `/regions/${slug}` });
}

export default async function RegionDetailPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  return (
    <>
      <PageHero title={`Гражданские специальности на задачи обеспечения в ${region.name}`} text={region.description} eyebrow="Регион" breadcrumbs={[{ label: "Регионы", href: "/regions" }, { label: region.name }]} />
      <section className="section"><div className="container"><SectionHeader title="Актуальные направления" text="В регионе можно оставить заявку по транспортным, складским, ремонтным, строительным и хозяйственным специальностям, а также уточнить возможные выплаты." /><div className="grid gap-5 md:grid-cols-3">{professions.slice(0, 6).map((profession) => <ProfessionCard profession={profession} key={profession.slug} />)}</div></div></section>
      <section className="section bg-white"><div className="container grid gap-6 md:grid-cols-3">{["Оставьте заявку", "Уточните город и опыт", "Получите следующий шаг"].map((title, index) => <Card key={title}><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#26311F] font-bold text-white">{index + 1}</div><h3 className="font-bold text-[#26311F]">{title}</h3><p className="mt-2 text-sm text-[#555]">Специалист подскажет доступные варианты с учётом региона, документов и специальности.</p></Card>)}</div></section>
      <section className="section"><div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeader title="Вопросы по региону" /><FAQAccordion items={faqs.slice(0, 6)} /></div></section>
      <LeadSection sourcePage={`Регион: ${region.name}`} />
      <FinalCTA />
    </>
  );
}
