import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Globe, Award } from "lucide-react";

const competitions = [
  {
    title: "🥈 2nd Place - Unfold 2023",
    subtitle: "Push & Router Tracks",
    description: "Built 'Coinvo,' a decentralized chat app with crypto payments and token-gated group access using Polygon blockchain.",
    icon: Trophy,
    color: "yellow"
  },
  {
    title: "🥈 Finalists - SAUVC 2024",
    subtitle: "Team Nira, Singapore",
    description: "Designed and deployed an autonomous underwater vehicle; led vision and systems architecture for international competition.",
    icon: Medal,
    color: "silver"
  },
  {
    title: "🌐 Global Finalists (3rd Worldwide)",
    subtitle: "MATE ROV Virtual Challenge",
    description: "Contributed to simulation design, testing pipelines, and control systems for autonomous underwater robotics.",
    icon: Globe,
    color: "blue"
  },
  {
    title: "🏆 Top 100 Finalist",
    subtitle: "Create the Future Design Contest",
    description: "Proposed a hybrid AUV-ROV platform for underwater exploration and aquaculture monitoring (Tech Briefs, USA).",
    icon: Award,
    color: "orange"
  }
];

const getIconColor = (color: string) => {
  switch (color) {
    case "yellow": return "text-yellow-400";
    case "silver": return "text-gray-400";
    case "blue": return "text-blue-400";
    case "orange": return "text-orange-400";
    default: return "text-[hsl(193,100%,50%)]";
  }
};

export function CompetitionsSection() {
  return (
    <section id="competitions" className="py-20 bg-gradient-to-br from-[hsl(232,13%,12%)] to-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Competitions & Achievements
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card rounded-xl hover:shadow-xl transition-all h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <competition.icon className={`h-8 w-8 mr-4 ${getIconColor(competition.color)}`} />
                    <div>
                      <h3 className={`text-xl font-bold ${
                        index % 2 === 0 ? "text-[hsl(193,100%,50%)]" : "text-[hsl(258,84%,67%)]"
                      }`}>
                        {competition.title}
                      </h3>
                      <p className="text-[hsl(210,40%,89%)] text-sm">
                        {competition.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-[hsl(210,40%,89%)] leading-relaxed">
                    {competition.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
