import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { SortOption, SortDirection } from "@/components/sections/universities/types";
import UniversityCard from "@/components/sections/universities/UniversityCard";
import { useToast } from "@/components/ui/use-toast";
import UniversityPageHeader from "@/components/sections/universities/UniversityPageHeader";
import UniversityFilters from "@/components/sections/universities/UniversityFilters";
import { useUniversitiesFilter } from "@/components/sections/universities/hooks/useUniversitiesFilter";
import { universities } from "@/components/sections/universities/types/data";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";

const UniversitiesIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);
  const [expandedUniversity, setExpandedUniversity] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [tuitionRange, setTuitionRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const navigate = useNavigate();
  const isRTL = language === 'he' || language === 'ar';

  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(universities.map(uni => uni.country))];
    return ["all", ...uniqueCountries];
  }, []);

  const programs = useMemo(() => [
    "Medicine",
    "Dentistry",
    "Veterinary Medicine"
  ], []);

  const filteredUniversities = useUniversitiesFilter({
    searchQuery,
    selectedCountry,
    selectedPrograms,
    tuitionRange,
    sortBy,
    sortDirection
  });

  const handleToggleSelect = (name: string) => {
    setSelectedUniversities((prev) => {
      const isSelected = prev.includes(name);
      if (isSelected) {
        toast({
          title: t.universities.removed,
          description: name,
        });
        return prev.filter((uni) => uni !== name);
      } else if (prev.length < 3) {
        toast({
          title: t.universities.added,
          description: name,
        });
        return [...prev, name];
      } else {
        toast({
          title: isRTL ? "מקסימום 3 אוניברסיטאות להשוואה" : "Maximum 3 universities for comparison",
          description: isRTL ? "אנא הסר אוניברסיטה לפני הוספת חדשה" : "Please remove a university before adding a new one",
          variant: "destructive",
        });
        return prev;
      }
    });
  };

  const handleCompare = () => {
    if (selectedUniversities.length > 1) {
      const queryString = selectedUniversities.join(',');
      navigate(`/universities/compare?unis=${queryString}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-pattern flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <UniversityPageHeader 
              title={t.universities.title}
              subtitle={t.universities.subtitle}
            />

            <UniversityFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              countries={countries}
              programs={programs}
              selectedPrograms={selectedPrograms}
              setSelectedPrograms={setSelectedPrograms}
              tuitionRange={tuitionRange}
              setTuitionRange={setTuitionRange}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
              selectedUniversities={selectedUniversities}
              onToggleSelect={handleToggleSelect}
              onCompare={handleCompare}
              isRTL={isRTL}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredUniversities.length > 0 ? (
                filteredUniversities.map((university) => (
                  <UniversityCard
                    key={university.name}
                    university={university}
                    isSelected={selectedUniversities.includes(university.name)}
                    expandedUniversity={expandedUniversity}
                    onToggleSelect={handleToggleSelect}
                    onToggleExpand={setExpandedUniversity}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-text-muted">
                    {isRTL ? "לא נמצאו אוניברסיטאות התואמות את החיפוש" : "No universities found matching your search"}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UniversitiesIndex;
