import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";

export const HowItWorks = () => {
  const { t } = useI18n();
  const steps = [
    {
      n: "01",
      title: t("Cerita ke Aiyo", "Tell Aiyo"),
      desc: t("Ketik atau chat apa yang perlu dilakukan", "Type or chat what needs to be done"),
    },
    {
      n: "02",
      title: t("Aiyo Bikin Task & Reminder", "Aiyo Creates Tasks & Reminders"),
      desc: t("Otomatis tersimpan, reminder aktif", "Auto-saved, reminders activated"),
    },
    {
      n: "03",
      title: t("Fokus & Eksekusi", "Focus & Execute"),
      desc: t("Focus mode bantu kamu selesaikan tugas", "Focus mode helps you finish tasks"),
    },
    {
      n: "04",
      title: t("Lihat Progres", "See Progress"),
      desc: t("Streak dan XP tunjukkan perkembanganmu", "Streaks and XP show your progress"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card/30 relative">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
            {t("Cara Kerjanya ", "How It ")}
            <span className="text-gradient-primary">{t("Simpel", "Works")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("Dari ide ke eksekusi dalam 4 langkah.", "From idea to execution in 4 steps.")}
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-20 h-20 mb-5">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 opacity-50 blur-md" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center font-display font-black text-2xl text-primary-foreground shadow-glow">
                  {s.n}
                </div>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
