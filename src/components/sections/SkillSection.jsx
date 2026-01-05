import { useState } from "react";
import Heading from "@components/Heading";
import {
  FaReact,
  RiNextjsFill,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  SiMui,
  SiExpress,
  SiNestjs,
  FaNodeJs,
  FaBan,
  FaJs,
  SiTypescript,
  FaPhp,
  DiMysql,
  DiMsqlServer,
  SiMongodb,
  FaGithub,
  SiPostman,
  SiSwagger,
  FaFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  FaBootstrap,
  RiTailwindCssFill,
  SiOracle,
} from "@/icons";

const SkillSection = () => {
  const skills = [
    {
      title: "Frontend",
      details: [
        { icon: <FaReact />, name: "React JS" },
        { icon: <RiNextjsFill />, name: "Next JS" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
        { icon: <SiMui />, name: "Material UI" },
      ],
    },
    {
      title: "Backend & APIs",
      details: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <FaNodeJs />, name: "Node JS" },
        { icon: <SiExpress />, name: "Express JS" },
        { icon: <SiNestjs />, name: "Nest JS" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiSwagger />, name: "Swagger" },
      ],
    },
    {
      title: "Programming Languages",
      details: [
        { icon: <FaJs />, name: "Javascript" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <FaPhp />, name: "PHP" },
      ],
    },
    {
      title: "Database",
      details: [
        { icon: <DiMysql />, name: "MySQL" },
        { icon: <DiMsqlServer />, name: "MSSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiOracle />, name: "Oracle" },
      ],
    },
    {
      title: "Tools & Design",
      details: [
        { icon: <FaGithub />, name: "Git & GitHub" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiCanva />, name: "Canva" },
        { icon: <SiAdobephotoshop />, name: "Photoshop" },
        { icon: <SiAdobeillustrator />, name: "Illustrator" },
      ],
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState([skills[0]]);

  const handleClick = (title) => {
    const skill = skills.filter((skill) => {
      return skill.title == title;
    });

    setSelectedSkill(skill);
  };

  return (
    <div id="skills" className="space-y-10">
      <Heading
        title="Skills"
        subTitle="Tools & Technologies I am confident in"
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-evenly p-4 text-smaller">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleClick(skill.title)}
              className={`cursor-pointer border-t border-l border-r px-4 py-2 rounded ${
                selectedSkill[0].title == skill.title
                  ? "border-b-3 border-primary decoration-3"
                  : "border-b"
              }`}
            >
              {skill.title}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-10 place">
          {selectedSkill.map((skill) =>
            skill.details.map((detail) => (
              <div className="px-10 py-2 space-y-2 col-span-3 grid place-content-center">
                <div className="w-30 h-30 rounded-full bg-secondary text-white flex text-6xl items-center justify-center">
                  {detail.icon ? detail.icon : <FaBan />}
                </div>
                <div className="text-center">{detail.name}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
