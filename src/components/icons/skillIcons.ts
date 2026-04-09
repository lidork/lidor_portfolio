import {
  faGitAlt,
  faHtml5,
  faJira,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBolt,
  faBookOpen,
  faCode,
  faCodeBranch,
  faComments,
  faGamepad,
  faLightbulb,
  faTerminal,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { ResumeSkill } from '../../config/resume';

export type SkillIconKey = NonNullable<ResumeSkill['icon']>;

export const SKILL_ICON_DEFINITIONS: Record<SkillIconKey, IconDefinition> = {
  react: faReact,
  typescript: faCode,
  html: faHtml5,
  vite: faBolt,
  python: faPython,
  node: faNodeJs,
  bash: faTerminal,
  unity: faUnity,
  unreal: faGamepad,
  csharp: faCode,
  cplusplus: faCode,
  git: faGitAlt,
  linux: faLinux,
  jira: faJira,
  cicd: faCodeBranch,
  problemSolving: faLightbulb,
  storytelling: faComments,
  selfLearning: faBookOpen,
  leadership: faUserTie,
};