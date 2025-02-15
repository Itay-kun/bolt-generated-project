import React from "react";
import { CheckCircle2, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import EarlyAccessForm from "@/components/EarlyAccessForm";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const metrics = [
    {
      icon: School,
      label: t.hero.perks.universities,
    },
    {
      icon: CheckCircle2,
      label: t.hero.perks.examLike,
    },
    {
      icon: CheckCircle2,
      label: t.hero.perks.realQuestions,
    }
  ];

  const universityLogos = [
    { 
      name: "LSMU", 
      logo: "/lovable-uploads/00ae8b3c-78b4-4c97-81f7-8239f960119a.png",
      color: "text-primary",
      delay: 0.1
    },
    { 
      name: "Vilnius", 
      logo: "/lovable-uploads/566612bc-8e15-4557-8939-e1a2483408ed.png",
      color: "text-primary",
      delay: 0.2
    },
    { 
      name: "UPJS", 
      logo: "/lovable-uploads/591fabb9-e05c-4523-91c7-eb573a86af39.png",
      color: "text-primary",
      delay: 0.3
    },
    { 
      name: "Zagreb", 
      logo: "/lovable-uploads/70058470-993f-45a2-b26b-fe8369268dd5.png",
      color: "text-primary",
      delay: 0.4
    }
  ];

  return (
    <section className="pt-8 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots bg-[length:20px_20px] opacity-5 animate-pulse" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6 mt-2 md:mt-4"
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium bg-primary/5 text-primary ring-1 ring-primary/20">
              {t.hero.badge}
            </span>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-text">
              {t.hero.title}
            </h1>
            
            <p className="text-base md:text-lg text-text-muted max-w-lg">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <EarlyAccessForm 
                trigger={
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white rounded-full px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.earlyAccess.submit}
                  </Button>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base border-primary text-primary hover:bg-primary/5"
                onClick={() => {
                  const universitiesSection = document.getElementById('universities-section');
                  if (universitiesSection) {
                    universitiesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t.universities.startTest}
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-6 md:pt-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-1.5 md:gap-2"
                >
                  {React.createElement(metric.icon, { 
                    className: "w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0"
                  })}
                  <span className="text-xs md:text-sm text-text-muted whitespace-nowrap">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-30 blur-3xl -z-10" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl" />
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative p-4 md:p-6">
              {universityLogos.map((uni, index) => (
                <motion.div
                  key={uni.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: uni.delay,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className="aspect-square rounded-xl md:rounded-2xl bg-white/90 p-3 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md border border-white/20">
                    <div className="w-full h-full relative flex items-center justify-center">
                      <motion.img
                        src={uni.logo}
                        alt={`${uni.name} logo`}
                        className={`w-full h-full object-contain ${uni.color} transition-all duration-300 group-hover:scale-110`}
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-xl md:rounded-2xl group-hover:ring-primary/20 transition-all duration-300" />
                    </div>
                  </div>
                  
                  <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            <div className="absolute -inset-4 bg-gradient-pattern opacity-50 -z-10 rounded-3xl blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-3xl mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
