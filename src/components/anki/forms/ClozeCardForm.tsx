import React from 'react';
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";

  interface ClozeCardFormProps {
    clozeText: string;
    onChange: (clozeText: string) => void;
  }

  const ClozeCardForm = ({ clozeText, onChange }: ClozeCardFormProps) => {
    return (
      <div>
        <Label htmlFor="clozeText" className="block text-gray-700 text-sm font-bold mb-2">Cloze Text (use [...] for blanks)</Label>
        <Input
          type="text"
          id="clozeText"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={clozeText}
          onChange={(e) => onChange(e.target.value)}
        />
        <p className="text-sm text-gray-500">Example: The capital of France is [Paris].</p>
      </div>
    );
  };

  export default ClozeCardForm;
