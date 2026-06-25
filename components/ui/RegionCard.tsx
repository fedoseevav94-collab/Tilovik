import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Region } from "@/types";

export function RegionCard({ region }: { region: Region }) {
  return (
    <Link className="block h-full" href={`/regions/${region.slug}`}>
      <Card className="card-hover flex h-full items-center gap-4">
        <MapPin className="h-7 w-7 shrink-0 text-[#C8A96A]" />
        <h3 className="text-lg font-bold text-[#26311F]">{region.name}</h3>
      </Card>
    </Link>
  );
}
