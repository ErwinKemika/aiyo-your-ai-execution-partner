import { Sparkles } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export const Footer = () => {
  const { t } = useI18n();

  const links = [
    { label: t("Tentang Kami", "About Us"), href: "#" },
    { label: "Blog", href: "#" },
    { label: t("Privasi", "Privacy"), href: "#" },
    { label: t("Syarat", "Terms"), href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-card/40 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-black text-xl tracking-widest text-gradient-primary">AIYO</span>
            </a>
            <p className="text-sm text-muted-foreground">
              {t(
                "AI companion yang bantu kamu eksekusi, bukan cuma catat.",
                "The AI companion that helps you execute, not just note things down."
              )}
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
          <p>© 2025 Aiyo. {t("Semua hak dilindungi.", "All rights reserved.")}</p>
          <p>{t("Dibuat dengan ❤️ di Indonesia", "Made with ❤️ in Indonesia")}</p>
        </div>
      </div>
    </footer>
  );
};
