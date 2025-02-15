import { Globe, HeartPulse, Users } from "lucide-react";
import { ComparisonField } from "./types";
import { translations } from "@/translations";

export const useFacilityFields = ({ language }: { language: string }): ComparisonField[] => {
  const t = translations[language];
  
  return [
    {
      id: 'recognition',
      label: t.universities.internationalRecognition,
      icon: Globe,
      getValue: (uni) => uni.internationalRecognition
    },
    {
      id: 'hospitals',
      label: t.universities.teachingHospitals,
      icon: HeartPulse,
      getValue: (uni) => uni.teachingHospitals
    },
    {
      id: 'student_life',
      label: t.universities.studentLife,
      icon: Users,
      getValue: (uni) => uni.studentLife
    }
  ];
};
