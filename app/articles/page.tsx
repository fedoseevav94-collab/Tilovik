import { ArticleCard } from "@/components/ui/ArticleCard";
import { PageHero } from "@/components/ui/PageHero";
import { LeadSection } from "@/components/sections/LeadSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { createMetadata } from "@/lib/seo";
import { articles } from "@/data/articles";

export const metadata = createMetadata({
  title: "Статьи для кандидатов — Центр тылового обеспечения",
  description: "Полезные материалы о гражданских специальностях, выплатах, документах, оформлении, условиях, питании, проживании и задачах обеспечения.",
  path: "/articles"
});

export default function ArticlesPage() {
  return (
    <>
      <PageHero title="Статьи для кандидатов" text="Полезные материалы о гражданских специальностях, документах, оформлении, условиях, питании, проживании и задачах обеспечения." eyebrow="Материалы" breadcrumbs={[{ label: "Статьи" }]} />
      <section className="section"><div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <ArticleCard article={article} key={article.slug} />)}</div></section>
      <LeadSection sourcePage="Статьи" />
      <FinalCTA />
    </>
  );
}
