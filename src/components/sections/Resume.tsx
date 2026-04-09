import { DownloadIcon } from '../icons';
import { EXTERNAL_LINKS } from '../../config/links';
import { RESUME_DATA } from '../../config/resume';
import { SkillsSection } from './SkillsSection';

interface ResumeProps {
  isActive: boolean;
}

export function Resume({ isActive }: ResumeProps) {
  return (
    <article className={`resume${isActive ? ' active' : ''}`} data-page="resume">

      {/* Header */}
      <div className="resume-header">
        <h2 className="h2 article-title">Resume</h2>
        <button
          className="resume-download-btn"
          type="button"
          onClick={() => window.open(EXTERNAL_LINKS.CV, '_blank', 'noopener,noreferrer')}
        >
          <DownloadIcon />
          <span>Download CV</span>
        </button>
      </div>

      {/* Skills */}
      <div className="resume-section">
        <div className="resume-section-header">
          <span className="resume-section-label">Skills</span>
          <div className="resume-section-rule" />
        </div>
        <SkillsSection skillGroups={RESUME_DATA.skillGroups} />
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
                <ul className="resume-timeline-bullets">
                  {role.bullets.map((bullet, k) => (
                    <li key={k}>{bullet}</li>
                  ))}
                </ul>
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
