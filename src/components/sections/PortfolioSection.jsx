import Heading from "@components/Heading";
import ProjectCard from "@components/ProjectCard";
import { projects } from "../../constants/index";

const PortfolioSection = () => {
  return (
    <div className="space-y-10" id="portfolio">
      <Heading title="Projects" subTitle="Some of the works I have done" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
