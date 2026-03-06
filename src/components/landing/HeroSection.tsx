import { motion } from "framer-motion";
import { Shield, Globe, MessageCircle } from "lucide-react";
import sophiaMockup from "@/assets/sophia-plugin.jpg";

const proofPoints = [
  { icon: MessageCircle, text: "50,000+ conversations" },
  { icon: Globe, text: "200+ countries" },
  { text: "96 languages" },
];

interface HeroSectionProps {
  onRegister: () => void;
}

const HeroSection = ({ onRegister }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden hero-bg min-h-[90vh] flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(177 70% 69% / 0.4), transparent 70%)" }} />

      <div className="container relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium tracking-widest uppercase text-primary">Sophia Plugin</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 leading-[1.1] mb-6 text-secondary-foreground">
              Make support visible.{" "}
              <span className="text-gradient">Everywhere.</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground/70 mb-8 max-w-lg">
              Chatbot Sophia is the world's first AI ally empowering victims of domestic violence to document abuse and seek support safely in 200+ countries.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {proofPoints.map((p) => (
                <div key={p.text} className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" style={{ background: "hsl(177 70% 69% / 0.15)", color: "hsl(177 70% 69%)" }}>
                  {p.icon && <p.icon className="w-4 h-4" />}
                  {p.text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-8 text-secondary-foreground/60 text-sm leading-relaxed max-w-md">
              <span>🏆 Recognised by the United Nations with the AI for Good Impact Award and by the President of Switzerland. Endorsed by UN Women, the Swiss Red Cross, L'Oréal, and many more.</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onRegister}
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Register interest
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl" style={{ background: "hsl(177 70% 69% / 0.08)" }} />
              <img
                src={sophiaMockup}
                alt="Chatbot Sophia embedded on a website, showing a friendly greeting message"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
