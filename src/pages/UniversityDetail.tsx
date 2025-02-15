import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { University, universities } from "@/components/sections/universities/types";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import UniversityHeader from "@/components/sections/universities/detail/UniversityHeader";
import UniversityOverview from "@/components/sections/universities/detail/UniversityOverview";
import UniversityFacilities from "@/components/sections/universities/detail/UniversityFacilities";
import UniversityExamDetails from "@/components/sections/universities/detail/UniversityExamDetails";
import UniversityImportantDates from "@/components/sections/universities/detail/UniversityImportantDates";
import UniversityLinks from "@/components/sections/universities/detail/UniversityLinks";

const UniversityDetail = () => {
  const { universityId } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';

  const university = universities.find(u => u.name === decodeURIComponent(universityId || ""));

  if (!university) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t.universities.notFound}</h1>
          <Link to="/universities">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.universities.backToList}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-pattern py-24" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversityHeader university={university} t={t} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <UniversityOverview university={university} t={t} />
            <UniversityFacilities university={university} t={t} />
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            <UniversityExamDetails university={university} t={t} />
            <UniversityImportantDates university={university} t={t} />
            <UniversityLinks university={university} t={t} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetail;
