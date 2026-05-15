"use client";

import { useT } from "@/lib/i18n";

export function ExamplesSection() {
  const { t } = useT();
  return (
    <section id="examples" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t.examples.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {t.examples.intro}
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.examples.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6"
            >
              <h3 className="text-base font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
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
            {t.examples.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
