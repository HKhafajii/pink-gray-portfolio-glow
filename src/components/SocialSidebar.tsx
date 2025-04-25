
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 space-y-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="block text-primary hover:text-accent transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
