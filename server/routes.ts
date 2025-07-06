import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(__dirname, "resume.pdf");
      res.download(resumePath, "Vijay_Krishna_RV_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(404).json({ message: "Resume not found" });
        }
      });
    } catch (error) {
      console.error("Error serving resume:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
