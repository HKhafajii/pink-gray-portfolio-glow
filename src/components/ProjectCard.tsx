
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  className,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-lg p-6 h-[700px] w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      )}
      <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-primary/80 mb-4 overflow-y-auto max-h-[280px]">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-secondary text-primary text-sm rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
