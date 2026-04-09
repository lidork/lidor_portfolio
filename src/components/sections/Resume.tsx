import { DownloadIcon } from '../icons';
import { EXTERNAL_LINKS } from '../../config/links';
import { RESUME_DATA } from '../../config/resume';
import type { ResumeRole } from '../../config/resume';

interface ResumeProps {
  isActive: boolean;
}

function getTotalYearsExperience(roles: ResumeRole[]): string {
  const earliest = roles.reduce((min, r) => {
    const t = new Date(r.start).getTime();
    return t < min ? t : min;
  }, Infinity);
  const years = Math.floor((Date.now() - earliest) / (1000 * 60 * 60 * 24 * 365));
  return `${years}+`;
}

export function Resume({ isActive }: ResumeProps) {
  const allSkills = RESUME_DATA.skillGroups.flatMap(g => g.skills);
  const yearsExp = getTotalYearsExperience(RESUME_DATA.roles);

  return (
    <article className={`resume${isActive ? ' active' : ''}`} data-page="resume">

      {/* Header */}
      <div className="resume-header">
        <h2 className="h2 article-title">Resume</h2>
        <button
          className="resume-download-btn"
          type="button"
          onClick={() => window.open(EXTERNAL_LINKS.CV)}
        >
          <DownloadIcon />
          <span>Download CV</span>
        </button>
      </div>

      {/* Stats strip */}
      <div className="resume-stats-strip">
        <div className="resume-stat-tile">
          <span className="resume-stat-value">{yearsExp}</span>
          <span className="resume-stat-label">Yrs Exp</span>
        </div>
        <div className="resume-stat-tile">
          <span className="resume-stat-value">{RESUME_DATA.roles.length}</span>
          <span className="resume-stat-label">Roles</span>
        </div>
        <div className="resume-stat-tile">
          <span className="resume-stat-value">CS</span>
          <span className="resume-stat-label">Degree WIP</span>
        </div>
      </div>

      {/* Skills */}
      <div className="resume-section">
        <div className="resume-section-header">
          <span className="resume-section-label">Skills</span>
          <div className="resume-section-rule" />
        </div>
        <div className="resume-skills-list">
          {allSkills.map(skill => (
            <span key={skill} className="resume-skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="resume-section">
        <div className="resume-section-header">
          <span className="resume-section-label">Experience</span>
          <div className="resume-section-rule" />
        </div>
        <div className="resume-timeline">
          {RESUME_DATA.roles.map((role, i) => (
            <div
              key={i}
              className={`resume-timeline-item${i === RESUME_DATA.roles.length - 1 ? ' resume-timeline-item--last' : ''}`}
              style={{ '--role-accent': role.accent } as React.CSSProperties}
            >
              <div className="resume-timeline-dot" />
              <div className="resume-timeline-content">
                <div className="resume-timeline-title-row">
                  <span className="resume-timeline-title">{role.title}</span>
                  <span className="resume-timeline-date">{role.display}</span>
                </div>
                <div className="resume-timeline-company">{role.company}</div>
                <p className="resume-timeline-desc">
                  {role.bullets.join(' · ')}
                </p>
                <div className="resume-impact-strip">
                  <span className="resume-impact-label">Key Impact</span>
                  <span className="resume-impact-text">
                    {role.metrics.map((m, j) => (
                      <span key={j}>
                        {m.icon} {m.label}
                        {j < role.metrics.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="resume-section">
        <div className="resume-section-header">
          <span className="resume-section-label">Education</span>
          <div className="resume-section-rule" />
        </div>
        <div className="resume-timeline">
          {RESUME_DATA.education.map((edu, i) => (
            <div
              key={i}
              className="resume-timeline-item resume-timeline-item--last"
              style={{ '--role-accent': edu.accent } as React.CSSProperties}
            >
              <div className="resume-timeline-dot" />
              <div className="resume-timeline-content">
                <div className="resume-timeline-title-row">
                  <span className="resume-timeline-title">{edu.institution}</span>
                  <span className="resume-timeline-date">{edu.display}</span>
                </div>
                <div className="resume-timeline-company">{edu.degree}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </article>
  );
}
