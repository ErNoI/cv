import { useEffect, useState } from "react";
import { MdWorkOutline, MdCode, MdOutlineMailOutline, MdPersonOutline } from "react-icons/md";

const sections = [
  { id: "about",      label: "About",      Icon: MdPersonOutline },
  { id: "experience", label: "Experience", Icon: MdWorkOutline },
  { id: "skills",     label: "Skills",     Icon: MdCode },
  { id: "contact",    label: "Contact",    Icon: MdOutlineMailOutline },
];

export const SideNav = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2 rounded-full bg-secondary px-2 py-4 shadow-lg">
      {sections.map(({ id, label, Icon }) => (
        <div key={id} className="group relative flex items-center">
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded bg-action px-2 py-1 text-sm font-bold text-primary opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100">
            {label}
          </span>
          {/* Icon button */}
          <button
            onClick={() => handleClick(id)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:text-white ${
              activeId === id ? "text-action" : "text-zinc-400"
            }`}
            aria-label={label}
          >
            <Icon size={22} />
          </button>
        </div>
      ))}
    </div>
  );
};
