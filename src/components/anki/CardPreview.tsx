import { BasicCardPreview } from './previews/BasicCardPreview';
  import { ClozeCardPreview } from './previews/ClozeCardPreview';
  import { MultipleAnswersCardPreview } from './previews/MultipleAnswersCardPreview';
  import { Card } from '@/lib/Card';

  interface CardPreviewProps {
    card: Card;
  }

  const CardPreview = ({ card }: CardPreviewProps) => {
    switch (card.type) {
      case 'basic':
        return <BasicCardPreview card={card} />;
      case 'cloze':
        return <ClozeCardPreview card={card} />;
      case 'multipleAnswers':
        return <MultipleAnswersCardPreview card={card} />;
      case 'imageOcclusion':
        return <div className="p-4">Image Occlusion card preview is not implemented yet.</div>;
      default:
        return <div className="p-4">Unsupported card type.</div>;
    }
  };

  export default CardPreview;
