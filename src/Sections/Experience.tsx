import { Assignment } from "@/components/Assignment";
import { assignmentData } from "@/data/StaticData";

export const Experience = () => {
  return (
    <div id="experience" className="bg-secondary py-16 shadow-xl">
      <h1 className="mb-11 text-center text-5xl font-medium">Experience</h1>

      <div className="m-auto max-sm:w-11/12 sm:w-4/6">
        {assignmentData.map((assignment, index) => {
          return <Assignment key={index} {...assignment} />;
        })}
      </div>
    </div>
  );
};
