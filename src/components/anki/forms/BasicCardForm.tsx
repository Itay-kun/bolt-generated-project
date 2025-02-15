import React from 'react';
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";

  interface BasicCardFormProps {
    question: string;
    answers: { text: string; isCorrect: boolean }[];
    onChange: (data: { question: string; answers: { text: string; isCorrect: boolean }[] }) => void;
  }

  const BasicCardForm = ({ question, answers, onChange }: BasicCardFormProps) => {
    return (
      <>
        <div className="mb-4">
          <Label htmlFor="question" className="block text-gray-700 text-sm font-bold mb-2">Question</Label>
          <Input
            type="text"
            id="question"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={question}
            onChange={(e) => onChange({ question: e.target.value, answers: [{ text: answers[0].text, isCorrect: true }] })}
          />
        </div>
        <div>
          <Label htmlFor="answer" className="block text-gray-700 text-sm font-bold mb-2">Answer</Label>
          <Input
            type="text"
            id="answer"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={answers[0].text}
            onChange={(e) => onChange({ question: question, answers: [{ text: e.target.value, isCorrect: true }] })}
          />
        </div>
      </>
    );
  };

  export default BasicCardForm;
