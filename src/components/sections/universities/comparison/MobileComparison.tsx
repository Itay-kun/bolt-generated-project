import React from "react";
import { University } from "../types";
import { ComparisonField } from "./ComparisonFields";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import UniversityLogo from "./components/UniversityLogo";

interface MobileComparisonProps {
  selectedFields: string[];
  selectedUniversities: University[];
  comparisonFields: ComparisonField[];
}

const MobileComparison: React.FC<MobileComparisonProps> = ({
  selectedFields,
  selectedUniversities,
  comparisonFields
}) => {
  return (
    <ScrollArea className="h-[calc(100vh-16rem)] px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4 pb-6"
      >
        {selectedFields.map(fieldId => {
          const field = comparisonFields.find(f => f.id === fieldId);
          if (!field) return null;

          return (
            <motion.div 
              key={fieldId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-4"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                <field.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-gray-800">{field.label}</h3>
              </div>
              <div className="grid gap-4">
                {selectedUniversities.map(uni => (
                  <motion.div 
                    key={uni.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-lg p-3 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <UniversityLogo logo={uni.logo} name={uni.name} size="sm" />
                      <h4 className="font-medium text-sm text-gray-700">{uni.name}</h4>
                    </div>
                    <div className="text-gray-600 text-sm pl-2 border-l-2 border-primary/20">
                      {field.getValue(uni)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </ScrollArea>
  );
};

export default MobileComparison;
