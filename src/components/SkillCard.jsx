function SkillCard({ skill, index }) {
  return (
    <div
      data-reveal
      className="skill-card reveal-section group relative flex min-h-14 items-center overflow-hidden rounded-xl border border-thirdary/80 bg-background/45 px-4 py-3 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-text-primary/25 hover:bg-background"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className="absolute left-0 top-2 bottom-2 w-0.5 origin-bottom scale-y-0 rounded-full bg-text-primary transition-transform duration-300 group-hover:scale-y-100" />
      <span className="block truncate text-sm font-semibold tracking-tight text-text-primary transition-transform duration-300 group-hover:translate-x-1">
        {skill.name}
      </span>
    </div>
  );
}

export default SkillCard;
