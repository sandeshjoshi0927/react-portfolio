import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/index";

const PortfolioSection = () => {
  return (
    <div className="space-y-10 w-full" id="portfolio">
      <Heading
        eyebrow="// projects"
        title="Featured Projects"
        subTitle="A few things I've shipped and open-sourced"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
