import Button from "@components/Button";
import { FaLinkedin, FaGithub } from "@/icons";

const AboutSection = () => {
  const socials = [
    {
      url: "https://www.linkedin.com/in/sandesh-joshi-538110200/",
      icon: <FaLinkedin />,
    },
    {
      url: "https://github.com/sandeshjoshi0927",
      icon: <FaGithub />,
    },
  ];
  return (
    <div className="grid grid-cols-6 gap-10 items-center">
      <div className="col-span-6 lg:col-span-4 space-y-8">
        <div>
          <span className="main-heading">Sandesh Joshi</span>
          <p className="sub-heading">
            a <span className="text-primary opacity-65">Software Engineer</span>{" "}
            I{/* TODO */}
          </p>
        </div>
        <p className="text-smaller font-normal opacity-40">
          Passionate about building efficient, modern web applications with
          intuitive interfaces, seamless user experiences, and
          performance-focused solutions.
        </p>
        <Button
          className="text-smaller hover:opacity-85"
          color="bg-primary"
          download
        >
          Resume
        </Button>
        <div className="flex gap-2 items-center text-small">
          Follow me:
          {socials.map((social) => (
            <a href={social.url} target="_blank" className="text-normal">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-2 hidden lg:block aspect-3/4 lg:w-full">
        <img
          src="me.jpg"
          alt="image"
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutSection;
