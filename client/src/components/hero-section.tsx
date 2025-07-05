import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Machine Learning Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(225,58%,8%)] via-[hsl(232,13%,12%)] to-[hsl(225,58%,8%)]" />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-[hsl(193,100%,50%)]/10 to-transparent"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">VIJAY KRISHNA R V</span>
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl mb-8 text-[hsl(210,40%,89%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="border-r-2 border-[hsl(193,100%,50%)] pr-2">
              {displayText}
            </span>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl mb-12 text-[hsl(210,40%,89%)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Specialized in deep learning, computer vision, and multi-modal AI systems
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={handleScrollToProjects}
              className="bg-gradient-to-r from-[hsl(193,100%,50%)] to-[hsl(258,84%,67%)] hover:from-[hsl(193,100%,45%)] hover:to-[hsl(258,84%,62%)] px-8 py-6 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </Button>
            <Button
              onClick={handleScrollToContact}
              variant="outline"
              className="border-2 border-[hsl(193,100%,50%)] text-[hsl(193,100%,50%)] hover:bg-[hsl(193,100%,50%)] hover:text-[hsl(225,58%,8%)] px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-[hsl(193,100%,50%)]" />
      </motion.div>
    </section>
  );
}
