import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string[];
  isExpanded: boolean;
  onToggle: () => void;
  isRTL: boolean;
}

const FAQItem = ({ question, answer, isExpanded, onToggle, isRTL }: FAQItemProps) => {
  return (
    <div className={cn(
      "border-b border-primary/10 last:border-none",
      isRTL && "rtl"
    )}>
      <button
        onClick={onToggle}
        className={cn(
          "w-full py-4 focus:outline-none group",
          isRTL ? "text-right" : "text-left"
        )}
      >
        <div className="flex items-center justify-between">
          <h3 className={cn(
            "text-lg font-medium text-text group-hover:text-primary transition-colors",
            isRTL ? "text-right" : "text-left",
            "flex-grow"
          )}>
            {question}
          </h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className={cn(
              "pb-4 space-y-2",
              isRTL ? "text-right" : "text-left"
            )}>
              {answer.map((paragraph, idx) => (
                <p key={idx} className="text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
