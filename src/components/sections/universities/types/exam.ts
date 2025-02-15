export interface ExamStructure {
  requirements: string[];
  structure: string[];
  sharedExams?: {
    programs: string[];
    description: string;
  };
}
