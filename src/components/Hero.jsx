import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import ProfilePicture from "../../asset/ProfilePicture.jpg";

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

const Hero = () => {
  const socialEntries = Object.entries(profile.social || {}).filter(
    ([, href]) => Boolean(href)
  );

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden px-6 pb-20 pt-[60px] sm:pt-[60px]"
    >
      {/* ambient background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-[360px_1fr]">
        {/* Left: profile card */}
        <div className="card flex h-full animate-fadeUp flex-col items-center px-8 py-10 text-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-2 border-dashed border-accent/50 p-3">
            <div className="h-full w-full overflow-hidden rounded-full bg-soft">
              <img
                src={ProfilePicture}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <h1 className="mt-6 font-display text-2xl font-bold text-ink">
            {profile.name}
          </h1>
          <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-mist">
            I am a {profile.role} based in {profile.location}.
          </p>

          {socialEntries.length > 0 && (
            <div className="mt-6 flex items-center gap-3">
              {socialEntries.map(([key, href]) => {
                const Icon = SOCIAL_ICONS[key] || FiGithub;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="icon-chip transition-all duration-500 ease-calm hover:bg-accent hover:text-accent-contrast"
                  >
                    <Icon size={25} />
                  </a>
                );
              })}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="icon-chip transition-all duration-500 ease-calm hover:bg-accent hover:text-accent-contrast"
              >
                <FiMail size={25} />
              </a>
            </div>
          )}
        </div>

        {/* Right: headline card */}
        <div
          className="flex h-full min-w-0 animate-fadeUp flex-col gap-6"
          style={{ animationDelay: "120ms" }}
        >
          <div className="card h-full min-w-0 px-8 py-10 sm:px-12 sm:py-12">
            <p className="font-body text-base text-mist">Hello there!</p>

            <h2
              className="my-6 sm:my-8 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] uppercase leading-[1.4]"
              style={{ lineHeight: 1.1 }}
            >
              I&rsquo;m{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.3px rgb(var(--text-primary))" }}
              >
                {profile.name}
              </span>
              , a {profile.role} building{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.3px rgb(var(--text-primary))" }}
              >
                SMART, SCALABLE WEB SOLUTIONS
              </span>{" "}
              WITH MODERN TECHNOLOGIES.
            </h2>

            <p className="mt-6 max-w-2xl text-justify text-sm leading-relaxed text-mist sm:text-base">
              {profile.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`/${profile.cvFileName}`}
                download={profile.cvFileName}
                className="btn-primary"
              >
                Download CV
                <FiDownload size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
