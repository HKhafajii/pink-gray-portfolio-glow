
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

const Navigation = () => {
  const menuItems = [
    { label: "Wearable", href: "#wearable" },
    { label: "Neural", href: "#neural" },
    { label: "Programs", href: "#programs" },
    { label: "Updates", href: "#updates" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left icon */}
          <Avatar className="w-10 h-10">
            <AvatarImage src="/headshot.jpeg" alt="Hassan Alkhafaji" />
          </Avatar>

          {/* Center menu items */}
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-primary hover:text-primary/80 transition-colors text-base font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right search icon */}
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <Search className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
