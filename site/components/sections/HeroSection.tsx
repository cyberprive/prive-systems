"use client";

import { useT } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useT();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-900 transition"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
