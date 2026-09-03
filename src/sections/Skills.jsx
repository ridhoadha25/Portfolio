import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";
import { Layers3, Palette, Wrench } from "lucide-react";

const skillGroups = [
  {
    name: "Frontend",
    eyebrow: "Build & ship",
    description: "Fondasi teknis untuk interface yang cepat, responsif, dan mudah dirawat.",
    icon: Layers3,
  },
  {
    name: "UI/UX",
    eyebrow: "Shape the experience",
    description: "Mengubah ide menjadi alur dan visual yang jelas untuk setiap pengguna.",
    icon: Palette,
  },
  {
    name: "Tools",
    eyebrow: "Work smarter",
    description: "Toolkit harian untuk eksplorasi, kolaborasi, dan delivery yang rapi.",
    icon: Wrench,
  },
];

function Skills() {
  return (
    <section id="skills" data-reveal className="reveal-section bg-thirdary/70 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            label="Skills"
            title="Technologies I work with."
            description="Tools and technologies that I use to build modern web experiences."
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            const groupSkills = skills.filter((skill) => skill.category === group.name);

            return (
              <article
                key={group.name}
                className="rounded-2xl border border-thirdary bg-foreground/75 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm"
              >
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-thirdary pb-5">
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                      {group.eyebrow}
                    </p>
                    <h3 className="text-xl font-bold text-text-primary">{group.name}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-button-hover text-text-primary">
                    <GroupIcon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </div>

                <p className="mb-5 min-h-12 text-sm leading-relaxed text-text-secondary">
                  {group.description}
                </p>

                <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
                  {groupSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;