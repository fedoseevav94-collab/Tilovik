"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F7F4EB]/92 backdrop-blur">
      <div className="bg-[#26311F] py-2 text-center text-xs font-semibold text-white/85">
        Гражданские специальности · выплаты · транспорт, питание, склад, ремонт, строительство · подбор направления по опыту
      </div>
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <Link className="shrink-0" href="/" onClick={() => setOpen(false)}>
          <span className="block text-lg font-[780] leading-tight text-[#26311F]">{siteConfig.name}</span>
          <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#6B6B6B]">гражданские специальности</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold text-[#3F4A2F] hover:bg-[#E7DDC4]/60",
                pathname === item.href && "bg-[#E7DDC4] text-[#26311F]"
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button href="#lead-form">Оставить заявку</Button>
        </div>
        <button className="focus-ring rounded-xl p-3 lg:hidden" type="button" onClick={() => setOpen(!open)} aria-label="Открыть меню">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <div className="container space-y-2 py-4">
            {navItems.map((item) => (
              <Link className="block rounded-xl px-4 py-3 font-semibold text-[#26311F] hover:bg-[#F7F4EB]" href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button className="w-full" href="#lead-form">Оставить заявку</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
