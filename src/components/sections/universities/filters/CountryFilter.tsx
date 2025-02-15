import React from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountryFilterProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  countries: string[];
}

const CountryFilter = ({ selectedCountry, setSelectedCountry, countries }: CountryFilterProps) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-48">
      <Select value={selectedCountry} onValueChange={setSelectedCountry}>
        <SelectTrigger>
          <Globe className="w-4 h-4 mr-2" />
          <SelectValue placeholder="Filter by country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country} value={country}>
              {country === "all" ? "All Countries" : country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountryFilter;
