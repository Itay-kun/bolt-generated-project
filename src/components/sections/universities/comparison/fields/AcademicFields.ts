import { GraduationCap } from "lucide-react";
import { ComparisonField } from "./types";
import { translations } from "@/translations";

export const useAcademicFields = ({ language }: { language: string }): ComparisonField[] => {
  const t = translations[language];
  
  return [
    {
      id: 'requirements',
      label: t.universities.requirements,
      icon: GraduationCap,
      getValue: (uni) => {
        const items = uni.examStructure.requirements.map((req, idx) => (
          `${req}`
        )).join('\n');
        return items;
      }
    }
  ];
};
