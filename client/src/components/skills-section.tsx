import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C++", "JavaScript", "HTML"]
  },
  {
    title: "ML & Deep Learning",
    icon: Brain,
    skills: [
      "PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", 
      "OpenCV", "MediaPipe", "YOLO", "U-Net"
    ]
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: [
      "Git", "SQL", "Docker", "FastAPI", "W&B", "PyTorch Lightning"
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[hsl(232,13%,12%)] to-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card rounded-xl h-full">
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-4 flex items-center ${
                    index % 2 === 0 ? "text-[hsl(193,100%,50%)]" : "text-[hsl(258,84%,67%)]"
                  }`}>
                    <category.icon className="h-5 w-5 mr-2" />
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {(category.skills as string[]).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`text-xs ${
                          skillIndex % 2 === 0
                            ? "bg-[hsl(193,100%,50%)]/20 text-[hsl(193,100%,50%)] border-[hsl(193,100%,50%)]/30"
                            : "bg-[hsl(258,84%,67%)]/20 text-[hsl(258,84%,67%)] border-[hsl(258,84%,67%)]/30"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
