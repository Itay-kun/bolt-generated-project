import { University } from '../university';

export const croatianUniversities: University[] = [
  {
    name: "University of Zagreb – School of Medicine",
    country: "Croatia",
    description: "One of the oldest and most prestigious universities in Southeast Europe, offering high-quality medical education.",
    location: "Zagreb",
    overview: "The Faculty of Medicine at the University of Zagreb provides a comprehensive medical curriculum taught in English, emphasizing both theoretical knowledge and practical skills.",
    teachingHospitals: "University Hospital Centre Zagreb",
    internationalRecognition: "Recognized globally, including by the World Health Organization (WHO) and other international bodies.",
    studentLife: "Located in the capital city, students enjoy a vibrant cultural scene with numerous historical landmarks, museums, and social activities.",
    logo: "/lovable-uploads/a95d634d-6827-4ff8-976a-8aaa92afb96b.png",
    examStructure: {
      requirements: [
        "Secondary school diploma",
        "Proof of English proficiency"
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
    examDates: [
      "June 15th",
      "July 1st"
    ],
    applicationDeadlines: [
      "May 31st",
      "June 30th"
    ],
    examMode: "Written examination",
    prepMaterials: "Official study guides provided by the university.",
    tuitionFees: {
      amount: 9000,
      currency: "EUR",
      period: "year",
      notes: "For non-EU students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.5"
    }],
    links: {
      mainWebsite: "https://www.unizg.hr/",
      facultyMedicine: "https://www.mefzg.unizg.hr/en/",
      admissions: "https://www.mefzg.unizg.hr/en/admissions/"
    }
  }
];
