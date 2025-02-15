import { University } from '../university';

export const czechUniversities: University[] = [
  {
    name: "Charles University",
    country: "Czech Republic",
    description: "One of the oldest universities in Europe, offering high-quality medical education.",
    location: "Prague",
    overview: "Established in 1348, Charles University is renowned for its medical programs taught in English.",
    teachingHospitals: "General University Hospital in Prague, Motol University Hospital",
    internationalRecognition: "Recognized globally, including by the World Health Organization (WHO).",
    studentLife: "Vibrant city life with numerous cultural and social activities.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "Secondary school diploma",
        "Proficiency in English"
      ],
      structure: [
        "Biology component",
        "Chemistry component",
        "Physics component"
      ],
      sharedExams: {
        programs: ["Medicine", "Dentistry"],
        description: "Both programs share similar entrance exams."
      }
    },
    examDates: ["June 15th", "July 1st"],
    applicationDeadlines: ["April 30th, 2025"],
    examMode: "Written and oral examination",
    prepMaterials: "Official study guides available through admissions office.",
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
      mainWebsite: "https://www.cuni.cz/",
      facultyMedicine: "https://medf.cuni.cz/",
      admissions: "https://www.cuni.cz/UKEN-41176.html"
    }
  },
  {
    name: "Masaryk University",
    country: "Czech Republic",
    description: "Known for its modern approach to medical education.",
    location: "Brno",
    overview: "Offers a dynamic learning environment with a focus on research.",
    teachingHospitals: "University Hospital Brno",
    internationalRecognition: "Accredited by international bodies such as the European Union.",
    studentLife: "Brno offers a blend of historical charm and contemporary lifestyle.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "High school leaving certificate",
        "English proficiency"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "General Knowledge"
      ],
      sharedExams: {
        programs: ["Medicine", "Nursing"],
        description: "Shared basic science components."
      }
    },
    examDates: ["June 10th", "June 25th"],
    applicationDeadlines: ["May 15th, 2025"],
    examMode: "Online preliminary screening followed by an in-person test",
    prepMaterials: "Practice tests available online.",
    tuitionFees: {
      amount: 8000,
      currency: "EUR",
      period: "year",
      notes: "Non-EU students only."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "90"
    }],
    links: {
      mainWebsite: "https://www.muni.cz/",
      facultyMedicine: "https://medicine.muni.cz/",
      admissions: "https://is.muni.cz/"
    }
  },
  {
    name: "Palacký University",
    country: "Czech Republic",
    description: "A university with a strong tradition in medical sciences.",
    location: "Olomouc",
    overview: "Provides comprehensive medical training with a focus on practical experience.",
    teachingHospitals: "University Hospital Olomouc",
    internationalRecognition: "Recognized worldwide for its academic standards.",
    studentLife: "Olomouc offers a peaceful yet culturally rich atmosphere.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "School-leaving certificate",
        "Proof of English language proficiency"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics"
      ],
      sharedExams: {
        programs: ["Medicine", "Pharmacy"],
        description: "Common sections in sciences."
      }
    },
    examDates: ["June 20th", "July 5th"],
    applicationDeadlines: ["April 30th, 2025"],
    examMode: "Traditional written exam",
    prepMaterials: "Provided upon request from the admissions office.",
    tuitionFees: {
      amount: 7500,
      currency: "EUR",
      period: "year",
      notes: "For international students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.0"
    }],
    links: {
      mainWebsite: "https://www.upol.cz/",
      facultyMedicine: "https://lfp.upol.cz/",
      admissions: "https://portal.upol.cz/"
    }
  },
  {
    name: "Pilsen University",
    country: "Czech Republic",
    description: "Emerging as a significant center for medical education.",
    location: "Pilsen",
    overview: "Emphasizes innovation and interdisciplinary collaboration.",
    teachingHospitals: "University Hospital Pilsen",
    internationalRecognition: "Gaining recognition internationally for its cutting-edge research.",
    studentLife: "Pilsen provides a friendly and supportive community.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "Completion of secondary education",
        "English language proficiency"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics"
      ],
      sharedExams: {
        programs: ["Medicine", "Biomedical Sciences"],
        description: "Overlap in scientific subjects."
      }
    },
    examDates: ["June 12th", "June 28th"],
    applicationDeadlines: ["May 31st, 2025"],
    examMode: "Computer-based testing",
    prepMaterials: "Available via official channels.",
    tuitionFees: {
      amount: 8500,
      currency: "EUR",
      period: "year",
      notes: "Applicable to non-EU citizens."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "87"
    }],
    links: {
      mainWebsite: "https://www.zcu.cz/",
      facultyMedicine: "https://lf.zcu.cz/",
      admissions: "https://www.zcu.cz/en/admissions/"
    }
  }
];
