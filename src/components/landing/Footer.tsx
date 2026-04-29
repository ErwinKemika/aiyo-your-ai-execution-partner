import { Sparkles } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card/40 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-2 mb-3">
              <span className="font-display font-black text-xl tracking-widest text-gradient-primary">AIYO</span>
            </a>
            <p className="text-sm text-muted-foreground">
              {t(
                "AI companion yang bantu kamu eksekusi, bukan cuma catat.",
                "The AI companion that helps you execute, not just note things down."
              )}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground">
          <p>© 2025 Aiyo. {t("Semua hak dilindungi.", "All rights reserved.")}</p>
        </div>
      </div>
    </footer>
  );
};
