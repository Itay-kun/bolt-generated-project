// src/firebase/utils/initializeDatabase.js
import { 
  collection, 
  doc, 
  setDoc, 
  Timestamp 
} from 'firebase/firestore';
import { db } from '../init';

// Helper function to create a timestamp
const now = () => Timestamp.now();

// Initialize Schools
async function initializeSchools() {
  const schoolsData = [
    {
      id: 'school1',
      name: 'Hebrew University of Jerusalem',
      location: 'Jerusalem',
      createdAt: now(),
      updatedAt: now()
    },
    {
      id: 'school2',
      name: 'Tel Aviv University',
      location: 'Tel Aviv',
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const school of schoolsData) {
    await setDoc(doc(db, 'schools', school.id), school);
  }
  return schoolsData;
}

// Initialize Students
async function initializeStudents() {
  const studentsData = [
    {
      id: 'student1',
      schoolId: 'school1',
      name: 'David Cohen',
      email: 'david@example.com',
      subscriptionType: 'premium',
      createdAt: now(),
      updatedAt: now()
    },
    {
      id: 'student2',
      schoolId: 'school1',
      name: 'Sarah Levy',
      email: 'sarah@example.com',
      subscriptionType: 'classic',
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const student of studentsData) {
    await setDoc(doc(db, 'students', student.id), student);
  }
  return studentsData;
}

// Initialize Topics
async function initializeTopics() {
  // Using the chemistry topics from your JSON
  const topicsData = [
    {
      id: 'chemistry_basic',
      name: 'Basic Chemistry',
      description: 'Fundamental concepts of chemistry',
      order: 1,
      createdAt: now(),
      updatedAt: now()
    },
    {
      id: 'chemistry_organic',
      name: 'Organic Chemistry',
      description: 'Study of organic compounds',
      order: 2,
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const topic of topicsData) {
    await setDoc(doc(db, 'topics', topic.id), topic);
  }
  return topicsData;
}

// Initialize Questions
async function initializeQuestions() {
  const questionsData = [
    {
      id: 'question1',
      text: 'What is the atomic number of Carbon?',
      topicIds: ['chemistry_basic'],
      difficulty: 'easy',
      type: 'multipleChoice',
      explanation: 'The atomic number of Carbon is 6, representing the number of protons in its nucleus.',
      tags: ['periodic table', 'elements'],
      createdAt: now(),
      updatedAt: now()
    },
    {
      id: 'question2',
      text: 'Which functional group characterizes alcohols?',
      topicIds: ['chemistry_organic'],
      difficulty: 'medium',
      type: 'multipleChoice',
      explanation: 'Alcohols are characterized by the hydroxyl (-OH) functional group.',
      tags: ['organic chemistry', 'functional groups'],
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const question of questionsData) {
    await setDoc(doc(db, 'questions', question.id), question);
  }
  return questionsData;
}

// Initialize Answers
async function initializeAnswers() {
  const answersData = [
    {
      id: 'answer1_1',
      questionId: 'question1',
      text: '6',
      isCorrect: true,
      option: 'a',
      explanation: 'Carbon has 6 protons, making its atomic number 6.',
      createdAt: now(),
      updatedAt: now()
    },
    {
      id: 'answer1_2',
      questionId: 'question1',
      text: '8',
      isCorrect: false,
      option: 'b',
      explanation: 'This is the atomic number of Oxygen.',
      createdAt: now(),
      updatedAt: now()
    },
    {
      id: 'answer2_1',
      questionId: 'question2',
      text: '-OH (hydroxyl)',
      isCorrect: true,
      option: 'a',
      explanation: 'The hydroxyl group (-OH) is the defining characteristic of alcohols.',
      createdAt: now(),
      updatedAt: now()
    },
    {
      id: 'answer2_2',
      questionId: 'question2',
      text: '-COOH',
      isCorrect: false,
      option: 'b',
      explanation: 'This is the carboxyl group, which characterizes carboxylic acids.',
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const answer of answersData) {
    await setDoc(doc(db, 'answers', answer.id), answer);
  }
  return answersData;
}

// Initialize Quiz Sessions
async function initializeQuizSessions() {
  const quizSessionsData = [
    {
      id: 'session1',
      studentId: 'student1',
      type: 'individual',
      status: 'completed',
      topicIds: ['chemistry_basic'],
      startedAt: now(),
      completedAt: now(),
      score: 80,
      totalQuestions: 5,
      completedQuestions: 5,
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const session of quizSessionsData) {
    await setDoc(doc(db, 'quizSessions', session.id), session);
  }
  return quizSessionsData;
}

// Initialize Student Responses
async function initializeStudentResponses() {
  const responsesData = [
    {
      id: 'response1',
      sessionId: 'session1',
      studentId: 'student1',
      questionId: 'question1',
      selectedAnswerId: 'answer1_1',
      isCorrect: true,
      timeSpent: 45, // seconds
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const response of responsesData) {
    await setDoc(doc(db, 'studentResponses', response.id), response);
  }
  return responsesData;
}

// Initialize Student Progress
async function initializeStudentProgress() {
  const progressData = [
    {
      id: 'student1_chemistry_basic',
      studentId: 'student1',
      topicId: 'chemistry_basic',
      totalAttempts: 5,
      correctAnswers: 4,
      averageScore: 80,
      lastAttemptAt: now(),
      createdAt: now(),
      updatedAt: now()
    }
  ];

  for (const progress of progressData) {
    await setDoc(doc(db, 'studentProgress', progress.id), progress);
  }
  return progressData;
}

// Main initialization function
async function initializeDatabase() {
  try {
    console.log('Starting database initialization...');
    
    await initializeSchools();
    console.log('Schools initialized');
    
    await initializeStudents();
    console.log('Students initialized');
    
    await initializeTopics();
    console.log('Topics initialized');
    
    await initializeQuestions();
    console.log('Questions initialized');
    
    await initializeAnswers();
    console.log('Answers initialized');
    
    await initializeQuizSessions();
    console.log('Quiz sessions initialized');
    
    await initializeStudentResponses();
    console.log('Student responses initialized');
    
    await initializeStudentProgress();
    console.log('Student progress initialized');
    
    console.log('Database initialization completed successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

export { initializeDatabase };
