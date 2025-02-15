import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { useIsMobile } from "@/hooks/use-mobile";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavigationItems } from "./NavigationItems";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isRTL = language === 'he' || language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const yOffset = -navbarHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className={isRTL ? 'order-2' : 'order-1'}>
            <Logo onClick={() => scrollToSection('hero')} />
          </div>

          {isMobile ? (
            <div className={isRTL ? 'order-1' : 'order-2'}>
              <MobileNav 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                onNavigate={scrollToSection}
              />
            </div>
          ) : (
            <div className={`hidden md:flex items-center gap-8 ${isRTL ? 'order-1 ml-auto' : 'order-2 mr-auto'}`}>
              <NavigationItems onItemClick={scrollToSection} />
              <LanguageSwitcher />
              <EarlyAccessForm 
                trigger={
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 hover:shadow-lg">
                    {t.nav.getStarted}
                  </Button>
                }
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
