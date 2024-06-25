import { FC } from "react";

export const Tag: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="inline-block bg-action text-primary font-semibold px-2 rounded-full mt-1">
      {text}
    </div>
  );
};
