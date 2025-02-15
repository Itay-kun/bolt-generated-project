import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HandshakeIcon, CheckCircle } from 'lucide-react';
import EarlyAccessForm from '@/components/EarlyAccessForm';

const CollaborationSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <HandshakeIcon className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-text mb-4">{t.collaboration.title}</h2>
          <p className="text-xl text-text-muted mb-8">{t.collaboration.subtitle}</p>
          <p className="max-w-3xl mx-auto text-text-muted">{t.collaboration.description}</p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-text mb-6">{t.collaboration.benefits.title}</h3>
          <ul className="space-y-4">
            {t.collaboration.benefits.items.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-text-muted">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background rounded-2xl p-8 shadow-lg border border-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
          <div className="relative space-y-6">
            <h3 className="text-2xl font-semibold text-text text-center">{t.collaboration.contact}</h3>
            <EarlyAccessForm 
              trigger={
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t.collaboration.cta}
                </Button>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollaborationSection;
