// src/components/sections/SkillsSection.tsx
import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import type { ResumeSkillGroup } from '../../config/resume';

const SKILL_ICON_MAP = {
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
} as const;

interface SkillsSectionProps {
  skillGroups: ResumeSkillGroup[];
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeGroup = skillGroups.find(g => g.category === activeCategory) ?? null;

  const handlePillClick = useCallback((category: string) => {
    setActiveCategory(prev => (prev === category ? null : category));
  }, []);

  return (
    <>
      <div className="resume-skill-pills">
        {skillGroups.map(group => (
          <button
            key={group.category}
            type="button"
            className={`resume-skill-pill${activeCategory === group.category ? ' resume-skill-pill--active' : ''}`}
            onClick={() => handlePillClick(group.category)}
          >
            {group.category}
            <span className="resume-skill-badge">{group.skills.length}</span>
          </button>
        ))}
      </div>

      <div className={`resume-skill-expand${activeGroup ? ' resume-skill-expand--open' : ''}`}>
        {activeGroup && (
          <div className="resume-skill-expand-inner">
            <span className="resume-skill-expand-label">{activeGroup.category}</span>
            {activeGroup.skills.map(skill => {
              const SkillIcon = skill.icon ? SKILL_ICON_MAP[skill.icon] : null;

              return (
                <span key={skill.name} className="resume-skill-chip">
                  {SkillIcon && <FontAwesomeIcon icon={SkillIcon} className="resume-skill-chip-icon" fixedWidth />}
                  <span>{skill.name}</span>
                </span>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
