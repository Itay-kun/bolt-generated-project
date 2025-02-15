import React from "react";
import { ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SortOption, SortDirection } from "../types";

interface SortControlsProps {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  sortDirection: SortDirection;
  setSortDirection: (direction: SortDirection) => void;
  isRTL: boolean;
}

const SortControls = ({
  sortBy,
  setSortBy,
  sortDirection,
  setSortDirection,
  isRTL,
}: SortControlsProps) => {
  const toggleDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="flex gap-2 items-center">
      <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={isRTL ? "מיין לפי..." : "Sort by..."} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">{isRTL ? "שם" : "Name"}</SelectItem>
          <SelectItem value="tuition">{isRTL ? "שכר לימוד" : "Tuition"}</SelectItem>
          <SelectItem value="country">{isRTL ? "מדינה" : "Country"}</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon" onClick={toggleDirection}>
        <ArrowUpDown className={`h-4 w-4 ${sortDirection === 'desc' ? 'rotate-180' : ''}`} />
      </Button>
    </div>
  );
};

export default SortControls;
