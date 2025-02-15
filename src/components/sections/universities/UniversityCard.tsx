import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { University } from "./types";
import { Button } from "@/components/ui/button";
import { Info, School, MapPin, GraduationCap, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface UniversityCardProps {
  university: University;
  isSelected: boolean;
  expandedUniversity: string | null;
  onToggleSelect: (name: string) => void;
  onToggleExpand: (name: string | null) => void;
}

const UniversityCard = ({
  university,
  isSelected,
  onToggleSelect,
}: UniversityCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`
        relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl 
        transition-all duration-300 ${isSelected ? 'ring-2 ring-primary' : ''}
      `}
    >
      <div className="p-6 space-y-4">
        {/* Logo and Header */}
        <div className="flex items-center space-x-4" dir={isRTL ? 'rtl' : 'ltr'}>
          {imageError ? (
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <School className="w-8 h-8 text-gray-400" />
            </div>
          ) : (
            <img 
              src={university.logo} 
              alt={`${university.name} logo`}
              className="w-16 h-16 object-contain rounded-lg"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-text">{university.name}</h3>
            <div className="flex items-center gap-2 text-text-muted mt-1">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{university.location}, {university.country}</span>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="flex items-center gap-2 text-text-muted">
            <School className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">
              {university.examStructure.sharedExams?.programs.join(', ') || 'Medicine'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{university.applicationDeadlines?.[0] || t.universities.notFound}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2" dir={isRTL ? 'rtl' : 'ltr'}>
          <Button
            variant="outline"
            className="flex-1 gap-2"
            asChild
          >
            <Link to={`/universities/${encodeURIComponent(university.name)}`}>
              <Info className="w-4 h-4" />
              {t.universities.learnMore}
            </Link>
          </Button>
          <Button
            variant={isSelected ? "destructive" : "default"}
            className="flex-1 gap-2"
            onClick={() => onToggleSelect(university.name)}
          >
            <GraduationCap className="w-4 h-4" />
            {isSelected ? t.universities.selected : t.universities.select}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const UniversityCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
    <div className="flex items-center space-x-4">
      <Skeleton className="w-16 h-16 rounded-lg" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
    <div className="flex gap-3 pt-2">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  </div>
);

export default UniversityCard;
