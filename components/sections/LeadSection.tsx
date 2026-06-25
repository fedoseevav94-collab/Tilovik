import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadForm } from "@/components/forms/LeadForm";

export function LeadSection({ sourcePage }: { sourcePage: string }) {
  return (
    <section className="section" id="lead-form">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader title="Оставьте заявку — подберём направление под вашу гражданскую специальность" text="Специалист уточнит ваш опыт, документы, город и подскажет доступные варианты." />
        <Card className="rounded-3xl p-6 md:p-8">
          <LeadForm sourcePage={sourcePage} />
        </Card>
      </div>
    </section>
  );
}
