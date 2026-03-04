import { motion } from "framer-motion";
import { Clock, EyeOff, Smartphone } from "lucide-react";

const features = [
  { icon: Clock, text: "No apps to download." },
  { icon: EyeOff, text: "No personal data required." },
  { icon: Smartphone, text: "Immediate support when it matters most." },
];

const WhyItMattersSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-800 mb-8 leading-tight">
              Support should not depend on{" "}
              <span className="text-gradient">office hours.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Millions of people experiencing domestic violence search online for help every day.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              With the Sophia Plugin, your organisation can make safe, private, and anonymous support accessible 24/7 — directly on your website.
            </p>

            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-secondary">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
