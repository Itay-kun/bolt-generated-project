import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Topics = () => {
  const navigate = useNavigate();

  // Placeholder topics data
  const topics = [
    {
      id: "topic1",
      title: "Biology Basics",
      description: "Fundamental concepts in biology",
      totalQuestions: 50,
      activeUsers: 120
    },
    {
      id: "topic2",
      title: "Chemistry Fundamentals",
      description: "Essential chemistry concepts",
      totalQuestions: 45,
      activeUsers: 98
    },
    // Add more topics as needed
  ];

  return (
    <div className="min-h-screen bg-background-alt p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Study Topics
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-text">{topic.title}</h2>
              </div>

              <p className="text-text-muted mb-6">{topic.description}</p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm text-text-muted">{topic.totalQuestions} questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-text-muted">{topic.activeUsers} studying</span>
                </div>
              </div>

              <Button 
                className="w-full group"
                onClick={() => navigate(`/quiz-session/${topic.id}`)}
              >
                Start Practice
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
