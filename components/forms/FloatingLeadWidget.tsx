"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";

export function FloatingLeadWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        {open ? (
          <div className="w-80 rounded-3xl border border-black/10 bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-[#26311F]">Оставить заявку</p>
                <p className="text-xs text-[#6B6B6B]">Ответим по выбранной специальности</p>
              </div>
              <button className="focus-ring rounded-full p-2 hover:bg-black/5" type="button" onClick={() => setOpen(false)} aria-label="Закрыть форму">
                <X className="h-5 w-5" />
              </button>
            </div>
            <LeadForm sourcePage="Плавающая форма" variant="mini" />
          </div>
        ) : (
          <Button className="soft-pulse shadow-xl" type="button" onClick={() => setOpen(true)}>
            Оставить заявку
          </Button>
        )}
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white p-3 lg:hidden">
        <Button className="w-full" href="#lead-form" variant="dark">Оставить заявку</Button>
      </div>
    </>
  );
}
