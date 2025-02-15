import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationItems } from "./NavigationItems";
import { LanguageSwitcher } from "./LanguageSwitcher";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { useEffect, useCallback } from "react";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileNav = ({ isMenuOpen, setIsMenuOpen, onNavigate }: MobileNavProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';

  useEffect(() => {
    return () => setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  const handleNavigate = useCallback((sectionId: string) => {
    setIsMenuOpen(false);
    
    // Delay to allow sheet closing animation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      
      const header = document.querySelector('nav');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Calculate position considering the header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 150);
  }, [setIsMenuOpen]);

  return (
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
          className="w-[280px] bg-white/95 backdrop-blur-sm border-r border-gray-200 p-4"
        >
          <nav className="flex flex-col gap-4 pt-8">
            <NavigationItems onItemClick={handleNavigate} />
            <EarlyAccessForm 
              trigger={
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full mt-4 w-full transition-all duration-300 hover:shadow-lg text-sm py-2.5"
                >
                  {t.nav.getStarted}
                </Button>
              }
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
