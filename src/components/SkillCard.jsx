function SkillCard({ skill, index }) {
  return (
    <div
      data-reveal
      className="skill-card reveal-section group flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-xl border border-thirdary bg-background/60 p-3 text-center shadow-[0_6px_16px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-0.5 hover:border-text-primary/20 hover:bg-background"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="skill-icon h-10 w-10 shrink-0 object-contain"
        loading="lazy"
      />

      <span className="block max-w-full truncate text-xs font-semibold text-text-primary sm:text-sm">
        {skill.name}
      </span>
    </div>
  );
}

export default SkillCard;