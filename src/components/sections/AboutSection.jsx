import Button from "@components/Button";

const AboutSection = () => {
  return (
    <div className="f">
      <div className="grid grid-cols-12 gap-2 place-content-start">
        <div className="col-span-8 space-y-8 flex-center flex-col items-start">
          <div>
            <span className="main-heading">Sandesh Joshi</span>
            <p className="sub-heading">
              a{" "}
              <span className="text-primary opacity-65">Software Engineer</span>{" "}
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

          <div className="flex gap-2 text-smaller">
            Follow me:
            <span>LinkedIn</span>
            <span>Github</span>
            <span>Facebook</span>
          </div>
        </div>
        <div className="col-span-4 aspect-3/4 w-full">
          <img
            src="me.jpg"
            alt="image"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
