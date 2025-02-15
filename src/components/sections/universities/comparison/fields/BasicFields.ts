import { School } from "lucide-react";
import { ComparisonField } from "./types";
import { translations } from "@/translations";

export const useBasicFields = ({ language }: { language: string }): ComparisonField[] => {
  const t = translations[language];
  
  return [
    {
      id: 'basic',
      label: t.universities.overview,
      icon: School,
      getValue: (uni) => uni.description
    }
  ];
};
