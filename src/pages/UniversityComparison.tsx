import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { universities } from "@/components/sections/universities/types/data";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { useComparisonFields } from "@/components/sections/universities/comparison/ComparisonFields";
import ComparisonHeader from "@/components/sections/universities/comparison/ComparisonHeader";
import MobileComparison from "@/components/sections/universities/comparison/MobileComparison";
import DesktopComparison from "@/components/sections/universities/comparison/DesktopComparison";
import QuickCompare from "@/components/sections/universities/comparison/components/QuickCompare";
import { motion, AnimatePresence } from "framer-motion";

const UniversityComparison = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';
  const isMobile = useIsMobile();

  const searchParams = new URLSearchParams(location.search);
  const universityNames = searchParams.get('unis')?.split(',') || [];
  const selectedUniversities = universities.filter(uni => 
    universityNames.includes(uni.name)
  );

  const [selectedFields, setSelectedFields] = useState<string[]>([
    'basic',
    'location',
    'requirements',
    'tuition'
  ]);

  const [quickCompareField, setQuickCompareField] = useState<string | null>(null);

  const comparisonFields = useComparisonFields({ language });

  const toggleField = (fieldId: string) => {
    if (quickCompareField === fieldId) {
      setQuickCompareField(null);
    } else {
      setQuickCompareField(fieldId);
    }
  };

  const toggleSelectedField = (fieldId: string) => {
    setSelectedFields(prev => {
      const isSelected = prev.includes(fieldId);
      if (isSelected) {
        return prev.filter(id => id !== fieldId);
      } else {
        return [...prev, fieldId];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-pattern" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      <div className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ComparisonHeader
            language={language}
            isRTL={isRTL}
            t={t}
            selectedFields={selectedFields}
            comparisonFields={comparisonFields}
            toggleField={toggleSelectedField}
          />

          <div className="mt-8">
            <AnimatePresence>
              {quickCompareField && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8"
                >
                  {comparisonFields.map(field => {
                    if (field.id === quickCompareField) {
                      return (
                        <QuickCompare
                          key={field.id}
                          field={field}
                          universities={selectedUniversities}
                        />
                      );
                    }
                    return null;
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {isMobile ? (
              <MobileComparison
                selectedFields={selectedFields}
                selectedUniversities={selectedUniversities}
                comparisonFields={comparisonFields}
              />
            ) : (
              <DesktopComparison
                selectedFields={selectedFields}
                selectedUniversities={selectedUniversities}
                comparisonFields={comparisonFields}
                t={t}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityComparison;
