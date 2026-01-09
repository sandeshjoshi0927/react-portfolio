import { useState, useRef, useEffect } from "react";
import { IoMdMore, FaPlayCircle, FaGithub } from "../icons";

const ProjectCard = ({ project }) => {
  const [openViewMore, setViewMore] = useState(false);

  const handleClick = () => {
    setViewMore(!openViewMore);
  };

  const btnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setViewMore(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setViewMore]);

  return (
    <div className="col-span-4 hover:drop-shadow-xl">
      <div className="aspect-6/2 w-full h-full relative">
        <img
          src={project.thumbnail}
          alt="project"
          className="object-cover w-full h-full rounded-tr-2xl rounded-tl-2xl border-l border-t border-r border-secondary grayscale-50"
        />
        <div
          className="absolute text-white z-98 top-2 right-2 p-2 rounded-full bg-secondary text-small cursor-pointer"
          ref={btnRef}
          onClick={handleClick}
        >
          <IoMdMore />

          {openViewMore && (
            <div className="absolute z-98 top-12 right-1 bg-secondary rounded-xl px-4 py-2 text-smaller flex flex-col gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex gap-1 items-center hover:opacity-85"
              >
                <FaPlayCircle />
                <span>Preview</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="flex gap-1 items-center hover:opacity-85"
              >
                <FaGithub />
                <span>Github</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-bl-2xl rounded-br-2xl bg-secondary text-white flex flex-col p-4 gap-2">
        <h2 className="text-small font-semibold">{project.name}</h2>
        <p className="text-smaller truncate">{project.desc}</p>
        <div className="text-smallest flex items-center gap-3">
          {project.techStacks.map((stack) => (
            <span className="flex items-center gap-1">
              {stack.icon}
              {stack.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
