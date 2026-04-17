import { FC } from "react";
import { skillData } from "@/data/StaticData";
import { skillProps } from "./Skills";

const CATEGORY_ORDER = ["Backend", "Frontend", "DevOps / Tools"] as const;

const SkillRow: FC<skillProps> = ({ skillName, level = 1 }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-base text-zinc-300">{skillName}</span>
      <div className="flex shrink-0 gap-1">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`text-xl leading-none ${i <= level ? "text-action" : "text-accent"}`}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillCategory: FC<{
  name: string;
  skills: skillProps[];
  cols?: number;
}> = ({ name, skills, cols = 2 }) => {
  const sorted = [...skills].sort((a, b) => (b.level ?? 0) - (a.level ?? 0));
  const colSize = Math.ceil(sorted.length / cols);
  const columns = Array.from({ length: cols }, (_, i) =>
    sorted.slice(i * colSize, (i + 1) * colSize),
  );

  return (
    <div className="rounded-md bg-secondary px-6 py-5 shadow-lg">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-action">
        {name}
      </p>

      {/* Mobile: single column */}
      <div className="flex flex-col gap-3 min-[800px]:hidden">
        {sorted.map((s) => (
          <SkillRow key={s.skillName} skillName={s.skillName} level={s.level} />
        ))}
      </div>

      {/* md+: multi-column with dividers */}
      <div className="hidden gap-0 min-[800px]:flex">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-1">
            {i > 0 && (
              <div className="mx-5 self-stretch border-l border-action/40" />
            )}
            <div className="flex flex-1 flex-col gap-3">
              {col.map((s) => (
                <SkillRow
                  key={s.skillName}
                  skillName={s.skillName}
                  level={s.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillsV2: FC = () => {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    name: cat,
    skills: skillData.filter((s) => s.category === cat),
  }));

  return (
    <div id="skills" className="pb-16 pt-7 shadow-inner">
      <div className="flex flex-col items-center">
        <div className="m-6 flex justify-center">
          <h1 className="text-5xl font-medium text-action">Skills</h1>
        </div>
        <div className="mx-auto flex w-11/12 flex-col gap-4 sm:w-3/4">
          <SkillCategory name="Backend" skills={grouped[0].skills} cols={2} />
          <div className="grid gap-4 min-[1100px]:grid-cols-2">
            {grouped.slice(1).map((g) => (
              <SkillCategory
                key={g.name}
                name={g.name}
                skills={g.skills}
                cols={2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
