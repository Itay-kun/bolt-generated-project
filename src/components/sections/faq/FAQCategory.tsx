import React from "react";
import { cn } from "@/lib/utils";
import FAQItem from "./FAQItem";

export type FAQCategoryType = {
  title: string;
  questions: {
    q: string;
    a: string[];
  }[];
};

interface FAQCategoryProps {
  category: FAQCategoryType;
  isRTL: boolean;
}

const FAQCategory = ({ category, isRTL }: FAQCategoryProps) => {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <div className={cn(
      "space-y-6",
      isRTL && "rtl"
    )}>
      <h2 className={cn(
        "text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
        isRTL ? "text-right" : "text-left"
      )}>
        {category.title}
      </h2>
      <div className="space-y-2">
        {category.questions.map((faq, idx) => (
          <FAQItem
            key={idx}
            question={faq.q}
            answer={faq.a}
            isExpanded={expandedIndex === idx}
            onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            isRTL={isRTL}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQCategory;
