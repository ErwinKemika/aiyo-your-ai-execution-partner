import { motion } from "framer-motion";
import { MessageSquare, Bell, CheckSquare, Timer, Trophy, Shield, LucideIcon } from "lucide-react";
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
      icon: MessageSquare,
      title: t("Chat AI Actionable", "Actionable AI Chat"),
      desc: t(
        "Ngobrol natural, Aiyo langsung buatkan task dan reminder. Bukan Q&A biasa.",
        "Chat naturally — Aiyo creates tasks and reminders instantly. Not your typical Q&A."
      ),
    },
    {
      icon: Bell,
      title: t("Reminder Telegram + Push", "Telegram + Push Reminders"),
      desc: t(
        "Reminder dikirim via notifikasi push DAN Telegram. Susah kelewatan.",
        "Reminders delivered via push AND Telegram. Impossible to miss."
      ),
    },
    {
      icon: CheckSquare,
      title: t("Manajemen Tugas Cepat", "Lightning-Fast Task Management"),
      desc: t(
        "Capture tugas dalam hitungan detik dari chat. Auto-prioritas.",
        "Capture tasks in seconds from chat. Auto-prioritized."
      ),
    },
    {
      icon: Timer,
      title: t("Focus Mode", "Focus Mode"),
      desc: t(
        "Mode fokus dengan timer terintegrasi. Kurangi distraksi, tingkatkan output.",
        "Focus mode with integrated timer. Cut distractions, boost output."
      ),
    },
    {
      icon: Trophy,
      title: t("Streak & Pencapaian", "Streaks & Achievements"),
      desc: t(
        "Streak harian, XP mingguan, dan badge. Produktif terasa lebih rewarding.",
        "Daily streaks, weekly XP, and badges. Productivity feels rewarding."
      ),
    },
    {
      icon: Shield,
      title: t("Privasi Terjaga", "Privacy First"),
      desc: t(
        "Data kamu aman. Enkripsi end-to-end, tidak dijual ke pihak ketiga.",
        "Your data is safe. End-to-end encryption, never sold to third parties."
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
