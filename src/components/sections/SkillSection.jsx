import { useState } from "react";
import Heading from "@components/Heading";
import { FaBan } from "@/constants/icons";
import { skills } from "@/constants";

const SkillSection = () => {
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
        <div className="flex items-center justify-evenly flex-wrap gap-2 p-4 text-smaller mb-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => handleClick(skill.title)}
              className={`w-full min-[420px]:w-fit text-center cursor-pointer border-t border-l border-r px-4 py-2 rounded ${
                selectedSkill[0].title == skill.title
                  ? "border-b-3 border-primary decoration-3"
                  : "border-b"
              }`}
            >
              {skill.title}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {selectedSkill.map((skill) =>
            skill.details.map((detail, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-secondary text-white flex text-icons items-center justify-center">
                  {detail.icon ? detail.icon : <FaBan />}
                </div>
                <div className="text-center text-small text-wrap">
                  {detail.name}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
