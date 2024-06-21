import Skill from "./Skill";
import { skillData } from "@/data/StaticData";

const SkillList = () => {
  return (
    <>
      <h1 className="text-5xl text-center font-bold m-6">SKILLS</h1>
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
