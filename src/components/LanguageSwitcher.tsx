import React from 'react';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

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

  const handleLanguageChange = (newLang: keyof typeof languageNames) => {
    setLanguage(newLang);
    toast({
      title: 'שפה שונתה',
      description: `השפה שונתה ל-${languageNames[newLang]}`,
      duration: 2000,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50 rounded-full"
        >
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('he')}>
          🇮🇱 עברית
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('pl')}>
          🇵🇱 Polski
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('sv')}>
          🇸🇪 Svenska
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('ar')}>
          🇸🇦 العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
