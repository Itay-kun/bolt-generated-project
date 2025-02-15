import React from "react";
import { motion } from "framer-motion";
import UniversityDetails from "./UniversityDetails";
import UniversityRequirements from "./UniversityRequirements";
import UniversityExamStructure from "./UniversityExamStructure";
import UniversityExamInfo from "./UniversityExamInfo";
import { University } from "../types";
import { contentVariants } from "@/lib/animations";

type ContentSection = 'requirements' | 'examStructure' | 'details' | 'examInfo' | null;

interface UniversityCardContentProps {
  activeSection: ContentSection;
  university: University;
  isExpanded: boolean;
}

const UniversityCardContent = ({
  activeSection,
  university,
  isExpanded
}: UniversityCardContentProps) => {
  if (!isExpanded || !activeSection) return null;

  return (
    <motion.div
      {...contentVariants}
      className="pt-4 border-t border-border space-y-4"
    >
      {activeSection === 'details' && (
        <UniversityDetails
          location={university.location}
          overview={university.overview}
          teachingHospitals={university.teachingHospitals}
          internationalRecognition={university.internationalRecognition}
          studentLife={university.studentLife}
        />
      )}

      {activeSection === 'requirements' && (
        <UniversityRequirements 
          requirements={university.examStructure.requirements} 
        />
      )}
      
      {activeSection === 'examStructure' && (
        <UniversityExamStructure 
          structure={university.examStructure.structure}
          sharedExams={university.examStructure.sharedExams}
        />
      )}

      {activeSection === 'examInfo' && (
        <UniversityExamInfo
          examDates={university.examDates}
          applicationDeadlines={university.applicationDeadlines}
          examMode={university.examMode}
          exemptions={university.exemptions}
        />
      )}
    </motion.div>
  );
};

export default UniversityCardContent;
