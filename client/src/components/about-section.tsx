import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@assets/link_1751702466972.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[hsl(232,13%,12%)] to-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card rounded-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="order-1 md:order-2 md:col-span-2">
                    <motion.h3
                      className="text-2xl font-bold mb-4 text-[hsl(193,100%,50%)]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Machine Learning Engineer
                    </motion.h3>
                    <motion.p
                      className="text-[hsl(210,40%,89%)] mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Passionate ML engineer specializing in deep learning, computer vision, and multi-modal AI systems. 
                      Currently exploring inverse materials discovery and underwater robotics applications.
                    </motion.p>
                    <motion.p
                      className="text-[hsl(210,40%,89%)] mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      B.Tech in Mechanical Engineering with Minor in ML from IIITDM Kancheepuram (CGPA: 8.78/10). 
                      Published researcher with international competition experience.
                    </motion.p>
                  </div>
                  <div className="order-2 md:order-1">
                    <motion.img
                      src={profileImage}
                      alt="Vijay Krishna R V - Professional portrait"
                      className="rounded-xl shadow-lg w-full h-auto max-w-sm mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
