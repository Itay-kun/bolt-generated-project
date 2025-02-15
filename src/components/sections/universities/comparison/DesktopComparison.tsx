import React from "react";
import { University } from "../types";
import { ComparisonField } from "./fields/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Settings2 } from "lucide-react";
import UniversityLogo from "./components/UniversityLogo";
import { motion } from "framer-motion";

interface DesktopComparisonProps {
  selectedFields: string[];
  selectedUniversities: University[];
  comparisonFields: ComparisonField[];
  t: any;
}

const DesktopComparison: React.FC<DesktopComparisonProps> = ({
  selectedFields,
  selectedUniversities,
  comparisonFields,
  t
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <Table>
        <TableHeader>
          <TableRow className="border-b-2 border-gray-200">
            <TableHead className="w-48 whitespace-nowrap bg-gray-50/50">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Settings2 className="w-4 h-4" />
                {t.universities.overview}
              </div>
            </TableHead>
            {selectedUniversities.map((uni, index) => (
              <TableHead key={uni.name} className="min-w-[250px] max-w-[300px]">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 p-4"
                >
                  <UniversityLogo logo={uni.logo} name={uni.name} />
                  <span className="font-medium text-base text-gray-700 text-center line-clamp-2">
                    {uni.name}
                  </span>
                </motion.div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedFields.map((fieldId, rowIndex) => {
            const field = comparisonFields.find(f => f.id === fieldId);
            if (!field) return null;

            return (
              <motion.tr
                key={fieldId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: rowIndex * 0.05 }}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <TableCell className="font-medium whitespace-nowrap bg-gray-50/30">
                  <div className="flex items-center gap-2 text-gray-700">
                    <field.icon className="w-4 h-4 text-primary" />
                    {field.label}
                  </div>
                </TableCell>
                {selectedUniversities.map(uni => (
                  <TableCell 
                    key={uni.name} 
                    className="align-top p-6 text-sm text-gray-600"
                  >
                    <div className="whitespace-pre-line">
                      {field.getValue(uni)}
                    </div>
                  </TableCell>
                ))}
              </motion.tr>
            );
          })}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default DesktopComparison;
