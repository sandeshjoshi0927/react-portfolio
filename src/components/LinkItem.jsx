const LinkItem = ({ children, path }) => {
  const filename = `${String(children).toLowerCase()}.jsx`;

  return (
    <li className="group relative flex items-stretch">
      <a
        href={path}
        className="flex items-center gap-2 px-4 border-r border-line text-smaller text-muted hover:text-ink hover:bg-surface transition-colors"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-line group-hover:bg-accent transition-colors" />
        {filename}
      </a>
      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </li>
  );
};

export default LinkItem;
