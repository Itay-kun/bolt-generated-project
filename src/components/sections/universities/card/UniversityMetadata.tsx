import React from "react";
import { Building2, Globe } from "lucide-react";

interface UniversityMetadataProps {
  location: string;
  country: string;
}

const UniversityMetadata = ({ location, country }: UniversityMetadataProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Building2 className="w-4 h-4" />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-text-muted">
        <Globe className="w-4 h-4" />
        <span>{country}</span>
      </div>
    </div>
  );
};

export default UniversityMetadata;
