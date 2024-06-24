import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { FaArrowUp } from "react-icons/fa";

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

// export const ScrollTopButton = () => {
// const [scrollProgress, setScrollProgress] = useState(0);

// const handleScroll = () => {
//   const scrollTotal =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   const scrollCurrent = document.documentElement.scrollTop;
//   const scrollPercentage = (scrollCurrent / scrollTotal) * 100;
//   setScrollProgress(scrollPercentage);
// };

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

//   return (
//     <div
//       onClick={() => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }}
//       className="h-16 w-16 bg-secondary  fixed rounded-full bottom-6 right-6 cursor-pointer shadow-lg flex justify-center items-center "
//     >
//       <FaArrowUp color="#ffd06e" size={30} />
//     </div>
//   );
// };

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const threshold = 200;
    const currentScroll = document.documentElement.scrollTop;
    setIsVisible(currentScroll > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`bg-secondary w-16 h-16 flex justify-center items-center fixed bottom-6 right-14 cursor-pointer rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <FaArrowUp color="#ffd06e" size={30} />
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
            window.location.href = "mailto:ernes.filipovic@gmail.com";
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
      <ScrollTopButton></ScrollTopButton>
    </div>
  );
};
