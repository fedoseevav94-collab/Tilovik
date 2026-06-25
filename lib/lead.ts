import type { Lead } from "@/types";

export async function submitLead(lead: Lead) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(lead)
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.ok) {
    throw new Error(result?.message || "Не удалось отправить заявку");
  }

  return result as { ok: true; telegramSent?: boolean };
}
