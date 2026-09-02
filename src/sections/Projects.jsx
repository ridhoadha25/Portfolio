import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" data-reveal className="reveal-section px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Projects"
          title="Some things I've built."
          description="A collection of projects that showcase my frontend development skills."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {projects.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-thirdary bg-background px-5 py-2.5 text-sm font-medium text-text-primary transition hover:-translate-y-0.5 hover:bg-button-hover"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
