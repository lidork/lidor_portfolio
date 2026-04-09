// src/components/sections/SkillsSection.tsx
import { useState, useCallback } from 'react';
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

      <div className={`resume-skill-expand${activeGroup ? ' resume-skill-expand--open' : ''}`}>
        {activeGroup && (
          <div className="resume-skill-expand-inner">
            <span className="resume-skill-expand-label">{activeGroup.category}</span>
            {activeGroup.skills.map(skill => (
              <span key={skill} className="resume-skill-chip">{skill}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
