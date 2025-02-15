import React from "react";

interface SelectedUniversityChipsProps {
  selectedUniversities: string[];
  onToggleSelect: (name: string) => void;
}

const SelectedUniversityChips = ({ selectedUniversities, onToggleSelect }: SelectedUniversityChipsProps) => {
  if (selectedUniversities.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {selectedUniversities.map((name) => (
        <div
          key={name}
          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
        >
          <span>{name}</span>
          <button
            onClick={() => onToggleSelect(name)}
            className="hover:text-primary-dark"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedUniversityChips;
