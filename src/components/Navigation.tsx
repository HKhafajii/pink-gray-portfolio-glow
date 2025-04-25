
import { cn } from "@/lib/utils";

const Navigation = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex items-center justify-end h-16 space-x-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-secondary hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
