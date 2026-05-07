"use client";

import { useT } from "@/lib/i18n";

export function BenefitsSection() {
  const { t } = useT();
  return (
    <section id="benefits" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {t.benefits.title}
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <h3 className="text-base font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
          >
            {t.benefits.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
