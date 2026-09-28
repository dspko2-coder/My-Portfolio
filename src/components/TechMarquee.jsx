import { skills } from "../data/portfolioData";
import { getTechIcon } from "../data/techIcons";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const ALL_SKILLS = [
  ...skills.languages,
  ...skills.frontend,
  ...skills.backend,
  ...skills.databases,
  ...skills.mobile,
  ...skills.cloud,
  ...skills.tools,
];

// De-duplicate while preserving first-seen order.
const UNIQUE_SKILLS = ALL_SKILLS.filter(
  (item, index) => ALL_SKILLS.indexOf(item) === index
);

const TechMarquee = () => {
  return (
    <section aria-label="Tools and technologies" className="px-6 py-4">
      <div className="mx-auto max-w-6xl">
        <Reveal className="card overflow-hidden px-2 py-8 sm:py-9">
          <p className="mb-6 text-center font-body text-sm text-mist">
            Tools &amp; technologies I work with
          </p>
          <Marquee gapClassName="gap-14" duration="38s">
            {UNIQUE_SKILLS.map((name) => {
              const { Icon, color } = getTechIcon(name);
              return (
                <span
                  key={name}
                  className="flex shrink-0 items-center gap-3 whitespace-nowrap"
                >
                  <Icon size={26} style={{ color }} aria-hidden="true" />
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {name}
                  </span>
                </span>
              );
            })}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
};

export default TechMarquee;
