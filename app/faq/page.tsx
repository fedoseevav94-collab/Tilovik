import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadSection } from "@/components/sections/LeadSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { faqCategories, faqs } from "@/data/faqs";

export const metadata = createMetadata({
  title: "Вопросы и ответы — Центр тылового обеспечения",
  description: "Ответы на вопросы о гражданских специальностях, документах, оформлении, выплатах, регионах и персональных данных.",
  path: "/faq"
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} />
      <PageHero title="Вопросы и ответы" text="Ответы сформулированы аккуратно: условия зависят от специальности, документов, региона и порядка оформления." eyebrow="FAQ" breadcrumbs={[{ label: "FAQ" }]} />
      <section className="section"><div className="container space-y-10">{faqCategories.map((category) => <div key={category}><SectionHeader title={category} /><FAQAccordion items={faqs.filter((item) => item.category === category)} /></div>)}</div></section>
      <LeadSection sourcePage="FAQ" />
      <FinalCTA />
    </>
  );
}
