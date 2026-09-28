import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

const Footer = () => {
  const year = new Date().getFullYear();
  const socialEntries = Object.entries(profile.social || {}).filter(
    ([, href]) => Boolean(href)
  );

  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-body text-xs text-mist">
          © {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-5">
          {socialEntries.map(([key, href]) => {
            const Icon = SOCIAL_ICONS[key] || FiGithub;
            return (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="flex items-center gap-1.5 font-body text-xs capitalize text-mist transition-colors hover:text-accent"
                >
                  <Icon size={14} />
                  {key}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
