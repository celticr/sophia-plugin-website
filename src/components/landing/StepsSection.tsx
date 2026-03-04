import { motion } from "framer-motion";
import { KeyRound, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: KeyRound,
    title: "Get Your Licence",
    desc: "Contact us to get set up. We'll tailor Sophia to your needs.",
  },
  {
    icon: Settings,
    title: "Select Your Sophia",
    desc: "Choose the version that fits your context (company, university, NGO, government, community).",
  },
  {
    icon: Rocket,
    title: "Copy, Paste, Go Live",
    desc: "Embed Sophia on your website with one simple code snippet.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-800">
            Launch Sophia in <span className="text-gradient">minutes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold mx-auto" style={{ left: "calc(50% + 20px)" }}>
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
