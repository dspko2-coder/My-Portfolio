import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFlutter,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi, TbCompass } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const TEXT = "rgb(var(--text-primary))";
const ACCENT = "rgb(var(--accent))";

const ICON_MAP = {
  Java: { Icon: FaJava, color: "#E76F00" },
  JavaScript: { Icon: SiJavascript, color: "#F0DB4F" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  Redux: { Icon: SiRedux, color: "#764ABC" },
  "Next.js": { Icon: SiNextdotjs, color: TEXT },
  Angular: { Icon: SiAngular, color: "#DD0031" },
  "Node.js": { Icon: SiNodedotjs, color: "#3C873A" },
  "Express.js": { Icon: SiExpress, color: TEXT },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  "REST APIs": { Icon: TbApi, color: ACCENT },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  "VS Code": { Icon: VscVscode, color: "#007ACC" },
  "IntelliJ IDEA": { Icon: SiIntellijidea, color: "#FE315D" },
  "MongoDB Compass": { Icon: TbCompass, color: "#47A248" },
};

export const getTechIcon = (name) =>
  ICON_MAP[name] || { Icon: TbApi, color: ACCENT };
