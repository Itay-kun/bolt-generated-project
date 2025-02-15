import React from 'react';
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";

  interface AnkiBulkCreateFormProps {
    bulkCardData: string;
    handleBulkCreate: () => void;
    setBulkCardData: (data: string) => void;
  }

  const AnkiBulkCreateForm = ({ bulkCardData, handleBulkCreate, setBulkCardData }: AnkiBulkCreateFormProps) => {
    return (
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Bulk Create Cards (JSON)</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="bulkCardData">Paste JSON Data</Label>
            <Input
              as="textarea"
              id="bulkCardData"
              className="w-full p-2 border rounded"
              value={bulkCardData}
              onChange={(e) => setBulkCardData(e.target.value)}
              rows={5}
            />
          </div>
          <Button onClick={handleBulkCreate} className="w-full">Bulk Create</Button>
        </div>
      </div>
    );
  };

  export default AnkiBulkCreateForm;
