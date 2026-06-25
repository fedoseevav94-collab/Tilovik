import { PageHero } from "@/components/ui/PageHero";

export function LegalPage({ title, text, items }: { title: string; text: string; items: string[] }) {
  return (
    <>
      <PageHero title={title} text={text} eyebrow="Документ" breadcrumbs={[{ label: title }]} />
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-[#F7F4EB] p-6 md:p-10">
            <div className="prose-ru">
              {items.map((item, index) => (
                <p key={item}><strong>{index + 1}.</strong> {item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
