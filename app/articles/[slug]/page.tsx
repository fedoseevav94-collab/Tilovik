import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { ProfessionCard } from "@/components/ui/ProfessionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadSection } from "@/components/sections/LeadSection";
import { PaymentsSection } from "@/components/sections/PaymentsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { articles, getArticle } from "@/data/articles";
import { professions } from "@/data/professions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return createMetadata({ title: article.seoTitle, description: article.seoDescription, path: `/articles/${slug}` });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const relatedProfessions = professions.filter((profession) => article.relatedProfessions?.includes(profession.slug));
  const relatedArticles = articles.filter((item) => article.relatedArticles?.includes(item.slug)).slice(0, 3);
  const paragraphs = article.content.split("\n\n");

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, datePublished: article.date, inLanguage: "ru-RU" }} />
      <PageHero title={article.title} text={article.excerpt} eyebrow={article.category} breadcrumbs={[{ label: "Статьи", href: "/articles" }, { label: article.title }]} />
      <article className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="prose-ru max-w-none">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <Badge>{article.category}</Badge>
              <span className="text-sm text-[#6B6B6B]">{new Date(article.date).toLocaleDateString("ru-RU")}</span>
            </div>
            {paragraphs.map((block, index) => {
              if (block.startsWith("### ")) return <h3 key={index}>{block.replace("### ", "")}</h3>;
              if (block.startsWith("## ")) return <h2 key={index}>{block.replace("## ", "")}</h2>;
              return <p key={index}>{block}</p>;
            })}
          </div>
          <aside className="space-y-5">
            <Card className="sticky top-32">
              <h2 className="text-xl font-bold text-[#26311F]">Что важно уточнить</h2>
              <ul className="mt-4 space-y-2 text-sm text-[#555]">
                <li>доступные направления по специальности;</li>
                <li>порядок оформления и документы;</li>
                <li>условия выплат, питания и проживания;</li>
                <li>следующий шаг после консультации.</li>
              </ul>
              <Button className="mt-5 w-full" href="#lead-form">Оставить заявку</Button>
            </Card>
          </aside>
        </div>
      </article>
      <PaymentsSection compact />
      {relatedProfessions.length ? <section className="section"><div className="container"><SectionHeader title="Связанные специальности" /><div className="grid gap-5 md:grid-cols-3">{relatedProfessions.map((profession) => <ProfessionCard profession={profession} key={profession.slug} />)}</div></div></section> : null}
      <LeadSection sourcePage={`Статья: ${article.title}`} />
      {relatedArticles.length ? <section className="section bg-white"><div className="container"><SectionHeader title="Похожие материалы" /><div className="grid gap-5 md:grid-cols-3">{relatedArticles.map((item) => <ArticleCard article={item} key={item.slug} />)}</div><Link className="mt-8 inline-block font-bold text-[#3F4A2F]" href="/articles">Все статьи</Link></div></section> : null}
      <FinalCTA />
    </>
  );
}
