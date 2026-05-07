"use client";

import { useT } from "@/lib/i18n";

export function LangToggle() {
  const { locale, setLocale } = useT();
  return (
    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-3 py-1 rounded-full transition ${
          locale === "en"
            ? "bg-neutral-900 text-white"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("es")}
        className={`px-3 py-1 rounded-full transition ${
          locale === "es"
            ? "bg-neutral-900 text-white"
            : "text-neutral-600 hover:text-neutral-900"
        }`}
        aria-pressed={locale === "es"}
      >
        ES
      </button>
    </div>
  );
}
