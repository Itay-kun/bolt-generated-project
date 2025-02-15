import { University } from '../university';

export const romanianUniversities: University[] = [
  {
    name: "Babeș-Bolyai University",
    country: "Romania",
    description: "A prestigious institution offering high-quality medical education with a strong emphasis on research.",
    location: "Cluj-Napoca",
    overview: "The Faculty of Medicine provides an English-taught MD program that combines theoretical knowledge with practical clinical experience 4.",
    teachingHospitals: "Cluj-Napoca Clinical Hospital",
    internationalRecognition: "Recognized globally, including by the World Health Organization (WHO).",
    studentLife: "Cluj-Napoca offers a vibrant student community with access to cultural events, sports, and natural beauty.",
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
      amount: 7000,
      currency: "EUR",
      period: "year",
      notes: "For non-EU students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.5"
    }],
    links: {
      mainWebsite: "https://www.ubbcluj.ro/",
      facultyMedicine: "https://medicina.ubbcluj.ro/",
      admissions: "https://medicina.ubbcluj.ro/en/admissions/"
    }
  },
  {
    name: "Grigore T. Popa University of Medicine and Pharmacy",
    country: "Romania",
    description: "Known for its strong tradition in medical education and research.",
    location: "Iași",
    overview: "Offers an English-taught MD program that emphasizes both theoretical knowledge and practical skills.",
    teachingHospitals: "Iași County Emergency Hospital",
    internationalRecognition: "Accredited globally, recognized by the WHO and other international bodies.",
    studentLife: "Iași offers a charming atmosphere with historical significance, cultural festivals, and a supportive academic environment.",
    logo: "/lovable-uploads/placeholder.svg",
    examStructure: {
      requirements: [
        "Completion of secondary education",
        "English language proficiency certificate",
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
      amount: 6500,
      currency: "EUR",
      period: "year",
      notes: "Non-EU students only."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "90"
    }],
    links: {
      mainWebsite: "https://www.umfiasi.ro/",
      facultyMedicine: "https://www.umfiasi.ro/en/faculty-of-medicine/",
      admissions: "https://www.umfiasi.ro/en/admissions/"
    }
  }
];
