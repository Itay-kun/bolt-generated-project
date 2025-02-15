import React from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface AdvancedFiltersProps {
  programs: string[];
  selectedPrograms: string[];
  setSelectedPrograms: (programs: string[]) => void;
  tuitionRange: number[];
  setTuitionRange: (range: number[]) => void;
}

const AdvancedFilters = ({
  programs,
  selectedPrograms,
  setSelectedPrograms,
  tuitionRange,
  setTuitionRange,
}: AdvancedFiltersProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          <Filter className="w-4 h-4 mr-2" />
          Advanced Filters
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Universities</SheetTitle>
          <SheetDescription>
            Set your preferences to find the perfect university.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Programs</h3>
            {programs.map((program) => (
              <div key={program} className="flex items-center space-x-2">
                <Checkbox
                  id={program}
                  checked={selectedPrograms.includes(program)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedPrograms([...selectedPrograms, program]);
                    } else {
                      setSelectedPrograms(selectedPrograms.filter(p => p !== program));
                    }
                  }}
                />
                <label
                  htmlFor={program}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {program}
                </label>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Tuition Range (€)</h3>
            <Slider
              defaultValue={[0, 50000]}
              max={50000}
              step={1000}
              value={tuitionRange}
              onValueChange={setTuitionRange}
            />
            <div className="flex justify-between text-sm text-text-muted">
              <span>€{tuitionRange[0]}</span>
              <span>€{tuitionRange[1]}</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdvancedFilters;
