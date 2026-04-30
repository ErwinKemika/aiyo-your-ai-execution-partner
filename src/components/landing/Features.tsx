import { motion } from "framer-motion";
import { MessageCircle, Mic, ListChecks, Target, Sparkles, Download, LucideIcon } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const Features = () => {
  const { t } = useI18n();

  const features: Feature[] = [
    {
      icon: MessageCircle,
      title: t("Chat AI", "AI Chat"),
      desc: t("Ngobrol dan curhat bebas kapan saja.", "Chat and vent freely anytime."),
    },
    {
      icon: Mic,
      title: t("Mode Ngobrol", "Voice Mode"),
      desc: t(
        "Bicara langsung ke Aiyo dengan suara, hands-free.",
        "Talk to Aiyo with your voice, hands-free."
      ),
    },
    {
      icon: ListChecks,
      title: t("To-Do & Kegiatan", "To-Do & Activities"),
      desc: t("Event, reminder, dan jadwal harian.", "Events, reminders, and daily schedule."),
    },
    {
      icon: Target,
      title: t("Mode Fokus", "Focus Mode"),
      desc: t("Timer produktivitas untuk deep work.", "Productivity timer for deep work."),
    },
    {
      icon: Sparkles,
      title: t("Mode Cerdas", "Smart Mode"),
      desc: t("Jawaban lebih pintar dengan AI lanjutan.", "Smarter answers with advanced AI."),
    },
    {
      icon: Download,
      title: t("Install di HP Tanpa App Store", "Install on Your Phone Without an App Store"),
      desc: t(
        "Buka di browser, tap Install langsung ada di home screen kamu. Gratis, tanpa Play Store atau App Store.",
        "Open in your browser, tap Install — it lands on your home screen. Free, no Play Store or App Store."
      ),
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="container">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20 mb-4">
            {t("FITUR UTAMA", "CORE FEATURES")}
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
            {t("Semua yang Kamu Butuhkan", "Everything You Need")}
            <br />
            <span className="text-gradient-primary">{t("Untuk Eksekusi", "to Execute")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group glass rounded-3xl p-7 hover:border-primary/40 hover:-translate-y-1 transition-all relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
