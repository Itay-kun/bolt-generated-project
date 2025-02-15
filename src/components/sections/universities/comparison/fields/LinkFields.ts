import { Link } from "lucide-react";
import { ComparisonField } from "./types";
import { translations } from "@/translations";

export const useLinkFields = ({ language }: { language: string }): ComparisonField[] => {
  const t = translations[language];
  
  return [
    {
      id: 'links',
      label: t.universities.officialLinks,
      icon: Link,
      getValue: (uni) => {
        if (!uni.links) return '';
        return `${t.universities.officialWebsite}: ${uni.links.mainWebsite}\n${t.universities.facultyWebsite}: ${uni.links.facultyMedicine}`;
      }
    }
  ];
};
