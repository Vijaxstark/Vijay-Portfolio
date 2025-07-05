import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

export function ContactSection() {
  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Vijay_Krishna_RV_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card rounded-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold mb-6 text-[hsl(193,100%,50%)]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Let's Connect
                    </motion.h3>
                    <motion.p
                      className="text-[hsl(210,40%,89%)] mb-8 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Let's connect or collaborate on ML/CV projects and innovative research opportunities!
                    </motion.p>
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-[hsl(193,100%,50%)] mr-4" />
                        <a 
                          href="mailto:vkrvvijay@gmail.com" 
                          className="text-[hsl(210,40%,89%)] hover:text-[hsl(193,100%,50%)] transition-colors"
                        >
                          vkrvvijay@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-[hsl(258,84%,67%)] mr-4" />
                        <span className="text-[hsl(210,40%,89%)]">+91 99401 88822</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-[hsl(193,100%,50%)] mr-4" />
                        <span className="text-[hsl(210,40%,89%)]">Chennai, India</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div>
                    <motion.h3
                      className="text-2xl font-bold mb-6 text-[hsl(258,84%,67%)]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Find Me Online
                    </motion.h3>
                    <motion.div
                      className="grid grid-cols-2 gap-4 mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href="https://github.com/Vijaxstark"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/vijay-krishna-rv-297159227"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        <span>LinkedIn</span>
                      </a>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        onClick={handleDownloadResume}
                        className="bg-gradient-to-r from-[hsl(193,100%,50%)] to-[hsl(258,84%,67%)] hover:from-[hsl(193,100%,45%)] hover:to-[hsl(258,84%,62%)] px-8 py-6 rounded-lg font-semibold inline-flex items-center transform hover:scale-105 transition-all duration-200"
                      >
                        <Download className="h-5 w-5 mr-2" />
                        Download Resume
                      </Button>
                    </motion.div>
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
