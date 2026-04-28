import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChatMessage {
  from: "user" | "ai";
  text: ReactNode;
}

interface PhoneMockupProps {
  messages?: ChatMessage[];
  typingMessage?: ReactNode | null;
  showHeader?: boolean;
  videoSrc?: string;
}

export const PhoneMockup = ({ messages = [], typingMessage, showHeader = true, videoSrc }: PhoneMockupProps) => {
  const isVideo = Boolean(videoSrc);
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      {/* Glow */}
      <div className="absolute -inset-8 bg-gradient-primary opacity-30 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative animate-float"
      >
        {/* Phone frame */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-secondary to-background border border-border p-3 shadow-elegant">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-20" />
          <div className="rounded-[2rem] bg-background overflow-hidden h-[560px] flex flex-col">
            {showHeader && (
              <div className="pt-8 pb-3 px-4 border-b border-border flex items-center gap-3 bg-card/50">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/40">
                  <img src="/buddy-avatar.png" alt="Aiyo" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-sm">AIYO</div>
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
                    Online · AI Companion
                  </div>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-hidden p-3 space-y-2.5 bg-gradient-to-b from-background to-card/30">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed whitespace-pre-line ${
                      m.from === "user"
                        ? "bg-gradient-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-secondary-foreground rounded-bl-sm border border-border"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typingMessage && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3.5 py-2 text-xs leading-relaxed bg-secondary text-secondary-foreground border border-border whitespace-pre-line">
                    {typingMessage}
                    <span className="inline-block w-1 h-3 ml-0.5 bg-primary animate-pulse-dot align-middle" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 border-t border-border bg-card/50">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary text-xs text-muted-foreground">
                <span className="flex-1">Ketik pesan...</span>
                <div className="w-7 h-7 rounded-full bg-gradient-primary" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
