import { FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import Reveal from "./Reveal";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">a few things I&rsquo;ve built</p>
          <h2 id="projects-heading" className="section-heading mt-3">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 2) * 100}
              className="card flex flex-col overflow-hidden"
            >
              {/* {project.image && (
                <div className="aspect-[16/10] w-full overflow-hidden bg-soft">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-calm hover:scale-105"
                  />
                </div>
              )} */}

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 flex-1 text-justify text-sm leading-relaxed text-mist">
                  {project.description}
                </p>

                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech} className="tag-pill">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink transition-colors duration-200 hover:text-accent"
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                  )}
                  {/* {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink transition-colors duration-200 hover:text-accent"
                    >
                      <FiArrowUpRight size={16} />
                      Live demo
                    </a>
                  )} */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
