import { University } from '../university';

export const polishUniversities: University[] = [
  {
    name: "Gdańsk University of Technology (GUT)",
    country: "Poland",
    description: "A leading institution offering high-quality medical education with a strong focus on research.",
    location: "Gdańsk",
    overview: "Offers an English-taught MD program that emphasizes practical experience and modern teaching methods.",
    teachingHospitals: "Medical University of Gdańsk Hospital Complex",
    internationalRecognition: "Recognized by the World Health Organization (WHO) and other international bodies.",
    studentLife: "Vibrant city life with access to cultural events, sports, and seaside activities.",
    logo: "/placeholder.svg",
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
    examDates: ["June 15th", "July 1st"],
    applicationDeadlines: ["May 31st", "June 30th"],
    examMode: "Written examination",
    prepMaterials: "Official study guides provided by the university.",
    tuitionFees: {
      amount: 10000,
      currency: "EUR",
      period: "year",
      notes: "For non-EU students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.5"
    }],
    links: {
      mainWebsite: "https://www.pg.edu.pl/",
      facultyMedicine: "https://medic.gumed.edu.pl/",
      admissions: "https://www.gumed.edu.pl/en/studies/admission/"
    }
  },
  {
    name: "Poznań University of Medical Sciences (PUMS)",
    country: "Poland",
    description: "Known for its excellent medical programs and emphasis on innovation.",
    location: "Poznań",
    overview: "Provides a comprehensive curriculum taught in English, focusing on both theoretical knowledge and practical skills.",
    teachingHospitals: "University Hospital in Poznań",
    internationalRecognition: "Accredited globally, including by the European Union.",
    studentLife: "Poznań offers a blend of historical charm and modern amenities.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "High school diploma",
        "English language proficiency certificate"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "Logical Reasoning"
      ],
      sharedExams: {
        programs: ["Medicine", "Pharmacy"],
        description: "Shared basic sciences components."
      }
    },
    examDates: ["June 20th", "July 10th"],
    applicationDeadlines: ["June 1st", "July 5th"],
    examMode: "Computer-based testing",
    prepMaterials: "Available through official channels and third-party providers.",
    tuitionFees: {
      amount: 9500,
      currency: "EUR",
      period: "year",
      notes: "Non-EU students only."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "90"
    }],
    links: {
      mainWebsite: "https://www.pum.edu.pl/",
      facultyMedicine: "https://www.pum.edu.pl/en/faculty-of-medicine/",
      admissions: "https://www.pum.edu.pl/en/admissions/"
    }
  }
];
