import { useState } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import SocialProof from "@/components/landing/SocialProof";
import WhatYoullLearn from "@/components/landing/WhatYoullLearn";
import AIToolsSection from "@/components/landing/AIToolsSection";
import WhoItsFor from "@/components/landing/WhoItsFor";
import WorkshopDetails from "@/components/landing/WorkshopDetails";
import InstructorSection from "@/components/landing/InstructorSection";
import CRMBridge from "@/components/landing/CRMBridge";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import MobileCTABar from "@/components/landing/MobileCTABar";
import RegistrationForm from "@/components/landing/RegistrationForm";
import LeadMagnetForm from "@/components/landing/LeadMagnetForm";
import CRMDemoForm from "@/components/landing/CRMDemoForm";

const Index = () => {
  const [regOpen, setRegOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="site-shell min-h-screen pb-24 md:pb-0">
      <div aria-hidden className="mesh-bg" />
      <div aria-hidden className="grain-overlay" />
      <div aria-hidden className="editorial-grid" />
      <div className="relative z-10">
        <Header onReserveSeat={() => setRegOpen(true)} />
        <main>
          <HeroSection onReserveSeat={() => setRegOpen(true)} onGetOutline={() => setLeadOpen(true)} />
          <SocialProof />
          <WhatYoullLearn />
          <AIToolsSection />
          <WhoItsFor />
          <WorkshopDetails />
          <InstructorSection />
          <CRMBridge onJoinWaitlist={() => setWaitlistOpen(true)} />
          <FAQSection />
          <FinalCTA onReserveSeat={() => setRegOpen(true)} onGetOutline={() => setLeadOpen(true)} />
        </main>
        <MobileCTABar onReserveSeat={() => setRegOpen(true)} />
      </div>

      <RegistrationForm open={regOpen} onOpenChange={setRegOpen} />
      <LeadMagnetForm open={leadOpen} onOpenChange={setLeadOpen} />
      <CRMDemoForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;
