
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Navigation = () => {
  const leftMenuItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
  ];

  const rightMenuItems = [
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left menu items */}
          <ul className="flex items-center space-x-8">
            {leftMenuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-accent hover:text-accent/80 transition-colors font-bold text-shadow"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Center logo */}
          <Avatar className="w-12 h-12 shadow-[0_0_30px_rgba(245,249,233,0.3)]">
            <AvatarImage src="/headshot.jpeg" alt="Hassan Alkhafaji" />
          </Avatar>

          {/* Right menu items */}
          <ul className="flex items-center space-x-8">
            {rightMenuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-accent hover:text-accent/80 transition-colors font-bold text-shadow"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
