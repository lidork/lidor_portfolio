// src/components/sections/SkillsSection.tsx
import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SKILL_ICON_DEFINITIONS } from '../icons/skillIcons';
import type { ResumeSkillGroup } from '../../config/resume';

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

      {/* Inner div always rendered — grid-template-rows transition requires a persistent DOM node */}
      <div className={`resume-skill-expand${activeGroup ? ' resume-skill-expand--open' : ''}`}>
        <div className="resume-skill-expand-inner">
          {activeGroup && (
            <>
              <span className="resume-skill-expand-label">{activeGroup.category}</span>
              {activeGroup.skills.map(skill => {
                const skillIcon = skill.icon ? SKILL_ICON_DEFINITIONS[skill.icon] : null;
                return (
                  <span key={skill.name} className="resume-skill-chip">
                    {skillIcon && <FontAwesomeIcon icon={skillIcon} className="resume-skill-chip-icon" fixedWidth />}
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
