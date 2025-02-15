import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import FAQCategory from "./faq/FAQCategory";
import { FAQCategories } from "@/constants/faqData";
import { cn } from "@/lib/utils";

const FAQSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  const t = translations[language].faq;

  // Get the correct categories based on language
  const categories = language === 'he' ? t?.categories : FAQCategories;

  if (!categories) {
    console.error('FAQ categories missing for language:', language);
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "text-center mb-16",
            isRTL && "rtl"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            {t?.title || "Frequently Asked Questions"}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {t?.subtitle || "Find answers to common questions about Med School In and our services"}
          </p>
        </motion.div>
        
        <div className={cn(
          "space-y-12",
          isRTL && "rtl"
        )}>
          {Object.entries(categories).map(([key, category], idx) => (
            <FAQCategory 
              key={idx} 
              category={{
                title: category.title,
                questions: category.questions
              }}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
