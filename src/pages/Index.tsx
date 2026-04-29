import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { MeetAiyo } from "@/components/landing/MeetAiyo";
import { LiveDemo } from "@/components/landing/LiveDemo";
import { PainPoints } from "@/components/landing/PainPoints";
import { Features } from "@/components/landing/Features";
import { ForWho } from "@/components/landing/ForWho";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { I18nProvider } from "@/contexts/I18nContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Hero />
            <MeetAiyo />
            <LiveDemo />
            <PainPoints />
            <Features />
            <HowItWorks />
            <ForWho />
            <Pricing />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default Index;
