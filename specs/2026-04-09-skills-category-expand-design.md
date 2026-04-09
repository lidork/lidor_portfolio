# Skills Section — Category Expand Design

**Date:** 2026-04-09
**Status:** Approved

## Overview

Replace the current flat list of all skill chips on the Resume tab with interactive category pills. Each pill shows a skill count badge and expands an inline skills row below when hovered (desktop) or tapped (mobile).

## Behavior

### Interaction model
- **Desktop:** Hovering a category pill opens the expand panel. Mouse leaving both the pill row and the expand panel closes it (with a ~200ms grace delay so the cursor can travel between them).
- **Mobile:** Tapping a pill opens the expand panel. Tapping the same pill again closes it.
- **One open at a time:** Opening a different pill auto-closes the current one.
- **Click on desktop:** Clicking an already-active pill closes it; clicking a different pill switches to it.

### Pills
- Each pill displays the category name and a circular count badge showing the number of skills in that category.
- Inactive state: muted blue tint background, light border.
- Active state: stronger tint fill, full-opacity border, badge inverts to solid gold with dark text.

### Expand panel
- Slides in below the pill row with a smooth `max-height` + `opacity` transition (~280ms ease).
- Contains a small uppercase category label and the individual skill chips (same chip style as the existing `resume-skill-chip` class).
- Panel has the same subtle tinted background and border as the existing skills area.

## Component structure

**`Resume.tsx`** — replace the existing skills block with a new `<SkillsSection>` component (or inline state, see implementation notes).

State needed:
- `activeCategory: string | null` — which category is currently expanded, or null.

Logic:
- `handlePillEnter(category)` — set active on desktop hover.
- `handlePillLeave()` — start close timer (200ms), cancel on re-enter.
- `handlePillClick(category)` — toggle on mobile; close-only on desktop.
- Detect hover capability via `window.matchMedia('(hover: none)')`.

## CSS

New classes needed (all under `resume-*` namespace to match existing conventions):

| Class | Purpose |
|---|---|
| `resume-skill-pills` | Flex-wrap container for category pills |
| `resume-skill-pill` | Category pill base style |
| `resume-skill-pill--active` | Active/hovered state modifier |
| `resume-skill-badge` | Circular count badge inside pill |
| `resume-skill-expand` | Collapsible wrapper (`max-height: 0` → open) |
| `resume-skill-expand--open` | Open state modifier |
| `resume-skill-expand-inner` | Inner flex-wrap container for chips + category label |
| `resume-skill-expand-label` | Small uppercase category label inside expand panel |

The existing `.resume-skill-chip` class is reused for individual skill chips inside the expand panel.

## Data

No changes to `resume.ts` — `RESUME_DATA.skillGroups` already has the category + skills structure needed. The skill count badge is derived as `group.skills.length`.

## Responsive

- Pills wrap naturally on narrow screens.
- Expand panel is full-width below the pill row on all screen sizes.
- On mobile (`hover: none`), hover listeners are ignored and tap-toggle is used instead.

## Out of scope

- Animations beyond the slide-in transition (no drag, no swipe).
- Showing all skills at once as a fallback (categories are always the entry point).
- Keyboard navigation (not in scope for this pass).
