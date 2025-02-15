import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings2, ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ComparisonField } from "./ComparisonFields";

interface ComparisonHeaderProps {
  language: string;
  isRTL: boolean;
  t: any;
  selectedFields: string[];
  comparisonFields: ComparisonField[];
  toggleField: (fieldId: string) => void;
}

const ComparisonHeader: React.FC<ComparisonHeaderProps> = ({
  language,
  isRTL,
  t,
  selectedFields,
  comparisonFields,
  toggleField
}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-20 left-0 right-0 z-10 bg-white/80 backdrop-blur-md shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/universities')}
            className="flex items-center gap-2"
          >
            {isRTL ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            {t.universities.backToList}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
              >
                <Settings2 className="w-4 h-4" />
                {t.universities.customizeComparison}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{t.universities.selectFields}</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[80vh] mt-6">
                <div className="space-y-4 px-2">
                  {comparisonFields.map(field => (
                    <div key={field.id} className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                      <Checkbox 
                        id={field.id}
                        checked={selectedFields.includes(field.id)}
                        onCheckedChange={() => toggleField(field.id)}
                      />
                      <label
                        htmlFor={field.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default ComparisonHeader;
