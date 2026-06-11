"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n";

export function LangToggle() {
  const { locale } = useT();
  const pathname = usePathname() ?? "/en";
  const rest = pathname.replace(/^\/(en|es)/, "") || "";

  const baseClass =
    "px-3 py-1 rounded-full transition";
  const activeClass = "bg-neutral-900 text-white";
  const inactiveClass = "text-neutral-600 hover:text-neutral-900";

  return (
    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white p-0.5 text-xs font-medium">
      <Link
        href={`/en${rest}`}
        className={`${baseClass} ${locale === "en" ? activeClass : inactiveClass}`}
        aria-pressed={locale === "en"}
      >
        EN
      </Link>
      <Link
        href={`/es${rest}`}
        className={`${baseClass} ${locale === "es" ? activeClass : inactiveClass}`}
        aria-pressed={locale === "es"}
      >
        ES
      </Link>
    </div>
  );
}
