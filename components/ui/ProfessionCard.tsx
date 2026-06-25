import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Profession } from "@/types";

export function ProfessionCard({ profession }: { profession: Profession }) {
  return (
    <Card className="card-hover flex h-full flex-col">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3F4A2F] text-sm font-bold text-white">{profession.icon}</div>
        <Badge>{profession.category}</Badge>
      </div>
      <h3 className="text-xl font-bold leading-tight text-[#26311F]">{profession.title}</h3>
      <p className="mt-3 text-sm text-[#555]">{profession.excerpt}</p>
      <ul className="mt-4 space-y-2 text-sm text-[#555]">
        {profession.tasks.slice(0, 2).map((task) => (
          <li className="flex gap-2" key={task}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96A]" />{task}</li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
        <Button className="flex-1" href={`/professions/${profession.slug}`} variant="outline">
          Подробнее <ArrowRight className="h-4 w-4" />
        </Button>
        <Button className="flex-1" href="#lead-form">Заявка</Button>
      </div>
    </Card>
  );
}
