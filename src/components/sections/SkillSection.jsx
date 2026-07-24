import { useState } from "react";
import Heading from "@/components/Heading";
import { FaBan } from "@/constants/icons";
import { skills } from "@/constants";

const SkillSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <div id="skills" className="space-y-10 w-full">
      <Heading
        eyebrow="// tech-stack"
        title="Skills"
        subTitle="Tools & technologies I'm confident in"
      />

      <div className="flex flex-col gap-8">
        <div
          role="tablist"
          className="flex flex-wrap gap-1 border-b border-line"
        >
          {skills.map((skill, index) => {
            const active = selectedSkill.title === skill.title;
            return (
              <button
                key={index}
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedSkill(skill)}
                className={`px-4 py-2.5 text-smaller -mb-px border-b-2 transition-colors cursor-pointer ${
                  active
                    ? "border-accent text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {skill.title}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {selectedSkill.details.map((detail, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-md border border-line bg-surface/60 hover:border-accent hover:bg-accent-soft transition-colors"
            >
              <span className="text-icons shrink-0" style={{ color: "var(--color-ink)" }}>
                {detail.icon ? detail.icon : <FaBan />}
              </span>
              <span className="text-small">{detail.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
