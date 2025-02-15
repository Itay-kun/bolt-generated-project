import { useState } from 'react';
  import { Card } from '@/lib/Card';
  import { Checkbox } from "@/components/ui/checkbox";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";

  interface MultipleAnswersCardProps {
    card: Card;
  }

  export const MultipleAnswersCardPreview = ({ card }: MultipleAnswersCardProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, boolean>>({});
    const [showResults, setShowResults] = useState(false);

    const toggleAnswer = (index: number) => {
      setSelectedAnswers(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    const checkAnswer = () => {
      setShowResults(true);
    };

    return (
      <div className="p-4 space-y-4">
        <div className="font-medium">Question: {card.question}</div>
        <div className="space-y-2">
          {card.answers && card.answers.map((answer, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox
                id={`answer-${index}`}
                checked={selectedAnswers[index] || false}
                onCheckedChange={() => toggleAnswer(index)}
                disabled={showResults}
              />
              <Label 
                htmlFor={`answer-${index}`}
                className="text-sm"
              >
                {answer.text}
                {showResults && (
                  <span className={answer.isCorrect ? "text-green-600 ml-2" : "text-red-600 ml-2"}>
                    {answer.isCorrect ? "✓" : "✗"}
                  </span>
                )}
              </Label>
            </div>
          ))}
        </div>
        {!showResults && (
          <Button onClick={checkAnswer} className="mt-4">
            Check Answers
          </Button>
        )}
      </div>
    );
  };
