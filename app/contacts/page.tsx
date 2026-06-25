import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { LeadSection } from "@/components/sections/LeadSection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Контакты — Центр тылового обеспечения",
  description: "Оставьте заявку или выберите удобный способ связи для консультации по гражданской специальности.",
  path: "/contacts"
});

export default function ContactsPage() {
  return (
    <>
      <PageHero title="Контакты" text="Оставьте заявку или выберите удобный способ связи. Специалист уточнит специальность, опыт, документы и доступные направления." eyebrow="Связь" breadcrumbs={[{ label: "Контакты" }]} />
      <section className="section bg-white">
        <div className="container grid gap-6 md:grid-cols-2">
          <Card><h2 className="text-2xl font-bold text-[#26311F]">Оставить заявку</h2><p className="mt-2 text-[#555]">Сейчас заявки принимаются через форму на сайте. После отправки специалист получит данные и сможет уточнить доступные направления.</p></Card>
          <Card><h2 className="text-2xl font-bold text-[#26311F]">Кто обрабатывает заявку</h2><p className="mt-2 text-[#555]">Заявка используется для консультации, уточнения специальности и подбора возможных направлений.</p><p className="mt-4 rounded-2xl bg-[#F7F4EB] p-4 text-sm text-[#555]">{siteConfig.legalName ? siteConfig.legalName : "Юридические данные будут опубликованы перед запуском сайта."}</p></Card>
        </div>
      </section>
      <LeadSection sourcePage="Контакты" />
    </>
  );
}
