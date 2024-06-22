import { skillData } from "@/data/StaticData";

import { FC } from "react";

export type skillProps = {
  imgPath: string;
  skillName: string;
};

export const Skill: FC<skillProps> = ({ imgPath, skillName }) => {
  return (
    <div className="w-52 h-52 bg-secondary rounded-2xl m-4 p-10 flex flex-col justify-between items-center">
      <img className="w-16" src={imgPath}></img>
      <h1 className="font-bold text-lg text-slate-100">{skillName}</h1>
    </div>
  );
};

const SkillList = () => {
  return (
    <>
      <h1 className="text-5xl text-center font-bold m-6">Skills</h1>
      <div className="flex justify-center flex-wrap">
        {skillData.map((skill, index) => (
          <Skill
            key={index}
            imgPath={skill.imgPath}
            skillName={skill.skillName}
          ></Skill>
        ))}
      </div>
    </>
  );
};

export default SkillList;
