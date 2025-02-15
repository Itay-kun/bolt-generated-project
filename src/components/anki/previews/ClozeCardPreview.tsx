import React, { useState } from 'react';
  import { Card } from '@/lib/Card';
  import { Button } from "@/components/ui/button";

  interface ClozeCardProps {
    card: Card;
  }

  export const ClozeCardPreview = ({ card }: ClozeCardProps) => {
    const [showAnswer, setShowAnswer] = useState(false);
    
    const renderClozeText = () => {
      const parts = card.clozeText.split(/\[.*?\]/);
      const answers = card.clozeText.match(/\[.*?\]/g)?.map(match => match.slice(1, -1)) || [];
      
      return (
        <div className="space-y-2">
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {answers[index] && (
                showAnswer ? (
                  <span className="bg-yellow-100 px-2 py-1 rounded">{answers[index]}</span>
                ) : (
                  <Button 
                    variant="outline"
                    onClick={() => setShowAnswer(true)}
                    className="mx-2"
                  >
                    [...]
                  </Button>
                )
              )}
            </React.Fragment>
          ))}
        </div>
      );
    };

    return (
      <div className="p-4">
        <div className="space-y-4">
          {renderClozeText()}
          {!showAnswer && (
            <Button 
              onClick={() => setShowAnswer(true)}
              className="mt-4"
            >
              Show All Answers
            </Button>
          )}
        </div>
      </div>
    );
  };
