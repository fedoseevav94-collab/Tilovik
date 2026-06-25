"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div className="rounded-2xl border border-black/10 bg-white shadow-sm" key={item.question}>
          <button
            className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#26311F]"
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {item.question}
            <ChevronDown className={cn("h-5 w-5 shrink-0 transition", open === index && "rotate-180")} />
          </button>
          {open === index ? <p className="px-5 pb-5 text-sm text-[#555]">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
