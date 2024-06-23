import { FC, MouseEvent } from "react";

export type buttonProps = {
  buttonText: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  transparent?: boolean;
};

export const Button: FC<buttonProps> = ({ buttonText, onClick }) => {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);
  }

  return (
    <button
      onClick={handleClick}
      className="min-h-14 min-w-44 max-h-14 max-w-44 rounded-md text-xl border-4 border-action text-action p-2 font-bold hover:bg-action hover:text-secondary duration-300"
    >
      {buttonText}
    </button>
  );
};
