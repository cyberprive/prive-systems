"use client";

import { useT } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useT();
  return (
    <section className="border-t border-neutral-200 bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-300">
            {t.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-neutral-700 pl-4 text-sm text-neutral-400">
            {t.about.signature}
          </p>
        </div>
      </div>
    </section>
  );
}
