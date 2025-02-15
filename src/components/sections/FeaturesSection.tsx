import React, { useState } from "react";
import { Brain, FileText, BarChart3, Timer, GraduationCap, CalendarClock, MessageSquare, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: FileText,
    translationKey: "examSimulations",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    translationKey: "analytics",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: CalendarClock,
    translationKey: "studyPlans",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: MessageSquare,
    translationKey: "qaForum",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Brain,
    translationKey: "subjects",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    translationKey: "universities",
    gradient: "from-primary to-secondary"
  },
  {
    icon: GraduationCap,
    translationKey: "learning",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: Timer,
    translationKey: "trial",
    gradient: "from-violet-500 to-purple-500"
  }
];

const FeatureCard = ({ feature, index, language, t, isRTL }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const translationItem = t?.items?.[feature.translationKey];
  
  if (!translationItem) {
    console.error(`Translation missing for key: ${feature.translationKey}`);
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-xl border border-primary/10 bg-white/5 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="space-y-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-start"
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} 
              flex items-center justify-center shadow-lg
              transition-transform duration-300 group-hover:scale-105`}
            >
              {React.createElement(feature.icon, { 
                className: "w-6 h-6 text-white" 
              })}
            </div>
            <h3 className="text-lg font-semibold text-text flex-grow">
              {translationItem.title}
            </h3>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300" />
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
              <div className="pt-4 space-y-2">
                <p className="text-text-muted text-sm leading-relaxed">
                  {translationItem.description}
                </p>
                {translationItem.bullets && (
                  <ul className="mt-2 space-y-1">
                    {translationItem.bullets.map((bullet: string, i: number) => (
                      <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                        <span className="text-primary text-lg leading-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].features;
  const isRTL = language === 'he' || language === 'ar';

  if (!t) {
    console.error('Features translations missing');
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            {t.title}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
              language={language}
              t={t}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
