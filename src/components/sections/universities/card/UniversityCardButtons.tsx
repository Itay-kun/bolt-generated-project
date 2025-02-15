import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { ChevronDown, GraduationCap, BookOpen, Calendar, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type ContentSection = 'requirements' | 'examStructure' | 'details' | 'examInfo' | null;

interface UniversityCardButtonsProps {
  activeSection: ContentSection;
  handleSectionChange: (section: ContentSection) => void;
  language: string;
}

const UniversityCardButtons = ({
  activeSection,
  handleSectionChange,
  language
}: UniversityCardButtonsProps) => {
  const t = translations[language];

  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSectionChange('details');
        }}
        className={cn(
          "p-4 rounded-lg transition-all flex flex-col items-center justify-center gap-2 text-sm",
          activeSection === 'details' ? "bg-primary/20" : "hover:bg-primary/10"
        )}
      >
        <Info className="w-5 h-5" />
        {t.universities.learnMore}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSectionChange('requirements');
        }}
        className={cn(
          "p-4 rounded-lg transition-all flex flex-col items-center justify-center gap-2 text-sm",
          activeSection === 'requirements' ? "bg-primary/20" : "hover:bg-primary/10"
        )}
      >
        <GraduationCap className="w-5 h-5" />
        {t.universities.requirements}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSectionChange('examStructure');
        }}
        className={cn(
          "p-4 rounded-lg transition-all flex flex-col items-center justify-center gap-2 text-sm",
          activeSection === 'examStructure' ? "bg-primary/20" : "hover:bg-primary/10"
        )}
      >
        <BookOpen className="w-5 h-5" />
        {t.universities.examStructure}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSectionChange('examInfo');
        }}
        className={cn(
          "p-4 rounded-lg transition-all flex flex-col items-center justify-center gap-2 text-sm",
          activeSection === 'examInfo' ? "bg-primary/20" : "hover:bg-primary/10"
        )}
      >
        <Calendar className="w-5 h-5" />
        {t.universities.examDates}
      </button>
    </div>
  );
};

export default UniversityCardButtons;
