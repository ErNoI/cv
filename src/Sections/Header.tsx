import { Button } from "../components/Button";

export const Menu = () => {
  const MenuOptions = ["Experience", "Skills", "Contact"];
  function handleClick(option: string): void {
    const div = document.getElementById(option);
    if (div) {
      div.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="mb-14 flex justify-center font-extrabold text-zinc-400">
      {MenuOptions.map((option, index) => (
        <button
          onClick={() => handleClick(option.toLowerCase())}
          key={index}
          className="m-2 hover:text-white"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export const Thumbnail = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-8 text-2xl text-stone-200">
        <div className="text-center text-4xl">
          <span className="text-6xl font-medium text-action">
            Ernes Filipovic
          </span>
        </div>
        <div className="font-medium">Fullstack Developer</div>
        <Button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/ernes-filipovic-aaa077b5/",
              "_blank",
            );
          }}
          buttonText="Contact Me"
        />
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="bg-secondary py-10 shadow-lg">
      <Menu />
      <Thumbnail />
    </div>
  );
};
