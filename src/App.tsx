import { Toaster } from "@/components/ui/toaster";
  import { Toaster as Sonner } from "@/components/ui/sonner";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { LanguageProvider } from "./context/LanguageContext";
  import { Suspense } from "react";
  import Index from "./pages/Index";
  import UniversitiesIndex from "./pages/UniversitiesIndex";
  import UniversityDetail from "./pages/UniversityDetail";
  import UniversityComparison from "./pages/UniversityComparison";
  import Topics from "./pages/Topics";
  import QuizSession from "./pages/QuizSession";
  import NotFound from "./pages/NotFound";
  import Login from "./pages/Login";
  import Register from "./pages/Register";
  import Profile from "./pages/Profile";
  import Anki from "./pages/Anki";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <BrowserRouter>
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>
              }>
                <div className="relative min-h-screen">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/universities" element={<UniversitiesIndex />} />
                    <Route path="/universities/compare" element={<UniversityComparison />} />
                    <Route path="/universities/:universityId" element={<UniversityDetail />} />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/quiz-session/:topicId?" element={<QuizSession />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/anki" element={<Anki />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Toaster />
                  <Sonner />
                </div>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    );
  };

  export default App;
