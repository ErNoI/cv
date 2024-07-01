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
    <div className="my-4 flex gap-4">
      <div className="mt-1.5 flex">
        <div className="year-box relative flex h-8 w-16 items-center justify-center bg-zinc-500 font-bold max-sm:w-11 max-sm:text-sm">
          {year}
        </div>
        <div className="h-0 w-0 border-b-[16px] border-l-[16px] border-t-[16px] border-b-transparent border-l-zinc-500 border-t-transparent"></div>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="mb-6 h-6 min-h-6 w-6 rounded-full bg-action"></div>
        <div className="h-full w-0.5 bg-white"></div>
      </div>
      <div>
        <h1 className="text-4xl max-sm:text-2xl sm:font-medium">{company}</h1>
        <div className="mt-2">
          <h2 className="mb-2 text-2xl max-sm:text-xl">{role}</h2>
          <div className="max-w-screen-md max-sm:text-sm">{description}</div>
          <div className="mt-1 flex flex-wrap gap-1.5 sm:w-5/6">
            {tags?.map((text, index) => <Tag key={index} text={text} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
