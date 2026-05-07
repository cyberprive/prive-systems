"use client";

import { useT } from "@/lib/i18n";

export function ProblemsSection() {
  const { t } = useT();
  return (
    <section id="problems" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t.problems.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {t.problems.intro}
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <div className="text-xs font-semibold text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-900">
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
            {t.problems.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
