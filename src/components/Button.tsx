import { FC } from "react";

export type buttonProps = {
  buttonText: string;
  onClick?: () => void;
  transparent?: boolean;
};

export const Button: FC<buttonProps> = ({ buttonText }) => {
  return (
    <button className="min-h-14 min-w-44 max-h-14 max-w-44 rounded-md text-xl border-4 border-action text-action p-2 font-bold">
      {buttonText}
    </button>
  );
};
