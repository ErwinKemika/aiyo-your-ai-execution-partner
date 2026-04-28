import { useEffect, useState } from "react";
import { Menu, X, Languages, Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { useTheme } from "@/contexts/ThemeContext";
import { APP_URL } from "@/lib/constants";

export const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: t("Fitur", "Features") },
    { href: "#demo", label: "Demo" },
    { href: "#pricing", label: t("Harga", "Pricing") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-black text-xl tracking-widest text-gradient-primary">AIYO</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full border border-border hover:bg-secondary flex items-center justify-center transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-gradient-primary hover:opacity-90 shadow-glow font-semibold"
          >
            <a href={APP_URL} target="_blank" rel="noopener">
              {t("Mulai Gratis", "Get Started")}
            </a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full border border-border flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <button
                onClick={() => setLang(lang === "id" ? "en" : "id")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-border"
              >
                <Languages className="w-3.5 h-3.5" /> {lang.toUpperCase()}
              </button>
              <Button asChild size="sm" className="bg-gradient-primary flex-1">
                <a href={APP_URL} target="_blank" rel="noopener">
                  {t("Mulai Gratis", "Get Started")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
