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
      className="max-h-14 min-h-14 min-w-44 max-w-44 rounded-md border-4 border-action p-2 text-xl font-bold text-action duration-300 hover:bg-action hover:text-secondary"
    >
      {buttonText}
    </button>
  );
};
