import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-[#6B6B6B]">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link className="hover:text-[#3F4A2F]" href="/">
            Главная
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex gap-2" key={item.label}>
            <span>/</span>
            {item.href ? (
              <Link className="hover:text-[#3F4A2F]" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-[#26311F]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
