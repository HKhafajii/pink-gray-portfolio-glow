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
    const resumeUrl = "/Hassan_Alkhafaji_Resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-primary pt-16">
      <Navigation />
      
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
              src="/headshot.jpeg"
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
    title: "MidnightGolf",
    description: "• Developed a full-stack iOS app using SwiftUI, Firebase, and MVVM, providing underserved high school students with access to resources like scholarships, event info, and dining etiquette guides. Integrated Firebase Authentication, Firestore, and Firebase Messaging for secure login, real-time data sync. Applied Dependency Injection to ensure modular, testable architecture and improved maintainability. Designed a user-friendly interface tailored for students, enhancing engagement while collaborating in an Agile workflow.",
    technologies: ["SwiftUI", "Firebase", "Objective-C"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
 
  {
    title: "Smart Facial Recognition Display",
    description: "Utilized Haar cascades and Local Binary Patterns Histograms for facial recognition and training the system to recognize individual family members based on stored image datasets. Implemented the computer vision pipeline using OpenCV in C++ to perform real-time face detection and recognition with high accuracy and low latency on a Raspberry Pi. Demonstrated hardware-software integration, including camera module setup, power regulation, and modular component testing.",
    technologies: ["C++", "OpenCV", "Matplotlib", "FastAPI", "Raspberry Pi"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MemoriaAR",
    description: "• Integrated MVVM architecture to take voice recordings using AVfoundation, images using PhotosUI, and implement them into a data model using Swift programming language.Designed an intuitive user interface using Apple’s HIG guidelines to create a seamless user experience, also making it accessible for different user groups that was tested by 50+ beta users.",
    technologies: ["Python", "Django", "SwiftUI", "MySQL"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "iMower",
    description: "Integrated a suite of sensors including ultrasonic distance sensors, bump switches, and gyroscopes to enable real-time obstacle detection, collision prevention, and orientation correction using VEX hardware. Developed the autonomous control system in C++, implementing PID algorithms to maintain precise motor control for straight-line travel, smooth turns across varying terrain, and a fail safe system that instantly stops motor function. Earned 2nd place out of 30+ teams in Henry Ford College’s Engineering Competition based on technical execution.",
    technologies: ["C++", "VEX", "Embedded Systems"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
 
];

const experience = [
  {
    title: "iOS Engineering Intern",
    company: "Apple Developer Academy",
    period: "2024 - Present",
    description: "Developing and deploying two full-stack iOS applications (iPhone and iPad) using SwiftUI and Firebase. Implementing Firebase Authentication, Firestore, and Cloud Functions to manage user data and real-time updates, ensuring secure and efficient backend operations with 1000+ underprivileged students. Conducting unit and UI testing to ensure application stability and performance across various iOS devices. Conducted comprehensive unit and UI testing across multiple iOS devices, ensuring application stability, performance, and accessibility by integrating inclusive features like VoiceOver and Dynamic Type.",
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
