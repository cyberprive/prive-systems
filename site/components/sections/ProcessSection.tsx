"use client";

import { useT } from "@/lib/i18n";

export function ProcessSection() {
  const { t } = useT();
  return (
    <section id="process" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {t.process.title}
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {t.process.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-sm font-semibold text-neutral-400">
                {step.n}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
          >
            {t.process.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
