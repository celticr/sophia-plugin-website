import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="hero-bg py-16">
      <div className="container text-center">
        <a href="https://sophia.chat" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-secondary-foreground mb-2 inline-block hover:opacity-80 transition-opacity">
          Sophia.chat
        </a>
        <p className="text-secondary-foreground/60 text-sm mb-1">
          Built by{" "}
          <a href="https://springact.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
            Spring ACT
          </a>
        </p>
        <p className="text-secondary-foreground/50 text-sm flex items-center justify-center gap-1 mb-8">
          Technology for a world without violence against women <Heart className="w-3.5 h-3.5 text-primary" />
        </p>

        <div className="flex justify-center gap-4">
          <a href="#register" className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Register interest
          </a>
          <a href="mailto:hello@sophia.chat" className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold border border-secondary-foreground/20 text-secondary-foreground/80 hover:border-primary hover:text-primary transition-colors">
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
