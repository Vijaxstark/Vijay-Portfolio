import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { PublicationsSection } from "@/components/publications-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { CompetitionsSection } from "@/components/competitions-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(225,58%,8%)] via-[hsl(232,13%,12%)] to-[hsl(225,58%,8%)] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <SkillsSection />
      <CertificationsSection />
      <CompetitionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
