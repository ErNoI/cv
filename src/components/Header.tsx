import { Images } from "@/data/StaticData";
import { Button } from "./Button";

export const Menu = () => {
  const MenuOptions = ["About", "Portfolio", "Contact"];
  return (
    <div className="flex justify-center mb-14 text-zinc-400 font-extrabold">
      {MenuOptions.map((option) => (
        <button className="m-2 hover:text-white">{option}</button>
      ))}
    </div>
  );
};

export const Thumbnail = () => {
  return (
    <div className="flex gap-10 justify-center">
      <div className="text-stone-200 text-2xl flex flex-col gap-5 justify-center">
        <div className="text-4xl">
          I'M{" "}
          <span className="text-action text-6xl font-extrabold">
            Ernes Filipovic
          </span>
        </div>
        <div className="font-extrabold">Fullstack Developer</div>
        <Button buttonText="Contact Me" />
      </div>
      <div>
        <img src={Images.Me} className="h-96" alt="Profile" />
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="bg-secondary shadow-lg pt-10">
      <Menu />
      <Thumbnail />
    </div>
  );
};
