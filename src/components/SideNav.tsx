import { useEffect, useRef, useState } from "react";
import {
  MdWorkOutline,
  MdCode,
  MdOutlineMailOutline,
  MdPersonOutline,
} from "react-icons/md";

const sections = [
  { id: "about", label: "About", Icon: MdPersonOutline },
  { id: "experience", label: "Experience", Icon: MdWorkOutline },
  { id: "skills", label: "Skills", Icon: MdCode },
  { id: "contact", label: "Contact", Icon: MdOutlineMailOutline },
];

export const SideNav = () => {
  const [activeId, setActiveId] = useState<string>("");
  const scrollingToRef = useRef<string | null>(null);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingToRef.current) {
        setActiveId(scrollingToRef.current);
        return;
      }
      // Near bottom → always highlight Contact
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 50
      ) {
        setActiveId("contact");
        return;
      }
      // Find the last section whose top edge is at or above 35% of the viewport
      const threshold = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    scrollingToRef.current = id;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth" });
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      scrollingToRef.current = null;
    }, 1000);
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex flex-row justify-around border-t border-action bg-secondary px-2 py-2 shadow-lg sm:bottom-auto sm:left-auto sm:right-4 sm:top-1/2 sm:w-auto sm:-translate-y-1/2 sm:flex-col sm:gap-2 sm:rounded-full sm:border-0 sm:px-2 sm:py-4">
      {sections.map(({ id, label, Icon }) => (
        <div key={id} className="group relative flex items-center">
          {/* Tooltip — desktop only */}
          <span className="pointer-events-none absolute right-12 hidden whitespace-nowrap rounded bg-secondary px-2 py-1 text-sm font-bold text-action opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 sm:block">
            {label}
          </span>
          {/* Icon button */}
          <button
            onClick={() => handleClick(id)}
            className={`flex flex-col items-center justify-center rounded-full px-3 py-1 transition-colors duration-200 sm:h-10 sm:w-10 sm:p-0 ${
              activeId === id ? "text-action" : "text-zinc-400"
            } hover:text-white`}
            aria-label={label}
          >
            <Icon size={22} />
            {/* Label — mobile only */}
            <span className="mt-0.5 text-[10px] font-medium sm:hidden">
              {label}
            </span>
          </button>
        </div>
      ))}
    </nav>
  );
};
