import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { paymentCards, paymentDisclaimer } from "@/data/payments";

export function PaymentsSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section bg-white" : "section bg-[#26311F] text-white"} id="payments">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className={compact ? "inline-flex rounded-full border border-[#C8A96A]/40 bg-[#F7F4EB] px-3 py-1 text-xs font-semibold text-[#3F4A2F]" : "inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"}>
            Выплаты
          </span>
          <h2 className={compact ? "mt-4 text-3xl font-[760] leading-tight text-[#26311F] md:text-5xl" : "mt-4 text-3xl font-[760] leading-tight text-white md:text-5xl"}>
            Выплаты и меры поддержки
          </h2>
          <p className={compact ? "mt-4 text-base text-[#555] md:text-lg" : "mt-4 text-base text-white/76 md:text-lg"}>
            Размер выплат зависит от региона, специальности, документов, даты обращения, состояния здоровья и порядка оформления. Специалист уточнит актуальные условия после заявки.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paymentCards.map(([title, amount, text]) => (
            <Card className="card-hover flex h-full flex-col border-[#C8A96A]/25 bg-white p-6" key={title}>
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#5F6F3A]">{title}</p>
              <p className="mt-4 text-3xl font-[800] leading-tight text-[#26311F]">{amount}</p>
              <p className="mt-4 text-sm text-[#555]">{text}</p>
            </Card>
          ))}
        </div>
        <div className={compact ? "mt-6 rounded-2xl border border-[#C8A96A]/30 bg-[#F7F4EB] p-5" : "mt-6 rounded-2xl border border-white/15 bg-white/8 p-5"}>
          <p className={compact ? "text-sm font-semibold text-[#3F4A2F]" : "text-sm font-semibold text-white/82"}>{paymentDisclaimer}</p>
        </div>
        <div className="mt-8 text-center">
          <Button href="#lead-form">Проверить выплаты по моей специальности</Button>
        </div>
      </div>
    </section>
  );
}
