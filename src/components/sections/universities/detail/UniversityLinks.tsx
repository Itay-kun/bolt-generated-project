import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { University } from "../../universities/types";

interface UniversityLinksProps {
  university: University;
  t: any;
}

const UniversityLinks = ({ university, t }: UniversityLinksProps) => {
  if (!university.links) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Globe2 className="w-6 h-6 text-primary" />
        {t.universities.officialLinks}
      </h2>
      <div className="space-y-3">
        {university.links.mainWebsite && (
          <a
            href={university.links.mainWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary hover:underline"
          >
            {t.universities.officialWebsite}
          </a>
        )}
        {university.links.facultyMedicine && (
          <a
            href={university.links.facultyMedicine}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary hover:underline"
          >
            {t.universities.facultyWebsite}
          </a>
        )}
        {university.links.admissions && (
          <a
            href={university.links.admissions}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary hover:underline"
          >
            {t.universities.admissionsWebsite}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default UniversityLinks;
