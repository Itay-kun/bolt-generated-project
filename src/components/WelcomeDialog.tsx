import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  Check, 
  Languages, 
  GraduationCap, 
  Book, 
  Calendar, 
  Users, 
  Brain, 
  BadgePercent,
  Globe,
  ScrollText,
  Clock,
  FileCheck
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { translations } from "@/translations";

const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  const t = translations[language].welcome;

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
      if (!hasSeenWelcome) {
        setIsOpen(true);
      }
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setIsOpen(false);
  };

  const icons = {
    requirements: <GraduationCap className="w-5 h-5 text-primary" />,
    examDates: <Calendar className="w-5 h-5 text-primary" />,
    structure: <ScrollText className="w-5 h-5 text-primary" />,
    info: <FileCheck className="w-5 h-5 text-primary" />,
    simulation: <Brain className="w-5 h-5 text-primary" />,
    discount: <BadgePercent className="w-5 h-5 text-primary" />
  };

  const features = [
    ["requirements", t.features.requirements],
    ["examDates", t.features.examDates],
    ["structure", t.features.structure],
    ["info", t.features.info],
    ["simulation", t.features.simulation],
    ["discount", t.features.discount]
  ] as const;

  const languageNames = {
    en: { name: 'English', flag: '🇬🇧' },
    he: { name: 'עברית', flag: '🇮🇱' },
    pl: { name: 'Polski', flag: '🇵🇱' },
    sv: { name: 'Svenska', flag: '🇸🇪' },
    ar: { name: 'العربية', flag: '🇸🇦' }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={`sm:max-w-[500px] max-w-[85%] p-8 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-primary/5 rounded-lg -z-10" />
        
        <DialogHeader className="space-y-6">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            {t.title}
          </DialogTitle>
          <DialogDescription className="text-center space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg font-medium text-gray-700"
            >
              {t.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-5"
            >
              {features.map(([key, text], index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-3 text-start group"
                >
                  <div className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                    {icons[key as keyof typeof icons]}
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </DialogDescription>
        </DialogHeader>
        
        {/* Language Selector - Moved to the bottom */}
        <div className="mt-6 mb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full h-9 gap-2 text-sm font-medium hover:bg-primary/10 transition-colors border border-gray-200"
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-gray-700">{t.chooseLanguage}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-48 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl"
            >
              <DropdownMenuLabel className="text-xs text-gray-500 font-medium">
                {t.chooseLanguage}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {Object.entries(languageNames).map(([code, { name, flag }]) => (
                <DropdownMenuItem 
                  key={code}
                  onClick={() => setLanguage(code as keyof typeof languageNames)}
                  className="flex items-center gap-3 text-sm cursor-pointer hover:bg-primary/10"
                >
                  <span className="text-base">{flag}</span>
                  <span className="flex-1">{name}</span>
                  {language === code && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button
          onClick={handleClose}
          className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-base font-medium shadow-lg hover:shadow-xl"
        >
          {t.getStarted}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
