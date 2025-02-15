import { University } from '../university';

export const russianUniversities: University[] = [
  {
    name: "Sechenov University",
    country: "Russia",
    description: "A leading institution in medical education and research, known for its innovation and excellence.",
    location: "Moscow",
    overview: "Offers an English-taught MD program that combines rigorous academic training with extensive clinical practice, preparing students for global healthcare challenges.",
    teachingHospitals: "Sechenov University Clinical Hospital, Central Clinical Hospital",
    internationalRecognition: "Recognized by major global health organizations such as the WHO and UNESCO.",
    studentLife: "Moscow offers a dynamic urban experience with access to world-class cultural institutions, entertainment, and networking opportunities.",
    logo: "/lovable-uploads/566612bc-8e15-4557-8939-e1a2483408ed.png",
    examStructure: {
      requirements: [
        "Completion of secondary education",
        "English language proficiency certificate",
        "Valid passport",
        "Health certificate",
        "Background check",
        "Letters of recommendation",
        "Personal statement",
        "Interview"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "General Knowledge"
      ],
      sharedExams: {
        programs: ["Medicine", "Biomedical Sciences"],
        description: "Overlap in scientific subjects."
      }
    },
    examDates: [
      "June 10th",
      "July 20th"
    ],
    applicationDeadlines: [
      "May 15th",
      "June 30th"
    ],
    examMode: "Written examination",
    prepMaterials: "Official study materials provided by the university",
    tuitionFees: {
      amount: 6000,
      currency: "USD",
      period: "year",
      notes: "For international students."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "87"
    }],
    links: {
      mainWebsite: "https://sechenov.ru/en/",
      facultyMedicine: "https://medicine.sechenov.ru/en/",
      admissions: "https://admissions.sechenov.ru/en/"
    }
  }
];
