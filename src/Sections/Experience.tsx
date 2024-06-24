import { Assignment } from "@/components/Assignment";
import { assignmentData } from "@/data/StaticData";

export const Experience = () => {
  return (
    <div id="experience" className="py-16 bg-secondary shadow-xl">
      <h1 className="text-5xl text-center font-medium mb-11 ">Experience</h1>

      <div className="w-4/6 m-auto">
        {assignmentData.map((assignment, index) => {
          return <Assignment key={index} {...assignment} />;
        })}
      </div>
    </div>
  );
};
