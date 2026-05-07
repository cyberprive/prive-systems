"use client";

import { useT } from "@/lib/i18n";

export function FinalCTASection() {
  const { t } = useT();
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-neutral-900 px-8 py-16 text-center text-white sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-300">
            {t.finalCta.subtitle}
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-900 hover:bg-neutral-200 transition"
          >
            {t.finalCta.button}
          </a>
        </div>
      </div>
    </section>
  );
}
