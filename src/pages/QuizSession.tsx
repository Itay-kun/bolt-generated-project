import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Clock, CheckCircle } from "lucide-react";
import { startQuizSession, completeQuizSession } from "@/firebase/utils/quizzes";
import { recordStudentResponse } from "@/firebase/utils/responses";

const QuizSession = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initSession = async () => {
      try {
        // TODO: Replace with actual user ID from auth
        const session = await startQuizSession("test-user", ["topic1"], "practice", 10);
        setSessionId(session.id);
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to start quiz session",
          variant: "destructive",
        });
      }
    };

    initSession();
  }, [toast]);

  const handleAnswer = async (answerId: string) => {
    if (!sessionId) return;

    try {
      await recordStudentResponse(
        sessionId,
        "test-user", // TODO: Replace with actual user ID
        `question-${currentQuestion}`,
        answerId,
        timeSpent
      );

      if (currentQuestion >= 9) {
        await completeQuizSession(sessionId);
        navigate("/quiz-results");
      } else {
        setCurrentQuestion(prev => prev + 1);
        setTimeSpent(0);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to record response",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-alt p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">Practice Quiz</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Time: {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>

          <Progress value={(currentQuestion / 10) * 100} className="mb-8" />

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Question {currentQuestion + 1}</h2>
            
            {/* Placeholder for question content */}
            <p className="text-gray-700">Sample question content goes here...</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {["A", "B", "C", "D"].map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  className="p-6 text-left flex items-center gap-3 hover:border-primary/50 transition-all"
                  onClick={() => handleAnswer(`answer-${option}`)}
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {option}
                  </span>
                  <span>Answer option {option}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuizSession;
