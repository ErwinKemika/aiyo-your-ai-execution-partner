import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { Fragment } from "react";
import { APP_URL } from "@/lib/constants";
import heroImage from "@/assets/aiyo-launch.png";

export const Hero = () => {
  const { t, lang } = useI18n();

  const heroMessages = [
    { from: "user" as const, text: t("Bantu aku susun rencana hari ini", "Help me plan my day") },
    {
      from: "ai" as const,
      text: t(
        "✨ Sudah aku susun:\n• 09:00 Deep work\n• 11:00 Stand-up\n• 14:00 Review desain\n\nReminder aktif. Yuk mulai! 💪",
        "✨ Done! I planned:\n• 09:00 Deep work\n• 11:00 Stand-up\n• 14:00 Design review\n\nReminders are on. Let's go! 💪"
      ),
    },
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-gradient-primary">
                {t("AI Produktivitas #1 di Indonesia", "#1 AI Productivity App in Indonesia")}
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6">
              {lang === "id" ? (
                <Fragment>
                  Teman AI yang
                  <br />
                  <span className="text-gradient-accent">Benar-Benar Kerja</span>
                </Fragment>
              ) : (
                <Fragment>
                  The AI That
                  <br />
                  <span className="text-gradient-accent">Actually Gets Things Done</span>
                </Fragment>
              )}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t(
                "Tugas hilang setelah meeting? Deadline terlupakan? Susah fokus? Aiyo adalah AI companion yang bukan cuma catat — tapi benar-benar bantu kamu eksekusi setiap hari.",
                "Tasks lost after meetings? Forgotten deadlines? Can't focus? Aiyo is the AI companion that doesn't just note things down — it actually helps you execute every day."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start mb-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-glow font-semibold text-base h-12 px-7 group"
              >
                <a href={APP_URL} target="_blank" rel="noopener">
                  {t("Mulai Gratis Sekarang", "Start for Free Now")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mb-3">
              {t("Tanpa kartu kredit · Gratis selamanya", "No credit card · Free forever")}
            </p>

            <div className="flex justify-center lg:justify-start mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-border/60 text-[11px] text-muted-foreground">
                {t(
                  "📱 Bisa diinstall di Android & iOS — langsung dari browser",
                  "📱 Installable on Android & iOS — straight from your browser"
                )}
              </span>
            </div>

            <p className="text-xs text-muted-foreground text-center lg:text-left">
              {t(
                "✨ Coba trial untuk merasakan semua fitur unggulan.",
                "✨ Try the trial to experience all premium features."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.img
              src={heroImage}
              alt={t("Aiyo - Teman AI Produktivitas", "Aiyo - AI Productivity Companion")}
              className="w-full max-w-md lg:max-w-lg h-auto drop-shadow-[0_20px_60px_hsl(var(--primary)/0.35)]"
              animate={{ y: [0, -14, 0], rotate: [0, 0.6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
