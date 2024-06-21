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

export default Skill;
