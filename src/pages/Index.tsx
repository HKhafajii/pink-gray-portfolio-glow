
import { useEffect, useRef } from "react";
import SocialSidebar from "@/components/SocialSidebar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import ContactForm from "@/components/ContactForm";

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

  return (
    <div className="min-h-screen bg-primary">
      <SocialSidebar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 fade-in opacity-0">
        <div className="text-left max-w-4xl">
          <h1 className="text-6xl font-bold text-secondary mb-4">Hi, I'm</h1>
          <h2 className="text-8xl font-bold text-accent mb-6">Your Name.</h2>
          <p className="text-2xl text-secondary/80">
            I'm a Software Engineer focused on building beautiful interfaces & experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-primary mb-12 fade-in opacity-0">
            Projects.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="fade-in opacity-0">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
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
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-primary mb-12 fade-in opacity-0">
            Let's connect.
          </h2>
          <div className="flex justify-between items-start">
            <div className="max-w-md fade-in opacity-0">
              <p className="text-primary/80 mb-8">
                If you want to know more about me or my work, or if you would just
                like to say hello, send me a message. I'd love to hear from you.
              </p>
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
  },
  // Add more projects as needed
];

const experience = [
  {
    title: "Software Engineer",
    company: "Company Name",
    period: "2022 - Present",
    description: "Description of your role and achievements.",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  // Add more experience items as needed
];

export default Index;
