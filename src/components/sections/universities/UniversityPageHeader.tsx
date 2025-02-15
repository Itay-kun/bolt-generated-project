import React from "react";
import { University } from "lucide-react";
import { motion } from "framer-motion";

interface UniversityPageHeaderProps {
  title: string;
  subtitle: string;
}

const UniversityPageHeader = ({ title, subtitle }: UniversityPageHeaderProps) => {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3">
        <University className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold text-text">
          {title}
        </h1>
      </div>
      <p className="text-text-muted max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default UniversityPageHeader;
