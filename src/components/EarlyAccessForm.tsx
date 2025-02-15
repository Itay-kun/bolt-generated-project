import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { universities } from "@/components/sections/universities/types";

interface EarlyAccessFormProps {
  trigger: React.ReactNode;
  onSuccess?: () => void;
  selectedUniversities?: string[];
  onUpdateSelectedUniversities?: (universities: string[]) => void;
}

const EarlyAccessForm = ({ 
  trigger, 
  onSuccess, 
  selectedUniversities = [], 
  onUpdateSelectedUniversities 
}: EarlyAccessFormProps) => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];
  const [localSelectedUniversities, setLocalSelectedUniversities] = useState<string[]>(selectedUniversities);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    console.log("Form submission:", {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      universities: localSelectedUniversities
    });

    toast({
      title: t.earlyAccess.successTitle,
      description: t.earlyAccess.successDescription,
    });
    setOpen(false);
    onSuccess?.();
  };

  const handleUniversityToggle = (universityName: string) => {
    setLocalSelectedUniversities(prev => {
      const newSelection = prev.includes(universityName)
        ? prev.filter(uni => uni !== universityName)
        : [...prev, universityName];
      
      onUpdateSelectedUniversities?.(newSelection);
      return newSelection;
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent 
        className={`sm:max-w-[500px] p-4 sm:p-6 mx-4 ${isMobile ? 'w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto' : ''}`}
        aria-label={t.earlyAccess.title}
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4 text-text">
            {t.earlyAccess.title}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-text">
                {t.earlyAccess.fullName}
              </Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                required 
                aria-required="true"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20"
                autoComplete="name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-text">
                {t.earlyAccess.email}
              </Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                aria-required="true"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20"
                autoComplete="email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-text">
                {t.earlyAccess.phone}
              </Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                aria-required="true"
                className="w-full p-2 sm:p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20"
                autoComplete="tel"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium text-text">
              {t.universities.title}
            </Label>
            <ScrollArea className="h-[150px] sm:h-[200px] w-full rounded-lg border border-gray-200 p-3 sm:p-4">
              <div className="space-y-2">
                {universities.map((university) => (
                  <div key={university.name} className="flex items-center space-x-3 rounded-lg p-2 hover:bg-gray-50">
                    <Checkbox
                      id={`university-${university.name}`}
                      checked={localSelectedUniversities.includes(university.name)}
                      onCheckedChange={() => handleUniversityToggle(university.name)}
                      className="h-4 w-4 sm:h-5 sm:w-5 rounded border-gray-300"
                      aria-label={`Select ${university.name}`}
                    />
                    <Label 
                      htmlFor={`university-${university.name}`}
                      className="cursor-pointer text-sm text-text hover:text-primary transition-colors"
                    >
                      {university.name}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white py-2.5 sm:py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-primary/20"
            aria-label={t.earlyAccess.submit}
          >
            {t.earlyAccess.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessForm;
