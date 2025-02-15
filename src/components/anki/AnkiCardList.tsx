import React from 'react';
  import { Button } from "@/components/ui/button";
  import CardPreviewComponent from './CardPreview';

  interface AnkiCardListProps {
    cards: any[];
    setPreviewCard: (card: any) => void;
    handleEditCard: (card: any) => void;
    handleDeleteCard: (cardId: string) => void;
  }

  const AnkiCardList = ({ cards, setPreviewCard, handleEditCard, handleDeleteCard }: AnkiCardListProps) => {
    return (
      <>
        {cards && cards.length > 0 ? (
          cards.map(card => (
            <div key={card.id} className="bg-white p-4 rounded-lg shadow-md relative">
              <p>Type: {card.type}</p>
              {card.type === 'multipleAnswers' && card.answers && (
                <ul>
                  {card.answers.map((answer, index) => (
                    <li key={index}>
                      {answer.text} ({answer.isCorrect ? 'Correct' : 'Incorrect'})
                    </li>
                  ))}
                </ul>
              )}
              {card.type === 'basic' && (
                <p>Question: {card.question}</p>
                {card.answers && card.answers[0] && <p>Answer: {card.answers[0].text}</p>}
              )}
              <div className="flex justify-end mt-4">
                <Button 
                  onClick={() => setPreviewCard(card)}
                  className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Preview
                </Button>
                <Button 
                  onClick={() => handleEditCard(card)}
                  className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </Button>
                <Button 
                  onClick={() => handleDeleteCard(card.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No cards yet. Create one!</p>
        )}
      </>
    );
  };

  export default AnkiCardList;
