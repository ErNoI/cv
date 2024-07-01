import { skillData } from "@/data/StaticData";

import { FC } from "react";

export type skillProps = {
  skillName: string;
  imgPath?: string;
  percentage?: number;
};

export const Skill: FC<skillProps> = ({ imgPath, skillName }) => {
  return (
    <div className="m-4 flex h-52 w-52 flex-col items-center justify-between rounded-2xl bg-secondary p-10 shadow-lg">
      <img className="w-16" src={imgPath}></img>
      <h1 className="text-lg font-bold text-slate-100">{skillName}</h1>
    </div>
  );
};

export const SkillPercentageBar: FC<skillProps> = ({
  skillName,
  percentage,
}) => {
  return (
    <div className="my-4 flex items-center justify-between font-bold max-lg:flex-col">
      <span className="">{skillName}</span>
      <div className="h-2.5 w-10/12 bg-accent">
        <div
          className="h-2.5 bg-action"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillList = () => {
  // const [checked, setChecked] = useState(true);
  skillData.sort((a, b) => (b.percentage || 0) - (a.percentage || 0));
  return (
    <div id="skills" className="pb-16 pt-7 shadow-inner">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <h1 className="m-6 text-5xl font-medium">Skills</h1>
          {/* <ToggleSwitch
            checked={checked}
            setChecked={(checked) => setChecked(checked)}
          /> */}
        </div>
        {/* {!checked && (
          <div className="flex justify-center flex-wrap">
            {skillData.map((skill, index) => (
              <Skill
                key={index}
                imgPath={skill.imgPath}
                skillName={skill.skillName}
              ></Skill>
            ))}
          </div>
        )} */}

        <div className="flex w-3/4 flex-col gap-3">
          {skillData.map((skill, index) => (
            <SkillPercentageBar
              key={index}
              percentage={skill.percentage}
              skillName={skill.skillName}
            ></SkillPercentageBar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
