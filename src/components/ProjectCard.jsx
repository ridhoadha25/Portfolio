function ProjectCard({ project }) {
  const primaryLink = project.demo || project.preview;
  const primaryLabel = project.demo ? "Live Demo" : "View Design";

  return (
    <article className="group overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.38)] bg-bg-project-card transition duration-300 hover:-translate-y-1 hover:border-[rgba(148,163,184,0.6)] hover:shadow-xl">
      <div className="flex aspect-16/8 items-center justify-center overflow-hidden border-b border-[rgba(148,163,184,0.28)] bg-thirdary">
        <img
          src={project.image}
          alt={project.name}
          title={project.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-text-secondary">{project.category}</p>
            <h3 className="mt-1 text-lg font-semibold text-text-primary">{project.name}</h3>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-thirdary px-2.5 py-1 text-xs text-text-secondary"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          {primaryLink && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${primaryLabel} for ${project.name}`}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.34)] bg-foreground px-3 py-2 text-sm font-medium text-text-primary transition hover:-translate-y-0.5 hover:bg-button-hover"
            >
              <i className="bi bi-box-arrow-up-right" />
              {primaryLabel}
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub for ${project.name}`}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.34)] bg-foreground px-3 py-2 text-sm text-text-secondary transition hover:-translate-y-0.5 hover:bg-button-hover hover:text-text-primary"
            >
              <i className="bi bi-github" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
