import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import WhyItMattersSection from "@/components/landing/WhyItMattersSection";
import GlobalImpactSection from "@/components/landing/GlobalImpactSection";
import StepsSection from "@/components/landing/StepsSection";
import WhoCanUseSection from "@/components/landing/WhoCanUseSection";
import WomensMonthSection from "@/components/landing/WomensMonthSection";
import FooterSection from "@/components/landing/FooterSection";
import RegisterInterestDialog from "@/components/landing/RegisterInterestDialog";

const Index = () => {
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <main>
      <HeroSection onRegister={() => setRegisterOpen(true)} />
      <WhyItMattersSection />
      <GlobalImpactSection />
      <StepsSection />
      <WhoCanUseSection />
      <WomensMonthSection onRegister={() => setRegisterOpen(true)} />
      <FooterSection onRegister={() => setRegisterOpen(true)} />
      <RegisterInterestDialog open={registerOpen} onOpenChange={setRegisterOpen} />
    </main>
  );
};

export default Index;
