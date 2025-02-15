import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

interface UniversityRequirementsProps {
  requirements: string[];
}

const UniversityRequirements = ({ requirements }: UniversityRequirementsProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg">
        {t.universities.requirements}
      </h4>
      <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-text-muted">
        {requirements.map((req, i) => (
          <li key={i} className="mb-1">{req}</li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityRequirements;
