import { useEffect, useRef } from "react";
import { Download, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialSidebar from "@/components/SocialSidebar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import ProjectCarousel from "@/components/ProjectCarousel";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up", "opacity-100");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-primary pt-16">
      <Navigation />
      <SocialSidebar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 fade-in opacity-0">
        <div className="flex items-center gap-8 max-w-4xl w-full">
          <div className="text-left flex-1">
            <h1 className="text-6xl font-bold text-secondary mb-4">Hi, I'm</h1>
            <h2 className="text-8xl font-bold text-accent mb-6">Hassan Alkhafaji.</h2>
            <p className="text-2xl text-secondary/80 mb-8">
              I'm a Software Engineer focused on building beautiful interfaces & experiences.
            </p>
            <Button 
              onClick={handleDownloadResume}
              className="bg-accent text-black hover:bg-accent/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
          <div className="w-64 h-64 bg-secondary/10 rounded-full flex-shrink-0">
            <img
              src="/headshot.jpg"
              alt="Your Name"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-primary mb-12 fade-in opacity-0">
            Projects.
          </h2>
          <div className="fade-in opacity-0">
            <ProjectCarousel projects={projects} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-secondary mb-12 fade-in opacity-0">
            Experience.
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={exp.company} className="fade-in opacity-0">
                <ExperienceItem {...exp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex-1 fade-in opacity-0">
              <h2 className="text-6xl font-bold text-primary mb-8">
                Let's connect.
              </h2>
              <p className="text-primary/80 text-lg mb-12">
                If you want to know more about me or my work, or if you would just
                like to say hello, send me a message. I'd love to hear from you.
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <Twitter className="w-8 h-8" />
                </a>
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="flex-1 fade-in opacity-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const projects = [
  {
    title: "Project One",
    description: "A description of your first project goes here.",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Two",
    description: "A description of your second project goes here.",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Three",
    description: "A description of your third project goes here.",
    technologies: ["React", "Next.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Four",
    description: "A description of your fourth project goes here.",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
];

const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading development of enterprise applications and mentoring junior developers.",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2020 - 2022",
    description: "Developed and maintained multiple web applications using modern technologies.",
    technologies: ["React", "Python", "PostgreSQL"],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Co",
    period: "2018 - 2020",
    description: "Built responsive user interfaces and implemented complex frontend features.",
    technologies: ["Vue.js", "JavaScript", "CSS"],
  },
];

export default Index;
