import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { School, ChevronDown, ChevronUp } from "lucide-react";
import { University } from "../../universities/types";
import { Button } from "@/components/ui/button";

interface UniversityOverviewProps {
  university: University;
  t: any;
}

const UniversityOverview = ({ university, t }: UniversityOverviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300;
  const shouldTruncate = university.overview.length > maxLength;
  
  const displayText = shouldTruncate && !isExpanded 
    ? `${university.overview.slice(0, maxLength)}...` 
    : university.overview;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <School className="w-6 h-6 text-primary" />
        {t.universities.overview}
      </h2>
      
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ height: "auto" }}
          animate={{ height: "auto" }}
          exit={{ height: "auto" }}
          className="relative"
        >
          <p className="text-text-muted leading-relaxed">{displayText}</p>
          
          {shouldTruncate && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 hover:bg-primary/5"
              >
                {isExpanded ? (
                  <>
                    {t.universities.showLess}
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    {t.universities.learnMore}
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default UniversityOverview;
