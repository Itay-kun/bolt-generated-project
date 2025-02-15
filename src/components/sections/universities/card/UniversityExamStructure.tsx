import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Equal, BookText, GraduationCap, Clock } from "lucide-react";

interface UniversityExamStructureProps {
  structure: string[];
  sharedExams?: {
    programs: string[];
    description: string;
  };
  duration?: {
    minutes: number;
    questions: number;
  };
}

const UniversityExamStructure = ({ structure, sharedExams, duration }: UniversityExamStructureProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';

  return (
    <div className="space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <div>
        <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg flex items-center gap-2">
          <BookText className="w-5 h-5 text-primary" />
          {t.universities.examStructure}
        </h4>
        <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} text-xs sm:text-sm md:text-base text-text-muted`}>
          {structure.map((str, i) => (
            <li key={i} className="mb-1">{str}</li>
          ))}
        </ul>
      </div>

      {duration && (
        <div className="rounded-lg bg-primary/5 p-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <div className="space-y-1">
              <h5 className="font-medium text-sm">
                {t.universities.examDuration}
              </h5>
              <p className="text-xs text-text-muted">
                {duration.minutes} {t.universities.minutes} • {duration.questions} {t.universities.questions}
              </p>
            </div>
          </div>
        </div>
      )}

      {sharedExams && (
        <div className="rounded-lg border border-primary/20 p-4">
          <div className="flex items-start gap-2">
            {sharedExams.programs.length > 0 ? (
              <Equal className="w-5 h-5 text-primary shrink-0 mt-1" />
            ) : (
              <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-1" />
            )}
            <div>
              {sharedExams.programs.length > 0 ? (
                <>
                  <h5 className="font-medium text-sm mb-1">
                    {t.universities.sharedExamDescription}
                  </h5>
                  <p className="text-xs text-text-muted">
                    {sharedExams.programs.join(" • ")}
                  </p>
                </>
              ) : (
                <p className="text-sm">
                  {sharedExams.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityExamStructure;
