import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isRTL: boolean;
}

const SearchBar = ({ searchQuery, setSearchQuery, isRTL }: SearchBarProps) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
      <Input
        type="text"
        placeholder={isRTL ? "חפש לפי שם, מדינה או תיאור..." : "Search by name, country, or description..."}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SearchBar;
