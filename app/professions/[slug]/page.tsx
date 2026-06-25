import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { ProfessionCard } from "@/components/ui/ProfessionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadSection } from "@/components/sections/LeadSection";
import { PaymentsSection } from "@/components/sections/PaymentsSection";
import { SocialSupportSection } from "@/components/sections/SocialSupportSection";
import { createMetadata } from "@/lib/seo";
import { articles } from "@/data/articles";
import { faqs } from "@/data/faqs";
import { getProfession, professions } from "@/data/professions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return professions.map((profession) => ({ slug: profession.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const profession = getProfession(slug);
  if (!profession) return {};
  return createMetadata({ title: profession.seoTitle, description: profession.seoDescription, path: `/professions/${slug}` });
}

export default async function ProfessionDetailPage({ params }: Props) {
  const { slug } = await params;
  const profession = getProfession(slug);
  if (!profession) notFound();
  const related = professions.filter((item) => item.category === profession.category && item.slug !== profession.slug).slice(0, 3);
  const relatedArticles = articles.filter((article) => article.relatedProfessions?.includes(profession.slug)).slice(0, 3);

  return (
    <>
      <PageHero
        title={`${profession.title} на задачи обеспечения`}
        text={`Оставьте заявку на подбор направления для специальности «${profession.title}»: выплаты, задачи, документы, условия и порядок оформления уточняются индивидуально.`}
        eyebrow={profession.category}
        breadcrumbs={[{ label: "Специальности", href: "/professions" }, { label: profession.title }]}
      >
        <Card className="bg-white/95">
          <p className="text-sm font-semibold text-[#3F4A2F]">Возможное направление</p>
          <p className="mt-2 text-[#555]">{profession.description}</p>
          <Button className="mt-5 w-full" href="#lead-form">Узнать условия для специалиста</Button>
        </Card>
      </PageHero>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          {[
            ["Основные задачи", profession.tasks],
            ["Требования", profession.requirements],
            ["Условия", profession.conditions],
            ["Документы", profession.documents]
          ].map(([title, list]) => (
            <Card className="h-full" key={title as string}>
              <h2 className="text-2xl font-bold text-[#26311F]">{title as string}</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#555]">{(list as string[]).map((item) => <li className="flex gap-2" key={item}><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C8A96A]" />{item}</li>)}</ul>
            </Card>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader title="Кому может подойти" text={profession.suitableFor} />
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>
      <PaymentsSection compact />
      <SocialSupportSection />
      <LeadSection sourcePage={`Профессия: ${profession.title}`} />
      {related.length ? (
        <section className="section bg-white"><div className="container"><SectionHeader title="Похожие специальности" /><div className="grid gap-5 md:grid-cols-3">{related.map((item) => <ProfessionCard profession={item} key={item.slug} />)}</div></div></section>
      ) : null}
      {relatedArticles.length ? (
        <section className="section"><div className="container"><SectionHeader title="Материалы по теме" /><div className="grid gap-5 md:grid-cols-3">{relatedArticles.map((article) => <ArticleCard article={article} key={article.slug} />)}</div></div></section>
      ) : null}
      <FinalCTA />
    </>
  );
}
