import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { APP_URL } from "@/lib/constants";

export const Pricing = () => {
  const { t } = useI18n();

  const plans = [
    {
      name: "Free",
      price: t("Gratis", "Free"),
      period: t("selamanya", "forever"),
      desc: t("Untuk mulai produktif", "Get productive today"),
      features: [
        { text: t("AI Chat: 20 pesan/hari", "AI Chat: 20 messages/day"), included: true },
        { text: t("Voice mode: 1 menit/hari", "Voice mode: 1 min/day"), included: true },
        { text: t("Attachment: 1 file/hari", "Attachment: 1 file/day"), included: true },
        { text: t("YouTube search & Play", "YouTube search & Play"), included: true },
        { text: t("Notifikasi Reminder", "Reminder notifications"), included: true },
        { text: t("History Chat", "Chat history"), included: false },
        { text: t("To-do list + Reminder", "To-do list + Reminder"), included: false },
        { text: t("Analytics + Gamification", "Analytics + Gamification"), included: false },
      ],
      cta: t("Mulai Gratis", "Start Free"),
      highlight: false,
    },
    {
      name: "Pro",
      price: "Rp 49.000",
      period: t("/bulan", "/month"),
      desc: t("Untuk pengguna serius", "For serious users"),
      badge: t("⭐ Terpopuler", "⭐ Most Popular"),
      features: [
        { text: t("AI Chat: Unlimited", "AI Chat: Unlimited"), included: true },
        { text: t("Voice mode: 5 menit/sesi", "Voice mode: 5 min/session"), included: true },
        { text: t("Attachment: Unlimited", "Attachment: Unlimited"), included: true },
        { text: t("History Chat", "Chat history"), included: true },
        { text: t("To-do list + Reminder", "To-do list + Reminder"), included: true },
        { text: t("YouTube search & Play", "YouTube search & Play"), included: true },
        { text: t("Analytics + Gamification (XP & Streak)", "Analytics + Gamification (XP & Streak)"), included: true },
        { text: t("Mode Cerdas AI (GPT-5/mini)", "Smart AI Mode (GPT-5/mini)"), included: true },
        { text: t("Notifikasi Reminder", "Reminder notifications"), included: true },
        { text: t("Google Calendar sync", "Google Calendar sync"), included: false },
        { text: t("Telegram Reminder", "Telegram Reminder"), included: false },
        { text: t("Focus Ambience Sound", "Focus Ambience Sound"), included: false },
      ],
      cta: t("Pilih Pro", "Get Pro"),
      highlight: true,
    },
    {
      name: "Aiyo Max",
      price: "Rp 69.000",
      period: t("/bulan", "/month"),
      desc: t("Untuk power user", "For power users"),
      features: [
        { text: t("AI Chat: Unlimited", "AI Chat: Unlimited"), included: true },
        { text: t("Voice mode: 10 menit/sesi", "Voice mode: 10 min/session"), included: true },
        { text: t("Attachment: Unlimited", "Attachment: Unlimited"), included: true },
        { text: t("History Chat", "Chat history"), included: true },
        { text: t("To-do list + Reminder", "To-do list + Reminder"), included: true },
        { text: t("Google Calendar sync", "Google Calendar sync"), included: true },
        { text: t("YouTube search & Play", "YouTube search & Play"), included: true },
        { text: t("Telegram Reminder", "Telegram Reminder"), included: true },
        { text: t("Analytics + Gamification (XP & Streak)", "Analytics + Gamification (XP & Streak)"), included: true },
        { text: t("Mode Cerdas AI (GPT-5/mini)", "Smart AI Mode (GPT-5/mini)"), included: true },
        { text: t("Notifikasi Reminder", "Reminder notifications"), included: true },
        { text: t("Focus Ambience Sound", "Focus Ambience Sound"), included: true },
      ],
      cta: t("Pilih Aiyo Max", "Get Aiyo Max"),
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      <div className="container relative">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary bg-primary/10 border border-primary/20 mb-4">
            {t("HARGA", "PRICING")}
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
            {t("Pilih Plan yang ", "Pick the ")}
            <span className="text-gradient-primary">{t("Cocok", "Right Plan")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("Mulai gratis. Upgrade kapan saja.", "Start free. Upgrade anytime.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => {
            const isMax = p.name === "Aiyo Max";
            return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={
                isMax
                  ? { boxShadow: "0 0 30px rgba(249, 115, 22, 0.25), 0 0 60px rgba(249, 115, 22, 0.1)" }
                  : undefined
              }
              className={`relative rounded-3xl p-7 flex flex-col ${
                p.highlight
                  ? "bg-gradient-to-br from-primary/15 via-card to-accent/10 border-2 border-primary/50 shadow-glow lg:scale-105 lg:-translate-y-2"
                  : isMax
                    ? "glass border-2 border-orange-500/50 bg-orange-500/5 hover:border-orange-500/70"
                    : "glass hover:border-primary/40"
              } transition-all`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold whitespace-nowrap shadow-glow">
                  {p.badge}
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display font-black text-2xl mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>

              <div className="mb-6">
                <span className={`font-display font-black text-4xl ${p.highlight ? "text-gradient-primary" : ""}`}>
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground ml-1">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-7 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-2.5 text-sm ${!f.included ? "text-muted-foreground/70" : ""}`}>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        !f.included
                          ? "bg-muted-foreground/15"
                          : p.highlight
                            ? "bg-gradient-primary"
                            : "bg-primary/15"
                      }`}
                    >
                      {f.included ? (
                        <Check className={`w-3 h-3 ${p.highlight ? "text-primary-foreground" : "text-primary"}`} />
                      ) : (
                        <X className="w-3 h-3 text-muted-foreground" />
                      )}
                    </div>
                    <span className={!f.included ? "line-through" : ""}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`w-full font-semibold ${
                  p.highlight
                    ? "bg-gradient-primary hover:opacity-90 shadow-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <a href={APP_URL} target="_blank" rel="noopener">
                  {p.cta}
                </a>
              </Button>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
