import { FC } from "react";

export const Tag: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="mt-1 inline-block rounded-full bg-action px-2 font-semibold text-primary">
      {text}
    </div>
  );
};
