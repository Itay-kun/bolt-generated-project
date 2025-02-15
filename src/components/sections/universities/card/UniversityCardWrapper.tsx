import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { cardVariants } from "@/lib/animations";

interface UniversityCardWrapperProps {
  isSelected: boolean;
  isRTL: boolean;
  onToggleSelect: (name: string) => void;
  universityName: string;
  children: React.ReactNode;
}

const UniversityCardWrapper = ({
  isSelected,
  isRTL,
  onToggleSelect,
  universityName,
  children
}: UniversityCardWrapperProps) => {
  return (
    <motion.div
      layout
      variants={cardVariants}
      className={cn(
        "p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden",
        isSelected
          ? "ring-2 ring-primary bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm"
          : "hover:bg-white/80 glass-card"
      )}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      onClick={() => !isSelected && onToggleSelect(universityName)}
    >
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "absolute top-4 z-50 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg",
            isRTL ? "left-4" : "right-4"
          )}
        >
          <Check className="w-5 h-5 text-white" />
        </motion.div>
      )}
      {children}
    </motion.div>
  );
};

export default UniversityCardWrapper;
