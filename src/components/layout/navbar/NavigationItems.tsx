import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Link } from "react-router-dom";

interface NavigationItemsProps {
  onItemClick: (sectionId: string) => void;
}

export const NavigationItems = ({ onItemClick }: NavigationItemsProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Link to="/">
        <motion.button 
          className="relative text-text-muted hover:text-primary transition-colors px-3 py-2 rounded-md whitespace-nowrap text-right story-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.button>
      </Link>
      <motion.button 
        onClick={() => onItemClick('features')} 
        className="relative text-text-muted hover:text-primary transition-colors px-3 py-2 rounded-md whitespace-nowrap text-right story-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t.nav.features}
      </motion.button>
      <Link to="/universities">
        <motion.button 
          className="relative text-text-muted hover:text-primary transition-colors px-3 py-2 rounded-md whitespace-nowrap text-right story-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.nav.universities}
        </motion.button>
      </Link>
      <motion.button 
        onClick={() => onItemClick('team')} 
        className="relative text-text-muted hover:text-primary transition-colors px-3 py-2 rounded-md whitespace-nowrap text-right story-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t.nav.team}
      </motion.button>
      <motion.button 
        onClick={() => onItemClick('collaboration')} 
        className="relative text-text-muted hover:text-primary transition-colors px-3 py-2 rounded-md whitespace-nowrap text-right story-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t.nav.collaboration}
      </motion.button>
      <motion.button 
        onClick={() => onItemClick('faq')} 
        className="relative text-text-muted hover:text-primary transition-colors px-3 py-2 rounded-md whitespace-nowrap text-right story-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t.nav.faq}
      </motion.button>
    </>
  );
};
