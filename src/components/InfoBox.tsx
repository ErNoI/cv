import { FC } from "react";

type InfoBoxProps = {
  Text: string;
  subText: string;
};

export const InfoBox: FC<InfoBoxProps> = ({ Text, subText }) => {
  return (
    <div className="min-w-82 flex h-16 items-center justify-center gap-3 rounded-md bg-secondary p-10 shadow-lg">
      <div className="text-xl text-action">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">{Text}</span>
          <span>{subText}</span>
        </div>
      </div>
    </div>
  );
};
