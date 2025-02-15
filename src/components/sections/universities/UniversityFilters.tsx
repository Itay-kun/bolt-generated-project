import React from "react";
import SearchBar from "./filters/SearchBar";
import CountryFilter from "./filters/CountryFilter";
import AdvancedFilters from "./filters/AdvancedFilters";
import SortControls from "./filters/SortControls";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { SortDirection, SortOption } from "./types";
import SelectedUniversityChips from "./filters/SelectedUniversityChips";

interface UniversityFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  countries: string[];
  programs: string[];
  selectedPrograms: string[];
  setSelectedPrograms: (programs: string[]) => void;
  tuitionRange: number[];
  setTuitionRange: (range: number[]) => void;
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  sortDirection: SortDirection;
  setSortDirection: (direction: SortDirection) => void;
  selectedUniversities: string[];
  onToggleSelect: (name: string) => void;
  onCompare: () => void;
  isRTL: boolean;
}

const UniversityFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  countries,
  programs,
  selectedPrograms,
  setSelectedPrograms,
  tuitionRange,
  setTuitionRange,
  sortBy,
  setSortBy,
  sortDirection,
  setSortDirection,
  selectedUniversities,
  onToggleSelect,
  onCompare,
  isRTL,
}: UniversityFiltersProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isRTL={isRTL}
        />
        
        <CountryFilter
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          countries={countries}
        />

        <AdvancedFilters
          programs={programs}
          selectedPrograms={selectedPrograms}
          setSelectedPrograms={setSelectedPrograms}
          tuitionRange={tuitionRange}
          setTuitionRange={setTuitionRange}
        />

        <SortControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          isRTL={isRTL}
        />

        {selectedUniversities.length > 1 && (
          <Button onClick={onCompare} className="flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4" />
            {isRTL ? "השווה אוניברסיטאות" : "Compare Universities"}
          </Button>
        )}
      </div>

      <SelectedUniversityChips
        selectedUniversities={selectedUniversities}
        onToggleSelect={onToggleSelect}
      />
    </div>
  );
};

export default UniversityFilters;
