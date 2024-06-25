import { FC } from "react";
import { Tag } from "./Tag";

export type AssignmentProps = {
  company: string;
  role: string;
  year: string;
  description: string;
  tags?: string[];
};

export const Assignment: FC<AssignmentProps> = ({
  company,
  role,
  year,
  description,
  tags,
}) => {
  return (
    <div className="flex my-4 gap-4">
      <div className="flex mt-1.5">
        <div className="relative bg-zinc-500 w-16 h-8 flex items-center justify-center year-box font-bold max-sm:text-sm max-sm:w-11">
          {year}
        </div>
        <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[16px] border-b-[16px] border-b-transparent border-l-zinc-500"></div>
      </div>
      <div className="flex mt-2 flex-col items-center ">
        <div className=" h-6 w-6 mb-6 min-h-6 rounded-full bg-action "></div>
        <div className="h-full w-0.5 bg-white"></div>
      </div>
      <div>
        <h1 className="text-4xl max-sm:text-2xl sm:font-medium ">{company}</h1>
        <div className=" mt-2">
          <h2 className="text-2xl max-sm:text-xl mb-2 ">{role}</h2>
          <div className="max-w-screen-md max-sm:text-sm">{description}</div>
          <div className="flex flex-wrap gap-1.5 sm:w-5/6 mt-1">
            {tags?.map((text, index) => (
              <Tag key={index} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
