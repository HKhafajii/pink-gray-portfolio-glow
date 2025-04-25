
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <ProjectCard {...project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ProjectCarousel;
