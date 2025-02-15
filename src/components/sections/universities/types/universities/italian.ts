import { University } from '../university';

export const italianUniversities: University[] = [
  {
    name: "Humanitas University",
    country: "Italy",
    description: "A modern university with a focus on personalized education and cutting-edge research.",
    location: "Milan",
    overview: "Offers an international MD program taught entirely in English.",
    teachingHospitals: "Humanitas Clinical and Research Center",
    internationalRecognition: "Recognized by the World Health Organization (WHO) and other global bodies.",
    studentLife: "Located near Milan, offering access to cultural events, sports, and vibrant city life.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "High school diploma",
        "Proficiency in English"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "General Knowledge"
      ],
      sharedExams: {
        programs: ["Medicine", "Biomedical Sciences"],
        description: "Shared science sections."
      }
    },
    examDates: ["April 26th", "June 15th"],
    applicationDeadlines: ["March 31st", "May 31st"],
    examMode: "Written examination",
    prepMaterials: "Official study guides provided by the university.",
    tuitionFees: {
      amount: 25000,
      currency: "EUR",
      period: "year",
      notes: "For non-EU students."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.5"
    }],
    links: {
      mainWebsite: "https://www.humanitasuniversity.it/",
      facultyMedicine: "https://www.humanitasuniversity.it/en/md-program/",
      admissions: "https://www.humanitasuniversity.it/en/admissions/"
    }
  },
  {
    name: "Tor Vergata University",
    country: "Italy",
    description: "Known for its strong emphasis on research and innovation.",
    location: "Rome",
    overview: "Provides high-quality medical education with opportunities for interdisciplinary collaboration.",
    teachingHospitals: "Policlinico Tor Vergata",
    internationalRecognition: "Accredited by international organizations including the European Union.",
    studentLife: "Situated in Rome, offering a rich historical and cultural experience.",
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
        "Logical Reasoning"
      ],
      sharedExams: {
        programs: ["Medicine", "Dentistry"],
        description: "Common scientific subjects."
      }
    },
    examDates: ["June 10th", "July 20th"],
    applicationDeadlines: ["May 15th", "June 30th"],
    examMode: "Computer-based testing",
    prepMaterials: "Available through official channels and third-party providers.",
    tuitionFees: {
      amount: 4000,
      currency: "EUR",
      period: "year",
      notes: "Varies based on income."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "90"
    }],
    links: {
      mainWebsite: "https://www.uniroma2.it/",
      facultyMedicine: "https://www.medicina.uniroma2.it/",
      admissions: "https://www.internationaloffice.uniroma2.it/"
    }
  },
  {
    name: "La Sapienza University",
    country: "Italy",
    description: "One of the oldest and most prestigious universities in Europe.",
    location: "Rome",
    overview: "Offers a comprehensive medical curriculum with extensive clinical exposure.",
    teachingHospitals: "Policlinico Umberto I",
    internationalRecognition: "Globally recognized for its academic excellence.",
    studentLife: "Central location in Rome provides easy access to cultural landmarks and activities.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "School-leaving certificate",
        "English language proficiency"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "Mathematics"
      ],
      sharedExams: {
        programs: ["Medicine", "Pharmacy"],
        description: "Overlap in basic sciences."
      }
    },
    examDates: ["May 20th", "June 30th"],
    applicationDeadlines: ["April 30th", "June 15th"],
    examMode: "Written and oral examination",
    prepMaterials: "Study materials provided by the university and external partners.",
    tuitionFees: {
      amount: 2000,
      currency: "EUR",
      period: "year",
      notes: "Dependent on family income."
    },
    languageRequirements: [{
      test: "IELTS",
      minimumScore: "6.0"
    }],
    links: {
      mainWebsite: "https://www.uniroma1.it/",
      facultyMedicine: "https://www.medicinaeodontoiatria.uniroma1.it/",
      admissions: "https://www.studionline.unito.it/portaleammissioni/"
    }
  },
  {
    name: "University of Pavia",
    country: "Italy",
    description: "An ancient institution with a long tradition of excellence in medical education.",
    location: "Pavia",
    overview: "Combines traditional values with modern teaching methods.",
    teachingHospitals: "Fondazione IRCCS San Matteo Policlinico",
    internationalRecognition: "Recognized worldwide for its contributions to medical science.",
    studentLife: "Pavia offers a charming small-town atmosphere with historical significance.",
    logo: "/placeholder.svg",
    examStructure: {
      requirements: [
        "Completion of secondary education",
        "English proficiency"
      ],
      structure: [
        "Biology",
        "Chemistry",
        "Physics",
        "General Knowledge"
      ],
      sharedExams: {
        programs: ["Medicine", "Nursing"],
        description: "Shared foundational science components."
      }
    },
    examDates: ["June 5th", "July 15th"],
    applicationDeadlines: ["May 10th", "June 25th"],
    examMode: "Traditional written exam",
    prepMaterials: "Provided upon request from the admissions office.",
    tuitionFees: {
      amount: 1500,
      currency: "EUR",
      period: "year",
      notes: "Based on financial need."
    },
    languageRequirements: [{
      test: "TOEFL",
      minimumScore: "87"
    }],
    links: {
      mainWebsite: "https://www.unipv.it/",
      facultyMedicine: "https://www.medicina.unipv.it/",
      admissions: "https://www.unipv.eu/site/en/home/students/prospective-students.html"
    }
  },
];
