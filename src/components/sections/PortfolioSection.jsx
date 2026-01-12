import Heading from "@components/Heading";
import ProjectCard from "@components/ProjectCard";
import { FaReact, RiTailwindCssFill, FaHtml5, FaCss3Alt, FaJs } from "@/icons";
import darazClone from "@assets/daraz-clone.png";
import todoApp from "@assets/todo-app.png";
import weatherApp from "@assets/weather-app.png";

const PortfolioSection = () => {
  const projects = [
    {
      name: "TODO APP",
      thumbnail: todoApp,
      desc: "Manage your tasks with ease",
      liveUrl: "https://sandeshjoshi0927.github.io/TODO-APP/",
      githubUrl: "https://github.com/sandeshjoshi0927/TODO-APP",
      techStacks: [
        { icon: <FaReact />, name: "React JS" },
        { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
      ],
    },
    {
      name: "Daraz Clone",
      thumbnail: darazClone,
      desc: "UI replication of South Asia's leading ecommerce marketplace.",
      liveUrl: "https://sandeshjoshi0927.github.io/daraz-clone/",
      githubUrl: "https://github.com/sandeshjoshi0927/daraz-clone",
      techStacks: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJs />, name: "Javascript" },
      ],
    },
    {
      name: "Weather App",
      thumbnail: weatherApp,
      desc: "Live weather application which shows the current weather of the places.",
      liveUrl: "https://sandeshjoshi0927.github.io/weather-app/",
      githubUrl: "https://github.com/sandeshjoshi0927/weather-app",
      techStacks: [
        { icon: <FaReact />, name: "React JS" },
        { icon: <RiTailwindCssFill />, name: "TailwindCSS" },
      ],
    },
  ];

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
