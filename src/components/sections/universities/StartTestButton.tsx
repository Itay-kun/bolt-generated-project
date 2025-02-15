import React from "react";
import { Button } from "@/components/ui/button";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { useToast } from "@/hooks/use-toast";

interface StartTestButtonProps {
  isLoading: boolean;
  hasSelectedUniversities: boolean;
  onStartTest: () => Promise<void>;
  selectedUniversities: string[];
  onUpdateSelectedUniversities: (universities: string[]) => void;
}

const StartTestButton = ({ 
  isLoading, 
  hasSelectedUniversities, 
  onStartTest,
  selectedUniversities,
  onUpdateSelectedUniversities
}: StartTestButtonProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();

  const handleStartTest = async () => {
    try {
      await onStartTest();
      toast({
        title: t.universities.testStarting,
        description: t.universities.preparingTest,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        duration: 3000,
      });
    }
  };

  const buttonText = isLoading 
    ? t.universities.loading
    : t.universities.startTest;

  if (hasSelectedUniversities) {
    return (
      <EarlyAccessForm
        trigger={
          <Button
            size="lg"
            className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            disabled={isLoading}
          >
            {buttonText}
          </Button>
        }
        onSuccess={handleStartTest}
        selectedUniversities={selectedUniversities}
        onUpdateSelectedUniversities={onUpdateSelectedUniversities}
      />
    );
  }

  return (
    <Button
      size="lg"
      className="w-full md:w-auto bg-primary/50 cursor-not-allowed text-white rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold"
      disabled={true}
    >
      {buttonText}
    </Button>
  );
};

export default StartTestButton;
