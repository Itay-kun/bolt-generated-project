import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import EarlyAccessForm from "@/components/EarlyAccessForm";

const CTASection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 relative bg-gradient-to-t from-transparent via-primary/5 to-transparent">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {t.cta.title}
          </h2>
          <p className="text-text-muted text-lg">
            {t.cta.subtitle}
          </p>
          <EarlyAccessForm 
            trigger={
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white flex items-center gap-2 rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                {t.cta.button}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${language === 'he' ? 'rotate-180' : ''}`} />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
