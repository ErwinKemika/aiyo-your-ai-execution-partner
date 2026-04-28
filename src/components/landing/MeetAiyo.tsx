import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";

export const MeetAiyo = () => {
  const { t } = useI18n();

  const badges = [
    "🤖 AI Companion",
    "⚡ Instant Action",
    "🇮🇩 Made for Indonesia",
  ];

  return (
    <section className="bg-card/30 py-20 md:py-28 border-y border-border/50">
      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/30 blur-3xl rounded-full w-64 h-64 -z-10" />
          <img
            src="/buddy-avatar.png"
            alt="Aiyo"
            className="w-44 h-44 rounded-full object-cover animate-float border-2 border-primary/40 shadow-glow"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-3xl md:text-5xl mb-4 text-gradient-primary"
        >
          {t("Kenalan dengan Aiyo", "Meet Aiyo")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-md mx-auto mb-8"
        >
          {t(
            "Bukan sekadar chatbot. Aiyo adalah AI companion yang beneran kerja — capture tugas, kirim reminder, bantu fokus, setiap hari.",
            "Not just a chatbot. Aiyo is an AI companion that actually works — captures tasks, sends reminders, helps you focus, every day."
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-3 flex-wrap justify-center"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="px-4 py-1.5 rounded-full glass text-sm font-semibold border border-primary/30 text-gradient-primary"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
