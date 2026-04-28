import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "id" | "en";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (id: string, en: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "id";
    return (localStorage.getItem("aiyo-lang") as Lang) || "id";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("aiyo-lang", l);
  };

  const t = (id: string, en: string) => (lang === "id" ? id : en);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
};
