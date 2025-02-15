import { University } from '../university';

export const cypriotUniversities: University[] = [
  {
    name: "European University of Cyprus",
    country: "Cyprus",
    description: "A modern institution offering high-quality medical education with a focus on practical training.",
    location: "Nicosia",
    overview: "The School of Medicine provides an English-taught MD program that emphasizes both theoretical knowledge and hands-on experience.",
    teachingHospitals: "Nicosia General Hospital, Famagusta State Hospital",
    internationalRecognition: "Recognized globally, including by the WHO.",
    studentLife: "Nicosia offers a vibrant student community with access to cultural events, sports, and natural beauty.",
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
      amount: 12000,
      currency: "EUR",
      period: "year",
      notes: "For non-EU students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.5"
    }],
    links: {
      mainWebsite: "https://www.euc.ac.cy/",
      facultyMedicine: "https://www.euc.ac.cy/medicine/",
      admissions: "https://www.euc.ac.cy/admissions/"
    }
  },
  {
    name: "University of Nicosia",
    country: "Cyprus",
    description: "Known for its commitment to excellence in medical education and healthcare delivery.",
    location: "Nicosia",
    overview: "Offers an English-taught MD program that combines traditional values with modern teaching methods, providing extensive clinical exposure.",
    teachingHospitals: "Nicosia General Hospital, Kykkos Hospital",
    internationalRecognition: "Accredited globally, recognized by the WHO and other international bodies.",
    studentLife: "Nicosia offers a charming atmosphere with historical significance, cultural festivals, and a supportive academic environment.",
    logo: "/lovable-uploads/placeholder.svg",
    examStructure: {
      requirements: [
        "School-leaving certificate",
        "proof of English proficiency",
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
    examDates: ["June 12th", "July 15th"],
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
      minimumScore: "6.0"
    }],
    links: {
      mainWebsite: "https://www.unic.ac.cy/",
      facultyMedicine: "https://www.unic.ac.cy/medicine/",
      admissions: "https://www.unic.ac.cy/admissions/"
    }
  }
];
