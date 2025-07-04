import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning & Deep Learning Specialization",
    provider: "Coursera",
    icon: Award,
    color: "neon-cyan"
  },
  {
    title: "Introduction to LLMs",
    provider: "NPTEL",
    icon: GraduationCap,
    color: "electric-purple"
  },
  {
    title: "Deep Learning for Computer Vision",
    provider: "NPTEL",
    icon: GraduationCap,
    color: "neon-cyan"
  },
  {
    title: "Advanced Financial Analytics",
    provider: "NPTEL",
    icon: GraduationCap,
    color: "electric-purple"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card rounded-xl hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <cert.icon className={`h-8 w-8 mr-4 ${
                      cert.color === "neon-cyan" 
                        ? "text-[hsl(193,100%,50%)]" 
                        : "text-[hsl(258,84%,67%)]"
                    }`} />
                    <div>
                      <h3 className={`text-xl font-bold ${
                        cert.color === "neon-cyan" 
                          ? "text-[hsl(193,100%,50%)]" 
                          : "text-[hsl(258,84%,67%)]"
                      }`}>
                        {cert.title}
                      </h3>
                      <p className="text-[hsl(210,40%,89%)] text-sm">
                        {cert.provider}
                      </p>
                    </div>
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
