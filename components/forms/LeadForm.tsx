"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { normalizeRussianMobilePhone } from "@/lib/phone";
import { submitLead } from "@/lib/lead";
import type { Lead } from "@/types";

type LeadFormProps = {
  variant?: "hero" | "full" | "mini";
  sourcePage: string;
};

const inputClass =
  "focus-ring min-h-12 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1E1E1E] outline-none transition placeholder:text-[#777] focus:border-[#C8A96A]";

export function LeadForm({ variant = "full", sourcePage }: LeadFormProps) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const phone = normalizeRussianMobilePhone(String(form.get("phone") || ""));
    const consent = form.get("consent");

    if (!phone) {
      setError("Введите корректный российский мобильный номер");
      return;
    }

    if (variant === "full" && !consent) {
      setError("Подтвердите согласие на обработку персональных данных");
      return;
    }

    const lead: Lead = {
      name: String(form.get("name") || ""),
      phone,
      age: String(form.get("age") || ""),
      city: String(form.get("city") || ""),
      profession: String(form.get("profession") || ""),
      comment: String(form.get("comment") || ""),
      sourcePage
    };

    setLoading(true);
    try {
      await submitLead(lead);
      setSuccess(true);
      event.currentTarget.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Не удалось отправить заявку");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-[#267A3E]/25 bg-[#267A3E]/8 p-6 text-[#26311F]">
        <CheckCircle2 className="mb-3 h-8 w-8 text-[#267A3E]" />
        <h3 className="text-xl font-bold">Заявка принята</h3>
        <p className="mt-2 text-sm text-[#555]">
          Специалист свяжется с вами для уточнения специальности, опыта, документов и доступных направлений.
        </p>
        <Button className="mt-5" type="button" variant="outline" onClick={() => setSuccess(false)}>
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  const isFull = variant === "full";
  const isHero = variant === "hero";

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className={isFull ? "grid gap-4 md:grid-cols-2" : "space-y-4"}>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-[#26311F]">{isFull ? "ФИО" : "Имя"}</span>
          <input className={inputClass} name="name" placeholder={isFull ? "Иванов Иван Иванович" : "Ваше имя"} required />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-[#26311F]">Телефон</span>
          <input className={inputClass} name="phone" placeholder="+7 999 123-45-67" required />
        </label>
        {isFull ? (
          <>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-[#26311F]">Возраст</span>
              <input className={inputClass} name="age" placeholder="Например, 38" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-[#26311F]">Город / регион</span>
              <input className={inputClass} name="city" placeholder="Ваш город" />
            </label>
          </>
        ) : null}
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-[#26311F]">Специальность</span>
          <input className={inputClass} name="profession" placeholder="Водитель, повар, механик..." required={isHero} />
        </label>
        {isFull ? (
          <>
            <label className="block md:col-span-2">
              <span className="mb-1 block text-sm font-semibold text-[#26311F]">Комментарий</span>
              <textarea className={`${inputClass} min-h-28 resize-y`} name="comment" placeholder="Напишите, что важно уточнить" />
            </label>
          </>
        ) : null}
      </div>
      {isFull ? (
        <label className="flex gap-3 rounded-xl bg-[#F7F4EB] p-3 text-sm text-[#555]">
          <input className="mt-1 h-4 w-4 accent-[#3F4A2F]" name="consent" type="checkbox" />
          <span>Согласен на обработку персональных данных и получение консультации по указанным контактам.</span>
        </label>
      ) : null}
      {error ? <p className="rounded-xl bg-[#B42318]/10 px-4 py-3 text-sm font-semibold text-[#B42318]">{error}</p> : null}
      <Button className="w-full" disabled={loading} type="submit" variant={isHero ? "dark" : "primary"}>
        {loading ? "Отправляем..." : isHero ? "Проверить условия" : variant === "mini" ? "Отправить" : "Получить консультацию"}
      </Button>
      <p className="text-xs leading-relaxed text-[#6B6B6B]">
        {isHero
          ? "Специалист уточнит возраст, город, опыт, документы и подскажет доступные варианты."
          : "Условия уточняются индивидуально и зависят от специальности, документов, региона и порядка оформления."}
      </p>
    </form>
  );
}
