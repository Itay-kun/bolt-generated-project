import React from "react";
import { MapPin, School, Hospital, Globe, Home } from "lucide-react";

interface UniversityDetailsProps {
  location: string;
  overview: string;
  teachingHospitals: string;
  internationalRecognition: string;
  studentLife: string;
}

const UniversityDetails = ({
  location,
  overview,
  teachingHospitals,
  internationalRecognition,
  studentLife,
}: UniversityDetailsProps) => {
  return (
    <div className="space-y-2 sm:space-y-3">
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1" />
        <p className="text-xs sm:text-sm md:text-base text-text-muted">{location}</p>
      </div>
      
      <div className="flex items-start gap-2">
        <School className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1" />
        <p className="text-xs sm:text-sm md:text-base text-text-muted">{overview}</p>
      </div>
      
      <div className="flex items-start gap-2">
        <Hospital className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1" />
        <p className="text-xs sm:text-sm md:text-base text-text-muted">{teachingHospitals}</p>
      </div>
      
      <div className="flex items-start gap-2">
        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1" />
        <p className="text-xs sm:text-sm md:text-base text-text-muted">{internationalRecognition}</p>
      </div>
      
      <div className="flex items-start gap-2">
        <Home className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-1" />
        <p className="text-xs sm:text-sm md:text-base text-text-muted">{studentLife}</p>
      </div>
    </div>
  );
};

export default UniversityDetails;
