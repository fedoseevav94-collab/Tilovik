import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { socialSupport } from "@/data/payments";

export function SocialSupportSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          title="Возможные льготы и меры поддержки"
          text="Отдельные меры поддержки могут быть доступны при наличии оснований и официального подтверждения. Условия необходимо уточнять индивидуально."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {socialSupport.map(([title, text]) => (
            <Card className="h-full" key={title}>
              <h3 className="font-bold text-[#26311F]">{title}</h3>
              <p className="mt-2 text-sm text-[#555]">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
