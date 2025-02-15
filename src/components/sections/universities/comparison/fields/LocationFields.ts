import { Building2 } from "lucide-react";
import { ComparisonField } from "./types";
import { translations } from "@/translations";

export const useLocationFields = ({ language }: { language: string }): ComparisonField[] => {
  const t = translations[language];
  
  return [
    {
      id: 'location',
      label: t.universities.location,
      icon: Building2,
      getValue: (uni) => `${uni.location}, ${uni.country}`
    }
  ];
};
