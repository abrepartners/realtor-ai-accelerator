import { useState } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import VideoHighlights from "@/components/landing/VideoHighlights";
import SocialProof from "@/components/landing/SocialProof";
import InlineTeaserCTA from "@/components/landing/InlineTeaserCTA";
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
          <VideoHighlights />
          <InlineTeaserCTA
            kicker="What To Expect"
            title="See Exactly What You'll Build In This Live Session"
            bullets={[
              "Plug-and-play AI prompts for listings, follow-up, and outreach",
              "A repeatable content workflow that turns one idea into multiple posts",
              "Real examples of automation habits that reduce lead leakage",
            ]}
            onReserveSeat={() => setRegOpen(true)}
            onGetOutline={() => setLeadOpen(true)}
          />
          <SocialProof />
          <WhatYoullLearn />
          <AIToolsSection />
          <InlineTeaserCTA
            kicker="Takeaway Preview"
            title="You Leave With More Than Notes"
            bullets={[
              "Workshop syllabus PDF plus tool-by-tool implementation guidance",
              "A practical checklist to move from learning into execution quickly",
              "Clear next actions for in-person attendees and non-attendee resource requests",
            ]}
            onReserveSeat={() => setRegOpen(true)}
            onGetOutline={() => setLeadOpen(true)}
          />
          <WhoItsFor />
          <WorkshopDetails />
          <InlineTeaserCTA
            kicker="Seats Are Limited"
            title="Secure Your Spot Before Registration Closes"
            bullets={[
              "In-person format with a hard cap of 40 seats",
              "Live Q&A, implementation support, and same-day templates",
              "Fastest path to start using AI in your daily business workflow",
            ]}
            onReserveSeat={() => setRegOpen(true)}
            onGetOutline={() => setLeadOpen(true)}
          />
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
