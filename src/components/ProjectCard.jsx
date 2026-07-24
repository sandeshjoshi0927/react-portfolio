import { FaPlayCircle, FaGithub } from "@/constants/icons";

const ProjectCard = ({
  project: { thumbnail, name, desc, liveUrl, githubUrl, techStacks },
}) => {
  return (
    <div className="h-full flex flex-col rounded-md border border-line bg-paper overflow-hidden transition-colors hover:border-accent group">
      <div className="relative overflow-hidden border-b border-line bg-surface">
        <img
          src={thumbnail}
          alt={`${name} preview`}
          className="w-full object-cover aspect-16/10 grayscale-[35%] group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 grow">
        <h3 className="text-normal font-semibold tracking-tight">{name}</h3>
        <p className="text-smaller line-clamp-2 grow" style={{ color: "var(--color-muted)" }}>
          {desc}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-smallest">
          {techStacks.map((stack, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1.5 px-2 py-1 rounded border border-line"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
            >
              {stack.icon}
              {stack.name}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 mt-1 border-t border-line text-smaller">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 pt-3 hover:text-accent transition-colors"
          >
            <FaPlayCircle />
            <span>Live preview</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 pt-3 hover:text-accent transition-colors"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
