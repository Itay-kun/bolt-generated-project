import React from "react";
import { PlusCircle, FileText, BookOpen, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

interface UniversityActionsProps {
  isSelected: boolean;
  activeSection: string | null;
  onToggleSelect: (name: string) => void;
  onToggleSection: (section: string) => void;
  universityName: string;
}

const UniversityActions = ({
  isSelected,
  activeSection,
  onToggleSelect,
  onToggleSection,
  universityName,
}: UniversityActionsProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        variant={isSelected ? "default" : "outline"}
        onClick={() => onToggleSelect(universityName)}
        className={`w-full flex items-center justify-center gap-2 text-sm py-2 h-auto
          ${isSelected ? "bg-primary hover:bg-primary-dark" : "hover:bg-primary/10"}`}
      >
        <PlusCircle className="w-4 h-4" />
        {isSelected ? t.universities.selected : t.universities.select}
      </Button>
      
      <Button
        variant={activeSection === 'requirements' ? "default" : "outline"}
        onClick={() => onToggleSection('requirements')}
        className="w-full flex items-center justify-center gap-2 text-sm py-2 h-auto hover:bg-primary/10"
      >
        <FileText className="w-4 h-4" />
        {t.universities.requirements}
      </Button>
      
      <Button
        variant={activeSection === 'examStructure' ? "default" : "outline"}
        onClick={() => onToggleSection('examStructure')}
        className="w-full flex items-center justify-center gap-2 text-sm py-2 h-auto hover:bg-primary/10"
      >
        <BookOpen className="w-4 h-4" />
        {t.universities.examStructure}
      </Button>
      
      <Button
        variant={activeSection === 'details' ? "default" : "outline"}
        onClick={() => onToggleSection('details')}
        className="w-full flex items-center justify-center gap-2 text-sm py-2 h-auto hover:bg-primary/10"
      >
        <ArrowRight className="w-4 h-4" />
        {activeSection === 'details' ? t.universities.showLess : t.universities.learnMore}
      </Button>

      <Button
        variant={activeSection === 'examInfo' ? "default" : "outline"}
        onClick={() => onToggleSection('examInfo')}
        className="w-full col-span-2 flex items-center justify-center gap-2 text-sm py-2 h-auto hover:bg-primary/10"
      >
        <Calendar className="w-4 h-4" />
        {activeSection === 'examInfo' ? t.universities.showLess : t.universities.examDates}
      </Button>
    </div>
  );
};

export default UniversityActions;
