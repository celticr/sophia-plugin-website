import { motion } from "framer-motion";
import { MessageCircle, Globe, Languages, MapPin } from "lucide-react";

const stats = [
  { icon: MessageCircle, value: "50,000+", label: "Conversations with people seeking support" },
  { icon: Globe, value: "182+", label: "Countries reached" },
  { icon: Languages, value: "96", label: "Languages available" },
  { icon: MapPin, value: "1,000+", label: "Local support services mapped" },
];

const GlobalImpactSection = () => {
  return (
    <section className="py-24 lg:py-32 section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-800 mb-4">
            Impact <span className="text-gradient">already happening</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-card border border-border shadow-sm"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-900 text-secondary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground mb-2">And every new partner expands this safety net.</p>
          <p className="text-xl font-semibold text-secondary">
            Your website could be the moment someone realises they are not alone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;
