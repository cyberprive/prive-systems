"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Locale } from "./copy";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Copy;
};

const LocaleContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "prive.locale";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("es") ? "es" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  };

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t: copy[locale] as Copy }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useT must be used inside LocaleProvider");
  return ctx;
}
