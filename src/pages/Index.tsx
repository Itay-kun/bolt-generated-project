import React, { Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UniversitiesSection from "@/components/sections/UniversitiesSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import CollaborationSection from "@/components/sections/CollaborationSection";
import WelcomeDialog from "@/components/WelcomeDialog";
import CountdownDialog from "@/components/CountdownDialog";

const Index = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';

  if (!language) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen bg-gradient-to-b from-background to-background/95 relative overflow-x-hidden w-full ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <Navbar />
      
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <WelcomeDialog />
        <CountdownDialog />
      </Suspense>
      
      <main className="relative">
        <section id="hero" className="pt-24 scroll-mt-24 min-h-[calc(100vh-6rem)]">
          <Suspense fallback={<div className="animate-pulse">Loading hero section...</div>}>
            <HeroSection />
          </Suspense>
        </section>
        
        <section id="features" className="relative pt-4 scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
          <Suspense fallback={<div className="animate-pulse">Loading features...</div>}>
            <FeaturesSection />
          </Suspense>
        </section>
        
        <section id="universities" className="relative pt-4 scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-50" />
          <Suspense fallback={<div className="animate-pulse">Loading universities...</div>}>
            <UniversitiesSection />
          </Suspense>
        </section>
        
        <section id="team" className="relative pt-4 scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
          <Suspense fallback={<div className="animate-pulse">Loading team section...</div>}>
            <TeamSection />
          </Suspense>
        </section>
        
        <section id="collaboration" className="relative pt-4 scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-50" />
          <Suspense fallback={<div className="animate-pulse">Loading collaboration section...</div>}>
            <CollaborationSection />
          </Suspense>
        </section>
        
        <section id="faq" className="relative pt-4 scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-50" />
          <Suspense fallback={<div className="animate-pulse">Loading FAQ section...</div>}>
            <FAQSection />
          </Suspense>
        </section>
        
        <section id="cta" className="relative pt-4 pb-24 scroll-mt-24">
          <Suspense fallback={<div className="animate-pulse">Loading CTA section...</div>}>
            <CTASection />
          </Suspense>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
