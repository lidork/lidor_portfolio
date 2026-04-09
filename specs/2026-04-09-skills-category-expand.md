# Skills Category Expand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat skill chip list on the Resume tab with interactive category pills that expand an inline skills row on hover (desktop) or tap (mobile).

**Architecture:** A new `SkillsSection` component manages `activeCategory` state and hover/tap logic. It renders category pills with count badges and a collapsible expand panel. CSS transitions handle the slide-in animation; no JS animation libraries needed.

**Tech Stack:** React 18, TypeScript, CSS custom properties (existing App.css pattern)

---

### Task 1: Add CSS for category pills and expand panel

**Files:**
- Modify: `src/App.css` (after the existing `.resume-skill-chip` block, around line 1890)

- [ ] **Step 1: Add the new CSS classes after `.resume-skill-chip`**

Open `src/App.css`. Find the `.resume-skill-chip` block (ends around line 1890). Insert the following immediately after it:

```css
/* --- Skills category pills --- */

.resume-skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.resume-skill-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: hsla(210, 100%, 72%, 0.08);
  color: var(--vegas-gold);
  border: 1px solid hsla(210, 100%, 72%, 0.22);
  border-radius: 20px;
  padding: 5px 14px;
  font-size: var(--fs-8);
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  /* reset button defaults */
  font-family: inherit;
  line-height: 1;
}

.resume-skill-pill:hover,
.resume-skill-pill--active {
  background: hsla(210, 100%, 72%, 0.16);
  border-color: var(--vegas-gold);
}

.resume-skill-badge {
  background: hsla(210, 100%, 72%, 0.2);
  color: var(--vegas-gold);
  border-radius: 50%;
  width: 19px;
  height: 19px;
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, color 0.15s;
}

.resume-skill-pill--active .resume-skill-badge {
  background: var(--vegas-gold);
  color: var(--eerie-black-1);
}

.resume-skill-expand {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.28s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s;
}

.resume-skill-expand--open {
  max-height: 200px;
  opacity: 1;
}

.resume-skill-expand-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 14px;
  margin-top: 10px;
  background: hsla(210, 100%, 72%, 0.05);
  border: 1px solid hsla(210, 100%, 72%, 0.14);
  border-radius: 10px;
}

.resume-skill-expand-label {
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vegas-gold);
  opacity: 0.6;
  margin-bottom: 2px;
}
```

- [ ] **Step 2: Remove the old `.resume-skills-list` class**

In `src/App.css`, delete the `.resume-skills-list` block (lines ~1877–1881):

```css
/* DELETE THIS */
.resume-skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/App.css
git commit -m "style: add resume skill category pill and expand CSS"
```

---

### Task 2: Create the SkillsSection component

**Files:**
- Create: `src/components/sections/SkillsSection.tsx`

- [ ] **Step 1: Create the component file**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/SkillsSection.tsx
git commit -m "feat: add SkillsSection component with category pill expand"
```

---

### Task 3: Wire SkillsSection into Resume.tsx

**Files:**
- Modify: `src/components/sections/Resume.tsx`

- [ ] **Step 1: Replace the skills block in Resume.tsx**

Open `src/components/sections/Resume.tsx`.

Add the import at the top (after the existing imports):

```tsx
import { SkillsSection } from '../SkillsSection';
```

Remove line 10 (`const allSkills = ...`) entirely.

Replace the entire `{/* Skills */}` section (lines ~29–39) with:

```tsx
{/* Skills */}
<div className="resume-section">
  <div className="resume-section-header">
    <span className="resume-section-label">Skills</span>
    <div className="resume-section-rule" />
  </div>
  <SkillsSection skillGroups={RESUME_DATA.skillGroups} />
</div>
```

- [ ] **Step 2: Verify the app builds without errors**

```bash
cd portfolio && npm run build
```

Expected: no TypeScript or build errors.

- [ ] **Step 3: Smoke test locally**

```bash
npm run dev
```

Check:
- Resume tab shows 5 category pills (Frontend, Backend, Game Dev, Tools, Soft Skills) each with a count badge
- Hovering a pill on desktop expands the skills row below
- Hovering another pill switches the expanded category
- Mouse leaving the pill row + expand panel closes after ~200ms
- Clicking an active pill on desktop collapses it
- No console errors

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Resume.tsx
git commit -m "feat: wire SkillsSection into Resume tab, remove flat skill list"
```
