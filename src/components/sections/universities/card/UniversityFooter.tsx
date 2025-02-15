import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

interface UniversityFooterProps {
  universityName: string;
  onToggleSelect: (name: string) => void;
}

const UniversityFooter = ({ universityName, onToggleSelect }: UniversityFooterProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
      <Link
        to={`/universities/${encodeURIComponent(universityName)}`}
        className="text-primary hover:text-primary-dark transition-colors text-sm font-medium"
        onClick={(e) => e.stopPropagation()}
      >
        {t.universities.learnMore} →
      </Link>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleSelect(universityName);
        }}
        className="text-sm text-text-muted hover:text-primary transition-colors"
      >
        {t.universities.showLess}
      </button>
    </div>
  );
};

export default UniversityFooter;
