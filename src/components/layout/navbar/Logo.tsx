import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface LogoProps {
  onClick: () => void;
}

export const Logo = ({ onClick }: LogoProps) => {
  return (
    <Link to="/">
      <motion.div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
      >
        <GraduationCap className="w-8 h-8 text-primary" />
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Med School In
        </span>
      </motion.div>
    </Link>
  );
};
