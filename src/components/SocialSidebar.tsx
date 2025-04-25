
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-secondary hover:text-accent transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
