import { FC } from "react";

type ToggleSwitchProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const ToggleSwitch: FC<ToggleSwitchProps> = ({ checked, setChecked }) => {
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex">
      <label htmlFor="toggle" className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={toggleChecked}
          />
          <div
            className={`block h-8 w-14 rounded-full ${
              checked ? "bg-action" : "bg-zinc-500"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
              checked
                ? "translate-x-full transform bg-zinc-500"
                : "bg-secondary"
            }`}
          ></div>
        </div>
        {/* <div className="ml-3 font-medium">Toggle</div> */}
      </label>
    </div>
  );
};

export default ToggleSwitch;
