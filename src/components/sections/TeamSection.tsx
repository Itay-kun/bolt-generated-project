import React from "react";
import { motion } from "framer-motion";
import { BookText, Brain, Code, LightbulbIcon, Stethoscope, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  title: string;
  expertise: string[];
  icons: typeof Stethoscope[];
}

interface TeamRoles {
  medical: {
    name: string;
    title: string;
    expertise: string[];
  };
  research: {
    name: string;
    title: string;
    expertise: string[];
  };
  developer: {
    name: string;
    title: string;
    expertise: string[];
  };
}

const TeamSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isRTL = language === 'he' || language === 'ar';

  const team: TeamMember[] = [
    {
      name: (t.team.roles as TeamRoles).medical.name,
      title: (t.team.roles as TeamRoles).medical.title,
      expertise: (t.team.roles as TeamRoles).medical.expertise,
      icons: [Stethoscope, Brain, Target, BookText],
    },
    {
      name: (t.team.roles as TeamRoles).research.name,
      title: (t.team.roles as TeamRoles).research.title,
      expertise: (t.team.roles as TeamRoles).research.expertise,
      icons: [Target, BookText, Brain, LightbulbIcon],
    },
    {
      name: (t.team.roles as TeamRoles).developer.name,
      title: (t.team.roles as TeamRoles).developer.title,
      expertise: (t.team.roles as TeamRoles).developer.expertise,
      icons: [Code, Brain, Target, LightbulbIcon],
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4"
          >
            {t.team.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-lg max-w-3xl mx-auto"
          >
            {t.team.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10",
                "hover:border-primary/20 transition-all duration-300"
              )}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-text mb-2">{member.name}</h3>
                  <div className="h-0.5 w-12 bg-primary/20 mx-auto mb-3" />
                  <p className="text-primary/80 font-medium">{member.title}</p>
                </div>
                <ul className={cn(
                  "mt-6 space-y-3",
                  isRTL ? "text-right" : "text-left"
                )}>
                  {member.expertise.map((exp, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      {React.createElement(member.icons[i % member.icons.length], { 
                        className: "w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300",
                      })}
                      <span className="text-text-muted text-sm group-hover:text-text transition-colors duration-300">
                        {exp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
