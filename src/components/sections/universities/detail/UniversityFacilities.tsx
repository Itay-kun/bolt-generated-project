import React from "react";
import { motion } from "framer-motion";
import { Book, Building2, Globe, Home } from "lucide-react";
import { University } from "../../universities/types";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface UniversityFacilitiesProps {
  university: University;
  t: any;
}

const UniversityFacilities = ({ university, t }: UniversityFacilitiesProps) => {
  const facilities = [
    {
      icon: Building2,
      title: t.universities.teachingHospitals,
      content: university.teachingHospitals,
    },
    {
      icon: Globe,
      title: t.universities.internationalRecognition,
      content: university.internationalRecognition,
    },
    {
      icon: Home,
      title: t.universities.studentLife,
      content: university.studentLife,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Book className="w-6 h-6 text-primary" />
        {t.universities.details}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facilities.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-lg border border-gray-200 cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">{facility.title}</h3>
                  </div>
                  <p className="text-text-muted line-clamp-2">{facility.content}</p>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary" />
                    {facility.title}
                  </h4>
                  <p className="text-sm text-text-muted">{facility.content}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </motion.div>
  );
};

export default UniversityFacilities;
