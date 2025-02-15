import { Calendar, Coins } from "lucide-react";
import { ComparisonField } from "./types";
import { translations } from "@/translations";

export const useAdministrativeFields = ({ language }: { language: string }): ComparisonField[] => {
  const t = translations[language];
  
  return [
    {
      id: 'deadlines',
      label: t.universities.applicationDeadlines,
      icon: Calendar,
      getValue: (uni) => uni.applicationDeadlines?.join(', ') || '-'
    },
    {
      id: 'tuition',
      label: t.universities.tuitionFees,
      icon: Coins,
      getValue: (uni) => 
        uni.tuitionFees 
          ? `${uni.tuitionFees.amount} ${uni.tuitionFees.currency} ${t.universities.per} ${uni.tuitionFees.period}`
          : '-'
    }
  ];
};
