import type { Region } from "@/types";

const names = [
  "Москва",
  "Московская область",
  "Санкт-Петербург",
  "Ленинградская область",
  "Краснодарский край",
  "Ростовская область",
  "Республика Татарстан",
  "Нижегородская область",
  "Свердловская область",
  "Новосибирская область",
  "Самарская область",
  "Челябинская область",
  "Красноярский край",
  "Пермский край",
  "Волгоградская область",
  "Воронежская область",
  "Омская область",
  "Саратовская область",
  "Республика Башкортостан",
  "Алтайский край",
  "Приморский край",
  "Хабаровский край",
  "Иркутская область",
  "Тюменская область",
  "Кемеровская область",
  "Ярославская область",
  "Тульская область",
  "Рязанская область",
  "Белгородская область",
  "Другие регионы РФ"
];

const slugs = [
  "moskva",
  "moskovskaya-oblast",
  "sankt-peterburg",
  "leningradskaya-oblast",
  "krasnodarskiy-kray",
  "rostovskaya-oblast",
  "respublika-tatarstan",
  "nizhegorodskaya-oblast",
  "sverdlovskaya-oblast",
  "novosibirskaya-oblast",
  "samarskaya-oblast",
  "chelyabinskaya-oblast",
  "krasnoyarskiy-kray",
  "permskiy-kray",
  "volgogradskaya-oblast",
  "voronezhskaya-oblast",
  "omskaya-oblast",
  "saratovskaya-oblast",
  "respublika-bashkortostan",
  "altayskiy-kray",
  "primorskiy-kray",
  "habarovskiy-kray",
  "irkutskaya-oblast",
  "tyumenskaya-oblast",
  "kemerovskaya-oblast",
  "yaroslavskaya-oblast",
  "tulskaya-oblast",
  "ryazanskaya-oblast",
  "belgorodskaya-oblast",
  "drugie-regiony-rf"
];

export const regions: Region[] = names.map((name, index) => ({
  slug: slugs[index],
  name,
  title: `Гражданские специальности на задачи обеспечения в регионе ${name}`,
  description: `Оставьте заявку — специалист уточнит ваш город, опыт, документы и подскажет доступные направления и возможные выплаты по гражданской специальности в регионе ${name}.`,
  seoTitle: `Гражданские специальности в ${name} — Центр тылового обеспечения`,
  seoDescription: `Водители, повара, механики, строители, кладовщики и другие специалисты на задачи обеспечения в регионе ${name}. Уточните выплаты и условия по региону.`,
  isMain: index < 10
}));

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
