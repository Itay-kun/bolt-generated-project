import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { GraduationCap, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';

  return (
    <footer 
      className="bg-gradient-to-b from-white to-gray-50 border-t border-border mt-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6 group">
              <GraduationCap className="w-10 h-10 text-primary transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Med School In
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-text mb-6 text-lg">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-text-muted hover:text-primary text-sm transition-colors hover:translate-x-1 inline-flex items-center">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#universities" className="text-text-muted hover:text-primary text-sm transition-colors hover:translate-x-1 inline-flex items-center">
                  {t.nav.universities}
                </a>
              </li>
              <li>
                <a href="#team" className="text-text-muted hover:text-primary text-sm transition-colors hover:translate-x-1 inline-flex items-center">
                  {t.nav.team}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-text-muted hover:text-primary text-sm transition-colors hover:translate-x-1 inline-flex items-center">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-text mb-6 text-lg">{t.footer.legal}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-text-muted hover:text-primary text-sm transition-colors hover:translate-x-1 inline-flex items-center">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-text-muted hover:text-primary text-sm transition-colors hover:translate-x-1 inline-flex items-center">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-text mb-6 text-lg">{t.footer.contact}</h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact@medschoolin.com" 
                className="text-text-muted hover:text-primary text-sm transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                contact@medschoolin.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-text-muted mb-4 max-w-3xl mx-auto">
              {t.footer.disclaimer}
            </p>
            <p className="text-sm text-text-muted flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Med School In. {t.footer.rights}
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
