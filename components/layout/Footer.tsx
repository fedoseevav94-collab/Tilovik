import Link from "next/link";
import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#1f2919] pb-24 pt-12 text-white lg:pb-12">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xl font-[780]">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm text-white/70">{siteConfig.description}</p>
          <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Условия уточняются индивидуально и зависят от специальности, документов, региона и порядка оформления.
          </p>
        </div>
        <div>
          <p className="mb-3 font-bold">Разделы</p>
          <div className="grid gap-2 text-sm text-white/75">
            {navItems.map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-bold">Документы</p>
          <div className="grid gap-2 text-sm text-white/75">
            <Link href="/privacy-policy">Политика конфиденциальности</Link>
            <Link href="/personal-data-consent">Согласие на обработку данных</Link>
            <Link href="/cookie-policy">Политика cookie</Link>
            <Link href="/disclaimer">Правовая информация</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
