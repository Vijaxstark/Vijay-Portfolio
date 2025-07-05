import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, University, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Creep Life Prediction for Superalloys using Gradient Boosting Decision Trees",
    date: "Dec 2024",
    venue: "CICT 2024, IIIT Allahabad",
    description: "Regression models for predicting creep life of superalloys using GBDT for accuracy and generalization.",
    color: "neon-cyan",
    link: "https://ieeexplore.ieee.org/document/10899585"
  },
  {
    title: "Biomimetic Seasnail Soft Robot for Underwater Exploration",
    date: "Mar 2025 (Accepted)",
    venue: "International Symposium on Underwater Technology (UT 2025), Taiwan",
    description: "Soft robotic platform with YOLOv11-based object detection for underwater trash identification.",
    color: "electric-purple"
  }
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 bg-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Publications
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card rounded-xl h-full hover:shadow-xl transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className={`h-8 w-8 mb-2 ${
                      publication.color === "neon-cyan" 
                        ? "text-[hsl(193,100%,50%)]" 
                        : "text-[hsl(258,84%,67%)]"
                    }`} />
                    <h3 className={`text-xl font-bold ${
                      publication.color === "neon-cyan" 
                        ? "text-[hsl(193,100%,50%)]" 
                        : "text-[hsl(258,84%,67%)]"
                    }`}>
                      {publication.title}
                    </h3>
                    <p className="text-[hsl(210,40%,89%)] text-sm mt-1">
                      {publication.date}
                    </p>
                  </div>
                  <p className="text-[hsl(210,40%,89%)] mb-4 leading-relaxed">
                    {publication.description}
                  </p>
                  <div className={`flex items-center justify-between ${
                    publication.color === "neon-cyan" 
                      ? "text-[hsl(193,100%,50%)]" 
                      : "text-[hsl(258,84%,67%)]"
                  }`}>
                    <div className="flex items-center text-sm">
                      <University className="h-4 w-4 mr-2" />
                      {publication.venue}
                    </div>
                    {publication.link && (
                      <Button
                        size="sm"
                        onClick={() => window.open(publication.link, '_blank')}
                        className={`${
                          publication.color === "neon-cyan"
                            ? "bg-[hsl(193,100%,50%)]/20 text-[hsl(193,100%,50%)] hover:bg-[hsl(193,100%,50%)]/30 border-[hsl(193,100%,50%)]/30"
                            : "bg-[hsl(258,84%,67%)]/20 text-[hsl(258,84%,67%)] hover:bg-[hsl(258,84%,67%)]/30 border-[hsl(258,84%,67%)]/30"
                        } border`}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Paper
                      </Button>
                    )}
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
