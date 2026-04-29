import { motion } from "framer-motion";
import { MessageCircle, Send, ListChecks, Mic, Target, BarChart3 } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { PhoneMockup } from "./PhoneMockup";

export const LiveDemo = () => {
  const { t } = useI18n();

  const highlights = [
    {
      icon: MessageCircle,
      title: t("Chat Natural", "Natural Chat"),
      desc: t("Ngobrol seperti ke teman, langsung jadi aksi.", "Chat like a friend, instantly turns into action."),
    },
    {
      icon: Send,
      title: t("Reminder ke Telegram", "Telegram Reminders"),
      desc: t("Notifikasi sampai ke HP via Telegram.", "Notifications delivered straight via Telegram."),
    },
    {
      icon: ListChecks,
      title: t("Task Otomatis", "Auto Tasks"),
      desc: t("Aiyo capture & susun task tanpa ribet.", "Aiyo captures & organizes tasks effortlessly."),
    },
    {
      icon: Mic,
      title: t("Mode Ngobrol", "Voice Mode"),
      desc: t("Ngobrol hands-free langsung pakai suara.", "Talk hands-free using just your voice."),
    },
    {
      icon: Target,
      title: t("Mode Fokus", "Focus Mode"),
      desc: t("Timer deep work biar makin produktif.", "Deep work timer to boost productivity."),
    },
    {
      icon: BarChart3,
      title: t("Analytics & XP", "Analytics & XP"),
      desc: t("Pantau progress harian dan level kamu.", "Track daily progress and your level."),
    },
  ];

  return (
    <section id="demo" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-xs font-semibold text-success mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
            {t("Demo Live", "Live Demo")}
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
            {t("Lihat Aiyo ", "See Aiyo ")}
            <span className="text-gradient-primary">{t("Bekerja", "in Action")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              "Tonton bagaimana Aiyo memahami pesanmu dan langsung mengubahnya jadi aksi.",
              "Watch how Aiyo understands your message and turns it into action instantly."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <PhoneMockup videoSrc="/aiyo-demo.mp4" />

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                  <h.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-base mb-1">{h.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
