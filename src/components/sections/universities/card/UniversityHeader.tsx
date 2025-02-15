import React from "react";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/context/LanguageContext";

interface UniversityHeaderProps {
  name: string;
  description: string;
  country: string;
  examStructure?: {
    sharedExams?: {
      programs: string[];
    };
  };
}

const UniversityHeader = ({ 
  name, 
  description, 
  country,
  examStructure 
}: UniversityHeaderProps) => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  const hasSharedPrograms = examStructure?.sharedExams?.programs?.length > 0;

  return (
    <div className="space-y-2" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={`flex items-start ${isRTL ? 'gap-4' : 'gap-2'}`}>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-text bg-clip-text text-transparent bg-gradient-to-r from-text to-text/80">
          {name}
        </h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary hover:text-primary-dark transition-colors mt-1" />
            </TooltipTrigger>
            <TooltipContent side={isRTL ? "right" : "top"} align={isRTL ? "end" : "start"} className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-xs sm:text-sm max-w-[280px]">{description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-text-muted">{country}</p>
      {hasSharedPrograms && (
        <p className="text-xs sm:text-sm text-primary font-medium">
          {examStructure.sharedExams.programs.join(' • ')}
        </p>
      )}
    </div>
  );
};

export default UniversityHeader;
