import React from "react";
import { Calendar, Clock, Monitor } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

interface UniversityExamInfoProps {
  examDates?: string[];
  applicationDeadlines?: string[];
  examMode?: string;
  exemptions?: string[];
}

const UniversityExamInfo = ({
  examDates,
  applicationDeadlines,
  examMode,
  exemptions,
}: UniversityExamInfoProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-4">
      {examDates && (
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            {t.universities.examDates}
          </h4>
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-text-muted">
            {examDates.map((date, i) => (
              <li key={i} className="mb-1">{date}</li>
            ))}
          </ul>
        </div>
      )}

      {applicationDeadlines && (
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            {t.universities.applicationDeadlines}
          </h4>
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-text-muted">
            {applicationDeadlines.map((deadline, i) => (
              <li key={i} className="mb-1">{deadline}</li>
            ))}
          </ul>
        </div>
      )}

      {examMode && (
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg flex items-center gap-2">
            <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            {t.universities.examMode}
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-text-muted">{examMode}</p>
        </div>
      )}

      {exemptions && (
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base md:text-lg">{t.universities.exemptions}</h4>
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-text-muted">
            {exemptions.map((exemption, i) => (
              <li key={i} className="mb-1">{exemption}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UniversityExamInfo;
