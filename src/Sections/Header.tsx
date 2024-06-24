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
    <div className="flex justify-center mb-14 text-zinc-400 font-extrabold">
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
    <div className="flex gap-10 justify-center">
      <div className="text-stone-200 text-2xl flex flex-col gap-8 justify-center items-center">
        <div className="text-4xl text-center">
          <span className="text-action text-6xl font-medium">
            Ernes Filipovic
          </span>
        </div>
        <div className="font-medium">Fullstack Developer</div>
        <Button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/ernes-filipovic-aaa077b5/",
              "_blank"
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
    <div className="bg-secondary shadow-lg py-10">
      <Menu />
      <Thumbnail />
    </div>
  );
};
