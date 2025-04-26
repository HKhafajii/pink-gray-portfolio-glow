
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
        "bg-white rounded-lg shadow-lg p-6 h-[600px] md:h-[500px] w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col",
        className
      )}
    >
      {image && (
        <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-50 rounded overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-primary/80 mb-4 flex-grow overflow-y-auto">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto pb-2">
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
    </div>
  );
};

export default ProjectCard;
