import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, Send, ListChecks } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { PhoneMockup } from "./PhoneMockup";

interface Step {
  from: "user" | "ai";
  text: string;
  delay: number;
}

export const LiveDemo = () => {
  const { t, lang } = useI18n();

  const script: Step[] = [
    {
      from: "user",
      text: t("Ingatkan saya rapat besok jam 10 pagi", "Remind me about tomorrow's meeting at 10 AM"),
      delay: 1200,
    },
    {
      from: "ai",
      text: t(
        "✅ Reminder 'Rapat' sudah saya set untuk besok 10:00. Mau saya kirim juga ke Telegram kamu?",
        "✅ I set a 'Meeting' reminder for tomorrow 10:00. Want me to send it to your Telegram too?"
      ),
      delay: 2200,
    },
    {
      from: "user",
      text: t("Iya, dan buatkan task list persiapannya", "Yes, and create a prep task list"),
      delay: 1800,
    },
    {
      from: "ai",
      text: t(
        "📋 Task persiapan rapat sudah dibuat:\n1. Siapkan agenda\n2. Cek koneksi video call\n3. Review dokumen\n\nReminder Telegram aktif! ✓",
        "📋 Meeting prep tasks created:\n1. Prepare agenda\n2. Test video call connection\n3. Review documents\n\nTelegram reminder active! ✓"
      ),
      delay: 3500,
    },
  ];

  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [shownMessages, setShownMessages] = useState<Step[]>([]);

  useEffect(() => {
    setShownMessages([]);
    setStep(0);
    setTyped("");
  }, [lang]);

  useEffect(() => {
    if (step >= script.length) {
      const reset = setTimeout(() => {
        setShownMessages([]);
        setStep(0);
        setTyped("");
      }, 3500);
      return () => clearTimeout(reset);
    }

    const current = script[step];
    let i = 0;
    setTyped("");
    const typer = setInterval(() => {
      i++;
      setTyped(current.text.slice(0, i));
      if (i >= current.text.length) {
        clearInterval(typer);
        setTimeout(() => {
          setShownMessages((prev) => [...prev, current]);
          setTyped("");
          setStep((s) => s + 1);
        }, 600);
      }
    }, 28);

    return () => clearInterval(typer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, lang]);

  const typingNode = typed
    ? script[step]?.from === "ai"
      ? typed
      : null
    : null;

  // Show "user is typing" as a fake user bubble appended visually
  const visibleMessages = [...shownMessages];
  if (typed && script[step]?.from === "user") {
    visibleMessages.push({ from: "user", text: typed, delay: 0 });
  }

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
          <PhoneMockup messages={visibleMessages} typingMessage={typingNode} />

          <div className="space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                  <h.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg mb-1">{h.title}</div>
                  <div className="text-sm text-muted-foreground">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
