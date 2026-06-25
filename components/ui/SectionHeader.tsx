import { Badge } from "@/components/ui/Badge";

export function SectionHeader({
  eyebrow,
  title,
  text,
  centered = false
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-[760] leading-tight text-[#26311F] md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base text-[#555] md:text-lg">{text}</p> : null}
    </div>
  );
}
