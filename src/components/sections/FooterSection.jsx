import { FaGithub, FaLinkedin } from "@/constants/icons";

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-ink text-paper"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3 flex flex-wrap items-center justify-between gap-3 text-smallest">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-accent text-paper">
            main
          </span>
          <span className="opacity-60">
            © {year} Sandesh Joshi. Built with React &amp; Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-4 opacity-80">
          <a
            href="https://github.com/sandeshjoshi0927"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-accent-bright transition-colors"
          >
            <FaGithub /> github
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-joshi-538110200/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-accent-bright transition-colors"
          >
            <FaLinkedin /> linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
