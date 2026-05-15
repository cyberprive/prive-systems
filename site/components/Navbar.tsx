"use client";

import { useT } from "@/lib/i18n";
import { LangToggle } from "./LangToggle";

export function Navbar() {
  const { t } = useT();
  const links: Array<[string, keyof typeof t.nav]> = [
    ["#problems", "problems"],
    ["#solutions", "solutions"],
    ["#examples", "examples"],
    ["#process", "process"],
    ["#benefits", "benefits"],
    ["#faq", "faq"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-base font-semibold tracking-tight text-neutral-900">
          Prive Systems
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          {links.map(([href, key]) => (
            <a
              key={href}
              href={href}
              className="hover:text-neutral-900 transition"
            >
              {t.nav[key]}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-800 transition"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
