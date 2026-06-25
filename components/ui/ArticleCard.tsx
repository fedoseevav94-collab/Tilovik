import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Article } from "@/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="block h-full" href={`/articles/${article.slug}`}>
      <Card className="card-hover flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Badge>{article.category}</Badge>
          <span className="text-xs text-[#6B6B6B]">{new Date(article.date).toLocaleDateString("ru-RU")}</span>
        </div>
        <h3 className="text-xl font-bold leading-tight text-[#26311F]">{article.title}</h3>
        <p className="mt-3 text-sm text-[#555]">{article.excerpt}</p>
        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#3F4A2F]">Читать <ArrowRight className="h-4 w-4" /></span>
      </Card>
    </Link>
  );
}
