import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { University } from "../../universities/types";

interface UniversityImportantDatesProps {
  university: University;
  t: any;
}

const UniversityImportantDates = ({ university, t }: UniversityImportantDatesProps) => {
  if (!university.examDates && !university.applicationDeadlines) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      {university.examDates && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            {t.universities.examDates}
          </h3>
          <ul className="space-y-2">
            {university.examDates.map((date, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>{date}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {university.applicationDeadlines && (
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            {t.universities.applicationDeadlines}
          </h3>
          <ul className="space-y-2">
            {university.applicationDeadlines.map((deadline, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>{deadline}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default UniversityImportantDates;
