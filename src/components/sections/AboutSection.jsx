import Button from "@/components/Button";
import { socials } from "@/constants";
import profilePicture from "@/assets/images/me.jpg";
import resume from "@/assets/Sandesh_Joshi_CV.pdf";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-6 gap-y-10 gap-x-8 lg:gap-x-16 items-center">
      <div className="col-span-6 lg:col-span-4 space-y-6 order-2 lg:order-1">
        <p className="eyebrow">// about</p>

        <div className="space-y-2">
          <h1 className="main-heading">Sandesh Joshi</h1>
          <p
            className="text-big text-muted type-caret"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}
          >
            const role = "Software Engineer"
          </p>
        </div>

        <p className="text-normal max-w-lg" style={{ color: "var(--color-muted)" }}>
          I build efficient, modern web applications — from the interface
          someone taps first to the API that quietly does the work behind
          it. I care about clean structure, fast pages, and details that
          make software feel considered.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button href={resume} download variant="primary">
            Download résumé
          </Button>
          <Button href="#portfolio" variant="outline">
            View projects
          </Button>
        </div>

        <div className="flex items-center gap-6 pt-4 text-small">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <span className="text-base">{social.icon}</span>
              <span style={{ fontFamily: "var(--font-mono)" }}>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="col-span-6 lg:col-span-2 order-1 lg:order-2">
        <div className="relative max-w-xs mx-auto lg:max-w-none">
          <div
            className="absolute -top-3 left-4 z-10 px-3 py-1 rounded-t-md text-smallest bg-ink text-paper"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            me.jpg
          </div>
          <img
            src={profilePicture}
            alt="Portrait of Sandesh Joshi"
            className="rounded-md object-cover w-full aspect-3/4 border border-line"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
