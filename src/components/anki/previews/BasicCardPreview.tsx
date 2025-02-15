import { Card } from '@/lib/Card';

  interface BasicCardProps {
    card: Card;
  }

  export const BasicCardPreview = ({ card }: BasicCardProps) => {
    return (
      <div className="p-4 space-y-4">
        <div className="font-medium">Question: {card.question}</div>
        <div>Answer: {card.answers[0].text}</div>
      </div>
    );
  };
