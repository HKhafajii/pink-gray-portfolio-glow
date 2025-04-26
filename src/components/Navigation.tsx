
import { cn } from "@/lib/utils";

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
