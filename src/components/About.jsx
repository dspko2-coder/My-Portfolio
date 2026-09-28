import { IoBriefcaseOutline, IoSchoolOutline } from "react-icons/io5";
import { education, experience, skills } from "../data/portfolioData";
import { getTechIcon } from "../data/techIcons";
import Reveal from "./Reveal";

const SKILL_GROUPS = [
  { title: "Languages", items: skills.languages },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend & APIs", items: skills.backend },
  { title: "Databases", items: skills.databases },
  { title: "Mobile", items: skills.mobile },
  { title: "Cloud & DevOps", items: skills.cloud },
  { title: "Tools", items: skills.tools },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">a little about my journey</p>
          <h2 id="about-heading" className="section-heading mt-3">
            Experience &amp; education
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Experience */}
          <Reveal className="card p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink">
              Experience
            </h3>
            <ol className="mt-6 divide-y divide-line">
              {experience.map((job) => (
                <li key={job.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="icon-chip">
                    <IoBriefcaseOutline size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-sm text-mist">{job.period}</p>
                    <h4 className="mt-1 font-display text-lg font-bold text-ink">
                      {job.title}
                    </h4>
                    <p className="text-sm text-mist">
                      {job.company} · {job.location}
                    </p>

                    <ul className="mt-3 space-y-2">
                      {job.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-sm leading-relaxed text-mist"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label={`Technologies used at ${job.company}`}
                    >
                      {job.stack.map((tech) => (
                        <li key={tech} className="tag-pill">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Education */}
          <Reveal delay={120} className="card p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink">
              Education
            </h3>
            <ol className="mt-6 divide-y divide-line">
              {education.map((edu) => (
                <li key={edu.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="icon-chip">
                    <IoSchoolOutline size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-sm text-mist">{edu.period}</p>
                    <h4 className="mt-1 font-display text-lg font-bold text-ink">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-mist">
                      {edu.institution} · {edu.location}
                    </p>
                    {edu.detail && (
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {edu.detail}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Toolkit */}
        <Reveal delay={80} className="card mt-8 p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-ink">
            Skills &amp; toolkit
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="mb-3 font-body text-sm font-semibold text-ink">
                  {group.title}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label={group.title}>
                  {group.items.map((item) => {
                    const { Icon, color } = getTechIcon(item);
                    return (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-soft py-1.5 pl-2.5 pr-3.5 font-body text-xs font-medium text-ink transition-colors duration-200 hover:border-accent/50"
                      >
                        <Icon size={15} style={{ color }} aria-hidden="true" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
