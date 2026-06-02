"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang, type SiteContent } from "@/lib/data";

interface LanguageCtx {
  lang: Lang;
  c: SiteContent;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [lang]);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "zh" ? "en" : "zh";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, c: content[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
