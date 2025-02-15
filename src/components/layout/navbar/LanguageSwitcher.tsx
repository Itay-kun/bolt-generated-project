import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { translations } from "@/translations";
import { Language } from "./types";

const languageNames = {
  en: 'English',
  he: 'עברית',
  pl: 'Polski',
  sv: 'Svenska',
  ar: 'العربية'
};

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const t = translations[language];

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    toast({
      title: t.languageChanged,
      description: `${t.languageChangedTo} ${languageNames[newLang]}`,
      duration: 2000,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl w-36 mt-2"
      >
        <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="cursor-pointer hover:bg-primary/10 transition-colors">
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('he')} className="cursor-pointer hover:bg-primary/10 transition-colors">
          🇮🇱 עברית
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('pl')} className="cursor-pointer hover:bg-primary/10 transition-colors">
          🇵🇱 Polski
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('sv')} className="cursor-pointer hover:bg-primary/10 transition-colors">
          🇸🇪 Svenska
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('ar')} className="cursor-pointer hover:bg-primary/10 transition-colors">
          🇸🇦 العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
