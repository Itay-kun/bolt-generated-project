import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { University } from "../../universities/types";

interface UniversityHeaderProps {
  university: University;
  t: any;
}

const UniversityHeader = ({ university, t }: UniversityHeaderProps) => {
  return (
    <>
      <div className="mb-8">
        <Link to="/universities">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.universities.backToList}
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <img
            src={university.logo}
            alt={university.name}
            className="w-24 h-24 object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold">{university.name}</h1>
            <p className="text-text-muted flex items-center gap-2 mt-2">
              <Building2 className="w-4 h-4" />
              {university.location}
            </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg">{university.description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default UniversityHeader;
