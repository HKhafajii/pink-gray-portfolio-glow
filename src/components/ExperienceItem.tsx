
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-secondary/50 rounded-lg p-6 cursor-pointer transition-all duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          <p className="text-accent">@{company}</p>
        </div>
        <span className="text-primary/60">{period}</span>
      </div>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-96 mt-4" : "max-h-0"
      )}>
        <p className="text-primary/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-primary/60">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
