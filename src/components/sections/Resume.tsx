import { DownloadIcon } from '../icons';
import { EXTERNAL_LINKS } from '../../config/links';
import { RESUME_DATA } from '../../config/resume';
import { SkillsSection } from './SkillsSection';
import { trackEvent } from '../../utils/analytics';

interface ResumeProps {
  isActive: boolean;
  isExiting?: boolean;
}

export function Resume({ isActive, isExiting }: ResumeProps) {
  const cls = ['resume', isActive ? 'active' : '', isExiting ? 'exiting' : '']
    .filter(Boolean).join(' ');
  return (
    <article className={cls} data-page="resume">

      <div className="resume-head">
        <h2 className="h2 article-title">Resume</h2>
      </div>

      {/* Skills */}
      <section className="resume-block">
        <p className="resume-label">Skills</p>
        <SkillsSection skillGroups={RESUME_DATA.skillGroups} />
      </section>

      {/* Experience */}
      <section className="resume-block">
        <p className="resume-label">Experience</p>
        <ol className="resume-role-list">
          {RESUME_DATA.roles.map((role, i) => (
            <li key={i} className="resume-role-item">
              <span className="resume-role-index">0{i + 1}</span>
              <div className="resume-role-body">
                <div className="resume-role-header-row">
                  <span className="resume-role-title">{role.title}</span>
                  <span className="resume-role-date">{role.display}</span>
                </div>
                <div className="resume-role-company">{role.company}</div>
                <div className="resume-role-metrics">
                  <span className="resume-role-metrics-anchor">→</span>
                  {role.metrics.map((m, j) => (
                    <span key={j}>
                      {m.label}{j < role.metrics.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
                <ul className="resume-role-bullets">
                  {role.bullets.map((bullet, k) => (
                    <li key={k}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="resume-block">
        <p className="resume-label">Education</p>
        <ol className="resume-role-list">
          {RESUME_DATA.education.map((edu, i) => (
            <li key={i} className="resume-role-item">
              <span className="resume-role-index">0{i + 1}</span>
              <div className="resume-role-body">
                <div className="resume-role-header-row">
                  <span className="resume-role-title">{edu.institution}</span>
                  <span className="resume-role-date">{edu.display}</span>
                </div>
                <div className="resume-role-company">{edu.degree}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="resume-footer">
        <a
          href={EXTERNAL_LINKS.CV}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-cv-link"
          onClick={() => trackEvent('/cv/download', 'Download CV')}
        >
          <DownloadIcon size={11} />
          <span>Download CV</span>
        </a>
      </div>

    </article>
  );
}
