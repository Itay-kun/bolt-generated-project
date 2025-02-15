import React from "react";
import { motion } from "framer-motion";
import { School } from "lucide-react";
import { logoVariants } from "@/lib/animations";

interface UniversityLogoProps {
  logo: string;
  name: string;
}

const UniversityLogo = ({ logo, name }: UniversityLogoProps) => {
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError || !logo) {
    return (
      <div className="relative w-full h-32 rounded-xl bg-white shadow-sm flex items-center justify-center p-4 overflow-hidden group">
        <School className="w-16 h-16 text-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-32 rounded-xl bg-white shadow-sm flex items-center justify-center p-4 overflow-hidden group">
      <motion.img
        src={logo}
        alt={`${name} logo`}
        width={200}
        height={128}
        className="w-auto h-full max-w-[80%] object-contain filter contrast-125 transition-all duration-300 group-hover:scale-110 group-hover:contrast-150"
        loading="lazy"
        onError={handleError}
        {...logoVariants}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default UniversityLogo;
