// src/components/sections/SkillsSection.tsx
import { useState, useRef, useCallback } from 'react';
import type { ResumeSkillGroup } from '../../config/resume';

interface SkillsSectionProps {
  skillGroups: ResumeSkillGroup[];
}

function isTouchDevice(): boolean {
  return window.matchMedia('(hover: none)').matches;
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeGroup = skillGroups.find(g => g.category === activeCategory) ?? null;

  const cancelClose = useCallback(() => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActiveCategory(null), 200);
  }, [cancelClose]);

  const handlePillEnter = useCallback((category: string) => {
    if (isTouchDevice()) return;
    cancelClose();
    setActiveCategory(category);
  }, [cancelClose]);

  const handlePillLeave = useCallback(() => {
    if (isTouchDevice()) return;
    scheduleClose();
  }, [scheduleClose]);

  const handleExpandEnter = useCallback(() => {
    if (isTouchDevice()) return;
    cancelClose();
  }, [cancelClose]);

  const handleExpandLeave = useCallback(() => {
    if (isTouchDevice()) return;
    scheduleClose();
  }, [scheduleClose]);

  const handlePillClick = useCallback((category: string) => {
    if (!isTouchDevice()) {
      // Desktop: click only toggles closed
      if (activeCategory === category) setActiveCategory(null);
      return;
    }
    // Mobile: tap toggles open/closed
    setActiveCategory(prev => (prev === category ? null : category));
  }, [activeCategory]);

  return (
    <>
      <div
        className="resume-skill-pills"
        onMouseLeave={handlePillLeave}
        onMouseEnter={cancelClose}
      >
        {skillGroups.map(group => (
          <button
            key={group.category}
            type="button"
            className={`resume-skill-pill${activeCategory === group.category ? ' resume-skill-pill--active' : ''}`}
            onMouseEnter={() => handlePillEnter(group.category)}
            onClick={() => handlePillClick(group.category)}
          >
            {group.category}
            <span className="resume-skill-badge">{group.skills.length}</span>
          </button>
        ))}
      </div>

      <div
        className={`resume-skill-expand${activeGroup ? ' resume-skill-expand--open' : ''}`}
        onMouseEnter={handleExpandEnter}
        onMouseLeave={handleExpandLeave}
      >
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
