import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { APP_URL } from "@/lib/constants";

export const FinalCTA = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/30 via-card to-accent/20 border border-primary/30 p-10 md:p-20 text-center"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/30 blur-3xl rounded-full" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>{t("Siap berubah?", "Ready to change?")}</span>
            </div>

            <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              {t("Berhenti Catat,", "Stop Noting,")}
              <br />
              <span className="text-gradient-accent">{t("Mulai Eksekusi", "Start Executing")}</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              {t(
                "Rasakan kemanfaatkan Aiyo dalam menemani keseharian untuk lebih produktif!",
                "Experience the benefits of Aiyo in accompanying your daily life to be more productive!"
              )}
            </p>

            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow font-semibold text-base h-14 px-8 group animate-glow-pulse"
            >
              <a href={APP_URL} target="_blank" rel="noopener">
                {t("Coba Gratis — Semua Fitur Aktif", "Try Free — All Features Active")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              {t("Tanpa kartu kredit · Gratis selamanya", "No credit card · Free forever")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
