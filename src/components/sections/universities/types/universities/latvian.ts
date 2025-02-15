import { University } from '../university';

export const latvianUniversities: University[] = [
  {
    name: "University of Latvia",
    country: "Latvia",
    description: "One of the oldest and most prestigious universities in Latvia, offering high-quality medical education.",
    location: "Riga",
    overview: "The Faculty of Medicine at the University of Latvia provides a comprehensive medical curriculum taught in English, emphasizing both theoretical knowledge and practical skills.",
    teachingHospitals: "Pauls Stradins Clinical University Hospital",
    internationalRecognition: "Recognized globally, including by the WHO and other international bodies.",
    studentLife: "Located in the capital city, students enjoy a vibrant cultural scene with numerous historical landmarks, museums, and social activities.",
    logo: "/lovable-uploads/placeholder.svg",
    examStructure: {
      requirements: [
        "Secondary school diploma",
        "proof of English proficiency",
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "General Knowledge"
      ],
      sharedExams: {
        programs: ["Medicine", "Dentistry"],
        description: "Common science sections."
      }
    },
    examDates: ["June 15th", "July 1st"],
    applicationDeadlines: ["May 31st", "June 30th"],
    examMode: "Written examination",
    prepMaterials: "Official study guides provided by the university.",
    tuitionFees: {
      amount: 8000,
      currency: "EUR",
      period: "year",
      notes: "For non-EU students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.5"
    }],
    links: {
      mainWebsite: "https://www.lu.lv/",
      facultyMedicine: "https://www.lu.lv/en/faculties/medicine/",
      admissions: "https://www.lu.lv/en/admissions/"
    }
  }
];
