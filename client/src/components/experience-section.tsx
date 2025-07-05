import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import auvRobotImage from "@assets/Screenshot 2025-07-05 132032_1751702155178.png";

const experiences = [
  {
    title: "Research Intern",
    company: "Science and Humanities Dept, IIITDM Kancheepuram",
    period: "Dec 2023 – present",
    description: [
      "Built regression-based models to predict creep life of nickel-based superalloys using compositional and microstructural features",
      "Results published at CICT 2024 conference",
      "Currently designing an inverse materials discovery pipeline using conditional GANs"
    ],
    color: "neon-cyan"
  },
  {
    title: "Team Lead",
    company: "AUV Society, IIITDM",
    period: "July 2022 – June 2024",
    description: [
      "Led 22-member team (Team Nira) building autonomous underwater vehicle from ground up",
      "Designed mechanical components and developed real-time YOLO object detection pipelines",
      "SAUVC 2024 finalists - presented fully functional AUV at international competition"
    ],
    color: "electric-purple",
    image: auvRobotImage
  },
  {
    title: "Research Intern",
    company: "AMTDC, IIT Madras",
    period: "May 2023 – July 2023",
    description: [
      "Developed a time synchronization system using Raspberry Pi and Precision Time Protocol (PTP)",
      "Improved coordination in industrial and robotic applications"
    ],
    color: "neon-cyan"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[hsl(232,13%,12%)] to-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(193,100%,50%)] to-[hsl(258,84%,67%)]"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="mb-12 ml-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-10 w-4 h-4 rounded-full animate-pulse ${
                  experience.color === "neon-cyan" 
                    ? "bg-[hsl(193,100%,50%)]" 
                    : "bg-[hsl(258,84%,67%)]"
                }`}></div>
                
                <Card className="glass-card rounded-xl">
                  <CardContent className="p-6">
                    {experience.image && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <img
                          src={experience.image}
                          alt="AUV Robot - Team Nira"
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className={`text-xl font-bold ${
                        experience.color === "neon-cyan" 
                          ? "text-[hsl(193,100%,50%)]" 
                          : "text-[hsl(258,84%,67%)]"
                      }`}>
                        {experience.title}
                      </h3>
                      <span className="text-[hsl(210,40%,89%)] text-sm">
                        {experience.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold mb-4 text-white">
                      {experience.company}
                    </h4>
                    <ul className="text-[hsl(210,40%,89%)] space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-[hsl(193,100%,50%)] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
