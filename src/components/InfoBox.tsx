import React, { FC } from "react";

type InfoBoxProps = {
  Text: string;
  subText: string;
};

export const InfoBox: FC<InfoBoxProps> = ({ Text, subText }) => {
  return (
    <div className="bg-secondary p-10 h-16 min-w-82 rounded-md flex justify-center items-center gap-3 shadow-lg">
      <div className="text-xl text-action">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">{Text}</span>
          <span>{subText}</span>
        </div>
      </div>
    </div>
  );
};
