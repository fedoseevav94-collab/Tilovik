import { NextResponse } from "next/server";
import { normalizeRussianMobilePhone } from "@/lib/phone";
import type { Lead } from "@/types";

function clean(value: unknown) {
  return String(value || "").trim();
}

function formatLeadMessage(lead: Lead) {
  const siteLabel = clean(process.env.SITE_LEAD_LABEL) || "Центр тылового обеспечения";
  const rows = [
    "Новая заявка",
    `Сайт: ${siteLabel}`,
    "",
    `Имя: ${lead.name}`,
    `Телефон: ${lead.phone}`,
    lead.age ? `Возраст: ${lead.age}` : "",
    lead.city ? `Город / регион: ${lead.city}` : "",
    lead.profession ? `Специальность: ${lead.profession}` : "",
    lead.comment ? `Комментарий: ${lead.comment}` : "",
    lead.sourcePage ? `Страница: ${lead.sourcePage}` : ""
  ].filter(Boolean);

  return rows.join("\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const phone = normalizeRussianMobilePhone(clean(body.phone));

    if (!phone) {
      return NextResponse.json(
        { ok: false, message: "Введите корректный российский мобильный номер" },
        { status: 400 }
      );
    }

    const lead: Lead = {
      name: clean(body.name),
      phone,
      age: clean(body.age),
      city: clean(body.city),
      profession: clean(body.profession),
      comment: clean(body.comment),
      sourcePage: clean(body.sourcePage)
    };

    if (!lead.name) {
      return NextResponse.json({ ok: false, message: "Укажите имя" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.log("Новая заявка", {
        site: clean(process.env.SITE_LEAD_LABEL) || "Центр тылового обеспечения",
        ...lead
      });
      return NextResponse.json({ ok: true, telegramSent: false });
    }

    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatLeadMessage(lead),
        disable_web_page_preview: true
      })
    });

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();
      console.error("Ошибка отправки заявки в Telegram", telegramError);
      return NextResponse.json(
        { ok: false, message: "Не удалось отправить заявку в Telegram" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, telegramSent: true });
  } catch (error) {
    console.error("Ошибка обработки заявки", error);
    return NextResponse.json(
      { ok: false, message: "Не удалось обработать заявку" },
      { status: 500 }
    );
  }
}
