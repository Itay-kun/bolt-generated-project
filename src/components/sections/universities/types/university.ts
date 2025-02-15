import { ExamStructure } from './exam';

export interface University {
  name: string;
  country: string;
  description: string;
  location: string;
  overview: string;
  teachingHospitals: string;
  internationalRecognition: string;
  studentLife: string;
  logo: string;
  examStructure: ExamStructure;
  examDates?: string[];
  applicationDeadlines?: string[];
  examMode?: string;
  prepMaterials?: string;
  exemptions?: string[];
  tuitionFees?: {
    amount: number;
    currency: string;
    period: string;
    notes?: string;
  };
  languageRequirements?: {
    test: string;
    minimumScore: string;
  }[];
  links?: {
    mainWebsite: string;
    facultyMedicine: string;
    admissions: string;
  };
}

export type SortOption = 'name' | 'tuition' | 'country';
export type SortDirection = 'asc' | 'desc';
