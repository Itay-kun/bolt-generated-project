import { University } from '../university';

export const lithuanianUniversities: University[] = [
  {
    name: "LSMU – Lithuanian University of Health Sciences",
    country: "Lithuania",
    description: "The largest medical university in the Baltic region with modern facilities and international recognition.",
    location: "Kaunas, Lithuania",
    overview: "Leading institution specializing in health sciences and modern clinical practice.",
    teachingHospitals: "Owns and operates Kaunas Clinics, the largest medical facility in the Baltic region.",
    internationalRecognition: "Degrees recognized across Europe, USA, and Canada.",
    studentLife: "Student-friendly city with affordable living costs and strong international community.",
    logo: "/lovable-uploads/ea9fd73d-073d-47d9-a6d7-0ddd413f36f4.png",
    examStructure: {
      requirements: [
        "High school diploma",
        "Entrance exam",
        "Interview component",
        "English language proficiency"
      ],
      structure: [
        "Biology - 30 multiple choice questions",
        "Chemistry - 30 multiple choice questions",
        "Personal interview",
        "Total duration: 90 minutes"
      ],
      sharedExams: {
        programs: ["Medicine", "Dentistry", "Veterinary Medicine"],
        description: "Identical entrance test for all three programs"
      }
    },
    examDates: [
      "Online Tests:",
      "January 30, 2025",
      "February 27, 2025",
      "March 20, 2025",
      "April 10, 2025",
      "April 24, 2025",
      "In-person Tests:",
      "February 2, 2025 - Gothenburg",
      "March 5, 2025 - Malmö",
      "March 7, 2025 - Oslo & Gothenburg",
      "March 9, 2025 - Stockholm",
      "April 11, 2025 - Stockholm",
      "April 13, 2025 - Gothenburg",
      "May 7, 2025 - Oslo",
      "May 16, 2025 - Stockholm",
      "May 18, 2025 - Gothenburg",
      "June 13, 2025 - Stockholm",
      "June 15, 2025 - Gothenburg",
      "June 28, 2025 - Oslo"
    ],
    applicationDeadlines: [
      "Application period: November 1 to July 6"
    ],
    examMode: "Choice between online and in-person examination"
  },
  {
    name: "Vilnius University – Faculty of Medicine",
    country: "Lithuania",
    description: "Over 200 years of medical education excellence with modern approach to learning.",
    location: "Vilnius, Lithuania",
    overview: "One of Europe's oldest universities (est. 1579) with prestigious medical faculty.",
    teachingHospitals: "Access to top research centers and hospitals in Lithuania's capital.",
    internationalRecognition: "Member of European University Association with high international ranking.",
    studentLife: "Rich cultural experience in Lithuania's largest city with modern amenities.",
    logo: "/lovable-uploads/c46fdd1f-f38e-4d21-8461-2a0f13fd7bcc.png",
    examStructure: {
      requirements: [
        "High school diploma",
        "Online entrance exam",
        "MS Teams account",
        "Stable internet connection"
      ],
      structure: [
        "20 single/multiple choice questions",
        "20 short open-ended questions",
        "5 essay-type questions",
        "Duration: 60 minutes"
      ],
      sharedExams: {
        programs: [],
        description: "Program-specific entrance examinations"
      }
    },
    examDates: [
      "January 23, 2025 at 14:00 (EET, UTC+2)",
      "February 20, 2025 at 14:00 (EET, UTC+2)",
      "March 20, 2025 at 14:00 (EET, UTC+2)",
      "April 17, 2025 at 14:00 (EET, UTC+2)",
      "May 22, 2025 at 14:00 (EET, UTC+2)",
      "June 19, 2025 at 14:00 (EET, UTC+2)"
    ],
    applicationDeadlines: [
      "Non-EU/EFTA applicants: May 1, 2025",
      "EU/EFTA applicants: July 1, 2025",
      "Non-EU citizens must take exam by May 22, 2025"
    ],
    examMode: "Online examination via MS Teams platform"
  }
];
