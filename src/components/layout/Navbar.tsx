import React, { useState, useEffect } from "react";
  import { GraduationCap, Menu, X } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { useLanguage } from "@/context/LanguageContext";
  import { translations } from "@/translations";
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
  import { useIsMobile } from "@/hooks/use-mobile";
  import { motion, AnimatePresence } from "framer-motion";
  import EarlyAccessForm from "@/components/EarlyAccessForm";
  import { LanguageSwitcher } from "./navbar/LanguageSwitcher";
  import { NavigationItems } from "./navbar/NavigationItems";
  import { Link } from "react-router-dom";
  import { auth } from '@/firebase/init';
  import { useAuthState } from 'react-firebase-hooks/auth';

  const Navbar = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isRTL = language === 'he' || language === 'ar';
    const [user] = useAuthState(auth);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => scrollToSection('hero')}
            >
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                Med School In
              </span>
            </motion.div>

            {isMobile ? (
              <div className="flex items-center gap-2">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="scale-90"
                  >
                    <LanguageSwitcher />
                  </motion.div>
                </AnimatePresence>
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="hover:bg-primary/10 transition-colors rounded-full"
                    >
                      {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                  </SheetTrigger>
                  <SheetContent 
                    side={isRTL ? "right" : "left"} 
                    className="w-[280px] bg-white/95 backdrop-blur-sm border-r border-gray-200"
                  >
                    <div className="flex flex-col gap-4 pt-8">
                      <NavigationItems onItemClick={scrollToSection} />
                      {user ? (
                        <>
                          <Link to="/profile">My Profile</Link>
                          <Link to="/anki">Anki</Link>
                        </>
                      ) : (
                        <>
                          <Link to="/login">Login</Link>
                          <Link to="/register">Register</Link>
                        </>
                      )}
                      <EarlyAccessForm 
                        trigger={
                          <Button 
                            className="bg-primary hover:bg-primary-dark text-white rounded-full mt-4 w-full transition-all duration-300 hover:shadow-lg text-sm py-2.5"
                          >
                            {t.nav.getStarted}
                          </Button>
                        }
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-8">
                <NavigationItems onItemClick={scrollToSection} />
                {user ? (
                  <>
                    <Link to="/profile">My Profile</Link>
                    <Link to="/anki">Anki</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
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
