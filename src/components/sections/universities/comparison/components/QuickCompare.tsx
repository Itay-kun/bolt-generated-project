import React from "react";
import { Button } from "@/components/ui/button";
import { ComparisonField } from "../fields/types";
import { University } from "../../types";
import { motion } from "framer-motion";

interface QuickCompareProps {
  field: ComparisonField;
  universities: University[];
}

const QuickCompare: React.FC<QuickCompareProps> = ({ field, universities }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur rounded-lg shadow-lg p-4 mb-4"
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
        <field.icon className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-gray-800">{field.label}</h3>
      </div>
      <div className="grid gap-4">
        {universities.map(uni => (
          <motion.div
            key={uni.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-3 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center p-1">
                <img 
                  src={uni.logo} 
                  alt={`${uni.name} logo`}
                  className="w-8 h-8 object-contain"
                />
              </div>
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
};

export default QuickCompare;
