
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const isMobile = useIsMobile();
  const slidesToScroll = isMobile ? 1 : 2;
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    slidesToScroll,
    skipSnaps: false,
    duration: 20
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
    <div className="relative flex flex-col items-center gap-8">
      <Carousel 
        opts={{ 
          align: "center",
          loop: true,
          slidesToScroll,
          skipSnaps: false,
          duration: 20
        }}
        className="w-full max-w-5xl"
      >
        <CarouselContent ref={emblaRef}>
          {projects.map((project) => (
            <CarouselItem key={project.title} className="md:basis-1/2 basis-full p-4">
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static bg-accent hover:bg-accent/90 text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]" />
          <CarouselNext className="static bg-accent hover:bg-accent/90 text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
