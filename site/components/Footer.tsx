"use client";

import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-semibold text-neutral-900">Prive Systems</span>
          <span className="mx-2">·</span>
          <span>{t.footer.tagline}</span>
        </div>
        <div>
          © {year} Prive Systems. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
