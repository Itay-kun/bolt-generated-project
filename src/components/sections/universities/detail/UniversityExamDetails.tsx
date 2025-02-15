import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ChevronDown } from "lucide-react";
import { University } from "../../universities/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface UniversityExamDetailsProps {
  university: University;
  t: any;
}

const UniversityExamDetails = ({ university, t }: UniversityExamDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <GraduationCap className="w-6 h-6 text-primary" />
        {t.universities.examStructure}
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {university.examStructure.structure.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 text-left">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
                <span className="text-sm font-medium">{item.split(':')[0]}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-text-muted pl-3.5">
                {item.includes(':') ? item.split(':')[1].trim() : item}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {university.examStructure.sharedExams && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-primary/5 rounded-lg"
        >
          <h3 className="font-semibold text-sm mb-2">
            {t.universities.sharedExamDescription}
          </h3>
          <ul className="space-y-2">
            {university.examStructure.sharedExams.programs.map((program, index) => (
              <li key={index} className="text-sm text-text-muted flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                {program}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UniversityExamDetails;
