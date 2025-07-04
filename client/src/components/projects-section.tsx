import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Deepfake Detection",
    description: "Built a deep learning pipeline using CNN, ViT, and XceptionNet to classify real vs. fake video frames with face-centric preprocessing.",
    metrics: [
      { label: "Accuracy", value: "97.8%" },
      { label: "AUC-ROC", value: "0.9978" }
    ],
    tech: ["PyTorch", "Computer Vision", "MTCNN"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Brain Tumor Segmentation",
    description: "Developed a U-Net-based model for brain tumor segmentation from MRI scans with custom data generators and Dice loss.",
    metrics: [
      { label: "Dice Score", value: "0.87" },
      { label: "IoU", value: "0.80" }
    ],
    tech: ["U-Net", "Medical AI", "Segmentation"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "News Summarization",
    description: "Fine-tuned BART transformer model on ILSUM dataset for generating abstractive summaries from long-form news articles.",
    metrics: [
      { label: "ROUGE-1", value: "50.18" },
      { label: "ROUGE-L", value: "45.38" }
    ],
    tech: ["BART", "NLP", "Transformers"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Document Parsing",
    description: "Fine-tuned LayoutLMv3 for token classification in document understanding with PyTorch Lightning and W&B integration.",
    metrics: [
      { label: "F1-Score", value: "84.6%" },
      { label: "Accuracy", value: "89.2%" }
    ],
    tech: ["LayoutLMv3", "Document AI", "PyTorch"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "BMI & Gender Estimation",
    description: "Multi-task prediction system using facial images with Swin Transformer V2 and ResNet-50 for BMI and gender estimation.",
    metrics: [
      { label: "R² Score", value: "0.91" },
      { label: "Correlation", value: "0.92" }
    ],
    tech: ["Swin Transformer", "ResNet-50", "Multi-task"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Real-Time Pose Classification",
    description: "Real-time system for classifying human poses using MediaPipe, enabling gesture-triggered virtual assistant actions.",
    metrics: [
      { label: "Performance", value: "Real-time" },
      { label: "Feature", value: "Gesture Control" }
    ],
    tech: ["MediaPipe", "Real-time", "Pose Detection"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[hsl(225,58%,8%)]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card rounded-xl h-full hover:shadow-xl transition-all transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[hsl(193,100%,50%)]">
                    {project.title}
                  </h3>
                  <p className="text-[hsl(210,40%,89%)] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex justify-between text-sm mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="text-green-400 font-medium">
                        {metric.label}: {metric.value}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className={`text-xs ${
                          techIndex % 2 === 0
                            ? "bg-[hsl(258,84%,67%)]/20 text-[hsl(258,84%,67%)] border-[hsl(258,84%,67%)]/30"
                            : "bg-[hsl(193,100%,50%)]/20 text-[hsl(193,100%,50%)] border-[hsl(193,100%,50%)]/30"
                        }`}
                      >
                        {tech}
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
