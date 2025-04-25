
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    slidesToScroll: 2 
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <Carousel 
      opts={{ 
        align: "center",
        loop: true,
        slidesToScroll: 2
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent ref={emblaRef}>
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
