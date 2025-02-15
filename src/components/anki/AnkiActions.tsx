import React from 'react';
  import { Button } from "@/components/ui/button";

  interface AnkiActionsProps {
    setPreviewCard: (card: any) => void;
    handleEditCard: (card: any) => void;
    handleDeleteCard: (cardId: string) => void;
    card: any;
  }

  const AnkiActions = ({ setPreviewCard, handleEditCard, handleDeleteCard, card }: AnkiActionsProps) => {
    return (
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
    );
  };

  export default AnkiActions;
