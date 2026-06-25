import { PageHero } from "@/components/ui/PageHero";
import { ProfessionCard } from "@/components/ui/ProfessionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LeadSection } from "@/components/sections/LeadSection";
import { createMetadata } from "@/lib/seo";
import { professionCategories, professions } from "@/data/professions";

export const metadata = createMetadata({
  title: "Гражданские специальности — Центр тылового обеспечения",
  description: "Водители, повара, механики, строители, кладовщики, сварщики, электрики и другие рабочие профессии на задачи обеспечения.",
  path: "/professions"
});

export default function ProfessionsPage() {
  return (
    <>
      <PageHero
        title="Гражданские специальности на задачи обеспечения"
        text="Выберите свою профессию или оставьте заявку, если не нашли подходящую. Специалист подскажет доступные направления."
        eyebrow="Специальности"
        breadcrumbs={[{ label: "Специальности" }]}
      />
      <section className="section">
        <div className="container">
          <div className="mb-8 flex flex-wrap gap-2">
            {professionCategories.map((item) => <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#3F4A2F]" key={item}>{item}</span>)}
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {professions.map((profession) => <ProfessionCard profession={profession} key={profession.slug} />)}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="Как выбрать направление" text="Не обязательно заранее знать точное название позиции. Опишите гражданскую специальность, опыт и документы — специалист поможет сопоставить их с задачами обеспечения." />
          <Card className="max-w-4xl"><p className="text-[#555]">Рассматриваем кандидатов с разным опытом: транспорт, питание, ремонт, строительство, склад, снабжение и хозяйственное обеспечение. Условия уточняются индивидуально и зависят от специальности, документов, региона и порядка оформления.</p></Card>
        </div>
      </section>
      <LeadSection sourcePage="Страница специальностей" />
      <FinalCTA />
    </>
  );
}
