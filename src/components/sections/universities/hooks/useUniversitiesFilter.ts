import { useMemo } from "react";
import { universities } from "../types/data";
import { SortDirection, SortOption } from "../types/university";

interface FilterParams {
  searchQuery: string;
  selectedCountry: string;
  selectedPrograms: string[];
  tuitionRange: number[];
  sortBy: SortOption;
  sortDirection: SortDirection;
}

export const useUniversitiesFilter = ({
  searchQuery,
  selectedCountry,
  selectedPrograms,
  tuitionRange,
  sortBy,
  sortDirection
}: FilterParams) => {
  return useMemo(() => {
    const query = searchQuery.toLowerCase();
    let filtered = universities.filter((uni) => {
      const matchesSearch = 
        uni.name.toLowerCase().includes(query) ||
        uni.country.toLowerCase().includes(query) ||
        uni.description.toLowerCase().includes(query);
      
      const matchesCountry = selectedCountry === "all" || uni.country === selectedCountry;
      
      const matchesPrograms = selectedPrograms.length === 0 || 
        (uni.examStructure.sharedExams?.programs || [])
          .some(program => selectedPrograms.includes(program));
      
      const matchesTuition = !uni.tuitionFees?.amount || 
        (uni.tuitionFees.amount >= tuitionRange[0] && 
         uni.tuitionFees.amount <= tuitionRange[1]);

      return matchesSearch && matchesCountry && matchesPrograms && matchesTuition;
    });

    // Sort the filtered universities
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "country":
          comparison = a.country.localeCompare(b.country);
          break;
        case "tuition":
          const aAmount = a.tuitionFees?.amount || 0;
          const bAmount = b.tuitionFees?.amount || 0;
          comparison = aAmount - bAmount;
          break;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [searchQuery, selectedCountry, selectedPrograms, tuitionRange, sortBy, sortDirection]);
};
