import Button from "@/components/Button";
import profilePicture from "@/assets/images/me.jpg";
import { socials } from "@/constants";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-6 gap-4 md:gap-8 items-center">
      <div className="col-span-6 lg:col-span-4 space-y-4">
        <div>
          <span className="main-heading">Sandesh Joshi</span>
          <p className="sub-heading">
            a <span className="text-primary opacity-65">Software Engineer</span>{" "}
            {/* TODO */}
          </p>
        </div>
        <p className="text-normal font-normal opacity-40">
          Passionate about building efficient, modern web applications with
          intuitive interfaces, seamless user experiences, and
          performance-focused solutions.
        </p>
        <Button
          className="text-smaller hover:opacity-85 uppercase"
          color="bg-primary"
        >
          <a href="@assets/SANDESH JOSHI PCV.pdf" download>
            Download Resume
          </a>
        </Button>
        <div className="flex flex-col items-start gap-2 text-small">
          Follow:
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              className="text-small flex items-center gap-1"
            >
              {social.icon}
              <p>{social.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-2 lg:w-full">
        <img
          src={profilePicture}
          alt="image"
          className="rounded-lg object-cover w-full h-full  aspect-3/4 "
        />
      </div>
    </div>
  );
};

export default AboutSection;
