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

  useEffect(() => {
    const headshot = document.querySelector(".headshot-container");
    setTimeout(() => {
      headshot?.classList.add("animate-flip-in");
    }, 1000);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "/Hassan_Alkhafaji_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-primary pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 pb-12 fade-in opacity-0">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">Hi, I'm</h1>
            <h2 className="text-6xl md:text-8xl font-bold text-accent mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">Hassan Alkhafaji.</h2>
            <p className="text-xl md:text-2xl text-secondary/80 mb-8">
              I'm a Software Engineer focused on building on Apple's ecosystem and Autonomous Robotics.
            </p>
            <div className="headshot-container opacity-0 -translate-x-full md:hidden w-64 h-64 mx-auto mb-8">
              <div className="bg-secondary/10 rounded-full w-full h-full shadow-[0_0_30px_rgba(245,249,233,0.3)]">
                <img
                  src="/headshot.jpeg"
                  alt="Hassan Alkhafaji"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <Button 
              onClick={handleDownloadResume}
              className="bg-accent text-black hover:bg-accent/90 mb-8"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
          <div className="headshot-container hidden md:block opacity-0 -translate-x-full w-64 h-64">
            <div className="bg-secondary/10 rounded-full w-full h-full shadow-[0_0_30px_rgba(245,249,233,0.3)]">
              <img
                src="/headshot.jpeg"
                alt="Hassan Alkhafaji"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
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
              <div className="flex items-center justify-center md:justify-start space-x-6 mb-8 md:mb-0">
                <a href="https://github.com/HKhafajii" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/hassan-alkhafaji/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="mailto:alkhafajihassan@gmail.com" className="text-primary hover:text-accent transition-colors">
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="w-full md:flex-1 fade-in opacity-0">
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
    title: "MidnightGolf",
    description: "Developed a full-stack iOS app with SwiftUI, Firebase, and MVVM, featuring secure authentication, real-time data sync, modular architecture, and a student-focused UI to deliver resources like scholarships and events in an Agile team setting.",
    technologies: ["SwiftUI", "Firebase", "Objective-C"],
    image: "/placeholder.svg",
  },
 
  {
    title: "Smart Facial Recognition Display",
    description: "Built a real-time facial recognition system on a Raspberry Pi using Haar cascades, LBPH, and OpenCV in C++, integrating camera hardware and power management for a high-accuracy, low-latency solution.",
    technologies: ["C++", "OpenCV", "Matplotlib", "FastAPI", "Raspberry Pi"],
    image: "/placeholder.svg",
  },
  {
    title: "MemoriaAR",
    description: "Built a Swift app using MVVM to capture voice recordings with AVFoundation and images with PhotosUI, integrating them into a data model with an intuitive, accessible UI designed per Apple’s HIG and tested by 50+ beta users.",
    technologies: ["Python", "Django", "SwiftUI", "MySQL"],
    image: "/placeholder.svg",
  },
  {
    title: "iMower",
    description: "Engineered an autonomous VEX robot using C++ with integrated sensors and PID control for real-time obstacle detection, smooth navigation, and fail-safe operation, earning 2nd place out of 30+ teams at Henry Ford College’s Engineering Competition.",
    technologies: ["C++", "VEX", "Embedded Systems"],
    image: "/placeholder.svg",
  },
 
];

const experience = [
  {
    title: "iOS Engineering Intern",
    company: "Apple Developer Academy",
    period: "2024 - Present",
    description: "Developing and deploying two full-stack iOS applications (iPhone and iPad) using SwiftUI and Firebase. Implementing Firebase Authentication, Firestore, and Cloud Functions to manage user data and real-time updates, ensuring secure and efficient backend operations with 1000+ underprivileged students. Conducting unit and UI testing to ensure application stability and performance across various iOS devices. Conducting comprehensive unit and UI testing across multiple iOS devices, ensuring application stability, performance, and accessibility by integrating inclusive features like VoiceOver and Dynamic Type.",
    technologies: ["SwiftUI", "Firebase", "Objective-C"],
  },
  {
    title: "Adjunct Instructor",
    company: "Henry Ford College",
    period: "2025 - Present",
    description: "Instructing 20+ students in mastering Apple’s ecosystem through challenge-based learning in Swift and SwiftUI. Assess and troubleshoot technical issues brought by students, faculty, and staff, from code bugs to device configuration. Develop and review complex student projects, providing guidance on architecture, debugging, and best practices.",
    technologies: ["Swift", "SwiftUI", "Xcode"],
  },
  {
    title: "Software Engineering Intern",
    company: "BeAware Deaf Assistant",
    period: "2023 - 2025",
    description: "Implemented machine learning models using CoreML and PyTorch to increase transcription accuracy by 12%. Coordinated intensive testing and debugging to ensure reliability across environments reducing latency by 20%. Provided closed captioning tech support to 10+ conferences across the U.S and Canada, including AV equipment.",
    technologies: ["Python", "Swift", "ML/AI"],
  },
];

export default Index;
