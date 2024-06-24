import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const threshold = 200;
    const currentScroll = document.documentElement.scrollTop;
    setIsVisible(currentScroll > threshold);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`bg-secondary w-16 h-16 flex justify-center items-center fixed bottom-6 right-8  cursor-pointer rounded-full shadow-lg transition-all duration-300 max-md:bottom-2 max-md:right-2 max-lg:bg-action ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <FaArrowUp color={isMobile ? "#3d3e42" : "#ffd06e"} size={30} />
    </div>
  );
};
