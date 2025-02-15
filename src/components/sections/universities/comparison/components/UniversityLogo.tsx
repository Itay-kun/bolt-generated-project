import React from "react";
import { motion } from "framer-motion";

interface UniversityLogoProps {
  logo: string;
  name: string;
  size?: "sm" | "lg";
}

const UniversityLogo: React.FC<UniversityLogoProps> = ({ logo, name, size = "lg" }) => {
  const dimensions = size === "lg" ? "w-20 h-20" : "w-10 h-10";
  const imgDimensions = size === "lg" ? "w-16 h-16" : "w-8 h-8";

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${dimensions} bg-white rounded-lg shadow-md flex items-center justify-center p-3 hover:shadow-lg transition-shadow`}
    >
      <img 
        src={logo} 
        alt={name} 
        className={`${imgDimensions} object-contain`}
      />
    </motion.div>
  );
};

export default UniversityLogo;
