import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-3xl bg-[#26311F] p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-[780] leading-tight md:text-5xl">Хотите узнать, какое направление и выплаты вам могут подойти?</h2>
              <p className="mt-4 max-w-2xl text-white/78">Оставьте заявку — специалист уточнит вашу специальность, опыт, город и подскажет доступные варианты.</p>
            </div>
            <div className="space-y-4">
              <Button className="w-full" href="#lead-form">Оставить заявку</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
