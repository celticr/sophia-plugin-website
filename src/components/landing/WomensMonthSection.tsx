import { motion } from "framer-motion";

interface WomensMonthSectionProps {
  onRegister: () => void;
}

const WomensMonthSection = ({ onRegister }: WomensMonthSectionProps) => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-800 mb-8 leading-tight">
            This International Women's Month,{" "}
            <span className="text-gradient">take the extra step.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-3">
            Don't just post about solidarity.
          </p>
          <p className="text-xl font-semibold text-secondary mb-8">
            Make support accessible.
          </p>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Install Sophia and show every visitor to your website:
            <br />
            <span className="font-semibold text-secondary italic">
              "We see you. We care. Help is here."
            </span>
          </p>

          <button
            onClick={onRegister}
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Register interest
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WomensMonthSection;
