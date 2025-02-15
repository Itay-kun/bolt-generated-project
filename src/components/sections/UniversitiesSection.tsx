import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { useToast } from "@/components/ui/use-toast";
import UniversityCard, { UniversityCardSkeleton } from "./universities/UniversityCard";
import StartTestButton from "./universities/StartTestButton";
import { partnerUniversities } from "./universities/types/data";
import { GraduationCap, School } from "lucide-react";

const UniversitiesSection = () => {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);
  const [expandedUniversity, setExpandedUniversity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const isRTL = language === 'he' || language === 'ar';

  const toggleUniversity = (name: string) => {
    if (selectedUniversities.length >= 3 && !selectedUniversities.includes(name)) {
      toast({
        title: t.universities.error,
        description: t.universities.maxUniversities,
        variant: "destructive",
      });
      return;
    }

    setSelectedUniversities((prev) => {
      const isAlreadySelected = prev.includes(name);
      
      toast({
        title: isAlreadySelected ? t.universities.removed : t.universities.added,
        description: name,
        duration: 2000,
      });

      return isAlreadySelected
        ? prev.filter((uni) => uni !== name)
        : [...prev, name];
    });
  };

  const toggleExpanded = (name: string) => {
    setExpandedUniversity(expandedUniversity === name ? null : name);
  };

  const handleStartTest = async () => {
    if (selectedUniversities.length === 0) {
      toast({
        title: t.universities.error,
        description: t.universities.selectUniversity,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: t.universities.testStarting,
        description: t.universities.preparingTest,
      });
    }, 1500);
  };

  return (
    <section 
      id="universities-section"
      className="py-24 relative bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary-color)/10%,transparent)]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary-color) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.1
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              {t.universities.title}
            </h2>
            <School className="w-8 h-8 text-primary" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-muted"
          >
            {t.universities.subtitle}
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <UniversityCardSkeleton />
                </motion.div>
              ))
            ) : (
              partnerUniversities.map((university) => (
                <motion.div
                  key={university.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full"
                >
                  <UniversityCard
                    university={university}
                    isSelected={selectedUniversities.includes(university.name)}
                    expandedUniversity={expandedUniversity}
                    onToggleSelect={toggleUniversity}
                    onToggleExpand={toggleExpanded}
                  />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <StartTestButton
            isLoading={isLoading}
            hasSelectedUniversities={selectedUniversities.length > 0}
            onStartTest={handleStartTest}
            selectedUniversities={selectedUniversities}
            onUpdateSelectedUniversities={setSelectedUniversities}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
