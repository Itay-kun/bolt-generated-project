import { University } from '../university';

export const ukrainianUniversities: University[] = [
  {
    name: "Odessa National Medical University",
    country: "Ukraine",
    description: "A renowned institution known for its strong tradition in medical education and research.",
    location: "Odessa",
    overview: "Offers an English-taught MD program that combines traditional values with modern teaching methods, providing extensive clinical exposure.",
    teachingHospitals: "Odessa Clinical Hospital No. 4, Odessa Regional Children's Clinical Hospital",
    internationalRecognition: "Recognized by major global health organizations such as the WHO and UNESCO.",
    studentLife: "Odessa offers a lively student community with access to beaches, cultural events, and historical sites.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "Completion of secondary education",
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
    examDates: [
      "June 20th",
      "July 10th"
    ],
    applicationDeadlines: [
      "June 1st",
      "July 5th"
    ],
    examMode: "Computer-based testing",
    prepMaterials: "Available through official channels and third-party providers.",
    tuitionFees: {
      amount: 5000,
      currency: "USD",
      period: "year",
      notes: "For international students."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "87"
    }],
    links: {
      mainWebsite: "http://www.onmu.edu.ua/",
      facultyMedicine: "http://www.onmu.edu.ua/en/faculty-of-medicine/",
      admissions: "http://www.onmu.edu.ua/en/admissions/"
    }
  },
  {
    name: "Lviv National Medical University",
    country: "Ukraine",
    description: "Known for its commitment to excellence in medical education and healthcare delivery.",
    location: "Lviv",
    overview: "Provides a comprehensive medical program taught entirely in English, focusing on both theoretical knowledge and practical experience.",
    teachingHospitals: "Lviv Regional Clinical Hospital, Lviv Children's Clinical Hospital",
    internationalRecognition: "Accredited globally, recognized by the WHO and other international bodies.",
    studentLife: "Lviv offers a charming atmosphere with historical significance, cultural festivals, and a supportive academic environment.",
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
    examMode: "Traditional written exam.",
    prepMaterials: "Provided by the university and external partners.",
    tuitionFees: {
      amount: 4500,
      currency: "USD",
      period: "year",
      notes: "Varies based on income."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.0"
    }],
    links: {
      mainWebsite: "http://lnmu.lutsk.ua/",
      facultyMedicine: "http://lnmu.lutsk.ua/en/faculty-of-medicine/",
      admissions: "http://lnmu.lutsk.ua/en/admissions/"
    }
  }
];
