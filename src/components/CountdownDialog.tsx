import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import EarlyAccessForm from "@/components/EarlyAccessForm";

const CountdownDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';
  const t = translations[language].hero.countdown;

  useEffect(() => {
    // Show dialog after 20 seconds
    const timer = setTimeout(() => {
      const hasSeenCountdown = localStorage.getItem('hasSeenCountdown');
      if (!hasSeenCountdown) {
        setIsOpen(true);
      }
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set deadline to 20 days from when the component first mounts
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 20);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = deadline.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once when component mounts

  const handleClose = () => {
    localStorage.setItem('hasSeenCountdown', 'true');
    setIsOpen(false);
  };

  const timeUnits = [
    { value: timeLeft.days, label: t.days },
    { value: timeLeft.hours, label: t.hours },
    { value: timeLeft.minutes, label: t.minutes },
    { value: timeLeft.seconds, label: t.seconds }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={`fixed bottom-4 right-4 max-w-sm bg-white rounded-xl shadow-2xl border border-primary/20 ${isRTL ? 'rtl' : 'ltr'}`}>
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 rounded-full p-2 opacity-70 hover:opacity-100 transition-opacity bg-gray-100 hover:bg-gray-200"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-3"
          >
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-4 gap-2"
          >
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-b from-primary/5 to-primary/10 border border-primary/20"
              >
                <span className="text-2xl font-bold text-primary">{unit.value}</span>
                <span className="text-xs text-muted-foreground mt-1">{unit.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <EarlyAccessForm 
              trigger={
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t.cta}
                </Button>
              }
            />
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CountdownDialog;
