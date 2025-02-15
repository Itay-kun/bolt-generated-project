import { University } from '../university';

export const hungarianUniversities: University[] = [
  {
    name: "University of Debrecen",
    country: "Hungary",
    description: "A renowned institution offering a world-class medical education program.",
    location: "Debrecen",
    overview: "Provides an English-taught MD program with a focus on clinical practice and research.",
    teachingHospitals: "University of Debrecen Clinical Centre",
    internationalRecognition: "Recognized by major global health organizations.",
    studentLife: "Debrecen offers a lively student community with numerous cultural and social activities.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "Completion of secondary education",
        "English proficiency certificate"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "General Knowledge"
      ],
      sharedExams: {
        programs: ["Medicine", "Dentistry"],
        description: "Shared scientific subjects."
      }
    },
    examDates: ["June 10th", "July 15th"],
    applicationDeadlines: ["May 15th", "June 30th"],
    examMode: "Written examination",
    prepMaterials: "Provided upon request from the admissions office.",
    tuitionFees: {
      amount: 12000,
      currency: "EUR",
      period: "year",
      notes: "For international students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.0"
    }],
    links: {
      mainWebsite: "https://www.unideb.hu/",
      facultyMedicine: "https://medicine.unideb.hu/",
      admissions: "https://medicine.unideb.hu/admissions"
    }
  },
  {
    name: "Semmelweis University",
    country: "Hungary",
    description: "One of the oldest and most prestigious medical universities in Europe.",
    location: "Budapest",
    overview: "Offers a rigorous medical curriculum taught entirely in English.",
    teachingHospitals: "Semmelweis University Teaching Hospitals",
    internationalRecognition: "Globally recognized for its contributions to medical science.",
    studentLife: "Located in Budapest, providing access to a rich cultural and historical experience.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "School-leaving certificate",
        "Proof of English proficiency"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "Logical Reasoning"
      ],
      sharedExams: {
        programs: ["Medicine", "Biomedical Sciences"],
        description: "Overlap in foundational sciences."
      }
    },
    examDates: ["June 5th", "July 20th"],
    applicationDeadlines: ["April 30th", "June 15th"],
    examMode: "Online preliminary screening followed by an in-person test.",
    prepMaterials: "Study materials available through official channels.",
    tuitionFees: {
      amount: 14000,
      currency: "EUR",
      period: "year",
      notes: "Applicable to non-EU citizens."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "87"
    }],
    links: {
      mainWebsite: "https://www.szm.com/",
      facultyMedicine: "https://md.szm.com/",
      admissions: "https://md.szm.com/admissions/"
    }
  },
  {
    name: "University of Szeged",
    country: "Hungary",
    description: "Known for its strong tradition in medical education and research.",
    location: "Szeged",
    overview: "Provides a comprehensive medical program with a focus on practical training.",
    teachingHospitals: "University of Szeged Clinical Center",
    internationalRecognition: "Recognized worldwide for its academic excellence.",
    studentLife: "Szeged offers a friendly and supportive environment for students.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "Secondary education completion",
        "English language proficiency"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics"
      ],
      sharedExams: {
        programs: ["Medicine", "Nursing"],
        description: "Shared basic science components."
      }
    },
    examDates: ["June 12th", "July 18th"],
    applicationDeadlines: ["May 20th", "July 10th"],
    examMode: "Traditional written exam.",
    prepMaterials: "Provided by the university and external partners.",
    tuitionFees: {
      amount: 11000,
      currency: "EUR",
      period: "year",
      notes: "Varies based on income."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.5"
    }],
    links: {
      mainWebsite: "https://www.u-szeged.hu/",
      facultyMedicine: "https://med.u-szeged.hu/",
      admissions: "https://med.u-szeged.hu/international-students/"
    }
  },
  {
    name: "University of Pécs",
    country: "Hungary",
    description: "A historic university with a focus on modern medical education.",
    location: "Pécs",
    overview: "Offers an English-taught MD program with a strong emphasis on clinical exposure.",
    teachingHospitals: "University of Pécs Medical Center",
    internationalRecognition: "Recognized globally for its quality of education.",
    studentLife: "Pécs provides a charming atmosphere with historical significance and cultural activities.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "Completion of secondary education",
        "English proficiency certificate"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "General Knowledge"
      ],
      sharedExams: {
        programs: ["Medicine", "Pharmacy"],
        description: "Common science sections."
      }
    },
    examDates: ["June 8th", "July 22nd"],
    applicationDeadlines: ["May 10th", "July 15th"],
    examMode: "Written examination",
    prepMaterials: "Available through official channels.",
    tuitionFees: {
      amount: 12500,
      currency: "EUR",
      period: "year",
      notes: "For international students."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "90"
    }],
    links: {
      mainWebsite: "https://www.pte.hu/",
      facultyMedicine: "https://medicina.pte.hu/",
      admissions: "https://medicina.pte.hu/international-admissions/"
    }
  }
];
