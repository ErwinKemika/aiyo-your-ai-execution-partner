import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export const PainPoints = () => {
  const { t } = useI18n();

  const items = [
    {
      pain: t("Bingung mulai dari mana, mau brainstorming sendirian susah", "Don't know where to start, brainstorming alone is hard"),
      solution: t("Chat sama Aiyo brainstorming, tanya, curhat, semua bisa", "Chat with Aiyo—brainstorm, ask, or just vent, you can do it all"),
    },
    {
      pain: t("Reminder diabaikan, deadline terlewat", "Reminders ignored, deadlines missed"),
      solution: t("Notifikasi push + Telegram, susah kelewatan", "Push + Telegram alerts, impossible to miss"),
    },
    {
      pain: t("Susah mulai, gampang distraksi", "Hard to start, easy to get distracted"),
      solution: t("Focus mode + timer bantu kamu tetap on track", "Focus mode + timer keep you on track"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card/30 relative">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
            {t("Kamu Pasti Pernah ", "Sound ")}
            <span className="text-gradient-accent">{t("Ngerasain Ini", "Familiar?")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              "Masalah produktivitas yang nyata — dan solusi yang nyata juga.",
              "Real productivity problems — and real solutions."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass rounded-3xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="rounded-2xl bg-destructive/10 border border-destructive/20 p-4 flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-sm font-medium text-foreground/90">{item.pain}</p>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-primary rotate-90" />
              </div>

              <div className="rounded-2xl bg-success/10 border border-success/20 p-4 flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <p className="text-sm font-semibold">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
