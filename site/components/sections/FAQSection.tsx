"use client";

import { useT } from "@/lib/i18n";

export function FAQSection() {
  const { t } = useT();
  return (
    <section id="faq" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {t.faq.title}
        </h2>
        <div className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
          {t.faq.items.map((item, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-neutral-900">
                {item.q}
                <span className="text-neutral-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
          >
            {t.faq.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
