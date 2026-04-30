import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Brain, LucideIcon } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

interface Persona {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  glow: string;
  iconBg: string;
  border: string;
}

export const ForWho = () => {
  const { t } = useI18n();

  const personas: Persona[] = [
    {
      icon: Briefcase,
      title: t("Profesional Muda", "Young Professionals"),
      subtitle: t("Kerja padat, banyak meeting", "Packed schedule, lots of meetings"),
      desc: t(
        "Tugas hilang setelah rapat? Deadline terlupakan? Aiyo bantu kamu capture, susun, dan eksekusi otomatis.",
        "Tasks lost after meetings? Deadlines forgotten? Aiyo helps you capture, organize, and execute automatically."
      ),
      glow: "rgba(168, 85, 247, 0.35)",
      iconBg: "from-purple-500 to-purple-700",
      border: "hover:border-purple-500/40",
    },
    {
      icon: GraduationCap,
      title: t("Mahasiswa & Early Career", "Students & Early Career"),
      subtitle: t("Butuh fokus dan struktur", "Need focus and structure"),
      desc: t(
        "Distraksi tinggi, waktu terbatas. Aiyo jaga sesi fokus kamu dengan Pomodoro, reminder, dan streak harian.",
        "High distraction, limited time. Aiyo guards your focus sessions with Pomodoro, reminders, and daily streaks."
      ),
      glow: "rgba(34, 211, 238, 0.35)",
      iconBg: "from-cyan-400 to-cyan-600",
      border: "hover:border-cyan-400/40",
    },
    {
      icon: Brain,
      title: t("Pengguna ADHD & Executive Dysfunction", "ADHD & Executive Dysfunction Users"),
      subtitle: t(
        "Susah mulai, gampang lupa, butuh motivasi instan",
        "Hard to start, easy to forget, need instant motivation"
      ),
      desc: t(
        "Aiyo dirancang untuk kamu yang butuh reminder yang benar-benar nemenin, streak yang memotivasi, dan AI yang sabar — setiap hari.",
        "Aiyo is built for you who need reminders that truly accompany you, motivating streaks, and a patient AI — every day."
      ),
      glow: "rgba(249, 115, 22, 0.35)",
      iconBg: "from-orange-500 to-orange-700",
      border: "hover:border-orange-500/40",
    },
  ];

  return (
    <section id="for-who" className="py-20 md:py-28 relative">
      <div className="container">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20 mb-4">
            {t("UNTUK SIAPA", "FOR WHO")}
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
            <span className="text-gradient-primary">
              {t("Aiyo Dibuat untuk Kamu", "Aiyo Is Built for You")}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            {t(
              "Siapapun yang butuh teman AI yang benar-benar bantu eksekusi — bukan sekadar catat.",
              "Anyone who needs an AI companion that truly helps you execute — not just take notes."
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group glass rounded-3xl p-7 ${p.border} hover:-translate-y-1 transition-all relative overflow-hidden`}
            >
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  style={{ boxShadow: `0 0 30px ${p.glow}, 0 0 60px ${p.glow.replace("0.35", "0.15")}` }}
                >
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-1">{p.title}</h3>
                <p className="text-xs font-semibold text-primary/80 mb-3 uppercase tracking-wide">
                  {p.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
