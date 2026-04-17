import { skillData } from "@/data/StaticData";

import { FC } from "react";

export type skillProps = {
  skillName: string;
  level?: 1 | 2 | 3;
  category?: "Frontend" | "Backend" | "DevOps / Tools";
};

export const Skill: FC<skillProps> = ({ skillName }) => {
  return (
    <div className="m-4 flex h-52 w-52 flex-col items-center justify-between rounded-2xl bg-secondary p-10 shadow-lg">
      <h1 className="text-lg font-bold text-slate-100">{skillName}</h1>
    </div>
  );
};

export const SkillPercentageBar: FC<skillProps> = ({ skillName, level }) => {
  return (
    <div className="my-4 flex items-center justify-between font-bold max-lg:flex-col">
      <span className="">{skillName}</span>
      <div className="flex shrink-0 gap-1">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`text-base leading-none ${i <= (level ?? 0) ? "text-action" : "text-accent"}`}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export const SkillList: FC = () => {
  skillData.sort((a, b) => (b.level || 0) - (a.level || 0));
  return (
    <div id="skills" className="pb-16 pt-7 shadow-inner">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="m-6 text-5xl font-medium">Skills</h1>
        </div>
        <div className="flex w-3/4 flex-col gap-3">
          {skillData.map((skill, index) => (
            <SkillPercentageBar
              key={index}
              skillName={skill.skillName}
            ></SkillPercentageBar>
          ))}
        </div>
      </div>
    </div>
  );
};
