import { University } from '../university';

export const slovakUniversities: University[] = [
  {
    name: "UPJS – Pavol Jozef Šafárik University",
    country: "Slovakia",
    description: "Leading medical university in Slovakia with competitive entrance exams and excellent clinical training.",
    location: "Košice, Slovakia",
    overview: "One of Slovakia's top medical universities, known for its strong research and clinical training programs.",
    teachingHospitals: "Partners with leading hospitals in Košice for comprehensive clinical training.",
    internationalRecognition: "Globally accredited medical degree, recognized throughout the EU and internationally.",
    studentLife: "Affordable cost of living, vibrant student community, and rich historical city atmosphere.",
    logo: "/lovable-uploads/a198a6b7-7057-4481-b242-22b584006114.png",
    examStructure: {
      requirements: [
        "High school diploma",
        "Entrance exam in Biology and Chemistry",
        "Valid passport",
        "English language proficiency"
      ],
      structure: [
        "Biology - 100 multiple choice questions (75 minutes)",
        "Chemistry - 100 multiple choice questions (75 minutes)",
        "Total duration: 2.5 hours",
        "Results provided immediately after the exam"
      ],
      sharedExams: {
        programs: ["General Medicine", "Dental Medicine"],
        description: "Same entrance examination for both programs"
      }
    },
    examDates: [
      "June 18, 2025 - Faculty of Medicine, UPJŠ in Košice",
      "August 13, 2025 - Faculty of Medicine, UPJŠ in Košice"
    ],
    applicationDeadlines: [
      "Two weeks before each exam date",
      "June 4, 2025 for June exam",
      "July 30, 2025 for August exam"
    ],
    examMode: "In-person examination at the Faculty of Medicine in Košice",
    prepMaterials: "Available for purchase: 600 practice questions each for Biology and Chemistry in electronic or printed formats"
  },
  {
    name: "Jessenius University",
    country: "Slovakia",
    description: "Known for its strong tradition in medical education and research.",
    location: "Martin",
    overview: "Offers an English-taught MD program that combines traditional values with modern teaching methods, providing extensive clinical exposure.",
    teachingHospitals: "University Hospital in Martin",
    internationalRecognition: "Accredited globally, recognized by the WHO and other international bodies.",
    studentLife: "Martin offers a charming atmosphere with historical significance, cultural festivals, and a supportive academic environment.",
    logo: "/lovable-uploads/4954917d-ea46-468c-b7a6-01c1ab796773.png",
    examStructure: {
      requirements: [
        "Completion of secondary education",
        "English language proficiency certificate",
        "Valid identification",
        "Health certificate"
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
    examDates: [
      "June 20th",
      "July 10th"
    ],
    applicationDeadlines: [
      "June 1st",
      "July 5th"
    ],
    examMode: "Computer-based testing",
    prepMaterials: "Available through official channels and third-party providers",
    tuitionFees: {
      amount: 7500,
      currency: "EUR",
      period: "year",
      notes: "Non-EU students only."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "90"
    }],
    links: {
      mainWebsite: "https://www.unij.sk/en/",
      facultyMedicine: "https://www.lf.unij.sk/en/",
      admissions: "https://www.lf.unij.sk/en/admissions/"
    }
  },
  {
    name: "Comenius University",
    country: "Slovakia",
    description: "One of the oldest and most prestigious universities in Slovakia, offering high-quality medical education.",
    location: "Bratislava",
    overview: "The Faculty of Medicine at Comenius University provides a comprehensive medical curriculum taught in English, emphasizing both theoretical knowledge and practical skills.",
    teachingHospitals: "University Hospital in Bratislava",
    internationalRecognition: "Recognized globally, including by the WHO and other international bodies.",
    studentLife: "Located in the capital city, students enjoy a vibrant cultural scene with numerous historical landmarks, museums, and social activities.",
    logo: "/lovable-uploads/591fabb9-e05c-4523-91c7-eb573a86af39.png",
    examStructure: {
      requirements: [
        "School-leaving certificate",
        "Proof of English proficiency",
        "Valid passport",
        "Medical certificate"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics"
      ],
      sharedExams: {
        programs: ["Medicine", "Nursing"],
        description: "Shared foundational science components."
      }
    },
    examDates: [
      "June 12th",
      "July 15th"
    ],
    applicationDeadlines: [
      "May 20th",
      "July 10th"
    ],
    examMode: "Traditional written exam",
    prepMaterials: "Provided by the university and external partners",
    tuitionFees: {
      amount: 9000,
      currency: "EUR",
      period: "year",
      notes: "Varies based on income."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.0"
    }],
    links: {
      mainWebsite: "https://www.uniba.sk/en/",
      facultyMedicine: "https://www.lf.uniba.sk/en/",
      admissions: "https://www.lf.uniba.sk/en/admissions/"
    }
  }
];
