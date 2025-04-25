
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: "https://github.com/HKhafajii", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hassan-alkhafaji/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alkhafajihassan@gmail.com", label: "Email" },
  ];

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-6">
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
  );
};

export default SocialSidebar;
