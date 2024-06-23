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
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={toggleChecked}
          />
          <div
            className={`block w-14 h-8 rounded-full ${
              checked ? "bg-action" : "bg-secondary"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              checked
                ? "transform translate-x-full bg-secondary"
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
