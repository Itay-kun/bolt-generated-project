import React from 'react';
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Checkbox } from "@/components/ui/checkbox";

  interface MultipleAnswersCardFormProps {
    question: string;
    answers: { text: string; isCorrect: boolean }[];
    numOptions: number;
    onChange: (data: { question?: string; answers?: { text: string; isCorrect: boolean }[] }) => void;
    setNumOptions: (num: number) => void;
  }

  const MultipleAnswersCardForm = ({ question, answers, numOptions, onChange, setNumOptions }: MultipleAnswersCardFormProps) => {
    return (
      <>
        <div className="mb-4">
          <Label htmlFor="question" className="block text-gray-700 text-sm font-bold mb-2">Question</Label>
          <Input
            type="text"
            id="question"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={question}
            onChange={(e) => onChange({ question: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="numOptions" className="block text-gray-700 text-sm font-bold mb-2">Number of Options (4-10)</Label>
          <Input
            type="number"
            id="numOptions"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={numOptions}
            onChange={(e) => {
              const num = Math.max(4, Math.min(10, parseInt(e.target.value)));
              setNumOptions(num);
              onChange({ answers: Array(num).fill({ text: '', isCorrect: false }) });
            }}
            min="4"
            max="10"
          />
        </div>
        {answers && Array.from({ length: numOptions }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3 mb-2">
            <Label htmlFor={`option${index}`} className="block text-gray-700 text-sm font-bold">Option {index + 1}</Label>
            <Input
              type="text"
              id={`option${index}`}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={answers[index]?.text || ''}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[index] = { ...newAnswers[index], text: e.target.value };
                onChange({ answers: newAnswers });
              }}
            />
            <Checkbox
              id={`isCorrect${index}`}
              checked={answers[index]?.isCorrect || false}
              onCheckedChange={(checked) => {
                const newAnswers = [...answers];
                newAnswers[index] = { ...newAnswers[index], isCorrect: checked };
                onChange({ answers: newAnswers });
              }}
            />
            <Label htmlFor={`isCorrect${index}`} className="block text-gray-700 text-sm font-bold">Correct</Label>
          </div>
        ))}
      </>
    );
  };

  export default MultipleAnswersCardForm;
