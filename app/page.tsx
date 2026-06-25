import { BriefcaseBusiness, CheckCircle2, CircleDollarSign, ClipboardList, ShieldCheck } from "lucide-react";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ProfessionCard } from "@/components/ui/ProfessionCard";
import { RegionCard } from "@/components/ui/RegionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PaymentsSection } from "@/components/sections/PaymentsSection";
import { SocialSupportSection } from "@/components/sections/SocialSupportSection";
import { createMetadata } from "@/lib/seo";
import { articles } from "@/data/articles";
import { faqs } from "@/data/faqs";
import { professions } from "@/data/professions";
import { regions } from "@/data/regions";
import { benefits, candidateGets, conditions, processSteps, tasks, trustCards } from "@/data/home";
import { paymentDisclaimer } from "@/data/payments";

export const metadata = createMetadata({
  title: "Центр тылового обеспечения",
  description: "Подбор направлений для водителей, поваров, механиков, строителей, кладовщиков и других специалистов гражданских профессий. Выплаты, условия и заявка на консультацию."
});

export default function HomePage() {
  const benefitIcons = [BriefcaseBusiness, ClipboardList, ShieldCheck, CircleDollarSign, CheckCircle2];

  return (
    <>
      <section className="hero-bg text-white">
        <div className="container grid gap-6 py-8 md:py-10 lg:min-h-[calc(100svh-116px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-6">
          <div>
            <Badge className="mb-3 border-white/20 bg-white/10 text-white">Гражданские специальности на задачи обеспечения</Badge>
            <h1 className="max-w-4xl text-4xl font-[800] leading-[1.04] md:text-5xl xl:text-[48px]">Гражданские специальности на задачи обеспечения с выплатами от 210 000 ₽ в месяц</h1>
            <p className="mt-3 max-w-3xl text-base text-white/84">Водители, механики, повара, строители, кладовщики, сварщики, электрики и другие рабочие профессии. Подберём направление по опыту, документам и региону.</p>
            <p className="mt-2 max-w-3xl text-sm font-semibold text-[#E7DDC4] md:text-base">Официальное оформление, стабильные выплаты, питание, проживание и сопровождение на этапе оформления.</p>
            <div className="mt-3 grid max-w-3xl gap-2 sm:grid-cols-2">
              {["от 210 000 ₽ ежемесячно", "от 400 000 ₽ федеральная выплата", "региональная выплата зависит от субъекта", "питание и проживание могут предоставляться"].map((item) => (
                <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white md:text-sm" key={item}>{item}</div>
              ))}
            </div>
            <p className="mt-2 max-w-3xl text-[11px] font-medium leading-snug text-white/68 md:text-xs">{paymentDisclaimer}</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button className="min-h-10 px-4 py-2" href="#lead-form">Проверить условия по моей специальности</Button>
              <Button className="min-h-10 px-4 py-2" href="#lead-form" variant="secondary">Оставить заявку</Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Водители", "Повара", "Механики", "Строители", "Склад", "Снабжение", "Электрики", "Сварщики"].map((item) => (
                <span className="rounded-full bg-white/12 px-3 py-1 text-sm font-semibold text-white/88" key={item}>{item}</span>
              ))}
            </div>
          </div>
          <Card className="rounded-3xl p-5 shadow-2xl">
            <h2 className="text-xl font-bold leading-tight text-[#26311F]">Узнайте, какое направление и выплаты вам могут подойти</h2>
            <p className="mb-3 mt-2 text-sm text-[#555]">Оставьте контакты — специалист подскажет доступные направления.</p>
            <LeadForm sourcePage="Главная hero" variant="hero" />
          </Card>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-6">
        <div className="container grid gap-3 md:grid-cols-5">
          {benefits.map(([title, text], index) => {
            const Icon = benefitIcons[index];
            return (
            <div className="rounded-2xl bg-[#F7F4EB] p-4" key={title}>
              <Icon className="mb-3 h-6 w-6 text-[#3F4A2F]" />
              <p className="font-bold text-[#26311F]">{title}</p>
              <p className="text-sm text-[#555]">{text}</p>
            </div>
          )})}
        </div>
      </section>

      <PaymentsSection />

      <section className="section">
        <div className="container">
          <SectionHeader title="Какие специалисты требуются" text="Рассматриваем кандидатов с разным опытом. Даже если вашей профессии нет в списке — оставьте заявку, специалист подскажет возможные направления." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {professions.slice(0, 9).map((profession) => <ProfessionCard key={profession.slug} profession={profession} />)}
          </div>
          <div className="mt-8 text-center"><Button href="#lead-form">Подобрать направление по моей специальности</Button></div>
        </div>
      </section>

      <section className="section bg-[#E7DDC4]/55">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader title="Кому подходит" text="Оставить заявку можно даже в том случае, если вы не уверены, какое направление выбрать. Специалист уточнит ваш опыт и подскажет доступные варианты." />
          <Card className="grid gap-3 md:grid-cols-2">
            {["водителям с категорией B, C, D или E", "механикам, автослесарям и ремонтникам", "поварам, пекарям и кухонным работникам", "строителям, отделочникам и разнорабочим", "кладовщикам и работникам склада", "сварщикам, электрикам, сантехникам", "специалистам снабжения и хозяйственного обеспечения", "кандидатам с готовностью выполнять рабочие задачи", "тем, кто хочет официальное оформление и стабильные выплаты", "тем, кто хочет применить гражданскую профессию"].map((item) => (
              <p className="flex gap-2 text-sm text-[#3b3b3b]" key={item}><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#267A3E]" />{item}</p>
            ))}
            <p className="md:col-span-2 rounded-2xl bg-[#F7F4EB] p-4 font-semibold text-[#26311F]">Даже если вашей профессии нет в списке — оставьте заявку. Мы подскажем, какие направления могут быть доступны.</p>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Условия" text="Условия зависят от направления, документов, региона и порядка оформления. Специалист расскажет детали после заявки." centered />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map(([title, text]) => <Card className="card-hover h-full" key={title}><h3 className="text-xl font-bold text-[#26311F]">{title}</h3><p className="mt-3 text-sm text-[#555]">{text}</p></Card>)}
          </div>
          <div className="mt-8 text-center"><Button href="#lead-form">Уточнить условия по моей специальности</Button></div>
        </div>
      </section>

      <SocialSupportSection />

      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="Какие задачи выполняют специалисты" text="Основные задачи подбираются с учётом специальности, опыта, документов и текущей потребности." />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {tasks.map((task) => <div className="rounded-2xl border border-black/10 bg-[#F7F4EB] p-4 text-sm font-semibold text-[#26311F]" key={task}>{task}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Как проходит оформление" centered />
          <div className="grid gap-4 lg:grid-cols-5">
            {processSteps.map(([title, text], index) => <Card className="h-full" key={title}><div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#26311F] font-bold text-white">{index + 1}</div><h3 className="font-bold text-[#26311F]">{title}</h3><p className="mt-2 text-sm text-[#555]">{text}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="section bg-[#26311F] text-white">
        <div className="container">
          <SectionHeader title="Что вы получите после заявки" text="Оставьте заявку — подберём направление под вашу гражданскую специальность." centered />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {candidateGets.map(([title, text]) => <div className="rounded-2xl border border-white/10 bg-white/8 p-5" key={title}><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm text-white/72">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Почему кандидаты оставляют заявку" centered />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trustCards.map(([title, text]) => <Card className="h-full" key={title}><h3 className="text-lg font-bold text-[#26311F]">{title}</h3><p className="mt-3 text-sm text-[#555]">{text}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="Работаем по регионам всей России" text="Оставьте заявку — специалист уточнит ваш город и подскажет доступные направления и возможные выплаты." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{regions.filter((r) => r.isMain || r.slug === "drugie-regiony-rf").slice(0, 11).map((region) => <RegionCard key={region.slug} region={region} />)}</div>
          <div className="mt-8"><Button href="/regions">Уточнить выплаты по моему региону</Button></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader title="Частые вопросы" text="Короткие ответы на вопросы кандидатов по специальностям, документам и условиям." />
          <FAQAccordion items={faqs.slice(0, 8)} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="Полезные материалы для кандидатов" />
          <div className="grid gap-5 md:grid-cols-3">{articles.slice(0, 3).map((article) => <ArticleCard article={article} key={article.slug} />)}</div>
          <div className="mt-8"><Button href="/articles" variant="outline">Смотреть все статьи</Button></div>
        </div>
      </section>

      <section className="section" id="lead-form">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader title="Оставьте заявку — подберём направление под вашу гражданскую специальность" text="Можно оставить заявку, даже если вы не уверены, какое направление выбрать." />
          <Card className="rounded-3xl p-6 md:p-8"><LeadForm sourcePage="Главная форма" /></Card>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
