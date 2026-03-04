import { motion } from "framer-motion";
import { Building2, GraduationCap, Heart, Landmark, Users } from "lucide-react";

const audiences = [
  { icon: Building2, label: "Companies" },
  { icon: GraduationCap, label: "Universities" },
  { icon: Heart, label: "NGOs" },
  { icon: Landmark, label: "Government departments" },
  { icon: Users, label: "Community organisations" },
];

const WhoCanUseSection = () => {
  return (
    <section className="py-24 lg:py-32 section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-800 mb-4">
            Who can <span className="text-gradient">use it</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <a.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-semibold text-secondary text-center">{a.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground max-w-xl mx-auto">
          If people trust your website, they should be able to find support there.
        </p>
      </div>
    </section>
  );
};

export default WhoCanUseSection;
