import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-[#C8A96A]/40 bg-[#F7F4EB] px-3 py-1 text-xs font-semibold text-[#3F4A2F]", className)}>
      {children}
    </span>
  );
}
